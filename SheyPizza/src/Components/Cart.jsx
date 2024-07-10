import { Layout } from "antd";
const { Header, Content } = Layout;
import "../CSS/MainComponent.css";
import CartDisplay from "./CartDisplay";
import HeaderFunctional from "./header";

export default function Cart() {
  return (
    <Layout>
      <Header className="header">
        <HeaderFunctional />
      </Header>
      <Content className="content">
        <CartDisplay/>
      </Content>
    </Layout>
  );
}
