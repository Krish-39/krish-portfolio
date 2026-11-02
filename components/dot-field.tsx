"use client";

import { useEffect, useRef } from "react";

const SPACING = 22; // px between dots
const RADIUS = 150; // how far the cursor's glow reaches
const BASE_ALPHA = 0.14;
const DECAY = 0.93; // how fast lit dots fade after the cursor leaves

// A field of dots behind the hero that light up and fade as the cursor moves,
// echoing the dot-matrix name. Static (no animation) for reduced motion and touch.
export function DotField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    let cols = 0;
    let rows = 0;
    let width = 0;
    let height = 0;
    let glow = new Float32Array(0);
    let pointer: { x: number; y: number } | null = null;
    let frame: number | null = null;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = host.clientWidth;
      height = host.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / SPACING) + 1;
      rows = Math.ceil(height / SPACING) + 1;
      glow = new Float32Array(cols * rows);
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      let active = false;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const x = c * SPACING + SPACING / 2;
          const y = r * SPACING + SPACING / 2;

          if (pointer) {
            const d = Math.hypot(x - pointer.x, y - pointer.y);
            if (d < RADIUS) glow[i] = Math.max(glow[i], 1 - d / RADIUS);
          }
          const g = glow[i];
          if (g > 0.01) active = true;

          const size = 1.2 + g * 2.4;
          ctx.fillStyle = `rgba(245, 245, 245, ${BASE_ALPHA + g * 0.75})`;
          ctx.fillRect(x - size / 2, y - size / 2, size, size);
          glow[i] = g * DECAY;
        }
      }
      return active;
    };

    const loop = () => {
      const active = draw();
      frame = active || pointer ? requestAnimationFrame(loop) : null;
    };

    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      if (frame === null) frame = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      pointer = null;
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);

    if (!reduceMotion && finePointer) {
      host.addEventListener("pointermove", onMove);
      host.addEventListener("pointerleave", onLeave);
    }

    return () => {
      observer.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="dot-field" aria-hidden="true" />;
}
