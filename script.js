// ============ данные ============

var users = {
  boyan:      { name: "Боян Вещий",            nick: "@boyan_veshchiy",  avatar: "img/boyan.jpg",      color: "#c9a227" },
  igor:       { name: "Игорь Святославич",      nick: "@knyaz_igor",      avatar: "img/igor.jpg",       color: "#c0392b" },
  vsevolod:   { name: "Всеволод Святославич",   nick: "@bui_tur",         avatar: "img/vsevolod.jpg",   color: "#d35400" },
  svyatoslav: { name: "Святослав Всеволодович", nick: "@velikiy_kyiv",    avatar: "img/svyatoslav.jpg", color: "#8e44ad" },
  yaroslavna: { name: "Ярославна",              nick: "@plach_yaroslavny",avatar: "img/yaroslavna.jpg", color: "#2980b9" },
  konchak:    { name: "Кончак",                 nick: "@khan_konchak",    avatar: "img/konchak.jpg",    color: "#16a085" }
};

// у кого "синяя галочка" — как в X
var verified = ["igor", "vsevolod", "svyatoslav", "konchak"];

// история обрывается на плаче Ярославны (21-й пост)
var posts = [
  { id: 1,  u: "boyan",      time: "1 мая",   likes: 87,   reposts: 12,  replies: 5,
    t: "Начинаю новую песнь. Не по замыслу Боянову, а по былинам сего времени. Игорю Святославичу посвящается. Будет длинно, не переключайтесь." },
  { id: 2,  u: "igor",       time: "1 мая",   likes: 143,  reposts: 21,  replies: 34,
    t: "Собрал дружину. Идём на половцев. Кто не с нами — тот сами знаете кто." },
  { id: 3,  u: "vsevolod",   time: "1 мая",   likes: 98,   reposts: 15,  replies: 9,
    t: "Брат позвал — седлаю. Мои куряне уже в пути, они с рождения в седле, не с колыбели даже.\n\n#поход #куряне" },
  { id: 4,  u: "igor",       time: "1 мая",   likes: 212,  reposts: 44,  replies: 78,
    t: "Взглянул на солнце — а оно какое-то не такое сегодня. Дружина шепчется, говорят затмение. Ну и что. Идём." },
  { id: 5,  u: "vsevolod",   time: "1 мая",   likes: 64,   reposts: 6,   replies: 4,
    t: "Затмение затмением, а обед по расписанию. Идём дальше, брат." },
  { id: 6,  u: "igor",       time: "2 мая",   likes: 55,   reposts: 3,   replies: 7,
    t: "Донец. Хорошо идём. Вода тёплая, кони сытые." },
  { id: 7,  u: "vsevolod",   time: "3 мая",   likes: 176,  reposts: 28,  replies: 22,
    t: "ПЕРВЫЙ БОЙ! Половцы бегут, добыча наша — красные девки половецкие, золото, паволоки. Что не так? Что не так-то?" },
  { id: 8,  u: "igor",       time: "3 мая",   likes: 121,  reposts: 17,  replies: 12,
    t: "Победа. Отдыхаем, делим добычу. Завтра решим, что дальше." },
  { id: 9,  u: "konchak",    time: "4 мая",   likes: 88,   reposts: 11,  replies: 5,
    t: "Русские пришли. Собираем всех. Гзак, ты где?\n\n#половцы" },
  { id: 10, u: "vsevolod",   time: "5 мая",   likes: 240,  reposts: 51,  replies: 30,
    t: "Второй день сечи. Стрелы летят, кони ржут, копья трещат, сабли тупятся. Я, честно говоря, в своей стихии." },
  { id: 11, u: "igor",       time: "5 мая",   likes: 190,  reposts: 33,  replies: 41,
    t: "Тяжело. Дружина редеет. Но держимся." },
  { id: 12, u: "vsevolod",   time: "6 мая",   likes: 320,  reposts: 88,  replies: 56,
    t: "Три дня сечи. Рана. Всё равно держусь. Брат, я тут." },
  { id: 13, u: "igor",       time: "7 мая",   likes: 405,  reposts: 102, replies: 189,
    t: "Плен. Не буду писать подробно. Позже." },
  { id: 14, u: "konchak",    time: "7 мая",   likes: 154,  reposts: 24,  replies: 38,
    t: "Игорь у нас. Нормальный мужик вообще-то. Поручился за него перед своими, пусть живёт. Сын мой с ним катается." },
  { id: 15, u: "boyan",      time: "8 мая",   likes: 66,   reposts: 9,   replies: 14,
    t: "Репост новости: «Игорь в плену».\n\nХм. Ну я как бы предупреждал. Хотя нет, молчал. Ладно. Пою дальше." },
  { id: 16, u: "svyatoslav", time: "9 мая",   likes: 178,  reposts: 26,  replies: 19,
    t: "Сон странный видел. Будто одевают меня в чёрное, сыплют жемчуг на грудь, нежат на кровати тисовой... Не к добру это. Что там у Игоря?" },
  { id: 17, u: "svyatoslav", time: "10 мая",  likes: 421,  reposts: 97,  replies: 64,
    t: "ЗОЛОТОЕ СЛОВО. Часть первая.\n\nКнязья, вы сами себе вредите. Игорь и Всеволод — рано вы полезли. Я же говорил. Сами себе ищете славы, а земле Русской — беду.\n\n#золотоеслово" },
  { id: 18, u: "svyatoslav", time: "10 мая",  likes: 388,  reposts: 74,  replies: 51,
    t: "ЗОЛОТОЕ СЛОВО. Часть вторая.\n\nВступите, князья, в злат стремень за обиду сего времени, за землю Русскую, за раны Игоревы, буего Святославича! Хватит междоусобиц.\n\n#золотоеслово" },
  { id: 19, u: "yaroslavna", time: "11 мая",  likes: 512,  reposts: 134, replies: 87,
    t: "Утро. Плачу. Полечу кукушкой по Дунаю, омочу рукав бобровый во Каяле-реке, оботру князю кровавые раны на теле его.\n\n#плачЯрославны" },
  { id: 20, u: "yaroslavna", time: "11 мая",  likes: 476,  reposts: 118, replies: 62,
    t: "ВЕТЕР-ВЕТРИЛО! Зачем мечешь стрелы на воинов моего лады? Мало тебе гор под облаками, кораблей на синем море? Зачем моё веселье по ковылю развеял?" },
  { id: 21, u: "yaroslavna", time: "12 мая",  likes: 698,  reposts: 201, replies: 143,
    t: "Днепр мой славный! Ты пробил каменные горы сквозь землю половецкую. Принеси мне мужа обратно, чтоб не слала я к нему слёз на море рано.\n\nПожалуйста." }
];

var trends = [
  { cat: "Актуально",    tag: "#СловооПолкуИгореве", cnt: "12,4 тыс. постов" },
  { cat: "Русь · тренд", tag: "#поход",              cnt: "8,1 тыс. постов" },
  { cat: "Русь · тренд", tag: "#затмение",           cnt: "3,7 тыс. постов" },
  { cat: "Обсуждают",    tag: "#золотоеслово",       cnt: "5,2 тыс. постов" },
  { cat: "Обсуждают",    tag: "#плачЯрославны",      cnt: "4,9 тыс. постов" },
  { cat: "Половцы",      tag: "#плен",               cnt: "2,1 тыс. постов" },
  { cat: "Половцы",      tag: "#Гзакгде",            cnt: "981 пост" }
];

// ============ состояние ============

var likes = {}, reposts = {};
var filterUser = null;
var searchQuery = "";
var currentTab = "foryou";   // foryou / following

try {
  var sl = localStorage.getItem("rn_likes");
  var sr = localStorage.getItem("rn_reposts");
  if (sl) likes = JSON.parse(sl);
  if (sr) reposts = JSON.parse(sr);
} catch (e) {}

function save() {
  try {
    localStorage.setItem("rn_likes", JSON.stringify(likes));
    localStorage.setItem("rn_reposts", JSON.stringify(reposts));
  } catch (e) {}
}

// ============ утилиты ============

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fmt(text) {
  return esc(text).replace(/(#[A-Za-zА-Яа-яЁё0-9_]+)/g, '<span class="h">$1</span>');
}
function short(n) {
  if (!n) return "0";
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(".0", "") + "М";
  if (n >= 1000)    return (n / 1000).toFixed(1).replace(".0", "") + "К";
  return String(n);
}
// фейковые просмотры — просто чтобы цифра как в X была
function viewsFor(p) {
  return Math.round((p.likes * 60 + p.reposts * 240 + p.replies * 15) + 850);
}

var BADGE_SVG = '<svg class="p-badge" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/></svg>';

function avatarHTML(u, cls) {
  return '<div class="' + cls + '" style="background:' + u.color + '">' +
           '<span>' + u.name.charAt(0) + '</span>' +
           '<img src="' + u.avatar + '" alt="" onerror="this.remove()">' +
         '</div>';
}

// ============ отрисовка поста ============

function postHTML(p) {
  var u = users[p.u];
  if (!u) return "";

  var liked = likes[p.id] === true;
  var rep = reposts[p.id] === true;
  var lc = p.likes + (liked ? 1 : 0);
  var rc = p.reposts + (rep ? 1 : 0);
  var badge = verified.indexOf(p.u) !== -1 ? BADGE_SVG : "";

  return '<article class="post" data-id="' + p.id + '">' +
    avatarHTML(u, "p-av") +
    '<div class="p-main">' +
      '<div class="p-top">' +
        '<span class="p-name">' + u.name + '</span>' +
        badge +
        '<span class="p-meta">' + u.nick + ' · ' + p.time + '</span>' +
        '<span class="p-menu">···</span>' +
      '</div>' +
      '<div class="p-text">' + fmt(p.t) + '</div>' +
      '<div class="p-actions">' +
        // ответ
        '<button class="pact pact-reply">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20.5c5.25 0 9.5-4.25 9.5-9.5S17.25 1.5 12 1.5 2.5 5.75 2.5 11c0 1.9.55 3.68 1.5 5.17L3 22l5.8-1.5c.99.32 2.07.5 3.2.5z"/></svg>' +
          '<span class="cnt">' + short(p.replies || 0) + '</span>' +
        '</button>' +
        // репост
        '<button class="pact pact-repost' + (rep ? " on" : "") + '">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7v8a3 3 0 0 0 3 3h9"/><polyline points="14 15 17 18 14 21"/><path d="M20 17V9a3 3 0 0 0-3-3H8"/><polyline points="10 3 7 6 10 9"/></svg>' +
          '<span class="cnt">' + short(rc) + '</span>' +
        '</button>' +
        // лайк
        '<button class="pact pact-like' + (liked ? " on" : "") + '">' +
          '<svg viewBox="0 0 24 24" fill="' + (liked ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.7"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.9A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/></svg>' +
          '<span class="cnt">' + short(lc) + '</span>' +
        '</button>' +
        // просмотры
        '<button class="pact pact-views">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="12" width="3.5" height="9" rx="1"/><rect x="10.2" y="6" width="3.5" height="15" rx="1"/><rect x="17.5" y="9" width="3.5" height="12" rx="1"/></svg>' +
          '<span class="cnt">' + short(viewsFor(p)) + '</span>' +
        '</button>' +
        // закладка
        '<button class="pact pact-bookmark">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.5L5 21V4a1 1 0 0 1 1-1z"/></svg>' +
        '</button>' +
        // поделиться
        '<button class="pact pact-share">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v13"/><polyline points="6 9 12 3 18 9"/><path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></svg>' +
        '</button>' +
      '</div>' +
    '</div>' +
  '</article>';
}

function bindActions(root) {
  var lb = root.querySelectorAll(".pact-like");
  var rb = root.querySelectorAll(".pact-repost");

  function toggle(store, id) {
    if (store[id]) delete store[id];
    else store[id] = true;
    save();
    redraw(id);
  }

  for (var i = 0; i < lb.length; i++) {
    lb[i].onclick = function(e) {
      e.stopPropagation();
      var id = parseInt(this.closest(".post").getAttribute("data-id"), 10);
      toggle(likes, id);
    };
  }
  for (var j = 0; j < rb.length; j++) {
    rb[j].onclick = function(e) {
      e.stopPropagation();
      var id = parseInt(this.closest(".post").getAttribute("data-id"), 10);
      toggle(reposts, id);
    };
  }
}

// ============ отрисовка ленты ============

function drawFeed() {
  var q = searchQuery.toLowerCase().trim();
  var out = "";
  var shown = 0;

  // вкладка "Вы читаете" без выбранного аккаунта — показываем заглушку
  if (currentTab === "following" && !filterUser) {
    out = '<div class="empty">Ты пока никого не выбрал.<br>Зайди в «Люди» и выбери аккаунт.</div>';
    document.getElementById("feed").innerHTML = out;
    return;
  }

  for (var i = 0; i < posts.length; i++) {
    var p = posts[i];
    if (filterUser && p.u !== filterUser) continue;
    if (q && p.t.toLowerCase().indexOf(q) === -1 &&
             users[p.u].name.toLowerCase().indexOf(q) === -1) continue;
    out += postHTML(p);
    shown++;
  }

  if (!shown) out = '<div class="empty">Ничего не нашлось.</div>';

  var feedEl = document.getElementById("feed");
  feedEl.innerHTML = out;
  bindActions(feedEl);
}

function redraw(id) {
  var el = document.querySelector('.post[data-id="' + id + '"]');
  if (!el) return;

  var p = null;
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].id === id) { p = posts[i]; break; }
  }
  if (!p) return;

  var tmp = document.createElement("div");
  tmp.innerHTML = postHTML(p);
  var fresh = tmp.firstChild;
  el.parentNode.replaceChild(fresh, el);
  bindActions(fresh);
}

// ============ аккаунты ============

function userRowHTML(key, u, withBorder) {
  var on = filterUser === key ? " on" : "";
  var badge = verified.indexOf(key) !== -1
    ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/></svg>'
    : "";

  return '<div class="user-row' + on + '" data-u="' + key + '">' +
    avatarHTML(u, "u-av") +
    '<div class="u-info">' +
      '<div class="u-name">' + u.name + badge + '</div>' +
      '<div class="u-nick">' + u.nick + '</div>' +
    '</div>' +
  '</div>';
}

function drawUsers() {
  var allRow = '<div class="user-row' + (filterUser === null ? " on" : "") + '" data-u="">' +
      '<div class="u-av" style="background:#2f3336; color:#71767b; font-size:12px;">все</div>' +
      '<div class="u-info">' +
        '<div class="u-name">Все аккаунты</div>' +
        '<div class="u-nick">сбросить фильтр</div>' +
      '</div>' +
    '</div>';

  var h = allRow;
  for (var k in users) {
    h += userRowHTML(k, users[k]);
  }

  // на мобилке — вертикальный список, на десктопе — в сайдбар
  var mb = document.getElementById("usersListMobile");
  var dk = document.getElementById("usersListDesktop");
  if (mb) mb.innerHTML = h;
  if (dk) dk.innerHTML = h;

  var rows = document.querySelectorAll(".user-row");
  for (var i = 0; i < rows.length; i++) {
    rows[i].onclick = function() {
      var k = this.getAttribute("data-u");
      filterUser = k ? k : null;
      drawUsers();

      // если кликнули из мобильного списка — переключаемся обратно на ленту
      if (this.parentNode && this.parentNode.id === "usersListMobile") {
        switchView("feed");
        switchTab("foryou");
      } else {
        drawFeed();
      }
    };
  }
}

// ============ тренды ============

function drawTrends() {
  var h = "";
  for (var i = 0; i < trends.length; i++) {
    var t = trends[i];
    h += '<div class="trend">' +
           '<div class="cat">' + t.cat + '</div>' +
           '<div class="tag">' + t.tag + '</div>' +
           '<div class="cnt">' + t.cnt + '</div>' +
         '</div>';
  }
  var m = document.getElementById("trendsMobile");
  var d = document.getElementById("trendsDesktop");
  if (m) m.innerHTML = h;
  if (d) d.innerHTML = h;
}

// ============ переключение вкладок/видов ============

function switchTab(name) {
  currentTab = name;
  var tabs = document.querySelectorAll("#topTabs .tab");
  for (var i = 0; i < tabs.length; i++) {
    if (tabs[i].getAttribute("data-tab") === name) tabs[i].classList.add("on");
    else tabs[i].classList.remove("on");
  }
  drawFeed();
  updateFeedTitle();
}

function updateFeedTitle() {
  var t = "Лента";
  if (filterUser) t = users[filterUser].name;
  if (searchQuery.trim()) t = "Поиск: " + searchQuery.trim();
  var el = document.getElementById("feedTitle");
  if (el) el.textContent = t;
}

function switchView(name) {
  // name: feed | accounts | about
  var views = document.querySelectorAll(".view");
  for (var i = 0; i < views.length; i++) views[i].classList.remove("on");

  var map = { feed: "viewFeed", accounts: "viewAccounts", about: "viewAbout" };
  var el = document.getElementById(map[name]);
  if (el) el.classList.add("on");

  // активная кнопка в нижнем меню
  var btns = document.querySelectorAll("#bottomNav .bn-btn");
  for (var j = 0; j < btns.length; j++) {
    if (btns[j].getAttribute("data-view") === name) btns[j].classList.add("on");
    else btns[j].classList.remove("on");
  }

  // скролл вверх
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// табы сверху
var topTabs = document.querySelectorAll("#topTabs .tab");
for (var ti = 0; ti < topTabs.length; ti++) {
  topTabs[ti].onclick = function() {
    switchTab(this.getAttribute("data-tab"));
    switchView("feed");
  };
}

// нижнее меню
var bnBtns = document.querySelectorAll("#bottomNav .bn-btn");
for (var bi = 0; bi < bnBtns.length; bi++) {
  bnBtns[bi].onclick = function() {
    var v = this.getAttribute("data-view");
    if (v === "search") {
      // фокусим поиск, никуда не уходим
      var s = document.getElementById("search");
      if (s) s.focus();
      // поиск у нас в шапке на мобилке отключён — просто скроллим вверх
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    switchView(v);
    if (v === "feed") switchTab("foryou");
  };
}

// сброс лайков
document.getElementById("resetBtn").onclick = function() {
  if (!confirm("Сбросить все лайки и репосты?")) return;
  likes = {};
  reposts = {};
  save();
  drawFeed();
};

// ============ старт ============
drawUsers();
drawFeed();
drawTrends();