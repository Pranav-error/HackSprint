import { useEffect, useRef } from 'react';

const NUM_NODES = 48;
const NUM_PARTICLES = 30;
const NUM_RAIN_COLS = 35;
const CONNECT_DIST = 170;
const HEX = '0123456789ABCDEF';

const rand = (min: number, max: number) => Math.random() * (max - min) + min;
const randHex = (n: number) =>
  Array.from({ length: n }, () => HEX[Math.floor(Math.random() * 16)]).join('');

type BNode = {
  x: number; y: number; vx: number; vy: number;
  r: number; phase: number; id: string;
};
type Particle = { a: number; b: number; t: number; speed: number };
type RainCol = { x: number; y: number; speed: number; chars: string[]; alpha: number };

const BlockchainBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let nodes: BNode[] = [];
    let particles: Particle[] = [];
    let rain: RainCol[] = [];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      nodes = Array.from({ length: NUM_NODES }, () => ({
        x: rand(0, canvas.width),
        y: rand(0, canvas.height),
        vx: rand(-0.3, 0.3),
        vy: rand(-0.3, 0.3),
        r: rand(2, 5.5),
        phase: rand(0, Math.PI * 2),
        id: randHex(8),
      }));

      particles = Array.from({ length: NUM_PARTICLES }, () => ({
        a: Math.floor(rand(0, NUM_NODES)),
        b: Math.floor(rand(0, NUM_NODES)),
        t: Math.random(),
        speed: rand(0.0015, 0.005),
      }));

      rain = Array.from({ length: NUM_RAIN_COLS }, () => ({
        x: rand(0, canvas.width),
        y: rand(-canvas.height, 0),
        speed: rand(0.4, 1.4),
        chars: Array.from({ length: 28 }, () => randHex(2)),
        alpha: rand(0.04, 0.13),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // === Matrix hex rain ===
      ctx.font = '11px "Courier New", monospace';
      rain.forEach(col => {
        col.y += col.speed;
        if (Math.random() < 0.06) {
          col.chars[Math.floor(rand(0, col.chars.length))] = randHex(2);
        }
        if (col.y > canvas.height + 350) {
          col.y = rand(-350, -30);
          col.x = rand(0, canvas.width);
        }
        col.chars.forEach((ch, i) => {
          const fade = 1 - i / col.chars.length;
          const isHead = i === 0;
          ctx.fillStyle = isHead
            ? `rgba(255, 90, 90, ${Math.min(col.alpha * 5, 0.55)})`
            : `rgba(200, 15, 15, ${col.alpha * fade})`;
          ctx.fillText(ch, col.x, col.y + i * 14);
        });
      });

      // === Connection lines ===
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.5;
            // Dashed chain-link style
            ctx.setLineDash([4, 6]);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(210, 20, 20, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // === Nodes (blockchain blocks) ===
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        n.phase += 0.022;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        n.x = Math.max(0, Math.min(canvas.width, n.x));
        n.y = Math.max(0, Math.min(canvas.height, n.y));

        const pulse = Math.sin(n.phase) * 0.5 + 0.5;
        const gr = n.r * (4 + pulse * 6);

        // Outer glow
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, gr);
        glow.addColorStop(0, `rgba(255, 40, 40, ${0.4 + pulse * 0.25})`);
        glow.addColorStop(0.45, `rgba(180, 8, 8, 0.12)`);
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(n.x, n.y, gr, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot — square-ish for "block" feel on larger nodes
        if (n.r > 4) {
          const s = n.r * 1.6;
          ctx.save();
          ctx.translate(n.x, n.y);
          ctx.rotate(n.phase * 0.3);
          ctx.fillStyle = `rgba(255, ${50 + pulse * 90}, ${30 + pulse * 50}, ${0.9 + pulse * 0.1})`;
          ctx.fillRect(-s / 2, -s / 2, s, s);
          ctx.strokeStyle = `rgba(255, 120, 120, ${0.5 + pulse * 0.3})`;
          ctx.lineWidth = 0.8;
          ctx.strokeRect(-s / 2, -s / 2, s, s);
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, ${55 + pulse * 80}, ${35 + pulse * 40}, ${0.85 + pulse * 0.15})`;
          ctx.fill();
        }

        // Block hash label
        if (n.r > 3.8) {
          ctx.font = '7px monospace';
          ctx.fillStyle = `rgba(255, 130, 130, ${0.35 + pulse * 0.2})`;
          ctx.fillText(`0x${n.id}`, n.x + n.r + 5, n.y + 3);
        }
      });

      // === Particles (transactions flowing through chain) ===
      particles.forEach(p => {
        p.t += p.speed;
        if (p.t >= 1) {
          p.t = 0;
          p.a = p.b;
          p.b = Math.floor(rand(0, NUM_NODES));
        }
        const na = nodes[p.a];
        const nb = nodes[p.b];
        const dx = nb.x - na.x;
        const dy = nb.y - na.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d > CONNECT_DIST) return;

        const px = na.x + dx * p.t;
        const py = na.y + dy * p.t;

        // Bright head
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 230, 230, 0.98)';
        ctx.fill();

        // Glowing trail
        const trail = ctx.createRadialGradient(px, py, 0, px, py, 7);
        trail.addColorStop(0, 'rgba(255, 80, 80, 0.35)');
        trail.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fillStyle = trail;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    setup();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', setup);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', setup);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default BlockchainBackground;
