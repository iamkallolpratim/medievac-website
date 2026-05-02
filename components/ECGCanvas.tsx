'use client';

import { useEffect, useRef } from 'react';

export default function ECGCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, offset = 0;
    let rafId: number;

    function resize() {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = '#E8231A';
      ctx.lineWidth = 1.5;
      ctx.beginPath();

      const period = 300;
      const amplitude = 60;
      let x = 0;
      ctx.moveTo(x, H / 2);

      while (x < W + period) {
        const t = ((x + offset) % period) / period;
        let dy = 0;
        if (t < 0.3) dy = 0;
        else if (t < 0.35) dy = -amplitude * ((t - 0.3) / 0.05);
        else if (t < 0.4) dy = amplitude * 3 * ((t - 0.35) / 0.05);
        else if (t < 0.45) dy = -amplitude * 2 * ((t - 0.4) / 0.05);
        else if (t < 0.55) dy = amplitude * 0.4 * Math.sin(((t - 0.45) / 0.1) * Math.PI);
        else dy = 0;

        ctx.lineTo(x, H / 2 + dy);
        x += 2;
      }

      ctx.stroke();
      offset = (offset + 1) % period;
      rafId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="ecg-canvas" />;
}
