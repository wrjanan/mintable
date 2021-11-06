import React, { ReactElement } from "react";
import { Col, Menu, Row } from "antd";
import { Footer, Header } from "antd/lib/layout/layout";
import { useNavigate } from "react-router-dom";
import { FooterCols } from "./FooterCols";
import { FooterStyle } from "../../styles/commons";

export const MainFooter: React.FC = (): ReactElement => {
  return (
    <Footer style={FooterStyle}>
      <Row>
        <FooterCols title={"Mintable Logo"}/>
        <FooterCols title={"My Account"}/>
        <FooterCols title={"Need Help"}/>
      </Row>
    </Footer>
  );
};
