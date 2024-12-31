import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import AppLayout from "./layouts/layout";

import "./tailwind.css";
import "/public/antd.min.css";
import { getMenuData, getSiderMenuData } from "./services/layout.service";
import { Button, Result } from "antd";
import { ResultStatusType } from "antd/es/result";

export const links: LinksFunction = () => [
  // { rel: "preconnect", href: "https://fonts.googleapis.com" },
  // {
  //   rel: "preconnect",
  //   href: "https://fonts.gstatic.com",
  //   crossOrigin: "anonymous",
  // },
  // {
  //   rel: "stylesheet",
  //   href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  // },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Result
        status={error.status as ResultStatusType}
        title={error.statusText}
        subTitle={error.data}
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  } else if (error instanceof Error) {
    <Result
      status={500}
      title={error.name}
      subTitle={error.message}
      extra={<Button type="primary">Back Home</Button>}
    />;
  } else {
    return <h1>Unknown Error</h1>;
  }
};

export const loader = async () => {
  const topMenus = await getMenuData();
  const siderMenus = await getSiderMenuData("home");
  return { topMenus, siderMenus };
};

export default function App() {
  const menus = useLoaderData<typeof loader>();
  return (
    <AppLayout {...menus}>
      <Outlet />
    </AppLayout>
  );
}
