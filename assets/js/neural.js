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
