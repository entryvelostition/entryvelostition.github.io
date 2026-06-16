/* Общие компоненты: навигация и футер.
   page — какая вкладка активна. */
function buildChrome(page){
  const tabs = [
    { id:"home",  label:"главная", href:"index.html" },
    { id:"bio",   label:"о себе",  href:"bio.html" },
    { id:"certs", label:"сертификаты", href:"certs.html" },
    { id:"ctf",   label:"ctf", href:"ctf.html" },
  ];

  const nav = document.createElement("header");
  nav.className = "nav";
  nav.innerHTML = `
    <a class="brand" href="index.html">${PROFILE.nick}</a>
    <nav class="links">
      ${tabs.map(t=>`<a href="${t.href}" class="${t.id===page?'active':''}">${t.label}</a>`).join("")}
    </nav>`;
  document.body.prepend(nav);

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
    <span class="foot-note">${PROFILE.nick} · 2026</span>`;
  document.body.appendChild(foot);
}
