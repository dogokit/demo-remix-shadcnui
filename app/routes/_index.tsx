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
    <div className="custom-container">
      <header className="py-10">
        <h1 className="text-3xl font-medium">Demo Remix shadcn/ui</h1>
      </header>

      <main>
        <TiptapStarter />
      </main>

      <footer className="py-20">
        <p>© Dogokit</p>
      </footer>
    </div>
  );
}
