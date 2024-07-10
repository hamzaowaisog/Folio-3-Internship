import { Layout } from "antd";
import HeaderClass from "./headerClass";
const { Header, Content } = Layout;
import "../CSS/MainComponent.css";
import CartDisplay from "./CartDisplay";

export default function Cart() {
  return (
    <Layout>
      <Header className="header">
        <HeaderClass />
      </Header>
      <Content className="content">
        <CartDisplay/>
      </Content>
    </Layout>
  );
}
