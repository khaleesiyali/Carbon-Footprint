/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import{useLexicalComposerContext as e}from"@lexical/react/LexicalComposerContext";import{useLayoutEffect as a,useEffect as i,useState as t,useCallback as o}from"react";import{jsx as r}from"react/jsx-runtime";const d="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?a:i;function n({ariaActiveDescendant:a,ariaAutoComplete:i,ariaControls:n,ariaDescribedBy:l,ariaExpanded:c,ariaLabel:s,ariaLabelledBy:m,ariaMultiline:u,ariaOwns:b,ariaRequired:p,autoCapitalize:x,className:w,id:v,role:f="textbox",spellCheck:y=!0,style:C,tabIndex:E,"data-testid":D,...L}){const[h]=e(),[k,q]=t(!1),z=o((e=>{e&&e.ownerDocument&&e.ownerDocument.defaultView&&h.setRootElement(e)}),[h]);return d((()=>(q(h.isEditable()),h.registerEditableListener((e=>{q(e)})))),[h]),r("div",{...L,"aria-activedescendant":k?a:void 0,"aria-autocomplete":k?i:"none","aria-controls":k?n:void 0,"aria-describedby":l,"aria-expanded":k&&"combobox"===f?!!c:void 0,"aria-label":s,"aria-labelledby":m,"aria-multiline":u,"aria-owns":k?b:void 0,"aria-readonly":!k||void 0,"aria-required":p,autoCapitalize:x,className:w,contentEditable:k,"data-testid":D,id:v,ref:z,role:f,spellCheck:y,style:C,tabIndex:E})}export{n as ContentEditable};
