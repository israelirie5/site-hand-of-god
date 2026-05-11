import type { ActionItem, GalleryAlbum, GalleryItem, NavItem, Post, Project, Testimonial } from "@/lib/types";

function numberedImages(base: string, prefix: string, count: number) {
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return `${base}/${prefix}-${number}.jpg`;
  });
}

const yopougonAlbum = numberedImages("/media/edited/actions/orphelinat-yopougon-mami-adjoua", "yopougon-mami-adjoua", 22);
const azurettiFirstAlbum = numberedImages("/media/edited/actions/douce-mere-azuretti-premiere-edition", "azuretti-premiere-edition", 1);
const azurettiReturnAlbum = numberedImages("/media/edited/actions/retour-a-la-douce-mere-azuretti", "azuretti-annee-suivante", 44);
const potierAlbum = numberedImages("/media/edited/actions/maison-du-potier-yopougon-niangon-nord", "maison-du-potier", 63);

export const navItems: NavItem[] = [
  { label: { fr: "Accueil", en: "Home" }, href: "/" },
  { label: { fr: "A propos", en: "About" }, href: "/about" },
  { label: { fr: "Nos actions", en: "Actions" }, href: "/actions" },
  { label: { fr: "Nos projets", en: "Projects" }, href: "/projects" },
  { label: { fr: "Galerie", en: "Gallery" }, href: "/gallery" },
  { label: { fr: "Actualites", en: "News" }, href: "/news" },
  { label: { fr: "Contact", en: "Contact" }, href: "/contact" },
];

export const heroSlides = [
  {
    image: "/media/edited/actions/maison-du-potier-yopougon-niangon-nord/maison-du-potier-02.jpg",
    title: { fr: "La Maison du Potier, une mission de presence et de dignite.", en: "La Maison du Potier, a mission of presence and dignity." },
    text: {
      fr: "Une action collective a Yopougon Niangon Nord, portee par les dons, les benevoles et le sourire des enfants.",
      en: "A collective action in Yopougon Niangon Nord, carried by donations, volunteers and children's smiles.",
    },
  },
  {
    image: "/media/edited/actions/douce-mere-azuretti-premiere-edition/azuretti-premiere-edition-01.jpg",
    title: { fr: "Azuretti, premiere edition d'une action a visage humain.", en: "Azuretti, first edition of a deeply human action." },
    text: {
      fr: "Une premiere rencontre avec l'orphelinat La Douce Mere d'Azuretti, entre dons, ecoute et lien humain.",
      en: "A first encounter with La Douce Mere d'Azuretti orphanage, through donations, listening and human connection.",
    },
  },
  {
    image: "/media/edited/actions/maison-du-potier-yopougon-niangon-nord/maison-du-potier-13.jpg",
    title: { fr: "Un sourire suffit parfois a rappeler pourquoi nous agissons.", en: "A smile can be enough to remind us why we act." },
    text: {
      fr: "Hand of God agit dans les orphelinats avec une aide concrete, une presence sincere et une attention respectueuse.",
      en: "Hand of God acts in orphanages with practical help, sincere presence and respectful care.",
    },
  },
  {
    image: "/media/edited/actions/retour-a-la-douce-mere-azuretti/azuretti-annee-suivante-01.jpg",
    title: { fr: "Revenir, c'est transformer une visite en engagement.", en: "Returning turns a visit into commitment." },
    text: {
      fr: "A Azuretti, chaque nouvelle edition permet de renforcer le lien et de mieux adapter l'aide aux enfants.",
      en: "In Azuretti, each new edition strengthens the bond and helps adapt support to the children.",
    },
  },
];

export const impactStats = [
  { value: "200+", label: { fr: "enfants aides", en: "children supported" } },
  { value: "3", label: { fr: "orphelinats visites", en: "orphanages visited" } },
  { value: "300+", label: { fr: "dons distribues", en: "donations delivered" } },
  { value: "Depuis 2022", label: { fr: "une presence continue", en: "continuous field presence" } },
];

export const actions: ActionItem[] = [
  {
    slug: "orphelinat-yopougon-mami-adjoua",
    title: { fr: "Orphelinat Yopougon Mami Adjoua", en: "Yopougon Mami Adjoua orphanage" },
    excerpt: { fr: "Visite solidaire, remise de dons et temps de presence avec les enfants.", en: "Solidarity visit, donation delivery and time spent with the children." },
    detail: { fr: "Cette action a permis d'apporter des dons essentiels tout en creant un moment de proximite avec les enfants et les responsables de l'orphelinat.", en: "This action delivered essential donations while creating a warm moment with the children and the orphanage team." },
    image: "/media/edited/actions/orphelinat-yopougon-mami-adjoua/yopougon-mami-adjoua-04.jpg",
    album: yopougonAlbum,
  },
  {
    slug: "douce-mere-azuretti-premiere-edition",
    title: { fr: "Orphelinat La Douce Mere d'Azuretti - premiere edition", en: "La Douce Mere d'Azuretti orphanage - first edition" },
    excerpt: { fr: "Premiere mission a Azuretti autour de dons, d'ecoute et d'activites avec les enfants.", en: "First mission in Azuretti with donations, listening and activities with the children." },
    detail: { fr: "La premiere edition a marque le debut d'un lien fort avec l'orphelinat, avec une intervention sobre centree sur les besoins concrets des enfants.", en: "The first edition opened a strong relationship with the orphanage through a focused intervention around the children's concrete needs." },
    image: "/media/edited/actions/douce-mere-azuretti-premiere-edition/azuretti-premiere-edition-01.jpg",
    album: azurettiFirstAlbum,
  },
  {
    slug: "douce-mere-azuretti-annee-suivante",
    title: { fr: "Orphelinat La Douce Mere d'Azuretti - annee suivante", en: "La Douce Mere d'Azuretti orphanage - following year" },
    excerpt: { fr: "Retour sur le terrain pour prolonger l'accompagnement initie l'annee precedente.", en: "A return to the field to continue the support started the previous year." },
    detail: { fr: "Cette nouvelle visite a permis de renforcer le suivi, de renouveler les dons et de maintenir une presence fiable aupres de l'orphelinat.", en: "This new visit strengthened follow-up, renewed donations and maintained a reliable presence with the orphanage." },
    image: "/media/edited/actions/retour-a-la-douce-mere-azuretti/azuretti-annee-suivante-01.jpg",
    album: azurettiReturnAlbum,
  },
  {
    slug: "maison-du-potier-yopougon-niangon-nord",
    title: { fr: "Orphelinat La Maison du Potier - Yopougon Niangon Nord", en: "La Maison du Potier orphanage - Yopougon Niangon Nord" },
    excerpt: { fr: "Action humanitaire dans un orphelinat de Yopougon Niangon Nord.", en: "Humanitarian action in an orphanage in Yopougon Niangon Nord." },
    detail: { fr: "La mission a combine remise de dons, attention aux enfants et echanges avec les encadrants afin de comprendre les priorites futures.", en: "The mission combined donation delivery, attention to the children and discussions with caregivers to understand future priorities." },
    image: "/media/edited/actions/maison-du-potier-yopougon-niangon-nord/maison-du-potier-02.jpg",
    album: potierAlbum,
  },
];

export const projects: Project[] = [];

export const galleryAlbums: GalleryAlbum[] = actions.map((action) => ({
  slug: action.slug,
  title: action.title,
  excerpt: action.excerpt,
  cover: action.image,
  category: "missions",
  photos: action.album.map((image, index) => ({
    title: {
      fr: `${action.title.fr} - photo ${index + 1}`,
      en: `${action.title.en} - photo ${index + 1}`,
    },
    type: "photo",
    category: "missions",
    image,
  })),
}));

export const gallery: GalleryItem[] = galleryAlbums.flatMap((album) => album.photos);

export const featuredGallery: GalleryItem[] = [
  {
    title: { fr: "Groupe Maison du Potier", en: "La Maison du Potier group" },
    type: "photo",
    category: "missions",
    image: "/media/edited/actions/maison-du-potier-yopougon-niangon-nord/maison-du-potier-02.jpg",
  },
  {
    title: { fr: "Sourires a Maison du Potier", en: "Smiles at La Maison du Potier" },
    type: "photo",
    category: "children",
    image: "/media/edited/actions/maison-du-potier-yopougon-niangon-nord/maison-du-potier-13.jpg",
  },
  {
    title: { fr: "Repas partage", en: "Shared meal" },
    type: "photo",
    category: "distribution",
    image: "/media/edited/actions/maison-du-potier-yopougon-niangon-nord/maison-du-potier-52.jpg",
  },
  {
    title: { fr: "Retour a Azuretti", en: "Return to Azuretti" },
    type: "photo",
    category: "missions",
    image: "/media/edited/actions/retour-a-la-douce-mere-azuretti/azuretti-annee-suivante-01.jpg",
  },
  {
    title: { fr: "Yopougon Mami Adjoua", en: "Yopougon Mami Adjoua" },
    type: "photo",
    category: "missions",
    image: "/media/edited/actions/orphelinat-yopougon-mami-adjoua/yopougon-mami-adjoua-13.jpg",
  },
  {
    title: { fr: "Azuretti premiere edition", en: "Azuretti first edition" },
    type: "photo",
    category: "missions",
    image: "/media/edited/actions/douce-mere-azuretti-premiere-edition/azuretti-premiere-edition-01.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: { fr: "Chaque visite en orphelinat demande de la discipline, de l'ecoute et beaucoup de respect pour les enfants. C'est ce que nous essayons de porter sur le terrain.", en: "Each orphanage visit requires discipline, listening and deep respect for the children. That is what we try to carry in the field." },
    name: "Benevole Hand of God",
    role: { fr: "Equipe terrain", en: "Field team" },
  },
  {
    quote: { fr: "Dans les orphelinats, on comprend vite que la presence compte autant que les dons. Les enfants retiennent les gestes simples.", en: "In orphanages, you quickly understand that presence matters as much as donations. Children remember simple gestures." },
    name: "Responsable mission",
    role: { fr: "Coordination", en: "Coordination" },
  },
];

function albumPhotos(slug: string) {
  return galleryAlbums.find((album) => album.slug === slug)?.photos ?? [];
}

export const posts: Post[] = [
  {
    slug: "orphelinat-yopougon-mami-adjoua",
    title: { fr: "Action a l'Orphelinat Yopougon Mami Adjoua", en: "Action at Yopougon Mami Adjoua orphanage" },
    excerpt: { fr: "Retour sur une mission de presence et de dons au coeur de Yopougon.", en: "A look back at a mission of presence and donations in Yopougon." },
    body: { fr: "Hand of God s'est rendu a l'Orphelinat Yopougon Mami Adjoua pour une action centree sur les besoins essentiels des enfants. La mission a permis de remettre des dons, de partager un moment d'attention avec les enfants et d'echanger avec les responsables sur les besoins prioritaires. Au-dela du materiel, cette visite rappelle l'importance d'une presence reguliere, respectueuse et bien organisee.", en: "Hand of God visited Yopougon Mami Adjoua orphanage for an action focused on the children's essential needs. The mission delivered donations, shared a caring moment with the children and discussed priority needs with the managers. Beyond material support, this visit highlights the value of regular, respectful and well-organized presence." },
    sections: [
      { title: { fr: "Le contexte de la mission", en: "Mission context" }, text: { fr: "Cette action s'inscrit dans la volonte de Hand of God d'intervenir directement dans les orphelinats, avec des dons utiles et une presence humaine. L'objectif etait de repondre a des besoins simples mais importants, sans mise en scene excessive, en respectant le rythme de la structure.", en: "This action reflects Hand of God's commitment to intervene directly in orphanages with useful donations and human presence. The goal was to respond to simple but important needs without excessive staging, while respecting the center's rhythm." } },
      { title: { fr: "Ce qui a ete apporte", en: "What was brought" }, text: { fr: "L'equipe a remis des dons prepares en amont, puis a pris le temps d'echanger avec les responsables. Ces moments permettent de mieux comprendre les priorites : alimentation, hygiene, fournitures, activites et accompagnement dans la duree.", en: "The team delivered donations prepared in advance, then took time to speak with managers. These moments help clarify priorities: food, hygiene, supplies, activities and long-term support." } },
      { title: { fr: "Ce que nous retenons", en: "What we learned" }, text: { fr: "Une mission reussie ne se resume pas a la quantite distribuee. Elle se mesure aussi a la qualite de l'ecoute, a la dignite preservee et a la capacite de revenir avec une aide mieux adaptee.", en: "A successful mission is not only about quantity delivered. It is also measured by listening quality, preserved dignity and the ability to return with better-adapted support." } },
    ],
    gallery: albumPhotos("orphelinat-yopougon-mami-adjoua"),
    category: { fr: "Mission", en: "Mission" },
    date: "2022-12-18",
    image: "/media/edited/actions/orphelinat-yopougon-mami-adjoua/yopougon-mami-adjoua-04.jpg",
  },
  {
    slug: "douce-mere-azuretti-premiere-edition",
    title: { fr: "Premiere edition a La Douce Mere d'Azuretti", en: "First edition at La Douce Mere d'Azuretti" },
    excerpt: { fr: "Une premiere rencontre qui a pose les bases d'un accompagnement durable.", en: "A first encounter that laid the foundation for lasting support." },
    body: { fr: "La premiere edition a l'Orphelinat La Douce Mere d'Azuretti a ete pensee comme une action simple, humaine et utile. L'equipe a prepare des dons adaptes, pris le temps d'ecouter les encadrants et partage des instants de proximite avec les enfants. Cette premiere mission a permis d'identifier les besoins recurrentes et de construire une relation de confiance avec l'etablissement.", en: "The first edition at La Douce Mere d'Azuretti orphanage was designed as a simple, humane and useful action. The team prepared appropriate donations, listened to caregivers and shared moments of closeness with the children. This first mission helped identify recurring needs and build trust with the institution." },
    sections: [
      { title: { fr: "Une premiere approche", en: "A first approach" }, text: { fr: "Pour une premiere edition, l'enjeu etait d'arriver avec humilite, de comprendre l'organisation de l'orphelinat et d'apporter un soutien concret sans perturber le cadre de vie des enfants.", en: "For a first edition, the challenge was to arrive with humility, understand the orphanage's organization and bring concrete support without disrupting the children's environment." } },
      { title: { fr: "Construire la confiance", en: "Building trust" }, text: { fr: "Les echanges avec les encadrants ont permis de creer une relation de travail. Cette confiance est essentielle pour preparer de futures actions plus utiles, plus ciblees et mieux documentees.", en: "Discussions with caregivers helped create a working relationship. This trust is essential to prepare future actions that are more useful, targeted and better documented." } },
      { title: { fr: "Une base pour la suite", en: "A basis for what comes next" }, text: { fr: "Cette premiere visite a ouvert une continuites. Elle a permis de poser les premiers reperes pour un suivi qui ne depend pas seulement de l'urgence, mais d'une presence responsable.", en: "This first visit opened continuity. It set the first markers for follow-up that does not depend only on urgency, but on responsible presence." } },
    ],
    gallery: albumPhotos("douce-mere-azuretti-premiere-edition"),
    category: { fr: "Action", en: "Action" },
    date: "2023-08-26",
    image: "/media/edited/actions/douce-mere-azuretti-premiere-edition/azuretti-premiere-edition-01.jpg",
  },
  {
    slug: "retour-a-la-douce-mere-azuretti",
    title: { fr: "Retour a La Douce Mere d'Azuretti", en: "Return to La Douce Mere d'Azuretti" },
    excerpt: { fr: "Une nouvelle visite pour prolonger la presence commencee l'annee precedente.", en: "A new visit to continue the presence started the previous year." },
    body: { fr: "L'annee suivante, Hand of God est retourne a l'Orphelinat La Douce Mere d'Azuretti afin de maintenir le lien et de renouveler le soutien. Cette action montre la volonte de ne pas limiter l'aide a un passage ponctuel. Les dons remis, les echanges avec les responsables et les moments partages avec les enfants ont permis de confirmer l'importance d'un suivi dans la duree.", en: "The following year, Hand of God returned to La Douce Mere d'Azuretti orphanage to maintain the relationship and renew support. This action reflects the commitment not to limit help to a one-time visit. The donations delivered, discussions with managers and moments shared with the children confirmed the importance of long-term follow-up." },
    sections: [
      { title: { fr: "Pourquoi revenir", en: "Why return" }, text: { fr: "Revenir dans un orphelinat est un signal fort. Cela montre que la premiere action n'etait pas seulement ponctuelle, mais qu'elle faisait partie d'une demarche de fidelite et de suivi.", en: "Returning to an orphanage sends a strong signal. It shows that the first action was not isolated, but part of a faithful and follow-up approach." } },
      { title: { fr: "Renouveler l'appui", en: "Renewing support" }, text: { fr: "Cette nouvelle mission a permis de renouveler les dons et de mesurer l'evolution des besoins. Les priorites peuvent changer d'une annee a l'autre, d'ou l'importance de rester a l'ecoute.", en: "This new mission renewed donations and measured how needs had evolved. Priorities can change from year to year, which is why listening remains essential." } },
      { title: { fr: "Un suivi plus mature", en: "More mature follow-up" }, text: { fr: "Avec le recul, Hand of God peut mieux preparer les interventions : choisir les dons les plus utiles, mobiliser l'equipe adaptee et documenter les resultats avec plus de precision.", en: "With hindsight, Hand of God can better prepare interventions: choose the most useful donations, mobilize the right team and document results more precisely." } },
    ],
    gallery: albumPhotos("douce-mere-azuretti-annee-suivante"),
    category: { fr: "Suivi", en: "Follow-up" },
    date: "2024-09-14",
    image: "/media/edited/actions/retour-a-la-douce-mere-azuretti/azuretti-annee-suivante-01.jpg",
  },
  {
    slug: "maison-du-potier-yopougon-niangon-nord",
    title: { fr: "Mission a La Maison du Potier, Yopougon Niangon Nord", en: "Mission at La Maison du Potier, Yopougon Niangon Nord" },
    excerpt: { fr: "Une action humanitaire menee dans un orphelinat de Yopougon Niangon Nord.", en: "A humanitarian action carried out in an orphanage in Yopougon Niangon Nord." },
    body: { fr: "A La Maison du Potier, l'equipe Hand of God a mene une action de terrain autour de la remise de dons et de la presence aupres des enfants. La mission s'est deroulee avec une attention particuliere a la dignite des beneficiaires et au dialogue avec les encadrants. Elle s'inscrit dans une demarche continue : comprendre, servir, documenter et revenir avec des actions toujours mieux adaptees.", en: "At La Maison du Potier, the Hand of God team carried out a field action around donation delivery and presence with the children. The mission paid close attention to beneficiary dignity and dialogue with caregivers. It is part of an ongoing approach: understand, serve, document and return with better-adapted actions." },
    sections: [
      { title: { fr: "Une mission a Yopougon Niangon Nord", en: "A mission in Yopougon Niangon Nord" }, text: { fr: "Cette action a ete pensee pour repondre a une realite locale, avec une equipe preparee et des dons selectionnes selon les besoins observes dans l'orphelinat.", en: "This action was designed to respond to a local reality, with a prepared team and donations selected according to needs observed in the orphanage." } },
      { title: { fr: "Respecter le cadre des enfants", en: "Respecting the children's environment" }, text: { fr: "La discretion est importante. Les photos, les echanges et la distribution doivent toujours respecter les enfants, les encadrants et l'intimite du lieu.", en: "Discretion matters. Photos, conversations and distribution must always respect the children, caregivers and the privacy of the place." } },
      { title: { fr: "Preparer les prochaines actions", en: "Preparing next actions" }, text: { fr: "Chaque mission apporte des informations utiles pour la suite : ce qui manque, ce qui fonctionne, ce qui doit etre ameliore et ce qui peut etre renforce par les partenaires.", en: "Each mission brings useful information for what comes next: what is missing, what works, what must improve and what partners can strengthen." } },
    ],
    gallery: albumPhotos("maison-du-potier-yopougon-niangon-nord"),
    category: { fr: "Mission", en: "Mission" },
    date: "2025-07-19",
    image: "/media/edited/actions/maison-du-potier-yopougon-niangon-nord/maison-du-potier-02.jpg",
  },
];

export const donationLinks = [
  { name: "Orange Money", href: "https://example.com/orange-money", icon: "/payment-icons/orange-money.png", tone: "white" },
  { name: "Wave", href: "https://example.com/wave", icon: "/payment-icons/wave.png", tone: "black" },
  { name: "PayPal", href: "https://example.com/paypal", icon: "/payment-icons/paypal.png", tone: "blue" },
  { name: "Carte bancaire", href: "https://example.com/card", icon: "/payment-icons/card.svg", tone: "black" },
];

export const socialLinks = [
  { name: "Facebook", href: "https://example.com/facebook" },
  { name: "Instagram", href: "https://example.com/instagram" },
  { name: "TikTok", href: "https://example.com/tiktok" },
  { name: "LinkedIn", href: "https://example.com/linkedin" },
];
