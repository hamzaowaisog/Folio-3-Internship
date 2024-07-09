import { Menu } from "antd";
import "./header.css";
import  menuItems  from "../Data/MenuData";

export default function HeaderReact() {
  
  return (
    <>
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
    </>
  );
}
