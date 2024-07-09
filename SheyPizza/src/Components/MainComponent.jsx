import { Layout } from "antd";
import HeaderClass from "./headerClass";
const { Header, Content } = Layout;
import PizzaContent from "./Content";
import "../CSS/MainComponent.css";

export default function MainComponent(){
    return(
        <Layout>
            <Header className="header">
                <HeaderClass/>
            </Header>
            <Content className="content">
                <PizzaContent/>
            </Content>
        </Layout>
    );
}