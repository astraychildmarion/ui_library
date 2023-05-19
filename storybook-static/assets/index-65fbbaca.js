import{P as oe,d as Se,_ as c,c as ye,B as Me,y as pe,R as Ee,D as nn,T as ze,e as B,z as tn,g as In,Y as Ue,b as Sn}from"./_plugin-vue_export-helper-153ef977.js";import{d as ae,C as Ke,b as i,B as ge,a as M,I as xn,m as p,w as te,K as Ye,M as Ae,q as Oe,G as an,T as wn,l as Pn,v as Rn,F as Ve,p as _n,o as En,s as De,u as Pe,_ as On}from"./vue.esm-bundler-d3349c08.js";import{K as Le,L as un,C as Fn,D as Nn,T as kn,c as Be,a as An}from"./index-2081d816.js";import{R as ln}from"./index-1ccd73bc.js";import{K as Dn}from"./KeyCode-e53a3216.js";import{w as Te}from"./Portal-ea39a9a5.js";import{E as Ln}from"./EllipsisOutlined-da7d6de8.js";var rn=Symbol("OverflowContextProviderKey"),je=ae({compatConfig:{MODE:3},name:"OverflowContextProvider",inheritAttrs:!1,props:{value:{type:Object}},setup:function(e,r){var u=r.slots;return Ke(rn,i(function(){return e.value})),function(){var n;return(n=u.default)===null||n===void 0?void 0:n.call(u)}}}),Tn=function(){return ge(rn,i(function(){return null}))},$n=["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","display","order","component"],be=void 0;const _e=ae({compatConfig:{MODE:3},name:"Item",props:{prefixCls:String,item:oe.any,renderItem:Function,responsive:Boolean,itemKey:{type:[String,Number]},registerSize:Function,display:Boolean,order:Number,component:oe.any,invalidate:Boolean},setup:function(e,r){var u=r.slots,n=r.expose,o=i(function(){return e.responsive&&!e.display}),v=M();n({itemNodeRef:v});function m(s){e.registerSize(e.itemKey,s)}return xn(function(){m(null)}),function(){var s,h=e.prefixCls,y=e.invalidate,f=e.item,b=e.renderItem,g=e.responsive;e.registerSize,e.itemKey,e.display;var P=e.order,C=e.component,D=C===void 0?"div":C,L=Se(e,$n),Z=(s=u.default)===null||s===void 0?void 0:s.call(u),I=b&&f!==be?b(f):Z,S;y||(S={opacity:o.value?0:1,height:o.value?0:be,overflowY:o.value?"hidden":be,order:g?P:be,pointerEvents:o.value?"none":be,position:o.value?"absolute":be});var z={};return o.value&&(z["aria-hidden"]=!0),p(ln,{disabled:!g,onResize:function(k){var K=k.offsetWidth;m(K)}},{default:function(){return p(D,c(c(c({class:ye(!y&&h),style:S},z),L),{},{ref:v}),{default:function(){return[I]}})}})}}});var zn=["component"],Vn=["className"],jn=["class"];const Bn=ae({compatConfig:{MODE:3},name:"RawItem",inheritAttrs:!1,props:{component:oe.any,title:oe.any,id:String,onMouseenter:{type:Function},onMouseleave:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onFocus:{type:Function}},setup:function(e,r){var u=r.slots,n=r.attrs,o=Tn();return function(){if(!o.value){var v,m=e.component,s=m===void 0?"div":m,h=Se(e,zn);return p(s,c(c({},h),n),{default:function(){return[(v=u.default)===null||v===void 0?void 0:v.call(u)]}})}var y=o.value,f=y.className,b=Se(y,Vn),g=n.class,P=Se(n,jn);return p(je,{value:null},{default:function(){return[p(_e,c(c(c({class:ye(f,g)},b),P),e),u)]}})}}});var Wn=["class","style"],on="responsive",sn="invalidate";function Hn(t){return"+ ".concat(t.length," ...")}var Un=function(){return{id:String,prefixCls:String,data:Array,itemKey:[String,Number,Function],itemWidth:{type:Number,default:10},renderItem:Function,renderRawItem:Function,maxCount:[Number,String],renderRest:Function,renderRawRest:Function,suffix:oe.any,component:String,itemComponent:oe.any,onVisibleChange:Function,ssr:String,onMousedown:Function}},Ne=ae({name:"Overflow",inheritAttrs:!1,props:Un(),emits:["visibleChange"],setup:function(e,r){var u=r.attrs,n=r.emit,o=r.slots,v=i(function(){return e.ssr==="full"}),m=M(null),s=i(function(){return m.value||0}),h=M(new Map),y=M(0),f=M(0),b=M(0),g=M(null),P=M(null),C=i(function(){return P.value===null&&v.value?Number.MAX_SAFE_INTEGER:P.value||0}),D=M(!1),L=i(function(){return"".concat(e.prefixCls,"-item")}),Z=i(function(){return Math.max(y.value,f.value)}),I=i(function(){return!!(e.data.length&&e.maxCount===on)}),S=i(function(){return e.maxCount===sn}),z=i(function(){return I.value||typeof e.maxCount=="number"&&e.data.length>e.maxCount}),H=i(function(){var x=e.data;return I.value?m.value===null&&v.value?x=e.data:x=e.data.slice(0,Math.min(e.data.length,s.value/e.itemWidth)):typeof e.maxCount=="number"&&(x=e.data.slice(0,e.maxCount)),x}),k=i(function(){return I.value?e.data.slice(C.value+1):e.data.slice(H.value.length)}),K=function(w,_){var R;return typeof e.itemKey=="function"?e.itemKey(w):(R=e.itemKey&&(w==null?void 0:w[e.itemKey]))!==null&&R!==void 0?R:_},E=i(function(){return e.renderItem||function(x){return x}}),V=function(w,_){P.value=w,_||(D.value=w<e.data.length-1,n("visibleChange",w))},G=function(w,_){m.value=_.clientWidth},ee=function(w,_){var R=new Map(h.value);_===null?R.delete(w):R.set(w,_),h.value=R},X=function(w,_){y.value=f.value,f.value=_},le=function(w,_){b.value=_},ue=function(w){return h.value.get(K(H.value[w],w))};return te([s,h,f,b,function(){return e.itemKey},H],function(){if(s.value&&Z.value&&H.value){var x=b.value,w=H.value.length,_=w-1;if(!w){V(0),g.value=null;return}for(var R=0;R<w;R+=1){var J=ue(R);if(J===void 0){V(R-1,!0);break}if(x+=J,_===0&&x<=s.value||R===_-1&&x+ue(_)<=s.value){V(_),g.value=null;break}else if(x+Z.value>s.value){V(R-1),g.value=x-J-b.value+f.value;break}}e.suffix&&ue(0)+b.value>s.value&&(g.value=null)}}),function(){var x=D.value&&!!k.value.length,w=e.itemComponent,_=e.renderRawItem,R=e.renderRawRest,J=e.renderRest,re=e.prefixCls,Y=re===void 0?"rc-overflow":re,se=e.suffix,l=e.component,a=l===void 0?"div":l,d=e.id,O=e.onMousedown,F=u.class,T=u.style,$=Se(u,Wn),A={};g.value!==null&&I.value&&(A={position:"absolute",left:"".concat(g.value,"px"),top:0});var W={prefixCls:L.value,responsive:I.value,component:w,invalidate:S.value},ie=_?function(q,U){var ce=K(q,U);return p(je,{key:ce,value:c(c({},W),{},{order:U,item:q,itemKey:ce,registerSize:ee,display:U<=C.value})},{default:function(){return[_(q,U)]}})}:function(q,U){var ce=K(q,U);return p(_e,c(c({},W),{},{order:U,key:ce,item:q,renderItem:E.value,itemKey:ce,registerSize:ee,display:U<=C.value}),null)},ne=function(){return null},ve={order:x?C.value:Number.MAX_SAFE_INTEGER,className:"".concat(L.value," ").concat(L.value,"-rest"),registerSize:X,display:x};if(R)R&&(ne=function(){return p(je,{value:c(c({},W),ve)},{default:function(){return[R(k.value)]}})});else{var Ce=J||Hn;ne=function(){return p(_e,c(c({},W),ve),{default:function(){return typeof Ce=="function"?Ce(k.value):Ce}})}}var ke=function(){var U;return p(a,c({id:d,class:ye(!S.value&&Y,F),style:T,onMousedown:O},$),{default:function(){return[H.value.map(ie),z.value?ne():null,se&&p(_e,c(c({},W),{},{order:C.value,class:"".concat(L.value,"-suffix"),registerSize:le,display:!0,style:A}),{default:function(){return se}}),(U=o.default)===null||U===void 0?void 0:U.call(o)]}})};return p(ln,{disabled:!I.value,onResize:G},{default:ke})}}});Ne.Item=Bn;Ne.RESPONSIVE=on;Ne.INVALIDATE=sn;const xe=Ne;function Yn(t,e,r,u){var n=r?r.call(u,t,e):void 0;if(n!==void 0)return!!n;if(t===e)return!0;if(Me(t)!=="object"||!t||Me(e)!=="object"||!e)return!1;var o=Object.keys(t),v=Object.keys(e);if(o.length!==v.length)return!1;for(var m=Object.prototype.hasOwnProperty.bind(e),s=0;s<o.length;s++){var h=o[s];if(!m(h))return!1;var y=t[h],f=e[h];if(n=r?r.call(u,y,f,h):void 0,n===!1||n===void 0&&y!==f)return!1}return!0}function Ie(t,e,r,u){return Yn(Ye(t),Ye(e),r,u)}var vn=Symbol("menuContextKey"),cn=function(e){Ke(vn,e)},he=function(){return ge(vn)},fn=Symbol("ForceRenderKey"),Gn=function(e){Ke(fn,e)},dn=function(){return ge(fn,!1)},mn=Symbol("menuFirstLevelContextKey"),yn=function(e){Ke(mn,e)},qn=function(){return ge(mn,!0)},Fe=ae({compatConfig:{MODE:3},name:"MenuContextProvider",inheritAttrs:!1,props:{mode:{type:String,default:void 0},overflowDisabled:{type:Boolean,default:void 0},isRootMenu:{type:Boolean,default:void 0}},setup:function(e,r){var u=r.slots,n=he(),o=c({},n);return e.mode!==void 0&&(o.mode=Ae(e,"mode")),e.isRootMenu!==void 0&&(o.isRootMenu=Ae(e,"isRootMenu")),e.overflowDisabled!==void 0&&(o.overflowDisabled=Ae(e,"overflowDisabled")),cn(o),function(){var v;return(v=u.default)===null||v===void 0?void 0:v.call(u)}}});const Xn=cn;function Zn(t,e,r,u){for(var n=t.length,o=r+(u?1:-1);u?o--:++o<n;)if(e(t[o],o,t))return o;return-1}function Jn(t){return t!==t}function Qn(t,e,r){for(var u=r-1,n=t.length;++u<n;)if(t[u]===e)return u;return-1}function et(t,e,r){return e===e?Qn(t,e,r):Zn(t,Jn,r)}function nt(t,e){var r=t==null?0:t.length;return!!r&&et(t,e,0)>-1}function tt(t,e,r){for(var u=-1,n=t==null?0:t.length;++u<n;)if(r(e,t[u]))return!0;return!1}function at(){}var ut=1/0,lt=Le&&1/un(new Le([,-0]))[1]==ut?function(t){return new Le(t)}:at;const rt=lt;var it=200;function ot(t,e,r){var u=-1,n=nt,o=t.length,v=!0,m=[],s=m;if(r)v=!1,n=tt;else if(o>=it){var h=e?null:rt(t);if(h)return un(h);v=!1,n=Nn,s=new Fn}else s=e?[]:m;e:for(;++u<o;){var y=t[u],f=e?e(y):y;if(y=r||y!==0?y:0,v&&f===f){for(var b=s.length;b--;)if(s[b]===f)continue e;e&&s.push(f),m.push(y)}else n(s,f,r)||(s!==m&&s.push(f),m.push(y))}return m}function $e(t){return t&&t.length?ot(t):[]}var st=Symbol("siderCollapsed"),Ot=Symbol("siderHookProvider"),Re="$$__vc-menu-more__key",pn=Symbol("KeyPathContext"),We=function(){return ge(pn,{parentEventKeys:i(function(){return[]}),parentKeys:i(function(){return[]}),parentInfo:{}})},vt=function(e,r,u){var n=We(),o=n.parentEventKeys,v=n.parentKeys,m=i(function(){return[].concat(pe(o.value),[e])}),s=i(function(){return[].concat(pe(v.value),[r])});return Ke(pn,{parentEventKeys:m,parentKeys:s,parentInfo:u}),s},gn=Symbol("measure"),Ge=ae({compatConfig:{MODE:3},setup:function(e,r){var u=r.slots;return Ke(gn,!0),function(){var n;return(n=u.default)===null||n===void 0?void 0:n.call(u)}}}),hn=function(){return ge(gn,!1)};const ct=vt;function Cn(t){var e=he(),r=e.mode,u=e.rtl,n=e.inlineIndent;return i(function(){return r.value!=="inline"?null:u.value?{paddingRight:"".concat(t.value*n.value,"px")}:{paddingLeft:"".concat(t.value*n.value,"px")}})}var ft=0,dt=function(){return{id:String,role:String,disabled:Boolean,danger:Boolean,title:{type:[String,Boolean],default:void 0},icon:oe.any,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function}};const mt=ae({compatConfig:{MODE:3},name:"AMenuItem",inheritAttrs:!1,props:dt(),slots:["icon","title"],setup:function(e,r){var u=r.slots,n=r.emit,o=r.attrs,v=an(),m=hn(),s=Me(v.vnode.key)==="symbol"?String(v.vnode.key):v.vnode.key;Ee(Me(v.vnode.key)!=="symbol","MenuItem",'MenuItem `:key="'.concat(String(s),'"` not support Symbol type'));var h="menu_item_".concat(++ft,"_$$_").concat(s),y=We(),f=y.parentEventKeys,b=y.parentKeys,g=he(),P=g.prefixCls,C=g.activeKeys,D=g.disabled,L=g.changeActiveKeys,Z=g.rtl,I=g.inlineCollapsed,S=g.siderCollapsed,z=g.onItemClick,H=g.selectedKeys,k=g.registerMenuInfo,K=g.unRegisterMenuInfo,E=qn(),V=M(!1),G=i(function(){return[].concat(pe(b.value),[s])}),ee={eventKey:h,key:s,parentEventKeys:f,parentKeys:b,isLeaf:!0};k(h,ee),Oe(function(){K(h)}),te(C,function(){V.value=!!C.value.find(function(l){return l===s})},{immediate:!0});var X=i(function(){return D.value||e.disabled}),le=i(function(){return H.value.includes(s)}),ue=i(function(){var l,a="".concat(P.value,"-item");return l={},B(l,"".concat(a),!0),B(l,"".concat(a,"-danger"),e.danger),B(l,"".concat(a,"-active"),V.value),B(l,"".concat(a,"-selected"),le.value),B(l,"".concat(a,"-disabled"),X.value),l}),x=function(a){return{key:s,eventKey:h,keyPath:G.value,eventKeyPath:[].concat(pe(f.value),[h]),domEvent:a,item:c(c({},e),o)}},w=function(a){if(!X.value){var d=x(a);n("click",a),z(d)}},_=function(a){X.value||(L(G.value),n("mouseenter",a))},R=function(a){X.value||(L([]),n("mouseleave",a))},J=function(a){if(n("keydown",a),a.which===Dn.ENTER){var d=x(a);n("click",a),z(d)}},re=function(a){L(G.value),n("focus",a)},Y=function(a,d){var O=p("span",{class:"".concat(P.value,"-title-content")},[d]);return(!a||tn(d)&&d.type==="span")&&d&&I.value&&E&&typeof d=="string"?p("div",{class:"".concat(P.value,"-inline-collapsed-noicon")},[d.charAt(0)]):O},se=Cn(i(function(){return G.value.length}));return function(){var l,a,d,O;if(m)return null;var F=(l=e.title)!==null&&l!==void 0?l:(a=u.title)===null||a===void 0?void 0:a.call(u),T=nn((d=u.default)===null||d===void 0?void 0:d.call(u)),$=T.length,A=F;typeof F>"u"?A=E&&$?T:"":F===!1&&(A="");var W={title:A};!S.value&&!I.value&&(W.title=null,W.visible=!1);var ie={};e.role==="option"&&(ie["aria-selected"]=le.value);var ne=ze(u,e,"icon");return p(kn,c(c({},W),{},{placement:Z.value?"left":"right",overlayClassName:"".concat(P.value,"-inline-collapsed-tooltip")}),{default:function(){return[p(xe.Item,c(c(c({component:"li"},o),{},{id:e.id,style:c(c({},o.style||{}),se.value),class:[ue.value,(O={},B(O,"".concat(o.class),!!o.class),B(O,"".concat(P.value,"-item-only-child"),(ne?$+1:$)===1),O)],role:e.role||"menuitem",tabindex:e.disabled?null:-1,"data-menu-id":s,"aria-disabled":e.disabled},ie),{},{onMouseenter:_,onMouseleave:R,onClick:w,onKeydown:J,onFocus:re,title:typeof F=="string"?F:void 0}),{default:function(){return[Be(ne,{class:"".concat(P.value,"-item-icon")},!1),Y(ne,T)]}})]}})}}});var de={adjustX:1,adjustY:1},yt={topLeft:{points:["bl","tl"],overflow:de,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:de,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:de,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:de,offset:[4,0]}},pt={topLeft:{points:["bl","tl"],overflow:de,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:de,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:de,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:de,offset:[4,0]}},gt={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};const qe=ae({compatConfig:{MODE:3},name:"PopupTrigger",inheritAttrs:!1,props:{prefixCls:String,mode:String,visible:Boolean,popupClassName:String,popupOffset:Array,disabled:Boolean,onVisibleChange:Function},slots:["popup"],emits:["visibleChange"],setup:function(e,r){var u=r.slots,n=r.emit,o=M(!1),v=he(),m=v.getPopupContainer,s=v.rtl,h=v.subMenuOpenDelay,y=v.subMenuCloseDelay,f=v.builtinPlacements,b=v.triggerSubMenuAction,g=v.isRootMenu,P=v.forceSubMenuRender,C=v.motion,D=v.defaultMotions,L=dn(),Z=i(function(){return s.value?c(c({},pt),f.value):c(c({},yt),f.value)}),I=i(function(){return gt[e.mode]}),S=M();te(function(){return e.visible},function(k){Te.cancel(S.value),S.value=Te(function(){o.value=k})},{immediate:!0}),Oe(function(){Te.cancel(S.value)});var z=function(K){n("visibleChange",K)},H=i(function(){var k,K,E=C.value||((k=D.value)===null||k===void 0?void 0:k[e.mode])||((K=D.value)===null||K===void 0?void 0:K.other),V=typeof E=="function"?E():E;return V?In(V.name,{css:!0}):void 0});return function(){var k=e.prefixCls,K=e.popupClassName,E=e.mode,V=e.popupOffset,G=e.disabled;return p(An,{prefixCls:k,popupClassName:ye("".concat(k,"-popup"),B({},"".concat(k,"-rtl"),s.value),K),stretch:E==="horizontal"?"minWidth":null,getPopupContainer:g.value?m.value:function(ee){return ee.parentNode},builtinPlacements:Z.value,popupPlacement:I.value,popupVisible:o.value,popupAlign:V&&{offset:V},action:G?[]:[b.value],mouseEnterDelay:h.value,mouseLeaveDelay:y.value,onPopupVisibleChange:z,forceRender:L||P.value,popupAnimation:H.value},{popup:u.popup,default:u.default})}}});var bn=function(e,r){var u,n=r.slots,o=r.attrs,v=he(),m=v.prefixCls,s=v.mode;return p("ul",c(c({},o),{},{class:ye(m.value,"".concat(m.value,"-sub"),"".concat(m.value,"-").concat(s.value==="inline"?"inline":"vertical")),"data-menu-list":!0}),[(u=n.default)===null||u===void 0?void 0:u.call(n)])};bn.displayName="SubMenuList";const Mn=bn,ht=ae({compatConfig:{MODE:3},name:"InlineSubMenuList",inheritAttrs:!1,props:{id:String,open:Boolean,keyPath:Array},setup:function(e,r){var u=r.slots,n=i(function(){return"inline"}),o=he(),v=o.motion,m=o.mode,s=o.defaultMotions,h=i(function(){return m.value===n.value}),y=M(!h.value),f=i(function(){return h.value?e.open:!1});te(m,function(){h.value&&(y.value=!1)},{flush:"post"});var b=i(function(){var g,P,C=v.value||((g=s.value)===null||g===void 0?void 0:g[n.value])||((P=s.value)===null||P===void 0?void 0:P.other),D=typeof C=="function"?C():C;return c(c({},D),{},{appear:e.keyPath.length<=1})});return function(){var g;return y.value?null:p(Fe,{mode:n.value},{default:function(){return[p(wn,b.value,{default:function(){return[Pn(p(Mn,{id:e.id},{default:function(){return[(g=u.default)===null||g===void 0?void 0:g.call(u)]}}),[[Rn,f.value]])]}})]}})}}});var Xe=0,Ct=function(){return{icon:oe.any,title:oe.any,disabled:Boolean,level:Number,popupClassName:String,popupOffset:Array,internalPopupClose:Boolean,eventKey:String,expandIcon:Function,onMouseenter:Function,onMouseleave:Function,onTitleClick:Function}};const Ze=ae({compatConfig:{MODE:3},name:"ASubMenu",inheritAttrs:!1,props:Ct(),slots:["icon","title","expandIcon"],setup:function(e,r){var u,n,o=r.slots,v=r.attrs,m=r.emit;yn(!1);var s=hn(),h=an(),y=Me(h.vnode.key)==="symbol"?String(h.vnode.key):h.vnode.key;Ee(Me(h.vnode.key)!=="symbol","SubMenu",'SubMenu `:key="'.concat(String(y),'"` not support Symbol type'));var f=Ue(y)?y:"sub_menu_".concat(++Xe,"_$$_not_set_key"),b=(u=e.eventKey)!==null&&u!==void 0?u:Ue(y)?"sub_menu_".concat(++Xe,"_$$_").concat(y):f,g=We(),P=g.parentEventKeys,C=g.parentInfo,D=g.parentKeys,L=i(function(){return[].concat(pe(D.value),[f])}),Z=M([]),I={eventKey:b,key:f,parentEventKeys:P,childrenEventKeys:Z,parentKeys:D};(n=C.childrenEventKeys)===null||n===void 0||n.value.push(b),Oe(function(){if(C.childrenEventKeys){var j;C.childrenEventKeys.value=(j=C.childrenEventKeys)===null||j===void 0?void 0:j.value.filter(function(N){return N!=b})}}),ct(b,f,I);var S=he(),z=S.prefixCls,H=S.activeKeys,k=S.disabled,K=S.changeActiveKeys,E=S.mode,V=S.inlineCollapsed,G=S.antdMenuTheme,ee=S.openKeys,X=S.overflowDisabled,le=S.onOpenChange,ue=S.registerMenuInfo,x=S.unRegisterMenuInfo,w=S.selectedSubMenuKeys,_=S.expandIcon,R=y!=null,J=!s&&(dn()||!R);Gn(J),(s&&R||!s&&!R||J)&&(ue(b,I),Oe(function(){x(b)}));var re=i(function(){return"".concat(z.value,"-submenu")}),Y=i(function(){return k.value||e.disabled}),se=M(),l=M(),a=i(function(){return ee.value.includes(f)}),d=i(function(){return!X.value&&a.value}),O=i(function(){return w.value.includes(f)}),F=M(!1);te(H,function(){F.value=!!H.value.find(function(j){return j===f})},{immediate:!0});var T=function(N){Y.value||(m("titleClick",N,f),E.value==="inline"&&le(f,!a.value))},$=function(N){Y.value||(K(L.value),m("mouseenter",N))},A=function(N){Y.value||(K([]),m("mouseleave",N))},W=Cn(i(function(){return L.value.length})),ie=function(N){E.value!=="inline"&&le(f,N)},ne=function(){K(L.value)},ve=b&&"".concat(b,"-popup"),Ce=i(function(){return ye(z.value,"".concat(z.value,"-").concat(G.value),e.popupClassName)}),ke=function(N,Q){if(!Q)return V.value&&!D.value.length&&N&&typeof N=="string"?p("div",{class:"".concat(z.value,"-inline-collapsed-noicon")},[N.charAt(0)]):p("span",{class:"".concat(z.value,"-title-content")},[N]);var fe=tn(N)&&N.type==="span";return p(Ve,null,[Be(Q,{class:"".concat(z.value,"-item-icon")},!1),fe?N:p("span",{class:"".concat(z.value,"-title-content")},[N])])},q=i(function(){return E.value!=="inline"&&L.value.length>1?"vertical":E.value}),U=i(function(){return E.value==="horizontal"?"vertical":E.value}),ce=i(function(){return q.value==="horizontal"?"vertical":q.value}),we=function(){var N=re.value,Q=ze(o,e,"icon"),fe=e.expandIcon||o.expandIcon||_.value,me=ke(ze(o,e,"title"),Q);return p("div",{style:W.value,class:"".concat(N,"-title"),tabindex:Y.value?null:-1,ref:se,title:typeof me=="string"?me:null,"data-menu-id":f,"aria-expanded":d.value,"aria-haspopup":!0,"aria-controls":ve,"aria-disabled":Y.value,onClick:T,onFocus:ne},[me,E.value!=="horizontal"&&fe?fe(c(c({},e),{},{isOpen:d.value})):p("i",{class:"".concat(N,"-arrow")},null)])};return function(){var j;if(s){var N;return R?(N=o.default)===null||N===void 0?void 0:N.call(o):null}var Q=re.value,fe=function(){return null};return!X.value&&E.value!=="inline"?fe=function(){return p(qe,{mode:q.value,prefixCls:Q,visible:!e.internalPopupClose&&d.value,popupClassName:Ce.value,popupOffset:e.popupOffset,disabled:Y.value,onVisibleChange:ie},{default:function(){return[we()]},popup:function(){return p(Fe,{mode:ce.value,isRootMenu:!1},{default:function(){return[p(Mn,{id:ve,ref:l},{default:o.default})]}})}})}:fe=function(){return p(qe,null,{default:we})},p(Fe,{mode:U.value},{default:function(){return[p(xe.Item,c(c({component:"li"},v),{},{role:"none",class:ye(Q,"".concat(Q,"-").concat(E.value),v.class,(j={},B(j,"".concat(Q,"-open"),d.value),B(j,"".concat(Q,"-active"),F.value),B(j,"".concat(Q,"-selected"),O.value),B(j,"".concat(Q,"-disabled"),Y.value),j)),onMouseenter:$,onMouseleave:A,"data-submenu-id":f}),{default:function(){return p(Ve,null,[fe(),!X.value&&p(ht,{id:ve,open:d.value,keyPath:L.value},{default:o.default})])}})]}})}}});function Kn(t,e){if(t.classList)return t.classList.contains(e);var r=t.className;return" ".concat(r," ").indexOf(" ".concat(e," "))>-1}function Je(t,e){t.classList?t.classList.add(e):Kn(t,e)||(t.className="".concat(t.className," ").concat(e))}function Qe(t,e){if(t.classList)t.classList.remove(e);else if(Kn(t,e)){var r=t.className;t.className=" ".concat(r," ").replace(" ".concat(e," ")," ")}}var bt=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant-motion-collapse",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{name:e,appear:r,css:!0,onBeforeEnter:function(n){n.style.height="0px",n.style.opacity="0",Je(n,e)},onEnter:function(n){_n(function(){n.style.height="".concat(n.scrollHeight,"px"),n.style.opacity="1"})},onAfterEnter:function(n){n&&(Qe(n,e),n.style.height=null,n.style.opacity=null)},onBeforeLeave:function(n){Je(n,e),n.style.height="".concat(n.offsetHeight,"px"),n.style.opacity=null},onLeave:function(n){setTimeout(function(){n.style.height="0px",n.style.opacity="0"})},onAfterLeave:function(n){n&&(Qe(n,e),n.style&&(n.style.height=null,n.style.opacity=null))}}};const Mt=bt;var Kt=function(){return{id:String,prefixCls:String,disabled:Boolean,inlineCollapsed:Boolean,disabledOverflow:Boolean,forceSubMenuRender:Boolean,openKeys:Array,selectedKeys:Array,activeKey:String,selectable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},motion:Object,theme:{type:String,default:"light"},mode:{type:String,default:"vertical"},inlineIndent:{type:Number,default:24},subMenuOpenDelay:{type:Number,default:.1},subMenuCloseDelay:{type:Number,default:.1},builtinPlacements:{type:Object},triggerSubMenuAction:{type:String,default:"hover"},getPopupContainer:Function,expandIcon:Function,onOpenChange:Function,onSelect:Function,onDeselect:Function,onClick:[Function,Array],onFocus:Function,onBlur:Function,onMousedown:Function,"onUpdate:openKeys":Function,"onUpdate:selectedKeys":Function,"onUpdate:activeKey":Function}},en=[];const Ft=ae({compatConfig:{MODE:3},name:"AMenu",inheritAttrs:!1,props:Kt(),slots:["expandIcon","overflowedIndicator"],setup:function(e,r){var u=r.slots,n=r.emit,o=r.attrs,v=Sn("menu",e),m=v.prefixCls,s=v.direction,h=v.getPrefixCls,y=M({}),f=ge(st,M(void 0)),b=i(function(){return f.value!==void 0?f.value:e.inlineCollapsed}),g=M(!1);En(function(){g.value=!0}),De(function(){Ee(!(e.inlineCollapsed===!0&&e.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),Ee(!(f.value!==void 0&&e.inlineCollapsed===!0),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")});var P=M([]),C=M([]),D=M({});te(y,function(){for(var l={},a=0,d=Object.values(y.value);a<d.length;a++){var O=d[a];l[O.key]=O}D.value=l},{flush:"post"}),De(function(){if(e.activeKey!==void 0){var l=[],a=e.activeKey?D.value[e.activeKey]:void 0;a&&e.activeKey!==void 0?l=$e([].concat(Pe(a.parentKeys),e.activeKey)):l=[],Ie(P.value,l)||(P.value=l)}}),te(function(){return e.selectedKeys},function(l){l&&(C.value=l.slice())},{immediate:!0,deep:!0});var L=M([]);te([D,C],function(){var l=[];C.value.forEach(function(a){var d=D.value[a];d&&(l=l.concat(Pe(d.parentKeys)))}),l=$e(l),Ie(L.value,l)||(L.value=l)},{immediate:!0});var Z=function(a){if(e.selectable){var d=a.key,O=C.value.includes(d),F;e.multiple?O?F=C.value.filter(function($){return $!==d}):F=[].concat(pe(C.value),[d]):F=[d];var T=c(c({},a),{},{selectedKeys:F});Ie(F,C.value)||(e.selectedKeys===void 0&&(C.value=F),n("update:selectedKeys",F),O&&e.multiple?n("deselect",T):n("select",T)),K.value!=="inline"&&!e.multiple&&I.value.length&&G(en)}},I=M([]);te(function(){return e.openKeys},function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:I.value;Ie(I.value,l)||(I.value=l.slice())},{immediate:!0,deep:!0});var S,z=function(a){clearTimeout(S),S=setTimeout(function(){e.activeKey===void 0&&(P.value=a),n("update:activeKey",a[a.length-1])})},H=i(function(){return!!e.disabled}),k=i(function(){return s.value==="rtl"}),K=M("vertical"),E=M(!1);De(function(){(e.mode==="inline"||e.mode==="vertical")&&b.value?(K.value="vertical",E.value=b.value):(K.value=e.mode,E.value=!1)});var V=i(function(){return K.value==="inline"}),G=function(a){I.value=a,n("update:openKeys",a),n("openChange",a)},ee=M(I.value),X=M(!1);te(I,function(){V.value&&(ee.value=I.value)},{immediate:!0}),te(V,function(){if(!X.value){X.value=!0;return}V.value?I.value=ee.value:G(en)},{immediate:!0});var le=i(function(){var l;return l={},B(l,"".concat(m.value),!0),B(l,"".concat(m.value,"-root"),!0),B(l,"".concat(m.value,"-").concat(K.value),!0),B(l,"".concat(m.value,"-inline-collapsed"),E.value),B(l,"".concat(m.value,"-rtl"),k.value),B(l,"".concat(m.value,"-").concat(e.theme),!0),l}),ue=i(function(){return h()}),x=i(function(){return{horizontal:{name:"".concat(ue.value,"-slide-up")},inline:Mt,other:{name:"".concat(ue.value,"-zoom-big")}}});yn(!0);var w=function l(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=[],O=y.value;return a.forEach(function(F){var T=O[F],$=T.key,A=T.childrenEventKeys;d.push.apply(d,[$].concat(pe(l(Pe(A)))))}),d},_=function(a){n("click",a),Z(a)},R=function(a,d){var O,F=((O=D.value[a])===null||O===void 0?void 0:O.childrenEventKeys)||[],T=I.value.filter(function(A){return A!==a});if(d)T.push(a);else if(K.value!=="inline"){var $=w(Pe(F));T=$e(T.filter(function(A){return!$.includes(A)}))}Ie(I,T)||G(T)},J=function(a,d){y.value=c(c({},y.value),{},B({},a,d))},re=function(a){delete y.value[a],y.value=c({},y.value)},Y=M(0),se=i(function(){return e.expandIcon||u.expandIcon?function(l){var a=e.expandIcon||u.expandIcon;return a=typeof a=="function"?a(l):a,Be(a,{class:"".concat(m.value,"-submenu-expand-icon")},!1)}:null});return Xn({store:y,prefixCls:m,activeKeys:P,openKeys:I,selectedKeys:C,changeActiveKeys:z,disabled:H,rtl:k,mode:K,inlineIndent:i(function(){return e.inlineIndent}),subMenuCloseDelay:i(function(){return e.subMenuCloseDelay}),subMenuOpenDelay:i(function(){return e.subMenuOpenDelay}),builtinPlacements:i(function(){return e.builtinPlacements}),triggerSubMenuAction:i(function(){return e.triggerSubMenuAction}),getPopupContainer:i(function(){return e.getPopupContainer}),inlineCollapsed:E,antdMenuTheme:i(function(){return e.theme}),siderCollapsed:f,defaultMotions:i(function(){return g.value?x.value:null}),motion:i(function(){return g.value?e.motion:null}),overflowDisabled:M(void 0),onOpenChange:R,onItemClick:_,registerMenuInfo:J,unRegisterMenuInfo:re,selectedSubMenuKeys:L,isRootMenu:M(!0),expandIcon:se,forceSubMenuRender:i(function(){return e.forceSubMenuRender})}),function(){var l,a,d=nn((l=u.default)===null||l===void 0?void 0:l.call(u)),O=Y.value>=d.length-1||K.value!=="horizontal"||e.disabledOverflow,F=K.value!=="horizontal"||e.disabledOverflow?d:d.map(function($,A){return p(Fe,{key:$.key,overflowDisabled:A>Y.value},{default:function(){return $}})}),T=((a=u.overflowedIndicator)===null||a===void 0?void 0:a.call(u))||p(Ln,null,null);return p(xe,c(c({},o),{},{onMousedown:e.onMousedown,prefixCls:"".concat(m.value,"-overflow"),component:"ul",itemComponent:mt,class:[le.value,o.class],role:"menu",id:e.id,data:F,renderRawItem:function(A){return A},renderRawRest:function(A){var W=A.length,ie=W?d.slice(-W):null;return p(Ve,null,[p(Ze,{eventKey:Re,key:Re,title:T,disabled:O,internalPopupClose:W===0},{default:function(){return ie}}),p(Ge,null,{default:function(){return[p(Ze,{eventKey:Re,key:Re,title:T,disabled:O,internalPopupClose:W===0},{default:function(){return ie}})]}})])},maxCount:K.value!=="horizontal"||e.disabledOverflow?xe.INVALIDATE:xe.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(A){Y.value=A}}),{default:function(){return[p(On,{to:"body"},{default:function(){return[p("div",{style:{display:"none"},"aria-hidden":!0},[p(Ge,null,{default:function(){return[F]}})])]}})]}})}}});export{Ft as M,xe as O,Ot as S,tt as a,Zn as b,Mt as c,nt as d,st as e,hn as f,mt as g,Ze as h,Ie as s,he as u};
//# sourceMappingURL=index-65fbbaca.js.map
