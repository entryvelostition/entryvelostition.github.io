/* =========================================================
   ЕДИНСТВЕННЫЙ ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ.
   Меняй ник, био, контакты, сертификаты и CTF здесь.
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
    date: "2026",
    cat: "olympiad",
    file: "assets/certs/ecosolutions.pdf",
    thumb: "assets/certs/ecosolutions.png"
  },
  {
    title: "TJCTF 2026",
    issuer: "Thomas Jefferson High School for Science and Technology",	
    date: "2026",
    cat: "ctf",
    file: "assets/certs/tjctf-2026.pdf",
    thumb: "assets/certs/tjctf-2026.png"
  },
  {
    title: "Alfa CTF 2026",
    issuer: "AlfaBank",
    date: "2026",
    cat: "ctf",
    file: "assets/certs/alfa-ctf-2026.pdf",
    thumb: "assets/certs/alfa-ctf-2026.png"
  },
  {
    title: "ВШЭ CTF 2026",
    issuer: "НИУ ВШЭ",
    date: "2026",
    cat: "ctf",
    file: "assets/certs/hse-ctf.pdf",
    thumb: "assets/certs/hse-ctf.png"
  },
  {
    title: "TryHackMe",
    issuer: "TryHackMe",
    date: "2025",
    cat: "edu",
    file: "assets/certs/thm-8zpzxd.pdf",
    thumb: "assets/certs/thm-8zpzxd.png"
  },
  {
    title: "TryHackMe",
    issuer: "TryHackMe",
    date: "2026",
    cat: "edu",
    file: "assets/certs/thm-lt3gvu.pdf",
    thumb: "assets/certs/thm-lt3gvu.png"
  },
  {
    title: "boroCTF 2026",
    issuer: "KyteBytes",
    date: "12.06.2026 - 16.06.2026",
    cat: "ctf",
    file: "assets/certs/boroctf.pdf",
    thumb: "assets/certs/boroctf.png"
  },
  {
    title: "Международный конкурс исследовательских работ для студентов и учащихся образовательных учреждений в области технических и физико-математических наук - 2 место",
    issuer: "Interclover",
    date: "20.10.2022",
    cat: "olympiad",
    file: "assets/certs/2_mezh.pdf",
    thumb: "assets/certs/2_mezh.png"
  },
];

// ---------- CTF РЕЗУЛЬТАТЫ (вкладка ctf) ----------
// place / total — место и всего команд (считается "топ N%")
// url — ссылка на борду на CTFtimed
const CTF = [
  {
    event: "TJCTF 2026",
    place: 128,            // впиши своё место
    total: 948,            // всего команд
    team: "PWE: Prime",
    url: "https://ctftime.org/event/3195/",
    date: "2026",
    tags: ["jeopardy", "online"]
  },
  {
    event: "Alfa CTF 2026",
    place: 109,
    total: 513,
    team: "Black_Ice_unofficial",
    url: "https://ctftime.org/event/3250/",
    date: "2026",
    tags: ["jeopardy"]
  },
  {
    event: "ВШЭ CTF",
    place: 70,
    total: 139,
    team: "PWE: Prime",
    url: "https://ctftime.org/event/3313/",
    date: "2026",
    tags: []
  },
  {
    event: "GRN CTF 2026",
    place: 114,
    total: 614,
    team: "m0rbidmask",
    url: "https://ctftime.org/event/3041/",
    date: "2026",
    tags: ["jeopardy"]
  },
  {
    event: "boroCTF 2026",
    place: 75,
    total: 819,
    team: "m0rbidmask",
    url: "https://ctftime.org/event/3309/",
    date: "12.06.2026 - 16.06.2026",
    tags: ["jeopardy"]
  }
];
