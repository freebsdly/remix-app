import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useLoaderData } from "@remix-run/react";

type MenuItem = Required<MenuProps>["items"][number];

export const loader = () => {
  const items: MenuItem[] = [
    {
      label: "Home",
      key: "home",
    },
    {
      label: "Test Page",
      key: "test",
      disabled: true,
    },
  ];

  return Response.json(items);
};

const AppMenu: React.FC = () => {
  const [current, setCurrent] = useState<string>("");
  const menuData = useLoaderData<typeof loader>();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu className="p-0 m-0"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={menuData}
    />
  );
};

export default AppMenu;
