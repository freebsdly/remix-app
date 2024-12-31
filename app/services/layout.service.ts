import { MenuInfo } from "./model";

/**
 * TODO: 传入用户ID
 * @returns MenuInfo 菜单列表
 */
export const getMenuData = async () => {
  const items: MenuInfo[] = [
    {
      label: "Home",
      url: "/",
      key: "home",
    },
    {
      label: "配置中心",
      url: "/cmdb",
      key: "cmdb",
    },
    {
      label: "服务中心",
      url: "/itsm",
      key: "itsm",
    },
    {
      label: "文档中心",
      url: "/docs",
      key: "docs",
    },
    {
      label: "Test Page",
      url: "/test",
      key: "test",
    },
  ];
  return items;
};

export const getSiderMenuData = async (topMenuKey: string) => {
  if (topMenuKey === "home") {
    return [
      {
        label: "Home1",
        url: "/home/home1",
        key: "home",
      },
      {
        label: "Test Page",
        url: "/home/home2",
        key: "test",
      },
    ] as MenuInfo[];
  } else if (topMenuKey === "test") {
    return [
      {
        label: "Test 1",
        url: "/test/test1",
        key: "test1",
      },
      {
        label: "Test 2",
        url: "/test/test2",
        key: "test2",
      },
    ] as MenuInfo[];
  }

  return [
    {
      label: "Default",
      url: "/default",
      key: "default",
    },
  ] as MenuInfo[];
};
