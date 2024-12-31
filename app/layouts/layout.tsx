import { Breadcrumb, Layout } from "antd";
import { CSSProperties } from "react";
import { MenuInfo } from "~/services/model";
import AppSiderMenus from "./sider";
import AppTopMenus from "./menu";

const { Header, Content, Sider } = Layout;

const headerStyle: CSSProperties = {
  padding: 0,
  position: "sticky",
  top: 0,
  zIndex: 1,
  display: "flex",
  alignItems: "center",
};

const siderStyle: CSSProperties = {
  overflow: "auto",
  height: "100vh",
  insetInlineStart: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const contentStyle: CSSProperties = {};

export type AppLayoutProps = {
  topMenus: MenuInfo[];
  siderMenus: MenuInfo[];
  children: React.ReactNode;
};

const AppLayout = (props: AppLayoutProps) => {
  return (
    <Layout>
      <Header style={headerStyle}>
        <div className="demo-logo" />
        <AppTopMenus infos={props.topMenus} />
      </Header>
      <Layout>
        <Sider style={siderStyle}>
          <AppSiderMenus infos={props.siderMenus} />
        </Sider>
        <Layout>
          <div className="p-1 m-1">
            <Breadcrumb
              items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
            />
          </div>
          <Content style={contentStyle}>{props.children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
