import { Copy, Dices } from "lucide-react";
import type { Climber, GearSlot, PositionId, Rank } from "@/lib/climbers/types";
import { RANKS } from "@/lib/climbers/types";
import {
  GEAR,
  PALETTES,
  POSITIONS,
  gearForSlot,
  positionById,
  randomClimber,
  rankAllowed,
} from "@/lib/climbers/catalog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/cn";
import { useRoster } from "@/store/roster";

const SLOTS: { key: GearSlot; label: string }[] = [
  { key: "head", label: "Head" },
  { key: "torso", label: "Torso" },
  { key: "legs", label: "Legs" },
  { key: "mainHand", label: "Main hand" },
  { key: "offHand", label: "Off hand" },
  { key: "back", label: "Back" },
  { key: "aura", label: "Aura" },
];

export function ForgePanel({ climber }: { climber: Climber }) {
  const update = useRoster((s) => s.update);
  const duplicate = useRoster((s) => s.duplicate);
  const replace = useRoster((s) => s.replace);

  function setClass(classId: PositionId) {
    const pos = positionById(classId);
    update(climber.id, { classId, layers: { ...pos.defaults }, name: climber.name });
  }

  function randomize() {
    const next = randomClimber();
    replace({ ...next, id: climber.id, createdAt: climber.createdAt });
  }

  return (
    <aside className="flex h-full min-h-0 flex-col rounded-3xl bg-surface p-3 md:p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="font-display text-xs tracking-[0.22em] text-muted uppercase">Forge</p>
        <div className="flex gap-1">
          <Button size="sm" variant="outline" onClick={() => duplicate(climber.id)} aria-label="Duplicate">
            <Copy className="size-3.5" />
          </Button>
          <Button size="sm" variant="outline" onClick={randomize} aria-label="Randomize">
            <Dices className="size-3.5" />
            <span className="hidden sm:inline">Random</span>
          </Button>
        </div>
      </div>

      <div className="min-h-0 flex-1 space-y-5 overflow-y-auto pr-1">
        <div>
          <Label htmlFor="climber-name">Name</Label>
          <Input
            id="climber-name"
            value={climber.name}
            onChange={(e) => update(climber.id, { name: e.target.value })}
            maxLength={32}
          />
        </div>

        <div>
          <Label>Position</Label>
          <div className="grid grid-cols-2 gap-1.5">
            {POSITIONS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setClass(p.id)}
                className={cn(
                  "rounded-xl px-2.5 py-2 text-left text-xs leading-snug transition-[background-color,box-shadow] duration-150",
                  climber.classId === p.id
                    ? "bg-elevated text-fg shadow-[0_0_0_1px_rgba(255,255,255,0.16)]"
                    : "text-muted hover:bg-elevated/70",
                )}
              >
                <span className="block font-medium text-fg">{p.name}</span>
                <span className="text-[10px] text-subtle">{p.tog === "—" ? p.solo : p.tog}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label>Rank</Label>
          <div className="flex flex-wrap gap-1">
            {RANKS.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => update(climber.id, { rank: r as Rank })}
                className={cn(
                  "h-9 min-w-9 rounded-lg px-2 text-xs font-medium tabular-nums",
                  climber.rank === r
                    ? "bg-accent text-accent-fg"
                    : "bg-elevated text-muted hover:text-fg",
                )}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label>Tone</Label>
          <div className="grid grid-cols-5 gap-1.5">
            {PALETTES.map((p) => (
              <button
                key={p.id}
                type="button"
                aria-label={p.name}
                title={p.name}
                onClick={() => update(climber.id, { paletteId: p.id })}
                className={cn(
                  "flex h-11 items-center justify-center rounded-xl",
                  climber.paletteId === p.id
                    ? "shadow-[0_0_0_2px_var(--color-accent)]"
                    : "shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
                )}
                style={{ background: p.body }}
              />
            ))}
          </div>
        </div>

        {SLOTS.map((slot) => (
          <div key={slot.key}>
            <Label>{slot.label}</Label>
            <div className="flex flex-wrap gap-1">
              {gearForSlot(slot.key).map((g) => {
                const locked = !rankAllowed(g, climber.rank);
                const active = climber.layers[slot.key] === g.visual;
                return (
                  <button
                    key={g.id}
                    type="button"
                    disabled={locked}
                    onClick={() =>
                      update(climber.id, {
                        layers: { ...climber.layers, [slot.key]: g.visual },
                      })
                    }
                    className={cn(
                      "h-9 rounded-lg px-2.5 text-xs",
                      active ? "bg-accent text-accent-fg" : "bg-elevated text-muted",
                      locked && "opacity-30",
                    )}
                  >
                    {g.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <p className="pb-2 text-xs leading-relaxed text-subtle text-pretty">
          {positionById(climber.classId).role} {GEAR.length} cosmetics in the catalog. Higher rank unlocks
          heavier kit.
        </p>
      </div>
    </aside>
  );
}
