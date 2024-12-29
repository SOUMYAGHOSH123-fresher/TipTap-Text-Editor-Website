import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { defaultEditorConfig } from '../config/editorConfig';
import MenuBar from './MenuBar';

const Editor: React.FC = () => {
  const editor = useEditor(defaultEditorConfig);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <MenuBar editor={editor} />
      <div className="border rounded-lg p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;