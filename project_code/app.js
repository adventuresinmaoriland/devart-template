// Tāpiritia — Te Reo Sentence Extender App
// App logic: view management, learn, and practice modes

const App = (() => {

  // --- State ---
  const state = {
    currentView: 'home',
    practiceQueue: [],
    practiceIndex: 0,
    score: { good: 0, total: 0 },
    revealed: false
  };

  // --- View Management ---

  function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
      target.classList.add('active');
      target.scrollTop = 0;
      state.currentView = viewId;
    }
    if (viewId === 'learn') renderLearnView();
  }

  // --- Helpers ---

  function getExtenderById(id) {
    return EXTENDERS.find(e => e.id === id);
  }

  function getCategoryStyle(categoryId) {
    const cat = CATEGORIES[categoryId];
    return cat ? `color: ${cat.color}; background: ${cat.bg};` : '';
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Wrap the extension part of a sentence in a highlight span
  function highlightExtension(full, base, extension) {
    const idx = full.indexOf(extension);
    if (idx === -1) return escHtml(full);
    return escHtml(full.slice(0, idx)) +
      `<span class="example-extension">${escHtml(extension)}</span>` +
      escHtml(full.slice(idx + extension.length));
  }

  function escHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // --- LEARN VIEW ---

  function renderLearnView() {
    const grid = document.getElementById('extender-grid');
    if (!grid) return;
    grid.innerHTML = EXTENDERS.map(ext => {
      const cat = CATEGORIES[ext.category];
      const style = cat
        ? `background: ${cat.bg}; color: ${cat.color};`
        : '';
      return `
        <button class="extender-card" onclick="App.showDetail('${ext.id}')">
          <div class="extender-badge" style="${style}">
            ${escHtml(ext.word)}
          </div>
          <div class="extender-info">
            <div class="extender-word">${escHtml(ext.word)}</div>
            <div class="extender-function" style="color: ${cat ? cat.color : 'inherit'}">
              ${escHtml(cat ? cat.label : ext.function)}
            </div>
            <div class="extender-meaning">${escHtml(ext.meaning)}</div>
          </div>
          <span class="extender-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </span>
        </button>
      `;
    }).join('');
  }

  // --- EXTENDER DETAIL VIEW ---

  function showDetail(extenderId) {
    const ext = getExtenderById(extenderId);
    if (!ext) return;

    const cat = CATEGORIES[ext.category];
    const heroStyle = cat
      ? `background: ${cat.bg}; color: ${cat.color};`
      : 'background: var(--primary-light); color: var(--primary);';

    // Build examples HTML
    const examplesHtml = ext.examples.map(ex => `
      <div class="example-item">
        <div class="example-base">${escHtml(ex.base)} — <em>${escHtml(ex.baseTranslation)}</em></div>
        <div class="example-full">${highlightExtension(ex.full, ex.base, ex.extension)}</div>
        <div class="example-translation">${escHtml(ex.translation)}</div>
      </div>
    `).join('');

    document.getElementById('detail-nav-title').textContent = ext.word;

    document.getElementById('detail-body').innerHTML = `
      <div class="detail-hero" style="${heroStyle}">
        <div class="detail-word">${escHtml(ext.word)}</div>
        <div class="detail-function-tag">${escHtml(cat ? cat.label : ext.function)}</div>
        <div class="detail-meaning">"${escHtml(ext.meaning)}"</div>
      </div>

      <div class="detail-section">
        <div class="detail-section-label">What it does</div>
        <div class="detail-explanation">${escHtml(ext.explanation)}</div>
      </div>

      <div class="detail-section">
        <div class="detail-section-label">Pattern</div>
        <div class="detail-pattern">${escHtml(ext.pattern)}</div>
        <div class="detail-tip">💡 ${escHtml(ext.tip)}</div>
      </div>

      <div class="detail-section">
        <div class="detail-section-label">Examples</div>
        <div class="examples-list">${examplesHtml}</div>
      </div>

      <button class="practice-this-btn" onclick="App.startPracticeWith('${ext.id}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        Practise with ${escHtml(ext.word)}
      </button>
    `;

    showView('detail');
  }

  // --- PRACTICE VIEW ---

  function buildPracticeQueue(filterExtenderId) {
    // Flatten all exercises, optionally filtered to one extender
    const all = [];
    PRACTICE_SENTENCES.forEach(sentence => {
      sentence.exercises.forEach(ex => {
        if (!filterExtenderId || ex.extenderId === filterExtenderId) {
          all.push({ sentence, exercise: ex });
        }
      });
    });
    return shuffle(all);
  }

  function startPractice() {
    state.practiceQueue = buildPracticeQueue(null);
    state.practiceIndex = 0;
    state.score = { good: 0, total: 0 };
    state.revealed = false;
    showView('practice');
    renderPracticeCard();
  }

  function startPracticeWith(extenderId) {
    state.practiceQueue = buildPracticeQueue(extenderId);
    state.practiceIndex = 0;
    state.score = { good: 0, total: 0 };
    state.revealed = false;
    showView('practice');
    renderPracticeCard();
  }

  function renderPracticeCard() {
    const body = document.getElementById('practice-body');
    const bar = document.getElementById('practice-progress-bar');

    const total = state.practiceQueue.length;
    const idx = state.practiceIndex;

    if (idx >= total) {
      showResults();
      return;
    }

    // Update progress bar
    const pct = total > 0 ? Math.round((idx / total) * 100) : 0;
    bar.style.width = `${pct}%`;

    const { sentence, exercise } = state.practiceQueue[idx];
    const ext = getExtenderById(exercise.extenderId);
    if (!ext) return;

    const cat = CATEGORIES[ext.category];
    const chipStyle = cat
      ? `background: ${cat.bg}; color: ${cat.color};`
      : '';

    body.innerHTML = `
      <div class="practice-card">
        <div class="practice-counter">
          ${idx + 1} of ${total}
        </div>

        <div class="practice-base-block">
          <div class="practice-base-label">Base sentence</div>
          <div class="practice-base-sentence">${escHtml(sentence.maori)}</div>
          <div class="practice-base-translation">${escHtml(sentence.english)}</div>
        </div>

        <div class="practice-extender-block">
          <div class="practice-extender-chip" style="${chipStyle}">
            ${escHtml(ext.word)}
          </div>
          <div class="practice-extender-info">
            <div class="practice-extender-function">${escHtml(cat ? cat.label : ext.function)}</div>
            <div class="practice-extender-meaning">${escHtml(ext.meaning)}</div>
          </div>
        </div>

        <div class="practice-prompt-block">
          <div class="practice-prompt">${escHtml(exercise.prompt)}</div>
        </div>

        <div class="practice-input-block">
          <textarea
            id="practice-input"
            class="practice-textarea"
            placeholder="Type your extended sentence here…"
            rows="3"
          ></textarea>

          <div class="practice-actions">
            <button class="btn-reveal" onclick="App.revealAnswer()">Titiro — Show answer</button>
            <button class="btn-skip" onclick="App.skipCard()">Skip</button>
          </div>

          <div id="reveal-block" class="reveal-block">
            <div class="reveal-label">He tauira — Model answer</div>
            <div class="reveal-answer">${escHtml(exercise.modelAnswer)}</div>
            <div class="reveal-translation">${escHtml(exercise.modelTranslation)}</div>

            <div class="self-rate">
              <div class="self-rate-label" style="font-size:0.8rem; color: var(--text-muted)">
                How did you go?
              </div>
              <button class="rate-btn rate-btn--good" onclick="App.rateAnswer(true)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Got it
              </button>
              <button class="rate-btn rate-btn--again" onclick="App.rateAnswer(false)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5"/>
                </svg>
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Focus textarea
    setTimeout(() => {
      const ta = document.getElementById('practice-input');
      if (ta) ta.focus();
    }, 100);
  }

  function revealAnswer() {
    const block = document.getElementById('reveal-block');
    if (block) {
      block.classList.add('visible');
      state.revealed = true;
    }
    // Hide the reveal button once shown
    const btn = document.querySelector('.btn-reveal');
    if (btn) {
      btn.disabled = true;
      btn.style.opacity = '0.4';
    }
  }

  function rateAnswer(good) {
    state.score.total++;
    if (good) state.score.good++;
    state.practiceIndex++;
    state.revealed = false;
    renderPracticeCard();
  }

  function skipCard() {
    state.practiceIndex++;
    state.revealed = false;
    renderPracticeCard();
  }

  function showResults() {
    const { good, total } = state.score;
    const pct = total > 0 ? Math.round((good / total) * 100) : 0;

    document.getElementById('results-score').innerHTML = `
      <div class="results-score-number">${good} / ${total}</div>
      <div class="results-score-label">sentences rated "got it" (${pct}%)</div>
    `;

    // Progress bar to 100%
    const bar = document.getElementById('practice-progress-bar');
    if (bar) bar.style.width = '100%';

    showView('results');
  }

  // Public API
  return {
    showView,
    showDetail,
    startPractice,
    startPracticeWith,
    revealAnswer,
    rateAnswer,
    skipCard
  };

})();

// Initialise on load
document.addEventListener('DOMContentLoaded', () => {
  App.showView('home');
});
