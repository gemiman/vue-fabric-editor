import{n as x,r as A,i as y,C,$ as E,o as $,l as S,e as w,Q as R,h,S as L,a0 as N,F as Q,m as se,d as V,f as H,J as re,I as ae,a1 as le,j as ce,t as ie}from"./index.d28b4d80.js";import{g as K,a as ue,r as Y,c as W,v as de}from"./index.1ed8dc2f.js";var pe=Object.defineProperty,fe=Object.defineProperties,ve=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,T=(r,e,n)=>e in r?pe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,P=(r,e)=>{for(var n in e||(e={}))_e.call(e,n)&&T(r,n,e[n]);if(F)for(var n of F(e))he.call(e,n)&&T(r,n,e[n]);return r},I=(r,e)=>fe(r,ve(e));function be({red:r,green:e,blue:n}){let s,d,u,l=0,a;const v=r/255,b=e/255,k=n/255,m=Math.max(v,b,k),p=m-Math.min(v,b,k),t=o=>(m-o)/6/p+1/2;return p===0?(l=0,a=0):(a=p/m,s=t(v),d=t(b),u=t(k),v===m?l=u-d:b===m?l=1/3+s-u:k===m&&(l=2/3+d-s),l<0?l+=1:l>1&&(l-=1)),{hue:Math.round(l*360),saturation:Math.round(a*100),value:Math.round(m*100)}}function B(r){return typeof r=="number"&&Number.isNaN(r)===!1&&r>=0&&r<=255}function X(r,e,n,s){if(B(r)&&B(e)&&B(n)){const d={red:r|0,green:e|0,blue:n|0,alpha:s|0};return B(s)===!0&&(d.alpha=s|0),d}}function U(r,e,n,s){n/=100;let u=e/100*n;const l=r/60;let a=u*(1-Math.abs(l%2-1)),v=n-u;const b=255;return u=(u+v)*b|0,a=(a+v)*b|0,v=v*b|0,l>=1&&l<2?X(a,u,v,s):l>=2&&l<3?X(v,u,a,s):l>=3&&l<4?X(v,a,u,s):l>=4&&l<5?X(a,v,u,s):l>=5&&l<=6?X(u,v,a,s):X(u,a,v,s)}function q(r,e,n,s,d,u){r>s&&(r=s),e>n&&(e=n),r<0&&(r=0),e<0&&(e=0);const l=100-e*100/n|0,a=r*100/s|0;return I(P({},U(d,a,l,u)),{saturation:a,value:l})}function z(r,e,n,s,d){let u=360*r/e|0;return u=u<0?0:u>360?360:u,I(P({},U(u,n,s,d)),{saturation:n,hue:u})}function J(r,e){return r=Number((r/e).toFixed(2)),r>1?1:r<0?0:r}const me=/(^#{0,1}[0-9A-F]{6}$)|(^#{0,1}[0-9A-F]{3}$)|(^#{0,1}[0-9A-F]{8}$)/i;function xe(r){if(me.test(r)){if(r[0]==="#"&&(r=r.slice(1,r.length)),r.length<6)return!1;const n=parseInt(r.substring(0,2),16)||0,s=parseInt(r.substring(2,4),16)||0,d=parseInt(r.substring(4,6),16)||0,u=parseInt(r.substring(6,8),16)/255||0,l=X(n,s,d,u),a=l&&be(P({},l));return P(P({},l),a)}return!1}function Z(r,e){const n=r*100/e;return n<0?0:n>100?100:n}function j(r,e,n){return function(d){let u=r(d);function l(a){u=e(a,u)||u}window.addEventListener("mousemove",l),window.addEventListener("mouseup",a=>{window.removeEventListener("mousemove",l),n&&n(a,u)},{once:!0})}}const ge={class:"picker-area-overlay1 wh-full"},we={class:"picker-area-overlay2 wh-full rounded-8px"},Pe=x({name:"AreaPicker"}),ke=x(I(P({},Pe),{setup(r){const e=A(null),n=A(null),s=y("colorPickerState"),d=y("updateColor"),u=C(()=>{const{width:p=0,height:t=0}=n.value||{},{saturation:o=100,value:c=100,isGradient:i,activePointIndex:f}=s,_=(o*p/100|0)-6,g=(t-c*t/100|0)-6,M=s.points[f||0],te=i?M==null?void 0:M.red:s.red,ne=i?M==null?void 0:M.green:s.green,oe=i?M==null?void 0:M.blue:s.blue;return{backgroundColor:`rgb(${te}, ${ne}, ${oe})`,left:`${_}px`,top:`${g}px`}}),l=C(()=>{const{isGradient:p,red:t,green:o,blue:c,activePointIndex:i=0,points:f=[]}=s;if(p){const _=f[i];return{backgroundColor:`rgb(${_.red}, ${_.green}, ${_.blue})`}}else return{backgroundColor:`rgb(${t}, ${o}, ${c})`}}),a=p=>{if(!n.value)return;const{x:t,y:o}=n.value,{width:c=0,height:i=0}=n.value||{},f=p.pageX,_=p.pageY,g=f-t,G=_-o,M=q(g,G,i,c,s.hue,s.alpha);return d(M),{startX:f,startY:_,positionX:g,positionY:G}},v=(p,{startX:t,startY:o,positionX:c,positionY:i})=>{const f=p.pageX-t,_=p.pageY-o,{width:g=0,height:G=0}=n.value||{};c+=f,i+=_;const M=q(c,i,G,g,s.hue,s.alpha);return{positions:{positionX:c,positionY:i,startX:p.pageX,startY:p.pageY},color:M}},m=j(a,(p,{startX:t,startY:o,positionX:c,positionY:i})=>{const{positions:f,color:_}=v(p,{startX:t,startY:o,positionX:c,positionY:i});return d(_),f},(p,{startX:t,startY:o,positionX:c,positionY:i})=>{const{positions:f,color:_}=v(p,{startX:t,startY:o,positionX:c,positionY:i});return d(_),f});return E(()=>{var p;const t=e.value;t&&!((p=n.value)!=null&&p.width)&&(n.value=t.getBoundingClientRect()||null)}),(p,t)=>($(),S("div",{ref_key:"pickerAreaRef",ref:e,class:"picker-area w-full mb-16px relative rounded-8px",style:R(h(l)),onMousedown:t[0]||(t[0]=(...o)=>h(m)&&h(m)(...o))},[w("div",ge,[w("div",we,[w("div",{class:"picker-pointer",style:R(h(u))},null,4)])])],36))}})),D=(r,e)=>{const n=r.__vccOpts||r;for(const[s,d]of e)n[s]=d;return n},ye=D(ke,[["__scopeId","data-v-2e8391c9"]]),$e={class:"preview-area mr-8px"},Ie=x({name:"AreaPreview"}),Ce=x(I(P({},Ie),{setup(r){const e=y("colorPickerState"),n=C(()=>{let s="";return e.isGradient?s=K(e.points,e.type,e.degree):s=ue(e.red,e.green,e.blue,e.alpha),{background:s}});return(s,d)=>($(),S("div",$e,[w("div",{class:"border-box w-36px h-36px rounded-8px border-width-1px border-solid border-[#ebedf5]",style:R(h(n))},null,4)]))}})),Se=x({name:"AreaHue"}),He=x(I(P({},Se),{setup(r){const e=A(null),n=A(null),s=y("colorPickerState"),d=y("updateColor"),u=C(()=>{var p;const t=((p=n.value)==null?void 0:p.width)||0;return(s.hue||0)*(t-14)/360|0}),l=C(()=>({left:`${u.value}px`})),a=p=>{var t,o;const c=((t=n.value)==null?void 0:t.x)||0,i=p.pageX,f=((o=n.value)==null?void 0:o.width)||0,_=i-c,g=z(_,f,s.saturation,s.value,s.alpha);return d(g),{startX:i,positionX:_}},v=(p,{startX:t,positionX:o})=>{var c;const i=p.pageX-t,f=((c=n.value)==null?void 0:c.width)||0;o+=i;const _=o>f?f:o<=0?0:o,g=z(_,f,s.saturation,s.value,s.alpha);return{positions:{positionX:o,startX:p.pageX},color:g}},m=j(a,(p,{startX:t,positionX:o})=>{const{positions:c,color:i}=v(p,{startX:t,positionX:o});return d(i),c},(p,{startX:t,positionX:o})=>{const{positions:c,color:i}=v(p,{startX:t,positionX:o});return d(i),c});return E(()=>{var p,t;e.value&&!((p=n.value)!=null&&p.width)&&(n.value=((t=e.value)==null?void 0:t.getBoundingClientRect())||null)}),(p,t)=>($(),S("div",{class:"relative w-full overflow-hidden rounded-10px mb-8px bg-[red] cursor-pointer",onMousedown:t[0]||(t[0]=(...o)=>h(m)&&h(m)(...o))},[w("div",{ref_key:"hueRef",ref:e,class:"hue-area relative"},[w("div",{class:"picker-pointer",style:R(h(l))},null,4)],512)],32))}})),Me=D(He,[["__scopeId","data-v-7cd4331a"]]),Ae={class:"alpha-area wh-full rounded-10px"},Re=x({name:"AreaAlpha"}),Xe=x(I(P({},Re),{setup(r){const e=y("colorPickerState"),n=y("updateColor"),s=A(null),d=A(null),u=C(()=>{var t;const{isGradient:o,alpha:c,activePointIndex:i=0,points:f=[]}=e,_=((t=d.value)==null?void 0:t.width)||0;return o?f[i].alpha*(_-14)|0:c*(_-14)|0}),l=C(()=>{const{isGradient:t,red:o,green:c,blue:i,activePointIndex:f=0,points:_=[]}=e;if(t){const g=_[f];return{background:`linear-gradient(to right, rgba(0, 0, 0, 0), rgb(${g.red}, ${g.green}, ${g.blue}))`}}else return{background:`linear-gradient(to right, rgba(0, 0, 0, 0), rgb(${o}, ${c}, ${i}))`}}),a=C(()=>({left:`${u.value}px`})),v=t=>{var o,c;const i=((o=d.value)==null?void 0:o.x)||0,f=t.pageX,_=((c=d.value)==null?void 0:c.width)||0;let g=f-i;return n({alpha:J(g,_)},"alpha"),{startX:f,positionX:g}},b=(t,{startX:o,positionX:c})=>{var i;const f=t.pageX-o,_=((i=d.value)==null?void 0:i.width)||0;c+=f;const g=J(c,_);return{positions:{positionX:c,startX:t.pageX},alpha:g}},p=j(v,(t,{startX:o,positionX:c})=>{const{positions:i,alpha:f}=b(t,{startX:o,positionX:c});return n({alpha:f},"alpha"),i},(t,{startX:o,positionX:c})=>{const{positions:i,alpha:f}=b(t,{startX:o,positionX:c});return n({alpha:f},"alpha"),i});return E(()=>{var t,o;s.value&&!((t=d.value)!=null&&t.width)&&(d.value=((o=s.value)==null?void 0:o.getBoundingClientRect())||null)}),(t,o)=>($(),S("div",{class:"relative w-full overflow-hidden rounded-10px h-14px cursor-pointer",onMousedown:o[0]||(o[0]=(...c)=>h(p)&&h(p)(...c))},[w("div",{class:"absolute left-0 right-0 top-0 bottom-0",style:R(h(l))},null,4),w("div",Ae,[w("div",{ref_key:"alphaMaskRef",ref:s,class:"wh-full relative"},[w("div",{class:"picker-pointer",style:R(h(a))},null,4)],512)])],32))}})),Ge=D(Xe,[["__scopeId","data-v-256c0c24"]]),Be=["onDblclick"],Oe=x({name:"AreaGradientPoint"}),Ee=x(I(P({},Oe),{props:{index:{type:Number,required:!0},point:{type:Object,required:!0},width:{type:Number,default:0},positions:{type:Object}},setup(r){const e=r,n=y("colorPickerState"),s=y("updateColor"),d=C(()=>n.activePointIndex===e.index?" active":""),u=C(()=>({left:`${e.point.left*((e.width-14)/100)}px`})),l=t=>{const o=t.pageX,c=t.pageY,i=o-(e.positions.x||0);return n.activePointIndex=e.index,{startX:o,startY:c,offsetX:i}},a=t=>{n.points[e.index].left=t,s({type:n.type},"type")},v=(t,{startX:o,offsetX:c})=>{const i=t.pageX-o;c+=i;const f=Z(c,e.width);return{positions:{offsetX:c,startX:t.pageX},left:f}},m=j(l,(t,{startX:o,offsetX:c})=>{const{positions:i,left:f}=v(t,{startX:o,offsetX:c});return a(f),i},(t,{startX:o,offsetX:c})=>{const{positions:i,left:f}=v(t,{startX:o,offsetX:c});return a(f),i}),p=()=>{let t=W(n.points);if(t.length<=2)return;const o=e.index,c=o===0?1:o-1;t=t==null?void 0:t.filter(i=>i.id!==e.point.id),n.activePointIndex=c,s({points:t},"points")};return(t,o)=>($(),S("div",{class:L(`picker-pointer${h(d)}`),style:R(h(u)),onMousedown:o[0]||(o[0]=N((...c)=>h(m)&&h(m)(...c),["stop"])),onDblclick:N(p,["stop"]),onClick:o[1]||(o[1]=N(()=>h(n).activePointIndex=e.index,["stop"]))},[w("span",{class:L(`child-point${h(d)}`)},null,2)],46,Be))}})),je=x({name:"AreaGradientPoints"}),De=x(I(P({},je),{setup(r){const e=y("colorPickerState"),n=y("updateColor"),s=A(null),d=A(null),u=C(()=>({background:K(e.points,"linear",90)})),l=a=>{const{x:v=0,width:b=0}=d.value||{},k=Z(a.pageX-v,b),{hue:m,saturation:p,value:t}=e,o=W(e.points),c=U(m,p,t,1),i=I(P({id:de()},c),{left:k});o==null||o.push(i),e.activePointIndex=o.findIndex(f=>f.id===i.id),n({points:o},"points")};return E(()=>{var a,v;s.value&&!((a=d.value)!=null&&a.width)&&(d.value=((v=s.value)==null?void 0:v.getBoundingClientRect())||null)}),(a,v)=>($(),S("div",{class:"gradient border-box w-full h-14px relative cursor-pointer rounded-10px mb-8px",style:R(h(u)),onClick:l},[w("div",{ref_key:"pointsContainerRef",ref:s,class:"wh-full relative"},[($(!0),S(Q,null,se(h(e).points,(b,k)=>{var m;return $(),V(Ee,{key:b.id,index:k,point:b,positions:h(d),width:(m=h(d))==null?void 0:m.width},null,8,["index","point","positions","width"])}),128))],512)],4))}})),Ne={class:"flex flex-col px-16px"},Le={class:"flex pb-16px"},Ve={class:"flex flex-col flex-1"},Ue=x({name:"Area"}),rt=x(I(P({},Ue),{setup(r){const e=y("colorPickerState");return(n,s)=>($(),S("div",Ne,[H(ye),h(e).isGradient?($(),V(De,{key:0})):re("",!0),w("div",Le,[H(Ce),w("div",Ve,[H(Me),H(Ge)])])]))}})),Ye={class:"flex items-center relative w-full rounded-6px text-[#28314d]"},Fe=["maxlength","type"],Te={class:"text-12px lining-15px font-bold mt-6px mb-0 text-[#1f2667]"},qe=x({name:"Input"}),ze=x(I(P({},qe),{props:{value:{default:""},label:{default:""},classes:{default:""},maxLen:{default:"3"},type:{default:"text"}},emits:["input","blur","focus","update:value"],setup(r,{emit:e}){const n=r,s=C({get:()=>n.value,set:a=>{e("update:value",a)}}),d=a=>{e("input",a)},u=()=>{e("blur")},l=()=>{e("focus")};return(a,v)=>($(),S("div",{class:L(["flex flex-shrink-0 items-center flex-col",n.classes])},[w("div",Ye,[ae(w("input",{"onUpdate:modelValue":v[0]||(v[0]=b=>ce(s)?s.value=b:null),class:"w-full outline-0 text-[#1f2667] text-center font-bold text-12px",maxlength:r.maxLen,type:n.type,onFocus:l,onBlur:u,onInput:d},null,40,Fe),[[le,h(s),void 0,{trim:!0}]])]),w("div",Te,ie(r.label),1)],2))}})),ee=D(ze,[["__scopeId","data-v-034b5687"]]),Je=x({name:"PreviewHex"}),Qe=x(I(P({},Je),{setup(r){const e=y("colorPickerState"),n=y("updateColor"),s=C(()=>{const{isGradient:u,activePointIndex:l}=e,a=e.points[l];return u?Y(a.red,a.green,a.blue):Y(e.red,e.green,e.blue)}),d=u=>{let l=u.target.value;if(!l&&l!==0)return;const a=xe(l);a&&n(a)};return(u,l)=>($(),V(ee,{value:h(s),label:"Hex","max-len":"7",classes:"hex mr-8px",onInput:d},null,8,["value"]))}})),Ke=x({name:"PreviewRGBItem"}),O=x(I(P({},Ke),{props:{type:{default:"text"},label:{default:""}},setup(r){const e=r,n=y("colorPickerState"),s=y("updateColor"),d=C(()=>{const{isGradient:l,red:a,green:v,blue:b,alpha:k,points:m=[],activePointIndex:p=0}=n,t=m[p];let o=0;switch(e.label){case"R":o=l?t.red:a;break;case"G":o=l?t.green:v;break;case"B":o=l?t.blue:b;break;case"A":o=~~((l?t.alpha:k)*100);break}return o}),u=l=>{let a=+l.target.value;const{isGradient:v,points:b=[],activePointIndex:k=0}=n;switch(b[k],e.label==="A"&&a>100?a=100:a<=0?a=0:a>255&&(a=255),e.label){case"R":s({red:a},"red");break;case"G":s({green:a},"green");break;case"B":s({blue:a},"blue");break;case"A":s({alpha:a/100},"alpha");break}};return(l,a)=>($(),S("div",null,[H(ee,{value:h(d),label:e.label,type:e.type,classes:e.label!=="A"?"mr-8px":"",onInput:u},null,8,["value","label","type","classes"])]))}})),We=x({name:"PreviewRGB"}),Ze=x(I(P({},We),{setup(r){return(e,n)=>($(),S(Q,null,[H(O,{type:"number",label:"R"}),H(O,{type:"number",label:"G"}),H(O,{type:"number",label:"B"}),H(O,{type:"number",label:"A"})],64))}})),et={class:"color-preview-area mb-8px px-16px"},tt={class:"w-full flex justify-between"},nt=x({name:"Preview"}),at=x(I(P({},nt),{setup(r){return(e,n)=>($(),S("div",et,[w("div",tt,[H(Qe),H(Ze)])]))}}));export{rt as _,at as a,D as b,j as u};
