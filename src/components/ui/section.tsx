import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeader({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-sky-mist" : "text-hope-orange"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-deep-blue"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-5 text-base leading-8 sm:text-lg ${light ? "text-white/75" : "text-ink/70"}`}>{text}</p> : null}
    </div>
  );
}
