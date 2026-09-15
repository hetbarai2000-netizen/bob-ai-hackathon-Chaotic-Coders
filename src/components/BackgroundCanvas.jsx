import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate background particle nodes
    const particleCount = Math.floor(Math.min(width, 1400) / 25);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.4 ? '#A5D6A7' : '#66BB6A',
    }));

    // Floating DNA helix nodes
    let time = 0;

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ambient glow spots
      const gradient = ctx.createRadialGradient(
        width * 0.2, height * 0.3, 10,
        width * 0.2, height * 0.3, width * 0.5
      );
      gradient.addColorStop(0, 'rgba(200, 230, 201, 0.15)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const gradient2 = ctx.createRadialGradient(
        width * 0.8, height * 0.7, 10,
        width * 0.8, height * 0.7, width * 0.5
      );
      gradient2.addColorStop(0, 'rgba(165, 214, 167, 0.08)');
      gradient2.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw subtle interconnecting molecular network
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.opacity * 0.6;
        ctx.fill();

        // Connect nearby particles with fine lines (low opacity 5-8%)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#A5D6A7';
            ctx.globalAlpha = (1 - dist / 130) * 0.07;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 3. Draw low-opacity DNA Strand graphic floating gently on the far right
      ctx.globalAlpha = 0.05;
      ctx.lineWidth = 1.5;
      const dnaCenterX = width > 900 ? width * 0.88 : width * 0.92;
      const basePoints = 20;
      const strandHeight = height * 0.8;
      const startY = height * 0.1;

      for (let i = 0; i < basePoints; i++) {
        const y = startY + (i / basePoints) * strandHeight;
        const phase = time + i * 0.35;
        const xOffset = Math.sin(phase) * 45;

        const p1X = dnaCenterX + xOffset;
        const p2X = dnaCenterX - xOffset;

        // Base pair rungs
        ctx.beginPath();
        ctx.moveTo(p1X, y);
        ctx.lineTo(p2X, y);
        ctx.strokeStyle = '#43A047';
        ctx.stroke();

        // Helix nodes
        ctx.beginPath();
        ctx.arc(p1X, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#66BB6A';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p2X, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#43A047';
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
}
