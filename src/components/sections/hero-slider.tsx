"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/data/site";
import { pick } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import { ButtonLink } from "@/components/ui/button";

export function HeroSlider({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((value) => (value + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(id);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="relative h-[760px] overflow-hidden bg-deep-blue pt-20 text-white sm:h-[820px] lg:h-[860px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="image-grain absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(8, 31, 60, 0.92), rgba(8, 31, 60, 0.46), rgba(8, 31, 60, 0.2)), url(${slide.image})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
          }}
        />
      </AnimatePresence>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 pb-20 pt-10 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-sky-mist">Hand of God</p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">{pick(slide.title, locale)}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">{pick(slide.text, locale)}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`/donate?lang=${locale}`}>{locale === "fr" ? "Faire un don" : "Donate"}</ButtonLink>
            <ButtonLink href={`/volunteer?lang=${locale}`} variant="secondary">
              {locale === "fr" ? "Devenir benevole" : "Volunteer"}
            </ButtonLink>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((item, index) => (
          <button
            key={item.image}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={`h-1.5 rounded-full transition-all ${index === active ? "w-10 bg-hope-orange" : "w-4 bg-white/45"}`}
          />
        ))}
      </div>
    </section>
  );
}
