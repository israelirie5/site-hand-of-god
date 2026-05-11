import { action } from "./action";
import { donationLink } from "./donationLink";
import { galleryItem } from "./galleryItem";
import { impactStat } from "./impactStat";
import { localizedString } from "./localizedString";
import { post } from "./post";
import { project } from "./project";
import { siteSettings } from "./siteSettings";
import { testimonial } from "./testimonial";

export const schemaTypes = [
  localizedString,
  action,
  project,
  post,
  galleryItem,
  testimonial,
  impactStat,
  siteSettings,
  donationLink,
];
