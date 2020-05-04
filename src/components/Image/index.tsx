import styled, { css } from 'styled-components';
import Lottie from 'react-lottie';
import SVG from 'react-inlinesvg';

import { IeStyles } from 'src/styles/MarketingEO/utils';
import ImageProps from './InImage';

const ImageWrapper = styled.div`
  position: absolute;
  background: transparent no-repeat;
  ${(props) =>
    !!props.static &&
    css`
      position: relative;
    `};
  ${(props) =>
    !!props.customSize &&
    css`
      div svg {
        height: ${props.customSize[0]}px !important;
        width: ${props.customSize[1]}px !important;
      }
    `};
  ${(props) =>
    !!props.animationPosition &&
    css`
      div svg {
        position: absolute;
        left: ${props.animationPosition[0]}%;
        top: ${props.animationPosition[1]}%;
        transform: translate(${-props.animationPosition[0]}%, ${-props.animationPosition[1]}%);
      }
    `};
  ${(props) =>
    !!props.rotated &&
    css`
      div svg {
        transform: rotateY(180deg) !important;
      }
    `};
  ${(props) =>
    !!props.position &&
    css`
      left: ${props.position[0]}%;
      top: ${props.position[1]}%;
      transform: translate(${-props.position[0]}%, ${-props.position[1]}%);
    `};
  ${(props) =>
    !!props.animationData &&
    css`
      width: 500px;
    `};
  @media (max-width: 1319px) {
    ${(props) =>
      !props.neverStatic &&
      css`
        position: static;
        transform: none;
      `};
    ${(props) =>
      props.hiddenOnMobile &&
      css`
        display: none;
      `};
    ${(props) =>
      !!props.mobilePosition &&
      css`
        transform: translate(${props.mobilePosition[0]}px, ${props.mobilePosition[1]}px);
      `};
    ${(props) =>
      !!props.mobilePosition &&
      !!props.neverStatic &&
      css`
        left: ${props.mobilePosition[0]}%;
        top: ${props.mobilePosition[1]}%;
        transform: translate(
          -${Math.abs(props.mobilePosition[0])}%,
          -${Math.abs(props.mobilePosition[1])}%
        );
      `};
  }
  @media (max-width: 900px) {
    ${(props) =>
      !!props.animationData &&
      css`
        z-index: 100;
        width: 250px;
      `};
  }

  ${(props) =>
    props.position &&
    props.position[1] < 0 &&
    !props.rotated &&
    IeStyles`
      top: -55%;
    `};
`;

const StyledGif = styled.img`
  @media (max-width: 900px) {
    ${(props) =>
      !!props.animationGif &&
      css`
        width: 250px;
      `};
  }
`;

const bodymovinOptions = (animation) => ({
  loop: true,
  autoplay: false,
  prerender: true,
  animationData: animation.default,
  rendererSettings: {
    'shape-rendering': 'optimizeSpeed',
  },
});

function Image(Props: ImageProps) {
  console.log('>>>>>>>>>>>><', Props);
  const { src, animationData, animationGif, alt, imgSrc, ...rest } = Props;
  return (
    <ImageWrapper animationData={animationData} {...rest}>
      {src && <SVG src={src} />}
      {animationGif && <StyledGif animationGif={animationGif} src={animationGif} alt={alt} />}
      {imgSrc && <img src={imgSrc} alt={alt} />}
      {animationData && <Lottie options={bodymovinOptions(animationData)} />}
    </ImageWrapper>
  );
}

export default Image;
