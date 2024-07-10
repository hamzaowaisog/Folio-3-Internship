import { Layout } from "antd";
import HeaderClass from "./headerClass";
const { Header, Content } = Layout;
import "../CSS/MainComponent.css";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <Layout>
      <Header className="header">
        <HeaderClass />
      </Header>
      <Content className="content">
        <LoginForm/>
      </Content>
    </Layout>
  );
}
