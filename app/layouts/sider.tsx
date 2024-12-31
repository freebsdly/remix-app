import { Menu } from "antd";
import { CSSProperties } from "react";
import { MenuInfo } from "~/services/model";
import { toMenus } from "~/utils/utils";

const siderMenuStyle: CSSProperties = {
  width: 200,
  height: "100%",
  borderRight: 0,
};

const AppSiderMenus = ({ infos }: { infos: MenuInfo[] }) => {
  return (
    <Menu
      style={siderMenuStyle}
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={toMenus(infos)}
    />
  );
};

export default AppSiderMenus;
