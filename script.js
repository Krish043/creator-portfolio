/* ==========================================================
   KRISH — Motion / Interaction Layer
   Scroll reveals · Magnetic buttons · Counters · Cursor
   ========================================================== */

(() => {
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================
     WORK LIBRARY — THE ONLY PLACE YOU MANAGE YOUR PORTFOLIO
     ------------------------------------------------------------
     Think of this like a mini-CMS. To manage your work you ONLY
     edit the PORTFOLIO array below — never the HTML.

     ┌─ HOW TO MANAGE ──────────────────────────────────────────┐
     │ • ADD a project    → copy a { ... } block into a          │
     │                       category's `projects` array.        │
     │ • REMOVE a project → delete its { ... } block.            │
     │ • REORDER          → drag blocks up/down in the array.    │
     │ • ADD a category   → copy a whole { id, label, ... } block│
     │                       (give it a NEW unique `id`).        │
     │ • CHANGE a link    → edit `link:` (YouTube / IG / Drive). │
     │ • ADD a thumbnail  → set `thumb: 'assets/your-image.jpg'` │
     │                       (leave '' to use the category tone).│
     └──────────────────────────────────────────────────────────┘

     Each project supports:
       title  (required)  — project name
       desc               — one-line description
       link               — URL opened by the card / View Work button
       thumb              — image path (optional; '' = gradient tone)
       mark               — big text shown on the thumbnail (optional)
       badge              — small pill on the thumbnail (optional)
       duration           — e.g. '12:40' or 'Reel' (optional)
       tags: []           — small labels under the description (optional)
     ============================================================ */
  const PORTFOLIO = [
    {
      id: 'podcast',
      label: 'Podcast',
      tone: 'tone-podcast',
      blurb: 'Full episodes, hosted conversations, interview formats & complete podcast productions.',
      projects: [
        {
          title: 'CMO of Angry Birds',
          desc: 'Long-form conversation with the Chief Marketing Officer of Angry Birds.',
          link: 'https://youtu.be/L5vUt366Z-M?si=ahWBmCXQbXYc0ftd',
          thumb: './images/TNL.png',
          // mark: 'Angry Birds.',
          // badge: 'Notable Guest',
          duration: 'Long-form',
          tags: ['Interview', 'Hosted']
        },
        {
          title: 'Perspective',
          desc: 'Flagship series. Engineering students — the reality behind the resumé. Written, hosted & edited solo.',
          link: 'https://youtube.com/playlist?list=PLfAfsBKvpBl-t5De-SwYM6t9ZITaV8Oc7&si=7sBkIifX_FHjbwr4',
          thumb: './images/persp.jpg',
          // mark: 'Perspective.',
          // badge: 'Flagship Series',
          duration: 'Series',
          tags: ['Written', 'Hosted', 'Edited']
        },
        {
          title: 'Small Talks — Pogo FAQ Host',
          desc: 'In conversation with the host of the Pogo FAQ show.',
          link: 'https://youtu.be/-6Qa5RR8dnU',
          thumb: './images/pogo.png',
          // mark: 'Small Talks.',
          // badge: 'YouTube · Collab',
          duration: 'Episode',
          tags: ['Collab', 'Hosted']
        }
      ]
    },
    {
      id: 'talking-head',
      label: 'Talking Head',
      tone: 'tone-talking',
      blurb: 'Long-form educational, personal-branding & commentary talking-head content.',
      projects: [
        {
          title: 'How to Network? (0 CONNECTIONS)',
          desc: 'A masterclass in event networking. Hacking the system to connect with top-tier founders and industry legends in 48 hours.',
          link: 'https://youtu.be/BYdJZ8KfWVQ',
          thumb: './images/nlt.jpg', 
          duration: 'Masterclass',
          tags: ['Commentary', 'Educational', 'Storytelling']
        },
        {
          title: 'Ep 02 | The Hackathon Saga',
          desc: 'Everything was perfect, until the last minute... A 24-hour coding marathon, strategic pivots, and the brutal reality of open innovation.',
          link: 'https://youtu.be/mssR5m5qsPo',
          thumb: './images/ep2.jpg',
          duration: 'Documentary',
          tags: ['Founder-led', 'Experience', 'Tech']
        },
        {
          title: 'Ep 04 | The Hackathon Saga',
          desc: 'I won my first Hackathon, but something was wrong. Breaking stereotypes, solo coding against teams, and the bittersweet taste of victory.',
          link: 'https://youtu.be/HY45REALZT4',
          thumb: './images/ep4.jpg',
          duration: 'Documentary',
          tags: ['Personal Branding', 'Commentary', 'Tech']
        }
      ]
    },
    {
      id: 'short-podcast',
      label: 'Short Form Podcast',
      tone: 'tone-shortpod',
      blurb: 'Podcast clips optimized for retention — highlights, viral moments & hook-based edits.',
      projects: [
        {
          title: 'JPMC & Microsoft: Rejected vs. Revoked',
          desc: 'High-retention podcast clip exposing the harsh realities of on-campus placement policies. Fast-paced cuts designed for maximum engagement.',
          link: 'https://youtube.com/shorts/cHpcOoklASc?si=FLo50E-UVVrGOkvF',
          thumb: './images/sp1.jpg',
          duration: 'Short Form',
          tags: ['Corporate Reality', 'Viral Hook', 'Podcast Clip']
        },
        {
          title: 'The Infosys 4-Question Matrix',
          desc: 'Snappy, hook-based edit breaking down pre-decided salary traps in mass hiring drives. Built for cross-platform virality.',
          link: 'https://youtube.com/shorts/erRHc4UnvcY?si=BGrm4GosidgiHLi4',
          thumb: './images/sp2.jpg',
          duration: 'Short Form',
          tags: ['Expose', 'Tech Placements', 'High-Retention']
        },
        {
          title: 'Did GREED Destroy Angry Birds?',
          desc: 'Documentary-style short featuring Peter Vesterbacka. Uses dynamic framing and tension-building audio to craft a compelling business story in under 30 seconds.',
          link: 'https://youtube.com/shorts/iLK3lSyj7Ss?si=3EC65zDtJPZMmaJl',
          thumb: './images/sp3.jpg',
          duration: 'Short Form',
          tags: ['Interview', 'Brand Story', 'Business']
        },
        {
          title: 'The Truth About Campus Placements',
          desc: 'Unfiltered, highly relatable conversation about college hiring contracts. Engineered with L-cuts and visual pop-ups to hold the viewer\'s attention.',
          link: 'https://youtube.com/shorts/meSTZj11aIE?si=24-l4rzRrsGT0LE_',
          thumb: './images/sp4.jpg',
          duration: 'Short Form',
          tags: ['Student Life', 'Commentary', 'Editing']
        }
      ]
    },
    {
      id: 'short-talking-head',
      label: 'Short Form Talking Head',
      tone: 'tone-shortth',
      blurb: 'Short-form cuts from talking-head content — educational, branding & commentary clips.',
      projects: [
    {
      title: 'How to Overcome Fear & Be Confident',
      desc: 'Practical mindset shifts and actionable techniques to build confidence and overcome fear.',
      link: 'https://youtube.com/shorts/9c7lRiLlICE?si=8F-NSdSP9UuGnQSx',
      thumb: './images/darr.jpg',
      duration: 'Short',
      tags: ['Mindset', 'Confidence']
    },
    {
      title: 'Networking Events',
      desc: 'How meaningful connections are built at networking events and why they matter for growth.',
      link: 'https://youtube.com/shorts/CSTFkvPJw7w?si=i8oVR5-oJilu2NsM',
      thumb: './images/networking.jpg',
      duration: 'Short',
      tags: ['Networking', 'Career']
    },
    {
      title: 'Crest Data',
      desc: 'A quick breakdown of Crest Data, its work culture, opportunities, and industry impact.',
      link: 'https://youtube.com/shorts/25HhU2bUV5A?si=h6hRAtQNB8P7dvd2',
      thumb: './images/crest.jpg',
      duration: 'Short',
      tags: ['Company', 'Career']
    },
    {
      title: 'Google Gemini Collab',
      desc: 'How Gemini empowers creators to streamline cinematic scripting and video editing.',
      link: 'https://youtube.com/shorts/8whKGqj4yNc?si=elEELzAY5n1mwZo2',
      thumb: './images/gemini.jpg',
      duration: 'Short',
      tags: ['Google Gemini', 'Student Ambassador']
    }
  ]
    },
    {
      id: 'animated-ngo',
      label: 'Animated · NGO',
      tone: 'tone-animated',
      blurb: 'Animation work — NGO project, motion graphics & explainer animations.',
      projects: [
        {
          title: 'Sewa Foundation — Dream Tour',
          desc: 'A collaborative project blending real college B-rolls, custom animations, and motion graphics into an educational career roadmap. Executed narrative structuring and final editing within a multi-disciplinary team.',
          link: 'https://youtu.be/4Arr5Kzca_I',
          thumb: './images/ss.avif',
          duration: 'Film',
          tags: ['Team Project', 'Narrative', 'Video Editing']
        }
      ]
    }
  ];

  /* ---------- Render the Work Library from config ---------- */
  const esc = (s = '') => String(s).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  const renderProjectCard = (p, tone) => {
    const bg = p.thumb ? `style="--bg:url('${esc(p.thumb)}')"` : '';
    const link = p.link && p.link !== '#'
      ? `href="${esc(p.link)}" target="_blank" rel="noopener"`
      : 'href="#" aria-disabled="true"';
    const badge = p.badge ? `<span class="pcard__badge">${esc(p.badge)}</span>` : '';
    const mark  = p.mark ? `<span class="pcard__mark">${esc(p.mark)}</span>` : '';
    const dur   = p.duration ? `<span class="pcard__dur">${esc(p.duration)}</span>` : '';
    const tags  = (p.tags && p.tags.length)
      ? `<div class="pcard__tags">${p.tags.map(t => `<span class="pcard__tag">${esc(t)}</span>`).join('')}</div>`
      : '';
    const desc  = p.desc ? `<p class="pcard__desc">${esc(p.desc)}</p>` : '';
    return `
      <article class="pcard">
        <a class="pcard__media ${tone}" ${bg} ${link} aria-label="${esc(p.title)}">
          <span class="pcard__media-overlay"></span>
          ${badge}
          <span class="pcard__play" aria-hidden="true">▶</span>
          ${mark}
        </a>
        <div class="pcard__body">
          <div class="pcard__head">
            <h3 class="pcard__title">${esc(p.title)}</h3>
            ${dur}
          </div>
          ${desc}
          ${tags}
          <a class="pcard__cta" ${link}>View work <span class="arrow">→</span></a>
        </div>
      </article>`;
  };

  const renderLibrary = () => {
    const tabsEl   = $('#libTabs');
    const panelsEl = $('#libPanels');
    if (!tabsEl || !panelsEl) return;

    tabsEl.innerHTML = PORTFOLIO.map((cat, i) => `
      <button class="lib__tab" role="tab" type="button"
              id="tab-${esc(cat.id)}"
              aria-controls="panel-${esc(cat.id)}"
              aria-selected="${i === 0 ? 'true' : 'false'}"
              data-cat="${esc(cat.id)}">
        ${esc(cat.label)}
        <span class="lib__tab-count">${cat.projects.length}</span>
      </button>`).join('');

    panelsEl.innerHTML = PORTFOLIO.map((cat, i) => {
      const cards = cat.projects.length
        ? `<div class="lib__grid">${cat.projects.map(p => renderProjectCard(p, cat.tone)).join('')}</div>`
        : `<div class="lib__empty">
             <div class="lib__empty-mark">New drops loading.</div>
             <div class="lib__empty-sub">${esc(cat.label)} work is being added to the library — check back soon.</div>
           </div>`;
      return `
        <div class="lib__panel ${i === 0 ? 'is-active' : ''}"
             id="panel-${esc(cat.id)}" role="tabpanel"
             aria-labelledby="tab-${esc(cat.id)}" ${i === 0 ? '' : 'hidden'}>
          <div class="lib__cat">
            <span class="lib__cat-name">${esc(cat.label)}</span>
            <span class="lib__cat-blurb">${esc(cat.blurb)}</span>
          </div>
          ${cards}
        </div>`;
    }).join('');

    const tabs   = $$('.lib__tab', tabsEl);
    const panels = $$('.lib__panel', panelsEl);
    const activate = (id) => {
      tabs.forEach(t => t.setAttribute('aria-selected', t.dataset.cat === id ? 'true' : 'false'));
      panels.forEach(pn => {
        const on = pn.id === `panel-${id}`;
        pn.classList.toggle('is-active', on);
        if (on) pn.removeAttribute('hidden'); else pn.setAttribute('hidden', '');
      });
    };
    tabs.forEach((t, idx) => {
      t.addEventListener('click', () => activate(t.dataset.cat));
      t.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        e.preventDefault();
        const dir = e.key === 'ArrowRight' ? 1 : -1;
        const next = tabs[(idx + dir + tabs.length) % tabs.length];
        next.focus();
        activate(next.dataset.cat);
      });
    });
  };
  renderLibrary();

  /* ---------- Custom cursor ---------- */
  const cursor = $('#cursor');
  const dot    = $('#cursorDot');
  let mx = innerWidth / 2, my = innerHeight / 2;
  let cx = mx, cy = my;

  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });
  (function raf() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(raf);
  })();

  /* ---------- Hover states for cursor ---------- */
  $$('a, button, [data-magnetic], .card, .skillrow, .guests__item, .timeline__item, .quote').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
  });

  /* ---------- Magnetic buttons ---------- */
  $$('[data-magnetic]').forEach(el => {
    const strength = 0.35;
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width  / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  /* ---------- Scroll reveals ---------- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    $$('.reveal').forEach(el => io.observe(el));
  } else {
    $$('.reveal').forEach(el => el.classList.add('is-in'));
  }

  /* ---------- Number counters ---------- */
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.target);
    const decimals = (el.dataset.target.split('.')[1] || '').length;
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = target * eased;
      el.textContent = decimals
        ? val.toFixed(decimals)
        : Math.round(val).toString().padStart(el.dataset.target.length >= 2 && el.dataset.target.startsWith('0') ? 2 : 0, '0');
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = decimals ? target.toFixed(decimals) : (el.dataset.target.startsWith('0') ? el.dataset.target : Math.round(target));
    };
    requestAnimationFrame(tick);
  };

  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        counterIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  $$('.counter').forEach(el => counterIO.observe(el));

  /* ---------- Subtle parallax on hero floats ---------- */
  if (!reduced) {
    const floats = $$('.hero__float');
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / innerWidth  - 0.5);
      const y = (e.clientY / innerHeight - 0.5);
      floats.forEach((f, i) => {
        const depth = (i + 1) * 8;
        f.style.translate = `${x * depth}px ${y * depth}px`;
      });
    });
  }

  /* ---------- Card tilt ---------- */
  if (!reduced) {
    $$('[data-tilt]').forEach(card => {
      const media = card.querySelector('.card__media');
      if (!media) return;
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width  - 0.5;
        const py = (e.clientY - rect.top)  / rect.height - 0.5;
        media.style.transform = `perspective(1000px) rotateY(${px * 4}deg) rotateX(${-py * 4}deg) scale(1.01)`;
      });
      card.addEventListener('mouseleave', () => {
        media.style.transform = '';
      });
    });
  }

  /* ---------- Nav scroll state ---------- */
  const nav = $('.nav');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 40);
    lastY = y;
  }, { passive: true });

  /* ---------- Smooth anchor scroll ---------- */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  /* ---------- Headline rise on load (already handled by CSS animation) ---------- */
})();
