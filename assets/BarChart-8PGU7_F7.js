import{v as St,r as C,j as h,B as vn}from"./index-XotTKJXm.js";import{_ as xn,a as pn,D as $t,j as kn,c as wt,q as At,X as Sn,z as wn}from"./nivo-axes.es-0gfNtaDj.js";import{c as dt,R as It,w as Mt,_ as Cn,i as Nt,a as Tn,b as Ct,d as it,k as Ut,e as Tt,f as Kt,g as jn,h as Ln,s as Wn,j as $n,l as qt,m as An,n as In,o as jt,p as Jt,q as Zt,r as Mn,t as Bn,u as On,v as En,x as _n,y as Vn,z as Pn,A as Fn,B as Rn,C as Qt,D as Dn,E as Hn,F as zn,G as Gn,H as Yn,I as Xn,J as Nn,K as Un,L as _e,Z as rt,M as ct,N as ce,$ as Kn,O as qn,P as en,Q as tn,S as nn,T as Bt,U as an,V as Jn,W as mt,X as Zn,Y as vt,a0 as Qn,a1 as ea,a2 as Ot,a3 as ta,a4 as na,a5 as aa,a6 as ia,a7 as ra,a8 as oa,a9 as la,aa as sa}from"./nivo-legends.es-8l03zlBA.js";import{m as da}from"./motion-qm8fETP0.js";import"./index-DvjpMm4x.js";var Et=Array.prototype.slice;function ua(e,t){return e[t]}function ca(){var e=dt([]),t=It,i=Mt,a=ua;function n(r){var o=e.apply(this,arguments),l,s=r.length,d=o.length,f=new Array(d),u;for(l=0;l<d;++l){for(var m=o[l],y=f[l]=new Array(s),p=0,g;p<s;++p)y[p]=g=[0,+a(r[p],m,p,r)],g.data=r[p];y.key=m}for(l=0,u=t(f);l<d;++l)f[u[l]].index=l;return i(f,u),f}return n.keys=function(r){return arguments.length?(e=typeof r=="function"?r:dt(Et.call(r)),n):e},n.value=function(r){return arguments.length?(a=typeof r=="function"?r:dt(+r),n):a},n.order=function(r){return arguments.length?(t=r==null?It:typeof r=="function"?r:dt(Et.call(r)),n):t},n.offset=function(r){return arguments.length?(i=r??Mt,n):i},n}var ha=xn;function fa(e,t){var i=[];return ha(e,function(a,n,r){t(a,n,r)&&i.push(a)}),i}var ga=fa,ba=Cn,ya=ga,ma=pn,va=Nt;function xa(e,t){var i=va(e)?ba:ya;return i(e,ma(t))}var pa=xa;const ka=St(pa);var Sa=Tn,wa=Ct,Ca="[object Number]";function Ta(e){return typeof e=="number"||wa(e)&&Sa(e)==Ca}var ja=Ta;const _t=St(ja);function La(e,t){for(var i=-1,a=e==null?0:e.length;++i<a&&t(e[i],i,e)!==!1;);return e}var Wa=La,$a=it,Aa=Ut;function Ia(e,t){return e&&$a(t,Aa(t),e)}var Ma=Ia,Ba=it,Oa=Tt;function Ea(e,t){return e&&Ba(t,Oa(t),e)}var _a=Ea,Va=it,Pa=Kt;function Fa(e,t){return Va(e,Pa(e),t)}var Ra=Fa,Da=jn,Ha=Ln,za=Kt,Ga=Wn,Ya=Object.getOwnPropertySymbols,Xa=Ya?function(e){for(var t=[];e;)Da(t,za(e)),e=Ha(e);return t}:Ga,rn=Xa,Na=it,Ua=rn;function Ka(e,t){return Na(e,Ua(e),t)}var qa=Ka,Ja=$n,Za=rn,Qa=Tt;function ei(e){return Ja(e,Qa,Za)}var on=ei,ti=Object.prototype,ni=ti.hasOwnProperty;function ai(e){var t=e.length,i=new e.constructor(t);return t&&typeof e[0]=="string"&&ni.call(e,"index")&&(i.index=e.index,i.input=e.input),i}var ii=ai,ri=qt;function oi(e,t){var i=t?ri(e.buffer):e.buffer;return new e.constructor(i,e.byteOffset,e.byteLength)}var li=oi,si=/\w*$/;function di(e){var t=new e.constructor(e.source,si.exec(e));return t.lastIndex=e.lastIndex,t}var ui=di,Vt=An,Pt=Vt?Vt.prototype:void 0,Ft=Pt?Pt.valueOf:void 0;function ci(e){return Ft?Object(Ft.call(e)):{}}var hi=ci,fi=qt,gi=li,bi=ui,yi=hi,mi=In,vi="[object Boolean]",xi="[object Date]",pi="[object Map]",ki="[object Number]",Si="[object RegExp]",wi="[object Set]",Ci="[object String]",Ti="[object Symbol]",ji="[object ArrayBuffer]",Li="[object DataView]",Wi="[object Float32Array]",$i="[object Float64Array]",Ai="[object Int8Array]",Ii="[object Int16Array]",Mi="[object Int32Array]",Bi="[object Uint8Array]",Oi="[object Uint8ClampedArray]",Ei="[object Uint16Array]",_i="[object Uint32Array]";function Vi(e,t,i){var a=e.constructor;switch(t){case ji:return fi(e);case vi:case xi:return new a(+e);case Li:return gi(e,i);case Wi:case $i:case Ai:case Ii:case Mi:case Bi:case Oi:case Ei:case _i:return mi(e,i);case pi:return new a;case ki:case Ci:return new a(e);case Si:return bi(e);case wi:return new a;case Ti:return yi(e)}}var Pi=Vi,Fi=jt,Ri=Ct,Di="[object Map]";function Hi(e){return Ri(e)&&Fi(e)==Di}var zi=Hi,Gi=zi,Yi=Zt,Rt=Jt,Dt=Rt&&Rt.isMap,Xi=Dt?Yi(Dt):Gi,Ni=Xi,Ui=jt,Ki=Ct,qi="[object Set]";function Ji(e){return Ki(e)&&Ui(e)==qi}var Zi=Ji,Qi=Zi,er=Zt,Ht=Jt,zt=Ht&&Ht.isSet,tr=zt?er(zt):Qi,nr=tr,ar=Mn,ir=Wa,rr=Fn,or=Ma,lr=_a,sr=Bn,dr=On,ur=Ra,cr=qa,hr=Pn,fr=on,gr=jt,br=ii,yr=Pi,mr=En,vr=Nt,xr=_n,pr=Ni,kr=Vn,Sr=nr,wr=Ut,Cr=Tt,Tr=1,jr=2,Lr=4,ln="[object Arguments]",Wr="[object Array]",$r="[object Boolean]",Ar="[object Date]",Ir="[object Error]",sn="[object Function]",Mr="[object GeneratorFunction]",Br="[object Map]",Or="[object Number]",dn="[object Object]",Er="[object RegExp]",_r="[object Set]",Vr="[object String]",Pr="[object Symbol]",Fr="[object WeakMap]",Rr="[object ArrayBuffer]",Dr="[object DataView]",Hr="[object Float32Array]",zr="[object Float64Array]",Gr="[object Int8Array]",Yr="[object Int16Array]",Xr="[object Int32Array]",Nr="[object Uint8Array]",Ur="[object Uint8ClampedArray]",Kr="[object Uint16Array]",qr="[object Uint32Array]",D={};D[ln]=D[Wr]=D[Rr]=D[Dr]=D[$r]=D[Ar]=D[Hr]=D[zr]=D[Gr]=D[Yr]=D[Xr]=D[Br]=D[Or]=D[dn]=D[Er]=D[_r]=D[Vr]=D[Pr]=D[Nr]=D[Ur]=D[Kr]=D[qr]=!0;D[Ir]=D[sn]=D[Fr]=!1;function ut(e,t,i,a,n,r){var o,l=t&Tr,s=t&jr,d=t&Lr;if(i&&(o=n?i(e,a,n,r):i(e)),o!==void 0)return o;if(!kr(e))return e;var f=vr(e);if(f){if(o=br(e),!l)return dr(e,o)}else{var u=gr(e),m=u==sn||u==Mr;if(xr(e))return sr(e,l);if(u==dn||u==ln||m&&!n){if(o=s||m?{}:mr(e),!l)return s?cr(e,lr(o,e)):ur(e,or(o,e))}else{if(!D[u])return n?e:{};o=yr(e,u,l)}}r||(r=new ar);var y=r.get(e);if(y)return y;r.set(e,o),Sr(e)?e.forEach(function(x){o.add(ut(x,t,i,x,e,r))}):pr(e)&&e.forEach(function(x,v){o.set(v,ut(x,t,i,v,e,r))});var p=d?s?fr:hr:s?Cr:wr,g=f?void 0:p(e);return ir(g||e,function(x,v){g&&(v=x,x=e[v]),rr(o,v,ut(x,t,i,v,e,r))}),o}var Jr=ut;function Zr(e,t,i){var a=-1,n=e.length;t<0&&(t=-t>n?0:n+t),i=i>n?n:i,i<0&&(i+=n),n=t>i?0:i-t>>>0,t>>>=0;for(var r=Array(n);++a<n;)r[a]=e[a+t];return r}var Qr=Zr,eo=Rn,to=Qr;function no(e,t){return t.length<2?e:eo(e,to(t,0,-1))}var ao=no,io=Qt,ro=Dn,oo=ao,lo=Hn;function so(e,t){return t=io(t,e),e=oo(e,t),e==null||delete e[lo(ro(t))]}var uo=so,co=zn;function ho(e){return co(e)?void 0:e}var fo=ho,go=Yn,bo=Jr,yo=uo,mo=Qt,vo=it,xo=fo,po=Gn,ko=on,So=1,wo=2,Co=4,To=po(function(e,t){var i={};if(e==null)return i;var a=!1;t=go(t,function(r){return r=mo(r,e),a||(a=r.length>1),r}),vo(e,ko(e),i),a&&(i=bo(i,So|wo|Co,xo));for(var n=t.length;n--;)yo(i,t[n]);return i}),jo=To;const un=St(jo);function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},we.apply(this,arguments)}var pt={dotSize:4,noteWidth:120,noteTextOffset:8,animate:!0},Lo=function(e){var t=typeof e;return C.isValidElement(e)||t==="string"||t==="function"||t==="object"},Wo=function(e){var t=typeof e;return t==="string"||t==="function"},nt=function(e){return e.type==="circle"},kt=function(e){return e.type==="dot"},at=function(e){return e.type==="rect"},$o=function(e){var t=e.data,i=e.annotations,a=e.getPosition,n=e.getDimensions;return i.reduce(function(r,o){var l=o.offset||0;return[].concat(r,ka(t,o.match).map(function(s){var d=a(s),f=n(s);return(nt(o)||at(o))&&(f.size=f.size+2*l,f.width=f.width+2*l,f.height=f.height+2*l),we({},un(o,["match","offset"]),d,f,{size:o.size||f.size,datum:s})}))},[])},Ao=function(e,t,i,a){var n=Math.atan2(a-t,i-e);return Un(qn(n))},cn=function(e){var t,i,a=e.x,n=e.y,r=e.noteX,o=e.noteY,l=e.noteWidth,s=l===void 0?pt.noteWidth:l,d=e.noteTextOffset,f=d===void 0?pt.noteTextOffset:d;if(_t(r))t=a+r;else{if(r.abs===void 0)throw new Error("noteX should be either a number or an object containing an 'abs' property");t=r.abs}if(_t(o))i=n+o;else{if(o.abs===void 0)throw new Error("noteY should be either a number or an object containing an 'abs' property");i=o.abs}var u=a,m=n,y=Ao(a,n,t,i);if(nt(e)){var p=Xn(Nn(y),e.size/2);u+=p.x,m+=p.y}if(at(e)){var g=Math.round((y+90)/45)%8;g===0&&(m-=e.height/2),g===1&&(u+=e.width/2,m-=e.height/2),g===2&&(u+=e.width/2),g===3&&(u+=e.width/2,m+=e.height/2),g===4&&(m+=e.height/2),g===5&&(u-=e.width/2,m+=e.height/2),g===6&&(u-=e.width/2),g===7&&(u-=e.width/2,m-=e.height/2)}var x=t,v=t;return(y+90)%360>180?(x-=s,v-=s):v+=s,{points:[[u,m],[t,i],[v,i]],text:[x,i-f],angle:y+90}},hn=function(e){var t=e.data,i=e.annotations,a=e.getPosition,n=e.getDimensions;return C.useMemo(function(){return $o({data:t,annotations:i,getPosition:a,getDimensions:n})},[t,i,a,n])},Io=function(e){var t=e.annotations;return C.useMemo(function(){return t.map(function(i){return we({},i,{computed:cn(we({},i))})})},[t])},Mo=function(e){return C.useMemo(function(){return cn(e)},[e])},Bo=function(e){var t=e.datum,i=e.x,a=e.y,n=e.note,r=_e(),o=rt(),l=o.animate,s=o.config,d=ct({x:i,y:a,config:s,immediate:!l});return typeof n=="function"?C.createElement(n,{x:i,y:a,datum:t}):h.jsxs(h.Fragment,{children:[r.annotations.text.outlineWidth>0&&h.jsx(ce.text,{x:d.x,y:d.y,style:we({},r.annotations.text,{strokeLinejoin:"round",strokeWidth:2*r.annotations.text.outlineWidth,stroke:r.annotations.text.outlineColor}),children:n}),h.jsx(ce.text,{x:d.x,y:d.y,style:un(r.annotations.text,["outlineWidth","outlineColor"]),children:n})]})},Gt=function(e){var t=e.points,i=e.isOutline,a=i!==void 0&&i,n=_e(),r=C.useMemo(function(){var s=t[0];return t.slice(1).reduce(function(d,f){return d+" L"+f[0]+","+f[1]},"M"+s[0]+","+s[1])},[t]),o=Kn(r);if(a&&n.annotations.link.outlineWidth<=0)return null;var l=we({},n.annotations.link);return a&&(l.strokeLinecap="square",l.strokeWidth=n.annotations.link.strokeWidth+2*n.annotations.link.outlineWidth,l.stroke=n.annotations.link.outlineColor,l.opacity=n.annotations.link.outlineOpacity),h.jsx(ce.path,{fill:"none",d:o,style:l})},Oo=function(e){var t=e.x,i=e.y,a=e.size,n=_e(),r=rt(),o=r.animate,l=r.config,s=ct({x:t,y:i,radius:a/2,config:l,immediate:!o});return h.jsxs(h.Fragment,{children:[n.annotations.outline.outlineWidth>0&&h.jsx(ce.circle,{cx:s.x,cy:s.y,r:s.radius,style:we({},n.annotations.outline,{fill:"none",strokeWidth:n.annotations.outline.strokeWidth+2*n.annotations.outline.outlineWidth,stroke:n.annotations.outline.outlineColor,opacity:n.annotations.outline.outlineOpacity})}),h.jsx(ce.circle,{cx:s.x,cy:s.y,r:s.radius,style:n.annotations.outline})]})},Eo=function(e){var t=e.x,i=e.y,a=e.size,n=a===void 0?pt.dotSize:a,r=_e(),o=rt(),l=o.animate,s=o.config,d=ct({x:t,y:i,radius:n/2,config:s,immediate:!l});return h.jsxs(h.Fragment,{children:[r.annotations.outline.outlineWidth>0&&h.jsx(ce.circle,{cx:d.x,cy:d.y,r:d.radius,style:we({},r.annotations.outline,{fill:"none",strokeWidth:2*r.annotations.outline.outlineWidth,stroke:r.annotations.outline.outlineColor,opacity:r.annotations.outline.outlineOpacity})}),h.jsx(ce.circle,{cx:d.x,cy:d.y,r:d.radius,style:r.annotations.symbol})]})},_o=function(e){var t=e.x,i=e.y,a=e.width,n=e.height,r=e.borderRadius,o=r===void 0?6:r,l=_e(),s=rt(),d=s.animate,f=s.config,u=ct({x:t-a/2,y:i-n/2,width:a,height:n,config:f,immediate:!d});return h.jsxs(h.Fragment,{children:[l.annotations.outline.outlineWidth>0&&h.jsx(ce.rect,{x:u.x,y:u.y,rx:o,ry:o,width:u.width,height:u.height,style:we({},l.annotations.outline,{fill:"none",strokeWidth:l.annotations.outline.strokeWidth+2*l.annotations.outline.outlineWidth,stroke:l.annotations.outline.outlineColor,opacity:l.annotations.outline.outlineOpacity})}),h.jsx(ce.rect,{x:u.x,y:u.y,rx:o,ry:o,width:u.width,height:u.height,style:l.annotations.outline})]})},Vo=function(e){var t=e.datum,i=e.x,a=e.y,n=e.note,r=Mo(e);if(!Lo(n))throw new Error("note should be a valid react element");return h.jsxs(h.Fragment,{children:[h.jsx(Gt,{points:r.points,isOutline:!0}),nt(e)&&h.jsx(Oo,{x:i,y:a,size:e.size}),kt(e)&&h.jsx(Eo,{x:i,y:a,size:e.size}),at(e)&&h.jsx(_o,{x:i,y:a,width:e.width,height:e.height,borderRadius:e.borderRadius}),h.jsx(Gt,{points:r.points}),h.jsx(Bo,{datum:t,x:r.text[0],y:r.text[1],note:n})]})},Yt=function(e,t){t.forEach(function(i,a){var n=i[0],r=i[1];a===0?e.moveTo(n,r):e.lineTo(n,r)})},Po=function(e,t){var i=t.annotations,a=t.theme;i.length!==0&&(e.save(),i.forEach(function(n){if(!Wo(n.note))throw new Error("note is invalid for canvas implementation");a.annotations.link.outlineWidth>0&&(e.lineCap="square",e.strokeStyle=a.annotations.link.outlineColor,e.lineWidth=a.annotations.link.strokeWidth+2*a.annotations.link.outlineWidth,e.beginPath(),Yt(e,n.computed.points),e.stroke(),e.lineCap="butt"),nt(n)&&a.annotations.outline.outlineWidth>0&&(e.strokeStyle=a.annotations.outline.outlineColor,e.lineWidth=a.annotations.outline.strokeWidth+2*a.annotations.outline.outlineWidth,e.beginPath(),e.arc(n.x,n.y,n.size/2,0,2*Math.PI),e.stroke()),kt(n)&&a.annotations.symbol.outlineWidth>0&&(e.strokeStyle=a.annotations.symbol.outlineColor,e.lineWidth=2*a.annotations.symbol.outlineWidth,e.beginPath(),e.arc(n.x,n.y,n.size/2,0,2*Math.PI),e.stroke()),at(n)&&a.annotations.outline.outlineWidth>0&&(e.strokeStyle=a.annotations.outline.outlineColor,e.lineWidth=a.annotations.outline.strokeWidth+2*a.annotations.outline.outlineWidth,e.beginPath(),e.rect(n.x-n.width/2,n.y-n.height/2,n.width,n.height),e.stroke()),e.strokeStyle=a.annotations.link.stroke,e.lineWidth=a.annotations.link.strokeWidth,e.beginPath(),Yt(e,n.computed.points),e.stroke(),nt(n)&&(e.strokeStyle=a.annotations.outline.stroke,e.lineWidth=a.annotations.outline.strokeWidth,e.beginPath(),e.arc(n.x,n.y,n.size/2,0,2*Math.PI),e.stroke()),kt(n)&&(e.fillStyle=a.annotations.symbol.fill,e.beginPath(),e.arc(n.x,n.y,n.size/2,0,2*Math.PI),e.fill()),at(n)&&(e.strokeStyle=a.annotations.outline.stroke,e.lineWidth=a.annotations.outline.strokeWidth,e.beginPath(),e.rect(n.x-n.width/2,n.y-n.height/2,n.width,n.height),e.stroke()),typeof n.note=="function"?n.note(e,{datum:n.datum,x:n.computed.text[0],y:n.computed.text[1],theme:a}):(e.font=a.annotations.text.fontSize+"px "+a.annotations.text.fontFamily,e.textAlign="left",e.textBaseline="alphabetic",e.fillStyle=a.annotations.text.fill,e.strokeStyle=a.annotations.text.outlineColor,e.lineWidth=2*a.annotations.text.outlineWidth,a.annotations.text.outlineWidth>0&&(e.lineJoin="round",e.strokeText(n.note,n.computed.text[0],n.computed.text[1]),e.lineJoin="miter"),e.fillText(n.note,n.computed.text[0],n.computed.text[1]))}),e.restore())};function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},_.apply(this,arguments)}function Ze(e,t){if(e==null)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}var Xt,Fo=function(e){var t=e.bars,i=e.annotations,a=hn({data:t,annotations:i,getPosition:function(n){return{x:n.x+n.width/2,y:n.y+n.height/2}},getDimensions:function(n){var r=n.height,o=n.width;return{width:o,height:r,size:Math.max(o,r)}}});return h.jsx(h.Fragment,{children:a.map(function(n,r){return h.jsx(Vo,_({},n),r)})})},Ro=function(e){var t=e.width,i=e.height,a=e.legends,n=e.toggleSerie;return h.jsx(h.Fragment,{children:a.map(function(r,o){var l,s=r[0],d=r[1];return h.jsx(sa,_({},s,{containerWidth:t,containerHeight:i,data:(l=s.data)!=null?l:d,toggleSerie:s.toggleSerie&&s.dataFrom==="keys"?n:void 0}),o)})})},Do=["data"],Ho=function(e){var t,i=e.bar,a=i.data,n=Ze(i,Do),r=e.style,o=r.borderColor,l=r.color,s=r.height,d=r.labelColor,f=r.labelOpacity,u=r.labelX,m=r.labelY,y=r.transform,p=r.width,g=e.borderRadius,x=e.borderWidth,v=e.label,k=e.shouldRenderLabel,T=e.isInteractive,w=e.onClick,V=e.onMouseEnter,$=e.onMouseLeave,M=e.tooltip,L=e.isFocusable,A=e.ariaLabel,W=e.ariaLabelledBy,P=e.ariaDescribedBy,F=_e(),B=nn(),Y=B.showTooltipFromEvent,z=B.showTooltipAt,H=B.hideTooltip,O=C.useMemo(function(){return function(){return C.createElement(M,_({},n,a))}},[M,n,a]),U=C.useCallback(function(q){w==null||w(_({color:n.color},a),q)},[n,a,w]),le=C.useCallback(function(q){return Y(O(),q)},[Y,O]),Q=C.useCallback(function(q){V==null||V(a,q),Y(O(),q)},[a,V,Y,O]),he=C.useCallback(function(q){$==null||$(a,q),H()},[a,H,$]),ae=C.useCallback(function(){z(O(),[n.absX+n.width/2,n.absY])},[z,O,n]),Ve=C.useCallback(function(){H()},[H]);return h.jsxs(ce.g,{transform:y,children:[h.jsx(ce.rect,{width:Bt(p,function(q){return Math.max(q,0)}),height:Bt(s,function(q){return Math.max(q,0)}),rx:g,ry:g,fill:(t=a.fill)!=null?t:l,strokeWidth:x,stroke:o,focusable:L,tabIndex:L?0:void 0,"aria-label":A?A(a):void 0,"aria-labelledby":W?W(a):void 0,"aria-describedby":P?P(a):void 0,onMouseEnter:T?Q:void 0,onMouseMove:T?le:void 0,onMouseLeave:T?he:void 0,onClick:T?U:void 0,onFocus:T&&L?ae:void 0,onBlur:T&&L?Ve:void 0}),k&&h.jsx(ce.text,{x:u,y:m,textAnchor:"middle",dominantBaseline:"central",fillOpacity:f,style:_({},F.labels.text,{pointerEvents:"none",fill:d}),children:v})]})},zo=["color","label"],Go=function(e){var t=e.color,i=e.label,a=Ze(e,zo);return h.jsx(Zn,{id:i,value:a.formattedValue,enableChip:!0,color:t})},G={indexBy:"id",keys:["value"],groupMode:"stacked",layout:"vertical",reverse:!1,minValue:"auto",maxValue:"auto",valueScale:{type:"linear"},indexScale:{type:"band",round:!0},padding:.1,innerPadding:0,axisBottom:{},axisLeft:{},enableGridX:!1,enableGridY:!0,enableLabel:!0,label:"formattedValue",labelSkipWidth:0,labelSkipHeight:0,labelTextColor:{from:"theme",theme:"labels.text.fill"},colorBy:"id",colors:{scheme:"nivo"},borderRadius:0,borderWidth:0,borderColor:{from:"color"},isInteractive:!0,tooltip:Go,tooltipLabel:function(e){return e.id+" - "+e.indexValue},legends:[],initialHiddenIds:[],annotations:[],markers:[]},N=_({},G,{layers:["grid","axes","bars","markers","legends","annotations"],barComponent:Ho,defs:[],fill:[],animate:!0,motionConfig:"default",role:"img",isFocusable:!1}),oe=_({},G,{layers:["grid","axes","bars","legends","annotations"],pixelRatio:typeof window<"u"&&(Xt=window.devicePixelRatio)!=null?Xt:1}),fn=function(e,t,i,a,n,r){return wt(a,{all:e.map(t),min:0,max:0},n,r).padding(i)},gn=function(e,t){return e.map(function(i){return _({},t.reduce(function(a,n){return a[n]=null,a},{}),i)})},ht=function(e){return Object.keys(e).reduce(function(t,i){return e[i]&&(t[i]=e[i]),t},{})},ft=function(e){return[e,Number(e)]},Yo=["layout","minValue","maxValue","reverse","width","height","padding","innerPadding","valueScale","indexScale","hiddenIds"],Lt=function(e,t){return e>t},bn=function(e,t){return e<t},yn=function(e,t){return Array.from(" ".repeat(t-e),function(i,a){return e+a})},Xo=function(e){return Lt(e,0)?0:e},No=function(e,t,i,a){var n=e.data,r=e.formatValue,o=e.getColor,l=e.getIndex,s=e.getTooltipLabel,d=e.innerPadding,f=d===void 0?0:d,u=e.keys,m=e.xScale,y=e.yScale,p=e.margin,g=i?bn:Lt,x=n.map(ht),v=[];return u.forEach(function(k,T){return yn(0,m.domain().length).forEach(function(w){var V,$,M,L=ft(n[w][k]),A=L[0],W=L[1],P=l(n[w]),F=((V=m(P))!=null?V:0)+t*T+f*T,B=g($=W,0)?(M=y($))!=null?M:0:a,Y=function(H,O){var U;return g(H,0)?a-O:((U=y(H))!=null?U:0)-a}(W,B),z={id:k,value:A===null?A:W,formattedValue:r(W),hidden:!1,index:w,indexValue:P,data:x[w]};v.push({key:k+"."+z.indexValue,index:v.length,data:z,x:F,y:B,absX:p.left+F,absY:p.top+B,width:t,height:Y,color:o(z),label:s(z)})})}),v},Uo=function(e,t,i,a){var n=e.data,r=e.formatValue,o=e.getIndex,l=e.getColor,s=e.getTooltipLabel,d=e.keys,f=e.innerPadding,u=f===void 0?0:f,m=e.xScale,y=e.yScale,p=e.margin,g=i?bn:Lt,x=n.map(ht),v=[];return d.forEach(function(k,T){return yn(0,y.domain().length).forEach(function(w){var V,$,M,L=ft(n[w][k]),A=L[0],W=L[1],P=o(n[w]),F=g($=W,0)?a:(M=m($))!=null?M:0,B=((V=y(P))!=null?V:0)+t*T+u*T,Y=function(H,O){var U;return g(H,0)?((U=m(H))!=null?U:0)-a:a-O}(W,F),z={id:k,value:A===null?A:W,formattedValue:r(W),hidden:!1,index:w,indexValue:P,data:x[w]};v.push({key:k+"."+z.indexValue,index:v.length,data:z,x:F,y:B,absX:p.left+F,absY:p.top+B,width:Y,height:t,color:l(z),label:s(z)})})}),v},Ko=function(e){var t,i,a=e.layout,n=e.minValue,r=e.maxValue,o=e.reverse,l=e.width,s=e.height,d=e.padding,f=d===void 0?0:d,u=e.innerPadding,m=u===void 0?0:u,y=e.valueScale,p=e.indexScale,g=e.hiddenIds,x=g===void 0?[]:g,v=Ze(e,Yo),k=v.keys.filter(function(Q){return!x.includes(Q)}),T=gn(v.data,k),w=a==="vertical"?["y","x",l]:["x","y",s],V=w[0],$=w[1],M=w[2],L=fn(T,v.getIndex,f,p,M,$),A=_({max:r,min:n,reverse:o},y),W=A.min==="auto"?Xo:function(Q){return Q},P=T.reduce(function(Q,he){return[].concat(Q,k.map(function(ae){return he[ae]}))},[]).filter(Boolean),F=W(Math.min.apply(Math,P)),B=(i=Math.max.apply(Math,P),isFinite(i)?i:0),Y=wt(A,{all:P,min:F,max:B},V==="x"?l:s,V),z=a==="vertical"?[L,Y]:[Y,L],H=z[0],O=z[1],U=(L.bandwidth()-m*(k.length-1))/k.length,le=[_({},v,{data:T,keys:k,innerPadding:m,xScale:H,yScale:O}),U,A.reverse,(t=Y(0))!=null?t:0];return{xScale:H,yScale:O,bars:U>0?a==="vertical"?No.apply(void 0,le):Uo.apply(void 0,le):[]}},qo=["data","layout","minValue","maxValue","reverse","width","height","padding","valueScale","indexScale","hiddenIds"],Jo=function e(t){var i;return t.some(Array.isArray)?e((i=[]).concat.apply(i,t)):t},Zo=function(e,t,i){var a=e.formatValue,n=e.getColor,r=e.getIndex,o=e.getTooltipLabel,l=e.innerPadding,s=e.stackedData,d=e.xScale,f=e.yScale,u=e.margin,m=[];return s.forEach(function(y){return d.domain().forEach(function(p,g){var x,v,k=y[g],T=(x=d(r(k.data)))!=null?x:0,w=((v=function(W){return f(W[i?0:1])}(k))!=null?v:0)+.5*l,V=function(W,P){var F;return((F=f(W[i?1:0]))!=null?F:0)-P}(k,w)-l,$=ft(k.data[y.key]),M=$[0],L=$[1],A={id:y.key,value:M===null?M:L,formattedValue:a(L),hidden:!1,index:g,indexValue:p,data:ht(k.data)};m.push({key:y.key+"."+p,index:m.length,data:A,x:T,y:w,absX:u.left+T,absY:u.top+w,width:t,height:V,color:n(A),label:o(A)})})}),m},Qo=function(e,t,i){var a=e.formatValue,n=e.getColor,r=e.getIndex,o=e.getTooltipLabel,l=e.innerPadding,s=e.stackedData,d=e.xScale,f=e.yScale,u=e.margin,m=[];return s.forEach(function(y){return f.domain().forEach(function(p,g){var x,v,k=y[g],T=(x=f(r(k.data)))!=null?x:0,w=((v=function(W){return d(W[i?1:0])}(k))!=null?v:0)+.5*l,V=function(W,P){var F;return((F=d(W[i?0:1]))!=null?F:0)-P}(k,w)-l,$=ft(k.data[y.key]),M=$[0],L=$[1],A={id:y.key,value:M===null?M:L,formattedValue:a(L),hidden:!1,index:g,indexValue:p,data:ht(k.data)};m.push({key:y.key+"."+p,index:m.length,data:A,x:w,y:T,absX:u.left+w,absY:u.top+T,width:V,height:t,color:n(A),label:o(A)})})}),m},el=function(e){var t,i=e.data,a=e.layout,n=e.minValue,r=e.maxValue,o=e.reverse,l=e.width,s=e.height,d=e.padding,f=d===void 0?0:d,u=e.valueScale,m=e.indexScale,y=e.hiddenIds,p=y===void 0?[]:y,g=Ze(e,qo),x=g.keys.filter(function(U){return!p.includes(U)}),v=ca().keys(x).offset(na)(gn(i,x)),k=a==="vertical"?["y","x",l]:["x","y",s],T=k[0],w=k[1],V=k[2],$=fn(i,g.getIndex,f,m,V,w),M=_({max:r,min:n,reverse:o},u),L=(t=Jo(v),u.type==="log"?t.filter(function(U){return U!==0}):t),A=Math.min.apply(Math,L),W=Math.max.apply(Math,L),P=wt(M,{all:L,min:A,max:W},T==="x"?l:s,T),F=a==="vertical"?[$,P]:[P,$],B=F[0],Y=F[1],z=g.innerPadding>0?g.innerPadding:0,H=$.bandwidth(),O=[_({},g,{innerPadding:z,stackedData:v,xScale:B,yScale:Y}),H,M.reverse];return{xScale:B,yScale:Y,bars:H>0?a==="vertical"?Zo.apply(void 0,O):Qo.apply(void 0,O):[]}},tl=function(e){var t=e.bars,i=e.direction,a=e.from,n=e.groupMode,r=e.layout,o=e.legendLabel,l=e.reverse,s=aa(o??(a==="indexes"?"indexValue":"id"));return a==="indexes"?function(d,f,u){var m=At(d.map(function(y){var p,g;return{id:(p=y.data.indexValue)!=null?p:"",label:u(y.data),hidden:y.data.hidden,color:(g=y.color)!=null?g:"#000"}}),function(y){return y.id});return f==="horizontal"&&m.reverse(),m}(t,r,s):function(d,f,u,m,y,p){var g=At(d.map(function(x){var v;return{id:x.data.id,label:p(x.data),hidden:x.data.hidden,color:(v=x.color)!=null?v:"#000"}}),function(x){return x.id});return(f==="vertical"&&m==="stacked"&&u==="column"&&y!==!0||f==="horizontal"&&m==="stacked"&&y===!0)&&g.reverse(),g}(t,r,i,n,l,s)},mn=function(e){var t=e.indexBy,i=t===void 0?G.indexBy:t,a=e.keys,n=a===void 0?G.keys:a,r=e.label,o=r===void 0?G.label:r,l=e.tooltipLabel,s=l===void 0?G.tooltipLabel:l,d=e.valueFormat,f=e.colors,u=f===void 0?G.colors:f,m=e.colorBy,y=m===void 0?G.colorBy:m,p=e.borderColor,g=p===void 0?G.borderColor:p,x=e.labelTextColor,v=x===void 0?G.labelTextColor:x,k=e.groupMode,T=k===void 0?G.groupMode:k,w=e.layout,V=w===void 0?G.layout:w,$=e.reverse,M=$===void 0?G.reverse:$,L=e.data,A=e.minValue,W=A===void 0?G.minValue:A,P=e.maxValue,F=P===void 0?G.maxValue:P,B=e.margin,Y=e.width,z=e.height,H=e.padding,O=H===void 0?G.padding:H,U=e.innerPadding,le=U===void 0?G.innerPadding:U,Q=e.valueScale,he=Q===void 0?G.valueScale:Q,ae=e.indexScale,Ve=ae===void 0?G.indexScale:ae,q=e.initialHiddenIds,Ue=q===void 0?G.initialHiddenIds:q,Pe=e.enableLabel,Ce=Pe===void 0?G.enableLabel:Pe,Ae=e.labelSkipWidth,be=Ae===void 0?G.labelSkipWidth:Ae,Fe=e.labelSkipHeight,Ie=Fe===void 0?G.labelSkipHeight:Fe,Re=e.legends,De=Re===void 0?G.legends:Re,He=e.legendLabel,ze=C.useState(Ue??[]),Te=ze[0],se=ze[1],Ke=C.useCallback(function(j){se(function(E){return E.indexOf(j)>-1?E.filter(function(ge){return ge!==j}):[].concat(E,[j])})},[]),je=vt(i),Le=vt(o),ye=vt(s),fe=Qn(d),Ge=_e(),Me=ea(u,y),ie=Ot(g,Ge),me=Ot(v,Ge),J=(T==="grouped"?Ko:el)({layout:V,reverse:M,data:L,getIndex:je,keys:n,minValue:W,maxValue:F,width:Y,height:z,getColor:Me,padding:O,innerPadding:le,valueScale:he,indexScale:Ve,hiddenIds:Te,formatValue:fe,getTooltipLabel:ye,margin:B}),X=J.bars,We=J.xScale,ee=J.yScale,ve=C.useMemo(function(){return X.filter(function(j){return j.data.value!==null}).map(function(j,E){return _({},j,{index:E})})},[X]),xe=C.useCallback(function(j){var E=j.width,ge=j.height;return!!Ce&&!(be>0&&E<be)&&!(Ie>0&&ge<Ie)},[Ce,be,Ie]),pe=C.useMemo(function(){return n.map(function(j){var E=X.find(function(ge){return ge.data.id===j});return _({},E,{data:_({id:j},E==null?void 0:E.data,{hidden:Te.includes(j)})})})},[Te,n,X]),$e=C.useMemo(function(){return De.map(function(j){return[j,tl({bars:j.dataFrom==="keys"?pe:X,direction:j.direction,from:j.dataFrom,groupMode:T,layout:V,legendLabel:He,reverse:M})]})},[De,pe,X,T,V,He,M]);return{bars:X,barsWithValue:ve,xScale:We,yScale:ee,getIndex:je,getLabel:Le,getTooltipLabel:ye,formatValue:fe,getColor:Me,getBorderColor:ie,getLabelColor:me,shouldRenderBarLabel:xe,hiddenIds:Te,toggleSerie:Ke,legendsWithData:$e}},nl=["isInteractive","animate","motionConfig","theme","renderWrapper"],al=function(e){var t=e.data,i=e.indexBy,a=e.keys,n=e.margin,r=e.width,o=e.height,l=e.groupMode,s=e.layout,d=e.reverse,f=e.minValue,u=e.maxValue,m=e.valueScale,y=e.indexScale,p=e.padding,g=e.innerPadding,x=e.axisTop,v=e.axisRight,k=e.axisBottom,T=k===void 0?N.axisBottom:k,w=e.axisLeft,V=w===void 0?N.axisLeft:w,$=e.enableGridX,M=$===void 0?N.enableGridX:$,L=e.enableGridY,A=L===void 0?N.enableGridY:L,W=e.gridXValues,P=e.gridYValues,F=e.layers,B=F===void 0?N.layers:F,Y=e.barComponent,z=Y===void 0?N.barComponent:Y,H=e.enableLabel,O=H===void 0?N.enableLabel:H,U=e.label,le=e.labelSkipWidth,Q=le===void 0?N.labelSkipWidth:le,he=e.labelSkipHeight,ae=he===void 0?N.labelSkipHeight:he,Ve=e.labelTextColor,q=e.markers,Ue=q===void 0?N.markers:q,Pe=e.colorBy,Ce=e.colors,Ae=e.defs,be=Ae===void 0?N.defs:Ae,Fe=e.fill,Ie=Fe===void 0?N.fill:Fe,Re=e.borderRadius,De=Re===void 0?N.borderRadius:Re,He=e.borderWidth,ze=He===void 0?N.borderWidth:He,Te=e.borderColor,se=e.annotations,Ke=se===void 0?N.annotations:se,je=e.legendLabel,Le=e.tooltipLabel,ye=e.valueFormat,fe=e.isInteractive,Ge=fe===void 0?N.isInteractive:fe,Me=e.tooltip,ie=Me===void 0?N.tooltip:Me,me=e.onClick,J=e.onMouseEnter,X=e.onMouseLeave,We=e.legends,ee=e.role,ve=ee===void 0?N.role:ee,xe=e.ariaLabel,pe=e.ariaLabelledBy,$e=e.ariaDescribedBy,j=e.isFocusable,E=j===void 0?N.isFocusable:j,ge=e.barAriaLabel,Be=e.barAriaLabelledBy,Oe=e.barAriaDescribedBy,ot=e.initialHiddenIds,Qe=rt(),et=Qe.animate,lt=Qe.config,Ee=an(r,o,n),qe=Ee.outerWidth,st=Ee.outerHeight,Ye=Ee.margin,de=Ee.innerWidth,ke=Ee.innerHeight,re=mn({indexBy:i,label:U,tooltipLabel:Le,valueFormat:ye,colors:Ce,colorBy:Pe,borderColor:Te,labelTextColor:Ve,groupMode:l,layout:s,reverse:d,data:t,keys:a,minValue:f,maxValue:u,margin:Ye,width:de,height:ke,padding:p,innerPadding:g,valueScale:m,indexScale:y,enableLabel:O,labelSkipWidth:Q,labelSkipHeight:ae,legends:We,legendLabel:je,initialHiddenIds:ot}),Xe=re.bars,gt=re.barsWithValue,Ne=re.xScale,b=re.yScale,S=re.getLabel,R=re.getTooltipLabel,K=re.getBorderColor,I=re.getLabelColor,ue=re.shouldRenderBarLabel,te=re.toggleSerie,Z=re.legendsWithData,bt=ia(gt,{keys:function(c){return c.key},from:function(c){return _({borderColor:K(c),color:c.color,height:0,labelColor:I(c),labelOpacity:0,labelX:c.width/2,labelY:c.height/2,transform:"translate("+c.x+", "+(c.y+c.height)+")",width:c.width},s==="vertical"?{}:{height:c.height,transform:"translate("+c.x+", "+c.y+")",width:0})},enter:function(c){return{borderColor:K(c),color:c.color,height:c.height,labelColor:I(c),labelOpacity:1,labelX:c.width/2,labelY:c.height/2,transform:"translate("+c.x+", "+c.y+")",width:c.width}},update:function(c){return{borderColor:K(c),color:c.color,height:c.height,labelColor:I(c),labelOpacity:1,labelX:c.width/2,labelY:c.height/2,transform:"translate("+c.x+", "+c.y+")",width:c.width}},leave:function(c){return _({borderColor:K(c),color:c.color,height:0,labelColor:I(c),labelOpacity:0,labelX:c.width/2,labelY:0,transform:"translate("+c.x+", "+(c.y+c.height)+")",width:c.width},s==="vertical"?{}:{labelX:0,labelY:c.height/2,height:c.height,transform:"translate("+c.x+", "+c.y+")",width:0})},config:lt,immediate:!et,initial:et?void 0:null}),Je=C.useMemo(function(){return{borderRadius:De,borderWidth:ze,enableLabel:O,isInteractive:Ge,labelSkipWidth:Q,labelSkipHeight:ae,onClick:me,onMouseEnter:J,onMouseLeave:X,getTooltipLabel:R,tooltip:ie,isFocusable:E,ariaLabel:ge,ariaLabelledBy:Be,ariaDescribedBy:Oe}},[De,ze,O,R,Ge,ae,Q,me,J,X,ie,E,ge,Be,Oe]),tt=ra(be,Xe,Ie,{dataKey:"data",targetKey:"data.fill"}),Se={annotations:null,axes:null,bars:null,grid:null,legends:null,markers:null};B.includes("annotations")&&(Se.annotations=h.jsx(Fo,{bars:Xe,annotations:Ke},"annotations")),B.includes("axes")&&(Se.axes=h.jsx(Sn,{xScale:Ne,yScale:b,width:de,height:ke,top:x,right:v,bottom:T,left:V},"axes")),B.includes("bars")&&(Se.bars=h.jsx(C.Fragment,{children:bt(function(c,ne){return C.createElement(z,_({},Je,{bar:ne,style:c,shouldRenderLabel:ue(ne),label:S(ne.data)}))})},"bars")),B.includes("grid")&&(Se.grid=h.jsx(wn,{width:de,height:ke,xScale:M?Ne:null,yScale:A?b:null,xValues:W,yValues:P},"grid")),B.includes("legends")&&(Se.legends=h.jsx(Ro,{width:de,height:ke,legends:Z,toggleSerie:te},"legends")),B.includes("markers")&&(Se.markers=h.jsx(oa,{markers:Ue,width:de,height:ke,xScale:Ne,yScale:b},"markers"));var yt=C.useMemo(function(){return _({},Je,{margin:Ye,width:r,height:o,innerWidth:de,innerHeight:ke,bars:Xe,legendData:Z,enableLabel:O,xScale:Ne,yScale:b,tooltip:ie,getTooltipLabel:R,onClick:me,onMouseEnter:J,onMouseLeave:X})},[Je,Ye,r,o,de,ke,Xe,Z,O,Ne,b,ie,R,me,J,X]);return h.jsx(la,{width:qe,height:st,margin:Ye,defs:tt,role:ve,ariaLabel:xe,ariaLabelledBy:pe,ariaDescribedBy:$e,isFocusable:E,children:B.map(function(c,ne){var Wt;return typeof c=="function"?h.jsx(C.Fragment,{children:C.createElement(c,yt)},ne):(Wt=Se==null?void 0:Se[c])!=null?Wt:null})})},il=function(e){var t=e.isInteractive,i=t===void 0?N.isInteractive:t,a=e.animate,n=a===void 0?N.animate:a,r=e.motionConfig,o=r===void 0?N.motionConfig:r,l=e.theme,s=e.renderWrapper,d=Ze(e,nl);return h.jsx(en,{animate:n,isInteractive:i,motionConfig:o,renderWrapper:s,theme:l,children:h.jsx(al,_({isInteractive:i},d))})},rl=["isInteractive","renderWrapper","theme"],xt=function(e,t,i,a){return e.find(function(n){return ta(n.x+t.left,n.y+t.top,n.width,n.height,i,a)})},ol=function(e){var t=e.data,i=e.indexBy,a=e.keys,n=e.margin,r=e.width,o=e.height,l=e.groupMode,s=e.layout,d=e.reverse,f=e.minValue,u=e.maxValue,m=e.valueScale,y=e.indexScale,p=e.padding,g=e.innerPadding,x=e.axisTop,v=e.axisRight,k=e.axisBottom,T=k===void 0?oe.axisBottom:k,w=e.axisLeft,V=w===void 0?oe.axisLeft:w,$=e.enableGridX,M=$===void 0?oe.enableGridX:$,L=e.enableGridY,A=L===void 0?oe.enableGridY:L,W=e.gridXValues,P=e.gridYValues,F=e.layers,B=F===void 0?oe.layers:F,Y=e.renderBar,z=Y===void 0?function(b,S){var R=S.bar,K=R.color,I=R.height,ue=R.width,te=R.x,Z=R.y,bt=S.borderColor,Je=S.borderRadius,tt=S.borderWidth,Se=S.label,yt=S.labelColor,c=S.shouldRenderLabel;if(b.fillStyle=K,tt>0&&(b.strokeStyle=bt,b.lineWidth=tt),b.beginPath(),Je>0){var ne=Math.min(Je,I);b.moveTo(te+ne,Z),b.lineTo(te+ue-ne,Z),b.quadraticCurveTo(te+ue,Z,te+ue,Z+ne),b.lineTo(te+ue,Z+I-ne),b.quadraticCurveTo(te+ue,Z+I,te+ue-ne,Z+I),b.lineTo(te+ne,Z+I),b.quadraticCurveTo(te,Z+I,te,Z+I-ne),b.lineTo(te,Z+ne),b.quadraticCurveTo(te,Z,te+ne,Z),b.closePath()}else b.rect(te,Z,ue,I);b.fill(),tt>0&&b.stroke(),c&&(b.textBaseline="middle",b.textAlign="center",b.fillStyle=yt,b.fillText(Se,te+ue/2,Z+I/2))}:Y,H=e.enableLabel,O=H===void 0?oe.enableLabel:H,U=e.label,le=e.labelSkipWidth,Q=le===void 0?oe.labelSkipWidth:le,he=e.labelSkipHeight,ae=he===void 0?oe.labelSkipHeight:he,Ve=e.labelTextColor,q=e.colorBy,Ue=e.colors,Pe=e.borderRadius,Ce=Pe===void 0?oe.borderRadius:Pe,Ae=e.borderWidth,be=Ae===void 0?oe.borderWidth:Ae,Fe=e.borderColor,Ie=e.annotations,Re=Ie===void 0?oe.annotations:Ie,De=e.legendLabel,He=e.tooltipLabel,ze=e.valueFormat,Te=e.isInteractive,se=Te===void 0?oe.isInteractive:Te,Ke=e.tooltip,je=Ke===void 0?oe.tooltip:Ke,Le=e.onClick,ye=e.onMouseEnter,fe=e.onMouseLeave,Ge=e.legends,Me=e.pixelRatio,ie=Me===void 0?oe.pixelRatio:Me,me=e.canvasRef,J=C.useRef(null),X=_e(),We=an(r,o,n),ee=We.margin,ve=We.innerWidth,xe=We.innerHeight,pe=We.outerWidth,$e=We.outerHeight,j=mn({indexBy:i,label:U,tooltipLabel:He,valueFormat:ze,colors:Ue,colorBy:q,borderColor:Fe,labelTextColor:Ve,groupMode:l,layout:s,reverse:d,data:t,keys:a,minValue:f,maxValue:u,margin:ee,width:ve,height:xe,padding:p,innerPadding:g,valueScale:m,indexScale:y,enableLabel:O,labelSkipWidth:Q,labelSkipHeight:ae,legends:Ge,legendLabel:De}),E=j.bars,ge=j.barsWithValue,Be=j.xScale,Oe=j.yScale,ot=j.getLabel,Qe=j.getTooltipLabel,et=j.getBorderColor,lt=j.getLabelColor,Ee=j.shouldRenderBarLabel,qe=j.legendsWithData,st=nn(),Ye=st.showTooltipFromEvent,de=st.hideTooltip,ke=Io({annotations:hn({data:E,annotations:Re,getPosition:function(b){return{x:b.x,y:b.y}},getDimensions:function(b){var S=b.width,R=b.height;return{width:S,height:R,size:Math.max(S,R)}}})}),re=C.useMemo(function(){return{borderRadius:Ce,borderWidth:be,isInteractive:se,isFocusable:!1,labelSkipWidth:Q,labelSkipHeight:ae,margin:ee,width:r,height:o,innerWidth:ve,innerHeight:xe,bars:E,legendData:qe,enableLabel:O,xScale:Be,yScale:Oe,tooltip:je,getTooltipLabel:Qe,onClick:Le,onMouseEnter:ye,onMouseLeave:fe}},[Ce,be,se,Q,ae,ee,r,o,ve,xe,E,qe,O,Be,Oe,je,Qe,Le,ye,fe]);C.useEffect(function(){var b,S=(b=J.current)==null?void 0:b.getContext("2d");J.current&&S&&(J.current.width=pe*ie,J.current.height=$e*ie,S.scale(ie,ie),S.fillStyle=X.background,S.fillRect(0,0,pe,$e),S.translate(ee.left,ee.top),B.forEach(function(R){R==="grid"?typeof X.grid.line.strokeWidth=="number"&&X.grid.line.strokeWidth>0&&(S.lineWidth=X.grid.line.strokeWidth,S.strokeStyle=X.grid.line.stroke,M&&$t(S,{width:r,height:o,scale:Be,axis:"x",values:W}),A&&$t(S,{width:r,height:o,scale:Oe,axis:"y",values:P})):R==="axes"?kn(S,{xScale:Be,yScale:Oe,width:ve,height:xe,top:x,right:v,bottom:T,left:V,theme:X}):R==="bars"?ge.forEach(function(K){z(S,{bar:K,borderColor:et(K),borderRadius:Ce,borderWidth:be,label:ot(K.data),labelColor:lt(K),shouldRenderLabel:Ee(K)})}):R==="legends"?qe.forEach(function(K){var I=K[0],ue=K[1];Jn(S,_({},I,{data:ue,containerWidth:ve,containerHeight:xe,theme:X}))}):R==="annotations"?Po(S,{annotations:ke,theme:X}):typeof R=="function"&&R(S,re)}),S.save())},[T,V,v,x,ge,Ce,be,ke,M,A,et,ot,lt,W,P,l,o,xe,ve,re,B,s,qe,ee.left,ee.top,$e,pe,ie,z,Be,Oe,d,Ee,X,r]);var Xe=C.useCallback(function(b){if(E&&J.current){var S=mt(J.current,b),R=S[0],K=S[1],I=xt(E,ee,R,K);I!==void 0?(Ye(C.createElement(je,_({},I.data,{color:I.color,label:I.label,value:Number(I.data.value)})),b),b.type==="mouseenter"&&(ye==null||ye(I.data,b))):de()}},[de,ee,ye,E,Ye,je]),gt=C.useCallback(function(b){if(E&&J.current){de();var S=mt(J.current,b),R=S[0],K=S[1],I=xt(E,ee,R,K);I&&(fe==null||fe(I.data,b))}},[de,ee,fe,E]),Ne=C.useCallback(function(b){if(E&&J.current){var S=mt(J.current,b),R=S[0],K=S[1],I=xt(E,ee,R,K);I!==void 0&&(Le==null||Le(_({},I.data,{color:I.color}),b))}},[ee,Le,E]);return h.jsx("canvas",{ref:function(b){J.current=b,me&&"current"in me&&(me.current=b)},width:pe*ie,height:$e*ie,style:{width:pe,height:$e,cursor:se?"auto":"normal"},onMouseEnter:se?Xe:void 0,onMouseMove:se?Xe:void 0,onMouseLeave:se?gt:void 0,onClick:se?Ne:void 0})},ll=C.forwardRef(function(e,t){var i=e.isInteractive,a=e.renderWrapper,n=e.theme,r=Ze(e,rl);return h.jsx(en,{isInteractive:i,renderWrapper:a,theme:n,animate:!1,children:h.jsx(ol,_({},r,{canvasRef:t}))})}),sl=function(e){return h.jsx(tn,{children:function(t){var i=t.width,a=t.height;return h.jsx(il,_({width:i,height:a},e))}})};C.forwardRef(function(e,t){return h.jsx(tn,{children:function(i){var a=i.width,n=i.height;return h.jsx(ll,_({width:a,height:n},e,{ref:t}))}})});const gl=()=>h.jsxs(da.div,{className:"w-full h-[80vh] bg-lightGray rounded-md",initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:[.6,-.05,.01,.99]},children:[h.jsx("h2",{className:"text-left ml-4 mt-4 font-semibold text-white",children:"Bar Chart"}),h.jsx(sl,{data:vn,keys:["pizza","pasta","burger","Sushi","Fries","Ice cream"],indexBy:"country",margin:{top:50,right:130,bottom:80,left:60},padding:.3,theme:{axis:{domain:{line:{stroke:"#fff"}},legend:{text:{fill:"#fff"}},ticks:{line:{stroke:"#fff",strokeWidth:1},text:{fill:"#fff"}}},legends:{text:{fill:"#fff"}},tooltip:{container:{color:"#000"}}},valueScale:{type:"linear"},indexScale:{type:"band",round:!0},colors:{scheme:"nivo"},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"Fries"},id:"dots"},{match:{id:"sandwich"},id:"lines"}],borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Country",legendPosition:"middle",legendOffset:32,truncateTickAt:0},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Food",legendPosition:"middle",legendOffset:-40,truncateTickAt:0},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}],role:"application",ariaLabel:"Nivo bar chart demo",barAriaLabel:e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue})]});export{gl as default};
