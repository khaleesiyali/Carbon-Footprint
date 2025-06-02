/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';var e=require("@lexical/link"),k=require("@lexical/react/LexicalComposerContext"),l=require("@lexical/react/LexicalNodeMenuPlugin"),q=require("@lexical/utils"),r=require("lexical"),z=require("react"),A=require("react/jsx-runtime");let B=r.createCommand("INSERT_EMBED_COMMAND");class C extends l.MenuOption{constructor(f,n){super(f);this.title=f;this.onSelect=n.onSelect.bind(this)}}exports.AutoEmbedOption=C;exports.INSERT_EMBED_COMMAND=B;
exports.LexicalAutoEmbedPlugin=function({embedConfigs:f,onOpenEmbedModalForConfig:n,getMenuOptions:t,menuRenderFn:D,menuCommandPriority:E=r.COMMAND_PRIORITY_LOW}){let [c]=k.useLexicalComposerContext(),[g,u]=z.useState(null),[h,v]=z.useState(null),m=z.useCallback(()=>{u(null);v(null)},[]),w=z.useCallback(b=>{c.getEditorState().read(async function(){const a=r.$getNodeByKey(b);if(e.$isLinkNode(a))for(let d=0;d<f.length;d++){const p=f[d];null!=await Promise.resolve(p.parseUrl(a.__url))&&(v(p),u(a.getKey()))}})},
[c,f]);z.useEffect(()=>{let b=(a,{updateTags:d,dirtyLeaves:p})=>{for(const [x,F]of a)"created"===F&&d.has("paste")&&3>=p.size?w(x):x===g&&m()};return q.mergeRegister(...[e.LinkNode,e.AutoLinkNode].map(a=>c.registerMutationListener(a,(...d)=>b(...d))))},[w,c,f,g,m]);z.useEffect(()=>c.registerCommand(B,b=>{let a=f.find(({type:d})=>d===b);return a?(n(a),!0):!1},r.COMMAND_PRIORITY_EDITOR),[c,f,n]);let y=z.useCallback(async function(){if(null!=h&&null!=g){const b=c.getEditorState().read(()=>{const a=r.$getNodeByKey(g);
return e.$isLinkNode(a)?a:null});if(e.$isLinkNode(b)){const a=await Promise.resolve(h.parseUrl(b.__url));null!=a&&c.update(()=>{r.$getSelection()||b.selectEnd();h.insertNode(c,a);b.isAttached()&&b.remove()})}}},[h,c,g]),G=z.useMemo(()=>null!=h&&null!=g?t(h,y,m):[],[h,y,t,g,m]),H=z.useCallback((b,a,d)=>{c.update(()=>{b.onSelect(a);d()})},[c]);return null!=g?A.jsx(l.LexicalNodeMenuPlugin,{nodeKey:g,onClose:m,onSelectOption:H,options:G,menuRenderFn:D,commandPriority:E}):null};exports.URL_MATCHER=/((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
