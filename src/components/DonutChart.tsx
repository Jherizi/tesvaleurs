"use client";

import { ValeurClassee } from "@/lib/types";

interface Props {
  valeurs: ValeurClassee[];
  size?: number;
}

export const COLORS = [
  "#F26522", // rang 1 · terracotta
  "#7C3AED", // rang 2 · sage / violet
  "#0F0D2E", // rang 3 · brun-profond
  "#D94F00", // rang 4 · terracotta-dark
  "#A78BFA", // rang 5 · sage-light
  "#FF8F5C", // rang 6 · peach
  "#1E293B", // rang 7 · brun
];

export default function DonutChart({ valeurs, size = 280 }: Props) {
  const total = valeurs.reduce((sum, v) => sum + v.score, 0);
  const radius = size / 2 - 20;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  let cumulativePercent = 0;

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {valeurs.map((v, i) => {
          const percent = total > 0 ? v.score / total : 0;
          const dashLength = circumference * percent;
          const dashGap = circumference - dashLength;
          const offset = circumference * (1 - cumulativePercent) + circumference * 0.25;
          cumulativePercent += percent;

          return (
            <circle
              key={v.valeur}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={COLORS[i % COLORS.length]}
              strokeWidth={40}
              strokeDasharray={`${dashLength} ${dashGap}`}
              strokeDashoffset={offset}
              className="transition-all duration-700"
            />
          );
        })}
        {/* Center hole */}
        <circle cx={center} cy={center} r={radius - 30} fill="#FAFAFE" />
        <text
          x={center}
          y={center - 6}
          textAnchor="middle"
          className="fill-brun font-serif text-lg font-bold"
          fontSize="18"
        >
          Tes valeurs
        </text>
        <text
          x={center}
          y={center + 16}
          textAnchor="middle"
          className="fill-brun/50 text-sm"
          fontSize="13"
        >
          hautes
        </text>
      </svg>

      {/* Legend */}
      <div className="mt-4 space-y-2 w-full max-w-xs">
        {valeurs.map((v, i) => (
          <div key={v.valeur} className="flex items-center gap-3">
            <div
              className="w-4 h-4 rounded-sm flex-shrink-0"
              style={{ backgroundColor: COLORS[i % COLORS.length] }}
            />
            <span className="flex-1 text-sm text-brun">
              {v.valeur}
            </span>
            <span className="text-sm font-medium text-brun/60">
              {v.score}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
