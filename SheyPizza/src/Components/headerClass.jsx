import { Button, Drawer, Menu } from "antd";
import "../CSS/header.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import menuItems from "../Data/MenuData";

export default class HeaderClass extends Component {
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
              <Menu className="Mainmenu" mode={"horizontal"} items={menuItems} />
            </div>

            <Drawer title ="Menu"
            placement="right"
            onClose={this.showDrawer}
            open={this.state.visible}
            >
                <Menu className="Mainmenu" mode={"vertical"} items={menuItems} />
            </Drawer>
         
      </>
    );
  }
}
