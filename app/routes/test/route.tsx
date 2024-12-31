import type { MetaFunction } from "@remix-run/node";
import { Button } from "antd";

export const meta: MetaFunction = () => {
  return [
    { title: "Test Page" },
    { name: "description", content: "Test page" },
  ];
};

const TestPage = () => {

  return (
    <div className="p-0">
      <Button type={"primary"}>Ok</Button>
      <div>content</div>
    </div>
  );
};

export default TestPage;
