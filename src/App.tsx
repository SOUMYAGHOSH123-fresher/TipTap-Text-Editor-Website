import React from 'react';
import Editor from './editor/components/Editor';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-rose-100 to-indigo-100 animate-gradient-xy">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
              TipTap Text Editor
            </span>
          </h1>
          <p className="text-gray-600 text-lg">A powerful rich text editor for your content</p>
        </div>
        <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg rounded-xl shadow-xl p-6 ring-1 ring-black/5">
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default App;