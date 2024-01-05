import{P as I,x as H,B as b}from"../chunks/index.yoF47Mt2.js";import"../chunks/disclose-version.15-3dQtY.js";import{c as F,p as $}from"../chunks/runtime.w64avLmG.js";import{z as V,b as C,d as U,f as g,s as p,h as W,o as w,l as k}from"../chunks/render.fVPzZyBR.js";import{g as j}from"../chunks/navigation.bnsU1CIS.js";import{_ as G}from"../chunks/preload-helper.0HuHagjb.js";async function X({params:e}){const r=e.slug;return{record:await I.get({key:r})}}const Re=Object.freeze(Object.defineProperty({__proto__:null,load:X},Symbol.toStringTag,{value:"Module"}));H("Share",{web:()=>G(()=>import("../chunks/web.QFhSlsL_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url).then(e=>new e.ShareWeb)});function z(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}return e}function N(e,r){return Array(r+1).join(e)}function K(e){return e.replace(/^\n*/,"")}function Y(e){for(var r=e.length;r>0&&e[r-1]===`
`;)r--;return e.substring(0,r)}var q=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function E(e){return T(e,q)}var O=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function B(e){return T(e,O)}function Q(e){return P(e,O)}var D=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function J(e){return T(e,D)}function Z(e){return P(e,D)}function T(e,r){return r.indexOf(e.nodeName)>=0}function P(e,r){return e.getElementsByTagName&&r.some(function(t){return e.getElementsByTagName(t).length})}var u={};u.paragraph={filter:"p",replacement:function(e){return`

`+e+`

`}};u.lineBreak={filter:"br",replacement:function(e,r,t){return t.br+`
`}};u.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,r,t){var n=Number(r.nodeName.charAt(1));if(t.headingStyle==="setext"&&n<3){var i=N(n===1?"=":"-",e.length);return`

`+e+`
`+i+`

`}else return`

`+N("#",n)+" "+e+`

`}};u.blockquote={filter:"blockquote",replacement:function(e){return e=e.replace(/^\n+|\n+$/g,""),e=e.replace(/^/gm,"> "),`

`+e+`

`}};u.list={filter:["ul","ol"],replacement:function(e,r){var t=r.parentNode;return t.nodeName==="LI"&&t.lastElementChild===r?`
`+e:`

`+e+`

`}};u.listItem={filter:"li",replacement:function(e,r,t){e=e.replace(/^\n+/,"").replace(/\n+$/,`
`).replace(/\n/gm,`
    `);var n=t.bulletListMarker+"   ",i=r.parentNode;if(i.nodeName==="OL"){var a=i.getAttribute("start"),o=Array.prototype.indexOf.call(i.children,r);n=(a?Number(a)+o:o+1)+".  "}return n+e+(r.nextSibling&&!/\n$/.test(e)?`
`:"")}};u.indentedCodeBlock={filter:function(e,r){return r.codeBlockStyle==="indented"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,r,t){return`

    `+r.firstChild.textContent.replace(/\n/g,`
    `)+`

`}};u.fencedCodeBlock={filter:function(e,r){return r.codeBlockStyle==="fenced"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,r,t){for(var n=r.firstChild.getAttribute("class")||"",i=(n.match(/language-(\S+)/)||[null,""])[1],a=r.firstChild.textContent,o=t.fence.charAt(0),f=3,l=new RegExp("^"+o+"{3,}","gm"),s;s=l.exec(a);)s[0].length>=f&&(f=s[0].length+1);var c=N(o,f);return`

`+c+i+`
`+a.replace(/\n$/,"")+`
`+c+`

`}};u.horizontalRule={filter:"hr",replacement:function(e,r,t){return`

`+t.hr+`

`}};u.inlineLink={filter:function(e,r){return r.linkStyle==="inlined"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,r){var t=r.getAttribute("href"),n=m(r.getAttribute("title"));return n&&(n=' "'+n+'"'),"["+e+"]("+t+n+")"}};u.referenceLink={filter:function(e,r){return r.linkStyle==="referenced"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,r,t){var n=r.getAttribute("href"),i=m(r.getAttribute("title"));i&&(i=' "'+i+'"');var a,o;switch(t.linkReferenceStyle){case"collapsed":a="["+e+"][]",o="["+e+"]: "+n+i;break;case"shortcut":a="["+e+"]",o="["+e+"]: "+n+i;break;default:var f=this.references.length+1;a="["+e+"]["+f+"]",o="["+f+"]: "+n+i}return this.references.push(o),a},references:[],append:function(e){var r="";return this.references.length&&(r=`

`+this.references.join(`
`)+`

`,this.references=[]),r}};u.emphasis={filter:["em","i"],replacement:function(e,r,t){return e.trim()?t.emDelimiter+e+t.emDelimiter:""}};u.strong={filter:["strong","b"],replacement:function(e,r,t){return e.trim()?t.strongDelimiter+e+t.strongDelimiter:""}};u.code={filter:function(e){var r=e.previousSibling||e.nextSibling,t=e.parentNode.nodeName==="PRE"&&!r;return e.nodeName==="CODE"&&!t},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var r=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",t="`",n=e.match(/`+/gm)||[];n.indexOf(t)!==-1;)t=t+"`";return t+r+e+r+t}};u.image={filter:"img",replacement:function(e,r){var t=m(r.getAttribute("alt")),n=r.getAttribute("src")||"",i=m(r.getAttribute("title")),a=i?' "'+i+'"':"";return n?"!["+t+"]("+n+a+")":""}};function m(e){return e?e.replace(/(\n+\s*)+/g,`
`):""}function x(e){this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[];for(var r in e.rules)this.array.push(e.rules[r])}x.prototype={add:function(e,r){this.array.unshift(r)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){if(e.isBlank)return this.blankRule;var r;return(r=v(this.array,e,this.options))||(r=v(this._keep,e,this.options))||(r=v(this._remove,e,this.options))?r:this.defaultRule},forEach:function(e){for(var r=0;r<this.array.length;r++)e(this.array[r],r)}};function v(e,r,t){for(var n=0;n<e.length;n++){var i=e[n];if(ee(i,r,t))return i}}function ee(e,r,t){var n=e.filter;if(typeof n=="string"){if(n===r.nodeName.toLowerCase())return!0}else if(Array.isArray(n)){if(n.indexOf(r.nodeName.toLowerCase())>-1)return!0}else if(typeof n=="function"){if(n.call(e,r,t))return!0}else throw new TypeError("`filter` needs to be a string, array, or function")}function re(e){var r=e.element,t=e.isBlock,n=e.isVoid,i=e.isPre||function(d){return d.nodeName==="PRE"};if(!(!r.firstChild||i(r))){for(var a=null,o=!1,f=null,l=R(f,r,i);l!==r;){if(l.nodeType===3||l.nodeType===4){var s=l.data.replace(/[ \r\n\t]+/g," ");if((!a||/ $/.test(a.data))&&!o&&s[0]===" "&&(s=s.substr(1)),!s){l=y(l);continue}l.data=s,a=l}else if(l.nodeType===1)t(l)||l.nodeName==="BR"?(a&&(a.data=a.data.replace(/ $/,"")),a=null,o=!1):n(l)||i(l)?(a=null,o=!0):a&&(o=!1);else{l=y(l);continue}var c=R(f,l,i);f=l,l=c}a&&(a.data=a.data.replace(/ $/,""),a.data||y(a))}}function y(e){var r=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),r}function R(e,r,t){return e&&e.parentNode===r||t(r)?r.nextSibling||r.parentNode:r.firstChild||r.nextSibling||r.parentNode}var _=typeof window<"u"?window:{};function te(){var e=_.DOMParser,r=!1;try{new e().parseFromString("","text/html")&&(r=!0)}catch{}return r}function ne(){var e=function(){};return ie()?e.prototype.parseFromString=function(r){var t=new window.ActiveXObject("htmlfile");return t.designMode="on",t.open(),t.write(r),t.close(),t}:e.prototype.parseFromString=function(r){var t=document.implementation.createHTMLDocument("");return t.open(),t.write(r),t.close(),t},e}function ie(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch{window.ActiveXObject&&(e=!0)}return e}var ae=te()?_.DOMParser:ne();function le(e,r){var t;if(typeof e=="string"){var n=oe().parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html");t=n.getElementById("turndown-root")}else t=e.cloneNode(!0);return re({element:t,isBlock:E,isVoid:B,isPre:r.preformattedCode?se:null}),t}var A;function oe(){return A=A||new ae,A}function se(e){return e.nodeName==="PRE"||e.nodeName==="CODE"}function ue(e,r){return e.isBlock=E(e),e.isCode=e.nodeName==="CODE"||e.parentNode.isCode,e.isBlank=fe(e),e.flankingWhitespace=ce(e,r),e}function fe(e){return!B(e)&&!J(e)&&/^\s*$/i.test(e.textContent)&&!Q(e)&&!Z(e)}function ce(e,r){if(e.isBlock||r.preformattedCode&&e.isCode)return{leading:"",trailing:""};var t=de(e.textContent);return t.leadingAscii&&S("left",e,r)&&(t.leading=t.leadingNonAscii),t.trailingAscii&&S("right",e,r)&&(t.trailing=t.trailingNonAscii),{leading:t.leading,trailing:t.trailing}}function de(e){var r=e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);return{leading:r[1],leadingAscii:r[2],leadingNonAscii:r[3],trailing:r[4],trailingNonAscii:r[5],trailingAscii:r[6]}}function S(e,r,t){var n,i,a;return e==="left"?(n=r.previousSibling,i=/ $/):(n=r.nextSibling,i=/^ /),n&&(n.nodeType===3?a=i.test(n.nodeValue):t.preformattedCode&&n.nodeName==="CODE"?a=!1:n.nodeType===1&&!E(n)&&(a=i.test(n.textContent))),a}var pe=Array.prototype.reduce,me=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function h(e){if(!(this instanceof h))return new h(e);var r={rules:u,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(t,n){return n.isBlock?`

`:""},keepReplacement:function(t,n){return n.isBlock?`

`+n.outerHTML+`

`:n.outerHTML},defaultReplacement:function(t,n){return n.isBlock?`

`+t+`

`:t}};this.options=z({},r,e),this.rules=new x(this.options)}h.prototype={turndown:function(e){if(!ve(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(e==="")return"";var r=L.call(this,new le(e,this.options));return he.call(this,r)},use:function(e){if(Array.isArray(e))for(var r=0;r<e.length;r++)this.use(e[r]);else if(typeof e=="function")e(this);else throw new TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(e,r){return this.rules.add(e,r),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return me.reduce(function(r,t){return r.replace(t[0],t[1])},e)}};function L(e){var r=this;return pe.call(e.childNodes,function(t,n){n=new ue(n,r.options);var i="";return n.nodeType===3?i=n.isCode?n.nodeValue:r.escape(n.nodeValue):n.nodeType===1&&(i=ge.call(r,n)),M(t,i)},"")}function he(e){var r=this;return this.rules.forEach(function(t){typeof t.append=="function"&&(e=M(e,t.append(r.options)))}),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function ge(e){var r=this.rules.forNode(e),t=L.call(this,e),n=e.flankingWhitespace;return(n.leading||n.trailing)&&(t=t.trim()),n.leading+r.replacement(t,e,this.options)+n.trailing}function M(e,r){var t=Y(e),n=K(r),i=Math.max(e.length-t.length,r.length-n.length),a=`

`.substring(0,i);return t+a+n}function ve(e){return e!=null&&(typeof e=="string"||e.nodeType&&(e.nodeType===1||e.nodeType===9||e.nodeType===11))}var ye=k("Copy",!0),Ae=k("Back to Previous Codes",!0),Ne=k('<div class="flex flex-col gap-10 overflow-y-auto px-4 py-8"><div><!></div> <div class="flex flex-col gap-2"><!> <!></div></div>');function Se(e,r){$(r,!0);async function t(){const c=new h({bulletListMarker:"-"}).turndown(r.data.record.value);await navigator.clipboard.writeText(c)}var n=W(e,!0,Ne),i=g(n),a=g(i);V(a,()=>r.data.record.value,!1);var o=p(p(i)),f=g(o),l=p(p(f));b(f,{$$events:{click:t},children:(s,c)=>{var d=w(s,!0,ye);C(s,d)}}),b(l,{$$events:{click:()=>{j("/recordList")}},children:(s,c)=>{var d=w(s,!0,Ae);C(s,d)}}),U(e,n),F()}export{Se as component,Re as universal};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/web.QFhSlsL_.js","../chunks/index.yoF47Mt2.js","../chunks/preload-helper.0HuHagjb.js","../chunks/disclose-version.15-3dQtY.js","../chunks/runtime.w64avLmG.js","../chunks/render.fVPzZyBR.js","../chunks/index.zUa3ZUDx.js","../chunks/singletons.JH8-oqSs.js","../chunks/main-client.pYAxlQny.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}