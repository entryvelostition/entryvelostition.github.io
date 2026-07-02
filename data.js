/* =========================================================
   ЕДИНСТВЕННЫЙ ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ.
   Меняй ник, био, контакты, сертификаты и CTF здесь.

   ФОРМАТ ДАТ:
   - date        — ISO "ГГГГ-ММ-ДД" (для сортировки, машинное поле).
                   Для диапазона указывай дату ОКОНЧАНИЯ.
   - displayDate — как показать на сайте (человекочитаемо).
                   Если не указан — покажется date как есть.

   featured: true — карточка попадёт в "избранное" (главная сможет
   собирать блок автоматически, без ручного массива HIGHLIGHTS).
   ========================================================= */

// ---------- ПРОФИЛЬ ----------
const PROFILE = {
  nick: "entryvelostition",
  name: "Алдияр Әбілхан",          // можно убрать, оставить ""
  role: "ИБ · CTF",                // короткий подзаголовок под именем
  // короткая фраза на главной (1 строка, без пафоса)
  tagline: "Информационная безопасность, CTF, саморазвитие.",
};

// ---------- БИОГРАФИЯ (вкладка bio) ----------
// Впиши свой текст. Каждый элемент массива — отдельный абзац.
const BIO = [
  "Родился и живу в Алматы. С детства тянулся к точным наукам — шахматы, математика, информатика. Со средних классов участвовал в олимпиадах.",
  "Сегодня специализируюсь на кибербезопасности, криптографии и CTF. Основал и развиваю команду m0rbidmask: участвуем в соревнованиях, занимаем сильные позиции. Находил уязвимости в государственных порталах республики, получал официальные выплаты по bug bounty.",
  "Параллельно изучаю программирование, читаю зарубежную и русскую классику, увлекаюсь музыкой. Считаю, что в современном мире человек должен развиваться всесторонне.",
  "Английский — C1. Свободно работаю с технической документацией, зарубежными ресурсами и командами.",
];

// ---------- КОНТАКТЫ ----------
const CONTACTS = [
  { label: "GitHub",    handle: "entryvelostition", url: "https://github.com/entryvelostition", icon: "github" },
  { label: "Telegram",  handle: "@entryvelostition", url: "https://t.me/entryvelostition",          icon: "telegram" },
  { label: "Instagram", handle: "@entryvelostition", url: "https://instagram.com/entryvelostition", icon: "instagram" },
];

// ---------- ОСНОВНЫЕ ДОСТИЖЕНИЯ (главная страница) ----------
// Самое важное, что хочешь показать сразу. Кратко.
// (Оставлено как есть — места по дивизионам верные.)
const HIGHLIGHTS = [
  { title: "1 место — EcoSolutions Hackathon", note: "III городской хакатон, Алматы, 2026" },
  { title: "TJCTF 2026", note: "132 место" },
  { title: "Alfa CTF 2026", note: "109 место" },
  { title: "ВШЭ CTF", note: "26 место" },
];

// ---------- СЕРТИФИКАТЫ (вкладка certs) ----------
// file — путь к pdf; thumb — путь к png-превью (можно "")
// cat — категория для фильтра: "ctf" | "olympiad" | "edu"
const CERTS = [
  {
    title: "EcoSolutions Hackathon — 1 место",
    issuer: "ALEM / Управление образования Алматы",
    date: "2026-04-24",
    displayDate: "24.04.2026",
    cat: "olympiad",
    featured: true,
    file: "assets/certs/ecosolutions.pdf",
    thumb: "assets/certs/ecosolutions.png"
  },
  {
    title: "TJCTF 2026",
    issuer: "Thomas Jefferson High School for Science and Technology",
    date: "2026-05-17",
    displayDate: "15–17.05.2026",
    cat: "ctf",
    featured: true,
    file: "assets/certs/tjctf-2026.pdf",
    thumb: "assets/certs/tjctf-2026.png"
  },
  {
    title: "Alfa CTF 2026",
    issuer: "AlfaBank",
    date: "2026-04-25",
    displayDate: "25.04.2026",
    cat: "ctf",
    featured: true,
    file: "assets/certs/alfa-ctf-2026.pdf",
    thumb: "assets/certs/alfa-ctf-2026.png"
  },
  {
    title: "ВШЭ CTF 2026",
    issuer: "НИУ ВШЭ",
    date: "2026-05-30",
    displayDate: "30.05.2026",
    cat: "ctf",
    featured: true,
    file: "assets/certs/hse-ctf.pdf",
    thumb: "assets/certs/hse-ctf.png"
  },
  {
    title: "TryHackMe — Pre Security",
    issuer: "TryHackMe",
    date: "2025-12-07",
    displayDate: "07.12.2025",
    cat: "edu",
    file: "assets/certs/thm-8zpzxd.pdf",
    thumb: "assets/certs/thm-8zpzxd.png"
  },
  {
    title: "TryHackMe — Cybersecurity 101",
    issuer: "TryHackMe",
    date: "2026-06-09",
    displayDate: "09.06.2026",
    cat: "edu",
    file: "assets/certs/thm-lt3gvu.pdf",
    thumb: "assets/certs/thm-lt3gvu.png"
  },
  {
    title: "boroCTF 2026",
    issuer: "KyteBytes",
    date: "2026-06-16",
    displayDate: "12–16.06.2026",
    cat: "ctf",
    featured: true,
    file: "assets/certs/boroctf.pdf",
    thumb: "assets/certs/boroctf.png"
  },
  {
    title: "Interclover — II место",
    issuer: "Международный конкурс исследовательских работ в области технических и физико-математических наук",
    date: "2022-10-20",
    displayDate: "20.10.2022",
    cat: "olympiad",
    file: "assets/certs/2_mezh.pdf",
    thumb: "assets/certs/2_mezh.png"
  },
  {
    title: "Interclover — III место",
    issuer: "Международный конкурс исследовательских работ в области технических и физико-математических наук",
    date: "2022-11-20",
    displayDate: "20.11.2022",
    cat: "olympiad",
    file: "assets/certs/3_mezh.pdf",
    thumb: "assets/certs/3_mezh.png"
  },
  {
    title: "Республиканская олимпиада по информатике — 1 место",
    issuer: "Министерство информации и общест. развития РК",
    date: "2024-09-28",
    displayDate: "28.09.2024",
    cat: "olympiad",
    file: "assets/certs/10_info.pdf",
    thumb: "assets/certs/10_info.png"
  },
  {
    title: "Республиканская олимпиада по математике — 1 место",
    issuer: "Министерство информации и общест. развития РК",
    date: "2024-09-22",
    displayDate: "22.09.2024",
    cat: "olympiad",
    file: "assets/certs/10_math.pdf",
    thumb: "assets/certs/10_math.png"
  },
  {
    title: "Fortinet — Threat Landscape 3.0",
    issuer: "Fortinet",
    date: "2025-11-19",
    displayDate: "19.11.2025",
    cat: "edu",
    file: "assets/certs/fortinet.pdf",
    thumb: "assets/certs/fortinet.png"
  },
  {
    title: "KIMEP AI Conference",
    issuer: "KIMEP University",
    date: "2026-02-28",
    displayDate: "27–28.02.2026",
    cat: "olympiad",
    file: "assets/certs/kimep_ai_conf.pdf",
    thumb: "assets/certs/kimep_ai_conf.png"
  },
  {
    title: "Республиканский онлайн-марафон «Мега-мозг» — 2 место",
    issuer: "IQ center Urker",
    date: "2024-10-13",
    displayDate: "07–13.10.2024",
    cat: "olympiad",
    file: "assets/certs/urker_mega_mozg.pdf",
    thumb: "assets/certs/urker_mega_mozg.png"
  },
  {
    title: "Study Link — курсы английского до уровня C1",
    issuer: "StudyLink",
    date: "2025-02-21",
    displayDate: "21.02.2025",
    cat: "edu",
    file: "assets/certs/english.pdf",
    thumb: "assets/certs/english.png"
  },
  {
    title: "Академия «Мир Шахмат» — Диплом первой степени, III разряд",
    issuer: "Академия FIDE «Мир Шахмат»",
    date: "2024-05-05",
    displayDate: "05.05.2024",
    cat: "edu",
    file: "assets/certs/fide.pdf",
    thumb: "assets/certs/fide.png"
  }
];

// ---------- CTF РЕЗУЛЬТАТЫ (вкладка ctf) ----------
// place / total — место и всего команд (считается "топ N%")
// url — ссылка на борду на CTFtime
const CTF = [
  {
    event: "TJCTF 2026",
    place: 128,            // впиши своё место
    total: 948,            // всего команд
    team: "PWE: Prime",
    url: "https://ctftime.org/event/3195/",
    date: "2026-05-17",
    displayDate: "2026",
    tags: ["jeopardy", "online"]
  },
  {
    event: "Alfa CTF 2026",
    place: 109,
    total: 513,
    team: "Black_Ice_unofficial",
    url: "https://ctftime.org/event/3250/",
    date: "2026-04-25",
    displayDate: "2026",
    tags: ["jeopardy"]
  },
  {
    event: "ВШЭ CTF",
    place: 70,
    total: 139,
    team: "PWE: Prime",
    url: "https://ctftime.org/event/3313/",
    date: "2026-05-30",
    displayDate: "2026",
    tags: []
  },
  {
    event: "GPN CTF 2026",
    place: 114,
    total: 614,
    team: "m0rbidmask",
    url: "https://ctftime.org/event/3041/",
    date: "2026-01-01",
    displayDate: "2026",
    tags: ["jeopardy"]
  },
  {
    event: "boroCTF 2026",
    place: 75,
    total: 819,
    team: "m0rbidmask",
    url: "https://ctftime.org/event/3309/",
    date: "2026-06-16",
    displayDate: "12–16.06.2026",
    tags: ["jeopardy"]
  }
];
