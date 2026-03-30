<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ahmad R. Al-Saad | Full-Stack Developer & Graphic Designer</title>
    <meta name="description" content="Ahmad R. Al-Saad — Full-Stack Developer and Graphic Designer based in Aleppo, Syria. Crafting digital experiences with React, Node.js, and visual design.">
    <meta name="author" content="Ahmad R. Al-Saad">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        :root {
            --c-black:    #0a0a0a;
            --c-charcoal: #1a1a1a;
            --c-graphite: #2e2e2e;
            --c-silver:   #8a8a8a;
            --c-sapphire: #0a2a4d;
            --c-navy:     #0e3460;
            --c-white:    #ffffff;
            --c-light:    #f4f6f9;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Montserrat', sans-serif; background: var(--c-white); color: var(--c-charcoal); overflow-x: hidden; }

        /* ── SCROLL BAR ── */
        #scroll-progress { position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,#3a7bd5,#a0c4ff);z-index:9999;width:0%;transition:width 0.1s linear; }

        /* ── HERO ── */
        .hero-section { background:linear-gradient(135deg,#04152b 0%,#0a0a0a 55%,#091e35 100%); position:relative; overflow:hidden; min-height:100vh; display:flex; align-items:center; }

        /* ── NAV ── */
        .nav-link { position:relative;padding-bottom:2px;color:#4a4a4a;font-weight:500;font-size:.875rem;transition:color .2s;background:none;border:none;cursor:pointer; }
        .nav-link::after { content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:var(--c-black);transition:width .3s; }
        .nav-link:hover,.nav-link.active { color:var(--c-black); }
        .nav-link:hover::after,.nav-link.active::after { width:100%; }

        /* ── BUTTONS ── */
        .btn-primary { background:linear-gradient(135deg,#0a2a4d,#0a0a0a);color:white;font-weight:600;border:none;cursor:pointer;transition:all .3s;box-shadow:0 4px 18px rgba(10,42,77,.35); }
        .btn-primary:hover { transform:translateY(-2px);box-shadow:0 8px 28px rgba(10,42,77,.45); }
        .btn-outline { background:transparent;border:1.5px solid rgba(255,255,255,.5);color:white;cursor:pointer;transition:all .3s; }
        .btn-outline:hover { background:white;color:var(--c-black);border-color:white; }

        /* ── GLASS CARD ── */
        .glass-card { background:rgba(255,255,255,.9);backdrop-filter:blur(12px);border:1px solid rgba(13,13,13,.08);box-shadow:0 6px 28px rgba(0,0,0,.07); }

        /* ── TECH CHIPS ── */
        .tech-chip { background:rgba(13,13,13,.06);color:var(--c-charcoal);border:1px solid rgba(13,13,13,.14);font-weight:500;cursor:default;transition:all .2s; }
        .tech-chip:hover { background:var(--c-black);color:white;border-color:var(--c-black); }

        /* ── SKILL GROUP ── */
        .skill-group { border-left:3px solid var(--c-black); }

        /* ── CARD HOVER ── */
        .card-hover { transition:all .3s; }
        .card-hover:hover { transform:translateY(-5px);box-shadow:0 16px 42px rgba(10,42,77,.12); }

        /* ── SECTION LABEL ── */
        .section-label { color:var(--c-silver);font-size:.7rem;font-weight:600;letter-spacing:.18em;text-transform:uppercase;margin-bottom:10px;display:block;text-align:center; }

        /* ── DECO LINE ── */
        .deco-line { position:relative;padding-bottom:14px; }
        .deco-line::after { content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:48px;height:3px;border-radius:2px;background:var(--c-black); }

        /* ── SOCIAL ── */
        .social-icon { width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(13,13,13,.06);border:1px solid rgba(13,13,13,.14);color:var(--c-charcoal);transition:all .3s;text-decoration:none; }
        .social-icon:hover { background:var(--c-black);color:white;transform:translateY(-3px);box-shadow:0 6px 18px rgba(0,0,0,.25); }

        /* ── MOBILE NAV ── */
        .mobile-nav { display:none;position:fixed;inset:0;z-index:400;background:var(--c-black);flex-direction:column;align-items:center;justify-content:center;gap:2.2rem; }
        .mobile-nav.open { display:flex; }
        .mobile-nav button { color:white;font-size:1.6rem;font-weight:600;font-family:'Playfair Display',serif;background:none;border:none;cursor:pointer;transition:color .2s; }
        .mobile-nav button:hover { color:rgba(255,255,255,.5); }

        /* ── THEME TOGGLE ── */
        .theme-toggle { position:fixed;bottom:28px;right:24px;z-index:1000;width:46px;height:46px;border-radius:50%;background:var(--c-black);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.3);transition:transform .3s; }
        .theme-toggle:hover { transform:scale(1.1) rotate(10deg); }
        .theme-toggle svg { width:20px;height:20px;color:white; }

        /* ── FORM INPUT ── */
        .form-input { width:100%;background:rgba(13,13,13,.04);border:1.5px solid rgba(13,13,13,.12);border-radius:.6rem;padding:.65rem 1rem;font-family:'Montserrat',sans-serif;font-size:.875rem;outline:none;color:var(--c-charcoal);transition:border-color .2s,box-shadow .2s; }
        .form-input:focus { border-color:var(--c-black);box-shadow:0 0 0 3px rgba(13,13,13,.07); }

        /* ── CODE BLOCK ── */
        .code-block { background:#111;border-radius:0 0 14px 14px;font-family:'Courier New',monospace;font-size:.84rem;padding:1.2rem 1.5rem;color:#cdd6f4;border:1px solid rgba(255,255,255,.06);border-top:none;overflow-x:auto; }
        .code-block pre { white-space:pre-wrap;word-break:break-word;line-height:1.75; }
        .ck{color:#89b4fa}.cs{color:#a6e3a1}.cc{color:#585b70;font-style:italic}.cf{color:#89dceb}

        /* ── FADE IN ── */
        .fade-in { opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease; }
        .fade-in.appear { opacity:1;transform:translateY(0); }

        /* ── DIVIDER ── */
        .divider { height:1px;background:linear-gradient(90deg,transparent,rgba(13,13,13,.1),transparent); }

        /* ── PROJECT PREVIEW ── */
        .proj-preview { background:linear-gradient(135deg,#0d1b2e 0%,#0a0a0a 100%);border:1px dashed rgba(255,255,255,.12);border-radius:14px;height:180px;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden; }

        @keyframes spin  { to { transform:rotate(360deg); } }
        @keyframes spinR { to { transform:rotate(-360deg); } }
        @keyframes pulse { 0%,100%{opacity:.4} 50%{opacity:.9} }
    </style>
</head>
<body>

<div id="scroll-progress"></div>

<!-- ══════ NAVIGATION ══════ -->
<header id="mainNav" class="fixed w-full z-50 transition-all duration-300"
  style="background:rgba(255,255,255,.96);backdrop-filter:blur(16px);border-bottom:1px solid rgba(13,13,13,.07);box-shadow:0 2px 18px rgba(0,0,0,.05);">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <span style="font-family:'Playfair Display',serif;font-size:1.15rem;font-weight:700;color:var(--c-black);">A.R. Al-Saad</span>
        <nav class="hidden md:flex items-center gap-8">
            <button onclick="goto('about')"    class="nav-link">About</button>
            <button onclick="goto('skills')"   class="nav-link">Skills</button>
            <button onclick="goto('projects')" class="nav-link">Projects</button>
            <button onclick="goto('services')" class="nav-link">Services</button>
            <button onclick="goto('contact')"  class="btn-primary px-5 py-2 rounded-full text-sm">Contact</button>
        </nav>
        <button id="ham" class="md:hidden flex flex-col gap-1.5 z-[500]">
            <span class="hl block w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
            <span class="hl block w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
            <span class="hl block w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
        </button>
    </div>
</header>

<!-- Mobile Nav -->
<div id="mobileNav" class="mobile-nav">
    <button onclick="closeNav();goto('about')">About</button>
    <button onclick="closeNav();goto('skills')">Skills</button>
    <button onclick="closeNav();goto('projects')">Projects</button>
    <button onclick="closeNav();goto('services')">Services</button>
    <button onclick="closeNav();goto('contact')">Contact</button>
    <button onclick="closeNav()" style="position:absolute;top:22px;right:22px;font-size:1rem;font-family:Montserrat,sans-serif;">✕</button>
</div>

<!-- Theme Toggle -->
<div class="theme-toggle" onclick="toggleTheme()">
    <svg id="theme-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
    </svg>
</div>

<!-- ══════ HERO ══════ -->
<section class="hero-section pt-28 pb-20 px-6">
    <canvas id="neuralHero" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;"></canvas>
    <div class="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div class="fade-in">
            <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);padding:6px 14px;border-radius:99px;margin-bottom:22px;">
                <span style="width:8px;height:8px;background:#4ade80;border-radius:50%;box-shadow:0 0 8px #4ade80;display:inline-block;"></span>
                <span style="color:rgba(255,255,255,.75);font-size:.75rem;font-weight:500;letter-spacing:.06em;">Available for work</span>
            </div>
            <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2.4rem,6vw,4rem);font-weight:700;color:white;line-height:1.14;margin-bottom:14px;">Ahmad R.<br>Al-Saad</h1>
            <h2 style="font-size:1rem;font-weight:500;color:rgba(180,210,255,.75);letter-spacing:.05em;margin-bottom:22px;">Full-Stack Developer <span style="color:rgba(255,255,255,.25);">×</span> Graphic Designer</h2>
            <p style="color:rgba(255,255,255,.55);font-size:.95rem;line-height:1.8;max-width:440px;margin-bottom:36px;">Crafting digital experiences that merge technical precision with visual storytelling. Based in Aleppo, Syria.</p>
            <div class="flex flex-col sm:flex-row gap-4">
                <button onclick="downloadCV()" class="btn-primary px-8 py-3 rounded-full text-sm">↓ Download CV</button>
                <button onclick="goto('contact')" class="btn-outline px-8 py-3 rounded-full text-sm">Get In Touch →</button>
            </div>
            <div class="flex gap-10 mt-12" style="align-items:stretch;">
                <div>
                    <div style="font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:700;color:white;">3+</div>
                    <div style="color:rgba(255,255,255,.38);font-size:.65rem;letter-spacing:.1em;margin-top:2px;">YEARS EXP.</div>
                </div>
                <div style="width:1px;background:rgba(255,255,255,.1);align-self:stretch;"></div>
                <div>
                    <div style="font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:700;color:white;">20+</div>
                    <div style="color:rgba(255,255,255,.38);font-size:.65rem;letter-spacing:.1em;margin-top:2px;">PROJECTS</div>
                </div>
                <div style="width:1px;background:rgba(255,255,255,.1);align-self:stretch;"></div>
                <div>
                    <div style="font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:700;color:white;">15+</div>
                    <div style="color:rgba(255,255,255,.38);font-size:.65rem;letter-spacing:.1em;margin-top:2px;">CLIENTS</div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center relative">
            <div style="position:absolute;width:280px;height:280px;border:1px dashed rgba(100,160,255,.2);border-radius:50%;animation:spin 28s linear infinite;"></div>
            <div style="position:absolute;width:240px;height:240px;border:1px dashed rgba(100,160,255,.12);border-radius:50%;animation:spinR 18s linear infinite;"></div>
            <div style="width:200px;height:200px;border-radius:20px;background:linear-gradient(135deg,#0d1f35,#0a0a0a);border:1px solid rgba(100,160,255,.2);box-shadow:0 20px 60px rgba(0,0,0,.6);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:2;">
                <div style="width:56px;height:56px;border-radius:50%;background:rgba(100,160,255,.1);display:flex;align-items:center;justify-content:center;margin-bottom:10px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="rgba(180,210,255,.5)">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                </div>
                <span style="color:rgba(180,210,255,.35);font-size:.68rem;letter-spacing:.1em;">PROFILE IMAGE</span>
            </div>
        </div>
    </div>
    <div style="position:absolute;bottom:26px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:5px;opacity:.35;z-index:10;">
        <span style="color:white;font-size:.6rem;letter-spacing:.15em;">SCROLL</span>
        <div style="width:1px;height:30px;background:white;animation:pulse 2.2s infinite;"></div>
    </div>
</section>

<!-- ══════ ABOUT ══════ -->
<section id="about" class="py-24 px-6 relative overflow-hidden">
    <canvas id="neuralAbout" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:.5;z-index:0;"></canvas>
    <div class="container mx-auto relative z-10">
        <div class="fade-in max-w-4xl mx-auto">
            <span class="section-label">WHO I AM</span>
            <h2 class="text-3xl font-bold mb-12 text-center deco-line" style="font-family:'Playfair Display',serif;color:var(--c-black);">About Me</h2>
            <p style="color:#4a4a4a;font-size:.95rem;line-height:1.85;text-align:center;max-width:600px;margin:0 auto 36px;">I'm a passionate Full-Stack Developer and Graphic Designer based in Aleppo, Syria. I specialise in creating seamless digital experiences that are both functional and aesthetically pleasing.</p>
            <div class="grid md:grid-cols-2 gap-6 mt-8">
                <div class="glass-card rounded-2xl p-6 card-hover">
                    <div class="flex items-start gap-4">
                        <div style="min-width:44px;height:44px;border-radius:12px;background:var(--c-black);display:flex;align-items:center;justify-content:center;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        </div>
                        <div>
                            <h3 style="font-family:'Playfair Display',serif;font-size:1.05rem;font-weight:600;color:var(--c-black);margin-bottom:6px;">Technical Proficiency</h3>
                            <p style="color:#5a5a5a;font-size:.875rem;line-height:1.7;">React, Node.js, Python and database systems built for scale and performance.</p>
                        </div>
                    </div>
                </div>
                <div class="glass-card rounded-2xl p-6 card-hover">
                    <div class="flex items-start gap-4">
                        <div style="min-width:44px;height:44px;border-radius:12px;background:var(--c-sapphire);display:flex;align-items:center;justify-content:center;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                        </div>
                        <div>
                            <h3 style="font-family:'Playfair Display',serif;font-size:1.05rem;font-weight:600;color:var(--c-black);margin-bottom:6px;">Creative Excellence</h3>
                            <p style="color:#5a5a5a;font-size:.875rem;line-height:1.7;">Sharp visual design instincts — from brand identity to UX flows.</p>
                        </div>
                    </div>
                </div>
                <div class="glass-card rounded-2xl p-6 card-hover">
                    <div class="flex items-start gap-4">
                        <div style="min-width:44px;height:44px;border-radius:12px;background:#1a2e45;display:flex;align-items:center;justify-content:center;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
                        </div>
                        <div>
                            <h3 style="font-family:'Playfair Display',serif;font-size:1.05rem;font-weight:600;color:var(--c-black);margin-bottom:6px;">Problem Solving</h3>
                            <p style="color:#5a5a5a;font-size:.875rem;line-height:1.7;">Analytical approach delivering clean, maintainable solutions that stand the test of time.</p>
                        </div>
                    </div>
                </div>
                <div class="glass-card rounded-2xl p-6 card-hover">
                    <div class="flex items-start gap-4">
                        <div style="min-width:44px;height:44px;border-radius:12px;background:#2d2d2d;display:flex;align-items:center;justify-content:center;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </div>
                        <div>
                            <h3 style="font-family:'Playfair Display',serif;font-size:1.05rem;font-weight:600;color:var(--c-black);margin-bottom:6px;">Collaboration</h3>
                            <p style="color:#5a5a5a;font-size:.875rem;line-height:1.7;">Agile team player bridging the gap between design and engineering teams.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- ══════ SKILLS ══════ -->
<section id="skills" class="py-24 px-6 relative overflow-hidden" style="background:var(--c-light);">
    <canvas id="neuralSkills" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:.38;z-index:0;"></canvas>
    <div class="container mx-auto relative z-10">
        <div class="fade-in max-w-4xl mx-auto">
            <span class="section-label">EXPERTISE</span>
            <h2 class="text-3xl font-bold mb-12 text-center deco-line" style="font-family:'Playfair Display',serif;color:var(--c-black);">My Skills</h2>
            <div class="mb-12 skill-group pl-6 py-4">
                <h3 style="font-size:.7rem;font-weight:700;letter-spacing:.16em;color:var(--c-silver);text-transform:uppercase;margin-bottom:16px;">Backend & Architecture</h3>
                <div class="flex flex-wrap gap-3">
                    <span class="tech-chip px-4 py-1.5 rounded-full text-sm">Node.js</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">Python</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">Express</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">MongoDB</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">PostgreSQL</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">RESTful APIs</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">GraphQL</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">AWS</span>
                </div>
            </div>
            <div class="mb-12 skill-group pl-6 py-4">
                <h3 style="font-size:.7rem;font-weight:700;letter-spacing:.16em;color:var(--c-silver);text-transform:uppercase;margin-bottom:16px;">Frontend & Design</h3>
                <div class="flex flex-wrap gap-3">
                    <span class="tech-chip px-4 py-1.5 rounded-full text-sm">React</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">JavaScript</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">TypeScript</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">HTML / CSS</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">Tailwind CSS</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">UI/UX Design</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">Figma</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">Responsive Design</span>
                </div>
            </div>
            <div class="skill-group pl-6 py-4">
                <h3 style="font-size:.7rem;font-weight:700;letter-spacing:.16em;color:var(--c-silver);text-transform:uppercase;margin-bottom:16px;">Tools & Workflow</h3>
                <div class="flex flex-wrap gap-3">
                    <span class="tech-chip px-4 py-1.5 rounded-full text-sm">Git</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">Docker</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">Jest</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">Webpack</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">CI/CD</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">Agile / Scrum</span><span class="tech-chip px-4 py-1.5 rounded-full text-sm">Adobe Suite</span>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- ══════ PROJECTS ══════ -->
<section id="projects" class="py-24 px-6 relative overflow-hidden">
    <canvas id="neuralProjects" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:.32;z-index:0;"></canvas>
    <div class="container mx-auto relative z-10">
        <div class="fade-in max-w-6xl mx-auto">
            <span class="section-label">PORTFOLIO</span>
            <h2 class="text-3xl font-bold mb-14 text-center deco-line" style="font-family:'Playfair Display',serif;color:var(--c-black);">Featured Projects</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div class="glass-card rounded-2xl p-6 card-hover cursor-pointer" onclick="openModal(0)">
                    <div class="proj-preview mb-5"><canvas class="proj-nc" style="position:absolute;inset:0;width:100%;height:100%;border-radius:14px;"></canvas><div style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);padding:6px 14px;border-radius:8px;z-index:2;position:relative;"><span style="color:rgba(255,255,255,.65);font-size:.72rem;letter-spacing:.1em;">PROJECT 01</span></div></div>
                    <h3 style="font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;color:var(--c-black);margin-bottom:4px;">E-commerce Platform</h3>
                    <p style="color:var(--c-silver);font-size:.78rem;margin-bottom:10px;">Full Stack Dev + Branding</p>
                    <p style="color:#5a5a5a;font-size:.85rem;line-height:1.65;margin-bottom:14px;">Scalable platform increasing user engagement by 40% with streamlined checkout.</p>
                    <div class="flex flex-wrap gap-1.5 mb-4"><span class="tech-chip px-2.5 py-1 rounded-full text-xs">React</span><span class="tech-chip px-2.5 py-1 rounded-full text-xs">Node.js</span><span class="tech-chip px-2.5 py-1 rounded-full text-xs">MongoDB</span></div>
                    <button style="display:flex;align-items:center;gap:6px;font-size:.82rem;font-weight:600;color:var(--c-black);background:none;border:none;cursor:pointer;">View Details <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg></button>
                </div>
                <div class="glass-card rounded-2xl p-6 card-hover cursor-pointer" onclick="openModal(1)">
                    <div class="proj-preview mb-5"><canvas class="proj-nc" style="position:absolute;inset:0;width:100%;height:100%;border-radius:14px;"></canvas><div style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);padding:6px 14px;border-radius:8px;z-index:2;position:relative;"><span style="color:rgba(255,255,255,.65);font-size:.72rem;letter-spacing:.1em;">PROJECT 02</span></div></div>
                    <h3 style="font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;color:var(--c-black);margin-bottom:4px;">Task Management App</h3>
                    <p style="color:var(--c-silver);font-size:.78rem;margin-bottom:10px;">Full Stack Dev + UI Design</p>
                    <p style="color:#5a5a5a;font-size:.85rem;line-height:1.65;margin-bottom:14px;">Productivity app reducing task completion time by 30% through intuitive UX.</p>
                    <div class="flex flex-wrap gap-1.5 mb-4"><span class="tech-chip px-2.5 py-1 rounded-full text-xs">Vue.js</span><span class="tech-chip px-2.5 py-1 rounded-full text-xs">Firebase</span><span class="tech-chip px-2.5 py-1 rounded-full text-xs">Tailwind</span></div>
                    <button style="display:flex;align-items:center;gap:6px;font-size:.82rem;font-weight:600;color:var(--c-black);background:none;border:none;cursor:pointer;">View Details <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg></button>
                </div>
                <div class="glass-card rounded-2xl p-6 card-hover cursor-pointer" onclick="openModal(2)">
                    <div class="proj-preview mb-5"><canvas class="proj-nc" style="position:absolute;inset:0;width:100%;height:100%;border-radius:14px;"></canvas><div style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);padding:6px 14px;border-radius:8px;z-index:2;position:relative;"><span style="color:rgba(255,255,255,.65);font-size:.72rem;letter-spacing:.1em;">PROJECT 03</span></div></div>
                    <h3 style="font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;color:var(--c-black);margin-bottom:4px;">Brand Identity System</h3>
                    <p style="color:var(--c-silver);font-size:.78rem;margin-bottom:10px;">Graphic Designer + Brand Strategy</p>
                    <p style="color:#5a5a5a;font-size:.85rem;line-height:1.65;margin-bottom:14px;">Complete brand identity improving recognition by 60% across digital platforms.</p>
                    <div class="flex flex-wrap gap-1.5 mb-4"><span class="tech-chip px-2.5 py-1 rounded-full text-xs">Figma</span><span class="tech-chip px-2.5 py-1 rounded-full text-xs">Adobe CS</span><span class="tech-chip px-2.5 py-1 rounded-full text-xs">Branding</span></div>
                    <button style="display:flex;align-items:center;gap:6px;font-size:.82rem;font-weight:600;color:var(--c-black);background:none;border:none;cursor:pointer;">View Details <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg></button>
                </div>
                <div class="glass-card rounded-2xl p-6 card-hover cursor-pointer" onclick="openModal(3)">
                    <div class="proj-preview mb-5"><canvas class="proj-nc" style="position:absolute;inset:0;width:100%;height:100%;border-radius:14px;"></canvas><div style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);padding:6px 14px;border-radius:8px;z-index:2;position:relative;"><span style="color:rgba(255,255,255,.65);font-size:.72rem;letter-spacing:.1em;">PROJECT 04</span></div></div>
                    <h3 style="font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;color:var(--c-black);margin-bottom:4px;">Real-Time Chat App</h3>
                    <p style="color:var(--c-silver);font-size:.78rem;margin-bottom:10px;">Full Stack Dev + UI/UX Design</p>
                    <p style="color:#5a5a5a;font-size:.85rem;line-height:1.65;margin-bottom:14px;">Instant messaging platform with rooms, file sharing, and live user presence indicators.</p>
                    <div class="flex flex-wrap gap-1.5 mb-4"><span class="tech-chip px-2.5 py-1 rounded-full text-xs">React</span><span class="tech-chip px-2.5 py-1 rounded-full text-xs">Socket.io</span><span class="tech-chip px-2.5 py-1 rounded-full text-xs">Node.js</span></div>
                    <button style="display:flex;align-items:center;gap:6px;font-size:.82rem;font-weight:600;color:var(--c-black);background:none;border:none;cursor:pointer;">View Details <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg></button>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- ══════ SERVICES ══════ -->
<section id="services" class="py-24 px-6 relative overflow-hidden" style="background:var(--c-light);">
    <canvas id="neuralServices" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:.35;z-index:0;"></canvas>
    <div class="container mx-auto relative z-10">
        <div class="fade-in max-w-4xl mx-auto">
            <span class="section-label">WHAT I DO</span>
            <h2 class="text-3xl font-bold mb-14 text-center deco-line" style="font-family:'Playfair Display',serif;color:var(--c-black);">What I Offer</h2>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="glass-card rounded-2xl p-6 card-hover"><div class="flex items-start gap-4"><div style="min-width:48px;height:48px;border-radius:14px;background:var(--c-black);display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div><div><h3 style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:600;color:var(--c-black);margin-bottom:6px;">End-to-End Solutions</h3><p style="color:#5a5a5a;font-size:.875rem;line-height:1.7;">From concept through deployment — seamless design and development integration.</p></div></div></div>
                <div class="glass-card rounded-2xl p-6 card-hover"><div class="flex items-start gap-4"><div style="min-width:48px;height:48px;border-radius:14px;background:var(--c-sapphire);display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m2 4l2 2-2 2M6 20l-4-16M14 4l2 2 2-2M4 20l4-16"/></svg></div><div><h3 style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:600;color:var(--c-black);margin-bottom:6px;">Technical Excellence</h3><p style="color:#5a5a5a;font-size:.875rem;line-height:1.7;">Clean, maintainable code and robust architecture that scales optimally.</p></div></div></div>
                <div class="glass-card rounded-2xl p-6 card-hover"><div class="flex items-start gap-4"><div style="min-width:48px;height:48px;border-radius:14px;background:#1a2e45;display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg></div><div><h3 style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:600;color:var(--c-black);margin-bottom:6px;">Design-Driven Dev</h3><p style="color:#5a5a5a;font-size:.875rem;line-height:1.7;">User-centred approach combining beautiful design with intuitive functionality.</p></div></div></div>
                <div class="glass-card rounded-2xl p-6 card-hover"><div class="flex items-start gap-4"><div style="min-width:48px;height:48px;border-radius:14px;background:#2d2d2d;display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg></div><div><h3 style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:600;color:var(--c-black);margin-bottom:6px;">Rapid Prototyping</h3><p style="color:#5a5a5a;font-size:.875rem;line-height:1.7;">Quick iteration to validate concepts and deliver working prototypes fast.</p></div></div></div>
            </div>
            <div class="mt-12 rounded-2xl overflow-hidden shadow-lg">
                <div style="background:#111;padding:11px 18px;display:flex;align-items:center;gap:7px;">
                    <div style="width:12px;height:12px;border-radius:50%;background:#ff5f57;"></div>
                    <div style="width:12px;height:12px;border-radius:50%;background:#ffbd2e;"></div>
                    <div style="width:12px;height:12px;border-radius:50%;background:#28c840;"></div>
                    <span style="color:#555;font-size:.73rem;margin-left:8px;font-family:monospace;">api/users.js</span>
                </div>
                <div class="code-block"><pre><code><span class="cc">// RESTful API endpoint with async/await</span>
<span class="ck">app</span>.get(<span class="cs">'/api/users/:id'</span>, <span class="ck">async</span> (req, res) => {
    <span class="ck">try</span> {
        <span class="ck">const</span> user = <span class="ck">await</span> <span class="cf">User.findById</span>(req.params.id);
        <span class="ck">if</span> (!user)
            <span class="ck">return</span> res.status(<span class="cs">404</span>).json({ error: <span class="cs">'Not found'</span> });
        res.<span class="cf">json</span>(user);
    } <span class="ck">catch</span> (err) {
        res.status(<span class="cs">500</span>).json({ error: <span class="cs">'Server error'</span> });
    }
});</code></pre></div>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- ══════ CONTACT ══════ -->
<section id="contact" class="py-24 px-6 relative overflow-hidden">
    <canvas id="neuralContact" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:.42;z-index:0;"></canvas>
    <div class="container mx-auto relative z-10">
        <div class="fade-in max-w-5xl mx-auto">
            <span class="section-label">LET'S TALK</span>
            <h2 class="text-3xl font-bold mb-14 text-center deco-line" style="font-family:'Playfair Display',serif;color:var(--c-black);">Get In Touch</h2>
            <div class="grid md:grid-cols-2 gap-12">

                <!-- ── Left column: info ── -->
                <div class="flex flex-col gap-8">
                    <p style="color:#5a5a5a;font-size:.925rem;line-height:1.85;">Have a project in mind? Reach out via the form or directly at <a href="mailto:ahmarsaa0@gmail.com" style="color:var(--c-black);font-weight:600;text-decoration:underline;text-underline-offset:3px;">ahmarsaa0@gmail.com</a></p>

                    <!-- Contact info rows -->
                    <div class="flex flex-col gap-4">
                        <!-- Email -->
                        <div class="flex items-center gap-4">
                            <div style="min-width:40px;height:40px;border-radius:10px;background:rgba(13,13,13,.06);border:1px solid rgba(13,13,13,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--c-black)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            </div>
                            <div>
                                <div style="font-size:.62rem;font-weight:700;letter-spacing:.14em;color:var(--c-silver);margin-bottom:2px;">EMAIL</div>
                                <a href="mailto:ahmarsaa0@gmail.com" style="color:var(--c-charcoal);font-size:.875rem;">ahmarsaa0@gmail.com</a>
                            </div>
                        </div>
                        <!-- Location -->
                        <div class="flex items-center gap-4">
                            <div style="min-width:40px;height:40px;border-radius:10px;background:rgba(13,13,13,.06);border:1px solid rgba(13,13,13,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--c-black)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            </div>
                            <div>
                                <div style="font-size:.62rem;font-weight:700;letter-spacing:.14em;color:var(--c-silver);margin-bottom:2px;">LOCATION</div>
                                <span style="color:var(--c-charcoal);font-size:.875rem;">Aleppo, Syria</span>
                            </div>
                        </div>
                        <!-- Availability -->
                        <div class="flex items-center gap-4">
                            <div style="min-width:40px;height:40px;border-radius:10px;background:rgba(13,13,13,.06);border:1px solid rgba(13,13,13,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--c-black)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div>
                                <div style="font-size:.62rem;font-weight:700;letter-spacing:.14em;color:var(--c-silver);margin-bottom:2px;">AVAILABILITY</div>
                                <div style="display:flex;align-items:center;gap:6px;">
                                    <span style="width:7px;height:7px;background:#4ade80;border-radius:50%;box-shadow:0 0 6px #4ade80;display:inline-block;flex-shrink:0;"></span>
                                    <span style="color:var(--c-charcoal);font-size:.875rem;">Open to work · Replies within 24h</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Social icons -->
                    <div>
                        <div style="font-size:.62rem;font-weight:700;letter-spacing:.14em;color:var(--c-silver);margin-bottom:12px;">FIND ME ON</div>
                        <div class="flex gap-3">
                            <a href="https://github.com/ars-deve1" target="_blank" class="social-icon" title="GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg></a>
                            <a href="https://linkedin.com/in/ahmad-alsaad" target="_blank" class="social-icon" title="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                            <a href="https://behance.net/ahmadalsaad" target="_blank" class="social-icon" title="Behance"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.73zm-7.726-3h3.427c-.103-1.2-.78-1.842-1.739-1.842-.999 0-1.573.607-1.688 1.842zM8 12.501a3.001 3.001 0 01-3 3H0v-13h5c1.657 0 3 1.344 3 3 0 .869-.374 1.652-.97 2.21.584.55.97 1.329.97 2.29zM5 7H2v2h3c.552 0 1-.448 1-1s-.448-1-1-1zm1 5c0-.552-.448-1-1-1H2v2h3c.552 0 1-.448 1-1z"/></svg></a>
                        </div>
                    </div>
                </div>

                <!-- ── Right column: form ── -->
                <div class="glass-card rounded-2xl p-8">
                    <form id="contactForm" autocomplete="on">
                        <div class="mb-5">
                            <label style="display:block;font-size:.62rem;font-weight:700;letter-spacing:.14em;color:var(--c-silver);margin-bottom:8px;">NAME</label>
                            <input type="text" id="name" name="name" autocomplete="name" class="form-input" placeholder="Your full name" required>
                        </div>
                        <div class="mb-5">
                            <label style="display:block;font-size:.62rem;font-weight:700;letter-spacing:.14em;color:var(--c-silver);margin-bottom:8px;">EMAIL</label>
                            <input type="email" id="email" name="email" autocomplete="email" class="form-input" placeholder="your@email.com" required>
                        </div>
                        <div class="mb-5">
                            <label style="display:block;font-size:.62rem;font-weight:700;letter-spacing:.14em;color:var(--c-silver);margin-bottom:8px;">SUBJECT</label>
                            <input type="text" id="subject" name="subject" autocomplete="off" class="form-input" placeholder="What is this about?" required>
                        </div>
                        <div class="mb-6">
                            <label style="display:block;font-size:.62rem;font-weight:700;letter-spacing:.14em;color:var(--c-silver);margin-bottom:8px;">MESSAGE</label>
                            <textarea id="message" name="message" rows="5" class="form-input" placeholder="Tell me about your project…" required style="resize:none;"></textarea>
                        </div>
                        <button type="submit" class="btn-primary w-full py-3 rounded-full text-sm">Send Message →</button>
                        <div id="form-msg" class="mt-4 text-center text-green-600 text-sm hidden font-medium"></div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</section>

<!-- ══════ FOOTER ══════ -->
<footer style="background:var(--c-black);padding:64px 24px 40px;position:relative;overflow:hidden;">
    <canvas id="neuralFooter" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:.22;z-index:0;"></canvas>
    <div class="container mx-auto relative z-10">
        <!-- Top row -->
        <div class="flex flex-col items-center mb-10">
            <span style="font-family:'Playfair Display',serif;color:rgba(255,255,255,.88);font-size:1.35rem;display:block;margin-bottom:6px;">Ahmad R. Al-Saad</span>
            <p style="color:rgba(255,255,255,.3);font-size:.75rem;letter-spacing:.06em;margin-bottom:20px;">Full-Stack Developer &amp; Graphic Designer · Aleppo, Syria</p>
            <!-- Social icons -->
            <div class="flex gap-3 mb-10">
                <a href="https://github.com/ars-deve1" target="_blank" title="GitHub"
                   style="width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.55);transition:all .3s;text-decoration:none;"
                   onmouseover="this.style.background='rgba(255,255,255,.15)';this.style.color='white';this.style.transform='translateY(-3px)'"
                   onmouseout="this.style.background='rgba(255,255,255,.07)';this.style.color='rgba(255,255,255,.55)';this.style.transform=''">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://linkedin.com/in/ahmad-alsaad" target="_blank" title="LinkedIn"
                   style="width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.55);transition:all .3s;text-decoration:none;"
                   onmouseover="this.style.background='rgba(255,255,255,.15)';this.style.color='white';this.style.transform='translateY(-3px)'"
                   onmouseout="this.style.background='rgba(255,255,255,.07)';this.style.color='rgba(255,255,255,.55)';this.style.transform=''">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://behance.net/ahmadalsaad" target="_blank" title="Behance"
                   style="width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.55);transition:all .3s;text-decoration:none;"
                   onmouseover="this.style.background='rgba(255,255,255,.15)';this.style.color='white';this.style.transform='translateY(-3px)'"
                   onmouseout="this.style.background='rgba(255,255,255,.07)';this.style.color='rgba(255,255,255,.55)';this.style.transform=''">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.73zm-7.726-3h3.427c-.103-1.2-.78-1.842-1.739-1.842-.999 0-1.573.607-1.688 1.842zM8 12.501a3.001 3.001 0 01-3 3H0v-13h5c1.657 0 3 1.344 3 3 0 .869-.374 1.652-.97 2.21.584.55.97 1.329.97 2.29zM5 7H2v2h3c.552 0 1-.448 1-1s-.448-1-1-1zm1 5c0-.552-.448-1-1-1H2v2h3c.552 0 1-.448 1-1z"/></svg>
                </a>
            </div>
        </div>
        <!-- Divider -->
        <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent);margin-bottom:28px;"></div>
        <!-- Nav links -->
        <div class="flex justify-center flex-wrap gap-6 mb-8">
            <button onclick="goto('about')"    style="color:rgba(255,255,255,.35);font-size:.68rem;letter-spacing:.12em;background:none;border:none;cursor:pointer;transition:color .2s;" onmouseover="this.style.color='rgba(255,255,255,.9)'" onmouseout="this.style.color='rgba(255,255,255,.35)'">ABOUT</button>
            <button onclick="goto('skills')"   style="color:rgba(255,255,255,.35);font-size:.68rem;letter-spacing:.12em;background:none;border:none;cursor:pointer;transition:color .2s;" onmouseover="this.style.color='rgba(255,255,255,.9)'" onmouseout="this.style.color='rgba(255,255,255,.35)'">SKILLS</button>
            <button onclick="goto('projects')" style="color:rgba(255,255,255,.35);font-size:.68rem;letter-spacing:.12em;background:none;border:none;cursor:pointer;transition:color .2s;" onmouseover="this.style.color='rgba(255,255,255,.9)'" onmouseout="this.style.color='rgba(255,255,255,.35)'">PROJECTS</button>
            <button onclick="goto('services')" style="color:rgba(255,255,255,.35);font-size:.68rem;letter-spacing:.12em;background:none;border:none;cursor:pointer;transition:color .2s;" onmouseover="this.style.color='rgba(255,255,255,.9)'" onmouseout="this.style.color='rgba(255,255,255,.35)'">SERVICES</button>
            <button onclick="goto('contact')"  style="color:rgba(255,255,255,.35);font-size:.68rem;letter-spacing:.12em;background:none;border:none;cursor:pointer;transition:color .2s;" onmouseover="this.style.color='rgba(255,255,255,.9)'" onmouseout="this.style.color='rgba(255,255,255,.35)'">CONTACT</button>
        </div>
        <p style="color:rgba(255,255,255,.14);font-size:.68rem;text-align:center;">© 2025 Ahmad R. Al-Saad. All rights reserved.</p>
    </div>
</footer>

<!-- ══════ MODAL ══════ -->
<div id="projectModal" style="position:fixed;inset:0;z-index:500;display:flex;align-items:center;justify-content:center;padding:16px;opacity:0;visibility:hidden;transition:all .3s;background:rgba(5,15,30,.93);">
    <div id="modalBox" style="background:#111;border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:32px;max-width:600px;width:100%;max-height:90vh;overflow-y:auto;transform:translateY(24px);transition:all .3s;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;">
            <div><div id="modal-sub" style="font-size:.65rem;font-weight:700;letter-spacing:.16em;color:rgba(255,255,255,.3);margin-bottom:8px;text-transform:uppercase;"></div><h3 id="modal-title" style="font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:700;color:white;"></h3></div>
            <button onclick="closeModal()" style="background:rgba(255,255,255,.07);border:none;border-radius:8px;width:34px;height:34px;color:rgba(255,255,255,.5);cursor:pointer;font-size:1rem;" onmouseover="this.style.background='rgba(255,255,255,.13)'" onmouseout="this.style.background='rgba(255,255,255,.07)'">✕</button>
        </div>
        <p id="modal-desc" style="color:rgba(255,255,255,.6);font-size:.9rem;line-height:1.8;"></p>
        <div id="modal-chips" class="flex flex-wrap gap-2 mt-5"></div>
    </div>
</div>

<script>
/* ═══════════════════════════════════════════
   3D NEURAL NETWORK — CANVAS ENGINE
   Nodes float in 3D space, rotate slowly,
   connected by synaptic edges with glow.
═══════════════════════════════════════════ */
class NeuralNet {
    constructor(canvas, cfg = {}) {
        this.c   = canvas;
        this.ctx = canvas.getContext('2d');
        this.cfg = Object.assign({
            n       : 55,
            maxDist : 155,
            rotSpeed: 0.0022,
            dark    : true,
            minR    : 1.5,
            maxR    : 4.5,
            depth   : 600,
        }, cfg);
        this.nodes = [];
        this._fit();
        this._spawn();
        this._raf = null;
    }

    _fit() {
        this.W = this.c.width  = this.c.offsetWidth  || 600;
        this.H = this.c.height = this.c.offsetHeight || 400;
    }

    _spawn() {
        this.nodes = [];
        const { n, minR, maxR, depth } = this.cfg;
        for (let i = 0; i < n; i++) {
            this.nodes.push({
                x : (Math.random() - .5) * this.W * 1.35,
                y : (Math.random() - .5) * this.H * 1.35,
                z : Math.random() * depth - depth / 2,
                vx: (Math.random() - .5) * .28,
                vy: (Math.random() - .5) * .28,
                r : minR + Math.random() * (maxR - minR),
                ph: Math.random() * Math.PI * 2,
            });
        }
    }

    _proj(n) {
        const s = this.cfg.depth / (this.cfg.depth + n.z);
        return { px: n.x * s + this.W / 2, py: n.y * s + this.H / 2, s };
    }

    _tick(t) {
        const ctx = this.ctx, { maxDist, rotSpeed, dark, depth } = this.cfg;
        ctx.clearRect(0, 0, this.W, this.H);

        // slow XZ rotation
        const ca = Math.cos(rotSpeed), sa = Math.sin(rotSpeed);
        const hW = this.W * .8, hH = this.H * .8, hD = depth / 2;
        this.nodes.forEach(n => {
            const nx = n.x * ca - n.z * sa;
            n.z      = n.x * sa + n.z * ca;
            n.x = nx;
            n.x += n.vx; n.y += n.vy;
            if (n.x >  hW) n.x = -hW;
            if (n.x < -hW) n.x =  hW;
            if (n.y >  hH) n.y = -hH;
            if (n.y < -hH) n.y =  hH;
            if (n.z >  hD) n.z = -hD;
            if (n.z < -hD) n.z =  hD;
        });

        const P = this.nodes.map(n => this._proj(n));

        // edges
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const a = P[i], b = P[j];
                const d = Math.hypot(a.px - b.px, a.py - b.py);
                if (d > maxDist) continue;
                const al = (1 - d / maxDist) * .6 * ((a.s + b.s) / 2);
                ctx.strokeStyle = dark
                    ? `rgba(90,155,255,${al})`
                    : `rgba(10,42,77,${al * .65})`;
                ctx.lineWidth = .75 * ((a.s + b.s) / 2);
                ctx.beginPath();
                ctx.moveTo(a.px, a.py);
                ctx.lineTo(b.px, b.py);
                ctx.stroke();
            }
        }

        // nodes
        this.nodes.forEach((n, i) => {
            const { px, py, s } = P[i];
            const pulse = .5 + .5 * Math.sin(t * .0012 + n.ph);
            const r  = n.r * s;
            const gR = r * (3 + pulse * 2.5);

            if (dark) {
                // outer glow
                const g1 = ctx.createRadialGradient(px, py, 0, px, py, gR);
                g1.addColorStop(0,   `rgba(120,185,255,${.32 * s * pulse})`);
                g1.addColorStop(.5,  `rgba(70,130,230,${.12 * s})`);
                g1.addColorStop(1,   'rgba(30,70,180,0)');
                ctx.beginPath(); ctx.arc(px, py, gR, 0, Math.PI * 2);
                ctx.fillStyle = g1; ctx.fill();
            }

            // core sphere (3D highlight)
            const g2 = ctx.createRadialGradient(px - r * .3, py - r * .3, 0, px, py, r);
            if (dark) {
                g2.addColorStop(0,   `rgba(225,240,255,${.95 * s})`);
                g2.addColorStop(.4,  `rgba(130,195,255,${.8 * s})`);
                g2.addColorStop(1,   `rgba(50,95,200,${.55 * s})`);
            } else {
                g2.addColorStop(0,   `rgba(70,115,180,${.9 * s})`);
                g2.addColorStop(.4,  `rgba(30,75,140,${.7 * s})`);
                g2.addColorStop(1,   `rgba(10,42,77,${.45 * s})`);
            }
            ctx.beginPath(); ctx.arc(px, py, Math.max(r, .5), 0, Math.PI * 2);
            ctx.fillStyle = g2; ctx.fill();
        });
    }

    start() {
        let t = 0;
        const loop = () => { t++; this._tick(t); this._raf = requestAnimationFrame(loop); };
        loop();
    }

    stop() { cancelAnimationFrame(this._raf); }

    resize() { this._fit(); }
}

/* ─── Boot all canvases ─── */
window.addEventListener('DOMContentLoaded', () => {

    // Hero — large & dramatic
    new NeuralNet(document.getElementById('neuralHero'), {
        n: 85, maxDist: 185, rotSpeed: .0022, dark: true, minR: 1.5, maxR: 5.5, depth: 750,
    }).start();

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
    document.getElementById('contactForm').addEventListener('submit', function(e) {
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
});

/* Scroll progress */
window.addEventListener('scroll', () => {
    document.getElementById('scroll-progress').style.width =
        (window.scrollY / (document.documentElement.scrollHeight - innerHeight) * 100) + '%';
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
ham.addEventListener('click', () => {
    mob.classList.toggle('open');
    const ls = ham.querySelectorAll('.hl');
    if (mob.classList.contains('open')) {
        ls[0].style.transform='rotate(45deg) translate(5px,5px)';
        ls[1].style.opacity='0';
        ls[2].style.transform='rotate(-45deg) translate(5px,-5px)';
    } else { ls.forEach(l=>{l.style.transform='';l.style.opacity='';}); }
});
function closeNav() {
    mob.classList.remove('open');
    ham.querySelectorAll('.hl').forEach(l=>{l.style.transform='';l.style.opacity='';});
}

/* Utils */
window.goto        = id => { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); closeNav(); };
window.downloadCV  = () => alert('CV download coming soon.');
window.toggleTheme = () => {
    document.body.classList.toggle('light-alt');
    document.getElementById('theme-icon').innerHTML =
        document.body.classList.contains('light-alt')
        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>'
        : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>';
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
    document.getElementById('modal-sub').textContent   = p.role;
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-desc').textContent  = p.desc;
    const chips = document.getElementById('modal-chips');
    chips.innerHTML = '';
    p.tech.forEach(t => {
        const s = document.createElement('span');
        s.className = 'tech-chip px-3 py-1 rounded-full text-xs';
        s.style.cssText = 'background:rgba(255,255,255,.08);color:rgba(255,255,255,.65);border:1px solid rgba(255,255,255,.14);';
        s.textContent = t; chips.appendChild(s);
    });
    const m = document.getElementById('projectModal'), b = document.getElementById('modalBox');
    m.style.opacity='1'; m.style.visibility='visible'; b.style.transform='translateY(0)';
    document.body.style.overflow='hidden';
};

window.closeModal = () => {
    const m = document.getElementById('projectModal'), b = document.getElementById('modalBox');
    m.style.opacity='0'; m.style.visibility='hidden'; b.style.transform='translateY(24px)';
    document.body.style.overflow='';
};

/* Close modal on backdrop click */
document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) window.closeModal();
});

/* Close modal on Escape key */
document.addEventListener('keydown', e => { if (e.key === 'Escape') window.closeModal(); });
</script>
</body>
</html>
