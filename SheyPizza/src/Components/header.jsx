import { Layout, Menu } from "antd";
import "./header.css";
import { useState, useEffect } from "react";
const { Header, Content } = Layout;
import PizzaContent from "./Content";

export default function HeaderReact() {
  const menuItems = [
    { key: "1", label: "Login" },
    { key: "2", label: "Cart 0" },
  ];

  return (
    <>
      <Layout>
        <Header
          style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "0px 1px 30px rgba(0,0,0,0.75)",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", fontSize: "24px" }}
          >
            SHEY PIZZA
            <img
              src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/pizza_1f355.png"
              alt=""
            />
          </div>
          <div style={{}}>
            <Menu
              mode={"horizontal"}
              style={{ justifyContent: "right", fontSize: "20px" }}
              items={menuItems}
            />
          </div>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: "20px" }}>
          <PizzaContent />
        </Content>
      </Layout>
    </>
  );
}
