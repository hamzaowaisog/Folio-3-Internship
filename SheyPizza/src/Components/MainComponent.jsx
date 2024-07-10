import { Layout } from "antd";
const { Header, Content } = Layout;
import PizzaContent from "./Content";
import "../CSS/MainComponent.css";
import HeaderFunctional from "./header";

export default function MainComponent(){
    return(
        <Layout>
            <Header className="header">
                <HeaderFunctional/>
            </Header>
            <Content className="content">
                <PizzaContent/>
            </Content>
        </Layout>
    );
}