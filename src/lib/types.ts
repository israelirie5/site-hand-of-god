export type Locale = "fr" | "en";

export type LocalizedText = Record<Locale, string>;

export type NavItem = {
  label: LocalizedText;
  href: string;
};

export type ActionItem = {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  detail: LocalizedText;
  image: string;
  album: string[];
};

export type Project = {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  image: string;
  goal: string;
  raised: string;
  progress: number;
};

export type GalleryItem = {
  title: LocalizedText;
  type: "photo" | "video";
  category: "missions" | "children" | "distribution" | "community";
  image: string;
};

export type GalleryAlbum = {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  cover: string;
  category: GalleryItem["category"];
  photos: GalleryItem[];
};

export type Post = {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  body: LocalizedText;
  sections?: Array<{
    title: LocalizedText;
    text: LocalizedText;
  }>;
  gallery?: GalleryItem[];
  category: LocalizedText;
  date: string;
  image: string;
};

export type Testimonial = {
  quote: LocalizedText;
  name: string;
  role: LocalizedText;
};
