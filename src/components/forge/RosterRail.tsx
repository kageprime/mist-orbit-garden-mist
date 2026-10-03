import { Plus, Trash2 } from "lucide-react";
import { StickmanFigure } from "@/components/stickman/StickmanFigure";
import { Button } from "@/components/ui/button";
import { positionById } from "@/lib/climbers/catalog";
import { cn } from "@/lib/cn";
import { useRoster } from "@/store/roster";

export function RosterRail() {
  const climbers = useRoster((s) => s.climbers);
  const selectedId = useRoster((s) => s.selectedId);
  const select = useRoster((s) => s.select);
  const add = useRoster((s) => s.add);
  const remove = useRoster((s) => s.remove);

  return (
    <aside className="flex min-h-0 flex-col rounded-3xl bg-surface p-3 md:h-full md:p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="font-display text-xs tracking-[0.22em] text-muted uppercase">Roster</p>
          <p className="text-sm text-subtle tabular-nums">{climbers.length} climbers</p>
        </div>
        <Button size="icon" variant="outline" onClick={() => add()} aria-label="New climber">
          <Plus className="size-4" />
        </Button>
      </div>
      <ul className="flex min-h-0 gap-2 overflow-x-auto md:flex-1 md:flex-col md:space-y-1.5 md:overflow-y-auto md:overflow-x-hidden md:pr-1">
        {climbers.map((c) => {
          const active = c.id === selectedId;
          return (
            <li key={c.id} className="min-w-[11rem] md:min-w-0">
              <button
                type="button"
                onClick={() => select(c.id)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-2xl p-2 text-left transition-[background-color,box-shadow] duration-150",
                  active ? "bg-elevated shadow-[0_0_0_1px_rgba(255,255,255,0.13)]" : "hover:bg-elevated/60",
                )}
              >
                <div className="size-14 shrink-0 overflow-hidden rounded-xl bg-bg">
                  <StickmanFigure climber={c} compact idle={false} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-fg">{c.name}</p>
                  <p className="truncate text-xs text-muted">
                    {positionById(c.classId).name} · {c.rank}
                  </p>
                </div>
                <span
                  role="button"
                  tabIndex={0}
                  aria-label={`Remove ${c.name}`}
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-subtle hover:bg-bg hover:text-fg"
                  onClick={(e) => {
                    e.stopPropagation();
                    remove(c.id);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      e.stopPropagation();
                      remove(c.id);
                    }
                  }}
                >
                  <Trash2 className="size-3.5" />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
