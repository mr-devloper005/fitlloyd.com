import type { TaskKey } from "@/lib/site-config";

export const slot4TaskSupport = {
  article: false,
  classified: false,
  sbm: false,
  profile: false,
  pdf: false,
  listing: false,
  image: true,
} satisfies Record<TaskKey, boolean>;

export const slot4TaskNotes = {
  article: "Visual essays, guides, and article detail pages",
  classified: "Creative notices, opportunities, and detail pages",
  sbm: "Saved visual resources and curated bookmark pages",
  profile: "Profile/user pages",
  pdf: "Creative guides, briefs, and document pages",
  listing: "Creative business and studio listing pages",
  image: "Image sharing, gallery, and visual collection pages",
} satisfies Record<TaskKey, string>;
