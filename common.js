/* Общие компоненты: язык, тема, навигация, футер, терминал, помощники.
   Подключается на каждой странице ПОСЛЕ data.js. */

/* ---------- ЯЗЫК (ru / en) ----------
   Порядок: ?lang=en в адресе → сохранённый выбор → язык браузера. */
const LANG = (()=>{
  let l = null;
  try { l = new URLSearchParams(location.search).get("lang"); } catch(e) {}
  if (l === "ru" || l === "en") { try { localStorage.setItem("lang", l); } catch(e) {} return l; }
  try { l = localStorage.getItem("lang"); } catch(e) {}
  if (l === "ru" || l === "en") return l;
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || "ru";
  return /^(ru|kk|uk|be)/i.test(nav) ? "ru" : "en";
})();
document.documentElement.lang = LANG;

// тексты интерфейса. Контент (био, сертификаты…) переводится в data.js полями *_en
const UI = {
  ru: {
    "nav.home":"главная", "nav.bio":"о себе", "nav.skills":"навыки", "nav.certs":"сертификаты", "nav.ctf":"ctf", "nav.writeups":"райтапы",
    "title.bio":"О себе", "title.skills":"Навыки", "title.certs":"Сертификаты", "title.ctf":"CTF", "title.writeups":"Райтапы", "title.404":"404",
    "menu":"Меню", "nav.label":"Разделы сайта", "theme":"Сменить тему", "lang.switch":"Switch to English", "lang.label":"EN",
    "term.open":"терминал", "term.hint":"или нажми ~",
    "home.certs":"Сертификаты", "home.ctf":"CTF", "home.bio":"О себе", "home.highlights":"основные достижения",
    "stat.played":"сыграно CTF", "stat.certs":"сертификатов", "stat.best":"лучший результат", "top":"топ",
    "bio.title":"О себе",
    "skills.title":"Навыки", "skills.sub":"Направления и инструменты, с которыми работаю.",
    "certs.title":"Сертификаты", "certs.sub":"Нажми на карточку — откроется просмотр. Оригинал в PDF — по кнопке внутри.",
    "certs.view":"смотреть ↗", "cat.all":"все", "cat.ctf":"CTF", "cat.olympiad":"олимпиады", "cat.edu":"образовательные",
    "viewer.pdf":"открыть PDF ↗", "viewer.close":"Закрыть", "viewer.prev":"Предыдущий", "viewer.next":"Следующий",
    "ctf.title":"CTF результаты", "ctf.sub":"Соревнования, места и команды. Клик по строке открывает страницу на CTFtime.",
    "ctf.event":"соревнование", "ctf.place":"место", "ctf.team":"команда", "ctf.all":"все",
    "ctf.byResult":"по результату", "ctf.byDate":"по дате",
    "wu.title":"Райтапы", "wu.sub":"Разборы задач с CTF: как думал, что пробовал, что сработало.",
    "wu.empty":"Скоро здесь появятся разборы задач.", "wu.all":"все", "wu.back":"← все райтапы",
    "wu.notfound":"Райтап не найден.", "wu.read":"читать →", "wu.loadError":"Не удалось загрузить райтап.",
    "nf.title":"флаг не найден", "nf.sub":"Ты свернул не в ту подсеть. Этой страницы нет в scope.", "nf.back":"← вернуться на главную",
  },
  en: {
    "nav.home":"home", "nav.bio":"about", "nav.skills":"skills", "nav.certs":"certificates", "nav.ctf":"ctf", "nav.writeups":"writeups",
    "title.bio":"About", "title.skills":"Skills", "title.certs":"Certificates", "title.ctf":"CTF", "title.writeups":"Writeups", "title.404":"404",
    "menu":"Menu", "nav.label":"Site sections", "theme":"Toggle theme", "lang.switch":"Переключить на русский", "lang.label":"RU",
    "term.open":"terminal", "term.hint":"or press ~",
    "home.certs":"Certificates", "home.ctf":"CTF", "home.bio":"About me", "home.highlights":"key achievements",
    "stat.played":"CTFs played", "stat.certs":"certificates", "stat.best":"best result", "top":"top",
    "bio.title":"About",
    "skills.title":"Skills", "skills.sub":"Areas and tools I work with.",
    "certs.title":"Certificates", "certs.sub":"Click a card to view it. The original PDF is one click away inside.",
    "certs.view":"view ↗", "cat.all":"all", "cat.ctf":"CTF", "cat.olympiad":"olympiads", "cat.edu":"courses",
    "viewer.pdf":"open PDF ↗", "viewer.close":"Close", "viewer.prev":"Previous", "viewer.next":"Next",
    "ctf.title":"CTF results", "ctf.sub":"Competitions, placements and teams. Click a row to open it on CTFtime.",
    "ctf.event":"event", "ctf.place":"place", "ctf.team":"team", "ctf.all":"all",
    "ctf.byResult":"by result", "ctf.byDate":"by date",
    "wu.title":"Writeups", "wu.sub":"CTF challenge breakdowns: how I approached them, what I tried and what worked.",
    "wu.empty":"Writeups are coming soon.", "wu.all":"all", "wu.back":"← all writeups",
    "wu.notfound":"Writeup not found.", "wu.read":"read →", "wu.loadError":"Couldn't load the writeup.",
    "nf.title":"flag not found", "nf.sub":"You took a wrong turn into the wrong subnet. This page is out of scope.", "nf.back":"← back to home",
  },
};
function t(key){ return (UI[LANG] && UI[LANG][key]) || UI.ru[key] || key; }

// поле объекта с учётом языка: L(cert, "title") → title_en на английском, если он есть
function L(obj, key){ return (LANG === "en" && obj[key + "_en"]) ? obj[key + "_en"] : obj[key]; }

/* ---------- ПОМОЩНИКИ ---------- */

// как показать дату: displayDate, иначе ISO -> ДД.ММ.ГГГГ
function fmtDate(item){
  if(item.displayDate) return item.displayDate;
  if(!item.date) return "";
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(item.date);
  return m ? `${m[3]}.${m[2]}.${m[1]}` : item.date;
}

// топ-процент по месту/количеству команд: {pct, top} или null
function ctfPct(c){
  if(!(c.place > 0 && c.total > 0)) return null;
  const pct = Math.max(1, Math.round(c.place / c.total * 100));
  return { pct, top: pct <= 20 };  // top<=20% подсветим акцентом
}

// новые сверху. Возвращает НОВЫЙ массив.
function byDateDesc(arr){
  return arr.slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

// лучший топ% сверху; без места/команд — в конец. Возвращает НОВЫЙ массив.
function byResult(arr){
  const score = c => { const p = ctfPct(c); return p ? p.pct : Infinity; };
  return arr.slice().sort((a, b) => score(a) - score(b));
}

// избранные сертификаты (featured:true), новые сверху
function featuredCerts(){ return byDateDesc(CERTS.filter(c => c.featured)); }

// картинки сертификатов (их делает tools/make-thumbs.ps1):
//   thumbs/<имя>.jpg — превью 640px, full/<имя>.jpg — для просмотра 1600px.
// если файла нет — страница откатится на оригинальный thumb.
function certImg(c, kind){
  const m = /^(.*\/)([^\/]+)\.png$/i.exec(c.thumb || "");
  return m ? `${m[1]}${kind}/${m[2]}.jpg` : c.thumb;
}
function thumbSrc(c){ return certImg(c, "thumbs"); }
function fullSrc(c){ return certImg(c, "full"); }

/* ---------- АВТОСОРТИРОВКА ----------
   CERTS — по дате (новые сверху), CTF — по результату. */
if (typeof CERTS !== "undefined") CERTS.sort((a, b) => String(b.date).localeCompare(String(a.date)));
if (typeof CTF   !== "undefined") CTF.sort((a, b) => {
  const pa = ctfPct(a), pb = ctfPct(b);
  return (pa ? pa.pct : Infinity) - (pb ? pb.pct : Infinity);
});

/* ---------- ТЕМА ---------- */
const sysDark = window.matchMedia("(prefers-color-scheme: dark)");
function isDark(){
  const th = document.documentElement.dataset.theme;
  return th ? th === "dark" : sysDark.matches;
}
function setTheme(next){
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch(e) {}
}
function setLang(next){
  try { localStorage.setItem("lang", next); } catch(e) {}
  const u = new URL(location.href);
  u.searchParams.delete("lang");
  location.replace(u.toString());
}

/* ---------- ШАПКА И ФУТЕР ---------- */
function buildChrome(page){
  const hasWriteups = typeof WRITEUPS !== "undefined" && WRITEUPS.length > 0;
  const tabs = [
    { id:"home",   href:"index.html" },
    { id:"bio",    href:"bio.html" },
    { id:"skills", href:"skills.html" },
    { id:"certs",  href:"certs.html" },
    { id:"ctf",    href:"ctf.html" },
    ...(hasWriteups || page === "writeups" ? [{ id:"writeups", href:"writeups.html" }] : []),
  ];

  // статичные тексты страницы: <el data-i18n="key">
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  if (page && page !== "home" && UI.ru["title." + page]) document.title = `${t("title." + page)} — m0rbidmask`;

  const nav = document.createElement("header");
  nav.className = "nav";
  nav.innerHTML = `
    <a class="brand" href="index.html">${PROFILE.nick}</a>
    <nav class="links" aria-label="${t("nav.label")}">
      ${tabs.map(x=>`<a href="${x.href}"${x.id===page?' class="active" aria-current="page"':''}>${t("nav." + x.id)}</a>`).join("")}
    </nav>
    <div class="nav-actions">
      <button class="lang-toggle" type="button" aria-label="${t("lang.switch")}" title="${t("lang.switch")}">${t("lang.label")}</button>
      <button class="theme-toggle" type="button" aria-label="${t("theme")}" title="${t("theme")}">
        <svg class="i-moon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>
        <svg class="i-sun" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
      </button>
      <button class="nav-burger" type="button" aria-label="${t("menu")}" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>`;
  document.body.prepend(nav);

  nav.querySelector(".theme-toggle").addEventListener("click", ()=> setTheme(isDark() ? "light" : "dark"));
  nav.querySelector(".lang-toggle").addEventListener("click", ()=> setLang(LANG === "ru" ? "en" : "ru"));

  // бургер: открыть/закрыть меню на мобиле
  const burger = nav.querySelector(".nav-burger");
  const links = nav.querySelector(".links");
  burger.addEventListener("click", ()=>{
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.addEventListener("click", e=>{
    if(e.target.tagName === "A"){ nav.classList.remove("open"); burger.setAttribute("aria-expanded","false"); }
  });

  const ICONS = {
    github:'<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 5 18 5.3 18 5.3c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>',
    telegram:'<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M9.8 16.6 9.6 21c.4 0 .6-.2.8-.4l2-1.9 4.1 3c.8.4 1.3.2 1.5-.7l2.7-12.6c.3-1.2-.4-1.6-1.2-1.3L3.4 10.6c-1.1.4-1.1 1-.2 1.3l4.3 1.4L17.5 7c.5-.3.9-.1.6.2"/></svg>',
    instagram:'<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4 1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7 .1 5.7.1 4.8.3 4.1.6c-.8.3-1.4.7-2 1.4-.7.6-1.1 1.2-1.4 2C.3 4.8.1 5.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.3 2.2.6 2.9.3.8.7 1.4 1.4 2 .6.7 1.2 1.1 2 1.4.7.3 1.6.5 2.9.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 2.9-.6.8-.3 1.4-.7 2-1.4.7-.6 1.1-1.2 1.4-2 .3-.7.5-1.6.6-2.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-2.9-.3-.8-.7-1.4-1.4-2-.6-.7-1.2-1.1-2-1.4C19.2.3 18.3.1 17 .1 15.7 0 15.3 0 12 0Zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.4 1.4 0 1 1-2.9 0 1.4 1.4 0 0 1 2.9 0Z"/></svg>',
  };

  const foot = document.createElement("footer");
  foot.className = "foot";
  foot.innerHTML = `
    <div class="foot-links">
      ${CONTACTS.map(c=>`<a href="${c.url}" target="_blank" rel="noopener">${ICONS[c.icon]||""}<span>${c.handle}</span></a>`).join("")}
    </div>
    <div class="foot-right">
      <button class="term-open" type="button"><span aria-hidden="true">&gt;_</span> ${t("term.open")}<kbd class="term-kbd">${t("term.hint")}</kbd></button>
      <span class="foot-note">${PROFILE.nick} · ${new Date().getFullYear()}</span>
    </div>`;
  document.body.appendChild(foot);
  foot.querySelector(".term-open").addEventListener("click", ()=> Terminal.open());

  Terminal.bindKeys();
}

/* ---------- ТЕРМИНАЛ (открывается по ~ или кнопкой в футере) ---------- */
const Terminal = (()=>{
  const PS = "guest@" + (typeof PROFILE !== "undefined" ? PROFILE.nick : "portfolio") + ":~$";
  const PAGES = { home:"index.html", "~":"index.html", "..":"index.html", about:"bio.html", bio:"bio.html",
                  skills:"skills.html", certs:"certs.html", ctf:"ctf.html", writeups:"writeups.html" };
  const FILES = ["about.txt", "contacts.txt", "flag.txt"];
  const HIDDEN = [".secret"];
  // base64 — пусть посетитель сам декодирует ;)
  const SECRET = "ZmxhZ3t5MHVfZjB1bmRfdGgzX2gxZGQzbl9zaDNsbH0=";
  const CMDS = ["help","whoami","neofetch","ls","cat","cd","skills","ctf","certs","contacts","theme","lang","echo","date","history","clear","exit","sudo"];

  let el, out, input, prevFocus = null, started = false;
  const hist = []; let hi = 0;

  function build(){
    el = document.createElement("div");
    el.className = "term";
    el.hidden = true;
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-label", "terminal");
    el.innerHTML = `
      <div class="term-win">
        <div class="term-bar">
          <span class="term-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="term-title">${PS.replace(/\$$/, "")}</span>
          <button class="term-x" type="button" aria-label="close">×</button>
        </div>
        <div class="term-out" aria-live="polite"></div>
        <label class="term-line"><span class="term-ps">${PS}</span><input class="term-in" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="command"></label>
      </div>`;
    document.body.appendChild(el);
    out = el.querySelector(".term-out");
    input = el.querySelector(".term-in");
    el.querySelector(".term-x").addEventListener("click", close);
    el.addEventListener("mousedown", e => { if (e.target === el) close(); });
    el.querySelector(".term-win").addEventListener("click", () => { if (!getSelection().toString()) input.focus(); });
    input.addEventListener("keydown", onKey);
  }

  /* вывод */
  function line(text = "", cls = ""){
    const d = document.createElement("div");
    if (cls) d.className = cls;
    d.textContent = text;
    out.appendChild(d);
    return d;
  }
  function link(label, url, prefix = ""){
    const d = line(prefix);
    const a = document.createElement("a");
    a.href = url; a.textContent = label;
    if (/^https?:/.test(url)) { a.target = "_blank"; a.rel = "noopener"; }
    d.appendChild(a);
  }
  const pad = (s, n) => String(s).padEnd(n);

  function run(raw){
    const echo = line("", "t-cmd");
    const ps = document.createElement("span"); ps.className = "t-ps"; ps.textContent = PS + " ";
    echo.append(ps, raw);
    const s = raw.trim();
    if (!s) return;
    hist.push(s); hi = hist.length;
    const [cmd, ...args] = s.split(/\s+/);
    const arg = args.join(" ");

    switch (cmd.toLowerCase()) {
      case "help":
        [
          ["whoami", "who is this"], ["neofetch", "system info"], ["ls [-a]", "list files"],
          ["cat <file>", "print a file"], ["cd <page>", "open a page: about, skills, certs, ctf" + (WRITEUPS.length ? ", writeups" : "")],
          ["skills", "skills by category"], ["ctf", "CTF results"], ["certs", "certificates"],
          ["contacts", "how to reach me"], ["theme [dark|light]", "switch theme"], ["lang [ru|en]", "switch language"],
          ["clear", "clear screen"], ["exit", "close terminal (or Esc)"],
        ].forEach(([c, d]) => line(`  ${pad(c, 20)}${d}`));
        line("  tab — autocomplete, ↑/↓ — history", "t-dim");
        break;

      case "whoami":
        line(`${L(PROFILE, "name") || PROFILE.nick} (${PROFILE.nick})`);
        line(L(PROFILE, "role"), "t-dim");
        break;

      case "neofetch": {
        const played = CTF.filter(c => ctfPct(c));
        const best = played.length ? Math.min(...played.map(c => ctfPct(c).pct)) : null;
        const art = ["  .-------.  ", "  | >_    |  ", "  |       |  ", "  '-------'  ", "    _|_|_    ", "   [_____]   ", "             "];
        const info = [
          ["", `${PROFILE.nick}@portfolio`],
          ["name", L(PROFILE, "name")],
          ["role", L(PROFILE, "role")],
          ["team", "m0rbidmask"],
          ["ctf", `${played.length} played` + (best ? `, best top ${best}%` : "")],
          ["certs", String(CERTS.length)],
          ["shell", "portfolio-sh 1.0"],
        ];
        art.forEach((a, i) => {
          const d = line("", "t-row");
          const l = document.createElement("span"); l.className = "t-acc"; l.textContent = a;
          d.appendChild(l);
          const [k, v] = info[i] || ["", ""];
          if (k) { const kk = document.createElement("span"); kk.className = "t-acc"; kk.textContent = k + ": "; d.append(kk); }
          d.append(v);
        });
        break;
      }

      case "ls": {
        const all = args.includes("-a") || args.includes("-la") || args.includes("-al");
        const dirs = ["about/", "skills/", "certs/", "ctf/", ...(WRITEUPS.length ? ["writeups/"] : [])];
        line([...(all ? [".", "..", ...HIDDEN] : []), ...dirs, ...FILES].join("  "));
        break;
      }

      case "cat": {
        const f = arg.replace(/^\.\//, "");
        if (!f) { line("cat: missing file operand", "t-err"); break; }
        if (f === "about.txt" || f === "about" || f === "bio") (LANG === "en" && typeof BIO_EN !== "undefined" ? BIO_EN : BIO).forEach(p => { line(p); line(); });
        else if (f === "contacts.txt") contacts();
        else if (f === "flag.txt") { line("cat: flag.txt: Permission denied", "t-err"); line("hint: not every file is visible with plain ls", "t-dim"); }
        else if (f === ".secret") { line(SECRET, "t-acc"); line("looks encoded…", "t-dim"); }
        else line(`cat: ${f}: No such file or directory`, "t-err");
        break;
      }

      case "cd": case "open": {
        const p = arg.replace(/\/$/, "") || "~";
        if (PAGES[p] && (p !== "writeups" || WRITEUPS.length)) { line(`→ ${PAGES[p]}`, "t-dim"); location.href = PAGES[p]; }
        else line(`cd: ${p}: No such directory`, "t-err");
        break;
      }

      case "skills":
        SKILLS.forEach(c => { const d = line("", "t-row"); const k = document.createElement("span"); k.className = "t-acc"; k.textContent = pad(L(c, "label"), 13); d.append(k, c.tags.join(", ")); });
        break;

      case "ctf":
        line(`${pad("place", 12)}${pad("top", 7)}event`, "t-dim");
        byResult(CTF).forEach(c => {
          const p = ctfPct(c);
          line(`${pad(c.place ? `#${c.place}/${c.total}` : "—", 12)}${pad(p ? p.pct + "%" : "—", 7)}${L(c, "event")} (${c.team})`);
        });
        break;

      case "certs":
        CERTS.forEach(c => line(`${pad(c.date || "", 12)}${L(c, "title")}`));
        line("→ cd certs  to view them", "t-dim");
        break;

      case "contacts": contacts(); break;

      case "theme": {
        const v = args[0];
        if (v && v !== "dark" && v !== "light") { line("usage: theme [dark|light]", "t-err"); break; }
        setTheme(v || (isDark() ? "light" : "dark"));
        line(`theme: ${isDark() ? "dark" : "light"}`);
        break;
      }

      case "lang": {
        const v = args[0];
        if (!v) { line(`lang: ${LANG}`); break; }
        if (v !== "ru" && v !== "en") { line("usage: lang [ru|en]", "t-err"); break; }
        if (v !== LANG) setLang(v); else line(`lang: ${LANG}`);
        break;
      }

      case "echo": line(arg); break;
      case "date": line(new Date().toString()); break;
      case "history": hist.forEach((h, i) => line(`${pad(i + 1, 4)}${h}`)); break;
      case "pwd": line("/home/guest"); break;
      case "clear": out.textContent = ""; break;
      case "exit": case "quit": close(); break;
      case "sudo": line("guest is not in the sudoers file. This incident will be reported.", "t-err"); break;
      case "rm": line("rm: nice try 🙂", "t-err"); break;
      case "base64":
        if (args[0] === "-d" && args[1]) { try { line(atob(args[1])); } catch(e) { line("base64: invalid input", "t-err"); } }
        else line("usage: base64 -d <string>", "t-err");
        break;
      default:
        line(`${cmd}: command not found. Try 'help'`, "t-err");
    }
  }

  function contacts(){
    CONTACTS.forEach(c => link(c.handle, c.url, pad(c.label, 11)));
  }

  function complete(){
    const v = input.value;
    const parts = v.split(/\s+/);
    let pool, cur;
    if (parts.length <= 1) { pool = CMDS; cur = parts[0]; }
    else {
      cur = parts[parts.length - 1];
      const c = parts[0];
      pool = c === "cd" || c === "open" ? Object.keys(PAGES).filter(p => /^[a-z]/.test(p)) :
             c === "cat" ? [...FILES, ...HIDDEN] : c === "theme" ? ["dark", "light"] : c === "lang" ? ["ru", "en"] : [];
    }
    const hits = pool.filter(p => p.startsWith(cur));
    if (hits.length === 1) { parts[parts.length - 1] = hits[0]; input.value = parts.join(" ") + (parts.length === 1 ? " " : ""); }
    else if (hits.length > 1) line(hits.join("  "), "t-dim");
  }

  function onKey(e){
    if (e.key === "Enter") { run(input.value); input.value = ""; scroll(); }
    else if (e.key === "Tab") { e.preventDefault(); complete(); scroll(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); if (hi > 0) input.value = hist[--hi]; }
    else if (e.key === "ArrowDown") { e.preventDefault(); hi = Math.min(hist.length, hi + 1); input.value = hist[hi] || ""; }
    else if (e.key === "l" && e.ctrlKey) { e.preventDefault(); out.textContent = ""; }
  }
  const scroll = () => { out.scrollTop = out.scrollHeight; };

  function open(){
    if (!el) build();
    if (!el.hidden) return;
    prevFocus = document.activeElement;
    el.hidden = false;
    document.body.classList.add("no-scroll");
    if (!started) {
      started = true;
      line("portfolio-sh 1.0 — type 'help' to see commands", "t-dim");
      line();
    }
    input.focus();
    scroll();
  }
  function close(){
    if (!el || el.hidden) return;
    el.hidden = true;
    document.body.classList.remove("no-scroll");
    if (prevFocus && prevFocus.focus) prevFocus.focus();
  }
  const isOpen = () => el && !el.hidden;

  let bound = false;
  function bindKeys(){
    if (bound) return; bound = true;
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && isOpen()) { e.preventDefault(); close(); return; }
      if (e.code !== "Backquote" || e.ctrlKey || e.metaKey || e.altKey) return;
      const tg = e.target;
      const typing = tg && (tg.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName));
      if (isOpen()) {
        if (tg === input && input.value) return;  // внутри терминала ` можно печатать
        e.preventDefault(); close();
      } else if (!typing) { e.preventDefault(); open(); }
    });
    console.log("%c>_ psst. press ~ (or the terminal button in the footer)", "color:#4cc69b;font-family:monospace;font-size:13px");
  }

  return { open, close, bindKeys };
})();
