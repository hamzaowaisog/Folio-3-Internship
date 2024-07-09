import { Layout, Button, Drawer, Menu } from "antd";
import "./header.css";
const { Header, Content } = Layout;
import { Component } from "react";
import { Link } from "react-router-dom";
import PizzaContent from "./Content";
import { MenuOutlined } from "@ant-design/icons";

export default class HeaderClass extends Component {
  menuItems = [
    { key: "1", label: "Login" },
    { key: "2", label: "Cart 0" },
  ];
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showDrawer = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
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
            <div className="inside">
              <Link to={"/"} style={{ color: "black" }}>
                SHEY PIZZA
              </Link>
              <img
                src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/pizza_1f355.png"
                alt=""
              />
            </div>
            <div>
              <Button className="menuButton" type="text" onClick={this.showDrawer}>
                <MenuOutlined />
              </Button>
            </div>
            <div className="rightMenu">
              <Menu className="Mainmenu" mode={"horizontal"} items={this.menuItems} />
            </div>

            <Drawer title ="Menu"
            placement="right"
            onClose={this.showDrawer}
            open={this.state.visible}
            >
                <Menu className="Mainmenu" mode={"vertical"} items={this.menuItems} />
            </Drawer>
          </Header>
          <Content style={{ padding: "0 50px", marginTop: "20px" }}>
            <PizzaContent />
          </Content>
        </Layout>
      </>
    );
  }
}
