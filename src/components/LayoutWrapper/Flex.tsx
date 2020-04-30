import React from 'react';
import classnames from 'classnames';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

import { WithStyles, withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './style';

type BaseType = WithStyles<typeof styles> & React.HTMLAttributes<HTMLDivElement>;

interface IRowProps extends BaseType {
  component?: string;
  align?: CSSProperties['justifyContent'];
  valign?: CSSProperties['alignItems'];
  flex?: CSSProperties['flex'];
  wrap?: CSSProperties['flexWrap'];
  gutter?: boolean;
  cell?: boolean;
  margin?: string;
  padding?: string;
}

@withStyles(styles)
export class Row extends React.Component<IRowProps> {
  static defaultProps = {
    component: 'div',
  };

  render() {
    const {
      component,
      classes,
      align,
      valign,
      flex,
      wrap,
      style,
      className,
      children,
      margin,
      padding,
      ...rest
    } = this.props;
    const updatedStyle = {
      flex,
      margin,
      padding,
      flexWrap: wrap,
      justifyContent: align,
      alignItems: valign,
      ...style,
    };
    const props = {
      style: updatedStyle,
      className: classnames(classes.flex, classes.row, className, {
        row: true,
      }),
      ...rest,
    };
    return React.createElement(component, props, children);
  }
}

interface IColumnProps extends BaseType {
  component?: string;
  align?: CSSProperties['alignItems'];
  valign?: CSSProperties['justifyContent'];
  flex?: CSSProperties['flex'];
  cell?: boolean;
  margin?: string;
  padding?: string;
}

@withStyles(styles)
export class Column extends React.Component<IColumnProps> {
  static defaultProps = {
    component: 'div',
  };

  render() {
    const {
      component,
      classes,
      align,
      valign,
      flex,
      style,
      className,
      children,
      margin,
      padding,
      ...rest
    } = this.props;
    const updatedStyle = {
      flex,
      margin,
      padding,
      justifyContent: valign,
      alignItems: align,
      ...style,
    };
    const props = {
      className: classnames(classes.flex, className, { column: true }),
      style: updatedStyle,
      ...rest,
    };
    return React.createElement(component, props, children);
  }
}
