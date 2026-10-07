// ============================================================
// Русь.нет — данные и логика
// ============================================================

// "я" — читатель, от его лица идут цитаты
var ME = { name: "Ты", nick: "@reader", avatar: "", color: "#c0392b" };

// ---------- аккаунты ----------
var users = {
  boyan: {
    name: "Боян Вещий",
    nick: "@boyan_veshchiy",
    avatar: "img/boyan.jpg",
    color: "#c9a227",
    bio: "Песнотворец. Живу прошлым. Растекаюсь мыслию по древу.",
    location: "где-то во времени",
    joined: "с незапамятных времён",
  },
  igor: {
    name: "Игорь Святославич",
    nick: "@knyaz_igor",
    avatar: "img/igor.jpg",
    color: "#c0392b",
    bio: "Князь новгород-северский. Иду на половцев. Потом расскажу, как всё прошло.",
    location: "Путивль → Дон",
    joined: "март 1185",
  },
  vsevolod: {
    name: "Всеволод Святославич",
    nick: "@bui_tur",
    avatar: "img/vsevolod.jpg",
    color: "#d35400",
    bio: "Буй тур. Брат Игоря. Куряне со мной.",
    location: "в седле",
    joined: "март 1185",
  },
  svyatoslav: {
    name: "Святослав Всеволодович",
    nick: "@velikiy_kyiv",
    avatar: "img/svyatoslav.jpg",
    color: "#8e44ad",
    bio: "Великий князь киевский. Сны вижу нехорошие. Слово у меня золотое.",
    location: "Киев",
    joined: "с давних пор",
  },
  yaroslavna: {
    name: "Ярославна",
    nick: "@plach_yaroslavny",
    avatar: "img/yaroslavna.jpg",
    color: "#2980b9",
    bio: "Жена Игоря. Жду на путивльской стене. Говорю с ветром, Днепром и солнцем.",
    location: "Путивль",
    joined: "март 1185",
  },
  konchak: {
    name: "Кончак",
    nick: "@khan_konchak",
    avatar: "img/konchak.jpg",
    color: "#16a085",
    bio: "Хан половецкий. Игорь у меня в гостях. Хороший человек, честно.",
    location: "степь",
    joined: "издавна",
  }
};

var verified = ["igor", "vsevolod", "svyatoslav", "konchak"];

// ВРЕМЕННЫЕ ЗАГОТОВКИ
var posts = [
  {
    id: 1, u: "boyan", time: "1 мая", likes: 87, reposts: 12, replies: 5,
    pinnedFor: "boyan",
    t: "Я пидор"
  },
  {
    id: 2, u: "igor", time: "1 мая", likes: 143, reposts: 21, replies: 34,
    pinnedFor: "igor",
    t: "Я тоже"
  },
  {
    id: 3, u: "vsevolod", time: "1 мая", likes: 98, reposts: 15, replies: 9,
    pinnedFor: "vsevolod",
    t: "ЫЫЫЫЫЫ"
  },
  {
    id: 4, u: "svyatoslav", time: "9 мая", likes: 178, reposts: 26, replies: 19,
    pinnedFor: "svyatoslav",
    t: "Я жертва аборта"
  },
  {
    id: 5, u: "yaroslavna", time: "11 мая", likes: 512, reposts: 134, replies: 87,
    pinnedFor: "yaroslavna",
    t: "Мне выбили зубы"
  },
  {
    id: 6, u: "konchak", time: "7 мая", likes: 154, reposts: 24, replies: 38,
    pinnedFor: "konchak",
    t: "Я сын шлюхи"
  }
];

var trends = [
  { cat: "Актуально",    tag: "#подлежит редакту",       cnt: "12,4 тыс. постов" },
  { cat: "Русь", tag: "#подлежит редакту",               cnt: "8,1 тыс. постов" },
  { cat: "Русь", tag: "#подлежит редакту",               cnt: "3,7 тыс. постов" },
  { cat: "Обсуждают",    tag: "#подлежит редакту",       cnt: "5,2 тыс. постов" },
  { cat: "Обсуждают",    tag: "#подлежит редакту",       cnt: "4,9 тыс. постов" },
  { cat: "Половцы",      tag: "#подлежит редакту",       cnt: "2,1 тыс. постов" },
  { cat: "Половцы",      tag: "#подлежит редакту,        cnt: "981 пост" }
];

var notifs = [
  { id: 1, type: "mention", icon: "Б", text: "<b>боян</b> крутой", time: "1 мая", postId: 1 },
  { id: 2, type: "reply",   icon: "💬", text: "<b>будет</b> отредачено", time: "1 мая", postId: 2 },
  { id: 3, type: "repost",  icon: "↻", text: "<b>хз</b> ", time: "1 мая", postId: 3 },
  { id: 4, type: "like",    icon: "♥", text: "<b>все будет переделанно</b> ", time: "11 мая", postId: 5 },
  { id: 5, type: "mention", icon: "С", text: "<b>Святослав</b> чето сделал хз", time: "9 мая", postId: 4 }
];

// ============================================================
// состояние
// ============================================================
var likes = {}, reposts = {};
var myPosts = [];               // мои цитаты
var filterUser = null;
var filterTag = null;
var searchQuery = "";
var currentTab = "foryou";
var profileUser = null;
var menuPostId = null;

try {
  likes = JSON.parse(localStorage.getItem("rn_likes") || "{}");
  reposts = JSON.parse(localStorage.getItem("rn_reposts") || "{}");
  myPosts = JSON.parse(localStorage.getItem("rn_myPosts") || "[]");
} catch (e) {}

function save() {
  try {
    localStorage.setItem("rn_likes", JSON.stringify(likes));
    localStorage.setItem("rn_reposts", JSON.stringify(reposts));
    localStorage.setItem("rn_myPosts", JSON.stringify(myPosts));
  } catch (e) {}
}

// ============================================================
// утилиты
// ============================================================
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fmt(text) {
  return esc(text).replace(/(#[A-Za-zА-Яа-яЁё0-9_]+)/g, '<span class="h" data-tag="$1">$1</span>');
}
function short(n) {
  if (!n) return "0";
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(".0", "") + "М";
  if (n >= 1000)    return (n / 1000).toFixed(1).replace(".0", "") + "К";
  return String(n);
}
function viewsFor(p) {
  return Math.round((p.likes * 60 + p.reposts * 240 + p.replies * 15) + 850);
}

var BADGE = '<svg class="p-badge" viewBox="0 0 24 24" fill="currentColor"><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/></svg>';

var BADGE_SM = '<svg viewBox="0 0 24 24" fill="currentColor" style="width:16px;height:16px;color:var(--link);flex-shrink:0"><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/></svg>';

function getU(key) {
  if (key === "me") return ME;
  return users[key];
}

function avatarHTML(u, cls) {
  return '<div class="' + cls + '" style="background:' + u.color + '">' +
           '<span>' + (u.name ? u.name.charAt(0) : "?") + '</span>' +
           (u.avatar ? '<img src="' + u.avatar + '" alt="" onerror="this.remove()">' : '') +
         '</div>';
}

// все посты: мои + авторские, с сортировкой по id (мои всегда сверху)
function allPosts() {
  return myPosts.concat(posts).sort(function(a, b) {
    if (a.u === "me" && b.u !== "me") return -1;
    if (a.u !== "me" && b.u === "me") return 1;
    return a.id - b.id;
  });
}

// ============================================================
// рендер поста
// ============================================================
function postHTML(p) {
  var u = getU(p.u);
  if (!u) return "";

  var liked = likes[p.id] === true;
  var rep = reposts[p.id] === true;
  var lc = p.likes + (liked ? 1 : 0);
  var rc = p.reposts + (rep ? 1 : 0);
  var badge = verified.indexOf(p.u) !== -1 ? BADGE : "";
  var isPinned = p.pinnedFor && p.pinnedFor === p.u;

  var h = '<article class="post" data-id="' + p.id + '" data-u="' + p.u + '">';
  h += '<div class="post-row">';
  h += avatarHTML(u, "p-av");
  h += '<div class="p-main">';

  // метки — ВНУТРИ колонки с текстом, рядом с аватаркой, не пересекаются с ней
  if (isPinned) {
    h += '<div class="p-pinned">' + PIN_SVG + 'Закреплено</div>';
  }
  if (p.u === "me" && p.quoteOf) {
    h += '<div class="post-quote-bar">' +
           '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>' +
           'Ты цитируешь' +
         '</div>';
  }

  h += '<div class="p-top">' +
         '<span class="p-name" data-user="' + p.u + '">' + u.name + '</span>' +
         badge +
         '<span class="p-meta">' + u.nick + ' · ' + p.time + '</span>' +
         '<span class="p-menu" data-menu="' + p.id + '">···</span>' +
       '</div>';

  h += '<div class="p-text">' + fmt(p.t) + '</div>';

  if (p.quoteOf) {
    var qp = null;
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].id === p.quoteOf) { qp = posts[i]; break; }
    }
    if (qp) {
      var qu = getU(qp.u);
      var qbadge = verified.indexOf(qp.u) !== -1 ? BADGE_SM : "";
      h += '<div class="p-quote">' +
             avatarHTML(qu, "q-av") +
             '<div class="q-body">' +
               '<div class="q-top">' +
                 '<span class="q-name">' + qu.name + '</span>' + qbadge +
                 '<span class="q-nick">' + qu.nick + ' · ' + qp.time + '</span>' +
               '</div>' +
               '<div class="q-text">' + fmt(qp.t) + '</div>' +
             '</div>' +
           '</div>';
    }
  }

  h += '<div class="p-actions">' +
         '<button class="pact pact-reply"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20.5c5.25 0 9.5-4.25 9.5-9.5S17.25 1.5 12 1.5 2.5 5.75 2.5 11c0 1.9.55 3.68 1.5 5.17L3 22l5.8-1.5c.99.32 2.07.5 3.2.5z"/></svg><span class="cnt">' + short(p.replies || 0) + '</span></button>' +
         '<button class="pact pact-repost' + (rep ? " on" : "") + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7v8a3 3 0 0 0 3 3h9"/><polyline points="14 15 17 18 14 21"/><path d="M20 17V9a3 3 0 0 0-3-3H8"/><polyline points="10 3 7 6 10 9"/></svg><span class="cnt">' + short(rc) + '</span></button>' +
         '<button class="pact pact-like' + (liked ? " on" : "") + '"><svg viewBox="0 0 24 24" fill="' + (liked ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.7"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.9A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/></svg><span class="cnt">' + short(lc) + '</span></button>' +
         '<button class="pact pact-views"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="12" width="3.5" height="9" rx="1"/><rect x="10.2" y="6" width="3.5" height="15" rx="1"/><rect x="17.5" y="9" width="3.5" height="12" rx="1"/></svg><span class="cnt">' + short(viewsFor(p)) + '</span></button>' +
         '<button class="pact pact-bookmark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.5L5 21V4a1 1 0 0 1 1-1z"/></svg></button>' +
         '<button class="pact pact-share"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v13"/><polyline points="6 9 12 3 18 9"/><path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></svg></button>' +
       '</div>';

  h += '</div>';   // p-main
  h += '</div>';   // post-row
  h += '</article>';
  return h;
}

// ============================================================
// лента
// ============================================================
function drawFeed() {
  var q = searchQuery.toLowerCase().trim();
  var out = "";
  var shown = 0;

  if (currentTab === "following" && !filterUser) {
    out = '<div class="empty"><span class="em">📜</span><b>Ты никого не читаешь</b>Зайди в "Люди" и выбери аккаунт.</div>';
    document.getElementById("feed").innerHTML = out;
    return;
  }

  var list = allPosts();
  for (var i = 0; i < list.length; i++) {
    var p = list[i];
    if (filterUser && p.u !== filterUser) continue;
    if (filterTag && p.t.toLowerCase().indexOf(filterTag.toLowerCase()) === -1) continue;
    if (q && p.t.toLowerCase().indexOf(q) === -1) {
      var uname = getU(p.u) ? getU(p.u).name.toLowerCase() : "";
      if (uname.indexOf(q) === -1) continue;
    }
    out += postHTML(p);
    shown++;
  }

  if (!shown) {
    var emptyMsg = filterTag
      ? "По тегу " + filterTag + " ничего нет."
      : "Попробуй другой запрос или сбрось фильтр.";
    out = '<div class="empty"><span class="em">🛡</span><b>Ничего не нашлось</b>' + emptyMsg + '</div>';
  }

  var feedEl = document.getElementById("feed");
  feedEl.innerHTML = out;
  bindFeed(feedEl);
  updateFilterBanner();
}

function bindFeed(root) {
  // лайки
  var lbs = root.querySelectorAll(".pact-like");
  for (var i = 0; i < lbs.length; i++) {
    lbs[i].onclick = function(e) {
      e.stopPropagation();
      var id = parseInt(this.closest(".post").getAttribute("data-id"), 10);
      if (likes[id]) delete likes[id]; else likes[id] = true;
      save();
      // анимация на цифре
      var cnt = this.querySelector(".cnt");
      if (cnt) {
        cnt.classList.remove("pop");
        void cnt.offsetWidth;
        cnt.classList.add("pop");
      }
      setTimeout(function() { redraw(id); }, 200);
    };
  }

  // репосты
  var rbs = root.querySelectorAll(".pact-repost");
  for (var j = 0; j < rbs.length; j++) {
    rbs[j].onclick = function(e) {
      e.stopPropagation();
      var id = parseInt(this.closest(".post").getAttribute("data-id"), 10);
      if (reposts[id]) delete reposts[id]; else reposts[id] = true;
      save();
      redraw(id);
    };
  }

  // меню "···"
  var menus = root.querySelectorAll(".p-menu");
  for (var m = 0; m < menus.length; m++) {
    menus[m].onclick = function(e) {
      e.stopPropagation();
      menuPostId = parseInt(this.getAttribute("data-menu"), 10);
      openOverlay("menuOverlay");
    };
  }

  // профиль по тапу на имя/аватар
  var names = root.querySelectorAll(".p-name");
  for (var n = 0; n < names.length; n++) {
    names[n].onclick = function(e) {
      e.stopPropagation();
      openProfile(this.getAttribute("data-user"));
    };
  }
  var avs = root.querySelectorAll(".p-av");
  for (var a = 0; a < avs.length; a++) {
    avs[a].onclick = function(e) {
      e.stopPropagation();
      var pid = parseInt(this.closest(".post").getAttribute("data-id"), 10);
      var post = findPost(pid);
      if (post) openProfile(post.u);
    };
  }

  // хэштеги
  var tags = root.querySelectorAll(".p-text .h, .q-text .h");
  for (var t = 0; t < tags.length; t++) {
    tags[t].onclick = function(e) {
      e.stopPropagation();
      var tag = this.getAttribute("data-tag");
      filterTag = tag;
      drawFeed();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }

  // раскрытие ответов
  var toggles = root.querySelectorAll(".replies-toggle");
  for (var tt = 0; tt < toggles.length; tt++) {
    toggles[tt].onclick = function(e) {
      e.stopPropagation();
      var pid = this.getAttribute("data-toggle");
      var el = document.getElementById("replies-" + pid);
      if (!el) return;
      el.classList.toggle("on");
      var opened = el.classList.contains("on");
      var cnt = 0;
      var p = findPost(parseInt(pid, 10));
      if (p && p.replies) cnt = p.replies.length;
      this.innerHTML = opened
        ? "💬 Скрыть ответы"
        : "💬 Показать ответы (" + cnt + ")";
    };
  }
}

function findPost(id) {
  for (var i = 0; i < posts.length; i++) if (posts[i].id === id) return posts[i];
  for (var j = 0; j < myPosts.length; j++) if (myPosts[j].id === id) return myPosts[j];
  return null;
}

function redraw(id) {
  var el = document.querySelector('.post[data-id="' + id + '"]');
  if (!el) return;
  var p = findPost(id);
  if (!p) return;
  var tmp = document.createElement("div");
  tmp.innerHTML = postHTML(p);
  var fresh = tmp.firstChild;
  el.parentNode.replaceChild(fresh, el);
  bindFeed(fresh.parentNode);
}

// ============================================================
// баннер фильтра
// ============================================================
function updateFilterBanner() {
  var el = document.getElementById("filterBanner");
  var parts = [];
  if (filterTag) parts.push("тег <b>" + filterTag + "</b>");
  if (filterUser && getU(filterUser)) parts.push("автор <b>" + getU(filterUser).name + "</b>");

  if (!parts.length) {
    el.classList.remove("on");
    el.innerHTML = "";
    return;
  }
  el.classList.add("on");
  el.innerHTML = 'Фильтр: ' + parts.join(" · ") +
    '<button class="fb-close" id="fbClear">×</button>';

  document.getElementById("fbClear").onclick = function() {
    filterTag = null;
    filterUser = null;
    drawUsers();
    drawFeed();
  };
}

// ============================================================
// аккаунты
// ============================================================
function userRowHTML(key, u) {
  var on = filterUser === key ? " on" : "";
  var badge = verified.indexOf(key) !== -1 ? BADGE_SM : "";
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
      '<div class="u-av" style="background:var(--bg-hover); color:var(--text-dim); font-size:12px;">все</div>' +
      '<div class="u-info">' +
        '<div class="u-name">Все аккаунты</div>' +
        '<div class="u-nick">сбросить фильтр</div>' +
      '</div>' +
    '</div>';

  var h = allRow;
  for (var k in users) h += userRowHTML(k, users[k]);

  var mb = document.getElementById("usersListMobile");
  var dk = document.getElementById("usersListDesktop");
  if (mb) mb.innerHTML = h;
  if (dk) dk.innerHTML = h;

  var rows = document.querySelectorAll(".user-row");
  for (var i = 0; i < rows.length; i++) {
    rows[i].onclick = function() {
      var k = this.getAttribute("data-u");
      filterUser = k ? k : null;
      filterTag = null;
      drawUsers();
      if (this.parentNode && this.parentNode.id === "usersListMobile") {
        switchView("feed");
        switchTab("foryou");
      } else {
        drawFeed();
      }
    };
  }
}

// ============================================================
// профиль
// ============================================================
function openProfile(key) {
  if (!key || !getU(key)) return;
  profileUser = key;
  renderProfile();
  switchView("profile");
  document.body.setAttribute("data-view", "profile");
}

function closeProfile() {
  profileUser = null;
  switchView("feed");
  document.body.setAttribute("data-view", "feed");
}

function renderProfile() {
  var u = getU(profileUser);
  if (!u) return;

  // считаем посты и лайки
  var userPosts = [];
  var totalLikes = 0, totalReposts = 0;
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].u === profileUser) {
      userPosts.push(posts[i]);
      totalLikes += posts[i].likes;
      totalReposts += posts[i].reposts;
    }
  }
  userPosts.sort(function(a, b) { return a.id - b.id; });

  var badge = verified.indexOf(profileUser) !== -1 ? BADGE_SM : "";
  var isReading = filterUser === profileUser;

  var h = "";
  h += '<div class="profile-back">' +
         '<button class="profile-back-btn" id="profBack"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>' +
         '<div><div class="profile-back-title">' + u.name + '</div>' +
         '<div class="profile-back-sub">' + userPosts.length + ' постов</div></div>' +
       '</div>';

  h += '<div class="profile-banner" style="--p-color:' + u.color + '"></div>';

  h += '<div class="profile-info">' +
         avatarHTML(u, "profile-av") +
         '<button class="profile-read-btn' + (isReading ? " on" : "") + '" id="profRead">' +
           (isReading ? "Читаю" : "Читать") +
         '</button>' +
         '<div class="profile-name">' + u.name + badge + '</div>' +
         '<div class="profile-nick">' + u.nick + '</div>' +
         '<div class="profile-bio">' + (u.bio || "") + '</div>' +
         '<div class="profile-meta">' +
           (u.location ? '<span>📍 ' + u.location + '</span>' : '') +
           (u.joined ? '<span>🗓 ' + u.joined + '</span>' : '') +
         '</div>' +
         '<div class="profile-stats">' +
           '<span><b>' + userPosts.length + '</b> пост</span>' +
           '<span><b>' + short(totalLikes) + '</b> лайков</span>' +
           '<span><b>' + short(totalReposts) + '</b> репостов</span>' +
         '</div>' +
       '</div>';

  // посты профиля
  if (!userPosts.length) {
    h += '<div class="empty"><span class="em">📜</span><b>Пока ничего</b>Этот персонаж ещё не опубликовал ни одного поста.</div>';
  } else {
    for (var j = 0; j < userPosts.length; j++) {
      h += postHTML(userPosts[j]);
    }
  }

  var body = document.getElementById("profileBody");
  body.innerHTML = h;
  bindFeed(body);

  document.getElementById("profBack").onclick = closeProfile;

  document.getElementById("profRead").onclick = function() {
    if (filterUser === profileUser) {
      filterUser = null;
    } else {
      filterUser = profileUser;
      filterTag = null;
    }
    drawUsers();
    drawFeed();
    closeProfile();
  };
}

// ============================================================
// уведомления
// ============================================================
function drawNotifs() {
  var h = "";
  for (var i = 0; i < notifs.length; i++) {
    var n = notifs[i];
    h += '<div class="notif" data-post="' + n.postId + '">' +
           '<div class="n-icon ' + n.type + '">' + n.icon + '</div>' +
           '<div class="n-body">' +
             '<div class="n-text">' + n.text + '</div>' +
             '<div class="n-time">' + n.time + '</div>' +
           '</div>' +
         '</div>';
  }
  if (!h) h = '<div class="empty"><span class="em">🔔</span><b>Тишина в эфире</b>Пока никаких событий.</div>';

  var el = document.getElementById("notifList");
  el.innerHTML = h;

  var items = el.querySelectorAll(".notif");
  for (var j = 0; j < items.length; j++) {
    items[j].onclick = function() {
      var pid = parseInt(this.getAttribute("data-post"), 10);
      closeProfile();
      switchView("feed");
      switchTab("foryou");
      setTimeout(function() {
        var target = document.querySelector('.post[data-id="' + pid + '"]');
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
          target.classList.add("flash");
          setTimeout(function() { target.classList.remove("flash"); }, 1600);
        }
      }, 150);
    };
  }
}

function updateNotifBadge() {
  var el = document.getElementById("notifBadge");
  if (!el) return;
  var count = notifs.length;
  if (count > 0) {
    el.textContent = count;
    el.classList.remove("hidden");
  } else {
    el.classList.add("hidden");
  }
}

// ============================================================
// тренды
// ============================================================
function drawTrends() {
  var h = "";
  for (var i = 0; i < trends.length; i++) {
    var t = trends[i];
    h += '<div class="trend" data-tag="' + t.tag + '">' +
           '<div class="cat">' + t.cat + '</div>' +
           '<div class="tag">' + t.tag + '</div>' +
           '<div class="cnt">' + t.cnt + '</div>' +
         '</div>';
  }
  var m = document.getElementById("trendsMobile");
  var d = document.getElementById("trendsDesktop");
  if (m) m.innerHTML = h;
  if (d) d.innerHTML = h;

  var all = document.querySelectorAll(".trend");
  for (var j = 0; j < all.length; j++) {
    all[j].onclick = function() {
      filterTag = this.getAttribute("data-tag");
      filterUser = null;
      drawUsers();
      switchView("feed");
      switchTab("foryou");
      drawFeed();
    };
  }
}

// ============================================================
// переключение вкладок
// ============================================================
function switchTab(name) {
  currentTab = name;
  var tabs = document.querySelectorAll("#topTabs .tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.toggle("on", tabs[i].getAttribute("data-tab") === name);
  }
  drawFeed();
  updateFeedTitle();
}

function updateFeedTitle() {
  var t = "Лента";
  if (filterUser && getU(filterUser)) t = getU(filterUser).name;
  if (filterTag) t = filterTag;
  if (searchQuery.trim()) t = "Поиск: " + searchQuery.trim();
  var el = document.getElementById("feedTitle");
  if (el) el.textContent = t;
}

function switchView(name) {
  var views = document.querySelectorAll(".view");
  for (var i = 0; i < views.length; i++) views[i].classList.remove("on");

  var map = { feed: "viewFeed", notifs: "viewNotifs", accounts: "viewAccounts", about: "viewAbout", profile: "viewProfile" };
  var el = document.getElementById(map[name]);
  if (el) el.classList.add("on");

  var btns = document.querySelectorAll("#bottomNav .bn-btn");
  for (var j = 0; j < btns.length; j++) {
    btns[j].classList.toggle("on", btns[j].getAttribute("data-view") === name);
  }

  if (name !== "profile") {
    document.body.setAttribute("data-view", name);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// табы
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
    switchView(v);
    if (v === "feed") switchTab("foryou");
  };
}

// ============================================================
// тема
// ============================================================
var themeBtn = document.getElementById("themeBtn");
themeBtn.onclick = function() {
  var cur = document.body.getAttribute("data-theme");
  var next = cur === "light" ? "dark" : "light";
  document.body.setAttribute("data-theme", next);
  try { localStorage.setItem("rn_theme", next); } catch (e) {}
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", next === "light" ? "#ffffff" : "#000000");
};

// подгружаем тему
try {
  var savedTheme = localStorage.getItem("rn_theme");
  if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
    var meta2 = document.querySelector('meta[name="theme-color"]');
    if (meta2) meta2.setAttribute("content", savedTheme === "light" ? "#ffffff" : "#000000");
  }
} catch (e) {}

// ============================================================
// модалки
// ============================================================
function openOverlay(id) {
  document.getElementById(id).classList.add("on");
}
function closeOverlay(id) {
  document.getElementById(id).classList.remove("on");
}

// клик по фону закрывает
var overlays = document.querySelectorAll(".overlay");
for (var oi = 0; oi < overlays.length; oi++) {
  overlays[oi].addEventListener("click", function(e) {
    if (e.target === this) this.classList.remove("on");
  });
}

// меню "···"
var menuItems = document.querySelectorAll("#menuSheet .menu-item");
for (var mi = 0; mi < menuItems.length; mi++) {
  menuItems[mi].onclick = function() {
    var action = this.getAttribute("data-action");
    var pid = menuPostId;
    closeOverlay("menuOverlay");

    if (action === "quote") {
      if (!pid) return;
      openQuote(pid);
    } else if (action === "copy") {
      var p = findPost(pid);
      if (p) {
        navigator.clipboard && navigator.clipboard.writeText(p.t);
        toast("Текст скопирован");
      }
    } else if (action === "report") {
      toast("Жалоба отправлена в Киев");
    }
  };
}

// цитата
var quoteTargetId = null;
function openQuote(pid) {
  quoteTargetId = pid;
  document.getElementById("quoteText").value = "";
  openOverlay("quoteOverlay");
}

document.getElementById("quoteCancel").onclick = function() {
  closeOverlay("quoteOverlay");
};

document.getElementById("quoteSend").onclick = function() {
  var text = document.getElementById("quoteText").value.trim();
  if (!text) { toast("Напиши хоть что-нибудь"); return; }
  var newId = Date.now();
  myPosts.unshift({
    id: newId,
    u: "me",
    time: "только что",
    likes: 0,
    reposts: 0,
    replies: 0,
    t: text,
    quoteOf: quoteTargetId
  });
  save();
  closeOverlay("quoteOverlay");
  filterUser = null;
  filterTag = null;
  drawUsers();
  switchView("feed");
  switchTab("foryou");
  drawFeed();
  window.scrollTo({ top: 0, behavior: "smooth" });
  toast("Опубликовано");
};

// ============================================================
// confirm
// ============================================================
var confirmCb = null;
function showConfirm(title, text, cb) {
  document.getElementById("confirmTitle").textContent = title;
  document.getElementById("confirmText").textContent = text;
  confirmCb = cb;
  openOverlay("confirmOverlay");
}
document.getElementById("confirmNo").onclick = function() {
  closeOverlay("confirmOverlay");
  confirmCb = null;
};
document.getElementById("confirmYes").onclick = function() {
  closeOverlay("confirmOverlay");
  if (confirmCb) confirmCb();
  confirmCb = null;
};

document.getElementById("resetBtn").onclick = function() {
  showConfirm("Сбросить?", "все твои лайки и репосты обнулятся ", function() {
    likes = {};
    reposts = {};
    save();
    drawFeed();
    toast("Сброшено");
  });
};

// ============================================================
// тост
// ============================================================
var toastTimer = null;
function toast(msg) {
  var el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { el.classList.remove("on"); }, 1800);
}

// ============================================================
// поиск
// ============================================================
var searchEl = document.getElementById("search");
if (searchEl) {
  searchEl.oninput = function() {
    searchQuery = this.value;
    drawFeed();
    updateFeedTitle();
  };
}

// ============================================================
// прочее
// ============================================================
document.getElementById("fabBtn").onclick = function() {
  toast("нахуя тебе писать че-то");
};

document.getElementById("addBtn").onclick = function() {
  toast("не доделал еще");
};

// клавиша Esc закрывает модалки
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    var op = document.querySelectorAll(".overlay.on");
    for (var i = 0; i < op.length; i++) op[i].classList.remove("on");
  }
});

// ============================================================
// старт
// ============================================================
drawUsers();
drawFeed();
drawTrends();
drawNotifs();
updateNotifBadge();