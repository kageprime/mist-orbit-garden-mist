import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Dices, i as Download, n as Trash2, o as Copy, r as Plus } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-aN1tAPpp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RANKS = [
	"E",
	"D",
	"C",
	"B",
	"A",
	"S",
	"Apex"
];
var POSITIONS = [
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
			aura: "shadow"
		},
		base: {
			hp: 80,
			atk: 12,
			def: 6,
			spd: 14,
			mana: 20
		}
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
			aura: "none"
		},
		base: {
			hp: 160,
			atk: 48,
			def: 22,
			spd: 18,
			mana: 15
		}
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
			aura: "none"
		},
		base: {
			hp: 220,
			atk: 18,
			def: 45,
			spd: 6,
			mana: 10
		}
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
			aura: "none"
		},
		base: {
			hp: 90,
			atk: 28,
			def: 10,
			spd: 25,
			mana: 15
		}
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
			aura: "runes"
		},
		base: {
			hp: 100,
			atk: 10,
			def: 12,
			spd: 10,
			mana: 80
		}
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
			aura: "heal"
		},
		base: {
			hp: 120,
			atk: 5,
			def: 15,
			spd: 12,
			mana: 60
		}
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
			aura: "none"
		},
		base: {
			hp: 130,
			atk: 32,
			def: 14,
			spd: 16,
			mana: 20
		}
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
			aura: "beacon"
		},
		base: {
			hp: 110,
			atk: 8,
			def: 18,
			spd: 11,
			mana: 50
		}
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
			aura: "none"
		},
		base: {
			hp: 95,
			atk: 18,
			def: 12,
			spd: 28,
			mana: 25
		}
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
			aura: "wave"
		},
		base: {
			hp: 105,
			atk: 15,
			def: 14,
			spd: 13,
			mana: 90
		}
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
			aura: "spirit"
		},
		base: {
			hp: 115,
			atk: 12,
			def: 16,
			spd: 12,
			mana: 70
		}
	}
];
var PALETTES = [
	{
		id: "ash",
		name: "Ash",
		body: "#c8ccd4",
		outline: "#1c1c20",
		accent: "#f4f4f5",
		glow: "#d4d8de"
	},
	{
		id: "ink",
		name: "Ink",
		body: "#2a2a2e",
		outline: "#0a0a0b",
		accent: "#c8ccd4",
		glow: "#8a9098"
	},
	{
		id: "void",
		name: "Void",
		body: "#16161a",
		outline: "#050506",
		accent: "#9aa3ad",
		glow: "#6e7780"
	},
	{
		id: "steel",
		name: "Steel",
		body: "#8b95a1",
		outline: "#1e242c",
		accent: "#d7dde4",
		glow: "#b8c4ce"
	},
	{
		id: "bone",
		name: "Bone",
		body: "#e6e1d6",
		outline: "#3a372f",
		accent: "#8a8478",
		glow: "#f4f0e6"
	},
	{
		id: "moss",
		name: "Moss",
		body: "#5a6b58",
		outline: "#1b241a",
		accent: "#c5d4c0",
		glow: "#9bb396"
	},
	{
		id: "tide",
		name: "Tide",
		body: "#3d5566",
		outline: "#101820",
		accent: "#9ec4d6",
		glow: "#7aa8bc"
	},
	{
		id: "ember",
		name: "Ember",
		body: "#6a4a42",
		outline: "#1c1210",
		accent: "#e0b8ae",
		glow: "#c9998c"
	},
	{
		id: "dusk",
		name: "Dusk",
		body: "#4a4458",
		outline: "#16141c",
		accent: "#c4bdd4",
		glow: "#9a93b0"
	},
	{
		id: "pale",
		name: "Pale",
		body: "#d8e4dc",
		outline: "#2a3830",
		accent: "#6a8a78",
		glow: "#b8d0c4"
	}
];
var GEAR = [
	{
		id: "none",
		name: "None",
		slot: "head",
		visual: "none",
		rankMin: "E"
	},
	{
		id: "hood",
		name: "Hood",
		slot: "head",
		visual: "hood",
		rankMin: "E"
	},
	{
		id: "mask",
		name: "Assassin mask",
		slot: "head",
		visual: "mask",
		rankMin: "D"
	},
	{
		id: "helmet",
		name: "Plate helm",
		slot: "head",
		visual: "helmet",
		rankMin: "B"
	},
	{
		id: "circlet",
		name: "Circlet",
		slot: "head",
		visual: "circlet",
		rankMin: "C"
	},
	{
		id: "tunic",
		name: "Cloth tunic",
		slot: "torso",
		visual: "tunic",
		rankMin: "E"
	},
	{
		id: "leather",
		name: "Leather vest",
		slot: "torso",
		visual: "leather",
		rankMin: "D"
	},
	{
		id: "plate",
		name: "Plate chest",
		slot: "torso",
		visual: "plate",
		rankMin: "B"
	},
	{
		id: "coat",
		name: "Long coat",
		slot: "torso",
		visual: "coat",
		rankMin: "A"
	},
	{
		id: "robes",
		name: "Rune robes",
		slot: "torso",
		visual: "robes",
		rankMin: "C"
	},
	{
		id: "pants",
		name: "Simple pants",
		slot: "legs",
		visual: "pants",
		rankMin: "E"
	},
	{
		id: "greaves",
		name: "Greaves",
		slot: "legs",
		visual: "greaves",
		rankMin: "B"
	},
	{
		id: "main_none",
		name: "Unarmed",
		slot: "mainHand",
		visual: "none",
		rankMin: "E"
	},
	{
		id: "sword",
		name: "Short sword",
		slot: "mainHand",
		visual: "sword",
		rankMin: "E"
	},
	{
		id: "greatsword",
		name: "Greatsword",
		slot: "mainHand",
		visual: "greatsword",
		rankMin: "C"
	},
	{
		id: "daggers",
		name: "Dual daggers",
		slot: "mainHand",
		visual: "daggers",
		rankMin: "D"
	},
	{
		id: "staff",
		name: "Staff",
		slot: "mainHand",
		visual: "staff",
		rankMin: "E"
	},
	{
		id: "spear",
		name: "Long spear",
		slot: "mainHand",
		visual: "spear",
		rankMin: "C"
	},
	{
		id: "orb",
		name: "Floating orb",
		slot: "mainHand",
		visual: "orb",
		rankMin: "B"
	},
	{
		id: "off_none",
		name: "None",
		slot: "offHand",
		visual: "none",
		rankMin: "E"
	},
	{
		id: "buckler",
		name: "Buckler",
		slot: "offHand",
		visual: "buckler",
		rankMin: "E"
	},
	{
		id: "tower",
		name: "Tower shield",
		slot: "offHand",
		visual: "tower",
		rankMin: "B"
	},
	{
		id: "grimoire",
		name: "Grimoire",
		slot: "offHand",
		visual: "grimoire",
		rankMin: "C"
	},
	{
		id: "back_none",
		name: "None",
		slot: "back",
		visual: "none",
		rankMin: "E"
	},
	{
		id: "cape",
		name: "Short cape",
		slot: "back",
		visual: "cape",
		rankMin: "C"
	},
	{
		id: "cloak",
		name: "Flowing cloak",
		slot: "back",
		visual: "cloak",
		rankMin: "A"
	},
	{
		id: "aura_none",
		name: "None",
		slot: "aura",
		visual: "none",
		rankMin: "E"
	},
	{
		id: "shadow",
		name: "Shadow field",
		slot: "aura",
		visual: "shadow",
		rankMin: "E"
	},
	{
		id: "runes",
		name: "Rune halo",
		slot: "aura",
		visual: "runes",
		rankMin: "C"
	},
	{
		id: "heal",
		name: "Life thread",
		slot: "aura",
		visual: "heal",
		rankMin: "D"
	},
	{
		id: "beacon",
		name: "Beacon light",
		slot: "aura",
		visual: "beacon",
		rankMin: "A"
	},
	{
		id: "wave",
		name: "Wave field",
		slot: "aura",
		visual: "wave",
		rankMin: "A"
	},
	{
		id: "spirit",
		name: "Spirit bind",
		slot: "aura",
		visual: "spirit",
		rankMin: "A"
	}
];
var RANK_MULT = {
	E: .7,
	D: .85,
	C: 1,
	B: 1.2,
	A: 1.5,
	S: 2,
	Apex: 2.6
};
function positionById(id) {
	return POSITIONS.find((p) => p.id === id) ?? POSITIONS[0];
}
function paletteById(id) {
	return PALETTES.find((p) => p.id === id) ?? PALETTES[0];
}
function gearForSlot(slot) {
	return GEAR.filter((g) => g.slot === slot);
}
function rankAllowed(item, rank) {
	return RANKS.indexOf(rank) >= RANKS.indexOf(item.rankMin);
}
function computeStats(classId, rank) {
	const base = positionById(classId).base;
	const m = RANK_MULT[rank];
	return {
		hp: Math.round(base.hp * m),
		atk: Math.round(base.atk * m),
		def: Math.round(base.def * m),
		spd: Math.round(base.spd * m),
		mana: Math.round(base.mana * m)
	};
}
function uid() {
	return crypto.randomUUID();
}
var SEED_MAP = [
	{
		classId: "player",
		paletteId: "void",
		rank: "E",
		name: "Ashen Rookie"
	},
	{
		classId: "vanguard",
		paletteId: "steel",
		rank: "A",
		name: "Iron Line"
	},
	{
		classId: "striker",
		paletteId: "ink",
		rank: "S",
		name: "Last Cut"
	},
	{
		classId: "arcane",
		paletteId: "dusk",
		rank: "A",
		name: "Glyph"
	},
	{
		classId: "shadowblade",
		paletteId: "void",
		rank: "B",
		name: "Quiet Hour"
	},
	{
		classId: "mender",
		paletteId: "pale",
		rank: "B",
		name: "Thread"
	},
	{
		classId: "ranger",
		paletteId: "tide",
		rank: "A",
		name: "Horizon"
	},
	{
		classId: "beacon",
		paletteId: "bone",
		rank: "A",
		name: "Keep Light"
	},
	{
		classId: "scout",
		paletteId: "moss",
		rank: "B",
		name: "Green Mile"
	},
	{
		classId: "wave_controller",
		paletteId: "tide",
		rank: "A",
		name: "Undertow"
	},
	{
		classId: "anima",
		paletteId: "ember",
		rank: "A",
		name: "Binder"
	}
];
function seedRoster() {
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
			createdAt: now - (SEED_MAP.length - i) * 1e3
		};
	});
}
function makeFromPosition(classId) {
	const pos = positionById(classId);
	return {
		id: uid(),
		name: pos.name,
		classId,
		rank: "C",
		paletteId: PALETTES[Math.floor(Math.random() * PALETTES.length)].id,
		layers: { ...pos.defaults },
		createdAt: Date.now()
	};
}
function pick(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
function randomClimber() {
	const pos = pick(POSITIONS);
	const rank = pick([...RANKS]);
	const layers = { ...pos.defaults };
	Object.keys(layers).forEach((slot) => {
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
		createdAt: Date.now()
	};
}
function cn(...parts) {
	return twMerge(parts.filter(Boolean).join(" "));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-[background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			ghost: "bg-transparent text-fg hover:bg-elevated",
			outline: "bg-transparent text-fg shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.13)]",
			danger: "bg-elevated text-fg hover:opacity-80"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-lg bg-elevated px-3 text-sm text-fg placeholder:text-subtle", "shadow-[0_0_0_1px_rgba(255,255,255,0.08)] outline-none", "focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1.5 block text-[11px] font-medium tracking-wide text-muted uppercase", className),
		...props
	});
}
var useRoster = create()(persist((set, get) => ({
	climbers: seedRoster(),
	selectedId: "seed-player",
	select: (id) => set({ selectedId: id }),
	update: (id, patch) => set({ climbers: get().climbers.map((c) => c.id === id ? {
		...c,
		...patch
	} : c) }),
	add: (c) => {
		const next = c ?? makeFromPosition("player");
		set({
			climbers: [next, ...get().climbers],
			selectedId: next.id
		});
	},
	duplicate: (id) => {
		const src = get().climbers.find((c) => c.id === id);
		if (!src) return;
		const copy = {
			...src,
			id: uid(),
			name: `${src.name} copy`,
			createdAt: Date.now(),
			layers: { ...src.layers }
		};
		set({
			climbers: [copy, ...get().climbers],
			selectedId: copy.id
		});
	},
	remove: (id) => {
		const rest = get().climbers.filter((c) => c.id !== id);
		set({
			climbers: rest,
			selectedId: get().selectedId === id ? rest[0]?.id ?? null : get().selectedId
		});
	},
	replace: (c) => set({ climbers: get().climbers.map((x) => x.id === c.id ? c : x) })
}), {
	name: "gatewalkers-roster-v1",
	skipHydration: true
}));
function useSelected() {
	return useRoster((s) => s.climbers.find((c) => c.id === s.selectedId) ?? s.climbers[0] ?? null);
}
var SLOTS = [
	{
		key: "head",
		label: "Head"
	},
	{
		key: "torso",
		label: "Torso"
	},
	{
		key: "legs",
		label: "Legs"
	},
	{
		key: "mainHand",
		label: "Main hand"
	},
	{
		key: "offHand",
		label: "Off hand"
	},
	{
		key: "back",
		label: "Back"
	},
	{
		key: "aura",
		label: "Aura"
	}
];
function ForgePanel({ climber }) {
	const update = useRoster((s) => s.update);
	const duplicate = useRoster((s) => s.duplicate);
	const replace = useRoster((s) => s.replace);
	function setClass(classId) {
		const pos = positionById(classId);
		update(climber.id, {
			classId,
			layers: { ...pos.defaults },
			name: climber.name
		});
	}
	function randomize() {
		const next = randomClimber();
		replace({
			...next,
			id: climber.id,
			createdAt: climber.createdAt
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex h-full min-h-0 flex-col rounded-3xl bg-surface p-3 md:p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xs tracking-[0.22em] text-muted uppercase",
				children: "Forge"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: () => duplicate(climber.id),
					"aria-label": "Duplicate",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "outline",
					onClick: randomize,
					"aria-label": "Randomize",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dices, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "Random"
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 space-y-5 overflow-y-auto pr-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "climber-name",
					children: "Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "climber-name",
					value: climber.name,
					onChange: (e) => update(climber.id, { name: e.target.value }),
					maxLength: 32
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Position" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-1.5",
					children: POSITIONS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setClass(p.id),
						className: cn("rounded-xl px-2.5 py-2 text-left text-xs leading-snug transition-[background-color,box-shadow] duration-150", climber.classId === p.id ? "bg-elevated text-fg shadow-[0_0_0_1px_rgba(255,255,255,0.16)]" : "text-muted hover:bg-elevated/70"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium text-fg",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-subtle",
							children: p.tog === "—" ? p.solo : p.tog
						})]
					}, p.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Rank" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1",
					children: RANKS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => update(climber.id, { rank: r }),
						className: cn("h-9 min-w-9 rounded-lg px-2 text-xs font-medium tabular-nums", climber.rank === r ? "bg-accent text-accent-fg" : "bg-elevated text-muted hover:text-fg"),
						children: r
					}, r))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Tone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-5 gap-1.5",
					children: PALETTES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": p.name,
						title: p.name,
						onClick: () => update(climber.id, { paletteId: p.id }),
						className: cn("flex h-11 items-center justify-center rounded-xl", climber.paletteId === p.id ? "shadow-[0_0_0_2px_var(--color-accent)]" : "shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"),
						style: { background: p.body }
					}, p.id))
				})] }),
				SLOTS.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: slot.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1",
					children: gearForSlot(slot.key).map((g) => {
						const locked = !rankAllowed(g, climber.rank);
						const active = climber.layers[slot.key] === g.visual;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: locked,
							onClick: () => update(climber.id, { layers: {
								...climber.layers,
								[slot.key]: g.visual
							} }),
							className: cn("h-9 rounded-lg px-2.5 text-xs", active ? "bg-accent text-accent-fg" : "bg-elevated text-muted", locked && "opacity-30"),
							children: g.name
						}, g.id);
					})
				})] }, slot.key)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "pb-2 text-xs leading-relaxed text-subtle text-pretty",
					children: [
						positionById(climber.classId).role,
						" ",
						GEAR.length,
						" cosmetics in the catalog. Higher rank unlocks heavier kit."
					]
				})
			]
		})]
	});
}
function StickmanFigure({ climber, className, idle = true, compact = false }) {
	const pal = paletteById(climber.paletteId);
	const uid = (0, import_react.useId)().replace(/:/g, "");
	const { layers, rank } = climber;
	const showBadge = rank === "A" || rank === "S" || rank === "Apex";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: compact ? "70 60 180 300" : "0 0 320 480",
		className: cn("h-full w-full overflow-visible", className),
		role: "img",
		"aria-label": `${climber.name}, ${climber.rank}-rank`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: `${uid}-aura`,
				cx: "50%",
				cy: "42%",
				r: "50%",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: pal.glow,
						stopOpacity: "0.45"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "70%",
						stopColor: pal.glow,
						stopOpacity: "0.08"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: pal.glow,
						stopOpacity: "0"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
				id: `${uid}-soft`,
				x: "-20%",
				y: "-20%",
				width: "140%",
				height: "140%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", { stdDeviation: "6" })
			})] }),
			!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "160",
				cy: "438",
				rx: "78",
				ry: "10",
				fill: pal.outline,
				opacity: "0.35"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: idle ? "stick-idle" : void 0,
				style: { transformOrigin: "160px 260px" },
				children: [
					layers.aura !== "none" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "160",
						cy: "210",
						rx: "110",
						ry: "150",
						fill: `url(#${uid}-aura)`,
						className: idle ? "stick-aura" : void 0
					}),
					layers.back === "cloak" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M118 148 C 70 210, 62 310, 88 390 L 160 300 L 232 390 C 258 310, 250 210, 202 148 Z",
						fill: pal.outline,
						opacity: "0.85"
					}),
					layers.back === "cape" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M124 150 C 96 200, 90 250, 108 300 L 160 250 L 212 300 C 230 250, 224 200, 196 150 Z",
						fill: pal.outline,
						opacity: "0.8"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						fill: "none",
						stroke: pal.outline,
						strokeWidth: 18,
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 258 L136 338 L126 412" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 258 L184 338 L194 412" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						fill: "none",
						stroke: pal.body,
						strokeWidth: 12,
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 258 L136 338 L126 412" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 258 L184 338 L194 412" })]
					}),
					layers.legs === "greaves" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						fill: pal.accent,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "114",
							y: "368",
							width: "24",
							height: "48",
							rx: "8"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "182",
							y: "368",
							width: "24",
							height: "48",
							rx: "8"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "160",
						y1: "148",
						x2: "160",
						y2: "258",
						stroke: pal.outline,
						strokeWidth: 26,
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "160",
						y1: "148",
						x2: "160",
						y2: "258",
						stroke: pal.body,
						strokeWidth: 18,
						strokeLinecap: "round"
					}),
					layers.torso === "plate" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "136",
						y: "162",
						width: "48",
						height: "72",
						rx: "10",
						fill: pal.accent,
						opacity: "0.92"
					}),
					layers.torso === "leather" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "140",
						y: "168",
						width: "40",
						height: "58",
						rx: "8",
						fill: pal.accent,
						opacity: "0.55"
					}),
					layers.torso === "tunic" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M142 170 L178 170 L186 248 L134 248 Z",
						fill: pal.accent,
						opacity: "0.35"
					}),
					layers.torso === "robes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M138 158 L182 158 L210 268 L110 268 Z",
						fill: pal.accent,
						opacity: "0.4"
					}),
					layers.torso === "coat" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M136 154 L184 154 L208 300 L112 300 Z",
						fill: pal.accent,
						opacity: "0.38"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						className: idle ? "stick-arm-l" : void 0,
						style: { transformOrigin: "160px 156px" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
								fill: "none",
								stroke: pal.outline,
								strokeWidth: 16,
								strokeLinecap: "round",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 156 L108 198 L86 258" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
								fill: "none",
								stroke: pal.body,
								strokeWidth: 10,
								strokeLinecap: "round",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 156 L108 198 L86 258" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OffHand, {
								kind: layers.offHand,
								pal,
								extraDagger: layers.mainHand === "daggers"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						className: idle ? "stick-arm-r" : void 0,
						style: { transformOrigin: "160px 156px" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
								fill: "none",
								stroke: pal.outline,
								strokeWidth: 16,
								strokeLinecap: "round",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 156 L212 198 L234 258" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
								fill: "none",
								stroke: pal.body,
								strokeWidth: 10,
								strokeLinecap: "round",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 156 L212 198 L234 258" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MainHand, {
								kind: layers.mainHand,
								pal
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "160",
						cy: "108",
						r: "30",
						fill: pal.outline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "160",
						cy: "108",
						r: "24",
						fill: pal.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadGear, {
						kind: layers.head,
						pal
					}),
					layers.aura === "runes" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						fill: "none",
						stroke: pal.accent,
						strokeWidth: "1.5",
						opacity: "0.8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "160",
							cy: "210",
							r: "78",
							strokeDasharray: "4 10"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "160",
							cy: "210",
							r: "58",
							strokeDasharray: "2 8"
						})]
					}),
					layers.aura === "beacon" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "196",
						cy: "86",
						r: "10",
						fill: pal.glow,
						opacity: "0.95"
					}),
					layers.aura === "spirit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "210",
						cy: "130",
						rx: "16",
						ry: "22",
						fill: pal.glow,
						opacity: "0.55"
					}),
					showBadge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
						points: "196,248 204,256 196,264 188,256",
						fill: pal.accent,
						stroke: pal.outline,
						strokeWidth: "1.5"
					})
				]
			})
		]
	});
}
function HeadGear({ kind, pal }) {
	if (kind === "hood") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M128 118 C 124 86, 196 86, 192 118 L 186 132 C 176 122, 144 122, 134 132 Z",
		fill: pal.outline
	});
	if (kind === "mask") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "138",
		y: "100",
		width: "44",
		height: "16",
		rx: "4",
		fill: pal.outline
	});
	if (kind === "helmet") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M132 108 C 132 78, 188 78, 188 108 L 186 120 L 134 120 Z",
		fill: pal.accent
	});
	if (kind === "circlet") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M134 96 C 148 84, 172 84, 186 96",
		fill: "none",
		stroke: pal.accent,
		strokeWidth: "4",
		strokeLinecap: "round"
	});
	return null;
}
function MainHand({ kind, pal }) {
	if (kind === "sword" || kind === "greatsword") {
		const len = kind === "greatsword" ? 108 : 68;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "234",
				y1: "258",
				x2: "248",
				y2: 258 - len,
				stroke: pal.outline,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "234",
				y1: "258",
				x2: "248",
				y2: 258 - len,
				stroke: pal.accent,
				strokeWidth: "4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "224",
				y1: "250",
				x2: "248",
				y2: "246",
				stroke: pal.outline,
				strokeWidth: "5"
			})
		] });
	}
	if (kind === "daggers") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
		x1: "234",
		y1: "258",
		x2: "246",
		y2: "214",
		stroke: pal.accent,
		strokeWidth: "4",
		strokeLinecap: "round"
	});
	if (kind === "staff") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "234",
			y1: "280",
			x2: "246",
			y2: "150",
			stroke: pal.outline,
			strokeWidth: "6",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "234",
			y1: "280",
			x2: "246",
			y2: "150",
			stroke: pal.accent,
			strokeWidth: "3",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "248",
			cy: "140",
			r: "10",
			fill: pal.glow,
			stroke: pal.outline,
			strokeWidth: "2"
		})
	] });
	if (kind === "spear") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "228",
			y1: "300",
			x2: "252",
			y2: "128",
			stroke: pal.outline,
			strokeWidth: "6",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "228",
			y1: "300",
			x2: "252",
			y2: "128",
			stroke: pal.accent,
			strokeWidth: "3",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "252,128 246,148 258,148",
			fill: pal.accent
		})
	] });
	if (kind === "orb") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "258",
		cy: "228",
		r: "14",
		fill: pal.glow,
		stroke: pal.accent,
		strokeWidth: "2"
	});
	return null;
}
function OffHand({ kind, pal, extraDagger }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		kind === "tower" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "48",
			y: "214",
			width: "36",
			height: "64",
			rx: "8",
			fill: pal.accent,
			stroke: pal.outline,
			strokeWidth: "3"
		}),
		kind === "buckler" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "72",
			cy: "246",
			r: "20",
			fill: pal.accent,
			stroke: pal.outline,
			strokeWidth: "3"
		}),
		kind === "grimoire" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "56",
			y: "236",
			width: "28",
			height: "22",
			rx: "2",
			fill: pal.accent,
			stroke: pal.outline,
			strokeWidth: "2"
		}),
		extraDagger && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "86",
			y1: "258",
			x2: "74",
			y2: "214",
			stroke: pal.accent,
			strokeWidth: "4",
			strokeLinecap: "round"
		})
	] });
}
function RosterRail() {
	const climbers = useRoster((s) => s.climbers);
	const selectedId = useRoster((s) => s.selectedId);
	const select = useRoster((s) => s.select);
	const add = useRoster((s) => s.add);
	const remove = useRoster((s) => s.remove);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex min-h-0 flex-col rounded-3xl bg-surface p-3 md:h-full md:p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xs tracking-[0.22em] text-muted uppercase",
				children: "Roster"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-subtle tabular-nums",
				children: [climbers.length, " climbers"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon",
				variant: "outline",
				onClick: () => add(),
				"aria-label": "New climber",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex min-h-0 gap-2 overflow-x-auto md:flex-1 md:flex-col md:space-y-1.5 md:overflow-y-auto md:overflow-x-hidden md:pr-1",
			children: climbers.map((c) => {
				const active = c.id === selectedId;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "min-w-[11rem] md:min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => select(c.id),
						className: cn("flex w-full items-center gap-2 rounded-2xl p-2 text-left transition-[background-color,box-shadow] duration-150", active ? "bg-elevated shadow-[0_0_0_1px_rgba(255,255,255,0.13)]" : "hover:bg-elevated/60"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-14 shrink-0 overflow-hidden rounded-xl bg-bg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickmanFigure, {
									climber: c,
									compact: true,
									idle: false
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-medium text-fg",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-xs text-muted",
									children: [
										positionById(c.classId).name,
										" · ",
										c.rank
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								role: "button",
								tabIndex: 0,
								"aria-label": `Remove ${c.name}`,
								className: "inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-subtle hover:bg-bg hover:text-fg",
								onClick: (e) => {
									e.stopPropagation();
									remove(c.id);
								},
								onKeyDown: (e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										e.stopPropagation();
										remove(c.id);
									}
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
							})
						]
					})
				}, c.id);
			})
		})]
	});
}
function Badge({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex h-6 items-center rounded-full px-2.5 text-[11px] font-medium tracking-wide text-muted uppercase", "shadow-[0_0_0_1px_rgba(255,255,255,0.08)]", className),
		children
	});
}
function Stage({ climber }) {
	const wrapRef = (0, import_react.useRef)(null);
	const pos = positionById(climber.classId);
	const pal = paletteById(climber.paletteId);
	const stats = computeStats(climber.classId, climber.rank);
	async function exportPng() {
		const svg = wrapRef.current?.querySelector("svg");
		if (!svg) return;
		const clone = svg.cloneNode(true);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-3xl bg-surface p-3 md:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-10 top-10 h-64 rounded-full bg-elevated/80 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mb-2 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-[0.22em] text-muted uppercase",
						children: "Gate stage"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl leading-none tracking-tight text-fg text-balance md:text-4xl",
						children: climber.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: pos.name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: ["Rank ", climber.rank] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: pal.name })
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => void exportPng(),
					className: "shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "Export"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: wrapRef,
				className: "relative mx-auto w-full max-w-md flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "pointer-events-none absolute inset-0 h-full w-full",
					viewBox: "0 0 320 480",
					"aria-hidden": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "160",
						cy: "248",
						rx: "118",
						ry: "168",
						fill: "none",
						stroke: "rgba(255,255,255,0.06)",
						strokeWidth: "1.5"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "160",
						cy: "248",
						rx: "96",
						ry: "138",
						fill: "none",
						stroke: "rgba(255,255,255,0.04)",
						strokeWidth: "1"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickmanFigure, { climber })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "relative z-10 mt-2 grid grid-cols-5 gap-1 rounded-2xl bg-elevated p-2",
				children: Object.entries(stats).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg px-1 py-1.5 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[10px] tracking-wide text-subtle uppercase",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "font-display text-lg tabular-nums text-fg",
						children: v
					})]
				}, k))
			})
		]
	});
}
function useHydrateRoster() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const result = useRoster.persist.rehydrate();
		Promise.resolve(result).then(() => setReady(true));
	}, []);
	return ready;
}
function Home() {
	const ready = useHydrateRoster();
	const climber = useSelected();
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-dvh items-center justify-center bg-bg text-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-sm tracking-[0.22em] uppercase",
			children: "Loading forge"
		})
	});
	if (!climber) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-dvh items-center justify-center bg-bg text-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No climbers in the roster." })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col overflow-hidden bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between px-4 py-4 md:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-[11px] tracking-[0.28em] text-muted uppercase",
				children: "Association forge"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl tracking-tight text-fg md:text-3xl",
				children: "Gatewalkers"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hidden max-w-xs text-right text-xs text-subtle md:block",
				children: "Same stickman body. Positions, ranks, tones, and kit set the silhouette."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "grid min-h-0 flex-1 grid-cols-1 grid-rows-[minmax(280px,1fr)_auto_minmax(180px,1fr)] gap-3 overflow-hidden px-3 pb-4 md:grid-cols-[16.5rem_minmax(0,1fr)_20rem] md:grid-rows-1 md:px-6 md:pb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 md:col-start-1 md:row-start-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RosterRail, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "row-start-1 flex min-h-0 md:col-start-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, { climber })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 md:col-start-3 md:row-start-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForgePanel, { climber })
				})
			]
		})]
	});
}
//#endregion
export { Home as component };
