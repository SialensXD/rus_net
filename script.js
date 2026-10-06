// ---- аккаунты ----
var users = {
  boyan:      { name: "Боян",         nick: "@boyan_veshchiy",  avatar: "img/boyan.jpg",      color: "#c9a227" },
  igor:       { name: "Игорь",   nick: "@knyaz_igor",      avatar: "img/igor.jpg",       color: "#c0392b" },
  vsevolod:   { name: "Всеволод",nick: "@bui_tur",         avatar: "img/vsevolod.jpg",   color: "#d35400" },
  svyatoslav: { name: "Святослав", nick: "@velikiy_kyiv", avatar: "img/svyatoslav.jpg", color: "#8e44ad" },
  yaroslavna: { name: "Ярославна",           nick: "@plach_yaroslavny",avatar: "img/yaroslavna.jpg", color: "#2980b9" },
  konchak:    { name: "Кончак",              nick: "@khan_konchak",    avatar: "img/konchak.jpg",    color: "#16a085" }
};

var verified = ["igor", "vsevolod", "svyatoslav", "konchak"];

// ---- посты ----
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
    t: "Днепр мой славный! Ты пробил каменные горы сквозь землю половецкую. Принеси мне мужа обратно, чтоб не слала я к нему слёз на море рано.\n\nПожалуйста." },

  { id: 22, u: "igor",       time: "14 мая",  likes: 289,  reposts: 47,  replies: 68,
    t: "Я тут. Живой. Готовлюсь кое к чему. Деталей не скажу." },

  { id: 23, u: "igor",       time: "16 мая",  likes: 892,  reposts: 267, replies: 194,
    t: "Сбежал. Птицей полетел. Кончак, без обид — но дома лучше.\n\n#побег" },

  { id: 24, u: "boyan",      time: "16 мая",  likes: 231,  reposts: 68,  replies: 27,
    t: "Слышу: земля гудит, реки мутно текут, пыль поля покрывает. Кто-то едет. Наконец-то." },

  { id: 25, u: "boyan",      time: "17 мая",  likes: 1042, reposts: 312, replies: 156,
    t: "Слава Игорю Святославичу! Слава буй туру Всеволоду! Слава Владимиру, Святославу, Олегу... Всем слава. Песнь окончена, спасибо за внимание." }
];

// ---- тренды ----
var trends = [
  { cat: "Актуально",    tag: "#СловооПолкуИгореве", cnt: "12,4 тыс. постов" },
  { cat: "Русь · тренд", tag: "#поход",              cnt: "8,1 тыс. постов" },
  { cat: "Русь · тренд", tag: "#затмение",           cnt: "3,7 тыс. постов" },
  { cat: "Обсуждают",    tag: "#золотоеслово",       cnt: "5,2 тыс. постов" },
  { cat: "Обсуждают",    tag: "#плачЯрославны",      cnt: "4,9 тыс. постов" },
  { cat: "Половцы",      tag: "#побег",              cnt: "2,3 тыс. постов" },
  { cat: "Половцы",      tag: "#Кончакреспект",      cnt: "981 пост" }
];

// ---- состояние ----
var likes = {}, reposts = {};
var filterUser = null, searchQuery = "";

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

// ---- утилиты ----
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function fmt(text) {
  return esc(text).replace(/(#[A-Za-zА-Яа-яЁё0-9_]+)/g, '<span class="h">$1</span>');
}

function short(n) {
  if (!n) return "0";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(".0", "") + "К";
  return String(n);
}

function avatarHTML(u) {
  return '<div class="avatar" style="background:' + u.color + '">' +
           '<span>' + u.name.charAt(0) + '</span>' +
           '<img src="' + u.avatar + '" alt="" onerror="this.remove()">' +
         '</div>';
}

// ---- аккаунты ----
function drawUsers() {
  var h = '<div class="user-row' + (filterUser === null ? " on" : "") + '" data-u="">' +
            '<div class="avatar" style="background:#333">все</div>' +
            '<div class="u-info"><div class="u-name">Все аккаунты</div>' +
            '<div class="u-nick">показать всех</div></div>' +
          '</div>';

  for (var k in users) {
    var u = users[k];
    var on = filterUser === k ? " on" : "";
    var b = verified.indexOf(k) !== -1 ? '<span class="u-badge">✓</span>' : "";
    h += '<div class="user-row' + on + '" data-u="' + k + '">' +
           avatarHTML(u) +
           '<div class="u-info"><div class="u-name">' + u.name + b + '</div>' +
           '<div class="u-nick">' + u.nick + '</div></div>' +
         '</div>';
  }
  document.getElementById("usersList").innerHTML = h;

  var rows = document.querySelectorAll("#usersList .user-row");
  for (var i = 0; i < rows.length; i++) {
    rows[i].onclick = function() {
        filterUser = this.getAttribute("data-u") || null;
        drawUsers();
        drawFeed();
        if (window.innerWidth <= 760) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };
  }
}

// ---- пост ----
function postHTML(p) {
  var u = users[p.u];
  var liked = likes[p.id] === true;
  var rep = reposts[p.id] === true;
  var lc = p.likes + (liked ? 1 : 0);
  var rc = p.reposts + (rep ? 1 : 0);
  var b = verified.indexOf(p.u) !== -1 ? '<span class="u-badge">✓</span>' : "";

  return '<article class="post" data-id="' + p.id + '">' +
    avatarHTML(u) +
    '<div class="post-body">' +
      '<div class="post-head">' +
        '<span class="p-name">' + u.name + b + '</span>' +
        '<span class="p-nick">' + u.nick + '</span>' +
        '<span class="p-dot">·</span>' +
        '<span class="p-time">' + p.time + '</span>' +
      '</div>' +
      '<div class="post-text">' + fmt(p.t) + '</div>' +
      '<div class="post-actions">' +
        '<button class="act act-reply"><span>💬</span><span>' + short(p.replies || 0) + '</span></button>' +
        '<button class="act act-repost' + (rep ? " on" : "") + '"><span>🔁</span><span>' + short(rc) + '</span></button>' +
        '<button class="act act-like' + (liked ? " on" : "") + '"><span>♥</span><span>' + short(lc) + '</span></button>' +
      '</div>' +
    '</div>' +
  '</article>';
}

function bindActions(root) {
  var likes_btns = root.querySelectorAll(".act-like");
  var rep_btns = root.querySelectorAll(".act-repost");

  function toggle(store, id) {
    if (store[id]) delete store[id];
    else store[id] = true;
    save();
    redraw(id);
  }

  for (var i = 0; i < likes_btns.length; i++) {
    likes_btns[i].onclick = function(e) {
      e.stopPropagation();
      var id = parseInt(this.closest(".post").getAttribute("data-id"), 10);
      toggle(likes, id);
    };
  }
  for (var j = 0; j < rep_btns.length; j++) {
    rep_btns[j].onclick = function(e) {
      e.stopPropagation();
      var id = parseInt(this.closest(".post").getAttribute("data-id"), 10);
      toggle(reposts, id);
    };
  }
}

// ---- лента ----
function drawFeed() {
  var q = searchQuery.toLowerCase().trim();
  var out = "";
  var shown = 0;

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

  var title = "Лента";
  if (filterUser) title = users[filterUser].name;
  if (q) title = "Поиск: " + searchQuery;
  document.getElementById("feedTitle").textContent = title;
}

// перерисовать только один пост
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

// ---- тренды ----
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
  document.getElementById("trends").innerHTML = h;
}

// ---- поиск и сброс ----
document.getElementById("search").oninput = function() {
  searchQuery = this.value;
  drawFeed();
};

document.getElementById("resetBtn").onclick = function() {
  if (!confirm("Сбросить все лайки и репосты?")) return;
  likes = {};
  reposts = {};
  save();
  drawFeed();
};

// ---- старт ----
drawUsers();
drawFeed();
drawTrends();