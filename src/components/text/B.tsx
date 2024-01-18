import React, { CSSProperties } from "react";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export type FontTypes =
  | "text-large"
  | "text-large-medium"
  | "text-large-semibold"
  | "text-large-bold"
  | "text-default"
  | "text-default-medium"
  | "text-default-semibold"
  | "text-default-bold"
  | "text-small"
  | "text-small-medium"
  | "text-small-semibold";

type Props = React.HTMLAttributes<HTMLDivElement> &
  SpaceProps &
  ColorProps &
  TypographyProps & {
    type: FontTypes;
    children?: string | React.ReactNode;
    id?: string;
    display?: CSSProperties["display"];
    onClick?: () => void;
    cursor?: CSSProperties["cursor"];
  };

const getStyleFontType = (type: FontTypes) => {
  switch (type) {
    case "text-large":
      return `
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
      `;
    case "text-large-medium":
      return `
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
        `;
    case "text-large-semibold":
      return `
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
            `;
    case "text-large-bold":
      return `
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      `;
    case "text-default":
      return `
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
      `;
    case "text-default-medium":
      return `
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      `;
    case "text-default-semibold":
      return `
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
        `;
    case "text-default-bold":
      return `
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
        `;
    case "text-small":
      return `
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
      `;
    case "text-small-medium":
      return `
        font-weight: 600;
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 0.2px;
      `;
    case "text-small-semibold":
      return `
        font-weight: 600;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.2px;
        `;
  }
};
export const B = styled.p<Props>`
  margin-bottom: 0px;
  ${(props) => props.cursor && css`cursor: ${props.cursor}};`};
  ${(props) => getStyleFontType(props.type)}
  ${typography}
  ${space}
  ${color}
`;
