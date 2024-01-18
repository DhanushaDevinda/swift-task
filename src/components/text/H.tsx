import React, { CSSProperties } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

export type HeadingFontTypes =
  | "h1_Regular"
  | "h1_Medium"
  | "h1_SemiBold"
  | "h1_Bold"
  | "h2_Regular"
  | "h2_Medium"
  | "h2_SemiBold"
  | "h2_Bold"
  | "h3_Regular"
  | "h3_Medium"
  | "h3_SemiBold"
  | "h3_Bold"
  | "h4_Regular"
  | "h4_Medium"
  | "h4_SemiBold"
  | "h4_Bold"
  | "h5_Regular"
  | "h5_Medium"
  | "h5_SemiBold"
  | "h5_Bold";

type Props = React.HTMLAttributes<HTMLDivElement> &
  SpaceProps &
  ColorProps &
  TypographyProps & {
    type: HeadingFontTypes;
    children?: string | React.ReactNode;
    id?: string;
    display?: CSSProperties["display"];
    onClick?: () => void;
    cursor?: CSSProperties["cursor"];
  };
const getStyleFontType = (type: HeadingFontTypes) => {
  switch (type) {
    case "h1_Regular":
      return `
          font-weight: 400;
          font-size: 36px;
          line-height: 48px;
          `;
    case "h1_Medium":
      return `
          font-weight: 500;
          font-size: 36px;
          line-height: 48px;
          `;
    case "h1_SemiBold":
      return `
          font-weight: 600;
          font-size: 36px;
          line-height: 48px;
           `;
    case "h1_Bold":
      return `
          font-weight: 700;
          font-size: 36px;
          line-height: 48px;
           `;
    case "h2_Regular":
      return `
          font-weight: 400;
          font-size: 28px;
          line-height: 40px;
          `;
    case "h2_Medium":
      return `
          font-weight: 500;
          font-size: 28px;
          line-height: 40px;
           `;
    case "h2_SemiBold":
      return `
          font-weight: 600;
          font-size: 28px;
          line-height: 40px;
          `;
    case "h2_Bold":
      return `
          font-weight: 700;
          font-size: 28px;
          line-height: 40px;
          `;
    case "h3_Regular":
      return `
         font-weight: 400;
         font-size: 24px;
         line-height: 32px;
          `;
    case "h3_Medium":
      return `
         font-weight: 500;
         font-size: 24px;
         line-height: 32px; 
        `;
    case "h3_SemiBold":
      return `
          font-weight: 600;
          font-size: 24px;
         line-height: 32px; 
          `;
    case "h3_Bold":
      return `
          font-weight: 700;
          font-size: 24px;
          line-height: 32px; 
          `;
    case "h4_Regular":
      return `
          font-weight: 400;
          font-size: 20px;
          line-height: 32px;
          `;
    case "h4_Medium":
      return `
          font-weight: 500;
          font-size: 20px;
          line-height: 32px; 
          `;
    case "h4_SemiBold":
      return `
          font-weight: 600;
          font-size: 20px;
          line-height: 32px; 
           `;
    case "h4_Bold":
      return `
          font-weight: 700;
          font-size: 20px;
          line-height: 32px; 
          `;
    case "h5_Regular":
      return `
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          `;
    case "h5_Medium":
      return `
         font-weight: 500;
         font-size: 18px;
         line-height: 24px; 
          `;
    case "h5_SemiBold":
      return `
          font-weight: 600;
          font-size: 18px;
          line-height: 24px; 
          `;
    case "h5_Bold":
      return `
          font-weight: 700;
          font-size: 18px;
          line-height: 24px; 
          `;
    default:
      return null;
  }
};

export const H = styled.p<Props>`
  margin-bottom: 0px;
  font-family: "Inter";
  font-style: normal;
  letter-spacing: -0.02em;
  ${(props) => props.cursor && css`cursor: ${props.cursor}};`};
  ${(props) => getStyleFontType(props.type)}
  ${typography}
  ${space}
  ${color}
`;
