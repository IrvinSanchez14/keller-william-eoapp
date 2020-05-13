interface Links {
  label: string;
  link: string;
}

export default interface FooterProps {
  linkItems?: Array<Links>;
  agentAssetsFooter?: boolean;
}
