import { useState } from "react";
import { Button, Drawer, Menu } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import MenuItems from "../Data/MenuData";
import "../CSS/header.css";

const HeaderFunctional = () => {
  const [visible, setVisible] = useState(false);
  const { menudata } = MenuItems(); // Assuming MenuItems returns an object with menu items

  const showDrawer = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="inside">
        <Link to={"/"} className="link">
          SHEY PIZZA
        </Link>
        <img
          src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/pizza_1f355.png"
          alt="Pizza Emoji"
        />
      </div>
      <div>
        <Button className="menuButton" type="text" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
      </div>
      <div className="rightMenu">
      <Menu className="Mainmenu" mode={"horizontal"} items={menudata} />
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={showDrawer}
        visible={visible}
      >
      <Menu className="Mainmenu" mode={"vertical"} items={menudata} />
                      
      </Drawer>
    </>
  );
};

export default HeaderFunctional;
