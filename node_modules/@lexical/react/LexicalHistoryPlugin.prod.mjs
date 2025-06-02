/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import{useLexicalComposerContext as t}from"@lexical/react/LexicalComposerContext";import{createEmptyHistoryState as o,registerHistory as r}from"@lexical/history";export{createEmptyHistoryState}from"@lexical/history";import{useMemo as e,useEffect as i}from"react";function c({externalHistoryState:c}){const[a]=t();return function(t,c,a=1e3){const l=e((()=>c||o()),[c]);i((()=>r(t,l,a)),[a,t,l])}(a,c),null}export{c as HistoryPlugin};
