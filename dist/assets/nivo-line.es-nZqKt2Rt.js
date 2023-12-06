import{r as b,j as R}from"./index-MPkIUv_x.js";import{c as le,ap as Rt,W as tt,aq as Ct,ar as kt,as as ze,at as qt,au as nt,Q as it,X as Tt,L as Ce,av as jt,aw as Ot,ax as Et,ay as At,$ as rt,N as st,S as Ve,az as Lt,aA as Bt,Z as Pt,M as Wt,U as ot,a2 as Le,a8 as It,aa as $t,a7 as Ft,aB as Ke,a9 as Gt,V as zt,a3 as Vt,a0 as Ne,a1 as Dt,aC as lt}from"./nivo-legends.es-JyHwyw4V.js";import{w as Oe,z as Yt,X as Xt,D as Ze,j as Ht,d as Ut}from"./nivo-axes.es-za1NGsRh.js";import{P as a}from"./index-U0uj0dFx.js";import{x as Kt,y as Nt,p as Zt,m as at}from"./line-Bp7MBAur.js";function Jt(){var t=Kt,e=null,n=le(0),r=Nt,i=le(!0),l=null,o=Rt,s=null;function u(c){var h,d,g,p=c.length,m,v=!1,S,M=new Array(p),_=new Array(p);for(l==null&&(s=o(S=Zt())),h=0;h<=p;++h){if(!(h<p&&i(m=c[h],h,c))===v)if(v=!v)d=h,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),g=h-1;g>=d;--g)s.point(M[g],_[g]);s.lineEnd(),s.areaEnd()}v&&(M[h]=+t(m,h,c),_[h]=+n(m,h,c),s.point(e?+e(m,h,c):M[h],r?+r(m,h,c):_[h]))}if(S)return s=null,S+""||null}function f(){return at().defined(i).curve(o).context(l)}return u.x=function(c){return arguments.length?(t=typeof c=="function"?c:le(+c),e=null,u):t},u.x0=function(c){return arguments.length?(t=typeof c=="function"?c:le(+c),u):t},u.x1=function(c){return arguments.length?(e=c==null?null:typeof c=="function"?c:le(+c),u):e},u.y=function(c){return arguments.length?(n=typeof c=="function"?c:le(+c),r=null,u):n},u.y0=function(c){return arguments.length?(n=typeof c=="function"?c:le(+c),u):n},u.y1=function(c){return arguments.length?(r=c==null?null:typeof c=="function"?c:le(+c),u):r},u.lineX0=u.lineY0=function(){return f().x(t).y(n)},u.lineY1=function(){return f().x(t).y(r)},u.lineX1=function(){return f().x(e).y(n)},u.defined=function(c){return arguments.length?(i=typeof c=="function"?c:le(!!c),u):i},u.curve=function(c){return arguments.length?(o=c,l!=null&&(s=o(l)),u):o},u.context=function(c){return arguments.length?(c==null?l=s=null:s=o(l=c),u):l},u}const Je=Math.pow(2,-52),Ee=new Uint32Array(512);class Be{static from(e,n=rn,r=sn){const i=e.length,l=new Float64Array(i*2);for(let o=0;o<i;o++){const s=e[o];l[2*o]=n(s),l[2*o+1]=r(s)}return new Be(l)}constructor(e){const n=e.length>>1;if(n>0&&typeof e[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=e;const r=Math.max(2*n-5,0);this._triangles=new Uint32Array(r*3),this._halfedges=new Int32Array(r*3),this._hashSize=Math.ceil(Math.sqrt(n)),this._hullPrev=new Uint32Array(n),this._hullNext=new Uint32Array(n),this._hullTri=new Uint32Array(n),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(n),this._dists=new Float64Array(n),this.update()}update(){const{coords:e,_hullPrev:n,_hullNext:r,_hullTri:i,_hullHash:l}=this,o=e.length>>1;let s=1/0,u=1/0,f=-1/0,c=-1/0;for(let y=0;y<o;y++){const x=e[2*y],k=e[2*y+1];x<s&&(s=x),k<u&&(u=k),x>f&&(f=x),k>c&&(c=k),this._ids[y]=y}const h=(s+f)/2,d=(u+c)/2;let g=1/0,p,m,v;for(let y=0;y<o;y++){const x=We(h,d,e[2*y],e[2*y+1]);x<g&&(p=y,g=x)}const S=e[2*p],M=e[2*p+1];g=1/0;for(let y=0;y<o;y++){if(y===p)continue;const x=We(S,M,e[2*y],e[2*y+1]);x<g&&x>0&&(m=y,g=x)}let _=e[2*m],E=e[2*m+1],z=1/0;for(let y=0;y<o;y++){if(y===p||y===m)continue;const x=tn(S,M,_,E,e[2*y],e[2*y+1]);x<z&&(v=y,z=x)}let $=e[2*v],H=e[2*v+1];if(z===1/0){for(let k=0;k<o;k++)this._dists[k]=e[2*k]-e[0]||e[2*k+1]-e[1];_e(this._ids,this._dists,0,o-1);const y=new Uint32Array(o);let x=0;for(let k=0,T=-1/0;k<o;k++){const B=this._ids[k];this._dists[B]>T&&(y[x++]=B,T=this._dists[B])}this.hull=y.subarray(0,x),this.triangles=new Uint32Array(0),this.halfedges=new Uint32Array(0);return}if(Ae(S,M,_,E,$,H)){const y=m,x=_,k=E;m=v,_=$,E=H,v=y,$=x,H=k}const j=nn(S,M,_,E,$,H);this._cx=j.x,this._cy=j.y;for(let y=0;y<o;y++)this._dists[y]=We(e[2*y],e[2*y+1],j.x,j.y);_e(this._ids,this._dists,0,o-1),this._hullStart=p;let q=3;r[p]=n[v]=m,r[m]=n[p]=v,r[v]=n[m]=p,i[p]=0,i[m]=1,i[v]=2,l.fill(-1),l[this._hashKey(S,M)]=p,l[this._hashKey(_,E)]=m,l[this._hashKey($,H)]=v,this.trianglesLen=0,this._addTriangle(p,m,v,-1,-1,-1);for(let y=0,x,k;y<this._ids.length;y++){const T=this._ids[y],B=e[2*T],W=e[2*T+1];if(y>0&&Math.abs(B-x)<=Je&&Math.abs(W-k)<=Je||(x=B,k=W,T===p||T===m||T===v))continue;let F=0;for(let D=0,ee=this._hashKey(B,W);D<this._hashSize&&(F=l[(ee+D)%this._hashSize],!(F!==-1&&F!==r[F]));D++);F=n[F];let C=F,O;for(;O=r[C],!Ae(B,W,e[2*C],e[2*C+1],e[2*O],e[2*O+1]);)if(C=O,C===F){C=-1;break}if(C===-1)continue;let U=this._addTriangle(C,T,r[C],-1,-1,i[C]);i[T]=this._legalize(U+2),i[C]=U,q++;let V=r[C];for(;O=r[V],Ae(B,W,e[2*V],e[2*V+1],e[2*O],e[2*O+1]);)U=this._addTriangle(V,T,O,i[T],-1,i[V]),i[T]=this._legalize(U+2),r[V]=V,q--,V=O;if(C===F)for(;O=n[C],Ae(B,W,e[2*O],e[2*O+1],e[2*C],e[2*C+1]);)U=this._addTriangle(O,T,C,-1,i[C],i[O]),this._legalize(U+2),i[O]=U,r[C]=C,q--,C=O;this._hullStart=n[T]=C,r[C]=n[V]=T,r[T]=V,l[this._hashKey(B,W)]=T,l[this._hashKey(e[2*C],e[2*C+1])]=C}this.hull=new Uint32Array(q);for(let y=0,x=this._hullStart;y<q;y++)this.hull[y]=x,x=r[x];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(e,n){return Math.floor(Qt(e-this._cx,n-this._cy)*this._hashSize)%this._hashSize}_legalize(e){const{_triangles:n,_halfedges:r,coords:i}=this;let l=0,o=0;for(;;){const s=r[e],u=e-e%3;if(o=u+(e+2)%3,s===-1){if(l===0)break;e=Ee[--l];continue}const f=s-s%3,c=u+(e+1)%3,h=f+(s+2)%3,d=n[o],g=n[e],p=n[c],m=n[h];if(en(i[2*d],i[2*d+1],i[2*g],i[2*g+1],i[2*p],i[2*p+1],i[2*m],i[2*m+1])){n[e]=m,n[s]=d;const S=r[h];if(S===-1){let _=this._hullStart;do{if(this._hullTri[_]===h){this._hullTri[_]=e;break}_=this._hullPrev[_]}while(_!==this._hullStart)}this._link(e,S),this._link(s,r[o]),this._link(o,h);const M=f+(s+1)%3;l<Ee.length&&(Ee[l++]=M)}else{if(l===0)break;e=Ee[--l]}}return o}_link(e,n){this._halfedges[e]=n,n!==-1&&(this._halfedges[n]=e)}_addTriangle(e,n,r,i,l,o){const s=this.trianglesLen;return this._triangles[s]=e,this._triangles[s+1]=n,this._triangles[s+2]=r,this._link(s,i),this._link(s+1,l),this._link(s+2,o),this.trianglesLen+=3,s}}function Qt(t,e){const n=t/(Math.abs(t)+Math.abs(e));return(e>0?3-n:1+n)/4}function We(t,e,n,r){const i=t-n,l=e-r;return i*i+l*l}function Ie(t,e,n,r,i,l){const o=(r-e)*(i-t),s=(n-t)*(l-e);return Math.abs(o-s)>=33306690738754716e-32*Math.abs(o+s)?o-s:0}function Ae(t,e,n,r,i,l){return(Ie(i,l,t,e,n,r)||Ie(t,e,n,r,i,l)||Ie(n,r,i,l,t,e))<0}function en(t,e,n,r,i,l,o,s){const u=t-o,f=e-s,c=n-o,h=r-s,d=i-o,g=l-s,p=u*u+f*f,m=c*c+h*h,v=d*d+g*g;return u*(h*v-m*g)-f*(c*v-m*d)+p*(c*g-h*d)<0}function tn(t,e,n,r,i,l){const o=n-t,s=r-e,u=i-t,f=l-e,c=o*o+s*s,h=u*u+f*f,d=.5/(o*f-s*u),g=(f*c-s*h)*d,p=(o*h-u*c)*d;return g*g+p*p}function nn(t,e,n,r,i,l){const o=n-t,s=r-e,u=i-t,f=l-e,c=o*o+s*s,h=u*u+f*f,d=.5/(o*f-s*u),g=t+(f*c-s*h)*d,p=e+(o*h-u*c)*d;return{x:g,y:p}}function _e(t,e,n,r){if(r-n<=20)for(let i=n+1;i<=r;i++){const l=t[i],o=e[l];let s=i-1;for(;s>=n&&e[t[s]]>o;)t[s+1]=t[s--];t[s+1]=l}else{const i=n+r>>1;let l=n+1,o=r;Re(t,i,l),e[t[n]]>e[t[r]]&&Re(t,n,r),e[t[l]]>e[t[r]]&&Re(t,l,r),e[t[n]]>e[t[l]]&&Re(t,n,l);const s=t[l],u=e[s];for(;;){do l++;while(e[t[l]]<u);do o--;while(e[t[o]]>u);if(o<l)break;Re(t,l,o)}t[n+1]=t[o],t[o]=s,r-l+1>=o-n?(_e(t,e,l,r),_e(t,e,n,o-1)):(_e(t,e,n,o-1),_e(t,e,l,r))}}function Re(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function rn(t){return t[0]}function sn(t){return t[1]}const Qe=1e-6;class me{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(e,n){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(e,n){this._+=`L${this._x1=+e},${this._y1=+n}`}arc(e,n,r){e=+e,n=+n,r=+r;const i=e+r,l=n;if(r<0)throw new Error("negative radius");this._x1===null?this._+=`M${i},${l}`:(Math.abs(this._x1-i)>Qe||Math.abs(this._y1-l)>Qe)&&(this._+="L"+i+","+l),r&&(this._+=`A${r},${r},0,1,1,${e-r},${n}A${r},${r},0,1,1,${this._x1=i},${this._y1=l}`)}rect(e,n,r,i){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}h${+r}v${+i}h${-r}Z`}value(){return this._||null}}class $e{constructor(){this._=[]}moveTo(e,n){this._.push([e,n])}closePath(){this._.push(this._[0].slice())}lineTo(e,n){this._.push([e,n])}value(){return this._.length?this._:null}}class on{constructor(e,[n,r,i,l]=[0,0,960,500]){if(!((i=+i)>=(n=+n))||!((l=+l)>=(r=+r)))throw new Error("invalid bounds");this.delaunay=e,this._circumcenters=new Float64Array(e.points.length*2),this.vectors=new Float64Array(e.points.length*2),this.xmax=i,this.xmin=n,this.ymax=l,this.ymin=r,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){const{delaunay:{points:e,hull:n,triangles:r},vectors:i}=this,l=this.circumcenters=this._circumcenters.subarray(0,r.length/3*2);for(let g=0,p=0,m=r.length,v,S;g<m;g+=3,p+=2){const M=r[g]*2,_=r[g+1]*2,E=r[g+2]*2,z=e[M],$=e[M+1],H=e[_],j=e[_+1],q=e[E],y=e[E+1],x=H-z,k=j-$,T=q-z,B=y-$,W=x*x+k*k,F=T*T+B*B,C=(x*B-k*T)*2;if(!C)v=(z+q)/2-1e8*B,S=($+y)/2+1e8*T;else if(Math.abs(C)<1e-8)v=(z+q)/2,S=($+y)/2;else{const O=1/C;v=z+(B*W-k*F)*O,S=$+(x*F-T*W)*O}l[p]=v,l[p+1]=S}let o=n[n.length-1],s,u=o*4,f,c=e[2*o],h,d=e[2*o+1];i.fill(0);for(let g=0;g<n.length;++g)o=n[g],s=u,f=c,h=d,u=o*4,c=e[2*o],d=e[2*o+1],i[s+2]=i[u]=h-d,i[s+3]=i[u+1]=c-f}render(e){const n=e==null?e=new me:void 0,{delaunay:{halfedges:r,inedges:i,hull:l},circumcenters:o,vectors:s}=this;if(l.length<=1)return null;for(let c=0,h=r.length;c<h;++c){const d=r[c];if(d<c)continue;const g=Math.floor(c/3)*2,p=Math.floor(d/3)*2,m=o[g],v=o[g+1],S=o[p],M=o[p+1];this._renderSegment(m,v,S,M,e)}let u,f=l[l.length-1];for(let c=0;c<l.length;++c){u=f,f=l[c];const h=Math.floor(i[f]/3)*2,d=o[h],g=o[h+1],p=u*4,m=this._project(d,g,s[p+2],s[p+3]);m&&this._renderSegment(d,g,m[0],m[1],e)}return n&&n.value()}renderBounds(e){const n=e==null?e=new me:void 0;return e.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),n&&n.value()}renderCell(e,n){const r=n==null?n=new me:void 0,i=this._clip(e);if(i===null||!i.length)return;n.moveTo(i[0],i[1]);let l=i.length;for(;i[0]===i[l-2]&&i[1]===i[l-1]&&l>1;)l-=2;for(let o=2;o<l;o+=2)(i[o]!==i[o-2]||i[o+1]!==i[o-1])&&n.lineTo(i[o],i[o+1]);return n.closePath(),r&&r.value()}*cellPolygons(){const{delaunay:{points:e}}=this;for(let n=0,r=e.length/2;n<r;++n){const i=this.cellPolygon(n);i&&(i.index=n,yield i)}}cellPolygon(e){const n=new $e;return this.renderCell(e,n),n.value()}_renderSegment(e,n,r,i,l){let o;const s=this._regioncode(e,n),u=this._regioncode(r,i);s===0&&u===0?(l.moveTo(e,n),l.lineTo(r,i)):(o=this._clipSegment(e,n,r,i,s,u))&&(l.moveTo(o[0],o[1]),l.lineTo(o[2],o[3]))}contains(e,n,r){return n=+n,n!==n||(r=+r,r!==r)?!1:this.delaunay._step(e,n,r)===e}*neighbors(e){const n=this._clip(e);if(n)for(const r of this.delaunay.neighbors(e)){const i=this._clip(r);if(i){e:for(let l=0,o=n.length;l<o;l+=2)for(let s=0,u=i.length;s<u;s+=2)if(n[l]==i[s]&&n[l+1]==i[s+1]&&n[(l+2)%o]==i[(s+u-2)%u]&&n[(l+3)%o]==i[(s+u-1)%u]){yield r;break e}}}}_cell(e){const{circumcenters:n,delaunay:{inedges:r,halfedges:i,triangles:l}}=this,o=r[e];if(o===-1)return null;const s=[];let u=o;do{const f=Math.floor(u/3);if(s.push(n[f*2],n[f*2+1]),u=u%3===2?u-2:u+1,l[u]!==e)break;u=i[u]}while(u!==o&&u!==-1);return s}_clip(e){if(e===0&&this.delaunay.hull.length===1)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];const n=this._cell(e);if(n===null)return null;const{vectors:r}=this,i=e*4;return r[i]||r[i+1]?this._clipInfinite(e,n,r[i],r[i+1],r[i+2],r[i+3]):this._clipFinite(e,n)}_clipFinite(e,n){const r=n.length;let i=null,l,o,s=n[r-2],u=n[r-1],f,c=this._regioncode(s,u),h,d;for(let g=0;g<r;g+=2)if(l=s,o=u,s=n[g],u=n[g+1],f=c,c=this._regioncode(s,u),f===0&&c===0)h=d,d=0,i?i.push(s,u):i=[s,u];else{let p,m,v,S,M;if(f===0){if((p=this._clipSegment(l,o,s,u,f,c))===null)continue;[m,v,S,M]=p}else{if((p=this._clipSegment(s,u,l,o,c,f))===null)continue;[S,M,m,v]=p,h=d,d=this._edgecode(m,v),h&&d&&this._edge(e,h,d,i,i.length),i?i.push(m,v):i=[m,v]}h=d,d=this._edgecode(S,M),h&&d&&this._edge(e,h,d,i,i.length),i?i.push(S,M):i=[S,M]}if(i)h=d,d=this._edgecode(i[0],i[1]),h&&d&&this._edge(e,h,d,i,i.length);else if(this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return i}_clipSegment(e,n,r,i,l,o){for(;;){if(l===0&&o===0)return[e,n,r,i];if(l&o)return null;let s,u,f=l||o;f&8?(s=e+(r-e)*(this.ymax-n)/(i-n),u=this.ymax):f&4?(s=e+(r-e)*(this.ymin-n)/(i-n),u=this.ymin):f&2?(u=n+(i-n)*(this.xmax-e)/(r-e),s=this.xmax):(u=n+(i-n)*(this.xmin-e)/(r-e),s=this.xmin),l?(e=s,n=u,l=this._regioncode(e,n)):(r=s,i=u,o=this._regioncode(r,i))}}_clipInfinite(e,n,r,i,l,o){let s=Array.from(n),u;if((u=this._project(s[0],s[1],r,i))&&s.unshift(u[0],u[1]),(u=this._project(s[s.length-2],s[s.length-1],l,o))&&s.push(u[0],u[1]),s=this._clipFinite(e,s))for(let f=0,c=s.length,h,d=this._edgecode(s[c-2],s[c-1]);f<c;f+=2)h=d,d=this._edgecode(s[f],s[f+1]),h&&d&&(f=this._edge(e,h,d,s,f),c=s.length);else this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(s=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return s}_edge(e,n,r,i,l){for(;n!==r;){let o,s;switch(n){case 5:n=4;continue;case 4:n=6,o=this.xmax,s=this.ymin;break;case 6:n=2;continue;case 2:n=10,o=this.xmax,s=this.ymax;break;case 10:n=8;continue;case 8:n=9,o=this.xmin,s=this.ymax;break;case 9:n=1;continue;case 1:n=5,o=this.xmin,s=this.ymin;break}(i[l]!==o||i[l+1]!==s)&&this.contains(e,o,s)&&(i.splice(l,0,o,s),l+=2)}if(i.length>4)for(let o=0;o<i.length;o+=2){const s=(o+2)%i.length,u=(o+4)%i.length;(i[o]===i[s]&&i[s]===i[u]||i[o+1]===i[s+1]&&i[s+1]===i[u+1])&&(i.splice(s,2),o-=2)}return l}_project(e,n,r,i){let l=1/0,o,s,u;if(i<0){if(n<=this.ymin)return null;(o=(this.ymin-n)/i)<l&&(u=this.ymin,s=e+(l=o)*r)}else if(i>0){if(n>=this.ymax)return null;(o=(this.ymax-n)/i)<l&&(u=this.ymax,s=e+(l=o)*r)}if(r>0){if(e>=this.xmax)return null;(o=(this.xmax-e)/r)<l&&(s=this.xmax,u=n+(l=o)*i)}else if(r<0){if(e<=this.xmin)return null;(o=(this.xmin-e)/r)<l&&(s=this.xmin,u=n+(l=o)*i)}return[s,u]}_edgecode(e,n){return(e===this.xmin?1:e===this.xmax?2:0)|(n===this.ymin?4:n===this.ymax?8:0)}_regioncode(e,n){return(e<this.xmin?1:e>this.xmax?2:0)|(n<this.ymin?4:n>this.ymax?8:0)}}const ln=2*Math.PI,ve=Math.pow;function an(t){return t[0]}function un(t){return t[1]}function cn(t){const{triangles:e,coords:n}=t;for(let r=0;r<e.length;r+=3){const i=2*e[r],l=2*e[r+1],o=2*e[r+2];if((n[o]-n[i])*(n[l+1]-n[i+1])-(n[l]-n[i])*(n[o+1]-n[i+1])>1e-10)return!1}return!0}function hn(t,e,n){return[t+Math.sin(t+e)*n,e+Math.cos(t-e)*n]}class De{static from(e,n=an,r=un,i){return new De("length"in e?fn(e,n,r,i):Float64Array.from(dn(e,n,r,i)))}constructor(e){this._delaunator=new Be(e),this.inedges=new Int32Array(e.length/2),this._hullIndex=new Int32Array(e.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){const e=this._delaunator,n=this.points;if(e.hull&&e.hull.length>2&&cn(e)){this.collinear=Int32Array.from({length:n.length/2},(d,g)=>g).sort((d,g)=>n[2*d]-n[2*g]||n[2*d+1]-n[2*g+1]);const u=this.collinear[0],f=this.collinear[this.collinear.length-1],c=[n[2*u],n[2*u+1],n[2*f],n[2*f+1]],h=1e-8*Math.hypot(c[3]-c[1],c[2]-c[0]);for(let d=0,g=n.length/2;d<g;++d){const p=hn(n[2*d],n[2*d+1],h);n[2*d]=p[0],n[2*d+1]=p[1]}this._delaunator=new Be(n)}else delete this.collinear;const r=this.halfedges=this._delaunator.halfedges,i=this.hull=this._delaunator.hull,l=this.triangles=this._delaunator.triangles,o=this.inedges.fill(-1),s=this._hullIndex.fill(-1);for(let u=0,f=r.length;u<f;++u){const c=l[u%3===2?u-2:u+1];(r[u]===-1||o[c]===-1)&&(o[c]=u)}for(let u=0,f=i.length;u<f;++u)s[i[u]]=u;i.length<=2&&i.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=i[0],this.triangles[1]=i[1],this.triangles[2]=i[1],o[i[0]]=1,i.length===2&&(o[i[1]]=0))}voronoi(e){return new on(this,e)}*neighbors(e){const{inedges:n,hull:r,_hullIndex:i,halfedges:l,triangles:o,collinear:s}=this;if(s){const h=s.indexOf(e);h>0&&(yield s[h-1]),h<s.length-1&&(yield s[h+1]);return}const u=n[e];if(u===-1)return;let f=u,c=-1;do{if(yield c=o[f],f=f%3===2?f-2:f+1,o[f]!==e)return;if(f=l[f],f===-1){const h=r[(i[e]+1)%r.length];h!==c&&(yield h);return}}while(f!==u)}find(e,n,r=0){if(e=+e,e!==e||(n=+n,n!==n))return-1;const i=r;let l;for(;(l=this._step(r,e,n))>=0&&l!==r&&l!==i;)r=l;return l}_step(e,n,r){const{inedges:i,hull:l,_hullIndex:o,halfedges:s,triangles:u,points:f}=this;if(i[e]===-1||!f.length)return(e+1)%(f.length>>1);let c=e,h=ve(n-f[e*2],2)+ve(r-f[e*2+1],2);const d=i[e];let g=d;do{let p=u[g];const m=ve(n-f[p*2],2)+ve(r-f[p*2+1],2);if(m<h&&(h=m,c=p),g=g%3===2?g-2:g+1,u[g]!==e)break;if(g=s[g],g===-1){if(g=l[(o[e]+1)%l.length],g!==p&&ve(n-f[g*2],2)+ve(r-f[g*2+1],2)<h)return g;break}}while(g!==d);return c}render(e){const n=e==null?e=new me:void 0,{points:r,halfedges:i,triangles:l}=this;for(let o=0,s=i.length;o<s;++o){const u=i[o];if(u<o)continue;const f=l[o]*2,c=l[u]*2;e.moveTo(r[f],r[f+1]),e.lineTo(r[c],r[c+1])}return this.renderHull(e),n&&n.value()}renderPoints(e,n=2){const r=e==null?e=new me:void 0,{points:i}=this;for(let l=0,o=i.length;l<o;l+=2){const s=i[l],u=i[l+1];e.moveTo(s+n,u),e.arc(s,u,n,0,ln)}return r&&r.value()}renderHull(e){const n=e==null?e=new me:void 0,{hull:r,points:i}=this,l=r[0]*2,o=r.length;e.moveTo(i[l],i[l+1]);for(let s=1;s<o;++s){const u=2*r[s];e.lineTo(i[u],i[u+1])}return e.closePath(),n&&n.value()}hullPolygon(){const e=new $e;return this.renderHull(e),e.value()}renderTriangle(e,n){const r=n==null?n=new me:void 0,{points:i,triangles:l}=this,o=l[e*=3]*2,s=l[e+1]*2,u=l[e+2]*2;return n.moveTo(i[o],i[o+1]),n.lineTo(i[s],i[s+1]),n.lineTo(i[u],i[u+1]),n.closePath(),r&&r.value()}*trianglePolygons(){const{triangles:e}=this;for(let n=0,r=e.length/3;n<r;++n)yield this.trianglePolygon(n)}trianglePolygon(e){const n=new $e;return this.renderTriangle(e,n),n.value()}}function fn(t,e,n,r){const i=t.length,l=new Float64Array(i*2);for(let o=0;o<i;++o){const s=t[o];l[o*2]=e.call(r,s,o,t),l[o*2+1]=n.call(r,s,o,t)}return l}function*dn(t,e,n,r){let i=0;for(const l of t)yield e.call(r,l,i,t),yield n.call(r,l,i,t),++i}var et=function(t){return typeof t=="function"?t:function(e){return e[t]}},gn=function(t){var e=t.points,n=t.x,r=n===void 0?"x":n,i=t.y,l=i===void 0?"y":i,o=et(r),s=et(l);return e.map(function(u){return[o(u),s(u)]})},pn=function(t){var e=t.points,n=t.width,r=t.height,i=t.debug,l=De.from(e),o=i?l.voronoi([0,0,n,r]):void 0;return{delaunay:l,voronoi:o}},ut=function(t){var e=t.points,n=t.x,r=t.y,i=t.width,l=t.height,o=t.debug,s=b.useMemo(function(){return gn({points:e,x:n,y:r})},[e,n,r]);return b.useMemo(function(){return pn({points:s,width:i,height:l,debug:o})},[s,i,l,o])},yn=function(t){var e=t.nodes,n=t.width,r=t.height,i=t.x,l=t.y,o=t.onMouseEnter,s=t.onMouseMove,u=t.onMouseLeave,f=t.onClick,c=t.debug,h=b.useRef(null),d=b.useState(null),g=d[0],p=d[1],m=ut({points:e,x:i,y:l,width:n,height:r,debug:c}),v=m.delaunay,S=m.voronoi,M=b.useMemo(function(){if(c&&S)return S.render()},[c,S]),_=b.useCallback(function(j){if(!h.current)return[null,null];var q=tt(h.current,j),y=q[0],x=q[1],k=v.find(y,x);return[k,k!==void 0?e[k]:null]},[h,v]),E=b.useCallback(function(j){var q=_(j),y=q[0],x=q[1];p(y),x&&(o==null||o(x,j))},[_,p,o]),z=b.useCallback(function(j){var q=_(j),y=q[0],x=q[1];p(y),x&&(s==null||s(x,j))},[_,p,s]),$=b.useCallback(function(j){if(p(null),u){var q=void 0;g!==null&&(q=e[g]),q&&u(q,j)}},[p,g,u,e]),H=b.useCallback(function(j){var q=_(j),y=q[0],x=q[1];p(y),x&&(f==null||f(x,j))},[_,p,f]);return R.jsxs("g",{ref:h,children:[c&&S&&R.jsxs(R.Fragment,{children:[R.jsx("path",{d:M,stroke:"red",strokeWidth:1,opacity:.75}),g!==null&&R.jsx("path",{fill:"pink",opacity:.35,d:S.renderCell(g)})]}),R.jsx("rect",{width:n,height:r,fill:"red",opacity:0,style:{cursor:"auto"},onMouseEnter:E,onMouseMove:z,onMouseLeave:$,onClick:H})]})},mn=function(t,e){t.save(),t.globalAlpha=.75,t.beginPath(),e.render(t),t.strokeStyle="red",t.lineWidth=1,t.stroke(),t.restore()},bn=function(t,e,n){t.save(),t.globalAlpha=.35,t.beginPath(),e.renderCell(n,t),t.fillStyle="red",t.fill(),t.restore()};function X(){return X=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},X.apply(this,arguments)}var ct=function(t){var e=t.point;return R.jsx(Tt,{id:R.jsxs("span",{children:["x: ",R.jsx("strong",{children:e.data.xFormatted}),", y:"," ",R.jsx("strong",{children:e.data.yFormatted})]}),enableChip:!0,color:e.serieColor})};ct.propTypes={point:a.object.isRequired};var xn=b.memo(ct),ht=function(t){var e=t.slice,n=t.axis,r=Ce(),i=n==="x"?"y":"x";return R.jsx(jt,{rows:e.points.map(function(l){return[R.jsx(Ot,{color:l.serieColor,style:r.tooltip.chip},"chip"),l.serieId,R.jsx("span",{style:r.tooltip.tableCellValue,children:l.data[i+"Formatted"]},"value")]})})};ht.propTypes={slice:a.object.isRequired,axis:a.oneOf(["x","y"]).isRequired};var vn=b.memo(ht),ft={data:a.arrayOf(a.shape({id:a.oneOfType([a.string,a.number]).isRequired,data:a.arrayOf(a.shape({x:a.oneOfType([a.number,a.string,a.instanceOf(Date)]),y:a.oneOfType([a.number,a.string,a.instanceOf(Date)])})).isRequired})).isRequired,xScale:a.object.isRequired,xFormat:a.oneOfType([a.func,a.string]),yScale:a.object.isRequired,yFormat:a.oneOfType([a.func,a.string]),layers:a.arrayOf(a.oneOfType([a.oneOf(["grid","markers","axes","areas","crosshair","lines","slices","points","mesh","legends"]),a.func])).isRequired,curve:Ct.isRequired,axisTop:Oe,axisRight:Oe,axisBottom:Oe,axisLeft:Oe,enableGridX:a.bool.isRequired,enableGridY:a.bool.isRequired,gridXValues:a.oneOfType([a.number,a.arrayOf(a.oneOfType([a.number,a.string,a.instanceOf(Date)]))]),gridYValues:a.oneOfType([a.number,a.arrayOf(a.oneOfType([a.number,a.string,a.instanceOf(Date)]))]),enablePoints:a.bool.isRequired,pointSymbol:a.func,pointSize:a.number.isRequired,pointColor:a.any.isRequired,pointBorderWidth:a.number.isRequired,pointBorderColor:a.any.isRequired,enablePointLabel:a.bool.isRequired,pointLabel:a.oneOfType([a.string,a.func]).isRequired,markers:a.arrayOf(a.shape({axis:a.oneOf(["x","y"]).isRequired,value:a.oneOfType([a.number,a.string,a.instanceOf(Date)]).isRequired,style:a.object})),colors:kt.isRequired,enableArea:a.bool.isRequired,areaOpacity:a.number.isRequired,areaBlendMode:ze.isRequired,areaBaselineValue:a.oneOfType([a.number,a.string,a.instanceOf(Date)]).isRequired,lineWidth:a.number.isRequired,legends:a.arrayOf(a.shape(qt)).isRequired,isInteractive:a.bool.isRequired,debugMesh:a.bool.isRequired,tooltip:a.oneOfType([a.func,a.object]).isRequired,enableSlices:a.oneOf(["x","y",!1]).isRequired,debugSlices:a.bool.isRequired,sliceTooltip:a.oneOfType([a.func,a.object]).isRequired,enableCrosshair:a.bool.isRequired,crosshairType:a.string.isRequired},_n=X({},ft,{enablePointLabel:a.bool.isRequired,role:a.string.isRequired,useMesh:a.bool.isRequired},Et,At),wn=X({pixelRatio:a.number.isRequired},ft),dt={curve:"linear",xScale:{type:"point"},yScale:{type:"linear",min:0,max:"auto"},layers:["grid","markers","axes","areas","crosshair","lines","points","slices","mesh","legends"],axisBottom:{},axisLeft:{},enableGridX:!0,enableGridY:!0,enablePoints:!0,pointSize:6,pointColor:{from:"color"},pointBorderWidth:0,pointBorderColor:{theme:"background"},enablePointLabel:!1,pointLabel:"yFormatted",colors:{scheme:"nivo"},enableArea:!1,areaBaselineValue:0,areaOpacity:.2,areaBlendMode:"normal",lineWidth:2,legends:[],isInteractive:!0,tooltip:xn,enableSlices:!1,debugSlices:!1,sliceTooltip:vn,debugMesh:!1,enableCrosshair:!0,crosshairType:"bottom-left"},ae=X({},dt,{enablePointLabel:!1,useMesh:!1,animate:!0,motionConfig:"gentle",defs:[],fill:[],role:"img"}),Mn=X({},dt,{pixelRatio:typeof window<"u"&&window.devicePixelRatio||1}),Sn=function(t){var e=t.curve;return b.useMemo(function(){return at().defined(function(n){return n.x!==null&&n.y!==null}).x(function(n){return n.x}).y(function(n){return n.y}).curve(lt(e))},[e])},Rn=function(t){var e=t.curve,n=t.yScale,r=t.areaBaselineValue;return b.useMemo(function(){return Jt().defined(function(i){return i.x!==null&&i.y!==null}).x(function(i){return i.x}).y1(function(i){return i.y}).curve(lt(e)).y0(n(r))},[e,n,r])},Cn=function(t){var e=t.enableSlices,n=t.points,r=t.width,i=t.height;return b.useMemo(function(){if(e===!1)return[];if(e==="x"){var l=new Map;return n.forEach(function(s){s.data.x!==null&&s.data.y!==null&&(l.has(s.x)?l.get(s.x).push(s):l.set(s.x,[s]))}),Array.from(l.entries()).sort(function(s,u){return s[0]-u[0]}).map(function(s,u,f){var c,h=s[0],d=s[1],g=f[u-1],p=f[u+1];return{id:h,x0:c=g?h-(h-g[0])/2:h,x:h,y0:0,y:0,width:p?h-c+(p[0]-h)/2:r-c,height:i,points:d.reverse()}})}if(e==="y"){var o=new Map;return n.forEach(function(s){s.data.x!==null&&s.data.y!==null&&(o.has(s.y)?o.get(s.y).push(s):o.set(s.y,[s]))}),Array.from(o.entries()).sort(function(s,u){return s[0]-u[0]}).map(function(s,u,f){var c,h,d=s[0],g=s[1],p=f[u-1],m=f[u+1];return c=p?d-(d-p[0])/2:d,h=m?d-c+(m[0]-d)/2:i-c,{id:d,x0:0,x:0,y0:c,y:d,width:r,height:h,points:g.reverse()}})}},[e,n])},gt=function(t){var e=t.data,n=t.xScale,r=n===void 0?ae.xScale:n,i=t.xFormat,l=t.yScale,o=l===void 0?ae.yScale:l,s=t.yFormat,u=t.width,f=t.height,c=t.colors,h=c===void 0?ae.colors:c,d=t.curve,g=d===void 0?ae.curve:d,p=t.areaBaselineValue,m=p===void 0?ae.areaBaselineValue:p,v=t.pointColor,S=v===void 0?ae.pointColor:v,M=t.pointBorderColor,_=M===void 0?ae.pointBorderColor:M,E=t.enableSlices,z=E===void 0?ae.enableSlicesTooltip:E,$=Ne(i),H=Ne(s),j=Dt(h,"id"),q=Ce(),y=Le(S,q),x=Le(_,q),k=b.useState([]),T=k[0],B=k[1],W=b.useMemo(function(){return Ut(e.filter(function(A){return T.indexOf(A.id)===-1}),r,o,u,f)},[e,T,r,o,u,f]),F=W.xScale,C=W.yScale,O=W.series,U=b.useMemo(function(){var A=e.map(function(P){return{id:P.id,label:P.id,color:j(P)}}),G=A.map(function(P){return X({},O.find(function(Y){return Y.id===P.id}),{color:P.color})}).filter(function(P){return!!P.id});return{legendData:A.map(function(P){return X({},P,{hidden:!G.find(function(Y){return Y.id===P.id})})}).reverse(),series:G}},[e,O,j]),V=U.legendData,D=U.series,ee=b.useCallback(function(A){B(function(G){return G.indexOf(A)>-1?G.filter(function(P){return P!==A}):[].concat(G,[A])})},[]),re=function(A){var G=A.series,P=A.getPointColor,Y=A.getPointBorderColor,he=A.formatX,K=A.formatY;return b.useMemo(function(){return G.reduce(function(se,J){return[].concat(se,J.data.filter(function(N){return N.position.x!==null&&N.position.y!==null}).map(function(N,ue){var ne={id:J.id+"."+ue,index:se.length+ue,serieId:J.id,serieColor:J.color,x:N.position.x,y:N.position.y};return ne.color=P(J),ne.borderColor=Y(ne),ne.data=X({},N.data,{xFormatted:he(N.data.x),yFormatted:K(N.data.y)}),ne}))},[])},[G,P,Y,he,K])}({series:D,getPointColor:y,getPointBorderColor:x,formatX:$,formatY:H}),te=Cn({enableSlices:z,points:re,width:u,height:f});return{legendData:V,toggleSerie:ee,lineGenerator:Sn({curve:g}),areaGenerator:Rn({curve:g,yScale:C,areaBaselineValue:m}),getColor:j,series:D,xScale:F,yScale:C,slices:te,points:re}},pt=function(t){var e=t.areaBlendMode,n=t.areaOpacity,r=t.color,i=t.fill,l=t.path,o=Pt(),s=o.animate,u=o.config,f=rt(l),c=Wt({color:r,config:u,immediate:!s});return R.jsx(st.path,{d:f,fill:i||c.color,fillOpacity:n,strokeWidth:0,style:{mixBlendMode:e}})};pt.propTypes={areaBlendMode:ze.isRequired,areaOpacity:a.number.isRequired,color:a.string,fill:a.string,path:a.string.isRequired};var yt=function(t){var e=t.areaGenerator,n=t.areaOpacity,r=t.areaBlendMode,i=t.lines.slice(0).reverse();return R.jsx("g",{children:i.map(function(l){return R.jsx(pt,X({path:e(l.data.map(function(o){return o.position}))},X({areaOpacity:n,areaBlendMode:r},l)),l.id)})})};yt.propTypes={areaGenerator:a.func.isRequired,areaOpacity:a.number.isRequired,areaBlendMode:ze.isRequired,lines:a.arrayOf(a.object).isRequired};var kn=b.memo(yt),mt=function(t){var e=t.lineGenerator,n=t.points,r=t.color,i=t.thickness,l=b.useMemo(function(){return e(n)},[e,n]),o=rt(l);return R.jsx(st.path,{d:o,fill:"none",strokeWidth:i,stroke:r})};mt.propTypes={points:a.arrayOf(a.shape({x:a.oneOfType([a.string,a.number]),y:a.oneOfType([a.string,a.number])})),lineGenerator:a.func.isRequired,color:a.string.isRequired,thickness:a.number.isRequired};var qn=b.memo(mt),bt=function(t){var e=t.lines,n=t.lineGenerator,r=t.lineWidth;return e.slice(0).reverse().map(function(i){var l=i.id,o=i.data,s=i.color;return R.jsx(qn,{id:l,points:o.map(function(u){return u.position}),lineGenerator:n,color:s,thickness:r},l)})};bt.propTypes={lines:a.arrayOf(a.shape({id:a.oneOfType([a.string,a.number]).isRequired,color:a.string.isRequired,data:a.arrayOf(a.shape({data:a.shape({x:a.oneOfType([a.string,a.number,a.instanceOf(Date)]),y:a.oneOfType([a.string,a.number,a.instanceOf(Date)])}).isRequired,position:a.shape({x:a.number,y:a.number}).isRequired})).isRequired})).isRequired,lineWidth:a.number.isRequired,lineGenerator:a.func.isRequired};var Tn=b.memo(bt),xt=function(t){var e=t.slice,n=t.axis,r=t.debug,i=t.tooltip,l=t.isCurrent,o=t.setCurrent,s=t.onMouseEnter,u=t.onMouseMove,f=t.onMouseLeave,c=t.onClick,h=Ve(),d=h.showTooltipFromEvent,g=h.hideTooltip,p=b.useCallback(function(M){d(b.createElement(i,{slice:e,axis:n}),M,"right"),o(e),s&&s(e,M)},[d,i,e,s]),m=b.useCallback(function(M){d(b.createElement(i,{slice:e,axis:n}),M,"right"),u&&u(e,M)},[d,i,e,u]),v=b.useCallback(function(M){g(),o(null),f&&f(e,M)},[g,e,f]),S=b.useCallback(function(M){c&&c(e,M)},[e,c]);return R.jsx("rect",{x:e.x0,y:e.y0,width:e.width,height:e.height,stroke:"red",strokeWidth:r?1:0,strokeOpacity:.75,fill:"red",fillOpacity:l&&r?.35:0,onMouseEnter:p,onMouseMove:m,onMouseLeave:v,onClick:S,"data-testid":"slice-"+e.id})};xt.propTypes={slice:a.object.isRequired,axis:a.oneOf(["x","y"]).isRequired,debug:a.bool.isRequired,height:a.number.isRequired,tooltip:a.oneOfType([a.func,a.object]),isCurrent:a.bool.isRequired,setCurrent:a.func.isRequired,onMouseEnter:a.func,onMouseMove:a.func,onMouseLeave:a.func,onClick:a.func};var jn=b.memo(xt),vt=function(t){var e=t.slices,n=t.axis,r=t.debug,i=t.height,l=t.tooltip,o=t.current,s=t.setCurrent,u=t.onMouseEnter,f=t.onMouseMove,c=t.onMouseLeave,h=t.onClick;return e.map(function(d){return R.jsx(jn,{slice:d,axis:n,debug:r,height:i,tooltip:l,setCurrent:s,isCurrent:o!==null&&o.id===d.id,onMouseEnter:u,onMouseMove:f,onMouseLeave:c,onClick:h},d.id)})};vt.propTypes={slices:a.arrayOf(a.shape({id:a.oneOfType([a.number,a.string,a.instanceOf(Date)]).isRequired,x:a.number.isRequired,y:a.number.isRequired,points:a.arrayOf(a.object).isRequired})).isRequired,axis:a.oneOf(["x","y"]).isRequired,debug:a.bool.isRequired,height:a.number.isRequired,tooltip:a.oneOfType([a.func,a.object]).isRequired,current:a.object,setCurrent:a.func.isRequired,onMouseEnter:a.func,onMouseMove:a.func,onMouseLeave:a.func,onClick:a.func};var On=b.memo(vt),_t=function(t){var e=t.points,n=t.symbol,r=t.size,i=t.borderWidth,l=t.enableLabel,o=t.label,s=t.labelYOffset,u=Ce(),f=Lt(o),c=e.slice(0).reverse().map(function(h){return{id:h.id,x:h.x,y:h.y,datum:h.data,fill:h.color,stroke:h.borderColor,label:l?f(h.data):null}});return R.jsx("g",{children:c.map(function(h){return R.jsx(Bt,{x:h.x,y:h.y,datum:h.datum,symbol:n,size:r,color:h.fill,borderWidth:i,borderColor:h.stroke,label:h.label,labelYOffset:s,theme:u},h.id)})})};_t.propTypes={points:a.arrayOf(a.object),symbol:a.func,size:a.number.isRequired,color:a.func.isRequired,borderWidth:a.number.isRequired,borderColor:a.func.isRequired,enableLabel:a.bool.isRequired,label:a.oneOfType([a.string,a.func]).isRequired,labelYOffset:a.number};var En=b.memo(_t),wt=function(t){var e=t.points,n=t.width,r=t.height,i=t.margin,l=t.setCurrent,o=t.onMouseEnter,s=t.onMouseMove,u=t.onMouseLeave,f=t.onClick,c=t.tooltip,h=t.debug,d=Ve(),g=d.showTooltipAt,p=d.hideTooltip,m=b.useCallback(function(_,E){g(b.createElement(c,{point:_}),[_.x+i.left,_.y+i.top],"top"),l(_),o&&o(_,E)},[l,g,c,o,i]),v=b.useCallback(function(_,E){g(b.createElement(c,{point:_}),[_.x+i.left,_.y+i.top],"top"),l(_),s&&s(_,E)},[l,g,c,s]),S=b.useCallback(function(_,E){p(),l(null),u&&u(_,E)},[p,l,u]),M=b.useCallback(function(_,E){f&&f(_,E)},[f]);return R.jsx(yn,{nodes:e,width:n,height:r,onMouseEnter:m,onMouseMove:v,onMouseLeave:S,onClick:M,debug:h})};wt.propTypes={points:a.arrayOf(a.object).isRequired,width:a.number.isRequired,height:a.number.isRequired,margin:a.object.isRequired,setCurrent:a.func.isRequired,onMouseEnter:a.func,onMouseMove:a.func,onMouseLeave:a.func,onClick:a.func,tooltip:a.oneOfType([a.func,a.object]).isRequired,debug:a.bool.isRequired};var An=b.memo(wt),Fe=function(t){var e=t.data,n=t.xScale,r=t.xFormat,i=t.yScale,l=t.yFormat,o=t.layers,s=t.curve,u=t.areaBaselineValue,f=t.colors,c=t.margin,h=t.width,d=t.height,g=t.axisTop,p=t.axisRight,m=t.axisBottom,v=t.axisLeft,S=t.enableGridX,M=t.enableGridY,_=t.gridXValues,E=t.gridYValues,z=t.lineWidth,$=t.enableArea,H=t.areaOpacity,j=t.areaBlendMode,q=t.enablePoints,y=t.pointSymbol,x=t.pointSize,k=t.pointColor,T=t.pointBorderWidth,B=t.pointBorderColor,W=t.enablePointLabel,F=t.pointLabel,C=t.pointLabelYOffset,O=t.defs,U=t.fill,V=t.markers,D=t.legends,ee=t.isInteractive,re=t.useMesh,te=t.debugMesh,A=t.onMouseEnter,G=t.onMouseMove,P=t.onMouseLeave,Y=t.onClick,he=t.tooltip,K=t.enableSlices,se=t.debugSlices,J=t.sliceTooltip,N=t.enableCrosshair,ue=t.crosshairType,ne=t.role,oe=ot(h,d,c),fe=oe.margin,Z=oe.innerWidth,ie=oe.innerHeight,ke=oe.outerWidth,qe=oe.outerHeight,Q=gt({data:e,xScale:n,xFormat:r,yScale:i,yFormat:l,width:Z,height:ie,colors:f,curve:s,areaBaselineValue:u,pointColor:k,pointBorderColor:B,enableSlices:K}),Te=Q.legendData,je=Q.toggleSerie,de=Q.lineGenerator,we=Q.areaGenerator,be=Q.series,xe=Q.xScale,w=Q.yScale,I=Q.slices,ce=Q.points,L=Ce(),ge=Le(k,L),Mt=Le(B,L),Ye=b.useState(null),Me=Ye[0],Xe=Ye[1],He=b.useState(null),Se=He[0],Ue=He[1],pe={grid:R.jsx(Yt,{theme:L,width:Z,height:ie,xScale:S?xe:null,yScale:M?w:null,xValues:_,yValues:E},"grid"),markers:R.jsx(It,{markers:V,width:Z,height:ie,xScale:xe,yScale:w,theme:L},"markers"),axes:R.jsx(Xt,{xScale:xe,yScale:w,width:Z,height:ie,theme:L,top:g,right:p,bottom:m,left:v},"axes"),areas:null,lines:R.jsx(Tn,{lines:be,lineGenerator:de,lineWidth:z},"lines"),slices:null,points:null,crosshair:null,mesh:null,legends:D.map(function(ye,Pe){return R.jsx($t,X({},ye,{containerWidth:Z,containerHeight:ie,data:ye.data||Te,theme:L,toggleSerie:ye.toggleSerie?je:void 0}),"legend."+Pe)})},St=Ft(O,be,U);return $&&(pe.areas=R.jsx(kn,{areaGenerator:we,areaOpacity:H,areaBlendMode:j,lines:be},"areas")),ee&&K!==!1&&(pe.slices=R.jsx(On,{slices:I,axis:K,debug:se,height:ie,tooltip:J,current:Se,setCurrent:Ue,onMouseEnter:A,onMouseMove:G,onMouseLeave:P,onClick:Y},"slices")),q&&(pe.points=R.jsx(En,{points:ce,symbol:y,size:x,color:ge,borderWidth:T,borderColor:Mt,enableLabel:W,label:F,labelYOffset:C},"points")),ee&&N&&(Me!==null&&(pe.crosshair=R.jsx(Ke,{width:Z,height:ie,x:Me.x,y:Me.y,type:ue},"crosshair")),Se!==null&&(pe.crosshair=R.jsx(Ke,{width:Z,height:ie,x:Se.x,y:Se.y,type:K},"crosshair"))),ee&&re&&K===!1&&(pe.mesh=R.jsx(An,{points:ce,width:Z,height:ie,margin:fe,current:Me,setCurrent:Xe,onMouseEnter:A,onMouseMove:G,onMouseLeave:P,onClick:Y,tooltip:he,debug:te},"mesh")),R.jsx(Gt,{defs:St,width:ke,height:qe,margin:fe,role:ne,children:o.map(function(ye,Pe){return typeof ye=="function"?R.jsx(b.Fragment,{children:ye(X({},t,{innerWidth:Z,innerHeight:ie,series:be,slices:I,points:ce,xScale:xe,yScale:w,lineGenerator:de,areaGenerator:we,currentPoint:Me,setCurrentPoint:Xe,currentSlice:Se,setCurrentSlice:Ue}))},Pe):pe[ye]})})};Fe.propTypes=_n,Fe.defaultProps=ae;var Ln=nt(Fe),zn=function(t){return R.jsx(it,{children:function(e){var n=e.width,r=e.height;return R.jsx(Ln,X({width:n,height:r},t))}})},Ge=function(t){var e=t.width,n=t.height,r=t.margin,i=t.pixelRatio,l=t.data,o=t.xScale,s=t.xFormat,u=t.yScale,f=t.yFormat,c=t.curve,h=t.layers,d=t.colors,g=t.lineWidth,p=t.enableArea,m=t.areaBaselineValue,v=t.areaOpacity,S=t.enablePoints,M=t.pointSize,_=t.pointColor,E=t.pointBorderWidth,z=t.pointBorderColor,$=t.enableGridX,H=t.gridXValues,j=t.enableGridY,q=t.gridYValues,y=t.axisTop,x=t.axisRight,k=t.axisBottom,T=t.axisLeft,B=t.legends,W=t.isInteractive,F=t.debugMesh,C=t.onMouseLeave,O=t.onClick,U=t.tooltip,V=t.canvasRef,D=b.useRef(null),ee=ot(e,n,r),re=ee.margin,te=ee.innerWidth,A=ee.innerHeight,G=ee.outerWidth,P=ee.outerHeight,Y=Ce(),he=b.useState(null),K=he[0],se=he[1],J=gt({data:l,xScale:o,xFormat:s,yScale:u,yFormat:f,width:te,height:A,colors:d,curve:c,areaBaselineValue:m,pointColor:_,pointBorderColor:z}),N=J.lineGenerator,ue=J.areaGenerator,ne=J.series,oe=J.xScale,fe=J.yScale,Z=J.points,ie=ut({points:Z,width:te,height:A,debug:F}),ke=ie.delaunay,qe=ie.voronoi;b.useEffect(function(){V&&(V.current=D.current),D.current.width=G*i,D.current.height=P*i;var w=D.current.getContext("2d");w.scale(i,i),w.fillStyle=Y.background,w.fillRect(0,0,G,P),w.translate(re.left,re.top),h.forEach(function(I){if(typeof I=="function"&&I({ctx:w,innerWidth:te,innerHeight:A,series:ne,points:Z,xScale:oe,yScale:fe,lineWidth:g,lineGenerator:N,areaGenerator:ue,currentPoint:K,setCurrentPoint:se}),I==="grid"&&Y.grid.line.strokeWidth>0&&(w.lineWidth=Y.grid.line.strokeWidth,w.strokeStyle=Y.grid.line.stroke,$&&Ze(w,{width:te,height:A,scale:oe,axis:"x",values:H}),j&&Ze(w,{width:te,height:A,scale:fe,axis:"y",values:q})),I==="axes"&&Ht(w,{xScale:oe,yScale:fe,width:te,height:A,top:y,right:x,bottom:k,left:T,theme:Y}),I==="areas"&&p===!0&&(w.save(),w.globalAlpha=v,ue.context(w),ne.forEach(function(L){w.fillStyle=L.color,w.beginPath(),ue(L.data.map(function(ge){return ge.position})),w.fill()}),w.restore()),I==="lines"&&(N.context(w),ne.forEach(function(L){w.strokeStyle=L.color,w.lineWidth=g,w.beginPath(),N(L.data.map(function(ge){return ge.position})),w.stroke()})),I==="points"&&S===!0&&M>0&&Z.forEach(function(L){w.fillStyle=L.color,w.beginPath(),w.arc(L.x,L.y,M/2,0,2*Math.PI),w.fill(),E>0&&(w.strokeStyle=L.borderColor,w.lineWidth=E,w.stroke())}),I==="mesh"&&F===!0&&(mn(w,qe),K&&bn(w,qe,K.index)),I==="legends"){var ce=ne.map(function(L){return{id:L.id,label:L.id,color:L.color}}).reverse();B.forEach(function(L){zt(w,X({},L,{data:L.data||ce,containerWidth:te,containerHeight:A,theme:Y}))})}})},[D,G,P,h,Y,N,ne,oe,fe,$,H,j,q,y,x,k,T,B,Z,S,M,K]);var Q=b.useCallback(function(w){var I=tt(D.current,w),ce=I[0],L=I[1];if(!Vt(re.left,re.top,te,A,ce,L))return null;var ge=ke.find(ce-re.left,L-re.top);return Z[ge]},[D,re,te,A,ke]),Te=Ve(),je=Te.showTooltipFromEvent,de=Te.hideTooltip,we=b.useCallback(function(w){var I=Q(w);se(I),I?je(b.createElement(U,{point:I}),w):de()},[Q,se,je,de,U]),be=b.useCallback(function(w){de(),se(null),K&&C&&C(K,w)},[de,se,C]),xe=b.useCallback(function(w){if(O){var I=Q(w);I&&O(I,w)}},[Q,O]);return R.jsx("canvas",{ref:D,width:G*i,height:P*i,style:{width:G,height:P,cursor:W?"auto":"normal"},onMouseEnter:W?we:void 0,onMouseMove:W?we:void 0,onMouseLeave:W?be:void 0,onClick:W?xe:void 0})};Ge.propTypes=wn,Ge.defaultProps=Mn;var Bn=nt(Ge),Pn=b.forwardRef(function(t,e){return R.jsx(Bn,X({},t,{canvasRef:e}))});b.forwardRef(function(t,e){return R.jsx(it,{children:function(n){var r=n.width,i=n.height;return R.jsx(Pn,X({width:r,height:i},t,{ref:e}))}})});export{zn as P};
