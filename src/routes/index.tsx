import { createFileRoute } from "@tanstack/react-router";
import { ForgePanel } from "@/components/forge/ForgePanel";
import { RosterRail } from "@/components/forge/RosterRail";
import { Stage } from "@/components/forge/Stage";
import { useHydrateRoster } from "@/components/forge/useHydrateRoster";
import { useSelected } from "@/store/roster";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const ready = useHydrateRoster();
  const climber = useSelected();

  if (!ready) {
    return (
      <main className="flex min-h-dvh items-center justify-center bg-bg text-muted">
        <p className="font-display text-sm tracking-[0.22em] uppercase">Loading forge</p>
      </main>
    );
  }

  if (!climber) {
    return (
      <main className="flex min-h-dvh items-center justify-center bg-bg text-muted">
        <p>No climbers in the roster.</p>
      </main>
    );
  }

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-bg">
      <header className="flex items-center justify-between px-4 py-4 md:px-6">
        <div>
          <p className="font-display text-[11px] tracking-[0.28em] text-muted uppercase">Association forge</p>
          <h1 className="font-display text-2xl tracking-tight text-fg md:text-3xl">Gatewalkers</h1>
        </div>
        <p className="hidden max-w-xs text-right text-xs text-subtle md:block">
          Same stickman body. Positions, ranks, tones, and kit set the silhouette.
        </p>
      </header>

      <main className="grid min-h-0 flex-1 grid-cols-1 grid-rows-[minmax(280px,1fr)_auto_minmax(180px,1fr)] gap-3 overflow-hidden px-3 pb-4 md:grid-cols-[16.5rem_minmax(0,1fr)_20rem] md:grid-rows-1 md:px-6 md:pb-6">
        <div className="min-h-0 md:col-start-1 md:row-start-1">
          <RosterRail />
        </div>
        <div className="row-start-1 flex min-h-0 md:col-start-2">
          <Stage climber={climber} />
        </div>
        <div className="min-h-0 md:col-start-3 md:row-start-1">
          <ForgePanel climber={climber} />
        </div>
      </main>
    </div>
  );
}
