import { Download } from "lucide-react";
import { useRef } from "react";
import type { Climber } from "@/lib/climbers/types";
import { computeStats, paletteById, positionById } from "@/lib/climbers/catalog";
import { StickmanFigure } from "@/components/stickman/StickmanFigure";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Stage({ climber }: { climber: Climber }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pos = positionById(climber.classId);
  const pal = paletteById(climber.paletteId);
  const stats = computeStats(climber.classId, climber.rank);

  async function exportPng() {
    const svg = wrapRef.current?.querySelector("svg");
    if (!svg) return;
    const clone = svg.cloneNode(true) as SVGSVGElement;
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clone.setAttribute("width", "640");
    clone.setAttribute("height", "960");
    const xml = new XMLSerializer().serializeToString(clone);
    const blob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 640;
      canvas.height = 960;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "#0a0a0b";
      ctx.fillRect(0, 0, 640, 960);
      ctx.drawImage(img, 0, 0, 640, 960);
      URL.revokeObjectURL(url);
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = `${climber.name.replace(/\s+/g, "_").toLowerCase()}.png`;
      a.click();
    };
    img.src = url;
  }

  return (
    <section className="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-3xl bg-surface p-3 md:p-5">
      <div className="pointer-events-none absolute inset-x-10 top-10 h-64 rounded-full bg-elevated/80 blur-3xl" />
      <div className="relative z-10 mb-2 flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-xs tracking-[0.22em] text-muted uppercase">Gate stage</p>
          <h2 className="mt-1 font-display text-3xl leading-none tracking-tight text-fg text-balance md:text-4xl">
            {climber.name}
          </h2>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <Badge>{pos.name}</Badge>
            <Badge>Rank {climber.rank}</Badge>
            <Badge>{pal.name}</Badge>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={() => void exportPng()} className="shrink-0">
          <Download className="size-4" />
          <span className="hidden sm:inline">Export</span>
        </Button>
      </div>

      <div ref={wrapRef} className="relative mx-auto w-full max-w-md flex-1">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 320 480" aria-hidden>
          <ellipse cx="160" cy="248" rx="118" ry="168" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
          <ellipse cx="160" cy="248" rx="96" ry="138" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        </svg>
        <StickmanFigure climber={climber} />
      </div>

      <dl className="relative z-10 mt-2 grid grid-cols-5 gap-1 rounded-2xl bg-elevated p-2">
        {Object.entries(stats).map(([k, v]) => (
          <div key={k} className="rounded-lg px-1 py-1.5 text-center">
            <dt className="text-[10px] tracking-wide text-subtle uppercase">{k}</dt>
            <dd className="font-display text-lg tabular-nums text-fg">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
