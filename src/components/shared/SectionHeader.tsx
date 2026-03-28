import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        centered && "text-center mx-auto max-w-3xl",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 mb-4",
          centered && "justify-center",
        )}
      >
        <span
          className="inline-block w-8 h-0.5 bg-terra-500 shrink-0 rounded-full"
          aria-hidden="true"
        />
        <span className="text-terra-500 uppercase tracking-widest text-sm font-bold font-display">
          {label}
        </span>
      </div>

      <h2
        className={cn(
          "font-display text-4xl lg:text-6xl font-bold uppercase leading-[1.1] tracking-tight",
          light ? "text-white" : "text-stone-900",
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-stone-400" : "text-stone-600",
            centered && "max-w-2xl mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
