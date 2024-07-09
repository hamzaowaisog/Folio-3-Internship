import { Layout } from "antd";
import HeaderClass from "./headerClass";
const { Header, Content } = Layout;
import PizzaContent from "./Content";

export default function MainComponent(){
    return(
        <Layout>
            <Header style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "0px 1px 30px rgba(0,0,0,0.75)",
          }}>
                <HeaderClass/>
            </Header>
            <Content style={{ padding: "0 50px", marginTop: "20px" }}>
                <PizzaContent/>
            </Content>
        </Layout>
    );
}