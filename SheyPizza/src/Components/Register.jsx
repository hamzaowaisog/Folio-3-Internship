import { Layout } from "antd";
const { Header, Content } = Layout;
import "../CSS/MainComponent.css";
import RegisterForm from "./RegisterForm";
import HeaderFunctional from "./header";

export default function Register() {
  return (
    <Layout>
      <Header className="header">
        <HeaderFunctional />
      </Header>
      <Content className="content">
        <RegisterForm/>
      </Content>
    </Layout>
  );
}
