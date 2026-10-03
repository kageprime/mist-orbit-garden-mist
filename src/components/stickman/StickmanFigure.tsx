import { useId } from "react";
import type { Climber } from "@/lib/climbers/types";
import { paletteById } from "@/lib/climbers/catalog";
import { cn } from "@/lib/cn";

type Props = {
  climber: Climber;
  className?: string;
  idle?: boolean;
  compact?: boolean;
};

export function StickmanFigure({ climber, className, idle = true, compact = false }: Props) {
  const pal = paletteById(climber.paletteId);
  const uid = useId().replace(/:/g, "");
  const { layers, rank } = climber;
  const showBadge = rank === "A" || rank === "S" || rank === "Apex";

  return (
    <svg
      viewBox={compact ? "70 60 180 300" : "0 0 320 480"}
      className={cn("h-full w-full overflow-visible", className)}
      role="img"
      aria-label={`${climber.name}, ${climber.rank}-rank`}
    >
      <defs>
        <radialGradient id={`${uid}-aura`} cx="50%" cy="42%" r="50%">
          <stop offset="0%" stopColor={pal.glow} stopOpacity="0.45" />
          <stop offset="70%" stopColor={pal.glow} stopOpacity="0.08" />
          <stop offset="100%" stopColor={pal.glow} stopOpacity="0" />
        </radialGradient>
        <filter id={`${uid}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* floor */}
      {!compact && (
        <ellipse cx="160" cy="438" rx="78" ry="10" fill={pal.outline} opacity="0.35" />
      )}

      <g className={idle ? "stick-idle" : undefined} style={{ transformOrigin: "160px 260px" }}>
        {layers.aura !== "none" && (
          <ellipse
            cx="160"
            cy="210"
            rx="110"
            ry="150"
            fill={`url(#${uid}-aura)`}
            className={idle ? "stick-aura" : undefined}
          />
        )}

        {layers.back === "cloak" && (
          <path
            d="M118 148 C 70 210, 62 310, 88 390 L 160 300 L 232 390 C 258 310, 250 210, 202 148 Z"
            fill={pal.outline}
            opacity="0.85"
          />
        )}
        {layers.back === "cape" && (
          <path
            d="M124 150 C 96 200, 90 250, 108 300 L 160 250 L 212 300 C 230 250, 224 200, 196 150 Z"
            fill={pal.outline}
            opacity="0.8"
          />
        )}

        {/* legs */}
        <g
          fill="none"
          stroke={pal.outline}
          strokeWidth={18}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M160 258 L136 338 L126 412" />
          <path d="M160 258 L184 338 L194 412" />
        </g>
        <g
          fill="none"
          stroke={pal.body}
          strokeWidth={12}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M160 258 L136 338 L126 412" />
          <path d="M160 258 L184 338 L194 412" />
        </g>

        {layers.legs === "greaves" && (
          <g fill={pal.accent}>
            <rect x="114" y="368" width="24" height="48" rx="8" />
            <rect x="182" y="368" width="24" height="48" rx="8" />
          </g>
        )}

        {/* torso */}
        <line
          x1="160"
          y1="148"
          x2="160"
          y2="258"
          stroke={pal.outline}
          strokeWidth={26}
          strokeLinecap="round"
        />
        <line
          x1="160"
          y1="148"
          x2="160"
          y2="258"
          stroke={pal.body}
          strokeWidth={18}
          strokeLinecap="round"
        />

        {layers.torso === "plate" && (
          <rect x="136" y="162" width="48" height="72" rx="10" fill={pal.accent} opacity="0.92" />
        )}
        {layers.torso === "leather" && (
          <rect x="140" y="168" width="40" height="58" rx="8" fill={pal.accent} opacity="0.55" />
        )}
        {layers.torso === "tunic" && (
          <path d="M142 170 L178 170 L186 248 L134 248 Z" fill={pal.accent} opacity="0.35" />
        )}
        {layers.torso === "robes" && (
          <path d="M138 158 L182 158 L210 268 L110 268 Z" fill={pal.accent} opacity="0.4" />
        )}
        {layers.torso === "coat" && (
          <path d="M136 154 L184 154 L208 300 L112 300 Z" fill={pal.accent} opacity="0.38" />
        )}

        {/* left arm + offhand */}
        <g className={idle ? "stick-arm-l" : undefined} style={{ transformOrigin: "160px 156px" }}>
          <g fill="none" stroke={pal.outline} strokeWidth={16} strokeLinecap="round">
            <path d="M160 156 L108 198 L86 258" />
          </g>
          <g fill="none" stroke={pal.body} strokeWidth={10} strokeLinecap="round">
            <path d="M160 156 L108 198 L86 258" />
          </g>
          <OffHand kind={layers.offHand} pal={pal} extraDagger={layers.mainHand === "daggers"} />
        </g>

        {/* right arm + main */}
        <g className={idle ? "stick-arm-r" : undefined} style={{ transformOrigin: "160px 156px" }}>
          <g fill="none" stroke={pal.outline} strokeWidth={16} strokeLinecap="round">
            <path d="M160 156 L212 198 L234 258" />
          </g>
          <g fill="none" stroke={pal.body} strokeWidth={10} strokeLinecap="round">
            <path d="M160 156 L212 198 L234 258" />
          </g>
          <MainHand kind={layers.mainHand} pal={pal} />
        </g>

        {/* head */}
        <circle cx="160" cy="108" r="30" fill={pal.outline} />
        <circle cx="160" cy="108" r="24" fill={pal.body} />

        <HeadGear kind={layers.head} pal={pal} />

        {layers.aura === "runes" && (
          <g fill="none" stroke={pal.accent} strokeWidth="1.5" opacity="0.8">
            <circle cx="160" cy="210" r="78" strokeDasharray="4 10" />
            <circle cx="160" cy="210" r="58" strokeDasharray="2 8" />
          </g>
        )}
        {layers.aura === "beacon" && (
          <circle cx="196" cy="86" r="10" fill={pal.glow} opacity="0.95" />
        )}
        {layers.aura === "spirit" && (
          <ellipse cx="210" cy="130" rx="16" ry="22" fill={pal.glow} opacity="0.55" />
        )}

        {showBadge && (
          <polygon
            points="196,248 204,256 196,264 188,256"
            fill={pal.accent}
            stroke={pal.outline}
            strokeWidth="1.5"
          />
        )}
      </g>
    </svg>
  );
}

function HeadGear({
  kind,
  pal,
}: {
  kind: string;
  pal: { body: string; outline: string; accent: string; glow: string };
}) {
  if (kind === "hood") {
    return (
      <path
        d="M128 118 C 124 86, 196 86, 192 118 L 186 132 C 176 122, 144 122, 134 132 Z"
        fill={pal.outline}
      />
    );
  }
  if (kind === "mask") {
    return <rect x="138" y="100" width="44" height="16" rx="4" fill={pal.outline} />;
  }
  if (kind === "helmet") {
    return (
      <path d="M132 108 C 132 78, 188 78, 188 108 L 186 120 L 134 120 Z" fill={pal.accent} />
    );
  }
  if (kind === "circlet") {
    return (
      <path
        d="M134 96 C 148 84, 172 84, 186 96"
        fill="none"
        stroke={pal.accent}
        strokeWidth="4"
        strokeLinecap="round"
      />
    );
  }
  return null;
}

function MainHand({
  kind,
  pal,
}: {
  kind: string;
  pal: { body: string; outline: string; accent: string; glow: string };
}) {
  if (kind === "sword" || kind === "greatsword") {
    const len = kind === "greatsword" ? 108 : 68;
    return (
      <g>
        <line
          x1="234"
          y1="258"
          x2="248"
          y2={258 - len}
          stroke={pal.outline}
          strokeWidth="8"
          strokeLinecap="round"
        />
        <line
          x1="234"
          y1="258"
          x2="248"
          y2={258 - len}
          stroke={pal.accent}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line x1="224" y1="250" x2="248" y2="246" stroke={pal.outline} strokeWidth="5" />
      </g>
    );
  }
  if (kind === "daggers") {
    return (
      <line x1="234" y1="258" x2="246" y2="214" stroke={pal.accent} strokeWidth="4" strokeLinecap="round" />
    );
  }
  if (kind === "staff") {
    return (
      <g>
        <line x1="234" y1="280" x2="246" y2="150" stroke={pal.outline} strokeWidth="6" strokeLinecap="round" />
        <line x1="234" y1="280" x2="246" y2="150" stroke={pal.accent} strokeWidth="3" strokeLinecap="round" />
        <circle cx="248" cy="140" r="10" fill={pal.glow} stroke={pal.outline} strokeWidth="2" />
      </g>
    );
  }
  if (kind === "spear") {
    return (
      <g>
        <line x1="228" y1="300" x2="252" y2="128" stroke={pal.outline} strokeWidth="6" strokeLinecap="round" />
        <line x1="228" y1="300" x2="252" y2="128" stroke={pal.accent} strokeWidth="3" strokeLinecap="round" />
        <polygon points="252,128 246,148 258,148" fill={pal.accent} />
      </g>
    );
  }
  if (kind === "orb") {
    return <circle cx="258" cy="228" r="14" fill={pal.glow} stroke={pal.accent} strokeWidth="2" />;
  }
  return null;
}

function OffHand({
  kind,
  pal,
  extraDagger,
}: {
  kind: string;
  pal: { body: string; outline: string; accent: string; glow: string };
  extraDagger?: boolean;
}) {
  return (
    <g>
      {kind === "tower" && (
        <rect x="48" y="214" width="36" height="64" rx="8" fill={pal.accent} stroke={pal.outline} strokeWidth="3" />
      )}
      {kind === "buckler" && (
        <circle cx="72" cy="246" r="20" fill={pal.accent} stroke={pal.outline} strokeWidth="3" />
      )}
      {kind === "grimoire" && (
        <rect x="56" y="236" width="28" height="22" rx="2" fill={pal.accent} stroke={pal.outline} strokeWidth="2" />
      )}
      {extraDagger && (
        <line x1="86" y1="258" x2="74" y2="214" stroke={pal.accent} strokeWidth="4" strokeLinecap="round" />
      )}
    </g>
  );
}
