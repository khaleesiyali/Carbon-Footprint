/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';var h=require("@lexical/react/LexicalComposerContext"),q=require("@lexical/rich-text"),v=require("@lexical/utils"),w=require("lexical"),x=require("react");function y(d){return[d.getKey(),d.getTextContent(),d.getTag()]}function z(d,t,n){let e=[],c=y(t);d||e.push(c);for(let r of n)r[0]!==t.getKey()&&(e.push(r),d&&r[0]===d.getKey()&&e.push(c));return e}function B(d){for(d=v.$getNextRightPreorderNode(d);null!==d&&!q.$isHeadingNode(d);)d=v.$getNextRightPreorderNode(d);return d}
exports.default=function({children:d}){let [t,n]=x.useState([]),[e]=h.useLexicalComposerContext();x.useEffect(()=>{let c=[];e.getEditorState().read(()=>{let l=w.$getRoot().getChildren();for(let a of l)q.$isHeadingNode(a)&&c.push([a.getKey(),a.getTextContent(),a.getTag()]);n(c)});let r=e.registerUpdateListener(({editorState:l,dirtyElements:a})=>{l.read(()=>{const f=b=>{for(const g of b.getChildren())q.$isHeadingNode(g)?(b=B(g),c=z(b,g,c),n(c)):w.$isElementNode(g)&&f(g)};w.$getRoot().getChildren().forEach(b=>
{w.$isElementNode(b)&&a.get(b.__key)&&f(b)})})}),C=e.registerMutationListener(q.HeadingNode,l=>{e.getEditorState().read(()=>{for(const [g,m]of l)if("created"===m){var a=w.$getNodeByKey(g);if(null!==a)a:{var f=B(a),b=c;if(null===a){c=b;break a}let k=y(a),u=[];if(null===f){if(0<b.length&&b[0][0]===a.__key){c=b;break a}u=[k,...b]}else for(let p=0;p<b.length;p++){let A=b[p][0];u.push(b[p]);if(A===f.getKey()&&A!==a.getKey()){if(p+1<b.length&&b[p+1][0]===a.__key){c=b;break a}u.push(k)}}c=u}}else if("destroyed"===
m){f=g;a=c;b=[];for(let k of a)k[0]!==f&&b.push(k);c=b}else"updated"===m&&(f=w.$getNodeByKey(g),null!==f&&(a=B(f),c=z(a,f,c)));n(c)})}),D=e.registerMutationListener(w.TextNode,l=>{e.getEditorState().read(()=>{for(const [b,g]of l)if("updated"===g){var a=w.$getNodeByKey(b);if(null!==a&&(a=a.getParentOrThrow(),q.$isHeadingNode(a))){var f=c;let m=[];for(let k of f)k[0]===a.getKey()?m.push(y(a)):m.push(k);c=m;n(c)}}})});return()=>{C();D();r()}},[e]);return d(t,e)}
