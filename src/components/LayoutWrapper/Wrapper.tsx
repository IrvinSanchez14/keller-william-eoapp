import React from 'react';
import classnames from 'classnames';

import { WithStyles } from 'src/styles/FormStyle/css/withStyles';
import { useStyles } from './WrapperStyles';
import { Column, Row } from './Flex';
import { Icon } from 'src/components/Icon';

interface IWrapperProps extends WithStyles<typeof useStyles> {
  className?: string;
  withTreesAndHouseImage?: boolean;
  withHouseWithFence?: boolean;
  withDogOnCouch?: boolean;
  withGrayShapeRight?: boolean;
  withGrayShapeLeft?: boolean;
  withGradientShapeLeft?: boolean;
  withGradientShapeRight?: boolean;
  withGradientShape404?: boolean;
  withBlockWithFence?: boolean;
  zeroQuoteResults?: boolean;
  withSmallerLeftGradient?: boolean;
  notFixed?: boolean;
  shouldHideOnMobile?: boolean;
  children?: any;
}

function LayoutWrapper(Props: IWrapperProps) {
  const {
    className,
    children,
    withTreesAndHouseImage,
    withHouseWithFence,
    withDogOnCouch,
    withGrayShapeRight,
    withGrayShapeLeft,
    withGradientShapeLeft,
    withGradientShapeRight,
    withGradientShape404,
    zeroQuoteResults,
    withBlockWithFence,
    withSmallerLeftGradient,
    notFixed,
    shouldHideOnMobile,
  } = Props;
  const classes = useStyles({
    withGrayShapeRight,
    withGrayShapeLeft,
    withGradientShapeRight,
    withGradientShapeLeft,
    withGradientShape404,
    withSmallerLeftGradient,
    notFixed,
    shouldHideOnMobile,
    zeroQuoteResults,
  });

  const side = withGrayShapeRight || withGradientShapeRight ? 'Right' : 'Left';

  return (
    <Column align="center" className={classnames(classes.wrapper, className)}>
      {children}
      {(withGrayShapeLeft || withGrayShapeRight) && (
        <>
          <Icon name={`grayShape${side}Mobile`} className={classes.grayShapeMobile} />
          <Icon name={`grayShape${side}Desktop`} className={classes.grayShapeDesktop} />
        </>
      )}

      {(withGradientShapeLeft || withGradientShapeRight) && (
        <>
          <Icon name={`gradientShape${side}Mobile`} className={classes.gradientShapeMobile} />
          <Icon
            name={`gradientShape${side}Desktop`}
            className={classnames(classes.gradientShapeDesktop, {
              [classes.gradientShapeDesktopZeroResults]: zeroQuoteResults,
            })}
          />
        </>
      )}
      {withGradientShape404 && (
        <Icon name="gradientShape404" className={classes.gradientShape404} />
      )}
      {withTreesAndHouseImage && (
        <Row align="space-around" valign="flex-end" className={classes.imageWrapper}>
          <Icon name="trees" className={classes.treesImage} />
          <Icon name="house" className={classes.houseImage} />
        </Row>
      )}
      {withHouseWithFence && (
        <Row align="flex-end" valign="flex-end" className={classes.imageWrapper}>
          <Icon name="houseWithFence" className={classes.houseWithFenceImage} />
        </Row>
      )}
      {withDogOnCouch && (
        <Row align="flex-end" valign="flex-end" className={classes.imageWrapper}>
          <Icon name="dogOnCouch" className={classes.dogOnCouchImage} />
        </Row>
      )}
      {withBlockWithFence && (
        <Row align="space-between" valign="flex-end" className={classes.imageWrapper}>
          <Icon className={classes.blockImage} name="blockWithFence" />
          <Icon className={classes.treesSharpImage} name="treesSharp" />
        </Row>
      )}
    </Column>
  );
}

export default LayoutWrapper;
