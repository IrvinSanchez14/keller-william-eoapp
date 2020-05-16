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
  letter-spacing: 0;
  line-height: 28px;
  ${({ theme }) => theme.phone`
  font-size: 16px;
  letter-spacing: 0;
  line-height: 21px;
`}
  ${({ theme }) => theme && `color: ${theme.colors.paragraph.dark};`};
  ${({ customMargin }) =>
    customMargin &&
    `

  `};
`;

export default function TextBold({ customMargin, text, typeFormat }: TextBoldProps): JSX.Element {
  return <Text customMargin={customMargin}>{verifyType(text, typeFormat)}</Text>;
}
