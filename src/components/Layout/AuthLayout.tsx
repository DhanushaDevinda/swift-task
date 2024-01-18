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
    <Row style={{ height: "100vh" }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
        <div>{/* <ImageTop src={TopRightBackground} /> */}</div>
        <AuthLayoutForm>{children}</AuthLayoutForm>
      </Col>

      <Col xs={0} sm={0} md={0} lg={0} xl={12} xxl={12}>
        {/* <Image
      src={Rectangle}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        objectFit: 'cover',
      }}
    /> */}
      </Col>
    </Row>
  );
};
