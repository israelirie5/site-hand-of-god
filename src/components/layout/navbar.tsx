"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";
import { dictionary, pick } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import { ButtonLink } from "@/components/ui/button";

function currentLocale(params: URLSearchParams): Locale {
  return params.get("lang") === "en" ? "en" : "fr";
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = currentLocale(searchParams);
  const nextLocale = locale === "fr" ? "en" : "fr";
  const langHref = `${pathname}?lang=${nextLocale}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-deep-blue/88 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href={`/?lang=${locale}`} className="flex items-center gap-3">
          <Image
            src="/IMG_9022.PNG"
            alt="Hand of God"
            width={170}
            height={170}
            priority
            className="h-14 w-auto object-contain"
          />
          <span className="sr-only">Hand of God</span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`${item.href}?lang=${locale}`}
              className="text-sm text-white/78 transition hover:text-white"
            >
              {pick(item.label, locale)}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href={langHref} className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold">
            {dictionary[locale].nav.language}
          </Link>
          <ButtonLink href={`/donate?lang=${locale}`} className="min-h-11 px-5">
            {dictionary[locale].nav.donate}
          </ButtonLink>
        </div>
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-white/20 lg:hidden"
        >
          <span className="h-0.5 w-5 bg-white shadow-[0_7px_0_white,0_-7px_0_white]" />
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-deep-blue px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`${item.href}?lang=${locale}`}
                onClick={() => setOpen(false)}
                className="rounded-card px-3 py-3 text-white/85 hover:bg-white/10"
              >
                {pick(item.label, locale)}
              </Link>
            ))}
            <div className="mt-4 flex gap-3">
              <Link href={langHref} className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold">
                {dictionary[locale].nav.language}
              </Link>
              <ButtonLink href={`/donate?lang=${locale}`} className="flex-1">
                {dictionary[locale].nav.donate}
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
