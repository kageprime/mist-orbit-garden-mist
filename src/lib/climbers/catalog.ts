import type {
  Climber,
  ClimberLayers,
  GearItem,
  Palette,
  PositionDef,
  Rank,
  Stats,
} from "./types";
import { RANKS } from "./types";

export const POSITIONS: PositionDef[] = [
  {
    id: "player",
    name: "Shadow Climber",
    role: "Hybrid protagonist. Grows past a fixed awakening.",
    solo: "Player / Shadow path",
    tog: "Irregular",
    signature: "Dark body, hood, dual blades, evolving aura",
    defaults: {
      head: "hood",
      torso: "tunic",
      legs: "pants",
      mainHand: "daggers",
      offHand: "none",
      back: "none",
      aura: "shadow",
    },
    base: { hp: 80, atk: 12, def: 6, spd: 14, mana: 20 },
  },
  {
    id: "striker",
    name: "Blade Dancer",
    role: "Front-line physical damage.",
    solo: "Fighter",
    tog: "Fisherman",
    signature: "Long coat, greatsword, cloak",
    defaults: {
      head: "none",
      torso: "coat",
      legs: "pants",
      mainHand: "greatsword",
      offHand: "none",
      back: "cloak",
      aura: "none",
    },
    base: { hp: 160, atk: 48, def: 22, spd: 18, mana: 15 },
  },
  {
    id: "vanguard",
    name: "Iron Vanguard",
    role: "Hold the line. Absorb and protect.",
    solo: "Tanker",
    tog: "Defender",
    signature: "Plate, helmet, tower shield",
    defaults: {
      head: "helmet",
      torso: "plate",
      legs: "greaves",
      mainHand: "sword",
      offHand: "tower",
      back: "cape",
      aura: "none",
    },
    base: { hp: 220, atk: 18, def: 45, spd: 6, mana: 10 },
  },
  {
    id: "shadowblade",
    name: "Silent Edge",
    role: "Burst, mobility, a single clean cut.",
    solo: "Assassin",
    tog: "—",
    signature: "Mask, leather, dual daggers",
    defaults: {
      head: "mask",
      torso: "leather",
      legs: "pants",
      mainHand: "daggers",
      offHand: "none",
      back: "none",
      aura: "none",
    },
    base: { hp: 90, atk: 28, def: 10, spd: 25, mana: 15 },
  },
  {
    id: "arcane",
    name: "Rune Weaver",
    role: "Area spells and raw destruction.",
    solo: "Mage",
    tog: "—",
    signature: "Circlet, robes, staff, grimoire",
    defaults: {
      head: "circlet",
      torso: "robes",
      legs: "pants",
      mainHand: "staff",
      offHand: "grimoire",
      back: "none",
      aura: "runes",
    },
    base: { hp: 100, atk: 10, def: 12, spd: 10, mana: 80 },
  },
  {
    id: "mender",
    name: "Life Thread",
    role: "Sustain, cleanse, keep the party standing.",
    solo: "Healer",
    tog: "—",
    signature: "Soft tunic, staff, gentle aura",
    defaults: {
      head: "none",
      torso: "tunic",
      legs: "pants",
      mainHand: "staff",
      offHand: "none",
      back: "cape",
      aura: "heal",
    },
    base: { hp: 120, atk: 5, def: 15, spd: 12, mana: 60 },
  },
  {
    id: "ranger",
    name: "Sky Piercer",
    role: "Mid and long range physical.",
    solo: "Ranger",
    tog: "Spear Bearer",
    signature: "Leather, long spear",
    defaults: {
      head: "none",
      torso: "leather",
      legs: "pants",
      mainHand: "spear",
      offHand: "none",
      back: "none",
      aura: "none",
    },
    base: { hp: 130, atk: 32, def: 14, spd: 16, mana: 20 },
  },
  {
    id: "beacon",
    name: "Beacon Keeper",
    role: "Information, zones, battlefield light.",
    solo: "—",
    tog: "Light Bearer",
    signature: "Floating lighthouse orb",
    defaults: {
      head: "none",
      torso: "tunic",
      legs: "pants",
      mainHand: "orb",
      offHand: "none",
      back: "none",
      aura: "beacon",
    },
    base: { hp: 110, atk: 8, def: 18, spd: 11, mana: 50 },
  },
  {
    id: "scout",
    name: "Swift Scout",
    role: "Recon, pathing, assist the striker.",
    solo: "—",
    tog: "Scout",
    signature: "Hood, light armor, high speed",
    defaults: {
      head: "hood",
      torso: "leather",
      legs: "pants",
      mainHand: "sword",
      offHand: "none",
      back: "none",
      aura: "none",
    },
    base: { hp: 95, atk: 18, def: 12, spd: 28, mana: 25 },
  },
  {
    id: "wave_controller",
    name: "Wave Shaper",
    role: "Direct the flow of the fight.",
    solo: "—",
    tog: "Wave Controller",
    signature: "Orb, cloak, cool-blue field",
    defaults: {
      head: "circlet",
      torso: "robes",
      legs: "pants",
      mainHand: "orb",
      offHand: "none",
      back: "cloak",
      aura: "wave",
    },
    base: { hp: 105, atk: 15, def: 14, spd: 13, mana: 90 },
  },
  {
    id: "anima",
    name: "Spirit Binder",
    role: "Bind and command familiars.",
    solo: "—",
    tog: "Anima",
    signature: "Staff, spirit halo",
    defaults: {
      head: "none",
      torso: "tunic",
      legs: "pants",
      mainHand: "staff",
      offHand: "none",
      back: "none",
      aura: "spirit",
    },
    base: { hp: 115, atk: 12, def: 16, spd: 12, mana: 70 },
  },
];

export const PALETTES: Palette[] = [
  { id: "ash", name: "Ash", body: "#c8ccd4", outline: "#1c1c20", accent: "#f4f4f5", glow: "#d4d8de" },
  { id: "ink", name: "Ink", body: "#2a2a2e", outline: "#0a0a0b", accent: "#c8ccd4", glow: "#8a9098" },
  { id: "void", name: "Void", body: "#16161a", outline: "#050506", accent: "#9aa3ad", glow: "#6e7780" },
  { id: "steel", name: "Steel", body: "#8b95a1", outline: "#1e242c", accent: "#d7dde4", glow: "#b8c4ce" },
  { id: "bone", name: "Bone", body: "#e6e1d6", outline: "#3a372f", accent: "#8a8478", glow: "#f4f0e6" },
  { id: "moss", name: "Moss", body: "#5a6b58", outline: "#1b241a", accent: "#c5d4c0", glow: "#9bb396" },
  { id: "tide", name: "Tide", body: "#3d5566", outline: "#101820", accent: "#9ec4d6", glow: "#7aa8bc" },
  { id: "ember", name: "Ember", body: "#6a4a42", outline: "#1c1210", accent: "#e0b8ae", glow: "#c9998c" },
  { id: "dusk", name: "Dusk", body: "#4a4458", outline: "#16141c", accent: "#c4bdd4", glow: "#9a93b0" },
  { id: "pale", name: "Pale", body: "#d8e4dc", outline: "#2a3830", accent: "#6a8a78", glow: "#b8d0c4" },
];

export const GEAR: GearItem[] = [
  { id: "none", name: "None", slot: "head", visual: "none", rankMin: "E" },
  { id: "hood", name: "Hood", slot: "head", visual: "hood", rankMin: "E" },
  { id: "mask", name: "Assassin mask", slot: "head", visual: "mask", rankMin: "D" },
  { id: "helmet", name: "Plate helm", slot: "head", visual: "helmet", rankMin: "B" },
  { id: "circlet", name: "Circlet", slot: "head", visual: "circlet", rankMin: "C" },

  { id: "tunic", name: "Cloth tunic", slot: "torso", visual: "tunic", rankMin: "E" },
  { id: "leather", name: "Leather vest", slot: "torso", visual: "leather", rankMin: "D" },
  { id: "plate", name: "Plate chest", slot: "torso", visual: "plate", rankMin: "B" },
  { id: "coat", name: "Long coat", slot: "torso", visual: "coat", rankMin: "A" },
  { id: "robes", name: "Rune robes", slot: "torso", visual: "robes", rankMin: "C" },

  { id: "pants", name: "Simple pants", slot: "legs", visual: "pants", rankMin: "E" },
  { id: "greaves", name: "Greaves", slot: "legs", visual: "greaves", rankMin: "B" },

  { id: "main_none", name: "Unarmed", slot: "mainHand", visual: "none", rankMin: "E" },
  { id: "sword", name: "Short sword", slot: "mainHand", visual: "sword", rankMin: "E" },
  { id: "greatsword", name: "Greatsword", slot: "mainHand", visual: "greatsword", rankMin: "C" },
  { id: "daggers", name: "Dual daggers", slot: "mainHand", visual: "daggers", rankMin: "D" },
  { id: "staff", name: "Staff", slot: "mainHand", visual: "staff", rankMin: "E" },
  { id: "spear", name: "Long spear", slot: "mainHand", visual: "spear", rankMin: "C" },
  { id: "orb", name: "Floating orb", slot: "mainHand", visual: "orb", rankMin: "B" },

  { id: "off_none", name: "None", slot: "offHand", visual: "none", rankMin: "E" },
  { id: "buckler", name: "Buckler", slot: "offHand", visual: "buckler", rankMin: "E" },
  { id: "tower", name: "Tower shield", slot: "offHand", visual: "tower", rankMin: "B" },
  { id: "grimoire", name: "Grimoire", slot: "offHand", visual: "grimoire", rankMin: "C" },

  { id: "back_none", name: "None", slot: "back", visual: "none", rankMin: "E" },
  { id: "cape", name: "Short cape", slot: "back", visual: "cape", rankMin: "C" },
  { id: "cloak", name: "Flowing cloak", slot: "back", visual: "cloak", rankMin: "A" },

  { id: "aura_none", name: "None", slot: "aura", visual: "none", rankMin: "E" },
  { id: "shadow", name: "Shadow field", slot: "aura", visual: "shadow", rankMin: "E" },
  { id: "runes", name: "Rune halo", slot: "aura", visual: "runes", rankMin: "C" },
  { id: "heal", name: "Life thread", slot: "aura", visual: "heal", rankMin: "D" },
  { id: "beacon", name: "Beacon light", slot: "aura", visual: "beacon", rankMin: "A" },
  { id: "wave", name: "Wave field", slot: "aura", visual: "wave", rankMin: "A" },
  { id: "spirit", name: "Spirit bind", slot: "aura", visual: "spirit", rankMin: "A" },
];

const RANK_MULT: Record<Rank, number> = {
  E: 0.7,
  D: 0.85,
  C: 1,
  B: 1.2,
  A: 1.5,
  S: 2,
  Apex: 2.6,
};

export function positionById(id: string): PositionDef {
  return POSITIONS.find((p) => p.id === id) ?? POSITIONS[0];
}

export function paletteById(id: string): Palette {
  return PALETTES.find((p) => p.id === id) ?? PALETTES[0];
}

export function gearForSlot(slot: GearItem["slot"]): GearItem[] {
  return GEAR.filter((g) => g.slot === slot);
}

export function rankAllowed(item: GearItem, rank: Rank): boolean {
  return RANKS.indexOf(rank) >= RANKS.indexOf(item.rankMin);
}

export function computeStats(classId: Climber["classId"], rank: Rank): Stats {
  const base = positionById(classId).base;
  const m = RANK_MULT[rank];
  return {
    hp: Math.round(base.hp * m),
    atk: Math.round(base.atk * m),
    def: Math.round(base.def * m),
    spd: Math.round(base.spd * m),
    mana: Math.round(base.mana * m),
  };
}

export function uid(): string {
  return crypto.randomUUID();
}

const SEED_MAP: Array<{ classId: Climber["classId"]; paletteId: string; rank: Rank; name: string }> = [
  { classId: "player", paletteId: "void", rank: "E", name: "Ashen Rookie" },
  { classId: "vanguard", paletteId: "steel", rank: "A", name: "Iron Line" },
  { classId: "striker", paletteId: "ink", rank: "S", name: "Last Cut" },
  { classId: "arcane", paletteId: "dusk", rank: "A", name: "Glyph" },
  { classId: "shadowblade", paletteId: "void", rank: "B", name: "Quiet Hour" },
  { classId: "mender", paletteId: "pale", rank: "B", name: "Thread" },
  { classId: "ranger", paletteId: "tide", rank: "A", name: "Horizon" },
  { classId: "beacon", paletteId: "bone", rank: "A", name: "Keep Light" },
  { classId: "scout", paletteId: "moss", rank: "B", name: "Green Mile" },
  { classId: "wave_controller", paletteId: "tide", rank: "A", name: "Undertow" },
  { classId: "anima", paletteId: "ember", rank: "A", name: "Binder" },
];

export function seedRoster(): Climber[] {
  const now = Date.now();
  return SEED_MAP.map((s, i) => {
    const pos = positionById(s.classId);
    return {
      id: `seed-${s.classId}`,
      name: s.name,
      classId: s.classId,
      rank: s.rank,
      paletteId: s.paletteId,
      layers: { ...pos.defaults },
      createdAt: now - (SEED_MAP.length - i) * 1000,
    };
  });
}

export function makeFromPosition(classId: Climber["classId"]): Climber {
  const pos = positionById(classId);
  return {
    id: uid(),
    name: pos.name,
    classId,
    rank: "C",
    paletteId: PALETTES[Math.floor(Math.random() * PALETTES.length)].id,
    layers: { ...pos.defaults },
    createdAt: Date.now(),
  };
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randomClimber(): Climber {
  const pos = pick(POSITIONS);
  const rank = pick([...RANKS]);
  const layers: ClimberLayers = { ...pos.defaults };
  (Object.keys(layers) as Array<keyof ClimberLayers>).forEach((slot) => {
    const options = gearForSlot(slot).filter((g) => rankAllowed(g, rank));
    if (options.length) layers[slot] = options[Math.floor(Math.random() * options.length)].visual;
  });
  return {
    id: uid(),
    name: pos.name,
    classId: pos.id,
    rank,
    paletteId: pick(PALETTES).id,
    layers,
    createdAt: Date.now(),
  };
}

export const EMPTY_LAYERS: ClimberLayers = {
  head: "none",
  torso: "tunic",
  legs: "pants",
  mainHand: "none",
  offHand: "none",
  back: "none",
  aura: "none",
};
