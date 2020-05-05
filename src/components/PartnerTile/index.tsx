import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';
import IPartnerTile from './IPartnerTile';

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  padding: 28px 60px 28px 36px;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
  }
  ${({ theme }) => theme.phone`
    padding: 22px 48px 22px 28px;
  `};
`;

const StyledImg = styled.img`
  width: 34px;
  height: 34px;
  ${({ theme }) => theme.phone`
    width: 26px;
    height: 26px;
  `};
`;

const StyledName = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #343342;
  margin: 0 12px;

  ${({ theme }) => theme.phone`
    margin-left: 8px;
    font-size: 13px;
    line-height: 19px;
  `};
`;

const StyledPrice = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 21px;
  line-height: 22px;
  margin-left: auto;
  span {
    font-size: 11px;
    line-height: 9px;
  }

  ${({ theme }) => theme.phone`
    font-size: 17px;
    line-height: 18px;
  `};
`;

const StyledSvg = styled(SVG)`
  position: absolute;
  top: 0;
  left: 15px;
  padding-top: 15px;
  width: 130px;
  ${({ theme }) => theme.phone`
    width: 120px;
    height:
  `};

  ${({ theme, isSmall }) =>
    isSmall &&
    css`
      width: 350px;
      left: 50%;
      transform: translateX(-50%);

      ${theme.tablet`
        width: unset;
        left: -60px;
        transform: unset;
      `};
    `};
`;

const PartnerTile = ({ name, price, isShadow, isCheckIcon }: IPartnerTile): JSX.Element => (
  <StyledContainer>
    <StyledSvg src="/static/img/PearlInsurance_Logo.svg" />
    <StyledPrice>
      {price}
      <span>/moth</span>
    </StyledPrice>
  </StyledContainer>
);

PartnerTile.defaultProps = {
  isShadow: true,
  isCheckIcon: false,
};

export default PartnerTile;
