"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; r: number; hub: boolean };
type Edge = { a: number; b: number; len: number };
type Pulse = { edge: number; t: number; speed: number; dir: 1 | -1 };

export default function DistributionGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const context = canvasEl.getContext("2d");
    if (!context) return;

    // Non-null locals so type narrowing holds inside nested closures
    const el: HTMLCanvasElement = canvasEl;
    const g: CanvasRenderingContext2D = context;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let pulses: Pulse[] = [];
    let raf = 0;

    const COLORS = {
      line: "rgba(31, 42, 61, 0.85)",
      lineLive: "rgba(255, 176, 32, 0.20)",
      node: "rgba(94, 110, 140, 0.9)",
      hub: "#FFB020",
      pulse: "#FFCB66",
    };

    function build() {
      const rect = el.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      el.width = Math.floor(width * dpr);
      el.height = Math.floor(height * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Loose grid with jitter — engineered but organic
      const cell = width < 640 ? 96 : 116;
      const cols = Math.ceil(width / cell) + 1;
      const rows = Math.ceil(height / cell) + 1;
      nodes = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() < 0.32) continue;
          const jitterX = (Math.random() - 0.5) * cell * 0.7;
          const jitterY = (Math.random() - 0.5) * cell * 0.7;
          const hub = Math.random() < 0.085;
          nodes.push({
            x: c * cell + jitterX,
            y: r * cell + jitterY,
            r: hub ? 2.6 : 1.4,
            hub,
          });
        }
      }

      edges = [];
      const maxDist = cell * 1.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist && Math.random() < 0.55) {
            edges.push({ a: i, b: j, len: d });
          }
        }
      }

      pulses = [];
    }

    function spawnPulse() {
      if (edges.length === 0) return;
      const edge = Math.floor(Math.random() * edges.length);
      pulses.push({
        edge,
        t: 0,
        speed: 0.004 + Math.random() * 0.006,
        dir: Math.random() < 0.5 ? 1 : -1,
      });
    }

    function drawStatic() {
      g.clearRect(0, 0, width, height);
      g.lineWidth = 1;
      g.strokeStyle = COLORS.line;
      for (const e of edges) {
        const a = nodes[e.a];
        const b = nodes[e.b];
        g.beginPath();
        g.moveTo(a.x, a.y);
        g.lineTo(b.x, b.y);
        g.stroke();
      }
      for (const n of nodes) {
        g.beginPath();
        g.fillStyle = n.hub ? COLORS.hub : COLORS.node;
        g.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        g.fill();
      }
    }

    let lastSpawn = 0;
    function frame(now: number) {
      g.clearRect(0, 0, width, height);

      g.lineWidth = 1;
      for (const e of edges) {
        const a = nodes[e.a];
        const b = nodes[e.b];
        g.strokeStyle = COLORS.line;
        g.beginPath();
        g.moveTo(a.x, a.y);
        g.lineTo(b.x, b.y);
        g.stroke();
      }

      for (const n of nodes) {
        g.beginPath();
        g.fillStyle = n.hub ? COLORS.hub : COLORS.node;
        g.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        g.fill();
        if (n.hub) {
          g.beginPath();
          g.strokeStyle = "rgba(255, 176, 32, 0.18)";
          g.lineWidth = 1;
          g.arc(n.x, n.y, n.r + 4, 0, Math.PI * 2);
          g.stroke();
        }
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += p.speed;
        if (p.t >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        const e = edges[p.edge];
        if (!e) {
          pulses.splice(i, 1);
          continue;
        }
        const a = nodes[e.a];
        const b = nodes[e.b];
        const t = p.dir === 1 ? p.t : 1 - p.t;
        const x = a.x + (b.x - a.x) * t;
        const y = a.y + (b.y - a.y) * t;

        g.strokeStyle = COLORS.lineLive;
        g.lineWidth = 1.5;
        g.beginPath();
        g.moveTo(a.x, a.y);
        g.lineTo(b.x, b.y);
        g.stroke();

        g.beginPath();
        g.fillStyle = COLORS.pulse;
        g.arc(x, y, 1.8, 0, Math.PI * 2);
        g.fill();
      }

      if (now - lastSpawn > 240 && pulses.length < 26) {
        spawnPulse();
        lastSpawn = now;
      }

      raf = requestAnimationFrame(frame);
    }

    build();
    if (prefersReduced) {
      drawStatic();
    } else {
      for (let i = 0; i < 8; i++) spawnPulse();
      raf = requestAnimationFrame(frame);
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        cancelAnimationFrame(raf);
        build();
        if (prefersReduced) {
          drawStatic();
        } else {
          raf = requestAnimationFrame(frame);
        }
      }, 200);
    }

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
