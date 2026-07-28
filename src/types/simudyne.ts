export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface FeatureItem {
  number: string;
  title: string;
  description: string;
}

export interface Partner {
  name: string;
  src: string;
  width: number;
  height: number;
}

export interface FooterLink {
  label: string;
  href: string;
}
