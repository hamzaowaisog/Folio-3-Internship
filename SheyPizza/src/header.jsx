import { Layout, Menu } from "antd";
import "./header.css";
const { Header, Content } = Layout;

export default function HeaderReact() {
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
            ></img>
          </div>
          <div>
            <Menu
              mode="horizontal"
              style={{ fontSize: "18px" }}
              defaultSelectedKeys={["0"]}
            >
              <Menu.Item key="1">Login</Menu.Item>
              <Menu.Item key="2">Cart 0</Menu.Item>
            </Menu>
          </div>
        </Header>
      </Layout>
    </>
  );
}
