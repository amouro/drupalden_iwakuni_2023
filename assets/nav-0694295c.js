function _n(e,n){const s=Object.create(null),a=e.split(",");for(let o=0;o<a.length;o++)s[a[o]]=!0;return n?o=>!!s[o.toLowerCase()]:o=>!!s[o]}function We(e){if(le(e)){const n={};for(let s=0;s<e.length;s++){const a=e[s],o=De(a)?Ud(a):We(a);if(o)for(const r in o)n[r]=o[r]}return n}else{if(De(e))return e;if(Se(e))return e}}const Jd=/;(?![^(]*\))/g,Wd=/:([^]+)/,Vd=/\/\*.*?\*\//gs;function Ud(e){const n={};return e.replace(Vd,"").split(Jd).forEach(s=>{if(s){const a=s.split(Wd);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function Be(e){let n="";if(De(e))n=e;else if(le(e))for(let s=0;s<e.length;s++){const a=Be(e[s]);a&&(n+=a+" ")}else if(Se(e))for(const s in e)e[s]&&(n+=s+" ");return n.trim()}function oe(e){if(!e)return null;let{class:n,style:s}=e;return n&&!De(n)&&(e.class=Be(n)),s&&(e.style=We(s)),e}const Gd="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Yd="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Zd=_n(Gd),Xd=_n(Yd),Qd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eu=_n(Qd);function Ti(e){return!!e||e===""}const Rn=e=>De(e)?e:e==null?"":le(e)||Se(e)&&(e.toString===Pi||!ce(e.toString))?JSON.stringify(e,Mi,2):String(e),Mi=(e,n)=>n&&n.__v_isRef?Mi(e,n.value):$n(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[a,o])=>(s[`${a} =>`]=o,s),{})}:Di(n)?{[`Set(${n.size})`]:[...n.values()]}:Se(n)&&!le(n)&&!Oi(n)?String(n):n,Te=Object.freeze({}),is=Object.freeze([]),ct=()=>{},$i=()=>!1,tu=/^on[^a-z]/,Qs=e=>tu.test(e),_a=e=>e.startsWith("onUpdate:"),ze=Object.assign,tr=(e,n)=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)},nu=Object.prototype.hasOwnProperty,ve=(e,n)=>nu.call(e,n),le=Array.isArray,$n=e=>Ba(e)==="[object Map]",Di=e=>Ba(e)==="[object Set]",ce=e=>typeof e=="function",De=e=>typeof e=="string",nr=e=>typeof e=="symbol",Se=e=>e!==null&&typeof e=="object",sr=e=>Se(e)&&ce(e.then)&&ce(e.catch),Pi=Object.prototype.toString,Ba=e=>Pi.call(e),ar=e=>Ba(e).slice(8,-1),Oi=e=>Ba(e)==="[object Object]",or=e=>De(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ma=_n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),su=_n("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),La=e=>{const n=Object.create(null);return s=>n[s]||(n[s]=e(s))},au=/-(\w)/g,Rt=La(e=>e.replace(au,(n,s)=>s?s.toUpperCase():"")),ou=/\B([A-Z])/g,tn=La(e=>e.replace(ou,"-$1").toLowerCase()),Kn=La(e=>e.charAt(0).toUpperCase()+e.slice(1)),En=La(e=>e?`on${Kn(e)}`:""),Bs=(e,n)=>!Object.is(e,n),pn=(e,n)=>{for(let s=0;s<e.length;s++)e[s](n)},Fa=(e,n,s)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:s})},ka=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let Yr;const Ni=()=>Yr||(Yr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ca(e,...n){console.warn(`[Vue warn] ${e}`,...n)}let ft;class Hi{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ft,!n&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}run(n){if(this.active){const s=ft;try{return ft=this,n()}finally{ft=s}}else Ca("cannot run an inactive effect scope.")}on(){ft=this}off(){ft=this.parent}stop(n){if(this.active){let s,a;for(s=0,a=this.effects.length;s<a;s++)this.effects[s].stop();for(s=0,a=this.cleanups.length;s<a;s++)this.cleanups[s]();if(this.scopes)for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function u4(e){return new Hi(e)}function ru(e,n=ft){n&&n.active&&n.effects.push(e)}function lu(){return ft}function iu(e){ft?ft.cleanups.push(e):Ca("onScopeDispose() is called when there is no active effect scope to be associated with.")}const rr=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Bi=e=>(e.w&wn)>0,Li=e=>(e.n&wn)>0,cu=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=wn},du=e=>{const{deps:n}=e;if(n.length){let s=0;for(let a=0;a<n.length;a++){const o=n[a];Bi(o)&&!Li(o)?o.delete(e):n[s++]=o,o.w&=~wn,o.n&=~wn}n.length=s}},bo=new WeakMap;let Is=0,wn=1;const xo=30;let ot;const Dn=Symbol("iterate"),_o=Symbol("Map key iterate");class lr{constructor(n,s=null,a){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,ru(this,a)}run(){if(!this.active)return this.fn();let n=ot,s=mn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=ot,ot=this,mn=!0,wn=1<<++Is,Is<=xo?cu(this):Zr(this),this.fn()}finally{Is<=xo&&du(this),wn=1<<--Is,ot=this.parent,mn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ot===this?this.deferStop=!0:this.active&&(Zr(this),this.onStop&&this.onStop(),this.active=!1)}}function Zr(e){const{deps:n}=e;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(e);n.length=0}}let mn=!0;const zi=[];function Un(){zi.push(mn),mn=!1}function Gn(){const e=zi.pop();mn=e===void 0?!0:e}function wt(e,n,s){if(mn&&ot){let a=bo.get(e);a||bo.set(e,a=new Map);let o=a.get(s);o||a.set(s,o=rr()),Ri(o,{effect:ot,target:e,type:n,key:s})}}function Ri(e,n){let s=!1;Is<=xo?Li(e)||(e.n|=wn,s=!Bi(e)):s=!e.has(ot),s&&(e.add(ot),ot.deps.push(e),ot.onTrack&&ot.onTrack(Object.assign({effect:ot},n)))}function nn(e,n,s,a,o,r){const l=bo.get(e);if(!l)return;let i=[];if(n==="clear")i=[...l.values()];else if(s==="length"&&le(e)){const d=ka(a);l.forEach((p,u)=>{(u==="length"||u>=d)&&i.push(p)})}else switch(s!==void 0&&i.push(l.get(s)),n){case"add":le(e)?or(s)&&i.push(l.get("length")):(i.push(l.get(Dn)),$n(e)&&i.push(l.get(_o)));break;case"delete":le(e)||(i.push(l.get(Dn)),$n(e)&&i.push(l.get(_o)));break;case"set":$n(e)&&i.push(l.get(Dn));break}const c={target:e,type:n,key:s,newValue:a,oldValue:o,oldTarget:r};if(i.length===1)i[0]&&Fo(i[0],c);else{const d=[];for(const p of i)p&&d.push(...p);Fo(rr(d),c)}}function Fo(e,n){const s=le(e)?e:[...e];for(const a of s)a.computed&&Xr(a,n);for(const a of s)a.computed||Xr(a,n)}function Xr(e,n){(e!==ot||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(ze({effect:e},n)),e.scheduler?e.scheduler():e.run())}const uu=_n("__proto__,__v_isRef,__isVue"),Ki=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(nr)),pu=za(),hu=za(!1,!0),mu=za(!0),fu=za(!0,!0),Qr=gu();function gu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...s){const a=he(this);for(let r=0,l=this.length;r<l;r++)wt(a,"get",r+"");const o=a[n](...s);return o===-1||o===!1?a[n](...s.map(he)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...s){Un();const a=he(this)[n].apply(this,s);return Gn(),a}}),e}function za(e=!1,n=!1){return function(a,o,r){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return n;if(o==="__v_raw"&&r===(e?n?Zi:Yi:n?Gi:Ui).get(a))return a;const l=le(a);if(!e&&l&&ve(Qr,o))return Reflect.get(Qr,o,r);const i=Reflect.get(a,o,r);return(nr(o)?Ki.has(o):uu(o))||(e||wt(a,"get",o),n)?i:Fe(i)?l&&or(o)?i:i.value:Se(i)?e?An(i):Ze(i):i}}const vu=qi(),yu=qi(!0);function qi(e=!1){return function(s,a,o,r){let l=s[a];if(bn(l)&&Fe(l)&&!Fe(o))return!1;if(!e&&(!Ea(o)&&!bn(o)&&(l=he(l),o=he(o)),!le(s)&&Fe(l)&&!Fe(o)))return l.value=o,!0;const i=le(s)&&or(a)?Number(a)<s.length:ve(s,a),c=Reflect.set(s,a,o,r);return s===he(r)&&(i?Bs(o,l)&&nn(s,"set",a,o,l):nn(s,"add",a,o)),c}}function wu(e,n){const s=ve(e,n),a=e[n],o=Reflect.deleteProperty(e,n);return o&&s&&nn(e,"delete",n,void 0,a),o}function bu(e,n){const s=Reflect.has(e,n);return(!nr(n)||!Ki.has(n))&&wt(e,"has",n),s}function xu(e){return wt(e,"iterate",le(e)?"length":Dn),Reflect.ownKeys(e)}const Ji={get:pu,set:vu,deleteProperty:wu,has:bu,ownKeys:xu},Wi={get:mu,set(e,n){return Ca(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0},deleteProperty(e,n){return Ca(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}},_u=ze({},Ji,{get:hu,set:yu}),Fu=ze({},Wi,{get:fu}),ir=e=>e,Ra=e=>Reflect.getPrototypeOf(e);function oa(e,n,s=!1,a=!1){e=e.__v_raw;const o=he(e),r=he(n);s||(n!==r&&wt(o,"get",n),wt(o,"get",r));const{has:l}=Ra(o),i=a?ir:s?dr:Ls;if(l.call(o,n))return i(e.get(n));if(l.call(o,r))return i(e.get(r));e!==o&&e.get(n)}function ra(e,n=!1){const s=this.__v_raw,a=he(s),o=he(e);return n||(e!==o&&wt(a,"has",e),wt(a,"has",o)),e===o?s.has(e):s.has(e)||s.has(o)}function la(e,n=!1){return e=e.__v_raw,!n&&wt(he(e),"iterate",Dn),Reflect.get(e,"size",e)}function el(e){e=he(e);const n=he(this);return Ra(n).has.call(n,e)||(n.add(e),nn(n,"add",e,e)),this}function tl(e,n){n=he(n);const s=he(this),{has:a,get:o}=Ra(s);let r=a.call(s,e);r?Vi(s,a,e):(e=he(e),r=a.call(s,e));const l=o.call(s,e);return s.set(e,n),r?Bs(n,l)&&nn(s,"set",e,n,l):nn(s,"add",e,n),this}function nl(e){const n=he(this),{has:s,get:a}=Ra(n);let o=s.call(n,e);o?Vi(n,s,e):(e=he(e),o=s.call(n,e));const r=a?a.call(n,e):void 0,l=n.delete(e);return o&&nn(n,"delete",e,void 0,r),l}function sl(){const e=he(this),n=e.size!==0,s=$n(e)?new Map(e):new Set(e),a=e.clear();return n&&nn(e,"clear",void 0,void 0,s),a}function ia(e,n){return function(a,o){const r=this,l=r.__v_raw,i=he(l),c=n?ir:e?dr:Ls;return!e&&wt(i,"iterate",Dn),l.forEach((d,p)=>a.call(o,c(d),c(p),r))}}function ca(e,n,s){return function(...a){const o=this.__v_raw,r=he(o),l=$n(r),i=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,d=o[e](...a),p=s?ir:n?dr:Ls;return!n&&wt(r,"iterate",c?_o:Dn),{next(){const{value:u,done:h}=d.next();return h?{value:u,done:h}:{value:i?[p(u[0]),p(u[1])]:p(u),done:h}},[Symbol.iterator](){return this}}}}function rn(e){return function(...n){{const s=n[0]?`on key "${n[0]}" `:"";console.warn(`${Kn(e)} operation ${s}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function ku(){const e={get(r){return oa(this,r)},get size(){return la(this)},has:ra,add:el,set:tl,delete:nl,clear:sl,forEach:ia(!1,!1)},n={get(r){return oa(this,r,!1,!0)},get size(){return la(this)},has:ra,add:el,set:tl,delete:nl,clear:sl,forEach:ia(!1,!0)},s={get(r){return oa(this,r,!0)},get size(){return la(this,!0)},has(r){return ra.call(this,r,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:ia(!0,!1)},a={get(r){return oa(this,r,!0,!0)},get size(){return la(this,!0)},has(r){return ra.call(this,r,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:ia(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=ca(r,!1,!1),s[r]=ca(r,!0,!1),n[r]=ca(r,!1,!0),a[r]=ca(r,!0,!0)}),[e,s,n,a]}const[Cu,Eu,Su,Iu]=ku();function Ka(e,n){const s=n?e?Iu:Su:e?Eu:Cu;return(a,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?a:Reflect.get(ve(s,o)&&o in a?s:a,o,r)}const ju={get:Ka(!1,!1)},Au={get:Ka(!1,!0)},Tu={get:Ka(!0,!1)},Mu={get:Ka(!0,!0)};function Vi(e,n,s){const a=he(s);if(a!==s&&n.call(e,a)){const o=ar(e);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Ui=new WeakMap,Gi=new WeakMap,Yi=new WeakMap,Zi=new WeakMap;function $u(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Du(e){return e.__v_skip||!Object.isExtensible(e)?0:$u(ar(e))}function Ze(e){return bn(e)?e:qa(e,!1,Ji,ju,Ui)}function Pu(e){return qa(e,!1,_u,Au,Gi)}function An(e){return qa(e,!0,Wi,Tu,Yi)}function rs(e){return qa(e,!0,Fu,Mu,Zi)}function qa(e,n,s,a,o){if(!Se(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const l=Du(e);if(l===0)return e;const i=new Proxy(e,l===2?a:s);return o.set(e,i),i}function Pn(e){return bn(e)?Pn(e.__v_raw):!!(e&&e.__v_isReactive)}function bn(e){return!!(e&&e.__v_isReadonly)}function Ea(e){return!!(e&&e.__v_isShallow)}function Sa(e){return Pn(e)||bn(e)}function he(e){const n=e&&e.__v_raw;return n?he(n):e}function cr(e){return Fa(e,"__v_skip",!0),e}const Ls=e=>Se(e)?Ze(e):e,dr=e=>Se(e)?An(e):e;function ur(e){mn&&ot&&(e=he(e),Ri(e.dep||(e.dep=rr()),{target:e,type:"get",key:"value"}))}function pr(e,n){e=he(e),e.dep&&Fo(e.dep,{target:e,type:"set",key:"value",newValue:n})}function Fe(e){return!!(e&&e.__v_isRef===!0)}function ae(e){return Xi(e,!1)}function Kt(e){return Xi(e,!0)}function Xi(e,n){return Fe(e)?e:new Ou(e,n)}class Ou{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:he(n),this._value=s?n:Ls(n)}get value(){return ur(this),this._value}set value(n){const s=this.__v_isShallow||Ea(n)||bn(n);n=s?n:he(n),Bs(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:Ls(n),pr(this,n))}}function _(e){return Fe(e)?e.value:e}const Nu={get:(e,n,s)=>_(Reflect.get(e,n,s)),set:(e,n,s,a)=>{const o=e[n];return Fe(o)&&!Fe(s)?(o.value=s,!0):Reflect.set(e,n,s,a)}};function Qi(e){return Pn(e)?e:new Proxy(e,Nu)}class Hu{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:a}=n(()=>ur(this),()=>pr(this));this._get=s,this._set=a}get value(){return this._get()}set value(n){this._set(n)}}function ec(e){return new Hu(e)}function Bu(e){Sa(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=le(e)?new Array(e.length):{};for(const s in e)n[s]=zu(e,s);return n}class Lu{constructor(n,s,a){this._object=n,this._key=s,this._defaultValue=a,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function zu(e,n,s){const a=e[n];return Fe(a)?a:new Lu(e,n,s)}var tc;class Ru{constructor(n,s,a,o){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[tc]=!1,this._dirty=!0,this.effect=new lr(n,()=>{this._dirty||(this._dirty=!0,pr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=a}get value(){const n=he(this);return ur(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}tc="__v_isReadonly";function Ku(e,n,s=!1){let a,o;const r=ce(e);r?(a=e,o=()=>{console.warn("Write operation failed: computed value is readonly")}):(a=e.get,o=e.set);const l=new Ru(a,o,r||!o,s);return n&&!s&&(l.effect.onTrack=n.onTrack,l.effect.onTrigger=n.onTrigger),l}const On=[];function fa(e){On.push(e)}function ga(){On.pop()}function $(e,...n){Un();const s=On.length?On[On.length-1].component:null,a=s&&s.appContext.config.warnHandler,o=qu();if(a)en(a,s,11,[e+n.join(""),s&&s.proxy,o.map(({vnode:r})=>`at <${eo(s,r.type)}>`).join(`
`),o]);else{const r=[`[Vue warn]: ${e}`,...n];o.length&&r.push(`
`,...Ju(o)),console.warn(...r)}Gn()}function qu(){let e=On[On.length-1];if(!e)return[];const n=[];for(;e;){const s=n[0];s&&s.vnode===e?s.recurseCount++:n.push({vnode:e,recurseCount:0});const a=e.component&&e.component.parent;e=a&&a.vnode}return n}function Ju(e){const n=[];return e.forEach((s,a)=>{n.push(...a===0?[]:[`
`],...Wu(s))}),n}function Wu({vnode:e,recurseCount:n}){const s=n>0?`... (${n} recursive calls)`:"",a=e.component?e.component.parent==null:!1,o=` at <${eo(e.component,e.type,a)}`,r=">"+s;return e.props?[o,...Vu(e.props),r]:[o+r]}function Vu(e){const n=[],s=Object.keys(e);return s.slice(0,3).forEach(a=>{n.push(...nc(a,e[a]))}),s.length>3&&n.push(" ..."),n}function nc(e,n,s){return De(n)?(n=JSON.stringify(n),s?n:[`${e}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?s?n:[`${e}=${n}`]:Fe(n)?(n=nc(e,he(n.value),!0),s?n:[`${e}=Ref<`,n,">"]):ce(n)?[`${e}=fn${n.name?`<${n.name}>`:""}`]:(n=he(n),s?n:[`${e}=`,n])}const hr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function en(e,n,s,a){let o;try{o=a?e(...a):e()}catch(r){Ja(r,n,s)}return o}function jt(e,n,s,a){if(ce(e)){const r=en(e,n,s,a);return r&&sr(r)&&r.catch(l=>{Ja(l,n,s)}),r}const o=[];for(let r=0;r<e.length;r++)o.push(jt(e[r],n,s,a));return o}function Ja(e,n,s,a=!0){const o=n?n.vnode:null;if(n){let r=n.parent;const l=n.proxy,i=hr[s];for(;r;){const d=r.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,l,i)===!1)return}r=r.parent}const c=n.appContext.config.errorHandler;if(c){en(c,null,10,[e,l,i]);return}}Uu(e,s,o,a)}function Uu(e,n,s,a=!0){{const o=hr[n];if(s&&fa(s),$(`Unhandled error${o?` during execution of ${o}`:""}`),s&&ga(),a)throw e;console.error(e)}}let zs=!1,ko=!1;const Qe=[];let Nt=0;const cs=[];let Ot=null,cn=0;const sc=Promise.resolve();let mr=null;const Gu=100;function At(e){const n=mr||sc;return e?n.then(this?e.bind(this):e):n}function Yu(e){let n=Nt+1,s=Qe.length;for(;n<s;){const a=n+s>>>1;Rs(Qe[a])<e?n=a+1:s=a}return n}function Wa(e){(!Qe.length||!Qe.includes(e,zs&&e.allowRecurse?Nt+1:Nt))&&(e.id==null?Qe.push(e):Qe.splice(Yu(e.id),0,e),ac())}function ac(){!zs&&!ko&&(ko=!0,mr=sc.then(lc))}function Zu(e){const n=Qe.indexOf(e);n>Nt&&Qe.splice(n,1)}function oc(e){le(e)?cs.push(...e):(!Ot||!Ot.includes(e,e.allowRecurse?cn+1:cn))&&cs.push(e),ac()}function al(e,n=zs?Nt+1:0){for(e=e||new Map;n<Qe.length;n++){const s=Qe[n];if(s&&s.pre){if(fr(e,s))continue;Qe.splice(n,1),n--,s()}}}function rc(e){if(cs.length){const n=[...new Set(cs)];if(cs.length=0,Ot){Ot.push(...n);return}for(Ot=n,e=e||new Map,Ot.sort((s,a)=>Rs(s)-Rs(a)),cn=0;cn<Ot.length;cn++)fr(e,Ot[cn])||Ot[cn]();Ot=null,cn=0}}const Rs=e=>e.id==null?1/0:e.id,Xu=(e,n)=>{const s=Rs(e)-Rs(n);if(s===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return s};function lc(e){ko=!1,zs=!0,e=e||new Map,Qe.sort(Xu);const n=s=>fr(e,s);try{for(Nt=0;Nt<Qe.length;Nt++){const s=Qe[Nt];if(s&&s.active!==!1){if(n(s))continue;en(s,null,14)}}}finally{Nt=0,Qe.length=0,rc(e),zs=!1,mr=null,(Qe.length||cs.length)&&lc(e)}}function fr(e,n){if(!e.has(n))e.set(n,1);else{const s=e.get(n);if(s>Gu){const a=n.ownerInstance,o=a&&Ws(a.type);return $(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(n,s+1)}}let fn=!1;const ss=new Set;Ni().__VUE_HMR_RUNTIME__={createRecord:so(ic),rerender:so(tp),reload:so(np)};const qn=new Map;function Qu(e){const n=e.type.__hmrId;let s=qn.get(n);s||(ic(n,e.type),s=qn.get(n)),s.instances.add(e)}function ep(e){qn.get(e.type.__hmrId).instances.delete(e)}function ic(e,n){return qn.has(e)?!1:(qn.set(e,{initialDef:Ms(n),instances:new Set}),!0)}function Ms(e){return Lc(e)?e.__vccOpts:e}function tp(e,n){const s=qn.get(e);s&&(s.initialDef.render=n,[...s.instances].forEach(a=>{n&&(a.render=n,Ms(a.type).render=n),a.renderCache=[],fn=!0,a.update(),fn=!1}))}function np(e,n){const s=qn.get(e);if(!s)return;n=Ms(n),ol(s.initialDef,n);const a=[...s.instances];for(const o of a){const r=Ms(o.type);ss.has(r)||(r!==s.initialDef&&ol(r,n),ss.add(r)),o.appContext.optionsCache.delete(o.type),o.ceReload?(ss.add(r),o.ceReload(n.styles),ss.delete(r)):o.parent?Wa(o.parent.update):o.appContext.reload?o.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}oc(()=>{for(const o of a)ss.delete(Ms(o.type))})}function ol(e,n){ze(e,n);for(const s in e)s!=="__file"&&!(s in n)&&delete e[s]}function so(e){return(n,s)=>{try{return e(n,s)}catch(a){console.error(a),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Ht,js=[],Co=!1;function ea(e,...n){Ht?Ht.emit(e,...n):Co||js.push({event:e,args:n})}function cc(e,n){var s,a;Ht=e,Ht?(Ht.enabled=!0,js.forEach(({event:o,args:r})=>Ht.emit(o,...r)),js=[]):typeof window<"u"&&window.HTMLElement&&!(!((a=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||a===void 0)&&a.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{cc(r,n)}),setTimeout(()=>{Ht||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Co=!0,js=[])},3e3)):(Co=!0,js=[])}function sp(e,n){ea("app:init",e,n,{Fragment:Ce,Text:na,Comment:dt,Static:va})}function ap(e){ea("app:unmount",e)}const Eo=gr("component:added"),dc=gr("component:updated"),op=gr("component:removed"),rp=e=>{Ht&&typeof Ht.cleanupBuffer=="function"&&!Ht.cleanupBuffer(e)&&op(e)};function gr(e){return n=>{ea(e,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const lp=uc("perf:start"),ip=uc("perf:end");function uc(e){return(n,s,a)=>{ea(e,n.appContext.app,n.uid,n,s,a)}}function cp(e,n,s){ea("component:emit",e.appContext.app,e,n,s)}function dp(e,n,...s){if(e.isUnmounted)return;const a=e.vnode.props||Te;{const{emitsOptions:p,propsOptions:[u]}=e;if(p)if(!(n in p))(!u||!(En(n)in u))&&$(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${En(n)}" prop.`);else{const h=p[n];ce(h)&&(h(...s)||$(`Invalid event arguments: event validation failed for event "${n}".`))}}let o=s;const r=n.startsWith("update:"),l=r&&n.slice(7);if(l&&l in a){const p=`${l==="modelValue"?"model":l}Modifiers`,{number:u,trim:h}=a[p]||Te;h&&(o=s.map(g=>De(g)?g.trim():g)),u&&(o=s.map(ka))}cp(e,n,o);{const p=n.toLowerCase();p!==n&&a[En(p)]&&$(`Event "${p}" is emitted in component ${eo(e,e.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${tn(n)}" instead of "${n}".`)}let i,c=a[i=En(n)]||a[i=En(Rt(n))];!c&&r&&(c=a[i=En(tn(n))]),c&&jt(c,e,6,o);const d=a[i+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,jt(d,e,6,o)}}function pc(e,n,s=!1){const a=n.emitsCache,o=a.get(e);if(o!==void 0)return o;const r=e.emits;let l={},i=!1;if(!ce(e)){const c=d=>{const p=pc(d,n,!0);p&&(i=!0,ze(l,p))};!s&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!i?(Se(e)&&a.set(e,null),null):(le(r)?r.forEach(c=>l[c]=null):ze(l,r),Se(e)&&a.set(e,l),l)}function Va(e,n){return!e||!Qs(n)?!1:(n=n.slice(2).replace(/Once$/,""),ve(e,n[0].toLowerCase()+n.slice(1))||ve(e,tn(n))||ve(e,n))}let Je=null,Ua=null;function Ia(e){const n=Je;return Je=e,Ua=e&&e.type.__scopeId||null,n}function p4(e){Ua=e}function h4(){Ua=null}function K(e,n=Je,s){if(!n||e._n)return e;const a=(...o)=>{a._d&&yl(-1);const r=Ia(n);let l;try{l=e(...o)}finally{Ia(r),a._d&&yl(1)}return dc(n),l};return a._n=!0,a._c=!0,a._d=!0,a}let So=!1;function ja(){So=!0}function ao(e){const{type:n,vnode:s,proxy:a,withProxy:o,props:r,propsOptions:[l],slots:i,attrs:c,emit:d,render:p,renderCache:u,data:h,setupState:g,ctx:v,inheritAttrs:w}=e;let b,S;const k=Ia(e);So=!1;try{if(s.shapeFlag&4){const W=o||a;b=St(p.call(W,W,u,r,g,h,v)),S=c}else{const W=n;c===r&&ja(),b=St(W.length>1?W(r,{get attrs(){return ja(),c},slots:i,emit:d}):W(r,null)),S=n.props?c:pp(c)}}catch(W){Ds.length=0,Ja(W,e,1),b=Y(dt)}let E=b,T;if(b.patchFlag>0&&b.patchFlag&2048&&([E,T]=up(b)),S&&w!==!1){const W=Object.keys(S),{shapeFlag:q}=E;if(W.length){if(q&7)l&&W.some(_a)&&(S=hp(S,l)),E=sn(E,S);else if(!So&&E.type!==dt){const R=Object.keys(c),te=[],de=[];for(let fe=0,we=R.length;fe<we;fe++){const Ne=R[fe];Qs(Ne)?_a(Ne)||te.push(Ne[2].toLowerCase()+Ne.slice(3)):de.push(Ne)}de.length&&$(`Extraneous non-props attributes (${de.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),te.length&&$(`Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(rl(E)||$("Runtime directive used on component with non-element root node. The directives will not function as intended."),E=sn(E),E.dirs=E.dirs?E.dirs.concat(s.dirs):s.dirs),s.transition&&(rl(E)||$("Component inside <Transition> renders non-element root node that cannot be animated."),E.transition=s.transition),T?T(E):b=E,Ia(k),b}const up=e=>{const n=e.children,s=e.dynamicChildren,a=hc(n);if(!a)return[e,void 0];const o=n.indexOf(a),r=s?s.indexOf(a):-1,l=i=>{n[o]=i,s&&(r>-1?s[r]=i:i.patchFlag>0&&(e.dynamicChildren=[...s,i]))};return[St(a),l]};function hc(e){let n;for(let s=0;s<e.length;s++){const a=e[s];if(Jn(a)){if(a.type!==dt||a.children==="v-if"){if(n)return;n=a}}else return}return n}const pp=e=>{let n;for(const s in e)(s==="class"||s==="style"||Qs(s))&&((n||(n={}))[s]=e[s]);return n},hp=(e,n)=>{const s={};for(const a in e)(!_a(a)||!(a.slice(9)in n))&&(s[a]=e[a]);return s},rl=e=>e.shapeFlag&7||e.type===dt;function mp(e,n,s){const{props:a,children:o,component:r}=e,{props:l,children:i,patchFlag:c}=n,d=r.emitsOptions;if((o||i)&&fn||n.dirs||n.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return a?ll(a,l,d):!!l;if(c&8){const p=n.dynamicProps;for(let u=0;u<p.length;u++){const h=p[u];if(l[h]!==a[h]&&!Va(d,h))return!0}}}else return(o||i)&&(!i||!i.$stable)?!0:a===l?!1:a?l?ll(a,l,d):!0:!!l;return!1}function ll(e,n,s){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let o=0;o<a.length;o++){const r=a[o];if(n[r]!==e[r]&&!Va(s,r))return!0}return!1}function fp({vnode:e,parent:n},s){for(;n&&n.subTree===e;)(e=n.vnode).el=s,n=n.parent}const mc=e=>e.__isSuspense;function gp(e,n){n&&n.pendingBranch?le(e)?n.effects.push(...e):n.effects.push(e):oc(e)}function vt(e,n){if(!Ke)$("provide() can only be used inside setup().");else{let s=Ke.provides;const a=Ke.parent&&Ke.parent.provides;a===s&&(s=Ke.provides=Object.create(a)),s[e]=n}}function P(e,n,s=!1){const a=Ke||Je;if(a){const o=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return s&&ce(n)?n.call(a.proxy):n;$(`injection "${String(e)}" not found.`)}else $("inject() can only be used inside setup() or functional components.")}function gs(e,n){return vr(e,null,n)}const da={};function He(e,n,s){return ce(n)||$("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),vr(e,n,s)}function vr(e,n,{immediate:s,deep:a,flush:o,onTrack:r,onTrigger:l}=Te){n||(s!==void 0&&$('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),a!==void 0&&$('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const i=T=>{$("Invalid watch source: ",T,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Ke;let d,p=!1,u=!1;if(Fe(e)?(d=()=>e.value,p=Ea(e)):Pn(e)?(d=()=>e,a=!0):le(e)?(u=!0,p=e.some(T=>Pn(T)||Ea(T)),d=()=>e.map(T=>{if(Fe(T))return T.value;if(Pn(T))return Tn(T);if(ce(T))return en(T,c,2);i(T)})):ce(e)?n?d=()=>en(e,c,2):d=()=>{if(!(c&&c.isUnmounted))return h&&h(),jt(e,c,3,[g])}:(d=ct,i(e)),n&&a){const T=d;d=()=>Tn(T())}let h,g=T=>{h=k.onStop=()=>{en(T,c,4)}},v;if(Js)if(g=ct,n?s&&jt(n,c,3,[d(),u?[]:void 0,g]):d(),o==="sync"){const T=xh();v=T.__watcherHandles||(T.__watcherHandles=[])}else return ct;let w=u?new Array(e.length).fill(da):da;const b=()=>{if(k.active)if(n){const T=k.run();(a||p||(u?T.some((W,q)=>Bs(W,w[q])):Bs(T,w)))&&(h&&h(),jt(n,c,3,[T,w===da?void 0:u&&w[0]===da?[]:w,g]),w=T)}else k.run()};b.allowRecurse=!!n;let S;o==="sync"?S=b:o==="post"?S=()=>Ye(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),S=()=>Wa(b));const k=new lr(d,S);k.onTrack=r,k.onTrigger=l,n?s?b():w=k.run():o==="post"?Ye(k.run.bind(k),c&&c.suspense):k.run();const E=()=>{k.stop(),c&&c.scope&&tr(c.scope.effects,k)};return v&&v.push(E),E}function vp(e,n,s){const a=this.proxy,o=De(e)?e.includes(".")?fc(a,e):()=>a[e]:e.bind(a,a);let r;ce(n)?r=n:(r=n.handler,s=n);const l=Ke;hs(this);const i=vr(o,r.bind(a),s);return l?hs(l):Hn(),i}function fc(e,n){const s=n.split(".");return()=>{let a=e;for(let o=0;o<s.length&&a;o++)a=a[s[o]];return a}}function Tn(e,n){if(!Se(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Fe(e))Tn(e.value,n);else if(le(e))for(let s=0;s<e.length;s++)Tn(e[s],n);else if(Di(e)||$n(e))e.forEach(s=>{Tn(s,n)});else if(Oi(e))for(const s in e)Tn(e[s],n);return e}function gc(e,n){e.shapeFlag&6&&e.component?gc(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Oe(e){return ce(e)?{setup:e,name:e.name}:e}const ds=e=>!!e.type.__asyncLoader,yr=e=>e.type.__isKeepAlive,yp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const s=Fn(),a=s.ctx;if(!a.renderer)return()=>{const k=n.default&&n.default();return k&&k.length===1?k[0]:k};const o=new Map,r=new Set;let l=null;s.__v_cache=o;const i=s.suspense,{renderer:{p:c,m:d,um:p,o:{createElement:u}}}=a,h=u("div");a.activate=(k,E,T,W,q)=>{const R=k.component;d(k,E,T,0,i),c(R.vnode,k,E,T,R,i,W,k.slotScopeIds,q),Ye(()=>{R.isDeactivated=!1,R.a&&pn(R.a);const te=k.props&&k.props.onVnodeMounted;te&&xt(te,R.parent,k)},i),Eo(R)},a.deactivate=k=>{const E=k.component;d(k,h,null,1,i),Ye(()=>{E.da&&pn(E.da);const T=k.props&&k.props.onVnodeUnmounted;T&&xt(T,E.parent,k),E.isDeactivated=!0},i),Eo(E)};function g(k){oo(k),p(k,s,i,!0)}function v(k){o.forEach((E,T)=>{const W=Ws(E.type);W&&(!k||!k(W))&&w(T)})}function w(k){const E=o.get(k);!l||E.type!==l.type?g(E):l&&oo(l),o.delete(k),r.delete(k)}He(()=>[e.include,e.exclude],([k,E])=>{k&&v(T=>As(k,T)),E&&v(T=>!As(E,T))},{flush:"post",deep:!0});let b=null;const S=()=>{b!=null&&o.set(b,ro(s.subTree))};return Ya(S),wc(S),bc(()=>{o.forEach(k=>{const{subTree:E,suspense:T}=s,W=ro(E);if(k.type===W.type){oo(W);const q=W.component.da;q&&Ye(q,T);return}g(k)})}),()=>{if(b=null,!n.default)return null;const k=n.default(),E=k[0];if(k.length>1)return $("KeepAlive should contain exactly one component child."),l=null,k;if(!Jn(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return l=null,E;let T=ro(E);const W=T.type,q=Ws(ds(T)?T.type.__asyncResolved||{}:W),{include:R,exclude:te,max:de}=e;if(R&&(!q||!As(R,q))||te&&q&&As(te,q))return l=T,E;const fe=T.key==null?W:T.key,we=o.get(fe);return T.el&&(T=sn(T),E.shapeFlag&128&&(E.ssContent=T)),b=fe,we?(T.el=we.el,T.component=we.component,T.transition&&gc(T,T.transition),T.shapeFlag|=512,r.delete(fe),r.add(fe)):(r.add(fe),de&&r.size>parseInt(de,10)&&w(r.values().next().value)),T.shapeFlag|=256,l=T,mc(E.type)?E:T}}},vc=yp;function As(e,n){return le(e)?e.some(s=>As(s,n)):De(e)?e.split(",").includes(n):e.test?e.test(n):!1}function wp(e,n){yc(e,"a",n)}function bp(e,n){yc(e,"da",n)}function yc(e,n,s=Ke){const a=e.__wdc||(e.__wdc=()=>{let o=s;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ga(n,a,s),s){let o=s.parent;for(;o&&o.parent;)yr(o.parent.vnode)&&xp(a,n,s,o),o=o.parent}}function xp(e,n,s,a){const o=Ga(n,e,a,!0);Za(()=>{tr(a[n],o)},s)}function oo(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ro(e){return e.shapeFlag&128?e.ssContent:e}function Ga(e,n,s=Ke,a=!1){if(s){const o=s[e]||(s[e]=[]),r=n.__weh||(n.__weh=(...l)=>{if(s.isUnmounted)return;Un(),hs(s);const i=jt(n,s,e,l);return Hn(),Gn(),i});return a?o.unshift(r):o.push(r),r}else{const o=En(hr[e].replace(/ hook$/,""));$(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const an=e=>(n,s=Ke)=>(!Js||e==="sp")&&Ga(e,(...a)=>n(...a),s),_p=an("bm"),Ya=an("m"),Fp=an("bu"),wc=an("u"),bc=an("bum"),Za=an("um"),kp=an("sp"),Cp=an("rtg"),Ep=an("rtc");function Sp(e,n=Ke){Ga("ec",e,n)}function xc(e){su(e)&&$("Do not use built-in directive ids as custom directive id: "+e)}function Ks(e,n){const s=Je;if(s===null)return $("withDirectives can only be used inside render functions."),e;const a=Qa(s)||s.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[l,i,c,d=Te]=n[r];l&&(ce(l)&&(l={mounted:l,updated:l}),l.deep&&Tn(i),o.push({dir:l,instance:a,value:i,oldValue:void 0,arg:c,modifiers:d}))}return e}function kn(e,n,s,a){const o=e.dirs,r=n&&n.dirs;for(let l=0;l<o.length;l++){const i=o[l];r&&(i.oldValue=r[l].value);let c=i.dir[a];c&&(Un(),jt(c,s,8,[e.el,i,e,n]),Gn())}}const Io="components",Ip="directives";function jp(e,n){return _c(Io,e,!0,n)||e}const Ap=Symbol();function il(e){return _c(Ip,e)}function _c(e,n,s=!0,a=!1){const o=Je||Ke;if(o){const r=o.type;if(e===Io){const i=Ws(r,!1);if(i&&(i===n||i===Rt(n)||i===Kn(Rt(n))))return r}const l=cl(o[e]||r[e],n)||cl(o.appContext[e],n);if(!l&&a)return r;if(s&&!l){const i=e===Io?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";$(`Failed to resolve ${e.slice(0,-1)}: ${n}${i}`)}return l}else $(`resolve${Kn(e.slice(0,-1))} can only be used in render() or setup().`)}function cl(e,n){return e&&(e[n]||e[Rt(n)]||e[Kn(Rt(n))])}function ta(e,n,s,a){let o;const r=s&&s[a];if(le(e)||De(e)){o=new Array(e.length);for(let l=0,i=e.length;l<i;l++)o[l]=n(e[l],l,void 0,r&&r[l])}else if(typeof e=="number"){Number.isInteger(e)||$(`The v-for range expect an integer value but got ${e}.`),o=new Array(e);for(let l=0;l<e;l++)o[l]=n(l+1,l,void 0,r&&r[l])}else if(Se(e))if(e[Symbol.iterator])o=Array.from(e,(l,i)=>n(l,i,void 0,r&&r[i]));else{const l=Object.keys(e);o=new Array(l.length);for(let i=0,c=l.length;i<c;i++){const d=l[i];o[i]=n(e[d],d,i,r&&r[i])}}else o=[];return s&&(s[a]=o),o}function Tt(e,n,s={},a,o){if(Je.isCE||Je.parent&&ds(Je.parent)&&Je.parent.isCE)return n!=="default"&&(s.name=n),Y("slot",s,a&&a());let r=e[n];r&&r.length>1&&($("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),x();const l=r&&Fc(r(s)),i=H(Ce,{key:s.key||l&&l.key||`_${n}`},l||(a?a():[]),l&&e._===1?64:-2);return!o&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function Fc(e){return e.some(n=>Jn(n)?!(n.type===dt||n.type===Ce&&!Fc(n.children)):!0)?e:null}const jo=e=>e?Nc(e)?Qa(e)||e.proxy:jo(e.parent):null,Nn=ze(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>rs(e.props),$attrs:e=>rs(e.attrs),$slots:e=>rs(e.slots),$refs:e=>rs(e.refs),$parent:e=>jo(e.parent),$root:e=>jo(e.root),$emit:e=>e.emit,$options:e=>br(e),$forceUpdate:e=>e.f||(e.f=()=>Wa(e.update)),$nextTick:e=>e.n||(e.n=At.bind(e.proxy)),$watch:e=>vp.bind(e)}),wr=e=>e==="_"||e==="$",lo=(e,n)=>e!==Te&&!e.__isScriptSetup&&ve(e,n),kc={get({_:e},n){const{ctx:s,setupState:a,data:o,props:r,accessCache:l,type:i,appContext:c}=e;if(n==="__isVue")return!0;let d;if(n[0]!=="$"){const g=l[n];if(g!==void 0)switch(g){case 1:return a[n];case 2:return o[n];case 4:return s[n];case 3:return r[n]}else{if(lo(a,n))return l[n]=1,a[n];if(o!==Te&&ve(o,n))return l[n]=2,o[n];if((d=e.propsOptions[0])&&ve(d,n))return l[n]=3,r[n];if(s!==Te&&ve(s,n))return l[n]=4,s[n];Ao&&(l[n]=0)}}const p=Nn[n];let u,h;if(p)return n==="$attrs"&&(wt(e,"get",n),ja()),p(e);if((u=i.__cssModules)&&(u=u[n]))return u;if(s!==Te&&ve(s,n))return l[n]=4,s[n];if(h=c.config.globalProperties,ve(h,n))return h[n];Je&&(!De(n)||n.indexOf("__v")!==0)&&(o!==Te&&wr(n[0])&&ve(o,n)?$(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Je&&$(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:e},n,s){const{data:a,setupState:o,ctx:r}=e;return lo(o,n)?(o[n]=s,!0):o.__isScriptSetup&&ve(o,n)?($(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):a!==Te&&ve(a,n)?(a[n]=s,!0):ve(e.props,n)?($(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in e?($(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in e.appContext.config.globalProperties?Object.defineProperty(r,n,{enumerable:!0,configurable:!0,value:s}):r[n]=s,!0)},has({_:{data:e,setupState:n,accessCache:s,ctx:a,appContext:o,propsOptions:r}},l){let i;return!!s[l]||e!==Te&&ve(e,l)||lo(n,l)||(i=r[0])&&ve(i,l)||ve(a,l)||ve(Nn,l)||ve(o.config.globalProperties,l)},defineProperty(e,n,s){return s.get!=null?e._.accessCache[n]=0:ve(s,"value")&&this.set(e,n,s.value,null),Reflect.defineProperty(e,n,s)}};kc.ownKeys=e=>($("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Tp(e){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(Nn).forEach(s=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,get:()=>Nn[s](e),set:ct})}),n}function Mp(e){const{ctx:n,propsOptions:[s]}=e;s&&Object.keys(s).forEach(a=>{Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>e.props[a],set:ct})})}function $p(e){const{ctx:n,setupState:s}=e;Object.keys(he(s)).forEach(a=>{if(!s.__isScriptSetup){if(wr(a[0])){$(`setup() return property ${JSON.stringify(a)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>s[a],set:ct})}})}function Dp(){const e=Object.create(null);return(n,s)=>{e[s]?$(`${n} property "${s}" is already defined in ${e[s]}.`):e[s]=n}}let Ao=!0;function Pp(e){const n=br(e),s=e.proxy,a=e.ctx;Ao=!1,n.beforeCreate&&dl(n.beforeCreate,e,"bc");const{data:o,computed:r,methods:l,watch:i,provide:c,inject:d,created:p,beforeMount:u,mounted:h,beforeUpdate:g,updated:v,activated:w,deactivated:b,beforeDestroy:S,beforeUnmount:k,destroyed:E,unmounted:T,render:W,renderTracked:q,renderTriggered:R,errorCaptured:te,serverPrefetch:de,expose:fe,inheritAttrs:we,components:Ne,directives:Ue,filters:Ge}=n,Ie=Dp();{const[V]=e.propsOptions;if(V)for(const re in V)Ie("Props",re)}if(d&&Op(d,a,Ie,e.appContext.config.unwrapInjectedRef),l)for(const V in l){const re=l[V];ce(re)?(Object.defineProperty(a,V,{value:re.bind(s),configurable:!0,enumerable:!0,writable:!0}),Ie("Methods",V)):$(`Method "${V}" has type "${typeof re}" in the component definition. Did you reference the function correctly?`)}if(o){ce(o)||$("The data option must be a function. Plain object usage is no longer supported.");const V=o.call(s,s);if(sr(V)&&$("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Se(V))$("data() should return an object.");else{e.data=Ze(V);for(const re in V)Ie("Data",re),wr(re[0])||Object.defineProperty(a,re,{configurable:!0,enumerable:!0,get:()=>V[re],set:ct})}}if(Ao=!0,r)for(const V in r){const re=r[V],me=ce(re)?re.bind(s,s):ce(re.get)?re.get.bind(s,s):ct;me===ct&&$(`Computed property "${V}" has no getter.`);const je=!ce(re)&&ce(re.set)?re.set.bind(s):()=>{$(`Write operation failed: computed property "${V}" is readonly.`)},ht=A({get:me,set:je});Object.defineProperty(a,V,{enumerable:!0,configurable:!0,get:()=>ht.value,set:Xe=>ht.value=Xe}),Ie("Computed",V)}if(i)for(const V in i)Cc(i[V],a,s,V);if(c){const V=ce(c)?c.call(s):c;Reflect.ownKeys(V).forEach(re=>{vt(re,V[re])})}p&&dl(p,e,"c");function Pe(V,re){le(re)?re.forEach(me=>V(me.bind(s))):re&&V(re.bind(s))}if(Pe(_p,u),Pe(Ya,h),Pe(Fp,g),Pe(wc,v),Pe(wp,w),Pe(bp,b),Pe(Sp,te),Pe(Ep,q),Pe(Cp,R),Pe(bc,k),Pe(Za,T),Pe(kp,de),le(fe))if(fe.length){const V=e.exposed||(e.exposed={});fe.forEach(re=>{Object.defineProperty(V,re,{get:()=>s[re],set:me=>s[re]=me})})}else e.exposed||(e.exposed={});W&&e.render===ct&&(e.render=W),we!=null&&(e.inheritAttrs=we),Ne&&(e.components=Ne),Ue&&(e.directives=Ue)}function Op(e,n,s=ct,a=!1){le(e)&&(e=To(e));for(const o in e){const r=e[o];let l;Se(r)?"default"in r?l=P(r.from||o,r.default,!0):l=P(r.from||o):l=P(r),Fe(l)?a?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>l.value,set:i=>l.value=i}):($(`injected property "${o}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),n[o]=l):n[o]=l,s("Inject",o)}}function dl(e,n,s){jt(le(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,s)}function Cc(e,n,s,a){const o=a.includes(".")?fc(s,a):()=>s[a];if(De(e)){const r=n[e];ce(r)?He(o,r):$(`Invalid watch handler specified by key "${e}"`,r)}else if(ce(e))He(o,e.bind(s));else if(Se(e))if(le(e))e.forEach(r=>Cc(r,n,s,a));else{const r=ce(e.handler)?e.handler.bind(s):n[e.handler];ce(r)?He(o,r,e):$(`Invalid watch handler specified by key "${e.handler}"`,r)}else $(`Invalid watch option: "${a}"`,e)}function br(e){const n=e.type,{mixins:s,extends:a}=n,{mixins:o,optionsCache:r,config:{optionMergeStrategies:l}}=e.appContext,i=r.get(n);let c;return i?c=i:!o.length&&!s&&!a?c=n:(c={},o.length&&o.forEach(d=>Aa(c,d,l,!0)),Aa(c,n,l)),Se(n)&&r.set(n,c),c}function Aa(e,n,s,a=!1){const{mixins:o,extends:r}=n;r&&Aa(e,r,s,!0),o&&o.forEach(l=>Aa(e,l,s,!0));for(const l in n)if(a&&l==="expose")$('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=Np[l]||s&&s[l];e[l]=i?i(e[l],n[l]):n[l]}return e}const Np={data:ul,props:Sn,emits:Sn,methods:Sn,computed:Sn,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:Sn,directives:Sn,watch:Bp,provide:ul,inject:Hp};function ul(e,n){return n?e?function(){return ze(ce(e)?e.call(this,this):e,ce(n)?n.call(this,this):n)}:n:e}function Hp(e,n){return Sn(To(e),To(n))}function To(e){if(le(e)){const n={};for(let s=0;s<e.length;s++)n[e[s]]=e[s];return n}return e}function st(e,n){return e?[...new Set([].concat(e,n))]:n}function Sn(e,n){return e?ze(ze(Object.create(null),e),n):n}function Bp(e,n){if(!e)return n;if(!n)return e;const s=ze(Object.create(null),e);for(const a in n)s[a]=st(e[a],n[a]);return s}function Lp(e,n,s,a=!1){const o={},r={};Fa(r,Xa,1),e.propsDefaults=Object.create(null),Ec(e,n,o,r);for(const l in e.propsOptions[0])l in o||(o[l]=void 0);Ic(n||{},o,e),s?e.props=a?o:Pu(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function zp(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function Rp(e,n,s,a){const{props:o,attrs:r,vnode:{patchFlag:l}}=e,i=he(o),[c]=e.propsOptions;let d=!1;if(!zp(e)&&(a||l>0)&&!(l&16)){if(l&8){const p=e.vnode.dynamicProps;for(let u=0;u<p.length;u++){let h=p[u];if(Va(e.emitsOptions,h))continue;const g=n[h];if(c)if(ve(r,h))g!==r[h]&&(r[h]=g,d=!0);else{const v=Rt(h);o[v]=Mo(c,i,v,g,e,!1)}else g!==r[h]&&(r[h]=g,d=!0)}}}else{Ec(e,n,o,r)&&(d=!0);let p;for(const u in i)(!n||!ve(n,u)&&((p=tn(u))===u||!ve(n,p)))&&(c?s&&(s[u]!==void 0||s[p]!==void 0)&&(o[u]=Mo(c,i,u,void 0,e,!0)):delete o[u]);if(r!==i)for(const u in r)(!n||!ve(n,u))&&(delete r[u],d=!0)}d&&nn(e,"set","$attrs"),Ic(n||{},o,e)}function Ec(e,n,s,a){const[o,r]=e.propsOptions;let l=!1,i;if(n)for(let c in n){if(ma(c))continue;const d=n[c];let p;o&&ve(o,p=Rt(c))?!r||!r.includes(p)?s[p]=d:(i||(i={}))[p]=d:Va(e.emitsOptions,c)||(!(c in a)||d!==a[c])&&(a[c]=d,l=!0)}if(r){const c=he(s),d=i||Te;for(let p=0;p<r.length;p++){const u=r[p];s[u]=Mo(o,c,u,d[u],e,!ve(d,u))}}return l}function Mo(e,n,s,a,o,r){const l=e[s];if(l!=null){const i=ve(l,"default");if(i&&a===void 0){const c=l.default;if(l.type!==Function&&ce(c)){const{propsDefaults:d}=o;s in d?a=d[s]:(hs(o),a=d[s]=c.call(null,n),Hn())}else a=c}l[0]&&(r&&!i?a=!1:l[1]&&(a===""||a===tn(s))&&(a=!0))}return a}function Sc(e,n,s=!1){const a=n.propsCache,o=a.get(e);if(o)return o;const r=e.props,l={},i=[];let c=!1;if(!ce(e)){const p=u=>{c=!0;const[h,g]=Sc(u,n,!0);ze(l,h),g&&i.push(...g)};!s&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!r&&!c)return Se(e)&&a.set(e,is),is;if(le(r))for(let p=0;p<r.length;p++){De(r[p])||$("props must be strings when using array syntax.",r[p]);const u=Rt(r[p]);pl(u)&&(l[u]=Te)}else if(r){Se(r)||$("invalid props options",r);for(const p in r){const u=Rt(p);if(pl(u)){const h=r[p],g=l[u]=le(h)||ce(h)?{type:h}:Object.assign({},h);if(g){const v=ml(Boolean,g.type),w=ml(String,g.type);g[0]=v>-1,g[1]=w<0||v<w,(v>-1||ve(g,"default"))&&i.push(u)}}}}const d=[l,i];return Se(e)&&a.set(e,d),d}function pl(e){return e[0]!=="$"?!0:($(`Invalid prop name: "${e}" is a reserved property.`),!1)}function $o(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function hl(e,n){return $o(e)===$o(n)}function ml(e,n){return le(n)?n.findIndex(s=>hl(s,e)):ce(n)&&hl(n,e)?0:-1}function Ic(e,n,s){const a=he(n),o=s.propsOptions[0];for(const r in o){let l=o[r];l!=null&&Kp(r,a[r],l,!ve(e,r)&&!ve(e,tn(r)))}}function Kp(e,n,s,a){const{type:o,required:r,validator:l}=s;if(r&&a){$('Missing required prop: "'+e+'"');return}if(!(n==null&&!s.required)){if(o!=null&&o!==!0){let i=!1;const c=le(o)?o:[o],d=[];for(let p=0;p<c.length&&!i;p++){const{valid:u,expectedType:h}=Jp(n,c[p]);d.push(h||""),i=u}if(!i){$(Wp(e,n,d));return}}l&&!l(n)&&$('Invalid prop: custom validator check failed for prop "'+e+'".')}}const qp=_n("String,Number,Boolean,Function,Symbol,BigInt");function Jp(e,n){let s;const a=$o(n);if(qp(a)){const o=typeof e;s=o===a.toLowerCase(),!s&&o==="object"&&(s=e instanceof n)}else a==="Object"?s=Se(e):a==="Array"?s=le(e):a==="null"?s=e===null:s=e instanceof n;return{valid:s,expectedType:a}}function Wp(e,n,s){let a=`Invalid prop: type check failed for prop "${e}". Expected ${s.map(Kn).join(" | ")}`;const o=s[0],r=ar(n),l=fl(n,o),i=fl(n,r);return s.length===1&&gl(o)&&!Vp(o,r)&&(a+=` with value ${l}`),a+=`, got ${r} `,gl(r)&&(a+=`with value ${i}.`),a}function fl(e,n){return n==="String"?`"${e}"`:n==="Number"?`${Number(e)}`:`${e}`}function gl(e){return["string","number","boolean"].some(s=>e.toLowerCase()===s)}function Vp(...e){return e.some(n=>n.toLowerCase()==="boolean")}const jc=e=>e[0]==="_"||e==="$stable",xr=e=>le(e)?e.map(St):[St(e)],Up=(e,n,s)=>{if(n._n)return n;const a=K((...o)=>(Ke&&$(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),xr(n(...o))),s);return a._c=!1,a},Ac=(e,n,s)=>{const a=e._ctx;for(const o in e){if(jc(o))continue;const r=e[o];if(ce(r))n[o]=Up(o,r,a);else if(r!=null){$(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);const l=xr(r);n[o]=()=>l}}},Tc=(e,n)=>{yr(e.vnode)||$("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=xr(n);e.slots.default=()=>s},Gp=(e,n)=>{if(e.vnode.shapeFlag&32){const s=n._;s?(e.slots=he(n),Fa(n,"_",s)):Ac(n,e.slots={})}else e.slots={},n&&Tc(e,n);Fa(e.slots,Xa,1)},Yp=(e,n,s)=>{const{vnode:a,slots:o}=e;let r=!0,l=Te;if(a.shapeFlag&32){const i=n._;i?fn?ze(o,n):s&&i===1?r=!1:(ze(o,n),!s&&i===1&&delete o._):(r=!n.$stable,Ac(n,o)),l=n}else n&&(Tc(e,n),l={default:1});if(r)for(const i in o)!jc(i)&&!(i in l)&&delete o[i]};function Mc(){return{app:null,config:{isNativeTag:$i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zp=0;function Xp(e,n){return function(a,o=null){ce(a)||(a=Object.assign({},a)),o!=null&&!Se(o)&&($("root props passed to app.mount() must be an object."),o=null);const r=Mc(),l=new Set;let i=!1;const c=r.app={_uid:Zp++,_component:a,_props:o,_container:null,_context:r,_instance:null,version:bl,get config(){return r.config},set config(d){$("app.config cannot be replaced. Modify individual options instead.")},use(d,...p){return l.has(d)?$("Plugin has already been applied to target app."):d&&ce(d.install)?(l.add(d),d.install(c,...p)):ce(d)?(l.add(d),d(c,...p)):$('A plugin must either be a function or an object with an "install" function.'),c},mixin(d){return r.mixins.includes(d)?$("Mixin has already been applied to target app"+(d.name?`: ${d.name}`:"")):r.mixins.push(d),c},component(d,p){return Oo(d,r.config),p?(r.components[d]&&$(`Component "${d}" has already been registered in target app.`),r.components[d]=p,c):r.components[d]},directive(d,p){return xc(d),p?(r.directives[d]&&$(`Directive "${d}" has already been registered in target app.`),r.directives[d]=p,c):r.directives[d]},mount(d,p,u){if(i)$("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{d.__vue_app__&&$("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=Y(a,o);return h.appContext=r,r.reload=()=>{e(sn(h),d,u)},p&&n?n(h,d):e(h,d,u),i=!0,c._container=d,d.__vue_app__=c,c._instance=h.component,sp(c,bl),Qa(h.component)||h.component.proxy}},unmount(){i?(e(null,c._container),c._instance=null,ap(c),delete c._container.__vue_app__):$("Cannot unmount an app that is not mounted.")},provide(d,p){return d in r.provides&&$(`App already provides property with key "${String(d)}". It will be overwritten with the new value.`),r.provides[d]=p,c}};return c}}function Do(e,n,s,a,o=!1){if(le(e)){e.forEach((h,g)=>Do(h,n&&(le(n)?n[g]:n),s,a,o));return}if(ds(a)&&!o)return;const r=a.shapeFlag&4?Qa(a.component)||a.component.proxy:a.el,l=o?null:r,{i,r:c}=e;if(!i){$("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const d=n&&n.r,p=i.refs===Te?i.refs={}:i.refs,u=i.setupState;if(d!=null&&d!==c&&(De(d)?(p[d]=null,ve(u,d)&&(u[d]=null)):Fe(d)&&(d.value=null)),ce(c))en(c,i,12,[l,p]);else{const h=De(c),g=Fe(c);if(h||g){const v=()=>{if(e.f){const w=h?ve(u,c)?u[c]:p[c]:c.value;o?le(w)&&tr(w,r):le(w)?w.includes(r)||w.push(r):h?(p[c]=[r],ve(u,c)&&(u[c]=p[c])):(c.value=[r],e.k&&(p[e.k]=c.value))}else h?(p[c]=l,ve(u,c)&&(u[c]=l)):g?(c.value=l,e.k&&(p[e.k]=l)):$("Invalid template ref type:",c,`(${typeof c})`)};l?(v.id=-1,Ye(v,s)):v()}else $("Invalid template ref type:",c,`(${typeof c})`)}}let ws,hn;function Vt(e,n){e.appContext.config.performance&&Ta()&&hn.mark(`vue-${n}-${e.uid}`),lp(e,n,Ta()?hn.now():Date.now())}function Ut(e,n){if(e.appContext.config.performance&&Ta()){const s=`vue-${n}-${e.uid}`,a=s+":end";hn.mark(a),hn.measure(`<${eo(e,e.type)}> ${n}`,s,a),hn.clearMarks(s),hn.clearMarks(a)}ip(e,n,Ta()?hn.now():Date.now())}function Ta(){return ws!==void 0||(typeof window<"u"&&window.performance?(ws=!0,hn=window.performance):ws=!1),ws}function Qp(){const e=[];if(e.length){const n=e.length>1;console.warn(`Feature flag${n?"s":""} ${e.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Ye=gp;function eh(e){return th(e)}function th(e,n){Qp();const s=Ni();s.__VUE__=!0,cc(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:a,remove:o,patchProp:r,createElement:l,createText:i,createComment:c,setText:d,setElementText:p,parentNode:u,nextSibling:h,setScopeId:g=ct,insertStaticContent:v}=e,w=(m,y,F,j=null,I=null,O=null,J=!1,D=null,N=fn?!1:!!y.dynamicChildren)=>{if(m===y)return;m&&!bs(m,y)&&(j=Z(m),it(m,I,O,!0),m=null),y.patchFlag===-2&&(N=!1,y.dynamicChildren=null);const{type:M,ref:ee,shapeFlag:X}=y;switch(M){case na:b(m,y,F,j);break;case dt:S(m,y,F,j);break;case va:m==null?k(y,F,j,J):E(m,y,F,J);break;case Ce:Ue(m,y,F,j,I,O,J,D,N);break;default:X&1?q(m,y,F,j,I,O,J,D,N):X&6?Ge(m,y,F,j,I,O,J,D,N):X&64||X&128?M.process(m,y,F,j,I,O,J,D,N,be):$("Invalid VNode type:",M,`(${typeof M})`)}ee!=null&&I&&Do(ee,m&&m.ref,O,y||m,!y)},b=(m,y,F,j)=>{if(m==null)a(y.el=i(y.children),F,j);else{const I=y.el=m.el;y.children!==m.children&&d(I,y.children)}},S=(m,y,F,j)=>{m==null?a(y.el=c(y.children||""),F,j):y.el=m.el},k=(m,y,F,j)=>{[m.el,m.anchor]=v(m.children,y,F,j,m.el,m.anchor)},E=(m,y,F,j)=>{if(y.children!==m.children){const I=h(m.anchor);W(m),[y.el,y.anchor]=v(y.children,F,I,j)}else y.el=m.el,y.anchor=m.anchor},T=({el:m,anchor:y},F,j)=>{let I;for(;m&&m!==y;)I=h(m),a(m,F,j),m=I;a(y,F,j)},W=({el:m,anchor:y})=>{let F;for(;m&&m!==y;)F=h(m),o(m),m=F;o(y)},q=(m,y,F,j,I,O,J,D,N)=>{J=J||y.type==="svg",m==null?R(y,F,j,I,O,J,D,N):fe(m,y,I,O,J,D,N)},R=(m,y,F,j,I,O,J,D)=>{let N,M;const{type:ee,props:X,shapeFlag:se,transition:pe,dirs:ye}=m;if(N=m.el=l(m.type,O,X&&X.is,X),se&8?p(N,m.children):se&16&&de(m.children,N,null,j,I,O&&ee!=="foreignObject",J,D),ye&&kn(m,null,j,"created"),X){for(const Ae in X)Ae!=="value"&&!ma(Ae)&&r(N,Ae,null,X[Ae],O,m.children,j,I,B);"value"in X&&r(N,"value",null,X.value),(M=X.onVnodeBeforeMount)&&xt(M,j,m)}te(N,m,m.scopeId,J,j),Object.defineProperty(N,"__vnode",{value:m,enumerable:!1}),Object.defineProperty(N,"__vueParentComponent",{value:j,enumerable:!1}),ye&&kn(m,null,j,"beforeMount");const Me=(!I||I&&!I.pendingBranch)&&pe&&!pe.persisted;Me&&pe.beforeEnter(N),a(N,y,F),((M=X&&X.onVnodeMounted)||Me||ye)&&Ye(()=>{M&&xt(M,j,m),Me&&pe.enter(N),ye&&kn(m,null,j,"mounted")},I)},te=(m,y,F,j,I)=>{if(F&&g(m,F),j)for(let O=0;O<j.length;O++)g(m,j[O]);if(I){let O=I.subTree;if(O.patchFlag>0&&O.patchFlag&2048&&(O=hc(O.children)||O),y===O){const J=I.vnode;te(m,J,J.scopeId,J.slotScopeIds,I.parent)}}},de=(m,y,F,j,I,O,J,D,N=0)=>{for(let M=N;M<m.length;M++){const ee=m[M]=D?dn(m[M]):St(m[M]);w(null,ee,y,F,j,I,O,J,D)}},fe=(m,y,F,j,I,O,J)=>{const D=y.el=m.el;let{patchFlag:N,dynamicChildren:M,dirs:ee}=y;N|=m.patchFlag&16;const X=m.props||Te,se=y.props||Te;let pe;F&&Cn(F,!1),(pe=se.onVnodeBeforeUpdate)&&xt(pe,F,y,m),ee&&kn(y,m,F,"beforeUpdate"),F&&Cn(F,!0),fn&&(N=0,J=!1,M=null);const ye=I&&y.type!=="foreignObject";if(M?(we(m.dynamicChildren,M,D,F,j,ye,O),F&&F.type.__hmrId&&$s(m,y)):J||me(m,y,D,null,F,j,ye,O,!1),N>0){if(N&16)Ne(D,y,X,se,F,j,I);else if(N&2&&X.class!==se.class&&r(D,"class",null,se.class,I),N&4&&r(D,"style",X.style,se.style,I),N&8){const Me=y.dynamicProps;for(let Ae=0;Ae<Me.length;Ae++){const Le=Me[Ae],kt=X[Le],Xn=se[Le];(Xn!==kt||Le==="value")&&r(D,Le,kt,Xn,I,m.children,F,j,B)}}N&1&&m.children!==y.children&&p(D,y.children)}else!J&&M==null&&Ne(D,y,X,se,F,j,I);((pe=se.onVnodeUpdated)||ee)&&Ye(()=>{pe&&xt(pe,F,y,m),ee&&kn(y,m,F,"updated")},j)},we=(m,y,F,j,I,O,J)=>{for(let D=0;D<y.length;D++){const N=m[D],M=y[D],ee=N.el&&(N.type===Ce||!bs(N,M)||N.shapeFlag&70)?u(N.el):F;w(N,M,ee,null,j,I,O,J,!0)}},Ne=(m,y,F,j,I,O,J)=>{if(F!==j){if(F!==Te)for(const D in F)!ma(D)&&!(D in j)&&r(m,D,F[D],null,J,y.children,I,O,B);for(const D in j){if(ma(D))continue;const N=j[D],M=F[D];N!==M&&D!=="value"&&r(m,D,M,N,J,y.children,I,O,B)}"value"in j&&r(m,"value",F.value,j.value)}},Ue=(m,y,F,j,I,O,J,D,N)=>{const M=y.el=m?m.el:i(""),ee=y.anchor=m?m.anchor:i("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:pe}=y;(fn||X&2048)&&(X=0,N=!1,se=null),pe&&(D=D?D.concat(pe):pe),m==null?(a(M,F,j),a(ee,F,j),de(y.children,F,ee,I,O,J,D,N)):X>0&&X&64&&se&&m.dynamicChildren?(we(m.dynamicChildren,se,F,I,O,J,D),I&&I.type.__hmrId?$s(m,y):(y.key!=null||I&&y===I.subTree)&&$s(m,y,!0)):me(m,y,F,ee,I,O,J,D,N)},Ge=(m,y,F,j,I,O,J,D,N)=>{y.slotScopeIds=D,m==null?y.shapeFlag&512?I.ctx.activate(y,F,j,J,N):Ie(y,F,j,I,O,J,N):Pe(m,y,N)},Ie=(m,y,F,j,I,O,J)=>{const D=m.component=uh(m,j,I);if(D.type.__hmrId&&Qu(D),fa(m),Vt(D,"mount"),yr(m)&&(D.ctx.renderer=be),Vt(D,"init"),hh(D),Ut(D,"init"),D.asyncDep){if(I&&I.registerDep(D,V),!m.el){const N=D.subTree=Y(dt);S(null,N,y,F)}return}V(D,m,y,F,I,O,J),ga(),Ut(D,"mount")},Pe=(m,y,F)=>{const j=y.component=m.component;if(mp(m,y,F))if(j.asyncDep&&!j.asyncResolved){fa(y),re(j,y,F),ga();return}else j.next=y,Zu(j.update),j.update();else y.el=m.el,j.vnode=y},V=(m,y,F,j,I,O,J)=>{const D=()=>{if(m.isMounted){let{next:ee,bu:X,u:se,parent:pe,vnode:ye}=m,Me=ee,Ae;fa(ee||m.vnode),Cn(m,!1),ee?(ee.el=ye.el,re(m,ee,J)):ee=ye,X&&pn(X),(Ae=ee.props&&ee.props.onVnodeBeforeUpdate)&&xt(Ae,pe,ee,ye),Cn(m,!0),Vt(m,"render");const Le=ao(m);Ut(m,"render");const kt=m.subTree;m.subTree=Le,Vt(m,"patch"),w(kt,Le,u(kt.el),Z(kt),m,I,O),Ut(m,"patch"),ee.el=Le.el,Me===null&&fp(m,Le.el),se&&Ye(se,I),(Ae=ee.props&&ee.props.onVnodeUpdated)&&Ye(()=>xt(Ae,pe,ee,ye),I),dc(m),ga()}else{let ee;const{el:X,props:se}=y,{bm:pe,m:ye,parent:Me}=m,Ae=ds(y);if(Cn(m,!1),pe&&pn(pe),!Ae&&(ee=se&&se.onVnodeBeforeMount)&&xt(ee,Me,y),Cn(m,!0),X&&ie){const Le=()=>{Vt(m,"render"),m.subTree=ao(m),Ut(m,"render"),Vt(m,"hydrate"),ie(X,m.subTree,m,I,null),Ut(m,"hydrate")};Ae?y.type.__asyncLoader().then(()=>!m.isUnmounted&&Le()):Le()}else{Vt(m,"render");const Le=m.subTree=ao(m);Ut(m,"render"),Vt(m,"patch"),w(null,Le,F,j,m,I,O),Ut(m,"patch"),y.el=Le.el}if(ye&&Ye(ye,I),!Ae&&(ee=se&&se.onVnodeMounted)){const Le=y;Ye(()=>xt(ee,Me,Le),I)}(y.shapeFlag&256||Me&&ds(Me.vnode)&&Me.vnode.shapeFlag&256)&&m.a&&Ye(m.a,I),m.isMounted=!0,Eo(m),y=F=j=null}},N=m.effect=new lr(D,()=>Wa(M),m.scope),M=m.update=()=>N.run();M.id=m.uid,Cn(m,!0),N.onTrack=m.rtc?ee=>pn(m.rtc,ee):void 0,N.onTrigger=m.rtg?ee=>pn(m.rtg,ee):void 0,M.ownerInstance=m,M()},re=(m,y,F)=>{y.component=m;const j=m.vnode.props;m.vnode=y,m.next=null,Rp(m,y.props,j,F),Yp(m,y.children,F),Un(),al(),Gn()},me=(m,y,F,j,I,O,J,D,N=!1)=>{const M=m&&m.children,ee=m?m.shapeFlag:0,X=y.children,{patchFlag:se,shapeFlag:pe}=y;if(se>0){if(se&128){ht(M,X,F,j,I,O,J,D,N);return}else if(se&256){je(M,X,F,j,I,O,J,D,N);return}}pe&8?(ee&16&&B(M,I,O),X!==M&&p(F,X)):ee&16?pe&16?ht(M,X,F,j,I,O,J,D,N):B(M,I,O,!0):(ee&8&&p(F,""),pe&16&&de(X,F,j,I,O,J,D,N))},je=(m,y,F,j,I,O,J,D,N)=>{m=m||is,y=y||is;const M=m.length,ee=y.length,X=Math.min(M,ee);let se;for(se=0;se<X;se++){const pe=y[se]=N?dn(y[se]):St(y[se]);w(m[se],pe,F,null,I,O,J,D,N)}M>ee?B(m,I,O,!0,!1,X):de(y,F,j,I,O,J,D,N,X)},ht=(m,y,F,j,I,O,J,D,N)=>{let M=0;const ee=y.length;let X=m.length-1,se=ee-1;for(;M<=X&&M<=se;){const pe=m[M],ye=y[M]=N?dn(y[M]):St(y[M]);if(bs(pe,ye))w(pe,ye,F,null,I,O,J,D,N);else break;M++}for(;M<=X&&M<=se;){const pe=m[X],ye=y[se]=N?dn(y[se]):St(y[se]);if(bs(pe,ye))w(pe,ye,F,null,I,O,J,D,N);else break;X--,se--}if(M>X){if(M<=se){const pe=se+1,ye=pe<ee?y[pe].el:j;for(;M<=se;)w(null,y[M]=N?dn(y[M]):St(y[M]),F,ye,I,O,J,D,N),M++}}else if(M>se)for(;M<=X;)it(m[M],I,O,!0),M++;else{const pe=M,ye=M,Me=new Map;for(M=ye;M<=se;M++){const nt=y[M]=N?dn(y[M]):St(y[M]);nt.key!=null&&(Me.has(nt.key)&&$("Duplicate keys found during update:",JSON.stringify(nt.key),"Make sure keys are unique."),Me.set(nt.key,M))}let Ae,Le=0;const kt=se-ye+1;let Xn=!1,Vr=0;const ys=new Array(kt);for(M=0;M<kt;M++)ys[M]=0;for(M=pe;M<=X;M++){const nt=m[M];if(Le>=kt){it(nt,I,O,!0);continue}let Pt;if(nt.key!=null)Pt=Me.get(nt.key);else for(Ae=ye;Ae<=se;Ae++)if(ys[Ae-ye]===0&&bs(nt,y[Ae])){Pt=Ae;break}Pt===void 0?it(nt,I,O,!0):(ys[Pt-ye]=M+1,Pt>=Vr?Vr=Pt:Xn=!0,w(nt,y[Pt],F,null,I,O,J,D,N),Le++)}const Ur=Xn?nh(ys):is;for(Ae=Ur.length-1,M=kt-1;M>=0;M--){const nt=ye+M,Pt=y[nt],Gr=nt+1<ee?y[nt+1].el:j;ys[M]===0?w(null,Pt,F,Gr,I,O,J,D,N):Xn&&(Ae<0||M!==Ur[Ae]?Xe(Pt,F,Gr,2):Ae--)}}},Xe=(m,y,F,j,I=null)=>{const{el:O,type:J,transition:D,children:N,shapeFlag:M}=m;if(M&6){Xe(m.component.subTree,y,F,j);return}if(M&128){m.suspense.move(y,F,j);return}if(M&64){J.move(m,y,F,be);return}if(J===Ce){a(O,y,F);for(let X=0;X<N.length;X++)Xe(N[X],y,F,j);a(m.anchor,y,F);return}if(J===va){T(m,y,F);return}if(j!==2&&M&1&&D)if(j===0)D.beforeEnter(O),a(O,y,F),Ye(()=>D.enter(O),I);else{const{leave:X,delayLeave:se,afterLeave:pe}=D,ye=()=>a(O,y,F),Me=()=>{X(O,()=>{ye(),pe&&pe()})};se?se(O,ye,Me):Me()}else a(O,y,F)},it=(m,y,F,j=!1,I=!1)=>{const{type:O,props:J,ref:D,children:N,dynamicChildren:M,shapeFlag:ee,patchFlag:X,dirs:se}=m;if(D!=null&&Do(D,null,F,m,!0),ee&256){y.ctx.deactivate(m);return}const pe=ee&1&&se,ye=!ds(m);let Me;if(ye&&(Me=J&&J.onVnodeBeforeUnmount)&&xt(Me,y,m),ee&6)G(m.component,F,j);else{if(ee&128){m.suspense.unmount(F,j);return}pe&&kn(m,null,y,"beforeUnmount"),ee&64?m.type.remove(m,y,F,I,be,j):M&&(O!==Ce||X>0&&X&64)?B(M,y,F,!1,!0):(O===Ce&&X&384||!I&&ee&16)&&B(N,y,F),j&&on(m)}(ye&&(Me=J&&J.onVnodeUnmounted)||pe)&&Ye(()=>{Me&&xt(Me,y,m),pe&&kn(m,null,y,"unmounted")},F)},on=m=>{const{type:y,el:F,anchor:j,transition:I}=m;if(y===Ce){m.patchFlag>0&&m.patchFlag&2048&&I&&!I.persisted?m.children.forEach(J=>{J.type===dt?o(J.el):on(J)}):C(F,j);return}if(y===va){W(m);return}const O=()=>{o(F),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(m.shapeFlag&1&&I&&!I.persisted){const{leave:J,delayLeave:D}=I,N=()=>J(F,O);D?D(m.el,O,N):N()}else O()},C=(m,y)=>{let F;for(;m!==y;)F=h(m),o(m),m=F;o(y)},G=(m,y,F)=>{m.type.__hmrId&&ep(m);const{bum:j,scope:I,update:O,subTree:J,um:D}=m;j&&pn(j),I.stop(),O&&(O.active=!1,it(J,m,y,F)),D&&Ye(D,y),Ye(()=>{m.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve()),rp(m)},B=(m,y,F,j=!1,I=!1,O=0)=>{for(let J=O;J<m.length;J++)it(m[J],y,F,j,I)},Z=m=>m.shapeFlag&6?Z(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),ge=(m,y,F)=>{m==null?y._vnode&&it(y._vnode,null,null,!0):w(y._vnode||null,m,y,null,null,null,F),al(),rc(),y._vnode=m},be={p:w,um:it,m:Xe,r:on,mt:Ie,mc:de,pc:me,pbc:we,n:Z,o:e};let ue,ie;return n&&([ue,ie]=n(be)),{render:ge,hydrate:ue,createApp:Xp(ge,ue)}}function Cn({effect:e,update:n},s){e.allowRecurse=n.allowRecurse=s}function $s(e,n,s=!1){const a=e.children,o=n.children;if(le(a)&&le(o))for(let r=0;r<a.length;r++){const l=a[r];let i=o[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=o[r]=dn(o[r]),i.el=l.el),s||$s(l,i)),i.type===na&&(i.el=l.el),i.type===dt&&!i.el&&(i.el=l.el)}}function nh(e){const n=e.slice(),s=[0];let a,o,r,l,i;const c=e.length;for(a=0;a<c;a++){const d=e[a];if(d!==0){if(o=s[s.length-1],e[o]<d){n[a]=o,s.push(a);continue}for(r=0,l=s.length-1;r<l;)i=r+l>>1,e[s[i]]<d?r=i+1:l=i;d<e[s[r]]&&(r>0&&(n[a]=s[r-1]),s[r]=a)}}for(r=s.length,l=s[r-1];r-- >0;)s[r]=l,l=n[l];return s}const sh=e=>e.__isTeleport,us=e=>e&&(e.disabled||e.disabled===""),vl=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Po=(e,n)=>{const s=e&&e.to;if(De(s))if(n){const a=n(s);return a||$(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),a}else return $("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!us(e)&&$(`Invalid Teleport target: ${s}`),s},ah={__isTeleport:!0,process(e,n,s,a,o,r,l,i,c,d){const{mc:p,pc:u,pbc:h,o:{insert:g,querySelector:v,createText:w,createComment:b}}=d,S=us(n.props);let{shapeFlag:k,children:E,dynamicChildren:T}=n;if(fn&&(c=!1,T=null),e==null){const W=n.el=b("teleport start"),q=n.anchor=b("teleport end");g(W,s,a),g(q,s,a);const R=n.target=Po(n.props,v),te=n.targetAnchor=w("");R?(g(te,R),l=l||vl(R)):S||$("Invalid Teleport target on mount:",R,`(${typeof R})`);const de=(fe,we)=>{k&16&&p(E,fe,we,o,r,l,i,c)};S?de(s,q):R&&de(R,te)}else{n.el=e.el;const W=n.anchor=e.anchor,q=n.target=e.target,R=n.targetAnchor=e.targetAnchor,te=us(e.props),de=te?s:q,fe=te?W:R;if(l=l||vl(q),T?(h(e.dynamicChildren,T,de,o,r,l,i),$s(e,n,!0)):c||u(e,n,de,fe,o,r,l,i,!1),S)te||ua(n,s,W,d,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const we=n.target=Po(n.props,v);we?ua(n,we,null,d,0):$("Invalid Teleport target on update:",q,`(${typeof q})`)}else te&&ua(n,q,R,d,1)}$c(n)},remove(e,n,s,a,{um:o,o:{remove:r}},l){const{shapeFlag:i,children:c,anchor:d,targetAnchor:p,target:u,props:h}=e;if(u&&r(p),(l||!us(h))&&(r(d),i&16))for(let g=0;g<c.length;g++){const v=c[g];o(v,n,s,!0,!!v.dynamicChildren)}},move:ua,hydrate:oh};function ua(e,n,s,{o:{insert:a},m:o},r=2){r===0&&a(e.targetAnchor,n,s);const{el:l,anchor:i,shapeFlag:c,children:d,props:p}=e,u=r===2;if(u&&a(l,n,s),(!u||us(p))&&c&16)for(let h=0;h<d.length;h++)o(d[h],n,s,2);u&&a(i,n,s)}function oh(e,n,s,a,o,r,{o:{nextSibling:l,parentNode:i,querySelector:c}},d){const p=n.target=Po(n.props,c);if(p){const u=p._lpa||p.firstChild;if(n.shapeFlag&16)if(us(n.props))n.anchor=d(l(e),n,i(e),s,a,o,r),n.targetAnchor=u;else{n.anchor=l(e);let h=u;for(;h;)if(h=l(h),h&&h.nodeType===8&&h.data==="teleport anchor"){n.targetAnchor=h,p._lpa=n.targetAnchor&&l(n.targetAnchor);break}d(u,n,p,s,a,o,r)}$c(n)}return n.anchor&&l(n.anchor)}const m4=ah;function $c(e){const n=e.ctx;if(n&&n.ut){let s=e.children[0].el;for(;s!==e.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const Ce=Symbol("Fragment"),na=Symbol("Text"),dt=Symbol("Comment"),va=Symbol("Static"),Ds=[];let It=null;function x(e=!1){Ds.push(It=e?null:[])}function rh(){Ds.pop(),It=Ds[Ds.length-1]||null}let qs=1;function yl(e){qs+=e}function Dc(e){return e.dynamicChildren=qs>0?It||is:null,rh(),qs>0&&It&&It.push(e),e}function U(e,n,s,a,o,r){return Dc(t(e,n,s,a,o,r,!0))}function H(e,n,s,a,o){return Dc(Y(e,n,s,a,o,!0))}function Jn(e){return e?e.__v_isVNode===!0:!1}function bs(e,n){return n.shapeFlag&6&&ss.has(n.type)?(e.shapeFlag&=-257,n.shapeFlag&=-513,!1):e.type===n.type&&e.key===n.key}const lh=(...e)=>ih(...e),Xa="__vInternal",Pc=({key:e})=>e??null,ya=({ref:e,ref_key:n,ref_for:s})=>e!=null?De(e)||Fe(e)||ce(e)?{i:Je,r:e,k:n,f:!!s}:e:null;function t(e,n=null,s=null,a=0,o=null,r=e===Ce?0:1,l=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Pc(n),ref:n&&ya(n),scopeId:Ua,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Je};return i?(_r(c,s),r&128&&e.normalize(c)):s&&(c.shapeFlag|=De(s)?8:16),c.key!==c.key&&$("VNode created with invalid key (NaN). VNode type:",c.type),qs>0&&!l&&It&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&It.push(c),c}const Y=lh;function ih(e,n=null,s=null,a=0,o=null,r=!1){if((!e||e===Ap)&&(e||$(`Invalid vnode type when creating vnode: ${e}.`),e=dt),Jn(e)){const i=sn(e,n,!0);return s&&_r(i,s),qs>0&&!r&&It&&(i.shapeFlag&6?It[It.indexOf(e)]=i:It.push(i)),i.patchFlag|=-2,i}if(Lc(e)&&(e=e.__vccOpts),n){n=ne(n);let{class:i,style:c}=n;i&&!De(i)&&(n.class=Be(i)),Se(c)&&(Sa(c)&&!le(c)&&(c=ze({},c)),n.style=We(c))}const l=De(e)?1:mc(e)?128:sh(e)?64:Se(e)?4:ce(e)?2:0;return l&4&&Sa(e)&&(e=he(e),$("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),t(e,n,s,a,o,l,r,!0)}function ne(e){return e?Sa(e)||Xa in e?ze({},e):e:null}function sn(e,n,s=!1){const{props:a,ref:o,patchFlag:r,children:l}=e,i=n?ut(a||{},n):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Pc(i),ref:n&&n.ref?s&&o?le(o)?o.concat(ya(n)):[o,ya(n)]:ya(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&le(l)?l.map(Oc):l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ce?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Oc(e){const n=sn(e);return le(e.children)&&(n.children=e.children.map(Oc)),n}function f(e=" ",n=0){return Y(na,null,e,n)}function Q(e="",n=!1){return n?(x(),H(dt,null,e)):Y(dt,null,e)}function St(e){return e==null||typeof e=="boolean"?Y(dt):le(e)?Y(Ce,null,e.slice()):typeof e=="object"?dn(e):Y(na,null,String(e))}function dn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:sn(e)}function _r(e,n){let s=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(le(n))s=16;else if(typeof n=="object")if(a&65){const o=n.default;o&&(o._c&&(o._d=!1),_r(e,o()),o._c&&(o._d=!0));return}else{s=32;const o=n._;!o&&!(Xa in n)?n._ctx=Je:o===3&&Je&&(Je.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ce(n)?(n={default:n,_ctx:Je},s=32):(n=String(n),a&64?(s=16,n=[f(n)]):s=8);e.children=n,e.shapeFlag|=s}function ut(...e){const n={};for(let s=0;s<e.length;s++){const a=e[s];for(const o in a)if(o==="class")n.class!==a.class&&(n.class=Be([n.class,a.class]));else if(o==="style")n.style=We([n.style,a.style]);else if(Qs(o)){const r=n[o],l=a[o];l&&r!==l&&!(le(r)&&r.includes(l))&&(n[o]=r?[].concat(r,l):l)}else o!==""&&(n[o]=a[o])}return n}function xt(e,n,s,a=null){jt(e,n,7,[s,a])}const ch=Mc();let dh=0;function uh(e,n,s){const a=e.type,o=(n?n.appContext:e.appContext)||ch,r={uid:dh++,vnode:e,type:a,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sc(a,o),emitsOptions:pc(a,o),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:a.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=Tp(r),r.root=n?n.root:r,r.emit=dp.bind(null,r),e.ce&&e.ce(r),r}let Ke=null;const Fn=()=>Ke||Je,hs=e=>{Ke=e,e.scope.on()},Hn=()=>{Ke&&Ke.scope.off(),Ke=null},ph=_n("slot,component");function Oo(e,n){const s=n.isNativeTag||$i;(ph(e)||s(e))&&$("Do not use built-in or reserved HTML elements as component id: "+e)}function Nc(e){return e.vnode.shapeFlag&4}let Js=!1;function hh(e,n=!1){Js=n;const{props:s,children:a}=e.vnode,o=Nc(e);Lp(e,s,o,n),Gp(e,a);const r=o?mh(e,n):void 0;return Js=!1,r}function mh(e,n){var s;const a=e.type;{if(a.name&&Oo(a.name,e.appContext.config),a.components){const r=Object.keys(a.components);for(let l=0;l<r.length;l++)Oo(r[l],e.appContext.config)}if(a.directives){const r=Object.keys(a.directives);for(let l=0;l<r.length;l++)xc(r[l])}a.compilerOptions&&fh()&&$('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=cr(new Proxy(e.ctx,kc)),Mp(e);const{setup:o}=a;if(o){const r=e.setupContext=o.length>1?Bc(e):null;hs(e),Un();const l=en(o,e,0,[rs(e.props),r]);if(Gn(),Hn(),sr(l)){if(l.then(Hn,Hn),n)return l.then(i=>{wl(e,i,n)}).catch(i=>{Ja(i,e,0)});if(e.asyncDep=l,!e.suspense){const i=(s=a.name)!==null&&s!==void 0?s:"Anonymous";$(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else wl(e,l,n)}else Hc(e,n)}function wl(e,n,s){ce(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Se(n)?(Jn(n)&&$("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=n,e.setupState=Qi(n),$p(e)):n!==void 0&&$(`setup() should return an object. Received: ${n===null?"null":typeof n}`),Hc(e,s)}let No;const fh=()=>!No;function Hc(e,n,s){const a=e.type;if(!e.render){if(!n&&No&&!a.render){const o=a.template||br(e).template;if(o){Vt(e,"compile");const{isCustomElement:r,compilerOptions:l}=e.appContext.config,{delimiters:i,compilerOptions:c}=a,d=ze(ze({isCustomElement:r,delimiters:i},l),c);a.render=No(o,d),Ut(e,"compile")}}e.render=a.render||ct}hs(e),Un(),Pp(e),Gn(),Hn(),!a.render&&e.render===ct&&!n&&(a.template?$('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):$("Component is missing template or render function."))}function gh(e){return new Proxy(e.attrs,{get(n,s){return ja(),wt(e,"get","$attrs"),n[s]},set(){return $("setupContext.attrs is readonly."),!1},deleteProperty(){return $("setupContext.attrs is readonly."),!1}})}function Bc(e){const n=a=>{e.exposed&&$("expose() should be called only once per setup()."),e.exposed=a||{}};let s;return Object.freeze({get attrs(){return s||(s=gh(e))},get slots(){return rs(e.slots)},get emit(){return(a,...o)=>e.emit(a,...o)},expose:n})}function Qa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qi(cr(e.exposed)),{get(n,s){if(s in n)return n[s];if(s in Nn)return Nn[s](e)},has(n,s){return s in n||s in Nn}}))}const vh=/(?:^|[-_])(\w)/g,yh=e=>e.replace(vh,n=>n.toUpperCase()).replace(/[-_]/g,"");function Ws(e,n=!0){return ce(e)?e.displayName||e.name:e.name||n&&e.__name}function eo(e,n,s=!1){let a=Ws(n);if(!a&&n.__file){const o=n.__file.match(/([^/\\]+)\.\w+$/);o&&(a=o[1])}if(!a&&e&&e.parent){const o=r=>{for(const l in r)if(r[l]===n)return l};a=o(e.components||e.parent.type.components)||o(e.appContext.components)}return a?yh(a):s?"App":"Anonymous"}function Lc(e){return ce(e)&&"__vccOpts"in e}const A=(e,n)=>Ku(e,n,Js);function f4(){return wh().slots}function wh(){const e=Fn();return e||$("useContext() called without active instance."),e.setupContext||(e.setupContext=Bc(e))}function to(e,n,s){const a=arguments.length;return a===2?Se(n)&&!le(n)?Jn(n)?Y(e,null,[n]):Y(e,n):Y(e,null,n):(a>3?s=Array.prototype.slice.call(arguments,2):a===3&&Jn(s)&&(s=[s]),Y(e,n,s))}const bh=Symbol("ssrContext"),xh=()=>{{const e=P(bh);return e||$("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function io(e){return!!(e&&e.__v_isShallow)}function _h(){if(typeof window>"u")return;const e={style:"color:#3ba776"},n={style:"color:#0b1bc9"},s={style:"color:#b62e24"},a={style:"color:#9d288c"},o={header(u){return Se(u)?u.__isVue?["div",e,"VueInstance"]:Fe(u)?["div",{},["span",e,p(u)],"<",i(u.value),">"]:Pn(u)?["div",{},["span",e,io(u)?"ShallowReactive":"Reactive"],"<",i(u),`>${bn(u)?" (readonly)":""}`]:bn(u)?["div",{},["span",e,io(u)?"ShallowReadonly":"Readonly"],"<",i(u),">"]:null:null},hasBody(u){return u&&u.__isVue},body(u){if(u&&u.__isVue)return["div",{},...r(u.$)]}};function r(u){const h=[];u.type.props&&u.props&&h.push(l("props",he(u.props))),u.setupState!==Te&&h.push(l("setup",u.setupState)),u.data!==Te&&h.push(l("data",he(u.data)));const g=c(u,"computed");g&&h.push(l("computed",g));const v=c(u,"inject");return v&&h.push(l("injected",v)),h.push(["div",{},["span",{style:a.style+";opacity:0.66"},"$ (internal): "],["object",{object:u}]]),h}function l(u,h){return h=ze({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},u],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(g=>["div",{},["span",a,g+": "],i(h[g],!1)])]]:["span",{}]}function i(u,h=!0){return typeof u=="number"?["span",n,u]:typeof u=="string"?["span",s,JSON.stringify(u)]:typeof u=="boolean"?["span",a,u]:Se(u)?["object",{object:h?he(u):u}]:["span",s,String(u)]}function c(u,h){const g=u.type;if(ce(g))return;const v={};for(const w in u.ctx)d(g,w,h)&&(v[w]=u.ctx[w]);return v}function d(u,h,g){const v=u[g];if(le(v)&&v.includes(h)||Se(v)&&h in v||u.extends&&d(u.extends,h,g)||u.mixins&&u.mixins.some(w=>d(w,h,g)))return!0}function p(u){return io(u)?"ShallowRef":u.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}const bl="3.2.45",Fh="http://www.w3.org/2000/svg",In=typeof document<"u"?document:null,xl=In&&In.createElement("template"),kh={insert:(e,n,s)=>{n.insertBefore(e,s||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,s,a)=>{const o=n?In.createElementNS(Fh,e):In.createElement(e,s?{is:s}:void 0);return e==="select"&&a&&a.multiple!=null&&o.setAttribute("multiple",a.multiple),o},createText:e=>In.createTextNode(e),createComment:e=>In.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>In.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,s,a,o,r){const l=s?s.previousSibling:n.lastChild;if(o&&(o===r||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),s),!(o===r||!(o=o.nextSibling)););else{xl.innerHTML=a?`<svg>${e}</svg>`:e;const i=xl.content;if(a){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}n.insertBefore(i,s)}return[l?l.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function Ch(e,n,s){const a=e._vtc;a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):s?e.setAttribute("class",n):e.className=n}function Eh(e,n,s){const a=e.style,o=De(s);if(s&&!o){for(const r in s)Ho(a,r,s[r]);if(n&&!De(n))for(const r in n)s[r]==null&&Ho(a,r,"")}else{const r=a.display;o?n!==s&&(a.cssText=s):n&&e.removeAttribute("style"),"_vod"in e&&(a.display=r)}}const Sh=/[^\\];\s*$/,_l=/\s*!important$/;function Ho(e,n,s){if(le(s))s.forEach(a=>Ho(e,n,a));else if(s==null&&(s=""),Sh.test(s)&&$(`Unexpected semicolon at the end of '${n}' style value: '${s}'`),n.startsWith("--"))e.setProperty(n,s);else{const a=Ih(e,n);_l.test(s)?e.setProperty(tn(a),s.replace(_l,""),"important"):e[a]=s}}const Fl=["Webkit","Moz","ms"],co={};function Ih(e,n){const s=co[n];if(s)return s;let a=Rt(n);if(a!=="filter"&&a in e)return co[n]=a;a=Kn(a);for(let o=0;o<Fl.length;o++){const r=Fl[o]+a;if(r in e)return co[n]=r}return n}const kl="http://www.w3.org/1999/xlink";function jh(e,n,s,a,o){if(a&&n.startsWith("xlink:"))s==null?e.removeAttributeNS(kl,n.slice(6,n.length)):e.setAttributeNS(kl,n,s);else{const r=eu(n);s==null||r&&!Ti(s)?e.removeAttribute(n):e.setAttribute(n,r?"":s)}}function Ah(e,n,s,a,o,r,l){if(n==="innerHTML"||n==="textContent"){a&&l(a,o,r),e[n]=s??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const c=s??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),s==null&&e.removeAttribute(n);return}let i=!1;if(s===""||s==null){const c=typeof e[n];c==="boolean"?s=Ti(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{e[n]=s}catch(c){i||$(`Failed setting prop "${n}" on <${e.tagName.toLowerCase()}>: value ${s} is invalid.`,c)}i&&e.removeAttribute(n)}function as(e,n,s,a){e.addEventListener(n,s,a)}function Th(e,n,s,a){e.removeEventListener(n,s,a)}function Mh(e,n,s,a,o=null){const r=e._vei||(e._vei={}),l=r[n];if(a&&l)l.value=a;else{const[i,c]=$h(n);if(a){const d=r[n]=Oh(a,o);as(e,i,d,c)}else l&&(Th(e,i,l,c),r[n]=void 0)}}const Cl=/(?:Once|Passive|Capture)$/;function $h(e){let n;if(Cl.test(e)){n={};let a;for(;a=e.match(Cl);)e=e.slice(0,e.length-a[0].length),n[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tn(e.slice(2)),n]}let uo=0;const Dh=Promise.resolve(),Ph=()=>uo||(Dh.then(()=>uo=0),uo=Date.now());function Oh(e,n){const s=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=s.attached)return;jt(Nh(a,s.value),n,5,[a])};return s.value=e,s.attached=Ph(),s}function Nh(e,n){if(le(n)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},n.map(a=>o=>!o._stopped&&a&&a(o))}else return n}const El=/^on[a-z]/,Hh=(e,n,s,a,o=!1,r,l,i,c)=>{n==="class"?Ch(e,a,o):n==="style"?Eh(e,s,a):Qs(n)?_a(n)||Mh(e,n,s,a,l):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Bh(e,n,a,o))?Ah(e,n,a,r,l,i,c):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),jh(e,n,a,o))};function Bh(e,n,s,a){return a?!!(n==="innerHTML"||n==="textContent"||n in e&&El.test(n)&&ce(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||El.test(n)&&De(s)?!1:n in e}const Sl=e=>{const n=e.props["onUpdate:modelValue"]||!1;return le(n)?s=>pn(n,s):n};function Lh(e){e.target.composing=!0}function Il(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const zh={created(e,{modifiers:{lazy:n,trim:s,number:a}},o){e._assign=Sl(o);const r=a||o.props&&o.props.type==="number";as(e,n?"change":"input",l=>{if(l.target.composing)return;let i=e.value;s&&(i=i.trim()),r&&(i=ka(i)),e._assign(i)}),s&&as(e,"change",()=>{e.value=e.value.trim()}),n||(as(e,"compositionstart",Lh),as(e,"compositionend",Il),as(e,"change",Il))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:s,trim:a,number:o}},r){if(e._assign=Sl(r),e.composing||document.activeElement===e&&e.type!=="range"&&(s||a&&e.value.trim()===n||(o||e.type==="number")&&ka(e.value)===n))return;const l=n??"";e.value!==l&&(e.value=l)}},Rh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jl=(e,n)=>s=>{if(!("key"in s))return;const a=tn(s.key);if(n.some(o=>o===a||Rh[o]===a))return e(s)},zc={beforeMount(e,{value:n},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&n?s.beforeEnter(e):xs(e,n)},mounted(e,{value:n},{transition:s}){s&&n&&s.enter(e)},updated(e,{value:n,oldValue:s},{transition:a}){!n!=!s&&(a?n?(a.beforeEnter(e),xs(e,!0),a.enter(e)):a.leave(e,()=>{xs(e,!1)}):xs(e,n))},beforeUnmount(e,{value:n}){xs(e,n)}};function xs(e,n){e.style.display=n?e._vod:"none"}const Kh=ze({patchProp:Hh},kh);let Al;function qh(){return Al||(Al=eh(Kh))}const g4=(...e)=>{const n=qh().createApp(...e);Jh(n),Wh(n);const{mount:s}=n;return n.mount=a=>{const o=Vh(a);if(!o)return;const r=n._component;!ce(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const l=s(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},n};function Jh(e){Object.defineProperty(e.config,"isNativeTag",{value:n=>Zd(n)||Xd(n),writable:!1})}function Wh(e){{const n=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return n},set(){$("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=e.config.compilerOptions,a='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return $(a),s},set(){$(a)}})}}function Vh(e){if(De(e)){const n=document.querySelector(e);return n||$(`Failed to mount app: mount target selector "${e}" returned null.`),n}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&$('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Uh(){_h()}Uh();const Rc=Symbol("v-click-clicks"),Kc=Symbol("v-click-clicks-elements"),Gh=Symbol("v-click-clicks-order-map"),qc=Symbol("v-click-clicks-disabled"),Jc=Symbol("slidev-slide-scale"),L=Symbol("slidev-slidev-context"),Yh=Symbol("slidev-route"),Zh=Symbol("slidev-slide-context"),Xh="slidev-vclick-target",v4="slidev-vclick-hidden",y4="slidev-vclick-fade",w4="slidev-vclick-hidden-explicitly",b4="slidev-vclick-current",x4="slidev-vclick-prior";function Qh(e,n){if(!e)return!1;const s=e.indexOf(n);return s>=0?(e.splice(s,1),!0):!1}function e0(...e){let n,s,a;e.length===1?(n=0,a=1,[s]=e):[n,s,a=1]=e;const o=[];let r=n;for(;r<s;)o.push(r),r+=a||1;return o}function t0(e){return e!=null}function n0(e,n){return Object.fromEntries(Object.entries(e).map(([s,a])=>n(s,a)).filter(t0))}const Ts={theme:"apple-basic",title:"Rebirth of OIST 10 years old website with Drupal 9",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Montserrat"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Bitter"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Montserrat","Bitter"],provider:"google",local:["Helvetica Neue"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",layout:"intro-image",image:"/images/DC-Iwakuni-Blue-full.png",class:"text-center"},$e=Ts,gn=$e.aspectRatio??16/9,vn=$e.canvasWidth??980,Fr=Math.ceil(vn/gn),kr=A(()=>n0($e.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function Ft(e,n,s){Object.defineProperty(e,n,{value:s,writable:!0,enumerable:!1})}const Yn=Ze({page:0,clicks:0});let s0=[],a0=[];Ft(Yn,"$syncUp",!0);Ft(Yn,"$syncDown",!0);Ft(Yn,"$paused",!1);Ft(Yn,"$onSet",e=>s0.push(e));Ft(Yn,"$onPatch",e=>a0.push(e));Ft(Yn,"$patch",async()=>!1);function Wc(e,n,s=!1){const a=[];let o=!1,r=!1,l,i;const c=Ze(n);function d(g){a.push(g)}function p(g,v){clearTimeout(l),o=!0,c[g]=v,l=setTimeout(()=>o=!1,0)}function u(g){o||(clearTimeout(i),r=!0,Object.entries(g).forEach(([v,w])=>{c[v]=w}),i=setTimeout(()=>r=!1,0))}function h(g){let v;s?s&&window.addEventListener("storage",b=>{b&&b.key===g&&b.newValue&&u(JSON.parse(b.newValue))}):(v=new BroadcastChannel(g),v.addEventListener("message",b=>u(b.data)));function w(){!s&&v&&!r?v.postMessage(he(c)):s&&!r&&window.localStorage.setItem(g,JSON.stringify(c)),o||a.forEach(b=>b(c))}if(He(c,w,{deep:!0}),s){const b=window.localStorage.getItem(g);b&&u(JSON.parse(b))}}return{init:h,onPatch:d,patch:p,state:c}}const{init:_4,onPatch:F4,patch:k4,state:po}=Wc(Yn,{page:1,clicks:0}),Zn=Ze({});let o0=[],r0=[];Ft(Zn,"$syncUp",!0);Ft(Zn,"$syncDown",!0);Ft(Zn,"$paused",!1);Ft(Zn,"$onSet",e=>o0.push(e));Ft(Zn,"$onPatch",e=>r0.push(e));Ft(Zn,"$patch",async()=>!1);const{init:C4,onPatch:l0,patch:Vc,state:Ma}=Wc(Zn,{},!1),i0="modulepreload",c0=function(e){return"/"+e},Tl={},Wn=function(n,s,a){if(!s||s.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=c0(r),r in Tl)return;Tl[r]=!0;const l=r.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!a)for(let p=o.length-1;p>=0;p--){const u=o[p];if(u.href===r&&(!l||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":i0,l||(d.as="script",d.crossOrigin=""),d.href=r,document.head.appendChild(d),l)return new Promise((p,u)=>{d.addEventListener("load",p),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};var Ml;const Mt=typeof window<"u",d0=e=>typeof e<"u",u0=Object.prototype.toString,Vs=e=>typeof e=="function",E4=e=>typeof e=="number",Uc=e=>typeof e=="string",S4=e=>u0.call(e)==="[object Object]",Bo=()=>+Date.now(),Ps=()=>{};Mt&&((Ml=window==null?void 0:window.navigator)!=null&&Ml.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function rt(e){return typeof e=="function"?e():_(e)}function p0(e,n){function s(...a){e(()=>n.apply(this,a),{fn:n,thisArg:this,args:a})}return s}const Gc=e=>e();function h0(e=Gc){const n=ae(!0);function s(){n.value=!1}function a(){n.value=!0}return{isActive:n,pause:s,resume:a,eventFilter:(...r)=>{n.value&&e(...r)}}}function m0(e){return e}function f0(e,n){var s;if(typeof e=="number")return e+n;const a=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",o=e.slice(a.length),r=parseFloat(a)+n;return Number.isNaN(r)?e:r+o}function g0(e,n){let s,a,o;const r=ae(!0),l=()=>{r.value=!0,o()};He(e,l,{flush:"sync"});const i=Vs(n)?n:n.get,c=Vs(n)?void 0:n.set,d=ec((p,u)=>(a=p,o=u,{get(){return r.value&&(s=i(),r.value=!1),a(),s},set(h){c==null||c(h)}}));return Object.isExtensible(d)&&(d.trigger=l),d}function qt(e){return lu()?(iu(e),!0):!1}function v0(e){if(!Fe(e))return Ze(e);const n=new Proxy({},{get(s,a,o){return _(Reflect.get(e.value,a,o))},set(s,a,o){return Fe(e.value[a])&&!Fe(o)?e.value[a].value=o:e.value[a]=o,!0},deleteProperty(s,a){return Reflect.deleteProperty(e.value,a)},has(s,a){return Reflect.has(e.value,a)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ze(n)}function Yc(e){return typeof e=="function"?A(e):ae(e)}var y0=Object.defineProperty,w0=Object.defineProperties,b0=Object.getOwnPropertyDescriptors,$l=Object.getOwnPropertySymbols,x0=Object.prototype.hasOwnProperty,_0=Object.prototype.propertyIsEnumerable,Dl=(e,n,s)=>n in e?y0(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,F0=(e,n)=>{for(var s in n||(n={}))x0.call(n,s)&&Dl(e,s,n[s]);if($l)for(var s of $l(n))_0.call(n,s)&&Dl(e,s,n[s]);return e},k0=(e,n)=>w0(e,b0(n));function C0(e){if(!Fe(e))return Bu(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)n[s]=ec(()=>({get(){return e.value[s]},set(a){if(Array.isArray(e.value)){const o=[...e.value];o[s]=a,e.value=o}else{const o=k0(F0({},e.value),{[s]:a});Object.setPrototypeOf(o,e.value),e.value=o}}}));return n}function Cr(e,n=!0){Fn()?Ya(e):n?e():At(e)}function I4(e){Fn()&&Za(e)}function E0(e,n=1e3,s={}){const{immediate:a=!0,immediateCallback:o=!1}=s;let r=null;const l=ae(!1);function i(){r&&(clearInterval(r),r=null)}function c(){l.value=!1,i()}function d(){_(n)<=0||(l.value=!0,o&&e(),i(),r=setInterval(e,rt(n)))}if(a&&Mt&&d(),Fe(n)||Vs(n)){const p=He(n,()=>{l.value&&Mt&&d()});qt(p)}return qt(c),{isActive:l,pause:c,resume:d}}function S0(e,n,s={}){const{immediate:a=!0}=s,o=ae(!1);let r=null;function l(){r&&(clearTimeout(r),r=null)}function i(){o.value=!1,l()}function c(...d){l(),o.value=!0,r=setTimeout(()=>{o.value=!1,r=null,e(...d)},rt(n))}return a&&(o.value=!0,Mt&&c()),qt(i),{isPending:o,start:c,stop:i}}function Zc(e=!1,n={}){const{truthyValue:s=!0,falsyValue:a=!1}=n,o=Fe(e),r=ae(e);function l(i){if(arguments.length)return r.value=i,r.value;{const c=rt(s);return r.value=r.value===c?rt(a):c,r.value}}return o?l:[r,l]}var Pl=Object.getOwnPropertySymbols,I0=Object.prototype.hasOwnProperty,j0=Object.prototype.propertyIsEnumerable,A0=(e,n)=>{var s={};for(var a in e)I0.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&Pl)for(var a of Pl(e))n.indexOf(a)<0&&j0.call(e,a)&&(s[a]=e[a]);return s};function T0(e,n,s={}){const a=s,{eventFilter:o=Gc}=a,r=A0(a,["eventFilter"]);return He(e,p0(o,n),r)}var M0=Object.defineProperty,$0=Object.defineProperties,D0=Object.getOwnPropertyDescriptors,$a=Object.getOwnPropertySymbols,Xc=Object.prototype.hasOwnProperty,Qc=Object.prototype.propertyIsEnumerable,Ol=(e,n,s)=>n in e?M0(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,P0=(e,n)=>{for(var s in n||(n={}))Xc.call(n,s)&&Ol(e,s,n[s]);if($a)for(var s of $a(n))Qc.call(n,s)&&Ol(e,s,n[s]);return e},O0=(e,n)=>$0(e,D0(n)),N0=(e,n)=>{var s={};for(var a in e)Xc.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&$a)for(var a of $a(e))n.indexOf(a)<0&&Qc.call(e,a)&&(s[a]=e[a]);return s};function H0(e,n,s={}){const a=s,{eventFilter:o}=a,r=N0(a,["eventFilter"]),{eventFilter:l,pause:i,resume:c,isActive:d}=h0(o);return{stop:T0(e,n,O0(P0({},r),{eventFilter:l})),pause:i,resume:c,isActive:d}}function Bt(e){var n;const s=rt(e);return(n=s==null?void 0:s.$el)!=null?n:s}const tt=Mt?window:void 0,ed=Mt?window.document:void 0,B0=Mt?window.navigator:void 0;function Ee(...e){let n,s,a,o;if(Uc(e[0])||Array.isArray(e[0])?([s,a,o]=e,n=tt):[n,s,a,o]=e,!n)return Ps;Array.isArray(s)||(s=[s]),Array.isArray(a)||(a=[a]);const r=[],l=()=>{r.forEach(p=>p()),r.length=0},i=(p,u,h)=>(p.addEventListener(u,h,o),()=>p.removeEventListener(u,h,o)),c=He(()=>Bt(n),p=>{l(),p&&r.push(...s.flatMap(u=>a.map(h=>i(p,u,h))))},{immediate:!0,flush:"post"}),d=()=>{c(),l()};return qt(d),d}function L0(e,n,s={}){const{window:a=tt,ignore:o=[],capture:r=!0,detectIframe:l=!1}=s;if(!a)return;let i=!0,c;const d=g=>o.some(v=>{if(typeof v=="string")return Array.from(a.document.querySelectorAll(v)).some(w=>w===g.target||g.composedPath().includes(w));{const w=Bt(v);return w&&(g.target===w||g.composedPath().includes(w))}}),p=g=>{a.clearTimeout(c);const v=Bt(e);if(!(!v||v===g.target||g.composedPath().includes(v))){if(g.detail===0&&(i=!d(g)),!i){i=!0;return}n(g)}},u=[Ee(a,"click",p,{passive:!0,capture:r}),Ee(a,"pointerdown",g=>{const v=Bt(e);v&&(i=!g.composedPath().includes(v)&&!d(g))},{passive:!0}),Ee(a,"pointerup",g=>{if(g.button===0){const v=g.composedPath();g.composedPath=()=>v,c=a.setTimeout(()=>p(g),50)}},{passive:!0}),l&&Ee(a,"blur",g=>{var v;const w=Bt(e);((v=a.document.activeElement)==null?void 0:v.tagName)==="IFRAME"&&!(w!=null&&w.contains(a.document.activeElement))&&n(g)})].filter(Boolean);return()=>u.forEach(g=>g())}const z0=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0;function R0(...e){let n,s,a={};e.length===3?(n=e[0],s=e[1],a=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,s=e[0],a=e[1]):(n=e[0],s=e[1]):(n=!0,s=e[0]);const{target:o=tt,eventName:r="keydown",passive:l=!1}=a,i=z0(n);return Ee(o,r,d=>{i(d)&&s(d)},l)}function K0(e={}){const{window:n=tt}=e,s=g0(()=>null,()=>n==null?void 0:n.document.activeElement);return n&&(Ee(n,"blur",a=>{a.relatedTarget!==null&&s.trigger()},!0),Ee(n,"focus",s.trigger,!0)),s}function sa(e,n=!1){const s=ae(),a=()=>s.value=Boolean(e());return a(),Cr(a,n),s}function os(e,n={}){const{window:s=tt}=n,a=sa(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let o;const r=ae(!1),l=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",i):o.removeListener(i))},i=()=>{a.value&&(l(),o=s.matchMedia(Yc(e).value),r.value=o.matches,"addEventListener"in o?o.addEventListener("change",i):o.addListener(i))};return gs(i),qt(()=>l()),r}const q0={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var J0=Object.defineProperty,Nl=Object.getOwnPropertySymbols,W0=Object.prototype.hasOwnProperty,V0=Object.prototype.propertyIsEnumerable,Hl=(e,n,s)=>n in e?J0(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,U0=(e,n)=>{for(var s in n||(n={}))W0.call(n,s)&&Hl(e,s,n[s]);if(Nl)for(var s of Nl(n))V0.call(n,s)&&Hl(e,s,n[s]);return e};function G0(e,n={}){function s(i,c){let d=e[i];return c!=null&&(d=f0(d,c)),typeof d=="number"&&(d=`${d}px`),d}const{window:a=tt}=n;function o(i){return a?a.matchMedia(i).matches:!1}const r=i=>os(`(min-width: ${s(i)})`,n),l=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return U0({greater(i){return os(`(min-width: ${s(i,.1)})`,n)},greaterOrEqual:r,smaller(i){return os(`(max-width: ${s(i,-.1)})`,n)},smallerOrEqual(i){return os(`(max-width: ${s(i)})`,n)},between(i,c){return os(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,n)},isGreater(i){return o(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return o(`(min-width: ${s(i)})`)},isSmaller(i){return o(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return o(`(max-width: ${s(i)})`)},isInBetween(i,c){return o(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},l)}function Y0(e={}){const{navigator:n=B0,read:s=!1,source:a,copiedDuring:o=1500,legacy:r=!1}=e,l=["copy","cut"],i=sa(()=>n&&"clipboard"in n),c=A(()=>i.value||r),d=ae(""),p=ae(!1),u=S0(()=>p.value=!1,o);function h(){i.value?n.clipboard.readText().then(b=>{d.value=b}):d.value=w()}if(c.value&&s)for(const b of l)Ee(b,h);async function g(b=rt(a)){c.value&&b!=null&&(i.value?await n.clipboard.writeText(b):v(b),d.value=b,p.value=!0,u.start())}function v(b){const S=document.createElement("textarea");S.value=b??"",S.style.position="absolute",S.style.opacity="0",document.body.appendChild(S),S.select(),document.execCommand("copy"),S.remove()}function w(){var b,S,k;return(k=(S=(b=document==null?void 0:document.getSelection)==null?void 0:b.call(document))==null?void 0:S.toString())!=null?k:""}return{isSupported:c,text:d,copied:p,copy:g}}function Z0(e){return JSON.parse(JSON.stringify(e))}const Lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zo="__vueuse_ssr_handlers__";Lo[zo]=Lo[zo]||{};const X0=Lo[zo];function Q0(e,n){return X0[e]||n}function em(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var tm=Object.defineProperty,Bl=Object.getOwnPropertySymbols,nm=Object.prototype.hasOwnProperty,sm=Object.prototype.propertyIsEnumerable,Ll=(e,n,s)=>n in e?tm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,zl=(e,n)=>{for(var s in n||(n={}))nm.call(n,s)&&Ll(e,s,n[s]);if(Bl)for(var s of Bl(n))sm.call(n,s)&&Ll(e,s,n[s]);return e};const am={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function $t(e,n,s,a={}){var o;const{flush:r="pre",deep:l=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:d=!1,shallow:p,window:u=tt,eventFilter:h,onError:g=R=>{console.error(R)}}=a,v=(p?Kt:ae)(n);if(!s)try{s=Q0("getDefaultStorage",()=>{var R;return(R=tt)==null?void 0:R.localStorage})()}catch(R){g(R)}if(!s)return v;const w=rt(n),b=em(w),S=(o=a.serializer)!=null?o:am[b],{pause:k,resume:E}=H0(v,()=>T(v.value),{flush:r,deep:l,eventFilter:h});return u&&i&&Ee(u,"storage",q),q(),v;function T(R){try{if(R==null)s.removeItem(e);else{const te=S.write(R),de=s.getItem(e);de!==te&&(s.setItem(e,te),u&&(u==null||u.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:de,newValue:te,storageArea:s}))))}}catch(te){g(te)}}function W(R){const te=R?R.newValue:s.getItem(e);if(te==null)return c&&w!==null&&s.setItem(e,S.write(w)),w;if(!R&&d){const de=S.read(te);return Vs(d)?d(de,w):b==="object"&&!Array.isArray(de)?zl(zl({},w),de):de}else return typeof te!="string"?te:S.read(te)}function q(R){if(!(R&&R.storageArea!==s)){if(R&&R.key==null){v.value=w;return}if(!(R&&R.key!==e)){k();try{v.value=W(R)}catch(te){g(te)}finally{R?At(E):E()}}}}}function om(e){return os("(prefers-color-scheme: dark)",e)}var rm=Object.defineProperty,lm=Object.defineProperties,im=Object.getOwnPropertyDescriptors,Rl=Object.getOwnPropertySymbols,cm=Object.prototype.hasOwnProperty,dm=Object.prototype.propertyIsEnumerable,Kl=(e,n,s)=>n in e?rm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,um=(e,n)=>{for(var s in n||(n={}))cm.call(n,s)&&Kl(e,s,n[s]);if(Rl)for(var s of Rl(n))dm.call(n,s)&&Kl(e,s,n[s]);return e},pm=(e,n)=>lm(e,im(n));function j4(e,n={}){var s,a,o;const r=(s=n.draggingElement)!=null?s:tt,l=(a=n.handle)!=null?a:e,i=ae((o=rt(n.initialValue))!=null?o:{x:0,y:0}),c=ae(),d=v=>n.pointerTypes?n.pointerTypes.includes(v.pointerType):!0,p=v=>{rt(n.preventDefault)&&v.preventDefault(),rt(n.stopPropagation)&&v.stopPropagation()},u=v=>{var w;if(!d(v)||rt(n.exact)&&v.target!==rt(e))return;const b=rt(e).getBoundingClientRect(),S={x:v.clientX-b.left,y:v.clientY-b.top};((w=n.onStart)==null?void 0:w.call(n,S,v))!==!1&&(c.value=S,p(v))},h=v=>{var w;d(v)&&c.value&&(i.value={x:v.clientX-c.value.x,y:v.clientY-c.value.y},(w=n.onMove)==null||w.call(n,i.value,v),p(v))},g=v=>{var w;d(v)&&c.value&&(c.value=void 0,(w=n.onEnd)==null||w.call(n,i.value,v),p(v))};return Mt&&(Ee(l,"pointerdown",u,!0),Ee(r,"pointermove",h,!0),Ee(r,"pointerup",g,!0)),pm(um({},C0(i)),{position:i,isDragging:A(()=>!!c.value),style:A(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var ql=Object.getOwnPropertySymbols,hm=Object.prototype.hasOwnProperty,mm=Object.prototype.propertyIsEnumerable,fm=(e,n)=>{var s={};for(var a in e)hm.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&ql)for(var a of ql(e))n.indexOf(a)<0&&mm.call(e,a)&&(s[a]=e[a]);return s};function gm(e,n,s={}){const a=s,{window:o=tt}=a,r=fm(a,["window"]);let l;const i=sa(()=>o&&"ResizeObserver"in o),c=()=>{l&&(l.disconnect(),l=void 0)},d=He(()=>Bt(e),u=>{c(),i.value&&o&&u&&(l=new ResizeObserver(n),l.observe(u,r))},{immediate:!0,flush:"post"}),p=()=>{c(),d()};return qt(p),{isSupported:i,stop:p}}function vm(e,n={}){const{immediate:s=!0,window:a=tt}=n,o=ae(!1);let r=0,l=null;function i(p){if(!o.value||!a)return;const u=p-r;e({delta:u,timestamp:p}),r=p,l=a.requestAnimationFrame(i)}function c(){!o.value&&a&&(o.value=!0,l=a.requestAnimationFrame(i))}function d(){o.value=!1,l!=null&&a&&(a.cancelAnimationFrame(l),l=null)}return s&&c(),qt(d),{isActive:o,pause:d,resume:c}}function ym(e,n={width:0,height:0},s={}){const{box:a="content-box"}=s,o=ae(n.width),r=ae(n.height);return gm(e,([l])=>{const i=a==="border-box"?l.borderBoxSize:a==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;i?(o.value=i.reduce((c,{inlineSize:d})=>c+d,0),r.value=i.reduce((c,{blockSize:d})=>c+d,0)):(o.value=l.contentRect.width,r.value=l.contentRect.height)},s),He(()=>Bt(e),l=>{o.value=l?n.width:0,r.value=l?n.height:0}),{width:o,height:r}}const Jl=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function wm(e,n={}){const{document:s=ed,autoExit:a=!1}=n,o=e||(s==null?void 0:s.querySelector("html")),r=ae(!1);let l=Jl[0];const i=sa(()=>{if(s){for(const w of Jl)if(w[1]in s)return l=w,!0}else return!1;return!1}),[c,d,p,,u]=l;async function h(){i.value&&(s!=null&&s[p]&&await s[d](),r.value=!1)}async function g(){if(!i.value)return;await h();const w=Bt(o);w&&(await w[c](),r.value=!0)}async function v(){r.value?await h():await g()}return s&&Ee(s,u,()=>{r.value=!!(s!=null&&s[p])},!1),a&&qt(h),{isSupported:i,isFullscreen:r,enter:g,exit:h,toggle:v}}function A4(e,n,s={}){const{root:a,rootMargin:o="0px",threshold:r=.1,window:l=tt}=s,i=sa(()=>l&&"IntersectionObserver"in l);let c=Ps;const d=i.value?He(()=>({el:Bt(e),root:Bt(a)}),({el:u,root:h})=>{if(c(),!u)return;const g=new IntersectionObserver(n,{root:h,rootMargin:o,threshold:r});g.observe(u),c=()=>{g.disconnect(),c=Ps}},{immediate:!0,flush:"post"}):Ps,p=()=>{c(),d()};return qt(p),{isSupported:i,stop:p}}const bm={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function xm(e={}){const{reactive:n=!1,target:s=tt,aliasMap:a=bm,passive:o=!0,onEventFired:r=Ps}=e,l=Ze(new Set),i={toJSON(){return{}},current:l},c=n?Ze(i):i,d=new Set,p=new Set;function u(w,b){w in c&&(n?c[w]=b:c[w].value=b)}function h(){l.clear();for(const w of p)u(w,!1)}function g(w,b){var S,k;const E=(S=w.key)==null?void 0:S.toLowerCase(),W=[(k=w.code)==null?void 0:k.toLowerCase(),E].filter(Boolean);E&&(b?l.add(E):l.delete(E));for(const q of W)p.add(q),u(q,b);E==="meta"&&!b?(d.forEach(q=>{l.delete(q),u(q,!1)}),d.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&b&&[...l,...W].forEach(q=>d.add(q))}Ee(s,"keydown",w=>(g(w,!0),r(w)),{passive:o}),Ee(s,"keyup",w=>(g(w,!1),r(w)),{passive:o}),Ee("blur",h,{passive:!0}),Ee("focus",h,{passive:!0});const v=new Proxy(c,{get(w,b,S){if(typeof b!="string")return Reflect.get(w,b,S);if(b=b.toLowerCase(),b in a&&(b=a[b]),!(b in c))if(/[+_-]/.test(b)){const E=b.split(/[+_-]/g).map(T=>T.trim());c[b]=A(()=>E.every(T=>_(v[T])))}else c[b]=ae(!1);const k=Reflect.get(w,b,S);return n?_(k):k}});return v}function T4(e={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:a=!1,initialValue:o={x:0,y:0},window:r=tt,eventFilter:l}=e,i=ae(o.x),c=ae(o.y),d=ae(null),p=w=>{n==="page"?(i.value=w.pageX,c.value=w.pageY):n==="client"&&(i.value=w.clientX,c.value=w.clientY),d.value="mouse"},u=()=>{i.value=o.x,c.value=o.y},h=w=>{if(w.touches.length>0){const b=w.touches[0];n==="page"?(i.value=b.pageX,c.value=b.pageY):n==="client"&&(i.value=b.clientX,c.value=b.clientY),d.value="touch"}},g=w=>l===void 0?p(w):l(()=>p(w),{}),v=w=>l===void 0?h(w):l(()=>h(w),{});return r&&(Ee(r,"mousemove",g,{passive:!0}),Ee(r,"dragover",g,{passive:!0}),s&&(Ee(r,"touchstart",v,{passive:!0}),Ee(r,"touchmove",v,{passive:!0}),a&&Ee(r,"touchend",u,{passive:!0}))),{x:i,y:c,sourceType:d}}var Xt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Xt||(Xt={}));function _m(e,n={}){const s=Yc(e),{threshold:a=50,onSwipe:o,onSwipeEnd:r,onSwipeStart:l}=n,i=Ze({x:0,y:0}),c=(q,R)=>{i.x=q,i.y=R},d=Ze({x:0,y:0}),p=(q,R)=>{d.x=q,d.y=R},u=A(()=>i.x-d.x),h=A(()=>i.y-d.y),{max:g,abs:v}=Math,w=A(()=>g(v(u.value),v(h.value))>=a),b=ae(!1),S=ae(!1),k=A(()=>w.value?v(u.value)>v(h.value)?u.value>0?Xt.LEFT:Xt.RIGHT:h.value>0?Xt.UP:Xt.DOWN:Xt.NONE),E=q=>{var R,te,de;const fe=q.buttons===0,we=q.buttons===1;return(de=(te=(R=n.pointerTypes)==null?void 0:R.includes(q.pointerType))!=null?te:fe||we)!=null?de:!0},T=[Ee(e,"pointerdown",q=>{var R,te;if(!E(q))return;S.value=!0,(te=(R=s.value)==null?void 0:R.style)==null||te.setProperty("touch-action","none");const de=q.target;de==null||de.setPointerCapture(q.pointerId);const{clientX:fe,clientY:we}=q;c(fe,we),p(fe,we),l==null||l(q)}),Ee(e,"pointermove",q=>{if(!E(q)||!S.value)return;const{clientX:R,clientY:te}=q;p(R,te),!b.value&&w.value&&(b.value=!0),b.value&&(o==null||o(q))}),Ee(e,"pointerup",q=>{var R,te;E(q)&&(b.value&&(r==null||r(q,k.value)),S.value=!1,b.value=!1,(te=(R=s.value)==null?void 0:R.style)==null||te.setProperty("touch-action","initial"))})],W=()=>T.forEach(q=>q());return{isSwiping:An(b),direction:An(k),posStart:An(i),posEnd:An(d),distanceX:u,distanceY:h,stop:W}}let Fm=0;function M4(e,n={}){const s=ae(!1),{document:a=ed,immediate:o=!0,manual:r=!1,id:l=`vueuse_styletag_${++Fm}`}=n,i=ae(e);let c=()=>{};const d=()=>{if(!a)return;const u=a.getElementById(l)||a.createElement("style");u.isConnected||(u.type="text/css",u.id=l,n.media&&(u.media=n.media),a.head.appendChild(u)),!s.value&&(c=He(i,h=>{u.textContent=h},{immediate:!0}),s.value=!0)},p=()=>{!a||!s.value||(c(),a.head.removeChild(a.getElementById(l)),s.value=!1)};return o&&!r&&Cr(d),r||qt(p),{id:l,css:i,unload:p,load:d,isLoaded:An(s)}}var km=Object.defineProperty,Wl=Object.getOwnPropertySymbols,Cm=Object.prototype.hasOwnProperty,Em=Object.prototype.propertyIsEnumerable,Vl=(e,n,s)=>n in e?km(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Sm=(e,n)=>{for(var s in n||(n={}))Cm.call(n,s)&&Vl(e,s,n[s]);if(Wl)for(var s of Wl(n))Em.call(n,s)&&Vl(e,s,n[s]);return e};function $4(e={}){const{controls:n=!1,offset:s=0,immediate:a=!0,interval:o="requestAnimationFrame",callback:r}=e,l=ae(Bo()+s),i=()=>l.value=Bo()+s,c=r?()=>{i(),r(l.value)}:i,d=o==="requestAnimationFrame"?vm(c,{immediate:a}):E0(c,o,{immediate:a});return n?Sm({timestamp:l},d):l}var Im=Object.defineProperty,Ul=Object.getOwnPropertySymbols,jm=Object.prototype.hasOwnProperty,Am=Object.prototype.propertyIsEnumerable,Gl=(e,n,s)=>n in e?Im(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Tm=(e,n)=>{for(var s in n||(n={}))jm.call(n,s)&&Gl(e,s,n[s]);if(Ul)for(var s of Ul(n))Am.call(n,s)&&Gl(e,s,n[s]);return e};const Mm={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Tm({linear:m0},Mm);function Lt(e,n,s,a={}){var o,r,l;const{clone:i=!1,passive:c=!1,eventName:d,deep:p=!1,defaultValue:u}=a,h=Fn(),g=s||(h==null?void 0:h.emit)||((o=h==null?void 0:h.$emit)==null?void 0:o.bind(h))||((l=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:l.bind(h==null?void 0:h.proxy));let v=d;n||(n="modelValue"),v=d||v||`update:${n.toString()}`;const w=S=>i?Vs(i)?i(S):Z0(S):S,b=()=>d0(e[n])?w(e[n]):u;if(c){const S=b(),k=ae(S);return He(()=>e[n],E=>k.value=w(E)),He(k,E=>{(E!==e[n]||p)&&g(v,E)},{deep:p}),k}else return A({get(){return b()},set(S){g(v,S)}})}function D4({window:e=tt}={}){if(!e)return ae(!1);const n=ae(e.document.hasFocus());return Ee(e,"blur",()=>{n.value=!1}),Ee(e,"focus",()=>{n.value=!0}),n}function $m(e={}){const{window:n=tt,initialWidth:s=1/0,initialHeight:a=1/0,listenOrientation:o=!0,includeScrollbar:r=!0}=e,l=ae(s),i=ae(a),c=()=>{n&&(r?(l.value=n.innerWidth,i.value=n.innerHeight):(l.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};return c(),Cr(c),Ee("resize",c,{passive:!0}),o&&Ee("orientationchange",c,{passive:!0}),{width:l,height:i}}function Dm(){return td().__VUE_DEVTOOLS_GLOBAL_HOOK__}function td(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Pm=typeof Proxy=="function",Om="devtools-plugin:setup",Nm="plugin:settings:set";let Qn,Ro;function Hm(){var e;return Qn!==void 0||(typeof window<"u"&&window.performance?(Qn=!0,Ro=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Qn=!0,Ro=global.perf_hooks.performance):Qn=!1),Qn}function Bm(){return Hm()?Ro.now():Date.now()}class Lm{constructor(n,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=s;const a={};if(n.settings)for(const l in n.settings){const i=n.settings[l];a[l]=i.defaultValue}const o=`__vue-devtools-plugin-settings__${n.id}`;let r=Object.assign({},a);try{const l=localStorage.getItem(o),i=JSON.parse(l);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(l){try{localStorage.setItem(o,JSON.stringify(l))}catch{}r=l},now(){return Bm()}},s&&s.on(Nm,(l,i)=>{l===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(l,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(l,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(d=>{this.targetQueue.push({method:i,args:c,resolve:d})})})}async setRealTarget(n){this.target=n;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function zm(e,n){const s=e,a=td(),o=Dm(),r=Pm&&s.enableEarlyProxy;if(o&&(a.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))o.emit(Om,e,n);else{const l=r?new Lm(s,o):null;(a.__VUE_DEVTOOLS_PLUGINS__=a.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:n,proxy:l}),l&&n(l.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Yt=typeof window<"u";function Rm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ke=Object.assign;function ho(e,n){const s={};for(const a in n){const o=n[a];s[a]=bt(o)?o.map(e):e(o)}return s}const Os=()=>{},bt=Array.isArray;function xe(e){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(n))}const Km=/\/$/,qm=e=>e.replace(Km,"");function mo(e,n,s="/"){let a,o={},r="",l="";const i=n.indexOf("#");let c=n.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(a=n.slice(0,c),r=n.slice(c+1,i>-1?i:n.length),o=e(r)),i>-1&&(a=a||n.slice(0,i),l=n.slice(i,n.length)),a=Vm(a??n,s),{fullPath:a+(r&&"?")+r+l,path:a,query:o,hash:l}}function Jm(e,n){const s=n.query?e(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function Yl(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Zl(e,n,s){const a=n.matched.length-1,o=s.matched.length-1;return a>-1&&a===o&&xn(n.matched[a],s.matched[o])&&nd(n.params,s.params)&&e(n.query)===e(s.query)&&n.hash===s.hash}function xn(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function nd(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(!Wm(e[s],n[s]))return!1;return!0}function Wm(e,n){return bt(e)?Xl(e,n):bt(n)?Xl(n,e):e===n}function Xl(e,n){return bt(n)?e.length===n.length&&e.every((s,a)=>s===n[a]):e.length===1&&e[0]===n}function Vm(e,n){if(e.startsWith("/"))return e;if(!n.startsWith("/"))return xe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${n}". It should look like "/${n}".`),e;if(!e)return n;const s=n.split("/"),a=e.split("/");let o=s.length-1,r,l;for(r=0;r<a.length;r++)if(l=a[r],l!==".")if(l==="..")o>1&&o--;else break;return s.slice(0,o).join("/")+"/"+a.slice(r-(r===a.length?1:0)).join("/")}var Us;(function(e){e.pop="pop",e.push="push"})(Us||(Us={}));var Ns;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ns||(Ns={}));function Um(e){if(!e)if(Yt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),qm(e)}const Gm=/^[^#]+#/;function Ym(e,n){return e.replace(Gm,"#")+n}function Zm(e,n){const s=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:n.behavior,left:a.left-s.left-(n.left||0),top:a.top-s.top-(n.top||0)}}const no=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xm(e){let n;if("el"in e){const s=e.el,a=typeof s=="string"&&s.startsWith("#");if(typeof e.el=="string"&&(!a||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(a&&r){xe(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{xe(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const o=typeof s=="string"?a?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!o){xe(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}n=Zm(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Ql(e,n){return(history.state?history.state.position-n:-1)+e}const Ko=new Map;function Qm(e,n){Ko.set(e,n)}function ef(e){const n=Ko.get(e);return Ko.delete(e),n}let tf=()=>location.protocol+"//"+location.host;function sd(e,n){const{pathname:s,search:a,hash:o}=n,r=e.indexOf("#");if(r>-1){let i=o.includes(e.slice(r))?e.slice(r).length:1,c=o.slice(i);return c[0]!=="/"&&(c="/"+c),Yl(c,"")}return Yl(s,e)+a+o}function nf(e,n,s,a){let o=[],r=[],l=null;const i=({state:h})=>{const g=sd(e,location),v=s.value,w=n.value;let b=0;if(h){if(s.value=g,n.value=h,l&&l===v){l=null;return}b=w?h.position-w.position:0}else a(g);o.forEach(S=>{S(s.value,v,{delta:b,type:Us.pop,direction:b?b>0?Ns.forward:Ns.back:Ns.unknown})})};function c(){l=s.value}function d(h){o.push(h);const g=()=>{const v=o.indexOf(h);v>-1&&o.splice(v,1)};return r.push(g),g}function p(){const{history:h}=window;h.state&&h.replaceState(ke({},h.state,{scroll:no()}),"")}function u(){for(const h of r)h();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:d,destroy:u}}function ei(e,n,s,a=!1,o=!1){return{back:e,current:n,forward:s,replaced:a,position:window.history.length,scroll:o?no():null}}function sf(e){const{history:n,location:s}=window,a={value:sd(e,s)},o={value:n.state};o.value||r(a.value,{back:null,current:a.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(c,d,p){const u=e.indexOf("#"),h=u>-1?(s.host&&document.querySelector("base")?e:e.slice(u))+c:tf()+e+c;try{n[p?"replaceState":"pushState"](d,"",h),o.value=d}catch(g){xe("Error with push/replace State",g),s[p?"replace":"assign"](h)}}function l(c,d){const p=ke({},n.state,ei(o.value.back,c,o.value.forward,!0),d,{position:o.value.position});r(c,p,!0),a.value=c}function i(c,d){const p=ke({},o.value,n.state,{forward:c,scroll:no()});n.state||xe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(p.current,p,!0);const u=ke({},ei(a.value,c,null),{position:p.position+1},d);r(c,u,!1),a.value=c}return{location:a,state:o,push:i,replace:l}}function af(e){e=Um(e);const n=sf(e),s=nf(e,n.state,n.location,n.replace);function a(r,l=!0){l||s.pauseListeners(),history.go(r)}const o=ke({location:"",base:e,go:a,createHref:Ym.bind(null,e)},n,s);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function of(e){return typeof e=="string"||e&&typeof e=="object"}function ad(e){return typeof e=="string"||typeof e=="symbol"}const ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},od=Symbol("navigation failure");var ti;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ti||(ti={}));const rf={[1]({location:e,currentLocation:n}){return`No match for
 ${JSON.stringify(e)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:e,to:n}){return`Redirected from "${e.fullPath}" to "${cf(n)}" via a navigation guard.`},[4]({from:e,to:n}){return`Navigation aborted from "${e.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:e,to:n}){return`Navigation cancelled from "${e.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:e,to:n}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function ms(e,n){return ke(new Error(rf[e](n)),{type:e,[od]:!0},n)}function Wt(e,n){return e instanceof Error&&od in e&&(n==null||!!(e.type&n))}const lf=["params","query","hash"];function cf(e){if(typeof e=="string")return e;if("path"in e)return e.path;const n={};for(const s of lf)s in e&&(n[s]=e[s]);return JSON.stringify(n,null,2)}const ni="[^/]+?",df={sensitive:!1,strict:!1,start:!0,end:!0},uf=/[.+*?^${}()[\]/\\]/g;function pf(e,n){const s=ke({},df,n),a=[];let o=s.start?"^":"";const r=[];for(const d of e){const p=d.length?[]:[90];s.strict&&!d.length&&(o+="/");for(let u=0;u<d.length;u++){const h=d[u];let g=40+(s.sensitive?.25:0);if(h.type===0)u||(o+="/"),o+=h.value.replace(uf,"\\$&"),g+=40;else if(h.type===1){const{value:v,repeatable:w,optional:b,regexp:S}=h;r.push({name:v,repeatable:w,optional:b});const k=S||ni;if(k!==ni){g+=10;try{new RegExp(`(${k})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${v}" (${k}): `+T.message)}}let E=w?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;u||(E=b&&d.length<2?`(?:/${E})`:"/"+E),b&&(E+="?"),o+=E,g+=20,b&&(g+=-8),w&&(g+=-20),k===".*"&&(g+=-50)}p.push(g)}a.push(p)}if(s.strict&&s.end){const d=a.length-1;a[d][a[d].length-1]+=.7000000000000001}s.strict||(o+="/?"),s.end?o+="$":s.strict&&(o+="(?:/|$)");const l=new RegExp(o,s.sensitive?"":"i");function i(d){const p=d.match(l),u={};if(!p)return null;for(let h=1;h<p.length;h++){const g=p[h]||"",v=r[h-1];u[v.name]=g&&v.repeatable?g.split("/"):g}return u}function c(d){let p="",u=!1;for(const h of e){(!u||!p.endsWith("/"))&&(p+="/"),u=!1;for(const g of h)if(g.type===0)p+=g.value;else if(g.type===1){const{value:v,repeatable:w,optional:b}=g,S=v in d?d[v]:"";if(bt(S)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const k=bt(S)?S.join("/"):S;if(!k)if(b)h.length<2&&(p.endsWith("/")?p=p.slice(0,-1):u=!0);else throw new Error(`Missing required param "${v}"`);p+=k}}return p||"/"}return{re:l,score:a,keys:r,parse:i,stringify:c}}function hf(e,n){let s=0;for(;s<e.length&&s<n.length;){const a=n[s]-e[s];if(a)return a;s++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function mf(e,n){let s=0;const a=e.score,o=n.score;for(;s<a.length&&s<o.length;){const r=hf(a[s],o[s]);if(r)return r;s++}if(Math.abs(o.length-a.length)===1){if(si(a))return 1;if(si(o))return-1}return o.length-a.length}function si(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const ff={type:0,value:""},gf=/[a-zA-Z0-9_]/;function vf(e){if(!e)return[[]];if(e==="/")return[[ff]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function n(g){throw new Error(`ERR (${s})/"${d}": ${g}`)}let s=0,a=s;const o=[];let r;function l(){r&&o.push(r),r=[]}let i=0,c,d="",p="";function u(){d&&(s===0?r.push({type:0,value:d}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:d,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),d="")}function h(){d+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&s!==2){a=s,s=4;continue}switch(s){case 0:c==="/"?(d&&u(),l()):c===":"?(u(),s=1):h();break;case 4:h(),s=a;break;case 1:c==="("?s=2:gf.test(c)?h():(u(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:s=3:p+=c;break;case 3:u(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,p="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${d}"`),u(),l(),o}function yf(e,n,s){const a=pf(vf(e.path),s);{const r=new Set;for(const l of a.keys)r.has(l.name)&&xe(`Found duplicated params with name "${l.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(l.name)}const o=ke(a,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function wf(e,n){const s=[],a=new Map;n=ri({strict:!1,end:!0,sensitive:!1},n);function o(p){return a.get(p)}function r(p,u,h){const g=!h,v=bf(p);kf(v,u),v.aliasOf=h&&h.record;const w=ri(n,p),b=[v];if("alias"in p){const E=typeof p.alias=="string"?[p.alias]:p.alias;for(const T of E)b.push(ke({},v,{components:h?h.record.components:v.components,path:T,aliasOf:h?h.record:v}))}let S,k;for(const E of b){const{path:T}=E;if(u&&T[0]!=="/"){const W=u.record.path,q=W[W.length-1]==="/"?"":"/";E.path=u.record.path+(T&&q+T)}if(E.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(S=yf(E,u,w),u&&T[0]==="/"&&Cf(S,u),h?(h.alias.push(S),Ff(h,S)):(k=k||S,k!==S&&k.alias.push(S),g&&p.name&&!oi(S)&&l(p.name)),v.children){const W=v.children;for(let q=0;q<W.length;q++)r(W[q],S,h&&h.children[q])}h=h||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return k?()=>{l(k)}:Os}function l(p){if(ad(p)){const u=a.get(p);u&&(a.delete(p),s.splice(s.indexOf(u),1),u.children.forEach(l),u.alias.forEach(l))}else{const u=s.indexOf(p);u>-1&&(s.splice(u,1),p.record.name&&a.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function i(){return s}function c(p){let u=0;for(;u<s.length&&mf(p,s[u])>=0&&(p.record.path!==s[u].record.path||!rd(p,s[u]));)u++;s.splice(u,0,p),p.record.name&&!oi(p)&&a.set(p.record.name,p)}function d(p,u){let h,g={},v,w;if("name"in p&&p.name){if(h=a.get(p.name),!h)throw ms(1,{location:p});{const k=Object.keys(p.params||{}).filter(E=>!h.keys.find(T=>T.name===E));k.length&&xe(`Discarded invalid param(s) "${k.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}w=h.record.name,g=ke(ai(u.params,h.keys.filter(k=>!k.optional).map(k=>k.name)),p.params&&ai(p.params,h.keys.map(k=>k.name))),v=h.stringify(g)}else if("path"in p)v=p.path,v.startsWith("/")||xe(`The Matcher cannot resolve relative paths but received "${v}". Unless you directly called \`matcher.resolve("${v}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=s.find(k=>k.re.test(v)),h&&(g=h.parse(v),w=h.record.name);else{if(h=u.name?a.get(u.name):s.find(k=>k.re.test(u.path)),!h)throw ms(1,{location:p,currentLocation:u});w=h.record.name,g=ke({},u.params,p.params),v=h.stringify(g)}const b=[];let S=h;for(;S;)b.unshift(S.record),S=S.parent;return{name:w,path:v,params:g,matched:b,meta:_f(b)}}return e.forEach(p=>r(p)),{addRoute:r,resolve:d,removeRoute:l,getRoutes:i,getRecordMatcher:o}}function ai(e,n){const s={};for(const a of n)a in e&&(s[a]=e[a]);return s}function bf(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:xf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function xf(e){const n={},s=e.props||!1;if("component"in e)n.default=s;else for(const a in e.components)n[a]=typeof s=="boolean"?s:s[a];return n}function oi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function _f(e){return e.reduce((n,s)=>ke(n,s.meta),{})}function ri(e,n){const s={};for(const a in e)s[a]=a in n?n[a]:e[a];return s}function qo(e,n){return e.name===n.name&&e.optional===n.optional&&e.repeatable===n.repeatable}function Ff(e,n){for(const s of e.keys)if(!s.optional&&!n.keys.find(qo.bind(null,s)))return xe(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`);for(const s of n.keys)if(!s.optional&&!e.keys.find(qo.bind(null,s)))return xe(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`)}function kf(e,n){n&&n.record.name&&!e.name&&!e.path&&xe(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Cf(e,n){for(const s of n.keys)if(!e.keys.find(qo.bind(null,s)))return xe(`Absolute path "${e.record.path}" must have the exact same param named "${s.name}" as its parent "${n.record.path}".`)}function rd(e,n){return n.children.some(s=>s===e||rd(e,s))}const ld=/#/g,Ef=/&/g,Sf=/\//g,If=/=/g,jf=/\?/g,id=/\+/g,Af=/%5B/g,Tf=/%5D/g,cd=/%5E/g,Mf=/%60/g,dd=/%7B/g,$f=/%7C/g,ud=/%7D/g,Df=/%20/g;function Er(e){return encodeURI(""+e).replace($f,"|").replace(Af,"[").replace(Tf,"]")}function Pf(e){return Er(e).replace(dd,"{").replace(ud,"}").replace(cd,"^")}function Jo(e){return Er(e).replace(id,"%2B").replace(Df,"+").replace(ld,"%23").replace(Ef,"%26").replace(Mf,"`").replace(dd,"{").replace(ud,"}").replace(cd,"^")}function Of(e){return Jo(e).replace(If,"%3D")}function Nf(e){return Er(e).replace(ld,"%23").replace(jf,"%3F")}function Hf(e){return e==null?"":Nf(e).replace(Sf,"%2F")}function Gs(e){try{return decodeURIComponent(""+e)}catch{xe(`Error decoding "${e}". Using original value`)}return""+e}function Bf(e){const n={};if(e===""||e==="?")return n;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<a.length;++o){const r=a[o].replace(id," "),l=r.indexOf("="),i=Gs(l<0?r:r.slice(0,l)),c=l<0?null:Gs(r.slice(l+1));if(i in n){let d=n[i];bt(d)||(d=n[i]=[d]),d.push(c)}else n[i]=c}return n}function li(e){let n="";for(let s in e){const a=e[s];if(s=Of(s),a==null){a!==void 0&&(n+=(n.length?"&":"")+s);continue}(bt(a)?a.map(r=>r&&Jo(r)):[a&&Jo(a)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+s,r!=null&&(n+="="+r))})}return n}function Lf(e){const n={};for(const s in e){const a=e[s];a!==void 0&&(n[s]=bt(a)?a.map(o=>o==null?null:""+o):a==null?a:""+a)}return n}const zf=Symbol("router view location matched"),ii=Symbol("router view depth"),Sr=Symbol("router"),pd=Symbol("route location"),Wo=Symbol("router view location");function _s(){let e=[];function n(a){return e.push(a),()=>{const o=e.indexOf(a);o>-1&&e.splice(o,1)}}function s(){e=[]}return{add:n,list:()=>e,reset:s}}function un(e,n,s,a,o){const r=a&&(a.enterCallbacks[o]=a.enterCallbacks[o]||[]);return()=>new Promise((l,i)=>{const c=u=>{u===!1?i(ms(4,{from:s,to:n})):u instanceof Error?i(u):of(u)?i(ms(2,{from:n,to:u})):(r&&a.enterCallbacks[o]===r&&typeof u=="function"&&r.push(u),l())},d=e.call(a&&a.instances[o],n,s,Rf(c,n,s));let p=Promise.resolve(d);if(e.length<3&&(p=p.then(c)),e.length>2){const u=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof d=="object"&&"then"in d)p=p.then(h=>c._called?h:(xe(u),Promise.reject(new Error("Invalid navigation guard"))));else if(d!==void 0&&!c._called){xe(u),i(new Error("Invalid navigation guard"));return}}p.catch(u=>i(u))})}function Rf(e,n,s){let a=0;return function(){a++===1&&xe(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,a===1&&e.apply(null,arguments)}}function fo(e,n,s,a){const o=[];for(const r of e){!r.components&&!r.children.length&&xe(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const l in r.components){let i=r.components[l];{if(!i||typeof i!="object"&&typeof i!="function")throw xe(`Component "${l}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){xe(`Component "${l}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,xe(`Component "${l}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!r.instances[l]))if(Kf(i)){const d=(i.__vccOpts||i)[n];d&&o.push(un(d,s,a,r,l))}else{let c=i();"catch"in c||(xe(`Component "${l}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),o.push(()=>c.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${r.path}"`));const p=Rm(d)?d.default:d;r.components[l]=p;const h=(p.__vccOpts||p)[n];return h&&un(h,s,a,r,l)()}))}}}return o}function Kf(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ci(e){const n=P(Sr),s=P(pd),a=A(()=>n.resolve(_(e.to))),o=A(()=>{const{matched:c}=a.value,{length:d}=c,p=c[d-1],u=s.matched;if(!p||!u.length)return-1;const h=u.findIndex(xn.bind(null,p));if(h>-1)return h;const g=di(c[d-2]);return d>1&&di(p)===g&&u[u.length-1].path!==g?u.findIndex(xn.bind(null,c[d-2])):h}),r=A(()=>o.value>-1&&Vf(s.params,a.value.params)),l=A(()=>o.value>-1&&o.value===s.matched.length-1&&nd(s.params,a.value.params));function i(c={}){return Wf(c)?n[_(e.replace)?"replace":"push"](_(e.to)).catch(Os):Promise.resolve()}if(Yt){const c=Fn();if(c){const d={route:a.value,isActive:r.value,isExactActive:l.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(d),gs(()=>{d.route=a.value,d.isActive=r.value,d.isExactActive=l.value},{flush:"post"})}}return{route:a,href:A(()=>a.value.href),isActive:r,isExactActive:l,navigate:i}}const qf=Oe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ci,setup(e,{slots:n}){const s=Ze(ci(e)),{options:a}=P(Sr),o=A(()=>({[ui(e.activeClass,a.linkActiveClass,"router-link-active")]:s.isActive,[ui(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=n.default&&n.default(s);return e.custom?r:to("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:o.value},r)}}}),Jf=qf;function Wf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Vf(e,n){for(const s in n){const a=n[s],o=e[s];if(typeof a=="string"){if(a!==o)return!1}else if(!bt(o)||o.length!==a.length||a.some((r,l)=>r!==o[l]))return!1}return!0}function di(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ui=(e,n,s)=>e??n??s,Uf=Oe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:s}){Yf();const a=P(Wo),o=A(()=>e.route||a.value),r=P(ii,0),l=A(()=>{let d=_(r);const{matched:p}=o.value;let u;for(;(u=p[d])&&!u.components;)d++;return d}),i=A(()=>o.value.matched[l.value]);vt(ii,A(()=>l.value+1)),vt(zf,i),vt(Wo,o);const c=ae();return He(()=>[c.value,i.value,e.name],([d,p,u],[h,g,v])=>{p&&(p.instances[u]=d,g&&g!==p&&d&&d===h&&(p.leaveGuards.size||(p.leaveGuards=g.leaveGuards),p.updateGuards.size||(p.updateGuards=g.updateGuards))),d&&p&&(!g||!xn(p,g)||!h)&&(p.enterCallbacks[u]||[]).forEach(w=>w(d))},{flush:"post"}),()=>{const d=o.value,p=e.name,u=i.value,h=u&&u.components[p];if(!h)return pi(s.default,{Component:h,route:d});const g=u.props[p],v=g?g===!0?d.params:typeof g=="function"?g(d):g:null,b=to(h,ke({},v,n,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(u.instances[p]=null)},ref:c}));if(Yt&&b.ref){const S={depth:l.value,name:u.name,path:u.path,meta:u.meta};(bt(b.ref)?b.ref.map(E=>E.i):[b.ref.i]).forEach(E=>{E.__vrv_devtools=S})}return pi(s.default,{Component:b,route:d})||b}}});function pi(e,n){if(!e)return null;const s=e(n);return s.length===1?s[0]:s}const Gf=Uf;function Yf(){const e=Fn(),n=e.parent&&e.parent.type.name;if(n&&(n==="KeepAlive"||n.includes("Transition"))){const s=n==="KeepAlive"?"keep-alive":"transition";xe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function Fs(e,n){const s=ke({},e,{matched:e.matched.map(a=>og(a,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:n,value:s}}}function pa(e){return{_custom:{display:e}}}let Zf=0;function Xf(e,n,s){if(n.__hasDevtools)return;n.__hasDevtools=!0;const a=Zf++;zm({id:"org.vuejs.router"+(a?"."+a:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},o=>{typeof o.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.on.inspectComponent((p,u)=>{p.instanceData&&p.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Fs(n.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:p,componentInstance:u})=>{if(u.__vrv_devtools){const h=u.__vrv_devtools;p.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:hd})}bt(u.__vrl_devtools)&&(u.__devtoolsApi=o,u.__vrl_devtools.forEach(h=>{let g=gd,v="";h.isExactActive?(g=fd,v="This is exactly active"):h.isActive&&(g=md,v="This link is active"),p.tags.push({label:h.route.path,textColor:0,tooltip:v,backgroundColor:g})}))}),He(n.currentRoute,()=>{c(),o.notifyComponentUpdate(),o.sendInspectorTree(i),o.sendInspectorState(i)});const r="router:navigations:"+a;o.addTimelineLayer({id:r,label:`Router${a?" "+a:""} Navigations`,color:4237508}),n.onError((p,u)=>{o.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:u.fullPath,logType:"error",time:o.now(),data:{error:p},groupId:u.meta.__navigationId}})});let l=0;n.beforeEach((p,u)=>{const h={guard:pa("beforeEach"),from:Fs(u,"Current Location during this navigation"),to:Fs(p,"Target location")};Object.defineProperty(p.meta,"__navigationId",{value:l++}),o.addTimelineEvent({layerId:r,event:{time:o.now(),title:"Start of navigation",subtitle:p.fullPath,data:h,groupId:p.meta.__navigationId}})}),n.afterEach((p,u,h)=>{const g={guard:pa("afterEach")};h?(g.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},g.status=pa("❌")):g.status=pa("✅"),g.from=Fs(u,"Current Location during this navigation"),g.to=Fs(p,"Target location"),o.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:p.fullPath,time:o.now(),data:g,logType:h?"warning":"default",groupId:p.meta.__navigationId}})});const i="router-inspector:"+a;o.addInspector({id:i,label:"Routes"+(a?" "+a:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!d)return;const p=d;let u=s.getRoutes().filter(h=>!h.parent);u.forEach(wd),p.filter&&(u=u.filter(h=>Vo(h,p.filter.toLowerCase()))),u.forEach(h=>yd(h,n.currentRoute.value)),p.rootNodes=u.map(vd)}let d;o.on.getInspectorTree(p=>{d=p,p.app===e&&p.inspectorId===i&&c()}),o.on.getInspectorState(p=>{if(p.app===e&&p.inspectorId===i){const h=s.getRoutes().find(g=>g.record.__vd_id===p.nodeId);h&&(p.state={options:eg(h)})}}),o.sendInspectorTree(i),o.sendInspectorState(i)})}function Qf(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function eg(e){const{record:n}=e,s=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&s.push({editable:!1,key:"name",value:n.name}),s.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(a=>`${a.name}${Qf(a)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),n.redirect!=null&&s.push({editable:!1,key:"redirect",value:n.redirect}),e.alias.length&&s.push({editable:!1,key:"aliases",value:e.alias.map(a=>a.record.path)}),Object.keys(e.record.meta).length&&s.push({editable:!1,key:"meta",value:e.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(a=>a.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),s}const hd=15485081,md=2450411,fd=8702998,tg=2282478,gd=16486972,ng=6710886;function vd(e){const n=[],{record:s}=e;s.name!=null&&n.push({label:String(s.name),textColor:0,backgroundColor:tg}),s.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:gd}),e.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:hd}),e.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:fd}),e.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:md}),s.redirect&&n.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:ng});let a=s.__vd_id;return a==null&&(a=String(sg++),s.__vd_id=a),{id:a,label:s.path,tags:n,children:e.children.map(vd)}}let sg=0;const ag=/^\/(.*)\/([a-z]*)$/;function yd(e,n){const s=n.matched.length&&xn(n.matched[n.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=s,s||(e.__vd_active=n.matched.some(a=>xn(a,e.record))),e.children.forEach(a=>yd(a,n))}function wd(e){e.__vd_match=!1,e.children.forEach(wd)}function Vo(e,n){const s=String(e.re).match(ag);if(e.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(n))return e.children.forEach(l=>Vo(l,n)),e.record.path!=="/"||n==="/"?(e.__vd_match=e.re.test(n),!0):!1;const o=e.record.path.toLowerCase(),r=Gs(o);return!n.startsWith("/")&&(r.includes(n)||o.includes(n))||r.startsWith(n)||o.startsWith(n)||e.record.name&&String(e.record.name).includes(n)?!0:e.children.some(l=>Vo(l,n))}function og(e,n){const s={};for(const a in e)n.includes(a)||(s[a]=e[a]);return s}function rg(e){const n=wf(e.routes,e),s=e.parseQuery||Bf,a=e.stringifyQuery||li,o=e.history;if(!o)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=_s(),l=_s(),i=_s(),c=Kt(ln);let d=ln;Yt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=ho.bind(null,C=>""+C),u=ho.bind(null,Hf),h=ho.bind(null,Gs);function g(C,G){let B,Z;return ad(C)?(B=n.getRecordMatcher(C),Z=G):Z=C,n.addRoute(Z,B)}function v(C){const G=n.getRecordMatcher(C);G?n.removeRoute(G):xe(`Cannot remove non-existent route "${String(C)}"`)}function w(){return n.getRoutes().map(C=>C.record)}function b(C){return!!n.getRecordMatcher(C)}function S(C,G){if(G=ke({},G||c.value),typeof C=="string"){const ie=mo(s,C,G.path),m=n.resolve({path:ie.path},G),y=o.createHref(ie.fullPath);return y.startsWith("//")?xe(`Location "${C}" resolved to "${y}". A resolved location cannot start with multiple slashes.`):m.matched.length||xe(`No match found for location with path "${C}"`),ke(ie,m,{params:h(m.params),hash:Gs(ie.hash),redirectedFrom:void 0,href:y})}let B;if("path"in C)"params"in C&&!("name"in C)&&Object.keys(C.params).length&&xe(`Path "${C.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),B=ke({},C,{path:mo(s,C.path,G.path).path});else{const ie=ke({},C.params);for(const m in ie)ie[m]==null&&delete ie[m];B=ke({},C,{params:u(C.params)}),G.params=u(G.params)}const Z=n.resolve(B,G),ge=C.hash||"";ge&&!ge.startsWith("#")&&xe(`A \`hash\` should always start with the character "#". Replace "${ge}" with "#${ge}".`),Z.params=p(h(Z.params));const be=Jm(a,ke({},C,{hash:Pf(ge),path:Z.path})),ue=o.createHref(be);return ue.startsWith("//")?xe(`Location "${C}" resolved to "${ue}". A resolved location cannot start with multiple slashes.`):Z.matched.length||xe(`No match found for location with path "${"path"in C?C.path:C}"`),ke({fullPath:be,hash:ge,query:a===li?Lf(C.query):C.query||{}},Z,{redirectedFrom:void 0,href:ue})}function k(C){return typeof C=="string"?mo(s,C,c.value.path):ke({},C)}function E(C,G){if(d!==C)return ms(8,{from:G,to:C})}function T(C){return R(C)}function W(C){return T(ke(k(C),{replace:!0}))}function q(C){const G=C.matched[C.matched.length-1];if(G&&G.redirect){const{redirect:B}=G;let Z=typeof B=="function"?B(C):B;if(typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=k(Z):{path:Z},Z.params={}),!("path"in Z)&&!("name"in Z))throw xe(`Invalid redirect found:
${JSON.stringify(Z,null,2)}
 when navigating to "${C.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ke({query:C.query,hash:C.hash,params:"path"in Z?{}:C.params},Z)}}function R(C,G){const B=d=S(C),Z=c.value,ge=C.state,be=C.force,ue=C.replace===!0,ie=q(B);if(ie)return R(ke(k(ie),{state:typeof ie=="object"?ke({},ge,ie.state):ge,force:be,replace:ue}),G||B);const m=B;m.redirectedFrom=G;let y;return!be&&Zl(a,Z,B)&&(y=ms(16,{to:m,from:Z}),je(Z,Z,!0,!1)),(y?Promise.resolve(y):de(m,Z)).catch(F=>Wt(F)?Wt(F,2)?F:me(F):V(F,m,Z)).then(F=>{if(F){if(Wt(F,2))return Zl(a,S(F.to),m)&&G&&(G._count=G._count?G._count+1:1)>10?(xe(`Detected an infinite redirection in a navigation guard when going from "${Z.fullPath}" to "${m.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):R(ke({replace:ue},k(F.to),{state:typeof F.to=="object"?ke({},ge,F.to.state):ge,force:be}),G||m)}else F=we(m,Z,!0,ue,ge);return fe(m,Z,F),F})}function te(C,G){const B=E(C,G);return B?Promise.reject(B):Promise.resolve()}function de(C,G){let B;const[Z,ge,be]=lg(C,G);B=fo(Z.reverse(),"beforeRouteLeave",C,G);for(const ie of Z)ie.leaveGuards.forEach(m=>{B.push(un(m,C,G))});const ue=te.bind(null,C,G);return B.push(ue),es(B).then(()=>{B=[];for(const ie of r.list())B.push(un(ie,C,G));return B.push(ue),es(B)}).then(()=>{B=fo(ge,"beforeRouteUpdate",C,G);for(const ie of ge)ie.updateGuards.forEach(m=>{B.push(un(m,C,G))});return B.push(ue),es(B)}).then(()=>{B=[];for(const ie of C.matched)if(ie.beforeEnter&&!G.matched.includes(ie))if(bt(ie.beforeEnter))for(const m of ie.beforeEnter)B.push(un(m,C,G));else B.push(un(ie.beforeEnter,C,G));return B.push(ue),es(B)}).then(()=>(C.matched.forEach(ie=>ie.enterCallbacks={}),B=fo(be,"beforeRouteEnter",C,G),B.push(ue),es(B))).then(()=>{B=[];for(const ie of l.list())B.push(un(ie,C,G));return B.push(ue),es(B)}).catch(ie=>Wt(ie,8)?ie:Promise.reject(ie))}function fe(C,G,B){for(const Z of i.list())Z(C,G,B)}function we(C,G,B,Z,ge){const be=E(C,G);if(be)return be;const ue=G===ln,ie=Yt?history.state:{};B&&(Z||ue?o.replace(C.fullPath,ke({scroll:ue&&ie&&ie.scroll},ge)):o.push(C.fullPath,ge)),c.value=C,je(C,G,B,ue),me()}let Ne;function Ue(){Ne||(Ne=o.listen((C,G,B)=>{if(!on.listening)return;const Z=S(C),ge=q(Z);if(ge){R(ke(ge,{replace:!0}),Z).catch(Os);return}d=Z;const be=c.value;Yt&&Qm(Ql(be.fullPath,B.delta),no()),de(Z,be).catch(ue=>Wt(ue,12)?ue:Wt(ue,2)?(R(ue.to,Z).then(ie=>{Wt(ie,20)&&!B.delta&&B.type===Us.pop&&o.go(-1,!1)}).catch(Os),Promise.reject()):(B.delta&&o.go(-B.delta,!1),V(ue,Z,be))).then(ue=>{ue=ue||we(Z,be,!1),ue&&(B.delta&&!Wt(ue,8)?o.go(-B.delta,!1):B.type===Us.pop&&Wt(ue,20)&&o.go(-1,!1)),fe(Z,be,ue)}).catch(Os)}))}let Ge=_s(),Ie=_s(),Pe;function V(C,G,B){me(C);const Z=Ie.list();return Z.length?Z.forEach(ge=>ge(C,G,B)):(xe("uncaught error during route navigation:"),console.error(C)),Promise.reject(C)}function re(){return Pe&&c.value!==ln?Promise.resolve():new Promise((C,G)=>{Ge.add([C,G])})}function me(C){return Pe||(Pe=!C,Ue(),Ge.list().forEach(([G,B])=>C?B(C):G()),Ge.reset()),C}function je(C,G,B,Z){const{scrollBehavior:ge}=e;if(!Yt||!ge)return Promise.resolve();const be=!B&&ef(Ql(C.fullPath,0))||(Z||!B)&&history.state&&history.state.scroll||null;return At().then(()=>ge(C,G,be)).then(ue=>ue&&Xm(ue)).catch(ue=>V(ue,C,G))}const ht=C=>o.go(C);let Xe;const it=new Set,on={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:b,getRoutes:w,resolve:S,options:e,push:T,replace:W,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:r.add,beforeResolve:l.add,afterEach:i.add,onError:Ie.add,isReady:re,install(C){const G=this;C.component("RouterLink",Jf),C.component("RouterView",Gf),C.config.globalProperties.$router=G,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>_(c)}),Yt&&!Xe&&c.value===ln&&(Xe=!0,T(o.location).catch(ge=>{xe("Unexpected error when starting the router:",ge)}));const B={};for(const ge in ln)B[ge]=A(()=>c.value[ge]);C.provide(Sr,G),C.provide(pd,Ze(B)),C.provide(Wo,c);const Z=C.unmount;it.add(C),C.unmount=function(){it.delete(C),it.size<1&&(d=ln,Ne&&Ne(),Ne=null,c.value=ln,Xe=!1,Pe=!1),Z()},Yt&&Xf(C,G,n)}};return on}function es(e){return e.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function lg(e,n){const s=[],a=[],o=[],r=Math.max(n.matched.length,e.matched.length);for(let l=0;l<r;l++){const i=n.matched[l];i&&(e.matched.find(d=>xn(d,i))?a.push(i):s.push(i));const c=e.matched[l];c&&(n.matched.find(d=>xn(d,c))||o.push(c))}return[s,a,o]}const go=ae(!1),Hs=ae(!1),ls=ae(!1),ig=ae(!0),Uo=G0({xs:460,...q0}),Bn=$m(),bd=xm(),cg=A(()=>Bn.height.value-Bn.width.value/gn>180),xd=wm(Mt?document.body:null),ps=K0(),dg=A(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=ps.value)==null?void 0:e.tagName)||"")||((n=ps.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),ug=A(()=>{var e;return["BUTTON","A"].includes(((e=ps.value)==null?void 0:e.tagName)||"")});$t("slidev-camera","default");$t("slidev-mic","default");const wa=$t("slidev-scale",0),at=$t("slidev-show-overview",!1),vo=$t("slidev-presenter-cursor",!0),hi=$t("slidev-show-editor",!1);$t("slidev-editor-width",Mt?window.innerWidth*.4:100);const _d=Zc(at);function mi(e,n,s,a=o=>o){return e*a(.5-n*(.5-s))}function pg(e){return[-e[0],-e[1]]}function Et(e,n){return[e[0]+n[0],e[1]+n[1]]}function _t(e,n){return[e[0]-n[0],e[1]-n[1]]}function Ct(e,n){return[e[0]*n,e[1]*n]}function hg(e,n){return[e[0]/n,e[1]/n]}function ks(e){return[e[1],-e[0]]}function fi(e,n){return e[0]*n[0]+e[1]*n[1]}function mg(e,n){return e[0]===n[0]&&e[1]===n[1]}function fg(e){return Math.hypot(e[0],e[1])}function gg(e){return e[0]*e[0]+e[1]*e[1]}function gi(e,n){return gg(_t(e,n))}function Fd(e){return hg(e,fg(e))}function vg(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function Cs(e,n,s){let a=Math.sin(s),o=Math.cos(s),r=e[0]-n[0],l=e[1]-n[1],i=r*o-l*a,c=r*a+l*o;return[i+n[0],c+n[1]]}function Go(e,n,s){return Et(e,Ct(_t(n,e),s))}function vi(e,n,s){return Et(e,Ct(n,s))}var{min:ts,PI:yg}=Math,yi=.275,Es=yg+1e-4;function wg(e,n={}){let{size:s=16,smoothing:a=.5,thinning:o=.5,simulatePressure:r=!0,easing:l=V=>V,start:i={},end:c={},last:d=!1}=n,{cap:p=!0,easing:u=V=>V*(2-V)}=i,{cap:h=!0,easing:g=V=>--V*V*V+1}=c;if(e.length===0||s<=0)return[];let v=e[e.length-1].runningLength,w=i.taper===!1?0:i.taper===!0?Math.max(s,v):i.taper,b=c.taper===!1?0:c.taper===!0?Math.max(s,v):c.taper,S=Math.pow(s*a,2),k=[],E=[],T=e.slice(0,10).reduce((V,re)=>{let me=re.pressure;if(r){let je=ts(1,re.distance/s),ht=ts(1,1-je);me=ts(1,V+(ht-V)*(je*yi))}return(V+me)/2},e[0].pressure),W=mi(s,o,e[e.length-1].pressure,l),q,R=e[0].vector,te=e[0].point,de=te,fe=te,we=de,Ne=!1;for(let V=0;V<e.length;V++){let{pressure:re}=e[V],{point:me,vector:je,distance:ht,runningLength:Xe}=e[V];if(V<e.length-1&&v-Xe<3)continue;if(o){if(r){let be=ts(1,ht/s),ue=ts(1,1-be);re=ts(1,T+(ue-T)*(be*yi))}W=mi(s,o,re,l)}else W=s/2;q===void 0&&(q=W);let it=Xe<w?u(Xe/w):1,on=v-Xe<b?g((v-Xe)/b):1;W=Math.max(.01,W*Math.min(it,on));let C=(V<e.length-1?e[V+1]:e[V]).vector,G=V<e.length-1?fi(je,C):1,B=fi(je,R)<0&&!Ne,Z=G!==null&&G<0;if(B||Z){let be=Ct(ks(R),W);for(let ue=1/13,ie=0;ie<=1;ie+=ue)fe=Cs(_t(me,be),me,Es*ie),k.push(fe),we=Cs(Et(me,be),me,Es*-ie),E.push(we);te=fe,de=we,Z&&(Ne=!0);continue}if(Ne=!1,V===e.length-1){let be=Ct(ks(je),W);k.push(_t(me,be)),E.push(Et(me,be));continue}let ge=Ct(ks(Go(C,je,G)),W);fe=_t(me,ge),(V<=1||gi(te,fe)>S)&&(k.push(fe),te=fe),we=Et(me,ge),(V<=1||gi(de,we)>S)&&(E.push(we),de=we),T=re,R=je}let Ue=e[0].point.slice(0,2),Ge=e.length>1?e[e.length-1].point.slice(0,2):Et(e[0].point,[1,1]),Ie=[],Pe=[];if(e.length===1){if(!(w||b)||d){let V=vi(Ue,Fd(ks(_t(Ue,Ge))),-(q||W)),re=[];for(let me=1/13,je=me;je<=1;je+=me)re.push(Cs(V,Ue,Es*2*je));return re}}else{if(!(w||b&&e.length===1))if(p)for(let re=1/13,me=re;me<=1;me+=re){let je=Cs(E[0],Ue,Es*me);Ie.push(je)}else{let re=_t(k[0],E[0]),me=Ct(re,.5),je=Ct(re,.51);Ie.push(_t(Ue,me),_t(Ue,je),Et(Ue,je),Et(Ue,me))}let V=ks(pg(e[e.length-1].vector));if(b||w&&e.length===1)Pe.push(Ge);else if(h){let re=vi(Ge,V,W);for(let me=1/29,je=me;je<1;je+=me)Pe.push(Cs(re,Ge,Es*3*je))}else Pe.push(Et(Ge,Ct(V,W)),Et(Ge,Ct(V,W*.99)),_t(Ge,Ct(V,W*.99)),_t(Ge,Ct(V,W)))}return k.concat(Pe,E.reverse(),Ie)}function bg(e,n={}){var s;let{streamline:a=.5,size:o=16,last:r=!1}=n;if(e.length===0)return[];let l=.15+(1-a)*.85,i=Array.isArray(e[0])?e:e.map(({x:g,y:v,pressure:w=.5})=>[g,v,w]);if(i.length===2){let g=i[1];i=i.slice(0,-1);for(let v=1;v<5;v++)i.push(Go(i[0],g,v/4))}i.length===1&&(i=[...i,[...Et(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],d=!1,p=0,u=c[0],h=i.length-1;for(let g=1;g<i.length;g++){let v=r&&g===h?i[g].slice(0,2):Go(u.point,i[g],l);if(mg(u.point,v))continue;let w=vg(v,u.point);if(p+=w,g<h&&!d){if(p<o)continue;d=!0}u={point:v,pressure:i[g][2]>=0?i[g][2]:.5,vector:Fd(_t(u.point,v)),distance:w,runningLength:p},c.push(u)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function xg(e,n={}){return wg(bg(e,n),n)}var _g=()=>({events:{},emit(e,...n){let s=this.events[e]||[];for(let a=0,o=s.length;a<o;a++)s[a](...n)},on(e,n){var s;return(s=this.events[e])!=null&&s.push(n)||(this.events[e]=[n]),()=>{var a;this.events[e]=(a=this.events[e])==null?void 0:a.filter(o=>n!==o)}}});function Da(e,n){return e-n}function Fg(e){return e<0?-1:1}function Pa(e){return[Math.abs(e),Fg(e)]}function kd(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var kg=2,Zt=kg,vs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var n;const s=this.drauu.el,a=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-o.left)*a,y:(e.pageY-o.top)*a,pressure:e.pressure}}else{const o=this.drauu.svgPoint;o.x=e.clientX,o.y=e.clientY;const r=o.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:r.x*a,y:r.y*a,pressure:e.pressure}}}createElement(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg",e),a=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",a.fill??"transparent"),s.setAttribute("stroke",a.color),s.setAttribute("stroke-width",a.size.toString()),s.setAttribute("stroke-linecap","round"),a.dasharray&&s.setAttribute("stroke-dasharray",a.dasharray),s}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(Zt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Cg=class extends vs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=xg(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((a,[o,r],l,i)=>{const[c,d]=i[(l+1)%i.length];return a.push(o,r,(o+c)/2,(r+d)/2),a},["M",...n[0],"Q"]);return s.push("Z"),s.map(a=>typeof a=="number"?a.toFixed(2):a).join(" ")}},Eg=class extends vs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Pa(e.x-this.start.x),[a,o]=Pa(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,a);n=r,a=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",a);else{const[r,l]=[this.start.x,this.start.x+n*s].sort(Da),[i,c]=[this.start.y,this.start.y+a*o].sort(Da);this.attr("cx",(r+l)/2),this.attr("cy",(i+c)/2),this.attr("rx",(l-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Cd(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),a=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",n),a.setAttribute("id",e),a.setAttribute("viewBox","0 -5 10 10"),a.setAttribute("refX","5"),a.setAttribute("refY","0"),a.setAttribute("markerWidth","4"),a.setAttribute("markerHeight","4"),a.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),a.appendChild(o),s.appendChild(a),s}var Sg=class extends vs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=kd(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Cd(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:s}=e;if(this.shiftPressed){const a=e.x-this.start.x,o=e.y-this.start.y;if(o!==0){let r=a/o;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+o*r,s=this.start.y+o):(n=this.start.x+a,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Ig=class extends vs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Pa(e.x-this.start.x),[a,o]=Pa(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,a);n=r,a=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-a),this.attr("width",n*2),this.attr("height",a*2);else{const[r,l]=[this.start.x,this.start.x+n*s].sort(Da),[i,c]=[this.start.y,this.start.y+a*o].sort(Da);this.attr("x",r),this.attr("y",i),this.attr("width",l-r),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function jg(e,n){const s=e.x-n.x,a=e.y-n.y;return s*s+a*a}function Ag(e,n,s){let a=n.x,o=n.y,r=s.x-a,l=s.y-o;if(r!==0||l!==0){const i=((e.x-a)*r+(e.y-o)*l)/(r*r+l*l);i>1?(a=s.x,o=s.y):i>0&&(a+=r*i,o+=l*i)}return r=e.x-a,l=e.y-o,r*r+l*l}function Tg(e,n){let s=e[0];const a=[s];let o;for(let r=1,l=e.length;r<l;r++)o=e[r],jg(o,s)>n&&(a.push(o),s=o);return s!==o&&o&&a.push(o),a}function Yo(e,n,s,a,o){let r=a,l=0;for(let i=n+1;i<s;i++){const c=Ag(e[i],e[n],e[s]);c>r&&(l=i,r=c)}r>a&&(l-n>1&&Yo(e,n,l,a,o),o.push(e[l]),s-l>1&&Yo(e,l,s,a,o))}function Mg(e,n){const s=e.length-1,a=[e[0]];return Yo(e,0,s,n,a),a.push(e[s]),a}function wi(e,n,s=!1){if(e.length<=2)return e;const a=n!==void 0?n*n:1;return e=s?e:Tg(e,a),e=Mg(e,a),e}var $g=class extends vs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=kd();const n=Cd(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=wi(this.points,1,!0),this.count=0),this.attr("d",xi(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",xi(wi(this.points,1,!0))),!e.getTotalLength()))}};function Dg(e,n){const s=n.x-e.x,a=n.y-e.y;return{length:Math.sqrt(s**2+a**2),angle:Math.atan2(a,s)}}function bi(e,n,s,a){const o=n||e,r=s||e,l=.2,i=Dg(o,r),c=i.angle+(a?Math.PI:0),d=i.length*l,p=e.x+Math.cos(c)*d,u=e.y+Math.sin(c)*d;return{x:p,y:u}}function Pg(e,n,s){const a=bi(s[n-1],s[n-2],e),o=bi(e,s[n-1],s[n+1],!0);return`C ${a.x.toFixed(Zt)},${a.y.toFixed(Zt)} ${o.x.toFixed(Zt)},${o.y.toFixed(Zt)} ${e.x.toFixed(Zt)},${e.y.toFixed(Zt)}`}function xi(e){return e.reduce((n,s,a,o)=>a===0?`M ${s.x.toFixed(Zt)},${s.y.toFixed(Zt)}`:`${n} ${Pg(s,a,o)}`,"")}var Og=class extends vs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(s,a)=>{if(s&&s.length)for(let o=0;o<s.length;o++){const r=s[o];if(r.getTotalLength){const l=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(l*i/this.pathSubFactor),d=r.getPointAtLength(l*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:d.x,y1:c.y,y2:d.y,segment:i,element:a||r})}}else r.children&&n(r.children,r)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],a={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,a)&&(s.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,n){const s=e.x1,a=e.x2,o=n.x1,r=n.x2,l=e.y1,i=e.y2,c=n.y1,d=n.y2,p=(s-a)*(c-d)-(l-i)*(o-r),u=(s*i-l*a)*(o-r)-(s-a)*(o*d-c*r),h=(s*i-l*a)*(c-d)-(l-i)*(o*d-c*r),g=(v,w,b)=>v>=w&&v<=b?!0:v>=b&&v<=w;if(p===0)return!1;{const v={x:u/p,y:h/p};return g(v.x,s,a)&&g(v.y,l,i)&&g(v.x,o,r)&&g(v.y,c,d)}}};function Ng(e){return{draw:new $g(e),stylus:new Cg(e),line:new Sg(e),rectangle:new Ig(e),ellipse:new Eg(e),eraseLine:new Og(e)}}var Hg=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=_g(),this._models=Ng(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,a=this.eventStart.bind(this),o=this.eventMove.bind(this),r=this.eventEnd.bind(this),l=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",a,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",l,!1),window.addEventListener("keyup",l,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",a),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",l,!1),window.removeEventListener("keyup",l,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Bg(e){return new Hg(e)}const Zo=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],zt=$t("slidev-drawing-enabled",!1),P4=$t("slidev-drawing-pinned",!1),Lg=ae(!1),zg=ae(!1),Rg=ae(!1),Ys=ae(!1),Mn=v0($t("slidev-drawing-brush",{color:Zo[0],size:4,mode:"stylus"})),_i=ae("stylus"),Ed=A(()=>$e.drawings.syncAll||Qt.value);let Zs=!1;const Ss=A({get(){return _i.value},set(e){_i.value=e,e==="arrow"?(Mn.mode="line",Mn.arrowEnd=!0):(Mn.mode=e,Mn.arrowEnd=!1)}}),Kg=Ze({brush:Mn,acceptsInputTypes:A(()=>zt.value?void 0:["pen"]),coordinateTransform:!1}),lt=cr(Bg(Kg));function qg(){lt.clear(),Ed.value&&Vc(Ve.value,"")}function Sd(){var e;zg.value=lt.canRedo(),Lg.value=lt.canUndo(),Rg.value=!!((e=lt.el)!=null&&e.children.length)}function Jg(e){Zs=!0;const n=Ma[e||Ve.value];n!=null?lt.load(n):lt.clear(),Zs=!1}lt.on("changed",()=>{if(Sd(),!Zs){const e=lt.dump(),n=Ve.value;(Ma[n]||"")!==e&&Ed.value&&Vc(n,lt.dump())}});l0(e=>{Zs=!0,e[Ve.value]!=null&&lt.load(e[Ve.value]||""),Zs=!1,Sd()});At(()=>{He(Ve,()=>{lt.mounted&&Jg()},{immediate:!0})});lt.on("start",()=>Ys.value=!0);lt.on("end",()=>Ys.value=!1);window.addEventListener("keydown",e=>{if(!zt.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?lt.redo():lt.undo():e.code==="Escape"?zt.value=!1:e.code==="KeyL"&&n?Ss.value="line":e.code==="KeyA"&&n?Ss.value="arrow":e.code==="KeyS"&&n?Ss.value="stylus":e.code==="KeyR"&&n?Ss.value="rectangle":e.code==="KeyE"&&n?Ss.value="ellipse":e.code==="KeyC"&&n?qg():e.code.startsWith("Digit")&&n&&+e.code[5]<=Zo.length?Mn.color=Zo[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function Re(...e){return A(()=>e.every(n=>rt(n)))}function mt(e){return A(()=>!rt(e))}const Fi=om(),yo=$t("slidev-color-schema","auto"),Xo=A(()=>$e.colorSchema!=="auto"),Ir=A({get(){return Xo.value?$e.colorSchema==="dark":yo.value==="auto"?Fi.value:yo.value==="dark"},set(e){Xo.value||(yo.value=e===Fi.value?"auto":e?"dark":"light")}}),Id=Zc(Ir);Mt&&He(Ir,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});const ba=ae(1),xa=A(()=>qe.length-1),yt=ae(0),jr=ae(0);function Wg(){yt.value>ba.value&&(yt.value-=1)}function Vg(){yt.value<xa.value&&(yt.value+=1)}function Ug(){if(yt.value>ba.value){let e=yt.value-jr.value;e<ba.value&&(e=ba.value),yt.value=e}}function Gg(){if(yt.value<xa.value){let e=yt.value+jr.value;e>xa.value&&(e=xa.value),yt.value=e}}function Yg(){const{escape:e,space:n,shift:s,left:a,right:o,up:r,down:l,enter:i,d:c,g:d,o:p}=bd;let u=[{name:"next_space",key:Re(n,mt(s)),fn:Ln,autoRepeat:!0},{name:"prev_space",key:Re(n,s),fn:zn,autoRepeat:!0},{name:"next_right",key:Re(o,mt(s),mt(at)),fn:Ln,autoRepeat:!0},{name:"prev_left",key:Re(a,mt(s),mt(at)),fn:zn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Ln,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:zn,autoRepeat:!0},{name:"next_down",key:Re(l,mt(at)),fn:Na,autoRepeat:!0},{name:"prev_up",key:Re(r,mt(at)),fn:()=>Ha(!1),autoRepeat:!0},{name:"next_shift",key:Re(o,s),fn:Na,autoRepeat:!0},{name:"prev_shift",key:Re(a,s),fn:()=>Ha(!1),autoRepeat:!0},{name:"toggle_dark",key:Re(c,mt(zt)),fn:Id},{name:"toggle_overview",key:Re(p,mt(zt)),fn:_d},{name:"hide_overview",key:Re(e,mt(zt)),fn:()=>at.value=!1},{name:"goto",key:Re(d,mt(zt)),fn:()=>ls.value=!ls.value},{name:"next_overview",key:Re(o,at),fn:Vg},{name:"prev_overview",key:Re(a,at),fn:Wg},{name:"up_overview",key:Re(r,at),fn:Ug},{name:"down_overview",key:Re(l,at),fn:Gg},{name:"goto_from_overview",key:Re(i,at),fn:()=>{fs(yt.value),at.value=!1}}];const h=new Set(u.map(v=>v.name));if(u.filter(v=>v.name&&h.has(v.name)).length===0){const v=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(v),console.warn(v)}return u}const jd=Re(mt(dg),mt(ug),ig);function Zg(e,n,s=!1){typeof e=="string"&&(e=bd[e]);const a=Re(e,jd);let o=0,r;const l=()=>{if(clearTimeout(r),!a.value){o=0;return}s&&(r=setTimeout(l,Math.max(1e3-o*250,150)),o++),n()};return He(a,l,{flush:"sync"})}function Xg(e,n){return R0(e,s=>{jd.value&&(s.repeat||n())})}function Qg(){const e=Yg();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&Zg(s.key,s.fn,s.autoRepeat)}),Xg("f",()=>xd.toggle())}const e2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t2=t("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),n2=[t2];function s2(e,n){return x(),U("svg",e2,n2)}const a2={name:"carbon-close",render:s2};function Ar(e){var s,a;const n=(a=(s=e==null?void 0:e.meta)==null?void 0:s.slide)==null?void 0:a.no;return n!=null?`slidev-page-${n}`:""}const o2=Oe({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;P(L);const s=ae(),a=ym(s),o=A(()=>n.width?n.width:a.width.value),r=A(()=>n.width?n.width/gn:a.height.value);n.width&&gs(()=>{s.value&&(s.value.style.width=`${o.value}px`,s.value.style.height=`${r.value}px`)});const l=A(()=>o.value/r.value),i=A(()=>n.scale?n.scale:l.value<gn?o.value/vn:r.value*gn/vn),c=A(()=>({height:`${Fr}px`,width:`${vn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),d=A(()=>({"select-none":!$e.selectable,"slidev-code-line-numbers":$e.lineNumbers}));return vt(Jc,i),(p,u)=>(x(),U("div",{id:"slide-container",ref_key:"root",ref:s,class:Be(_(d))},[t("div",{id:"slide-content",style:We(_(c))},[Tt(p.$slots,"default")],4),Tt(p.$slots,"controls")],2))}});const z=(e,n)=>{const s=e.__vccOpts||e;for(const[a,o]of n)s[a]=o;return s},Ad=z(o2,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Tr=Oe({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const s=Lt(e,"clicks",n),a=Lt(e,"clicksElements",n),o=Lt(e,"clicksDisabled",n),r=Lt(e,"clicksOrderMap",n);a.value.length=0,vt(Yh,e.route),vt(Zh,e.context),vt(Rc,s),vt(qc,o),vt(Kc,a),vt(Gh,r)},render(){var e,n;return this.$props.is?to(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}}),r2=["innerHTML"],l2=Oe({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return P(L),(n,s)=>_(Ma)[e.page]?(x(),U("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:_(Ma)[e.page]},null,8,r2)):Q("v-if",!0)}}),Td=z(l2,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),i2=Object.freeze(Object.defineProperty({__proto__:null,default:Td},Symbol.toStringTag,{value:"Module"})),c2={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},d2=["onClick"],u2=Oe({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:n}){const s=e;P(L);const a=Lt(s,"modelValue",n);function o(){a.value=!1}function r(g){fs(g),o()}function l(g){return g===yt.value}const i=Uo.smaller("xs"),c=Uo.smaller("sm"),d=4*16*2,p=2*16,u=A(()=>i.value?Bn.width.value-d:c.value?(Bn.width.value-d-p)/2:300),h=A(()=>Math.floor((Bn.width.value-d)/(u.value+p)));return gs(()=>{yt.value=Ve.value,jr.value=h.value}),(g,v)=>{const w=a2;return x(),U(Ce,null,[Ks(t("div",c2,[t("div",{class:"grid gap-y-4 gap-x-8 w-full",style:We(`grid-template-columns: repeat(auto-fit,minmax(${_(u)}px,1fr))`)},[(x(!0),U(Ce,null,ta(_(qe).slice(0,-1),(b,S)=>(x(),U("div",{key:b.path,class:"relative"},[t("div",{class:Be(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":l(S+1)}]),style:We(_(kr)),onClick:k=>r(+b.path)},[(x(),H(Ad,{key:b.path,width:_(u),"clicks-disabled":!0,class:"pointer-events-none"},{default:K(()=>[Y(_(Tr),{is:b==null?void 0:b.component,"clicks-disabled":!0,class:Be(_(Ar)(b)),route:b,context:"overview"},null,8,["is","class","route"]),Y(Td,{page:+b.path},null,8,["page"])]),_:2},1032,["width"]))],14,d2),t("div",{class:"absolute top-0 opacity-50",style:We(`left: ${_(u)+5}px`)},Rn(S+1),5)]))),128))],4)],512),[[zc,_(a)]]),_(a)?(x(),U("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:o},[Y(w)])):Q("v-if",!0)],64)}}});const p2=z(u2,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),h2="/assets/logo-b72bde5d.png",m2={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},f2=Oe({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const s=e;P(L);const a=Lt(s,"modelValue",n);function o(){a.value=!1}return(r,l)=>(x(),H(vc,null,[_(a)?(x(),U("div",m2,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:l[0]||(l[0]=i=>o())}),t("div",{class:Be(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[Tt(r.$slots,"default")],2)])):Q("v-if",!0)],1024))}}),g2=z(f2,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/Modal.vue"]]),v2={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},y2=["innerHTML"],w2=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:h2,alt:"Slidev"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),f("dev ")])])],-1),b2=Oe({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const s=e;P(L);const a=Lt(s,"modelValue",n),o=A(()=>typeof $e.info=="string");return(r,l)=>(x(),H(g2,{modelValue:_(a),"onUpdate:modelValue":l[0]||(l[0]=i=>Fe(a)?a.value=i:null),class:"px-6 py-4"},{default:K(()=>[t("div",v2,[_(o)?(x(),U("div",{key:0,class:"mb-4",innerHTML:_($e).info},null,8,y2)):Q("v-if",!0),w2])]),_:1},8,["modelValue"]))}});const x2=z(b2,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/InfoDialog.vue"]]),_2=["disabled","onKeydown"],F2=Oe({__name:"Goto",setup(e){P(L);const n=ae(),s=ae(""),a=A(()=>{if(s.value.startsWith("/"))return!!qe.find(l=>l.path===s.value.substring(1));{const l=+s.value;return!isNaN(l)&&l>0&&l<=qd.value}});function o(){a.value&&(s.value.startsWith("/")?fs(s.value.substring(1)):fs(+s.value)),r()}function r(){ls.value=!1}return He(ls,async l=>{var i,c;l?(await At(),s.value="",(i=n.value)==null||i.focus()):(c=n.value)==null||c.blur()}),He(s,l=>{l.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(l,i)=>(x(),U("div",{id:"slidev-goto-dialog",class:Be(["fixed right-5 bg-main transform transition-all",_(ls)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ks(t("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!_(ls),class:Be(["outline-none bg-transparent",{"text-red-400":!_(a)&&s.value}]),placeholder:"Goto...",onKeydown:[jl(o,["enter"]),jl(r,["escape"])],onBlur:r},null,42,_2),[[zh,s.value]])],2))}}),k2=z(F2,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/Goto.vue"]]),C2=Oe({__name:"Controls",setup(e){P(L);const n=Kt(),s=Kt();return(a,o)=>(x(),U(Ce,null,[Y(p2,{modelValue:_(at),"onUpdate:modelValue":o[0]||(o[0]=r=>Fe(at)?at.value=r:null)},null,8,["modelValue"]),Y(k2),_(n)?(x(),H(_(n),{key:0})):Q("v-if",!0),_(s)?(x(),H(_(s),{key:1,modelValue:_(go),"onUpdate:modelValue":o[1]||(o[1]=r=>Fe(go)?go.value=r:null)},null,8,["modelValue"])):Q("v-if",!0),_($e).info?(x(),H(x2,{key:2,modelValue:_(Hs),"onUpdate:modelValue":o[2]||(o[2]=r=>Fe(Hs)?Hs.value=r:null)},null,8,["modelValue"])):Q("v-if",!0)],64))}}),E2=z(C2,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/Controls.vue"]]),S2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},I2=t("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),j2=[I2];function A2(e,n){return x(),U("svg",S2,j2)}const T2={name:"carbon-settings-adjust",render:A2},M2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$2=t("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),D2=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),P2=[$2,D2];function O2(e,n){return x(),U("svg",M2,P2)}const N2={name:"carbon-information",render:O2},H2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},B2=t("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),L2=[B2];function z2(e,n){return x(),U("svg",H2,L2)}const R2={name:"carbon-download",render:z2},K2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},q2=t("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),J2=t("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),W2=[q2,J2];function V2(e,n){return x(),U("svg",K2,W2)}const U2={name:"carbon-user-speaker",render:V2},G2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y2=t("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Z2=t("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),X2=[Y2,Z2];function Q2(e,n){return x(),U("svg",G2,X2)}const ev={name:"carbon-presentation-file",render:Q2},tv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nv=t("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),sv=[nv];function av(e,n){return x(),U("svg",tv,sv)}const ov={name:"carbon-pen",render:av},rv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},lv=t("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),iv=t("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),cv=[lv,iv];function dv(e,n){return x(),U("svg",rv,cv)}const uv={name:"ph-cursor-duotone",render:dv},pv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},hv=t("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),mv=[hv];function fv(e,n){return x(),U("svg",pv,mv)}const Md={name:"ph-cursor-fill",render:fv},gv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vv=t("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),yv=[vv];function wv(e,n){return x(),U("svg",gv,yv)}const bv={name:"carbon-sun",render:wv},xv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_v=t("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Fv=[_v];function kv(e,n){return x(),U("svg",xv,Fv)}const Cv={name:"carbon-moon",render:kv},Ev={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sv=t("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Iv=[Sv];function jv(e,n){return x(),U("svg",Ev,Iv)}const Av={name:"carbon-apps",render:jv},Tv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Mv=t("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),$v=[Mv];function Dv(e,n){return x(),U("svg",Tv,$v)}const Pv={name:"carbon-arrow-right",render:Dv},Ov={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Nv=t("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Hv=[Nv];function Bv(e,n){return x(),U("svg",Ov,Hv)}const Lv={name:"carbon-arrow-left",render:Bv},zv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rv=t("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Kv=[Rv];function qv(e,n){return x(),U("svg",zv,Kv)}const Jv={name:"carbon-maximize",render:qv},Wv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vv=t("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Uv=[Vv];function Gv(e,n){return x(),U("svg",Wv,Uv)}const Yv={name:"carbon-minimize",render:Gv},Zv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Xv=t("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Qv=[Xv];function e1(e,n){return x(),U("svg",Zv,Qv)}const t1={name:"carbon-checkmark",render:e1},n1={class:"select-list"},s1={class:"title"},a1={class:"items"},o1=["onClick"],r1=Oe({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const s=e;P(L);const a=Lt(s,"modelValue",n,{passive:!0});return(o,r)=>{const l=t1;return x(),U("div",n1,[t("div",s1,Rn(e.title),1),t("div",a1,[(x(!0),U(Ce,null,ta(e.items,i=>(x(),U("div",{key:i.value,class:Be(["item",{active:_(a)===i.value}]),onClick:()=>{var c;a.value=i.value,(c=i.onClick)==null||c.call(i)}},[Y(l,{class:Be(["text-green-500",{"opacity-0":_(a)!==i.value}])},null,8,["class"]),f(" "+Rn(i.display||i.value),1)],10,o1))),128))])])}}});const l1=z(r1,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/SelectList.vue"]]),i1={class:"text-sm"},c1=Oe({__name:"Settings",setup(e){P(L);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,a)=>(x(),U("div",i1,[Y(l1,{modelValue:_(wa),"onUpdate:modelValue":a[0]||(a[0]=o=>Fe(wa)?wa.value=o:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),d1=z(c1,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/Settings.vue"]]),u1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},p1=Oe({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const s=e;P(L);const a=Lt(s,"modelValue",n,{passive:!0}),o=ae();return L0(o,()=>{a.value=!1}),(r,l)=>(x(),U("div",{ref_key:"el",ref:o,class:"flex relative"},[t("button",{class:Be({disabled:e.disabled}),onClick:l[0]||(l[0]=i=>a.value=!_(a))},[Tt(r.$slots,"button",{class:Be({disabled:e.disabled})})],2),(x(),H(vc,null,[_(a)?(x(),U("div",u1,[Tt(r.$slots,"menu")])):Q("v-if",!0)],1024))],512))}}),h1=z(p1,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/MenuButton.vue"]]),m1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},f1={__name:"VerticalDivider",setup(e){return P(L),(n,s)=>(x(),U("div",m1))}},ha=z(f1,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),g1={render(){return[]}},v1={class:"icon-btn"},y1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},w1={class:"my-auto"},b1={class:"opacity-50"},x1=Oe({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;P(L);const s=Uo.smaller("md"),{isFullscreen:a,toggle:o}=xd,r=A(()=>er.value?`?password=${er.value}`:""),l=A(()=>`/presenter/${Ve.value}${r.value}`),i=A(()=>`/${Ve.value}${r.value}`),c=ae(),d=()=>{c.value&&ps.value&&c.value.contains(ps.value)&&ps.value.blur()},p=A(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),u=Kt(),h=Kt();return Wn(()=>import("./DrawingControls-49bbadd1.js"),[]).then(g=>h.value=g.default),(g,v)=>{const w=Yv,b=Jv,S=Lv,k=Pv,E=Av,T=Cv,W=bv,q=Md,R=uv,te=ov,de=ev,fe=jp("RouterLink"),we=U2,Ne=R2,Ue=N2,Ge=T2;return x(),U("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[t("div",{class:Be(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",_(p)]),onMouseleave:d},[_(Gt)?Q("v-if",!0):(x(),U("button",{key:0,class:"icon-btn",onClick:v[0]||(v[0]=(...Ie)=>_(o)&&_(o)(...Ie))},[_(a)?(x(),H(w,{key:0})):(x(),H(b,{key:1}))])),t("button",{class:Be(["icon-btn",{disabled:!_(l4)}]),onClick:v[1]||(v[1]=(...Ie)=>_(zn)&&_(zn)(...Ie))},[Y(S)],2),t("button",{class:Be(["icon-btn",{disabled:!_(r4)}]),title:"Next",onClick:v[2]||(v[2]=(...Ie)=>_(Ln)&&_(Ln)(...Ie))},[Y(k)],2),_(Gt)?Q("v-if",!0):(x(),U("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:v[3]||(v[3]=Ie=>_(_d)())},[Y(E)])),_(Xo)?Q("v-if",!0):(x(),U("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:v[4]||(v[4]=Ie=>_(Id)())},[_(Ir)?(x(),H(T,{key:0})):(x(),H(W,{key:1}))])),Y(ha),_(Gt)?Q("v-if",!0):(x(),U(Ce,{key:3},[!_(Qt)&&!_(s)&&_(u)?(x(),U(Ce,{key:0},[Y(_(u)),Y(ha)],64)):Q("v-if",!0),_(Qt)?(x(),U("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:v[5]||(v[5]=Ie=>vo.value=!_(vo))},[_(vo)?(x(),H(q,{key:0})):(x(),H(R,{key:1,class:"opacity-50"}))])):Q("v-if",!0)],64)),!_($e).drawings.presenterOnly&&!_(Gt)?(x(),U(Ce,{key:4},[t("button",{class:"icon-btn relative",title:"Drawing",onClick:v[6]||(v[6]=Ie=>zt.value=!_(zt))},[Y(te),_(zt)?(x(),U("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:We({background:_(Mn).color})},null,4)):Q("v-if",!0)]),Y(ha)],64)):Q("v-if",!0),_(Gt)?Q("v-if",!0):(x(),U(Ce,{key:5},[_(Qt)?(x(),H(fe,{key:0,to:_(i),class:"icon-btn",title:"Play Mode"},{default:K(()=>[Y(de)]),_:1},8,["to"])):Q("v-if",!0),_(s4)?(x(),H(fe,{key:1,to:_(l),class:"icon-btn",title:"Presenter Mode"},{default:K(()=>[Y(we)]),_:1},8,["to"])):Q("v-if",!0),Q("v-if",!0)],64)),(x(),U(Ce,{key:6},[_($e).download?(x(),U("button",{key:0,class:"icon-btn",onClick:v[8]||(v[8]=(...Ie)=>_(Ai)&&_(Ai)(...Ie))},[Y(Ne)])):Q("v-if",!0)],64)),!_(Qt)&&_($e).info&&!_(Gt)?(x(),U("button",{key:7,class:"icon-btn",onClick:v[9]||(v[9]=Ie=>Hs.value=!_(Hs))},[Y(Ue)])):Q("v-if",!0),!_(Qt)&&!_(Gt)?(x(),H(h1,{key:8},{button:K(()=>[t("button",v1,[Y(Ge)])]),menu:K(()=>[Y(d1)]),_:1})):Q("v-if",!0),_(Gt)?Q("v-if",!0):(x(),H(ha,{key:9})),t("div",y1,[t("div",w1,[f(Rn(_(Ve))+" ",1),t("span",b1,"/ "+Rn(_(qd)),1)])]),Y(_(g1))],34)],512)}}}),_1=z(x1,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/NavControls.vue"]]),$d={render(){return[]}},Dd={render(){return[]}},F1={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},k1=Oe({__name:"PresenterMouse",setup(e){return P(L),(n,s)=>{const a=Md;return _(po).cursor?(x(),U("div",F1,[Y(a,{class:"absolute",style:We({left:`${_(po).cursor.x}%`,top:`${_(po).cursor.y}%`})},null,8,["style"])])):Q("v-if",!0)}}}),C1=z(k1,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),E1=Oe({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){P(L),He(gt,()=>{var s,a;(s=gt.value)!=null&&s.meta&&gt.value.meta.preload!==!1&&(gt.value.meta.__preloaded=!0),(a=wo.value)!=null&&a.meta&&wo.value.meta.preload!==!1&&(wo.value.meta.__preloaded=!0)},{immediate:!0});const n=Kt();return Wn(()=>import("./DrawingLayer-54554eda.js"),[]).then(s=>n.value=s.default),(s,a)=>(x(),U(Ce,null,[Q(" Global Bottom "),Y(_(Dd)),Q(" Slides "),(x(!0),U(Ce,null,ta(_(qe),o=>{var r,l;return x(),U(Ce,{key:o.path},[(r=o.meta)!=null&&r.__preloaded||o===_(gt)?Ks((x(),H(_(Tr),{key:0,is:o==null?void 0:o.component,clicks:o===_(gt)?_(Vn):0,"clicks-elements":((l=o.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:Be(_(Ar)(o)),route:o,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[zc,o===_(gt)]]):Q("v-if",!0)],64)}),128)),Q(" Global Top "),Y(_($d)),_(n)?(x(),H(_(n),{key:0})):Q("v-if",!0),_(Qt)?Q("v-if",!0):(x(),H(C1,{key:1}))],64))}}),S1=z(E1,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/SlidesShow.vue"]]),I1=Oe({__name:"Play",setup(e){P(L),Qg();const n=ae();function s(r){var l;hi.value||((l=r.target)==null?void 0:l.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Ln():zn())}d4(n);const a=A(()=>cg.value||hi.value);Kt();const o=Kt();return Wn(()=>import("./DrawingControls-49bbadd1.js"),[]).then(r=>o.value=r.default),(r,l)=>(x(),U(Ce,null,[t("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:We(_(kr))},[Y(Ad,{class:"w-full h-full",style:We({background:"var(--slidev-slide-container-background, black)"}),width:_(Rr)?_(Bn).width.value:void 0,scale:_(wa),onPointerdown:s},{default:K(()=>[Y(S1,{context:"slide"})]),controls:K(()=>[t("div",{class:Be(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[_(a)?"opacity-100 right-0":"opacity-0 p-2",_(Ys)?"pointer-events-none":""]])},[Y(_1,{class:"m-auto",persist:_(a)},null,8,["persist"])],2),!_($e).drawings.presenterOnly&&!_(Gt)&&_(o)?(x(),H(_(o),{key:0,class:"ml-0"})):Q("v-if",!0)]),_:1},8,["style","width","scale"]),Q("v-if",!0)],4),Y(E2)],64))}}),j1=z(I1,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Pd(e){return typeof e>"u"||e===null}function A1(e){return typeof e=="object"&&e!==null}function T1(e){return Array.isArray(e)?e:Pd(e)?[]:[e]}function M1(e,n){var s,a,o,r;if(n)for(r=Object.keys(n),s=0,a=r.length;s<a;s+=1)o=r[s],e[o]=n[o];return e}function $1(e,n){var s="",a;for(a=0;a<n;a+=1)s+=e;return s}function D1(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var P1=Pd,O1=A1,N1=T1,H1=$1,B1=D1,L1=M1,Mr={isNothing:P1,isObject:O1,toArray:N1,repeat:H1,isNegativeZero:B1,extend:L1};function Od(e,n){var s="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(s+=`

`+e.mark.snippet),a+" "+s):a}function Xs(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=Od(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Xs.prototype=Object.create(Error.prototype);Xs.prototype.constructor=Xs;Xs.prototype.toString=function(n){return this.name+": "+Od(this,n)};var jn=Xs,z1=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],R1=["scalar","sequence","mapping"];function K1(e){var n={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(a){n[String(a)]=s})}),n}function q1(e,n){if(n=n||{},Object.keys(n).forEach(function(s){if(z1.indexOf(s)===-1)throw new jn('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=K1(n.styleAliases||null),R1.indexOf(this.kind)===-1)throw new jn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var et=q1;function ki(e,n){var s=[];return e[n].forEach(function(a){var o=s.length;s.forEach(function(r,l){r.tag===a.tag&&r.kind===a.kind&&r.multi===a.multi&&(o=l)}),s[o]=a}),s}function J1(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function a(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(a);return e}function Qo(e){return this.extend(e)}Qo.prototype.extend=function(n){var s=[],a=[];if(n instanceof et)a.push(n);else if(Array.isArray(n))a=a.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(a=a.concat(n.explicit));else throw new jn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof et))throw new jn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new jn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new jn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(r){if(!(r instanceof et))throw new jn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(Qo.prototype);return o.implicit=(this.implicit||[]).concat(s),o.explicit=(this.explicit||[]).concat(a),o.compiledImplicit=ki(o,"implicit"),o.compiledExplicit=ki(o,"explicit"),o.compiledTypeMap=J1(o.compiledImplicit,o.compiledExplicit),o};var W1=Qo,V1=new et("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),U1=new et("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),G1=new et("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Y1=new W1({explicit:[V1,U1,G1]});function Z1(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function X1(){return null}function Q1(e){return e===null}var ey=new et("tag:yaml.org,2002:null",{kind:"scalar",resolve:Z1,construct:X1,predicate:Q1,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function ty(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function ny(e){return e==="true"||e==="True"||e==="TRUE"}function sy(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var ay=new et("tag:yaml.org,2002:bool",{kind:"scalar",resolve:ty,construct:ny,predicate:sy,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function oy(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function ry(e){return 48<=e&&e<=55}function ly(e){return 48<=e&&e<=57}function iy(e){if(e===null)return!1;var n=e.length,s=0,a=!1,o;if(!n)return!1;if(o=e[s],(o==="-"||o==="+")&&(o=e[++s]),o==="0"){if(s+1===n)return!0;if(o=e[++s],o==="b"){for(s++;s<n;s++)if(o=e[s],o!=="_"){if(o!=="0"&&o!=="1")return!1;a=!0}return a&&o!=="_"}if(o==="x"){for(s++;s<n;s++)if(o=e[s],o!=="_"){if(!oy(e.charCodeAt(s)))return!1;a=!0}return a&&o!=="_"}if(o==="o"){for(s++;s<n;s++)if(o=e[s],o!=="_"){if(!ry(e.charCodeAt(s)))return!1;a=!0}return a&&o!=="_"}}if(o==="_")return!1;for(;s<n;s++)if(o=e[s],o!=="_"){if(!ly(e.charCodeAt(s)))return!1;a=!0}return!(!a||o==="_")}function cy(e){var n=e,s=1,a;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),a=n[0],(a==="-"||a==="+")&&(a==="-"&&(s=-1),n=n.slice(1),a=n[0]),n==="0")return 0;if(a==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function dy(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Mr.isNegativeZero(e)}var uy=new et("tag:yaml.org,2002:int",{kind:"scalar",resolve:iy,construct:cy,predicate:dy,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),py=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function hy(e){return!(e===null||!py.test(e)||e[e.length-1]==="_")}function my(e){var n,s;return n=e.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var fy=/^[-+]?[0-9]+e/;function gy(e,n){var s;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Mr.isNegativeZero(e))return"-0.0";return s=e.toString(10),fy.test(s)?s.replace("e",".e"):s}function vy(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Mr.isNegativeZero(e))}var yy=new et("tag:yaml.org,2002:float",{kind:"scalar",resolve:hy,construct:my,predicate:vy,represent:gy,defaultStyle:"lowercase"}),wy=Y1.extend({implicit:[ey,ay,uy,yy]}),by=wy,Nd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Hd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function xy(e){return e===null?!1:Nd.exec(e)!==null||Hd.exec(e)!==null}function _y(e){var n,s,a,o,r,l,i,c=0,d=null,p,u,h;if(n=Nd.exec(e),n===null&&(n=Hd.exec(e)),n===null)throw new Error("Date resolve error");if(s=+n[1],a=+n[2]-1,o=+n[3],!n[4])return new Date(Date.UTC(s,a,o));if(r=+n[4],l=+n[5],i=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(p=+n[10],u=+(n[11]||0),d=(p*60+u)*6e4,n[9]==="-"&&(d=-d)),h=new Date(Date.UTC(s,a,o,r,l,i,c)),d&&h.setTime(h.getTime()-d),h}function Fy(e){return e.toISOString()}var ky=new et("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:xy,construct:_y,instanceOf:Date,represent:Fy});function Cy(e){return e==="<<"||e===null}var Ey=new et("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Cy}),$r=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Sy(e){if(e===null)return!1;var n,s,a=0,o=e.length,r=$r;for(s=0;s<o;s++)if(n=r.indexOf(e.charAt(s)),!(n>64)){if(n<0)return!1;a+=6}return a%8===0}function Iy(e){var n,s,a=e.replace(/[\r\n=]/g,""),o=a.length,r=$r,l=0,i=[];for(n=0;n<o;n++)n%4===0&&n&&(i.push(l>>16&255),i.push(l>>8&255),i.push(l&255)),l=l<<6|r.indexOf(a.charAt(n));return s=o%4*6,s===0?(i.push(l>>16&255),i.push(l>>8&255),i.push(l&255)):s===18?(i.push(l>>10&255),i.push(l>>2&255)):s===12&&i.push(l>>4&255),new Uint8Array(i)}function jy(e){var n="",s=0,a,o,r=e.length,l=$r;for(a=0;a<r;a++)a%3===0&&a&&(n+=l[s>>18&63],n+=l[s>>12&63],n+=l[s>>6&63],n+=l[s&63]),s=(s<<8)+e[a];return o=r%3,o===0?(n+=l[s>>18&63],n+=l[s>>12&63],n+=l[s>>6&63],n+=l[s&63]):o===2?(n+=l[s>>10&63],n+=l[s>>4&63],n+=l[s<<2&63],n+=l[64]):o===1&&(n+=l[s>>2&63],n+=l[s<<4&63],n+=l[64],n+=l[64]),n}function Ay(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Ty=new et("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Sy,construct:Iy,predicate:Ay,represent:jy}),My=Object.prototype.hasOwnProperty,$y=Object.prototype.toString;function Dy(e){if(e===null)return!0;var n=[],s,a,o,r,l,i=e;for(s=0,a=i.length;s<a;s+=1){if(o=i[s],l=!1,$y.call(o)!=="[object Object]")return!1;for(r in o)if(My.call(o,r))if(!l)l=!0;else return!1;if(!l)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function Py(e){return e!==null?e:[]}var Oy=new et("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Dy,construct:Py}),Ny=Object.prototype.toString;function Hy(e){if(e===null)return!0;var n,s,a,o,r,l=e;for(r=new Array(l.length),n=0,s=l.length;n<s;n+=1){if(a=l[n],Ny.call(a)!=="[object Object]"||(o=Object.keys(a),o.length!==1))return!1;r[n]=[o[0],a[o[0]]]}return!0}function By(e){if(e===null)return[];var n,s,a,o,r,l=e;for(r=new Array(l.length),n=0,s=l.length;n<s;n+=1)a=l[n],o=Object.keys(a),r[n]=[o[0],a[o[0]]];return r}var Ly=new et("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Hy,construct:By}),zy=Object.prototype.hasOwnProperty;function Ry(e){if(e===null)return!0;var n,s=e;for(n in s)if(zy.call(s,n)&&s[n]!==null)return!1;return!0}function Ky(e){return e!==null?e:{}}var qy=new et("tag:yaml.org,2002:set",{kind:"mapping",resolve:Ry,construct:Ky});by.extend({implicit:[ky,Ey],explicit:[Ty,Oy,Ly,qy]});function Ci(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var Jy=new Array(256),Wy=new Array(256);for(var ns=0;ns<256;ns++)Jy[ns]=Ci(ns)?1:0,Wy[ns]=Ci(ns);function Vy(e){return Array.from(new Set(e))}function Ei(...e){let n,s,a;e.length===1?(n=0,a=1,[s]=e):[n,s,a=1]=e;const o=[];let r=n;for(;r<s;)o.push(r),r+=a||1;return o}function Bd(e,n){if(!n||n==="all"||n==="*")return Ei(1,e+1);const s=[];for(const a of n.split(/[,;]/g))if(!a.includes("-"))s.push(+a);else{const[o,r]=a.split("-",2);s.push(...Ei(+o,r?+r+1:e+1))}return Vy(s).filter(a=>a<=e).sort((a,o)=>a-o)}function Uy(e){const n=A(()=>e.value.path),s=A(()=>qe.length-1),a=A(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),o=A(()=>Kr(a.value)),r=A(()=>qe.find(h=>h.path===`${a.value}`)),l=A(()=>{var h,g,v;return(v=(g=(h=r.value)==null?void 0:h.meta)==null?void 0:g.slide)==null?void 0:v.id}),i=A(()=>{var h,g;return((g=(h=r.value)==null?void 0:h.meta)==null?void 0:g.layout)||(a.value===1?"cover":"default")}),c=A(()=>qe.find(h=>h.path===`${Math.min(qe.length,a.value+1)}`)),d=A(()=>qe.filter(h=>{var g,v;return(v=(g=h.meta)==null?void 0:g.slide)==null?void 0:v.title}).reduce((h,g)=>(qr(h,g),h),[])),p=A(()=>Jr(d.value,r.value)),u=A(()=>Wr(p.value));return{route:e,path:n,total:s,currentPage:a,currentPath:o,currentRoute:r,currentSlideId:l,currentLayout:i,nextRoute:c,rawTree:d,treeWithActiveStatuses:p,tree:u}}function Gy(e,n,s){const a=ae(0);At(()=>{yn.afterEach(async()=>{await At(),a.value+=1})});const o=A(()=>{var c,d;return a.value,((d=(c=n.value)==null?void 0:c.meta)==null?void 0:d.__clicksElements)||[]}),r=A(()=>{var c,d;return+(((d=(c=n.value)==null?void 0:c.meta)==null?void 0:d.clicks)??o.value.length)}),l=A(()=>s.value<qe.length-1||e.value<r.value),i=A(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:o,clicksTotal:r,hasNext:l,hasPrev:i}}const Yy=["id"],Zy=Oe({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:n}){const s=e,a=Lt(s,"clicksElements",n),o=A(()=>({height:`${Fr}px`,width:`${vn}px`})),r=Kt();Wn(()=>Promise.resolve().then(()=>i2),void 0).then(d=>r.value=d.default);const l=A(()=>s.clicks),i=Gy(l,s.nav.currentRoute,s.nav.currentPage),c=A(()=>`${s.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return vt(L,Ze({nav:{...s.nav,...i},configs:$e,themeConfigs:A(()=>$e.themeConfig)})),(d,p)=>{var u;return x(),U("div",{id:_(c),class:"slide-container",style:We(_(o))},[Y(_(Dd)),Y(_(Tr),{is:(u=e.route)==null?void 0:u.component,"clicks-elements":_(a),"onUpdate:clicks-elements":p[0]||(p[0]=h=>Fe(a)?a.value=h:null),clicks:_(l),"clicks-disabled":!1,class:Be(_(Ar)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),_(r)?(x(),H(_(r),{key:0,page:+e.route.path},null,8,["page"])):Q("v-if",!0),Y(_($d))],12,Yy)}}}),Si=z(Zy,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),Xy=Oe({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const n=e;P(L);const s=Ze(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),a=A(()=>n.route),o=Uy(a);return(l,i)=>(x(),U(Ce,null,[Y(Si,{"clicks-elements":s,"onUpdate:clicks-elements":i[0]||(i[0]=c=>s=c),clicks:0,nav:_(o),route:_(a)},null,8,["clicks-elements","nav","route"]),_(Kd)?Q("v-if",!0):(x(!0),U(Ce,{key:0},ta(s.length,c=>(x(),H(Si,{key:c,clicks:c,nav:_(o),route:_(a)},null,8,["clicks","nav","route"]))),128))],64))}}),Qy=z(Xy,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/PrintSlide.vue"]]),ew={id:"print-content"},tw=Oe({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const n=e;P(L);const s=A(()=>n.width),a=A(()=>n.width/gn),o=A(()=>s.value/a.value),r=A(()=>o.value<gn?s.value/vn:a.value*gn/vn);let l=qe.slice(0,-1);Jt.value.query.range&&(l=Bd(l.length,Jt.value.query.range).map(d=>l[d-1]));const i=A(()=>({"select-none":!$e.selectable,"slidev-code-line-numbers":$e.lineNumbers}));return vt(Jc,r),(c,d)=>(x(),U("div",{id:"print-container",class:Be(_(i))},[t("div",ew,[(x(!0),U(Ce,null,ta(_(l),p=>(x(),H(Qy,{key:p.path,route:p},null,8,["route"]))),128))]),Tt(c.$slots,"controls")],2))}});const nw=z(tw,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/PrintContainer.vue"]]),sw=Oe({__name:"Print",setup(e){P(L);function n(s,{slots:a}){if(a.default)return to("style",a.default())}return gs(()=>{Rr?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,a)=>(x(),U(Ce,null,[Y(n,null,{default:K(()=>[f(" @page { size: "+Rn(_(vn))+"px "+Rn(_(Fr))+"px; margin: 0px; } ",1)]),_:1}),t("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:We(_(kr))},[Y(nw,{class:"w-full h-full",style:We({background:"var(--slidev-slide-container-background, black)"}),width:_(Bn).width.value},null,8,["style","width"])],4)],64))}});const aw=z(sw,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/internals/Print.vue"]]);const ow={class:"slidev-layout end"},rw={__name:"end",setup(e){return P(L),(n,s)=>(x(),U("div",ow," END "))}},lw=z(rw,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/layouts/end.vue"]]),iw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cw=t("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),dw=[cw];function uw(e,n){return x(),U("svg",iw,dw)}const Ld={name:"carbon-logo-github",render:uw};function Ii(e){return e.startsWith("/")?"/"+e.slice(1):e}function zd(e,n=!1){const s=e&&e[0]==="#"&&e.startsWith("rgb"),a={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${Ii(e)})`:`url("${Ii(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return a.background||delete a.background,a}const pw=Oe({__name:"intro-image",props:{image:{type:String}},setup(e){const n=e;P(L);const s=A(()=>zd(n.image));return(a,o)=>(x(),U("div",{class:"slidev-layout w-full h-full intro-image",style:We(_(s))},[Tt(a.$slots,"default")],4))}}),pt=z(pw,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/theme-apple-basic/layouts/intro-image.vue"]]),hw=t("div",{class:"hidden"}," # Rebirth of OIST 10 years old website with Drupal 9 ",-1),mw=t("div",{class:"absolute bottom-4 text-sky-700"},[t("span",{class:"font-700"}," Chris Wu @amourow Jan, 2023 ")],-1),fw=t("div",{class:"text-6xl font-700 text-white self-end mt-32"}," Rebirth in Drupal 9 ",-1),gw=t("div",{class:"text-2xl text-white mt-6"}," Relaunch OIST 10 yrs-old website ",-1),vw=t("div",{class:"text-lg text-white"},[f(" 沖縄科学技術大学院大学で"),t("br"),f("10年間運用されていたサイトが"),t("br"),f("Drupal 9でリニューアル ")],-1),yw={class:"abs-br mr-8 flex gap-2"},ww={href:"https://github.com/amouro/",target:"_blank",alt:"GitHub",class:"text-xl icon-btn opacity-90 !border-none !hover:text-white"},bw={__name:"1",setup(e){const n={layout:"intro-image",image:"/images/DC-Iwakuni-Blue-full.png",theme:"apple-basic",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},fonts:{sans:"Montserrat",serif:"Bitter"}};return P(L),(s,a)=>{const o=Ld;return x(),H(pt,oe(ne(n)),{default:K(()=>[hw,mw,fw,gw,vw,t("div",yw,[t("a",ww,[Y(o)])])]),_:1},16)}}},xw=z(bw,[["__file","/@slidev/slides/1.md"]]),_w={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Fw=t("path",{fill:"currentColor",d:"M11.92 24.94A12.76 12.76 0 0 0 24.76 12.1v-.59A9.4 9.4 0 0 0 27 9.18a9.31 9.31 0 0 1-2.59.71a4.56 4.56 0 0 0 2-2.5a8.89 8.89 0 0 1-2.86 1.1a4.52 4.52 0 0 0-7.7 4.11a12.79 12.79 0 0 1-9.3-4.71a4.51 4.51 0 0 0 1.4 6a4.47 4.47 0 0 1-2-.56v.05a4.53 4.53 0 0 0 3.55 4.45a4.53 4.53 0 0 1-2 .08A4.51 4.51 0 0 0 11.68 21a9.05 9.05 0 0 1-5.61 2A9.77 9.77 0 0 1 5 22.91a12.77 12.77 0 0 0 6.92 2"},null,-1),kw=[Fw];function Cw(e,n){return x(),U("svg",_w,kw)}const Ew={name:"carbon-logo-twitter",render:Cw},Sw="/images/chris_potrait.png",Iw={class:"slidev-layout default"},jw={__name:"default",setup(e){return P(L),(n,s)=>(x(),U("div",Iw,[Tt(n.$slots,"default")]))}},_e=z(jw,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/layouts/default.vue"]]),Aw=t("h1",null,"Chris Wu",-1),Tw={class:"grid grid-cols-[1fr,2fr] grid-rows-2 gap-4 py-8"},Mw=t("div",{class:"image rounded-full content-center flex flex-col"},[t("img",{src:Sw,class:"rounded-full overflow-hidden"})],-1),$w={class:"intro flex flex-col items-start"},Dw=t("div",null,[t("ol",null,[t("li",null,[t("span",{class:"text-3xl"},"🇹🇼 🇯🇵")]),t("li",null,"Senior Web Developer, OIST"),t("li",null,[t("span",{class:"text-sm text-gray-400"},"Okinawa Institute of Science and Technology")]),t("li",null,[t("span",{class:"text-sm text-gray-400"},"沖縄科学技術大学院大学")])])],-1),Pw={class:"mt-4"},Ow=t("li",null,"Designer, Developer, former DUGTW leader",-1),Nw=t("li",null,[f("Keywords: "),t("span",{class:"text-3xl mt-4"},"☕️ 🇩🇪 🐈‍⬛")],-1),Hw={href:"https://twitter.com/amourow",target:"_blank",alt:"GitHub",class:"text-xl icon-btn mt-8 !border-none !hover:text-white bg-sky-600 text-white hover:bg-sky-600/80"},Bw=t("div",{class:"pl-4"},null,-1),Lw={__name:"2",setup(e){const n={};return P(L),(s,a)=>{const o=Ew;return x(),H(_e,oe(ne(n)),{default:K(()=>[Aw,t("div",Tw,[Mw,t("div",$w,[Dw,t("div",Pw,[t("ol",null,[Ow,Nw,t("li",null,[t("a",Hw,[Y(o),f(" @amourow")])])])])]),Bw])]),_:1},16)}}},zw=z(Lw,[["__file","/@slidev/slides/2.md"]]),Rw=t("div",{class:"hidden"}," # Disclaimer ",-1),Kw=t("div",{class:"text-2xl font-700 self-center"},[t("div",{class:"text-5xl font-700 text-white text-center my-10"}," Disclaimer "),t("div",{class:"w-2/5 m-auto text-center px-8"},[t("div",{class:"-ml-10"},[t("svg",{"aria-hidden":"true",class:"w-10 h-10 text-sky-300",viewBox:"0 0 24 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z",fill:"currentColor"})])]),t("blockquote",{class:"text-md font-semibold text-white !border-0 !bg-transparent"},[t("p",null,"Views expressed here are solely my own and not those of the university. No part of this presentation should be considered an endorsement.")]),t("div",{class:"flex flex-row justify-end -mr-10"},[t("svg",{"aria-hidden":"true",class:"w-10 h-10 text-sky-300 transform rotate-180",viewBox:"0 0 24 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z",fill:"currentColor"})])])])],-1),qw={__name:"3",setup(e){const n={layout:"intro-image",image:"/images/DC-Iwakuni-Blue-full.png"};return P(L),(s,a)=>(x(),H(pt,oe(ne(n)),{default:K(()=>[Rw,Kw]),_:1},16))}},Jw=z(qw,[["__file","/@slidev/slides/3.md"]]),Ww=t("div",{class:"hidden"},[t("h1",null,"The old site")],-1),Vw={__name:"4",setup(e){const n={layout:"intro-image",image:"/images/oist-www-D7.png",srcSequence:"./section-1.md"};return P(L),(s,a)=>(x(),H(pt,oe(ne(n)),{default:K(()=>[Ww]),_:1},16))}},Uw=z(Vw,[["__file","/@slidev/slides/4.md"]]),Gw=t("div",{class:"hidden"},[t("h1",null,"Goals & Plan")],-1),Yw=t("div",{class:"absolute bottom-10"},[t("span",{class:"font-700"})],-1),Zw=t("div",{class:"absolute bottom-10 right-10 text-white"},[t("h1",{class:"text-shadow-lg"},"Goals & Plan"),t("p")],-1),Xw={__name:"5",setup(e){const n={layout:"intro-image",image:"/images/find-goal-charlesdeluvio.jpg",srcSequence:"./section-1.md"};return P(L),(s,a)=>(x(),H(pt,oe(ne(n)),{default:K(()=>[Gw,Yw,Zw,Q(`
background image: Photo by Pisit Heng on Unsplash
https://unsplash.com/photos/FQvadXmA524
`)]),_:1},16))}},Qw=z(Xw,[["__file","/@slidev/slides/5.md"]]),eb=t("h1",null,"Goals",-1),tb=t("ol",{class:"relative ml-4 mt-16 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400"},[t("li",{class:"mb-10 ml-6"},[t("span",{class:"absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900"},[t("svg",{"aria-hidden":"true",class:"w-5 h-5 text-blue-600 dark:text-blue-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),t("path",{"fill-rule":"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z","clip-rule":"evenodd"})])]),t("h2",{class:"font-medium leading-tight text-gray-700 dark:text-gray-100"},"Align the strategic plan of OIST"),t("p",{class:"text-md"},[t("ul",null,[t("li",null,[f("Research "),t("span",{class:"text-sky-600"},"研究")]),t("li",null,[f("Education "),t("span",{class:"text-sky-600"},"教育")]),t("li",null,[f("Innovation "),t("span",{class:"text-sky-600"},"イノベーション")]),t("li",null,[f("Outreach "),t("span",{class:"text-sky-600"},"普及活動")])])])]),t("li",{class:"mb-10 ml-6"},[t("span",{class:"absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900"},[t("svg",{"aria-hidden":"true",class:"w-5 h-5 text-blue-600 dark:text-blue-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),t("path",{"fill-rule":"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})])]),t("h2",{class:"font-medium leading-tight text-gray-700 dark:text-gray-100"},"A better content management experience"),t("p",{class:"text-md"},[t("ul",null,[t("li",null,"Media Library"),t("li",null,"Field Translation"),t("li",null,"Design System")])])])],-1),nb={__name:"6",setup(e){const n={srcSequence:"./section-1.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[eb,tb]),_:1},16))}},sb=z(nb,[["__file","/@slidev/slides/6.md"]]),ab=t("h1",null,"Timeline",-1),ob=t("ol",{class:"items-start sm:flex mt-20"},[t("li",{class:"relative mb-6 sm:mb-0 w-max-1/3"},[t("div",{class:"flex items-center"},[t("div",{class:"flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"},[t("svg",{"aria-hidden":"true",class:"w-5 h-5 text-blue-600 dark:text-blue-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule":"evenodd"})])]),t("div",{class:"hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"})]),t("div",{class:"mt-3 sm:pr-8"},[t("div",{class:"text-lg font-semibold text-gray-900 dark:text-white"},"User Study"),t("time",{class:"block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"},"From Dec 2020"),t("p",{class:"text-base font-normal text-gray-500 dark:text-gray-400"},"Comprehensive user study and IA research")])]),t("li",{class:"relative mb-6 sm:mb-0 w-max-1/3"},[t("div",{class:"flex items-center"},[t("div",{class:"flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"},[t("svg",{"aria-hidden":"true",class:"w-5 h-5 text-blue-600 dark:text-blue-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule":"evenodd"})])]),t("div",{class:"hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"})]),t("div",{class:"mt-3 sm:pr-8"},[t("div",{class:"text-lg font-semibold text-gray-900 dark:text-white"},"Procurement & Dev"),t("time",{class:"block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"},"Starting from Aug 2021"),t("p",{class:"text-base font-normal text-gray-500 dark:text-gray-400"},"Hire vendor to migrate and develop the site in Drupal 9.")])]),t("li",{class:"relative mb-6 sm:mb-0 w-max-1/3"},[t("div",{class:"flex items-center"},[t("div",{class:"flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"},[t("svg",{"aria-hidden":"true",class:"w-5 h-5 text-blue-600 dark:text-blue-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule":"evenodd"})])]),t("div",{class:"hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"})]),t("div",{class:"mt-3 sm:pr-8"},[t("div",{class:"text-lg font-semibold text-gray-900 dark:text-white"},"Editing"),t("time",{class:"block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"},"From Jun 2022"),t("p",{class:"text-base font-normal text-gray-500 dark:text-gray-400"},"Content conversion, recreation and editing training.")])])],-1),rb={__name:"7",setup(e){const n={srcSequence:"./section-1.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[ab,ob]),_:1},16))}},lb=z(rb,[["__file","/@slidev/slides/7.md"]]),ib="/images/oist-www-home.png",cb="/images/oist-www-menu.png",db="/images/oist-www-news.png",ub=t("div",{class:"hidden"},[t("h1",null,"New site")],-1),pb=t("div",{class:"grid grid-cols-2 gap-4"},[t("div",{class:""},[t("img",{src:ib})]),t("div",null,[t("img",{src:cb,class:"mb-6"}),t("img",{src:db})]),t("div")],-1),hb={__name:"8",setup(e){const n={srcSequence:"./section-1.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[ub,pb]),_:1},16))}},mb=z(hb,[["__file","/@slidev/slides/8.md"]]),fb=t("h1",null,"Showcase of OIST new website",-1),gb=t("p",null,"(an videoclip go through the new site)",-1),vb=t("ul",null,[t("li",null,"Homepage"),t("li",null,"Menu (3-levels mega menu)"),t("li",null,"News page (editor’s selection and related content)"),t("li",null,"Photo Gallergy"),t("li",null,"SDG microsite"),t("li",null,[f("Style Guide (Show paragraph components) "),t("ul",null,[t("li",null,"Call to Action - 2 items"),t("li",null,"Image Grid"),t("li",null,"Document and Links"),t("li",null,"Featured Content - Grid / Panel / Slide"),t("li",null,[f("Grid example ("),t("a",{href:"https://www.oist.jp/style-guide#grid-example",target:"_blank",rel:"noopener"},"https://www.oist.jp/style-guide#grid-example"),f(")")])])])],-1),yb={__name:"9",setup(e){const n={srcSequence:"./section-1.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[fb,gb,vb]),_:1},16))}},wb=z(yb,[["__file","/@slidev/slides/9.md"]]),bb=t("div",{class:"hidden"},[t("h1",null,"Migration, Dev, and Management")],-1),xb=t("div",{class:"absolute bottom-10"},[t("span",{class:"font-700"})],-1),_b=t("div",{class:"absolute bottom-20 left-1/2"},[t("h1",{class:"text-shadow-md"},"Migration, Dev, & Management")],-1),Fb={__name:"10",setup(e){const n={layout:"intro-image",image:"/images/white-box-kelli-mcclintock.jpg",srcSequence:"./section-2.md"};return P(L),(s,a)=>(x(),H(pt,oe(ne(n)),{default:K(()=>[bb,xb,_b]),_:1},16))}},kb=z(Fb,[["__file","/@slidev/slides/10.md"]]),Cb="/images/2023-01-06-23-30-22.png",Eb=t("h1",null,"Migration",-1),Sb=t("ol",{class:"items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12"},[t("li",{class:"flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3"},[t("span",{class:"flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500"}," 1 "),t("span",null,[t("h4",{class:"font-bold text-2xl leading-tight"},"Content node"),t("div",{class:"text-sm"},"Content and Media node")])]),t("li",{class:"flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3"},[t("span",{class:"flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"}," 2 "),t("span",null,[t("h4",{class:"font-bold text-2xl leading-tight"},"Embed assets"),t("div",{class:"text-sm"},"Assets uploaded via IMCE")])]),t("li",{class:"flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3"},[t("span",{class:"flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"}," 3 "),t("span",null,[t("h4",{class:"font-bold text-2xl leading-tight"},"Migration Profile"),t("div",{class:"text-sm"},"Mock up data for CI/CD")])])],-1),Ib=t("div",{class:"grid grid-cols-3 gap-8"},[t("div",{class:"col-span-2 pl-6 pt-8 items-center"},[t("p",null,[f(" Migrated "),t("span",{class:"text-blue-600 dark:text-blue-500"},"3200"),f(" content nodes and "),t("span",{class:"text-blue-600 dark:text-blue-500"},"6600"),f(" media assets ")]),t("p",null,[t("pre",{class:"p-4 bg-gray-700 text-white"},"[[nid:9999]] --> <drupal-entity />")])]),t("div",null,[t("img",{src:Cb})])],-1),jb={__name:"11",setup(e){const n={srcSequence:"./section-2.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[Eb,Sb,Ib]),_:1},16))}},Ab=z(jb,[["__file","/@slidev/slides/11.md"]]),Tb="/images/IMCE_browser.png",Mb=t("h1",null,"Migration",-1),$b=t("ol",{class:"items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12"},[t("li",{class:"flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3"},[t("span",{class:"flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"}," 1 "),t("span",null,[t("h4",{class:"font-bold text-2xl leading-tight"},"Content node"),t("div",{class:"text-sm"},"Content and Media node")])]),t("li",{class:"flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3"},[t("span",{class:"flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500"}," 2 "),t("span",null,[t("h4",{class:"font-bold text-2xl leading-tight"},"Embed assets"),t("div",{class:"text-sm"},"Assets uploaded via IMCE")])]),t("li",{class:"flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3"},[t("span",{class:"flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"}," 3 "),t("span",null,[t("h4",{class:"font-bold text-2xl leading-tight"},"Migration Profile"),t("div",{class:"text-sm"},"Mock up data for CI/CD")])])],-1),Db=t("div",{class:"grid grid-cols-5 gap-8"},[t("div",{class:"col-span-3 pl-6 pt-8 items-center"},[f(" Converted "),t("span",{class:"text-blue-600 dark:text-blue-500"},"1500"),f(" files that were uploaded via "),t("ul",null,[t("li",null,"IMCE"),t("li",null,"File fields")])]),t("div",{class:"col-span-2"},[t("img",{src:Tb})])],-1),Pb={__name:"12",setup(e){const n={srcSequence:"./section-2.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[Mb,$b,Db]),_:1},16))}},Ob=z(Pb,[["__file","/@slidev/slides/12.md"]]),Nb="/images/cicd_workflow.png",Hb=t("h1",null,"Migration",-1),Bb=t("ol",{class:"items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12"},[t("li",{class:"flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3"},[t("span",{class:"flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"}," 1 "),t("span",null,[t("h4",{class:"font-bold text-2xl leading-tight"},"Content node"),t("div",{class:"text-sm"},"Content and Media node")])]),t("li",{class:"flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3"},[t("span",{class:"flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"}," 2 "),t("span",null,[t("h4",{class:"font-bold text-2xl leading-tight"},"Embed assets"),t("div",{class:"text-sm"},"Assets uploaded via IMCE")])]),t("li",{class:"flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3"},[t("span",{class:"flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500"}," 3 "),t("span",null,[t("h4",{class:"font-bold text-2xl leading-tight"},"Migration Profile"),t("div",{class:"text-sm"},"Mock up data for CI/CD")])])],-1),Lb=t("div",{class:"grid grid-cols-5 gap-8"},[t("div",{class:"col-span-3 pl-6 pt-8 items-center"},[t("ol",null,[t("li",null,[f(" In total "),t("span",{class:"text-blue-600 dark:text-blue-500"},"10,000+"),f(" content and assets are migrated. ")]),t("li",null," Reuse the migration profile as mockup data for CI/CD testing workflow. ")])]),t("div",{class:"col-span-2"},[t("p",null,[t("img",{src:Nb,alt:""})])])],-1),zb={__name:"13",setup(e){const n={srcSequence:"./section-2.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[Hb,Bb,Lb]),_:1},16))}},Rb=z(zb,[["__file","/@slidev/slides/13.md"]]),Kb=t("h1",null,"Key to the Successful Project",-1),qb=t("ol",{class:"relative ml-4 mt-12 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400"},[t("li",{class:"mb-10 ml-6"},[t("span",{class:"absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900"},[t("svg",{"aria-hidden":"true",class:"w-5 h-5 text-blue-600 dark:text-blue-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),t("path",{"fill-rule":"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})])]),t("h2",{class:"font-medium leading-tight text-gray-700 dark:text-gray-100"},"Internal Communication"),t("p",{class:"text-sm"},[t("ul",null,[t("li",null,"Progress report"),t("li",null,"Meet the stack holder")])])]),t("li",{class:"mb-10 ml-6"},[t("span",{class:"absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900"},[t("svg",{"aria-hidden":"true",class:"w-5 h-5 text-blue-600 dark:text-blue-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),t("path",{"fill-rule":"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z","clip-rule":"evenodd"})])]),t("h2",{class:"font-medium leading-tight text-gray-700 dark:text-gray-100"},"Project management"),t("p",{class:"text-sm"},[t("ul",null,[t("li",null,"Dev stage with vendor"),t("li",null,"In-house dev stage and editing stage")])])]),t("li",{class:"mb-10 ml-6"},[t("span",{class:"absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900"},[t("svg",{class:"w-5 h-5 text-blue-600 dark:text-blue-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"})])]),t("h2",{class:"font-medium leading-tight text-gray-700 dark:text-gray-100"},"Continuous Intergration & Deployment (CI/CD)"),t("p",{class:"text-sm"},[t("ul",null,[t("li",null,"Tests"),t("li",null,"Automated Deployment")])])])],-1),Jb={__name:"14",setup(e){const n={srcSequence:"./section-2.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[Kb,qb]),_:1},16))}},Wb=z(Jb,[["__file","/@slidev/slides/14.md"]]),Vb=t("h1",null,"Project management",-1),Ub=t("div",{class:"grid grid-cols-2 gap-8 mt-12"},[t("div",{class:"w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"},[t("h5",{class:"mb-4 text-xl font-medium text-gray-500 dark:text-gray-400"},"Dev Stage with Vendor"),t("div",{class:"flex items-baseline text-gray-900 dark:text-white"},[t("span",{class:"text-4xl font-extrabold tracking-tight"},"GitHub"),t("span",{class:"ml-4 text-lg font-normal text-gray-500 dark:text-gray-400"},"Issue and Project")]),Q(" List "),t("ul",{role:"list",class:"space-y-5 my-7"},[t("li",{class:"flex space-x-3"},[Q(" Icon "),t("svg",{"aria-hidden":"true",class:"flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("title",null,"Check icon"),t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})]),t("span",{class:"text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"2 OIST team members")]),t("li",{class:"flex space-x-3"},[Q(" Icon "),t("svg",{"aria-hidden":"true",class:"flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("title",null,"Check icon"),t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})]),t("span",{class:"text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"6 vendor team members")]),t("li",{class:"flex space-x-3"},[Q(" Icon "),t("svg",{class:"pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})]),t("span",{class:"text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"Project manager")]),t("li",{class:"flex space-x-3"},[Q(" Icon "),t("svg",{class:"pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})]),t("span",{class:"text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"Designer, Frontend Developer, Backend Developer, QA")]),t("li",{class:"flex space-x-3"},[Q(" Icon "),t("svg",{"aria-hidden":"true",class:"flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("title",null,"Check icon"),t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})]),t("span",{class:"text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"600 issues and 600 PRs")])])]),t("div",{class:"w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"},[t("h5",{class:"mb-4 text-xl font-medium text-gray-500 dark:text-gray-400"},"In-house Dev and Editing Stage"),t("div",{class:"flex items-baseline text-gray-900 dark:text-white"},[t("span",{class:"text-4xl font-extrabold tracking-tight"},"GitHub + Shortcut"),t("span",{class:"ml-4 text-xl font-normal text-gray-500 dark:text-gray-400"})]),Q(" List "),t("ul",{role:"list",class:"space-y-5 my-7"},[t("li",{class:"flex space-x-3"},[Q(" Icon "),t("svg",{"aria-hidden":"true",class:"flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("title",null,"Check icon"),t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})]),t("span",{class:"text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"7 team members")]),t("li",{class:"flex space-x-3"},[Q(" Icon "),t("svg",{class:"pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})]),t("span",{class:"text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"Manager, Content Editor, Graphic Designer, 2 Drupal Developers")]),t("li",{class:"flex space-x-3"},[Q(" Icon "),t("svg",{"aria-hidden":"true",class:"flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("title",null,"Check icon"),t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})]),t("span",{class:"text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"450 Dev issues, 500 Content tasks")])])])],-1),Gb={__name:"15",setup(e){const n={srcSequence:"./section-2.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[Vb,Ub]),_:1},16))}},Yb=z(Gb,[["__file","/@slidev/slides/15.md"]]),Zb=t("div",{class:"hidden"},[t("h1",null,"GitHub")],-1),Xb=t("div",{class:"absolute top-5"},[t("span",{class:"font-700 text-2xl text-black dark:text-white"}," GitHub Project ")],-1),Qb=t("div",{class:"absolute top-30 text-shadow-lg w-full"},[t("div",{class:"absolute top-0 w-full text-black"},[t("h1"),t("p")])],-1),ex={__name:"16",setup(e){const n={layout:"intro-image",image:"/images/github_project_planner.png",srcSequence:"./section-2.md"};return P(L),(s,a)=>(x(),H(pt,oe(ne(n)),{default:K(()=>[Zb,Xb,Qb]),_:1},16))}},tx=z(ex,[["__file","/@slidev/slides/16.md"]]),nx=t("div",{class:"hidden"},[t("h1",null,"Shortcut")],-1),sx=t("div",{class:"absolute top-5"},[t("span",{class:"font-700 text-2xl text-sky-400"}," Shortcut ")],-1),ax=t("div",{class:"absolute top-30 text-shadow-lg w-full"},[t("div",{class:"absolute top-0 w-full text-black"},[t("h1"),t("p")])],-1),ox={__name:"17",setup(e){const n={layout:"intro-image",image:"/images/shortcut_storyboard_docs.png",srcSequence:"./section-2.md"};return P(L),(s,a)=>(x(),H(pt,oe(ne(n)),{default:K(()=>[nx,sx,ax]),_:1},16))}},rx=z(ox,[["__file","/@slidev/slides/17.md"]]),lx=t("div",{class:"hidden"},[t("h1",null,"Shortcut")],-1),ix=t("div",{class:"absolute top-5"},[t("span",{class:"font-700 text-2xl text-sky-400"}," Shortcut ")],-1),cx=t("div",{class:"absolute top-30 text-shadow-lg w-full"},[t("div",{class:"absolute top-0 w-full text-black"},[t("h1"),t("p")])],-1),dx={__name:"18",setup(e){const n={layout:"intro-image",image:"/images/shortcut_issue_github.png",srcSequence:"./section-2.md"};return P(L),(s,a)=>(x(),H(pt,oe(ne(n)),{default:K(()=>[lx,ix,cx]),_:1},16))}},ux=z(dx,[["__file","/@slidev/slides/18.md"]]),px="/images/circleci_flow.png",hx=t("h1",null,"CI/CD Workflow",-1),mx=t("ol",{class:"relative ml-4 mt-8 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400"},[t("li",{class:"mb-10 ml-6"},[t("span",{class:"absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900"},[t("svg",{"aria-hidden":"true",class:"w-5 h-5 text-blue-600 dark:text-blue-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),t("path",{"fill-rule":"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})])]),t("h2",{class:"font-medium leading-tight text-gray-700 dark:text-gray-100"},"Lint"),t("p",{class:"text-sm"})]),t("li",{class:"mb-10 ml-6"},[t("span",{class:"absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900"},[t("svg",{"aria-hidden":"true",class:"w-5 h-5 text-blue-600 dark:text-blue-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),t("path",{"fill-rule":"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})])]),t("h2",{class:"font-medium leading-tight text-gray-700 dark:text-gray-100"},"Unit test"),t("p",{class:"text-sm"})]),t("li",{class:"mb-10 ml-6"},[t("span",{class:"absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900"},[t("svg",{class:"w-5 h-5 text-blue-600 dark:text-blue-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"})])]),t("h2",{class:"font-medium leading-tight text-gray-700 dark:text-gray-100"},"Automated deployment"),t("p",{class:"text-sm"},[t("ul",null,[t("li",null,"Multiple Dev Environment"),t("li",null,"Production Site Deployment")])])])],-1),fx=t("div",{class:"mt-8"},[t("p",null,[t("img",{src:px,alt:""})])],-1),gx={__name:"19",setup(e){const n={srcSequence:"./section-2.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[hx,mx,fx]),_:1},16))}},vx=z(gx,[["__file","/@slidev/slides/19.md"]]),yx=t("h1",null,"Diversity",-1),wx={__name:"20",setup(e){const n={layout:"intro-image",image:"/images/unit_yamamoto.jpg",srcSequence:"./section-3.md"};return P(L),(s,a)=>(x(),H(pt,oe(ne(n)),{default:K(()=>[yx]),_:1},16))}},bx=z(wx,[["__file","/@slidev/slides/20.md"]]),xx="/images/2022-08-22-23-02-48.png",_x="/images/2022-08-22-22-58-40.png",Fx=t("h1",null,"Translate with i18n",-1),kx=t("p",null,"Content translation / Field translation",-1),Cx=t("img",{class:"w-2/3",src:xx},null,-1),Ex=t("p",null,"User Interface translation in Drupal",-1),Sx=t("p",null,[t("img",{src:_x,alt:""})],-1),Ix={__name:"21",setup(e){const n={srcSequence:"./section-3.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[Fx,kx,Cx,Ex,Q(" Configuration "),Sx]),_:1},16))}},jx=z(Ix,[["__file","/@slidev/slides/21.md"]]),Ax={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Tx=t("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),Mx=[Tx];function $x(e,n){return x(),U("svg",Ax,Mx)}const Dx={name:"ph-clipboard",render:$x},Px={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Ox=t("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Nx=[Ox];function Hx(e,n){return x(),U("svg",Px,Nx)}const Bx={name:"ph-check-circle",render:Hx},Lx=["title"],zx=Oe({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;P(L);const s=P(Rc),a=P(Kc),o=P(qc);function r(u=5){const h=[],g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",v=g.length;for(let w=0;w<u;w++)h.push(g.charAt(Math.floor(Math.random()*v)));return h.join("")}const l=ae(),i=Fn();Ya(()=>{const u=n.at==null?a==null?void 0:a.value.length:n.at,h=A(()=>o!=null&&o.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(u||0)),n.ranges.length-1)),g=A(()=>n.ranges[h.value]||"");if(n.ranges.length>=2&&!(o!=null&&o.value)){const v=r(),w=e0(n.ranges.length-1).map(b=>v+b);a!=null&&a.value&&(a.value.push(...w),Za(()=>w.forEach(b=>Qh(a.value,b)),i))}gs(()=>{if(!l.value)return;const w=l.value.querySelector(".shiki-dark")?Array.from(l.value.querySelectorAll(".shiki")):[l.value];for(const b of w){const S=Array.from(b.querySelectorAll(".line")),k=Bd(S.length,g.value);if(S.forEach((E,T)=>{const W=k.includes(T+1);E.classList.toggle(Xh,!0),E.classList.toggle("highlighted",W),E.classList.toggle("dishonored",!W)}),n.maxHeight){const E=b.querySelector(".line.highlighted");E&&E.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:d}=Y0();function p(){var h,g;const u=(g=(h=l.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:g.textContent;u&&d(u)}return(u,h)=>{const g=Bx,v=Dx;return x(),U("div",{ref_key:"el",ref:l,class:"slidev-code-wrapper relative group",style:We({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[Tt(u.$slots,"default"),_($e).codeCopy?(x(),U("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:_(c)?"Copied":"Copy",onClick:h[0]||(h[0]=w=>p())},[_(c)?(x(),H(g,{key:0,class:"p-2 w-8 h-8"})):(x(),H(v,{key:1,class:"p-2 w-8 h-8"}))],8,Lx)):Q("v-if",!0)],4)}}}),Dt=z(zx,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),Rx=t("h1",null,"Translate with i18n",-1),Kx=t("p",null,"Translation in Twig",-1),qx=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#282A36"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"{# Test trans filter. #}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"{{ "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"Hello Earth."),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#FF79C6"}},"|"),t("span",{style:{color:"#F8F8F2"}},"trans }}")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"{# Test trans tag with text content. #}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"{% "),t("span",{style:{color:"#FF79C6"}},"set"),t("span",{style:{color:"#F8F8F2"}}," body_text %}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  {% "),t("span",{style:{color:"#FF79C6"}},"trans"),t("span",{style:{color:"#F8F8F2"}}," %}Read more at: {{ url }}{% "),t("span",{style:{color:"#FF79C6"}},"endtrans"),t("span",{style:{color:"#F8F8F2"}}," %}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"{% "),t("span",{style:{color:"#FF79C6"}},"endset"),t("span",{style:{color:"#F8F8F2"}}," %}")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"{% "),t("span",{style:{color:"#FF79C6"}},"set"),t("span",{style:{color:"#F8F8F2"}}," count "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," comments"),t("span",{style:{color:"#FF79C6"}},"|"),t("span",{style:{color:"#8BE9FD"}},"length"),t("span",{style:{color:"#F8F8F2"}}," %}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"{% "),t("span",{style:{color:"#FF79C6"}},"trans"),t("span",{style:{color:"#F8F8F2"}}," %}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  {{ count }} comment was deleted successfully.")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"{% plural count %}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  {{ count }} comments were deleted successfully.")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"{% "),t("span",{style:{color:"#FF79C6"}},"endtrans"),t("span",{style:{color:"#F8F8F2"}}," %}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#272822"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#88846F"}},"{# Test trans filter. #}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"{{ "),t("span",{style:{color:"#E6DB74"}},"'Hello Earth.'"),t("span",{style:{color:"#F92672"}},"|"),t("span",{style:{color:"#F8F8F2"}},"trans }}")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#88846F"}},"{# Test trans tag with text content. #}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"{% "),t("span",{style:{color:"#F92672"}},"set"),t("span",{style:{color:"#F8F8F2"}}," body_text %}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  {% "),t("span",{style:{color:"#F92672"}},"trans"),t("span",{style:{color:"#F8F8F2"}}," %}Read more at: {{ url }}{% "),t("span",{style:{color:"#F92672"}},"endtrans"),t("span",{style:{color:"#F8F8F2"}}," %}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"{% "),t("span",{style:{color:"#F92672"}},"endset"),t("span",{style:{color:"#F8F8F2"}}," %}")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"{% "),t("span",{style:{color:"#F92672"}},"set"),t("span",{style:{color:"#F8F8F2"}}," count "),t("span",{style:{color:"#F92672"}},"="),t("span",{style:{color:"#F8F8F2"}}," comments"),t("span",{style:{color:"#F92672"}},"|"),t("span",{style:{color:"#66D9EF"}},"length"),t("span",{style:{color:"#F8F8F2"}}," %}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"{% "),t("span",{style:{color:"#F92672"}},"trans"),t("span",{style:{color:"#F8F8F2"}}," %}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  {{ count }} comment was deleted successfully.")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"{% plural count %}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  {{ count }} comments were deleted successfully.")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"{% "),t("span",{style:{color:"#F92672"}},"endtrans"),t("span",{style:{color:"#F8F8F2"}}," %}")])])])],-1),Jx={__name:"22",setup(e){const n={srcSequence:"./section-3.md"};return P(L),(s,a)=>{const o=Dt;return x(),H(_e,oe(ne(n)),{default:K(()=>[Rx,Kx,Y(o,ut({},{ranges:[""]}),{default:K(()=>[qx]),_:1},16)]),_:1},16)}}},Wx=z(Jx,[["__file","/@slidev/slides/22.md"]]),Vx=t("h1",null,"Translate with i18n",-1),Ux=t("p",null,"Translate a sentence with t() function and variables that allow us to place the var in alternative position",-1),Gx=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#282A36"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  $sentence_translation "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#50FA7B"}},"t"),t("span",{style:{color:"#F8F8F2"}},"(")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#50FA7B"}},"    "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},'No crop types available. <a href="@link">Add crop type</a>.'),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},","),t("span",{style:{color:"#50FA7B"}}," "),t("span",{style:{color:"#6272A4"}},"// Sentence")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#50FA7B"}},"    "),t("span",{style:{color:"#F8F8F2"}},"["),t("span",{style:{color:"#50FA7B"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"@link"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#50FA7B"}}," "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#50FA7B"}}," "),t("span",{style:{color:"#BD93F9"}},"$this"),t("span",{style:{color:"#FF79C6"}},"->"),t("span",{style:{color:"#F8F8F2"}},"urlGenerator"),t("span",{style:{color:"#FF79C6"}},"->"),t("span",{style:{color:"#50FA7B"}},"generateFromRoute"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"crop.type_add"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},"),]"),t("span",{style:{color:"#50FA7B"}}," "),t("span",{style:{color:"#6272A4"}},"// Dynamic value")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#50FA7B"}},"  "),t("span",{style:{color:"#F8F8F2"}},");")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#272822"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  $sentence_translation "),t("span",{style:{color:"#F92672"}},"="),t("span",{style:{color:"#F8F8F2"}}," ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#A6E22E"}},"t"),t("span",{style:{color:"#F8F8F2"}},"(")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#E6DB74"}},`'No crop types available. <a href="@link">Add crop type</a>.'`),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#88846F"}},"// Sentence")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    [ "),t("span",{style:{color:"#E6DB74"}},"'@link'"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#F92672"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FD971F"}},"$this"),t("span",{style:{color:"#F92672"}},"->"),t("span",{style:{color:"#F8F8F2"}},"urlGenerator"),t("span",{style:{color:"#F92672"}},"->"),t("span",{style:{color:"#A6E22E"}},"generateFromRoute"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E6DB74"}},"'crop.type_add'"),t("span",{style:{color:"#F8F8F2"}},"),] "),t("span",{style:{color:"#88846F"}},"// Dynamic value")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")])])])],-1),Yx={__name:"23",setup(e){const n={srcSequence:"./section-3.md"};return P(L),(s,a)=>{const o=Dt;return x(),H(_e,oe(ne(n)),{default:K(()=>[Vx,Ux,Y(o,ut({},{ranges:[""]}),{default:K(()=>[Gx]),_:1},16)]),_:1},16)}}},Zx=z(Yx,[["__file","/@slidev/slides/23.md"]]),Xx="/images/2022-09-21-20-08-11.png",Qx="/images/2022-09-21-18-28-37.png",e_=t("h1",null,"Translate with i18n",-1),t_=t("p",null,"And translate with context",-1),n_=t("div",{class:"grid grid-cols-2 mt-8 mb-4"},[t("div",{class:"flex flex-col items-center"},[t("div",{class:"font-bold"},[f(" noun. as a section label: "),t("span",{class:"text-sky-500 font-normal"},"連絡先")]),t("img",{class:"h-60 mt-4 shadow-xl p-4",src:Xx})]),t("div",{class:"flex flex-col items-center"},[t("div",{class:"font-bold"},[f(" verb. as an action: "),t("span",{class:"text-sky-500 font-normal"},"コンタクト")]),t("img",{class:"h-60 mt-4 shadow-md",src:Qx})])],-1),s_=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#282A36"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  $labels "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," [")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"contact_action"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9"}},"$this"),t("span",{style:{color:"#FF79C6"}},"->"),t("span",{style:{color:"#50FA7B"}},"t"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"Contact"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", [], ["),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"context"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"As an action"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},"]),")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"contact_section"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9"}},"$this"),t("span",{style:{color:"#FF79C6"}},"->"),t("span",{style:{color:"#50FA7B"}},"t"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"Contact"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", [], ["),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"context"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"As a section label"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},"]),")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  ];")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#272822"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  $labels "),t("span",{style:{color:"#F92672"}},"="),t("span",{style:{color:"#F8F8F2"}}," [")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#E6DB74"}},"'contact_action'"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#F92672"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FD971F"}},"$this"),t("span",{style:{color:"#F92672"}},"->"),t("span",{style:{color:"#A6E22E"}},"t"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E6DB74"}},"'Contact'"),t("span",{style:{color:"#F8F8F2"}},", [], ["),t("span",{style:{color:"#E6DB74"}},"'context'"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#F92672"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E6DB74"}},"'As an action'"),t("span",{style:{color:"#F8F8F2"}},"]),")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#E6DB74"}},"'contact_section'"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#F92672"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FD971F"}},"$this"),t("span",{style:{color:"#F92672"}},"->"),t("span",{style:{color:"#A6E22E"}},"t"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E6DB74"}},"'Contact'"),t("span",{style:{color:"#F8F8F2"}},", [], ["),t("span",{style:{color:"#E6DB74"}},"'context'"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#F92672"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E6DB74"}},"'As a section label'"),t("span",{style:{color:"#F8F8F2"}},"]),")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  ];")])])])],-1),a_={__name:"24",setup(e){const n={srcSequence:"./section-3.md"};return P(L),(s,a)=>{const o=Dt;return x(),H(_e,oe(ne(n)),{default:K(()=>[e_,t_,n_,Y(o,ut({},{ranges:[""]}),{default:K(()=>[s_]),_:1},16)]),_:1},16)}}},o_=z(a_,[["__file","/@slidev/slides/24.md"]]),r_=t("div",{class:"hidden"},[t("h1",null,"More than Words")],-1),l_=t("div",{class:"text-6xl font-700 text-gray-700 self-end mt-43 mb-8 font-serif"}," More than Words ",-1),i_=t("div",{class:"text-4xl text-gray-700"}," Localizing the User Experience ",-1),c_=t("div",{class:"text-md text-sky-700 flex justify-center"},[t("span",{class:"flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full mr-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900"},[t("svg",{class:"w-5 h-5 text-blue-600 dark:text-blue-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"})])]),t("h2",{class:"font-normal leading-tight text-gray-700 dark:text-gray-100"},[f(" Online slide: "),t("a",{class:"text-sky-600 underline-dashed",target:"_blank",href:"https://prague.amou.ro"},"https://prague.amou.ro")])],-1),d_={class:"abs-br m-6 flex gap-2"},u_={href:"https://github.com/",target:"_blank",alt:"GitHub",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},p_={__name:"25",setup(e){const n={layout:"intro-image",image:"/images/DCE2022_title.png",class:"text-center",srcSequence:"./section-3.md"};return P(L),(s,a)=>{const o=Ld;return x(),H(pt,oe(ne(n)),{default:K(()=>[r_,l_,i_,c_,t("div",d_,[t("a",u_,[Y(o)])])]),_:1},16)}}},h_=z(p_,[["__file","/@slidev/slides/25.md"]]),m_={class:"slidev-layout center h-full grid place-content-center fact"},f_={class:"my-auto"},g_={__name:"fact",setup(e){return P(L),(n,s)=>(x(),U("div",m_,[t("div",f_,[Tt(n.$slots,"default")])]))}},aa=z(g_,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/theme-apple-basic/layouts/fact.vue"]]),v_=t("div",{class:"hidden"}," # JP/TW Date format using Gregorian Calendar ",-1),y_=t("h1",{class:"!text-7xl"},[f(" YYYY"),t("span",{class:"text-blue-400"},"年"),f("mm"),t("span",{class:"text-blue-400"},"月"),f("dd"),t("span",{class:"text-blue-400"},"日")],-1),w_=t("p",null,"🇯🇵 Japan 🇹🇼 Taiwan",-1),b_={__name:"26",setup(e){const n={layout:"fact",srcSequence:"./section-3.md"};return P(L),(s,a)=>(x(),H(aa,oe(ne(n)),{default:K(()=>[v_,y_,w_]),_:1},16))}},x_=z(b_,[["__file","/@slidev/slides/26.md"]]),__=t("h1",null,"9/12/2022",-1),F_=t("p",null,[t("span",{class:"text-blue-400"},"Sep. 12"),f(" vs. "),t("span",{class:"text-teal-400"},"Dec. 9")],-1),k_={__name:"27",setup(e){const n={layout:"fact",srcSequence:"./section-3.md"};return P(L),(s,a)=>(x(),H(aa,oe(ne(n)),{default:K(()=>[__,F_]),_:1},16))}},C_=z(k_,[["__file","/@slidev/slides/27.md"]]),E_=t("h1",null,"YYYY-mm-dd",-1),S_=t("p",null,[t("span",{class:"text-sky-500"},"ISO 8601 Formats")],-1),I_={__name:"28",setup(e){const n={layout:"fact",srcSequence:"./section-3.md"};return P(L),(s,a)=>(x(),H(aa,oe(ne(n)),{default:K(()=>[E_,S_]),_:1},16))}},j_=z(I_,[["__file","/@slidev/slides/28.md"]]),A_=t("div",{class:"hidden"},[t("h1",null,"===== Issue in CJK: Typing =====")],-1),T_=t("div",{class:"absolute top-10"},[t("span",{class:"font-700"})],-1),M_=t("div",{class:"absolute bottom-10"},[t("h1",null,"CJK"),t("p",null,"Exclusive issue in CJK")],-1),$_={__name:"29",setup(e){const n={layout:"intro-image",image:"/images/cjk-cover-left.png",srcSequence:"./section-3.md"};return P(L),(s,a)=>(x(),H(pt,oe(ne(n)),{default:K(()=>[A_,T_,M_,Q(`
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
`)]),_:1},16))}},D_=z($_,[["__file","/@slidev/slides/29.md"]]),P_=t("h1",null,"CJK Paragraph",-1),O_=t("hr",null,null,-1),N_=t("div",{class:"grid grid-cols-3 gap-4 items-start text-sm mt-4"},[t("div",null,[t("h2",null,"我是 COVID-19 確診個案，應該要注意甚麼:"),t("p",null,"大部分的 COVID-19 感染者症狀輕微，休養後即可自行康復，為了將醫療資源留 給重症患者，請您先留在家中不要離開，等候公衛人員通知。"),t("p",null,"務必觀察自身症狀變化，若出現以下症狀時，請立即通知所在地政府衛生局或撥打 119 就醫，以 119 救護車為原則或指示之防疫計程車、同住親友接送或自行前往 (如步行、 自行駕/騎車)等方式為輔：喘、呼吸困難、持續胸痛、胸悶、意識不清、 皮膚或嘴唇或指甲床發青。")]),t("div",null,[t("h2",null,"보건소에서 코로나19 양성 통보를 받았다면, 이렇게 하세요"),t("p",null,"검체채취일로부터 7일까지는 타인에게 바이러스를 전염시킬 위험이 있어 격리합니다. 오미크론 변이는 델타 변이보다 중증도가 낮으므로 증상이 없거나 경증인 경우 해열제, 감기약 복용 등 대증치료로 회복할 수 있습니다. [코로나19와 오미크론 변이] 바로가기"),t("p",null,"발열 등 증상으로 진료가 필요하면, 외래진료센터 대면진료 또는 전화 상담·처방이 가능합니다. 감염전파 방지를 위해 외출하지 말고 가급적 집에 머무르며, 화장실‧물건 등은 동거인과 따로 사용하고 자주 소독해야 합니다.[청소와소독] 바로가기")]),t("div",null,[t("h2",null,"新型コロナウイルス感染症、症状がある方はためらわずに連絡を！"),t("p",null,"宿泊療養・自宅療養者アンケート調査によって、世代を問わず多くの方が、コロナ感染が判明する前から、 【発熱、頭痛、体のだるさ、せき、のどの痛み】といった自覚症状を訴えていたことがわかりました。"),t("p",null,"これらの症状を複数感じ、不安に思ったときは、どうぞためらわず、「かかりつけ医・身近な医療機関」や「発熱相談センター」へご連絡、ご相談ください。")])],-1),H_={__name:"30",setup(e){const n={srcSequence:"./section-3.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[P_,O_,N_]),_:1},16))}},B_=z(H_,[["__file","/@slidev/slides/30.md"]]),L_="/images/2022-09-09-14-35-49.png",z_="/images/2022-09-09-14-36-35.png",R_="/images/2022-09-09-14-44-38.png",K_="/images/2022-09-09-14-46-18.png",q_="/images/2022-09-09-14-39-25.png",J_="/images/2022-09-09-14-41-00.png",W_=t("h1",null,"Input method",-1),V_=t("div",{class:"grid grid-cols-4 gap-2 items-end"},[t("div",null,[t("img",{src:L_})]),t("div",null,[t("img",{src:z_})]),t("div",null,[t("img",{src:R_})]),t("div",null,[t("img",{src:K_})]),t("div",null,[t("img",{src:q_})]),t("div",{class:"col-span-2"},[t("img",{src:J_})])],-1),U_={__name:"31",setup(e){const n={srcSequence:"./section-3.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[W_,V_]),_:1},16))}},G_=z(U_,[["__file","/@slidev/slides/31.md"]]),Y_=t("h1",null,"Input method",-1),Z_=t("div",{class:"mt-16"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Keyword"),t("th",null,"Segments"),t("th",null,"Segments"),t("th",null,"Lang")])]),t("tbody",null,[t("tr",null,[t("td",null,"Computer"),t("td"),t("td",null,"8"),t("td",null,"en")]),t("tr",null,[t("td",null,"コンピューター (konpyūtā)"),t("td",null,"kon pyu- ta-"),t("td",null,"10"),t("td",null,"jp-ja")]),t("tr",null,[t("td",null,"電腦 (diànnǎo)"),t("td",null,"ㄉ一ㄢˋ ㄋㄠˇ"),t("td",null,"7"),t("td",null,"zh-hant")]),t("tr",null,[t("td",null,"计算机 (jìsuànjī)"),t("td",null,"jisuanji / jsj"),t("td",null,"8 / 3"),t("td",null,"zh-hans")])])])],-1),X_={__name:"32",setup(e){const n={srcSequence:"./section-3.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[Y_,Z_]),_:1},16))}},Q_=z(X_,[["__file","/@slidev/slides/32.md"]]),e8="/images/SyI343.mp4",t8=t("h1",null,"Autocomplete search suggestion",-1),n8=t("p",null,"What do you see?",-1),s8=t("video",{controls:""},[t("source",{src:e8,type:"video/mp4"})],-1),a8={__name:"33",setup(e){const n={srcSequence:"./section-3.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[t8,n8,s8]),_:1},16))}},o8=z(a8,[["__file","/@slidev/slides/33.md"]]),r8="/images/vjS5Xr.mp4",l8=t("h1",null,"Autocomplete search suggestion",-1),i8=t("p",null,[f("What is "),t("span",{class:"bg-green-300 p-1"},"improved"),f("?")],-1),c8=t("video",{controls:""},[t("source",{src:r8,type:"video/mp4"})],-1),d8={__name:"34",setup(e){const n={srcSequence:"./section-3.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[l8,i8,c8,Q(` Configuration 
composition events https://github.com/oist/oist-www/issues94#issuecomment-1009660884
`)]),_:1},16))}},u8=z(d8,[["__file","/@slidev/slides/34.md"]]),p8=t("h1",null,"CompositionEvent",-1),h8=t("p",null,[f("Implement "),t("code",null,"CompositionEvent"),f(" to avoid trigger search too early.")],-1),m8={class:"grid grid-cols-2 gap-2"},f8=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#282A36"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  inputEle."),t("span",{style:{color:"#50FA7B"}},"on"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"input, compositinoend"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," ("),t("span",{style:{color:"#FFB86C"}},"event"),t("span",{style:{color:"#F8F8F2"}},") {")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#FF79C6"}},"if"),t("span",{style:{color:"#F8F8F2"}}," (event.type "),t("span",{style:{color:"#FF79C6"}},"=="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"compositionend"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},") {")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      compositionActive "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9"}},"false"),t("span",{style:{color:"#F8F8F2"}},"; ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    }")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#FF79C6"}},"if"),t("span",{style:{color:"#F8F8F2"}}," (compositionActive) { "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}},"; }")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#6272A4"}},"// Do autocomplete AJAX call")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  })."),t("span",{style:{color:"#50FA7B"}},"on"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"compositionstart"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," () {")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    compositionActive "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9"}},"true"),t("span",{style:{color:"#F8F8F2"}},";")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  })."),t("span",{style:{color:"#50FA7B"}},"on"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"compositionupdate"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}},"() {")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    compositionActive "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9"}},"true"),t("span",{style:{color:"#F8F8F2"}},";")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  })")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#272822"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  inputEle."),t("span",{style:{color:"#A6E22E"}},"on"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E6DB74"}},"'input, compositinoend'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#66D9EF"}},"function"),t("span",{style:{color:"#F8F8F2"}}," ("),t("span",{style:{color:"#FD971F"}},"event"),t("span",{style:{color:"#F8F8F2"}},") {")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#F92672"}},"if"),t("span",{style:{color:"#F8F8F2"}}," (event.type "),t("span",{style:{color:"#F92672"}},"=="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E6DB74"}},"'compositionend'"),t("span",{style:{color:"#F8F8F2"}},") {")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      compositionActive "),t("span",{style:{color:"#F92672"}},"="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#AE81FF"}},"false"),t("span",{style:{color:"#F8F8F2"}},"; ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    }")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#F92672"}},"if"),t("span",{style:{color:"#F8F8F2"}}," (compositionActive) { "),t("span",{style:{color:"#F92672"}},"return"),t("span",{style:{color:"#F8F8F2"}},"; }")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#88846F"}},"// Do autocomplete AJAX call")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  })."),t("span",{style:{color:"#A6E22E"}},"on"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E6DB74"}},"'compositionstart'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#66D9EF"}},"function"),t("span",{style:{color:"#F8F8F2"}}," () {")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    compositionActive "),t("span",{style:{color:"#F92672"}},"="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#AE81FF"}},"true"),t("span",{style:{color:"#F8F8F2"}},";")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  })."),t("span",{style:{color:"#A6E22E"}},"on"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E6DB74"}},"'compositionupdate'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#66D9EF"}},"function"),t("span",{style:{color:"#F8F8F2"}},"() {")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    compositionActive "),t("span",{style:{color:"#F92672"}},"="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#AE81FF"}},"true"),t("span",{style:{color:"#F8F8F2"}},";")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  })")])])])],-1),g8=t("div",null,[t("iframe",{class:"col-span-2 bg-blue-600/30 p-4 w-full h-60",src:"https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/compositionstart_event/_sample_.live_example.html",width:"960",height:"480"})],-1),v8=t("div",{class:"col-span-2"},[t("ul",null,[t("li",null,[t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent",target:"_blank",rel:"noopener"},"MDN Web API")]),t("li",null,[t("a",{href:"https://www.drupal.org/project/drupal/issues/2823589",target:"_blank",rel:"noopener"},"Core #2823589: Improve IME handling on Autocomplete")])])],-1),y8={__name:"35",setup(e){const n={srcSequence:"./section-3.md"};return P(L),(s,a)=>{const o=Dt;return x(),H(_e,oe(ne(n)),{default:K(()=>[p8,h8,t("div",m8,[t("div",null,[Y(o,ut({},{ranges:["all","9-13","2-7"]}),{default:K(()=>[f8]),_:1},16)]),g8,v8])]),_:1},16)}}},w8=z(y8,[["__file","/@slidev/slides/35.md"]]),b8=t("div",{class:"hidden"},[t("h1",null,"===== Issue in CJK: Sorting =====")],-1),x8=t("div",{class:"absolute top-10"},[t("span",{class:"font-700"})],-1),_8=t("div",{class:"absolute bottom-10"},[t("h1",{class:"text-blue-800"},"Sorting"),t("p",{class:"text-blue-500"},"Color, Shape, Size?")],-1),F8={__name:"36",setup(e){const n={layout:"intro-image",image:"/images/sorting-soraya-irving.jpg",srcSequence:"./section-4.md"};return P(L),(s,a)=>(x(),H(pt,oe(ne(n)),{default:K(()=>[b8,x8,_8,Q(`
Photo by Soraya Irving on Unsplash
https://unsplash.com/photos/AGtksbL8z2c
`)]),_:1},16))}},k8=z(F8,[["__file","/@slidev/slides/36.md"]]),Dr="/images/2022-09-04-17-28-34.png",C8="/images/2022-09-06-17-51-19.png",E8=t("div",{class:"hidden"},[t("h1",null,"Sorting - 五十音 (Gojūon)")],-1),S8=t("div",{class:"grid grid-cols-[1fr,3fr]"},[t("div",{class:"flex flex-col justify-center"},[t("h1",null,"五十音 (Gojūon) "),t("h3",null,'Japanese "fifty sounds"')]),t("div",{class:"flex-1 flex flex-row space-x-4"},[t("div",null,[t("img",{src:Dr,class:"h-118 w-auto"}),t("h4",{class:"mt-2"},"Hiragana")]),t("div",null,[t("img",{src:C8,class:"h-118 w-auto"}),t("h4",{class:"mt-2"},"Katagana")])])],-1),I8={__name:"37",setup(e){const n={srcSequence:"./section-4.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[E8,S8]),_:1},16))}},j8=z(I8,[["__file","/@slidev/slides/37.md"]]),A8="/images/raku-japanese-character.png",T8=t("div",{class:"hidden"},[t("h1",null,"Sorting - 漢字 (Kanji)")],-1),M8=t("div",{class:"grid grid-cols-2"},[t("div",{class:"flex flex-col justify-center"},[t("h1",null,"漢字 (Kanji)"),t("h3",null,"Characters in Japanese")]),t("div",{class:"flex-1"},[t("img",{src:A8,class:"h-124 w-auto"})])],-1),$8={__name:"38",setup(e){const n={srcSequence:"./section-4.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[T8,M8]),_:1},16))}},D8=z($8,[["__file","/@slidev/slides/38.md"]]),P8=t("div",{class:"hidden"},[t("h1",null,"Sorting - 五十音 (Gojūon) Sorting")],-1),O8=t("div",{class:"absolute top-10"},[t("h2",null,"五十音 (Gojūon)"),t("h3",null,'Japanese "fifty sounds"')],-1),N8={class:"grid grid-cols-[2fr,1fr] gap-8 mt-8"},H8={class:"flex flex-col justify-center"},B8=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#282A36"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"$array "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," [")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"あまガミ"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#6272A4"}},"// Hiragana")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"ウィーン"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#6272A4"}},"// Katagana")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"荻野"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#6272A4"}},"// Kanji")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"マーティン"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"ういーん"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"中村"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"Ülf"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#6272A4"}},"// Latin & Number")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"レアード"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"角中"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"OKEON"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"井上"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"藤岡"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"佐藤"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"SHIMA"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"岩下"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"];")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#272822"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"$array "),t("span",{style:{color:"#F92672"}},"="),t("span",{style:{color:"#F8F8F2"}}," [")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'あまガミ'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#88846F"}},"// Hiragana")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'ウィーン'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#88846F"}},"// Katagana")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'荻野'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#88846F"}},"// Kanji")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'マーティン'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'ういーん'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'中村'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'Ülf'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#88846F"}},"// Latin & Number")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'レアード'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'角中'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'OKEON'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'井上'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'藤岡'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'佐藤'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'SHIMA'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'岩下'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"];")])])])],-1),L8=t("div",{class:"flex-1"},[t("img",{src:Dr,class:""})],-1),z8={__name:"39",setup(e){const n={srcSequence:"./section-4.md"};return P(L),(s,a)=>{const o=Dt;return x(),H(_e,oe(ne(n)),{default:K(()=>[P8,O8,t("div",N8,[t("div",H8,[Y(o,ut({},{ranges:["all","8,11,15","2,6","3,5,9","4,7,10,12-14,16"]}),{default:K(()=>[B8]),_:1},16)]),L8])]),_:1},16)}}},R8=z(z8,[["__file","/@slidev/slides/39.md"]]),K8=t("div",{class:"hidden"},[t("h1",null,"Sorting - 五十音 (Gojūon) Sorting")],-1),q8=t("div",{class:"absolute top-10"},[t("h2",null,"五十音 (Gojūon)"),t("h3",null,'Japanese "fifty sounds"')],-1),J8={class:"grid grid-cols-2 gap-8 mt-10"},W8={class:"flex flex-col justify-end"},V8=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#282A36"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"$array "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," [")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"あまガミ"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#6272A4"}},"// Hiragana")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"ウィーン"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#6272A4"}},"// Katagana")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"荻野"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#6272A4"}},"// Kanji")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"マーティン"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"ういーん"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"中村"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"Ülf"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#6272A4"}},"// Latin & Number")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"レアード"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"角中"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"OKEON"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"井上"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"藤岡"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"佐藤"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"SHIMA"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"岩下"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"];")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#272822"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"$array "),t("span",{style:{color:"#F92672"}},"="),t("span",{style:{color:"#F8F8F2"}}," [")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'あまガミ'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#88846F"}},"// Hiragana")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'ウィーン'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#88846F"}},"// Katagana")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'荻野'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#88846F"}},"// Kanji")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'マーティン'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'ういーん'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'中村'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'Ülf'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#88846F"}},"// Latin & Number")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'レアード'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'角中'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'OKEON'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'井上'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'藤岡'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'佐藤'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'SHIMA'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#E6DB74"}},"'岩下'"),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"];")])])])],-1),U8={class:"flex-1"},G8=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#282A36"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"// Result")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"Array")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"(")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"0"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," OKEON")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"1"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," SHIMA")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"2"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," Ülf")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"3"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," あまガミ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"4"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," ういーん")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"5"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," ウィーン")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"6"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," マーティン")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"7"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," レアード")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"8"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," 中村")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"9"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," 井上")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"10"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," 佐藤")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"11"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," 岩下")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"12"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," 荻野")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"13"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," 藤岡")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#BD93F9"}},"14"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," 角中")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},")")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#272822"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#88846F"}},"// Result")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"Array")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"(")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"0"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," OKEON")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"1"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," SHIMA")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"2"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," Ülf")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"3"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," あまガミ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"4"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," ういーん")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"5"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," ウィーン")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"6"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," マーティン")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"7"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," レアード")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"8"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," 中村")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"9"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," 井上")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"10"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," 佐藤")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"11"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," 岩下")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"12"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," 荻野")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"13"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," 藤岡")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    ["),t("span",{style:{color:"#AE81FF"}},"14"),t("span",{style:{color:"#F8F8F2"}},"] "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," 角中")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},")")])])])],-1),Y8={__name:"40",setup(e){const n={srcSequence:"./section-4.md"};return P(L),(s,a)=>{const o=Dt;return x(),H(_e,oe(ne(n)),{default:K(()=>[K8,q8,t("div",J8,[t("div",W8,[Y(o,ut({},{ranges:[""]}),{default:K(()=>[V8]),_:1},16)]),t("div",U8,[Y(o,ut({},{ranges:["all","4-6","7-8","9-11","12-18","all"]}),{default:K(()=>[G8]),_:1},16)])])]),_:1},16)}}},Z8=z(Y8,[["__file","/@slidev/slides/40.md"]]),X8=t("h1",null,"Sorting",-1),Q8=t("p",null,"Sort in Japanese",-1),eF={class:"grid grid-cols-[2fr,1fr] gap-8 mt-12"},tF={class:"flex flex-col justify-center"},nF=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#282A36"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"// UTF-8")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"["),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"中村"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"井上"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"佐藤"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"岩下"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"荻野"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"藤岡"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"角中"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"[U"),t("span",{style:{color:"#FF79C6"}},"+"),t("span",{style:{color:"#F8F8F2"}},"4E2D, U"),t("span",{style:{color:"#FF79C6"}},"+"),t("span",{style:{color:"#BD93F9"}},"4E95"),t("span",{style:{color:"#F8F8F2"}},", U"),t("span",{style:{color:"#FF79C6"}},"+"),t("span",{style:{color:"#F8F8F2"}},"4F50, U"),t("span",{style:{color:"#FF79C6"}},"+"),t("span",{style:{color:"#F8F8F2"}},"5CA9, U"),t("span",{style:{color:"#FF79C6"}},"+"),t("span",{style:{color:"#F8F8F2"}},"837B, U"),t("span",{style:{color:"#FF79C6"}},"+"),t("span",{style:{color:"#BD93F9"}},"85E4"),t("span",{style:{color:"#F8F8F2"}},", U"),t("span",{style:{color:"#FF79C6"}},"+"),t("span",{style:{color:"#F8F8F2"}},"89D2]")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#272822"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#88846F"}},"// UTF-8")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"["),t("span",{style:{color:"#E6DB74"}},'"中村"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"井上"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"佐藤"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"岩下"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"荻野"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"藤岡"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"角中"'),t("span",{style:{color:"#F8F8F2"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"[U"),t("span",{style:{color:"#F92672"}},"+"),t("span",{style:{color:"#F8F8F2"}},"4E2D, U"),t("span",{style:{color:"#F92672"}},"+"),t("span",{style:{color:"#AE81FF"}},"4E95"),t("span",{style:{color:"#F8F8F2"}},", U"),t("span",{style:{color:"#F92672"}},"+"),t("span",{style:{color:"#F8F8F2"}},"4F50, U"),t("span",{style:{color:"#F92672"}},"+"),t("span",{style:{color:"#F8F8F2"}},"5CA9, U"),t("span",{style:{color:"#F92672"}},"+"),t("span",{style:{color:"#F8F8F2"}},"837B, U"),t("span",{style:{color:"#F92672"}},"+"),t("span",{style:{color:"#AE81FF"}},"85E4"),t("span",{style:{color:"#F8F8F2"}},", U"),t("span",{style:{color:"#F92672"}},"+"),t("span",{style:{color:"#F8F8F2"}},"89D2]")])])])],-1),sF=t("div",{class:"flex-1"},null,-1),aF={__name:"41",setup(e){const n={srcSequence:"./section-4.md"};return P(L),(s,a)=>{const o=Dt;return x(),H(_e,oe(ne(n)),{default:K(()=>[X8,Q8,t("div",eF,[t("div",tF,[Y(o,ut({},{ranges:[""]}),{default:K(()=>[nF]),_:1},16)]),sF])]),_:1},16)}}},oF=z(aF,[["__file","/@slidev/slides/41.md"]]),rF=t("h1",null,"Sorting",-1),lF=t("p",null,"Sort in Japanese",-1),iF=t("p",null,"// JavaScript",-1),cF=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#282A36"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"arr."),t("span",{style:{color:"#50FA7B"}},"sort"),t("span",{style:{color:"#F8F8F2"}},"(("),t("span",{style:{color:"#FFB86C"}},"a"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#FFB86C"}},"b"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," a."),t("span",{style:{color:"#50FA7B"}},"localeCompare"),t("span",{style:{color:"#F8F8F2"}},"(b, "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"ja-JP"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", { ignorePunctuation"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9"}},"true"),t("span",{style:{color:"#F8F8F2"}}," }));")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"console."),t("span",{style:{color:"#50FA7B"}},"log"),t("span",{style:{color:"#F8F8F2"}},"(arr);")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FFB86C"}},"Array"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," ["),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"OKEON"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"SHIMA"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"あまガミ"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"ウィーン"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"ういーん"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"レアード"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"          "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"井上"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},",   "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"荻野"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},",   "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"角中"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},",     "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"岩下"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},",      "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"佐藤"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"中村"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},",      "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"藤岡"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"       "),t("span",{style:{color:"#6272A4"}},'// "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]')])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#272822"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"arr."),t("span",{style:{color:"#A6E22E"}},"sort"),t("span",{style:{color:"#F8F8F2"}},"(("),t("span",{style:{color:"#FD971F"}},"a"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#FD971F"}},"b"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," a."),t("span",{style:{color:"#A6E22E"}},"localeCompare"),t("span",{style:{color:"#F8F8F2"}},"(b, "),t("span",{style:{color:"#E6DB74"}},"'ja-JP'"),t("span",{style:{color:"#F8F8F2"}},", { ignorePunctuation: "),t("span",{style:{color:"#AE81FF"}},"true"),t("span",{style:{color:"#F8F8F2"}}," }));")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"console."),t("span",{style:{color:"#A6E22E"}},"log"),t("span",{style:{color:"#F8F8F2"}},"(arr);")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FD971F"}},"Array"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," ["),t("span",{style:{color:"#E6DB74"}},'"OKEON"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"SHIMA"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"あまガミ"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"ウィーン"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"ういーん"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"レアード"'),t("span",{style:{color:"#F8F8F2"}},", ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"          "),t("span",{style:{color:"#E6DB74"}},'"井上"'),t("span",{style:{color:"#F8F8F2"}},",   "),t("span",{style:{color:"#E6DB74"}},'"荻野"'),t("span",{style:{color:"#F8F8F2"}},",   "),t("span",{style:{color:"#E6DB74"}},'"角中"'),t("span",{style:{color:"#F8F8F2"}},",     "),t("span",{style:{color:"#E6DB74"}},'"岩下"'),t("span",{style:{color:"#F8F8F2"}},",      "),t("span",{style:{color:"#E6DB74"}},'"佐藤"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"中村"'),t("span",{style:{color:"#F8F8F2"}},",      "),t("span",{style:{color:"#E6DB74"}},'"藤岡"'),t("span",{style:{color:"#F8F8F2"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"       "),t("span",{style:{color:"#88846F"}},'// "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]')])])])],-1),dF=t("p",null,"// PHP",-1),uF=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#282A36"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"sortWithLocale"),t("span",{style:{color:"#F8F8F2"}},"($arr) {")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#8BE9FD"}},"Collator"),t("span",{style:{color:"#FF79C6"}},"::"),t("span",{style:{color:"#50FA7B"}},"create"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"ja_JP.utf8"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},")"),t("span",{style:{color:"#FF79C6"}},"->"),t("span",{style:{color:"#50FA7B"}},"sort"),t("span",{style:{color:"#F8F8F2"}},"($arr, "),t("span",{style:{color:"#BD93F9"}},"SORT_LOCALE_STRING"),t("span",{style:{color:"#F8F8F2"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," $arr;")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8BE9FD"}},"Array"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," ["),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"OKEON"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"SHIMA"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"あまガミ"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"ういーん"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"ウィーン"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"レアード"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"          "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"井上"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"荻野"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"角中"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"岩下"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"佐藤"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"中村"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"藤岡"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},"]")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#272822"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#66D9EF"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#A6E22E"}},"sortWithLocale"),t("span",{style:{color:"#F8F8F2"}},"($arr) {")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#66D9EF"}},"Collator"),t("span",{style:{color:"#F92672"}},"::"),t("span",{style:{color:"#A6E22E"}},"create"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E6DB74"}},"'ja_JP.utf8'"),t("span",{style:{color:"#F8F8F2"}},")"),t("span",{style:{color:"#F92672"}},"->"),t("span",{style:{color:"#A6E22E"}},"sort"),t("span",{style:{color:"#F8F8F2"}},"($arr, "),t("span",{style:{color:"#66D9EF"}},"SORT_LOCALE_STRING"),t("span",{style:{color:"#F8F8F2"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#F92672"}},"return"),t("span",{style:{color:"#F8F8F2"}}," $arr;")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#66D9EF"}},"Array"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#F92672"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," ["),t("span",{style:{color:"#E6DB74"}},'"OKEON"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"SHIMA"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"あまガミ"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"ういーん"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"ウィーン"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"レアード"'),t("span",{style:{color:"#F8F8F2"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"          "),t("span",{style:{color:"#E6DB74"}},'"井上"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"荻野"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"角中"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"岩下"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"佐藤"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"中村"'),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},'"藤岡"'),t("span",{style:{color:"#F8F8F2"}},"]")])])])],-1),pF={__name:"42",setup(e){const n={srcSequence:"./section-4.md"};return P(L),(s,a)=>{const o=Dt;return x(),H(_e,oe(ne(n)),{default:K(()=>[rF,lF,iF,Y(o,ut({},{ranges:[""]}),{default:K(()=>[cF]),_:1},16),dF,Y(o,ut({},{ranges:[""]}),{default:K(()=>[uF]),_:1},16)]),_:1},16)}}},hF=z(pF,[["__file","/@slidev/slides/42.md"]]),mF=t("div",{class:"hidden"}," # Sorting - 五十音 (Gojūon) Sorting ",-1),fF=t("div",{class:"absolute top-10"},[t("h2",null,"五十音 (Gojūon)"),t("h3",null,'Japanese "fifty sounds"')],-1),gF={class:"grid grid-cols-[2fr,1fr] gap-8"},vF={class:"flex flex-col justify-center"},yF=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#282A36"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"// localeCompare()")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"["),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"井上"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},",  "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"荻野"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},",    "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"角中"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},",    "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"岩下"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},",      "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"佐藤"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},",    "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"中村"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},",    "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"藤岡"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"["),t("span",{style:{color:"#50FA7B"}},"い"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"1"),t("span",{style:{color:"#FF79C6"}},"-"),t("span",{style:{color:"#BD93F9"}},"2"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#50FA7B"}},"おぎ"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"1"),t("span",{style:{color:"#FF79C6"}},"-"),t("span",{style:{color:"#BD93F9"}},"5"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#50FA7B"}},"かく"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"2"),t("span",{style:{color:"#FF79C6"}},"-"),t("span",{style:{color:"#BD93F9"}},"1"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#50FA7B"}},"いわ"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"1"),t("span",{style:{color:"#FF79C6"}},"-"),t("span",{style:{color:"#BD93F9"}},"2"),t("span",{style:{color:"#F8F8F2"}},"),   "),t("span",{style:{color:"#50FA7B"}},"さ"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"3"),t("span",{style:{color:"#FF79C6"}},"-"),t("span",{style:{color:"#BD93F9"}},"1"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#50FA7B"}},"なか"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"5"),t("span",{style:{color:"#FF79C6"}},"-"),t("span",{style:{color:"#BD93F9"}},"1"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#50FA7B"}},"ふじ"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"6"),t("span",{style:{color:"#FF79C6"}},"-"),t("span",{style:{color:"#BD93F9"}},"3"),t("span",{style:{color:"#F8F8F2"}},")]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"["),t("span",{style:{color:"#50FA7B"}},"い"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"1"),t("span",{style:{color:"#FF79C6"}},"-"),t("span",{style:{color:"#BD93F9"}},"2"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#50FA7B"}},"おぎ"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"1"),t("span",{style:{color:"#FF79C6"}},"-"),t("span",{style:{color:"#BD93F9"}},"5"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#50FA7B"}},"かく"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"2"),t("span",{style:{color:"#FF79C6"}},"-"),t("span",{style:{color:"#BD93F9"}},"1"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#50FA7B"}},"がん"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"2"),t("span",{style:{color:"#FF79C6"}},"-"),t("span",{style:{color:"#BD93F9"}},"1.1"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#50FA7B"}},"さ"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"3"),t("span",{style:{color:"#FF79C6"}},"-"),t("span",{style:{color:"#BD93F9"}},"1"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#50FA7B"}},"なか"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"5"),t("span",{style:{color:"#FF79C6"}},"-"),t("span",{style:{color:"#BD93F9"}},"1"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#50FA7B"}},"ふじ"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"6"),t("span",{style:{color:"#FF79C6"}},"-"),t("span",{style:{color:"#BD93F9"}},"3"),t("span",{style:{color:"#F8F8F2"}},")]")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#272822"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#88846F"}},"// localeCompare()")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"["),t("span",{style:{color:"#E6DB74"}},'"井上"'),t("span",{style:{color:"#F8F8F2"}},",  "),t("span",{style:{color:"#E6DB74"}},'"荻野"'),t("span",{style:{color:"#F8F8F2"}},",    "),t("span",{style:{color:"#E6DB74"}},'"角中"'),t("span",{style:{color:"#F8F8F2"}},",    "),t("span",{style:{color:"#E6DB74"}},'"岩下"'),t("span",{style:{color:"#F8F8F2"}},",      "),t("span",{style:{color:"#E6DB74"}},'"佐藤"'),t("span",{style:{color:"#F8F8F2"}},",    "),t("span",{style:{color:"#E6DB74"}},'"中村"'),t("span",{style:{color:"#F8F8F2"}},",    "),t("span",{style:{color:"#E6DB74"}},'"藤岡"'),t("span",{style:{color:"#F8F8F2"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"["),t("span",{style:{color:"#A6E22E"}},"い"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#AE81FF"}},"1"),t("span",{style:{color:"#F92672"}},"-"),t("span",{style:{color:"#AE81FF"}},"2"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#A6E22E"}},"おぎ"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#AE81FF"}},"1"),t("span",{style:{color:"#F92672"}},"-"),t("span",{style:{color:"#AE81FF"}},"5"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#A6E22E"}},"かく"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#AE81FF"}},"2"),t("span",{style:{color:"#F92672"}},"-"),t("span",{style:{color:"#AE81FF"}},"1"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#A6E22E"}},"いわ"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#AE81FF"}},"1"),t("span",{style:{color:"#F92672"}},"-"),t("span",{style:{color:"#AE81FF"}},"2"),t("span",{style:{color:"#F8F8F2"}},"),   "),t("span",{style:{color:"#A6E22E"}},"さ"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#AE81FF"}},"3"),t("span",{style:{color:"#F92672"}},"-"),t("span",{style:{color:"#AE81FF"}},"1"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#A6E22E"}},"なか"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#AE81FF"}},"5"),t("span",{style:{color:"#F92672"}},"-"),t("span",{style:{color:"#AE81FF"}},"1"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#A6E22E"}},"ふじ"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#AE81FF"}},"6"),t("span",{style:{color:"#F92672"}},"-"),t("span",{style:{color:"#AE81FF"}},"3"),t("span",{style:{color:"#F8F8F2"}},")]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"["),t("span",{style:{color:"#A6E22E"}},"い"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#AE81FF"}},"1"),t("span",{style:{color:"#F92672"}},"-"),t("span",{style:{color:"#AE81FF"}},"2"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#A6E22E"}},"おぎ"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#AE81FF"}},"1"),t("span",{style:{color:"#F92672"}},"-"),t("span",{style:{color:"#AE81FF"}},"5"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#A6E22E"}},"かく"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#AE81FF"}},"2"),t("span",{style:{color:"#F92672"}},"-"),t("span",{style:{color:"#AE81FF"}},"1"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#A6E22E"}},"がん"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#AE81FF"}},"2"),t("span",{style:{color:"#F92672"}},"-"),t("span",{style:{color:"#AE81FF"}},"1.1"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#A6E22E"}},"さ"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#AE81FF"}},"3"),t("span",{style:{color:"#F92672"}},"-"),t("span",{style:{color:"#AE81FF"}},"1"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#A6E22E"}},"なか"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#AE81FF"}},"5"),t("span",{style:{color:"#F92672"}},"-"),t("span",{style:{color:"#AE81FF"}},"1"),t("span",{style:{color:"#F8F8F2"}},"), "),t("span",{style:{color:"#A6E22E"}},"ふじ"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#AE81FF"}},"6"),t("span",{style:{color:"#F92672"}},"-"),t("span",{style:{color:"#AE81FF"}},"3"),t("span",{style:{color:"#F8F8F2"}},")]")])])])],-1),wF=t("div",{class:"mt-8 grid grid-cols-3 gap-2 content-center"},[t("div",{class:"text-xl text-sky-500 font-bold row-span-2 text-right leading-compact"}," 河野 "),t("div",{class:"grid grid-rows-2 gap-2"},[t("div",null," かわの ✅ "),t("div",null," こうの ✅ ")])],-1),bF=t("div",{class:"flex-1"},[t("img",{src:Dr,class:""})],-1),xF={__name:"43",setup(e){const n={srcSequence:"./section-4.md"};return P(L),(s,a)=>{const o=Dt;return x(),H(_e,oe(ne(n)),{default:K(()=>[mF,fF,t("div",gF,[t("div",vF,[Y(o,ut({},{ranges:["all","2,3","2,4"]}),{default:K(()=>[yF]),_:1},16),wF]),bF])]),_:1},16)}}},_F=z(xF,[["__file","/@slidev/slides/43.md"]]),FF=t("h1",null,"600+",-1),kF=t("p",null,"Same Japanese character different pronounciation",-1),CF=t("p",null,"609 from 2136 common used Japanese kanji characters.",-1),EF=t("div",{class:"text-xs mt-20 text-gray-500"},[t("ol",null,[t("li",null,[f("文科省常用漢字表 20101130： "),t("a",{href:"https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/pdf/joyokanjihyo_20101130.pdf",target:"_blank",rel:"noopener"},"PDF")]),t("li",null,[f("常用漢字表 - 音訓表: "),t("a",{href:"http://jgrammar.life.coocan.jp/ja/data/onkun.htm",target:"_blank",rel:"noopener"},"Website")]),t("li",null,[f("Explaination about Kanji (EN): "),t("a",{href:"https://www.tofugu.com/japanese/onyomi-kunyomi/",target:"_blank",rel:"noopener"},"Website")])])],-1),SF={__name:"44",setup(e){const n={layout:"fact",srcSequence:"./section-4.md"};return P(L),(s,a)=>(x(),H(aa,oe(ne(n)),{default:K(()=>[FF,kF,CF,EF]),_:1},16))}},IF=z(SF,[["__file","/@slidev/slides/44.md"]]),jF=t("div",{class:"hidden"},[t("h1",null,"1263 -> 580")],-1),AF=t("h1",null,[t("span",{class:"line-through text-gray-300 dark:text-gray-800"},"1263"),f(" 580")],-1),TF=t("p",null,"Same Chinese character different pronounciation",-1),MF=t("p",null,"580 from 5266 common used Chinese characters (traditional).",-1),$F=t("div",{class:"text-xs mt-20 text-gray-500"},[t("p",null,[f("There were 1263 characters have more than one pronounciation."),t("br"),f(" In 2012, 683 was reviewed and combined into single pronounciation.")]),t("ol",null,[t("li",null,[f("教育部國語一字多音審訂表 2012 "),t("a",{href:"https://language.moe.gov.tw/files/people_files/%E5%88%9D%E7%A8%BF.pdf",target:"_blank",rel:"noopener"},"PDF")])])],-1),DF={__name:"45",setup(e){const n={layout:"fact",srcSequence:"./section-4.md"};return P(L),(s,a)=>(x(),H(aa,oe(ne(n)),{default:K(()=>[jF,AF,TF,MF,$F]),_:1},16))}},PF=z(DF,[["__file","/@slidev/slides/45.md"]]),OF="/images/raku-japanese-pronounce.png",NF={class:"grid grid-cols-2 w-full h-full"},HF=Oe({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const n=e;P(L);const s=A(()=>zd(n.image));return(a,o)=>(x(),U("div",NF,[t("div",{class:Be(["slidev-layout default image-right",n.class])},[Tt(a.$slots,"default")],2),t("div",{class:"my-14 mr-14",style:We(_(s))},null,4)]))}}),BF=z(HF,[["__file","/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/node_modules/@slidev/theme-apple-basic/layouts/image-right.vue"]]),LF=t("div",{class:"hidden"},[t("h1",null,"Sorting - Japanese pronunciation")],-1),zF=t("h1",null,"Kanji",-1),RF=t("p",null,"Multiple pronunciation",-1),KF=t("p",null,[t("img",{src:OF,alt:""})],-1),qF=t("ol",null,[t("li",null,"❶ Music"),t("li",null,[t("span",{class:"text-gray-500"},"❶ To play (music)")]),t("li",null,"❷ Happy"),t("li",null,"❸ To appreciate")],-1),JF={__name:"46",setup(e){const n={layout:"image-right",image:"/images/raku-japanese-character.png",srcSequence:"./section-4.md"};return P(L),(s,a)=>(x(),H(BF,oe(ne(n)),{default:K(()=>[LF,zF,RF,KF,qF]),_:1},16))}},WF=z(JF,[["__file","/@slidev/slides/46.md"]]),VF="/images/2022-09-02-15-36-40.png",UF="/images/2022-09-02-15-37-09.png",GF="/images/2022-09-02-15-37-43.png",YF="/images/le-chinese-character.png",ZF=t("div",{class:"hidden"},[t("h1",null,"Sorting - Chinese pronunciation")],-1),XF=t("h1",null,"Chinese",-1),QF=t("p",null,"Multiple pronunciation",-1),ek=t("div",{class:"grid grid-cols-2"},[t("div",{class:"grid-1"},[t("div",{class:"flex flex-row items-center"},[t("img",{src:VF,alt:"",class:"h-full w-auto"}),t("span",{class:"pl-4"},"Music")]),t("div",{class:"flex flex-row items-center"},[t("img",{src:UF,alt:"",class:"h-full w-auto"}),t("span",{class:"pl-4"},"Happy, Happiness, love to")]),t("div",{class:"flex flex-row items-center"},[t("img",{src:GF,alt:"",class:"h-full w-auto"}),t("span",{class:"pl-4"},"To appreciate")])]),t("div",{class:"grid-2 flex justify-center"},[t("img",{src:YF,class:"h-90"})])],-1),tk={__name:"47",setup(e){const n={srcSequence:"./section-4.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[ZF,XF,QF,ek]),_:1},16))}},nk=z(tk,[["__file","/@slidev/slides/47.md"]]),Pr="/images/牛肉麵.png",Or="/images/臭豆腐.png",Nr="/images/珍珠奶茶.png",Hr="/images/魯肉飯.png",Br="/images/小籠包.png",Lr="/images/高山茶.png",zr="/images/鳳梨酥.png",sk=t("h1",null,"Sorting",-1),ak=t("p",null,"Sort in Traditional Chinese",-1),ok=t("div",{class:"grid grid-cols-7 gap-4 mb-12 mt-16"},[t("div",null,[t("img",{src:Pr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"牛肉麵")]),t("div",null,[t("img",{src:Or,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"臭豆腐")]),t("div",null,[t("img",{src:Nr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"珍珠奶茶")]),t("div",null,[t("img",{src:Hr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"魯肉飯")]),t("div",null,[t("img",{src:Br,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"小籠包")]),t("div",null,[t("img",{src:Lr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"高山茶")]),t("div",null,[t("img",{src:zr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"鳳梨酥")])],-1),rk={__name:"48",setup(e){const n={srcSequence:"./section-4.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[sk,ak,ok]),_:1},16))}},lk=z(rk,[["__file","/@slidev/slides/48.md"]]),ik="/images/moedict_yan.png",ck=t("div",{class:"hidden"},[t("h1",null,"Sorting - Chinese characters")],-1),dk=t("h1",null,"Chinese characters",-1),uk=t("h3",null,"4 attributes",-1),pk=t("div",{class:"grid grid-cols-3 gap-4"},[t("div",{class:"col-span-2"},[t("img",{src:ik,class:"mt-6 shadow-lg"})]),t("div",{class:""},[t("div",{class:"text-2xl"},[t("ul",{class:"pt-4"},[t("li",{class:"font-bold text-sky-600"},[f("Radical Strokes "),t("div",{class:"text-gray-500 font-normal text-lg"},"部首 + 画数順")]),t("li",{class:"font-bold text-sky-600"},[f("Total Strokes　 "),t("div",{class:"text-gray-500 font-normal text-lg"},"総画数")]),t("li",{class:"font-bold text-sky-600"},[f("Bopomofo 　 "),t("div",{class:"text-gray-500 font-normal text-lg"},[f("注音符号"),t("br"),f("(Phonetic characters)")])]),t("li",{class:"font-bold text-sky-600"},[f("Pinyin "),t("div",{class:"text-gray-500 font-normal text-lg"},"拼音")])])])])],-1),hk={__name:"49",setup(e){const n={srcSequence:"./section-4.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[ck,dk,uk,pk]),_:1},16))}},mk=z(hk,[["__file","/@slidev/slides/49.md"]]),fk=t("h1",null,"Sorting",-1),gk=t("p",null,"Sort in Traditional Chinese",-1),vk=t("div",{class:"grid grid-cols-7 gap-4 mb-12 mt-16"},[t("div",null,[t("img",{src:zr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"鳳梨酥")]),t("div",null,[t("img",{src:Pr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"牛肉麵")]),t("div",null,[t("img",{src:Hr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"魯肉飯")]),t("div",null,[t("img",{src:Lr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"高山茶")]),t("div",null,[t("img",{src:Br,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"小籠包")]),t("div",null,[t("img",{src:Nr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"珍珠奶茶")]),t("div",null,[t("img",{src:Or,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"臭豆腐")])],-1),yk={class:""},wk=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#282A36"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"items."),t("span",{style:{color:"#50FA7B"}},"sort"),t("span",{style:{color:"#F8F8F2"}},"(("),t("span",{style:{color:"#FFB86C"}},"a"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#FFB86C"}},"b"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," a."),t("span",{style:{color:"#50FA7B"}},"localeCompare"),t("span",{style:{color:"#F8F8F2"}},"(b, "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"zh-Hant-TW-u-co-zhuyin"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", {ignorePunctuation"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9"}},"true"),t("span",{style:{color:"#F8F8F2"}}," }));")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FFB86C"}},"Array"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," ["),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"鳳梨酥"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"牛肉麵"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"魯肉飯"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"高山茶"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"小籠包"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"珍珠奶茶"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"臭豆腐"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},"]")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#272822"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"items."),t("span",{style:{color:"#A6E22E"}},"sort"),t("span",{style:{color:"#F8F8F2"}},"(("),t("span",{style:{color:"#FD971F"}},"a"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#FD971F"}},"b"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," a."),t("span",{style:{color:"#A6E22E"}},"localeCompare"),t("span",{style:{color:"#F8F8F2"}},"(b, "),t("span",{style:{color:"#E6DB74"}},"'zh-Hant-TW-u-co-zhuyin'"),t("span",{style:{color:"#F8F8F2"}},", {ignorePunctuation: "),t("span",{style:{color:"#AE81FF"}},"true"),t("span",{style:{color:"#F8F8F2"}}," }));")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FD971F"}},"Array"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," ["),t("span",{style:{color:"#E6DB74"}},"'鳳梨酥'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},"'牛肉麵'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},"'魯肉飯'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},"'高山茶'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},"'小籠包'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},"'珍珠奶茶'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},"'臭豆腐'"),t("span",{style:{color:"#F8F8F2"}},"]")])])])],-1),bk={__name:"50",setup(e){const n={srcSequence:"./section-4.md"};return P(L),(s,a)=>{const o=Dt;return x(),H(_e,oe(ne(n)),{default:K(()=>[fk,gk,vk,t("div",yk,[Y(o,ut({},{ranges:[""]}),{default:K(()=>[wk]),_:1},16)])]),_:1},16)}}},xk=z(bk,[["__file","/@slidev/slides/50.md"]]),_k=t("h1",null,"Sorting",-1),Fk=t("p",null,"Sort in Traditional Chinese",-1),kk=t("div",{class:"grid grid-cols-7 gap-4 mb-12 mt-16"},[t("div",null,[t("img",{src:Br,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"小籠包")]),t("div",null,[t("img",{src:Pr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"牛肉麵")]),t("div",null,[t("img",{src:Nr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"珍珠奶茶")]),t("div",null,[t("img",{src:Or,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"臭豆腐")]),t("div",null,[t("img",{src:Lr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"高山茶")]),t("div",null,[t("img",{src:zr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"鳳梨酥")]),t("div",null,[t("img",{src:Hr,class:"object-cover h-28 w-full"}),t("span",{class:"block mt-4 text-center text-amber-500"},"魯肉飯")])],-1),Ck={class:""},Ek=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#282A36"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"items."),t("span",{style:{color:"#50FA7B"}},"sort"),t("span",{style:{color:"#F8F8F2"}},"(("),t("span",{style:{color:"#FFB86C"}},"a"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#FFB86C"}},"b"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," a."),t("span",{style:{color:"#50FA7B"}},"localeCompare"),t("span",{style:{color:"#F8F8F2"}},"(b, "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"zh-Hant-TW-u-co-stroke"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", {ignorePunctuation"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9"}},"true"),t("span",{style:{color:"#F8F8F2"}}," }));")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FFB86C"}},"Array"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," ["),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"小籠包"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"牛肉麵"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"珍珠奶茶"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"臭豆腐"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"高山茶"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"鳳梨酥"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"魯肉飯"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},"]")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#272822"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"items."),t("span",{style:{color:"#A6E22E"}},"sort"),t("span",{style:{color:"#F8F8F2"}},"(("),t("span",{style:{color:"#FD971F"}},"a"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#FD971F"}},"b"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," a."),t("span",{style:{color:"#A6E22E"}},"localeCompare"),t("span",{style:{color:"#F8F8F2"}},"(b, "),t("span",{style:{color:"#E6DB74"}},"'zh-Hant-TW-u-co-stroke'"),t("span",{style:{color:"#F8F8F2"}},", {ignorePunctuation: "),t("span",{style:{color:"#AE81FF"}},"true"),t("span",{style:{color:"#F8F8F2"}}," }));")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FD971F"}},"Array"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," ["),t("span",{style:{color:"#E6DB74"}},"'小籠包'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},"'牛肉麵'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},"'珍珠奶茶'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},"'臭豆腐'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},"'高山茶'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},"'鳳梨酥'"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#E6DB74"}},"'魯肉飯'"),t("span",{style:{color:"#F8F8F2"}},"]")])])])],-1),Sk={__name:"51",setup(e){const n={srcSequence:"./section-4.md"};return P(L),(s,a)=>{const o=Dt;return x(),H(_e,oe(ne(n)),{default:K(()=>[_k,Fk,kk,t("div",Ck,[Y(o,ut({},{ranges:[""]}),{default:K(()=>[Ek]),_:1},16)])]),_:1},16)}}},Ik=z(Sk,[["__file","/@slidev/slides/51.md"]]),jk=t("h1",null,"Sorting",-1),Ak=t("p",null,"What happens to the Character that has multiple pronunciation?",-1),Tk=t("div",{class:"grid grid-cols-2 gap-8 mt-12"},[t("div",{class:"w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"},[t("h5",{class:"mb-4 text-2xl font-extrabold tracking-tight"},"This affects"),Q(" List "),t("ul",{role:"list",class:"space-y-5 my-7"},[t("li",{class:"flex space-x-3"},[Q(" Icon "),t("svg",{"aria-hidden":"true",class:"flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("title",null,"Check icon"),t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})]),t("span",{class:"text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"Japanese Kanji")]),t("li",{class:"flex space-x-3"},[Q(" Icon "),t("svg",{"aria-hidden":"true",class:"flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("title",null,"Check icon"),t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})]),t("span",{class:"text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"Chinese characters sort in ...")]),t("li",{class:"flex space-x-3"},[Q(" Icon "),t("svg",{class:"pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})]),t("span",{class:"text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"Bopomofo (zh-TW)")]),t("li",{class:"flex space-x-3"},[Q(" Icon "),t("svg",{class:"pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})]),t("span",{class:"text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"Pinyin (zh-CN)")])])]),t("div",{class:"w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"},[t("h5",{class:"mb-4 text-2xl font-extrabold tracking-tight"},"Solution"),Q(" List "),t("ul",{role:"list",class:"space-y-5 my-7"},[t("li",{class:"flex space-x-3"},[Q(" Icon "),t("svg",{"aria-hidden":"true",class:"flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("title",null,"Check icon"),t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})]),t("span",{class:"text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"Leave it as-is")]),t("li",{class:"flex space-x-3"},[Q(" Icon "),t("svg",{"aria-hidden":"true",class:"flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("title",null,"Check icon"),t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})]),t("span",{class:"text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"Customize it and make an explicit order in array")])])])],-1),Mk={__name:"52",setup(e){const n={srcSequence:"./section-4.md"};return P(L),(s,a)=>(x(),H(_e,oe(ne(n)),{default:K(()=>[jk,Ak,Tk]),_:1},16))}},$k=z(Mk,[["__file","/@slidev/slides/52.md"]]),Dk=t("div",{class:"hidden"},[t("h1",null,"Devil is in the details")],-1),Pk=t("div",{class:"absolute top-10"},[t("span",{class:"font-700"},[f(" Farnworth House, "),t("i",null,"Mies van der Rohe")])],-1),Ok={class:"absolute top-30 text-shadow-lg w-full"},Nk={class:"absolute top-0 w-full"},Hk=t("h1",null,[t("span",{class:"text-sky-300"},"悪魔"),f("は細部に宿る")],-1),Bk=t("p",null,[t("span",{class:"text-sky-300"},"Devil"),f(" is in the details ")],-1),Lk=[Hk,Bk],zk={class:"absolute top-0 w-full"},Rk=t("h1",null,[t("span",{class:"text-yellow-300"},"神"),f("は細部に宿る")],-1),Kk=t("p",null,[f(" Der liebe "),t("span",{class:"text-yellow-300"},"Gott"),f(" steckt im detail. / German ドイツ ")],-1),qk=[Rk,Kk],Jk={__name:"53",setup(e){const n={layout:"intro-image",image:"/images/farnsworth_house_xmas.jpg"};return P(L),(s,a)=>{const o=il("click-hide"),r=il("after");return x(),H(pt,oe(ne(n)),{default:K(()=>[Dk,Pk,t("div",Ok,[Ks((x(),U("div",Nk,Lk)),[[o]]),Ks((x(),U("div",zk,qk)),[[r]])])]),_:1},16)}}},Wk=z(Jk,[["__file","/@slidev/slides/53.md"]]),Vk=t("div",{class:"hidden"},[t("h1",null,"Thank you")],-1),Uk=t("div",{class:"text-5xl font-700 text-sky-600 self-end mb-8 font-serif"}," ご清聴ありがとうございました ",-1),Gk=t("div",{class:"text-4xl text-sky-700"}," Thank you for your attention ",-1),Yk=t("div",{class:"text-md text-sky-700 flex justify-center"},[t("span",{class:"flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full mr-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900"},[t("svg",{class:"w-5 h-5 text-blue-600 dark:text-blue-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"})])]),t("h2",{class:"font-normal leading-tight text-gray-700 dark:text-gray-100"},[f(" Online slide: "),t("a",{class:"text-sky-600 underline-dashed",href:"https://iwakuni.amou.ro"},"https://iwakuni.amou.ro")])],-1),Zk={__name:"54",setup(e){const n={layout:"intro-image",image:"/images/DC-Iwakuni-Blue-accent-footer.png",class:"text-center"};return P(L),(s,a)=>(x(),H(pt,oe(ne(n)),{default:K(()=>[Vk,Uk,Gk,Yk]),_:1},16))}},Xk=z(Zk,[["__file","/@slidev/slides/54.md"]]),Qk=[{path:"1",name:"page-1",component:xw,meta:{layout:"intro-image",image:"/images/DC-Iwakuni-Blue-full.png",theme:"apple-basic",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},fonts:{sans:"Montserrat",serif:"Bitter"},title:"Rebirth of OIST 10 years old website with Drupal 9",slide:{raw:`---
layout: intro-image
image: /images/DC-Iwakuni-Blue-full.png
# try also 'default' to start simple
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
# css: unocss
fonts:
  sans: Montserrat
  serif: Bitter
---

<div class="hidden">
# Rebirth of OIST 10 years old website with Drupal 9
</div>

<div class="absolute bottom-4 text-sky-700">
  <span class="font-700">
    Chris Wu @amourow Jan, 2023
  </span>
</div>

<div class="text-6xl font-700 text-white self-end mt-32">
  Rebirth in Drupal 9
</div>
<div class="text-2xl text-white mt-6">
  Relaunch OIST 10 yrs-old website
</div>
<div class="text-lg text-white">
  沖縄科学技術大学院大学で<br />10年間運用されていたサイトが<br />Drupal 9でリニューアル
</div>


<div class="abs-br mr-8 flex gap-2">
  <a href="https://github.com/amouro/" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-90 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
[日本語]

こんにちは、クリスと申します。今日はDrupalDEN岩国でスペシャルトークをすることになり、光栄です。
今日は沖縄科学技術大学院大学のリニューアルされたウェブサイトを発表します。
英語で技術的な内容を発表した方がやりやすいのですが、それでも後で日本語でお話しして、ご意見をいただくのが楽しみです。

[英語]

Good afternoon, my name is Chris,
and I am honored to be here to give a special talk today at the DrupalDEN Iwakuni. 

Our university, OIST, built a Drupal 7 site in 2011, which was the first year of its release. 

Drupal 7 has had the longest lifespan among all Drupal versions and brought significant changes to the platform. 
One of these changes was the integration of CCK as the Content Type entity fields, brought test-driven development to the core. 
Additionally, ImageCache was transformed into Image Style.

Last year, we underwent a two-year journey to rebuild and modernize the website using Drupal 9.

In the first part of my talk, I will discuss the development and project management process we went through during the website rebuild. 

In the second part of my talk, 
I will delve deeper into the challenges we faced when localizing the website for our bilingual English and Japanese audience. 
I will share the issues we encountered beyond just translation, 
and how we addressed them to provide the best user experience for our users.
-->
`,title:"Rebirth of OIST 10 years old website with Drupal 9",level:1,content:`<div class="hidden">
# Rebirth of OIST 10 years old website with Drupal 9
</div>

<div class="absolute bottom-4 text-sky-700">
  <span class="font-700">
    Chris Wu @amourow Jan, 2023
  </span>
</div>

<div class="text-6xl font-700 text-white self-end mt-32">
  Rebirth in Drupal 9
</div>
<div class="text-2xl text-white mt-6">
  Relaunch OIST 10 yrs-old website
</div>
<div class="text-lg text-white">
  沖縄科学技術大学院大学で<br />10年間運用されていたサイトが<br />Drupal 9でリニューアル
</div>


<div class="abs-br mr-8 flex gap-2">
  <a href="https://github.com/amouro/" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-90 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>`,frontmatter:{layout:"intro-image",image:"/images/DC-Iwakuni-Blue-full.png",theme:"apple-basic",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},fonts:{sans:"Montserrat",serif:"Bitter"},title:"Rebirth of OIST 10 years old website with Drupal 9"},note:`[日本語]

こんにちは、クリスと申します。今日はDrupalDEN岩国でスペシャルトークをすることになり、光栄です。
今日は沖縄科学技術大学院大学のリニューアルされたウェブサイトを発表します。
英語で技術的な内容を発表した方がやりやすいのですが、それでも後で日本語でお話しして、ご意見をいただくのが楽しみです。

[英語]

Good afternoon, my name is Chris,
and I am honored to be here to give a special talk today at the DrupalDEN Iwakuni. 

Our university, OIST, built a Drupal 7 site in 2011, which was the first year of its release. 

Drupal 7 has had the longest lifespan among all Drupal versions and brought significant changes to the platform. 
One of these changes was the integration of CCK as the Content Type entity fields, brought test-driven development to the core. 
Additionally, ImageCache was transformed into Image Style.

Last year, we underwent a two-year journey to rebuild and modernize the website using Drupal 9.

In the first part of my talk, I will discuss the development and project management process we went through during the website rebuild. 

In the second part of my talk, 
I will delve deeper into the challenges we faced when localizing the website for our bilingual English and Japanese audience. 
I will share the issues we encountered beyond just translation, 
and how we addressed them to provide the best user experience for our users.`,index:0,start:0,end:86,notesHTML:`<p>[日本語]</p>
<p>こんにちは、クリスと申します。今日はDrupalDEN岩国でスペシャルトークをすることになり、光栄です。
今日は沖縄科学技術大学院大学のリニューアルされたウェブサイトを発表します。
英語で技術的な内容を発表した方がやりやすいのですが、それでも後で日本語でお話しして、ご意見をいただくのが楽しみです。</p>
<p>[英語]</p>
<p>Good afternoon, my name is Chris,
and I am honored to be here to give a special talk today at the DrupalDEN Iwakuni.</p>
<p>Our university, OIST, built a Drupal 7 site in 2011, which was the first year of its release.</p>
<p>Drupal 7 has had the longest lifespan among all Drupal versions and brought significant changes to the platform.
One of these changes was the integration of CCK as the Content Type entity fields, brought test-driven development to the core.
Additionally, ImageCache was transformed into Image Style.</p>
<p>Last year, we underwent a two-year journey to rebuild and modernize the website using Drupal 9.</p>
<p>In the first part of my talk, I will discuss the development and project management process we went through during the website rebuild.</p>
<p>In the second part of my talk,
I will delve deeper into the challenges we faced when localizing the website for our bilingual English and Japanese audience.
I will share the issues we encountered beyond just translation,
and how we addressed them to provide the best user experience for our users.</p>
`,filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:zw,meta:{slide:{raw:`
# Chris Wu

<div class="grid grid-cols-[1fr,2fr] grid-rows-2 gap-4 py-8">
  <div class="image rounded-full content-center flex flex-col">
    <img src="/images/chris_potrait.png" class="rounded-full overflow-hidden" />
  </div>
  <div class="intro flex flex-col items-start">
  <div>

  1. <span class="text-3xl">🇹🇼 🇯🇵</span>
  1. Senior Web Developer, OIST 
  1. <span class="text-sm text-gray-400">Okinawa Institute of Science and Technology</span>
  1. <span class="text-sm text-gray-400">沖縄科学技術大学院大学</span>
  </div>
  <div class="mt-4">

  1. Designer, Developer, former DUGTW leader
  1. Keywords: <span class="text-3xl mt-4">☕️ 🇩🇪 🐈‍⬛</span>
  1. <a href="https://twitter.com/amourow" target="_blank" alt="GitHub"
      class="text-xl icon-btn mt-8 !border-none !hover:text-white bg-sky-600 text-white hover:bg-sky-600/80">
      <carbon-logo-twitter /> @amourow</a>
  </div>
  </div>
  <div class="pl-4">

  </div>
</div>

<!--
First, a little bit about myself:

I am a Drupal developer with 14 years of experience in Drupal development. 

I have extensive experience in web design and development in Traditional Chinese, Japanese, and English. 

I am also a member of the Drupal community and a former group leader in Taiwan. 

Outside of Drupal, I am also interested in coffee, Germany, and cats and welcome any conversations about those topics as well.

<b>Next slides >>></b>
-->
`,title:"Chris Wu",level:1,content:`# Chris Wu

<div class="grid grid-cols-[1fr,2fr] grid-rows-2 gap-4 py-8">
  <div class="image rounded-full content-center flex flex-col">
    <img src="/images/chris_potrait.png" class="rounded-full overflow-hidden" />
  </div>
  <div class="intro flex flex-col items-start">
  <div>

  1. <span class="text-3xl">🇹🇼 🇯🇵</span>
  1. Senior Web Developer, OIST 
  1. <span class="text-sm text-gray-400">Okinawa Institute of Science and Technology</span>
  1. <span class="text-sm text-gray-400">沖縄科学技術大学院大学</span>
  </div>
  <div class="mt-4">

  1. Designer, Developer, former DUGTW leader
  1. Keywords: <span class="text-3xl mt-4">☕️ 🇩🇪 🐈‍⬛</span>
  1. <a href="https://twitter.com/amourow" target="_blank" alt="GitHub"
      class="text-xl icon-btn mt-8 !border-none !hover:text-white bg-sky-600 text-white hover:bg-sky-600/80">
      <carbon-logo-twitter /> @amourow</a>
  </div>
  </div>
  <div class="pl-4">

  </div>
</div>`,frontmatter:{},note:`First, a little bit about myself:

I am a Drupal developer with 14 years of experience in Drupal development. 

I have extensive experience in web design and development in Traditional Chinese, Japanese, and English. 

I am also a member of the Drupal community and a former group leader in Taiwan. 

Outside of Drupal, I am also interested in coffee, Germany, and cats and welcome any conversations about those topics as well.

<b>Next slides >>></b>`,index:1,start:87,end:130,notesHTML:`<p>First, a little bit about myself:</p>
<p>I am a Drupal developer with 14 years of experience in Drupal development.</p>
<p>I have extensive experience in web design and development in Traditional Chinese, Japanese, and English.</p>
<p>I am also a member of the Drupal community and a former group leader in Taiwan.</p>
<p>Outside of Drupal, I am also interested in coffee, Germany, and cats and welcome any conversations about those topics as well.</p>
<p><b>Next slides &gt;&gt;&gt;</b></p>
`,filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Jw,meta:{layout:"intro-image",image:"/images/DC-Iwakuni-Blue-full.png",slide:{raw:`---
layout: intro-image
image: /images/DC-Iwakuni-Blue-full.png
---

<div class="hidden">
# Disclaimer
</div>

<div class="text-2xl font-700 self-center">
  <div class="text-5xl font-700 text-white text-center my-10">
  Disclaimer
  </div>
  <div class="w-2/5 m-auto text-center px-8">
    <div class="-ml-10">
      <svg aria-hidden="true" class="w-10 h-10 text-sky-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    </div>
    <blockquote class="text-md font-semibold text-white !border-0 !bg-transparent">  
        <p>Views expressed here are solely my own and not those of the university. No part of this presentation should be considered an endorsement.</p>
    </blockquote>
    <div class="flex flex-row justify-end -mr-10">
      <svg aria-hidden="true" class="w-10 h-10 text-sky-300 transform rotate-180" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    </div>
  </div>
</div>


<!--
Before jumping the the topic.

Please note that any mention of vendors or products in this talk is not an endorsement.

<b>Next slides >>></b>
-->
`,title:"Disclaimer",level:1,content:`<div class="hidden">
# Disclaimer
</div>

<div class="text-2xl font-700 self-center">
  <div class="text-5xl font-700 text-white text-center my-10">
  Disclaimer
  </div>
  <div class="w-2/5 m-auto text-center px-8">
    <div class="-ml-10">
      <svg aria-hidden="true" class="w-10 h-10 text-sky-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    </div>
    <blockquote class="text-md font-semibold text-white !border-0 !bg-transparent">  
        <p>Views expressed here are solely my own and not those of the university. No part of this presentation should be considered an endorsement.</p>
    </blockquote>
    <div class="flex flex-row justify-end -mr-10">
      <svg aria-hidden="true" class="w-10 h-10 text-sky-300 transform rotate-180" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    </div>
  </div>
</div>`,frontmatter:{layout:"intro-image",image:"/images/DC-Iwakuni-Blue-full.png"},note:`Before jumping the the topic.

Please note that any mention of vendors or products in this talk is not an endorsement.

<b>Next slides >>></b>`,index:2,start:130,end:165,notesHTML:`<p>Before jumping the the topic.</p>
<p>Please note that any mention of vendors or products in this talk is not an endorsement.</p>
<p><b>Next slides &gt;&gt;&gt;</b></p>
`,filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Uw,meta:{layout:"intro-image",image:"/images/oist-www-D7.png",title:"The old site",srcSequence:"./section-1.md",slide:{raw:null,title:"The old site",level:1,content:`<div class="hidden">

# The old site
</div>`,frontmatter:{layout:"intro-image",image:"/images/oist-www-D7.png",title:"The old site",srcSequence:"./section-1.md"},note:`Our old Drupal 7 site served us well, 
bringing in over 30 million visits and delivering 37,000 pieces of content. 
In the last three years, we doubled our monthly visits. 

The website shared our accomplishments with the world, 
such as when new lab buildings were completed, 
when we received high impact rankings in Nature, 
and when our faculty members won the Nobel Prize.

The website continuously celebrate our successes.

<b>Next Slide >>>>></b>`,index:3,start:0,end:25,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-1.md",raw:`---
layout: intro-image
image: /images/oist-www-D7.png
---

<div class="hidden">

# The old site
</div>

<!--
Our old Drupal 7 site served us well, 
bringing in over 30 million visits and delivering 37,000 pieces of content. 
In the last three years, we doubled our monthly visits. 

The website shared our accomplishments with the world, 
such as when new lab buildings were completed, 
when we received high impact rankings in Nature, 
and when our faculty members won the Nobel Prize.

The website continuously celebrate our successes.

<b>Next Slide >>>>></b>
-->
`,title:"The old site",level:1,content:`<div class="hidden">

# The old site
</div>`,frontmatter:{layout:"intro-image",image:"/images/oist-www-D7.png",title:"The old site"},note:`Our old Drupal 7 site served us well, 
bringing in over 30 million visits and delivering 37,000 pieces of content. 
In the last three years, we doubled our monthly visits. 

The website shared our accomplishments with the world, 
such as when new lab buildings were completed, 
when we received high impact rankings in Nature, 
and when our faculty members won the Nobel Prize.

The website continuously celebrate our successes.

<b>Next Slide >>>>></b>`,index:0,start:0,end:25},inline:{raw:`---
src: ./section-1.md
---
<!-- this page will be loaded from './section-1.md' -->
# 1. Goals & Plan`,title:"1. Goals & Plan",level:1,content:`<!-- this page will be loaded from './section-1.md' -->
# 1. Goals & Plan`,frontmatter:{},index:3,start:165,end:170},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-1.md",notesHTML:`<p>Our old Drupal 7 site served us well,
bringing in over 30 million visits and delivering 37,000 pieces of content.
In the last three years, we doubled our monthly visits.</p>
<p>The website shared our accomplishments with the world,
such as when new lab buildings were completed,
when we received high impact rankings in Nature,
and when our faculty members won the Nobel Prize.</p>
<p>The website continuously celebrate our successes.</p>
<p><b>Next Slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Qw,meta:{layout:"intro-image",image:"/images/find-goal-charlesdeluvio.jpg",srcSequence:"./section-1.md",slide:{raw:`---
layout: intro-image
image: /images/find-goal-charlesdeluvio.jpg
---

<div class="hidden">

# Goals & Plan
</div>

<div class="absolute bottom-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10 right-10 text-white">
  <h1 class="text-shadow-lg">Goals & Plan</h1>
  <p></p>
</div>

<!--
background image: Photo by Pisit Heng on Unsplash
https://unsplash.com/photos/FQvadXmA524
-->

<!--
However, we continue to strive for innovation and shape the future of research in Japan. 

In order to achieve these goals, 
we have set new objectives and needed a new website that 
could deliver our outcomes in a more effective and flexible way.

<b>Next slide >>>>></b>
-->

`,title:"Goals & Plan",level:1,content:`<div class="hidden">

# Goals & Plan
</div>

<div class="absolute bottom-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10 right-10 text-white">
  <h1 class="text-shadow-lg">Goals & Plan</h1>
  <p></p>
</div>

<!--
background image: Photo by Pisit Heng on Unsplash
https://unsplash.com/photos/FQvadXmA524
-->`,frontmatter:{layout:"intro-image",image:"/images/find-goal-charlesdeluvio.jpg",srcSequence:"./section-1.md"},note:`However, we continue to strive for innovation and shape the future of research in Japan. 

In order to achieve these goals, 
we have set new objectives and needed a new website that 
could deliver our outcomes in a more effective and flexible way.

<b>Next slide >>>>></b>`,index:4,start:25,end:62,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-1.md",raw:`---
layout: intro-image
image: /images/find-goal-charlesdeluvio.jpg
---

<div class="hidden">

# Goals & Plan
</div>

<div class="absolute bottom-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10 right-10 text-white">
  <h1 class="text-shadow-lg">Goals & Plan</h1>
  <p></p>
</div>

<!--
background image: Photo by Pisit Heng on Unsplash
https://unsplash.com/photos/FQvadXmA524
-->

<!--
However, we continue to strive for innovation and shape the future of research in Japan. 

In order to achieve these goals, 
we have set new objectives and needed a new website that 
could deliver our outcomes in a more effective and flexible way.

<b>Next slide >>>>></b>
-->

`,title:"Goals & Plan",level:1,content:`<div class="hidden">

# Goals & Plan
</div>

<div class="absolute bottom-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10 right-10 text-white">
  <h1 class="text-shadow-lg">Goals & Plan</h1>
  <p></p>
</div>

<!--
background image: Photo by Pisit Heng on Unsplash
https://unsplash.com/photos/FQvadXmA524
-->`,frontmatter:{layout:"intro-image",image:"/images/find-goal-charlesdeluvio.jpg"},note:`However, we continue to strive for innovation and shape the future of research in Japan. 

In order to achieve these goals, 
we have set new objectives and needed a new website that 
could deliver our outcomes in a more effective and flexible way.

<b>Next slide >>>>></b>`,index:1,start:25,end:62},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-1.md",notesHTML:`<p>However, we continue to strive for innovation and shape the future of research in Japan.</p>
<p>In order to achieve these goals,
we have set new objectives and needed a new website that
could deliver our outcomes in a more effective and flexible way.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:sb,meta:{srcSequence:"./section-1.md",slide:{raw:`
# Goals


<ol class="relative ml-4 mt-16 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
    <li class="mb-10 ml-6">       
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Align the strategic plan of OIST</h2>
        <p class="text-md">
            <ul>
                <li>Research <span class="text-sky-600">研究</span></li>
                <li>Education <span class="text-sky-600">教育</span></li>
                <li>Innovation <span class="text-sky-600">イノベーション</span></li>
                <li>Outreach <span class="text-sky-600">普及活動</span></li>
            </ul>
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">A better content management experience</h2>
        <p class="text-md">
            <ul>
                <li>Media Library</li>
                <li>Field Translation</li>
                <li>Design System</li>
            </ul>
        </p>
    </li>
</ol>

<!--
In 2020, OIST set a strategic plan and began to emphasize the three pillars of activities: 
Research, Education, and Innovation. 
It is also our responsibility to raise awareness of STEM education, contribute to Okinawa, 
and conduct outreach activities in the Japanese society.

Throughout the entire project, 
we kept these three main pillars in mind,
and made sure that the website aligned with the organization's strategy.

From a technical perspective, our goal was to improve the content management experience for editors. 
Drupal 9 allowed us to use the Media Library to manage assets, 
and change the node translation method to field translation. 

In addition to Drupal, we also implemented a design system to maintain consistency in the user experience, 
and enable editors to easily reuse web components when creating content.

<b>Next slide >>>>></b>
-->`,title:"Goals",level:1,content:`# Goals


<ol class="relative ml-4 mt-16 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
    <li class="mb-10 ml-6">       
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Align the strategic plan of OIST</h2>
        <p class="text-md">
            <ul>
                <li>Research <span class="text-sky-600">研究</span></li>
                <li>Education <span class="text-sky-600">教育</span></li>
                <li>Innovation <span class="text-sky-600">イノベーション</span></li>
                <li>Outreach <span class="text-sky-600">普及活動</span></li>
            </ul>
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">A better content management experience</h2>
        <p class="text-md">
            <ul>
                <li>Media Library</li>
                <li>Field Translation</li>
                <li>Design System</li>
            </ul>
        </p>
    </li>
</ol>`,frontmatter:{srcSequence:"./section-1.md"},note:`In 2020, OIST set a strategic plan and began to emphasize the three pillars of activities: 
Research, Education, and Innovation. 
It is also our responsibility to raise awareness of STEM education, contribute to Okinawa, 
and conduct outreach activities in the Japanese society.

Throughout the entire project, 
we kept these three main pillars in mind,
and made sure that the website aligned with the organization's strategy.

From a technical perspective, our goal was to improve the content management experience for editors. 
Drupal 9 allowed us to use the Media Library to manage assets, 
and change the node translation method to field translation. 

In addition to Drupal, we also implemented a design system to maintain consistency in the user experience, 
and enable editors to easily reuse web components when creating content.

<b>Next slide >>>>></b>`,index:5,start:63,end:116,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-1.md",raw:`
# Goals


<ol class="relative ml-4 mt-16 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
    <li class="mb-10 ml-6">       
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Align the strategic plan of OIST</h2>
        <p class="text-md">
            <ul>
                <li>Research <span class="text-sky-600">研究</span></li>
                <li>Education <span class="text-sky-600">教育</span></li>
                <li>Innovation <span class="text-sky-600">イノベーション</span></li>
                <li>Outreach <span class="text-sky-600">普及活動</span></li>
            </ul>
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">A better content management experience</h2>
        <p class="text-md">
            <ul>
                <li>Media Library</li>
                <li>Field Translation</li>
                <li>Design System</li>
            </ul>
        </p>
    </li>
</ol>

<!--
In 2020, OIST set a strategic plan and began to emphasize the three pillars of activities: 
Research, Education, and Innovation. 
It is also our responsibility to raise awareness of STEM education, contribute to Okinawa, 
and conduct outreach activities in the Japanese society.

Throughout the entire project, 
we kept these three main pillars in mind,
and made sure that the website aligned with the organization's strategy.

From a technical perspective, our goal was to improve the content management experience for editors. 
Drupal 9 allowed us to use the Media Library to manage assets, 
and change the node translation method to field translation. 

In addition to Drupal, we also implemented a design system to maintain consistency in the user experience, 
and enable editors to easily reuse web components when creating content.

<b>Next slide >>>>></b>
-->`,title:"Goals",level:1,content:`# Goals


<ol class="relative ml-4 mt-16 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
    <li class="mb-10 ml-6">       
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Align the strategic plan of OIST</h2>
        <p class="text-md">
            <ul>
                <li>Research <span class="text-sky-600">研究</span></li>
                <li>Education <span class="text-sky-600">教育</span></li>
                <li>Innovation <span class="text-sky-600">イノベーション</span></li>
                <li>Outreach <span class="text-sky-600">普及活動</span></li>
            </ul>
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">A better content management experience</h2>
        <p class="text-md">
            <ul>
                <li>Media Library</li>
                <li>Field Translation</li>
                <li>Design System</li>
            </ul>
        </p>
    </li>
</ol>`,frontmatter:{},note:`In 2020, OIST set a strategic plan and began to emphasize the three pillars of activities: 
Research, Education, and Innovation. 
It is also our responsibility to raise awareness of STEM education, contribute to Okinawa, 
and conduct outreach activities in the Japanese society.

Throughout the entire project, 
we kept these three main pillars in mind,
and made sure that the website aligned with the organization's strategy.

From a technical perspective, our goal was to improve the content management experience for editors. 
Drupal 9 allowed us to use the Media Library to manage assets, 
and change the node translation method to field translation. 

In addition to Drupal, we also implemented a design system to maintain consistency in the user experience, 
and enable editors to easily reuse web components when creating content.

<b>Next slide >>>>></b>`,index:2,start:63,end:116},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-1.md",notesHTML:`<p>In 2020, OIST set a strategic plan and began to emphasize the three pillars of activities:
Research, Education, and Innovation.
It is also our responsibility to raise awareness of STEM education, contribute to Okinawa,
and conduct outreach activities in the Japanese society.</p>
<p>Throughout the entire project,
we kept these three main pillars in mind,
and made sure that the website aligned with the organization's strategy.</p>
<p>From a technical perspective, our goal was to improve the content management experience for editors.
Drupal 9 allowed us to use the Media Library to manage assets,
and change the node translation method to field translation.</p>
<p>In addition to Drupal, we also implemented a design system to maintain consistency in the user experience,
and enable editors to easily reuse web components when creating content.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:lb,meta:{srcSequence:"./section-1.md",slide:{raw:`
# Timeline

<ol class="items-start sm:flex mt-20">
    <li class="relative mb-6 sm:mb-0 w-max-1/3">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <div class="text-lg font-semibold text-gray-900 dark:text-white">User Study</div>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From Dec 2020</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Comprehensive user study and IA research</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0 w-max-1/3">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <div class="text-lg font-semibold text-gray-900 dark:text-white">Procurement & Dev</div>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Starting from Aug 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Hire vendor to migrate and develop the site in Drupal 9.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0 w-max-1/3">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <div class="text-lg font-semibold text-gray-900 dark:text-white">Editing</div>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From Jun 2022</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Content conversion, recreation and editing training.</p>
        </div>
    </li>
</ol>

<!-- 
The website project was divided into 3 main phases:

We conducted a comprehensive user research with a vendor in December 2020 
to gain better understanding of the stakeholders, both internal and external users. 
The study helped us identify how users perceive us,
and how we can improve the website's information architecture.

In the second phase, 
we hired another vendor to migrate the content and build the new website using Drupal 9.

After the vendor completed the development, our web team took over the content. 
We converted and recreated the content and trained the content owners on how to use the new website. 
Our developer and I also worked on updating and resolving any additional issues.

<b>Next slide >>>>></b>
-->
`,title:"Timeline",level:1,content:`# Timeline

<ol class="items-start sm:flex mt-20">
    <li class="relative mb-6 sm:mb-0 w-max-1/3">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <div class="text-lg font-semibold text-gray-900 dark:text-white">User Study</div>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From Dec 2020</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Comprehensive user study and IA research</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0 w-max-1/3">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <div class="text-lg font-semibold text-gray-900 dark:text-white">Procurement & Dev</div>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Starting from Aug 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Hire vendor to migrate and develop the site in Drupal 9.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0 w-max-1/3">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <div class="text-lg font-semibold text-gray-900 dark:text-white">Editing</div>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From Jun 2022</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Content conversion, recreation and editing training.</p>
        </div>
    </li>
</ol>`,frontmatter:{srcSequence:"./section-1.md"},note:`The website project was divided into 3 main phases:

We conducted a comprehensive user research with a vendor in December 2020 
to gain better understanding of the stakeholders, both internal and external users. 
The study helped us identify how users perceive us,
and how we can improve the website's information architecture.

In the second phase, 
we hired another vendor to migrate the content and build the new website using Drupal 9.

After the vendor completed the development, our web team took over the content. 
We converted and recreated the content and trained the content owners on how to use the new website. 
Our developer and I also worked on updating and resolving any additional issues.

<b>Next slide >>>>></b>`,index:6,start:117,end:180,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-1.md",raw:`
# Timeline

<ol class="items-start sm:flex mt-20">
    <li class="relative mb-6 sm:mb-0 w-max-1/3">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <div class="text-lg font-semibold text-gray-900 dark:text-white">User Study</div>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From Dec 2020</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Comprehensive user study and IA research</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0 w-max-1/3">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <div class="text-lg font-semibold text-gray-900 dark:text-white">Procurement & Dev</div>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Starting from Aug 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Hire vendor to migrate and develop the site in Drupal 9.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0 w-max-1/3">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <div class="text-lg font-semibold text-gray-900 dark:text-white">Editing</div>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From Jun 2022</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Content conversion, recreation and editing training.</p>
        </div>
    </li>
</ol>

<!-- 
The website project was divided into 3 main phases:

We conducted a comprehensive user research with a vendor in December 2020 
to gain better understanding of the stakeholders, both internal and external users. 
The study helped us identify how users perceive us,
and how we can improve the website's information architecture.

In the second phase, 
we hired another vendor to migrate the content and build the new website using Drupal 9.

After the vendor completed the development, our web team took over the content. 
We converted and recreated the content and trained the content owners on how to use the new website. 
Our developer and I also worked on updating and resolving any additional issues.

<b>Next slide >>>>></b>
-->
`,title:"Timeline",level:1,content:`# Timeline

<ol class="items-start sm:flex mt-20">
    <li class="relative mb-6 sm:mb-0 w-max-1/3">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <div class="text-lg font-semibold text-gray-900 dark:text-white">User Study</div>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From Dec 2020</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Comprehensive user study and IA research</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0 w-max-1/3">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <div class="text-lg font-semibold text-gray-900 dark:text-white">Procurement & Dev</div>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Starting from Aug 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Hire vendor to migrate and develop the site in Drupal 9.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0 w-max-1/3">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-9 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <div class="text-lg font-semibold text-gray-900 dark:text-white">Editing</div>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From Jun 2022</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Content conversion, recreation and editing training.</p>
        </div>
    </li>
</ol>`,frontmatter:{},note:`The website project was divided into 3 main phases:

We conducted a comprehensive user research with a vendor in December 2020 
to gain better understanding of the stakeholders, both internal and external users. 
The study helped us identify how users perceive us,
and how we can improve the website's information architecture.

In the second phase, 
we hired another vendor to migrate the content and build the new website using Drupal 9.

After the vendor completed the development, our web team took over the content. 
We converted and recreated the content and trained the content owners on how to use the new website. 
Our developer and I also worked on updating and resolving any additional issues.

<b>Next slide >>>>></b>`,index:3,start:117,end:180},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-1.md",notesHTML:`<p>The website project was divided into 3 main phases:</p>
<p>We conducted a comprehensive user research with a vendor in December 2020
to gain better understanding of the stakeholders, both internal and external users.
The study helped us identify how users perceive us,
and how we can improve the website's information architecture.</p>
<p>In the second phase,
we hired another vendor to migrate the content and build the new website using Drupal 9.</p>
<p>After the vendor completed the development, our web team took over the content.
We converted and recreated the content and trained the content owners on how to use the new website.
Our developer and I also worked on updating and resolving any additional issues.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:mb,meta:{srcSequence:"./section-1.md",slide:{raw:`
<div class="hidden">

# New site
</div>

<div class="grid grid-cols-2 gap-4">
  <div class="">
    <img src="/images/oist-www-home.png" />
  </div>
  <div>
    <img src="/images/oist-www-menu.png" class="mb-6" />
    <img src="/images/oist-www-news.png" />
  </div>
  <div>
    
  </div>
</div>

<!--
Last December, two years after we began the project, 
we successfully relaunched the website. 
It has been well-received by the OIST community.

Let's take a quick tour of the site now.

<b>Next slide >>>>></b>
-->
`,title:"New site",level:1,content:`<div class="hidden">

# New site
</div>

<div class="grid grid-cols-2 gap-4">
  <div class="">
    <img src="/images/oist-www-home.png" />
  </div>
  <div>
    <img src="/images/oist-www-menu.png" class="mb-6" />
    <img src="/images/oist-www-news.png" />
  </div>
  <div>
    
  </div>
</div>`,frontmatter:{srcSequence:"./section-1.md"},note:`Last December, two years after we began the project, 
we successfully relaunched the website. 
It has been well-received by the OIST community.

Let's take a quick tour of the site now.

<b>Next slide >>>>></b>`,index:7,start:181,end:210,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-1.md",raw:`
<div class="hidden">

# New site
</div>

<div class="grid grid-cols-2 gap-4">
  <div class="">
    <img src="/images/oist-www-home.png" />
  </div>
  <div>
    <img src="/images/oist-www-menu.png" class="mb-6" />
    <img src="/images/oist-www-news.png" />
  </div>
  <div>
    
  </div>
</div>

<!--
Last December, two years after we began the project, 
we successfully relaunched the website. 
It has been well-received by the OIST community.

Let's take a quick tour of the site now.

<b>Next slide >>>>></b>
-->
`,title:"New site",level:1,content:`<div class="hidden">

# New site
</div>

<div class="grid grid-cols-2 gap-4">
  <div class="">
    <img src="/images/oist-www-home.png" />
  </div>
  <div>
    <img src="/images/oist-www-menu.png" class="mb-6" />
    <img src="/images/oist-www-news.png" />
  </div>
  <div>
    
  </div>
</div>`,frontmatter:{},note:`Last December, two years after we began the project, 
we successfully relaunched the website. 
It has been well-received by the OIST community.

Let's take a quick tour of the site now.

<b>Next slide >>>>></b>`,index:4,start:181,end:210},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-1.md",notesHTML:`<p>Last December, two years after we began the project,
we successfully relaunched the website.
It has been well-received by the OIST community.</p>
<p>Let's take a quick tour of the site now.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:wb,meta:{srcSequence:"./section-1.md",slide:{raw:`
# Showcase of OIST new website

(an videoclip go through the new site)

* Homepage
* Menu (3-levels mega menu)
* News page (editor's selection and related content)
* Photo Gallergy 
* SDG microsite
* Style Guide (Show paragraph components)
  * Call to Action - 2 items
  * Image Grid
  * Document and Links
  * Featured Content - Grid / Panel / Slide
  * Grid example (https://www.oist.jp/style-guide#grid-example)

<!--
We redefined the color scheme and used new web components throughout the site. 

The mega menu provides users with a better navigation map. 

Our media editor can manually select related content or let the system choose related content for them. 

We integrated Flickr into the site to allow users to preview our photo albums. 

For different campaigns or special committees, we have a microsite feature which allows them to manage their own content and display their own logo. 

Finally, we have also created a style guide to showcase the components we designed for the website.

<b>Next slide >>>>></b>
-->
`,title:"Showcase of OIST new website",level:1,content:`# Showcase of OIST new website

(an videoclip go through the new site)

* Homepage
* Menu (3-levels mega menu)
* News page (editor's selection and related content)
* Photo Gallergy 
* SDG microsite
* Style Guide (Show paragraph components)
  * Call to Action - 2 items
  * Image Grid
  * Document and Links
  * Featured Content - Grid / Panel / Slide
  * Grid example (https://www.oist.jp/style-guide#grid-example)`,frontmatter:{srcSequence:"./section-1.md"},note:`We redefined the color scheme and used new web components throughout the site. 

The mega menu provides users with a better navigation map. 

Our media editor can manually select related content or let the system choose related content for them. 

We integrated Flickr into the site to allow users to preview our photo albums. 

For different campaigns or special committees, we have a microsite feature which allows them to manage their own content and display their own logo. 

Finally, we have also created a style guide to showcase the components we designed for the website.

<b>Next slide >>>>></b>`,index:8,start:211,end:244,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-1.md",raw:`
# Showcase of OIST new website

(an videoclip go through the new site)

* Homepage
* Menu (3-levels mega menu)
* News page (editor's selection and related content)
* Photo Gallergy 
* SDG microsite
* Style Guide (Show paragraph components)
  * Call to Action - 2 items
  * Image Grid
  * Document and Links
  * Featured Content - Grid / Panel / Slide
  * Grid example (https://www.oist.jp/style-guide#grid-example)

<!--
We redefined the color scheme and used new web components throughout the site. 

The mega menu provides users with a better navigation map. 

Our media editor can manually select related content or let the system choose related content for them. 

We integrated Flickr into the site to allow users to preview our photo albums. 

For different campaigns or special committees, we have a microsite feature which allows them to manage their own content and display their own logo. 

Finally, we have also created a style guide to showcase the components we designed for the website.

<b>Next slide >>>>></b>
-->
`,title:"Showcase of OIST new website",level:1,content:`# Showcase of OIST new website

(an videoclip go through the new site)

* Homepage
* Menu (3-levels mega menu)
* News page (editor's selection and related content)
* Photo Gallergy 
* SDG microsite
* Style Guide (Show paragraph components)
  * Call to Action - 2 items
  * Image Grid
  * Document and Links
  * Featured Content - Grid / Panel / Slide
  * Grid example (https://www.oist.jp/style-guide#grid-example)`,frontmatter:{},note:`We redefined the color scheme and used new web components throughout the site. 

The mega menu provides users with a better navigation map. 

Our media editor can manually select related content or let the system choose related content for them. 

We integrated Flickr into the site to allow users to preview our photo albums. 

For different campaigns or special committees, we have a microsite feature which allows them to manage their own content and display their own logo. 

Finally, we have also created a style guide to showcase the components we designed for the website.

<b>Next slide >>>>></b>`,index:5,start:211,end:244},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-1.md",notesHTML:`<p>We redefined the color scheme and used new web components throughout the site.</p>
<p>The mega menu provides users with a better navigation map.</p>
<p>Our media editor can manually select related content or let the system choose related content for them.</p>
<p>We integrated Flickr into the site to allow users to preview our photo albums.</p>
<p>For different campaigns or special committees, we have a microsite feature which allows them to manage their own content and display their own logo.</p>
<p>Finally, we have also created a style guide to showcase the components we designed for the website.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:kb,meta:{layout:"intro-image",image:"/images/white-box-kelli-mcclintock.jpg",title:"Migration, Dev, and Management",srcSequence:"./section-2.md",slide:{raw:null,title:"Migration, Dev, and Management",level:1,content:`<div class="hidden">

# Migration, Dev, and Management
</div>

<div class="absolute bottom-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-20 left-1/2">
  <h1 class="text-shadow-md">Migration, Dev, & Management</h1>
</div>`,frontmatter:{layout:"intro-image",image:"/images/white-box-kelli-mcclintock.jpg",title:"Migration, Dev, and Management",srcSequence:"./section-2.md"},note:`Now, let's move on to the technical aspect of our project. 
I would like to provide a high-level overview of the migration process and how we managed the development project.

Migration was the first and most important factor in our project. 
All important content and assets needed to be migrated. 
It wasn't just about migrating the content nodes, 
we also had to migrate files and images that were not managed in the CMS.

<b>Next slide >>>>></b>`,index:9,start:0,end:32,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",raw:`---
layout: intro-image
image: /images/white-box-kelli-mcclintock.jpg
---

<div class="hidden">

# Migration, Dev, and Management
</div>

<div class="absolute bottom-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-20 left-1/2">
  <h1 class="text-shadow-md">Migration, Dev, & Management</h1>
</div>

<!--
Now, let's move on to the technical aspect of our project. 
I would like to provide a high-level overview of the migration process and how we managed the development project.

Migration was the first and most important factor in our project. 
All important content and assets needed to be migrated. 
It wasn't just about migrating the content nodes, 
we also had to migrate files and images that were not managed in the CMS.

<b>Next slide >>>>></b>
-->
`,title:"Migration, Dev, and Management",level:1,content:`<div class="hidden">

# Migration, Dev, and Management
</div>

<div class="absolute bottom-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-20 left-1/2">
  <h1 class="text-shadow-md">Migration, Dev, & Management</h1>
</div>`,frontmatter:{layout:"intro-image",image:"/images/white-box-kelli-mcclintock.jpg",title:"Migration, Dev, and Management"},note:`Now, let's move on to the technical aspect of our project. 
I would like to provide a high-level overview of the migration process and how we managed the development project.

Migration was the first and most important factor in our project. 
All important content and assets needed to be migrated. 
It wasn't just about migrating the content nodes, 
we also had to migrate files and images that were not managed in the CMS.

<b>Next slide >>>>></b>`,index:0,start:0,end:32},inline:{raw:`---
src: ./section-2.md
---
<!-- this page will be loaded from './section-2.md' -->
# 2. Migration, Dev, and Management
`,title:"2. Migration, Dev, and Management",level:1,content:`<!-- this page will be loaded from './section-2.md' -->
# 2. Migration, Dev, and Management`,frontmatter:{},index:4,start:170,end:176},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",notesHTML:`<p>Now, let's move on to the technical aspect of our project.
I would like to provide a high-level overview of the migration process and how we managed the development project.</p>
<p>Migration was the first and most important factor in our project.
All important content and assets needed to be migrated.
It wasn't just about migrating the content nodes,
we also had to migrate files and images that were not managed in the CMS.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Ab,meta:{srcSequence:"./section-2.md",slide:{raw:`
# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-3 gap-8">
  <div class="col-span-2 pl-6 pt-8 items-center">
    <p>
        Migrated <span class="text-blue-600 dark:text-blue-500">3200</span> content nodes and 
        <span class="text-blue-600 dark:text-blue-500">6600</span> media assets
    </p>
    <p>
        <pre class="p-4 bg-gray-700 text-white">[[nid:9999]] --> &lt;drupal-entity /&gt;</pre>
    </p>
  </div>
  <div>
    <img src="/images/2023-01-06-23-30-22.png" />
  </div>
  
</div>

<!-- 
In Drupal 7, there was no Media Library, 
so we used the "video" and "photo" content types to contain assets, 
and later used shortcodes to reference them in the content body.

This means we had to migrate all 3,000 content nodes and over 6,000 media assets first, 
and then convert all the inline shortcodes into the new media embed format.

<b>Next slide >>>>></b>
-->
`,title:"Migration",level:1,content:`# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-3 gap-8">
  <div class="col-span-2 pl-6 pt-8 items-center">
    <p>
        Migrated <span class="text-blue-600 dark:text-blue-500">3200</span> content nodes and 
        <span class="text-blue-600 dark:text-blue-500">6600</span> media assets
    </p>
    <p>
        <pre class="p-4 bg-gray-700 text-white">[[nid:9999]] --> &lt;drupal-entity /&gt;</pre>
    </p>
  </div>
  <div>
    <img src="/images/2023-01-06-23-30-22.png" />
  </div>
  
</div>`,frontmatter:{srcSequence:"./section-2.md"},note:`In Drupal 7, there was no Media Library, 
so we used the "video" and "photo" content types to contain assets, 
and later used shortcodes to reference them in the content body.

This means we had to migrate all 3,000 content nodes and over 6,000 media assets first, 
and then convert all the inline shortcodes into the new media embed format.

<b>Next slide >>>>></b>`,index:10,start:33,end:94,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",raw:`
# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-3 gap-8">
  <div class="col-span-2 pl-6 pt-8 items-center">
    <p>
        Migrated <span class="text-blue-600 dark:text-blue-500">3200</span> content nodes and 
        <span class="text-blue-600 dark:text-blue-500">6600</span> media assets
    </p>
    <p>
        <pre class="p-4 bg-gray-700 text-white">[[nid:9999]] --> &lt;drupal-entity /&gt;</pre>
    </p>
  </div>
  <div>
    <img src="/images/2023-01-06-23-30-22.png" />
  </div>
  
</div>

<!-- 
In Drupal 7, there was no Media Library, 
so we used the "video" and "photo" content types to contain assets, 
and later used shortcodes to reference them in the content body.

This means we had to migrate all 3,000 content nodes and over 6,000 media assets first, 
and then convert all the inline shortcodes into the new media embed format.

<b>Next slide >>>>></b>
-->
`,title:"Migration",level:1,content:`# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-3 gap-8">
  <div class="col-span-2 pl-6 pt-8 items-center">
    <p>
        Migrated <span class="text-blue-600 dark:text-blue-500">3200</span> content nodes and 
        <span class="text-blue-600 dark:text-blue-500">6600</span> media assets
    </p>
    <p>
        <pre class="p-4 bg-gray-700 text-white">[[nid:9999]] --> &lt;drupal-entity /&gt;</pre>
    </p>
  </div>
  <div>
    <img src="/images/2023-01-06-23-30-22.png" />
  </div>
  
</div>`,frontmatter:{},note:`In Drupal 7, there was no Media Library, 
so we used the "video" and "photo" content types to contain assets, 
and later used shortcodes to reference them in the content body.

This means we had to migrate all 3,000 content nodes and over 6,000 media assets first, 
and then convert all the inline shortcodes into the new media embed format.

<b>Next slide >>>>></b>`,index:1,start:33,end:94},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",notesHTML:`<p>In Drupal 7, there was no Media Library,
so we used the &quot;video&quot; and &quot;photo&quot; content types to contain assets,
and later used shortcodes to reference them in the content body.</p>
<p>This means we had to migrate all 3,000 content nodes and over 6,000 media assets first,
and then convert all the inline shortcodes into the new media embed format.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Ob,meta:{srcSequence:"./section-2.md",slide:{raw:`
# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-5 gap-8">
  <div class="col-span-3 pl-6 pt-8 items-center">
    Converted <span class="text-blue-600 dark:text-blue-500">1500</span> files that were uploaded via 
    <ul>
      <li>IMCE</li>
      <li>File fields</li>
    </ul>
  </div>
  <div class="col-span-2">
    <img src="/images/IMCE_browser.png" />
  </div>
  
</div>


<!-- 
In the past, content editors were able to use IMCE to upload files and images to the server directly. 

During the migration, we converted over 1,500 inline file sources into media types, 
including images, documents, and embedded videos. 

This not only ensures that all files are in the managed system, 
but also makes the system more secure.

<b>Next slide >>>>></b>
-->
`,title:"Migration",level:1,content:`# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-5 gap-8">
  <div class="col-span-3 pl-6 pt-8 items-center">
    Converted <span class="text-blue-600 dark:text-blue-500">1500</span> files that were uploaded via 
    <ul>
      <li>IMCE</li>
      <li>File fields</li>
    </ul>
  </div>
  <div class="col-span-2">
    <img src="/images/IMCE_browser.png" />
  </div>
  
</div>`,frontmatter:{srcSequence:"./section-2.md"},note:`In the past, content editors were able to use IMCE to upload files and images to the server directly. 

During the migration, we converted over 1,500 inline file sources into media types, 
including images, documents, and embedded videos. 

This not only ensures that all files are in the managed system, 
but also makes the system more secure.

<b>Next slide >>>>></b>`,index:11,start:95,end:156,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",raw:`
# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-5 gap-8">
  <div class="col-span-3 pl-6 pt-8 items-center">
    Converted <span class="text-blue-600 dark:text-blue-500">1500</span> files that were uploaded via 
    <ul>
      <li>IMCE</li>
      <li>File fields</li>
    </ul>
  </div>
  <div class="col-span-2">
    <img src="/images/IMCE_browser.png" />
  </div>
  
</div>


<!-- 
In the past, content editors were able to use IMCE to upload files and images to the server directly. 

During the migration, we converted over 1,500 inline file sources into media types, 
including images, documents, and embedded videos. 

This not only ensures that all files are in the managed system, 
but also makes the system more secure.

<b>Next slide >>>>></b>
-->
`,title:"Migration",level:1,content:`# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-5 gap-8">
  <div class="col-span-3 pl-6 pt-8 items-center">
    Converted <span class="text-blue-600 dark:text-blue-500">1500</span> files that were uploaded via 
    <ul>
      <li>IMCE</li>
      <li>File fields</li>
    </ul>
  </div>
  <div class="col-span-2">
    <img src="/images/IMCE_browser.png" />
  </div>
  
</div>`,frontmatter:{},note:`In the past, content editors were able to use IMCE to upload files and images to the server directly. 

During the migration, we converted over 1,500 inline file sources into media types, 
including images, documents, and embedded videos. 

This not only ensures that all files are in the managed system, 
but also makes the system more secure.

<b>Next slide >>>>></b>`,index:2,start:95,end:156},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",notesHTML:`<p>In the past, content editors were able to use IMCE to upload files and images to the server directly.</p>
<p>During the migration, we converted over 1,500 inline file sources into media types,
including images, documents, and embedded videos.</p>
<p>This not only ensures that all files are in the managed system,
but also makes the system more secure.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Rb,meta:{srcSequence:"./section-2.md",slide:{raw:`
# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-5 gap-8">
  <div class="col-span-3 pl-6 pt-8 items-center">
    <ol>
        <li>
            In total <span class="text-blue-600 dark:text-blue-500">10,000+</span> content and assets are migrated.
        </li>
        <li>
            Reuse the migration profile as mockup data for CI/CD testing workflow.
        </li>
    </ol>
  </div>
  <div class="col-span-2">

![](/images/cicd_workflow.png)
  </div>
  
</div>


<!--
In total, we migrated more than 10,000 contents and assets via the Drupal Migrate API script. 

The migrate profile was kept in use in the project to provide mockup data for testing purposes. 

During each new feature development, 
our local environment and cloud CI environment builds the site with the mockup data every time. 
This allows us to run unit tests repeatedly and make our deployment more robust and reliable. 

Migration was critical to the project and required a lot of effort to review the content and validate the results, 
but it was worth it and played a crucial role in the project's success.

<b>Next slide >>>>></b>
-->
`,title:"Migration",level:1,content:`# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-5 gap-8">
  <div class="col-span-3 pl-6 pt-8 items-center">
    <ol>
        <li>
            In total <span class="text-blue-600 dark:text-blue-500">10,000+</span> content and assets are migrated.
        </li>
        <li>
            Reuse the migration profile as mockup data for CI/CD testing workflow.
        </li>
    </ol>
  </div>
  <div class="col-span-2">

![](/images/cicd_workflow.png)
  </div>
  
</div>`,frontmatter:{srcSequence:"./section-2.md"},note:`In total, we migrated more than 10,000 contents and assets via the Drupal Migrate API script. 

The migrate profile was kept in use in the project to provide mockup data for testing purposes. 

During each new feature development, 
our local environment and cloud CI environment builds the site with the mockup data every time. 
This allows us to run unit tests repeatedly and make our deployment more robust and reliable. 

Migration was critical to the project and required a lot of effort to review the content and validate the results, 
but it was worth it and played a crucial role in the project's success.

<b>Next slide >>>>></b>`,index:12,start:157,end:225,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",raw:`
# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-5 gap-8">
  <div class="col-span-3 pl-6 pt-8 items-center">
    <ol>
        <li>
            In total <span class="text-blue-600 dark:text-blue-500">10,000+</span> content and assets are migrated.
        </li>
        <li>
            Reuse the migration profile as mockup data for CI/CD testing workflow.
        </li>
    </ol>
  </div>
  <div class="col-span-2">

![](/images/cicd_workflow.png)
  </div>
  
</div>


<!--
In total, we migrated more than 10,000 contents and assets via the Drupal Migrate API script. 

The migrate profile was kept in use in the project to provide mockup data for testing purposes. 

During each new feature development, 
our local environment and cloud CI environment builds the site with the mockup data every time. 
This allows us to run unit tests repeatedly and make our deployment more robust and reliable. 

Migration was critical to the project and required a lot of effort to review the content and validate the results, 
but it was worth it and played a crucial role in the project's success.

<b>Next slide >>>>></b>
-->
`,title:"Migration",level:1,content:`# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-5 gap-8">
  <div class="col-span-3 pl-6 pt-8 items-center">
    <ol>
        <li>
            In total <span class="text-blue-600 dark:text-blue-500">10,000+</span> content and assets are migrated.
        </li>
        <li>
            Reuse the migration profile as mockup data for CI/CD testing workflow.
        </li>
    </ol>
  </div>
  <div class="col-span-2">

![](/images/cicd_workflow.png)
  </div>
  
</div>`,frontmatter:{},note:`In total, we migrated more than 10,000 contents and assets via the Drupal Migrate API script. 

The migrate profile was kept in use in the project to provide mockup data for testing purposes. 

During each new feature development, 
our local environment and cloud CI environment builds the site with the mockup data every time. 
This allows us to run unit tests repeatedly and make our deployment more robust and reliable. 

Migration was critical to the project and required a lot of effort to review the content and validate the results, 
but it was worth it and played a crucial role in the project's success.

<b>Next slide >>>>></b>`,index:3,start:157,end:225},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",notesHTML:`<p>In total, we migrated more than 10,000 contents and assets via the Drupal Migrate API script.</p>
<p>The migrate profile was kept in use in the project to provide mockup data for testing purposes.</p>
<p>During each new feature development,
our local environment and cloud CI environment builds the site with the mockup data every time.
This allows us to run unit tests repeatedly and make our deployment more robust and reliable.</p>
<p>Migration was critical to the project and required a lot of effort to review the content and validate the results,
but it was worth it and played a crucial role in the project's success.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Wb,meta:{srcSequence:"./section-2.md",slide:{raw:`
# Key to the Successful Project

<ol class="relative ml-4 mt-12 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Internal Communication</h2>
        <p class="text-sm">
            <ul>
                <li>Progress report</li>
                <li>Meet the stack holder</li>
            </ul>
        </p>
    </li>
    <li class="mb-10 ml-6">       
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Project management</h2>
        <p class="text-sm">
            <ul>
                <li>Dev stage with vendor</li>
                <li>In-house dev stage and editing stage</li>
            </ul>
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Continuous Intergration & Deployment (CI/CD)</h2>
        <p class="text-sm">
            <ul>
                <li>Tests</li>
                <li>Automated Deployment</li>
            </ul>
        </p>
    </li>
</ol>

<!--
Beyond migration, there were keys that made the project success.

1. Effective communication: 
We made sure to keep the team and supervisor informed of our progress. 
OIST is a large organization with many decision-making channels, 
so when necessary, we met with stakeholders directly, 
and found someone who could support and communicate through the right channels.

2. Using tools effectively: 
We used tools effectively to manage project tasks and assist with communication. 
There is no best tool, but we found the right tools that all team members were willing to use.

3. Testing and automation: 
To reduce repetitive tasks and risks, 
we rely on testing and automating processes as much as possible.

All these factors worked together to make the project a success.

<b>Next slide >>>>></b>
-->

`,title:"Key to the Successful Project",level:1,content:`# Key to the Successful Project

<ol class="relative ml-4 mt-12 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Internal Communication</h2>
        <p class="text-sm">
            <ul>
                <li>Progress report</li>
                <li>Meet the stack holder</li>
            </ul>
        </p>
    </li>
    <li class="mb-10 ml-6">       
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Project management</h2>
        <p class="text-sm">
            <ul>
                <li>Dev stage with vendor</li>
                <li>In-house dev stage and editing stage</li>
            </ul>
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Continuous Intergration & Deployment (CI/CD)</h2>
        <p class="text-sm">
            <ul>
                <li>Tests</li>
                <li>Automated Deployment</li>
            </ul>
        </p>
    </li>
</ol>`,frontmatter:{srcSequence:"./section-2.md"},note:`Beyond migration, there were keys that made the project success.

1. Effective communication: 
We made sure to keep the team and supervisor informed of our progress. 
OIST is a large organization with many decision-making channels, 
so when necessary, we met with stakeholders directly, 
and found someone who could support and communicate through the right channels.

2. Using tools effectively: 
We used tools effectively to manage project tasks and assist with communication. 
There is no best tool, but we found the right tools that all team members were willing to use.

3. Testing and automation: 
To reduce repetitive tasks and risks, 
we rely on testing and automating processes as much as possible.

All these factors worked together to make the project a success.

<b>Next slide >>>>></b>`,index:13,start:226,end:291,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",raw:`
# Key to the Successful Project

<ol class="relative ml-4 mt-12 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Internal Communication</h2>
        <p class="text-sm">
            <ul>
                <li>Progress report</li>
                <li>Meet the stack holder</li>
            </ul>
        </p>
    </li>
    <li class="mb-10 ml-6">       
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Project management</h2>
        <p class="text-sm">
            <ul>
                <li>Dev stage with vendor</li>
                <li>In-house dev stage and editing stage</li>
            </ul>
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Continuous Intergration & Deployment (CI/CD)</h2>
        <p class="text-sm">
            <ul>
                <li>Tests</li>
                <li>Automated Deployment</li>
            </ul>
        </p>
    </li>
</ol>

<!--
Beyond migration, there were keys that made the project success.

1. Effective communication: 
We made sure to keep the team and supervisor informed of our progress. 
OIST is a large organization with many decision-making channels, 
so when necessary, we met with stakeholders directly, 
and found someone who could support and communicate through the right channels.

2. Using tools effectively: 
We used tools effectively to manage project tasks and assist with communication. 
There is no best tool, but we found the right tools that all team members were willing to use.

3. Testing and automation: 
To reduce repetitive tasks and risks, 
we rely on testing and automating processes as much as possible.

All these factors worked together to make the project a success.

<b>Next slide >>>>></b>
-->

`,title:"Key to the Successful Project",level:1,content:`# Key to the Successful Project

<ol class="relative ml-4 mt-12 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Internal Communication</h2>
        <p class="text-sm">
            <ul>
                <li>Progress report</li>
                <li>Meet the stack holder</li>
            </ul>
        </p>
    </li>
    <li class="mb-10 ml-6">       
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Project management</h2>
        <p class="text-sm">
            <ul>
                <li>Dev stage with vendor</li>
                <li>In-house dev stage and editing stage</li>
            </ul>
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Continuous Intergration & Deployment (CI/CD)</h2>
        <p class="text-sm">
            <ul>
                <li>Tests</li>
                <li>Automated Deployment</li>
            </ul>
        </p>
    </li>
</ol>`,frontmatter:{},note:`Beyond migration, there were keys that made the project success.

1. Effective communication: 
We made sure to keep the team and supervisor informed of our progress. 
OIST is a large organization with many decision-making channels, 
so when necessary, we met with stakeholders directly, 
and found someone who could support and communicate through the right channels.

2. Using tools effectively: 
We used tools effectively to manage project tasks and assist with communication. 
There is no best tool, but we found the right tools that all team members were willing to use.

3. Testing and automation: 
To reduce repetitive tasks and risks, 
we rely on testing and automating processes as much as possible.

All these factors worked together to make the project a success.

<b>Next slide >>>>></b>`,index:4,start:226,end:291},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",notesHTML:`<p>Beyond migration, there were keys that made the project success.</p>
<ol>
<li>
<p>Effective communication:
We made sure to keep the team and supervisor informed of our progress.
OIST is a large organization with many decision-making channels,
so when necessary, we met with stakeholders directly,
and found someone who could support and communicate through the right channels.</p>
</li>
<li>
<p>Using tools effectively:
We used tools effectively to manage project tasks and assist with communication.
There is no best tool, but we found the right tools that all team members were willing to use.</p>
</li>
<li>
<p>Testing and automation:
To reduce repetitive tasks and risks,
we rely on testing and automating processes as much as possible.</p>
</li>
</ol>
<p>All these factors worked together to make the project a success.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Yb,meta:{srcSequence:"./section-2.md",slide:{raw:`
# Project management

<div class="grid grid-cols-2 gap-8 mt-12">
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Dev Stage with Vendor</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-4xl font-extrabold tracking-tight">GitHub</span>
            <span class="ml-4 text-lg font-normal text-gray-500 dark:text-gray-400">Issue and Project</span>
        </div>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 OIST team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">6 vendor team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Project manager</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Designer, Frontend Developer, Backend Developer, QA</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">600 issues and 600 PRs</span>
            </li>
        </ul>
    </div>
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">In-house Dev and Editing Stage</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-4xl font-extrabold tracking-tight">GitHub + Shortcut</span>
            <span class="ml-4 text-xl font-normal text-gray-500 dark:text-gray-400"></span>
        </div>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">7 team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Manager, Content Editor, Graphic Designer, 2 Drupal Developers</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">450 Dev issues, 500 Content tasks</span>
            </li>
        </ul>
    </div>
</div>

<!--
During the first stage of the project when we worked with the vendor, 
they used GitHub and its Project tool to manage tasks. 

This allowed their developers and us to communicate freely, 
rather than only through the project manager. 

This accelerated development, made the work transparent, 
and increased mutual trust.

After the project was delivered, 
we introduced Shortcut to manage both development and content creation tasks on the same platform. 

With Shortcut, 
we were able to integrate GitHub to track the status of pull requests,
and syncing development task status.

<b>Next slide >>>>></b>
-->
`,title:"Project management",level:1,content:`# Project management

<div class="grid grid-cols-2 gap-8 mt-12">
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Dev Stage with Vendor</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-4xl font-extrabold tracking-tight">GitHub</span>
            <span class="ml-4 text-lg font-normal text-gray-500 dark:text-gray-400">Issue and Project</span>
        </div>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 OIST team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">6 vendor team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Project manager</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Designer, Frontend Developer, Backend Developer, QA</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">600 issues and 600 PRs</span>
            </li>
        </ul>
    </div>
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">In-house Dev and Editing Stage</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-4xl font-extrabold tracking-tight">GitHub + Shortcut</span>
            <span class="ml-4 text-xl font-normal text-gray-500 dark:text-gray-400"></span>
        </div>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">7 team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Manager, Content Editor, Graphic Designer, 2 Drupal Developers</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">450 Dev issues, 500 Content tasks</span>
            </li>
        </ul>
    </div>
</div>`,frontmatter:{srcSequence:"./section-2.md"},note:`During the first stage of the project when we worked with the vendor, 
they used GitHub and its Project tool to manage tasks. 

This allowed their developers and us to communicate freely, 
rather than only through the project manager. 

This accelerated development, made the work transparent, 
and increased mutual trust.

After the project was delivered, 
we introduced Shortcut to manage both development and content creation tasks on the same platform. 

With Shortcut, 
we were able to integrate GitHub to track the status of pull requests,
and syncing development task status.

<b>Next slide >>>>></b>`,index:14,start:292,end:378,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",raw:`
# Project management

<div class="grid grid-cols-2 gap-8 mt-12">
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Dev Stage with Vendor</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-4xl font-extrabold tracking-tight">GitHub</span>
            <span class="ml-4 text-lg font-normal text-gray-500 dark:text-gray-400">Issue and Project</span>
        </div>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 OIST team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">6 vendor team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Project manager</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Designer, Frontend Developer, Backend Developer, QA</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">600 issues and 600 PRs</span>
            </li>
        </ul>
    </div>
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">In-house Dev and Editing Stage</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-4xl font-extrabold tracking-tight">GitHub + Shortcut</span>
            <span class="ml-4 text-xl font-normal text-gray-500 dark:text-gray-400"></span>
        </div>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">7 team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Manager, Content Editor, Graphic Designer, 2 Drupal Developers</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">450 Dev issues, 500 Content tasks</span>
            </li>
        </ul>
    </div>
</div>

<!--
During the first stage of the project when we worked with the vendor, 
they used GitHub and its Project tool to manage tasks. 

This allowed their developers and us to communicate freely, 
rather than only through the project manager. 

This accelerated development, made the work transparent, 
and increased mutual trust.

After the project was delivered, 
we introduced Shortcut to manage both development and content creation tasks on the same platform. 

With Shortcut, 
we were able to integrate GitHub to track the status of pull requests,
and syncing development task status.

<b>Next slide >>>>></b>
-->
`,title:"Project management",level:1,content:`# Project management

<div class="grid grid-cols-2 gap-8 mt-12">
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Dev Stage with Vendor</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-4xl font-extrabold tracking-tight">GitHub</span>
            <span class="ml-4 text-lg font-normal text-gray-500 dark:text-gray-400">Issue and Project</span>
        </div>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 OIST team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">6 vendor team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Project manager</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Designer, Frontend Developer, Backend Developer, QA</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">600 issues and 600 PRs</span>
            </li>
        </ul>
    </div>
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">In-house Dev and Editing Stage</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-4xl font-extrabold tracking-tight">GitHub + Shortcut</span>
            <span class="ml-4 text-xl font-normal text-gray-500 dark:text-gray-400"></span>
        </div>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">7 team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Manager, Content Editor, Graphic Designer, 2 Drupal Developers</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">450 Dev issues, 500 Content tasks</span>
            </li>
        </ul>
    </div>
</div>`,frontmatter:{},note:`During the first stage of the project when we worked with the vendor, 
they used GitHub and its Project tool to manage tasks. 

This allowed their developers and us to communicate freely, 
rather than only through the project manager. 

This accelerated development, made the work transparent, 
and increased mutual trust.

After the project was delivered, 
we introduced Shortcut to manage both development and content creation tasks on the same platform. 

With Shortcut, 
we were able to integrate GitHub to track the status of pull requests,
and syncing development task status.

<b>Next slide >>>>></b>`,index:5,start:292,end:378},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",notesHTML:`<p>During the first stage of the project when we worked with the vendor,
they used GitHub and its Project tool to manage tasks.</p>
<p>This allowed their developers and us to communicate freely,
rather than only through the project manager.</p>
<p>This accelerated development, made the work transparent,
and increased mutual trust.</p>
<p>After the project was delivered,
we introduced Shortcut to manage both development and content creation tasks on the same platform.</p>
<p>With Shortcut,
we were able to integrate GitHub to track the status of pull requests,
and syncing development task status.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:tx,meta:{layout:"intro-image",image:"/images/github_project_planner.png",srcSequence:"./section-2.md",slide:{raw:`---
layout: intro-image
image: /images/github_project_planner.png
---

<div class="hidden">

# GitHub
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-black dark:text-white">
    GitHub Project
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>

<!--
Many of us are already familiar with GitHub, 
and their project management tools have become more mature and user-friendly.

<b>Next slide >>>>></b>
-->
`,title:"GitHub",level:1,content:`<div class="hidden">

# GitHub
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-black dark:text-white">
    GitHub Project
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>`,frontmatter:{layout:"intro-image",image:"/images/github_project_planner.png",srcSequence:"./section-2.md"},note:`Many of us are already familiar with GitHub, 
and their project management tools have become more mature and user-friendly.

<b>Next slide >>>>></b>`,index:15,start:378,end:409,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",raw:`---
layout: intro-image
image: /images/github_project_planner.png
---

<div class="hidden">

# GitHub
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-black dark:text-white">
    GitHub Project
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>

<!--
Many of us are already familiar with GitHub, 
and their project management tools have become more mature and user-friendly.

<b>Next slide >>>>></b>
-->
`,title:"GitHub",level:1,content:`<div class="hidden">

# GitHub
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-black dark:text-white">
    GitHub Project
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>`,frontmatter:{layout:"intro-image",image:"/images/github_project_planner.png"},note:`Many of us are already familiar with GitHub, 
and their project management tools have become more mature and user-friendly.

<b>Next slide >>>>></b>`,index:6,start:378,end:409},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",notesHTML:`<p>Many of us are already familiar with GitHub,
and their project management tools have become more mature and user-friendly.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:rx,meta:{layout:"intro-image",image:"/images/shortcut_storyboard_docs.png",srcSequence:"./section-2.md",slide:{raw:`---
layout: intro-image
image: /images/shortcut_storyboard_docs.png
---

<div class="hidden">

# Shortcut
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-sky-400">
    Shortcut
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>

<!--
Shortcut is a task management system that can easily manage both development and editing tasks. 

Given that the tasks of development and editing require different workflows, 
we can create different workflows in Shortcut for them, 
and then bring them into the same Epic or Iteration easily. 

This is very helpful for a team with multiple functions.

<b>Next slide >>>>></b>
-->
`,title:"Shortcut",level:1,content:`<div class="hidden">

# Shortcut
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-sky-400">
    Shortcut
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>`,frontmatter:{layout:"intro-image",image:"/images/shortcut_storyboard_docs.png",srcSequence:"./section-2.md"},note:`Shortcut is a task management system that can easily manage both development and editing tasks. 

Given that the tasks of development and editing require different workflows, 
we can create different workflows in Shortcut for them, 
and then bring them into the same Epic or Iteration easily. 

This is very helpful for a team with multiple functions.

<b>Next slide >>>>></b>`,index:16,start:409,end:445,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",raw:`---
layout: intro-image
image: /images/shortcut_storyboard_docs.png
---

<div class="hidden">

# Shortcut
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-sky-400">
    Shortcut
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>

<!--
Shortcut is a task management system that can easily manage both development and editing tasks. 

Given that the tasks of development and editing require different workflows, 
we can create different workflows in Shortcut for them, 
and then bring them into the same Epic or Iteration easily. 

This is very helpful for a team with multiple functions.

<b>Next slide >>>>></b>
-->
`,title:"Shortcut",level:1,content:`<div class="hidden">

# Shortcut
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-sky-400">
    Shortcut
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>`,frontmatter:{layout:"intro-image",image:"/images/shortcut_storyboard_docs.png"},note:`Shortcut is a task management system that can easily manage both development and editing tasks. 

Given that the tasks of development and editing require different workflows, 
we can create different workflows in Shortcut for them, 
and then bring them into the same Epic or Iteration easily. 

This is very helpful for a team with multiple functions.

<b>Next slide >>>>></b>`,index:7,start:409,end:445},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",notesHTML:`<p>Shortcut is a task management system that can easily manage both development and editing tasks.</p>
<p>Given that the tasks of development and editing require different workflows,
we can create different workflows in Shortcut for them,
and then bring them into the same Epic or Iteration easily.</p>
<p>This is very helpful for a team with multiple functions.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:ux,meta:{layout:"intro-image",image:"/images/shortcut_issue_github.png",srcSequence:"./section-2.md",slide:{raw:`---
layout: intro-image
image: /images/shortcut_issue_github.png
---

<div class="hidden">

# Shortcut
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-sky-400">
    Shortcut
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>

<!--
In Shortcut, we can quickly sync the status of dev tasks with GitHub. 

Even though they are two separate platforms, 
we can work between them seamlessly.

<b>Next slide >>>>></b>
-->
`,title:"Shortcut",level:1,content:`<div class="hidden">

# Shortcut
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-sky-400">
    Shortcut
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>`,frontmatter:{layout:"intro-image",image:"/images/shortcut_issue_github.png",srcSequence:"./section-2.md"},note:`In Shortcut, we can quickly sync the status of dev tasks with GitHub. 

Even though they are two separate platforms, 
we can work between them seamlessly.

<b>Next slide >>>>></b>`,index:17,start:445,end:478,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",raw:`---
layout: intro-image
image: /images/shortcut_issue_github.png
---

<div class="hidden">

# Shortcut
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-sky-400">
    Shortcut
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>

<!--
In Shortcut, we can quickly sync the status of dev tasks with GitHub. 

Even though they are two separate platforms, 
we can work between them seamlessly.

<b>Next slide >>>>></b>
-->
`,title:"Shortcut",level:1,content:`<div class="hidden">

# Shortcut
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-sky-400">
    Shortcut
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>`,frontmatter:{layout:"intro-image",image:"/images/shortcut_issue_github.png"},note:`In Shortcut, we can quickly sync the status of dev tasks with GitHub. 

Even though they are two separate platforms, 
we can work between them seamlessly.

<b>Next slide >>>>></b>`,index:8,start:445,end:478},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",notesHTML:`<p>In Shortcut, we can quickly sync the status of dev tasks with GitHub.</p>
<p>Even though they are two separate platforms,
we can work between them seamlessly.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:vx,meta:{srcSequence:"./section-2.md",slide:{raw:`
# CI/CD Workflow

<ol class="relative ml-4 mt-8 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
    <li class="mb-10 ml-6">       
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Lint</h2>
        <p class="text-sm">
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Unit test</h2>
        <p class="text-sm">
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Automated deployment</h2>
        <p class="text-sm">
            <ul>
                <li>Multiple Dev Environment</li>
                <li>Production Site Deployment</li>
            </ul>
        </p>
    </li>
</ol>

<div class="mt-8">

![](/images/circleci_flow.png)
</div>

<!--
We are a two-developer development team, 
and need to focus on development tasks and resolving issues. 

The CI/CD process acts as a third developer, 
checking the coding standard and deploying the code for us. 

This allows our developers to quickly move on to the next task,
after committing the code to the online development environment. 

Once the commit passes the CI/CD workflow, 
we can then focus on reviewing the logic of the code in pull requests, 
and then ask the CI/CD to deploy it to the production site. 

With all the tools, scripts, and continuous communication, 
we were able to complete the project smoothly. 

Of course, the diligent team members were the core of the project's success.

<b>Next slide >>>>></b>
-->
`,title:"CI/CD Workflow",level:1,content:`# CI/CD Workflow

<ol class="relative ml-4 mt-8 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
    <li class="mb-10 ml-6">       
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Lint</h2>
        <p class="text-sm">
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Unit test</h2>
        <p class="text-sm">
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Automated deployment</h2>
        <p class="text-sm">
            <ul>
                <li>Multiple Dev Environment</li>
                <li>Production Site Deployment</li>
            </ul>
        </p>
    </li>
</ol>

<div class="mt-8">

![](/images/circleci_flow.png)
</div>`,frontmatter:{srcSequence:"./section-2.md"},note:`We are a two-developer development team, 
and need to focus on development tasks and resolving issues. 

The CI/CD process acts as a third developer, 
checking the coding standard and deploying the code for us. 

This allows our developers to quickly move on to the next task,
after committing the code to the online development environment. 

Once the commit passes the CI/CD workflow, 
we can then focus on reviewing the logic of the code in pull requests, 
and then ask the CI/CD to deploy it to the production site. 

With all the tools, scripts, and continuous communication, 
we were able to complete the project smoothly. 

Of course, the diligent team members were the core of the project's success.

<b>Next slide >>>>></b>`,index:18,start:479,end:540,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",raw:`
# CI/CD Workflow

<ol class="relative ml-4 mt-8 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
    <li class="mb-10 ml-6">       
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Lint</h2>
        <p class="text-sm">
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Unit test</h2>
        <p class="text-sm">
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Automated deployment</h2>
        <p class="text-sm">
            <ul>
                <li>Multiple Dev Environment</li>
                <li>Production Site Deployment</li>
            </ul>
        </p>
    </li>
</ol>

<div class="mt-8">

![](/images/circleci_flow.png)
</div>

<!--
We are a two-developer development team, 
and need to focus on development tasks and resolving issues. 

The CI/CD process acts as a third developer, 
checking the coding standard and deploying the code for us. 

This allows our developers to quickly move on to the next task,
after committing the code to the online development environment. 

Once the commit passes the CI/CD workflow, 
we can then focus on reviewing the logic of the code in pull requests, 
and then ask the CI/CD to deploy it to the production site. 

With all the tools, scripts, and continuous communication, 
we were able to complete the project smoothly. 

Of course, the diligent team members were the core of the project's success.

<b>Next slide >>>>></b>
-->
`,title:"CI/CD Workflow",level:1,content:`# CI/CD Workflow

<ol class="relative ml-4 mt-8 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
    <li class="mb-10 ml-6">       
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Lint</h2>
        <p class="text-sm">
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Unit test</h2>
        <p class="text-sm">
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Automated deployment</h2>
        <p class="text-sm">
            <ul>
                <li>Multiple Dev Environment</li>
                <li>Production Site Deployment</li>
            </ul>
        </p>
    </li>
</ol>

<div class="mt-8">

![](/images/circleci_flow.png)
</div>`,frontmatter:{},note:`We are a two-developer development team, 
and need to focus on development tasks and resolving issues. 

The CI/CD process acts as a third developer, 
checking the coding standard and deploying the code for us. 

This allows our developers to quickly move on to the next task,
after committing the code to the online development environment. 

Once the commit passes the CI/CD workflow, 
we can then focus on reviewing the logic of the code in pull requests, 
and then ask the CI/CD to deploy it to the production site. 

With all the tools, scripts, and continuous communication, 
we were able to complete the project smoothly. 

Of course, the diligent team members were the core of the project's success.

<b>Next slide >>>>></b>`,index:9,start:479,end:540},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-2.md",notesHTML:`<p>We are a two-developer development team,
and need to focus on development tasks and resolving issues.</p>
<p>The CI/CD process acts as a third developer,
checking the coding standard and deploying the code for us.</p>
<p>This allows our developers to quickly move on to the next task,
after committing the code to the online development environment.</p>
<p>Once the commit passes the CI/CD workflow,
we can then focus on reviewing the logic of the code in pull requests,
and then ask the CI/CD to deploy it to the production site.</p>
<p>With all the tools, scripts, and continuous communication,
we were able to complete the project smoothly.</p>
<p>Of course, the diligent team members were the core of the project's success.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:bx,meta:{layout:"intro-image",image:"/images/unit_yamamoto.jpg",title:"Diversity",srcSequence:"./section-3.md",slide:{raw:null,title:"Diversity",level:1,content:"# Diversity",frontmatter:{layout:"intro-image",image:"/images/unit_yamamoto.jpg",title:"Diversity",srcSequence:"./section-3.md"},note:`OIST is a unique graduate university in Japan, 
with over 50% of our members being international, 
including employees and students. 

Our Cell Signal Unit is a diverse example, 
with leading faculty, fellow researchers, and students from all over the world. 

As a result, English and Japanese are equally important at OIST, 
and most of the content on our website is translated into both languages. 

During the project, we dealt with many translation issues, 
and in the second part of this talk, 
I'd like to focus on a few of them, 
particularly for our Japanese and APAC region attendees.

<b>Next slide >>>>></b>`,index:19,start:0,end:26,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`---
layout: intro-image
image: /images/unit_yamamoto.jpg
---

# Diversity

<!--
OIST is a unique graduate university in Japan, 
with over 50% of our members being international, 
including employees and students. 

Our Cell Signal Unit is a diverse example, 
with leading faculty, fellow researchers, and students from all over the world. 

As a result, English and Japanese are equally important at OIST, 
and most of the content on our website is translated into both languages. 

During the project, we dealt with many translation issues, 
and in the second part of this talk, 
I'd like to focus on a few of them, 
particularly for our Japanese and APAC region attendees.

<b>Next slide >>>>></b>
-->
`,title:"Diversity",level:1,content:"# Diversity",frontmatter:{layout:"intro-image",image:"/images/unit_yamamoto.jpg",title:"Diversity"},note:`OIST is a unique graduate university in Japan, 
with over 50% of our members being international, 
including employees and students. 

Our Cell Signal Unit is a diverse example, 
with leading faculty, fellow researchers, and students from all over the world. 

As a result, English and Japanese are equally important at OIST, 
and most of the content on our website is translated into both languages. 

During the project, we dealt with many translation issues, 
and in the second part of this talk, 
I'd like to focus on a few of them, 
particularly for our Japanese and APAC region attendees.

<b>Next slide >>>>></b>`,index:0,start:0,end:26},inline:{raw:`---
src: ./section-3.md
---
<!-- this page will be loaded from './section-3.md' -->
# 3. Important translation issues
`,title:"3. Important translation issues",level:1,content:`<!-- this page will be loaded from './section-3.md' -->
# 3. Important translation issues`,frontmatter:{},index:5,start:176,end:182},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>OIST is a unique graduate university in Japan,
with over 50% of our members being international,
including employees and students.</p>
<p>Our Cell Signal Unit is a diverse example,
with leading faculty, fellow researchers, and students from all over the world.</p>
<p>As a result, English and Japanese are equally important at OIST,
and most of the content on our website is translated into both languages.</p>
<p>During the project, we dealt with many translation issues,
and in the second part of this talk,
I'd like to focus on a few of them,
particularly for our Japanese and APAC region attendees.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:jx,meta:{srcSequence:"./section-3.md",slide:{raw:`
# Translate with i18n

Content translation / Field translation

<img class="w-2/3" src="/images/2022-08-22-23-02-48.png" />

User Interface translation in Drupal
<!-- Configuration -->

![](/images/2022-08-22-22-58-40.png)

<!--
Drupal has well defined translation system in core.
Depends on your experience and role, there are always ways for you to make translations.

As a site builder, 
we can translate nodes with field translation enabled. 

Also, we can translate many strings that appear in the user interface.

<b>Next slide >>>>></b>
-->`,title:"Translate with i18n",level:1,content:`# Translate with i18n

Content translation / Field translation

<img class="w-2/3" src="/images/2022-08-22-23-02-48.png" />

User Interface translation in Drupal
<!-- Configuration -->

![](/images/2022-08-22-22-58-40.png)`,frontmatter:{srcSequence:"./section-3.md"},note:`Drupal has well defined translation system in core.
Depends on your experience and role, there are always ways for you to make translations.

As a site builder, 
we can translate nodes with field translation enabled. 

Also, we can translate many strings that appear in the user interface.

<b>Next slide >>>>></b>`,index:20,start:27,end:50,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`
# Translate with i18n

Content translation / Field translation

<img class="w-2/3" src="/images/2022-08-22-23-02-48.png" />

User Interface translation in Drupal
<!-- Configuration -->

![](/images/2022-08-22-22-58-40.png)

<!--
Drupal has well defined translation system in core.
Depends on your experience and role, there are always ways for you to make translations.

As a site builder, 
we can translate nodes with field translation enabled. 

Also, we can translate many strings that appear in the user interface.

<b>Next slide >>>>></b>
-->`,title:"Translate with i18n",level:1,content:`# Translate with i18n

Content translation / Field translation

<img class="w-2/3" src="/images/2022-08-22-23-02-48.png" />

User Interface translation in Drupal
<!-- Configuration -->

![](/images/2022-08-22-22-58-40.png)`,frontmatter:{},note:`Drupal has well defined translation system in core.
Depends on your experience and role, there are always ways for you to make translations.

As a site builder, 
we can translate nodes with field translation enabled. 

Also, we can translate many strings that appear in the user interface.

<b>Next slide >>>>></b>`,index:1,start:27,end:50},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>Drupal has well defined translation system in core.
Depends on your experience and role, there are always ways for you to make translations.</p>
<p>As a site builder,
we can translate nodes with field translation enabled.</p>
<p>Also, we can translate many strings that appear in the user interface.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Wx,meta:{srcSequence:"./section-3.md",slide:{raw:`
# Translate with i18n

Translation in Twig

\`\`\`twig
{# Test trans filter. #}
{{ 'Hello Earth.'|trans }}

{# Test trans tag with text content. #}
{% set body_text %}
  {% trans %}Read more at: {{ url }}{% endtrans %}
{% endset %}

{% set count = comments|length %}
{% trans %}
  {{ count }} comment was deleted successfully.
{% plural count %}
  {{ count }} comments were deleted successfully.
{% endtrans %}
\`\`\`

<!--
As a themer.
We use TWIG to mark translatable sentence with variable in it.

<b>Next slide >>>>></b>
-->`,title:"Translate with i18n",level:1,content:`# Translate with i18n

Translation in Twig

\`\`\`twig
{# Test trans filter. #}
{{ 'Hello Earth.'|trans }}

{# Test trans tag with text content. #}
{% set body_text %}
  {% trans %}Read more at: {{ url }}{% endtrans %}
{% endset %}

{% set count = comments|length %}
{% trans %}
  {{ count }} comment was deleted successfully.
{% plural count %}
  {{ count }} comments were deleted successfully.
{% endtrans %}
\`\`\``,frontmatter:{srcSequence:"./section-3.md"},note:`As a themer.
We use TWIG to mark translatable sentence with variable in it.

<b>Next slide >>>>></b>`,index:21,start:51,end:79,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`
# Translate with i18n

Translation in Twig

\`\`\`twig
{# Test trans filter. #}
{{ 'Hello Earth.'|trans }}

{# Test trans tag with text content. #}
{% set body_text %}
  {% trans %}Read more at: {{ url }}{% endtrans %}
{% endset %}

{% set count = comments|length %}
{% trans %}
  {{ count }} comment was deleted successfully.
{% plural count %}
  {{ count }} comments were deleted successfully.
{% endtrans %}
\`\`\`

<!--
As a themer.
We use TWIG to mark translatable sentence with variable in it.

<b>Next slide >>>>></b>
-->`,title:"Translate with i18n",level:1,content:`# Translate with i18n

Translation in Twig

\`\`\`twig
{# Test trans filter. #}
{{ 'Hello Earth.'|trans }}

{# Test trans tag with text content. #}
{% set body_text %}
  {% trans %}Read more at: {{ url }}{% endtrans %}
{% endset %}

{% set count = comments|length %}
{% trans %}
  {{ count }} comment was deleted successfully.
{% plural count %}
  {{ count }} comments were deleted successfully.
{% endtrans %}
\`\`\``,frontmatter:{},note:`As a themer.
We use TWIG to mark translatable sentence with variable in it.

<b>Next slide >>>>></b>`,index:2,start:51,end:79},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>As a themer.
We use TWIG to mark translatable sentence with variable in it.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Zx,meta:{srcSequence:"./section-3.md",slide:{raw:`
# Translate with i18n

Translate a sentence with t() function and variables that allow us to place the var in alternative position

\`\`\`php
  $sentence_translation = 
  t(
    'No crop types available. <a href="@link">Add crop type</a>.', // Sentence
    [ '@link' => $this->urlGenerator->generateFromRoute('crop.type_add'),] // Dynamic value
  );
\`\`\`

<!--
As a developer.

We can mark the translatable string with the t() function.

It is also capable to use dynamic variable in a sentence.

However, there may be chances that we need a translation context, 
because a word could be verb or noun or has more than one meaning.

<b>Next slide >>>>></b>
-->`,title:"Translate with i18n",level:1,content:`# Translate with i18n

Translate a sentence with t() function and variables that allow us to place the var in alternative position

\`\`\`php
  $sentence_translation = 
  t(
    'No crop types available. <a href="@link">Add crop type</a>.', // Sentence
    [ '@link' => $this->urlGenerator->generateFromRoute('crop.type_add'),] // Dynamic value
  );
\`\`\``,frontmatter:{srcSequence:"./section-3.md"},note:`As a developer.

We can mark the translatable string with the t() function.

It is also capable to use dynamic variable in a sentence.

However, there may be chances that we need a translation context, 
because a word could be verb or noun or has more than one meaning.

<b>Next slide >>>>></b>`,index:22,start:80,end:105,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`
# Translate with i18n

Translate a sentence with t() function and variables that allow us to place the var in alternative position

\`\`\`php
  $sentence_translation = 
  t(
    'No crop types available. <a href="@link">Add crop type</a>.', // Sentence
    [ '@link' => $this->urlGenerator->generateFromRoute('crop.type_add'),] // Dynamic value
  );
\`\`\`

<!--
As a developer.

We can mark the translatable string with the t() function.

It is also capable to use dynamic variable in a sentence.

However, there may be chances that we need a translation context, 
because a word could be verb or noun or has more than one meaning.

<b>Next slide >>>>></b>
-->`,title:"Translate with i18n",level:1,content:`# Translate with i18n

Translate a sentence with t() function and variables that allow us to place the var in alternative position

\`\`\`php
  $sentence_translation = 
  t(
    'No crop types available. <a href="@link">Add crop type</a>.', // Sentence
    [ '@link' => $this->urlGenerator->generateFromRoute('crop.type_add'),] // Dynamic value
  );
\`\`\``,frontmatter:{},note:`As a developer.

We can mark the translatable string with the t() function.

It is also capable to use dynamic variable in a sentence.

However, there may be chances that we need a translation context, 
because a word could be verb or noun or has more than one meaning.

<b>Next slide >>>>></b>`,index:3,start:80,end:105},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>As a developer.</p>
<p>We can mark the translatable string with the t() function.</p>
<p>It is also capable to use dynamic variable in a sentence.</p>
<p>However, there may be chances that we need a translation context,
because a word could be verb or noun or has more than one meaning.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:o_,meta:{srcSequence:"./section-3.md",slide:{raw:`
# Translate with i18n

And translate with context

<div class="grid grid-cols-2 mt-8 mb-4">
  <div class="flex flex-col items-center">
    <div class="font-bold">
      noun. as a section label: <span class="text-sky-500 font-normal">連絡先</span>
    </div>
    <img class="h-60 mt-4 shadow-xl p-4" src="/images/2022-09-21-20-08-11.png" />
  </div>
  <div class="flex flex-col items-center">
    <div class="font-bold">
      verb. as an action: <span class="text-sky-500 font-normal">コンタクト</span>
    </div>
    <img class="h-60 mt-4 shadow-md" src="/images/2022-09-21-18-28-37.png" />
  </div>
</div>

\`\`\`php
  $labels = [
    'contact_action' => $this->t('Contact', [], ['context' => 'As an action']),
    'contact_section' => $this->t('Contact', [], ['context' => 'As a section label']),
  ];
\`\`\`

<!-- 
For example: "Contact"
It will be translated into two different words in Japanese, as an action or as a section label.

<b>Next slide >>>>></b>
-->
`,title:"Translate with i18n",level:1,content:`# Translate with i18n

And translate with context

<div class="grid grid-cols-2 mt-8 mb-4">
  <div class="flex flex-col items-center">
    <div class="font-bold">
      noun. as a section label: <span class="text-sky-500 font-normal">連絡先</span>
    </div>
    <img class="h-60 mt-4 shadow-xl p-4" src="/images/2022-09-21-20-08-11.png" />
  </div>
  <div class="flex flex-col items-center">
    <div class="font-bold">
      verb. as an action: <span class="text-sky-500 font-normal">コンタクト</span>
    </div>
    <img class="h-60 mt-4 shadow-md" src="/images/2022-09-21-18-28-37.png" />
  </div>
</div>

\`\`\`php
  $labels = [
    'contact_action' => $this->t('Contact', [], ['context' => 'As an action']),
    'contact_section' => $this->t('Contact', [], ['context' => 'As a section label']),
  ];
\`\`\``,frontmatter:{srcSequence:"./section-3.md"},note:`For example: "Contact"
It will be translated into two different words in Japanese, as an action or as a section label.

<b>Next slide >>>>></b>`,index:23,start:106,end:140,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`
# Translate with i18n

And translate with context

<div class="grid grid-cols-2 mt-8 mb-4">
  <div class="flex flex-col items-center">
    <div class="font-bold">
      noun. as a section label: <span class="text-sky-500 font-normal">連絡先</span>
    </div>
    <img class="h-60 mt-4 shadow-xl p-4" src="/images/2022-09-21-20-08-11.png" />
  </div>
  <div class="flex flex-col items-center">
    <div class="font-bold">
      verb. as an action: <span class="text-sky-500 font-normal">コンタクト</span>
    </div>
    <img class="h-60 mt-4 shadow-md" src="/images/2022-09-21-18-28-37.png" />
  </div>
</div>

\`\`\`php
  $labels = [
    'contact_action' => $this->t('Contact', [], ['context' => 'As an action']),
    'contact_section' => $this->t('Contact', [], ['context' => 'As a section label']),
  ];
\`\`\`

<!-- 
For example: "Contact"
It will be translated into two different words in Japanese, as an action or as a section label.

<b>Next slide >>>>></b>
-->
`,title:"Translate with i18n",level:1,content:`# Translate with i18n

And translate with context

<div class="grid grid-cols-2 mt-8 mb-4">
  <div class="flex flex-col items-center">
    <div class="font-bold">
      noun. as a section label: <span class="text-sky-500 font-normal">連絡先</span>
    </div>
    <img class="h-60 mt-4 shadow-xl p-4" src="/images/2022-09-21-20-08-11.png" />
  </div>
  <div class="flex flex-col items-center">
    <div class="font-bold">
      verb. as an action: <span class="text-sky-500 font-normal">コンタクト</span>
    </div>
    <img class="h-60 mt-4 shadow-md" src="/images/2022-09-21-18-28-37.png" />
  </div>
</div>

\`\`\`php
  $labels = [
    'contact_action' => $this->t('Contact', [], ['context' => 'As an action']),
    'contact_section' => $this->t('Contact', [], ['context' => 'As a section label']),
  ];
\`\`\``,frontmatter:{},note:`For example: "Contact"
It will be translated into two different words in Japanese, as an action or as a section label.

<b>Next slide >>>>></b>`,index:4,start:106,end:140},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>For example: &quot;Contact&quot;
It will be translated into two different words in Japanese, as an action or as a section label.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:h_,meta:{layout:"intro-image",image:"/images/DCE2022_title.png",class:"text-center",srcSequence:"./section-3.md",slide:{raw:`---
layout: intro-image
image: /images/DCE2022_title.png
class: 'text-center'
---

<div class="hidden">

# More than Words
</div>



<div class="text-6xl font-700 text-gray-700 self-end mt-43 mb-8 font-serif">
  More than Words
</div>
<div class="text-4xl text-gray-700">
  Localizing the User Experience
</div>
<div class="text-md text-sky-700 flex justify-center">
  <span class="flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full mr-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
    <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
  </span>
  <h2 class="font-normal leading-tight text-gray-700 dark:text-gray-100">
    Online slide: <a class=" text-sky-600 underline-dashed" target="_blank" href="https://prague.amou.ro">https://prague.amou.ro</a>
  </h2>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
There are more details about localizing user experience in my talk at the latest DrupalCon Prague.

If you're interested and work on bilingual sites often, it would be helpful for you.

But today, I want to focus on issues specific to the project and related to the Japanese language.

<b>Nest slide >>>>></b>
-->
`,title:"More than Words",level:1,content:`<div class="hidden">

# More than Words
</div>



<div class="text-6xl font-700 text-gray-700 self-end mt-43 mb-8 font-serif">
  More than Words
</div>
<div class="text-4xl text-gray-700">
  Localizing the User Experience
</div>
<div class="text-md text-sky-700 flex justify-center">
  <span class="flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full mr-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
    <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
  </span>
  <h2 class="font-normal leading-tight text-gray-700 dark:text-gray-100">
    Online slide: <a class=" text-sky-600 underline-dashed" target="_blank" href="https://prague.amou.ro">https://prague.amou.ro</a>
  </h2>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>`,frontmatter:{layout:"intro-image",image:"/images/DCE2022_title.png",class:"text-center",srcSequence:"./section-3.md"},note:`There are more details about localizing user experience in my talk at the latest DrupalCon Prague.

If you're interested and work on bilingual sites often, it would be helpful for you.

But today, I want to focus on issues specific to the project and related to the Japanese language.

<b>Nest slide >>>>></b>`,index:24,start:140,end:185,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`---
layout: intro-image
image: /images/DCE2022_title.png
class: 'text-center'
---

<div class="hidden">

# More than Words
</div>



<div class="text-6xl font-700 text-gray-700 self-end mt-43 mb-8 font-serif">
  More than Words
</div>
<div class="text-4xl text-gray-700">
  Localizing the User Experience
</div>
<div class="text-md text-sky-700 flex justify-center">
  <span class="flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full mr-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
    <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
  </span>
  <h2 class="font-normal leading-tight text-gray-700 dark:text-gray-100">
    Online slide: <a class=" text-sky-600 underline-dashed" target="_blank" href="https://prague.amou.ro">https://prague.amou.ro</a>
  </h2>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
There are more details about localizing user experience in my talk at the latest DrupalCon Prague.

If you're interested and work on bilingual sites often, it would be helpful for you.

But today, I want to focus on issues specific to the project and related to the Japanese language.

<b>Nest slide >>>>></b>
-->
`,title:"More than Words",level:1,content:`<div class="hidden">

# More than Words
</div>



<div class="text-6xl font-700 text-gray-700 self-end mt-43 mb-8 font-serif">
  More than Words
</div>
<div class="text-4xl text-gray-700">
  Localizing the User Experience
</div>
<div class="text-md text-sky-700 flex justify-center">
  <span class="flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full mr-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
    <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
  </span>
  <h2 class="font-normal leading-tight text-gray-700 dark:text-gray-100">
    Online slide: <a class=" text-sky-600 underline-dashed" target="_blank" href="https://prague.amou.ro">https://prague.amou.ro</a>
  </h2>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>`,frontmatter:{layout:"intro-image",image:"/images/DCE2022_title.png",class:"text-center"},note:`There are more details about localizing user experience in my talk at the latest DrupalCon Prague.

If you're interested and work on bilingual sites often, it would be helpful for you.

But today, I want to focus on issues specific to the project and related to the Japanese language.

<b>Nest slide >>>>></b>`,index:5,start:140,end:185},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>There are more details about localizing user experience in my talk at the latest DrupalCon Prague.</p>
<p>If you're interested and work on bilingual sites often, it would be helpful for you.</p>
<p>But today, I want to focus on issues specific to the project and related to the Japanese language.</p>
<p><b>Nest slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:x_,meta:{layout:"fact",srcSequence:"./section-3.md",slide:{raw:`---
layout: fact
---

<div class="hidden">
# JP/TW Date format using Gregorian Calendar
</div>

<h1 class="!text-7xl">
YYYY<span class="text-blue-400">年</span>mm<span class="text-blue-400">月</span>dd<span class="text-blue-400">日</span>
</h1>

🇯🇵 Japan 🇹🇼 Taiwan

<!--
One issue to consider is the date format. 

In Japan, as well as Taiwan, 
we typically use a format that starts with the year, 
followed by the month and day.

<b>Next slide >>>>></b>
-->

`,title:"JP/TW Date format using Gregorian Calendar",level:1,content:`<div class="hidden">
# JP/TW Date format using Gregorian Calendar
</div>

<h1 class="!text-7xl">
YYYY<span class="text-blue-400">年</span>mm<span class="text-blue-400">月</span>dd<span class="text-blue-400">日</span>
</h1>

🇯🇵 Japan 🇹🇼 Taiwan`,frontmatter:{layout:"fact",srcSequence:"./section-3.md"},note:`One issue to consider is the date format. 

In Japan, as well as Taiwan, 
we typically use a format that starts with the year, 
followed by the month and day.

<b>Next slide >>>>></b>`,index:25,start:185,end:210,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`---
layout: fact
---

<div class="hidden">
# JP/TW Date format using Gregorian Calendar
</div>

<h1 class="!text-7xl">
YYYY<span class="text-blue-400">年</span>mm<span class="text-blue-400">月</span>dd<span class="text-blue-400">日</span>
</h1>

🇯🇵 Japan 🇹🇼 Taiwan

<!--
One issue to consider is the date format. 

In Japan, as well as Taiwan, 
we typically use a format that starts with the year, 
followed by the month and day.

<b>Next slide >>>>></b>
-->

`,title:"JP/TW Date format using Gregorian Calendar",level:1,content:`<div class="hidden">
# JP/TW Date format using Gregorian Calendar
</div>

<h1 class="!text-7xl">
YYYY<span class="text-blue-400">年</span>mm<span class="text-blue-400">月</span>dd<span class="text-blue-400">日</span>
</h1>

🇯🇵 Japan 🇹🇼 Taiwan`,frontmatter:{layout:"fact"},note:`One issue to consider is the date format. 

In Japan, as well as Taiwan, 
we typically use a format that starts with the year, 
followed by the month and day.

<b>Next slide >>>>></b>`,index:6,start:185,end:210},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>One issue to consider is the date format.</p>
<p>In Japan, as well as Taiwan,
we typically use a format that starts with the year,
followed by the month and day.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:C_,meta:{layout:"fact",srcSequence:"./section-3.md",slide:{raw:`---
layout: fact
---

# 9/12/2022

<span class="text-blue-400">Sep. 12</span> vs. <span class="text-teal-400">Dec. 9</span>

<!--
In other countries, we often see the date format, 
which can be interpreted as either September 12th or December 9th, 
depending on the country. 

For example, most European countries read it as December 9th, 
while in the United States it is read as September 12th.

Given the diversity of our institute's members, 
we have to find a common way to ensure our understanding of information is consistent.

<b>Next slide >>>>></b>
-->
`,title:"9/12/2022",level:1,content:`# 9/12/2022

<span class="text-blue-400">Sep. 12</span> vs. <span class="text-teal-400">Dec. 9</span>`,frontmatter:{layout:"fact",srcSequence:"./section-3.md"},note:`In other countries, we often see the date format, 
which can be interpreted as either September 12th or December 9th, 
depending on the country. 

For example, most European countries read it as December 9th, 
while in the United States it is read as September 12th.

Given the diversity of our institute's members, 
we have to find a common way to ensure our understanding of information is consistent.

<b>Next slide >>>>></b>`,index:26,start:210,end:232,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`---
layout: fact
---

# 9/12/2022

<span class="text-blue-400">Sep. 12</span> vs. <span class="text-teal-400">Dec. 9</span>

<!--
In other countries, we often see the date format, 
which can be interpreted as either September 12th or December 9th, 
depending on the country. 

For example, most European countries read it as December 9th, 
while in the United States it is read as September 12th.

Given the diversity of our institute's members, 
we have to find a common way to ensure our understanding of information is consistent.

<b>Next slide >>>>></b>
-->
`,title:"9/12/2022",level:1,content:`# 9/12/2022

<span class="text-blue-400">Sep. 12</span> vs. <span class="text-teal-400">Dec. 9</span>`,frontmatter:{layout:"fact"},note:`In other countries, we often see the date format, 
which can be interpreted as either September 12th or December 9th, 
depending on the country. 

For example, most European countries read it as December 9th, 
while in the United States it is read as September 12th.

Given the diversity of our institute's members, 
we have to find a common way to ensure our understanding of information is consistent.

<b>Next slide >>>>></b>`,index:7,start:210,end:232},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>In other countries, we often see the date format,
which can be interpreted as either September 12th or December 9th,
depending on the country.</p>
<p>For example, most European countries read it as December 9th,
while in the United States it is read as September 12th.</p>
<p>Given the diversity of our institute's members,
we have to find a common way to ensure our understanding of information is consistent.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:j_,meta:{layout:"fact",srcSequence:"./section-3.md",slide:{raw:`---
layout: fact
---

# YYYY-mm-dd

<span class="text-sky-500">ISO 8601 Formats</span>

<!--
Therefore, we use the ISO 8601 format in English UI, 
as it is same order of format for the Japanese UI.

<b>Next slide >>>>></b>
-->
`,title:"YYYY-mm-dd",level:1,content:`# YYYY-mm-dd

<span class="text-sky-500">ISO 8601 Formats</span>`,frontmatter:{layout:"fact",srcSequence:"./section-3.md"},note:`Therefore, we use the ISO 8601 format in English UI, 
as it is same order of format for the Japanese UI.

<b>Next slide >>>>></b>`,index:27,start:232,end:247,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`---
layout: fact
---

# YYYY-mm-dd

<span class="text-sky-500">ISO 8601 Formats</span>

<!--
Therefore, we use the ISO 8601 format in English UI, 
as it is same order of format for the Japanese UI.

<b>Next slide >>>>></b>
-->
`,title:"YYYY-mm-dd",level:1,content:`# YYYY-mm-dd

<span class="text-sky-500">ISO 8601 Formats</span>`,frontmatter:{layout:"fact"},note:`Therefore, we use the ISO 8601 format in English UI, 
as it is same order of format for the Japanese UI.

<b>Next slide >>>>></b>`,index:8,start:232,end:247},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>Therefore, we use the ISO 8601 format in English UI,
as it is same order of format for the Japanese UI.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:D_,meta:{layout:"intro-image",image:"/images/cjk-cover-left.png",srcSequence:"./section-3.md",slide:{raw:`---
layout: intro-image
image: /images/cjk-cover-left.png
---

<div class="hidden">

# ===== Issue in CJK: Typing =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>CJK</h1>
  <p>Exclusive issue in CJK</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->

<!--
Another issue to consider is typing in Japanese, Chinese or Korean, 
often referred to as CJK languages. 

Typing Roman alphabets on a keyboard is relatively easy, 
but how are words typed in CJK languages?

<b>Next slide >>>>></b>
-->
`,title:"===== Issue in CJK: Typing =====",level:1,content:`<div class="hidden">

# ===== Issue in CJK: Typing =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>CJK</h1>
  <p>Exclusive issue in CJK</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->`,frontmatter:{layout:"intro-image",image:"/images/cjk-cover-left.png",srcSequence:"./section-3.md"},note:`Another issue to consider is typing in Japanese, Chinese or Korean, 
often referred to as CJK languages. 

Typing Roman alphabets on a keyboard is relatively easy, 
but how are words typed in CJK languages?

<b>Next slide >>>>></b>`,index:28,start:247,end:283,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`---
layout: intro-image
image: /images/cjk-cover-left.png
---

<div class="hidden">

# ===== Issue in CJK: Typing =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>CJK</h1>
  <p>Exclusive issue in CJK</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->

<!--
Another issue to consider is typing in Japanese, Chinese or Korean, 
often referred to as CJK languages. 

Typing Roman alphabets on a keyboard is relatively easy, 
but how are words typed in CJK languages?

<b>Next slide >>>>></b>
-->
`,title:"===== Issue in CJK: Typing =====",level:1,content:`<div class="hidden">

# ===== Issue in CJK: Typing =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>CJK</h1>
  <p>Exclusive issue in CJK</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->`,frontmatter:{layout:"intro-image",image:"/images/cjk-cover-left.png"},note:`Another issue to consider is typing in Japanese, Chinese or Korean, 
often referred to as CJK languages. 

Typing Roman alphabets on a keyboard is relatively easy, 
but how are words typed in CJK languages?

<b>Next slide >>>>></b>`,index:9,start:247,end:283},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>Another issue to consider is typing in Japanese, Chinese or Korean,
often referred to as CJK languages.</p>
<p>Typing Roman alphabets on a keyboard is relatively easy,
but how are words typed in CJK languages?</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:B_,meta:{srcSequence:"./section-3.md",slide:{raw:`
# CJK Paragraph

<hr />

<div class="grid grid-cols-3 gap-4 items-start text-sm mt-4">
<div>

## 我是 COVID-19 確診個案，應該要注意甚麼:

大部分的 COVID-19 感染者症狀輕微，休養後即可自行康復，為了將醫療資源留
給重症患者，請您先留在家中不要離開，等候公衛人員通知。

務必觀察自身症狀變化，若出現以下症狀時，請立即通知所在地政府衛生局或撥打
119 就醫，以 119 救護車為原則或指示之防疫計程車、同住親友接送或自行前往
(如步行、 自行駕/騎車)等方式為輔：喘、呼吸困難、持續胸痛、胸悶、意識不清、
皮膚或嘴唇或指甲床發青。
</div>
<div>

## 보건소에서 코로나19 양성 통보를 받았다면, 이렇게 하세요

검체채취일로부터 7일까지는 타인에게 바이러스를 전염시킬 위험이 있어 격리합니다.
오미크론 변이는 델타 변이보다 중증도가 낮으므로 증상이 없거나 경증인 경우 해열제, 감기약 복용 등 대증치료로 회복할 수 있습니다. [코로나19와 오미크론 변이] 바로가기

발열 등 증상으로 진료가 필요하면, 외래진료센터 대면진료 또는 전화 상담·처방이 가능합니다.
감염전파 방지를 위해 외출하지 말고 가급적 집에 머무르며, 화장실‧물건 등은 동거인과 따로 사용하고 자주 소독해야 합니다.[청소와소독] 바로가기

</div>
<div>

## 新型コロナウイルス感染症、症状がある方はためらわずに連絡を！

宿泊療養・自宅療養者アンケート調査によって、世代を問わず多くの方が、コロナ感染が判明する前から、
【発熱、頭痛、体のだるさ、せき、のどの痛み】といった自覚症状を訴えていたことがわかりました。

これらの症状を複数感じ、不安に思ったときは、どうぞためらわず、「かかりつけ医・身近な医療機関」や「発熱相談センター」へご連絡、ご相談ください。
</div>
</div>

<!--
Here are some paragraphs in CJK about
"What to do if you receive a positive COVID-19 notification from the health center"

You can see that in CJK languages the sentences rarely have spaces. 
To index the content and make it easy to search, extra treatment is usually required.

<b>Next slide >>>>></b>
-->`,title:"CJK Paragraph",level:1,content:`# CJK Paragraph

<hr />

<div class="grid grid-cols-3 gap-4 items-start text-sm mt-4">
<div>

## 我是 COVID-19 確診個案，應該要注意甚麼:

大部分的 COVID-19 感染者症狀輕微，休養後即可自行康復，為了將醫療資源留
給重症患者，請您先留在家中不要離開，等候公衛人員通知。

務必觀察自身症狀變化，若出現以下症狀時，請立即通知所在地政府衛生局或撥打
119 就醫，以 119 救護車為原則或指示之防疫計程車、同住親友接送或自行前往
(如步行、 自行駕/騎車)等方式為輔：喘、呼吸困難、持續胸痛、胸悶、意識不清、
皮膚或嘴唇或指甲床發青。
</div>
<div>

## 보건소에서 코로나19 양성 통보를 받았다면, 이렇게 하세요

검체채취일로부터 7일까지는 타인에게 바이러스를 전염시킬 위험이 있어 격리합니다.
오미크론 변이는 델타 변이보다 중증도가 낮으므로 증상이 없거나 경증인 경우 해열제, 감기약 복용 등 대증치료로 회복할 수 있습니다. [코로나19와 오미크론 변이] 바로가기

발열 등 증상으로 진료가 필요하면, 외래진료센터 대면진료 또는 전화 상담·처방이 가능합니다.
감염전파 방지를 위해 외출하지 말고 가급적 집에 머무르며, 화장실‧물건 등은 동거인과 따로 사용하고 자주 소독해야 합니다.[청소와소독] 바로가기

</div>
<div>

## 新型コロナウイルス感染症、症状がある方はためらわずに連絡を！

宿泊療養・自宅療養者アンケート調査によって、世代を問わず多くの方が、コロナ感染が判明する前から、
【発熱、頭痛、体のだるさ、せき、のどの痛み】といった自覚症状を訴えていたことがわかりました。

これらの症状を複数感じ、不安に思ったときは、どうぞためらわず、「かかりつけ医・身近な医療機関」や「発熱相談センター」へご連絡、ご相談ください。
</div>
</div>`,frontmatter:{srcSequence:"./section-3.md"},note:`Here are some paragraphs in CJK about
"What to do if you receive a positive COVID-19 notification from the health center"

You can see that in CJK languages the sentences rarely have spaces. 
To index the content and make it easy to search, extra treatment is usually required.

<b>Next slide >>>>></b>`,index:29,start:284,end:333,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`
# CJK Paragraph

<hr />

<div class="grid grid-cols-3 gap-4 items-start text-sm mt-4">
<div>

## 我是 COVID-19 確診個案，應該要注意甚麼:

大部分的 COVID-19 感染者症狀輕微，休養後即可自行康復，為了將醫療資源留
給重症患者，請您先留在家中不要離開，等候公衛人員通知。

務必觀察自身症狀變化，若出現以下症狀時，請立即通知所在地政府衛生局或撥打
119 就醫，以 119 救護車為原則或指示之防疫計程車、同住親友接送或自行前往
(如步行、 自行駕/騎車)等方式為輔：喘、呼吸困難、持續胸痛、胸悶、意識不清、
皮膚或嘴唇或指甲床發青。
</div>
<div>

## 보건소에서 코로나19 양성 통보를 받았다면, 이렇게 하세요

검체채취일로부터 7일까지는 타인에게 바이러스를 전염시킬 위험이 있어 격리합니다.
오미크론 변이는 델타 변이보다 중증도가 낮으므로 증상이 없거나 경증인 경우 해열제, 감기약 복용 등 대증치료로 회복할 수 있습니다. [코로나19와 오미크론 변이] 바로가기

발열 등 증상으로 진료가 필요하면, 외래진료센터 대면진료 또는 전화 상담·처방이 가능합니다.
감염전파 방지를 위해 외출하지 말고 가급적 집에 머무르며, 화장실‧물건 등은 동거인과 따로 사용하고 자주 소독해야 합니다.[청소와소독] 바로가기

</div>
<div>

## 新型コロナウイルス感染症、症状がある方はためらわずに連絡を！

宿泊療養・自宅療養者アンケート調査によって、世代を問わず多くの方が、コロナ感染が判明する前から、
【発熱、頭痛、体のだるさ、せき、のどの痛み】といった自覚症状を訴えていたことがわかりました。

これらの症状を複数感じ、不安に思ったときは、どうぞためらわず、「かかりつけ医・身近な医療機関」や「発熱相談センター」へご連絡、ご相談ください。
</div>
</div>

<!--
Here are some paragraphs in CJK about
"What to do if you receive a positive COVID-19 notification from the health center"

You can see that in CJK languages the sentences rarely have spaces. 
To index the content and make it easy to search, extra treatment is usually required.

<b>Next slide >>>>></b>
-->`,title:"CJK Paragraph",level:1,content:`# CJK Paragraph

<hr />

<div class="grid grid-cols-3 gap-4 items-start text-sm mt-4">
<div>

## 我是 COVID-19 確診個案，應該要注意甚麼:

大部分的 COVID-19 感染者症狀輕微，休養後即可自行康復，為了將醫療資源留
給重症患者，請您先留在家中不要離開，等候公衛人員通知。

務必觀察自身症狀變化，若出現以下症狀時，請立即通知所在地政府衛生局或撥打
119 就醫，以 119 救護車為原則或指示之防疫計程車、同住親友接送或自行前往
(如步行、 自行駕/騎車)等方式為輔：喘、呼吸困難、持續胸痛、胸悶、意識不清、
皮膚或嘴唇或指甲床發青。
</div>
<div>

## 보건소에서 코로나19 양성 통보를 받았다면, 이렇게 하세요

검체채취일로부터 7일까지는 타인에게 바이러스를 전염시킬 위험이 있어 격리합니다.
오미크론 변이는 델타 변이보다 중증도가 낮으므로 증상이 없거나 경증인 경우 해열제, 감기약 복용 등 대증치료로 회복할 수 있습니다. [코로나19와 오미크론 변이] 바로가기

발열 등 증상으로 진료가 필요하면, 외래진료센터 대면진료 또는 전화 상담·처방이 가능합니다.
감염전파 방지를 위해 외출하지 말고 가급적 집에 머무르며, 화장실‧물건 등은 동거인과 따로 사용하고 자주 소독해야 합니다.[청소와소독] 바로가기

</div>
<div>

## 新型コロナウイルス感染症、症状がある方はためらわずに連絡を！

宿泊療養・自宅療養者アンケート調査によって、世代を問わず多くの方が、コロナ感染が判明する前から、
【発熱、頭痛、体のだるさ、せき、のどの痛み】といった自覚症状を訴えていたことがわかりました。

これらの症状を複数感じ、不安に思ったときは、どうぞためらわず、「かかりつけ医・身近な医療機関」や「発熱相談センター」へご連絡、ご相談ください。
</div>
</div>`,frontmatter:{},note:`Here are some paragraphs in CJK about
"What to do if you receive a positive COVID-19 notification from the health center"

You can see that in CJK languages the sentences rarely have spaces. 
To index the content and make it easy to search, extra treatment is usually required.

<b>Next slide >>>>></b>`,index:10,start:284,end:333},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>Here are some paragraphs in CJK about
&quot;What to do if you receive a positive COVID-19 notification from the health center&quot;</p>
<p>You can see that in CJK languages the sentences rarely have spaces.
To index the content and make it easy to search, extra treatment is usually required.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:G_,meta:{srcSequence:"./section-3.md",slide:{raw:`
# Input method

<div class="grid grid-cols-4 gap-2 items-end">
    <div>
        <img src="/images/2022-09-09-14-35-49.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-36-35.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-44-38.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-46-18.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-39-25.png" />
    </div>
    <div class="col-span-2">
        <img src="/images/2022-09-09-14-41-00.png" />
    </div>

</div>

<!--
So, How do we type, what's CJK keyboards look like?

From left to right, we see two Traditional Chinese keyboards.
And there are two Korean keyboard layout and two Japanese layout on in mobile, 
or a comapct keyboard layout that has 50 essential sound characters.

For those who you don't know the languages, they may look like puzzles.

<b>Next slide >>>>></b>
-->
`,title:"Input method",level:1,content:`# Input method

<div class="grid grid-cols-4 gap-2 items-end">
    <div>
        <img src="/images/2022-09-09-14-35-49.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-36-35.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-44-38.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-46-18.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-39-25.png" />
    </div>
    <div class="col-span-2">
        <img src="/images/2022-09-09-14-41-00.png" />
    </div>

</div>`,frontmatter:{srcSequence:"./section-3.md"},note:`So, How do we type, what's CJK keyboards look like?

From left to right, we see two Traditional Chinese keyboards.
And there are two Korean keyboard layout and two Japanese layout on in mobile, 
or a comapct keyboard layout that has 50 essential sound characters.

For those who you don't know the languages, they may look like puzzles.

<b>Next slide >>>>></b>`,index:30,start:334,end:371,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`
# Input method

<div class="grid grid-cols-4 gap-2 items-end">
    <div>
        <img src="/images/2022-09-09-14-35-49.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-36-35.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-44-38.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-46-18.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-39-25.png" />
    </div>
    <div class="col-span-2">
        <img src="/images/2022-09-09-14-41-00.png" />
    </div>

</div>

<!--
So, How do we type, what's CJK keyboards look like?

From left to right, we see two Traditional Chinese keyboards.
And there are two Korean keyboard layout and two Japanese layout on in mobile, 
or a comapct keyboard layout that has 50 essential sound characters.

For those who you don't know the languages, they may look like puzzles.

<b>Next slide >>>>></b>
-->
`,title:"Input method",level:1,content:`# Input method

<div class="grid grid-cols-4 gap-2 items-end">
    <div>
        <img src="/images/2022-09-09-14-35-49.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-36-35.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-44-38.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-46-18.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-39-25.png" />
    </div>
    <div class="col-span-2">
        <img src="/images/2022-09-09-14-41-00.png" />
    </div>

</div>`,frontmatter:{},note:`So, How do we type, what's CJK keyboards look like?

From left to right, we see two Traditional Chinese keyboards.
And there are two Korean keyboard layout and two Japanese layout on in mobile, 
or a comapct keyboard layout that has 50 essential sound characters.

For those who you don't know the languages, they may look like puzzles.

<b>Next slide >>>>></b>`,index:11,start:334,end:371},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>So, How do we type, what's CJK keyboards look like?</p>
<p>From left to right, we see two Traditional Chinese keyboards.
And there are two Korean keyboard layout and two Japanese layout on in mobile,
or a comapct keyboard layout that has 50 essential sound characters.</p>
<p>For those who you don't know the languages, they may look like puzzles.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Q_,meta:{srcSequence:"./section-3.md",slide:{raw:`
# Input method

<div class="mt-16">

| Keyword      | Segments      | Segments | Lang |
| ------------ | ------------- | -------- | ---- |
| Computer | | 8 | en |
| コンピューター (konpyūtā)| kon pyu- ta- | 10 | jp-ja |
| 電腦 (diànnǎo) | ㄉ一ㄢˋ ㄋㄠˇ | 7 | zh-hant |
| 计算机 (jìsuànjī)| jisuanji / jsj | 8 / 3 | zh-hans |
</div>

<!--
When typing the words, the keystrokes vary.

For the word "Computer" we could also tell it is different in Traditional Chinese use in Taiwan or Simplified Chinese in China.

When typing CJK text, a word is completed only when all the segments is typed.
Unlike typing English, there might be possible word combination before finishing the typing.

<b>Next slide >>>>></b>

-->`,title:"Input method",level:1,content:`# Input method

<div class="mt-16">

| Keyword      | Segments      | Segments | Lang |
| ------------ | ------------- | -------- | ---- |
| Computer | | 8 | en |
| コンピューター (konpyūtā)| kon pyu- ta- | 10 | jp-ja |
| 電腦 (diànnǎo) | ㄉ一ㄢˋ ㄋㄠˇ | 7 | zh-hant |
| 计算机 (jìsuànjī)| jisuanji / jsj | 8 / 3 | zh-hans |
</div>`,frontmatter:{srcSequence:"./section-3.md"},note:`When typing the words, the keystrokes vary.

For the word "Computer" we could also tell it is different in Traditional Chinese use in Taiwan or Simplified Chinese in China.

When typing CJK text, a word is completed only when all the segments is typed.
Unlike typing English, there might be possible word combination before finishing the typing.

<b>Next slide >>>>></b>`,index:31,start:372,end:396,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`
# Input method

<div class="mt-16">

| Keyword      | Segments      | Segments | Lang |
| ------------ | ------------- | -------- | ---- |
| Computer | | 8 | en |
| コンピューター (konpyūtā)| kon pyu- ta- | 10 | jp-ja |
| 電腦 (diànnǎo) | ㄉ一ㄢˋ ㄋㄠˇ | 7 | zh-hant |
| 计算机 (jìsuànjī)| jisuanji / jsj | 8 / 3 | zh-hans |
</div>

<!--
When typing the words, the keystrokes vary.

For the word "Computer" we could also tell it is different in Traditional Chinese use in Taiwan or Simplified Chinese in China.

When typing CJK text, a word is completed only when all the segments is typed.
Unlike typing English, there might be possible word combination before finishing the typing.

<b>Next slide >>>>></b>

-->`,title:"Input method",level:1,content:`# Input method

<div class="mt-16">

| Keyword      | Segments      | Segments | Lang |
| ------------ | ------------- | -------- | ---- |
| Computer | | 8 | en |
| コンピューター (konpyūtā)| kon pyu- ta- | 10 | jp-ja |
| 電腦 (diànnǎo) | ㄉ一ㄢˋ ㄋㄠˇ | 7 | zh-hant |
| 计算机 (jìsuànjī)| jisuanji / jsj | 8 / 3 | zh-hans |
</div>`,frontmatter:{},note:`When typing the words, the keystrokes vary.

For the word "Computer" we could also tell it is different in Traditional Chinese use in Taiwan or Simplified Chinese in China.

When typing CJK text, a word is completed only when all the segments is typed.
Unlike typing English, there might be possible word combination before finishing the typing.

<b>Next slide >>>>></b>`,index:12,start:372,end:396},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>When typing the words, the keystrokes vary.</p>
<p>For the word &quot;Computer&quot; we could also tell it is different in Traditional Chinese use in Taiwan or Simplified Chinese in China.</p>
<p>When typing CJK text, a word is completed only when all the segments is typed.
Unlike typing English, there might be possible word combination before finishing the typing.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:o8,meta:{srcSequence:"./section-3.md",slide:{raw:`
# Autocomplete search suggestion

What do you see?

<video controls>
  <source src="/images/SyI343.mp4" type="video/mp4" />
</video>

<!-- 
In the clip, it shows that inputting Japanese Kanji requires typing one to four, 
or even more phonetic elements. 

Additionally, there are different words in Kanji which have the same pronunciation. 

This can lead to an issue in the search box where the search is triggered too early before the actual keyword is completed, 
which can be annoying for the users. 

This issue can be improved by implementing a special JavaScript event method to wait for the completion of the keyword input before triggering the search.

<b>Next slide >>>>></b>
-->
`,title:"Autocomplete search suggestion",level:1,content:`# Autocomplete search suggestion

What do you see?

<video controls>
  <source src="/images/SyI343.mp4" type="video/mp4" />
</video>`,frontmatter:{srcSequence:"./section-3.md"},note:`In the clip, it shows that inputting Japanese Kanji requires typing one to four, 
or even more phonetic elements. 

Additionally, there are different words in Kanji which have the same pronunciation. 

This can lead to an issue in the search box where the search is triggered too early before the actual keyword is completed, 
which can be annoying for the users. 

This issue can be improved by implementing a special JavaScript event method to wait for the completion of the keyword input before triggering the search.

<b>Next slide >>>>></b>`,index:32,start:397,end:420,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`
# Autocomplete search suggestion

What do you see?

<video controls>
  <source src="/images/SyI343.mp4" type="video/mp4" />
</video>

<!-- 
In the clip, it shows that inputting Japanese Kanji requires typing one to four, 
or even more phonetic elements. 

Additionally, there are different words in Kanji which have the same pronunciation. 

This can lead to an issue in the search box where the search is triggered too early before the actual keyword is completed, 
which can be annoying for the users. 

This issue can be improved by implementing a special JavaScript event method to wait for the completion of the keyword input before triggering the search.

<b>Next slide >>>>></b>
-->
`,title:"Autocomplete search suggestion",level:1,content:`# Autocomplete search suggestion

What do you see?

<video controls>
  <source src="/images/SyI343.mp4" type="video/mp4" />
</video>`,frontmatter:{},note:`In the clip, it shows that inputting Japanese Kanji requires typing one to four, 
or even more phonetic elements. 

Additionally, there are different words in Kanji which have the same pronunciation. 

This can lead to an issue in the search box where the search is triggered too early before the actual keyword is completed, 
which can be annoying for the users. 

This issue can be improved by implementing a special JavaScript event method to wait for the completion of the keyword input before triggering the search.

<b>Next slide >>>>></b>`,index:13,start:397,end:420},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>In the clip, it shows that inputting Japanese Kanji requires typing one to four,
or even more phonetic elements.</p>
<p>Additionally, there are different words in Kanji which have the same pronunciation.</p>
<p>This can lead to an issue in the search box where the search is triggered too early before the actual keyword is completed,
which can be annoying for the users.</p>
<p>This issue can be improved by implementing a special JavaScript event method to wait for the completion of the keyword input before triggering the search.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:u8,meta:{srcSequence:"./section-3.md",slide:{raw:`
# Autocomplete search suggestion

What is <span class="bg-green-300 p-1">improved</span>?

<video controls>
  <source src="/images/vjS5Xr.mp4" type="video/mp4" />
</video>
<!-- Configuration 
composition events https://github.com/oist/oist-www/issues94#issuecomment-1009660884
-->

<!--
In this clip, we can find the English typing works normally, 
and the Japanese word for Corona, only queries the results when the word is complete.

<b>Next slide >>>>></b>
-->
`,title:"Autocomplete search suggestion",level:1,content:`# Autocomplete search suggestion

What is <span class="bg-green-300 p-1">improved</span>?

<video controls>
  <source src="/images/vjS5Xr.mp4" type="video/mp4" />
</video>
<!-- Configuration 
composition events https://github.com/oist/oist-www/issues94#issuecomment-1009660884
-->`,frontmatter:{srcSequence:"./section-3.md"},note:`In this clip, we can find the English typing works normally, 
and the Japanese word for Corona, only queries the results when the word is complete.

<b>Next slide >>>>></b>`,index:33,start:421,end:440,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`
# Autocomplete search suggestion

What is <span class="bg-green-300 p-1">improved</span>?

<video controls>
  <source src="/images/vjS5Xr.mp4" type="video/mp4" />
</video>
<!-- Configuration 
composition events https://github.com/oist/oist-www/issues94#issuecomment-1009660884
-->

<!--
In this clip, we can find the English typing works normally, 
and the Japanese word for Corona, only queries the results when the word is complete.

<b>Next slide >>>>></b>
-->
`,title:"Autocomplete search suggestion",level:1,content:`# Autocomplete search suggestion

What is <span class="bg-green-300 p-1">improved</span>?

<video controls>
  <source src="/images/vjS5Xr.mp4" type="video/mp4" />
</video>
<!-- Configuration 
composition events https://github.com/oist/oist-www/issues94#issuecomment-1009660884
-->`,frontmatter:{},note:`In this clip, we can find the English typing works normally, 
and the Japanese word for Corona, only queries the results when the word is complete.

<b>Next slide >>>>></b>`,index:14,start:421,end:440},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>In this clip, we can find the English typing works normally,
and the Japanese word for Corona, only queries the results when the word is complete.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:w8,meta:{srcSequence:"./section-3.md",slide:{raw:`
# CompositionEvent 

Implement \`CompositionEvent\` to avoid trigger search too early.

<div class="grid grid-cols-2 gap-2">
  <div>

\`\`\`javascript {all|9-13|2-7}
  inputEle.on('input, compositinoend', function (event) {
    if (event.type == 'compositionend') {
      compositionActive = false; 
    }
    if (compositionActive) { return; }

    // Do autocomplete AJAX call
    
  }).on('compositionstart', function () {
    compositionActive = true;
  }).on('compositionupdate', function() {
    compositionActive = true;
  })
\`\`\`
  </div>
  <div>
    <iframe class="col-span-2 bg-blue-600/30 p-4 w-full h-60" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/compositionstart_event/_sample_.live_example.html" width="960" height="480"></iframe>
  </div>
  <div class="col-span-2">

* [MDN Web API](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent)
* [Core #2823589: Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
</div>
</div>


<!-- 
  // Demo with NEKO ネコ

  // TODO find the trace of autocomplete js in Drupal 8 or even 7

In Drupal, there are autocomplete fields for tags or referencing entities. 
The core had the issue before, but it was fixed in 2016, 
thanks to the Drupal contributors.

Mainly, it is the CompositionEvent that helps us identify the special event when the typing is finished. 
When we created this custom autocomplete search box, we had to implement the event as well.

1. First, we detect the starting point of the CJK input method.
1. Next, we wait until the word is decided, as we see the compositionEnd event happen.
1. Finally, we send the AJAX request.

<b>Next slide >>>>></b>
-->
`,title:"CompositionEvent",level:1,content:`# CompositionEvent 

Implement \`CompositionEvent\` to avoid trigger search too early.

<div class="grid grid-cols-2 gap-2">
  <div>

\`\`\`javascript {all|9-13|2-7}
  inputEle.on('input, compositinoend', function (event) {
    if (event.type == 'compositionend') {
      compositionActive = false; 
    }
    if (compositionActive) { return; }

    // Do autocomplete AJAX call
    
  }).on('compositionstart', function () {
    compositionActive = true;
  }).on('compositionupdate', function() {
    compositionActive = true;
  })
\`\`\`
  </div>
  <div>
    <iframe class="col-span-2 bg-blue-600/30 p-4 w-full h-60" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/compositionstart_event/_sample_.live_example.html" width="960" height="480"></iframe>
  </div>
  <div class="col-span-2">

* [MDN Web API](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent)
* [Core #2823589: Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
</div>
</div>`,frontmatter:{srcSequence:"./section-3.md"},note:`// Demo with NEKO ネコ

  // TODO find the trace of autocomplete js in Drupal 8 or even 7

In Drupal, there are autocomplete fields for tags or referencing entities. 
The core had the issue before, but it was fixed in 2016, 
thanks to the Drupal contributors.

Mainly, it is the CompositionEvent that helps us identify the special event when the typing is finished. 
When we created this custom autocomplete search box, we had to implement the event as well.

1. First, we detect the starting point of the CJK input method.
1. Next, we wait until the word is decided, as we see the compositionEnd event happen.
1. Finally, we send the AJAX request.

<b>Next slide >>>>></b>`,index:34,start:441,end:495,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",raw:`
# CompositionEvent 

Implement \`CompositionEvent\` to avoid trigger search too early.

<div class="grid grid-cols-2 gap-2">
  <div>

\`\`\`javascript {all|9-13|2-7}
  inputEle.on('input, compositinoend', function (event) {
    if (event.type == 'compositionend') {
      compositionActive = false; 
    }
    if (compositionActive) { return; }

    // Do autocomplete AJAX call
    
  }).on('compositionstart', function () {
    compositionActive = true;
  }).on('compositionupdate', function() {
    compositionActive = true;
  })
\`\`\`
  </div>
  <div>
    <iframe class="col-span-2 bg-blue-600/30 p-4 w-full h-60" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/compositionstart_event/_sample_.live_example.html" width="960" height="480"></iframe>
  </div>
  <div class="col-span-2">

* [MDN Web API](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent)
* [Core #2823589: Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
</div>
</div>


<!-- 
  // Demo with NEKO ネコ

  // TODO find the trace of autocomplete js in Drupal 8 or even 7

In Drupal, there are autocomplete fields for tags or referencing entities. 
The core had the issue before, but it was fixed in 2016, 
thanks to the Drupal contributors.

Mainly, it is the CompositionEvent that helps us identify the special event when the typing is finished. 
When we created this custom autocomplete search box, we had to implement the event as well.

1. First, we detect the starting point of the CJK input method.
1. Next, we wait until the word is decided, as we see the compositionEnd event happen.
1. Finally, we send the AJAX request.

<b>Next slide >>>>></b>
-->
`,title:"CompositionEvent",level:1,content:`# CompositionEvent 

Implement \`CompositionEvent\` to avoid trigger search too early.

<div class="grid grid-cols-2 gap-2">
  <div>

\`\`\`javascript {all|9-13|2-7}
  inputEle.on('input, compositinoend', function (event) {
    if (event.type == 'compositionend') {
      compositionActive = false; 
    }
    if (compositionActive) { return; }

    // Do autocomplete AJAX call
    
  }).on('compositionstart', function () {
    compositionActive = true;
  }).on('compositionupdate', function() {
    compositionActive = true;
  })
\`\`\`
  </div>
  <div>
    <iframe class="col-span-2 bg-blue-600/30 p-4 w-full h-60" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/compositionstart_event/_sample_.live_example.html" width="960" height="480"></iframe>
  </div>
  <div class="col-span-2">

* [MDN Web API](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent)
* [Core #2823589: Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
</div>
</div>`,frontmatter:{},note:`// Demo with NEKO ネコ

  // TODO find the trace of autocomplete js in Drupal 8 or even 7

In Drupal, there are autocomplete fields for tags or referencing entities. 
The core had the issue before, but it was fixed in 2016, 
thanks to the Drupal contributors.

Mainly, it is the CompositionEvent that helps us identify the special event when the typing is finished. 
When we created this custom autocomplete search box, we had to implement the event as well.

1. First, we detect the starting point of the CJK input method.
1. Next, we wait until the word is decided, as we see the compositionEnd event happen.
1. Finally, we send the AJAX request.

<b>Next slide >>>>></b>`,index:15,start:441,end:495},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-3.md",notesHTML:`<p>// Demo with NEKO ネコ</p>
<p>// TODO find the trace of autocomplete js in Drupal 8 or even 7</p>
<p>In Drupal, there are autocomplete fields for tags or referencing entities.
The core had the issue before, but it was fixed in 2016,
thanks to the Drupal contributors.</p>
<p>Mainly, it is the CompositionEvent that helps us identify the special event when the typing is finished.
When we created this custom autocomplete search box, we had to implement the event as well.</p>
<ol>
<li>First, we detect the starting point of the CJK input method.</li>
<li>Next, we wait until the word is decided, as we see the compositionEnd event happen.</li>
<li>Finally, we send the AJAX request.</li>
</ol>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:k8,meta:{layout:"intro-image",image:"/images/sorting-soraya-irving.jpg",title:"===== Issue in CJK: Sorting =====",srcSequence:"./section-4.md",slide:{raw:null,title:"===== Issue in CJK: Sorting =====",level:1,content:`<div class="hidden">

# ===== Issue in CJK: Sorting =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1 class="text-blue-800">Sorting</h1>
  <p class="text-blue-500">Color, Shape, Size?</p>
</div>

<!--
Photo by Soraya Irving on Unsplash
https://unsplash.com/photos/AGtksbL8z2c
-->`,frontmatter:{layout:"intro-image",image:"/images/sorting-soraya-irving.jpg",title:"===== Issue in CJK: Sorting =====",srcSequence:"./section-4.md"},note:`After the typing issue, let's see the sorting issue.

In English, we often sort using the alphabet for titles of articles, taxonomy tags, or names, for example.

However, it is entirely different when sorting in Japanese or Chinese.

<b>Next slide >>>>></b>`,index:35,start:0,end:36,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`---
layout: intro-image
image: /images/sorting-soraya-irving.jpg
---

<div class="hidden">

# ===== Issue in CJK: Sorting =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1 class="text-blue-800">Sorting</h1>
  <p class="text-blue-500">Color, Shape, Size?</p>
</div>

<!--
Photo by Soraya Irving on Unsplash
https://unsplash.com/photos/AGtksbL8z2c
-->

<!--
After the typing issue, let's see the sorting issue.

In English, we often sort using the alphabet for titles of articles, taxonomy tags, or names, for example.

However, it is entirely different when sorting in Japanese or Chinese.

<b>Next slide >>>>></b>
-->
`,title:"===== Issue in CJK: Sorting =====",level:1,content:`<div class="hidden">

# ===== Issue in CJK: Sorting =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1 class="text-blue-800">Sorting</h1>
  <p class="text-blue-500">Color, Shape, Size?</p>
</div>

<!--
Photo by Soraya Irving on Unsplash
https://unsplash.com/photos/AGtksbL8z2c
-->`,frontmatter:{layout:"intro-image",image:"/images/sorting-soraya-irving.jpg",title:"===== Issue in CJK: Sorting ====="},note:`After the typing issue, let's see the sorting issue.

In English, we often sort using the alphabet for titles of articles, taxonomy tags, or names, for example.

However, it is entirely different when sorting in Japanese or Chinese.

<b>Next slide >>>>></b>`,index:0,start:0,end:36},inline:{raw:`---
src: ./section-4.md
---
<!-- this page will be loaded from './section-4.md' -->
# 4. Important translation issues - Sorting
`,title:"4. Important translation issues - Sorting",level:1,content:`<!-- this page will be loaded from './section-4.md' -->
# 4. Important translation issues - Sorting`,frontmatter:{},index:6,start:182,end:188},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>After the typing issue, let's see the sorting issue.</p>
<p>In English, we often sort using the alphabet for titles of articles, taxonomy tags, or names, for example.</p>
<p>However, it is entirely different when sorting in Japanese or Chinese.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:j8,meta:{srcSequence:"./section-4.md",slide:{raw:`
<div class="hidden">

# Sorting - 五十音 (Gojūon)
</div>


<div class="grid grid-cols-[1fr,3fr]">
  <div class="flex flex-col justify-center">
    <h1>五十音 (Gojūon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 flex flex-row space-x-4">
    <div>
        <img src="/images/2022-09-04-17-28-34.png" class="h-118 w-auto" />
        <h4 class="mt-2">Hiragana</h4>
    </div>
    <div>
        <img src="/images/2022-09-06-17-51-19.png" class="h-118 w-auto" />
        <h4 class="mt-2">Katagana</h4>
    </div>
  </div>
</div>

<!--
In Japanese language, most of us know it is sort with the order of the Gojuon.

<b>Next slide >>>>></b>
-->
`,title:"Sorting - 五十音 (Gojūon)",level:1,content:`<div class="hidden">

# Sorting - 五十音 (Gojūon)
</div>


<div class="grid grid-cols-[1fr,3fr]">
  <div class="flex flex-col justify-center">
    <h1>五十音 (Gojūon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 flex flex-row space-x-4">
    <div>
        <img src="/images/2022-09-04-17-28-34.png" class="h-118 w-auto" />
        <h4 class="mt-2">Hiragana</h4>
    </div>
    <div>
        <img src="/images/2022-09-06-17-51-19.png" class="h-118 w-auto" />
        <h4 class="mt-2">Katagana</h4>
    </div>
  </div>
</div>`,frontmatter:{srcSequence:"./section-4.md"},note:`In Japanese language, most of us know it is sort with the order of the Gojuon.

<b>Next slide >>>>></b>`,index:36,start:37,end:67,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`
<div class="hidden">

# Sorting - 五十音 (Gojūon)
</div>


<div class="grid grid-cols-[1fr,3fr]">
  <div class="flex flex-col justify-center">
    <h1>五十音 (Gojūon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 flex flex-row space-x-4">
    <div>
        <img src="/images/2022-09-04-17-28-34.png" class="h-118 w-auto" />
        <h4 class="mt-2">Hiragana</h4>
    </div>
    <div>
        <img src="/images/2022-09-06-17-51-19.png" class="h-118 w-auto" />
        <h4 class="mt-2">Katagana</h4>
    </div>
  </div>
</div>

<!--
In Japanese language, most of us know it is sort with the order of the Gojuon.

<b>Next slide >>>>></b>
-->
`,title:"Sorting - 五十音 (Gojūon)",level:1,content:`<div class="hidden">

# Sorting - 五十音 (Gojūon)
</div>


<div class="grid grid-cols-[1fr,3fr]">
  <div class="flex flex-col justify-center">
    <h1>五十音 (Gojūon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 flex flex-row space-x-4">
    <div>
        <img src="/images/2022-09-04-17-28-34.png" class="h-118 w-auto" />
        <h4 class="mt-2">Hiragana</h4>
    </div>
    <div>
        <img src="/images/2022-09-06-17-51-19.png" class="h-118 w-auto" />
        <h4 class="mt-2">Katagana</h4>
    </div>
  </div>
</div>`,frontmatter:{},note:`In Japanese language, most of us know it is sort with the order of the Gojuon.

<b>Next slide >>>>></b>`,index:1,start:37,end:67},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>In Japanese language, most of us know it is sort with the order of the Gojuon.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:D8,meta:{srcSequence:"./section-4.md",slide:{raw:`
<div class="hidden">

# Sorting - 漢字 (Kanji)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>漢字 (Kanji)</h1>
    <h3>Characters in Japanese</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/raku-japanese-character.png" class="h-124 w-auto" />
  </div>
</div>

<!--
And also there are Kanji or Chinese Character, too.

<b>Next slide >>>>></b>
-->
`,title:"Sorting - 漢字 (Kanji)",level:1,content:`<div class="hidden">

# Sorting - 漢字 (Kanji)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>漢字 (Kanji)</h1>
    <h3>Characters in Japanese</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/raku-japanese-character.png" class="h-124 w-auto" />
  </div>
</div>`,frontmatter:{srcSequence:"./section-4.md"},note:`And also there are Kanji or Chinese Character, too.

<b>Next slide >>>>></b>`,index:37,start:68,end:91,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`
<div class="hidden">

# Sorting - 漢字 (Kanji)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>漢字 (Kanji)</h1>
    <h3>Characters in Japanese</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/raku-japanese-character.png" class="h-124 w-auto" />
  </div>
</div>

<!--
And also there are Kanji or Chinese Character, too.

<b>Next slide >>>>></b>
-->
`,title:"Sorting - 漢字 (Kanji)",level:1,content:`<div class="hidden">

# Sorting - 漢字 (Kanji)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>漢字 (Kanji)</h1>
    <h3>Characters in Japanese</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/raku-japanese-character.png" class="h-124 w-auto" />
  </div>
</div>`,frontmatter:{},note:`And also there are Kanji or Chinese Character, too.

<b>Next slide >>>>></b>`,index:2,start:68,end:91},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>And also there are Kanji or Chinese Character, too.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:R8,meta:{srcSequence:"./section-4.md",slide:{raw:`
<div class="hidden">

# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8 mt-8">
  <div class="flex flex-col justify-center">

\`\`\`ts {all|8,11,15|2,6|3,5,9|4,7,10,12-14,16}
$array = [
  'あまガミ', // Hiragana
  'ウィーン', // Katagana
  '荻野', // Kanji
  'マーティン',
  'ういーん',
  '中村',
  'Ülf', // Latin & Number
  'レアード',
  '角中',
  'OKEON',
  '井上',
  '藤岡',
  '佐藤',
  'SHIMA',
  '岩下',
];
\`\`\`
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>


<!--
When we have an array composed of Latin letters, numbers, Hiragana, Katakana, and Kanji, 
how do we sort them correctly?

<b>Next slide >>>>></b>
-->`,title:"Sorting - 五十音 (Gojūon) Sorting",level:1,content:`<div class="hidden">

# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8 mt-8">
  <div class="flex flex-col justify-center">

\`\`\`ts {all|8,11,15|2,6|3,5,9|4,7,10,12-14,16}
$array = [
  'あまガミ', // Hiragana
  'ウィーン', // Katagana
  '荻野', // Kanji
  'マーティン',
  'ういーん',
  '中村',
  'Ülf', // Latin & Number
  'レアード',
  '角中',
  'OKEON',
  '井上',
  '藤岡',
  '佐藤',
  'SHIMA',
  '岩下',
];
\`\`\`
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>`,frontmatter:{srcSequence:"./section-4.md"},note:`When we have an array composed of Latin letters, numbers, Hiragana, Katakana, and Kanji, 
how do we sort them correctly?

<b>Next slide >>>>></b>`,index:38,start:92,end:138,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`
<div class="hidden">

# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8 mt-8">
  <div class="flex flex-col justify-center">

\`\`\`ts {all|8,11,15|2,6|3,5,9|4,7,10,12-14,16}
$array = [
  'あまガミ', // Hiragana
  'ウィーン', // Katagana
  '荻野', // Kanji
  'マーティン',
  'ういーん',
  '中村',
  'Ülf', // Latin & Number
  'レアード',
  '角中',
  'OKEON',
  '井上',
  '藤岡',
  '佐藤',
  'SHIMA',
  '岩下',
];
\`\`\`
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>


<!--
When we have an array composed of Latin letters, numbers, Hiragana, Katakana, and Kanji, 
how do we sort them correctly?

<b>Next slide >>>>></b>
-->`,title:"Sorting - 五十音 (Gojūon) Sorting",level:1,content:`<div class="hidden">

# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8 mt-8">
  <div class="flex flex-col justify-center">

\`\`\`ts {all|8,11,15|2,6|3,5,9|4,7,10,12-14,16}
$array = [
  'あまガミ', // Hiragana
  'ウィーン', // Katagana
  '荻野', // Kanji
  'マーティン',
  'ういーん',
  '中村',
  'Ülf', // Latin & Number
  'レアード',
  '角中',
  'OKEON',
  '井上',
  '藤岡',
  '佐藤',
  'SHIMA',
  '岩下',
];
\`\`\`
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>`,frontmatter:{},note:`When we have an array composed of Latin letters, numbers, Hiragana, Katakana, and Kanji, 
how do we sort them correctly?

<b>Next slide >>>>></b>`,index:3,start:92,end:138},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>When we have an array composed of Latin letters, numbers, Hiragana, Katakana, and Kanji,
how do we sort them correctly?</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:Z8,meta:{srcSequence:"./section-4.md",slide:{raw:`
<div class="hidden">

# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="flex flex-col justify-end">

\`\`\`ts
$array = [
  'あまガミ', // Hiragana
  'ウィーン', // Katagana
  '荻野', // Kanji
  'マーティン',
  'ういーん',
  '中村',
  'Ülf', // Latin & Number
  'レアード',
  '角中',
  'OKEON',
  '井上',
  '藤岡',
  '佐藤',
  'SHIMA',
  '岩下',
];
\`\`\`
  </div>
  <div class="flex-1 ">

\`\`\`ts {all|4-6|7-8|9-11|12-18|all}
// Result
Array
(
    [0] => OKEON
    [1] => SHIMA
    [2] => Ülf
    [3] => あまガミ
    [4] => ういーん
    [5] => ウィーン
    [6] => マーティン
    [7] => レアード
    [8] => 中村
    [9] => 井上
    [10] => 佐藤
    [11] => 岩下
    [12] => 荻野
    [13] => 藤岡
    [14] => 角中
)
\`\`\`
  </div>
</div>

<!--
The ideal order in Japanese language should looks like this on the right.
Starting with Symbols, Numbers, Alphabets like in English.

And than Hiragana, Katagana, the last part will be the Kanji.

Hiragana and Katagana follows the order of Gojuon.
What is the order in Kanji?

<b>Next slide >>>>></b>
-->`,title:"Sorting - 五十音 (Gojūon) Sorting",level:1,content:`<div class="hidden">

# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="flex flex-col justify-end">

\`\`\`ts
$array = [
  'あまガミ', // Hiragana
  'ウィーン', // Katagana
  '荻野', // Kanji
  'マーティン',
  'ういーん',
  '中村',
  'Ülf', // Latin & Number
  'レアード',
  '角中',
  'OKEON',
  '井上',
  '藤岡',
  '佐藤',
  'SHIMA',
  '岩下',
];
\`\`\`
  </div>
  <div class="flex-1 ">

\`\`\`ts {all|4-6|7-8|9-11|12-18|all}
// Result
Array
(
    [0] => OKEON
    [1] => SHIMA
    [2] => Ülf
    [3] => あまガミ
    [4] => ういーん
    [5] => ウィーン
    [6] => マーティン
    [7] => レアード
    [8] => 中村
    [9] => 井上
    [10] => 佐藤
    [11] => 岩下
    [12] => 荻野
    [13] => 藤岡
    [14] => 角中
)
\`\`\`
  </div>
</div>`,frontmatter:{srcSequence:"./section-4.md"},note:`The ideal order in Japanese language should looks like this on the right.
Starting with Symbols, Numbers, Alphabets like in English.

And than Hiragana, Katagana, the last part will be the Kanji.

Hiragana and Katagana follows the order of Gojuon.
What is the order in Kanji?

<b>Next slide >>>>></b>`,index:39,start:139,end:210,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`
<div class="hidden">

# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="flex flex-col justify-end">

\`\`\`ts
$array = [
  'あまガミ', // Hiragana
  'ウィーン', // Katagana
  '荻野', // Kanji
  'マーティン',
  'ういーん',
  '中村',
  'Ülf', // Latin & Number
  'レアード',
  '角中',
  'OKEON',
  '井上',
  '藤岡',
  '佐藤',
  'SHIMA',
  '岩下',
];
\`\`\`
  </div>
  <div class="flex-1 ">

\`\`\`ts {all|4-6|7-8|9-11|12-18|all}
// Result
Array
(
    [0] => OKEON
    [1] => SHIMA
    [2] => Ülf
    [3] => あまガミ
    [4] => ういーん
    [5] => ウィーン
    [6] => マーティン
    [7] => レアード
    [8] => 中村
    [9] => 井上
    [10] => 佐藤
    [11] => 岩下
    [12] => 荻野
    [13] => 藤岡
    [14] => 角中
)
\`\`\`
  </div>
</div>

<!--
The ideal order in Japanese language should looks like this on the right.
Starting with Symbols, Numbers, Alphabets like in English.

And than Hiragana, Katagana, the last part will be the Kanji.

Hiragana and Katagana follows the order of Gojuon.
What is the order in Kanji?

<b>Next slide >>>>></b>
-->`,title:"Sorting - 五十音 (Gojūon) Sorting",level:1,content:`<div class="hidden">

# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="flex flex-col justify-end">

\`\`\`ts
$array = [
  'あまガミ', // Hiragana
  'ウィーン', // Katagana
  '荻野', // Kanji
  'マーティン',
  'ういーん',
  '中村',
  'Ülf', // Latin & Number
  'レアード',
  '角中',
  'OKEON',
  '井上',
  '藤岡',
  '佐藤',
  'SHIMA',
  '岩下',
];
\`\`\`
  </div>
  <div class="flex-1 ">

\`\`\`ts {all|4-6|7-8|9-11|12-18|all}
// Result
Array
(
    [0] => OKEON
    [1] => SHIMA
    [2] => Ülf
    [3] => あまガミ
    [4] => ういーん
    [5] => ウィーン
    [6] => マーティン
    [7] => レアード
    [8] => 中村
    [9] => 井上
    [10] => 佐藤
    [11] => 岩下
    [12] => 荻野
    [13] => 藤岡
    [14] => 角中
)
\`\`\`
  </div>
</div>`,frontmatter:{},note:`The ideal order in Japanese language should looks like this on the right.
Starting with Symbols, Numbers, Alphabets like in English.

And than Hiragana, Katagana, the last part will be the Kanji.

Hiragana and Katagana follows the order of Gojuon.
What is the order in Kanji?

<b>Next slide >>>>></b>`,index:4,start:139,end:210},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>The ideal order in Japanese language should looks like this on the right.
Starting with Symbols, Numbers, Alphabets like in English.</p>
<p>And than Hiragana, Katagana, the last part will be the Kanji.</p>
<p>Hiragana and Katagana follows the order of Gojuon.
What is the order in Kanji?</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:oF,meta:{srcSequence:"./section-4.md",slide:{raw:`
# Sorting

Sort in Japanese

<div class="grid grid-cols-[2fr,1fr] gap-8 mt-12">
  <div class="flex flex-col justify-center">
    
\`\`\`ts
// UTF-8
["中村", "井上", "佐藤", "岩下", "荻野", "藤岡", "角中"]
[U+4E2D, U+4E95, U+4F50, U+5CA9, U+837B, U+85E4, U+89D2]
\`\`\`

  </div>
  <div class="flex-1 ">
    
  </div>
</div>



<!-- 
If we use the sort() function directly, 
it will sort the array based on the index number of each character in the Unicode table. 

However, this doesn't make sense for Japanese speakers, 
as the order of the characters doesn't reflect the proper way to sort them in the language.

<b>Next slide >>>>></b>
-->
`,title:"Sorting",level:1,content:`# Sorting

Sort in Japanese

<div class="grid grid-cols-[2fr,1fr] gap-8 mt-12">
  <div class="flex flex-col justify-center">
    
\`\`\`ts
// UTF-8
["中村", "井上", "佐藤", "岩下", "荻野", "藤岡", "角中"]
[U+4E2D, U+4E95, U+4F50, U+5CA9, U+837B, U+85E4, U+89D2]
\`\`\`

  </div>
  <div class="flex-1 ">
    
  </div>
</div>`,frontmatter:{srcSequence:"./section-4.md"},note:`If we use the sort() function directly, 
it will sort the array based on the index number of each character in the Unicode table. 

However, this doesn't make sense for Japanese speakers, 
as the order of the characters doesn't reflect the proper way to sort them in the language.

<b>Next slide >>>>></b>`,index:40,start:211,end:243,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`
# Sorting

Sort in Japanese

<div class="grid grid-cols-[2fr,1fr] gap-8 mt-12">
  <div class="flex flex-col justify-center">
    
\`\`\`ts
// UTF-8
["中村", "井上", "佐藤", "岩下", "荻野", "藤岡", "角中"]
[U+4E2D, U+4E95, U+4F50, U+5CA9, U+837B, U+85E4, U+89D2]
\`\`\`

  </div>
  <div class="flex-1 ">
    
  </div>
</div>



<!-- 
If we use the sort() function directly, 
it will sort the array based on the index number of each character in the Unicode table. 

However, this doesn't make sense for Japanese speakers, 
as the order of the characters doesn't reflect the proper way to sort them in the language.

<b>Next slide >>>>></b>
-->
`,title:"Sorting",level:1,content:`# Sorting

Sort in Japanese

<div class="grid grid-cols-[2fr,1fr] gap-8 mt-12">
  <div class="flex flex-col justify-center">
    
\`\`\`ts
// UTF-8
["中村", "井上", "佐藤", "岩下", "荻野", "藤岡", "角中"]
[U+4E2D, U+4E95, U+4F50, U+5CA9, U+837B, U+85E4, U+89D2]
\`\`\`

  </div>
  <div class="flex-1 ">
    
  </div>
</div>`,frontmatter:{},note:`If we use the sort() function directly, 
it will sort the array based on the index number of each character in the Unicode table. 

However, this doesn't make sense for Japanese speakers, 
as the order of the characters doesn't reflect the proper way to sort them in the language.

<b>Next slide >>>>></b>`,index:5,start:211,end:243},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>If we use the sort() function directly,
it will sort the array based on the index number of each character in the Unicode table.</p>
<p>However, this doesn't make sense for Japanese speakers,
as the order of the characters doesn't reflect the proper way to sort them in the language.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:hF,meta:{srcSequence:"./section-4.md",slide:{raw:`
# Sorting

Sort in Japanese

// JavaScript
\`\`\`ts
arr.sort((a, b) => a.localeCompare(b, 'ja-JP', { ignorePunctuation: true }));
console.log(arr);

Array => ["OKEON", "SHIMA", "あまガミ", "ウィーン", "ういーん", "レアード", 
          "井上",   "荻野",   "角中",     "岩下",      "佐藤", "中村",      "藤岡"]
       // "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]
\`\`\`

// PHP
\`\`\`php
function sortWithLocale($arr) {
  Collator::create('ja_JP.utf8')->sort($arr, SORT_LOCALE_STRING);
  return $arr;
}

Array => ["OKEON", "SHIMA", "あまガミ", "ういーん", "ウィーン", "レアード",
          "井上", "荻野", "角中", "岩下", "佐藤", "中村", "藤岡"]
\`\`\`


<!--
One solution is to use the JavaScript function localeCompare(). 
This function sorts Kanji based on the pronunciation of the first character, 
and then the next character if the first character is the same. 

In PHP, there is a similar function, 
but it is recommended to use a database query for better sorting results from the backend.

<b>Next slide >>>>></b>

岩下 Iwashita 被判斷成 Gan shita
フリガナ
Keiko kono
河野　かわの　こうの

-->

`,title:"Sorting",level:1,content:`# Sorting

Sort in Japanese

// JavaScript
\`\`\`ts
arr.sort((a, b) => a.localeCompare(b, 'ja-JP', { ignorePunctuation: true }));
console.log(arr);

Array => ["OKEON", "SHIMA", "あまガミ", "ウィーン", "ういーん", "レアード", 
          "井上",   "荻野",   "角中",     "岩下",      "佐藤", "中村",      "藤岡"]
       // "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]
\`\`\`

// PHP
\`\`\`php
function sortWithLocale($arr) {
  Collator::create('ja_JP.utf8')->sort($arr, SORT_LOCALE_STRING);
  return $arr;
}

Array => ["OKEON", "SHIMA", "あまガミ", "ういーん", "ウィーン", "レアード",
          "井上", "荻野", "角中", "岩下", "佐藤", "中村", "藤岡"]
\`\`\``,frontmatter:{srcSequence:"./section-4.md"},note:`One solution is to use the JavaScript function localeCompare(). 
This function sorts Kanji based on the pronunciation of the first character, 
and then the next character if the first character is the same. 

In PHP, there is a similar function, 
but it is recommended to use a database query for better sorting results from the backend.

<b>Next slide >>>>></b>

岩下 Iwashita 被判斷成 Gan shita
フリガナ
Keiko kono
河野　かわの　こうの`,index:41,start:244,end:289,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`
# Sorting

Sort in Japanese

// JavaScript
\`\`\`ts
arr.sort((a, b) => a.localeCompare(b, 'ja-JP', { ignorePunctuation: true }));
console.log(arr);

Array => ["OKEON", "SHIMA", "あまガミ", "ウィーン", "ういーん", "レアード", 
          "井上",   "荻野",   "角中",     "岩下",      "佐藤", "中村",      "藤岡"]
       // "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]
\`\`\`

// PHP
\`\`\`php
function sortWithLocale($arr) {
  Collator::create('ja_JP.utf8')->sort($arr, SORT_LOCALE_STRING);
  return $arr;
}

Array => ["OKEON", "SHIMA", "あまガミ", "ういーん", "ウィーン", "レアード",
          "井上", "荻野", "角中", "岩下", "佐藤", "中村", "藤岡"]
\`\`\`


<!--
One solution is to use the JavaScript function localeCompare(). 
This function sorts Kanji based on the pronunciation of the first character, 
and then the next character if the first character is the same. 

In PHP, there is a similar function, 
but it is recommended to use a database query for better sorting results from the backend.

<b>Next slide >>>>></b>

岩下 Iwashita 被判斷成 Gan shita
フリガナ
Keiko kono
河野　かわの　こうの

-->

`,title:"Sorting",level:1,content:`# Sorting

Sort in Japanese

// JavaScript
\`\`\`ts
arr.sort((a, b) => a.localeCompare(b, 'ja-JP', { ignorePunctuation: true }));
console.log(arr);

Array => ["OKEON", "SHIMA", "あまガミ", "ウィーン", "ういーん", "レアード", 
          "井上",   "荻野",   "角中",     "岩下",      "佐藤", "中村",      "藤岡"]
       // "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]
\`\`\`

// PHP
\`\`\`php
function sortWithLocale($arr) {
  Collator::create('ja_JP.utf8')->sort($arr, SORT_LOCALE_STRING);
  return $arr;
}

Array => ["OKEON", "SHIMA", "あまガミ", "ういーん", "ウィーン", "レアード",
          "井上", "荻野", "角中", "岩下", "佐藤", "中村", "藤岡"]
\`\`\``,frontmatter:{},note:`One solution is to use the JavaScript function localeCompare(). 
This function sorts Kanji based on the pronunciation of the first character, 
and then the next character if the first character is the same. 

In PHP, there is a similar function, 
but it is recommended to use a database query for better sorting results from the backend.

<b>Next slide >>>>></b>

岩下 Iwashita 被判斷成 Gan shita
フリガナ
Keiko kono
河野　かわの　こうの`,index:6,start:244,end:289},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>One solution is to use the JavaScript function localeCompare().
This function sorts Kanji based on the pronunciation of the first character,
and then the next character if the first character is the same.</p>
<p>In PHP, there is a similar function,
but it is recommended to use a database query for better sorting results from the backend.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
<p>岩下 Iwashita 被判斷成 Gan shita
フリガナ
Keiko kono
河野　かわの　こうの</p>
`,id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:_F,meta:{srcSequence:"./section-4.md",slide:{raw:`
<div class="hidden">
# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8">
  <div class="flex flex-col justify-center">
    
\`\`\`ts {all|2,3|2,4}
// localeCompare()
["井上",  "荻野",    "角中",    "岩下",      "佐藤",    "中村",    "藤岡"]
[い(1-2), おぎ(1-5), かく(2-1), いわ(1-2),   さ(3-1), なか(5-1), ふじ(6-3)]
[い(1-2), おぎ(1-5), かく(2-1), がん(2-1.1), さ(3-1), なか(5-1), ふじ(6-3)]
\`\`\`

  <div class="mt-8 grid grid-cols-3 gap-2 content-center">
    <div class="text-xl text-sky-500 font-bold row-span-2 text-right leading-compact">
      河野
    </div>
    <div class="grid grid-rows-2 gap-2">
      <div>
        かわの ✅
      </div>
      <div>
        こうの ✅
      </div>
    </div>
  </div>

  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>

<!--
However this is not perfect,
there is one word mis-placed in the middle. 岩下

It is because the Kanji has another pronounciation.
And the first character is read in an alternative way ”がん” rather than "いわ".

Another example, there is another last name can be called either かわの or こうの.

In Japanese or in Mandarin Chinese the character could have more than one pronounciation.

<b>Next slide >>>>></b>

日本漢字的音讀最為明顯，日本漢字的讀法一般有二個以上，是因不同時期、不同地方傳入的結果。 在普通話中亦間有取自遊牧民族等其他民族語言、梵語、其他漢語語言或方言的發音屬於此類。
-->
`,title:"Sorting - 五十音 (Gojūon) Sorting",level:1,content:`<div class="hidden">
# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8">
  <div class="flex flex-col justify-center">
    
\`\`\`ts {all|2,3|2,4}
// localeCompare()
["井上",  "荻野",    "角中",    "岩下",      "佐藤",    "中村",    "藤岡"]
[い(1-2), おぎ(1-5), かく(2-1), いわ(1-2),   さ(3-1), なか(5-1), ふじ(6-3)]
[い(1-2), おぎ(1-5), かく(2-1), がん(2-1.1), さ(3-1), なか(5-1), ふじ(6-3)]
\`\`\`

  <div class="mt-8 grid grid-cols-3 gap-2 content-center">
    <div class="text-xl text-sky-500 font-bold row-span-2 text-right leading-compact">
      河野
    </div>
    <div class="grid grid-rows-2 gap-2">
      <div>
        かわの ✅
      </div>
      <div>
        こうの ✅
      </div>
    </div>
  </div>

  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>`,frontmatter:{srcSequence:"./section-4.md"},note:`However this is not perfect,
there is one word mis-placed in the middle. 岩下

It is because the Kanji has another pronounciation.
And the first character is read in an alternative way ”がん” rather than "いわ".

Another example, there is another last name can be called either かわの or こうの.

In Japanese or in Mandarin Chinese the character could have more than one pronounciation.

<b>Next slide >>>>></b>

日本漢字的音讀最為明顯，日本漢字的讀法一般有二個以上，是因不同時期、不同地方傳入的結果。 在普通話中亦間有取自遊牧民族等其他民族語言、梵語、其他漢語語言或方言的發音屬於此類。`,index:42,start:290,end:346,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`
<div class="hidden">
# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8">
  <div class="flex flex-col justify-center">
    
\`\`\`ts {all|2,3|2,4}
// localeCompare()
["井上",  "荻野",    "角中",    "岩下",      "佐藤",    "中村",    "藤岡"]
[い(1-2), おぎ(1-5), かく(2-1), いわ(1-2),   さ(3-1), なか(5-1), ふじ(6-3)]
[い(1-2), おぎ(1-5), かく(2-1), がん(2-1.1), さ(3-1), なか(5-1), ふじ(6-3)]
\`\`\`

  <div class="mt-8 grid grid-cols-3 gap-2 content-center">
    <div class="text-xl text-sky-500 font-bold row-span-2 text-right leading-compact">
      河野
    </div>
    <div class="grid grid-rows-2 gap-2">
      <div>
        かわの ✅
      </div>
      <div>
        こうの ✅
      </div>
    </div>
  </div>

  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>

<!--
However this is not perfect,
there is one word mis-placed in the middle. 岩下

It is because the Kanji has another pronounciation.
And the first character is read in an alternative way ”がん” rather than "いわ".

Another example, there is another last name can be called either かわの or こうの.

In Japanese or in Mandarin Chinese the character could have more than one pronounciation.

<b>Next slide >>>>></b>

日本漢字的音讀最為明顯，日本漢字的讀法一般有二個以上，是因不同時期、不同地方傳入的結果。 在普通話中亦間有取自遊牧民族等其他民族語言、梵語、其他漢語語言或方言的發音屬於此類。
-->
`,title:"Sorting - 五十音 (Gojūon) Sorting",level:1,content:`<div class="hidden">
# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8">
  <div class="flex flex-col justify-center">
    
\`\`\`ts {all|2,3|2,4}
// localeCompare()
["井上",  "荻野",    "角中",    "岩下",      "佐藤",    "中村",    "藤岡"]
[い(1-2), おぎ(1-5), かく(2-1), いわ(1-2),   さ(3-1), なか(5-1), ふじ(6-3)]
[い(1-2), おぎ(1-5), かく(2-1), がん(2-1.1), さ(3-1), なか(5-1), ふじ(6-3)]
\`\`\`

  <div class="mt-8 grid grid-cols-3 gap-2 content-center">
    <div class="text-xl text-sky-500 font-bold row-span-2 text-right leading-compact">
      河野
    </div>
    <div class="grid grid-rows-2 gap-2">
      <div>
        かわの ✅
      </div>
      <div>
        こうの ✅
      </div>
    </div>
  </div>

  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>`,frontmatter:{},note:`However this is not perfect,
there is one word mis-placed in the middle. 岩下

It is because the Kanji has another pronounciation.
And the first character is read in an alternative way ”がん” rather than "いわ".

Another example, there is another last name can be called either かわの or こうの.

In Japanese or in Mandarin Chinese the character could have more than one pronounciation.

<b>Next slide >>>>></b>

日本漢字的音讀最為明顯，日本漢字的讀法一般有二個以上，是因不同時期、不同地方傳入的結果。 在普通話中亦間有取自遊牧民族等其他民族語言、梵語、其他漢語語言或方言的發音屬於此類。`,index:7,start:290,end:346},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>However this is not perfect,
there is one word mis-placed in the middle. 岩下</p>
<p>It is because the Kanji has another pronounciation.
And the first character is read in an alternative way ”がん” rather than &quot;いわ&quot;.</p>
<p>Another example, there is another last name can be called either かわの or こうの.</p>
<p>In Japanese or in Mandarin Chinese the character could have more than one pronounciation.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
<p>日本漢字的音讀最為明顯，日本漢字的讀法一般有二個以上，是因不同時期、不同地方傳入的結果。 在普通話中亦間有取自遊牧民族等其他民族語言、梵語、其他漢語語言或方言的發音屬於此類。</p>
`,id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:IF,meta:{layout:"fact",srcSequence:"./section-4.md",slide:{raw:`---
layout: fact
---

# 600+

Same Japanese character different pronounciation

609 from 2136 common used Japanese kanji characters.

<div class="text-xs mt-20 text-gray-500">

1. 文科省常用漢字表 20101130： [PDF](https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/pdf/joyokanjihyo_20101130.pdf)
1. 常用漢字表 - 音訓表: [Website](http://jgrammar.life.coocan.jp/ja/data/onkun.htm)
1. Explaination about Kanji (EN): [Website](https://www.tofugu.com/japanese/onyomi-kunyomi/)
</div>

<!--
So how many characters has more than one pronounciation?
Japanese Kanji has more than 600 out of 2,000 common characters which has more than one pronounciations.
-->`,title:"600+",level:1,content:`# 600+

Same Japanese character different pronounciation

609 from 2136 common used Japanese kanji characters.

<div class="text-xs mt-20 text-gray-500">

1. 文科省常用漢字表 20101130： [PDF](https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/pdf/joyokanjihyo_20101130.pdf)
1. 常用漢字表 - 音訓表: [Website](http://jgrammar.life.coocan.jp/ja/data/onkun.htm)
1. Explaination about Kanji (EN): [Website](https://www.tofugu.com/japanese/onyomi-kunyomi/)
</div>`,frontmatter:{layout:"fact",srcSequence:"./section-4.md"},note:`So how many characters has more than one pronounciation?
Japanese Kanji has more than 600 out of 2,000 common characters which has more than one pronounciations.`,index:43,start:346,end:367,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`---
layout: fact
---

# 600+

Same Japanese character different pronounciation

609 from 2136 common used Japanese kanji characters.

<div class="text-xs mt-20 text-gray-500">

1. 文科省常用漢字表 20101130： [PDF](https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/pdf/joyokanjihyo_20101130.pdf)
1. 常用漢字表 - 音訓表: [Website](http://jgrammar.life.coocan.jp/ja/data/onkun.htm)
1. Explaination about Kanji (EN): [Website](https://www.tofugu.com/japanese/onyomi-kunyomi/)
</div>

<!--
So how many characters has more than one pronounciation?
Japanese Kanji has more than 600 out of 2,000 common characters which has more than one pronounciations.
-->`,title:"600+",level:1,content:`# 600+

Same Japanese character different pronounciation

609 from 2136 common used Japanese kanji characters.

<div class="text-xs mt-20 text-gray-500">

1. 文科省常用漢字表 20101130： [PDF](https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/pdf/joyokanjihyo_20101130.pdf)
1. 常用漢字表 - 音訓表: [Website](http://jgrammar.life.coocan.jp/ja/data/onkun.htm)
1. Explaination about Kanji (EN): [Website](https://www.tofugu.com/japanese/onyomi-kunyomi/)
</div>`,frontmatter:{layout:"fact"},note:`So how many characters has more than one pronounciation?
Japanese Kanji has more than 600 out of 2,000 common characters which has more than one pronounciations.`,index:8,start:346,end:367},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>So how many characters has more than one pronounciation?
Japanese Kanji has more than 600 out of 2,000 common characters which has more than one pronounciations.</p>
`,id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:PF,meta:{layout:"fact",srcSequence:"./section-4.md",slide:{raw:`---
layout: fact
---

<div class="hidden">

# 1263 -> 580
</div>

<h1><span class="line-through text-gray-300 dark:text-gray-800">1263</span> 580</h1>

Same Chinese character different pronounciation

580 from 5266 common used Chinese characters (traditional).

<div class="text-xs mt-20 text-gray-500">

There were 1263 characters have more than one pronounciation.<br />
In 2012, 683 was reviewed and combined into single pronounciation.

1. 教育部國語一字多音審訂表 2012 [PDF](https://language.moe.gov.tw/files/people_files/%E5%88%9D%E7%A8%BF.pdf)
</div>

<!--
In the official definition from the Ministry of Education of Taiwan, 
there were 1,263 out of 5,000 commonly used traditional Chinese characters. 
Around ten years ago, 
officials reviewed and merged many of them, reducing the number to 580.

<b>Next slide >>>>></b>
-->
`,title:"1263 -> 580",level:1,content:`<div class="hidden">

# 1263 -> 580
</div>

<h1><span class="line-through text-gray-300 dark:text-gray-800">1263</span> 580</h1>

Same Chinese character different pronounciation

580 from 5266 common used Chinese characters (traditional).

<div class="text-xs mt-20 text-gray-500">

There were 1263 characters have more than one pronounciation.<br />
In 2012, 683 was reviewed and combined into single pronounciation.

1. 教育部國語一字多音審訂表 2012 [PDF](https://language.moe.gov.tw/files/people_files/%E5%88%9D%E7%A8%BF.pdf)
</div>`,frontmatter:{layout:"fact",srcSequence:"./section-4.md"},note:`In the official definition from the Ministry of Education of Taiwan, 
there were 1,263 out of 5,000 commonly used traditional Chinese characters. 
Around ten years ago, 
officials reviewed and merged many of them, reducing the number to 580.

<b>Next slide >>>>></b>`,index:44,start:367,end:399,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`---
layout: fact
---

<div class="hidden">

# 1263 -> 580
</div>

<h1><span class="line-through text-gray-300 dark:text-gray-800">1263</span> 580</h1>

Same Chinese character different pronounciation

580 from 5266 common used Chinese characters (traditional).

<div class="text-xs mt-20 text-gray-500">

There were 1263 characters have more than one pronounciation.<br />
In 2012, 683 was reviewed and combined into single pronounciation.

1. 教育部國語一字多音審訂表 2012 [PDF](https://language.moe.gov.tw/files/people_files/%E5%88%9D%E7%A8%BF.pdf)
</div>

<!--
In the official definition from the Ministry of Education of Taiwan, 
there were 1,263 out of 5,000 commonly used traditional Chinese characters. 
Around ten years ago, 
officials reviewed and merged many of them, reducing the number to 580.

<b>Next slide >>>>></b>
-->
`,title:"1263 -> 580",level:1,content:`<div class="hidden">

# 1263 -> 580
</div>

<h1><span class="line-through text-gray-300 dark:text-gray-800">1263</span> 580</h1>

Same Chinese character different pronounciation

580 from 5266 common used Chinese characters (traditional).

<div class="text-xs mt-20 text-gray-500">

There were 1263 characters have more than one pronounciation.<br />
In 2012, 683 was reviewed and combined into single pronounciation.

1. 教育部國語一字多音審訂表 2012 [PDF](https://language.moe.gov.tw/files/people_files/%E5%88%9D%E7%A8%BF.pdf)
</div>`,frontmatter:{layout:"fact"},note:`In the official definition from the Ministry of Education of Taiwan, 
there were 1,263 out of 5,000 commonly used traditional Chinese characters. 
Around ten years ago, 
officials reviewed and merged many of them, reducing the number to 580.

<b>Next slide >>>>></b>`,index:9,start:367,end:399},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>In the official definition from the Ministry of Education of Taiwan,
there were 1,263 out of 5,000 commonly used traditional Chinese characters.
Around ten years ago,
officials reviewed and merged many of them, reducing the number to 580.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:WF,meta:{layout:"image-right",image:"/images/raku-japanese-character.png",srcSequence:"./section-4.md",slide:{raw:`---
layout: image-right
image: /images/raku-japanese-character.png
---

<div class="hidden">

# Sorting - Japanese pronunciation
</div>

# Kanji

Multiple pronunciation

![](/images/raku-japanese-pronounce.png)

1. ❶ Music
2. <span class="text-gray-500">❶ To play (music)</span>
3. ❷ Happy
4. ❸ To appreciate

<!--
Let's take the Kanji for example.

It has more pronounciation due to different cultural context.

Four of them are inherited from ancient Chinese in various eras,
and another four represent in the original Japanese language.

Next slides >>>>>
-->
`,title:"Sorting - Japanese pronunciation",level:1,content:`<div class="hidden">

# Sorting - Japanese pronunciation
</div>

# Kanji

Multiple pronunciation

![](/images/raku-japanese-pronounce.png)

1. ❶ Music
2. <span class="text-gray-500">❶ To play (music)</span>
3. ❷ Happy
4. ❸ To appreciate`,frontmatter:{layout:"image-right",image:"/images/raku-japanese-character.png",srcSequence:"./section-4.md"},note:`Let's take the Kanji for example.

It has more pronounciation due to different cultural context.

Four of them are inherited from ancient Chinese in various eras,
and another four represent in the original Japanese language.

Next slides >>>>>`,index:45,start:399,end:431,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`---
layout: image-right
image: /images/raku-japanese-character.png
---

<div class="hidden">

# Sorting - Japanese pronunciation
</div>

# Kanji

Multiple pronunciation

![](/images/raku-japanese-pronounce.png)

1. ❶ Music
2. <span class="text-gray-500">❶ To play (music)</span>
3. ❷ Happy
4. ❸ To appreciate

<!--
Let's take the Kanji for example.

It has more pronounciation due to different cultural context.

Four of them are inherited from ancient Chinese in various eras,
and another four represent in the original Japanese language.

Next slides >>>>>
-->
`,title:"Sorting - Japanese pronunciation",level:1,content:`<div class="hidden">

# Sorting - Japanese pronunciation
</div>

# Kanji

Multiple pronunciation

![](/images/raku-japanese-pronounce.png)

1. ❶ Music
2. <span class="text-gray-500">❶ To play (music)</span>
3. ❷ Happy
4. ❸ To appreciate`,frontmatter:{layout:"image-right",image:"/images/raku-japanese-character.png"},note:`Let's take the Kanji for example.

It has more pronounciation due to different cultural context.

Four of them are inherited from ancient Chinese in various eras,
and another four represent in the original Japanese language.

Next slides >>>>>`,index:10,start:399,end:431},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>Let's take the Kanji for example.</p>
<p>It has more pronounciation due to different cultural context.</p>
<p>Four of them are inherited from ancient Chinese in various eras,
and another four represent in the original Japanese language.</p>
<p>Next slides &gt;&gt;&gt;&gt;&gt;</p>
`,id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:nk,meta:{srcSequence:"./section-4.md",slide:{raw:`
<div class="hidden">

# Sorting - Chinese pronunciation
</div>

# Chinese

Multiple pronunciation

<div class="grid grid-cols-2">
    <div class="grid-1">
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-36-40.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Music</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-09.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Happy, Happiness, love to</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-43.png" alt="" class="h-full w-auto" />
            <span class="pl-4">To appreciate</span>
        </div>
    </div>
    <div class="grid-2 flex justify-center">
        <img src="/images/le-chinese-character.png" class="h-90" />
    </div>
</div>

<!--
The original Chinese character looks very similar, 
and it has three pronounciations.

The character stands for 樂 (yue) Music, 
or 樂 (le) for Happy or Happiness or 樂 (yao) for verb "To appreciate".

<b>Next slide >>>>></b>
-->
`,title:"Sorting - Chinese pronunciation",level:1,content:`<div class="hidden">

# Sorting - Chinese pronunciation
</div>

# Chinese

Multiple pronunciation

<div class="grid grid-cols-2">
    <div class="grid-1">
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-36-40.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Music</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-09.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Happy, Happiness, love to</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-43.png" alt="" class="h-full w-auto" />
            <span class="pl-4">To appreciate</span>
        </div>
    </div>
    <div class="grid-2 flex justify-center">
        <img src="/images/le-chinese-character.png" class="h-90" />
    </div>
</div>`,frontmatter:{srcSequence:"./section-4.md"},note:`The original Chinese character looks very similar, 
and it has three pronounciations.

The character stands for 樂 (yue) Music, 
or 樂 (le) for Happy or Happiness or 樂 (yao) for verb "To appreciate".

<b>Next slide >>>>></b>`,index:46,start:432,end:472,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`
<div class="hidden">

# Sorting - Chinese pronunciation
</div>

# Chinese

Multiple pronunciation

<div class="grid grid-cols-2">
    <div class="grid-1">
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-36-40.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Music</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-09.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Happy, Happiness, love to</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-43.png" alt="" class="h-full w-auto" />
            <span class="pl-4">To appreciate</span>
        </div>
    </div>
    <div class="grid-2 flex justify-center">
        <img src="/images/le-chinese-character.png" class="h-90" />
    </div>
</div>

<!--
The original Chinese character looks very similar, 
and it has three pronounciations.

The character stands for 樂 (yue) Music, 
or 樂 (le) for Happy or Happiness or 樂 (yao) for verb "To appreciate".

<b>Next slide >>>>></b>
-->
`,title:"Sorting - Chinese pronunciation",level:1,content:`<div class="hidden">

# Sorting - Chinese pronunciation
</div>

# Chinese

Multiple pronunciation

<div class="grid grid-cols-2">
    <div class="grid-1">
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-36-40.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Music</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-09.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Happy, Happiness, love to</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-43.png" alt="" class="h-full w-auto" />
            <span class="pl-4">To appreciate</span>
        </div>
    </div>
    <div class="grid-2 flex justify-center">
        <img src="/images/le-chinese-character.png" class="h-90" />
    </div>
</div>`,frontmatter:{},note:`The original Chinese character looks very similar, 
and it has three pronounciations.

The character stands for 樂 (yue) Music, 
or 樂 (le) for Happy or Happiness or 樂 (yao) for verb "To appreciate".

<b>Next slide >>>>></b>`,index:11,start:432,end:472},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>The original Chinese character looks very similar,
and it has three pronounciations.</p>
<p>The character stands for 樂 (yue) Music,
or 樂 (le) for Happy or Happiness or 樂 (yao) for verb &quot;To appreciate&quot;.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:lk,meta:{srcSequence:"./section-4.md",slide:{raw:`
# Sorting

Sort in Traditional Chinese

<div class="grid grid-cols-7 gap-4 mb-12 mt-16">
  <div>
    <img src="/images/牛肉麵.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">牛肉麵</span>
  </div>
  <div>
    <img src="/images/臭豆腐.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">臭豆腐</span>
  </div>
  <div>
    <img src="/images/珍珠奶茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">珍珠奶茶</span>
  </div>
  <div>
    <img src="/images/魯肉飯.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">魯肉飯</span>
  </div>
  <div>
    <img src="/images/小籠包.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">小籠包</span>
  </div>
  <div>
    <img src="/images/高山茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">高山茶</span>
  </div>
  <div>
    <img src="/images/鳳梨酥.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">鳳梨酥</span>
  </div>
</div>

<!--
So we now know Japanese sort by pronouciation. 
How about Mandarin Chinese?

Let's bring some delicious Taiwanese food here.
They are in the order of my preference. :)

How do we sort them names using their attributes?
Let's first see what options do we have.

<b>Next slide >>>>></b>
-->
`,title:"Sorting",level:1,content:`# Sorting

Sort in Traditional Chinese

<div class="grid grid-cols-7 gap-4 mb-12 mt-16">
  <div>
    <img src="/images/牛肉麵.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">牛肉麵</span>
  </div>
  <div>
    <img src="/images/臭豆腐.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">臭豆腐</span>
  </div>
  <div>
    <img src="/images/珍珠奶茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">珍珠奶茶</span>
  </div>
  <div>
    <img src="/images/魯肉飯.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">魯肉飯</span>
  </div>
  <div>
    <img src="/images/小籠包.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">小籠包</span>
  </div>
  <div>
    <img src="/images/高山茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">高山茶</span>
  </div>
  <div>
    <img src="/images/鳳梨酥.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">鳳梨酥</span>
  </div>
</div>`,frontmatter:{srcSequence:"./section-4.md"},note:`So we now know Japanese sort by pronouciation. 
How about Mandarin Chinese?

Let's bring some delicious Taiwanese food here.
They are in the order of my preference. :)

How do we sort them names using their attributes?
Let's first see what options do we have.

<b>Next slide >>>>></b>`,index:47,start:473,end:522,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`
# Sorting

Sort in Traditional Chinese

<div class="grid grid-cols-7 gap-4 mb-12 mt-16">
  <div>
    <img src="/images/牛肉麵.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">牛肉麵</span>
  </div>
  <div>
    <img src="/images/臭豆腐.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">臭豆腐</span>
  </div>
  <div>
    <img src="/images/珍珠奶茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">珍珠奶茶</span>
  </div>
  <div>
    <img src="/images/魯肉飯.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">魯肉飯</span>
  </div>
  <div>
    <img src="/images/小籠包.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">小籠包</span>
  </div>
  <div>
    <img src="/images/高山茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">高山茶</span>
  </div>
  <div>
    <img src="/images/鳳梨酥.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">鳳梨酥</span>
  </div>
</div>

<!--
So we now know Japanese sort by pronouciation. 
How about Mandarin Chinese?

Let's bring some delicious Taiwanese food here.
They are in the order of my preference. :)

How do we sort them names using their attributes?
Let's first see what options do we have.

<b>Next slide >>>>></b>
-->
`,title:"Sorting",level:1,content:`# Sorting

Sort in Traditional Chinese

<div class="grid grid-cols-7 gap-4 mb-12 mt-16">
  <div>
    <img src="/images/牛肉麵.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">牛肉麵</span>
  </div>
  <div>
    <img src="/images/臭豆腐.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">臭豆腐</span>
  </div>
  <div>
    <img src="/images/珍珠奶茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">珍珠奶茶</span>
  </div>
  <div>
    <img src="/images/魯肉飯.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">魯肉飯</span>
  </div>
  <div>
    <img src="/images/小籠包.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">小籠包</span>
  </div>
  <div>
    <img src="/images/高山茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">高山茶</span>
  </div>
  <div>
    <img src="/images/鳳梨酥.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">鳳梨酥</span>
  </div>
</div>`,frontmatter:{},note:`So we now know Japanese sort by pronouciation. 
How about Mandarin Chinese?

Let's bring some delicious Taiwanese food here.
They are in the order of my preference. :)

How do we sort them names using their attributes?
Let's first see what options do we have.

<b>Next slide >>>>></b>`,index:12,start:473,end:522},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>So we now know Japanese sort by pronouciation.
How about Mandarin Chinese?</p>
<p>Let's bring some delicious Taiwanese food here.
They are in the order of my preference. :)</p>
<p>How do we sort them names using their attributes?
Let's first see what options do we have.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:mk,meta:{srcSequence:"./section-4.md",slide:{raw:`
<div class="hidden">

# Sorting - Chinese characters
</div>

<h1>Chinese characters</h1>
<h3>4 attributes</h3>
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">
    <img src="/images/moedict_yan.png" class="mt-6 shadow-lg" />
  </div>
  <div class="">
    <div class="text-2xl">
      <ul class="pt-4">
        <li class="font-bold text-sky-600">Radical Strokes 
          <div class="text-gray-500 font-normal text-lg">部首 + 画数順</div>
        </li>
        <li class="font-bold text-sky-600">Total Strokes　
          <div class="text-gray-500 font-normal text-lg">総画数</div>
        </li>
        <li class="font-bold text-sky-600">Bopomofo 　
          <div class="text-gray-500 font-normal text-lg">注音符号<br />(Phonetic characters)</div>
        </li>
        <li class="font-bold text-sky-600">Pinyin 
          <div class="text-gray-500 font-normal text-lg">拼音</div>
        </li>
      </ul>
    </div>
  </div>
</div>

<!--
This is the first character of 岩国, ㄧㄢˊ in Mandarin.

There are at least four different ways to sort it.

We can count its radical strokes, total strokes, 
spell it with phonetical elements 注音 which is only used in Taiwan, 
or Pinyin with roman characters which is the main input method in China.

Usually we order with one of the attributes and sometimes let the user change the sorting method, 
for instance the book search system in a library.

<b>Next slide >>>>></b>

Bopomofo is the predominant phonetic system in teaching, reading and writing in elementary school in Taiwan. 
-->
`,title:"Sorting - Chinese characters",level:1,content:`<div class="hidden">

# Sorting - Chinese characters
</div>

<h1>Chinese characters</h1>
<h3>4 attributes</h3>
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">
    <img src="/images/moedict_yan.png" class="mt-6 shadow-lg" />
  </div>
  <div class="">
    <div class="text-2xl">
      <ul class="pt-4">
        <li class="font-bold text-sky-600">Radical Strokes 
          <div class="text-gray-500 font-normal text-lg">部首 + 画数順</div>
        </li>
        <li class="font-bold text-sky-600">Total Strokes　
          <div class="text-gray-500 font-normal text-lg">総画数</div>
        </li>
        <li class="font-bold text-sky-600">Bopomofo 　
          <div class="text-gray-500 font-normal text-lg">注音符号<br />(Phonetic characters)</div>
        </li>
        <li class="font-bold text-sky-600">Pinyin 
          <div class="text-gray-500 font-normal text-lg">拼音</div>
        </li>
      </ul>
    </div>
  </div>
</div>`,frontmatter:{srcSequence:"./section-4.md"},note:`This is the first character of 岩国, ㄧㄢˊ in Mandarin.

There are at least four different ways to sort it.

We can count its radical strokes, total strokes, 
spell it with phonetical elements 注音 which is only used in Taiwan, 
or Pinyin with roman characters which is the main input method in China.

Usually we order with one of the attributes and sometimes let the user change the sorting method, 
for instance the book search system in a library.

<b>Next slide >>>>></b>

Bopomofo is the predominant phonetic system in teaching, reading and writing in elementary school in Taiwan.`,index:48,start:523,end:572,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`
<div class="hidden">

# Sorting - Chinese characters
</div>

<h1>Chinese characters</h1>
<h3>4 attributes</h3>
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">
    <img src="/images/moedict_yan.png" class="mt-6 shadow-lg" />
  </div>
  <div class="">
    <div class="text-2xl">
      <ul class="pt-4">
        <li class="font-bold text-sky-600">Radical Strokes 
          <div class="text-gray-500 font-normal text-lg">部首 + 画数順</div>
        </li>
        <li class="font-bold text-sky-600">Total Strokes　
          <div class="text-gray-500 font-normal text-lg">総画数</div>
        </li>
        <li class="font-bold text-sky-600">Bopomofo 　
          <div class="text-gray-500 font-normal text-lg">注音符号<br />(Phonetic characters)</div>
        </li>
        <li class="font-bold text-sky-600">Pinyin 
          <div class="text-gray-500 font-normal text-lg">拼音</div>
        </li>
      </ul>
    </div>
  </div>
</div>

<!--
This is the first character of 岩国, ㄧㄢˊ in Mandarin.

There are at least four different ways to sort it.

We can count its radical strokes, total strokes, 
spell it with phonetical elements 注音 which is only used in Taiwan, 
or Pinyin with roman characters which is the main input method in China.

Usually we order with one of the attributes and sometimes let the user change the sorting method, 
for instance the book search system in a library.

<b>Next slide >>>>></b>

Bopomofo is the predominant phonetic system in teaching, reading and writing in elementary school in Taiwan. 
-->
`,title:"Sorting - Chinese characters",level:1,content:`<div class="hidden">

# Sorting - Chinese characters
</div>

<h1>Chinese characters</h1>
<h3>4 attributes</h3>
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">
    <img src="/images/moedict_yan.png" class="mt-6 shadow-lg" />
  </div>
  <div class="">
    <div class="text-2xl">
      <ul class="pt-4">
        <li class="font-bold text-sky-600">Radical Strokes 
          <div class="text-gray-500 font-normal text-lg">部首 + 画数順</div>
        </li>
        <li class="font-bold text-sky-600">Total Strokes　
          <div class="text-gray-500 font-normal text-lg">総画数</div>
        </li>
        <li class="font-bold text-sky-600">Bopomofo 　
          <div class="text-gray-500 font-normal text-lg">注音符号<br />(Phonetic characters)</div>
        </li>
        <li class="font-bold text-sky-600">Pinyin 
          <div class="text-gray-500 font-normal text-lg">拼音</div>
        </li>
      </ul>
    </div>
  </div>
</div>`,frontmatter:{},note:`This is the first character of 岩国, ㄧㄢˊ in Mandarin.

There are at least four different ways to sort it.

We can count its radical strokes, total strokes, 
spell it with phonetical elements 注音 which is only used in Taiwan, 
or Pinyin with roman characters which is the main input method in China.

Usually we order with one of the attributes and sometimes let the user change the sorting method, 
for instance the book search system in a library.

<b>Next slide >>>>></b>

Bopomofo is the predominant phonetic system in teaching, reading and writing in elementary school in Taiwan.`,index:13,start:523,end:572},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>This is the first character of 岩国, ㄧㄢˊ in Mandarin.</p>
<p>There are at least four different ways to sort it.</p>
<p>We can count its radical strokes, total strokes,
spell it with phonetical elements 注音 which is only used in Taiwan,
or Pinyin with roman characters which is the main input method in China.</p>
<p>Usually we order with one of the attributes and sometimes let the user change the sorting method,
for instance the book search system in a library.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
<p>Bopomofo is the predominant phonetic system in teaching, reading and writing in elementary school in Taiwan.</p>
`,id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:xk,meta:{srcSequence:"./section-4.md",slide:{raw:`
# Sorting

Sort in Traditional Chinese

<div class="grid grid-cols-7 gap-4 mb-12 mt-16">
  <div>
    <img src="/images/鳳梨酥.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">鳳梨酥</span>
  </div>
  <div>
    <img src="/images/牛肉麵.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">牛肉麵</span>
  </div>
  <div>
    <img src="/images/魯肉飯.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">魯肉飯</span>
  </div>
  <div>
    <img src="/images/高山茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">高山茶</span>
  </div>
  <div>
    <img src="/images/小籠包.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">小籠包</span>
  </div>
  <div>
    <img src="/images/珍珠奶茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">珍珠奶茶</span>
  </div>
  <div>
    <img src="/images/臭豆腐.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">臭豆腐</span>
  </div>
</div>

<div class="">

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-zhuyin', {ignorePunctuation: true }));

Array => ['鳳梨酥', '牛肉麵', '魯肉飯', '高山茶', '小籠包', '珍珠奶茶', '臭豆腐']
\`\`\`
</div>



<!--
In Traditional Chinese, localeCompare() also works with various attributes that I mentioned before.
By strokes, by the Phonetic zhuyin.

This is sorting with the phonetic elements 注音.
Similar way that we sort Japanese in Gojuon.

It would be difficult to understand, if you don't understand 注音.

<b>Next slides >>>>></b>
-->
`,title:"Sorting",level:1,content:`# Sorting

Sort in Traditional Chinese

<div class="grid grid-cols-7 gap-4 mb-12 mt-16">
  <div>
    <img src="/images/鳳梨酥.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">鳳梨酥</span>
  </div>
  <div>
    <img src="/images/牛肉麵.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">牛肉麵</span>
  </div>
  <div>
    <img src="/images/魯肉飯.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">魯肉飯</span>
  </div>
  <div>
    <img src="/images/高山茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">高山茶</span>
  </div>
  <div>
    <img src="/images/小籠包.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">小籠包</span>
  </div>
  <div>
    <img src="/images/珍珠奶茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">珍珠奶茶</span>
  </div>
  <div>
    <img src="/images/臭豆腐.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">臭豆腐</span>
  </div>
</div>

<div class="">

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-zhuyin', {ignorePunctuation: true }));

Array => ['鳳梨酥', '牛肉麵', '魯肉飯', '高山茶', '小籠包', '珍珠奶茶', '臭豆腐']
\`\`\`
</div>`,frontmatter:{srcSequence:"./section-4.md"},note:`In Traditional Chinese, localeCompare() also works with various attributes that I mentioned before.
By strokes, by the Phonetic zhuyin.

This is sorting with the phonetic elements 注音.
Similar way that we sort Japanese in Gojuon.

It would be difficult to understand, if you don't understand 注音.

<b>Next slides >>>>></b>`,index:49,start:573,end:632,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`
# Sorting

Sort in Traditional Chinese

<div class="grid grid-cols-7 gap-4 mb-12 mt-16">
  <div>
    <img src="/images/鳳梨酥.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">鳳梨酥</span>
  </div>
  <div>
    <img src="/images/牛肉麵.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">牛肉麵</span>
  </div>
  <div>
    <img src="/images/魯肉飯.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">魯肉飯</span>
  </div>
  <div>
    <img src="/images/高山茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">高山茶</span>
  </div>
  <div>
    <img src="/images/小籠包.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">小籠包</span>
  </div>
  <div>
    <img src="/images/珍珠奶茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">珍珠奶茶</span>
  </div>
  <div>
    <img src="/images/臭豆腐.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">臭豆腐</span>
  </div>
</div>

<div class="">

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-zhuyin', {ignorePunctuation: true }));

Array => ['鳳梨酥', '牛肉麵', '魯肉飯', '高山茶', '小籠包', '珍珠奶茶', '臭豆腐']
\`\`\`
</div>



<!--
In Traditional Chinese, localeCompare() also works with various attributes that I mentioned before.
By strokes, by the Phonetic zhuyin.

This is sorting with the phonetic elements 注音.
Similar way that we sort Japanese in Gojuon.

It would be difficult to understand, if you don't understand 注音.

<b>Next slides >>>>></b>
-->
`,title:"Sorting",level:1,content:`# Sorting

Sort in Traditional Chinese

<div class="grid grid-cols-7 gap-4 mb-12 mt-16">
  <div>
    <img src="/images/鳳梨酥.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">鳳梨酥</span>
  </div>
  <div>
    <img src="/images/牛肉麵.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">牛肉麵</span>
  </div>
  <div>
    <img src="/images/魯肉飯.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">魯肉飯</span>
  </div>
  <div>
    <img src="/images/高山茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">高山茶</span>
  </div>
  <div>
    <img src="/images/小籠包.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">小籠包</span>
  </div>
  <div>
    <img src="/images/珍珠奶茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">珍珠奶茶</span>
  </div>
  <div>
    <img src="/images/臭豆腐.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">臭豆腐</span>
  </div>
</div>

<div class="">

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-zhuyin', {ignorePunctuation: true }));

Array => ['鳳梨酥', '牛肉麵', '魯肉飯', '高山茶', '小籠包', '珍珠奶茶', '臭豆腐']
\`\`\`
</div>`,frontmatter:{},note:`In Traditional Chinese, localeCompare() also works with various attributes that I mentioned before.
By strokes, by the Phonetic zhuyin.

This is sorting with the phonetic elements 注音.
Similar way that we sort Japanese in Gojuon.

It would be difficult to understand, if you don't understand 注音.

<b>Next slides >>>>></b>`,index:14,start:573,end:632},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>In Traditional Chinese, localeCompare() also works with various attributes that I mentioned before.
By strokes, by the Phonetic zhuyin.</p>
<p>This is sorting with the phonetic elements 注音.
Similar way that we sort Japanese in Gojuon.</p>
<p>It would be difficult to understand, if you don't understand 注音.</p>
<p><b>Next slides &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:Ik,meta:{srcSequence:"./section-4.md",slide:{raw:`
# Sorting

Sort in Traditional Chinese

<div class="grid grid-cols-7 gap-4 mb-12 mt-16">
  <div>
    <img src="/images/小籠包.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">小籠包</span>
  </div>
  <div>
    <img src="/images/牛肉麵.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">牛肉麵</span>
  </div>
  <div>
    <img src="/images/珍珠奶茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">珍珠奶茶</span>
  </div>
  <div>
    <img src="/images/臭豆腐.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">臭豆腐</span>
  </div>
  <div>
    <img src="/images/高山茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">高山茶</span>
  </div>
  <div>
    <img src="/images/鳳梨酥.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">鳳梨酥</span>
  </div>
  <div>
    <img src="/images/魯肉飯.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">魯肉飯</span>
  </div>
</div>

<div class="">

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-stroke', {ignorePunctuation: true }));

Array => ['小籠包', '牛肉麵', '珍珠奶茶', '臭豆腐', '高山茶', '鳳梨酥', '魯肉飯']
\`\`\`
</div>




<!--
This way maybe easier, this is sorting in the total stroke.

We can see the first character of each has more strokes from left to right.

It's amazing that JavaScript support it, right.
It's all thanks to the open source contributors, especially in the UniHan project, one of the unicode open source project.
That makes this available.

<b>Next slides >>>>></b>
-->

`,title:"Sorting",level:1,content:`# Sorting

Sort in Traditional Chinese

<div class="grid grid-cols-7 gap-4 mb-12 mt-16">
  <div>
    <img src="/images/小籠包.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">小籠包</span>
  </div>
  <div>
    <img src="/images/牛肉麵.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">牛肉麵</span>
  </div>
  <div>
    <img src="/images/珍珠奶茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">珍珠奶茶</span>
  </div>
  <div>
    <img src="/images/臭豆腐.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">臭豆腐</span>
  </div>
  <div>
    <img src="/images/高山茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">高山茶</span>
  </div>
  <div>
    <img src="/images/鳳梨酥.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">鳳梨酥</span>
  </div>
  <div>
    <img src="/images/魯肉飯.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">魯肉飯</span>
  </div>
</div>

<div class="">

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-stroke', {ignorePunctuation: true }));

Array => ['小籠包', '牛肉麵', '珍珠奶茶', '臭豆腐', '高山茶', '鳳梨酥', '魯肉飯']
\`\`\`
</div>`,frontmatter:{srcSequence:"./section-4.md"},note:`This way maybe easier, this is sorting in the total stroke.

We can see the first character of each has more strokes from left to right.

It's amazing that JavaScript support it, right.
It's all thanks to the open source contributors, especially in the UniHan project, one of the unicode open source project.
That makes this available.

<b>Next slides >>>>></b>`,index:50,start:633,end:694,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`
# Sorting

Sort in Traditional Chinese

<div class="grid grid-cols-7 gap-4 mb-12 mt-16">
  <div>
    <img src="/images/小籠包.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">小籠包</span>
  </div>
  <div>
    <img src="/images/牛肉麵.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">牛肉麵</span>
  </div>
  <div>
    <img src="/images/珍珠奶茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">珍珠奶茶</span>
  </div>
  <div>
    <img src="/images/臭豆腐.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">臭豆腐</span>
  </div>
  <div>
    <img src="/images/高山茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">高山茶</span>
  </div>
  <div>
    <img src="/images/鳳梨酥.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">鳳梨酥</span>
  </div>
  <div>
    <img src="/images/魯肉飯.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">魯肉飯</span>
  </div>
</div>

<div class="">

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-stroke', {ignorePunctuation: true }));

Array => ['小籠包', '牛肉麵', '珍珠奶茶', '臭豆腐', '高山茶', '鳳梨酥', '魯肉飯']
\`\`\`
</div>




<!--
This way maybe easier, this is sorting in the total stroke.

We can see the first character of each has more strokes from left to right.

It's amazing that JavaScript support it, right.
It's all thanks to the open source contributors, especially in the UniHan project, one of the unicode open source project.
That makes this available.

<b>Next slides >>>>></b>
-->

`,title:"Sorting",level:1,content:`# Sorting

Sort in Traditional Chinese

<div class="grid grid-cols-7 gap-4 mb-12 mt-16">
  <div>
    <img src="/images/小籠包.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">小籠包</span>
  </div>
  <div>
    <img src="/images/牛肉麵.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">牛肉麵</span>
  </div>
  <div>
    <img src="/images/珍珠奶茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">珍珠奶茶</span>
  </div>
  <div>
    <img src="/images/臭豆腐.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">臭豆腐</span>
  </div>
  <div>
    <img src="/images/高山茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">高山茶</span>
  </div>
  <div>
    <img src="/images/鳳梨酥.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">鳳梨酥</span>
  </div>
  <div>
    <img src="/images/魯肉飯.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">魯肉飯</span>
  </div>
</div>

<div class="">

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-stroke', {ignorePunctuation: true }));

Array => ['小籠包', '牛肉麵', '珍珠奶茶', '臭豆腐', '高山茶', '鳳梨酥', '魯肉飯']
\`\`\`
</div>`,frontmatter:{},note:`This way maybe easier, this is sorting in the total stroke.

We can see the first character of each has more strokes from left to right.

It's amazing that JavaScript support it, right.
It's all thanks to the open source contributors, especially in the UniHan project, one of the unicode open source project.
That makes this available.

<b>Next slides >>>>></b>`,index:15,start:633,end:694},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>This way maybe easier, this is sorting in the total stroke.</p>
<p>We can see the first character of each has more strokes from left to right.</p>
<p>It's amazing that JavaScript support it, right.
It's all thanks to the open source contributors, especially in the UniHan project, one of the unicode open source project.
That makes this available.</p>
<p><b>Next slides &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:$k,meta:{srcSequence:"./section-4.md",slide:{raw:`
# Sorting
What happens to the Character that has multiple pronunciation?

<div class="grid grid-cols-2 gap-8 mt-12">
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-2xl font-extrabold tracking-tight">This affects</h5>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Japanese Kanji</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Chinese characters sort in ...</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Bopomofo (zh-TW)</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Pinyin (zh-CN)</span>
            </li>
        </ul>
    </div>
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-2xl font-extrabold tracking-tight">Solution</h5>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Leave it as-is</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Customize it and make an explicit order in array</span>
            </li>
         </ul>
    </div>
</div>

<!--
So let's think the unresolved issue. 
What to do with the multiple pronunciation Kanji?

The issue affects Japanese Kanji, or Chinese character when sorting with phonetic element using Zhuyin or Pinyin.

Technically, native speakers know the common variations of the pronouciation, 
when we process in head, it is processed together, it does not really bother to the native spearkers.

However my understanding could be wrong about Japanese, I would be happy to hear from you, what is the practical solution.

Sometimes if the client request to make it in the explicit order, 
the better way is to map the words into a pre-defined table or array.
In the end it will be a fully customized array.

<b>Next slide >>>>></b>
-->`,title:"Sorting",level:1,content:`# Sorting
What happens to the Character that has multiple pronunciation?

<div class="grid grid-cols-2 gap-8 mt-12">
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-2xl font-extrabold tracking-tight">This affects</h5>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Japanese Kanji</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Chinese characters sort in ...</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Bopomofo (zh-TW)</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Pinyin (zh-CN)</span>
            </li>
        </ul>
    </div>
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-2xl font-extrabold tracking-tight">Solution</h5>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Leave it as-is</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Customize it and make an explicit order in array</span>
            </li>
         </ul>
    </div>
</div>`,frontmatter:{srcSequence:"./section-4.md"},note:`So let's think the unresolved issue. 
What to do with the multiple pronunciation Kanji?

The issue affects Japanese Kanji, or Chinese character when sorting with phonetic element using Zhuyin or Pinyin.

Technically, native speakers know the common variations of the pronouciation, 
when we process in head, it is processed together, it does not really bother to the native spearkers.

However my understanding could be wrong about Japanese, I would be happy to hear from you, what is the practical solution.

Sometimes if the client request to make it in the explicit order, 
the better way is to map the words into a pre-defined table or array.
In the end it will be a fully customized array.

<b>Next slide >>>>></b>`,index:51,start:695,end:761,source:{filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",raw:`
# Sorting
What happens to the Character that has multiple pronunciation?

<div class="grid grid-cols-2 gap-8 mt-12">
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-2xl font-extrabold tracking-tight">This affects</h5>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Japanese Kanji</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Chinese characters sort in ...</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Bopomofo (zh-TW)</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Pinyin (zh-CN)</span>
            </li>
        </ul>
    </div>
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-2xl font-extrabold tracking-tight">Solution</h5>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Leave it as-is</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Customize it and make an explicit order in array</span>
            </li>
         </ul>
    </div>
</div>

<!--
So let's think the unresolved issue. 
What to do with the multiple pronunciation Kanji?

The issue affects Japanese Kanji, or Chinese character when sorting with phonetic element using Zhuyin or Pinyin.

Technically, native speakers know the common variations of the pronouciation, 
when we process in head, it is processed together, it does not really bother to the native spearkers.

However my understanding could be wrong about Japanese, I would be happy to hear from you, what is the practical solution.

Sometimes if the client request to make it in the explicit order, 
the better way is to map the words into a pre-defined table or array.
In the end it will be a fully customized array.

<b>Next slide >>>>></b>
-->`,title:"Sorting",level:1,content:`# Sorting
What happens to the Character that has multiple pronunciation?

<div class="grid grid-cols-2 gap-8 mt-12">
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-2xl font-extrabold tracking-tight">This affects</h5>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Japanese Kanji</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Chinese characters sort in ...</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Bopomofo (zh-TW)</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Pinyin (zh-CN)</span>
            </li>
        </ul>
    </div>
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-2xl font-extrabold tracking-tight">Solution</h5>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Leave it as-is</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Customize it and make an explicit order in array</span>
            </li>
         </ul>
    </div>
</div>`,frontmatter:{},note:`So let's think the unresolved issue. 
What to do with the multiple pronunciation Kanji?

The issue affects Japanese Kanji, or Chinese character when sorting with phonetic element using Zhuyin or Pinyin.

Technically, native speakers know the common variations of the pronouciation, 
when we process in head, it is processed together, it does not really bother to the native spearkers.

However my understanding could be wrong about Japanese, I would be happy to hear from you, what is the practical solution.

Sometimes if the client request to make it in the explicit order, 
the better way is to map the words into a pre-defined table or array.
In the end it will be a fully customized array.

<b>Next slide >>>>></b>`,index:16,start:695,end:761},filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/section-4.md",notesHTML:`<p>So let's think the unresolved issue.
What to do with the multiple pronunciation Kanji?</p>
<p>The issue affects Japanese Kanji, or Chinese character when sorting with phonetic element using Zhuyin or Pinyin.</p>
<p>Technically, native speakers know the common variations of the pronouciation,
when we process in head, it is processed together, it does not really bother to the native spearkers.</p>
<p>However my understanding could be wrong about Japanese, I would be happy to hear from you, what is the practical solution.</p>
<p>Sometimes if the client request to make it in the explicit order,
the better way is to map the words into a pre-defined table or array.
In the end it will be a fully customized array.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:Wk,meta:{layout:"intro-image",image:"/images/farnsworth_house_xmas.jpg",slide:{raw:`---
layout: intro-image
image: /images/farnsworth_house_xmas.jpg
---

<div class="hidden">

# Devil is in the details
</div>

<div class="absolute top-10">
  <span class="font-700">
    Farnworth House, <i>Mies van der Rohe</i>
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div v-click-hide class="absolute top-0 w-full">
    <h1><span class="text-sky-300">悪魔</span>は細部に宿る</h1>
    <p>
      <span class="text-sky-300">Devil</span> is in the details
    </p>
  </div>
  <div v-after class="absolute top-0 w-full">
    <h1><span class="text-yellow-300">神</span>は細部に宿る</h1>
    <p>
      Der liebe <span class="text-yellow-300">Gott</span> steckt im detail. / German ドイツ 
    </p>
  </div>
</div>

<!-- 
At the end, I want share a sentence with you.

We hear people say "Devil is in the details".
It means the difficulties or troubles is not revealed until you look close to the details.

The origin of the sentence is somehow opposite.
<b>CLICK!</b>

> 神は細部に宿る

It is from a Germany architecture, Mies van der Rohe, 

> "Der liebe Gott steckt im detail."

No matter it is Devil or God, the sentence has one thing in common.
The most important things are in the detail.

- When we see a new website is complete, people cheering and feels satisfied.
- When the visitor find good experience using the website in their native tounge intuitively.

It is all because the developer, designer worked on every details to bring the best UX to our user.

Let's look closer, and take the challenge, deal with the devil, we will find the glorious miracle in the end.

<b>Next slide >>>>></b>
-->
`,title:"Devil is in the details",level:1,content:`<div class="hidden">

# Devil is in the details
</div>

<div class="absolute top-10">
  <span class="font-700">
    Farnworth House, <i>Mies van der Rohe</i>
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div v-click-hide class="absolute top-0 w-full">
    <h1><span class="text-sky-300">悪魔</span>は細部に宿る</h1>
    <p>
      <span class="text-sky-300">Devil</span> is in the details
    </p>
  </div>
  <div v-after class="absolute top-0 w-full">
    <h1><span class="text-yellow-300">神</span>は細部に宿る</h1>
    <p>
      Der liebe <span class="text-yellow-300">Gott</span> steckt im detail. / German ドイツ 
    </p>
  </div>
</div>`,frontmatter:{layout:"intro-image",image:"/images/farnsworth_house_xmas.jpg"},note:`At the end, I want share a sentence with you.

We hear people say "Devil is in the details".
It means the difficulties or troubles is not revealed until you look close to the details.

The origin of the sentence is somehow opposite.
<b>CLICK!</b>

> 神は細部に宿る

It is from a Germany architecture, Mies van der Rohe, 

> "Der liebe Gott steckt im detail."

No matter it is Devil or God, the sentence has one thing in common.
The most important things are in the detail.

- When we see a new website is complete, people cheering and feels satisfied.
- When the visitor find good experience using the website in their native tounge intuitively.

It is all because the developer, designer worked on every details to bring the best UX to our user.

Let's look closer, and take the challenge, deal with the devil, we will find the glorious miracle in the end.

<b>Next slide >>>>></b>`,index:52,start:188,end:247,notesHTML:`<p>At the end, I want share a sentence with you.</p>
<p>We hear people say &quot;Devil is in the details&quot;.
It means the difficulties or troubles is not revealed until you look close to the details.</p>
<p>The origin of the sentence is somehow opposite.
<b>CLICK!</b></p>
<blockquote>
<p>神は細部に宿る</p>
</blockquote>
<p>It is from a Germany architecture, Mies van der Rohe,</p>
<blockquote>
<p>&quot;Der liebe Gott steckt im detail.&quot;</p>
</blockquote>
<p>No matter it is Devil or God, the sentence has one thing in common.
The most important things are in the detail.</p>
<ul>
<li>When we see a new website is complete, people cheering and feels satisfied.</li>
<li>When the visitor find good experience using the website in their native tounge intuitively.</li>
</ul>
<p>It is all because the developer, designer worked on every details to bring the best UX to our user.</p>
<p>Let's look closer, and take the challenge, deal with the devil, we will find the glorious miracle in the end.</p>
<p><b>Next slide &gt;&gt;&gt;&gt;&gt;</b></p>
`,filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:Xk,meta:{layout:"intro-image",image:"/images/DC-Iwakuni-Blue-accent-footer.png",class:"text-center",slide:{raw:`---
layout: intro-image
image: /images/DC-Iwakuni-Blue-accent-footer.png
class: text-center
---
<div class="hidden">

# Thank you
</div>

<div class="text-5xl font-700 text-sky-600 self-end mb-8 font-serif">
  ご清聴ありがとうございました
</div>

<div class="text-4xl text-sky-700">
  Thank you for your attention
</div>
<div class="text-md text-sky-700 flex justify-center">
  <span class="flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full mr-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
    <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
  </span>
  <h2 class="font-normal leading-tight text-gray-700 dark:text-gray-100">
    Online slide: <a class=" text-sky-600 underline-dashed" href="https://iwakuni.amou.ro">https://iwakuni.amou.ro</a>
  </h2>
</div>

<!--
Thank you, I'm Chris, 
I wish you a good afternoon today in the following sessions.

ご清聴ありがとうございました\b。
-->
`,title:"Thank you",level:1,content:`<div class="hidden">

# Thank you
</div>

<div class="text-5xl font-700 text-sky-600 self-end mb-8 font-serif">
  ご清聴ありがとうございました
</div>

<div class="text-4xl text-sky-700">
  Thank you for your attention
</div>
<div class="text-md text-sky-700 flex justify-center">
  <span class="flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full mr-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
    <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
  </span>
  <h2 class="font-normal leading-tight text-gray-700 dark:text-gray-100">
    Online slide: <a class=" text-sky-600 underline-dashed" href="https://iwakuni.amou.ro">https://iwakuni.amou.ro</a>
  </h2>
</div>`,frontmatter:{layout:"intro-image",image:"/images/DC-Iwakuni-Blue-accent-footer.png",class:"text-center"},note:`Thank you, I'm Chris, 
I wish you a good afternoon today in the following sessions.

ご清聴ありがとうございました\b。`,index:53,start:247,end:280,notesHTML:`<p>Thank you, I'm Chris,
I wish you a good afternoon today in the following sessions.</p>
<p>ご清聴ありがとうございました\b。</p>
`,filepath:"/home/runner/work/drupalden_iwakuni_2023/drupalden_iwakuni_2023/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",component:lw,meta:{layout:"end"}}],qe=Qk,e4=[{name:"play",path:"/",component:j1,children:[...qe]},{name:"print",path:"/print",component:aw},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>Wn(()=>import("./PresenterPrint-046b58b8.js"),["assets/PresenterPrint-046b58b8.js","assets/NoteViewer-1581f620.js","assets/index-d3382c60.js"])},{name:"presenter",path:"/presenter/:no",component:()=>Wn(()=>import("./Presenter-4a0bfcf3.js"),["assets/Presenter-4a0bfcf3.js","assets/NoteViewer-1581f620.js","assets/DrawingControls-49bbadd1.js","assets/index-d3382c60.js","assets/Presenter-910cd693.css"]),beforeEnter:e=>{if(!Ts.remote||Ts.remote===e.query.password)return!0;if(Ts.remote&&e.query.password===void 0){const n=prompt("Enter password");if(Ts.remote===n)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],yn=rg({history:af("/"),routes:e4});function t4(e,n,{mode:s="replace"}={}){return A({get(){const a=yn.currentRoute.value.query[e];return a==null?n??null:Array.isArray(a)?a.filter(Boolean):a},set(a){At(()=>{yn[_(s)]({query:{...yn.currentRoute.value.query,[e]:a}})})}})}const Rd=ae(0);At(()=>{yn.afterEach(async()=>{await At(),Rd.value+=1})});const Jt=A(()=>yn.currentRoute.value),Rr=A(()=>Jt.value.query.print!==void 0),n4=A(()=>Jt.value.query.print==="clicks"),Gt=A(()=>Jt.value.query.embedded!==void 0),Qt=A(()=>Jt.value.path.startsWith("/presenter")),Kd=A(()=>Rr.value&&!n4.value),er=A(()=>Jt.value.query.password),s4=A(()=>!Qt.value&&(!$e.remote||er.value===$e.remote)),ji=t4("clicks","0"),qd=A(()=>qe.length-1),a4=A(()=>Jt.value.path),Ve=A(()=>parseInt(a4.value.split(/\//g).slice(-1)[0])||1);A(()=>Kr(Ve.value));const gt=A(()=>qe.find(e=>e.path===`${Ve.value}`));A(()=>{var e,n,s;return(s=(n=(e=gt.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.id});A(()=>{var e,n;return((n=(e=gt.value)==null?void 0:e.meta)==null?void 0:n.layout)||(Ve.value===1?"cover":"default")});const wo=A(()=>qe.find(e=>e.path===`${Math.min(qe.length,Ve.value+1)}`)),o4=A(()=>{var e,n;return Rd.value,((n=(e=gt.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),Vn=A({get(){if(Kd.value)return 99999;let e=+(ji.value||0);return isNaN(e)&&(e=0),e},set(e){ji.value=e.toString()}}),Oa=A(()=>{var e,n;return+(((n=(e=gt.value)==null?void 0:e.meta)==null?void 0:n.clicks)??o4.value.length)}),r4=A(()=>Ve.value<qe.length-1||Vn.value<Oa.value),l4=A(()=>Ve.value>1||Vn.value>0),i4=A(()=>qe.filter(e=>{var n,s;return(s=(n=e.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((e,n)=>(qr(e,n),e),[])),c4=A(()=>Jr(i4.value,gt.value));A(()=>Wr(c4.value));function Ln(){Oa.value<=Vn.value?Na():Vn.value+=1}async function zn(){Vn.value<=0?await Ha():Vn.value-=1}function Kr(e){return Qt.value?`/presenter/${e}`:`/${e}`}function Na(){const e=Math.min(qe.length,Ve.value+1);return fs(e)}async function Ha(e=!0){const n=Math.max(1,Ve.value-1);await fs(n),e&&Oa.value&&yn.replace({query:{...Jt.value.query,clicks:Oa.value}})}function fs(e,n){return yn.push({path:Kr(e),query:{...Jt.value.query,clicks:n}})}function d4(e){const n=ae(0),{direction:s,distanceX:a,distanceY:o}=_m(e,{onSwipeStart(r){r.pointerType==="touch"&&(Ys.value||(n.value=Bo()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||Ys.value)return;const l=Math.abs(a.value),i=Math.abs(o.value);l/window.innerWidth>.3||l>100?s.value===Xt.LEFT?Ln():zn():(i/window.innerHeight>.4||i>200)&&(s.value===Xt.DOWN?Ha():Na())}})}async function Ai(){const{saveAs:e}=await Wn(()=>import("./FileSaver.min-17c85779.js").then(n=>n.F),[]);e(Uc($e.download)?$e.download:$e.exportFilename?`${$e.exportFilename}.pdf`:"/slidev-exported.pdf",`${$e.title}.pdf`)}async function O4(e){var n,s;if(e==null){const a=(s=(n=gt.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(a!=null&&a.filepath))return!1;e=`${a.filepath}:${a.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function qr(e,n,s=1){var o,r,l,i,c;const a=(r=(o=n.meta)==null?void 0:o.slide)==null?void 0:r.level;a&&a>s&&e.length>0?qr(e[e.length-1].children,n,s+1):e.push({children:[],level:s,path:n.path,hideInToc:Boolean((l=n.meta)==null?void 0:l.hideInToc),title:(c=(i=n.meta)==null?void 0:i.slide)==null?void 0:c.title})}function Jr(e,n,s=!1,a){return e.map(o=>{const r={...o,active:o.path===(n==null?void 0:n.path),hasActiveParent:s};return r.children.length>0&&(r.children=Jr(r.children,n,r.active||r.hasActiveParent,r)),a&&(r.active||r.activeParent)&&(a.activeParent=!0),r})}function Wr(e,n=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:Wr(s.children,n+1)}))}export{w4 as $,ae as A,S4 as B,E4 as C,Ee as D,A4 as E,Ce as F,Bt as G,I4 as H,lu as I,iu as J,Ya as K,At as L,bc as M,ut as N,Jn as O,cr as P,Fn as Q,u4 as R,Kd as S,m4 as T,Xh as U,Qh as V,qc as W,Kc as X,Rc as Y,Gh as Z,z as _,C4 as a,Ks as a$,b4 as a0,x4 as a1,v4 as a2,y4 as a3,Uy as a4,Gy as a5,Ai as a6,Ln as a7,Na as a8,O4 as a9,Ad as aA,at as aB,p2 as aC,p4 as aD,h4 as aE,Oa as aF,r4 as aG,wo as aH,po as aI,Ys as aJ,vo as aK,S1 as aL,Ar as aM,Tr as aN,_1 as aO,k2 as aP,$t as aQ,j4 as aR,Tt as aS,Ss as aT,Mn as aU,zt as aV,Zo as aW,Lg as aX,zg as aY,Rg as aZ,qg as a_,zn as aa,Ha as ab,Jt as ac,g4 as ad,gs as ae,Fe as af,M4 as ag,Ku as ah,t as ai,Rn as aj,ta as ak,We as al,qe as am,qd as an,f as ao,Q as ap,kr as aq,Be as ar,$4 as as,gt as at,H as au,Qg as av,d4 as aw,T4 as ax,D4 as ay,K as az,Ve as b,zc as b0,P4 as b1,lt as b2,ha as b3,ov as b4,Jc as b5,Jg as b6,$e as c,Vn as d,Qt as e,Oe as f,Kr as g,P as h,_4 as i,L as j,jp as k,U as l,Y as m,x as n,F4 as o,k4 as p,Ze as q,yn as r,to as s,A as t,f4 as u,bl as v,He as w,wc as x,_ as y,Zd as z};
