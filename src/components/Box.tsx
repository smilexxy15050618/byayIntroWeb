import styled from 'styled-components';
import {
  borders,
  BordersProps,
  display,
  DisplayProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  palette,
  PaletteProps,
  positions,
  PositionsProps,
  shadows,
  ShadowsProps,
  sizing,
  SizingProps,
  spacing,
  SpacingProps,
  typography,
  TypographyProps,
  bgcolor,
} from '@material-ui/system';

export type IBoxProps = BordersProps &
  DisplayProps &
  FlexboxProps &
  GridProps &
  PaletteProps &
  PositionsProps &
  ShadowsProps &
  SizingProps &
  SpacingProps &
  TypographyProps;

const Box = styled.div<IBoxProps>`
  ${borders}${display}${flexbox}${grid}${palette}${positions}${shadows}${sizing}${spacing}${typography}${bgcolor}
`;

export default Box;
