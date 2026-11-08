/* =========================================================
   ЕДИНСТВЕННЫЙ ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ.
   Меняй ник, био, контакты, сертификаты, CTF и райтапы здесь.

   ФОРМАТ ДАТ:
   - date        — ISO "ГГГГ-ММ-ДД" (для сортировки, машинное поле).
                   Для диапазона указывай дату ОКОНЧАНИЯ.
   - displayDate — как показать на сайте (человекочитаемо).
                   Если не указан — покажется date как есть.

   АНГЛИЙСКАЯ ВЕРСИЯ:
   у любого текстового поля может быть пара с суффиксом _en
   (title → title_en, note → note_en …). На английской версии
   сайта покажется она; если её нет — покажется русский текст.

   featured: true — карточка попадёт в "избранное".
   ========================================================= */

// ---------- ПРОФИЛЬ ----------
const PROFILE = {
  nick: "entryvelostition",
  name: "Алдияр Әбілхан",          // можно убрать, оставить ""
  name_en: "Aldiyar Abilkhan",
  role: "ИБ · CTF",                // короткий подзаголовок под именем
  role_en: "Cybersecurity · CTF",
  // короткая фраза на главной (1 строка, без пафоса)
  tagline: "Информационная безопасность, CTF, саморазвитие.",
  tagline_en: "Cybersecurity, CTF, constant self-improvement.",
};

// ---------- БИОГРАФИЯ (вкладка bio) ----------
// Каждый элемент массива — отдельный абзац. BIO_EN — то же по-английски.
const BIO = [
  "Родился и живу в Алматы. С детства тянулся к точным наукам — шахматы, математика, информатика. Со средних классов участвовал в олимпиадах.",
  "Сегодня специализируюсь на кибербезопасности, криптографии и CTF. Основал и развиваю команду m0rbidmask: участвуем в соревнованиях, занимаем сильные позиции. Находил уязвимости в государственных порталах республики, получал официальные выплаты по bug bounty.",
  "Параллельно изучаю программирование, читаю зарубежную и русскую классику, увлекаюсь музыкой. Считаю, что в современном мире человек должен развиваться всесторонне.",
  "Английский — C1. Свободно работаю с технической документацией, зарубежными ресурсами и командами.",
];
const BIO_EN = [
  "Born and raised in Almaty. Drawn to the exact sciences since childhood — chess, mathematics, computer science. I have competed in olympiads since middle school.",
  "Today I focus on cybersecurity, cryptography and CTF. I founded and lead the m0rbidmask team: we compete regularly and place strongly. I have found vulnerabilities in national government portals of Kazakhstan and received official bug bounty payouts.",
  "Alongside that I study programming, read world and Russian classics and love music. I believe a person today should grow in every direction.",
  "English — C1. Comfortable with technical documentation, international resources and teams.",
];

// ---------- КОНТАКТЫ ----------
const CONTACTS = [
  { label: "GitHub",    handle: "entryvelostition", url: "https://github.com/entryvelostition", icon: "github" },
  { label: "Telegram",  handle: "@entryvelostition", url: "https://t.me/entryvelostition",          icon: "telegram" },
  { label: "Instagram", handle: "@entryvelostition", url: "https://instagram.com/entryvelostition", icon: "instagram" },
];

// ---------- ОСНОВНЫЕ ДОСТИЖЕНИЯ (главная страница) ----------
const HIGHLIGHTS = [
  { title: "🥇 EcoSolutions Hackathon", note: "1 место · III городской хакатон, Алматы",
    note_en: "1st place · 3rd city hackathon, Almaty" },
  { title: "🛡️ Founder — m0rbidmask", note: "своя CTF-команда, активные соревнования",
    note_en: "my own CTF team, competing actively" },
  { title: "🏆 boroCTF 2026", note: "топ 9% · 75 из 819 команд",
    note_en: "top 9% · 75th of 819 teams" },
  { title: "🥈 TJCTF 2026", note: "топ 14% · 128 из 948 команд",
    note_en: "top 14% · 128th of 948 teams" },
  { title: "🎓 Республиканские олимпиады", title_en: "🎓 National olympiads",
    note: "1 место — информатика и математика", note_en: "1st place — computer science and mathematics" },
];

// ---------- СЕРТИФИКАТЫ (вкладка certs) ----------
// file — путь к pdf; thumb — путь к png (можно "").
// После добавления png запусти tools/make-thumbs.ps1 — он сделает лёгкие копии для сайта.
// cat — категория для фильтра: "ctf" | "olympiad" | "edu"
const CERTS = [
  {
    title: "EcoSolutions Hackathon — 1 место",
    title_en: "EcoSolutions Hackathon — 1st place",
    issuer: "ALEM / Управление образования Алматы",
    issuer_en: "ALEM / Almaty Department of Education",
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
    title_en: "HSE CTF 2026",
    issuer: "НИУ ВШЭ",
    issuer_en: "HSE University",
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
    title_en: "Interclover — 2nd place",
    issuer: "Международный конкурс исследовательских работ в области технических и физико-математических наук",
    issuer_en: "International research competition in engineering, physics and mathematics",
    date: "2022-10-20",
    displayDate: "20.10.2022",
    cat: "olympiad",
    file: "assets/certs/2_mezh.pdf",
    thumb: "assets/certs/2_mezh.png"
  },
  {
    title: "Interclover — III место",
    title_en: "Interclover — 3rd place",
    issuer: "Международный конкурс исследовательских работ в области технических и физико-математических наук",
    issuer_en: "International research competition in engineering, physics and mathematics",
    date: "2022-11-20",
    displayDate: "20.11.2022",
    cat: "olympiad",
    file: "assets/certs/3_mezh.pdf",
    thumb: "assets/certs/3_mezh.png"
  },
  {
    title: "Республиканская олимпиада по информатике — 1 место",
    title_en: "National Olympiad in Computer Science — 1st place",
    issuer: "Министерство информации и общест. развития РК",
    issuer_en: "Ministry of Information and Social Development of Kazakhstan",
    date: "2024-09-28",
    displayDate: "28.09.2024",
    cat: "olympiad",
    file: "assets/certs/10_info.pdf",
    thumb: "assets/certs/10_info.png"
  },
  {
    title: "Республиканская олимпиада по математике — 1 место",
    title_en: "National Olympiad in Mathematics — 1st place",
    issuer: "Министерство информации и общест. развития РК",
    issuer_en: "Ministry of Information and Social Development of Kazakhstan",
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
    title_en: "National online marathon “Mega-Mozg” — 2nd place",
    issuer: "IQ center Urker",
    date: "2024-10-13",
    displayDate: "07–13.10.2024",
    cat: "olympiad",
    file: "assets/certs/urker_mega_mozg.pdf",
    thumb: "assets/certs/urker_mega_mozg.png"
  },
  {
    title: "Study Link — курсы английского до уровня C1",
    title_en: "Study Link — English course up to C1",
    issuer: "StudyLink",
    date: "2025-02-21",
    displayDate: "21.02.2025",
    cat: "edu",
    file: "assets/certs/english.pdf",
    thumb: "assets/certs/english.png"
  },
  {
    title: "Академия «Мир Шахмат» — Диплом первой степени, III разряд",
    title_en: "“Mir Shakhmat” Academy — First-degree diploma, 3rd category",
    issuer: "Академия FIDE «Мир Шахмат»",
    issuer_en: "FIDE Academy “Mir Shakhmat”",
    date: "2024-05-05",
    displayDate: "05.05.2024",
    cat: "edu",
    file: "assets/certs/fide.pdf",
    thumb: "assets/certs/fide.png"
  }
];

// ---------- CTF РЕЗУЛЬТАТЫ (вкладка ctf) ----------
// place / total — место и всего команд (считается "топ N%")
// url — страница события на CTFtime (даты взяты оттуда, UTC)
const CTF = [
  {
    event: "TJCTF 2026",
    place: 128,
    total: 948,
    team: "PWE: Prime",
    url: "https://ctftime.org/event/3195/",
    date: "2026-05-17",
    displayDate: "15–17.05.2026",
    tags: ["jeopardy", "online"]
  },
  {
    event: "Alfa CTF 2026",
    place: 109,
    total: 513,
    team: "Black_Ice_unofficial",
    url: "https://ctftime.org/event/3250/",
    date: "2026-04-25",
    displayDate: "25.04.2026",
    tags: ["jeopardy", "online"]
  },
  {
    event: "ВШЭ CTF 2026",
    event_en: "HSE CTF 2026",
    place: 70,
    total: 139,
    team: "PWE: Prime",
    url: "https://ctftime.org/event/3313/",
    date: "2026-05-30",
    displayDate: "30.05.2026",
    tags: ["jeopardy", "onsite"]
  },
  {
    event: "GPN CTF 2026",
    place: 114,
    total: 614,
    team: "m0rbidmask",
    url: "https://ctftime.org/event/3041/",
    date: "2026-06-06",
    displayDate: "05–06.06.2026",
    tags: ["jeopardy", "online"]
  },
  {
    event: "boroCTF 2026",
    place: 75,
    total: 819,
    team: "m0rbidmask",
    url: "https://ctftime.org/event/3309/",
    date: "2026-06-16",
    displayDate: "12–16.06.2026",
    tags: ["jeopardy", "online"]
  }
];

// ---------- НАВЫКИ (вкладка skills) ----------
// label / label_en — название категории; tags — навыки/инструменты
const SKILLS = [
  { id: "web",     label: "Web",         tags: ["SQL Injection", "XSS", "CSRF", "LFI/RFI", "SSTI", "Burp Suite", "OWASP Top 10"] },
  { id: "crypto",  label: "Crypto",      tags: ["RSA", "AES", "XOR", "Base64", "MD5", "SHA-1", "SHA-256"] },
  { id: "reverse", label: "Reverse",     tags: ["Ghidra", "IDA Free", "strings", "x64dbg", "assembly x86/x64"] },
  { id: "pwn",     label: "Pwn",         tags: ["pwntools", "Buffer Overflow", "GDB", "ROP"] },
  { id: "forensics", label: "Forensics", tags: ["Wireshark", "Volatility", "Autopsy", "file analysis", "metadata analysis"] },
  { id: "osint",   label: "OSINT",       tags: ["Google Dorking", "WHOIS", "DNS lookup", "Shodan", "Maltego"] },
  { id: "lang",    label: "Языки",       label_en: "Languages", tags: ["Python", "C", "Bash", "SQL", "JavaScript"] },
  { id: "tools",   label: "Инструменты", label_en: "Tools",     tags: ["Linux", "Git", "Docker", "Nmap", "Netcat", "Hydra", "John the Ripper", "Hashcat"] },
  { id: "net",     label: "Сети",        label_en: "Networking", tags: ["TCP/IP", "HTTP/HTTPS", "DNS", "SSH", "FTP", "VLAN"] },
  { id: "general", label: "Общее",       label_en: "General",   tags: ["CTF", "Linux administration", "scripting", "debugging", "log analysis"] },
];

// ---------- РАЙТАПЫ (вкладка writeups) ----------
// Текст райтапа — Markdown-файл writeups/<id>.md (шаблон: writeups/_template.md).
// Английская версия (необязательно): writeups/<id>.en.md + поле en: true.
// Картинки клади в writeups/img/ и вставляй как ![](img/имя.png).
// Пока массив пустой — вкладка "райтапы" в меню скрыта.
const WRITEUPS = [
  // {
  //   id: "tjctf-2026-baby-rsa",      // латиница, цифры, дефис = имя файла
  //   title: "baby-rsa",
  //   ctf: "TJCTF 2026",
  //   cat: "crypto",                  // web | crypto | reverse | pwn | forensics | osint | misc
  //   date: "2026-05-17",
  //   summary: "Маленький e без паддинга — достаточно взять корень.",
  //   summary_en: "Small e and no padding — just take the root.",
  //   tags: ["RSA", "python"],
  //   en: false
  // },
];
