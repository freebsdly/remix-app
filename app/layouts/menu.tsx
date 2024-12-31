import { CSSProperties, useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { MenuInfo } from "~/services/model";
import { toMenus } from "~/utils/utils";

const topMenuStyle: CSSProperties = {
  flex: 1,
  minWidth: 0,
};

const AppTopMenus = ({ infos }: { infos: MenuInfo[] }) => {
  const [current, setCurrent] = useState<string>("home");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={toMenus(infos)}
      style={topMenuStyle}
    />
  );
};

export default AppTopMenus;
