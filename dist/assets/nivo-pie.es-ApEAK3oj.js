import{r as I,j}from"./index-MPkIUv_x.js";import{c as B,ab as Ne,ac as $,ad as Ae,ae as ne,af as Q,ag as ae,ah as Le,ai as qe,aj as Ue,ak as D,al as Ze,am as Bn,an as $n,Y as me,L as le,a2 as Re,O as xe,Z as be,a6 as ye,T as de,I as ie,J as re,N as oe,ao as Gn,Q as Hn,P as Xn,U as Fn,a7 as Yn,a9 as Jn,aa as Nn,X as qn,a0 as Un,a1 as Zn,S as Qn}from"./nivo-legends.es-JyHwyw4V.js";import{p as zn,m as Kn}from"./line-Bp7MBAur.js";function _n(e){return e.innerRadius}function er(e){return e.outerRadius}function nr(e){return e.startAngle}function rr(e){return e.endAngle}function tr(e){return e&&e.padAngle}function ar(e,n,r,a,s,l,i,t){var u=r-e,o=a-n,h=i-s,d=t-l,c=d*u-h*o;if(!(c*c<$))return c=(h*(n-l)-d*(e-s))/c,[e+c*u,n+c*o]}function pe(e,n,r,a,s,l,i){var t=e-r,u=n-a,o=(i?l:-l)/ae(t*t+u*u),h=o*u,d=-o*t,c=e+h,R=n+d,p=r+h,L=a+d,v=(c+p)/2,b=(R+L)/2,f=p-c,g=L-R,y=f*f+g*g,A=s-l,M=c*L-p*R,w=(g<0?-1:1)*ae($n(0,A*A*y-M*M)),E=(M*g-f*w)/y,T=(-M*f-g*w)/y,k=(M*g+f*w)/y,P=(-M*f+g*w)/y,x=E-v,C=T-b,Y=k-v,J=P-b;return x*x+C*C>Y*Y+J*J&&(E=k,T=P),{cx:E,cy:T,x01:-h,y01:-d,x11:E*(s/A-1),y11:T*(s/A-1)}}function ir(){var e=_n,n=er,r=B(0),a=null,s=nr,l=rr,i=tr,t=null;function u(){var o,h,d=+e.apply(this,arguments),c=+n.apply(this,arguments),R=s.apply(this,arguments)-Ne,p=l.apply(this,arguments)-Ne,L=qe(p-R),v=p>R;if(t||(t=o=zn()),c<d&&(h=c,c=d,d=h),!(c>$))t.moveTo(0,0);else if(L>Ae-$)t.moveTo(c*ne(R),c*Q(R)),t.arc(0,0,c,R,p,!v),d>$&&(t.moveTo(d*ne(p),d*Q(p)),t.arc(0,0,d,p,R,v));else{var b=R,f=p,g=R,y=p,A=L,M=L,w=i.apply(this,arguments)/2,E=w>$&&(a?+a.apply(this,arguments):ae(d*d+c*c)),T=Le(qe(c-d)/2,+r.apply(this,arguments)),k=T,P=T,x,C;if(E>$){var Y=Ze(E/d*Q(w)),J=Ze(E/c*Q(w));(A-=Y*2)>$?(Y*=v?1:-1,g+=Y,y-=Y):(A=0,g=y=(R+p)/2),(M-=J*2)>$?(J*=v?1:-1,b+=J,f-=J):(M=0,b=f=(R+p)/2)}var G=c*ne(b),U=c*Q(b),z=d*ne(y),H=d*Q(y);if(T>$){var S=c*ne(f),N=c*Q(f),q=d*ne(g),Z=d*Q(g),V;if(L<Ue&&(V=ar(G,U,q,Z,S,N,z,H))){var ee=G-V[0],W=U-V[1],X=S-V[0],F=N-V[1],ce=1/Q(Bn((ee*X+W*F)/(ae(ee*ee+W*W)*ae(X*X+F*F)))/2),fe=ae(V[0]*V[0]+V[1]*V[1]);k=Le(T,(d-fe)/(ce-1)),P=Le(T,(c-fe)/(ce+1))}}M>$?P>$?(x=pe(q,Z,G,U,c,P,v),C=pe(S,N,z,H,c,P,v),t.moveTo(x.cx+x.x01,x.cy+x.y01),P<T?t.arc(x.cx,x.cy,P,D(x.y01,x.x01),D(C.y01,C.x01),!v):(t.arc(x.cx,x.cy,P,D(x.y01,x.x01),D(x.y11,x.x11),!v),t.arc(0,0,c,D(x.cy+x.y11,x.cx+x.x11),D(C.cy+C.y11,C.cx+C.x11),!v),t.arc(C.cx,C.cy,P,D(C.y11,C.x11),D(C.y01,C.x01),!v))):(t.moveTo(G,U),t.arc(0,0,c,b,f,!v)):t.moveTo(G,U),!(d>$)||!(A>$)?t.lineTo(z,H):k>$?(x=pe(z,H,S,N,d,-k,v),C=pe(G,U,q,Z,d,-k,v),t.lineTo(x.cx+x.x01,x.cy+x.y01),k<T?t.arc(x.cx,x.cy,k,D(x.y01,x.x01),D(C.y01,C.x01),!v):(t.arc(x.cx,x.cy,k,D(x.y01,x.x01),D(x.y11,x.x11),!v),t.arc(0,0,d,D(x.cy+x.y11,x.cx+x.x11),D(C.cy+C.y11,C.cx+C.x11),v),t.arc(C.cx,C.cy,k,D(C.y11,C.x11),D(C.y01,C.x01),!v))):t.arc(0,0,d,y,g,v)}if(t.closePath(),o)return t=null,o+""||null}return u.centroid=function(){var o=(+e.apply(this,arguments)+ +n.apply(this,arguments))/2,h=(+s.apply(this,arguments)+ +l.apply(this,arguments))/2-Ue/2;return[ne(h)*o,Q(h)*o]},u.innerRadius=function(o){return arguments.length?(e=typeof o=="function"?o:B(+o),u):e},u.outerRadius=function(o){return arguments.length?(n=typeof o=="function"?o:B(+o),u):n},u.cornerRadius=function(o){return arguments.length?(r=typeof o=="function"?o:B(+o),u):r},u.padRadius=function(o){return arguments.length?(a=o==null?null:typeof o=="function"?o:B(+o),u):a},u.startAngle=function(o){return arguments.length?(s=typeof o=="function"?o:B(+o),u):s},u.endAngle=function(o){return arguments.length?(l=typeof o=="function"?o:B(+o),u):l},u.padAngle=function(o){return arguments.length?(i=typeof o=="function"?o:B(+o),u):i},u.context=function(o){return arguments.length?(t=o??null,u):t},u}function or(e,n){return n<e?-1:n>e?1:n>=e?0:NaN}function ur(e){return e}function sr(){var e=ur,n=or,r=null,a=B(0),s=B(Ae),l=B(0);function i(t){var u,o=t.length,h,d,c=0,R=new Array(o),p=new Array(o),L=+a.apply(this,arguments),v=Math.min(Ae,Math.max(-Ae,s.apply(this,arguments)-L)),b,f=Math.min(Math.abs(v)/o,l.apply(this,arguments)),g=f*(v<0?-1:1),y;for(u=0;u<o;++u)(y=p[R[u]=u]=+e(t[u],u,t))>0&&(c+=y);for(n!=null?R.sort(function(A,M){return n(p[A],p[M])}):r!=null&&R.sort(function(A,M){return r(t[A],t[M])}),u=0,d=c?(v-o*g)/c:0;u<o;++u,L=b)h=R[u],y=p[h],b=L+(y>0?y*d:0)+g,p[h]={data:t[h],index:u,value:y,startAngle:L,endAngle:b,padAngle:f};return p}return i.value=function(t){return arguments.length?(e=typeof t=="function"?t:B(+t),i):e},i.sortValues=function(t){return arguments.length?(n=t,r=null,i):n},i.sort=function(t){return arguments.length?(r=t,n=null,i):r},i.startAngle=function(t){return arguments.length?(a=typeof t=="function"?t:B(+t),i):a},i.endAngle=function(t){return arguments.length?(s=typeof t=="function"?t:B(+t),i):s},i.padAngle=function(t){return arguments.length?(l=typeof t=="function"?t:B(+t),i):l},i}function O(){return O=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},O.apply(this,arguments)}var lr={pointerEvents:"none"},dr=function(e){var n=e.label,r=e.style,a=le();return j.jsx(oe.g,{transform:r.transform,opacity:r.progress,style:lr,children:j.jsx(oe.text,{textAnchor:"middle",dominantBaseline:"central",style:O({},a.labels.text,{fill:r.textColor}),children:n})})},ze=function(e){var n=e%(2*Math.PI);return n<0&&(n+=2*Math.PI),n},cr=function(e,n){return e.filter(function(r){return Math.abs(xe(r.arc.endAngle-r.arc.startAngle))>=n})},fr={startAngle:{enter:function(e){return O({},e,{endAngle:e.startAngle})},update:function(e){return e},leave:function(e){return O({},e,{startAngle:e.endAngle})}},middleAngle:{enter:function(e){var n=e.startAngle+(e.endAngle-e.startAngle)/2;return O({},e,{startAngle:n,endAngle:n})},update:function(e){return e},leave:function(e){var n=e.startAngle+(e.endAngle-e.startAngle)/2;return O({},e,{startAngle:n,endAngle:n})}},endAngle:{enter:function(e){return O({},e,{startAngle:e.endAngle})},update:function(e){return e},leave:function(e){return O({},e,{endAngle:e.startAngle})}},innerRadius:{enter:function(e){return O({},e,{outerRadius:e.innerRadius})},update:function(e){return e},leave:function(e){return O({},e,{innerRadius:e.outerRadius})}},centerRadius:{enter:function(e){var n=e.innerRadius+(e.outerRadius-e.innerRadius)/2;return O({},e,{innerRadius:n,outerRadius:n})},update:function(e){return e},leave:function(e){var n=e.innerRadius+(e.outerRadius-e.innerRadius)/2;return O({},e,{innerRadius:n,outerRadius:n})}},outerRadius:{enter:function(e){return O({},e,{innerRadius:e.outerRadius})},update:function(e){return e},leave:function(e){return O({},e,{outerRadius:e.innerRadius})}},pushIn:{enter:function(e){return O({},e,{innerRadius:e.innerRadius-e.outerRadius+e.innerRadius,outerRadius:e.innerRadius})},update:function(e){return e},leave:function(e){return O({},e,{innerRadius:e.outerRadius,outerRadius:e.outerRadius+e.outerRadius-e.innerRadius})}},pushOut:{enter:function(e){return O({},e,{innerRadius:e.outerRadius,outerRadius:e.outerRadius+e.outerRadius-e.innerRadius})},update:function(e){return e},leave:function(e){return O({},e,{innerRadius:e.innerRadius-e.outerRadius+e.innerRadius,outerRadius:e.innerRadius})}}},Ke=function(e,n){return I.useMemo(function(){var r=fr[e];return{enter:function(a){return O({progress:0},r.enter(a.arc),n?n.enter(a):{})},update:function(a){return O({progress:1},r.update(a.arc),n?n.update(a):{})},leave:function(a){return O({progress:0},r.leave(a.arc),n?n.leave(a):{})}}},[e,n])},gr=function(e,n){var r=Gn(e)-Math.PI/2,a=e.innerRadius+(e.outerRadius-e.innerRadius)*n;return ie(r,a)},vr=function(e){return function(n,r,a,s){return de([n,r,a,s],function(l,i,t,u){var o=gr({startAngle:l,endAngle:i,innerRadius:t,outerRadius:u},e);return"translate("+o.x+","+o.y+")"})}},hr=function(e,n,r,a){n===void 0&&(n=.5),r===void 0&&(r="innerRadius");var s=be(),l=s.animate,i=s.config,t=Ke(r,a);return{transition:ye(e,{keys:function(u){return u.id},initial:t.update,from:t.enter,enter:t.update,update:t.update,leave:t.leave,config:i,immediate:!l}),interpolate:vr(n)}},pr=function(e){var n=e.center,r=e.data,a=e.transitionMode,s=e.label,l=e.radiusOffset,i=e.skipAngle,t=e.textColor,u=e.component,o=u===void 0?dr:u,h=me(s),d=le(),c=Re(t,d),R=I.useMemo(function(){return r.filter(function(f){return Math.abs(xe(f.arc.endAngle-f.arc.startAngle))>=i})},[r,i]),p=hr(R,l,a),L=p.transition,v=p.interpolate,b=o;return j.jsx("g",{transform:"translate("+n[0]+","+n[1]+")",children:L(function(f,g){return I.createElement(b,{key:g.id,datum:g,label:h(g),style:O({},f,{transform:v(f.startAngle,f.endAngle,f.innerRadius,f.outerRadius),textColor:c(g)})})})})},Ar=function(e){var n=e.label,r=e.style,a=le();return j.jsxs(oe.g,{opacity:r.opacity,children:[j.jsx(oe.path,{fill:"none",stroke:r.linkColor,strokeWidth:r.thickness,d:r.path}),j.jsx(oe.text,{transform:r.textPosition,textAnchor:r.textAnchor,dominantBaseline:"central",style:O({},a.labels.text,{fill:r.textColor}),children:n})]})},mr=function(e){var n=ze(e.startAngle+(e.endAngle-e.startAngle)/2-Math.PI/2);return n<Math.PI/2||n>1.5*Math.PI?"start":"end"},_e=function(e,n,r,a){var s,l,i=ze(e.startAngle+(e.endAngle-e.startAngle)/2-Math.PI/2),t=ie(i,e.outerRadius+n),u=ie(i,e.outerRadius+n+r);return i<Math.PI/2||i>1.5*Math.PI?(s="after",l={x:u.x+a,y:u.y}):(s="before",l={x:u.x-a,y:u.y}),{side:s,points:[t,u,l]}},Rr=Kn().x(function(e){return e.x}).y(function(e){return e.y}),Lr=function(e,n,r,a,s,l,i){return de([e,n,r,a,s,l,i],function(t,u,o,h,d,c,R){var p=_e({startAngle:t,endAngle:u,innerRadius:o,outerRadius:h},d,c,R).points;return Rr(p)})},xr=function(e,n,r,a){return de([e,n,r,a],function(s,l,i,t){return mr({startAngle:s,endAngle:l,innerRadius:i,outerRadius:t})})},br=function(e,n,r,a,s,l,i,t){return de([e,n,r,a,s,l,i,t],function(u,o,h,d,c,R,p,L){var v=_e({startAngle:u,endAngle:o,innerRadius:h,outerRadius:d},c,R,p),b=v.points,f=v.side,g=b[2];return f==="before"?g.x-=L:g.x+=L,"translate("+g.x+","+g.y+")"})},yr=function(e){var n=e.data,r=e.offset,a=r===void 0?0:r,s=e.diagonalLength,l=e.straightLength,i=e.skipAngle,t=i===void 0?0:i,u=e.textOffset,o=e.linkColor,h=e.textColor,d=be(),c=d.animate,R=d.config,p=le(),L=Re(o,p),v=Re(h,p),b=function(g,y){return I.useMemo(function(){return cr(g,y)},[g,y])}(n,t),f=function(g){var y=g.offset,A=g.diagonalLength,M=g.straightLength,w=g.textOffset,E=g.getLinkColor,T=g.getTextColor;return I.useMemo(function(){return{enter:function(k){return{startAngle:k.arc.startAngle,endAngle:k.arc.endAngle,innerRadius:k.arc.innerRadius,outerRadius:k.arc.outerRadius,offset:y,diagonalLength:0,straightLength:0,textOffset:w,linkColor:E(k),textColor:T(k),opacity:0}},update:function(k){return{startAngle:k.arc.startAngle,endAngle:k.arc.endAngle,innerRadius:k.arc.innerRadius,outerRadius:k.arc.outerRadius,offset:y,diagonalLength:A,straightLength:M,textOffset:w,linkColor:E(k),textColor:T(k),opacity:1}},leave:function(k){return{startAngle:k.arc.startAngle,endAngle:k.arc.endAngle,innerRadius:k.arc.innerRadius,outerRadius:k.arc.outerRadius,offset:y,diagonalLength:0,straightLength:0,textOffset:w,linkColor:E(k),textColor:T(k),opacity:0}}}},[A,M,w,E,T,y])}({offset:a,diagonalLength:s,straightLength:l,textOffset:u,getLinkColor:L,getTextColor:v});return{transition:ye(b,{keys:function(g){return g.id},initial:f.update,from:f.enter,enter:f.update,update:f.update,leave:f.leave,config:R,immediate:!c}),interpolateLink:Lr,interpolateTextAnchor:xr,interpolateTextPosition:br}},kr=function(e){var n=e.center,r=e.data,a=e.label,s=e.skipAngle,l=e.offset,i=e.diagonalLength,t=e.straightLength,u=e.strokeWidth,o=e.textOffset,h=e.textColor,d=e.linkColor,c=e.component,R=c===void 0?Ar:c,p=me(a),L=yr({data:r,skipAngle:s,offset:l,diagonalLength:i,straightLength:t,textOffset:o,linkColor:d,textColor:h}),v=L.transition,b=L.interpolateLink,f=L.interpolateTextAnchor,g=L.interpolateTextPosition,y=R;return j.jsx("g",{transform:"translate("+n[0]+","+n[1]+")",children:v(function(A,M){return I.createElement(y,{key:M.id,datum:M,label:p(M),style:O({},A,{thickness:u,path:b(A.startAngle,A.endAngle,A.innerRadius,A.outerRadius,A.offset,A.diagonalLength,A.straightLength),textAnchor:f(A.startAngle,A.endAngle,A.innerRadius,A.outerRadius),textPosition:g(A.startAngle,A.endAngle,A.innerRadius,A.outerRadius,A.offset,A.diagonalLength,A.straightLength,A.textOffset)})})})})},Mr=function(e){var n=e.datum,r=e.style,a=e.onClick,s=e.onMouseEnter,l=e.onMouseMove,i=e.onMouseLeave,t=I.useCallback(function(d){return a==null?void 0:a(n,d)},[a,n]),u=I.useCallback(function(d){return s==null?void 0:s(n,d)},[s,n]),o=I.useCallback(function(d){return l==null?void 0:l(n,d)},[l,n]),h=I.useCallback(function(d){return i==null?void 0:i(n,d)},[i,n]);return j.jsx(oe.path,{d:r.path,opacity:r.opacity,fill:n.fill||r.color,stroke:r.borderColor,strokeWidth:r.borderWidth,onClick:a?t:void 0,onMouseEnter:s?u:void 0,onMouseMove:l?o:void 0,onMouseLeave:i?h:void 0})},Cr=function(e,n,r,a,s){return de([e,n,r,a],function(l,i,t,u){return s({startAngle:l,endAngle:i,innerRadius:Math.max(0,t),outerRadius:Math.max(0,u)})})},Ir=function(e,n,r){n===void 0&&(n="innerRadius");var a=be(),s=a.animate,l=a.config,i=Ke(n,r);return{transition:ye(e,{keys:function(t){return t.id},initial:i.update,from:i.enter,enter:i.update,update:i.update,leave:i.leave,config:l,immediate:!s}),interpolate:Cr}},Or=function(e){var n=e.center,r=e.data,a=e.arcGenerator,s=e.borderWidth,l=e.borderColor,i=e.onClick,t=e.onMouseEnter,u=e.onMouseMove,o=e.onMouseLeave,h=e.transitionMode,d=e.component,c=d===void 0?Mr:d,R=le(),p=Re(l,R),L=Ir(r,h,{enter:function(g){return{opacity:0,color:g.color,borderColor:p(g)}},update:function(g){return{opacity:1,color:g.color,borderColor:p(g)}},leave:function(g){return{opacity:0,color:g.color,borderColor:p(g)}}}),v=L.transition,b=L.interpolate,f=c;return j.jsx("g",{transform:"translate("+n[0]+","+n[1]+")",children:v(function(g,y){return I.createElement(f,{key:y.id,datum:y,style:O({},g,{borderWidth:s,path:b(g.startAngle,g.endAngle,g.innerRadius,g.outerRadius,a)}),onClick:i,onMouseEnter:t,onMouseMove:u,onMouseLeave:o})})})},jr=function(e,n,r,a,s,l){l===void 0&&(l=!0);var i=[],t=ie(re(a),r);i.push([t.x,t.y]);var u=ie(re(s),r);i.push([u.x,u.y]);for(var o=Math.round(Math.min(a,s));o<=Math.round(Math.max(a,s));o++)if(o%90==0){var h=ie(re(o),r);i.push([h.x,h.y])}i=i.map(function(v){var b=v[0],f=v[1];return[e+b,n+f]}),l&&i.push([e,n]);var d=i.map(function(v){return v[0]}),c=i.map(function(v){return v[1]}),R=Math.min.apply(Math,d),p=Math.max.apply(Math,d),L=Math.min.apply(Math,c);return{points:i,x:R,y:L,width:p-R,height:Math.max.apply(Math,c)-L}},Tr=function(e){var n=e===void 0?{}:e,r=n.cornerRadius,a=r===void 0?0:r,s=n.padAngle,l=s===void 0?0:s;return I.useMemo(function(){return ir().innerRadius(function(i){return i.innerRadius}).outerRadius(function(i){return i.outerRadius}).cornerRadius(a).padAngle(l)},[a,l])};function _(){return _=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_.apply(this,arguments)}function en(e,n){if(e==null)return{};var r,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(s[r]=e[r]);return s}var Qe,wr=function(e){var n=e.width,r=e.height,a=e.legends,s=e.data,l=e.toggleSerie;return j.jsx(j.Fragment,{children:a.map(function(i,t){var u;return j.jsx(Nn,_({},i,{containerWidth:n,containerHeight:r,data:(u=i.data)!=null?u:s,toggleSerie:i.toggleSerie?l:void 0}),t)})})},m={id:"id",value:"value",sortByValue:!1,innerRadius:0,padAngle:0,cornerRadius:0,layers:["arcs","arcLinkLabels","arcLabels","legends"],startAngle:0,endAngle:360,fit:!0,activeInnerRadiusOffset:0,activeOuterRadiusOffset:0,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableArcLabels:!0,arcLabel:"formattedValue",arcLabelsSkipAngle:0,arcLabelsRadiusOffset:.5,arcLabelsTextColor:{theme:"labels.text.fill"},enableArcLinkLabels:!0,arcLinkLabel:"id",arcLinkLabelsSkipAngle:0,arcLinkLabelsOffset:0,arcLinkLabelsDiagonalLength:16,arcLinkLabelsStraightLength:24,arcLinkLabelsThickness:1,arcLinkLabelsTextOffset:6,arcLinkLabelsTextColor:{theme:"labels.text.fill"},arcLinkLabelsColor:{theme:"axis.ticks.line.stroke"},colors:{scheme:"nivo"},defs:[],fill:[],isInteractive:!0,animate:!0,motionConfig:"gentle",transitionMode:"innerRadius",tooltip:function(e){var n=e.datum;return j.jsx(qn,{id:n.id,value:n.formattedValue,enableChip:!0,color:n.color})},legends:[],role:"img",pixelRatio:typeof window<"u"&&(Qe=window.devicePixelRatio)!=null?Qe:1},Wr=["points"],Er=function(e){var n=e.data,r=e.id,a=r===void 0?m.id:r,s=e.value,l=s===void 0?m.value:s,i=e.valueFormat,t=e.colors,u=t===void 0?m.colors:t,o=me(a),h=me(l),d=Un(i),c=Zn(u,"id");return I.useMemo(function(){return n.map(function(R){var p,L=o(R),v=h(R),b={id:L,label:(p=R.label)!=null?p:L,hidden:!1,value:v,formattedValue:d(v),data:R};return _({},b,{color:c(b)})})},[n,o,h,d,c])},Pr=function(e){var n=e.data,r=e.startAngle,a=e.endAngle,s=e.innerRadius,l=e.outerRadius,i=e.padAngle,t=e.sortByValue,u=e.activeId,o=e.activeInnerRadiusOffset,h=e.activeOuterRadiusOffset,d=e.hiddenIds,c=e.forwardLegendData,R=I.useMemo(function(){var b=sr().value(function(f){return f.value}).startAngle(re(r)).endAngle(re(a)).padAngle(re(i));return t||b.sortValues(null),b},[r,a,i,t]),p=I.useMemo(function(){var b=n.filter(function(f){return!d.includes(f.id)});return{dataWithArc:R(b).map(function(f){var g=Math.abs(f.endAngle-f.startAngle);return _({},f.data,{arc:{index:f.index,startAngle:f.startAngle,endAngle:f.endAngle,innerRadius:u===f.data.id?s-o:s,outerRadius:u===f.data.id?l+h:l,thickness:l-s,padAngle:f.padAngle,angle:g,angleDeg:xe(g)}})}),legendData:n.map(function(f){return{id:f.id,label:f.label,color:f.color,hidden:d.includes(f.id),data:f}})}},[R,n,d,u,s,o,l,h]),L=p.legendData,v=I.useRef(c);return I.useEffect(function(){typeof v.current=="function"&&v.current(L)},[v,L]),p},Sr=function(e){var n=e.activeId,r=e.onActiveIdChange,a=e.defaultActiveId,s=n!==void 0,l=I.useState(s||a===void 0?null:a),i=l[0],t=l[1];return{activeId:s?n:i,setActiveId:I.useCallback(function(u){r&&r(u),s||t(u)},[s,r,t])}},Dr=function(e){var n=e.data,r=e.width,a=e.height,s=e.innerRadius,l=s===void 0?m.innerRadius:s,i=e.startAngle,t=i===void 0?m.startAngle:i,u=e.endAngle,o=u===void 0?m.endAngle:u,h=e.padAngle,d=h===void 0?m.padAngle:h,c=e.sortByValue,R=c===void 0?m.sortByValue:c,p=e.cornerRadius,L=p===void 0?m.cornerRadius:p,v=e.fit,b=v===void 0?m.fit:v,f=e.activeInnerRadiusOffset,g=f===void 0?m.activeInnerRadiusOffset:f,y=e.activeOuterRadiusOffset,A=y===void 0?m.activeOuterRadiusOffset:y,M=e.activeId,w=e.onActiveIdChange,E=e.defaultActiveId,T=e.forwardLegendData,k=Sr({activeId:M,onActiveIdChange:w,defaultActiveId:E}),P=k.activeId,x=k.setActiveId,C=I.useState([]),Y=C[0],J=C[1],G=I.useMemo(function(){var H,S=Math.min(r,a)/2,N=S*Math.min(l,1),q=r/2,Z=a/2;if(b){var V=jr(q,Z,S,t-90,o-90),ee=V.points,W=en(V,Wr),X=Math.min(r/W.width,a/W.height),F={width:W.width*X,height:W.height*X};F.x=(r-F.width)/2,F.y=(a-F.height)/2,q=(q-W.x)/W.width*W.width*X+F.x,Z=(Z-W.y)/W.height*W.height*X+F.y,H={box:W,ratio:X,points:ee},S*=X,N*=X}return{centerX:q,centerY:Z,radius:S,innerRadius:N,debug:H}},[r,a,l,t,o,b]),U=Pr({data:n,startAngle:t,endAngle:o,innerRadius:G.innerRadius,outerRadius:G.radius,padAngle:d,sortByValue:R,activeId:P,activeInnerRadiusOffset:g,activeOuterRadiusOffset:A,hiddenIds:Y,forwardLegendData:T}),z=I.useCallback(function(H){J(function(S){return S.indexOf(H)>-1?S.filter(function(N){return N!==H}):[].concat(S,[H])})},[]);return _({arcGenerator:Tr({cornerRadius:L,padAngle:re(d)}),activeId:P,setActiveId:x,toggleSerie:z},U,G)},Vr=function(e){var n=e.dataWithArc,r=e.arcGenerator,a=e.centerX,s=e.centerY,l=e.radius,i=e.innerRadius;return I.useMemo(function(){return{dataWithArc:n,arcGenerator:r,centerX:a,centerY:s,radius:l,innerRadius:i}},[n,r,a,s,l,i])},Br=function(e){var n=e.center,r=e.data,a=e.arcGenerator,s=e.borderWidth,l=e.borderColor,i=e.isInteractive,t=e.onClick,u=e.onMouseEnter,o=e.onMouseMove,h=e.onMouseLeave,d=e.setActiveId,c=e.tooltip,R=e.transitionMode,p=Qn(),L=p.showTooltipFromEvent,v=p.hideTooltip,b=I.useMemo(function(){if(i)return function(A,M){t==null||t(A,M)}},[i,t]),f=I.useMemo(function(){if(i)return function(A,M){L(I.createElement(c,{datum:A}),M),d(A.id),u==null||u(A,M)}},[i,L,d,u,c]),g=I.useMemo(function(){if(i)return function(A,M){L(I.createElement(c,{datum:A}),M),o==null||o(A,M)}},[i,L,o,c]),y=I.useMemo(function(){if(i)return function(A,M){v(),d(null),h==null||h(A,M)}},[i,v,d,h]);return j.jsx(Or,{center:n,data:r,arcGenerator:a,borderWidth:s,borderColor:l,transitionMode:R,onClick:b,onMouseEnter:f,onMouseMove:g,onMouseLeave:y})},$r=["isInteractive","animate","motionConfig","theme","renderWrapper"],Gr=function(e){var n=e.data,r=e.id,a=r===void 0?m.id:r,s=e.value,l=s===void 0?m.value:s,i=e.valueFormat,t=e.sortByValue,u=t===void 0?m.sortByValue:t,o=e.layers,h=o===void 0?m.layers:o,d=e.startAngle,c=d===void 0?m.startAngle:d,R=e.endAngle,p=R===void 0?m.endAngle:R,L=e.padAngle,v=L===void 0?m.padAngle:L,b=e.fit,f=b===void 0?m.fit:b,g=e.innerRadius,y=g===void 0?m.innerRadius:g,A=e.cornerRadius,M=A===void 0?m.cornerRadius:A,w=e.activeInnerRadiusOffset,E=w===void 0?m.activeInnerRadiusOffset:w,T=e.activeOuterRadiusOffset,k=T===void 0?m.activeOuterRadiusOffset:T,P=e.width,x=e.height,C=e.margin,Y=e.colors,J=Y===void 0?m.colors:Y,G=e.borderWidth,U=G===void 0?m.borderWidth:G,z=e.borderColor,H=z===void 0?m.borderColor:z,S=e.enableArcLabels,N=S===void 0?m.enableArcLabels:S,q=e.arcLabel,Z=q===void 0?m.arcLabel:q,V=e.arcLabelsSkipAngle,ee=V===void 0?m.arcLabelsSkipAngle:V,W=e.arcLabelsTextColor,X=W===void 0?m.arcLabelsTextColor:W,F=e.arcLabelsRadiusOffset,ce=F===void 0?m.arcLabelsRadiusOffset:F,fe=e.arcLabelsComponent,ke=e.enableArcLinkLabels,nn=ke===void 0?m.enableArcLinkLabels:ke,Me=e.arcLinkLabel,rn=Me===void 0?m.arcLinkLabel:Me,Ce=e.arcLinkLabelsSkipAngle,tn=Ce===void 0?m.arcLinkLabelsSkipAngle:Ce,Ie=e.arcLinkLabelsOffset,an=Ie===void 0?m.arcLinkLabelsOffset:Ie,Oe=e.arcLinkLabelsDiagonalLength,on=Oe===void 0?m.arcLinkLabelsDiagonalLength:Oe,je=e.arcLinkLabelsStraightLength,un=je===void 0?m.arcLinkLabelsStraightLength:je,Te=e.arcLinkLabelsThickness,sn=Te===void 0?m.arcLinkLabelsThickness:Te,we=e.arcLinkLabelsTextOffset,ln=we===void 0?m.arcLinkLabelsTextOffset:we,We=e.arcLinkLabelsTextColor,dn=We===void 0?m.arcLinkLabelsTextColor:We,Ee=e.arcLinkLabelsColor,cn=Ee===void 0?m.arcLinkLabelsColor:Ee,fn=e.arcLinkLabelComponent,Pe=e.defs,gn=Pe===void 0?m.defs:Pe,Se=e.fill,vn=Se===void 0?m.fill:Se,De=e.isInteractive,hn=De===void 0?m.isInteractive:De,pn=e.onClick,An=e.onMouseEnter,mn=e.onMouseMove,Rn=e.onMouseLeave,Ve=e.tooltip,Ln=Ve===void 0?m.tooltip:Ve,xn=e.activeId,bn=e.onActiveIdChange,yn=e.defaultActiveId,Be=e.transitionMode,$e=Be===void 0?m.transitionMode:Be,Ge=e.legends,He=Ge===void 0?m.legends:Ge,kn=e.forwardLegendData,Xe=e.role,Mn=Xe===void 0?m.role:Xe,ue=Fn(P,x,C),Cn=ue.outerWidth,In=ue.outerHeight,On=ue.margin,Fe=ue.innerWidth,Ye=ue.innerHeight,jn=Er({data:n,id:a,value:l,valueFormat:i,colors:J}),K=Dr({data:jn,width:Fe,height:Ye,fit:f,innerRadius:y,startAngle:c,endAngle:p,padAngle:v,sortByValue:u,cornerRadius:M,activeInnerRadiusOffset:E,activeOuterRadiusOffset:k,activeId:xn,onActiveIdChange:bn,defaultActiveId:yn,forwardLegendData:kn}),se=K.dataWithArc,Tn=K.legendData,Je=K.arcGenerator,ge=K.centerX,ve=K.centerY,wn=K.radius,Wn=K.innerRadius,En=K.setActiveId,Pn=K.toggleSerie,Sn=Yn(gn,se,vn),te={arcs:null,arcLinkLabels:null,arcLabels:null,legends:null};h.includes("arcs")&&(te.arcs=j.jsx(Br,{center:[ge,ve],data:se,arcGenerator:Je,borderWidth:U,borderColor:H,isInteractive:hn,onClick:pn,onMouseEnter:An,onMouseMove:mn,onMouseLeave:Rn,setActiveId:En,tooltip:Ln,transitionMode:$e},"arcs")),nn&&h.includes("arcLinkLabels")&&(te.arcLinkLabels=j.jsx(kr,{center:[ge,ve],data:se,label:rn,skipAngle:tn,offset:an,diagonalLength:on,straightLength:un,strokeWidth:sn,textOffset:ln,textColor:dn,linkColor:cn,component:fn},"arcLinkLabels")),N&&h.includes("arcLabels")&&(te.arcLabels=j.jsx(pr,{center:[ge,ve],data:se,label:Z,radiusOffset:ce,skipAngle:ee,textColor:X,transitionMode:$e,component:fe},"arcLabels")),He.length>0&&h.includes("legends")&&(te.legends=j.jsx(wr,{width:Fe,height:Ye,data:Tn,legends:He,toggleSerie:Pn},"legends"));var Dn=Vr({dataWithArc:se,arcGenerator:Je,centerX:ge,centerY:ve,radius:wn,innerRadius:Wn});return j.jsx(Jn,{width:Cn,height:In,margin:On,defs:Sn,role:Mn,children:h.map(function(he,Vn){return te[he]!==void 0?te[he]:typeof he=="function"?j.jsx(I.Fragment,{children:I.createElement(he,Dn)},Vn):null})})},Hr=function(e){var n=e.isInteractive,r=n===void 0?m.isInteractive:n,a=e.animate,s=a===void 0?m.animate:a,l=e.motionConfig,i=l===void 0?m.motionConfig:l,t=e.theme,u=e.renderWrapper,o=en(e,$r);return j.jsx(Xn,{animate:s,isInteractive:r,motionConfig:i,renderWrapper:u,theme:t,children:j.jsx(Gr,_({isInteractive:r},o))})},Jr=function(e){return j.jsx(Hn,{children:function(n){var r=n.width,a=n.height;return j.jsx(Hr,_({width:r,height:a},e))}})};export{Jr as _};
