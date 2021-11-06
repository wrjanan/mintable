import React, { CSSProperties, ReactElement } from "react";
import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useNavigate } from "react-router-dom";

const headerStyle: CSSProperties = {
  background: "white",
}

export const MainHeader: React.FC = (): ReactElement => {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  }
  return (
    <Header style={headerStyle}>
      <div className="logo" />
      <Menu theme="light" mode="horizontal">
        <Menu.Item key="1" onClick={() => handleClick("/")}>Main</Menu.Item>
        <Menu.Item key="2" onClick={() => handleClick("/raffle")}>Raffle</Menu.Item>
      </Menu>
    </Header>
  );
};
