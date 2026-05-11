"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryAlbums } from "@/data/site";
import { pick } from "@/lib/i18n";
import type { GalleryAlbum, GalleryItem, Locale } from "@/lib/types";
import { CinematicImage } from "@/components/ui/cinematic-image";

const filters: Array<"all" | GalleryItem["category"]> = ["all", "missions", "children", "distribution", "community"];

const filterLabels = {
  all: { fr: "Tous les albums", en: "All albums" },
  missions: { fr: "Missions", en: "Missions" },
  children: { fr: "Enfants", en: "Children" },
  distribution: { fr: "Dons", en: "Donations" },
  community: { fr: "Terrain", en: "Field" },
} as const;

export function GalleryGrid({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const [album, setAlbum] = useState<GalleryAlbum | null>(null);
  const [active, setActive] = useState<GalleryItem | null>(null);
  const albums = galleryAlbums.filter((item) => filter === "all" || item.category === filter);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => {
              setFilter(item);
              setAlbum(null);
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              filter === item ? "bg-deep-blue text-white shadow-card" : "bg-white text-ink hover:bg-sky-mist"
            }`}
          >
            {pick(filterLabels[item], locale)}
          </button>
        ))}
      </div>

      {album ? (
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <button onClick={() => setAlbum(null)} className="mb-4 text-sm font-bold text-hope-orange">
              {locale === "fr" ? "Retour aux albums" : "Back to albums"}
            </button>
            <h2 className="text-3xl font-semibold text-deep-blue">{pick(album.title, locale)}</h2>
            <p className="mt-2 max-w-2xl text-ink/65">{pick(album.excerpt, locale)}</p>
          </div>
          <p className="text-sm font-semibold text-ink/50">
            {album.photos.length} {locale === "fr" ? "photos" : "photos"}
          </p>
        </div>
      ) : null}

      <motion.div layout className="grid auto-rows-[260px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {(album ? album.photos : albums).map((item, index) => {
            const isAlbum = "cover" in item;
            const image = isAlbum ? item.cover : item.image;
            return (
              <motion.button
                layout
                key={isAlbum ? item.slug : item.image}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                onClick={() => (isAlbum ? setAlbum(item) : setActive(item))}
                className={`group relative overflow-hidden rounded-card text-left shadow-card ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
              >
                <CinematicImage src={image} alt={pick(item.title, locale)} className="absolute inset-0 h-full transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink/82 via-ink/10 to-transparent opacity-95" />
                <div className="absolute bottom-0 left-0 z-20 p-5 text-white">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-mist">
                    {isAlbum ? (locale === "fr" ? "Album" : "Album") : item.type}
                  </p>
                  <p className="text-lg font-semibold">{pick(item.title, locale)}</p>
                  {isAlbum ? <p className="mt-2 text-sm text-white/70">{item.photos.length} photos</p> : null}
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active ? (
          <motion.button
            className="fixed inset-0 z-[80] grid bg-ink/88 p-5 backdrop-blur-sm"
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative m-auto h-[78vh] w-full max-w-5xl"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
            >
              <CinematicImage src={active.image} alt={pick(active.title, locale)} className="h-full rounded-card bg-ink" fit="contain" position="center center" />
              <div className="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-ink/85 to-transparent p-6 text-left text-white">
                <p className="text-2xl font-semibold">{pick(active.title, locale)}</p>
              </div>
            </motion.div>
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}
