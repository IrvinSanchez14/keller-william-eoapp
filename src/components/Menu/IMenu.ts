export interface Items {
  label: string;
  link: string;
}

export default interface MenuProps {
  items: Array<Items>;
  isMenuVisible: boolean;
}
