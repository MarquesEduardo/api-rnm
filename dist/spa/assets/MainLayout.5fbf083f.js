import{f as Q,h as w,c as u,j as p,i as V,p as W,l as O,k as D,g as _,r as x,w as C,a as N,T as K,m as A,s as U,q as G,t as I,v as X,x as Y,y as J,z as Z,A as R,d as T,e as ee,_ as te,B as oe,C as ne,D as ie,E as H,F as le,G as q}from"./index.3b97be47.js";import{h as j,a as re,Q as ae}from"./QBtn.b18f9bea.js";import{Q as M}from"./QResizeObserver.b4830e66.js";var se=Q({name:"QPageContainer",setup(e,{slots:g}){const{proxy:{$q:o}}=_(),t=V(O,w);if(t===w)return console.error("QPageContainer needs to be child of QLayout"),w;W(D,!0);const n=u(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>p("div",{class:"q-page-container",style:n.value},j(g.default))}});const ce={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function ue(){const{props:e,proxy:{$q:g}}=_(),o=V(O,w);if(o===w)return console.error("QPageSticky needs to be child of QLayout"),w;const t=u(()=>{const l=e.position;return{top:l.indexOf("top")>-1,right:l.indexOf("right")>-1,bottom:l.indexOf("bottom")>-1,left:l.indexOf("left")>-1,vertical:l==="top"||l==="bottom",horizontal:l==="left"||l==="right"}}),n=u(()=>o.header.offset),r=u(()=>o.right.offset),c=u(()=>o.footer.offset),f=u(()=>o.left.offset),h=u(()=>{let l=0,d=0;const a=t.value,b=g.lang.rtl===!0?-1:1;a.top===!0&&n.value!==0?d=`${n.value}px`:a.bottom===!0&&c.value!==0&&(d=`${-c.value}px`),a.left===!0&&f.value!==0?l=`${b*f.value}px`:a.right===!0&&r.value!==0&&(l=`${-b*r.value}px`);const y={transform:`translate(${l}, ${d})`};return e.offset&&(y.margin=`${e.offset[1]}px ${e.offset[0]}px`),a.vertical===!0?(f.value!==0&&(y[g.lang.rtl===!0?"right":"left"]=`${f.value}px`),r.value!==0&&(y[g.lang.rtl===!0?"left":"right"]=`${r.value}px`)):a.horizontal===!0&&(n.value!==0&&(y.top=`${n.value}px`),c.value!==0&&(y.bottom=`${c.value}px`)),y}),s=u(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function m(l){const d=j(l.default);return p("div",{class:s.value,style:h.value},e.expand===!0?d:[p("div",d)])}return{$layout:o,getStickyContent:m}}var fe=Q({name:"QPageScroller",props:{...ce,scrollOffset:{type:Number,default:1e3},reverse:Boolean,duration:{type:Number,default:300},offset:{default:()=>[18,18]}},emits:["click"],setup(e,{slots:g,emit:o}){const{proxy:{$q:t}}=_(),{$layout:n,getStickyContent:r}=ue(),c=x(null);let f;const h=u(()=>n.height.value-(n.isContainer.value===!0?n.containerHeight.value:t.screen.height));function s(){return e.reverse===!0?h.value-n.scroll.value.position>e.scrollOffset:n.scroll.value.position>e.scrollOffset}const m=x(s());function l(){const S=s();m.value!==S&&(m.value=S)}function d(){e.reverse===!0?f===void 0&&(f=C(h,l)):a()}C(n.scroll,l),C(()=>e.reverse,d);function a(){f!==void 0&&(f(),f=void 0)}function b(S){const P=A(n.isContainer.value===!0?c.value:n.rootRef.value);U(P,e.reverse===!0?n.height.value:0,e.duration),o("click",S)}function y(){return m.value===!0?p("div",{ref:c,class:"q-page-scroller",onClick:b},r(g)):null}return d(),N(a),()=>p(K,{name:"q-transition--fade"},y)}});const{passive:E}=X,de=["both","horizontal","vertical"];var ve=Q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>de.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:g}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,n,r;C(()=>e.scrollTarget,()=>{h(),f()});function c(){t!==null&&t();const l=Math.max(0,Y(n)),d=J(n),a={top:l-o.position.top,left:d-o.position.left};if(e.axis==="vertical"&&a.top===0||e.axis==="horizontal"&&a.left===0)return;const b=Math.abs(a.top)>=Math.abs(a.left)?a.top<0?"up":"down":a.left<0?"left":"right";o.position={top:l,left:d},o.directionChanged=o.direction!==b,o.delta=a,o.directionChanged===!0&&(o.direction=b,o.inflectionPoint=o.position),g("scroll",{...o})}function f(){n=A(r,e.scrollTarget),n.addEventListener("scroll",s,E),s(!0)}function h(){n!==void 0&&(n.removeEventListener("scroll",s,E),n=void 0)}function s(l){if(l===!0||e.debounce===0||e.debounce==="0")c();else if(t===null){const[d,a]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];t=()=>{a(d),t=null}}}const{proxy:m}=_();return C(()=>m.$q.lang.rtl,c),G(()=>{r=m.$el.parentNode,f()}),N(()=>{t!==null&&t(),h()}),Object.assign(m,{trigger:s,getPosition:()=>o}),I}}),ge=Q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:g,emit:o}){const{proxy:{$q:t}}=_(),n=x(null),r=x(t.screen.height),c=x(e.container===!0?0:t.screen.width),f=x({position:0,direction:"down",inflectionPoint:0}),h=x(0),s=x(Z.value===!0?0:R()),m=u(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),l=u(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),d=u(()=>s.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),a=u(()=>s.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function b(i){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};f.value=v,e.onScroll!==void 0&&o("scroll",v)}}function y(i){const{height:v,width:$}=i;let z=!1;r.value!==v&&(z=!0,r.value=v,e.onScrollHeight!==void 0&&o("scrollHeight",v),P()),c.value!==$&&(z=!0,c.value=$),z===!0&&e.onResize!==void 0&&o("resize",i)}function S({height:i}){h.value!==i&&(h.value=i,P())}function P(){if(e.container===!0){const i=r.value>h.value?R():0;s.value!==i&&(s.value=i)}}let L=null;const B={instances:{},view:u(()=>e.view),isContainer:u(()=>e.container),rootRef:n,height:r,containerHeight:h,scrollbarWidth:s,totalWidth:u(()=>c.value+s.value),rows:u(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:T({size:0,offset:0,space:!1}),right:T({size:300,offset:0,space:!1}),footer:T({size:0,offset:0,space:!1}),left:T({size:300,offset:0,space:!1}),scroll:f,animate(){L!==null?clearTimeout(L):document.body.classList.add("q-body--layout-animate"),L=setTimeout(()=>{L=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,v,$){B[i][v]=$}};if(W(O,B),R()>0){let $=function(){i=null,v.classList.remove("hide-scrollbar")},z=function(){if(i===null){if(v.scrollHeight>t.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout($,300)},k=function(F){i!==null&&F==="remove"&&(clearTimeout(i),$()),window[`${F}EventListener`]("resize",z)},i=null;const v=document.body;C(()=>e.container!==!0?"add":"remove",k),e.container!==!0&&k("add"),ee(()=>{k("remove")})}return()=>{const i=re(g.default,[p(ve,{onScroll:b}),p(M,{onResize:y})]),v=p("div",{class:m.value,style:l.value,ref:e.container===!0?void 0:n,tabindex:-1},i);return e.container===!0?p("div",{class:"q-layout-container overflow-hidden",ref:n},[p(M,{onResize:S}),p("div",{class:"absolute-full",style:d.value},[p("div",{class:"scroll",style:a.value},[v])])]):v}}});const he=oe({name:"MainLayout",setup(){}});function pe(e,g,o,t,n,r){const c=le("router-view");return ne(),ie(ge,{view:"hHh Lpr fFf"},{default:H(()=>[q(se,null,{default:H(()=>[q(c)]),_:1}),q(fe,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:H(()=>[q(ae,{fab:"",icon:"keyboard_arrow_up",class:"top-btn"})]),_:1})]),_:1})}var xe=te(he,[["render",pe]]);export{xe as default};