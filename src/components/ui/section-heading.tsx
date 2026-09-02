import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Shared section header so every section shares one typographic rhythm:
 * ruled eyebrow → large display heading → optional lead paragraph.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className={cn("eyebrow", tone === "light" ? "text-maroon-500" : "text-saffron-300")}>
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display mt-4 text-balance text-3xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-charcoal" : "text-cream"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-charcoal/70" : "text-cream/75"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
