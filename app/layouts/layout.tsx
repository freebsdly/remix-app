import { Layout } from "antd";
import AppMenu from "./menu";

const { Header, Content } = Layout;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Header className="p-0 m-0">
        <AppMenu></AppMenu>
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default AppLayout;
