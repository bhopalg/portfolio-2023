export interface ItemProp {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface UsesListProps {
  title: string;
  description: string;

  items: ItemProp[];
}
