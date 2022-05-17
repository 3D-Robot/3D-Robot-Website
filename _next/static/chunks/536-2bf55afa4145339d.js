"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{87536:function(e,t,r){r.d(t,{cI:function(){return Fe},qo:function(){return I}});var s=r(67294),a=e=>"checkbox"===e.type,i=e=>e instanceof Date,n=e=>null==e;const o=e=>"object"===typeof e;var u=e=>!n(e)&&!Array.isArray(e)&&o(e)&&!i(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>[...e].some((e=>(e=>e.substring(0,e.search(/.\d/))||e)(t)===e)),d=e=>e.filter(Boolean),f=e=>void 0===e,g=(e,t,r)=>{if(!t||!u(e))return r;const s=d(t.split(/[,[\].]+?/)).reduce(((e,t)=>n(e)?e:e[t]),e);return f(s)||s===e?f(e[t])?r:e[t]:s};const y="blur",m="focusout",b="onBlur",h="onChange",v="onSubmit",p="onTouched",_="all",O="max",j="min",V="maxLength",A="minLength",w="pattern",F="required",x="validate";var S=(e,t)=>{const r=Object.assign({},e);return delete r[t],r};const k=s.createContext(null),D=()=>s.useContext(k);var C=(e,t,r,s=!0)=>{const a={};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t[a]!==_&&(t[a]=!s||_),r&&(r[a]=!0),e[a]}});return a},E=e=>u(e)&&!Object.keys(e).length,N=(e,t,r)=>{const s=S(e,"name");return E(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find((e=>t[e]===(!r||_)))},T=e=>Array.isArray(e)?e:[e],U=(e,t,r)=>r&&t?e===t:!e||!t||e===t||T(e).some((e=>e&&(e.startsWith(t)||t.startsWith(e))));function B(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>(e=>{e&&e.unsubscribe()})(r)}),[e.disabled])}var L=e=>"string"===typeof e,M=(e,t,r,s)=>{const a=Array.isArray(e);return L(e)?(s&&t.watch.add(e),g(r,e)):a?e.map((e=>(s&&t.watch.add(e),g(r,e)))):(s&&(t.watchAll=!0),r)},q=e=>"function"===typeof e,W=e=>{for(const t in e)if(q(e[t]))return!0;return!1};function I(e){const t=D(),{control:r=t.control,name:a,defaultValue:i,disabled:n,exact:o}=e||{},l=s.useRef(a);l.current=a;const c=s.useCallback((e=>{if(U(l.current,e.name,o)){const t=M(l.current,r._names,e.values||r._formValues);g(f(l.current)||u(t)&&!W(t)?Object.assign({},t):Array.isArray(t)?[...t]:f(t)?i:t)}}),[r,o,i]);B({disabled:n,subject:r._subjects.watch,callback:c});const[d,g]=s.useState(f(i)?r._getWatch(a):i);return s.useEffect((()=>{r._removeUnmounted()})),d}var R=(e,t,r,s,a)=>t?Object.assign(Object.assign({},r[e]),{types:Object.assign(Object.assign({},r[e]&&r[e].types?r[e].types:{}),{[s]:a||!0})}):{},$=e=>/^\w*$/.test(e),H=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function P(e,t,r){let s=-1;const a=$(t)?[t]:H(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=i,e=e[t]}return e}const z=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=g(e,s);if(r){const e=r._f,s=S(r,"_f");if(e&&t(e.name)){if(e.ref.focus&&f(e.ref.focus()))break;if(e.refs){e.refs[0].focus();break}}else u(s)&&z(s,t)}}};var G=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));function J(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(!r&&!u(e))return e;t=r?[]:{};for(const r in e){if(q(e[r])){t=e;break}t[r]=J(e[r])}}return t}function K(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var Q=e=>n(e)||!o(e);function X(e,t){if(Q(e)||Q(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(i(r)&&i(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!X(r,e):r!==e)return!1}}return!0}var Y=e=>({isOnSubmit:!e||e===v,isOnBlur:e===b,isOnChange:e===h,isOnAll:e===_,isOnTouch:e===p}),Z=e=>"boolean"===typeof e,ee=e=>"file"===e.type,te=e=>e instanceof HTMLElement,re=e=>"select-multiple"===e.type,se=e=>"radio"===e.type,ae="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document,ie=e=>te(e)&&e.isConnected;function ne(e,t){const r=$(t)?[t]:H(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=f(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let i;s&&delete s[a];for(let n=0;n<r.slice(0,-1).length;n++){let t,s=-1;const a=r.slice(0,-(n+1)),o=a.length-1;for(n>0&&(i=e);++s<a.length;){const r=a[s];t=t?t[r]:e[r],o===s&&(u(t)&&E(t)||Array.isArray(t)&&!t.filter((e=>u(e)&&!E(e)||Z(e))).length)&&(i?delete i[r]:delete e[r]),i=t}}return e}function oe(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const s in e)Array.isArray(e[s])||u(e[s])&&!W(e[s])?(t[s]=Array.isArray(e[s])?[]:{},oe(e[s],t[s])):n(e[s])||(t[s]=!0);return t}function ue(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const a in e)Array.isArray(e[a])||u(e[a])&&!W(e[a])?f(t)||Q(r[a])?r[a]=Array.isArray(e[a])?oe(e[a],[]):Object.assign({},oe(e[a])):ue(e[a],n(t)?{}:t[a],r[a]):r[a]=!X(e[a],t[a]);return r}var le=(e,t)=>ue(e,t,oe(t));const ce={value:!1,isValid:!1},de={value:!0,isValid:!0};var fe=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!f(e[0].attributes.value)?f(e[0].value)||""===e[0].value?de:{value:e[0].value,isValid:!0}:de:ce}return ce},ge=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>f(e)?e:t?""===e?NaN:+e:r&&L(e)?new Date(e):s?s(e):e;const ye={isValid:!1,value:null};var me=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),ye):ye;function be(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return ee(t)?t.files:se(t)?me(e.refs).value:re(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?fe(e.refs).value:ge(f(t.value)?e.ref.value:t.value,e)}var he=e=>e instanceof RegExp,ve=e=>f(e)?void 0:he(e)?e.source:u(e)?he(e.value)?e.value.source:e.value:e;function pe(e,t,r){const s=g(e,r);if(s||$(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=g(t,s),n=g(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}var _e=e=>L(e)||s.isValidElement(e);function Oe(e,t,r="validate"){if(_e(e)||Array.isArray(e)&&e.every(_e)||Z(e)&&!e)return{type:r,message:_e(e)?e:"",ref:t}}var je=e=>u(e)&&!he(e)?e:{value:e,message:""},Ve=async(e,t,r,s)=>{const{ref:i,refs:o,required:l,maxLength:c,minLength:d,min:f,max:g,pattern:y,validate:m,name:b,valueAsNumber:h,mount:v,disabled:p}=e._f;if(!v||p)return{};const _=o?o[0]:i,S=e=>{s&&_.reportValidity&&(_.setCustomValidity(Z(e)?"":e||" "),_.reportValidity())},k={},D=se(i),C=a(i),N=D||C,T=(h||ee(i))&&!i.value||""===t||Array.isArray(t)&&!t.length,U=R.bind(null,b,r,k),B=(e,t,r,s=V,a=A)=>{const n=e?t:r;k[b]=Object.assign({type:e?s:a,message:n,ref:i},U(e?s:a,n))};if(l&&(!N&&(T||n(t))||Z(t)&&!t||C&&!fe(o).isValid||D&&!me(o).isValid)){const{value:e,message:t}=_e(l)?{value:!!l,message:l}:je(l);if(e&&(k[b]=Object.assign({type:F,message:t,ref:_},U(F,t)),!r))return S(t),k}if(!T&&(!n(f)||!n(g))){let e,s;const a=je(g),o=je(f);if(isNaN(t)){const r=i.valueAsDate||new Date(t);L(a.value)&&(e=r>new Date(a.value)),L(o.value)&&(s=r<new Date(o.value))}else{const r=i.valueAsNumber||parseFloat(t);n(a.value)||(e=r>a.value),n(o.value)||(s=r<o.value)}if((e||s)&&(B(!!e,a.message,o.message,O,j),!r))return S(k[b].message),k}if((c||d)&&!T&&L(t)){const e=je(c),s=je(d),a=!n(e.value)&&t.length>e.value,i=!n(s.value)&&t.length<s.value;if((a||i)&&(B(a,e.message,s.message),!r))return S(k[b].message),k}if(y&&!T&&L(t)){const{value:e,message:s}=je(y);if(he(e)&&!t.match(e)&&(k[b]=Object.assign({type:w,message:s,ref:i},U(w,s)),!r))return S(s),k}if(m)if(q(m)){const e=Oe(await m(t),_);if(e&&(k[b]=Object.assign(Object.assign({},e),U(x,e.message)),!r))return S(e.message),k}else if(u(m)){let e={};for(const s in m){if(!E(e)&&!r)break;const a=Oe(await m[s](t),_,s);a&&(e=Object.assign(Object.assign({},a),U(s,a.message)),S(a.message),r&&(k[b]=e))}if(!E(e)&&(k[b]=Object.assign({ref:_},e),!r))return k}return S(!0),k};const Ae={mode:v,reValidateMode:h,shouldFocusError:!0};function we(e={}){let t,r=Object.assign(Object.assign({},Ae),e),s={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},o={},u=r.defaultValues||{},b=r.shouldUnregister?{}:J(u),h={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},p=0,O={};const j={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},V={watch:K(),array:K(),state:K()},A=Y(r.mode),w=Y(r.reValidateMode),F=r.criteriaMode===_,x=async e=>{let t=!1;return j.isValid&&(t=r.resolver?E((await U()).errors):await B(o,!0),e||t===s.isValid||(s.isValid=t,V.state.next({isValid:t}))),t},k=(e,t)=>(P(s.errors,e,t),V.state.next({errors:s.errors})),D=(e,t,r,s)=>{const a=g(o,e);if(a){const i=g(b,e,f(r)?g(u,e):r);f(i)||s&&s.defaultChecked||t?P(b,e,t?i:be(a._f)):R(e,i),h.mount&&x()}},C=(e,t,r,a,i)=>{let n=!1;const o={name:e},l=g(s.touchedFields,e);if(j.isDirty){const e=s.isDirty;s.isDirty=o.isDirty=W(),n=e!==o.isDirty}if(j.dirtyFields&&(!r||a)){const r=g(s.dirtyFields,e);X(g(u,e),t)?ne(s.dirtyFields,e):P(s.dirtyFields,e,!0),o.dirtyFields=s.dirtyFields,n=n||r!==g(s.dirtyFields,e)}return r&&!l&&(P(s.touchedFields,e,r),o.touchedFields=s.touchedFields,n=n||j.touchedFields&&l!==r),n&&i&&V.state.next(o),n?o:{}},N=async(r,a,i,n,o)=>{const u=g(s.errors,a),l=j.isValid&&s.isValid!==i;var c,d;if(e.delayError&&n?(t=t||(c=k,d=e.delayError,(...e)=>{clearTimeout(p),p=window.setTimeout((()=>c(...e)),d)}),t(a,n)):(clearTimeout(p),n?P(s.errors,a,n):ne(s.errors,a)),((n?!X(u,n):u)||!E(o)||l)&&!r){const e=Object.assign(Object.assign(Object.assign({},o),l?{isValid:i}:{}),{errors:s.errors,name:a});s=Object.assign(Object.assign({},s),e),V.state.next(e)}O[a]--,j.isValidating&&!O[a]&&(V.state.next({isValidating:!1}),O={})},U=async e=>r.resolver?await r.resolver(Object.assign({},b),r.context,((e,t,r,s)=>{const a={};for(const i of e){const e=g(t,i);e&&P(a,i,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||v.mount,o,r.criteriaMode,r.shouldUseNativeValidation)):{},B=async(e,t,a={valid:!0})=>{for(const i in e){const n=e[i];if(n){const e=n._f,i=S(n,"_f");if(e){const i=await Ve(n,g(b,e.name),F,r.shouldUseNativeValidation);if(i[e.name]&&(a.valid=!1,t))break;t||(i[e.name]?P(s.errors,e.name,i[e.name]):ne(s.errors,e.name))}i&&await B(i,t,a)}}return a.valid},W=(e,t)=>(e&&t&&P(b,e,t),!X(ce(),u)),I=(e,t,r)=>{const s=Object.assign({},h.mount?b:f(t)?u:L(e)?{[e]:t}:t);return M(e,v,s,r)},R=(e,t,r={})=>{const s=g(o,e);let i=t;if(s){const r=s._f;r&&(!r.disabled&&P(b,e,ge(t,r)),i=ae&&te(r.ref)&&n(t)?"":t,re(r.ref)?[...r.ref.options].forEach((e=>e.selected=i.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value)):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach((e=>e.checked=e.value===i)):ee(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||V.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&C(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ue(e)},$=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,u=g(o,n);!v.array.has(e)&&Q(a)&&(!u||u._f)||i(a)?R(n,a,r):$(n,a,r)}},H=(e,t,r={})=>{const a=g(o,e),i=v.array.has(e),l=J(t);P(b,e,l),i?(V.array.next({name:e,values:b}),(j.isDirty||j.dirtyFields)&&r.shouldDirty&&(s.dirtyFields=le(u,b),V.state.next({name:e,dirtyFields:s.dirtyFields,isDirty:W(e,l)}))):!a||a._f||n(l)?R(e,l,r):$(e,l,r),G(e,v)&&V.state.next({}),V.watch.next({name:e})},oe=async e=>{const t=e.target;let a=t.name;const i=g(o,a);if(i){let u,c;const d=t.type?be(i._f):l(e),f=e.type===y||e.type===m,h=!((n=i._f).mount&&(n.required||n.min||n.max||n.maxLength||n.minLength||n.pattern||n.validate))&&!r.resolver&&!g(s.errors,a)&&!i._f.deps||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(f,g(s.touchedFields,a),s.isSubmitted,w,A),p=G(a,v,f);P(b,a,d),f?i._f.onBlur&&i._f.onBlur(e):i._f.onChange&&i._f.onChange(e);const _=C(a,d,f,!1),j=!E(_)||p;if(!f&&V.watch.next({name:a,type:e.type}),h)return j&&V.state.next(Object.assign({name:a},p?{}:_));if(!f&&p&&V.state.next({}),O[a]=(O[a],1),V.state.next({isValidating:!0}),r.resolver){const{errors:e}=await U([a]),t=pe(s.errors,o,a),r=pe(e,o,t.name||a);u=r.error,a=r.name,c=E(e)}else u=(await Ve(i,g(b,a),F,r.shouldUseNativeValidation))[a],c=await x(!0);i._f.deps&&ue(i._f.deps),N(!1,a,c,u,_)}var n},ue=async(e,t={})=>{let a,i;const n=T(e);if(V.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await U();if(e)for(const r of e){const e=g(t,r);e?P(s.errors,r,e):ne(s.errors,r)}else s.errors=t;return t})(f(e)?e:n);a=E(t),i=e?!n.some((e=>g(t,e))):a}else e?(i=(await Promise.all(n.map((async e=>{const t=g(o,e);return await B(t&&t._f?{[e]:t}:t)})))).every(Boolean),(i||s.isValid)&&x()):i=a=await B(o);return V.state.next(Object.assign(Object.assign(Object.assign({},!L(e)||j.isValid&&a!==s.isValid?{}:{name:e}),r.resolver?{isValid:a}:{}),{errors:s.errors,isValidating:!1})),t.shouldFocus&&!i&&z(o,(e=>g(s.errors,e)),e?n:v.mount),i},ce=e=>{const t=Object.assign(Object.assign({},u),h.mount?b:{});return f(e)?t:L(e)?g(t,e):e.map((e=>g(t,e)))},de=(e,t)=>({invalid:!!g((t||s).errors,e),isDirty:!!g((t||s).dirtyFields,e),isTouched:!!g((t||s).touchedFields,e),error:g((t||s).errors,e)}),fe=(e,t={})=>{for(const a of e?T(e):v.mount)v.mount.delete(a),v.array.delete(a),g(o,a)&&(t.keepValue||(ne(o,a),ne(b,a)),!t.keepError&&ne(s.errors,a),!t.keepDirty&&ne(s.dirtyFields,a),!t.keepTouched&&ne(s.touchedFields,a),!r.shouldUnregister&&!t.keepDefaultValue&&ne(u,a));V.watch.next({}),V.state.next(Object.assign(Object.assign({},s),t.keepDirty?{isDirty:W()}:{})),!t.keepIsValid&&x()},ye=(e,t={})=>{let s=g(o,e);const i=Z(t.disabled);return P(o,e,{_f:Object.assign(Object.assign(Object.assign({},s&&s._f?s._f:{ref:{name:e}}),{name:e,mount:!0}),t)}),v.mount.add(e),s?i&&P(b,e,t.disabled?void 0:g(b,e,be(s._f))):D(e,!0,t.value),Object.assign(Object.assign(Object.assign({},i?{disabled:t.disabled}:{}),r.shouldUseNativeValidation?{required:!!t.required,min:ve(t.min),max:ve(t.max),minLength:ve(t.minLength),maxLength:ve(t.maxLength),pattern:ve(t.pattern)}:{}),{name:e,onChange:oe,onBlur:oe,ref:i=>{if(i){ye(e,t),s=g(o,e);const r=f(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,n=(e=>se(e)||a(e))(r),u=s._f.refs||[];if(n?u.find((e=>e===r)):r===s._f.ref)return;P(o,e,{_f:Object.assign(Object.assign({},s._f),n?{refs:u.concat(r).filter(ie),ref:{type:r.type,name:e}}:{ref:r})}),D(e,!1,void 0,r)}else s=g(o,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(v.array,e)||!h.action)&&v.unMount.add(e)}})};return{control:{register:ye,unregister:fe,getFieldState:de,_executeSchema:U,_getWatch:I,_getDirty:W,_updateValid:x,_removeUnmounted:()=>{for(const e of v.unMount){const t=g(o,e);t&&(t._f.refs?t._f.refs.every((e=>!ie(e))):!ie(t._f.ref))&&fe(e)}v.unMount=new Set},_updateFieldArray:(e,t=[],r,a,i=!0,n=!0)=>{if(a&&r){if(h.action=!0,n&&Array.isArray(g(o,e))){const t=r(g(o,e),a.argA,a.argB);i&&P(o,e,t)}if(j.errors&&n&&Array.isArray(g(s.errors,e))){const t=r(g(s.errors,e),a.argA,a.argB);i&&P(s.errors,e,t),((e,t)=>{!d(g(e,t)).length&&ne(e,t)})(s.errors,e)}if(j.touchedFields&&Array.isArray(g(s.touchedFields,e))){const t=r(g(s.touchedFields,e),a.argA,a.argB);i&&P(s.touchedFields,e,t)}j.dirtyFields&&(s.dirtyFields=le(u,b)),V.state.next({isDirty:W(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else P(b,e,t)},_getFieldArray:t=>d(g(h.mount?b:u,t,e.shouldUnregister?g(u,t,[]):[])),_subjects:V,_proxyFormState:j,get _fields(){return o},get _formValues(){return b},get _stateFlags(){return h},set _stateFlags(e){h=e},get _defaultValues(){return u},get _names(){return v},set _names(e){v=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r=Object.assign(Object.assign({},r),e)}},trigger:ue,register:ye,handleSubmit:(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let i=!0,n=r.shouldUnregister?J(b):Object.assign({},b);V.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await U();s.errors=e,n=t}else await B(o);E(s.errors)&&Object.keys(s.errors).every((e=>g(n,e)))?(V.state.next({errors:{},isSubmitting:!0}),await e(n,a)):(t&&await t(s.errors,a),r.shouldFocusError&&z(o,(e=>g(s.errors,e)),v.mount))}catch(u){throw i=!1,u}finally{s.isSubmitted=!0,V.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:E(s.errors)&&i,submitCount:s.submitCount+1,errors:s.errors})}},watch:(e,t)=>q(e)?V.watch.subscribe({next:r=>e(I(void 0,t),r)}):I(e,t,!0),setValue:H,getValues:ce,reset:(t,r={})=>{const a=t||u,i=J(a),n=t&&!E(t)?i:u;if(r.keepDefaultValues||(u=a),!r.keepValues){if(ae&&f(t))for(const e of v.mount){const t=g(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;try{te(e)&&e.closest("form").reset();break}catch(l){}}}b=e.shouldUnregister?r.keepDefaultValues?J(u):{}:i,o={},V.array.next({values:n}),V.watch.next({values:n})}v={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!j.isValid||!!r.keepIsValid,h.watch=!!e.shouldUnregister,V.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:r.keepDirty?s.isDirty:!!r.keepDefaultValues&&!X(t,u),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:r.keepDirty?s.dirtyFields:r.keepDefaultValues&&t?Object.entries(t).reduce(((e,[t,r])=>Object.assign(Object.assign({},e),{[t]:r!==g(u,t)})),{}):{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(e,t={})=>{g(o,e)&&(f(t.defaultValue)?H(e,g(u,e)):(H(e,t.defaultValue),P(u,e,t.defaultValue)),t.keepTouched||ne(s.touchedFields,e),t.keepDirty||(ne(s.dirtyFields,e),s.isDirty=t.defaultValue?W(e,g(u,e)):W()),t.keepError||(ne(s.errors,e),j.isValid&&x()),V.state.next(Object.assign({},s)))},clearErrors:e=>{e?T(e).forEach((e=>ne(s.errors,e))):s.errors={},V.state.next({errors:s.errors})},unregister:fe,setError:(e,t,r)=>{const a=(g(o,e,{_f:{}})._f||{}).ref;P(s.errors,e,Object.assign(Object.assign({},t),{ref:a})),V.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:e=>{const t=g(o,e)._f;(t.ref.focus?t.ref:t.refs[0]).focus()},getFieldState:de}}function Fe(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current=Object.assign(Object.assign({},we(e)),{formState:r});const i=t.current.control,n=s.useCallback((e=>{N(e,i._proxyFormState,!0)&&(i._formState=Object.assign(Object.assign({},i._formState),e),a(Object.assign({},i._formState)))}),[i]);return B({subject:i._subjects.state,callback:n}),s.useEffect((()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()})),t.current.formState=C(r,i._proxyFormState),t.current}}}]);