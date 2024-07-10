import { Layout } from "antd";
const { Header, Content } = Layout;
import "../CSS/MainComponent.css";
import LoginForm from "./LoginForm";
import HeaderFunctional from "./header";

export default function Login() {
  return (
    <Layout>
      <Header className="header">
        <HeaderFunctional/>
      </Header>
      <Content className="content">
        <LoginForm/>
      </Content>
    </Layout>
  );
}