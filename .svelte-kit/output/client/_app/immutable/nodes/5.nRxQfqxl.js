import{P as ee,B as Q}from"../chunks/index.yoF47Mt2.js";import"../chunks/disclose-version.15-3dQtY.js";import{a as $,r as T,c as g,p as h,k as P,s as ie,l as M,g as U,e as ce}from"../chunks/runtime.w64avLmG.js";import{c as O,e as de}from"../chunks/utils.-e70oDXM.js";import{r as d,m as D,d as _,f as m,u as j,h as y,l as c,v as k,p as V,b as u,s as v,e as p,t as ue,o as b,g as H,j as fe}from"../chunks/render.fVPzZyBR.js";import{g as W}from"../chunks/navigation.bnsU1CIS.js";import{_ as ve,e as _e,i as me}from"../chunks/platform.Kym0gPAi.js";var pe=function(t){return{create:function(e){return ge(t,e)},dismiss:function(e,a,n){return ye(document,e,a,t,n)},getTop:function(){return ve(this,void 0,void 0,function(){return _e(this,function(e){return[2,te(document,t)]})})}}},be=pe("ion-alert"),ge=function(t,e){return typeof window<"u"&&typeof window.customElements<"u"?window.customElements.whenDefined(t).then(function(){var a=document.createElement(t);return a.classList.add("overlay-hidden"),Object.assign(a,Object.assign(Object.assign({},e),{hasController:!0})),xe(document).appendChild(a),new Promise(function(n){return me(a,n)})}):Promise.resolve()},he=function(t){return t.classList.contains("overlay-hidden")},ye=function(t,e,a,n,l){var r=te(t,n,l);return r?r.dismiss(e,a):Promise.reject("overlay does not exist")},we=function(t,e){return e===void 0&&(e="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(t.querySelectorAll(e)).filter(function(a){return a.overlayIndex>0})},te=function(t,e,a){var n=we(t,e).filter(function(l){return!he(l)});return a===void 0?n[n.length-1]:n.find(function(l){return l.id===a})},xe=function(t){return t.querySelector("ion-app")||t.body};async function Pe(){return{records:await ee.keys()}}const Ve=Object.freeze(Object.defineProperty({__proto__:null,load:Pe},Symbol.toStringTag,{value:"Module"}));var ke=c('<div class="w-full overflow-auto"><table><!></table></div>');function $e(t,e){const a=d(e,["children","$$slots","$$events"]),n=d(a,["class","$$props"]);h(e,!1);let l=$(e,"class",8,()=>{});var r=y(t,!0,ke),o=m(r);let i;var s=m(o);D(s,e.children,{},null),T(()=>{i=j(o,i,[{class:O("w-full caption-bottom text-sm",l())},n],!0,"")}),_(t,r),g()}var Te=c("<tbody><!></tbody>");function Oe(t,e){const a=d(e,["children","$$slots","$$events"]),n=d(a,["class","$$props"]);h(e,!1);let l=$(e,"class",8,()=>{});var r=y(t,!0,Te);let o;var i=m(r);D(i,e.children,{},null),T(()=>{o=j(r,o,[{class:O("[&_tr:last-child]:border-0",l())},n],!0,"")}),_(t,r),g()}var De=c("<td><!></td>");function X(t,e){const a=d(e,["children","$$slots","$$events"]),n=d(a,["class","$$props"]);h(e,!1);let l=$(e,"class",8,()=>{});var r=y(t,!0,De);let o;var i=m(r);D(i,e.children,{},null),T(()=>{o=j(r,o,[{class:O("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",l())},n],!0,"")}),k("click",r,function(s){P.call(this,e,s)}),k("keydown",r,function(s){P.call(this,e,s)}),_(t,r),g()}var je=c("<th><!></th>");function Y(t,e){const a=d(e,["children","$$slots","$$events"]),n=d(a,["class","$$props"]);h(e,!1);let l=$(e,"class",8,()=>{});var r=y(t,!0,je);let o;var i=m(r);D(i,e.children,{},null),T(()=>{o=j(r,o,[{class:O("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",l())},n],!0,"")}),_(t,r),g()}var ze=c("<thead><!></thead>");function Ce(t,e){const a=d(e,["children","$$slots","$$events"]),n=d(a,["class","$$props"]);h(e,!1);let l=$(e,"class",8,()=>{});var r=y(t,!0,ze);let o;var i=m(r);D(i,e.children,{},null),T(()=>{o=j(r,o,[{class:O("[&_tr]:border-b",l())},n],!0,"")}),k("click",r,function(s){P.call(this,e,s)}),k("keydown",r,function(s){P.call(this,e,s)}),_(t,r),g()}var Ne=c("<tr><!></tr>");function Z(t,e){const a=d(e,["children","$$slots","$$events"]),n=d(a,["class","$$props"]);h(e,!1);let l=$(e,"class",8,()=>{});var r=y(t,!0,Ne);let o;var i=m(r);D(i,e.children,{},null),T(()=>{o=j(r,o,[{class:O("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",l())},n],!0,"")}),k("click",r,function(s){P.call(this,e,s)}),k("keydown",r,function(s){P.call(this,e,s)}),_(t,r),g()}var Be=c("Date",!0),Re=c("Delete",!0),Se=c("<!> <!>",!0),Ae=c("Delete",!0),Ee=c("<!> <!>",!0),He=c("<!> <!>",!0),Ie=c("Back to Codes",!0),Le=c('<div class="mx-2 my-2 flex flex-col justify-end gap-4 overflow-y-auto"><!> <!></div>');function We(t,e){h(e,!0);let a=ie(V(e.data.records.keys.sort().map(s=>{const z=new Date(parseInt(s)).toLocaleString();return{oldDate:s,newDate:z}})));const n=async s=>{(await be.create(s)).present()},l=async s=>n({header:"Confirm",message:"Delete this record?",buttons:[{text:"Delete",handler:()=>{ee.remove({key:s}),ce(a,V(U(a).filter(w=>w.oldDate!=s)))}},{text:"Cancel",role:"cancel"}]});var r=y(t,!0,Le),o=m(r),i=v(v(o));$e(o,{children:(s,z)=>{var w=b(s,!0,He),F=p(w),re=v(v(F));Ce(F,{children:(C,ae)=>{var N=H(C),I=p(N);Z(I,{children:(B,E)=>{var L=b(B,!0,Se),R=p(L),q=v(v(R));Y(R,{class:"",children:(f,G)=>{var x=b(f,!0,Be);u(f,x)}}),Y(q,{class:"text-right",children:(f,G)=>{var x=b(f,!0,Re);u(f,x)}}),u(B,L)}}),u(C,N)}}),Oe(re,{children:(C,ae)=>{var N=H(C),I=p(N);de(I,()=>U(a),65,(B,E,L)=>{var R=H(B),q=p(R);Z(q,{children:(f,G)=>{var x=b(f,!0,Ee),J=p(x),se=v(v(J));X(J,{class:"cursor-pointer font-medium",$$events:{click:()=>W(`/i/${M(E).oldDate}`)},children:(S,ne)=>{var A=fe(S);ue(A,()=>M(E).newDate),_(S,A)}}),X(se,{class:"flex justify-end",children:(S,ne)=>{var A=H(S),oe=p(A);Q(oe,{$$events:{click:()=>l(M(E).oldDate)},children:(K,qe)=>{var le=b(K,!0,Ae);u(K,le)}}),u(S,A)}}),u(f,x)}}),u(B,R)},null),u(C,N)}}),u(s,w)}}),Q(i,{$$events:{click:()=>W("/home")},children:(s,z)=>{var w=b(s,!0,Ie);u(s,w)}}),_(t,r),g()}export{We as component,Ve as universal};