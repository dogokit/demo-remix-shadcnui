import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Demo Remix shadcn/ui" },
    { name: "description", content: "shadcn/ui demo with Remix.run" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Demo Remix shadcn/ui</h1>
      <Button>Demo</Button>
    </div>
  );
}
