/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';var d=require("@lexical/react/LexicalComposerContext"),g=require("react"),h=require("react/jsx-runtime");let k="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?g.useLayoutEffect:g.useEffect;
exports.ContentEditable=function({ariaActiveDescendant:l,ariaAutoComplete:m,ariaControls:n,ariaDescribedBy:p,ariaExpanded:q,ariaLabel:r,ariaLabelledBy:t,ariaMultiline:u,ariaOwns:v,ariaRequired:w,autoCapitalize:x,className:y,id:z,role:e="textbox",spellCheck:A=!0,style:B,tabIndex:C,"data-testid":D,...E}){let [c]=d.useLexicalComposerContext(),[a,f]=g.useState(!1),F=g.useCallback(b=>{b&&b.ownerDocument&&b.ownerDocument.defaultView&&c.setRootElement(b)},[c]);k(()=>{f(c.isEditable());return c.registerEditableListener(b=>
{f(b)})},[c]);return h.jsx("div",{...E,"aria-activedescendant":a?l:void 0,"aria-autocomplete":a?m:"none","aria-controls":a?n:void 0,"aria-describedby":p,"aria-expanded":a?"combobox"===e?!!q:void 0:void 0,"aria-label":r,"aria-labelledby":t,"aria-multiline":u,"aria-owns":a?v:void 0,"aria-readonly":a?void 0:!0,"aria-required":w,autoCapitalize:x,className:y,contentEditable:a,"data-testid":D,id:z,ref:F,role:e,spellCheck:A,style:B,tabIndex:C})}
