/* eslint-disable jsx-a11y/no-static-element-interactions */
import { StarterKit } from "@tiptap/starter-kit";
import { EditorContent, type Extension, useEditor } from "@tiptap/react";
import { TextAlign } from "@tiptap/extension-text-align";
import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";
import { TextStyle } from "@tiptap/extension-text-style";
import { Link } from "@tiptap/extension-link";

import { Separator } from "~/components/ui/separator";
import { BlockquoteToolbar } from "~/components/toolbars/blockquote";
import { BoldToolbar } from "~/components/toolbars/bold";
import { BulletListToolbar } from "~/components/toolbars/bullet-list";
import { CodeToolbar } from "~/components/toolbars/code";
import { CodeBlockToolbar } from "~/components/toolbars/code-block";
import { HardBreakToolbar } from "~/components/toolbars/hard-break";
import { HorizontalRuleToolbar } from "~/components/toolbars/horizontal-rule";
import { ItalicToolbar } from "~/components/toolbars/italic";
import { OrderedListToolbar } from "~/components/toolbars/ordered-list";
import { RedoToolbar } from "~/components/toolbars/redo";
import { StrikeThroughToolbar } from "~/components/toolbars/strikethrough";
import { ToolbarProvider } from "~/components/toolbars/toolbar-provider";
import { UndoToolbar } from "~/components/toolbars/undo";
import { SearchAndReplace } from "~/components/extensions/search-and-replace";
import { SearchAndReplaceToolbar } from "~/components/toolbars/search-and-replace-toolbar";

import { ImageExtension } from "~/components/extensions/image";
import { ImagePlaceholder } from "~/components/extensions/image-placeholder";
import { ImagePlaceholderToolbar } from "~/components/toolbars/image-placeholder-toolbar";
import { ColorHighlightToolbar } from "~/components/toolbars/color-and-highlight";
import { LinkURLToolbar } from "~/components/toolbars/link-url";

const editorMode: "simple" | "complex" = "simple";
const isSimple = editorMode === "simple";

const content = `
<h2 class="tiptap-heading">Hello world</h2>
<p>Try interacting with the image below</p>
`;

const extensions = [
  StarterKit.configure({
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal",
      },
    },
    bulletList: {
      HTMLAttributes: {
        class: "list-disc",
      },
    },
    code: {
      HTMLAttributes: {
        class: "bg-accent rounded-md p-1",
      },
    },
    horizontalRule: {
      HTMLAttributes: {
        class: "my-2",
      },
    },
    codeBlock: {
      HTMLAttributes: {
        class: "bg-primary text-primary-foreground p-2 text-sm rounded-md p-1",
      },
    },
    heading: {
      levels: [1, 2, 3, 4],
      HTMLAttributes: {
        class: "tiptap-heading",
      },
    },
  }),
  Link.configure({
    openOnClick: false,
    autolink: true,
    defaultProtocol: "https",
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  TextStyle,
  Color,
  Highlight.configure({
    multicolor: true,
  }),
  ImageExtension,
  ImagePlaceholder,
  SearchAndReplace,
];

export const DemoTiptapEditor = () => {
  const editor = useEditor({
    extensions: extensions as Extension[],
    content,
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border w-full relative rounded-md overflow-hidden pb-3">
      <div className="w-full py-2 px-2 justify-between border-b sticky top-0 left-0 bg-background z-20">
        <ToolbarProvider editor={editor}>
          <section className="flex justify-between items-start gap-4">
            <div className="flex items-center gap-1 flex-wrap">
              <UndoToolbar />
              <RedoToolbar />
              <Separator orientation="vertical" className="h-8" />
              <BoldToolbar />
              <ItalicToolbar />
              <StrikeThroughToolbar />
              <BulletListToolbar />
              <OrderedListToolbar />
              {!isSimple && <CodeToolbar />}
              {!isSimple && <CodeBlockToolbar />}
              <HorizontalRuleToolbar />
              <BlockquoteToolbar />
              <HardBreakToolbar />
              <ColorHighlightToolbar />
              <LinkURLToolbar />
              <ImagePlaceholderToolbar />
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              <SearchAndReplaceToolbar />
            </div>
          </section>
        </ToolbarProvider>
      </div>
      <div
        onClick={() => {
          editor?.chain().focus().run();
        }}
        onKeyDown={() => {
          editor?.chain().focus().run();
        }}
        className="cursor-text min-h-[18rem]"
      >
        <EditorContent editor={editor} className="outline-none custom-prose" />
      </div>
    </div>
  );
};
