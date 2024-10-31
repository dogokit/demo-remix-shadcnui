/* eslint-disable jsx-a11y/no-static-element-interactions */
import { StarterKit } from "@tiptap/starter-kit";
import { EditorContent, type Extension, useEditor } from "@tiptap/react";
import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";
import { TextStyle } from "@tiptap/extension-text-style";
import { Link } from "@tiptap/extension-link";
import { Underline } from "@tiptap/extension-underline";
import { TextAlign } from "@tiptap/extension-text-align";
import { Superscript } from "@tiptap/extension-superscript";
import { Subscript } from "@tiptap/extension-subscript";

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
import { UnderlineToolbar } from "~/components/toolbars/underline";

const editorMode: "simple" | "complex" = "simple";
const isSimple = editorMode === "simple";

const content =
  '<h2 style="text-align: center;">Welcome!</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

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
  Underline,
  Link,
  Superscript,
  Subscript,
  Link.configure({
    openOnClick: true,
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

export const RichTextEditorTiptap = () => {
  const editor = useEditor({
    extensions: extensions as Extension[],
    content,
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border w-full rounded-md overflow-hidden pb-3 relative">
      <div className="w-full py-2 px-2 justify-between border-b sticky top-0 left-0 bg-background z-10">
        <ToolbarProvider editor={editor}>
          <section className="flex justify-between items-start gap-4">
            <div className="flex items-center flex-wrap">
              <UndoToolbar />
              <RedoToolbar />
              <Separator orientation="vertical" className="h-8 mx-1" />
              <BoldToolbar />
              <ItalicToolbar />
              <StrikeThroughToolbar />
              <UnderlineToolbar />
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
            <div className="flex items-center flex-wrap">
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
        className="flex min-h-[18rem] cursor-text justify-center"
      >
        <EditorContent editor={editor} className="outline-none custom-prose" />
      </div>
    </div>
  );
};
