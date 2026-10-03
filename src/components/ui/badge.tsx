import { cn } from "@/lib/cn";

export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-full px-2.5 text-[11px] font-medium tracking-wide text-muted uppercase",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
