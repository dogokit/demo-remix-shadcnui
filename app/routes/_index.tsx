import type { MetaFunction } from "@remix-run/node";
import { RichTextEditorTiptap } from "~/components/shared/rich-text-editor-tiptap";

export const meta: MetaFunction = () => {
  return [
    { title: "Demo Remix shadcn/ui" },
    { name: "description", content: "shadcn/ui demo with Remix.run" },
  ];
};

export default function Index() {
  return (
    <div className="custom-container px-4">
      <header className="py-10 space-y-2">
        <h1 className="text-3xl font-medium">Demo Remix shadcn/ui</h1>
        <p>Various demos of shadcn/ui components on Remix (React Router).</p>
      </header>

      <main>
        <section className="space-y-2">
          <h2 className="text-2xl font-medium">Tiptap</h2>
          <p>Tiptap is a rich-text editor for the web.</p>
          <RichTextEditorTiptap />
        </section>
      </main>

      <footer className="py-20">
        <p>© Dogokit</p>
      </footer>
    </div>
  );
}
