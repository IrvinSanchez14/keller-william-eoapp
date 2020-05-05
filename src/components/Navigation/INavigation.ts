interface Items {
  label: string;
  link: string;
}

export default interface NavigationProps {
  items: Array<Items>;
  isWhiteNav: boolean;
}
