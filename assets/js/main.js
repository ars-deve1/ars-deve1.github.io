/* ─── Boot all canvases ─── */
window.addEventListener('DOMContentLoaded', () => {

    // Hero — large & dramatic
    if (document.getElementById('neuralHero')) {
        new NeuralNet(document.getElementById('neuralHero'), {
            n: 85, maxDist: 185, rotSpeed: .0022, dark: true, minR: 1.5, maxR: 5.5, depth: 750,
        }).start();
    }

    // Section backgrounds — light mode (navy nodes on white)
    [
        ['neuralAbout',    { n:38, maxDist:140, rotSpeed:.0018, dark:false }],
        ['neuralSkills',   { n:32, maxDist:130, rotSpeed:.0015, dark:false }],
        ['neuralProjects', { n:40, maxDist:145, rotSpeed:.002,  dark:false }],
        ['neuralServices', { n:32, maxDist:130, rotSpeed:.0016, dark:false }],
        ['neuralContact',  { n:35, maxDist:138, rotSpeed:.0019, dark:false }],
        ['neuralFooter',   { n:42, maxDist:150, rotSpeed:.0018, dark:true  }],
    ].forEach(([id, cfg]) => {
        const el = document.getElementById(id);
        if (el) new NeuralNet(el, Object.assign({ minR:1, maxR:3.5, depth:500 }, cfg)).start();
    });

    // Project card mini-neural
    document.querySelectorAll('.proj-nc').forEach(c => {
        new NeuralNet(c, { n:22, maxDist:90, rotSpeed:.003, dark:true, minR:.8, maxR:2.5, depth:280 }).start();
    });

    // Handle resize
    window.addEventListener('resize', () => {
        document.querySelectorAll('canvas').forEach(c => {
            c.width  = c.offsetWidth;
            c.height = c.offsetHeight;
        });
    });

    /* Fade-in on scroll */
    const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting) e.target.classList.add('appear'); }), { threshold:.1 });
    document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

    /* Form */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const msg = document.getElementById('form-msg');
            btn.textContent = 'Sending…'; btn.disabled = true;
            setTimeout(() => {
                btn.textContent = 'Send Message →'; btn.disabled = false;
                msg.textContent = '✓ Message sent successfully!';
                msg.classList.remove('hidden'); this.reset();
                setTimeout(() => msg.classList.add('hidden'), 4000);
            }, 1500);
        });
    }
});

/* Scroll progress */
window.addEventListener('scroll', () => {
    const progress = document.getElementById('scroll-progress');
    if (progress) {
        progress.style.width =
            (window.scrollY / (document.documentElement.scrollHeight - innerHeight) * 100) + '%';
    }
});

/* Active nav */
const SECS = ['about','skills','projects','services','contact'];
window.addEventListener('scroll', () => {
    const top = scrollY + 100;
    SECS.forEach(id => {
        const el = document.getElementById(id); if (!el) return;
        document.querySelectorAll(`button[onclick*="'${id}'"]`).forEach(b => {
            if (b.classList.contains('nav-link'))
                b.classList.toggle('active', top >= el.offsetTop && top < el.offsetTop + el.offsetHeight);
        });
    });
});

/* Mobile nav */
const ham = document.getElementById('ham'), mob = document.getElementById('mobileNav');
if (ham && mob) {
    ham.addEventListener('click', () => {
        mob.classList.toggle('open');
        const ls = ham.querySelectorAll('.hl');
        if (mob.classList.contains('open')) {
            ls[0].style.transform='rotate(45deg) translate(5px,5px)';
            ls[1].style.opacity='0';
            ls[2].style.transform='rotate(-45deg) translate(5px,-5px)';
        } else { ls.forEach(l=>{l.style.transform='';l.style.opacity='';}); }
    });
}

function closeNav() {
    if (mob && ham) {
        mob.classList.remove('open');
        ham.querySelectorAll('.hl').forEach(l=>{l.style.transform='';l.style.opacity='';});
    }
}

/* Utils */
window.goto        = id => { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); closeNav(); };
window.downloadCV  = () => alert('CV download coming soon.');
window.toggleTheme = () => {
    document.body.classList.toggle('light-alt');
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.innerHTML =
            document.body.classList.contains('light-alt')
            ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>'
            : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>';
    }
};

/* Modal */
const PJ = [
    {title:'E-commerce Platform',  role:'Full Stack Developer + Branding', desc:'Built a scalable e-commerce solution with React, Node.js and MongoDB. Implemented intuitive shopping cart and payment integration. Achieved 40% increase in user engagement and 25% improvement in conversion rates.', tech:['React','Node.js','MongoDB','Stripe API','Redux']},
    {title:'Task Management App',  role:'Full Stack Developer + UI Design', desc:'Collaborative task management app with real-time updates using Vue.js and Firebase. Reduced task completion time by 30% and improved team collaboration metrics by 35%.', tech:['Vue.js','Firebase','Tailwind CSS','Pinia']},
    {title:'Brand Identity System',role:'Graphic Designer + Brand Strategist', desc:'Complete brand identity — logo, colour palette, typography and guidelines — improving brand recognition by 60% across all digital platforms.', tech:['Figma','Adobe Illustrator','Adobe Photoshop','Brand Strategy']},
    {title:'Real-Time Chat App',   role:'Full Stack Developer + UI/UX Design', desc:'A feature-rich instant messaging platform supporting multiple chat rooms, file and image sharing, and live user presence indicators. Built with WebSockets for sub-100ms latency and designed for a seamless mobile-first experience.', tech:['React','Socket.io','Node.js','Express','PostgreSQL']},
];

window.openModal = i => {
    const p = PJ[i];
    if (!p) return;
    const sub = document.getElementById('modal-sub');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-desc');
    const chips = document.getElementById('modal-chips');
    
    if (sub) sub.textContent = p.role;
    if (title) title.textContent = p.title;
    if (desc) desc.textContent = p.desc;
    
    if (chips) {
        chips.innerHTML = '';
        p.tech.forEach(t => {
            const s = document.createElement('span');
            s.className = 'tech-chip px-3 py-1 rounded-full text-xs';
            s.style.cssText = 'background:rgba(255,255,255,.08);color:rgba(255,255,255,.65);border:1px solid rgba(255,255,255,.14);';
            s.textContent = t; chips.appendChild(s);
        });
    }
    
    const m = document.getElementById('projectModal'), b = document.getElementById('modalBox');
    if (m && b) {
        m.style.opacity='1'; m.style.visibility='visible'; b.style.transform='translateY(0)';
        document.body.style.overflow='hidden';
    }
};

window.closeModal = () => {
    const m = document.getElementById('projectModal'), b = document.getElementById('modalBox');
    if (m && b) {
        m.style.opacity='0'; m.style.visibility='hidden'; b.style.transform='translateY(24px)';
        document.body.style.overflow='';
    }
};

/* Close modal on backdrop click */
const projectModal = document.getElementById('projectModal');
if (projectModal) {
    projectModal.addEventListener('click', function(e) {
        if (e.target === this) window.closeModal();
    });
}

/* Close modal on Escape key */
document.addEventListener('keydown', e => { if (e.key === 'Escape') window.closeModal(); });
