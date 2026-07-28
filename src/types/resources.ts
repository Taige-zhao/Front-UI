export interface ResourcePost {
  id: string;
  date: string;
  category: string;
  title: string;
  image: string;
  tag?: string;
  filter: "research" | "blog" | "brochure" | "podcast" | "video" | "webinar";
}

export interface ResourceFilter {
  id: string;
  label: string;
}
