var ME = { name: "Ты", nick: "@reader", avatar: "", color: "#c0392b" };


// аккаунты персонажей. био не трогали, оставили как было
var users = {
  boyan: {
    name: "Боян Вещий",
    nick: "@boyan_veshchiy",
    avatar: "img/boyan.jpg",
    color: "#c9a227",
    bio: "Все мои песни и рассказы называют баяном💪💪",
    location: "где-то далеко",
    joined: "с незапамятных времён"
  },
  igor: {
    name: "Игорь Святославич",
    nick: "@knyaz_igor",
    avatar: "img/igor.jpg",
    color: "#c0392b",
    bio: "Князь новгород-северский. Иду на половцев. Потом расскажу, как всё прошло.",
    location: "Путивль → Дон",
    joined: "март 1185"
  },
  vsevolod: {
    name: "Всеволод Святославич",
    nick: "@bui_tur",
    avatar: "img/vsevolod.jpg",
    color: "#d35400",
    bio: "Буй тур. Брат Игоря. Я крутой😎😎😎",
    location: "Дон",
    joined: "март 1185"
  },
  svyatoslav: {
    name: "Святослав Всеволодович",
    nick: "@velikiy_kyiv",
    avatar: "img/svyatoslav.jpg",
    color: "#8e44ad",
    bio: "Сказал золотое слово, +1000 aura moment🥶🥶🥶",
    location: "Киев",
    joined: "с давних пор"
  },
  yaroslavna: {
    name: "Ярославна",
    nick: "@plach_yaroslavny",
    avatar: "img/yaroslavna.jpg",
    color: "#2980b9",
    bio: "Жена Игоря. Мой дебильный плач все никак не может выучить Влад, позорище🙄🙄",
    location: "Путивль",
    joined: "март 1185"
  },
  konchak: {
    name: "Кончак",
    nick: "@khan_konchak",
    avatar: "img/konchak.jpg",
    color: "#16a085",
    bio: "Хан половецкий. Тоже крутой, че сказать",
    location: "степь",
    joined: "издавна"
  }
};

// у кого "синяя галочка"
var verified = ["igor", "vsevolod", "svyatoslav", "konchak"];


var posts = [
  {
    id: 1, u: "boyan", time: "1 мая", likes: 87, reposts: 12, replies: 5,
    pinnedFor: "boyan",
    t: "Начинаю новую песнь. Не по замыслу Боянову, а по былинам сего времени. Игорю Святославичу посвящается. Долго будет, не переключайтесь!!1!11!!\n\n#СловооПолкуИгореве"
  },
  {
    id: 2, u: "igor", time: "1 мая", likes: 143, reposts: 21, replies: 34,
    pinnedFor: "igor",
    t: "Собрал дружину, с нами Всеволод, с ним куряне. Идём на половцев. Кто не с нами - тот под нами, ауф🐺🐺☝☝☝\n\n#поход"
  },
  {
    id: 3, u: "vsevolod", time: "1 мая", likes: 98, reposts: 15, replies: 9,
    pinnedFor: "vsevolod",
    t: "Брат позвал - седлаю. Мои куряне уже в пути. Они с колыбели в седле, не то что эти.\n\n#куряне #поход"
  },
  {
    id: 4, u: "igor", time: "1 мая", likes: 212, reposts: 44, replies: 78,
    t: "Взглянул на солнце - а оно какое-то не такое сегодня. Дружина шепчется, говорят затмение. Но нам че, полный вперед.\n\n#затмение"
  },
  {
    id: 5, u: "boyan", time: "1 мая", likes: 45, reposts: 7, replies: 3,
    t: "И вот вам сразу примета: солнце затмилось, а князь всё равно идёт. Ну-ну, посмотрим."
  },
  {
    id: 6, u: "igor", time: "2 мая", likes: 55, reposts: 3, replies: 7,
    t: "Донец. Вода теплая, кони сытые, вперед!"
  },
  {
    id: 7, u: "vsevolod", time: "3 мая", likes: 176, reposts: 28, replies: 22,
    t: "ПЕРВЫЙ БОЙ! Половцы бегут. Добыча наша - золото, паволоки, красные девки половецкие. А что не так? Что не так-то?"
  },
  {
    id: 8, u: "igor", time: "3 мая", likes: 121, reposts: 17, replies: 12,
    t: "Отдыхаем, делим добычу. Завтра решим, что дальше делать."
  },
  {
    id: 9, u: "konchak", time: "4 мая", likes: 88, reposts: 11, replies: 5,
    pinnedFor: "konchak",
    t: "Русские пришли, собираем всех. Гзак, ты где?\n\n#половцы"
  },
  {
    id: 10, u: "igor", time: "5 мая", likes: 190, reposts: 33, replies: 41,
    t: "Второй день, тяжело. Дружина редеет, но мы держимся."
  },
  {
    id: 11, u: "vsevolod", time: "5 мая", likes: 240, reposts: 51, replies: 30,
    t: "Три дня💀 Стрелы летят, кони ржут, копья трещат, сабли тупятся. Я, честно говоря, в своей стихии😎"
  },
  {
    id: 12, u: "vsevolod", time: "6 мая", likes: 320, reposts: 88, replies: 56,
    t: "Ранен... Но всё равно держусь."
  },
  {
    id: 13, u: "igor", time: "7 мая", likes: 405, reposts: 102, replies: 189,
    t: "Меня в плен тащат, хеееелп😭😭"
  },
  {
    id: 14, u: "konchak", time: "7 мая", likes: 154, reposts: 24, replies: 38,
    t: "Игорь у нас. Ждем откуп, реквизиты сбера: 1234 5678 9101 1121"
  },
  {
    id: 15, u: "boyan", time: "8 мая", likes: 66, reposts: 9, replies: 14,
    t: "Не слышал, чтоб дружина так шла в степь без оглядки. Ну, теперь слышал."
  },
  {
    id: 16, u: "svyatoslav", time: "9 мая", likes: 178, reposts: 26, replies: 19,
    t: "Сон видел оч странный. Будто одевают меня в чёрное, сыплют жемчуг на грудь… Не к добру. Что там у Игоря?🤔"
  },

  // ======== ЗОЛОТОЕ СЛОВО - девять частей ========
  {
    id: 17, u: "svyatoslav", time: "10 мая", likes: 421, reposts: 97, replies: 64,
    pinnedFor: "svyatoslav",
    t: "ЗОЛОТОЕ СЛОВО.\n\nЧасть первая.\n\nО сыны, не ждал я зла такого!\nЗагубили юность вы свою,\nНа врага не во-время напали,\nНе с великой честию в бою\nВражью кровь на землю проливали.\n\n#золотоеслово"
  },
  {
    id: 18, u: "svyatoslav", time: "10 мая", likes: 386, reposts: 82, replies: 51,
    t: "ЗОЛОТОЕ СЛОВО.\n\nЧасть вторая.\n\nВаше сердце в кованой броне\nЗакалилось в буйстве самочинном.\nЧто ж вы, дети, натворили мне\nИ моим серебряным сединам?\n\nГде мой брат, мой грозный Ярослав,\nГде его черниговские слуги,\nГде татраны, жители дубрав,\nТопчаки, ольберы и ревуги?\n\n#золотоеслово"
  },
  {
    id: 19, u: "svyatoslav", time: "10 мая", likes: 358, reposts: 71, replies: 43,
    t: "ЗОЛОТОЕ СЛОВО.\n\nЧасть третья.\n\nА ведь было время - без щитов,\nВыхватив ножи из голенища,\nШли они на полчища врагов,\nЧтоб отмстить за наши пепелища.\n\nВот где славы прадедовской гром!\nВы ж решили бить наудалую:\n«Нашу славу силой мы возьмём,\nА за ней поделим и былую».\n\nДиво ль старцу - мне помолодеть?\nСтарый сокол, хоть и слаб он с виду,\nВысоко заставит птиц лететь,\nНикому не даст гнезда в обиду.\n\n#золотоеслово"
  },
  {
    id: 20, u: "svyatoslav", time: "10 мая", likes: 344, reposts: 68, replies: 39,
    t: "ЗОЛОТОЕ СЛОВО.\n\nЧасть четвёртая.\n\nДа князья помочь мне не хотят,\nМало толку в силе молодецкой.\nВремя, что ли, двинулось назад?\nВедь под самым Римовым кричат\nРусичи под саблей половецкой!\n\nИ Владимир в ранах, чуть живой, -\nГоре князю в сече боевой!\n\nКнязь великий Всеволод! Доколе\nМуки нам великие терпеть?\nНе тебе ль на суздальском престоле\nО престоле отчем порадеть?\nТы и Волгу вёслами расплещешь,\nТы шеломом вычерпаешь Дон,\nИз живых ты луков стрелы мечешь,\nСыновьями Глеба окружён.\n\n#золотоеслово"
  },
  {
    id: 21, u: "svyatoslav", time: "10 мая", likes: 312, reposts: 59, replies: 34,
    t: "ЗОЛОТОЕ СЛОВО.\n\nЧасть пятая.\n\nЕсли б ты привёл на помощь рати,\nЧтоб врага не выпустить из рук, -\nПродавали б девок по ногате,\nА рабов - по резани на круг.\n\nВы, князья буй-Рюрик и Давид!\nСмолкли ваши воинские громы.\nА не ваши ль плавали в крови\nЗолотом покрытые шеломы?\nИ не ваши ль храбрые полки\nРыкают, как туры, умирая\nОт калёной сабли, от руки\nРатника неведомого края?\n\nВстаньте, государи, в злат-стремень\nЗа обиду в этот чёрный день,\nЗа Русскую землю,\nЗа Игоревы раны -\nУдалого сына Святославича!\n\n#золотоеслово"
  },
  {
    id: 22, u: "svyatoslav", time: "10 мая", likes: 298, reposts: 54, replies: 31,
    t: "ЗОЛОТОЕ СЛОВО.\n\nЧасть шестая.\n\nЯрослав, князь галицкий! Твой град\nВысоко стоит под облаками.\nОседлал вершины ты Карпат\nИ подпёр железными полками.\nНа своём престоле золотом\nВосемь дел ты, князь, решаешь разом,\nИ народ зовёт тебя кругом\nОсмомыслом - за великий разум.\n\nДверь Дуная заперев на ключ,\nКоролю дорогу заступая,\nБремена ты мечешь выше туч,\nСуд вершишь до самого Дуная.\nВласть твоя по землям потекла,\nВ Киевские входишь ты пределы,\nИ в салтанов с отчего стола\nТы пускаешь княжеские стрелы.\n\nТак стреляй в Кончака, государь,\nС дальних гор на ворога ударь -\nЗа Русскую землю,\nЗа Игоревы раны -\nУдалого сына Святославича!\n\n#золотоеслово"
  },
  {
    id: 23, u: "svyatoslav", time: "10 мая", likes: 287, reposts: 51, replies: 28,
    t: "ЗОЛОТОЕ СЛОВО.\n\nЧасть седьмая.\n\nВы, князья Мстислав и буй-Роман!\nМчит ваш ум на подвиг мысль живая.\nИ несётесь вы на вражий стан,\nСоколом ширяясь сквозь туман,\nПтицу в буйстве одолеть желая.\nВся в железе княжеская грудь,\nЗолотом шелом латинский блещет,\nИ повсюду, где лежит ваш путь,\nВся земля от тяжести трепещет.\n\nХинову вы били и Литву;\nДеремела, половцы, ятвяги,\nБросив копья, пали на траву\nИ склонили буйную главу\nПод мечи булатные и стяги.\n\nНо уж прежней славы больше с нами нет.\nУж не светит Игорю солнца ясный свет.\nНе ко благу дерево листья уронило:\nПоганое войско грады поделило.\nПо Суле, по Роси счёту нет врагу.\nНе воскреснуть Игореву храброму полку!\nДон зовёт нас, княже, кличет нас с тобой!\nОльговичи храбрые одни вступили в бой.\n\n#золотоеслово"
  },
  {
    id: 24, u: "svyatoslav", time: "10 мая", likes: 265, reposts: 46, replies: 25,
    t: "ЗОЛОТОЕ СЛОВО.\n\nЧасть восьмая.\n\nКнязь Ингварь, князь Всеволод! И вас\nМы зовём для дальнего похода,\nТрое ведь Мстиславичей у нас,\nШестокрыльцев княжеского рода!\nНе в бою ли вы себе честном\nГорода и волости достали?\nГде же ваш отеческий шелом,\nВерный щит, копьё из ляшской стали?\n\nЧтоб ворота Полю запереть,\nВашим стрелам время зазвенеть\nЗа русскую землю,\nЗа Игоревы раны -\nУдалого сына Святославича!\n\n#золотоеслово"
  },
  {
    id: 25, u: "svyatoslav", time: "10 мая", likes: 402, reposts: 88, replies: 57,
    t: "ЗОЛОТОЕ СЛОВО.\n\nЧасть девятая - последняя.\n\nУж не течёт серебряной струёю\nК Переяславлю-городу Сула.\nУже Двина за полоцкой стеною\nПод клик поганых в топи утекла.\n\nНо Изяслав, Васильков сын, мечами\nВ литовские шеломы позвонил,\nОдин с своими храбрыми полками\nВсеславу-деду славы прирубил.\nИ сам, прирублен саблею калёной,\nВ чужом краю, среди кровавых трав,\nКипучей кровью в битве обагрённый,\nУпал на щит червлёный, простонав:\n\n- Твою дружину, княже, приодели\nЛишь птичьи крылья у степных дорог,\nИ полизали кровь на юном теле\nЛесные звери, выйдя из берлог. -\n\nИ в смертный час на помощь храбру мужу\nНикто из братьев в бой не поспешил.\nОдин в степи свою жемчужну душу\nИз храброго он тела изронил.\nЧерез златое, братья, ожерелье\nУшла она, покинув свой приют.\nПечальны песни, замерло веселье,\nЛишь трубы городенские поют…\n\nЯрослав и правнуки Всеслава!\nПреклоните стяги! Бросьте меч!\nВы из древней выскочили славы,\nКоль решили честью пренебречь.\nЭто вы раздорами и смутой\nК нам на Русь поганых завели,\nИ с тех пор житья нам нет от лютой\nПоловецкой проклятой земли!\n\n#золотоеслово"
  },

  // ======== ПЛАЧ ЯРОСЛАВНЫ ========
  {
    id: 26, u: "yaroslavna", time: "11 мая", likes: 512, reposts: 134, replies: 87,
    pinnedFor: "yaroslavna",
    t: "Обернусь я, бедная, кукушкой,\nПо Дунаю-речке полечу\nИ рукав с бобровою опушкой,\nНаклонясь, в Каяле омочу.\n\nУлетят, развеются туманы,\nПриоткроет очи Игорь-князь,\nИ утру кровавые я раны,\nНад могучим телом наклонясь.\n\n#плачЯрославны"
  },
  {
    id: 27, u: "yaroslavna", time: "11 мая", likes: 476, reposts: 118, replies: 62,
    t: "Что ты, Ветер, злобно повеваешь,\nЧто клубишь туманы у реки,\nСтрелы половецкие вздымаешь,\nМечешь их на русские полки?\n\nЧем тебе не любо на просторе\nВысоко под облаком летать,\nКорабли лелеять в синем море,\nЗа кормою волны колыхать?\n\nТы же, стрелы вражеские сея,\nТолько смертью веешь с высоты.\nАх, зачем, зачем моё веселье\nВ ковылях навек развеял ты?"
  },
  {
    id: 28, u: "yaroslavna", time: "12 мая", likes: 698, reposts: 201, replies: 143,
    t: "Днепр мой славный! Каменные горы\nВ землях половецких ты пробил,\nСвятослава в дальние просторы\nДо полков Кобяковых носил.\n\nВозлелей же князя, господине,\nСохрани на дальней стороне,\nЧтоб забыла слёзы я отныне,\nЧтобы жив вернулся он ко мне!"
  },
  {
    id: 29, u: "yaroslavna", time: "12 мая", likes: 545, reposts: 156, replies: 98,
    t: "Солнце трижды светлое! С тобою\nКаждому приветно и тепло.\nЧто ж ты войско князя удалое\nЖаркими лучами обожгло?\n\nИ зачем в пустыне ты безводной\nПод ударом грозных половчан\nЖаждою стянуло лук походный,\nГорем переполнило колчан?"
  },

  // ======== ПОБЕГ И ВОЗВРАЩЕНИЕ ========
  {
    id: 30, u: "igor", time: "12 мая", likes: 731, reposts: 218, replies: 176,
    t: "Полночь. Конь давно готов. Кто свистит в тумане за рекою? Овлур. Его условный зов слышу.\n\n- Выходи, князь Игорь! - и едва смолк он, как от ночного гула вздрогнула земля, зашумела трава, буйным ветром вежи всколыхнуло.\n\nИду.\n\n#побег"
  },
  {
    id: 31, u: "igor", time: "12 мая", likes: 604, reposts: 172, replies: 118,
    t: "В горностая-белку обратясь,\nК тростникам помчался я.\n\nИ поплыл, как гоголь по волне,\nПолетел, как ветер, на коне.\n\nКонь упал - и я с коня долой,\nСерым волком скачу я домой.\n\nСловно сокол, вьюсь я в облака,\nУвидав Донец издалека.\n\nБез дорог лечу и без путей,\nБью к обеду уток-лебедей."
  },
  {
    id: 32, u: "igor", time: "12 мая", likes: 421, reposts: 108, replies: 72,
    t: "Проезжал Стугну. А не всем рекам такая слава, оказывается.\n\nВот Стугна - худой имея нрав, разлилась близ устья величаво, все ручьи соседние пожрав, и закрыла Днепр от Ростислава. И погиб в пучине Ростислав.\n\nПлачет мать над тёмною рекою,\nКличет сына-юношу во мгле,\nИ цветы поникли, и с тоскою\nПриклонилось дерево к земле."
  },
  {
    id: 33, u: "igor", time: "13 мая", likes: 588, reposts: 165, replies: 105,
    t: "И, на волнах витязя лелея,\nРек Донец: - Велик ты, Игорь-князь!\nРусским землям ты принёс веселье,\nИз неволи к дому возвратясь.\n\n- О, река! - ответил я. - Немало\nИ тебе величья! В час ночной\nТы на волнах Игоря качала,\nБерег свой серебряный устлала\nДля него зелёною травой.\n\nИ когда дремал я под листвою,\nГде царила сумрачная мгла,\nСтраж мне был гоголь над водою,\nЧайка в небе стерегла."
  },
  {
    id: 34, u: "konchak", time: "13 мая", likes: 302, reposts: 71, replies: 58,
    t: "Не сороки в поле стрекочут,\nНе вороны кличут у Донца -\nКони половецкие топочут,\nГзак со мной ищет беглеца.\n\nСказал мне старый Гзак:\n- Если сокол улетает в терем,\nСоколёнок попадёт впросак -\nЗолотой стрелой его подстрелим.\n\nОтвечаю:\n- Если сокол к терему стремится,\nСоколёнок попадёт впросак -\nМы его опутаем девицей.\n\nГзак мне:\n- Коль его опутаем девицей,\nОн с девицей в терем свой умчится,\nИ начнёт нас бить любая птица\nВ половецком поле, хан Кончак!"
  },
  {
    id: 35, u: "boyan", time: "14 мая", likes: 489, reposts: 127, replies: 84,
    t: "И изрёк я, чем кончить речь песнотворцу князя Святослава:\n\n- Тяжко, братья, голове без плеч,\nГорько телу, коль оно безглаво. -\n\nМрак стоит над Русскою землёй:\nГорько ей без Игоря одной."
  },
  {
    id: 36, u: "boyan", time: "15 мая", likes: 1247, reposts: 389, replies: 271,
    t: "Но восходит солнце в небеси -\nИгорь-князь явился на Руси.\n\nВьются песни с дальнего Дуная,\nЧерез море в Киев долетая.\nПо Боричеву восходит удалой\nК Пирогощей богородице святой.\n\nИ страны рады,\nИ веселы грады.\n\nПели песню старым мы князьям,\nМолодых настало время славить нам:\n\nСлава князю Игорю,\nБуй-тур Всеволоду,\nВладимиру Игоревичу!\n\nСлава всем, кто, не жалея сил,\nЗа христиан полки поганых бил!\n\nЗдрав будь, князь, и вся дружина здрава!\nСлава князям и дружине слава!"
  }
];


var trends = [
  { cat: "Актуально",     tag: "#СловооПолкуИгореве", cnt: "12,4 тыс. постов" },
  { cat: "Русь · тренд",  tag: "#золотоеслово",       cnt: "8,1 тыс. постов" },
  { cat: "Русь · тренд",  tag: "#плачЯрославны",      cnt: "5,7 тыс. постов" },
  { cat: "Обсуждают",     tag: "#побег",              cnt: "4,9 тыс. постов" },
  { cat: "Обсуждают",     tag: "#поход",              cnt: "4,1 тыс. постов" },
  { cat: "Обсуждают",     tag: "#затмение",           cnt: "3,2 тыс. постов" },
  { cat: "Половцы",       tag: "#плен",               cnt: "2,8 тыс. постов" },
  { cat: "Половцы",       tag: "#куряне",             cnt: "981 пост" }
];


var notifs = [
  { id: 1, type: "mention", icon: "Б",  text: "<b>Боян Вещий</b> начал песнь и упомянул тебя.", time: "1 мая",  postId: 1 },
  { id: 2, type: "reply",   icon: "💬", text: "<b>Игорь</b> игнорирует затмение. Все обсуждают.",  time: "1 мая",  postId: 4 },
  { id: 3, type: "repost",  icon: "↻",  text: "<b>Всеволод</b> хвастается первой победой.",       time: "3 мая",  postId: 7 },
  { id: 4, type: "like",    icon: "♥",  text: "<b>405 человек</b> отреагировали на «Плен».",      time: "7 мая",  postId: 13 },
  { id: 5, type: "mention", icon: "Z",  text: "<b>Святослав</b> произносит «Золотое слово» - целых девять частей!", time: "10 мая", postId: 17 },
  { id: 6, type: "reply",   icon: "💬", text: "<b>Ярославна</b> плачет на путивльской стене.",    time: "11 мая", postId: 26 },
  { id: 7, type: "mention", icon: "Z",  text: "<b>Игорь</b> сбежал из плена. Овлур помог.",      time: "12 мая", postId: 30 },
  { id: 8, type: "reply",   icon: "💬", text: "<b>Боян</b> подводит итог: «Слава князям и дружине слава!»", time: "15 мая", postId: 36 }
];


var timeline = [
  { postId: 1,    date: "23 апр - 1 мая", num: "1",  title: "Вступление",
    desc: "Автор вспоминает старого певца Бояна, но решает рассказывать по делам своего времени - без прикрас." },

  { postId: 2,    date: "1 мая",          num: "2",  title: "Сборы и затмение солнца",
    desc: "Игорь собирает дружину. 1 мая 1185 года - солнечное затмение. Дурной знак, но князь идёт вперёд.", key: true },

  { postId: 3,    date: "1 мая",          num: "3",  title: "Встреча с Всеволодом",
    desc: "К Игорю присоединяется брат - курский князь Всеволод Буй Тур со своими курянами. С ними же сын Владимир и племянник Святослав." },

  { postId: 6,    date: "2 мая",          num: "4",  title: "Движение по степи",
    desc: "Дружина идёт к Дону. Волки воют, птицы свистят, гроза стонет - природа как будто предупреждает." },

  { postId: 7,    date: "3 мая",          num: "5",  title: "Первая битва - победа",
    desc: "Пятница. Русские полки разносят передовой отряд половцев, берут добычу и пленниц. Ночёвка в степи." },

  { postId: 10,   date: "4–6 мая",        num: "6",  title: "Окружение и вторая битва",
    desc: "Суббота. Половцы стягивают огромные силы - Гзак и Кончак. Три дня сечи у реки Каялы, особенно выделяется Всеволод." },

  { postId: 13,   date: "7 мая",          num: "7",  title: "Поражение и плен",
    desc: "Воскресенье, к полудню. Русские дрогнули. Игорь пытался вернуть ковуев и оказался отрезан. Все - в плену.", key: true },

  { postId: 16,   date: "9 мая",          num: "8",  title: "Сон Святослава",
    desc: "В Киеве великому князю снится тревожный сон. Вскоре бояре приносят весть о разгроме Игоря." },

  { postId: 17,   date: "10 мая",         num: "9",  title: "«Золотое слово»",
    desc: "Святослав со слезами упрекает младших князей за гордыню и обращается к каждому с призывом о единении. Девять частей.", key: true },

  { postId: 26,   date: "11–12 мая",      num: "10", title: "Плач Ярославны",
    desc: "На стене Путивля Ярославна обращается к Ветру, Днепру и Солнцу - просит защитить мужа и его воинов.", key: true },

  { postId: 30,   date: "12 мая",         num: "11", title: "Побег из плена",
    desc: "В полночь Овлур подаёт условный знак. Игорь бежит из половецкого стана - через степь, к Донцу.", key: true },

  { postId: 34,   date: "13 мая",         num: "12", title: "Гзак и Кончак в погоне",
    desc: "Ханы ищут беглеца. Гзак предлагает подстрелить соколёнка, Кончак - опутать девицей. Не догнали." },

  { postId: 36,   date: "15 мая",         num: "13", title: "Возвращение и слава",
    desc: "Игорь возвращается в Киев. Страны рады, веселы грады. Финальная слава князьям и дружине.", key: true }
];

var postReplies = {
  1: [
    { id: 101, u: "igor",       t: "Спасибо, старик. Надеюсь, не зря.",       time: "1 мая" },
    { id: 102, u: "svyatoslav", t: "Знал бы ты, чем кончится...",              time: "1 мая" },
    { id: 103, u: "yaroslavna", t: "Лишь бы вернулся.",                        time: "1 мая" }
  ],
  4: [
    { id: 201, u: "vsevolod",   t: "Да ладно, брат. Прорвёмся.",              time: "1 мая" },
    { id: 202, u: "boyan",      t: "Ох, зря-зря-зря.",                         time: "1 мая" },
    { id: 203, u: "yaroslavna", t: "Вернись, придурок!",           time: "1 мая" }
  ],
  13: [
    { id: 301, u: "yaroslavna", t: "Теперь я могу сказать «Ну я же говорила!»",                time: "7 мая" },
    { id: 302, u: "svyatoslav", t: "Вот к чему приводит самонадеянность.",     time: "7 мая" },
    { id: 303, u: "konchak",    t: "Он у нас😈😈😈",                time: "7 мая" }
  ],
  17: [
    { id: 401, u: "igor",       t: "Батек раздает.",                             time: "10 мая" },
    { id: 402, u: "vsevolod",   t: "Хайпует плесень.",                                  time: "10 мая" },
    { id: 403, u: "boyan",      t: "Те самые легендарные слова.",             time: "10 мая" }
  ],
  25: [
    { id: 501, u: "igor",       t: "Попробуй рэп почитать, бать.",                 time: "10 мая" },
    { id: 502, u: "boyan",      t: "Ага.",             time: "10 мая" }
  ],
  26: [
    { id: 601, u: "igor",       t: "Слышу. Слышу я тебя.",                       time: "11 мая" },
    { id: 602, u: "svyatoslav", t: "Голос её долетел аж до Киева.",               time: "11 мая" }
  ],
  27: [
    { id: 701, u: "boyan",      t: "Слышали? Это голос Ярославны.",      time: "11 мая" }
  ],
  28: [
    { id: 801, u: "igor",       t: "Мне кажется, что природе немного не до тебя.",                  time: "12 мая" }
  ],
  30: [
    { id: 901, u: "yaroslavna", t: "Слышу копыта, ты ли это?",            time: "12 мая" },
    { id: 902, u: "konchak",    t: "Не догоним. Ушёл сокол.",                  time: "12 мая" },
    { id: 903, u: "boyan",      t: "Кондиций набрал в моменте😎",           time: "12 мая" }
  ],
  31: [
    { id: 911, u: "boyan",      t: "Ай лев.", time: "12 мая" },
    { id: 912, u: "yaroslavna", t: "О Аллах, Аллах! Лишь бы добрался живым.",               time: "12 мая" }
  ],
  33: [
    { id: 921, u: "boyan",      t: "Донец знает, кого качать на волнах.",      time: "13 мая" }
  ],
  34: [
    { id: 931, u: "igor",       t: "Соколёнок умчался, хан😉",                  time: "13 мая" },
    { id: 932, u: "boyan",      t: "Как лошки повелись",                        time: "13 мая" }
  ],
  36: [
    { id: 941, u: "igor",       t: "Абсолют синема",                    time: "15 мая" },
    { id: 942, u: "yaroslavna", t: "Когда оплата за роль?",                                time: "15 мая" },
    { id: 943, u: "svyatoslav", t: "Я заслужил оскара😎",       time: "15 мая" },
    { id: 944, u: "vsevolod",   t: "Крутая история вышла.",                                    time: "15 мая" },
    { id: 945, u: "konchak",    t: "Респект всем, честно.",                         time: "15 мая" }
  ]
};


// ============================================================
// состояние. чё где нажато, чё сохранили
// ============================================================
var likes = {}, reposts = {}, bookmarks = {};
var myPosts = [];             // мои посты и цитаты
var myReplies = {};           // мои ответы, по postId
var openedReplies = {};       // у каких постов развёрнуты ответы
var filterUser = null;        // фильтр по автору
var filterTag = null;         // фильтр по тегу
var searchQuery = "";
var currentTab = "foryou";
var profileUser = null;
var menuPostId = null;

// подтягиваем сохранёнку
try {
  likes = JSON.parse(localStorage.getItem("rn_likes") || "{}");
  reposts = JSON.parse(localStorage.getItem("rn_reposts") || "{}");
  myPosts = JSON.parse(localStorage.getItem("rn_myPosts") || "[]");
  bookmarks = JSON.parse(localStorage.getItem("rn_bookmarks") || "{}");
  myReplies = JSON.parse(localStorage.getItem("rn_myReplies") || "{}");
} catch (e) {}


function save() {
  try {
    localStorage.setItem("rn_likes", JSON.stringify(likes));
    localStorage.setItem("rn_reposts", JSON.stringify(reposts));
    localStorage.setItem("rn_myPosts", JSON.stringify(myPosts));
    localStorage.setItem("rn_bookmarks", JSON.stringify(bookmarks));
    localStorage.setItem("rn_myReplies", JSON.stringify(myReplies));
  } catch (e) {}
}


// ============================================================
// мелкие помощники
// ============================================================

// экранируем < > & - иначе HTML сломается
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// то же самое, плюс подкрашиваем хэштеги
function fmt(text) {
  return esc(text).replace(/(#[A-Za-zА-Яа-яЁё0-9_]+)/g, '<span class="h" data-tag="$1">$1</span>');
}

// 1.2К вместо 1200
function short(n) {
  if (!n) return "0";
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(".0", "") + "М";
  if (n >= 1000)    return (n / 1000).toFixed(1).replace(".0", "") + "К";
  return String(n);
}

// просмотры - просто фейковая цифра из лайков и репостов
function viewsFor(p) {
  return Math.round((p.likes * 60 + p.reposts * 240 + (p.replies || 0) * 15) + 850);
}

// склонение: 1 ответ, 2 ответа, 5 ответов
function plural(n, one, few, many) {
  var m100 = n % 100;
  if (m100 >= 11 && m100 <= 19) return many;
  var m10 = n % 10;
  if (m10 === 1) return one;
  if (m10 >= 2 && m10 <= 4) return few;
  return many;
}


// ---- иконки ----
var BADGE = '<svg class="p-badge" viewBox="0 0 24 24" fill="currentColor"><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/></svg>';

var BADGE_SM = '<svg viewBox="0 0 24 24" fill="currentColor" style="width:16px;height:16px;color:var(--link);flex-shrink:0"><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/></svg>';

var PIN_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2l8 8-2 2-1.5-1.5-4 4L14 22l-2-2-3-3-5 5-1-1 5-5-3-3-2-2 7.5-.5 4-4L13 4z"/></svg>';


// если ключ "me" - вернём себя, иначе персонажа
function getU(key) {
  if (key === "me") return ME;
  return users[key];
}


// общая разметка аватарки. буква + картинка поверх, если она есть
function avatarHTML(u, cls) {
  return '<div class="' + cls + '" style="background:' + u.color + '">' +
           '<span>' + (u.name ? u.name.charAt(0) : "?") + '</span>' +
           (u.avatar ? '<img src="' + u.avatar + '" alt="" onerror="this.remove()">' : '') +
         '</div>';
}


// все посты: сначала мои, потом исходные. внутри - по id
function allPosts() {
  return myPosts.concat(posts).sort(function(a, b) {
    if (a.u === "me" && b.u !== "me") return -1;
    if (a.u !== "me" && b.u === "me") return 1;
    return a.id - b.id;
  });
}


// ============================================================
// рендер одного поста
// ============================================================
function postHTML(p) {
  var u = getU(p.u);
  if (!u) return "";

  var liked = likes[p.id] === true;
  var rep = reposts[p.id] === true;
  var isBookmarked = bookmarks[p.id] === true;
  var lc = p.likes + (liked ? 1 : 0);
  var rc = p.reposts + (rep ? 1 : 0);
  var badge = verified.indexOf(p.u) !== -1 ? BADGE : "";
  var isPinned = p.pinnedFor && p.pinnedFor === p.u;
  var replyCount = (postReplies[p.id] || []).length + (myReplies[p.id] || []).length;

  var h = '<article class="post" data-id="' + p.id + '" data-u="' + p.u + '">';
  h += '<div class="post-row">';
  h += avatarHTML(u, "p-av");
  h += '<div class="p-main">';

  // метки сверху: закреп или "ты цитируешь"
  if (isPinned) {
    h += '<div class="p-pinned">' + PIN_SVG + 'Закреплено</div>';
  }
  if (p.u === "me" && p.quoteOf) {
    h += '<div class="post-quote-bar">' +
           '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>' +
           'Ты цитируешь' +
         '</div>';
  }

  // шапка поста: имя, галочка, ник, время, три точки
  h += '<div class="p-top">' +
         '<span class="p-name" data-user="' + p.u + '">' + u.name + '</span>' +
         badge +
         '<span class="p-meta">' + u.nick + ' · ' + p.time + '</span>' +
         '<span class="p-menu" data-menu="' + p.id + '">···</span>' +
       '</div>';

  h += '<div class="p-text">' + fmt(p.t) + '</div>';

  // если это цитата - вставляем блок с оригинальным постом
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

  // кнопки под постом
  h += '<div class="p-actions">';

  h += '<button class="pact pact-reply" data-reply="' + p.id + '">' +
         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20.5c5.25 0 9.5-4.25 9.5-9.5S17.25 1.5 12 1.5 2.5 5.75 2.5 11c0 1.9.55 3.68 1.5 5.17L3 22l5.8-1.5c.99.32 2.07.5 3.2.5z"/></svg>' +
         '<span class="cnt">' + short(replyCount || p.replies || 0) + '</span>' +
       '</button>';

  h += '<button class="pact pact-repost' + (rep ? " on" : "") + '">' +
         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7v8a3 3 0 0 0 3 3h9"/><polyline points="14 15 17 18 14 21"/><path d="M20 17V9a3 3 0 0 0-3-3H8"/><polyline points="10 3 7 6 10 9"/></svg>' +
         '<span class="cnt">' + short(rc) + '</span>' +
       '</button>';

  h += '<button class="pact pact-like' + (liked ? " on" : "") + '">' +
         '<svg viewBox="0 0 24 24" fill="' + (liked ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.7"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.9A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/></svg>' +
         '<span class="cnt">' + short(lc) + '</span>' +
       '</button>';

  h += '<button class="pact pact-views">' +
         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="12" width="3.5" height="9" rx="1"/><rect x="10.2" y="6" width="3.5" height="15" rx="1"/><rect x="17.5" y="9" width="3.5" height="12" rx="1"/></svg>' +
         '<span class="cnt">' + short(viewsFor(p)) + '</span>' +
       '</button>';

  h += '<button class="pact pact-bookmark' + (isBookmarked ? " on" : "") + '" aria-label="в закладки">' +
         '<svg viewBox="0 0 24 24" fill="' + (isBookmarked ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.5L5 21V4a1 1 0 0 1 1-1z"/></svg>' +
       '</button>';

  h += '<button class="pact pact-share" aria-label="поделиться">' +
         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v13"/><polyline points="6 9 12 3 18 9"/><path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></svg>' +
       '</button>';

  h += '</div>';    // .p-actions
  h += '</div>';    // .p-main
  h += '</div>';    // .post-row

  h += repliesHTML(p.id);

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

  // "Читаю" без выбранного автора - показываем заглушку
  if (currentTab === "following" && !filterUser) {
    out = '<div class="empty"><span class="em">📜</span><b>Ты никого не читаешь</b>Зайди в «Люди» и выбери аккаунт.</div>';
    document.getElementById("feed").innerHTML = out;
    updateFilterBanner();
    return;
  }

  var list = allPosts();

  for (var i = 0; i < list.length; i++) {
    var p = list[i];
    if (filterUser && p.u !== filterUser) continue;
    if (filterTag && p.t.toLowerCase().indexOf(filterTag.toLowerCase()) === -1) continue;

    if (q) {
      var inText = p.t.toLowerCase().indexOf(q) !== -1;
      var uname = getU(p.u) ? getU(p.u).name.toLowerCase() : "";
      var inName = uname.indexOf(q) !== -1;
      if (!inText && !inName) continue;
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

  // посты появляются каскадом - просто для красоты
  var postEls = feedEl.querySelectorAll(".post");
  for (var k = 0; k < postEls.length && k < 20; k++) {
    postEls[k].style.animationDelay = (k * 25) + "ms";
  }

  updateFilterBanner();
}


// тут вешаем все обработчики на посты в контейнере root
function bindFeed(root) {

  // лайк - с анимацией сердечка
  var lbs = root.querySelectorAll(".pact-like");
  for (var i = 0; i < lbs.length; i++) {
    lbs[i].onclick = function(e) {
      e.stopPropagation();
      var id = parseInt(this.closest(".post").getAttribute("data-id"), 10);
      var wasLiked = likes[id] === true;

      if (wasLiked) delete likes[id];
      else likes[id] = true;

      save();
      redraw(id);

      if (!wasLiked) {
        setTimeout(function() {
          var post = document.querySelector('.post[data-id="' + id + '"]');
          if (!post) return;
          var btn = post.querySelector(".pact-like");
          if (btn) {
            btn.classList.remove("burst");
            void btn.offsetWidth;
            btn.classList.add("burst");
          }
        }, 20);
      }
    };
  }

  // репост
  var rbs = root.querySelectorAll(".pact-repost");
  for (var j = 0; j < rbs.length; j++) {
    rbs[j].onclick = function(e) {
      e.stopPropagation();
      var id = parseInt(this.closest(".post").getAttribute("data-id"), 10);
      if (reposts[id]) delete reposts[id];
      else reposts[id] = true;
      save();
      redraw(id);
    };
  }

  // меню "···". если пост мой - покажем кнопку удаления
  var menus = root.querySelectorAll(".p-menu");
  for (var m = 0; m < menus.length; m++) {
    menus[m].onclick = function(e) {
      e.stopPropagation();
      menuPostId = parseInt(this.getAttribute("data-menu"), 10);

      var p = findPost(menuPostId);
      var delBtn = document.getElementById("menuDeleteBtn");
      if (delBtn) {
        delBtn.style.display = (p && p.u === "me") ? "flex" : "none";
      }
      openOverlay("menuOverlay");
    };
  }

  // тап по имени - открыть профиль
  var names = root.querySelectorAll(".p-name");
  for (var n = 0; n < names.length; n++) {
    names[n].onclick = function(e) {
      e.stopPropagation();
      openProfile(this.getAttribute("data-user"));
    };
  }

  // тап по аватарке - тоже профиль
  var avs = root.querySelectorAll(".p-av");
  for (var a = 0; a < avs.length; a++) {
    avs[a].onclick = function(e) {
      e.stopPropagation();
      var pid = parseInt(this.closest(".post").getAttribute("data-id"), 10);
      var post = findPost(pid);
      if (post) openProfile(post.u);
    };
  }

  // хэштеги - фильтруют ленту
  var tags = root.querySelectorAll(".p-text .h, .q-text .h");
  for (var t = 0; t < tags.length; t++) {
    tags[t].onclick = function(e) {
      e.stopPropagation();
      filterTag = this.getAttribute("data-tag");
      filterUser = null;
      drawUsers();
      switchView("feed");
      switchTab("foryou");
      drawFeed();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }

  // кнопка "ответить" - раскрывает список ответов и ставит курсор в поле
  var replyBtns = root.querySelectorAll(".pact-reply");
  for (var rb = 0; rb < replyBtns.length; rb++) {
    replyBtns[rb].onclick = function(e) {
      e.stopPropagation();
      var pid = parseInt(this.getAttribute("data-reply"), 10);
      openedReplies[pid] = !openedReplies[pid];
      redraw(pid);
      if (openedReplies[pid]) {
        setTimeout(function() {
          var input = document.querySelector('.reply-input[data-pid="' + pid + '"]');
          if (input) input.focus();
        }, 60);
      }
    };
  }

  // клик по "Показать N ответов"
  var replyToggles = root.querySelectorAll(".replies-toggle");
  for (var rt = 0; rt < replyToggles.length; rt++) {
    replyToggles[rt].onclick = function(e) {
      e.stopPropagation();
      var pid = parseInt(this.getAttribute("data-pid"), 10);
      openedReplies[pid] = !openedReplies[pid];
      redraw(pid);
    };
  }

  // отправка ответа кнопкой
  var replySends = root.querySelectorAll(".reply-send");
  for (var rs = 0; rs < replySends.length; rs++) {
    replySends[rs].onclick = function(e) {
      e.stopPropagation();
      sendReply(parseInt(this.getAttribute("data-pid"), 10), root);
    };
  }

  // отправка ответа по Enter
  var replyInputs = root.querySelectorAll(".reply-input");
  for (var ri = 0; ri < replyInputs.length; ri++) {
    replyInputs[ri].onkeydown = function(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        sendReply(parseInt(this.getAttribute("data-pid"), 10), root);
      }
    };
  }

  // удаление своих ответов - крестик рядом с ником
  var replyDels = root.querySelectorAll(".reply-del");
  for (var rd = 0; rd < replyDels.length; rd++) {
    replyDels[rd].onclick = function(e) {
      e.stopPropagation();
      var pid = parseInt(this.getAttribute("data-pid"), 10);
      var rid = parseInt(this.getAttribute("data-rid"), 10);
      showConfirm("Удалить ответ?", "Точно?", function() {
        if (myReplies[pid]) {
          myReplies[pid] = myReplies[pid].filter(function(r) { return r.id !== rid; });
          if (myReplies[pid].length === 0) delete myReplies[pid];
        }
        save();
        redraw(pid);
        toast("Ответ удалён");
      });
    };
  }

  // закладки
  var bms = root.querySelectorAll(".pact-bookmark");
  for (var b = 0; b < bms.length; b++) {
    bms[b].onclick = function(e) {
      e.stopPropagation();
      var id = parseInt(this.closest(".post").getAttribute("data-id"), 10);
      if (bookmarks[id]) {
        delete bookmarks[id];
        toast("Убрано из закладок");
      } else {
        bookmarks[id] = true;
        toast("Добавлено в закладки");
      }
      save();
      redraw(id);
    };
  }

  // поделиться - системный шер или копирование
  var shares = root.querySelectorAll(".pact-share");
  for (var s = 0; s < shares.length; s++) {
    shares[s].onclick = function(e) {
      e.stopPropagation();
      var id = parseInt(this.closest(".post").getAttribute("data-id"), 10);
      sharePost(id);
    };
  }
}


// ============================================================
// ответы
// ============================================================
function replyHTML(r, pid) {
  var ru = getU(r.u);
  if (!ru) return "";

  // крестик удаления - только под своими ответами
  var delBtn = (r.u === "me")
    ? '<button class="reply-del" data-rid="' + r.id + '" data-pid="' + pid + '" aria-label="удалить">×</button>'
    : "";

  return '<div class="reply">' +
    avatarHTML(ru, "r-av") +
    '<div class="r-body">' +
      '<div class="r-top">' +
        '<span class="r-name">' + ru.name + '</span>' +
        '<span class="r-nick">' + ru.nick + ' · ' + r.time + '</span>' +
        delBtn +
      '</div>' +
      '<div class="r-text">' + fmt(r.t) + '</div>' +
    '</div>' +
  '</div>';
}


function repliesHTML(pid) {
  var base = postReplies[pid] || [];
  var mine = myReplies[pid] || [];
  var total = base.length + mine.length;
  if (!total) return "";

  var opened = openedReplies[pid] === true;
  var word = plural(total, "ответ", "ответа", "ответов");

  var h = '<div class="replies-block' + (opened ? " on" : "") + '" data-pid="' + pid + '">';
  h += '<button class="replies-toggle" data-pid="' + pid + '">' +
       '💬 ' + (opened ? "Скрыть" : "Показать") + ' ' + total + ' ' + word +
       '</button>';

  h += '<div class="replies-list">';
  for (var i = 0; i < base.length; i++) h += replyHTML(base[i], pid);
  for (var j = 0; j < mine.length; j++) h += replyHTML(mine[j], pid);

  h += '<div class="reply-form">' +
         avatarHTML(ME, "r-av") +
         '<input class="reply-input" type="text" placeholder="Написать ответ…" data-pid="' + pid + '" maxlength="200">' +
         '<button class="reply-send" data-pid="' + pid + '">→</button>' +
       '</div>';
  h += '</div></div>';
  return h;
}


function sendReply(pid, root) {
  var input = root.querySelector('.reply-input[data-pid="' + pid + '"]');
  if (!input) return;
  var text = input.value.trim();
  if (!text) return;

  if (!myReplies[pid]) myReplies[pid] = [];
  myReplies[pid].push({
    id: Date.now(),
    u: "me",
    t: text,
    time: "только что"
  });

  save();
  openedReplies[pid] = true;
  redraw(pid);
  toast("Ответ отправлен");
}


// ============================================================
// мелочи: поделиться, найти пост, перерисовать один пост
// ============================================================
function sharePost(id) {
  var p = findPost(id);
  if (!p) return;
  var u = getU(p.u);
  var text = u.name + ": " + p.t;
  var url = window.location.href.split("#")[0] + "#post-" + id;

  if (navigator.share) {
    navigator.share({ title: "Русь.нет", text: text, url: url }).catch(function() {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text + "\n" + url);
    toast("Скопировано");
  } else {
    toast("Не удалось поделиться");
  }
}


function findPost(id) {
  for (var i = 0; i < posts.length; i++) if (posts[i].id === id) return posts[i];
  for (var j = 0; j < myPosts.length; j++) if (myPosts[j].id === id) return myPosts[j];
  return null;
}


// заменяем только один пост, чтобы лента не дёргалась
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
// баннер "Фильтр: ..." над лентой
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
// аккаунты - список слева (на десктопе) и во вкладке "Люди"
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
  // первая строка - сброс фильтра
  var allRow = '<div class="user-row' + (filterUser === null ? " on" : "") + '" data-u="">' +
      '<div class="u-av" style="background:var(--bg-hover); color:var(--text-dim); font-size:12px;">все</div>' +
      '<div class="u-info">' +
        '<div class="u-name">Все аккаунты</div>' +
        '<div class="u-nick">сбросить фильтр</div>' +
      '</div>' +
    '</div>';

  var h = allRow;
  for (var k in users) h += userRowHTML(k, users[k]);

  // у нас два места для списка - мобильный и десктопный
  var mb = document.getElementById("usersListMobile");
  var dk = document.getElementById("usersListDesktop");
  if (mb) mb.innerHTML = h;
  if (dk) dk.innerHTML = h;

  // задержка появления строк
  var allRows = document.querySelectorAll(".user-row");
  for (var z = 0; z < allRows.length && z < 20; z++) {
    allRows[z].style.animationDelay = (z * 30) + "ms";
  }

  // обработчики
  var rows = document.querySelectorAll(".user-row");
  for (var i = 0; i < rows.length; i++) {
    rows[i].onclick = function() {
      var k = this.getAttribute("data-u");
      filterUser = k ? k : null;
      filterTag = null;
      drawUsers();

      // если это мобильный список - сразу возвращаемся в ленту
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

  // собираем посты этого персонажа и считаем итоги
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

  // шапка с кнопкой "назад"
  h += '<div class="profile-back">' +
         '<button class="profile-back-btn" id="profBack"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>' +
         '<div><div class="profile-back-title">' + u.name + '</div>' +
         '<div class="profile-back-sub">' + userPosts.length + ' постов</div></div>' +
       '</div>';

  // баннер-градиент в цвете персонажа
  h += '<div class="profile-banner" style="--p-color:' + u.color + '"></div>';

  // инфо: аватарка, кнопка "Читать", имя, био, локация, статистика
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
           '<span><b>' + userPosts.length + '</b> постов</span>' +
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

  var profilePosts = body.querySelectorAll(".post");
  for (var z = 0; z < profilePosts.length && z < 20; z++) {
    profilePosts[z].style.animationDelay = (z * 30) + "ms";
  }

  document.getElementById("profBack").onclick = closeProfile;

  // кнопка "Читать"/"Читаю" - фильтрует ленту по автору
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

  var notifEls = el.querySelectorAll(".notif");
  for (var z = 0; z < notifEls.length && z < 15; z++) {
    notifEls[z].style.animationDelay = (z * 40) + "ms";
  }

  // тап по уведомлению - скроллим к нужному посту и мигаем
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


// счётчик на иконке уведомлений
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
// кнопка "наверх"
// ============================================================
var toTopBtn = document.getElementById("toTop");
if (toTopBtn) {
  toTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", function() {
    if (window.scrollY > 500) toTopBtn.classList.add("on");
    else toTopBtn.classList.remove("on");
  }, { passive: true });
}


// ============================================================
// хронология
// ============================================================
function drawTimeline() {
  var h = "";

  for (var i = 0; i < timeline.length; i++) {
    var t = timeline[i];
    // data-post пустой, если пост не привязан - тогда по клику просто тост
    h += '<div class="tl-item' + (t.key ? " key" : "") + '" data-post="' + (t.postId || "") + '">' +
           '<div class="tl-date">' + t.date + '</div>' +
           '<div class="tl-dot">' + t.num + '</div>' +
           '<div class="tl-body">' +
             '<div class="tl-title">' + t.title + '</div>' +
             '<div class="tl-desc">' + t.desc + '</div>' +
           '</div>' +
         '</div>';
  }

  var el = document.getElementById("timelineList");
  if (!el) return;
  el.innerHTML = h;

  var items = el.querySelectorAll(".tl-item");
  for (var j = 0; j < items.length; j++) {
    items[j].style.animationDelay = (j * 40) + "ms";

    items[j].onclick = function() {
      var raw = this.getAttribute("data-post");
      var pid = parseInt(raw, 10);

      // нет поста - просто говорим что событие за пределами ленты
      if (!raw || !pid) {
        toast("Это уже за пределами ленты - но по поэме так и было");
        return;
      }

      switchView("feed");
      switchTab("foryou");
      setTimeout(function() {
        var target = document.querySelector('.post[data-id="' + pid + '"]');
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
          target.classList.add("flash");
          setTimeout(function() { target.classList.remove("flash"); }, 1600);
        }
      }, 200);
    };
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

  var allTrends = document.querySelectorAll(".trend");
  for (var z = 0; z < allTrends.length && z < 15; z++) {
    allTrends[z].style.animationDelay = (z * 40) + "ms";
  }

  // клик по тренду = фильтр по тегу
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
// переключение вкладок и видов
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


// заголовок в ленте: обычный, имя автора или поиск
function updateFeedTitle() {
  var t = "Лента";
  if (filterUser && getU(filterUser)) t = getU(filterUser).name;
  if (filterTag) t = filterTag;
  if (searchQuery.trim()) t = "Поиск: " + searchQuery.trim();

  var el = document.getElementById("feedTitle");
  if (el) el.textContent = t;
}


// переключить экран: лента / уведы / тренды / хроно / люди / инфо / профиль
function switchView(name) {
  var views = document.querySelectorAll(".view");
  for (var i = 0; i < views.length; i++) views[i].classList.remove("on");

  var map = {
    feed: "viewFeed",
    notifs: "viewNotifs",
    trends: "viewTrends",
    timeline: "viewTimeline",
    accounts: "viewAccounts",
    about: "viewAbout",
    profile: "viewProfile"
  };
  var el = document.getElementById(map[name]);
  if (el) el.classList.add("on");

  // подсветка нижнего меню (мобилка)
  var btns = document.querySelectorAll("#bottomNav .bn-btn");
  for (var j = 0; j < btns.length; j++) {
    btns[j].classList.toggle("on", btns[j].getAttribute("data-view") === name);
  }

  // подсветка сайдбара (десктоп)
  var navs = document.querySelectorAll(".side-left .nav-item");
  for (var k = 0; k < navs.length; k++) {
    navs[k].classList.toggle("on", navs[k].getAttribute("data-view") === name);
  }

  if (name !== "profile") {
    document.body.setAttribute("data-view", name);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}


// верхние табы "Свежее"/"Читаю"
var topTabs = document.querySelectorAll("#topTabs .tab");
for (var ti = 0; ti < topTabs.length; ti++) {
  topTabs[ti].onclick = function() {
    switchTab(this.getAttribute("data-tab"));
    switchView("feed");
  };
}


// навигация в сайдбаре (десктоп)
var navItems = document.querySelectorAll(".side-left .nav-item");
for (var ni = 0; ni < navItems.length; ni++) {
  navItems[ni].onclick = function() {
    var v = this.getAttribute("data-view");
    switchView(v);
    if (v === "feed") switchTab("foryou");
  };
}


// нижнее меню (мобилка)
var bnBtns = document.querySelectorAll("#bottomNav .bn-btn");
for (var bi = 0; bi < bnBtns.length; bi++) {
  bnBtns[bi].onclick = function() {
    var v = this.getAttribute("data-view");
    switchView(v);
    if (v === "feed") switchTab("foryou");
  };
}


// ============================================================
// тема (тёмная / светлая)
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

// подгружаем сохранённую тему
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


// пункты меню "···" под постом
var menuItems = document.querySelectorAll("#menuSheet .menu-item");
for (var mi = 0; mi < menuItems.length; mi++) {
  menuItems[mi].onclick = function() {
    var action = this.getAttribute("data-action");
    var pid = menuPostId;
    closeOverlay("menuOverlay");

    if (action === "quote") {
      if (!pid) return;
      openQuote(pid);
    }
    else if (action === "copy") {
      var p = findPost(pid);
      if (p) {
        if (navigator.clipboard) navigator.clipboard.writeText(p.t);
        toast("Текст скопирован");
      }
    }
    else if (action === "report") {
      toast("Жалоба отправлена в Киев");
    }
    else if (action === "delete") {
      if (!pid) return;
      var post = findPost(pid);
      if (!post || post.u !== "me") return;

      showConfirm("Удалить?", "Пост исчезнет безвозвратно. Точно?", function() {
        for (var i = 0; i < myPosts.length; i++) {
          if (myPosts[i].id === pid) {
            myPosts.splice(i, 1);
            break;
          }
        }
        delete likes[pid];
        delete reposts[pid];
        delete bookmarks[pid];
        delete myReplies[pid];
        save();
        drawFeed();
        if (profileUser) renderProfile();
        toast("Удалено");
      });
    }
  };
}


// цитата - открываем модалку и обнуляем поле
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
// своя модалка подтверждения (вместо стандартного confirm)
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


// сброс лайков и репостов кнопкой в шапке ленты
document.getElementById("resetBtn").onclick = function() {
  showConfirm("Сбросить?", "Все твои лайки и репосты обнулятся.", function() {
    likes = {};
    reposts = {};
    save();
    drawFeed();
    toast("Сброшено");
  });
};


// ============================================================
// тост - всплывашка снизу
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
// поиск. иконка-лупа в шапке, раскрывается поверх
// ============================================================
var topbarEl = document.querySelector(".topbar");
var searchInput = document.getElementById("search");
var searchBtn = document.getElementById("searchBtn");
var searchBack = document.getElementById("searchBack");
var searchClear = document.getElementById("searchClear");

if (searchInput) {
  searchInput.oninput = function() {
    searchQuery = this.value;
    drawFeed();
    updateFeedTitle();
  };
}

if (searchBtn) {
  searchBtn.onclick = function() {
    topbarEl.classList.add("searching");
    setTimeout(function() { searchInput.focus(); }, 40);
  };
}

if (searchBack) {
  searchBack.onclick = function() {
    topbarEl.classList.remove("searching");
    searchInput.blur();
  };
}

if (searchClear) {
  searchClear.onclick = function() {
    searchInput.value = "";
    searchQuery = "";
    drawFeed();
    updateFeedTitle();
    searchInput.focus();
  };
}


// ============================================================
// создание своего поста - FAB
// ============================================================
document.getElementById("fabBtn").onclick = openCompose;

function openCompose() {
  document.getElementById("composeText").value = "";
  openOverlay("composeOverlay");
}

document.getElementById("composeCancel").onclick = function() {
  closeOverlay("composeOverlay");
};

document.getElementById("composeSend").onclick = function() {
  var text = document.getElementById("composeText").value.trim();
  if (!text) { toast("Напиши хоть что-нибудь"); return; }

  var newId = Date.now();
  myPosts.unshift({
    id: newId,
    u: "me",
    time: "только что",
    likes: 0,
    reposts: 0,
    replies: 0,
    t: text
  });

  save();
  closeOverlay("composeOverlay");
  filterUser = null;
  filterTag = null;
  drawUsers();
  switchView("feed");
  switchTab("foryou");
  drawFeed();
  window.scrollTo({ top: 0, behavior: "smooth" });
  toast("Опубликовано");
};

// Ctrl/Cmd+Enter отправляет пост
document.getElementById("composeText").onkeydown = function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    document.getElementById("composeSend").click();
  }
};


// кнопка "добавить" в шапке - пока заглушка
document.getElementById("addBtn").onclick = function() {
  toast("Ещё не доделано");
};


// Esc закрывает модалки и поиск
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    var op = document.querySelectorAll(".overlay.on");
    for (var i = 0; i < op.length; i++) op[i].classList.remove("on");

    if (topbarEl && topbarEl.classList.contains("searching")) {
      topbarEl.classList.remove("searching");
    }
  }
});


// ============================================================
// поехали
// ============================================================
drawUsers();
drawFeed();
drawTrends();
drawNotifs();
drawTimeline();
updateNotifBadge();