import type { MetaFunction } from "@remix-run/node";
import { TiptapStarter } from "~/components/demos/tiptap-starter";

export const meta: MetaFunction = () => {
  return [
    { title: "Demo Remix shadcn/ui" },
    { name: "description", content: "shadcn/ui demo with Remix.run" },
  ];
};

export default function Index() {
  return (
    <div className="container-large mt-10 space-y-10">
      <header>
        <h1 className="text-3xl font-medium">Demo Remix shadcn/ui</h1>
      </header>

      <main className="">
        <TiptapStarter />
      </main>
    </div>
  );
}
