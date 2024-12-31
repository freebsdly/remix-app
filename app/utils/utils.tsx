import { Link } from "@remix-run/react";
import { MenuProps } from "antd/es/menu";
import { MenuInfo } from "~/services/model";

type MenuItem = Required<MenuProps>["items"][number];

export const toMenus = (infos?: MenuInfo[]): MenuItem[] => {
  if (!infos) {
    throw new Response("can not get user menus", {
      status: 501,
      statusText: "can not get user menus",
    });
  }
  return infos.map(
    (menu) =>
      ({
        label: <Link to={menu.url}>{menu.label}</Link>,
        key: menu.key,
      } as MenuItem)
  );
};
