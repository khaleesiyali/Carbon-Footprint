import {$getRoot, $getSelection} from 'lexical';
import {useEffect} from 'react';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';


    const theme = {
        ltr: 'ltr',
        rtl: 'rtl',
        paragraph: 'editor-paragraph',
        border: '1px solid white'
    }

  function onChange(editorState) {
    editorState.read(() => {
      const root = $getRoot();
      const selection = $getSelection();
  
      console.log(root, selection);
    });
  }

  function MyCustomAutoFocusPlugin() {
    const [editor] = useLexicalComposerContext();
  
  useEffect(() => {
      editor.focus();
    }, [editor]);
  
    return null;
  }
  
  function onError(error) {
    throw error;
  }
  
function Lexical() {
    const initialConfig = {
        namespace: 'MyEditor',
        theme: theme,
        onError,
      };
  return (
    <>
        <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={<ContentEditable />}
      />
      <OnChangePlugin onChange={onChange} />
      <HistoryPlugin />
      <MyCustomAutoFocusPlugin />
    </LexicalComposer>
    </>
  )
}

export default Lexical