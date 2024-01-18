import { HTMLAttributes } from "react";

import {
  background,
  BackgroundColorProps,
  BackgroundProps,
  border,
  BorderProps,
  display,
  DisplayProps,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  maxWidth,
  MaxWidthProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from "styled-system";

import styled from "@emotion/styled";

interface FlexBoxProps
  extends FlexProps,
    SpaceProps,
    DisplayProps,
    BackgroundColorProps,
    BackgroundProps,
    MaxWidthProps,
    WidthProps,
    PositionProps,
    HTMLAttributes<HTMLDivElement>,
    FlexboxProps,
    LayoutProps,
    BorderProps {}

export const Flex = styled.div<FlexBoxProps>`
  ${display}
  ${width}
  ${maxWidth}
  ${space}
  ${background}
  ${border}
  ${position}
  ${flexbox}
  ${layout}
`;

Flex.defaultProps = {
  display: "flex",
  bg: "red",
};
