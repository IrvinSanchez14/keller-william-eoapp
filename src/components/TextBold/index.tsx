import styled from 'styled-components';
import { verifyType } from 'src/helpers/formatData';

interface TextBoldProps {
  customMargin?: boolean;
  text: any;
  typeFormat?: string;
  customWidth?: boolean;
}
const Text = styled.h1<{ customMargin?: boolean }>`
  font-size: 22px;
  ${({ theme }) => theme && `color: ${theme.colors.paragraph.dark};`};
  ${({ customMargin }) =>
    customMargin &&
    `
    padding-top: 7px;
  `};
`;

export default function TextBold({ customMargin, text, typeFormat }: TextBoldProps): JSX.Element {
  return <Text customMargin={customMargin}>{verifyType(text, typeFormat)}</Text>;
}
