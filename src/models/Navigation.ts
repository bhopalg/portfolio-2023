export interface Navigation {
  name: string;
  href: string;
  icon?: any;
  isHome?: boolean;
  children?: Navigation[];
}
