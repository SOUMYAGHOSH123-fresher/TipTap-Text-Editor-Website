import StarterKit from '@tiptap/starter-kit';
import { EditorOptions } from '@tiptap/react';

export const defaultEditorConfig: Partial<EditorOptions> = {
  extensions: [StarterKit],
  content: '<p>Hello World! 🌎</p>',
  editorProps: {
    attributes: {
      class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
    },
  },
};