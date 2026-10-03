export const RANKS = ["E", "D", "C", "B", "A", "S", "Apex"] as const;
export type Rank = (typeof RANKS)[number];

export const POSITION_IDS = [
  "player",
  "striker",
  "vanguard",
  "shadowblade",
  "arcane",
  "mender",
  "ranger",
  "beacon",
  "scout",
  "wave_controller",
  "anima",
] as const;
export type PositionId = (typeof POSITION_IDS)[number];

export type Stats = {
  hp: number;
  atk: number;
  def: number;
  spd: number;
  mana: number;
};

export type Palette = {
  id: string;
  name: string;
  body: string;
  outline: string;
  accent: string;
  glow: string;
};

export type GearSlot =
  | "head"
  | "torso"
  | "legs"
  | "mainHand"
  | "offHand"
  | "back"
  | "aura";

export type GearItem = {
  id: string;
  name: string;
  slot: GearSlot;
  visual: string;
  rankMin: Rank;
};

export type ClimberLayers = Record<GearSlot, string>;

export type Climber = {
  id: string;
  name: string;
  classId: PositionId;
  rank: Rank;
  paletteId: string;
  layers: ClimberLayers;
  createdAt: number;
};

export type PositionDef = {
  id: PositionId;
  name: string;
  role: string;
  solo: string;
  tog: string;
  signature: string;
  defaults: ClimberLayers;
  base: Stats;
};
