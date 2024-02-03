import styled from "@emotion/styled";
import { Col, Row } from "antd";
import * as React from "react";
import { FC, ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

const AuthLayoutForm = styled.div`
  display: flex;
  height: 97vh;
  justify-content: center;
  align-items: center;
  @media screen and (max-height: 620px) {
    align-items: normal;
    height: auto;
  }
`;

export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <AuthLayoutForm>{children}</AuthLayoutForm>
    </div>
  );
};
