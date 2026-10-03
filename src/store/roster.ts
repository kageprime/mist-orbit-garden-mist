import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Climber } from "@/lib/climbers/types";
import { makeFromPosition, seedRoster, uid } from "@/lib/climbers/catalog";

type State = {
  climbers: Climber[];
  selectedId: string | null;
  select: (id: string) => void;
  update: (id: string, patch: Partial<Climber>) => void;
  add: (c?: Climber) => void;
  duplicate: (id: string) => void;
  remove: (id: string) => void;
  replace: (c: Climber) => void;
};

export const useRoster = create<State>()(
  persist(
    (set, get) => ({
      climbers: seedRoster(),
      selectedId: "seed-player",
      select: (id) => set({ selectedId: id }),
      update: (id, patch) =>
        set({
          climbers: get().climbers.map((c) => (c.id === id ? { ...c, ...patch } : c)),
        }),
      add: (c) => {
        const next = c ?? makeFromPosition("player");
        set({ climbers: [next, ...get().climbers], selectedId: next.id });
      },
      duplicate: (id) => {
        const src = get().climbers.find((c) => c.id === id);
        if (!src) return;
        const copy: Climber = {
          ...src,
          id: uid(),
          name: `${src.name} copy`,
          createdAt: Date.now(),
          layers: { ...src.layers },
        };
        set({ climbers: [copy, ...get().climbers], selectedId: copy.id });
      },
      remove: (id) => {
        const rest = get().climbers.filter((c) => c.id !== id);
        const selectedId = get().selectedId === id ? (rest[0]?.id ?? null) : get().selectedId;
        set({ climbers: rest, selectedId });
      },
      replace: (c) =>
        set({
          climbers: get().climbers.map((x) => (x.id === c.id ? c : x)),
        }),
    }),
    {
      name: "gatewalkers-roster-v1",
      skipHydration: true,
    },
  ),
);

export function useSelected(): Climber | null {
  return useRoster((s) => s.climbers.find((c) => c.id === s.selectedId) ?? s.climbers[0] ?? null);
}
