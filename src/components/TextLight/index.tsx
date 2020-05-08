import styled from 'styled-components';
import { verifyType } from 'src/helpers/formatData';

interface TextLightProps {
  text: any;
  typeFormat?: string;
}

const Text = styled.a`
  font-size: 22px;
  width: 100%;
  ${({ theme }) => theme && `color: ${theme.colors.paragraph.dark}`}
`;

export default function TextLight({ text, typeFormat }: TextLightProps): JSX.Element {
  return <Text>{verifyType(text, typeFormat)}</Text>;
}
