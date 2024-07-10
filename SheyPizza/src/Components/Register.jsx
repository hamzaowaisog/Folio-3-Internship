import { Layout } from "antd";
import HeaderClass from "./headerClass";
const { Header, Content } = Layout;
import "../CSS/MainComponent.css";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <Layout>
      <Header className="header">
        <HeaderClass />
      </Header>
      <Content className="content">
        <RegisterForm/>
      </Content>
    </Layout>
  );
}
