import { Layout } from "antd";
const { Header, Content } = Layout;
import "../CSS/MainComponent.css";
import HeaderFunctional from "./header";
import { Outlet } from "react-router-dom";

export default function MainComponent(){
    return(
        <Layout>
            <Header className="header">
                <HeaderFunctional/>
            </Header>
            <Content className="content">
                <Outlet/>
            </Content>
        </Layout>
    );
}