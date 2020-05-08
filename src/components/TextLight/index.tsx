import styled from 'styled-components';
import { verifyType } from 'src/helpers/formatData';

interface TextLightProps {
  text: any;
  typeFormat?: string;
  customWidth?: boolean;
}

const Text = styled.a<Pick<TextLightProps, 'customWidth'>>`
  font-size: 22px;
  width: 100%;
  ${({ theme }) => theme && `color: ${theme.colors.paragraph.dark}`};
  ${({ customWidth }) =>
    customWidth &&
    `
    @media (min-width: 900px) {
      max-width: 640px;
      display: flex;
    }
  `};
`;

export default function TextLight({ text, typeFormat, customWidth }: TextLightProps): JSX.Element {
  return <Text customWidth={customWidth}>{verifyType(text, typeFormat)}</Text>;
}
