import originalWithStyles, {
  StyleRules,
  WithStylesOptions,
} from '@material-ui/core/styles/withStyles'; // tslint:disable-line
import { MuiTheme } from './IMuiThemeOptions';

//export {CSSProperties};

/**
 * See the frontend guidelines documentation for an explanation of why we have a custom withStyles.ts.
 */

export interface WithStylesForObject<TStyleRulesObject> {
  classes?: any;
  theme?: MuiTheme;
}

export type WithStyles<T> = T extends (...args: any[]) => infer U
  ? WithStylesForObject<U>
  : WithStylesForObject<T>;

// A much simpler decorator that gives no type errors, at the expense of providing less type information.
type StyleDecorator = <T>(clazz: T) => void;

export type KWStyleRulesCallback<ClassKey extends string = string> = (
  theme: MuiTheme,
) => StyleRules<ClassKey>;

export function withStyles<ClassKey extends string>(
  style: StyleRules<ClassKey> | KWStyleRulesCallback<ClassKey>,
  options?: WithStylesOptions,
): StyleDecorator {
  // Use the original withStyles function from material-ui, but override the type.
  return (originalWithStyles(style) as any) as StyleDecorator;
}
