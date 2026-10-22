/**
 * とちぎ移住サポートナビ 2026 (β版)
 * サーバーレス完全対応 フロントエンド制御スクリプト
 * 10サイクルUI見直し・自律ハイブリッドアーキテクチャ
 */

// グローバルデータと状態管理
let appData = null;
let currentGroupFilter = 'all';
let currentAreaFilter = 'all';
let currentSearchQuery = '';

// 診断クイズの状態
let quizStep = 0;
let userAnswers = {};

// 支援金シミュレーターの状態
let simHousehold = 'family'; // 'family' | 'single'
let simChildren = 0;         // 0, 1, 2, 3

// 初期読み込み
document.addEventListener('DOMContentLoaded', async () => {
  await initData();
  setupEventListeners();
  updateSimulator();
});

/**
 * データのロード（サーバーレス自律ハイブリッド）
 * window.TOCHIGI_IJU_DATA があれば0秒即時ロード、APIがあれば非同期同期
 */
async function initData() {
  // 1. 静的埋め込みデータが利用可能なら即時描画（Vercel等の静的ホスティング完全対応）
  if (window.TOCHIGI_IJU_DATA) {
    appData = window.TOCHIGI_IJU_DATA;
    renderMunicipalities();
    return;
  }

  // 2. ローカルサーバー環境等でAPIが存在する場合はフェッチ
  try {
    const res = await fetch('/api/data');
    if (res.ok) {
      appData = await res.json();
      renderMunicipalities();
    }
  } catch (err) {
    console.warn('API fetch skipped or offline, waiting for data script', err);
  }
}

/**
 * イベントリスナー登録
 */
function setupEventListeners() {
  const searchInput = document.getElementById('keyword-search');
  const clearBtn = document.getElementById('search-clear-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        if (currentSearchQuery) {
          clearBtn.classList.remove('hidden');
        } else {
          clearBtn.classList.add('hidden');
        }
      }
      renderMunicipalities();
    });
  }

  // ESCキーで全モーダルを閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDiagnosisModal();
      closeDetailModal();
      closeLineModal();
    }
  });
}

/**
 * 検索クリア
 */
function clearSearch() {
  const searchInput = document.getElementById('keyword-search');
  const clearBtn = document.getElementById('search-clear-btn');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.classList.add('hidden');
  currentSearchQuery = '';
  renderMunicipalities();
}

/**
 * 人気クイックタグで検索
 */
function setQuickTag(tag) {
  const searchInput = document.getElementById('keyword-search');
  const clearBtn = document.getElementById('search-clear-btn');
  if (searchInput) {
    searchInput.value = tag;
    currentSearchQuery = tag.toLowerCase();
    if (clearBtn) clearBtn.classList.remove('hidden');
    renderMunicipalities();
    
    // 市町一覧セクションへスムーズスクロール
    const section = document.getElementById('cities-section');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * 市町一覧のフィルタリングとレンダリング
 */
function renderMunicipalities() {
  if (!appData || !appData.municipalities) return;

  const grid = document.getElementById('municipalities-grid');
  const noResults = document.getElementById('no-results');
  const countBadge = document.getElementById('display-count');

  let filtered = appData.municipalities.filter((item) => {
    // 特長グループフィルター
    if (currentGroupFilter !== 'all' && item.group_id !== currentGroupFilter) {
      return false;
    }
    // 地域エリアフィルター
    if (currentAreaFilter !== 'all' && item.area !== currentAreaFilter) {
      return false;
    }
    // キーワード検索（部分一致）
    if (currentSearchQuery) {
      const targetStr = `${item.name} ${item.kana} ${item.catchphrase} ${item.summary} ${item.access} ${(item.tags || []).join(' ')} ${item.sub_feature || ''} ${JSON.stringify(item.support_programs)}`.toLowerCase();
      if (!targetStr.includes(currentSearchQuery)) {
        return false;
      }
    }
    return true;
  });

  if (countBadge) countBadge.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.classList.remove('hidden');
    return;
  }

  if (noResults) noResults.classList.add('hidden');

  // グループ情報マップ
  const groupMap = {};
  (appData.groups || []).forEach(g => { groupMap[g.id] = g; });

  const areaColorMap = {
    '県央': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    '県南': 'bg-blue-100 text-blue-800 border-blue-200',
    '県東': 'bg-amber-100 text-amber-800 border-amber-200',
    '県北': 'bg-purple-100 text-purple-800 border-purple-200'
  };

  const html = filtered.map((city) => {
    const group = groupMap[city.group_id] || {};
    const areaClass = areaColorMap[city.area] || 'bg-slate-100 text-slate-700';

    return `
      <div class="bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-300 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
        <div>
          <!-- 上部バッジ（エリア ＆ 特長グループ） -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full border ${areaClass}">
              ${city.area}
            </span>
            <span class="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg flex items-center gap-1">
              <span>${group.icon || '🏷️'}</span>
              <span>${group.name ? group.name.replace('グループ', '') : ''}</span>
            </span>
          </div>

          <!-- 市町名とキャッチコピー -->
          <div class="mb-3">
            <div class="flex items-baseline gap-2">
              <h3 class="text-xl sm:text-2xl font-black text-slate-800 group-hover:text-emerald-700 transition-colors">
                ${city.name}
              </h3>
              <span class="text-xs text-slate-400">${city.kana}</span>
            </div>
            <p class="text-xs font-bold text-emerald-700 mt-1 line-clamp-1">
              ${city.catchphrase}
            </p>
          </div>

          <!-- 特長サマリー -->
          <p class="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">
            ${city.summary}
          </p>

          <!-- 支援金ハイライト -->
          <div class="space-y-2 text-xs text-slate-700 mb-5">
            <div class="flex items-start gap-1.5">
              <span class="text-emerald-700 font-bold flex-shrink-0">💰 移住支援:</span>
              <span class="font-medium text-slate-800 line-clamp-1">${city.support_programs.relocation_grant.split('＋')[0]}</span>
            </div>
            <div class="flex items-start gap-1.5">
              <span class="text-blue-600 font-bold flex-shrink-0">🏡 住まい:</span>
              <span class="text-slate-600 line-clamp-1">${city.support_programs.housing_support || '各種補助制度あり'}</span>
            </div>
            <div class="flex items-start gap-1.5">
              <span class="text-amber-600 font-bold flex-shrink-0">👶 子育て:</span>
              <span class="text-slate-600 line-clamp-1">${city.support_programs.child_care || '医療費助成等あり'}</span>
            </div>
            ${city.support_programs.commute_support ? `
              <div class="flex items-start gap-1.5">
                <span class="text-indigo-600 font-bold flex-shrink-0">🚅 通勤:</span>
                <span class="text-slate-600 line-clamp-1">${city.support_programs.commute_support}</span>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- アクションボタン -->
        <div class="pt-3.5 border-t border-slate-100 flex items-center gap-2 mt-auto">
          <button onclick="openDetailModal('${city.id}')" class="flex-1 touch-target px-3.5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs sm:text-sm border border-emerald-200 flex items-center justify-center gap-1.5 btn-press transition-colors">
            <span>📖 特長・制度詳細</span>
          </button>
          <a href="${city.official_urls.migration_page}" target="_blank" rel="noopener noreferrer" class="touch-target px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-1 btn-press transition-colors" title="自治体公式移住ページへ">
            <span>公式</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      </div>
    `;
  }).join('');

  grid.innerHTML = html;
}

/**
 * フィルター切り替え
 */
function filterByGroup(groupId) {
  currentGroupFilter = groupId;
  document.querySelectorAll('.group-btn').forEach(btn => {
    if (btn.getAttribute('data-group') === groupId) {
      btn.className = 'group-btn active touch-target px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 text-white whitespace-nowrap transition-all shadow-sm';
    } else {
      btn.className = 'group-btn touch-target px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 whitespace-nowrap transition-all';
    }
  });
  renderMunicipalities();
}

function filterByArea(area) {
  currentAreaFilter = area;
  document.querySelectorAll('.area-btn').forEach(btn => {
    if (btn.getAttribute('data-area') === area) {
      btn.className = 'area-btn active px-3 py-1 rounded-lg text-xs font-bold bg-slate-800 text-white whitespace-nowrap transition-all shadow-sm';
    } else {
      btn.className = 'area-btn px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-600 whitespace-nowrap transition-all';
    }
  });
  renderMunicipalities();
}

function resetFilters() {
  currentGroupFilter = 'all';
  currentAreaFilter = 'all';
  currentSearchQuery = '';
  const searchInput = document.getElementById('keyword-search');
  const clearBtn = document.getElementById('search-clear-btn');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.classList.add('hidden');
  filterByGroup('all');
  filterByArea('all');
}

/**
 * サイクル 7: 支援金シミュレーター計算ロジック
 */
function setSimHousehold(type) {
  simHousehold = type;
  const btnFamily = document.getElementById('sim-btn-family');
  const btnSingle = document.getElementById('sim-btn-single');

  if (type === 'family') {
    btnFamily.className = 'touch-target p-3.5 rounded-xl border-2 border-emerald-600 bg-emerald-50 text-emerald-900 font-black text-xs sm:text-sm flex flex-col items-center justify-center gap-1 transition-all';
    btnSingle.className = 'touch-target p-3.5 rounded-xl border-2 border-slate-200 bg-white hover:border-slate-300 text-slate-700 font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-1 transition-all';
  } else {
    btnSingle.className = 'touch-target p-3.5 rounded-xl border-2 border-emerald-600 bg-emerald-50 text-emerald-900 font-black text-xs sm:text-sm flex flex-col items-center justify-center gap-1 transition-all';
    btnFamily.className = 'touch-target p-3.5 rounded-xl border-2 border-slate-200 bg-white hover:border-slate-300 text-slate-700 font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-1 transition-all';
  }

  updateSimulator();
}

function setSimChildren(count) {
  simChildren = count;
  document.querySelectorAll('.sim-child-btn').forEach(btn => {
    const val = parseInt(btn.getAttribute('data-child'), 10);
    if (val === count) {
      btn.className = 'sim-child-btn flex-1 py-2.5 rounded-xl border-2 border-emerald-600 bg-emerald-50 text-emerald-900 font-black text-xs';
    } else {
      btn.className = 'sim-child-btn flex-1 py-2.5 rounded-xl border-2 border-slate-200 bg-white text-slate-700 font-bold text-xs';
    }
  });

  updateSimulator();
}

function updateSimulator() {
  const baseAmount = simHousehold === 'family' ? 100 : 60;
  const childAmount = simHousehold === 'family' ? (simChildren * 100) : 0;
  const totalAmount = baseAmount + childAmount;

  const resultAmountEl = document.getElementById('sim-result-amount');
  const breakdownEl = document.getElementById('sim-result-breakdown');

  if (resultAmountEl) {
    resultAmountEl.textContent = totalAmount;
  }

  if (breakdownEl) {
    if (simHousehold === 'family') {
      breakdownEl.textContent = `基本世帯支援金: 100万円 ＋ 子育て加算(${simChildren}人): ${childAmount}万円`;
    } else {
      breakdownEl.textContent = `単身移住支援金: 60万円（※子育て加算は2人以上の世帯が対象です）`;
    }
  }
}

/**
 * サイクル 3: おすすめ市町診断機能（4ステップ）
 */
function openDiagnosisModal() {
  quizStep = 0;
  userAnswers = {};
  const modal = document.getElementById('diagnosis-modal');
  if (modal) modal.classList.remove('hidden');
  renderQuizStep();
}

function closeDiagnosisModal() {
  const modal = document.getElementById('diagnosis-modal');
  if (modal) modal.classList.add('hidden');
}

function renderQuizStep() {
  if (!appData || !appData.diagnosis_questions) return;
  const questions = appData.diagnosis_questions;
  const container = document.getElementById('quiz-content');
  const progressBar = document.getElementById('quiz-progress-bar');

  // 全問回答完了時 ➔ 結果生成
  if (quizStep >= questions.length) {
    finishDiagnosis();
    return;
  }

  const q = questions[quizStep];
  const progressPercent = Math.round(((quizStep + 1) / questions.length) * 100);
  if (progressBar) progressBar.style.width = `${progressPercent}%`;

  const html = `
    <div>
      <div class="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
        <span>質問 ${quizStep + 1} / ${questions.length}</span>
        <span class="text-emerald-700 font-num font-black">${progressPercent}% 完了</span>
      </div>
      <h4 class="text-base sm:text-lg font-black text-slate-800 leading-snug mb-1">
        ${q.question}
      </h4>
      <p class="text-xs text-slate-500 mb-5">${q.subtext}</p>

      <div class="space-y-2.5">
        ${q.options.map((opt, idx) => `
          <button onclick="handleQuizAnswer('${q.id}', '${opt.value}')" 
                  class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 bg-white text-slate-700 font-bold text-xs sm:text-sm flex items-center justify-between touch-target btn-press transition-all group">
            <div class="flex items-center gap-3">
              <span class="w-7 h-7 rounded-xl bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center text-xs font-black transition-colors">
                ${['A', 'B', 'C', 'D', 'E'][idx]}
              </span>
              <span>${opt.label}</span>
            </div>
            <svg class="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
          </button>
        `).join('')}
      </div>

      ${quizStep > 0 ? `
        <div class="mt-5 pt-4 border-t border-slate-100 flex justify-start">
          <button onclick="prevQuizStep()" class="text-xs text-slate-500 hover:text-slate-800 font-bold flex items-center gap-1 touch-target">
            ← 前の質問に戻る
          </button>
        </div>
      ` : ''}
    </div>
  `;

  if (container) container.innerHTML = html;
}

function handleQuizAnswer(questionId, value) {
  userAnswers[questionId] = value;
  quizStep++;
  renderQuizStep();
}

function prevQuizStep() {
  if (quizStep > 0) {
    quizStep--;
    renderQuizStep();
  }
}

/**
 * サイクル 4: 診断完了処理と結果バナー描画（完全クライアントサイド実行）
 */
function finishDiagnosis() {
  closeDiagnosisModal();

  if (!appData || !appData.groups || !appData.municipalities) return;

  const groupScores = {};
  appData.groups.forEach(g => { groupScores[g.id] = 0; });

  (appData.diagnosis_questions || []).forEach(q => {
    const ans = userAnswers[q.id];
    const opt = (q.options || []).find(o => o.value === ans);
    if (opt && opt.target_groups) {
      opt.target_groups.forEach(tg => {
        if (groupScores[tg] !== undefined) {
          groupScores[tg] += (q.id === 'q2' ? 2 : 1);
        }
      });
    }
  });

  const sorted = Object.entries(groupScores).sort((a, b) => b[1] - a[1]);
  const topGroupId = sorted.length > 0 ? sorted[0][0] : 'urban_commute';
  const topGroup = appData.groups.find(g => g.id === topGroupId) || appData.groups[0];
  const cities = appData.municipalities.filter(m => m.group_id === topGroupId);

  const diagnosisResult = {
    top_group: topGroup,
    recommended_municipalities: cities,
    all_scores: groupScores
  };

  renderDiagnosisBanner(diagnosisResult);
}

function renderDiagnosisBanner(result) {
  const container = document.getElementById('diagnosis-result-container');
  if (!container || !result) return;

  const group = result.top_group;
  const cities = result.recommended_municipalities || [];

  const html = `
    <div class="bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-300 border border-emerald-500/30">
      
      <!-- 背景装飾ブラー -->
      <div class="absolute -right-10 -bottom-10 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-emerald-100 text-xs font-bold backdrop-blur-sm">
            <span>🎯</span> あなたへの診断結果
          </div>
          <button onclick="openDiagnosisModal()" class="touch-target px-3.5 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors">
            もう一度診断する
          </button>
        </div>

        <div class="flex items-center gap-3 mb-3">
          <span class="text-3xl sm:text-4xl">${group.icon || '🏡'}</span>
          <div>
            <h3 class="text-xl sm:text-3xl font-black tracking-tight text-white">
              おすすめグループ: 『${group.name}』
            </h3>
            <p class="text-xs sm:text-sm text-emerald-200 font-bold mt-0.5">${group.tagline}</p>
          </div>
        </div>

        <p class="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-6 max-w-3xl">
          ${group.description}
        </p>

        <!-- 市町別こだわり案内 -->
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-amber-300 text-lg">💡</span>
            <h4 class="font-black text-sm sm:text-base text-white">
              あなたのこだわりに応える市町別の特長＆おすすめ案内
            </h4>
          </div>

          <div class="space-y-3">
            ${cities.map(city => `
              <div class="bg-white text-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <div class="flex-1">
                  <div class="flex items-center gap-2 flex-wrap mb-1">
                    <span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      ${city.area}
                    </span>
                    <h5 class="font-black text-base sm:text-lg text-slate-900">
                      ${city.name}
                    </h5>
                    <span class="text-xs text-slate-400">${city.kana}</span>
                  </div>
                  <!-- 細分化テキスト -->
                  <div class="text-xs sm:text-sm font-bold text-emerald-800 flex items-start gap-1">
                    <span class="text-amber-500 font-black">👉</span>
                    <span>さらに「<span class="text-emerald-700 underline decoration-emerald-400 decoration-2">${city.sub_feature}</span>」</span>
                  </div>
                  <p class="text-xs text-slate-600 mt-1 line-clamp-1">
                    💰 移住支援金: ${city.support_programs.relocation_grant.split('＋')[0]}
                  </p>
                </div>

                <div class="flex items-center gap-2 w-full md:w-auto flex-shrink-0">
                  <button onclick="openDetailModal('${city.id}')" class="flex-1 md:flex-initial touch-target px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors">
                    詳細を見る
                  </button>
                  <a href="${city.official_urls.migration_page}" target="_blank" rel="noopener noreferrer" class="touch-target px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 transition-colors">
                    <span>公式HP</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="mt-4 flex justify-end">
          <button onclick="document.getElementById('diagnosis-result-container').classList.add('hidden')" class="text-xs text-emerald-200 hover:text-white underline">
            診断結果を閉じる
          </button>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
  container.classList.remove('hidden');
  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * サイクル 6: 市町詳細モーダルの表示
 */
function openDetailModal(cityId) {
  if (!appData || !appData.municipalities) return;
  const city = appData.municipalities.find(m => m.id === cityId);
  if (!city) return;

  const groupMap = {};
  (appData.groups || []).forEach(g => { groupMap[g.id] = g; });
  const group = groupMap[city.group_id] || {};

  document.getElementById('modal-area-badge').textContent = city.area;
  document.getElementById('modal-group-badge').textContent = group.name || '';
  document.getElementById('modal-city-name').textContent = city.name;
  document.getElementById('modal-city-kana').textContent = city.kana;
  document.getElementById('modal-catchphrase').textContent = `“ ${city.catchphrase} ”`;
  document.getElementById('modal-summary').textContent = city.summary;
  document.getElementById('modal-access').textContent = city.access;
  document.getElementById('modal-contact').textContent = city.contact;

  document.getElementById('modal-link-migration').href = city.official_urls.migration_page;
  document.getElementById('modal-link-city').href = city.official_urls.city_home;

  const supportList = document.getElementById('modal-support-list');
  const sp = city.support_programs;

  const items = [
    { title: '栃木県・市町連携 移住支援金', value: sp.relocation_grant, icon: '💰', color: 'border-l-4 border-emerald-500' },
    { title: '住宅取得・リフォーム補助', value: sp.housing_support, icon: '🏡', color: 'border-l-4 border-blue-500' },
    { title: '子育て・子ども医療費助成', value: sp.child_care, icon: '👶', color: 'border-l-4 border-amber-500' },
    sp.commute_support ? { title: '新幹線・通勤定期補助', value: sp.commute_support, icon: '🚅', color: 'border-l-4 border-indigo-500' } : null,
    sp.trial_living ? { title: 'お試し移住・暮らし体験', value: sp.trial_living, icon: '🏕️', color: 'border-l-4 border-teal-500' } : null,
    sp.work_support ? { title: '就業・起業・就農支援', value: sp.work_support, icon: '💼', color: 'border-l-4 border-purple-500' } : null
  ].filter(Boolean);

  supportList.innerHTML = items.map(item => `
    <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 ${item.color}">
      <div class="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1">
        <span>${item.icon}</span>
        <span>${item.title}</span>
      </div>
      <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
        ${item.value}
      </p>
    </div>
  `).join('');

  const modal = document.getElementById('detail-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeDetailModal() {
  const modal = document.getElementById('detail-modal');
  if (modal) modal.classList.add('hidden');
}

/**
 * サイクル 10: 公式LINE移住相談モーダル
 */
function openLineModal() {
  const modal = document.getElementById('line-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeLineModal() {
  const modal = document.getElementById('line-modal');
  if (modal) modal.classList.add('hidden');
}
