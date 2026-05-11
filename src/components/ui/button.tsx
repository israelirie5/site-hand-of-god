import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-hope-orange text-white shadow-soft hover:bg-[#d96d1f]",
  secondary: "border border-white/50 bg-white/15 text-white backdrop-blur hover:bg-white/25",
  ghost: "border border-sky-mist/70 bg-white text-ink hover:border-hope-orange hover:text-deep-blue",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: Variant;
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${styles[variant]} ${className}`}
      {...props}
    />
  );
}

export function ButtonLink({ className = "", variant = "primary", href, children, ...props }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
