import { Layout, Menu } from "antd";
import "./header.css";
import { useState, useEffect } from "react";
const { Header, Content } = Layout;

export default function HeaderReact() {

  const menuItems = [
    { key: "1", label: "Login" },
    { key: "2", label: "Cart 0" }
  ];

  return (
    <>
      <Layout>
        <Header
          style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "0px 10px 50px rgba(0,0,0,0.75)",
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
          <div style={{  flex:1 , alignItems: "right" }}>

            <Menu mode="horizontal" style={{justifyContent: "right" }} items={menuItems} />
            </div>
        </Header>
        <Content>
            
        </Content>
      </Layout>
    </>
  );
}