import{d as ce,a as o,b as re,o as de,w as F,e as s,f as u,g as l,n as P,i as K,j as w,u as c,t as r,k as V,l as U,v as j,m as E,F as me,p as W}from"./vue.esm-bundler-d3349c08.js";import"./_plugin-vue_export-helper-aacd223c.js";import{I as ve}from"./index-338fced0.js";/* empty css              *//* empty css              */import{C as ge}from"./ConfirmModal-b1c76f64.js";import{h as I,c as pe,a as he,E as Te,n as M,r as N,e as fe}from"./rexValidation-eb310c2d.js";import{T as Z}from"./index-9c62f409.js";import{D as ye}from"./DeleteOutlined-717087a1.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-725317a4.js";import"./omit-4a797a27.js";import"./Portal-0e68c685.js";import"./KeyCode-e53a3216.js";import"./useFlexGapSupport-77b4cda0.js";import"./PortalWrapper-7793fc73.js";import"./index-85112d81.js";import"./SearchOutlined-ea7a7ace.js";import"./index-7f04833c.js";const _e={key:0},ke={class:"multiTag-input__show"},Ce={key:1},xe={key:1},we={key:1},Ee={"data-e2e":"multiTag-pencil"},Me={class:"multiTag-input__wrapper"},Q=ce({__name:"ChosenTag",props:{text:{default:"tag"},limitCount:{default:50},readonly:{type:Boolean,default:!1}},emits:["renameTag","deleteTag","chooseTag","cancelTag","editModeEvent"],setup(O,{emit:h}){const v=O,i=Math.floor(Math.random()*1e5),a=o(v.text),t=o(""),T=o(!1),d=o(!1),f=o(!1),g=o(!1),D="Delete tag",X="Rename tag",Y="Are you sure you want to delete the tag?",ee="Are you sure you want to rename the tag?",y=o(!1),k=o(""),$=o(""),te=re(()=>t.value.length),p=o(!0),C=o(!1),B=()=>{W(()=>{var n;const e=(n=document.querySelector(`.multiTag-input-${i} .multiTag-input__text`))==null?void 0:n.clientWidth;e&&e<136?C.value=!1:C.value=!0})},S=()=>{const e=document.getElementById(`multiTag-${i}`);e&&(e.style.width=`${t.value.length*6+24}px`)},A=()=>{f.value=!f.value,f.value?h("chooseTag",a.value):h("cancelTag",a.value)},ae=()=>{d.value=!0,T.value=!1,t.value=a.value,S(),t.value.length>v.limitCount&&(g.value=!0),W(()=>{var e;(e=document.getElementById(`multiTag-${i}`))==null||e.focus()})},ne=()=>{k.value=D,$.value=Y,y.value=!0},L=()=>{T.value=!T.value},_=()=>{d.value=!1,t.value=a.value,g.value=!1,p.value=!0,B()},q=()=>{p.value=I(t.value,N,M),t.value.length<=v.limitCount&&a.value!==t.value&&p.value&&t.value.length>0?(k.value=X,$.value=ee,y.value=!0):a.value===t.value&&_()},le=()=>{_(),y.value=!1},oe=()=>{if(k.value===D)h("deleteTag",a.value);else{const e={old:a.value,new:t.value};h("renameTag",e),B()}d.value=!1,g.value=!1,y.value=!1},z=e=>{p.value=I(t.value,N,M),S(),e.code==="Escape"?_():t.value.length<=v.limitCount?g.value=!1:g.value=!0},se=e=>{pe(M,fe,e)},ie=e=>{he(N,e)},R=e=>{const x=e.composedPath().filter(m=>typeof m.className=="string"),ue=x.filter(m=>m.className.indexOf(`multiTag-input-${i}`)>-1||m.className.indexOf("ant-modal")>-1);x.filter(m=>m.className.indexOf(`multiTag-input-${i}`)===-1&&m.className.indexOf("multiTag-input__outer")>-1).length>0?_():ue.length<1&&(p.value=I(t.value,N,M),t.value.length>v.limitCount||t.value.length===0||!p.value?_():q())};return de(()=>{B()}),F(()=>v.text,e=>{a.value=e}),F(()=>d.value,e=>{h("editModeEvent",{element:`multiTag-input-${i}`,edit:e});const n=document.getElementById(`multiTag-${i}`);e?(n==null||n.addEventListener("keyup",z),document==null||document.addEventListener("click",R)):(n==null||n.removeEventListener("keyup",z),document==null||document.removeEventListener("click",R))}),(e,n)=>(s(),u(me,null,[l("div",{class:P(["multiTag-input__outer",`multiTag-input-${c(i)}`])},[l("div",{class:P(["multiTag-input",{edit:T.value||d.value,chosen:f.value}])},[O.readonly?(s(),u("div",_e,[l("div",ke,[a.value.length>0?(s(),u("div",{key:0,class:"multiTag-input__text multiTag-input__text-readonly","data-e2e":"multiTag-input-text",onClick:A},[C.value?(s(),K(c(Z),{key:0,placement:"top",color:"#051322e6"},{title:w(()=>[l("div",null,r(a.value),1)]),default:w(()=>[l("div",null,r(a.value),1)]),_:1})):(s(),u("div",Ce,r(a.value),1))])):V("",!0)])])):(s(),u("div",xe,[d.value?V("",!0):(s(),u("div",{key:0,class:"multiTag-input__show",onMouseenter:L,onMouseleave:L},[a.value.length>0?(s(),u("div",{key:0,class:"multiTag-input__text","data-e2e":"multiTag-input-text",onClick:A},[C.value?(s(),K(c(Z),{key:0,placement:"top",color:"#051322e6"},{title:w(()=>[l("div",null,r(a.value),1)]),default:w(()=>[l("div",null,r(a.value),1)]),_:1})):(s(),u("div",we,r(a.value),1))])):V("",!0),l("div",{class:"multiTag-input__icon",onClick:ae},[U(l("div",Ee,[E(c(Te),{style:{color:"#5c666f","font-size":"14px"}})],512),[[j,T.value&&!f.value]])])],32)),U(l("div",Me,[E(c(ve),{id:`multiTag-${c(i)}`,value:t.value,"onUpdate:value":n[0]||(n[0]=x=>t.value=x),"data-e2e":"multiTag-input",onPressEnter:q,onKeydown:se,onPaste:ie},null,8,["id","value"]),l("div",{class:"multiTag-input__icon","data-e2e":"multiTag-trash",onClick:ne},[E(c(ye),{style:{color:"#5c666f","font-size":"13px","margin-right":"8px"}})]),l("div",{class:P(["multiTag-input__count",{error:g.value}])},r(c(te))+"/"+r(O.limitCount),3)],512),[[j,d.value]])]))],2)],2),E(ge,{"is-show":y.value,title:k.value,content:$.value,"confirm-type":"warning",onClickConfirm:oe,onClickCancel:le},null,8,["is-show","title","content"])],64))}});Q.__docgenInfo={exportName:"default",displayName:"ChosenTag",description:"",tags:{},props:[{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'tag'"}},{name:"limitCount",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"50"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"renameTag",type:{names:["{ old: string; new: string }"]}},{name:"deleteTag",type:{names:["string"]}},{name:"chooseTag",type:{names:["string"]}},{name:"cancelTag",type:{names:["string"]}},{name:"editModeEvent",type:{names:["tagEditModeType"]}}],sourceFiles:["/Users/marion/Documents/Code_learning/component_lib/src/components/ChosenTag.vue"]};const Ze={title:"UI/Chosen Tag",tags:["autodocs"],decorators:[()=>({template:'<div style="margin: 2em"><story /></div>'})],component:Q,argTypes:{text:{type:"string",description:"The server's name."},limitCount:{control:{type:"number"},description:"The maximium of text."},readonly:{control:{type:"boolean"},description:"To control write ability of component."},onRenameTag:{action:"renameTag",description:"Trigger when user press enter and sent the input's value."},onDeleteTag:{action:"deleteTag",description:"Trigger when user press trash bin and sent the input's value."},onChooseTag:{action:"chooseTag",description:"Trigger when user choose a tag."},onCancelTag:{action:"cancelTag",description:"Trigger when user cancel to choose a tag."},onEditModeEvent:{action:"editModeEvent",description:"Trigger when user switch editmode"}}},b={args:{text:"Story book",limitCount:50,readonly:!1}};var H,G,J;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    text: 'Story book',
    limitCount: 50,
    readonly: false
  }
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const He=["ChosenTagArgs"];export{b as ChosenTagArgs,He as __namedExportsOrder,Ze as default};
//# sourceMappingURL=ChosenTag.stories-5dbc37e7.js.map