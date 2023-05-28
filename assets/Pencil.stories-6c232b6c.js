import{d as H,b,a as r,w as C,o as J,e as z,f as q,g as i,l as x,v as h,n as N,u as o,i as Q,j as S,t as v,Y as X,m as V,y as Z,p as B}from"./vue.esm-bundler-d3349c08.js";import{q as ee}from"./_plugin-vue_export-helper-aacd223c.js";import{I as te}from"./index-338fced0.js";/* empty css              *//* empty css              */import{h as D,E as ae,n as W,b as L}from"./rexValidation-eb310c2d.js";import{T as ne}from"./index-9c62f409.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-725317a4.js";import"./omit-4a797a27.js";import"./Portal-0e68c685.js";const ie={class:"pencil-input__show"},le={class:"display__dot"},se={key:1,class:"display__dot"},re=["onClick"],oe={class:"pencil-input__count"},F=H({__name:"Pencil",props:{text:{default:""},limitCount:{default:100},invaildText:{default:"Invalid name"},apiErrorText:{default:"Name already exists!"},apiError:{type:Boolean,default:!1},size:{default:"default"}},emits:["pressEnter","editModeEvent","change","triggerInvalid"],setup(y,{expose:A,emit:u}){const l=y,K={"--text-max-width":"266px","--text-size":"16px","--count-size":"12px","--height":"24px","--text-justify":"space-between","--wrapper-width":"auto","--input-maxWidth":"auto"},R={"--text-max-width":"406px","--text-size":"24px","--count-size":"14px","--height":"40px","--text-justify":"flex-start","--wrapper-width":"fit-content","--input-maxWidth":"380px"},k=b(()=>l.size==="default"?R:K),d=r(l.text),E=r(l.text),t=r(""),n=r(!1),f=r(!1),p=r(!1),s=Math.floor(Math.random()*1e5),c=r(!0),_=r(!1),M=b(()=>t.value.length>l.limitCount),Y=b(()=>t.value.length),w=a=>{B(()=>{_.value=!1;const e=document.querySelector(`.${a}`),m=parseInt(k.value["--text-max-width"].slice(0,3),10);e&&e.clientWidth>=m&&(_.value=!0)})},T=()=>{n.value=!1,t.value="",f.value=!1,p.value=!1,c.value=!0,d.value=E.value,u("editModeEvent",!1)},I=()=>{t.value===E.value?T():(c.value=D(t.value,L,W),t.value.length<1||!c.value?(u("triggerInvalid",t.value),p.value=!0):M.value||(u("pressEnter",t.value),n.value=!1,f.value=!1,p.value=!1,c.value=!1,d.value=t.value,t.value="",u("editModeEvent",!1)))},$=()=>{const a=document.getElementById(`pencil-input-${s}`);a&&(a.style.width=`${t.value.length*16+48}px`)},G=()=>{n.value=!0,u("editModeEvent",!0)},P=a=>{f.value=!1,c.value=D(t.value,L,W),l.size==="default"&&$(),a.code==="Escape"&&T(),c.value||(p.value=!0,u("triggerInvalid",t.value)),t.value.length>0&&c.value&&(p.value=!1)};return C(()=>l.text,a=>{d.value=a,E.value=a,w(`pencil-text-${s}`)}),C(()=>n.value,a=>{if(a)B(()=>{const e=document.getElementById(`pencil-input-${s}`);t.value=d.value,l.size==="default"&&$(),e==null||e.addEventListener("keyup",P),e==null||e.addEventListener("blur",I),e==null||e.focus()});else{const e=document.getElementById(`pencil-input-${s}`);e==null||e.removeEventListener("keyup",P),e==null||e.removeEventListener("blur",I),w(`pencil-text-${s}`)}}),C(()=>l.apiError,a=>{a&&(f.value=a,n.value=!0,u("editModeEvent",!0))},{immediate:!0}),J(()=>{w(`pencil-text-${s}`)}),A({pressCancel:T}),(a,e)=>(z(),q("div",{class:"pencil-input",style:Z(o(k))},[i("div",ie,[x(i("div",{class:N(["pencil-input__text",`pencil-text-${o(s)}`]),"data-e2e":"pencil-input-text"},[_.value?(z(),Q(o(ne),{key:0,placement:"top",color:"#051322e6"},{title:S(()=>[i("div",null,v(d.value),1)]),default:S(()=>[i("div",le,v(d.value),1)]),_:1})):(z(),q("div",se,v(d.value),1))],2),[[h,!n.value]]),x(i("div",{class:"pencil-input__icon","data-e2e":"pencil",onClick:X(G,["prevent"])},[V(o(ae),{style:{color:"#969ca1","font-size":"15px"}})],8,re),[[h,!n.value]])]),x(i("div",{class:N(["pencil-input__wrapper",{error:o(M)||f.value||p.value}])},[V(o(te),{id:`pencil-input-${o(s)}`,value:t.value,"onUpdate:value":e[0]||(e[0]=m=>t.value=m),class:"pencil-input","data-e2e":"pencil-input",onPressEnter:I,onChange:e[1]||(e[1]=m=>a.$emit("change",m.target.value))},null,8,["id","value"]),i("div",oe,v(o(Y))+"/"+v(y.limitCount),1)],2),[[h,n.value]]),x(i("div",{class:"pencil-input__error"},v(y.apiErrorText),513),[[h,f.value&&n.value]]),x(i("div",{class:"pencil-input__error"},v(y.invaildText),513),[[h,p.value]])],4))}});const ue=ee(F,[["__scopeId","data-v-249a6143"]]);F.__docgenInfo={exportName:"default",displayName:"Pencil",description:"",tags:{},expose:[{name:"pressCancel"}],props:[{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"limitCount",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"invaildText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Invalid name'"}},{name:"apiErrorText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Name already exists!'"}},{name:"apiError",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],events:[{name:"change",type:{names:["string"]}},{name:"pressEnter",type:{names:["string"]}},{name:"editModeEvent",type:{names:["boolean"]}},{name:"triggerInvalid",type:{names:["string"]}}],sourceFiles:["/Users/marion/Documents/Code_learning/component_lib/src/components/Pencil.vue"]};const _e={title:"UI/Pencil",component:ue,tags:["autodocs"],decorators:[()=>({template:'<div style="margin: 2em"><story /></div>'})],argTypes:{text:{type:"string",description:"The server's name."},limitCount:{type:"string",description:"The maximum of the text."},size:{options:["default","small"],control:{type:"select"},description:"The text's font size."},apiError:{description:"If error attribute is true, the component would switch to red style."},apiErrorText:{type:"string",description:'The text would be display when apiError attribute is true. Default is "Oops, the name is not unique, please choose another."'},invaildText:{type:"string",description:'The text would be display when apiError attribute is true. Default is "Invalid name"'},onPressEnter:{action:"pressEnter",description:"Trigger when user press enter and sent the input's value."},onEditModeEvent:{action:"editModeEvent",description:"When edit mode is turn on or turn off, it would reply a boolean."},onChange:{action:"change",description:"Event emit when input change."},onTriggerInvalid:{action:"triggerInvalid",description:"Event emit when invalid happends. It would be check when input change and press enter."}}},g={args:{text:"The text would be display when apiError attribute is true. Default is The text would be",limitCount:100,invaildText:"Invalid name",apiErrorText:"Name already exists!",apiError:!1,size:"default"}};var O,j,U;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: 'The text would be display when apiError attribute is true. Default is The text would be',
    limitCount: 100,
    invaildText: 'Invalid name',
    apiErrorText: 'Name already exists!',
    apiError: false,
    size: 'default'
  }
}`,...(U=(j=g.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};const we=["pencil"];export{we as __namedExportsOrder,_e as default,g as pencil};
//# sourceMappingURL=Pencil.stories-6c232b6c.js.map