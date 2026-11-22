var Zf="170";var G_=0,s0=1,W_=2;var Cm=1,$f=2,Rs=3,Di=0,Tn=1,Jn=2,vn=0,Io=1,as=2,r0=3,o0=4,Kf=5,Ii=100,X_=101,q_=102,Y_=103,Z_=104,Ko=200,$_=201,K_=202,j_=203,Ru=204,Cu=205,Xc=206,J_=207,qc=208,Q_=209,ex=210,tx=211,nx=212,ix=213,sx=214,Pu=0,Iu=1,Lu=2,No=3,Du=4,Uu=5,Nu=6,Ou=7,Pm=0,rx=1,ox=2,tr=0,ax=1,lx=2,cx=3,jf=4,hx=5,ux=6,fx=7,a0="attached",dx="detached",Im=300,Oo=301,Fo=302,Na=303,Fu=304,Yc=306,Nn=1e3,ji=1001,Oa=1002,yn=1003,Jf=1004;var Ro=1005;var rn=1006,Ca=1007;var Qn=1008;var Ji=1009,Lm=1010,Dm=1011,Fa=1012,Qf=1013,zr=1014,Un=1015,Kt=1016,ed=1017,td=1018,ir=1020,Um=35902,Nm=1021,Om=1022,Vn=1023,Fm=1024,Bm=1025,Lo=1026,sr=1027,nd=1028,id=1029,km=1030,sd=1031;var rd=1033,mc=33776,gc=33777,_c=33778,xc=33779,Bu=35840,ku=35841,zu=35842,Hu=35843,Vu=36196,Gu=37492,Wu=37496,Xu=37808,qu=37809,Yu=37810,Zu=37811,$u=37812,Ku=37813,ju=37814,Ju=37815,Qu=37816,ef=37817,tf=37818,nf=37819,sf=37820,rf=37821,vc=36492,of=36494,af=36495,zm=36283,lf=36284,cf=36285,hf=36286;var Bo=2300,ko=2301,Yh=2302,l0=2400,c0=2401,h0=2402,px=2500;var Hm=0,Zc=1,el=2,mx=3200,gx=3201;var od=0,_x=1,Qs="",Zt="srgb",_n="srgb-linear",$c="linear",It="srgb";var fo=7680;var u0=519,xx=512,vx=513,yx=514,Vm=515,Mx=516,bx=517,Sx=518,Ex=519,uf=35044,Kc=35048;var f0="300 es",Ps=2e3,yc=2001,rr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],d0=1234567,Pa=Math.PI/180,zo=180/Math.PI;function Li(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]).toLowerCase()}function gn(s,e,t){return Math.max(e,Math.min(t,s))}function ad(s,e){return(s%e+e)%e}function wx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Tx(s,e,t){return s!==e?(t-s)/(e-s):0}function Ia(s,e,t){return(1-t)*s+t*e}function Ax(s,e,t,n){return Ia(s,e,1-Math.exp(-t*n))}function Rx(s,e=1){return e-Math.abs(ad(s,e*2)-e)}function Cx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Px(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ix(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Lx(s,e){return s+Math.random()*(e-s)}function Dx(s){return s*(.5-Math.random())}function Ux(s){s!==void 0&&(d0=s);let e=d0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nx(s){return s*Pa}function Ox(s){return s*zo}function Fx(s){return(s&s-1)===0&&s!==0}function Bx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function kx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zx(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ki(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var es={DEG2RAD:Pa,RAD2DEG:zo,generateUUID:Li,clamp:gn,euclideanModulo:ad,mapLinear:wx,inverseLerp:Tx,lerp:Ia,damp:Ax,pingpong:Rx,smoothstep:Cx,smootherstep:Px,randInt:Ix,randFloat:Lx,randFloatSpread:Dx,seededRandom:Ux,degToRad:Nx,radToDeg:Ox,isPowerOfTwo:Fx,ceilPowerOfTwo:Bx,floorPowerOfTwo:kx,setQuaternionFromProperEuler:zx,normalize:Ct,denormalize:Ki},_e=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],b=i[1],M=i[4],v=i[7],P=i[2],T=i[5],R=i[8];return r[0]=o*_+a*b+l*P,r[3]=o*p+a*M+l*T,r[6]=o*m+a*v+l*R,r[1]=c*_+h*b+u*P,r[4]=c*p+h*M+u*T,r[7]=c*m+h*v+u*R,r[2]=f*_+d*b+g*P,r[5]=f*p+d*M+g*T,r[8]=f*m+d*v+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zh.makeScale(e,t)),this}rotate(e){return this.premultiply(Zh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zh=new dt;function Gm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ba(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hx(){let s=Ba("canvas");return s.style.display="block",s}var p0={};function Aa(s){s in p0||(p0[s]=!0,console.warn(s))}function Vx(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Gx(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wx(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var yt={enabled:!0,workingColorSpace:_n,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===It&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===It&&(s.r=Do(s.r),s.g=Do(s.g),s.b=Do(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qs?$c:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Is(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Do(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var m0=[.64,.33,.3,.6,.15,.06],g0=[.2126,.7152,.0722],_0=[.3127,.329],x0=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),v0=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[_n]:{primaries:m0,whitePoint:_0,transfer:$c,toXYZ:x0,fromXYZ:v0,luminanceCoefficients:g0,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:m0,whitePoint:_0,transfer:It,toXYZ:x0,fromXYZ:v0,luminanceCoefficients:g0,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}});var po,ff=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{po===void 0&&(po=Ba("canvas")),po.width=e.width,po.height=e.height;let n=po.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=po}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ba("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Is(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Is(t[n]/255)*255):t[n]=Is(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xx=0,Mc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push($h(i[o].image)):r.push($h(i[o]))}else r=$h(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function $h(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ff.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qx=0,An=class s extends rr{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ji,i=ji,r=rn,o=Qn,a=Vn,l=Ji,c=s.DEFAULT_ANISOTROPY,h=Qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Li(),this.name="",this.source=new Mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Im)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nn:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case Oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nn:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case Oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Im;An.DEFAULT_ANISOTROPY=1;var Et=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(d+1)/2,P=(m+1)/2,T=(h+f)/4,R=(u+_)/4,A=(g+p)/4;return M>v&&M>P?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=T/n,r=R/n):v>P?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=A/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=R/r,i=A/r),this.set(n,i,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},df=class extends rr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new An(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends df{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bc=class extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pf=class extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let p=1-a,m=l*f+c*d+h*g+u*_,b=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let P=Math.sqrt(M),T=Math.atan2(P,m*b);p=Math.sin(p*T)/P,a=Math.sin(a*T)/P}let v=a*b;if(l=l*p+f*v,c=c*p+d*v,h=h*p+g*v,u=u*p+_*v,p===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(y0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(y0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kh.copy(this).projectOnVector(e),this.sub(Kh)}reflect(e){return this.sub(Kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kh=new U,y0=new ei,on=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yi):Yi.fromBufferAttribute(r,o),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kl.copy(n.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),zl.subVectors(this.max,va),mo.subVectors(e.a,va),go.subVectors(e.b,va),_o.subVectors(e.c,va),Ys.subVectors(go,mo),Zs.subVectors(_o,go),Ir.subVectors(mo,_o);let t=[0,-Ys.z,Ys.y,0,-Zs.z,Zs.y,0,-Ir.z,Ir.y,Ys.z,0,-Ys.x,Zs.z,0,-Zs.x,Ir.z,0,-Ir.x,-Ys.y,Ys.x,0,-Zs.y,Zs.x,0,-Ir.y,Ir.x,0];return!jh(t,mo,go,_o,zl)||(t=[1,0,0,0,1,0,0,0,1],!jh(t,mo,go,_o,zl))?!1:(Hl.crossVectors(Ys,Zs),t=[Hl.x,Hl.y,Hl.z],jh(t,mo,go,_o,zl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},bs=[new U,new U,new U,new U,new U,new U,new U,new U],Yi=new U,kl=new on,mo=new U,go=new U,_o=new U,Ys=new U,Zs=new U,Ir=new U,va=new U,zl=new U,Hl=new U,Lr=new U;function jh(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Lr.fromArray(s,r);let a=i.x*Math.abs(Lr.x)+i.y*Math.abs(Lr.y)+i.z*Math.abs(Lr.z),l=e.dot(Lr),c=t.dot(Lr),h=n.dot(Lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Yx=new on,ya=new U,Jh=new U,xi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);let t=ya.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ya,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(Jh)),this.expandByPoint(ya.copy(e.center).sub(Jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ss=new U,Qh=new U,Vl=new U,$s=new U,eu=new U,Gl=new U,tu=new U,Hr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ss)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ss.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ss.copy(this.origin).addScaledVector(this.direction,t),Ss.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qh.copy(e).add(t).multiplyScalar(.5),Vl.copy(t).sub(e).normalize(),$s.copy(this.origin).sub(Qh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Vl),a=$s.dot(this.direction),l=-$s.dot(Vl),c=$s.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Qh).addScaledVector(Vl,f),d}intersectSphere(e,t){Ss.subVectors(e.center,this.origin);let n=Ss.dot(this.direction),i=Ss.dot(Ss)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ss)!==null}intersectTriangle(e,t,n,i,r){eu.subVectors(t,e),Gl.subVectors(n,e),tu.crossVectors(eu,Gl);let o=this.direction.dot(tu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$s.subVectors(this.origin,e);let l=a*this.direction.dot(Gl.crossVectors($s,Gl));if(l<0)return null;let c=a*this.direction.dot(eu.cross($s));if(c<0||l+c>o)return null;let h=-a*$s.dot(tu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,g,_,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,g,_,p)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/xo.setFromMatrixColumn(e,0).length(),r=1/xo.setFromMatrixColumn(e,1).length(),o=1/xo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zx,e,$x)}lookAt(e,t,n){let i=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Ks.crossVectors(n,mi),Ks.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Ks.crossVectors(n,mi)),Ks.normalize(),Wl.crossVectors(mi,Ks),i[0]=Ks.x,i[4]=Wl.x,i[8]=mi.x,i[1]=Ks.y,i[5]=Wl.y,i[9]=mi.y,i[2]=Ks.z,i[6]=Wl.z,i[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],b=n[3],M=n[7],v=n[11],P=n[15],T=i[0],R=i[4],A=i[8],x=i[12],y=i[1],w=i[5],B=i[9],F=i[13],O=i[2],q=i[6],k=i[10],ae=i[14],Y=i[3],he=i[7],Se=i[11],Re=i[15];return r[0]=o*T+a*y+l*O+c*Y,r[4]=o*R+a*w+l*q+c*he,r[8]=o*A+a*B+l*k+c*Se,r[12]=o*x+a*F+l*ae+c*Re,r[1]=h*T+u*y+f*O+d*Y,r[5]=h*R+u*w+f*q+d*he,r[9]=h*A+u*B+f*k+d*Se,r[13]=h*x+u*F+f*ae+d*Re,r[2]=g*T+_*y+p*O+m*Y,r[6]=g*R+_*w+p*q+m*he,r[10]=g*A+_*B+p*k+m*Se,r[14]=g*x+_*F+p*ae+m*Re,r[3]=b*T+M*y+v*O+P*Y,r[7]=b*R+M*w+v*q+P*he,r[11]=b*A+M*B+v*k+P*Se,r[15]=b*x+M*F+v*ae+P*Re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+p*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],b=u*p*c-_*f*c+_*l*d-a*p*d-u*l*m+a*f*m,M=g*f*c-h*p*c-g*l*d+o*p*d+h*l*m-o*f*m,v=h*_*c-g*u*c+g*a*d-o*_*d-h*a*m+o*u*m,P=g*u*l-h*_*l-g*a*f+o*_*f+h*a*p-o*u*p,T=t*b+n*M+i*v+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=b*R,e[1]=(_*f*r-u*p*r-_*i*d+n*p*d+u*i*m-n*f*m)*R,e[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*m+n*l*m)*R,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*R,e[4]=M*R,e[5]=(h*p*r-g*f*r+g*i*d-t*p*d-h*i*m+t*f*m)*R,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*m-t*l*m)*R,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*d+t*l*d)*R,e[8]=v*R,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*m-t*u*m)*R,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*m+t*a*m)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*R,e[12]=P*R,e[13]=(h*_*i-g*u*i+g*n*f-t*_*f-h*n*p+t*u*p)*R,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*R,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,p=o*u,m=a*u,b=l*c,M=l*h,v=l*u,P=n.x,T=n.y,R=n.z;return i[0]=(1-(_+m))*P,i[1]=(d+v)*P,i[2]=(g-M)*P,i[3]=0,i[4]=(d-v)*T,i[5]=(1-(f+m))*T,i[6]=(p+b)*T,i[7]=0,i[8]=(g+M)*R,i[9]=(p-b)*R,i[10]=(1-(f+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=xo.set(i[0],i[1],i[2]).length(),o=xo.set(i[4],i[5],i[6]).length(),a=xo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Zi.copy(this);let c=1/r,h=1/o,u=1/a;return Zi.elements[0]*=c,Zi.elements[1]*=c,Zi.elements[2]*=c,Zi.elements[4]*=h,Zi.elements[5]*=h,Zi.elements[6]*=h,Zi.elements[8]*=u,Zi.elements[9]*=u,Zi.elements[10]*=u,t.setFromRotationMatrix(Zi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ps){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,g;if(a===Ps)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===yc)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ps){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*c,d=(n+i)*h,g,_;if(a===Ps)g=(o+r)*u,_=-2*u;else if(a===yc)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xo=new U,Zi=new Ke,Zx=new U(0,0,0),$x=new U(1,1,1),Ks=new U,Wl=new U,mi=new U,M0=new Ke,b0=new ei,oi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return M0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(M0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return b0.setFromEuler(this),this.setFromQuaternion(b0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kx=0,S0=new U,vo=new ei,Es=new Ke,Xl=new U,Ma=new U,jx=new U,Jx=new ei,E0=new U(1,0,0),w0=new U(0,1,0),T0=new U(0,0,1),A0={type:"added"},Qx={type:"removed"},yo={type:"childadded",child:null},nu={type:"childremoved",child:null},Xt=class s extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new U,t=new oi,n=new ei,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new dt}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vo.setFromAxisAngle(e,t),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,t){return vo.setFromAxisAngle(e,t),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(E0,e)}rotateY(e){return this.rotateOnAxis(w0,e)}rotateZ(e){return this.rotateOnAxis(T0,e)}translateOnAxis(e,t){return S0.copy(e).applyQuaternion(this.quaternion),this.position.add(S0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(E0,e)}translateY(e){return this.translateOnAxis(w0,e)}translateZ(e){return this.translateOnAxis(T0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Es.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xl.copy(e):Xl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Es.lookAt(Ma,Xl,this.up):Es.lookAt(Xl,Ma,this.up),this.quaternion.setFromRotationMatrix(Es),i&&(Es.extractRotation(i.matrixWorld),vo.setFromRotationMatrix(Es),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(A0),yo.child=e,this.dispatchEvent(yo),yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qx),nu.child=e,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Es.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Es.multiply(e.parent.matrixWorld)),e.applyMatrix4(Es),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(A0),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,jx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,Jx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Xt.DEFAULT_UP=new U(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $i=new U,ws=new U,iu=new U,Ts=new U,Mo=new U,bo=new U,R0=new U,su=new U,ru=new U,ou=new U,au=new Et,lu=new Et,cu=new Et,Br=class s{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$i.subVectors(e,t),i.cross($i);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){$i.subVectors(i,t),ws.subVectors(n,t),iu.subVectors(e,t);let o=$i.dot($i),a=$i.dot(ws),l=$i.dot(iu),c=ws.dot(ws),h=ws.dot(iu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ts.x),l.addScaledVector(o,Ts.y),l.addScaledVector(a,Ts.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return au.setScalar(0),lu.setScalar(0),cu.setScalar(0),au.fromBufferAttribute(e,t),lu.fromBufferAttribute(e,n),cu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(au,r.x),o.addScaledVector(lu,r.y),o.addScaledVector(cu,r.z),o}static isFrontFacing(e,t,n,i){return $i.subVectors(n,t),ws.subVectors(e,t),$i.cross(ws).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),ws.subVectors(this.a,this.b),$i.cross(ws).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Mo.subVectors(i,n),bo.subVectors(r,n),su.subVectors(e,n);let l=Mo.dot(su),c=bo.dot(su);if(l<=0&&c<=0)return t.copy(n);ru.subVectors(e,i);let h=Mo.dot(ru),u=bo.dot(ru);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Mo,o);ou.subVectors(e,r);let d=Mo.dot(ou),g=bo.dot(ou);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(bo,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return R0.subVectors(r,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(R0,a);let m=1/(p+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(Mo,o).addScaledVector(bo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},js={h:0,s:0,l:0},ql={h:0,s:0,l:0};function hu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=yt.workingColorSpace){if(e=ad(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=hu(o,r,e+1/3),this.g=hu(o,r,e),this.b=hu(o,r,e-1/3)}return yt.toWorkingColorSpace(this,i),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let n=Wm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return yt.fromWorkingColorSpace(Hn.copy(this),e),Math.round(gn(Hn.r*255,0,255))*65536+Math.round(gn(Hn.g*255,0,255))*256+Math.round(gn(Hn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(Hn.copy(this),t);let n=Hn.r,i=Hn.g,r=Hn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Zt){yt.fromWorkingColorSpace(Hn.copy(this),e);let t=Hn.r,n=Hn.g,i=Hn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(js),this.setHSL(js.h+e,js.s+t,js.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(js),e.getHSL(ql);let n=Ia(js.h,ql.h,t),i=Ia(js.s,ql.s,t),r=Ia(js.l,ql.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new Te;Te.NAMES=Wm;var ev=0,Gn=class extends rr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Li(),this.name="",this.blending=Io,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ru,this.blendDst=Cu,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=No,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Io&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ru&&(n.blendSrc=this.blendSrc),this.blendDst!==Cu&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==No&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},At=class extends Gn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Cs=tv();function tv(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function nv(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=gn(s,-65504,65504),Cs.floatView[0]=s;let e=Cs.uint32View[0],t=e>>23&511;return Cs.baseTable[t]+((e&8388607)>>Cs.shiftTable[t])}function iv(s){let e=s>>10;return Cs.uint32View[0]=Cs.mantissaTable[Cs.offsetTable[e]+(s&1023)]+Cs.exponentTable[e],Cs.floatView[0]}var tl={toHalfFloat:nv,fromHalfFloat:iv},mn=new U,Yl=new _e,zt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uf,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yl.fromBufferAttribute(this,t),Yl.applyMatrix3(e),this.setXY(t,Yl.x,Yl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uf&&(e.usage=this.usage),e}};var Sc=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ec=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},sv=0,Pi=new Ke,uu=new Xt,So=new U,gi=new on,ba=new on,wn=new U,Ht=class s extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gm(e)?Ec:Sc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,n){return Pi.makeTranslation(e,t,n),this.applyMatrix4(Pi),this}scale(e,t,n){return Pi.makeScale(e,t,n),this.applyMatrix4(Pi),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ba.setFromBufferAttribute(a),this.morphTargetsRelative?(wn.addVectors(gi.min,ba.min),gi.expandByPoint(wn),wn.addVectors(gi.max,ba.max),gi.expandByPoint(wn)):(gi.expandByPoint(ba.min),gi.expandByPoint(ba.max))}gi.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)wn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(wn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)wn.fromBufferAttribute(a,c),l&&(So.fromBufferAttribute(e,c),wn.add(So)),i=Math.max(i,n.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new U,l[A]=new U;let c=new U,h=new U,u=new U,f=new _e,d=new _e,g=new _e,_=new U,p=new U;function m(A,x,y){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(w),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(w),a[A].add(_),a[x].add(_),a[y].add(_),l[A].add(p),l[x].add(p),l[y].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let A=0,x=b.length;A<x;++A){let y=b[A],w=y.start,B=y.count;for(let F=w,O=w+B;F<O;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new U,v=new U,P=new U,T=new U;function R(A){P.fromBufferAttribute(i,A),T.copy(P);let x=a[A];M.copy(x),M.sub(P.multiplyScalar(P.dot(x))).normalize(),v.crossVectors(T,x);let w=v.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,w)}for(let A=0,x=b.length;A<x;++A){let y=b[A],w=y.start,B=y.count;for(let F=w,O=w+B;F<O;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new zt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},C0=new Ke,Dr=new Hr,Zl=new xi,P0=new U,$l=new U,Kl=new U,jl=new U,fu=new U,Jl=new U,I0=new U,Ql=new U,Ie=class extends Xt{constructor(e=new Ht,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Jl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(fu.fromBufferAttribute(u,e),o?Jl.addScaledVector(fu,h):Jl.addScaledVector(fu.sub(t),h))}t.add(Jl)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(r),Dr.copy(e.ray).recast(e.near),!(Zl.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Zl,P0)===null||Dr.origin.distanceToSquared(P0)>(e.far-e.near)**2))&&(C0.copy(r).invert(),Dr.copy(e.ray).applyMatrix4(C0),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=b,P=M;v<P;v+=3){let T=a.getX(v),R=a.getX(v+1),A=a.getX(v+2);i=ec(this,m,e,n,c,h,u,T,R,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let b=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);i=ec(this,o,e,n,c,h,u,b,M,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=b,P=M;v<P;v+=3){let T=v,R=v+1,A=v+2;i=ec(this,m,e,n,c,h,u,T,R,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let b=p,M=p+1,v=p+2;i=ec(this,o,e,n,c,h,u,b,M,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function rv(s,e,t,n,i,r,o,a){let l;if(e.side===Tn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Di,a),l===null)return null;Ql.copy(a),Ql.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ql);return c<t.near||c>t.far?null:{distance:c,point:Ql.clone(),object:s}}function ec(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,$l),s.getVertexPosition(l,Kl),s.getVertexPosition(c,jl);let h=rv(s,e,t,n,$l,Kl,jl,I0);if(h){let u=new U;Br.getBarycoord(I0,$l,Kl,jl,u),i&&(h.uv=Br.getInterpolatedAttribute(i,a,l,c,u,new _e)),r&&(h.uv1=Br.getInterpolatedAttribute(r,a,l,c,u,new _e)),o&&(h.normal=Br.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};Br.getNormal($l,Kl,jl,f.normal),h.face=f,h.barycoord=u}return h}var un=class s extends Ht{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(u,2));function g(_,p,m,b,M,v,P,T,R,A,x){let y=v/R,w=P/A,B=v/2,F=P/2,O=T/2,q=R+1,k=A+1,ae=0,Y=0,he=new U;for(let Se=0;Se<k;Se++){let Re=Se*w-F;for(let K=0;K<q;K++){let tt=K*y-B;he[_]=tt*b,he[p]=Re*M,he[m]=O,c.push(he.x,he.y,he.z),he[_]=0,he[p]=0,he[m]=T>0?1:-1,h.push(he.x,he.y,he.z),u.push(K/R),u.push(1-Se/A),ae+=1}}for(let Se=0;Se<A;Se++)for(let Re=0;Re<R;Re++){let K=f+Re+q*Se,tt=f+Re+q*(Se+1),le=f+(Re+1)+q*(Se+1),z=f+(Re+1)+q*Se;l.push(K,tt,z),l.push(tt,le,z),Y+=6}a.addGroup(d,Y,x),d+=Y,f+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ho(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jn(s){let e={};for(let t=0;t<s.length;t++){let n=Ho(s[t]);for(let i in n)e[i]=n[i]}return e}function ov(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xm(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var ai={clone:Ho,merge:jn},av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends Gn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=av,this.fragmentShader=lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ho(e.uniforms),this.uniformsGroups=ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},wc=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Ps}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Js=new U,L0=new _e,D0=new _e,Qt=class extends wc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Js.x,Js.y).multiplyScalar(-e/Js.z),Js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Js.x,Js.y).multiplyScalar(-e/Js.z)}getViewSize(e,t){return this.getViewBounds(e,L0,D0),t.subVectors(D0,L0)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Eo=-90,wo=1,za=class extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Qt(Eo,wo,e,t);i.layers=this.layers,this.add(i);let r=new Qt(Eo,wo,e,t);r.layers=this.layers,this.add(r);let o=new Qt(Eo,wo,e,t);o.layers=this.layers,this.add(o);let a=new Qt(Eo,wo,e,t);a.layers=this.layers,this.add(a);let l=new Qt(Eo,wo,e,t);l.layers=this.layers,this.add(l);let c=new Qt(Eo,wo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ps)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Tc=class extends An{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Oo,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ha=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Tc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new un(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:Ho(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:vn});r.uniforms.tEquirect.value=t;let o=new Ie(i,r),a=t.minFilter;return t.minFilter===Qn&&(t.minFilter=rn),new za(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},du=new U,cv=new U,hv=new dt,_i=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=du.subVectors(n,t).cross(cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(du),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||hv.getNormalMatrix(e),i=this.coplanarPoint(du).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ur=new xi,tc=new U,Va=class{constructor(e=new _i,t=new _i,n=new _i,i=new _i,r=new _i,o=new _i){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ps){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],b=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,p-d,v-m).normalize(),n[1].setComponents(l+r,f+c,p+d,v+m).normalize(),n[2].setComponents(l+o,f+h,p+g,v+b).normalize(),n[3].setComponents(l-o,f-h,p-g,v-b).normalize(),n[4].setComponents(l-a,f-u,p-_,v-M).normalize(),t===Ps)n[5].setComponents(l+a,f+u,p+_,v+M).normalize();else if(t===yc)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(tc.x=i.normal.x>0?e.max.x:e.min.x,tc.y=i.normal.y>0?e.max.y:e.min.y,tc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(tc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function uv(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var wt=class s extends Ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let b=m*f-o;for(let M=0;M<c;M++){let v=M*u-r;g.push(v,-b,0),_.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let M=b+c*m,v=b+c*(m+1),P=b+1+c*(m+1),T=b+1+c*m;d.push(M,v,T),d.push(v,P,T)}this.setIndex(d),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ev=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ov=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$v=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ry=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,py=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,my=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_y=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,My=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,by=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ey=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ry=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Py=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Oy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,By=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$y=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ky=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:fv,alphahash_pars_fragment:dv,alphamap_fragment:pv,alphamap_pars_fragment:mv,alphatest_fragment:gv,alphatest_pars_fragment:_v,aomap_fragment:xv,aomap_pars_fragment:vv,batching_pars_vertex:yv,batching_vertex:Mv,begin_vertex:bv,beginnormal_vertex:Sv,bsdfs:Ev,iridescence_fragment:wv,bumpmap_pars_fragment:Tv,clipping_planes_fragment:Av,clipping_planes_pars_fragment:Rv,clipping_planes_pars_vertex:Cv,clipping_planes_vertex:Pv,color_fragment:Iv,color_pars_fragment:Lv,color_pars_vertex:Dv,color_vertex:Uv,common:Nv,cube_uv_reflection_fragment:Ov,defaultnormal_vertex:Fv,displacementmap_pars_vertex:Bv,displacementmap_vertex:kv,emissivemap_fragment:zv,emissivemap_pars_fragment:Hv,colorspace_fragment:Vv,colorspace_pars_fragment:Gv,envmap_fragment:Wv,envmap_common_pars_fragment:Xv,envmap_pars_fragment:qv,envmap_pars_vertex:Yv,envmap_physical_pars_fragment:sy,envmap_vertex:Zv,fog_vertex:$v,fog_pars_vertex:Kv,fog_fragment:jv,fog_pars_fragment:Jv,gradientmap_pars_fragment:Qv,lightmap_pars_fragment:ey,lights_lambert_fragment:ty,lights_lambert_pars_fragment:ny,lights_pars_begin:iy,lights_toon_fragment:ry,lights_toon_pars_fragment:oy,lights_phong_fragment:ay,lights_phong_pars_fragment:ly,lights_physical_fragment:cy,lights_physical_pars_fragment:hy,lights_fragment_begin:uy,lights_fragment_maps:fy,lights_fragment_end:dy,logdepthbuf_fragment:py,logdepthbuf_pars_fragment:my,logdepthbuf_pars_vertex:gy,logdepthbuf_vertex:_y,map_fragment:xy,map_pars_fragment:vy,map_particle_fragment:yy,map_particle_pars_fragment:My,metalnessmap_fragment:by,metalnessmap_pars_fragment:Sy,morphinstance_vertex:Ey,morphcolor_vertex:wy,morphnormal_vertex:Ty,morphtarget_pars_vertex:Ay,morphtarget_vertex:Ry,normal_fragment_begin:Cy,normal_fragment_maps:Py,normal_pars_fragment:Iy,normal_pars_vertex:Ly,normal_vertex:Dy,normalmap_pars_fragment:Uy,clearcoat_normal_fragment_begin:Ny,clearcoat_normal_fragment_maps:Oy,clearcoat_pars_fragment:Fy,iridescence_pars_fragment:By,opaque_fragment:ky,packing:zy,premultiplied_alpha_fragment:Hy,project_vertex:Vy,dithering_fragment:Gy,dithering_pars_fragment:Wy,roughnessmap_fragment:Xy,roughnessmap_pars_fragment:qy,shadowmap_pars_fragment:Yy,shadowmap_pars_vertex:Zy,shadowmap_vertex:$y,shadowmask_pars_fragment:Ky,skinbase_vertex:jy,skinning_pars_vertex:Jy,skinning_vertex:Qy,skinnormal_vertex:eM,specularmap_fragment:tM,specularmap_pars_fragment:nM,tonemapping_fragment:iM,tonemapping_pars_fragment:sM,transmission_fragment:rM,transmission_pars_fragment:oM,uv_pars_fragment:aM,uv_pars_vertex:lM,uv_vertex:cM,worldpos_vertex:hM,background_vert:uM,background_frag:fM,backgroundCube_vert:dM,backgroundCube_frag:pM,cube_vert:mM,cube_frag:gM,depth_vert:_M,depth_frag:xM,distanceRGBA_vert:vM,distanceRGBA_frag:yM,equirect_vert:MM,equirect_frag:bM,linedashed_vert:SM,linedashed_frag:EM,meshbasic_vert:wM,meshbasic_frag:TM,meshlambert_vert:AM,meshlambert_frag:RM,meshmatcap_vert:CM,meshmatcap_frag:PM,meshnormal_vert:IM,meshnormal_frag:LM,meshphong_vert:DM,meshphong_frag:UM,meshphysical_vert:NM,meshphysical_frag:OM,meshtoon_vert:FM,meshtoon_frag:BM,points_vert:kM,points_frag:zM,shadow_vert:HM,shadow_frag:VM,sprite_vert:GM,sprite_frag:WM},ze={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},os={basic:{uniforms:jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Te(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:jn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:jn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Te(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:jn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:jn([ze.points,ze.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:jn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:jn([ze.common,ze.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:jn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:jn([ze.sprite,ze.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:jn([ze.common,ze.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:jn([ze.lights,ze.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};os.physical={uniforms:jn([os.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var nc={r:0,b:0,g:0},Nr=new oi,XM=new Ke;function qM(s,e,t,n,i,r,o){let a=new Te(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function _(b){let M=!1,v=g(b);v===null?m(a,l):v&&v.isColor&&(m(v,1),M=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(b,M){let v=g(M);v&&(v.isCubeTexture||v.mapping===Yc)?(h===void 0&&(h=new Ie(new un(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Ho(os.backgroundCube.uniforms),vertexShader:os.backgroundCube.vertexShader,fragmentShader:os.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Nr.copy(M.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(XM.makeRotationFromEuler(Nr)),h.material.toneMapped=yt.getTransfer(v.colorSpace)!==It,(u!==v||f!==v.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ie(new wt(2,2),new Pt({name:"BackgroundMaterial",uniforms:Ho(os.background.uniforms),vertexShader:os.background.vertexShader,fragmentShader:os.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=yt.getTransfer(v.colorSpace)!==It,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,M){b.getRGB(nc,Xm(s)),n.buffers.color.setClear(nc.r,nc.g,nc.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:_,addToRenderList:p}}function YM(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(y,w,B,F,O){let q=!1,k=u(F,B,w);r!==k&&(r=k,c(r.object)),q=d(y,F,B,O),q&&g(y,F,B,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(y,w,B,F),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,w,B){let F=B.wireframe===!0,O=n[y.id];O===void 0&&(O={},n[y.id]=O);let q=O[w.id];q===void 0&&(q={},O[w.id]=q);let k=q[F];return k===void 0&&(k=f(l()),q[F]=k),k}function f(y){let w=[],B=[],F=[];for(let O=0;O<t;O++)w[O]=0,B[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:B,attributeDivisors:F,object:y,attributes:{},index:null}}function d(y,w,B,F){let O=r.attributes,q=w.attributes,k=0,ae=B.getAttributes();for(let Y in ae)if(ae[Y].location>=0){let Se=O[Y],Re=q[Y];if(Re===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(Re=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(Re=y.instanceColor)),Se===void 0||Se.attribute!==Re||Re&&Se.data!==Re.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function g(y,w,B,F){let O={},q=w.attributes,k=0,ae=B.getAttributes();for(let Y in ae)if(ae[Y].location>=0){let Se=q[Y];Se===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor));let Re={};Re.attribute=Se,Se&&Se.data&&(Re.data=Se.data),O[Y]=Re,k++}r.attributes=O,r.attributesNum=k,r.index=F}function _(){let y=r.newAttributes;for(let w=0,B=y.length;w<B;w++)y[w]=0}function p(y){m(y,0)}function m(y,w){let B=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;B[y]=1,F[y]===0&&(s.enableVertexAttribArray(y),F[y]=1),O[y]!==w&&(s.vertexAttribDivisor(y,w),O[y]=w)}function b(){let y=r.newAttributes,w=r.enabledAttributes;for(let B=0,F=w.length;B<F;B++)w[B]!==y[B]&&(s.disableVertexAttribArray(B),w[B]=0)}function M(y,w,B,F,O,q,k){k===!0?s.vertexAttribIPointer(y,w,B,O,q):s.vertexAttribPointer(y,w,B,F,O,q)}function v(y,w,B,F){_();let O=F.attributes,q=B.getAttributes(),k=w.defaultAttributeValues;for(let ae in q){let Y=q[ae];if(Y.location>=0){let he=O[ae];if(he===void 0&&(ae==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),ae==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),he!==void 0){let Se=he.normalized,Re=he.itemSize,K=e.get(he);if(K===void 0)continue;let tt=K.buffer,le=K.type,z=K.bytesPerElement,ge=le===s.INT||le===s.UNSIGNED_INT||he.gpuType===Qf;if(he.isInterleavedBufferAttribute){let ue=he.data,be=ue.stride,Ve=he.offset;if(ue.isInstancedInterleavedBuffer){for(let Ae=0;Ae<Y.locationSize;Ae++)m(Y.location+Ae,ue.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ae=0;Ae<Y.locationSize;Ae++)p(Y.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let Ae=0;Ae<Y.locationSize;Ae++)M(Y.location+Ae,Re/Y.locationSize,le,Se,be*z,(Ve+Re/Y.locationSize*Ae)*z,ge)}else{if(he.isInstancedBufferAttribute){for(let ue=0;ue<Y.locationSize;ue++)m(Y.location+ue,he.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ue=0;ue<Y.locationSize;ue++)p(Y.location+ue);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let ue=0;ue<Y.locationSize;ue++)M(Y.location+ue,Re/Y.locationSize,le,Se,Re*z,Re/Y.locationSize*ue*z,ge)}}else if(k!==void 0){let Se=k[ae];if(Se!==void 0)switch(Se.length){case 2:s.vertexAttrib2fv(Y.location,Se);break;case 3:s.vertexAttrib3fv(Y.location,Se);break;case 4:s.vertexAttrib4fv(Y.location,Se);break;default:s.vertexAttrib1fv(Y.location,Se)}}}}b()}function P(){A();for(let y in n){let w=n[y];for(let B in w){let F=w[B];for(let O in F)h(F[O].object),delete F[O];delete w[B]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let w=n[y.id];for(let B in w){let F=w[B];for(let O in F)h(F[O].object),delete F[O];delete w[B]}delete n[y.id]}function R(y){for(let w in n){let B=n[w];if(B[y.id]===void 0)continue;let F=B[y.id];for(let O in F)h(F[O].object),delete F[O];delete B[y.id]}}function A(){x(),o=!0,r!==i&&(r=i,c(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:x,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function ZM(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $M(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==Vn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let A=R===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ji&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Un&&!A)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:P,maxSamples:T}}function KM(s){let e=this,t=null,n=0,i=!1,r=!1,o=new _i,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,M=b*4,v=m.clippingState||null;l.value=v,v=h(g,f,M,d);for(let P=0;P!==M;++P)v[P]=t[P];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=d+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=d;M!==_;++M,v+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function jM(s){let e=new WeakMap;function t(o,a){return a===Na?o.mapping=Oo:a===Fu&&(o.mapping=Fo),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Na||a===Fu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ha(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var or=class extends wc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Co=4,U0=[.125,.215,.35,.446,.526,.582],kr=20,pu=new or,N0=new Te,mu=null,gu=0,_u=0,xu=!1,Fr=(1+Math.sqrt(5))/2,To=1/Fr,O0=[new U(-Fr,To,0),new U(Fr,To,0),new U(-To,0,Fr),new U(To,0,Fr),new U(0,Fr,-To),new U(0,Fr,To),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mu,gu,_u),this._renderer.xr.enabled=xu,e.scissorTest=!1,ic(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oo||e.mapping===Fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Kt,format:Vn,colorSpace:_n,depthBuffer:!1},i=F0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F0(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JM(r)),this._blurMaterial=QM(r,e,t)}return i}_compileMaterial(e){let t=new Ie(this._lodPlanes[0],e);this._renderer.compile(t,pu)}_sceneToCubeUV(e,t,n,i){let a=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(N0),h.toneMapping=tr,h.autoClear=!1;let d=new At({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new Ie(new un,d),_=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(N0),_=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let M=this._cubeSize;ic(i,b*M,m>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Oo||e.mapping===Fo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=k0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B0());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ic(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,pu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=O0[(i-r-1)%O0.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ie(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*kr-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):kr;p>kr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kr}`);let m=[],b=0;for(let R=0;R<kr;++R){let A=R/_,x=Math.exp(-A*A/2);m.push(x),R===0?b+=x:R<p&&(b+=2*x)}for(let R=0;R<m.length;R++)m[R]=m[R]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;let v=this._sizeLods[i],P=3*v*(i>M-Co?i-M+Co:0),T=4*(this._cubeSize-v);ic(t,P,T,3*v,2*v),l.setRenderTarget(t),l.render(u,pu)}};function JM(s){let e=[],t=[],n=[],i=s,r=s-Co+1+U0.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Co?l=U0[o-s+Co-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,p=2,m=1,b=new Float32Array(_*g*d),M=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let T=0;T<d;T++){let R=T%3*2/3-1,A=T>2?0:-1,x=[R,A,0,R+2/3,A,0,R+2/3,A+1,0,R,A,0,R+2/3,A+1,0,R,A+1,0];b.set(x,_*g*T),M.set(f,p*g*T);let y=[T,T,T,T,T,T];v.set(y,m*g*T)}let P=new Ht;P.setAttribute("position",new zt(b,_)),P.setAttribute("uv",new zt(M,p)),P.setAttribute("faceIndex",new zt(v,m)),e.push(P),i>Co&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function F0(s,e,t){let n=new $t(s,e,t);return n.texture.mapping=Yc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ic(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function QM(s,e,t){let n=new Float32Array(kr),i=new U(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function B0(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function k0(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ld(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function e1(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Na||l===Fu,h=l===Oo||l===Fo;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Vo(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Vo(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function t1(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Aa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function n1(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let b=d.array;_=d.version;for(let M=0,v=b.length;M<v;M+=3){let P=b[M+0],T=b[M+1],R=b[M+2];f.push(P,T,T,R,R,P)}}else if(g!==void 0){let b=g.array;_=g.version;for(let M=0,v=b.length/3-1;M<v;M+=3){let P=M+0,T=M+1,R=M+2;f.push(P,T,T,R,R,P)}}else return;let p=new(Gm(f)?Ec:Sc)(f,1);p.version=_;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function i1(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,n,1)}function u(f,d,g,_){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let m=0;for(let b=0;b<g;b++)m+=d[b]*_[b];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function s1(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function r1(s,e,t){let n=new WeakMap,i=new Et;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let x=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let v=a.attributes.position.count*M,P=1;v>e.maxTextureSize&&(P=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*P*4*u),R=new bc(T,v,P,u);R.type=Un,R.needsUpdate=!0;let A=M*4;for(let y=0;y<u;y++){let w=p[y],B=m[y],F=b[y],O=v*P*4*y;for(let q=0;q<w.count;q++){let k=q*A;d===!0&&(i.fromBufferAttribute(w,q),T[O+k+0]=i.x,T[O+k+1]=i.y,T[O+k+2]=i.z,T[O+k+3]=0),g===!0&&(i.fromBufferAttribute(B,q),T[O+k+4]=i.x,T[O+k+5]=i.y,T[O+k+6]=i.z,T[O+k+7]=0),_===!0&&(i.fromBufferAttribute(F,q),T[O+k+8]=i.x,T[O+k+9]=i.y,T[O+k+10]=i.z,T[O+k+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:R,size:new _e(v,P)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function o1(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Go=class extends An{constructor(e,t,n,i,r,o,a,l,c,h=Lo){if(h!==Lo&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Lo&&(n=zr),n===void 0&&h===sr&&(n=ir),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ym=new An,z0=new Go(1,1),Zm=new bc,$m=new pf,Km=new Tc,H0=[],V0=[],G0=new Float32Array(16),W0=new Float32Array(9),X0=new Float32Array(4);function jo(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=H0[i];if(r===void 0&&(r=new Float32Array(i),H0[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Mn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function bn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function jc(s,e){let t=V0[e];t===void 0&&(t=new Int32Array(e),V0[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function a1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function l1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2fv(this.addr,e),bn(t,e)}}function c1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;s.uniform3fv(this.addr,e),bn(t,e)}}function h1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4fv(this.addr,e),bn(t,e)}}function u1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;X0.set(n),s.uniformMatrix2fv(this.addr,!1,X0),bn(t,n)}}function f1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;W0.set(n),s.uniformMatrix3fv(this.addr,!1,W0),bn(t,n)}}function d1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;G0.set(n),s.uniformMatrix4fv(this.addr,!1,G0),bn(t,n)}}function p1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function m1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2iv(this.addr,e),bn(t,e)}}function g1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;s.uniform3iv(this.addr,e),bn(t,e)}}function _1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4iv(this.addr,e),bn(t,e)}}function x1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function v1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2uiv(this.addr,e),bn(t,e)}}function y1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;s.uniform3uiv(this.addr,e),bn(t,e)}}function M1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4uiv(this.addr,e),bn(t,e)}}function b1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(z0.compareFunction=Vm,r=z0):r=Ym,t.setTexture2D(e||r,i)}function S1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$m,i)}function E1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Km,i)}function w1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zm,i)}function T1(s){switch(s){case 5126:return a1;case 35664:return l1;case 35665:return c1;case 35666:return h1;case 35674:return u1;case 35675:return f1;case 35676:return d1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return x1;case 36294:return v1;case 36295:return y1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return w1}}function A1(s,e){s.uniform1fv(this.addr,e)}function R1(s,e){let t=jo(e,this.size,2);s.uniform2fv(this.addr,t)}function C1(s,e){let t=jo(e,this.size,3);s.uniform3fv(this.addr,t)}function P1(s,e){let t=jo(e,this.size,4);s.uniform4fv(this.addr,t)}function I1(s,e){let t=jo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function L1(s,e){let t=jo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function D1(s,e){let t=jo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function U1(s,e){s.uniform1iv(this.addr,e)}function N1(s,e){s.uniform2iv(this.addr,e)}function O1(s,e){s.uniform3iv(this.addr,e)}function F1(s,e){s.uniform4iv(this.addr,e)}function B1(s,e){s.uniform1uiv(this.addr,e)}function k1(s,e){s.uniform2uiv(this.addr,e)}function z1(s,e){s.uniform3uiv(this.addr,e)}function H1(s,e){s.uniform4uiv(this.addr,e)}function V1(s,e,t){let n=this.cache,i=e.length,r=jc(t,i);Mn(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ym,r[o])}function G1(s,e,t){let n=this.cache,i=e.length,r=jc(t,i);Mn(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||$m,r[o])}function W1(s,e,t){let n=this.cache,i=e.length,r=jc(t,i);Mn(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Km,r[o])}function X1(s,e,t){let n=this.cache,i=e.length,r=jc(t,i);Mn(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Zm,r[o])}function q1(s){switch(s){case 5126:return A1;case 35664:return R1;case 35665:return C1;case 35666:return P1;case 35674:return I1;case 35675:return L1;case 35676:return D1;case 5124:case 35670:return U1;case 35667:case 35671:return N1;case 35668:case 35672:return O1;case 35669:case 35673:return F1;case 5125:return B1;case 36294:return k1;case 36295:return z1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return X1}}var mf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=T1(t.type)}},gf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q1(t.type)}},_f=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},vu=/(\w+)(\])?(\[|\.)?/g;function q0(s,e){s.seq.push(e),s.map[e.id]=e}function Y1(s,e,t){let n=s.name,i=n.length;for(vu.lastIndex=0;;){let r=vu.exec(n),o=vu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){q0(t,c===void 0?new mf(a,s,e):new gf(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new _f(a),q0(t,u)),t=u}}}var Uo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Y1(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Y0(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Z1=37297,$1=0;function K1(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Z0=new dt;function j1(s){yt._getMatrix(Z0,yt.workingColorSpace,s);let e=`mat3( ${Z0.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(s)){case $c:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $0(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+K1(s.getShaderSource(e),o)}else return i}function J1(s,e){let t=j1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Q1(s,e){let t;switch(e){case ax:t="Linear";break;case lx:t="Reinhard";break;case cx:t="Cineon";break;case jf:t="ACESFilmic";break;case ux:t="AgX";break;case fx:t="Neutral";break;case hx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sc=new U;function eb(){yt.getLuminanceCoefficients(sc);let s=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function nb(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ib(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ra(s){return s!==""}function K0(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function j0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(s){return s.replace(sb,ob)}var rb=new Map;function ob(s,e){let t=mt[e];if(t===void 0){let n=rb.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xf(t)}var ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J0(s){return s.replace(ab,lb)}function lb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Q0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$f?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Rs&&(e="SHADOWMAP_TYPE_VSM"),e}function hb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Oo:case Fo:e="ENVMAP_TYPE_CUBE";break;case Yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ub(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fo:e="ENVMAP_MODE_REFRACTION";break}return e}function fb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pm:e="ENVMAP_BLENDING_MULTIPLY";break;case rx:e="ENVMAP_BLENDING_MIX";break;case ox:e="ENVMAP_BLENDING_ADD";break}return e}function db(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function pb(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=cb(t),c=hb(t),h=ub(t),u=fb(t),f=db(t),d=tb(t),g=nb(r),_=i.createProgram(),p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),m.length>0&&(m+=`
`)):(p=[Q0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),m=[Q0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?mt.tonemapping_pars_fragment:"",t.toneMapping!==tr?Q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,J1("linearToOutputTexel",t.outputColorSpace),eb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),o=xf(o),o=K0(o,t),o=j0(o,t),a=xf(a),a=K0(a,t),a=j0(a,t),o=J0(o),a=J0(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===f0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===f0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=b+p+o,v=b+m+a,P=Y0(i,i.VERTEX_SHADER,M),T=Y0(i,i.FRAGMENT_SHADER,v);i.attachShader(_,P),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(w){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(P).trim(),O=i.getShaderInfoLog(T).trim(),q=!0,k=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,T);else{let ae=$0(i,P,"vertex"),Y=$0(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+B+`
`+ae+`
`+Y)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||O==="")&&(k=!1);k&&(w.diagnostics={runnable:q,programLog:B,vertexShader:{log:F,prefix:p},fragmentShader:{log:O,prefix:m}})}i.deleteShader(P),i.deleteShader(T),A=new Uo(i,_),x=ib(i,_)}let A;this.getUniforms=function(){return A===void 0&&R(this),A};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,Z1)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=T,this}var mb=0,vf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yf(e),t.set(e,n)),n}},yf=class{constructor(e){this.id=mb++,this.code=e,this.usedTimes=0}};function gb(s,e,t,n,i,r,o){let a=new ka,l=new vf,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,y,w,B,F){let O=B.fog,q=F.geometry,k=x.isMeshStandardMaterial?B.environment:null,ae=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),Y=ae&&ae.mapping===Yc?ae.image.height:null,he=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let Se=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Re=Se!==void 0?Se.length:0,K=0;q.morphAttributes.position!==void 0&&(K=1),q.morphAttributes.normal!==void 0&&(K=2),q.morphAttributes.color!==void 0&&(K=3);let tt,le,z,ge;if(he){let st=os[he];tt=st.vertexShader,le=st.fragmentShader}else tt=x.vertexShader,le=x.fragmentShader,l.update(x),z=l.getVertexShaderID(x),ge=l.getFragmentShaderID(x);let ue=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Ve=F.isInstancedMesh===!0,Ae=F.isBatchedMesh===!0,Ge=!!x.map,D=!!x.matcap,V=!!ae,C=!!x.aoMap,$=!!x.lightMap,j=!!x.bumpMap,ie=!!x.normalMap,ee=!!x.displacementMap,ne=!!x.emissiveMap,xe=!!x.metalnessMap,I=!!x.roughnessMap,S=x.anisotropy>0,G=x.clearcoat>0,J=x.dispersion>0,se=x.iridescence>0,te=x.sheen>0,Me=x.transmission>0,ve=S&&!!x.anisotropyMap,Ce=G&&!!x.clearcoatMap,Xe=G&&!!x.clearcoatNormalMap,pe=G&&!!x.clearcoatRoughnessMap,Ee=se&&!!x.iridescenceMap,Oe=se&&!!x.iridescenceThicknessMap,Ne=te&&!!x.sheenColorMap,we=te&&!!x.sheenRoughnessMap,rt=!!x.specularMap,qe=!!x.specularColorMap,ht=!!x.specularIntensityMap,H=Me&&!!x.transmissionMap,De=Me&&!!x.thicknessMap,ce=!!x.gradientMap,ye=!!x.alphaMap,He=x.alphaTest>0,Be=!!x.alphaHash,Le=!!x.extensions,ft=tr;x.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ft=s.toneMapping);let gt={shaderID:he,shaderType:x.type,shaderName:x.name,vertexShader:tt,fragmentShader:le,defines:x.defines,customVertexShaderID:z,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&F._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&F.instanceColor!==null,instancingMorph:Ve&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:_n,alphaToCoverage:!!x.alphaToCoverage,map:Ge,matcap:D,envMap:V,envMapMode:V&&ae.mapping,envMapCubeUVHeight:Y,aoMap:C,lightMap:$,bumpMap:j,normalMap:ie,displacementMap:f&&ee,emissiveMap:ne,normalMapObjectSpace:ie&&x.normalMapType===_x,normalMapTangentSpace:ie&&x.normalMapType===od,metalnessMap:xe,roughnessMap:I,anisotropy:S,anisotropyMap:ve,clearcoat:G,clearcoatMap:Ce,clearcoatNormalMap:Xe,clearcoatRoughnessMap:pe,dispersion:J,iridescence:se,iridescenceMap:Ee,iridescenceThicknessMap:Oe,sheen:te,sheenColorMap:Ne,sheenRoughnessMap:we,specularMap:rt,specularColorMap:qe,specularIntensityMap:ht,transmission:Me,transmissionMap:H,thicknessMap:De,gradientMap:ce,opaque:x.transparent===!1&&x.blending===Io&&x.alphaToCoverage===!1,alphaMap:ye,alphaTest:He,alphaHash:Be,combine:x.combine,mapUv:Ge&&_(x.map.channel),aoMapUv:C&&_(x.aoMap.channel),lightMapUv:$&&_(x.lightMap.channel),bumpMapUv:j&&_(x.bumpMap.channel),normalMapUv:ie&&_(x.normalMap.channel),displacementMapUv:ee&&_(x.displacementMap.channel),emissiveMapUv:ne&&_(x.emissiveMap.channel),metalnessMapUv:xe&&_(x.metalnessMap.channel),roughnessMapUv:I&&_(x.roughnessMap.channel),anisotropyMapUv:ve&&_(x.anisotropyMap.channel),clearcoatMapUv:Ce&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(x.sheenRoughnessMap.channel),specularMapUv:rt&&_(x.specularMap.channel),specularColorMapUv:qe&&_(x.specularColorMap.channel),specularIntensityMapUv:ht&&_(x.specularIntensityMap.channel),transmissionMapUv:H&&_(x.transmissionMap.channel),thicknessMapUv:De&&_(x.thicknessMap.channel),alphaMapUv:ye&&_(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ie||S),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(Ge||ye),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:be,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:K,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,decodeVideoTexture:Ge&&x.map.isVideoTexture===!0&&yt.getTransfer(x.map.colorSpace)===It,decodeVideoTextureEmissive:ne&&x.emissiveMap.isVideoTexture===!0&&yt.getTransfer(x.emissiveMap.colorSpace)===It,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Jn,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Le&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&x.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function m(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let w in x.defines)y.push(w),y.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(b(y,x),M(y,x),y.push(s.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){let y=g[x.type],w;if(y){let B=os[y];w=ai.clone(B.uniforms)}else w=x.uniforms;return w}function P(x,y){let w;for(let B=0,F=h.length;B<F;B++){let O=h[B];if(O.cacheKey===y){w=O,++w.usedTimes;break}}return w===void 0&&(w=new pb(s,y,x,r),h.push(w)),w}function T(x){if(--x.usedTimes===0){let y=h.indexOf(x);h[y]=h[h.length-1],h.pop(),x.destroy()}}function R(x){l.remove(x)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:P,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:A}}function _b(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function xb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function em(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tm(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,p){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),e++,m}function a(u,f,d,g,_,p){let m=o(u,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(u,f,d,g,_,p){let m=o(u,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||xb),n.length>1&&n.sort(f||em),i.length>1&&i.sort(f||em)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function vb(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new tm,s.set(n,[o])):i>=r.length?(o=new tm,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function yb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Te};break;case"SpotLight":t={position:new U,direction:new U,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function Mb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var bb=0;function Sb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Eb(s){let e=new yb,t=Mb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let i=new U,r=new Ke,o=new Ke;function a(c){let h=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,b=0,M=0,v=0,P=0,T=0,R=0;c.sort(Sb);for(let x=0,y=c.length;x<y;x++){let w=c[x],B=w.color,F=w.intensity,O=w.distance,q=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=B.r*F,u+=B.g*F,f+=B.b*F;else if(w.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(w.sh.coefficients[k],F);R++}else if(w.isDirectionalLight){let k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let ae=w.shadow,Y=t.get(w);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=w.shadow.matrix,b++}n.directional[d]=k,d++}else if(w.isSpotLight){let k=e.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(B).multiplyScalar(F),k.distance=O,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,n.spot[_]=k;let ae=w.shadow;if(w.map&&(n.spotLightMap[P]=w.map,P++,ae.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[_]=ae.matrix,w.castShadow){let Y=t.get(w);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=q,v++}_++}else if(w.isRectAreaLight){let k=e.get(w);k.color.copy(B).multiplyScalar(F),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=k,p++}else if(w.isPointLight){let k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){let ae=w.shadow,Y=t.get(w);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,Y.shadowCameraNear=ae.camera.near,Y.shadowCameraFar=ae.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=w.shadow.matrix,M++}n.point[g]=k,g++}else if(w.isHemisphereLight){let k=e.get(w);k.skyColor.copy(w.color).multiplyScalar(F),k.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[m]=k,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==b||A.numPointShadows!==M||A.numSpotShadows!==v||A.numSpotMaps!==P||A.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,A.directionalLength=d,A.pointLength=g,A.spotLength=_,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=b,A.numPointShadows=M,A.numSpotShadows=v,A.numSpotMaps=P,A.numLightProbes=R,n.version=bb++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let M=c[m];if(M.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),u++}else if(M.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),d++}else if(M.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function nm(s){let e=new Eb(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function wb(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new nm(s),e.set(i,[a])):r>=o.length?(a=new nm(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Mf=class extends Gn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bf=class extends Gn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ab=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rb(s,e,t){let n=new Va,i=new _e,r=new _e,o=new Et,a=new Mf({depthPacking:gx}),l=new bf,c={},h=t.maxTextureSize,u={[Di]:Tn,[Tn]:Di,[Jn]:Jn},f=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Tb,fragmentShader:Ab}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ht;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ie(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cm;let m=this.type;this.render=function(T,R,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let x=s.getRenderTarget(),y=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),B=s.state;B.setBlending(vn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=m!==Rs&&this.type===Rs,O=m===Rs&&this.type!==Rs;for(let q=0,k=T.length;q<k;q++){let ae=T[q],Y=ae.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let he=Y.getFrameExtents();if(i.multiply(he),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/he.x),i.x=r.x*he.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/he.y),i.y=r.y*he.y,Y.mapSize.y=r.y)),Y.map===null||F===!0||O===!0){let Re=this.type!==Rs?{minFilter:yn,magFilter:yn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new $t(i.x,i.y,Re),Y.map.texture.name=ae.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();let Se=Y.getViewportCount();for(let Re=0;Re<Se;Re++){let K=Y.getViewport(Re);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),B.viewport(o),Y.updateMatrices(ae,Re),n=Y.getFrustum(),v(R,A,Y.camera,ae,this.type)}Y.isPointLightShadow!==!0&&this.type===Rs&&b(Y,A),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(x,y,w)};function b(T,R){let A=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $t(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,A,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,A,d,_,null)}function M(T,R,A,x){let y=null,w=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)y=w;else if(y=A.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let B=y.uuid,F=R.uuid,O=c[B];O===void 0&&(O={},c[B]=O);let q=O[F];q===void 0&&(q=y.clone(),O[F]=q,R.addEventListener("dispose",P)),y=q}if(y.visible=R.visible,y.wireframe=R.wireframe,x===Rs?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let B=s.properties.get(y);B.light=A}return y}function v(T,R,A,x,y){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Rs)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);let F=e.update(T),O=T.material;if(Array.isArray(O)){let q=F.groups;for(let k=0,ae=q.length;k<ae;k++){let Y=q[k],he=O[Y.materialIndex];if(he&&he.visible){let Se=M(T,he,x,y);T.onBeforeShadow(s,T,R,A,F,Se,Y),s.renderBufferDirect(A,null,F,Se,T,Y),T.onAfterShadow(s,T,R,A,F,Se,Y)}}}else if(O.visible){let q=M(T,O,x,y);T.onBeforeShadow(s,T,R,A,F,q,null),s.renderBufferDirect(A,null,F,q,T,null),T.onAfterShadow(s,T,R,A,F,q,null)}}let B=T.children;for(let F=0,O=B.length;F<O;F++)v(B[F],R,A,x,y)}function P(T){T.target.removeEventListener("dispose",P);for(let A in c){let x=c[A],y=T.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}var Cb={[Pu]:Iu,[Lu]:Nu,[Du]:Ou,[No]:Uu,[Iu]:Pu,[Nu]:Lu,[Ou]:Du,[Uu]:No};function Pb(s,e){function t(){let H=!1,De=new Et,ce=null,ye=new Et(0,0,0,0);return{setMask:function(He){ce!==He&&!H&&(s.colorMask(He,He,He,He),ce=He)},setLocked:function(He){H=He},setClear:function(He,Be,Le,ft,gt){gt===!0&&(He*=ft,Be*=ft,Le*=ft),De.set(He,Be,Le,ft),ye.equals(De)===!1&&(s.clearColor(He,Be,Le,ft),ye.copy(De))},reset:function(){H=!1,ce=null,ye.set(-1,0,0,0)}}}function n(){let H=!1,De=!1,ce=null,ye=null,He=null;return{setReversed:function(Be){if(De!==Be){let Le=e.get("EXT_clip_control");De?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);let ft=He;He=null,this.setClear(ft)}De=Be},getReversed:function(){return De},setTest:function(Be){Be?ue(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(Be){ce!==Be&&!H&&(s.depthMask(Be),ce=Be)},setFunc:function(Be){if(De&&(Be=Cb[Be]),ye!==Be){switch(Be){case Pu:s.depthFunc(s.NEVER);break;case Iu:s.depthFunc(s.ALWAYS);break;case Lu:s.depthFunc(s.LESS);break;case No:s.depthFunc(s.LEQUAL);break;case Du:s.depthFunc(s.EQUAL);break;case Uu:s.depthFunc(s.GEQUAL);break;case Nu:s.depthFunc(s.GREATER);break;case Ou:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ye=Be}},setLocked:function(Be){H=Be},setClear:function(Be){He!==Be&&(De&&(Be=1-Be),s.clearDepth(Be),He=Be)},reset:function(){H=!1,ce=null,ye=null,He=null,De=!1}}}function i(){let H=!1,De=null,ce=null,ye=null,He=null,Be=null,Le=null,ft=null,gt=null;return{setTest:function(st){H||(st?ue(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(st){De!==st&&!H&&(s.stencilMask(st),De=st)},setFunc:function(st,Bt,hn){(ce!==st||ye!==Bt||He!==hn)&&(s.stencilFunc(st,Bt,hn),ce=st,ye=Bt,He=hn)},setOp:function(st,Bt,hn){(Be!==st||Le!==Bt||ft!==hn)&&(s.stencilOp(st,Bt,hn),Be=st,Le=Bt,ft=hn)},setLocked:function(st){H=st},setClear:function(st){gt!==st&&(s.clearStencil(st),gt=st)},reset:function(){H=!1,De=null,ce=null,ye=null,He=null,Be=null,Le=null,ft=null,gt=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,b=null,M=null,v=null,P=null,T=null,R=new Te(0,0,0),A=0,x=!1,y=null,w=null,B=null,F=null,O=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ae=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=ae>=1):Y.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=ae>=2);let he=null,Se={},Re=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),tt=new Et().fromArray(Re),le=new Et().fromArray(K);function z(H,De,ce,ye){let He=new Uint8Array(4),Be=s.createTexture();s.bindTexture(H,Be),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<ce;Le++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,ye,0,s.RGBA,s.UNSIGNED_BYTE,He):s.texImage2D(De+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,He);return Be}let ge={};ge[s.TEXTURE_2D]=z(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(s.DEPTH_TEST),o.setFunc(No),j(!1),ie(s0),ue(s.CULL_FACE),C(vn);function ue(H){h[H]!==!0&&(s.enable(H),h[H]=!0)}function be(H){h[H]!==!1&&(s.disable(H),h[H]=!1)}function Ve(H,De){return u[H]!==De?(s.bindFramebuffer(H,De),u[H]=De,H===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=De),H===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Ae(H,De){let ce=d,ye=!1;if(H){ce=f.get(De),ce===void 0&&(ce=[],f.set(De,ce));let He=H.textures;if(ce.length!==He.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let Be=0,Le=He.length;Be<Le;Be++)ce[Be]=s.COLOR_ATTACHMENT0+Be;ce.length=He.length,ye=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,ye=!0);ye&&s.drawBuffers(ce)}function Ge(H){return g!==H?(s.useProgram(H),g=H,!0):!1}let D={[Ii]:s.FUNC_ADD,[X_]:s.FUNC_SUBTRACT,[q_]:s.FUNC_REVERSE_SUBTRACT};D[Y_]=s.MIN,D[Z_]=s.MAX;let V={[Ko]:s.ZERO,[$_]:s.ONE,[K_]:s.SRC_COLOR,[Ru]:s.SRC_ALPHA,[ex]:s.SRC_ALPHA_SATURATE,[qc]:s.DST_COLOR,[Xc]:s.DST_ALPHA,[j_]:s.ONE_MINUS_SRC_COLOR,[Cu]:s.ONE_MINUS_SRC_ALPHA,[Q_]:s.ONE_MINUS_DST_COLOR,[J_]:s.ONE_MINUS_DST_ALPHA,[tx]:s.CONSTANT_COLOR,[nx]:s.ONE_MINUS_CONSTANT_COLOR,[ix]:s.CONSTANT_ALPHA,[sx]:s.ONE_MINUS_CONSTANT_ALPHA};function C(H,De,ce,ye,He,Be,Le,ft,gt,st){if(H===vn){_===!0&&(be(s.BLEND),_=!1);return}if(_===!1&&(ue(s.BLEND),_=!0),H!==Kf){if(H!==p||st!==x){if((m!==Ii||v!==Ii)&&(s.blendEquation(s.FUNC_ADD),m=Ii,v=Ii),st)switch(H){case Io:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case as:s.blendFunc(s.ONE,s.ONE);break;case r0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case o0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Io:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case as:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case r0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case o0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,M=null,P=null,T=null,R.set(0,0,0),A=0,p=H,x=st}return}He=He||De,Be=Be||ce,Le=Le||ye,(De!==m||He!==v)&&(s.blendEquationSeparate(D[De],D[He]),m=De,v=He),(ce!==b||ye!==M||Be!==P||Le!==T)&&(s.blendFuncSeparate(V[ce],V[ye],V[Be],V[Le]),b=ce,M=ye,P=Be,T=Le),(ft.equals(R)===!1||gt!==A)&&(s.blendColor(ft.r,ft.g,ft.b,gt),R.copy(ft),A=gt),p=H,x=!1}function $(H,De){H.side===Jn?be(s.CULL_FACE):ue(s.CULL_FACE);let ce=H.side===Tn;De&&(ce=!ce),j(ce),H.blending===Io&&H.transparent===!1?C(vn):C(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let ye=H.stencilWrite;a.setTest(ye),ye&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ne(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function j(H){y!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),y=H)}function ie(H){H!==G_?(ue(s.CULL_FACE),H!==w&&(H===s0?s.cullFace(s.BACK):H===W_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),w=H}function ee(H){H!==B&&(k&&s.lineWidth(H),B=H)}function ne(H,De,ce){H?(ue(s.POLYGON_OFFSET_FILL),(F!==De||O!==ce)&&(s.polygonOffset(De,ce),F=De,O=ce)):be(s.POLYGON_OFFSET_FILL)}function xe(H){H?ue(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function I(H){H===void 0&&(H=s.TEXTURE0+q-1),he!==H&&(s.activeTexture(H),he=H)}function S(H,De,ce){ce===void 0&&(he===null?ce=s.TEXTURE0+q-1:ce=he);let ye=Se[ce];ye===void 0&&(ye={type:void 0,texture:void 0},Se[ce]=ye),(ye.type!==H||ye.texture!==De)&&(he!==ce&&(s.activeTexture(ce),he=ce),s.bindTexture(H,De||ge[H]),ye.type=H,ye.texture=De)}function G(){let H=Se[he];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(H){tt.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),tt.copy(H))}function we(H){le.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),le.copy(H))}function rt(H,De){let ce=c.get(De);ce===void 0&&(ce=new WeakMap,c.set(De,ce));let ye=ce.get(H);ye===void 0&&(ye=s.getUniformBlockIndex(De,H.name),ce.set(H,ye))}function qe(H,De){let ye=c.get(De).get(H);l.get(De)!==ye&&(s.uniformBlockBinding(De,ye,H.__bindingPointIndex),l.set(De,ye))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},he=null,Se={},u={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,b=null,M=null,v=null,P=null,T=null,R=new Te(0,0,0),A=0,x=!1,y=null,w=null,B=null,F=null,O=null,tt.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:be,bindFramebuffer:Ve,drawBuffers:Ae,useProgram:Ge,setBlending:C,setMaterial:$,setFlipSided:j,setCullFace:ie,setLineWidth:ee,setPolygonOffset:ne,setScissorTest:xe,activeTexture:I,bindTexture:S,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:se,texImage2D:Ee,texImage3D:Oe,updateUBOMapping:rt,uniformBlockBinding:qe,texStorage2D:Xe,texStorage3D:pe,texSubImage2D:te,texSubImage3D:Me,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ce,scissor:Ne,viewport:we,reset:ht}}function im(s,e,t,n){let i=Ib(n);switch(t){case Nm:return s*e;case Fm:return s*e;case Bm:return s*e*2;case nd:return s*e/i.components*i.byteLength;case id:return s*e/i.components*i.byteLength;case km:return s*e*2/i.components*i.byteLength;case sd:return s*e*2/i.components*i.byteLength;case Om:return s*e*3/i.components*i.byteLength;case Vn:return s*e*4/i.components*i.byteLength;case rd:return s*e*4/i.components*i.byteLength;case mc:case gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _c:case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ku:case Hu:return Math.max(s,16)*Math.max(e,8)/4;case Bu:case zu:return Math.max(s,8)*Math.max(e,8)/2;case Vu:case Gu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Yu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case $u:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ju:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ju:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Qu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case tf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case nf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case sf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case vc:case of:case af:return Math.ceil(s/4)*Math.ceil(e/4)*16;case zm:case lf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case cf:case hf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ib(s){switch(s){case Ji:case Lm:return{byteLength:1,components:1};case Fa:case Dm:case Kt:return{byteLength:2,components:1};case ed:case td:return{byteLength:2,components:4};case zr:case Qf:case Un:return{byteLength:4,components:1};case Um:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Lb(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,S){return d?new OffscreenCanvas(I,S):Ba("canvas")}function _(I,S,G){let J=1,se=xe(I);if((se.width>G||se.height>G)&&(J=G/Math.max(se.width,se.height)),J<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let te=Math.floor(J*se.width),Me=Math.floor(J*se.height);u===void 0&&(u=g(te,Me));let ve=S?g(te,Me):u;return ve.width=te,ve.height=Me,ve.getContext("2d").drawImage(I,0,0,te,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+te+"x"+Me+")."),ve}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),I;return I}function p(I){return I.generateMipmaps}function m(I){s.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(I,S,G,J,se=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let te=S;if(S===s.RED&&(G===s.FLOAT&&(te=s.R32F),G===s.HALF_FLOAT&&(te=s.R16F),G===s.UNSIGNED_BYTE&&(te=s.R8)),S===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(te=s.R8UI),G===s.UNSIGNED_SHORT&&(te=s.R16UI),G===s.UNSIGNED_INT&&(te=s.R32UI),G===s.BYTE&&(te=s.R8I),G===s.SHORT&&(te=s.R16I),G===s.INT&&(te=s.R32I)),S===s.RG&&(G===s.FLOAT&&(te=s.RG32F),G===s.HALF_FLOAT&&(te=s.RG16F),G===s.UNSIGNED_BYTE&&(te=s.RG8)),S===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(te=s.RG8UI),G===s.UNSIGNED_SHORT&&(te=s.RG16UI),G===s.UNSIGNED_INT&&(te=s.RG32UI),G===s.BYTE&&(te=s.RG8I),G===s.SHORT&&(te=s.RG16I),G===s.INT&&(te=s.RG32I)),S===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(te=s.RGB8UI),G===s.UNSIGNED_SHORT&&(te=s.RGB16UI),G===s.UNSIGNED_INT&&(te=s.RGB32UI),G===s.BYTE&&(te=s.RGB8I),G===s.SHORT&&(te=s.RGB16I),G===s.INT&&(te=s.RGB32I)),S===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),G===s.UNSIGNED_INT&&(te=s.RGBA32UI),G===s.BYTE&&(te=s.RGBA8I),G===s.SHORT&&(te=s.RGBA16I),G===s.INT&&(te=s.RGBA32I)),S===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),S===s.RGBA){let Me=se?$c:yt.getTransfer(J);G===s.FLOAT&&(te=s.RGBA32F),G===s.HALF_FLOAT&&(te=s.RGBA16F),G===s.UNSIGNED_BYTE&&(te=Me===It?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(I,S){let G;return I?S===null||S===zr||S===ir?G=s.DEPTH24_STENCIL8:S===Un?G=s.DEPTH32F_STENCIL8:S===Fa&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===zr||S===ir?G=s.DEPTH_COMPONENT24:S===Un?G=s.DEPTH_COMPONENT32F:S===Fa&&(G=s.DEPTH_COMPONENT16),G}function P(I,S){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==yn&&I.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function T(I){let S=I.target;S.removeEventListener("dispose",T),A(S),S.isVideoTexture&&h.delete(S)}function R(I){let S=I.target;S.removeEventListener("dispose",R),y(S)}function A(I){let S=n.get(I);if(S.__webglInit===void 0)return;let G=I.source,J=f.get(G);if(J){let se=J[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&x(I),Object.keys(J).length===0&&f.delete(G)}n.remove(I)}function x(I){let S=n.get(I);s.deleteTexture(S.__webglTexture);let G=I.source,J=f.get(G);delete J[S.__cacheKey],o.memory.textures--}function y(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let se=0;se<S.__webglFramebuffer[J].length;se++)s.deleteFramebuffer(S.__webglFramebuffer[J][se]);else s.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)s.deleteFramebuffer(S.__webglFramebuffer[J]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=I.textures;for(let J=0,se=G.length;J<se;J++){let te=n.get(G[J]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(I)}let w=0;function B(){w=0}function F(){let I=w;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),w+=1,I}function O(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function q(I,S){let G=n.get(I);if(I.isVideoTexture&&ee(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){let J=I.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(G,I,S);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+S)}function k(I,S){let G=n.get(I);if(I.version>0&&G.__version!==I.version){le(G,I,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+S)}function ae(I,S){let G=n.get(I);if(I.version>0&&G.__version!==I.version){le(G,I,S);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+S)}function Y(I,S){let G=n.get(I);if(I.version>0&&G.__version!==I.version){z(G,I,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+S)}let he={[Nn]:s.REPEAT,[ji]:s.CLAMP_TO_EDGE,[Oa]:s.MIRRORED_REPEAT},Se={[yn]:s.NEAREST,[Jf]:s.NEAREST_MIPMAP_NEAREST,[Ro]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[Ca]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},Re={[xx]:s.NEVER,[Ex]:s.ALWAYS,[vx]:s.LESS,[Vm]:s.LEQUAL,[yx]:s.EQUAL,[Sx]:s.GEQUAL,[Mx]:s.GREATER,[bx]:s.NOTEQUAL};function K(I,S){if(S.type===Un&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===Ca||S.magFilter===Ro||S.magFilter===Qn||S.minFilter===rn||S.minFilter===Ca||S.minFilter===Ro||S.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,he[S.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,he[S.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,he[S.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Se[S.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Se[S.minFilter]),S.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===yn||S.minFilter!==Ro&&S.minFilter!==Qn||S.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function tt(I,S){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",T));let J=S.source,se=f.get(J);se===void 0&&(se={},f.set(J,se));let te=O(S);if(te!==I.__cacheKey){se[te]===void 0&&(se[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[te].usedTimes++;let Me=se[I.__cacheKey];Me!==void 0&&(se[I.__cacheKey].usedTimes--,Me.usedTimes===0&&x(S)),I.__cacheKey=te,I.__webglTexture=se[te].texture}return G}function le(I,S,G){let J=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=s.TEXTURE_3D);let se=tt(I,S),te=S.source;t.bindTexture(J,I.__webglTexture,s.TEXTURE0+G);let Me=n.get(te);if(te.version!==Me.__version||se===!0){t.activeTexture(s.TEXTURE0+G);let ve=yt.getPrimaries(yt.workingColorSpace),Ce=S.colorSpace===Qs?null:yt.getPrimaries(S.colorSpace),Xe=S.colorSpace===Qs||ve===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let pe=_(S.image,!1,i.maxTextureSize);pe=ne(S,pe);let Ee=r.convert(S.format,S.colorSpace),Oe=r.convert(S.type),Ne=M(S.internalFormat,Ee,Oe,S.colorSpace,S.isVideoTexture);K(J,S);let we,rt=S.mipmaps,qe=S.isVideoTexture!==!0,ht=Me.__version===void 0||se===!0,H=te.dataReady,De=P(S,pe);if(S.isDepthTexture)Ne=v(S.format===sr,S.type),ht&&(qe?t.texStorage2D(s.TEXTURE_2D,1,Ne,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,Ne,pe.width,pe.height,0,Ee,Oe,null));else if(S.isDataTexture)if(rt.length>0){qe&&ht&&t.texStorage2D(s.TEXTURE_2D,De,Ne,rt[0].width,rt[0].height);for(let ce=0,ye=rt.length;ce<ye;ce++)we=rt[ce],qe?H&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,we.width,we.height,Ee,Oe,we.data):t.texImage2D(s.TEXTURE_2D,ce,Ne,we.width,we.height,0,Ee,Oe,we.data);S.generateMipmaps=!1}else qe?(ht&&t.texStorage2D(s.TEXTURE_2D,De,Ne,pe.width,pe.height),H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe.width,pe.height,Ee,Oe,pe.data)):t.texImage2D(s.TEXTURE_2D,0,Ne,pe.width,pe.height,0,Ee,Oe,pe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Ne,rt[0].width,rt[0].height,pe.depth);for(let ce=0,ye=rt.length;ce<ye;ce++)if(we=rt[ce],S.format!==Vn)if(Ee!==null)if(qe){if(H)if(S.layerUpdates.size>0){let He=im(we.width,we.height,S.format,S.type);for(let Be of S.layerUpdates){let Le=we.data.subarray(Be*He/we.data.BYTES_PER_ELEMENT,(Be+1)*He/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,Be,we.width,we.height,1,Ee,Le)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,we.width,we.height,pe.depth,Ee,we.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,Ne,we.width,we.height,pe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,we.width,we.height,pe.depth,Ee,Oe,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,Ne,we.width,we.height,pe.depth,0,Ee,Oe,we.data)}else{qe&&ht&&t.texStorage2D(s.TEXTURE_2D,De,Ne,rt[0].width,rt[0].height);for(let ce=0,ye=rt.length;ce<ye;ce++)we=rt[ce],S.format!==Vn?Ee!==null?qe?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,we.width,we.height,Ee,we.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,Ne,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?H&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,we.width,we.height,Ee,Oe,we.data):t.texImage2D(s.TEXTURE_2D,ce,Ne,we.width,we.height,0,Ee,Oe,we.data)}else if(S.isDataArrayTexture)if(qe){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Ne,pe.width,pe.height,pe.depth),H)if(S.layerUpdates.size>0){let ce=im(pe.width,pe.height,S.format,S.type);for(let ye of S.layerUpdates){let He=pe.data.subarray(ye*ce/pe.data.BYTES_PER_ELEMENT,(ye+1)*ce/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ye,pe.width,pe.height,1,Ee,Oe,He)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ee,Oe,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,pe.width,pe.height,pe.depth,0,Ee,Oe,pe.data);else if(S.isData3DTexture)qe?(ht&&t.texStorage3D(s.TEXTURE_3D,De,Ne,pe.width,pe.height,pe.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ee,Oe,pe.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,pe.width,pe.height,pe.depth,0,Ee,Oe,pe.data);else if(S.isFramebufferTexture){if(ht)if(qe)t.texStorage2D(s.TEXTURE_2D,De,Ne,pe.width,pe.height);else{let ce=pe.width,ye=pe.height;for(let He=0;He<De;He++)t.texImage2D(s.TEXTURE_2D,He,Ne,ce,ye,0,Ee,Oe,null),ce>>=1,ye>>=1}}else if(rt.length>0){if(qe&&ht){let ce=xe(rt[0]);t.texStorage2D(s.TEXTURE_2D,De,Ne,ce.width,ce.height)}for(let ce=0,ye=rt.length;ce<ye;ce++)we=rt[ce],qe?H&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Ee,Oe,we):t.texImage2D(s.TEXTURE_2D,ce,Ne,Ee,Oe,we);S.generateMipmaps=!1}else if(qe){if(ht){let ce=xe(pe);t.texStorage2D(s.TEXTURE_2D,De,Ne,ce.width,ce.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Oe,pe)}else t.texImage2D(s.TEXTURE_2D,0,Ne,Ee,Oe,pe);p(S)&&m(J),Me.__version=te.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function z(I,S,G){if(S.image.length!==6)return;let J=tt(I,S),se=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+G);let te=n.get(se);if(se.version!==te.__version||J===!0){t.activeTexture(s.TEXTURE0+G);let Me=yt.getPrimaries(yt.workingColorSpace),ve=S.colorSpace===Qs?null:yt.getPrimaries(S.colorSpace),Ce=S.colorSpace===Qs||Me===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Xe=S.isCompressedTexture||S.image[0].isCompressedTexture,pe=S.image[0]&&S.image[0].isDataTexture,Ee=[];for(let ye=0;ye<6;ye++)!Xe&&!pe?Ee[ye]=_(S.image[ye],!0,i.maxCubemapSize):Ee[ye]=pe?S.image[ye].image:S.image[ye],Ee[ye]=ne(S,Ee[ye]);let Oe=Ee[0],Ne=r.convert(S.format,S.colorSpace),we=r.convert(S.type),rt=M(S.internalFormat,Ne,we,S.colorSpace),qe=S.isVideoTexture!==!0,ht=te.__version===void 0||J===!0,H=se.dataReady,De=P(S,Oe);K(s.TEXTURE_CUBE_MAP,S);let ce;if(Xe){qe&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,De,rt,Oe.width,Oe.height);for(let ye=0;ye<6;ye++){ce=Ee[ye].mipmaps;for(let He=0;He<ce.length;He++){let Be=ce[He];S.format!==Vn?Ne!==null?qe?H&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,0,0,Be.width,Be.height,Ne,Be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,rt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,0,0,Be.width,Be.height,Ne,we,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,rt,Be.width,Be.height,0,Ne,we,Be.data)}}}else{if(ce=S.mipmaps,qe&&ht){ce.length>0&&De++;let ye=xe(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,De,rt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(pe){qe?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ee[ye].width,Ee[ye].height,Ne,we,Ee[ye].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,rt,Ee[ye].width,Ee[ye].height,0,Ne,we,Ee[ye].data);for(let He=0;He<ce.length;He++){let Le=ce[He].image[ye].image;qe?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,0,0,Le.width,Le.height,Ne,we,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,rt,Le.width,Le.height,0,Ne,we,Le.data)}}else{qe?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ne,we,Ee[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,rt,Ne,we,Ee[ye]);for(let He=0;He<ce.length;He++){let Be=ce[He];qe?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,0,0,Ne,we,Be.image[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,rt,Ne,we,Be.image[ye])}}}p(S)&&m(s.TEXTURE_CUBE_MAP),te.__version=se.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ge(I,S,G,J,se,te){let Me=r.convert(G.format,G.colorSpace),ve=r.convert(G.type),Ce=M(G.internalFormat,Me,ve,G.colorSpace),Xe=n.get(S),pe=n.get(G);if(pe.__renderTarget=S,!Xe.__hasExternalTextures){let Ee=Math.max(1,S.width>>te),Oe=Math.max(1,S.height>>te);se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,te,Ce,Ee,Oe,S.depth,0,Me,ve,null):t.texImage2D(se,te,Ce,Ee,Oe,0,Me,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),ie(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,se,pe.__webglTexture,0,j(S)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,se,pe.__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(I,S,G){if(s.bindRenderbuffer(s.RENDERBUFFER,I),S.depthBuffer){let J=S.depthTexture,se=J&&J.isDepthTexture?J.type:null,te=v(S.stencilBuffer,se),Me=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=j(S);ie(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,te,S.width,S.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,te,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,te,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,I)}else{let J=S.textures;for(let se=0;se<J.length;se++){let te=J[se],Me=r.convert(te.format,te.colorSpace),ve=r.convert(te.type),Ce=M(te.internalFormat,Me,ve,te.colorSpace),Xe=j(S);G&&ie(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Ce,S.width,S.height):ie(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xe,Ce,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);let se=J.__webglTexture,te=j(S);if(S.depthTexture.format===Lo)ie(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0);else if(S.depthTexture.format===sr)ie(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ve(I){let S=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let J=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){let se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",se)};J.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=J}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");be(S.__webglFramebuffer,I)}else if(G){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=s.createRenderbuffer(),ue(S.__webglDepthbuffer[J],I,!1);else{let se=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,te)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ue(S.__webglDepthbuffer,I,!1);else{let J=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,se)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(I,S,G){let J=n.get(I);S!==void 0&&ge(J.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ve(I)}function Ge(I){let S=I.texture,G=n.get(I),J=n.get(S);I.addEventListener("dispose",R);let se=I.textures,te=I.isWebGLCubeRenderTarget===!0,Me=se.length>1;if(Me||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=S.version,o.memory.textures++),te){G.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ve]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)G.__webglFramebuffer[ve][Ce]=s.createFramebuffer()}else G.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)G.__webglFramebuffer[ve]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Me)for(let ve=0,Ce=se.length;ve<Ce;ve++){let Xe=n.get(se[ve]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&ie(I)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ve=0;ve<se.length;ve++){let Ce=se[ve];G.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ve]);let Xe=r.convert(Ce.format,Ce.colorSpace),pe=r.convert(Ce.type),Ee=M(Ce.internalFormat,Xe,pe,Ce.colorSpace,I.isXRRenderTarget===!0),Oe=j(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,Ee,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,G.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ue(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),K(s.TEXTURE_CUBE_MAP,S);for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)ge(G.__webglFramebuffer[ve][Ce],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce);else ge(G.__webglFramebuffer[ve],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);p(S)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ve=0,Ce=se.length;ve<Ce;ve++){let Xe=se[ve],pe=n.get(Xe);t.bindTexture(s.TEXTURE_2D,pe.__webglTexture),K(s.TEXTURE_2D,Xe),ge(G.__webglFramebuffer,I,Xe,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,0),p(Xe)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ve=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,J.__webglTexture),K(ve,S),S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)ge(G.__webglFramebuffer[Ce],I,S,s.COLOR_ATTACHMENT0,ve,Ce);else ge(G.__webglFramebuffer,I,S,s.COLOR_ATTACHMENT0,ve,0);p(S)&&m(ve),t.unbindTexture()}I.depthBuffer&&Ve(I)}function D(I){let S=I.textures;for(let G=0,J=S.length;G<J;G++){let se=S[G];if(p(se)){let te=b(I),Me=n.get(se).__webglTexture;t.bindTexture(te,Me),m(te),t.unbindTexture()}}}let V=[],C=[];function $(I){if(I.samples>0){if(ie(I)===!1){let S=I.textures,G=I.width,J=I.height,se=s.COLOR_BUFFER_BIT,te=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(I),ve=S.length>1;if(ve)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Ce]);let Xe=n.get(S[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xe,0)}s.blitFramebuffer(0,0,G,J,0,0,G,J,se,s.NEAREST),l===!0&&(V.length=0,C.length=0,V.push(s.COLOR_ATTACHMENT0+Ce),I.depthBuffer&&I.resolveDepthBuffer===!1&&(V.push(te),C.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,C)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,V))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Ce]);let Xe=n.get(S[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let S=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function j(I){return Math.min(i.maxSamples,I.samples)}function ie(I){let S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ee(I){let S=o.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function ne(I,S){let G=I.colorSpace,J=I.format,se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==_n&&G!==Qs&&(yt.getTransfer(G)===It?(J!==Vn||se!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function xe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=k,this.setTexture3D=ae,this.setTextureCube=Y,this.rebindTextures=Ae,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ie}function Db(s,e){function t(n,i=Qs){let r,o=yt.getTransfer(i);if(n===Ji)return s.UNSIGNED_BYTE;if(n===ed)return s.UNSIGNED_SHORT_4_4_4_4;if(n===td)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Um)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lm)return s.BYTE;if(n===Dm)return s.SHORT;if(n===Fa)return s.UNSIGNED_SHORT;if(n===Qf)return s.INT;if(n===zr)return s.UNSIGNED_INT;if(n===Un)return s.FLOAT;if(n===Kt)return s.HALF_FLOAT;if(n===Nm)return s.ALPHA;if(n===Om)return s.RGB;if(n===Vn)return s.RGBA;if(n===Fm)return s.LUMINANCE;if(n===Bm)return s.LUMINANCE_ALPHA;if(n===Lo)return s.DEPTH_COMPONENT;if(n===sr)return s.DEPTH_STENCIL;if(n===nd)return s.RED;if(n===id)return s.RED_INTEGER;if(n===km)return s.RG;if(n===sd)return s.RG_INTEGER;if(n===rd)return s.RGBA_INTEGER;if(n===mc||n===gc||n===_c||n===xc)if(o===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_c)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_c)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bu||n===ku||n===zu||n===Hu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ku)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vu||n===Gu||n===Wu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vu||n===Gu)return o===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xu||n===qu||n===Yu||n===Zu||n===$u||n===Ku||n===ju||n===Ju||n===Qu||n===ef||n===tf||n===nf||n===sf||n===rf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$u)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ku)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ju)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ju)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ef)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tf)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nf)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sf)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rf)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vc||n===of||n===af)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vc)return o===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===of)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===af)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zm||n===lf||n===cf||n===hf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Sf=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Fe=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ub={type:"move"},La=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ub)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Fe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ob=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ef=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new An,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pt({vertexShader:Nb,fragmentShader:Ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wf=class extends rr{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=new Ef,p=t.getContextAttributes(),m=null,b=null,M=[],v=[],P=new _e,T=null,R=new Qt;R.viewport=new Et;let A=new Qt;A.viewport=new Et;let x=[R,A],y=new Sf,w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let z=M[le];return z===void 0&&(z=new La,M[le]=z),z.getTargetRaySpace()},this.getControllerGrip=function(le){let z=M[le];return z===void 0&&(z=new La,M[le]=z),z.getGripSpace()},this.getHand=function(le){let z=M[le];return z===void 0&&(z=new La,M[le]=z),z.getHandSpace()};function F(le){let z=v.indexOf(le.inputSource);if(z===-1)return;let ge=M[z];ge!==void 0&&(ge.update(le.inputSource,le.frame,c||o),ge.dispatchEvent({type:le.type,data:le.inputSource}))}function O(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",q);for(let le=0;le<M.length;le++){let z=v[le];z!==null&&(v[le]=null,M[le].disconnect(z))}w=null,B=null,_.reset(),e.setRenderTarget(m),d=null,f=null,u=null,i=null,b=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(le){if(i=le,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",O),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){let z={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,z),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new $t(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let z=null,ge=null,ue=null;p.depth&&(ue=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=p.stencil?sr:Lo,ge=p.stencil?ir:zr);let be={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new $t(f.textureWidth,f.textureHeight,{format:Vn,type:Ji,depthTexture:new Go(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(le){for(let z=0;z<le.removed.length;z++){let ge=le.removed[z],ue=v.indexOf(ge);ue>=0&&(v[ue]=null,M[ue].disconnect(ge))}for(let z=0;z<le.added.length;z++){let ge=le.added[z],ue=v.indexOf(ge);if(ue===-1){for(let Ve=0;Ve<M.length;Ve++)if(Ve>=v.length){v.push(ge),ue=Ve;break}else if(v[Ve]===null){v[Ve]=ge,ue=Ve;break}if(ue===-1)break}let be=M[ue];be&&be.connect(ge)}}let k=new U,ae=new U;function Y(le,z,ge){k.setFromMatrixPosition(z.matrixWorld),ae.setFromMatrixPosition(ge.matrixWorld);let ue=k.distanceTo(ae),be=z.projectionMatrix.elements,Ve=ge.projectionMatrix.elements,Ae=be[14]/(be[10]-1),Ge=be[14]/(be[10]+1),D=(be[9]+1)/be[5],V=(be[9]-1)/be[5],C=(be[8]-1)/be[0],$=(Ve[8]+1)/Ve[0],j=Ae*C,ie=Ae*$,ee=ue/(-C+$),ne=ee*-C;if(z.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(ne),le.translateZ(ee),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),be[10]===-1)le.projectionMatrix.copy(z.projectionMatrix),le.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{let xe=Ae+ee,I=Ge+ee,S=j-ne,G=ie+(ue-ne),J=D*Ge/I*xe,se=V*Ge/I*xe;le.projectionMatrix.makePerspective(S,G,J,se,xe,I),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function he(le,z){z===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(z.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(i===null)return;let z=le.near,ge=le.far;_.texture!==null&&(_.depthNear>0&&(z=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),y.near=A.near=R.near=z,y.far=A.far=R.far=ge,(w!==y.near||B!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,B=y.far),R.layers.mask=le.layers.mask|2,A.layers.mask=le.layers.mask|4,y.layers.mask=R.layers.mask|A.layers.mask;let ue=le.parent,be=y.cameras;he(y,ue);for(let Ve=0;Ve<be.length;Ve++)he(be[Ve],ue);be.length===2?Y(y,R,A):y.projectionMatrix.copy(R.projectionMatrix),Se(le,y,ue)};function Se(le,z,ge){ge===null?le.matrix.copy(z.matrixWorld):(le.matrix.copy(ge.matrixWorld),le.matrix.invert(),le.matrix.multiply(z.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(z.projectionMatrix),le.projectionMatrixInverse.copy(z.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=zo*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(le){l=le,f!==null&&(f.fixedFoveation=le),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=le)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Re=null;function K(le,z){if(h=z.getViewerPose(c||o),g=z,h!==null){let ge=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let ue=!1;ge.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let Ve=0;Ve<ge.length;Ve++){let Ae=ge[Ve],Ge=null;if(d!==null)Ge=d.getViewport(Ae);else{let V=u.getViewSubImage(f,Ae);Ge=V.viewport,Ve===0&&(e.setRenderTargetTextures(b,V.colorTexture,f.ignoreDepthValues?void 0:V.depthStencilTexture),e.setRenderTarget(b))}let D=x[Ve];D===void 0&&(D=new Qt,D.layers.enable(Ve),D.viewport=new Et,x[Ve]=D),D.matrix.fromArray(Ae.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Ae.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Ve===0&&(y.matrix.copy(D.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(D)}let be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){let Ve=u.getDepthInformation(ge[0]);Ve&&Ve.isValid&&Ve.texture&&_.init(e,Ve,i.renderState)}}for(let ge=0;ge<M.length;ge++){let ue=v[ge],be=M[ge];ue!==null&&be!==void 0&&be.update(ue,z,c||o)}Re&&Re(le,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),g=null}let tt=new qm;tt.setAnimationLoop(K),this.setAnimationLoop=function(le){Re=le},this.dispose=function(){}}},Or=new oi,Fb=new Ke;function Bb(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Xm(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,b,M,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Tn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Tn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=e.get(m),M=b.envMap,v=b.envMapRotation;M&&(p.envMap.value=M,Or.copy(v),Or.x*=-1,Or.y*=-1,Or.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),p.envMapRotation.value.setFromMatrix4(Fb.makeRotationFromEuler(Or)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kb(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let v=M.program;n.uniformBlockBinding(b,v)}function c(b,M){let v=i[b.id];v===void 0&&(g(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",p));let P=M.program;n.updateUBOMapping(b,P);let T=e.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function h(b){let M=u();b.__bindingPointIndex=M;let v=s.createBuffer(),P=b.__size,T=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,P,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let M=i[b.id],v=b.uniforms,P=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let T=0,R=v.length;T<R;T++){let A=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,y=A.length;x<y;x++){let w=A[x];if(d(w,T,x,P)===!0){let B=w.__offset,F=Array.isArray(w.value)?w.value:[w.value],O=0;for(let q=0;q<F.length;q++){let k=F[q],ae=_(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,B+O,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):(k.toArray(w.__data,O),O+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,M,v,P){let T=b.value,R=M+"_"+v;if(P[R]===void 0)return typeof T=="number"||typeof T=="boolean"?P[R]=T:P[R]=T.clone(),!0;{let A=P[R];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return P[R]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(b){let M=b.uniforms,v=0,P=16;for(let R=0,A=M.length;R<A;R++){let x=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,w=x.length;y<w;y++){let B=x[y],F=Array.isArray(B.value)?B.value:[B.value];for(let O=0,q=F.length;O<q;O++){let k=F[O],ae=_(k),Y=v%P,he=Y%ae.boundary,Se=Y+he;v+=he,Se!==0&&P-Se<ae.storage&&(v+=P-Se),B.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=ae.storage}}}let T=v%P;return T>0&&(v+=P-T),b.__size=v,b.__cache={},this}function _(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){let M=b.target;M.removeEventListener("dispose",p);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function m(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var Ac=class{constructor(e={}){let{canvas:t=Hx(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),p=null,m=null,b=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this.toneMapping=tr,this.toneMappingExposure=1;let v=this,P=!1,T=0,R=0,A=null,x=-1,y=null,w=new Et,B=new Et,F=null,O=new Te(0),q=0,k=t.width,ae=t.height,Y=1,he=null,Se=null,Re=new Et(0,0,k,ae),K=new Et(0,0,k,ae),tt=!1,le=new Va,z=!1,ge=!1,ue=new Ke,be=new Ke,Ve=new U,Ae=new Et,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},D=!1;function V(){return A===null?Y:1}let C=n;function $(L,W){return t.getContext(L,W)}try{let L={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zf}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",Be,!1),C===null){let W="webgl2";if(C=$(W,L),C===null)throw $(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let j,ie,ee,ne,xe,I,S,G,J,se,te,Me,ve,Ce,Xe,pe,Ee,Oe,Ne,we,rt,qe,ht,H;function De(){j=new t1(C),j.init(),qe=new Db(C,j),ie=new $M(C,j,e,qe),ee=new Pb(C,j),ie.reverseDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),ne=new s1(C),xe=new _b,I=new Lb(C,j,ee,xe,ie,qe,ne),S=new jM(v),G=new e1(v),J=new uv(C),ht=new YM(C,J),se=new n1(C,J,ne,ht),te=new o1(C,se,J,ne),Ne=new r1(C,ie,I),pe=new KM(xe),Me=new gb(v,S,G,j,ie,ht,pe),ve=new Bb(v,xe),Ce=new vb,Xe=new wb(j),Oe=new qM(v,S,G,ee,te,d,l),Ee=new Rb(v,te,ie),H=new kb(C,ne,ie,ee),we=new ZM(C,j,ne),rt=new i1(C,j,ne),ne.programs=Me.programs,v.capabilities=ie,v.extensions=j,v.properties=xe,v.renderLists=Ce,v.shadowMap=Ee,v.state=ee,v.info=ne}De();let ce=new wf(v,C);this.xr=ce,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let L=j.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=j.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(L){L!==void 0&&(Y=L,this.setSize(k,ae,!1))},this.getSize=function(L){return L.set(k,ae)},this.setSize=function(L,W,re=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=L,ae=W,t.width=Math.floor(L*Y),t.height=Math.floor(W*Y),re===!0&&(t.style.width=L+"px",t.style.height=W+"px"),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set(k*Y,ae*Y).floor()},this.setDrawingBufferSize=function(L,W,re){k=L,ae=W,Y=re,t.width=Math.floor(L*re),t.height=Math.floor(W*re),this.setViewport(0,0,L,W)},this.getCurrentViewport=function(L){return L.copy(w)},this.getViewport=function(L){return L.copy(Re)},this.setViewport=function(L,W,re,oe){L.isVector4?Re.set(L.x,L.y,L.z,L.w):Re.set(L,W,re,oe),ee.viewport(w.copy(Re).multiplyScalar(Y).round())},this.getScissor=function(L){return L.copy(K)},this.setScissor=function(L,W,re,oe){L.isVector4?K.set(L.x,L.y,L.z,L.w):K.set(L,W,re,oe),ee.scissor(B.copy(K).multiplyScalar(Y).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(L){ee.setScissorTest(tt=L)},this.setOpaqueSort=function(L){he=L},this.setTransparentSort=function(L){Se=L},this.getClearColor=function(L){return L.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(L=!0,W=!0,re=!0){let oe=0;if(L){let X=!1;if(A!==null){let Pe=A.texture.format;X=Pe===rd||Pe===sd||Pe===id}if(X){let Pe=A.texture.type,ke=Pe===Ji||Pe===zr||Pe===Fa||Pe===ir||Pe===ed||Pe===td,Ze=Oe.getClearColor(),Je=Oe.getClearAlpha(),lt=Ze.r,ut=Ze.g,Qe=Ze.b;ke?(g[0]=lt,g[1]=ut,g[2]=Qe,g[3]=Je,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=lt,_[1]=ut,_[2]=Qe,_[3]=Je,C.clearBufferiv(C.COLOR,0,_))}else oe|=C.COLOR_BUFFER_BIT}W&&(oe|=C.DEPTH_BUFFER_BIT),re&&(oe|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),Ce.dispose(),Xe.dispose(),xe.dispose(),S.dispose(),G.dispose(),te.dispose(),ht.dispose(),H.dispose(),Me.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Jt),ce.removeEventListener("sessionend",ys),Lt.stop()};function ye(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let L=ne.autoReset,W=Ee.enabled,re=Ee.autoUpdate,oe=Ee.needsUpdate,X=Ee.type;De(),ne.autoReset=L,Ee.enabled=W,Ee.autoUpdate=re,Ee.needsUpdate=oe,Ee.type=X}function Be(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Le(L){let W=L.target;W.removeEventListener("dispose",Le),ft(W)}function ft(L){gt(L),xe.remove(L)}function gt(L){let W=xe.get(L).programs;W!==void 0&&(W.forEach(function(re){Me.releaseProgram(re)}),L.isShaderMaterial&&Me.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,re,oe,X,Pe){W===null&&(W=Ge);let ke=X.isMesh&&X.matrixWorld.determinant()<0,Ze=Cl(L,W,re,oe,X);ee.setMaterial(oe,ke);let Je=re.index,lt=1;if(oe.wireframe===!0){if(Je=se.getWireframeAttribute(re),Je===void 0)return;lt=2}let ut=re.drawRange,Qe=re.attributes.position,St=ut.start*lt,ct=(ut.start+ut.count)*lt;Pe!==null&&(St=Math.max(St,Pe.start*lt),ct=Math.min(ct,(Pe.start+Pe.count)*lt)),Je!==null?(St=Math.max(St,0),ct=Math.min(ct,Je.count)):Qe!=null&&(St=Math.max(St,0),ct=Math.min(ct,Qe.count));let xt=ct-St;if(xt<0||xt===1/0)return;ht.setup(X,oe,Ze,re,Je);let In,$e=we;if(Je!==null&&(In=J.get(Je),$e=rt,$e.setIndex(In)),X.isMesh)oe.wireframe===!0?(ee.setLineWidth(oe.wireframeLinewidth*V()),$e.setMode(C.LINES)):$e.setMode(C.TRIANGLES);else if(X.isLine){let it=oe.linewidth;it===void 0&&(it=1),ee.setLineWidth(it*V()),X.isLineSegments?$e.setMode(C.LINES):X.isLineLoop?$e.setMode(C.LINE_LOOP):$e.setMode(C.LINE_STRIP)}else X.isPoints?$e.setMode(C.POINTS):X.isSprite&&$e.setMode(C.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)$e.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))$e.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let it=X._multiDrawStarts,Ri=X._multiDrawCounts,Mt=X._multiDrawCount,si=Je?J.get(Je).bytesPerElement:1,Ln=xe.get(oe).currentProgram.getUniforms();for(let Zn=0;Zn<Mt;Zn++)Ln.setValue(C,"_gl_DrawID",Zn),$e.render(it[Zn]/si,Ri[Zn])}else if(X.isInstancedMesh)$e.renderInstances(St,xt,X.count);else if(re.isInstancedBufferGeometry){let it=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ri=Math.min(re.instanceCount,it);$e.renderInstances(St,xt,Ri)}else $e.render(St,xt)};function st(L,W,re){L.transparent===!0&&L.side===Jn&&L.forceSinglePass===!1?(L.side=Tn,L.needsUpdate=!0,qi(L,W,re),L.side=Di,L.needsUpdate=!0,qi(L,W,re),L.side=Jn):qi(L,W,re)}this.compile=function(L,W,re=null){re===null&&(re=L),m=Xe.get(re),m.init(W),M.push(m),re.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),L!==re&&L.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();let oe=new Set;return L.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Pe=X.material;if(Pe)if(Array.isArray(Pe))for(let ke=0;ke<Pe.length;ke++){let Ze=Pe[ke];st(Ze,re,X),oe.add(Ze)}else st(Pe,re,X),oe.add(Pe)}),M.pop(),m=null,oe},this.compileAsync=function(L,W,re=null){let oe=this.compile(L,W,re);return new Promise(X=>{function Pe(){if(oe.forEach(function(ke){xe.get(ke).currentProgram.isReady()&&oe.delete(ke)}),oe.size===0){X(L);return}setTimeout(Pe,10)}j.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Bt=null;function hn(L){Bt&&Bt(L)}function Jt(){Lt.stop()}function ys(){Lt.start()}let Lt=new qm;Lt.setAnimationLoop(hn),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(L){Bt=L,ce.setAnimationLoop(L),L===null?Lt.stop():Lt.start()},ce.addEventListener("sessionstart",Jt),ce.addEventListener("sessionend",ys),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(W),W=ce.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,W,A),m=Xe.get(L,M.length),m.init(W),M.push(m),be.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),le.setFromProjectionMatrix(be),ge=this.localClippingEnabled,z=pe.init(this.clippingPlanes,ge),p=Ce.get(L,b.length),p.init(),b.push(p),ce.enabled===!0&&ce.isPresenting===!0){let Pe=v.xr.getDepthSensingMesh();Pe!==null&&ho(Pe,W,-1/0,v.sortObjects)}ho(L,W,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(he,Se),D=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,D&&Oe.addToRenderList(p,L),this.info.render.frame++,z===!0&&pe.beginShadows();let re=m.state.shadowsArray;Ee.render(re,L,W),z===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let oe=p.opaque,X=p.transmissive;if(m.setupLights(),W.isArrayCamera){let Pe=W.cameras;if(X.length>0)for(let ke=0,Ze=Pe.length;ke<Ze;ke++){let Je=Pe[ke];Cr(oe,X,L,Je)}D&&Oe.render(L);for(let ke=0,Ze=Pe.length;ke<Ze;ke++){let Je=Pe[ke];Rr(p,L,Je,Je.viewport)}}else X.length>0&&Cr(oe,X,L,W),D&&Oe.render(L),Rr(p,L,W);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(v,L,W),ht.resetDefaultState(),x=-1,y=null,M.pop(),M.length>0?(m=M[M.length-1],z===!0&&pe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function ho(L,W,re,oe){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)re=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||le.intersectsSprite(L)){oe&&Ae.setFromMatrixPosition(L.matrixWorld).applyMatrix4(be);let ke=te.update(L),Ze=L.material;Ze.visible&&p.push(L,ke,Ze,re,Ae.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||le.intersectsObject(L))){let ke=te.update(L),Ze=L.material;if(oe&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ae.copy(L.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Ae.copy(ke.boundingSphere.center)),Ae.applyMatrix4(L.matrixWorld).applyMatrix4(be)),Array.isArray(Ze)){let Je=ke.groups;for(let lt=0,ut=Je.length;lt<ut;lt++){let Qe=Je[lt],St=Ze[Qe.materialIndex];St&&St.visible&&p.push(L,ke,St,re,Ae.z,Qe)}}else Ze.visible&&p.push(L,ke,Ze,re,Ae.z,null)}}let Pe=L.children;for(let ke=0,Ze=Pe.length;ke<Ze;ke++)ho(Pe[ke],W,re,oe)}function Rr(L,W,re,oe){let X=L.opaque,Pe=L.transmissive,ke=L.transparent;m.setupLightsView(re),z===!0&&pe.setGlobalState(v.clippingPlanes,re),oe&&ee.viewport(w.copy(oe)),X.length>0&&ss(X,W,re),Pe.length>0&&ss(Pe,W,re),ke.length>0&&ss(ke,W,re),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Cr(L,W,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[oe.id]===void 0&&(m.state.transmissionRenderTarget[oe.id]=new $t(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?Kt:Ji,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));let Pe=m.state.transmissionRenderTarget[oe.id],ke=oe.viewport||w;Pe.setSize(ke.z,ke.w);let Ze=v.getRenderTarget();v.setRenderTarget(Pe),v.getClearColor(O),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),D&&Oe.render(re);let Je=v.toneMapping;v.toneMapping=tr;let lt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),m.setupLightsView(oe),z===!0&&pe.setGlobalState(v.clippingPlanes,oe),ss(L,re,oe),I.updateMultisampleRenderTarget(Pe),I.updateRenderTargetMipmap(Pe),j.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Qe=0,St=W.length;Qe<St;Qe++){let ct=W[Qe],xt=ct.object,In=ct.geometry,$e=ct.material,it=ct.group;if($e.side===Jn&&xt.layers.test(oe.layers)){let Ri=$e.side;$e.side=Tn,$e.needsUpdate=!0,Al(xt,re,oe,In,$e,it),$e.side=Ri,$e.needsUpdate=!0,ut=!0}}ut===!0&&(I.updateMultisampleRenderTarget(Pe),I.updateRenderTargetMipmap(Pe))}v.setRenderTarget(Ze),v.setClearColor(O,q),lt!==void 0&&(oe.viewport=lt),v.toneMapping=Je}function ss(L,W,re){let oe=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Pe=L.length;X<Pe;X++){let ke=L[X],Ze=ke.object,Je=ke.geometry,lt=oe===null?ke.material:oe,ut=ke.group;Ze.layers.test(re.layers)&&Al(Ze,W,re,Je,lt,ut)}}function Al(L,W,re,oe,X,Pe){L.onBeforeRender(v,W,re,oe,X,Pe),L.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),X.onBeforeRender(v,W,re,oe,L,Pe),X.transparent===!0&&X.side===Jn&&X.forceSinglePass===!1?(X.side=Tn,X.needsUpdate=!0,v.renderBufferDirect(re,W,oe,X,L,Pe),X.side=Di,X.needsUpdate=!0,v.renderBufferDirect(re,W,oe,X,L,Pe),X.side=Jn):v.renderBufferDirect(re,W,oe,X,L,Pe),L.onAfterRender(v,W,re,oe,X,Pe)}function qi(L,W,re){W.isScene!==!0&&(W=Ge);let oe=xe.get(L),X=m.state.lights,Pe=m.state.shadowsArray,ke=X.state.version,Ze=Me.getParameters(L,X.state,Pe,W,re),Je=Me.getProgramCacheKey(Ze),lt=oe.programs;oe.environment=L.isMeshStandardMaterial?W.environment:null,oe.fog=W.fog,oe.envMap=(L.isMeshStandardMaterial?G:S).get(L.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&L.envMap===null?W.environmentRotation:L.envMapRotation,lt===void 0&&(L.addEventListener("dispose",Le),lt=new Map,oe.programs=lt);let ut=lt.get(Je);if(ut!==void 0){if(oe.currentProgram===ut&&oe.lightsStateVersion===ke)return Rl(L,Ze),ut}else Ze.uniforms=Me.getUniforms(L),L.onBeforeCompile(Ze,v),ut=Me.acquireProgram(Ze,Je),lt.set(Je,ut),oe.uniforms=Ze.uniforms;let Qe=oe.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Qe.clippingPlanes=pe.uniform),Rl(L,Ze),oe.needsLights=Il(L),oe.lightsStateVersion=ke,oe.needsLights&&(Qe.ambientLightColor.value=X.state.ambient,Qe.lightProbe.value=X.state.probe,Qe.directionalLights.value=X.state.directional,Qe.directionalLightShadows.value=X.state.directionalShadow,Qe.spotLights.value=X.state.spot,Qe.spotLightShadows.value=X.state.spotShadow,Qe.rectAreaLights.value=X.state.rectArea,Qe.ltc_1.value=X.state.rectAreaLTC1,Qe.ltc_2.value=X.state.rectAreaLTC2,Qe.pointLights.value=X.state.point,Qe.pointLightShadows.value=X.state.pointShadow,Qe.hemisphereLights.value=X.state.hemi,Qe.directionalShadowMap.value=X.state.directionalShadowMap,Qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Qe.spotShadowMap.value=X.state.spotShadowMap,Qe.spotLightMatrix.value=X.state.spotLightMatrix,Qe.spotLightMap.value=X.state.spotLightMap,Qe.pointShadowMap.value=X.state.pointShadowMap,Qe.pointShadowMatrix.value=X.state.pointShadowMatrix),oe.currentProgram=ut,oe.uniformsList=null,ut}function uo(L){if(L.uniformsList===null){let W=L.currentProgram.getUniforms();L.uniformsList=Uo.seqWithValue(W.seq,L.uniforms)}return L.uniformsList}function Rl(L,W){let re=xe.get(L);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function Cl(L,W,re,oe,X){W.isScene!==!0&&(W=Ge),I.resetTextureUnits();let Pe=W.fog,ke=oe.isMeshStandardMaterial?W.environment:null,Ze=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:_n,Je=(oe.isMeshStandardMaterial?G:S).get(oe.envMap||ke),lt=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ut=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Qe=!!re.morphAttributes.position,St=!!re.morphAttributes.normal,ct=!!re.morphAttributes.color,xt=tr;oe.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xt=v.toneMapping);let In=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,$e=In!==void 0?In.length:0,it=xe.get(oe),Ri=m.state.lights;if(z===!0&&(ge===!0||L!==y)){let ri=L===y&&oe.id===x;pe.setState(oe,L,ri)}let Mt=!1;oe.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Ri.state.version||it.outputColorSpace!==Ze||X.isBatchedMesh&&it.batching===!1||!X.isBatchedMesh&&it.batching===!0||X.isBatchedMesh&&it.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&it.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&it.instancing===!1||!X.isInstancedMesh&&it.instancing===!0||X.isSkinnedMesh&&it.skinning===!1||!X.isSkinnedMesh&&it.skinning===!0||X.isInstancedMesh&&it.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&it.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&it.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&it.instancingMorph===!1&&X.morphTexture!==null||it.envMap!==Je||oe.fog===!0&&it.fog!==Pe||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==pe.numPlanes||it.numIntersection!==pe.numIntersection)||it.vertexAlphas!==lt||it.vertexTangents!==ut||it.morphTargets!==Qe||it.morphNormals!==St||it.morphColors!==ct||it.toneMapping!==xt||it.morphTargetsCount!==$e)&&(Mt=!0):(Mt=!0,it.__version=oe.version);let si=it.currentProgram;Mt===!0&&(si=qi(oe,W,X));let Ln=!1,Zn=!1,Xs=!1,Dt=si.getUniforms(),Ci=it.uniforms;if(ee.useProgram(si.program)&&(Ln=!0,Zn=!0,Xs=!0),oe.id!==x&&(x=oe.id,Zn=!0),Ln||y!==L){ee.buffers.depth.getReversed()?(ue.copy(L.projectionMatrix),Gx(ue),Wx(ue),Dt.setValue(C,"projectionMatrix",ue)):Dt.setValue(C,"projectionMatrix",L.projectionMatrix),Dt.setValue(C,"viewMatrix",L.matrixWorldInverse);let $n=Dt.map.cameraPosition;$n!==void 0&&$n.setValue(C,Ve.setFromMatrixPosition(L.matrixWorld)),ie.logarithmicDepthBuffer&&Dt.setValue(C,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Dt.setValue(C,"isOrthographic",L.isOrthographicCamera===!0),y!==L&&(y=L,Zn=!0,Xs=!0)}if(X.isSkinnedMesh){Dt.setOptional(C,X,"bindMatrix"),Dt.setOptional(C,X,"bindMatrixInverse");let ri=X.skeleton;ri&&(ri.boneTexture===null&&ri.computeBoneTexture(),Dt.setValue(C,"boneTexture",ri.boneTexture,I))}X.isBatchedMesh&&(Dt.setOptional(C,X,"batchingTexture"),Dt.setValue(C,"batchingTexture",X._matricesTexture,I),Dt.setOptional(C,X,"batchingIdTexture"),Dt.setValue(C,"batchingIdTexture",X._indirectTexture,I),Dt.setOptional(C,X,"batchingColorTexture"),X._colorsTexture!==null&&Dt.setValue(C,"batchingColorTexture",X._colorsTexture,I));let Pr=re.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0)&&Ne.update(X,re,si),(Zn||it.receiveShadow!==X.receiveShadow)&&(it.receiveShadow=X.receiveShadow,Dt.setValue(C,"receiveShadow",X.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Ci.envMap.value=Je,Ci.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&W.environment!==null&&(Ci.envMapIntensity.value=W.environmentIntensity),Zn&&(Dt.setValue(C,"toneMappingExposure",v.toneMappingExposure),it.needsLights&&Pl(Ci,Xs),Pe&&oe.fog===!0&&ve.refreshFogUniforms(Ci,Pe),ve.refreshMaterialUniforms(Ci,oe,Y,ae,m.state.transmissionRenderTarget[L.id]),Uo.upload(C,uo(it),Ci,I)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Uo.upload(C,uo(it),Ci,I),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Dt.setValue(C,"center",X.center),Dt.setValue(C,"modelViewMatrix",X.modelViewMatrix),Dt.setValue(C,"normalMatrix",X.normalMatrix),Dt.setValue(C,"modelMatrix",X.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){let ri=oe.uniformsGroups;for(let $n=0,sn=ri.length;$n<sn;$n++){let Ll=ri[$n];H.update(Ll,si),H.bind(Ll,si)}}return si}function Pl(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function Il(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,W,re){xe.get(L.texture).__webglTexture=W,xe.get(L.depthTexture).__webglTexture=re;let oe=xe.get(L);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=re===void 0,oe.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,W){let re=xe.get(L);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(L,W=0,re=0){A=L,T=W,R=re;let oe=!0,X=null,Pe=!1,ke=!1;if(L){let Je=xe.get(L);if(Je.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(C.FRAMEBUFFER,null),oe=!1;else if(Je.__webglFramebuffer===void 0)I.setupRenderTarget(L);else if(Je.__hasExternalTextures)I.rebindTextures(L,xe.get(L.texture).__webglTexture,xe.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Qe=L.depthTexture;if(Je.__boundDepthTexture!==Qe){if(Qe!==null&&xe.has(Qe)&&(L.width!==Qe.image.width||L.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(L)}}let lt=L.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(ke=!0);let ut=xe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ut[W])?X=ut[W][re]:X=ut[W],Pe=!0):L.samples>0&&I.useMultisampledRTT(L)===!1?X=xe.get(L).__webglMultisampledFramebuffer:Array.isArray(ut)?X=ut[re]:X=ut,w.copy(L.viewport),B.copy(L.scissor),F=L.scissorTest}else w.copy(Re).multiplyScalar(Y).floor(),B.copy(K).multiplyScalar(Y).floor(),F=tt;if(ee.bindFramebuffer(C.FRAMEBUFFER,X)&&oe&&ee.drawBuffers(L,X),ee.viewport(w),ee.scissor(B),ee.setScissorTest(F),Pe){let Je=xe.get(L.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+W,Je.__webglTexture,re)}else if(ke){let Je=xe.get(L.texture),lt=W||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Je.__webglTexture,re||0,lt)}x=-1},this.readRenderTargetPixels=function(L,W,re,oe,X,Pe,ke){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=xe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ke!==void 0&&(Ze=Ze[ke]),Ze){ee.bindFramebuffer(C.FRAMEBUFFER,Ze);try{let Je=L.texture,lt=Je.format,ut=Je.type;if(!ie.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-oe&&re>=0&&re<=L.height-X&&C.readPixels(W,re,oe,X,qe.convert(lt),qe.convert(ut),Pe)}finally{let Je=A!==null?xe.get(A).__webglFramebuffer:null;ee.bindFramebuffer(C.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(L,W,re,oe,X,Pe,ke){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=xe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ke!==void 0&&(Ze=Ze[ke]),Ze){let Je=L.texture,lt=Je.format,ut=Je.type;if(!ie.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=L.width-oe&&re>=0&&re<=L.height-X){ee.bindFramebuffer(C.FRAMEBUFFER,Ze);let Qe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.bufferData(C.PIXEL_PACK_BUFFER,Pe.byteLength,C.STREAM_READ),C.readPixels(W,re,oe,X,qe.convert(lt),qe.convert(ut),0);let St=A!==null?xe.get(A).__webglFramebuffer:null;ee.bindFramebuffer(C.FRAMEBUFFER,St);let ct=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Vx(C,ct,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Pe),C.deleteBuffer(Qe),C.deleteSync(ct),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,W=null,re=0){L.isTexture!==!0&&(Aa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,L=arguments[1]);let oe=Math.pow(2,-re),X=Math.floor(L.image.width*oe),Pe=Math.floor(L.image.height*oe),ke=W!==null?W.x:0,Ze=W!==null?W.y:0;I.setTexture2D(L,0),C.copyTexSubImage2D(C.TEXTURE_2D,re,0,0,ke,Ze,X,Pe),ee.unbindTexture()},this.copyTextureToTexture=function(L,W,re=null,oe=null,X=0){L.isTexture!==!0&&(Aa("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,L=arguments[1],W=arguments[2],X=arguments[3]||0,re=null);let Pe,ke,Ze,Je,lt,ut,Qe,St,ct,xt=L.isCompressedTexture?L.mipmaps[X]:L.image;re!==null?(Pe=re.max.x-re.min.x,ke=re.max.y-re.min.y,Ze=re.isBox3?re.max.z-re.min.z:1,Je=re.min.x,lt=re.min.y,ut=re.isBox3?re.min.z:0):(Pe=xt.width,ke=xt.height,Ze=xt.depth||1,Je=0,lt=0,ut=0),oe!==null?(Qe=oe.x,St=oe.y,ct=oe.z):(Qe=0,St=0,ct=0);let In=qe.convert(W.format),$e=qe.convert(W.type),it;W.isData3DTexture?(I.setTexture3D(W,0),it=C.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(I.setTexture2DArray(W,0),it=C.TEXTURE_2D_ARRAY):(I.setTexture2D(W,0),it=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,W.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,W.unpackAlignment);let Ri=C.getParameter(C.UNPACK_ROW_LENGTH),Mt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),si=C.getParameter(C.UNPACK_SKIP_PIXELS),Ln=C.getParameter(C.UNPACK_SKIP_ROWS),Zn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,xt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Je),C.pixelStorei(C.UNPACK_SKIP_ROWS,lt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ut);let Xs=L.isDataArrayTexture||L.isData3DTexture,Dt=W.isDataArrayTexture||W.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){let Ci=xe.get(L),Pr=xe.get(W),ri=xe.get(Ci.__renderTarget),$n=xe.get(Pr.__renderTarget);ee.bindFramebuffer(C.READ_FRAMEBUFFER,ri.__webglFramebuffer),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let sn=0;sn<Ze;sn++)Xs&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xe.get(L).__webglTexture,X,ut+sn),L.isDepthTexture?(Dt&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xe.get(W).__webglTexture,X,ct+sn),C.blitFramebuffer(Je,lt,Pe,ke,Qe,St,Pe,ke,C.DEPTH_BUFFER_BIT,C.NEAREST)):Dt?C.copyTexSubImage3D(it,X,Qe,St,ct+sn,Je,lt,Pe,ke):C.copyTexSubImage2D(it,X,Qe,St,ct+sn,Je,lt,Pe,ke);ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Dt?L.isDataTexture||L.isData3DTexture?C.texSubImage3D(it,X,Qe,St,ct,Pe,ke,Ze,In,$e,xt.data):W.isCompressedArrayTexture?C.compressedTexSubImage3D(it,X,Qe,St,ct,Pe,ke,Ze,In,xt.data):C.texSubImage3D(it,X,Qe,St,ct,Pe,ke,Ze,In,$e,xt):L.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,X,Qe,St,Pe,ke,In,$e,xt.data):L.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,X,Qe,St,xt.width,xt.height,In,xt.data):C.texSubImage2D(C.TEXTURE_2D,X,Qe,St,Pe,ke,In,$e,xt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ri),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Mt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,si),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ln),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Zn),X===0&&W.generateMipmaps&&C.generateMipmap(it),ee.unbindTexture()},this.copyTextureToTexture3D=function(L,W,re=null,oe=null,X=0){return L.isTexture!==!0&&(Aa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,oe=arguments[1]||null,L=arguments[2],W=arguments[3],X=arguments[4]||0),Aa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,W,re,oe,X)},this.initRenderTarget=function(L){xe.get(L).__webglFramebuffer===void 0&&I.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?I.setTextureCube(L,0):L.isData3DTexture?I.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?I.setTexture2DArray(L,0):I.setTexture2D(L,0),ee.unbindTexture()},this.resetState=function(){T=0,R=0,A=null,ee.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ps}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var ar=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ga=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uf,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Kn=new U,Wa=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix4(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyNormalMatrix(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.transformDirection(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var sm=new U,rm=new Et,om=new Et,zb=new U,am=new Ke,rc=new U,yu=new xi,lm=new Ke,Mu=new Hr,Rc=class extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=a0,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rc),this.boundingBox.expandByPoint(rc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rc),this.boundingSphere.expandByPoint(rc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yu.copy(this.boundingSphere),yu.applyMatrix4(i),e.ray.intersectsSphere(yu)!==!1&&(lm.copy(i).invert(),Mu.copy(e.ray).applyMatrix4(lm),!(this.boundingBox!==null&&Mu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===a0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;rm.fromBufferAttribute(i.attributes.skinIndex,e),om.fromBufferAttribute(i.attributes.skinWeight,e),sm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=om.getComponent(r);if(o!==0){let a=rm.getComponent(r);am.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(zb.copy(sm).applyMatrix4(am),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Xa=class extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Qi=class extends An{constructor(e=null,t=1,n=1,i,r,o,a,l,c=yn,h=yn,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cm=new Ke,Hb=new Ke,Cc=class s{constructor(e=[],t=[]){this.uuid=Li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Hb;cm.multiplyMatrices(a,t[r]),cm.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Qi(t,e,e,Vn,Un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Xa),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Vr=class extends zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ao=new Ke,hm=new Ke,oc=[],um=new on,Vb=new Ke,Sa=new Ie,Ea=new xi,ls=class extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Vb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ao),um.copy(e.boundingBox).applyMatrix4(Ao),this.boundingBox.union(um)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ao),Ea.copy(e.boundingSphere).applyMatrix4(Ao),this.boundingSphere.union(Ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(n),e.ray.intersectsSphere(Ea)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ao),hm.multiplyMatrices(n,Ao),Sa.matrixWorld=hm,Sa.raycast(e,oc);for(let o=0,a=oc.length;o<a;o++){let l=oc[o];l.instanceId=r,l.object=this,t.push(l)}oc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qi(new Float32Array(i*this.count),i,this.count,nd,Un));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qa=class extends Gn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Pc=new U,Ic=new U,fm=new Ke,wa=new Hr,ac=new xi,bu=new U,dm=new U,Wo=class extends Xt{constructor(e=new Ht,t=new qa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Pc.fromBufferAttribute(t,i-1),Ic.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Pc.distanceTo(Ic);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(i),ac.radius+=r,e.ray.intersectsSphere(ac)===!1)return;fm.copy(i).invert(),wa.copy(e.ray).applyMatrix4(fm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){let m=h.getX(_),b=h.getX(_+1),M=lc(this,e,wa,l,m,b);M&&t.push(M)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(d),m=lc(this,e,wa,l,_,p);m&&t.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){let m=lc(this,e,wa,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){let _=lc(this,e,wa,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lc(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(Pc.fromBufferAttribute(o,i),Ic.fromBufferAttribute(o,r),t.distanceSqToSegment(Pc,Ic,bu,dm)>n)return;bu.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(bu);if(!(l<e.near||l>e.far))return{distance:l,point:dm.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var pm=new U,mm=new U,Lc=class extends Wo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)pm.fromBufferAttribute(t,i),mm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pm.distanceTo(mm);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Dc=class extends Wo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ya=class extends Gn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gm=new Ke,Tf=new Hr,cc=new xi,hc=new U,Gr=class extends Xt{constructor(e=new Ht,t=new Ya){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(i),cc.radius+=r,e.ray.intersectsSphere(cc)===!1)return;gm.copy(i).invert(),Tf.copy(e.ray).applyMatrix4(gm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let p=c.getX(g);hc.fromBufferAttribute(u,p),_m(hc,p,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)hc.fromBufferAttribute(u,g),_m(hc,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _m(s,e,t,n,i,r,o){let a=Tf.distanceSqToPoint(s);if(a<t){let l=new U;Tf.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var lr=class extends An{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new _e:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new U,i=[],r=[],o=[],a=new U,l=new Ke;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(gn(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(gn(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Za=class extends Ui{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new _e){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Af=class extends Za{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cd(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var uc=new U,Su=new cd,Eu=new cd,wu=new cd,Rf=class extends Ui{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(uc.subVectors(i[0],i[1]).add(i[0]),c=uc);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(uc.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=uc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Su.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,p),Eu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,p),wu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Su.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Eu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),wu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Su.calc(l),Eu.calc(l),wu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xm(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Gb(s,e){let t=1-s;return t*t*e}function Wb(s,e){return 2*(1-s)*s*e}function Xb(s,e){return s*s*e}function Da(s,e,t,n){return Gb(s,e)+Wb(s,t)+Xb(s,n)}function qb(s,e){let t=1-s;return t*t*t*e}function Yb(s,e){let t=1-s;return 3*t*t*s*e}function Zb(s,e){return 3*(1-s)*s*s*e}function $b(s,e){return s*s*s*e}function Ua(s,e,t,n,i){return qb(s,e)+Yb(s,t)+Zb(s,n)+$b(s,i)}var Uc=class extends Ui{constructor(e=new _e,t=new _e,n=new _e,i=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _e){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ua(e,i.x,r.x,o.x,a.x),Ua(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cf=class extends Ui{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ua(e,i.x,r.x,o.x,a.x),Ua(e,i.y,r.y,o.y,a.y),Ua(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nc=class extends Ui{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pf=class extends Ui{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oc=class extends Ui{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Da(e,i.x,r.x,o.x),Da(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},If=class extends Ui{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Da(e,i.x,r.x,o.x),Da(e,i.y,r.y,o.y),Da(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fc=class extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(xm(a,l.x,c.x,h.x,u.x),xm(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new _e().fromArray(i))}return this}},Lf=Object.freeze({__proto__:null,ArcCurve:Af,CatmullRomCurve3:Rf,CubicBezierCurve:Uc,CubicBezierCurve3:Cf,EllipseCurve:Za,LineCurve:Nc,LineCurve3:Pf,QuadraticBezierCurve:Oc,QuadraticBezierCurve3:If,SplineCurve:Fc}),Df=class extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lf[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Lf[i.type]().fromJSON(i))}return this}},Wr=class extends Df{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Nc(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Oc(this.currentPoint.clone(),new _e(e,t),new _e(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Uc(this.currentPoint.clone(),new _e(e,t),new _e(n,i),new _e(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Fc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Za(e,t,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Bc=class s extends Ht{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=gn(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new U,f=new _e,d=new U,g=new U,_=new U,p=0,m=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:p=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,d.x=m*1,d.y=-p,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:p=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let b=0;b<=t;b++){let M=n+b*h*i,v=Math.sin(M),P=Math.cos(M);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*v,u.y=e[T].y,u.z=e[T].x*P,o.push(u.x,u.y,u.z),f.x=b/t,f.y=T/(e.length-1),a.push(f.x,f.y);let R=l[3*T+0]*v,A=l[3*T+1],x=l[3*T+0]*P;c.push(R,A,x)}}for(let b=0;b<t;b++)for(let M=0;M<e.length-1;M++){let v=M+b*e.length,P=v,T=v+e.length,R=v+e.length+1,A=v+1;r.push(P,T,A),r.push(R,A,T)}this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("uv",new _t(a,2)),this.setAttribute("normal",new _t(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Xr=class s extends Ht{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,h=new _e;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},fn=class s extends Ht{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],p=n/2,m=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(d,2));function b(){let v=new U,P=new U,T=0,R=(t-e)/n;for(let A=0;A<=r;A++){let x=[],y=A/r,w=y*(t-e)+e;for(let B=0;B<=i;B++){let F=B/i,O=F*l+a,q=Math.sin(O),k=Math.cos(O);P.x=w*q,P.y=-y*n+p,P.z=w*k,u.push(P.x,P.y,P.z),v.set(q,R,k).normalize(),f.push(v.x,v.y,v.z),d.push(F,1-y),x.push(g++)}_.push(x)}for(let A=0;A<i;A++)for(let x=0;x<r;x++){let y=_[x][A],w=_[x+1][A],B=_[x+1][A+1],F=_[x][A+1];(e>0||x!==0)&&(h.push(y,w,F),T+=3),(t>0||x!==r-1)&&(h.push(w,B,F),T+=3)}c.addGroup(m,T,0),m+=T}function M(v){let P=g,T=new _e,R=new U,A=0,x=v===!0?e:t,y=v===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,p*y,0),f.push(0,y,0),d.push(.5,.5),g++;let w=g;for(let B=0;B<=i;B++){let O=B/i*l+a,q=Math.cos(O),k=Math.sin(O);R.x=x*k,R.y=p*y,R.z=x*q,u.push(R.x,R.y,R.z),f.push(0,y,0),T.x=q*.5+.5,T.y=k*.5*y+.5,d.push(T.x,T.y),g++}for(let B=0;B<i;B++){let F=P+B,O=w+B;v===!0?h.push(O,O+1,F):h.push(O+1,O,F),A+=3}c.addGroup(m,A,v===!0?1:2),m+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qr=class s extends fn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var cs=class extends Wr{constructor(e){super(e),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Wr().fromJSON(i))}return this}},Kb={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=jm(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=tS(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)u=s[g],f=s[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return $a(r,o,t,a,l,d,0),o}};function jm(s,e,t,n,i){let r,o;if(i===fS(s,e,t,n)>0)for(r=e;r<t;r+=n)o=vm(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=vm(r,s[r],s[r+1],o);return o&&Jc(o,o.next)&&(ja(o),o=o.next),o}function Yr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Jc(t,t.next)||en(t.prev,t,t.next)===0)){if(ja(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $a(s,e,t,n,i,r,o){if(!s)return;!o&&r&&oS(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Jb(s,n,i,r):jb(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),ja(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Qb(Yr(s),e,t),$a(s,e,t,n,i,r,2)):o===2&&eS(s,e,t,n,i,r):$a(Yr(s),e,t,n,i,r,1);break}}}function jb(s){let e=s.prev,t=s,n=s.next;if(en(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Po(i,a,r,l,o,c,g.x,g.y)&&en(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jb(s,e,t,n){let i=s.prev,r=s,o=s.next;if(en(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=Uf(d,g,e,t,n),b=Uf(_,p,e,t,n),M=s.prevZ,v=s.nextZ;for(;M&&M.z>=m&&v&&v.z<=b;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&Po(a,h,l,u,c,f,M.x,M.y)&&en(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Po(a,h,l,u,c,f,v.x,v.y)&&en(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&Po(a,h,l,u,c,f,M.x,M.y)&&en(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=b;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Po(a,h,l,u,c,f,v.x,v.y)&&en(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Qb(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Jc(i,r)&&Jm(i,n,n.next,r)&&Ka(i,r)&&Ka(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ja(n),ja(n.next),n=s=r),n=n.next}while(n!==s);return Yr(n)}function eS(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cS(o,a)){let l=Qm(o,a);o=Yr(o,o.next),l=Yr(l,l.next),$a(o,e,t,n,i,r,0),$a(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function tS(s,e,t,n){let i=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=jm(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(lS(c));for(i.sort(nS),r=0;r<i.length;r++)t=iS(i[r],t);return t}function nS(s,e){return s.x-e.x}function iS(s,e){let t=sS(s,e);if(!t)return e;let n=Qm(t,s);return Yr(n,n.next),Yr(t,t.next)}function sS(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Po(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Ka(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&rS(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function rS(s,e){return en(s.prev,s,e.prev)<0&&en(e.next,s,s.next)<0}function oS(s,e,t,n){let i=s;do i.z===0&&(i.z=Uf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,aS(i)}function aS(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Uf(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function lS(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Po(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function cS(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!hS(s,e)&&(Ka(s,e)&&Ka(e,s)&&uS(s,e)&&(en(s.prev,s,e.prev)||en(s,e.prev,e))||Jc(s,e)&&en(s.prev,s,s.next)>0&&en(e.prev,e,e.next)>0)}function en(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Jc(s,e){return s.x===e.x&&s.y===e.y}function Jm(s,e,t,n){let i=dc(en(s,e,t)),r=dc(en(s,e,n)),o=dc(en(t,n,s)),a=dc(en(t,n,e));return!!(i!==r&&o!==a||i===0&&fc(s,t,e)||r===0&&fc(s,n,e)||o===0&&fc(t,s,n)||a===0&&fc(t,e,n))}function fc(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function dc(s){return s>0?1:s<0?-1:0}function hS(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Jm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ka(s,e){return en(s.prev,s,s.next)<0?en(s,e,s.next)>=0&&en(s,s.prev,e)>=0:en(s,e,s.prev)<0||en(s,s.next,e)<0}function uS(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Qm(s,e){let t=new Nf(s.i,s.x,s.y),n=new Nf(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vm(s,e,t,n){let i=new Nf(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ja(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Nf(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fS(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var nr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];ym(e),Mm(n,e);let o=e.length;t.forEach(ym);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Mm(n,t[l]);let a=Kb.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ym(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Mm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Ni=class s extends Ht{constructor(e=new cs([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new _t(i,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:dS,M,v=!1,P,T,R,A;m&&(M=m.getSpacedPoints(h),v=!0,f=!1,P=m.computeFrenetFrames(h,!1),T=new U,R=new U,A=new U),f||(p=0,d=0,g=0,_=0);let x=a.extractPoints(c),y=x.shape,w=x.holes;if(!nr.isClockWise(y)){y=y.reverse();for(let D=0,V=w.length;D<V;D++){let C=w[D];nr.isClockWise(C)&&(w[D]=C.reverse())}}let F=nr.triangulateShape(y,w),O=y;for(let D=0,V=w.length;D<V;D++){let C=w[D];y=y.concat(C)}function q(D,V,C){return V||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(V,C)}let k=y.length,ae=F.length;function Y(D,V,C){let $,j,ie,ee=D.x-V.x,ne=D.y-V.y,xe=C.x-D.x,I=C.y-D.y,S=ee*ee+ne*ne,G=ee*I-ne*xe;if(Math.abs(G)>Number.EPSILON){let J=Math.sqrt(S),se=Math.sqrt(xe*xe+I*I),te=V.x-ne/J,Me=V.y+ee/J,ve=C.x-I/se,Ce=C.y+xe/se,Xe=((ve-te)*I-(Ce-Me)*xe)/(ee*I-ne*xe);$=te+ee*Xe-D.x,j=Me+ne*Xe-D.y;let pe=$*$+j*j;if(pe<=2)return new _e($,j);ie=Math.sqrt(pe/2)}else{let J=!1;ee>Number.EPSILON?xe>Number.EPSILON&&(J=!0):ee<-Number.EPSILON?xe<-Number.EPSILON&&(J=!0):Math.sign(ne)===Math.sign(I)&&(J=!0),J?($=-ne,j=ee,ie=Math.sqrt(S)):($=ee,j=ne,ie=Math.sqrt(S/2))}return new _e($/ie,j/ie)}let he=[];for(let D=0,V=O.length,C=V-1,$=D+1;D<V;D++,C++,$++)C===V&&(C=0),$===V&&($=0),he[D]=Y(O[D],O[C],O[$]);let Se=[],Re,K=he.concat();for(let D=0,V=w.length;D<V;D++){let C=w[D];Re=[];for(let $=0,j=C.length,ie=j-1,ee=$+1;$<j;$++,ie++,ee++)ie===j&&(ie=0),ee===j&&(ee=0),Re[$]=Y(C[$],C[ie],C[ee]);Se.push(Re),K=K.concat(Re)}for(let D=0;D<p;D++){let V=D/p,C=d*Math.cos(V*Math.PI/2),$=g*Math.sin(V*Math.PI/2)+_;for(let j=0,ie=O.length;j<ie;j++){let ee=q(O[j],he[j],$);ue(ee.x,ee.y,-C)}for(let j=0,ie=w.length;j<ie;j++){let ee=w[j];Re=Se[j];for(let ne=0,xe=ee.length;ne<xe;ne++){let I=q(ee[ne],Re[ne],$);ue(I.x,I.y,-C)}}}let tt=g+_;for(let D=0;D<k;D++){let V=f?q(y[D],K[D],tt):y[D];v?(R.copy(P.normals[0]).multiplyScalar(V.x),T.copy(P.binormals[0]).multiplyScalar(V.y),A.copy(M[0]).add(R).add(T),ue(A.x,A.y,A.z)):ue(V.x,V.y,0)}for(let D=1;D<=h;D++)for(let V=0;V<k;V++){let C=f?q(y[V],K[V],tt):y[V];v?(R.copy(P.normals[D]).multiplyScalar(C.x),T.copy(P.binormals[D]).multiplyScalar(C.y),A.copy(M[D]).add(R).add(T),ue(A.x,A.y,A.z)):ue(C.x,C.y,u/h*D)}for(let D=p-1;D>=0;D--){let V=D/p,C=d*Math.cos(V*Math.PI/2),$=g*Math.sin(V*Math.PI/2)+_;for(let j=0,ie=O.length;j<ie;j++){let ee=q(O[j],he[j],$);ue(ee.x,ee.y,u+C)}for(let j=0,ie=w.length;j<ie;j++){let ee=w[j];Re=Se[j];for(let ne=0,xe=ee.length;ne<xe;ne++){let I=q(ee[ne],Re[ne],$);v?ue(I.x,I.y+M[h-1].y,M[h-1].x+C):ue(I.x,I.y,u+C)}}}le(),z();function le(){let D=i.length/3;if(f){let V=0,C=k*V;for(let $=0;$<ae;$++){let j=F[$];be(j[2]+C,j[1]+C,j[0]+C)}V=h+p*2,C=k*V;for(let $=0;$<ae;$++){let j=F[$];be(j[0]+C,j[1]+C,j[2]+C)}}else{for(let V=0;V<ae;V++){let C=F[V];be(C[2],C[1],C[0])}for(let V=0;V<ae;V++){let C=F[V];be(C[0]+k*h,C[1]+k*h,C[2]+k*h)}}n.addGroup(D,i.length/3-D,0)}function z(){let D=i.length/3,V=0;ge(O,V),V+=O.length;for(let C=0,$=w.length;C<$;C++){let j=w[C];ge(j,V),V+=j.length}n.addGroup(D,i.length/3-D,1)}function ge(D,V){let C=D.length;for(;--C>=0;){let $=C,j=C-1;j<0&&(j=D.length-1);for(let ie=0,ee=h+p*2;ie<ee;ie++){let ne=k*ie,xe=k*(ie+1),I=V+$+ne,S=V+j+ne,G=V+j+xe,J=V+$+xe;Ve(I,S,G,J)}}}function ue(D,V,C){l.push(D),l.push(V),l.push(C)}function be(D,V,C){Ae(D),Ae(V),Ae(C);let $=i.length/3,j=b.generateTopUV(n,i,$-3,$-2,$-1);Ge(j[0]),Ge(j[1]),Ge(j[2])}function Ve(D,V,C,$){Ae(D),Ae(V),Ae($),Ae(V),Ae(C),Ae($);let j=i.length/3,ie=b.generateSideWallUV(n,i,j-6,j-3,j-2,j-1);Ge(ie[0]),Ge(ie[1]),Ge(ie[3]),Ge(ie[1]),Ge(ie[2]),Ge(ie[3])}function Ae(D){i.push(l[D*3+0]),i.push(l[D*3+1]),i.push(l[D*3+2])}function Ge(D){r.push(D.x),r.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return pS(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Lf[i.type]().fromJSON(i)),new s(n,e.options)}},dS={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new _e(r,o),new _e(a,l),new _e(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],_=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-u),new _e(f,1-g),new _e(_,1-m)]:[new _e(a,1-l),new _e(h,1-u),new _e(d,1-g),new _e(p,1-m)]}};function pS(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var kc=class s extends Ht{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/i,d=new U,g=new _e;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){let m=r+p/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){let p=_*(n+1);for(let m=0;m<n;m++){let b=m+p,M=b,v=b+n+1,P=b+n+2,T=b+1;a.push(M,v,T),a.push(v,P,T)}}this.setIndex(a),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},hs=class s extends Ht{constructor(e=new cs([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new _t(i,3)),this.setAttribute("normal",new _t(r,3)),this.setAttribute("uv",new _t(o,2));function c(h){let u=i.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;nr.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let b=g[p];nr.isClockWise(b)===!0&&(g[p]=b.reverse())}let _=nr.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let b=g[p];d=d.concat(b)}for(let p=0,m=d.length;p<m;p++){let b=d[p];i.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let p=0,m=_.length;p<m;p++){let b=_[p],M=b[0]+u,v=b[1]+u,P=b[2]+u;n.push(M,v,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return mS(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function mS(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var cr=class s extends Ht{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,f=new U,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let b=[],M=m/n,v=0;m===0&&o===0?v=.5/t:m===n&&l===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){let T=P/t;u.x=-e*Math.cos(i+T*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+T*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(T+v,1-M),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){let M=h[m][b+1],v=h[m][b],P=h[m+1][b],T=h[m+1][b+1];(m!==0||o>0)&&d.push(M,v,T),(m!==n-1||l<Math.PI)&&d.push(v,P,T)}this.setIndex(d),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ls=class s extends Ht{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new U,u=new U,f=new U;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let _=g/i*r,p=d/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let _=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,b=(i+1)*d+g;o.push(_,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var nt=class extends Gn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},at=class extends nt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var zc=class extends Gn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function pc(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function gS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function _S(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bm(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function eg(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var hr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Of=class extends hr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:l0,endingEnd:l0}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case c0:r=e,a=2*t-n;break;case h0:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case c0:o=e,l=2*n-t;break;case h0:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,b=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,M=(-1-d)*p+(1.5+d)*_+.5*g,v=d*p-d*_;for(let P=0;P!==a;++P)r[P]=m*o[h+P]+b*o[c+P]+M*o[l+P]+v*o[u+P];return r}},Ff=class extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Bf=class extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Oi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pc(t,this.TimeBufferType),this.values=pc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pc(e.times,Array),values:pc(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ff(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Of(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bo:t=this.InterpolantFactoryMethodDiscrete;break;case ko:t=this.InterpolantFactoryMethodLinear;break;case Yh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return ko;case this.InterpolantFactoryMethodSmooth:return Yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&gS(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Oi.prototype.TimeBufferType=Float32Array;Oi.prototype.ValueBufferType=Float32Array;Oi.prototype.DefaultInterpolation=ko;var ur=class extends Oi{constructor(e,t,n){super(e,t,n)}};ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Bo;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends Oi{};Hc.prototype.ValueTypeName="color";var Ds=class extends Oi{};Ds.prototype.ValueTypeName="number";var kf=class extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)ei.slerpFlat(r,0,o,c-a,o,c,l);return r}},Us=class extends Oi{InterpolantFactoryMethodLinear(e){return new kf(this.times,this.values,this.getValueSize(),e)}};Us.prototype.ValueTypeName="quaternion";Us.prototype.InterpolantFactoryMethodSmooth=void 0;var fr=class extends Oi{constructor(e,t,n){super(e,t,n)}};fr.prototype.ValueTypeName="string";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=Bo;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ns=class extends Oi{};Ns.prototype.ValueTypeName="vector";var Vc=class{constructor(e="",t=-1,n=[],i=px){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Li(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(vS(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Oi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=_S(l);l=bm(l,1,h),c=bm(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ds(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,_){if(d.length!==0){let p=[],m=[];eg(d,p,m,g),p.length!==0&&_.push(new u(f,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(let _ in d){let p=[],m=[];for(let b=0;b!==f[g].morphTargets.length;++b){let M=f[g];p.push(M.time),m.push(M.morphTarget===_?1:0)}i.push(new Ds(".morphTargetInfluence["+_+"]",p,m))}l=d.length*o}else{let d=".bones["+t[u].name+"]";n(Ns,d+".position",f,"pos",i),n(Us,d+".quaternion",f,"rot",i),n(Ns,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function xS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return Ns;case"color":return Hc;case"quaternion":return Us;case"bool":case"boolean":return ur;case"string":return fr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function vS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=xS(s.type);if(s.times===void 0){let t=[],n=[];eg(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var er={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},zf=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},tg=new zf,us=class{constructor(e){this.manager=e!==void 0?e:tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};us.DEFAULT_MATERIAL_NAME="__DEFAULT";var As={},Hf=class extends Error{constructor(e,t){super(e),this.response=t}},Xo=class extends us{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=er.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(As[e]!==void 0){As[e].push({onLoad:t,onProgress:n,onError:i});return}As[e]=[],As[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=As[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,_=0,p=new ReadableStream({start(m){b();function b(){u.read().then(({done:M,value:v})=>{if(M)m.close();else{_+=v.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let T=0,R=h.length;T<R;T++){let A=h[T];A.onProgress&&A.onProgress(P)}m.enqueue(v),b()}},M=>{m.error(M)})}}});return new Response(p)}else throw new Hf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{er.add(e,c);let h=As[e];delete As[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=As[e];if(h===void 0)throw this.manager.itemError(e),c;delete As[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Vf=class extends us{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=er.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Ba("img");function l(){h(),er.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Gc=class extends us{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new Qi,a=new Xo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:ji,o.wrapT=c.wrapT!==void 0?c.wrapT:ji,o.magFilter=c.magFilter!==void 0?c.magFilter:rn,o.minFilter=c.minFilter!==void 0?c.minFilter:rn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Qn),c.mipmapCount===1&&(o.minFilter=rn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}},qo=class extends us{constructor(e){super(e)}load(e,t,n,i){let r=new An,o=new Vf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Yo=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Zo=class extends Yo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tu=new Ke,Sm=new U,Em=new U,Ja=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Va,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Sm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sm),Em.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Em),t.updateMatrixWorld(),Tu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gf=class extends Ja{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=zo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},vi=class extends Yo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Gf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},wm=new Ke,Ta=new U,Au=new U,Wf=class extends Ja{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ta),Au.copy(n.position),Au.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Au),n.updateMatrixWorld(),i.makeTranslation(-Ta.x,-Ta.y,-Ta.z),wm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wm)}},Os=class extends Yo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Xf=class extends Ja{constructor(){super(new or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zr=class extends Yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Xf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var dr=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Wc=class extends us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=er.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return er.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),er.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});er.add(e,l),r.manager.itemStart(e)}};var $o=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Tm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Tm(){return performance.now()}var hd="\\[\\]\\.:\\/",yS=new RegExp("["+hd+"]","g"),ud="[^"+hd+"]",MS="[^"+hd.replace("\\.","")+"]",bS=/((?:WC+[\/:])*)/.source.replace("WC",ud),SS=/(WCOD+)?/.source.replace("WCOD",MS),ES=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ud),wS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ud),TS=new RegExp("^"+bS+SS+ES+wS+"$"),AS=["material","materials","bones","map"],qf=class{constructor(e,t,n){let i=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yS,"")}static parseTrackName(e){let t=TS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);AS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=qf;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zw=new Float32Array(1);var Am=new Ke,Qa=class{constructor(e,t,n=0,i=1/0){this.ray=new Hr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Am.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Am),this}intersectObject(e,t=!0,n=[]){return Yf(e,this,n,t),n.sort(Rm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Yf(e[i],this,n,t);return n.sort(Rm),n}};function Rm(s,e){return s.distance-e.distance}function Yf(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Yf(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);var eh=class extends Gc{constructor(e){super(e),this.type=Kt}parse(e){let o=function(A,x){switch(A){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},h=`
`,u=function(A,x,y){x=x||1024;let B=A.pos,F=-1,O=0,q="",k=String.fromCharCode.apply(null,new Uint16Array(A.subarray(B,B+128)));for(;0>(F=k.indexOf(h))&&O<x&&B<A.byteLength;)q+=k,O+=k.length,B+=128,k+=String.fromCharCode.apply(null,new Uint16Array(A.subarray(B,B+128)));return-1<F?(y!==!1&&(A.pos+=O+F+1),q+k.slice(0,F)):!1},f=function(A){let x=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,O={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},q,k;for((A.pos>=A.byteLength||!(q=u(A)))&&o(1,"no header found"),(k=q.match(x))||o(3,"bad initial token"),O.valid|=1,O.programtype=k[1],O.string+=q+`
`;q=u(A),q!==!1;){if(O.string+=q+`
`,q.charAt(0)==="#"){O.comments+=q+`
`;continue}if((k=q.match(y))&&(O.gamma=parseFloat(k[1])),(k=q.match(w))&&(O.exposure=parseFloat(k[1])),(k=q.match(B))&&(O.valid|=2,O.format=k[1]),(k=q.match(F))&&(O.valid|=4,O.height=parseInt(k[1],10),O.width=parseInt(k[2],10)),O.valid&2&&O.valid&4)break}return O.valid&2||o(3,"missing format specifier"),O.valid&4||o(3,"missing image size specifier"),O},d=function(A,x,y){let w=x;if(w<8||w>32767||A[0]!==2||A[1]!==2||A[2]&128)return new Uint8Array(A);w!==(A[2]<<8|A[3])&&o(3,"wrong scanline width");let B=new Uint8Array(4*x*y);B.length||o(4,"unable to allocate buffer space");let F=0,O=0,q=4*w,k=new Uint8Array(4),ae=new Uint8Array(q),Y=y;for(;Y>0&&O<A.byteLength;){O+4>A.byteLength&&o(1),k[0]=A[O++],k[1]=A[O++],k[2]=A[O++],k[3]=A[O++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=w)&&o(3,"bad rgbe scanline format");let he=0,Se;for(;he<q&&O<A.byteLength;){Se=A[O++];let K=Se>128;if(K&&(Se-=128),(Se===0||he+Se>q)&&o(3,"bad scanline data"),K){let tt=A[O++];for(let le=0;le<Se;le++)ae[he++]=tt}else ae.set(A.subarray(O,O+Se),he),he+=Se,O+=Se}let Re=w;for(let K=0;K<Re;K++){let tt=0;B[F]=ae[K+tt],tt+=w,B[F+1]=ae[K+tt],tt+=w,B[F+2]=ae[K+tt],tt+=w,B[F+3]=ae[K+tt],F+=4}Y--}return B},g=function(A,x,y,w){let B=A[x+3],F=Math.pow(2,B-128)/255;y[w+0]=A[x+0]*F,y[w+1]=A[x+1]*F,y[w+2]=A[x+2]*F,y[w+3]=1},_=function(A,x,y,w){let B=A[x+3],F=Math.pow(2,B-128)/255;y[w+0]=tl.toHalfFloat(Math.min(A[x+0]*F,65504)),y[w+1]=tl.toHalfFloat(Math.min(A[x+1]*F,65504)),y[w+2]=tl.toHalfFloat(Math.min(A[x+2]*F,65504)),y[w+3]=tl.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;let m=f(p),b=m.width,M=m.height,v=d(p.subarray(p.pos),b,M),P,T,R;switch(this.type){case Un:R=v.length/4;let A=new Float32Array(R*4);for(let y=0;y<R;y++)g(v,y*4,A,y*4);P=A,T=Un;break;case Kt:R=v.length/4;let x=new Uint16Array(R*4);for(let y=0;y<R;y++)_(v,y*4,x,y*4);P=x,T=Kt;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:b,height:M,data:P,header:m.string,gamma:m.gamma,exposure:m.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case Un:case Kt:o.colorSpace=_n,o.minFilter=rn,o.magFilter=rn,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}};function th(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ht,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=ng(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let g=ng(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ng(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new zt(o,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){let _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function fd(s,e){if(e===Hm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===el||e===Zc){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===el)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var nh=class extends us{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new Dd(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=dr.extractUrlBase(e);o=dr.resolveURL(c,this.path)}else o=dr.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Xo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ag){try{o[vt.KHR_BINARY_GLTF]=new Ud(e)}catch(u){i&&i(u);return}r=JSON.parse(o[vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Hd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case vt.KHR_MATERIALS_UNLIT:o[u]=new _d;break;case vt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Nd(r,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:o[u]=new Od;break;case vt.KHR_MESH_QUANTIZATION:o[u]=new Fd;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function RS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},gd=class{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Te(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],_n);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Os(h),c.distance=u;break;case"spot":c=new vi(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Fs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},_d=class{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return At}extendParams(e,t,n){let i=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],_n),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Zt))}return Promise.all(i)}},xd=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},vd=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:at}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(a,a)}return Promise.all(r)}},yd=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:at}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Md=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:at}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},bd=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:at}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],_n)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Zt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Sd=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:at}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Ed=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:at}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],_n),Promise.all(r)}},wd=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:at}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Td=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:at}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],_n),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Zt)),Promise.all(r)}},Ad=class{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:at}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Rd=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:at}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Cd=class{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Pd=class{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Id=class{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ld=class{constructor(e){this.name=vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Dd=class{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Fi.TRIANGLES&&c.mode!==Fi.TRIANGLE_STRIP&&c.mode!==Fi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let g of u){let _=new Ke,p=new U,m=new ei,b=new U(1,1,1),M=new ls(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&b.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,_.compose(p,m,b));for(let v in l)if(v==="_COLOR_0"){let P=l[v];M.instanceColor=new Vr(P.array,P.itemSize,P.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);Xt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},ag="glTF",nl=12,ig={JSON:1313821514,BIN:5130562},Ud=class{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,nl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ag)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-nl,r=new DataView(e,nl),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===ig.JSON){let c=new Uint8Array(e,nl+o,a);this.content=n.decode(c)}else if(l===ig.BIN){let c=nl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Nd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=kd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=kd[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Jo[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let _=d.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}u(d)},a,c,_n,f)})})}},Od=class{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Fd=class{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}},ih=class extends hr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,_=g-c,p=-2*d+3*f,m=d-f,b=1-p,M=m-f+u;for(let v=0;v!==a;v++){let P=o[_+v+a],T=o[_+v+l]*h,R=o[g+v+a],A=o[g+v]*h;r[v]=b*P+M*T+p*R+m*A}return r}},CS=new ei,Bd=class extends ih{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return CS.fromArray(r).normalize().toArray(r),r}},Fi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Jo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sg={9728:yn,9729:rn,9984:Jf,9985:Ca,9986:Ro,9987:Qn},rg={33071:ji,33648:Oa,10497:Nn},dd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},PS={CUBICSPLINE:void 0,LINEAR:ko,STEP:Bo},pd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function IS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new nt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),s.DefaultMaterial}function $r(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function LS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function DS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function US(s){let e,t=s.extensions&&s.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+md(t.attributes):e=s.indices+":"+md(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+md(s.targets[n]);return e}function md(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function zd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function NS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var OS=new Ke,Hd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new RS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new qo(this.options.manager):this.textureLoader=new Wc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return $r(r,a,i),Fs(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(dr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=dd[i.type],a=Jo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new zt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=dd[i.type],c=Jo[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,p;if(d&&d!==u){let m=Math.floor(f/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,M=t.cache.get(b);M||(_=new c(a,m*d,i.count*d/h),M=new Ga(_,d/h),t.cache.add(b,M)),p=new Wa(M,l,f%d/h,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),p=new zt(_,l,g);if(i.sparse!==void 0){let m=dd.SCALAR,b=Jo[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,P=new b(o[1],M,i.sparse.count*m),T=new c(o[2],v,i.sparse.count*l);a!==null&&(p=new zt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let R=0,A=P.length;R<A;R++){let x=P[R];if(p.setX(x,T[R*l]),l>=2&&p.setY(x,T[R*l+1]),l>=3&&p.setZ(x,T[R*l+2]),l>=4&&p.setW(x,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=sg[f.magFilter]||rn,h.minFilter=sg[f.minFilter]||Qn,h.wrapS=rg[f.wrapS]||Nn,h.wrapT=rg[f.wrapT]||Nn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==yn&&h.minFilter!==rn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let p=new An(_);p.needsUpdate=!0,f(p)}),t.load(dr.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Fs(u,o),u.userData.mimeType=o.mimeType||NS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[vt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ya,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new qa,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return nt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[vt.KHR_MATERIALS_UNLIT]){let u=i[vt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],_n),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Zt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Jn);let h=r.alphaMode||pd.OPAQUE;if(h===pd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===pd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==At&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==At&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==At){let u=r.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],_n)}return r.emissiveTexture!==void 0&&o!==At&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Zt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Fs(u,r),t.associations.set(u,{materials:e}),r.extensions&&$r(i,u,r),u})}createUniqueName(e){let t=kt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return og(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=US(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=og(new Ht,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?IS(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let _=h[d],p=o[d],m,b=c[d];if(p.mode===Fi.TRIANGLES||p.mode===Fi.TRIANGLE_STRIP||p.mode===Fi.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Rc(_,b):new Ie(_,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Fi.TRIANGLE_STRIP?m.geometry=fd(m.geometry,Zc):p.mode===Fi.TRIANGLE_FAN&&(m.geometry=fd(m.geometry,el));else if(p.mode===Fi.LINES)m=new Lc(_,b);else if(p.mode===Fi.LINE_STRIP)m=new Wo(_,b);else if(p.mode===Fi.LINE_LOOP)m=new Dc(_,b);else if(p.mode===Fi.POINTS)m=new Gr(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&DS(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Fs(m,r),p.extensions&&$r(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&$r(i,u[0],r),u[0];let f=new Fe;r.extensions&&$r(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(es.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new or(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Ke;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Cc(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],_=d.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",b)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let b=0,M=f.length;b<M;b++){let v=f[b],P=d[b],T=g[b],R=_[b],A=p[b];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let x=n._createAnimationTracks(v,P,T,R,A);if(x)for(let y=0;y<x.length;y++)m.push(x[y])}return new Vc(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,OS)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Xa:c.length>1?h=new Fe:c.length===1?h=c[0]:h=new Xt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Fs(h,r),r.extensions&&$r(n,h,r),r.matrix!==void 0){let u=new Ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Fe;n.name&&(r.name=i.createUniqueName(n.name)),Fs(r,n),n.extensions&&$r(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Gn||f instanceof An)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];pr[r.path]===pr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(pr[r.path]){case pr.weights:c=Ds;break;case pr.rotation:c=Us;break;case pr.position:case pr.scale:c=Ns;break;default:switch(n.itemSize){case 1:c=Ds;break;case 2:case 3:default:c=Ns;break}break}let h=i.interpolation!==void 0?PS[i.interpolation]:ko,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+pr[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=zd(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Us?Bd:ih;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function FS(s,e,t){let n=e.attributes,i=new on;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){let h=zd(Jo[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new U,l=new U;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let _=zd(Jo[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new xi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function og(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=kd[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return yt.workingColorSpace!==_n&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),Fs(s,e),FS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?LS(s,e.targets,t):s})}var sh=class extends ar{constructor(){super();let e=new un;e.deleteAttribute("uv");let t=new nt({side:Tn}),n=new nt,i=new Os(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Ie(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ie(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Ie(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Ie(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Ie(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Ie(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Ie(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new Ie(e,Qo(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new Ie(e,Qo(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new Ie(e,Qo(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new Ie(e,Qo(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let p=new Ie(e,Qo(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new Ie(e,Qo(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Qo(s){let e=new At;return e.color.setScalar(s),e}var mr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var yi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},BS=new or(-1,1,1,-1,0,1),Vd=class extends Ht{constructor(){super(),this.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _t([0,2,0,0,2,0],2))}},kS=new Vd,gr=class{constructor(e){this._mesh=new Ie(kS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,BS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ea=class extends yi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ai.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new gr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var il=class extends yi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},rh=class extends yi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var oh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new _e);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ea(mr),this.copyPass.material.blending=vn,this.clock=new $o}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}il!==void 0&&(o instanceof il?n=!0:o instanceof rh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ah=class extends yi{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var sl={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new _e},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ke},cameraProjectionMatrixInverse:{value:new Ke},cameraWorldMatrix:{value:new Ke},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},rl={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},lh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function lg(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=zS(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new U(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new Qi(i,e,e);return r.wrapS=Nn,r.wrapT=Nn,r.needsUpdate=!0,r}function zS(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=o++;r++,i--}return n}var ol={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Gd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new _e},cameraProjectionMatrixInverse:{value:new Ke},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Gd(s,e,t){let n=HS(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function HS(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,o=Math.pow(i/(s-1),t);n.push(new U(Math.cos(r),Math.sin(r),o))}return n}var ch=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,g=e-f,_=t-d,p,m;g>_?(p=1,m=0):(p=0,m=1);let b=g-p+h,M=_-m+h,v=g-1+2*h,P=_-1+2*h,T=l&255,R=c&255,A=this.perm[T+this.perm[R]]%12,x=this.perm[T+p+this.perm[R+m]]%12,y=this.perm[T+1+this.perm[R+1]]%12,w=.5-g*g-_*_;w<0?n=0:(w*=w,n=w*w*this.dot(this.grad3[A],g,_));let B=.5-b*b-M*M;B<0?i=0:(B*=B,i=B*B*this.dot(this.grad3[x],b,M));let F=.5-v*v-P*P;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[y],v,P)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,g=(h+u+f)*d,_=h-g,p=u-g,m=f-g,b=e-_,M=t-p,v=n-m,P,T,R,A,x,y;b>=M?M>=v?(P=1,T=0,R=0,A=1,x=1,y=0):b>=v?(P=1,T=0,R=0,A=1,x=0,y=1):(P=0,T=0,R=1,A=1,x=0,y=1):M<v?(P=0,T=0,R=1,A=0,x=1,y=1):b<v?(P=0,T=1,R=0,A=0,x=1,y=1):(P=0,T=1,R=0,A=1,x=1,y=0);let w=b-P+d,B=M-T+d,F=v-R+d,O=b-A+2*d,q=M-x+2*d,k=v-y+2*d,ae=b-1+3*d,Y=M-1+3*d,he=v-1+3*d,Se=h&255,Re=u&255,K=f&255,tt=this.perm[Se+this.perm[Re+this.perm[K]]]%12,le=this.perm[Se+P+this.perm[Re+T+this.perm[K+R]]]%12,z=this.perm[Se+A+this.perm[Re+x+this.perm[K+y]]]%12,ge=this.perm[Se+1+this.perm[Re+1+this.perm[K+1]]]%12,ue=.6-b*b-M*M-v*v;ue<0?i=0:(ue*=ue,i=ue*ue*this.dot3(this.grad3[tt],b,M,v));let be=.6-w*w-B*B-F*F;be<0?r=0:(be*=be,r=be*be*this.dot3(this.grad3[le],w,B,F));let Ve=.6-O*O-q*q-k*k;Ve<0?o=0:(Ve*=Ve,o=Ve*Ve*this.dot3(this.grad3[z],O,q,k));let Ae=.6-ae*ae-Y*Y-he*he;return Ae<0?a=0:(Ae*=Ae,a=Ae*Ae*this.dot3(this.grad3[ge],ae,Y,he)),32*(i+r+o+a)}noise4d(e,t,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,g,_=(e+t+n+i)*l,p=Math.floor(e+_),m=Math.floor(t+_),b=Math.floor(n+_),M=Math.floor(i+_),v=(p+m+b+M)*c,P=p-v,T=m-v,R=b-v,A=M-v,x=e-P,y=t-T,w=n-R,B=i-A,F=x>y?32:0,O=x>w?16:0,q=y>w?8:0,k=x>B?4:0,ae=y>B?2:0,Y=w>B?1:0,he=F+O+q+k+ae+Y,Se=o[he][0]>=3?1:0,Re=o[he][1]>=3?1:0,K=o[he][2]>=3?1:0,tt=o[he][3]>=3?1:0,le=o[he][0]>=2?1:0,z=o[he][1]>=2?1:0,ge=o[he][2]>=2?1:0,ue=o[he][3]>=2?1:0,be=o[he][0]>=1?1:0,Ve=o[he][1]>=1?1:0,Ae=o[he][2]>=1?1:0,Ge=o[he][3]>=1?1:0,D=x-Se+c,V=y-Re+c,C=w-K+c,$=B-tt+c,j=x-le+2*c,ie=y-z+2*c,ee=w-ge+2*c,ne=B-ue+2*c,xe=x-be+3*c,I=y-Ve+3*c,S=w-Ae+3*c,G=B-Ge+3*c,J=x-1+4*c,se=y-1+4*c,te=w-1+4*c,Me=B-1+4*c,ve=p&255,Ce=m&255,Xe=b&255,pe=M&255,Ee=a[ve+a[Ce+a[Xe+a[pe]]]]%32,Oe=a[ve+Se+a[Ce+Re+a[Xe+K+a[pe+tt]]]]%32,Ne=a[ve+le+a[Ce+z+a[Xe+ge+a[pe+ue]]]]%32,we=a[ve+be+a[Ce+Ve+a[Xe+Ae+a[pe+Ge]]]]%32,rt=a[ve+1+a[Ce+1+a[Xe+1+a[pe+1]]]]%32,qe=.6-x*x-y*y-w*w-B*B;qe<0?h=0:(qe*=qe,h=qe*qe*this.dot4(r[Ee],x,y,w,B));let ht=.6-D*D-V*V-C*C-$*$;ht<0?u=0:(ht*=ht,u=ht*ht*this.dot4(r[Oe],D,V,C,$));let H=.6-j*j-ie*ie-ee*ee-ne*ne;H<0?f=0:(H*=H,f=H*H*this.dot4(r[Ne],j,ie,ee,ne));let De=.6-xe*xe-I*I-S*S-G*G;De<0?d=0:(De*=De,d=De*De*this.dot4(r[we],xe,I,S,G));let ce=.6-J*J-se*se-te*te-Me*Me;return ce<0?g=0:(ce*=ce,g=ce*ce*this.dot4(r[rt],J,se,te,Me)),27*(h+u+f+d+g)}};var al=class s extends yi{constructor(e,t,n,i,r,o,a){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=lg(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new $t(this.width,this.height,{type:Kt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Pt({defines:Object.assign({},sl.defines),uniforms:ai.clone(sl.uniforms),vertexShader:sl.vertexShader,fragmentShader:sl.fragmentShader,blending:vn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new zc,this.normalMaterial.blending=vn,this.pdMaterial=new Pt({defines:Object.assign({},ol.defines),uniforms:ai.clone(ol.uniforms),vertexShader:ol.vertexShader,fragmentShader:ol.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Pt({defines:Object.assign({},rl.defines),uniforms:ai.clone(rl.uniforms),vertexShader:rl.vertexShader,fragmentShader:rl.fragmentShader,blending:vn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Pt({uniforms:ai.clone(mr.uniforms),vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:qc,blendDst:Ko,blendEquation:Ii,blendSrcAlpha:Xc,blendDstAlpha:Ko,blendEquationAlpha:Ii}),this.blendMaterial=new Pt({uniforms:ai.clone(lh.uniforms),vertexShader:lh.vertexShader,fragmentShader:lh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Kf,blendSrc:qc,blendDst:Ko,blendEquation:Ii,blendSrcAlpha:Xc,blendDstAlpha:Ko,blendEquationAlpha:Ii}),this.fsQuad=new gr(null),this.originalClearColor=new Te,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Go,this.depthTexture.format=sr,this.depthTexture.type=ir,this.normalRenderTarget=new $t(this.width,this.height,{minFilter:yn,magFilter:yn,type:Kt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Gd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=vn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=vn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=vn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=vn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=vn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){let t=new ch,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;i[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Qi(i,e,e,Vn,Ji);return r.wrapS=Nn,r.wrapT=Nn,r.needsUpdate=!0,r}};al.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var cg={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ta=class s extends yi{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new _e(e.x,e.y):new _e(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(r,o,{type:Kt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new $t(r,o,{type:Kt});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new $t(r,o,{type:Kt});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=cg;this.highPassUniforms=ai.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new _e(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=mr;this.copyUniforms=ai.clone(h.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:as,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new At,this.fsQuad=new gr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new _e(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new _e(.5,.5)},direction:{value:new _e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ta.BlurDirectionX=new _e(1,0);ta.BlurDirectionY=new _e(0,1);var ll=new U;function Bi(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;ll.copy(e),ll[n]=0,ll.normalize();let c=.5*o/(o+a),h=1-ll.angleTo(s)/l;return Math.sign(ll[t])===1?h*c:a/(o+a)+c+c*(1-h)}var hh=class extends un{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new U,l=new U,c=new U(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new U,_=.5/i;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/d)){case 0:g.set(1,0,0),f[m+0]=Bi(g,l,"z","y",r,n),f[m+1]=1-Bi(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[m+0]=1-Bi(g,l,"z","y",r,n),f[m+1]=1-Bi(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[m+0]=1-Bi(g,l,"x","z",r,e),f[m+1]=Bi(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),f[m+0]=1-Bi(g,l,"x","z",r,e),f[m+1]=1-Bi(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),f[m+0]=1-Bi(g,l,"x","y",r,e),f[m+1]=1-Bi(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[m+0]=Bi(g,l,"x","y",r,e),f[m+1]=1-Bi(g,l,"y","x",r,t);break}}};var ts={ink:"#1E1418",plum:"#3A1F2B",blush:"#E9CFC5",brass:"#C9A46A",porcelain:"#FBF7F4",rose:"#B85C6E",wine:"#5A2E33"},li='"Bodoni Moda", "Didot", "Bodoni 72", Georgia, serif',dn='"Manrope", "Segoe UI", system-ui, sans-serif',VS="assets/",GS=new qo,uh=0,ug=[],hg=()=>{uh--,uh<=0&&ug.splice(0).forEach(s=>s())};function fg(){return uh<=0?Promise.resolve():new Promise(s=>ug.push(s))}var Yd=8;function dg(s){Yd=s}var Wd={};function ns(s,e=1,t=e,{rot:n=0}={}){let i=s+e+"x"+t+n;if(Wd[i])return Wd[i];let r=(a,l)=>{uh++;let c=GS.load(VS+"tex/"+s+"_"+a+".jpg",hg,void 0,hg);return c.wrapS=c.wrapT=Nn,c.repeat.set(e,t),c.rotation=n,c.anisotropy=Yd,l&&(c.colorSpace=Zt),c},o=r("arm");return Wd[i]={map:r("diffuse",!0),normalMap:r("nor_gl"),roughnessMap:o,aoMap:o}}var Nt={};function Wn(){return Nt.gold||(Nt.gold=new at({color:14859642,metalness:1,roughness:.16,clearcoat:.4,clearcoatRoughness:.1}),Nt.brass=new nt({color:13213798,metalness:1,roughness:.36}),Nt.brushedBrass=new nt({color:12555616,metalness:1,roughness:.42}),Nt.roseGold=new at({color:15250592,metalness:1,roughness:.2,clearcoat:.5}),Nt.chrome=new nt({color:15922422,metalness:1,roughness:.08}),Nt.bronze=new nt({color:3812644,metalness:.85,roughness:.38}),Nt.blackLacquer=new at({color:1314834,roughness:.25,clearcoat:1,clearcoatRoughness:.06}),Nt.blackMatte=new nt({color:1578266,roughness:.7}),Nt.ivory=new at({color:16183272,roughness:.35,clearcoat:.6,clearcoatRoughness:.2}),Nt.porcelain=new at({color:16513012,roughness:.22,clearcoat:1,clearcoatRoughness:.08}),Nt.blushLacquer=new at({color:15123384,roughness:.32,clearcoat:.8,clearcoatRoughness:.14}),Nt.plumLacquer=new at({color:3809067,roughness:.3,clearcoat:.9,clearcoatRoughness:.1}),Nt.rubber=new nt({color:1709848,roughness:.9}),Nt.mirror=new nt({color:16054008,metalness:1,roughness:.02}),Nt.shelfGlass=new at({color:14675688,roughness:.04,transparent:!0,opacity:.22,envMapIntensity:.8,depthWrite:!1}),Nt.windowGlass=new at({color:10466230,roughness:.02,metalness:.05,transparent:!0,opacity:.12,envMapIntensity:2.2,side:Jn,depthWrite:!1}),Nt.led=new At({color:new Te(3.2,2.7,2.1),toneMapped:!1}),Nt.ledSoft=new At({color:new Te(1.3,1.05,.85),toneMapped:!1}),Nt.opal=new at({color:16774374,emissive:16766624,emissiveIntensity:2.6,roughness:.3,clearcoat:1,clearcoatRoughness:.05}),Nt.shadow=new At({alphaMap:XS(),transparent:!0,depthWrite:!1,opacity:.5,color:0}),Nt.paper=new nt({color:15985892,roughness:.85})),Nt}function Mi(s){let e=Wn();return s==="gold"?e.gold:s==="rose"?e.roseGold:s==="wood"?WS():an(s)}var fh={};function an(s,e=.3){let t=s+e;return fh[t]||(fh[t]=new at({color:new Te(s),roughness:e,clearcoat:.8,clearcoatRoughness:.12}))}function Bs(s,e=.55){let t="m"+s+e;return fh[t]||(fh[t]=new nt({color:new Te(s),roughness:e}))}function WS(){if(Nt.woodCap)return Nt.woodCap;let s=ns("american_walnut_veneer",.3,.3);return Nt.woodCap=new at({map:s.map,normalMap:s.normalMap,roughness:.35,clearcoat:.6,color:14267532})}var Kr={cheap:!1};function fs(s,{thickness:e=.04,frost:t=0,dist:n=.05,ior:i=1.48}={}){return Kr.cheap?new at({color:new Te(s).lerp(new Te(1,1,1),.35),roughness:.05+t,clearcoat:.6,clearcoatRoughness:.05,transparent:!0,opacity:.55,depthWrite:!1,envMapIntensity:1.4}):new at({color:16777215,metalness:0,roughness:.02+t,transmission:1,thickness:e,ior:i,attenuationColor:new Te(s),attenuationDistance:n,specularIntensity:1,envMapIntensity:1.25,clearcoat:t?0:.6,clearcoatRoughness:.02})}function ds(s="#ffffff",{thickness:e=.01,frost:t=0,dist:n=.4}={}){return Kr.cheap?new at({color:new Te(s).lerp(new Te(1,1,1),.35),roughness:.05+t,clearcoat:.6,clearcoatRoughness:.05,transparent:!0,opacity:.55,depthWrite:!1,envMapIntensity:1.4}):new at({color:16777215,roughness:.015+t,transmission:1,thickness:e,ior:1.5,attenuationColor:new Te(s),attenuationDistance:n,envMapIntensity:1.3,specularIntensity:1})}var Xd=new Map;function ki(s,e,t,n=.02,i=3){let r=[s,e,t,n,i].map(o=>o.toFixed(4)).join("|");return Xd.has(r)||Xd.set(r,new hh(s,e,t,i,Math.max(1e-4,Math.min(n,s/2,e/2,t/2)-1e-4))),Xd.get(r)}function Ye(s,e,t=0,n=0,i=0,r){let o=new Ie(s,e);return o.position.set(t,n,i),o.castShadow=o.receiveShadow=!0,r&&r.add(o),o}function Ue(s,e,t,n,i,r,o,a,l=0){return Ye(l>0?ki(s,e,t,l):new un(s,e,t),n,i,r,o,a)}var bi={seg:1,base:1},pg=s=>Math.max(10,Math.round(s*bi.seg));function ot(s,e,t,n,i,r,o,a,l=40,c=!1){return Ye(new fn(s,e,t,pg(l),1,c),n,i,r,o,a)}function zi(s,e,t,n,i,r,o){let a=Ye(new wt(s,e),t,n,i,r,o);return a.castShadow=!1,a}function Rt(s,e=48){return new Bc(s.map(([t,n])=>new _e(Math.max(0,t),n)),pg(e))}function On(s,e,t,n,i,{closeBottom:r=!0,closeTop:o=!0,steps:a=6}={}){let l=[];r&&l.push([0,e]);for(let c=0;c<=a;c++){let h=-Math.PI/2+c/a*Math.PI/2;l.push([s-n+Math.cos(h)*n,e+n+Math.sin(h)*n])}for(let c=0;c<=a;c++){let h=c/a*Math.PI/2;l.push([s-i+Math.cos(h)*i,t-i+Math.sin(h)*i])}return o&&l.push([0,t]),l}function cl(s,e,t,n,i,r,o=.5){let a=new Ie(new wt(s,e),Wn().shadow.clone());return a.material.opacity=o,a.rotation.x=-Math.PI/2,a.position.set(t,n+.002,i),a.renderOrder=1,r&&r.add(a),a}function XS(){let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(64,64,2,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new lr(s)}function Sn(s,e,t,{srgb:n=!0}={}){let i=document.createElement("canvas");i.width=s,i.height=e;let r=i.getContext("2d");t(r,s,e);let o=new lr(i);return n&&(o.colorSpace=Zt),o.anisotropy=Yd,o.userData.canvas=i,o.userData.draw=t,o}function mg(s,e){let t=s.userData.canvas,n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),(e||s.userData.draw)(n,t.width,t.height),s.needsUpdate=!0}function gg(s,e,t,n,i,r){s.beginPath(),s.roundRect(e,t,n,i,r),s.closePath()}function ti(s,e,t,n,i,r="center"){let o=[...e],a=o.map(u=>s.measureText(u).width),l=a.reduce((u,f)=>u+f,0)+i*(o.length-1),c=r==="center"?t-l/2:r==="right"?t-l:t,h=s.textAlign;return s.textAlign="left",o.forEach((u,f)=>{s.fillText(u,c,n),c+=a[f]+i}),s.textAlign=h,l}var qd={};function na(s,{bg:e=null,fg:t=ts.wine,name:n,size:i,w:r=512,h:o=512,small:a="SAELLE",rule:l=!0,big:c=!1}){return qd[s]?qd[s]:qd[s]=Sn(r,o,h=>{h.clearRect(0,0,r,o),e&&(h.fillStyle=e,h.fillRect(0,0,r,o)),h.fillStyle=t,h.textAlign="center",h.textBaseline="alphabetic";let u=c?o*.2:o*.13;if(h.font=`500 ${u}px ${li}`,ti(h,a,r/2,o*(c?.42:.33),u*.32),l&&(h.globalAlpha=.5,h.fillRect(r*.38,o*(c?.5:.41),r*.24,Math.max(1,o*.006)),h.globalAlpha=1),n){let f=n.split(" · ")[0].split(" "),d=[],g="",_=o*(c?.075:.085);h.font=`600 ${_}px ${dn}`;for(let p of f){let m=g?g+" "+p:p;h.measureText(m.toUpperCase()).width>r*.82&&g?(d.push(g),g=p):g=m}d.push(g),d.slice(0,3).forEach((p,m)=>ti(h,p.toUpperCase(),r/2,o*(c?.6:.53)+m*_*1.35,_*.12))}i&&(h.globalAlpha=.75,h.font=`500 ${o*.065}px ${dn}`,h.fillText(i,r/2,o*.88),h.globalAlpha=1)})}function jr(s,e=1.6){return new At({map:s,color:new Te(e,e,e),toneMapped:!1})}function hl(s,e,t){return Sn(8,256,(n,i,r)=>{let o=n.createLinearGradient(0,0,0,r);o.addColorStop(0,s),o.addColorStop(.55,e),o.addColorStop(1,t),n.fillStyle=o,n.fillRect(0,0,i,r)})}function dh(s){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var qS=[{id:"skin",n:"01",name:"Skincare",sub:"Serums, creams, toners"},{id:"scent",n:"02",name:"Fragrance",sub:"Eau de parfum bar"},{id:"colour",n:"03",name:"Makeup",sub:"Lips, face, eyes"},{id:"body",n:"04",name:"Hair & Body",sub:"Oils, wash, butters"}],_g=Object.fromEntries(qS.map(s=>[s.id,s])),Rn=[{id:"dew-serum",sec:"skin",slot:{wall:"L",bay:0,row:0},kind:"dropper",name:"Dew Drop Hyaluronic Serum",size:"30 ml",price:1450,note:"Plumps and holds water for 24 hours.",look:{glass:"#eef4f6",liquid:"#dfeef2",cap:"#f3ece6",collar:"gold"}},{id:"night-serum",sec:"skin",slot:{wall:"L",bay:0,row:1},kind:"dropper",name:"Bakuchiol Night Serum",size:"30 ml",price:1850,note:"A gentle retinol alternative for night.",look:{glass:"#b5732f",liquid:"#8a4a16",cap:"#1d1715",collar:"gold"}},{id:"cloud-cream",sec:"skin",slot:{wall:"L",bay:1,row:0},kind:"jar",name:"Barrier Cloud Cream",size:"50 ml",price:1650,note:"Ceramides and squalane, for dry skin.",look:{glass:"#f4ece8",cream:"#fbf6f1",lid:"gold"}},{id:"rice-toner",sec:"skin",slot:{wall:"L",bay:1,row:1},kind:"toner",name:"Rice Water Toner",size:"150 ml",price:950,note:"Fermented rice water, alcohol free.",look:{glass:"#f2f5f4",liquid:"#f1ede3",cap:"#c9a46a"}},{id:"glow-oil",sec:"skin",slot:{wall:"L",bay:2,row:0},kind:"dropper",name:"Vitamin C Glow Oil",size:"30 ml",price:1290,note:"Brightens dull skin in two weeks.",look:{glass:"#f6efe3",liquid:"#f2a43a",cap:"#f6efe3",collar:"gold"}},{id:"milk-cleanser",sec:"skin",slot:{wall:"L",bay:2,row:1},kind:"pump",name:"Gentle Milk Cleanser",size:"200 ml",price:890,note:"Oat milk wash for every skin type.",look:{body:"#ecd3c8",pump:"#f8f2ee",text:"#5a2e33"}},{id:"spf-50",sec:"skin",slot:{wall:"L",bay:3,row:0},kind:"tube",name:"Daily Shield SPF 50",size:"50 ml",price:799,note:"No white cast, PA++++.",look:{body:"#f6e7c9",cap:"#e9b54a",text:"#5a2e33"}},{id:"lip-mask",sec:"skin",slot:{wall:"L",bay:3,row:1},kind:"jar",name:"Overnight Lip Mask",size:"15 g",price:650,note:"Berry butter for soft lips by morning.",look:{glass:"#f2c9cf",cream:"#d9536d",lid:"rose",small:!0}},{id:"jasmine-night",sec:"scent",slot:{table:"scent",i:0},kind:"perfumeSquare",name:"No. 7 Jasmine Night",size:"50 ml EDP",price:4800,note:"Jasmine sambac, tuberose, white musk.",look:{liquid:"#f3d98a",cap:"#15110f"}},{id:"oud-saffron",sec:"scent",slot:{table:"scent",i:1},kind:"perfumeTall",name:"Oud & Saffron",size:"100 ml EDP",price:6900,note:"Smoked oud, saffron, leather.",look:{liquid:"#a8521c",cap:"gold"}},{id:"rose-atelier",sec:"scent",slot:{table:"scent",i:2},kind:"perfumeRound",name:"Rose Atelier",size:"50 ml EDP",price:4500,note:"Damask rose, lychee, cedar.",look:{liquid:"#f4b9c2",cap:"rose"}},{id:"vetiver-rain",sec:"scent",slot:{table:"scent",i:3},kind:"perfumeCyl",name:"Vetiver Rain",size:"75 ml EDP",price:5200,note:"Vetiver, wet earth, grapefruit.",look:{liquid:"#cfe0b4",cap:"wood"}},{id:"neroli-bloom",sec:"scent",slot:{table:"scent",i:4},kind:"perfumeSmall",name:"Neroli Bloom",size:"30 ml EDT",price:2900,note:"Orange blossom and sea salt.",look:{liquid:"#fbf1d6",cap:"#f7f3ee"}},{id:"sandal-mist",sec:"scent",slot:{table:"scent",i:5},kind:"mist",name:"Sandal Body Mist",size:"100 ml",price:1200,note:"Mysore sandalwood, light all-day mist.",look:{liquid:"#f0d2a8",cap:"gold"}},{id:"lip-rosewood",sec:"colour",slot:{wall:"R",bay:0,row:0},kind:"lipstick",name:"Velvet Matte Lipstick · Rosewood",size:"3.5 g",price:1150,note:"Soft-matte, 12 hour wear.",look:{shade:"#8e3b46"}},{id:"lip-sindoor",sec:"colour",slot:{wall:"R",bay:0,row:1},kind:"lipstick",name:"Velvet Matte Lipstick · Sindoor",size:"3.5 g",price:1150,note:"A true red with a warm base.",look:{shade:"#b3121f"}},{id:"lip-petal",sec:"colour",slot:{wall:"R",bay:1,row:0},kind:"lipstick",name:"Satin Lipstick · Nude Petal",size:"3.5 g",price:1150,note:"Your lips but better.",look:{shade:"#c98273",satin:!0}},{id:"gloss",sec:"colour",slot:{wall:"R",bay:1,row:1},kind:"gloss",name:"Glass Lip Gloss",size:"6 ml",price:750,note:"Mirror shine, not sticky.",look:{liquid:"#e88a9a"}},{id:"foundation",sec:"colour",slot:{wall:"R",bay:2,row:0},kind:"foundation",name:"Second Skin Foundation",size:"30 ml · 24 shades",price:1750,note:"Medium cover, natural finish.",look:{liquid:"#c58e66",cap:"#141012"}},{id:"palette",sec:"colour",slot:{wall:"R",bay:2,row:1},kind:"palette",name:"Sunset Eyeshadow Palette",size:"12 shades",price:2400,note:"Mattes and shimmers in warm tones.",look:{shell:"#2a1d1f",pans:["#f1d3b8","#d8a07a","#b5643c","#7a3424","#e2b45c","#c77d5e","#8c4a5c","#4b2a2a","#f4c6a8","#a35d3b","#d79b7f","#2b1a17"]}},{id:"blush",sec:"colour",slot:{wall:"R",bay:3,row:0},kind:"compact",name:"Cheek Flush Blush",size:"6 g",price:1050,note:"Buildable, blends with fingers.",look:{shell:"#e7c4bb",pan:"#e08a86"}},{id:"mascara",sec:"colour",slot:{wall:"R",bay:3,row:1},kind:"mascara",name:"Lash Lift Mascara",size:"9 ml",price:890,note:"Lifts and holds curl, no clumps.",look:{body:"#131012",cap:"gold"}},{id:"hair-oil",sec:"body",slot:{table:"body",i:0},kind:"oil",name:"Bhringraj Hair Oil",size:"100 ml",price:890,note:"Cold-pressed, for stronger roots.",look:{glass:"#7b4412",liquid:"#6f3a10",cap:"gold"}},{id:"shampoo",sec:"body",slot:{table:"body",i:1},kind:"bottle",name:"Silk Repair Shampoo",size:"250 ml",price:950,note:"Sulphate-free, for frizzy hair.",look:{body:"#e9dcd2",cap:"#5a2e33",text:"#5a2e33"}},{id:"conditioner",sec:"body",slot:{table:"body",i:2},kind:"bottle",name:"Silk Repair Conditioner",size:"250 ml",price:950,note:"Detangles in one minute.",look:{body:"#5a2e33",cap:"#e9dcd2",text:"#f3e6dc"}},{id:"ubtan-scrub",sec:"body",slot:{table:"body",i:3},kind:"tub",name:"Ubtan Body Scrub",size:"200 g",price:1100,note:"Turmeric, besan and sandalwood.",look:{body:"#d9a441",lid:"gold",text:"#3b2412"}},{id:"body-butter",sec:"body",slot:{table:"body",i:4},kind:"tub",name:"Shea Body Butter",size:"200 g",price:1250,note:"48 hour moisture, light scent.",look:{body:"#f1e6dc",lid:"#e2c9b9",text:"#5a2e33"}},{id:"hand-cream",sec:"body",slot:{table:"body",i:5},kind:"tube",name:"Kesar Hand Cream",size:"50 ml",price:550,note:"Saffron and almond oil.",look:{body:"#efc77a",cap:"gold",text:"#5a2e33"}},{id:"glow-set",sec:"skin",slot:{table:"entry",i:0},kind:"dropper",name:"Glow Ritual Serum · New",size:"30 ml",price:2250,note:"Niacinamide 10% with rose water.",look:{glass:"#f3c6cf",liquid:"#f0b1bd",cap:"#f7efe9",collar:"gold"},hero:!0}],_r=Object.fromEntries(Rn.map(s=>[s.id,s])),ph=[["glow-set"],["dew-serum","cloud-cream"],["glow-oil","spf-50"],["jasmine-night","rose-atelier"],["lip-sindoor","palette"],["foundation","mascara"],["hair-oil","ubtan-scrub"],"desk"],is=s=>"₹"+s.toLocaleString("en-IN");var Cn=(s,e,t)=>new U(s,e,t),gh={};function ci(s,e){return gh[s]||(gh[s]=new nt({map:na(s,e),transparent:!0,roughness:.45,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}))}function xg(s,e){return gh["p"+s]||(gh["p"+s]=new nt({map:na("p"+s,e),roughness:.7}))}function ps(s,e,t,n,i,r,o=24){let a=new fn(s,s,e,o,1,!0,-n/2,n),l=Ye(a,i,0,t,0,r);return l.castShadow=!1,l.renderOrder=2,l}function ul(s,e,t,n,i,r,o){let a=Ye(new wt(s,e),r,t,n,i,o);return a.castShadow=!1,a.renderOrder=2,a}var YS={dropper(s){let e=s.look,t=new Fe,n=.0175,i=.072,r=fs(e.liquid,{thickness:.03,dist:e.glass.startsWith("#b")||e.glass.startsWith("#7")?.012:.06});r.color.set(e.glass).lerp(new Te(1,1,1),.55);let o=Ye(Rt([...On(n,0,i,.003,.01,{closeTop:!1}),[.0068,i+.002],[.0072,i+.012],[0,i+.012]]),r,0,0,0,t);return o.castShadow=!0,Ye(new fn(.0022,.0016,.07,10),ds("#ffffff",{thickness:.002}),0,i-.026,0,t).castShadow=!1,ot(.0092,.0092,.013,Mi(e.collar||"gold"),0,i+.0125,0,t),ot(.0098,.0098,.0015,Mi(e.collar||"gold"),0,i+.0062,0,t),Ye(Rt(On(.0076,i+.019,i+.05,.002,.0072)),an(e.cap,.38),0,0,0,t),ps(n+4e-4,.036,.033,1.9,ci("d"+s.id,{name:s.name,size:s.size,fg:e.glass.startsWith("#b")||e.glass.startsWith("#7")?"#f6e8d8":ts.wine,w:384,h:384}),t),{root:t,hot:Cn(0,i*.7,n),h:i+.05,w:n*2,d:n*2}},jar(s){let e=s.look,t=new Fe,n=e.small?.62:1,i=.031*n,r=.036*n,o=ds(e.glass,{thickness:.012,frost:.32,dist:.05});return o.color.set(e.glass).lerp(new Te(1,1,1),.4),Ye(Rt([[0,0],[i-.004,0],[i,.004],[i,r-.002],[i-.004,r]]),o,0,0,0,t),Ye(Rt([[0,.006*n],[i-.005,.006*n],[i-.005,r-.004],[i*.5,r+.001],[0,r+.003]]),new at({color:e.cream,roughness:.4,sheen:.5,sheenColor:new Te("#ffffff")}),0,0,0,t).castShadow=!1,Ye(Rt([[i*.96,r-.001],[i+.0012,r],[i+.0012,r+.016*n],[i-.002,r+.0175*n],[0,r+.0178*n]]),Mi(e.lid),0,0,0,t),ps(i+4e-4,r*.42,r*.48,1.5,ci("j"+s.id,{name:e.small?null:s.name,size:null,fg:ts.wine,w:512,h:256,rule:!1}),t),{root:t,hot:Cn(0,r,i),h:r+.018*n,w:i*2,d:i*2}},toner(s){let e=s.look,t=new Fe,n=.023,i=.13,r=fs(e.liquid,{thickness:.04,dist:.09});return Ye(Rt([...On(n,0,i,.004,.016,{closeTop:!1}),[.009,i+.002],[.0095,i+.012],[0,i+.012]]),r,0,0,0,t),Ye(Rt(On(.0118,i+.006,i+.036,.0015,.003)),an(e.cap,.35),0,0,0,t),ps(n+5e-4,.06,.052,1.7,xg("t"+s.id,{name:s.name,size:s.size,bg:"#f7f1ea",fg:ts.wine,w:384,h:448}),t),{root:t,hot:Cn(0,i*.6,n),h:i+.036,w:n*2,d:n*2}},pump(s){let e=s.look,t=new Fe,n=.025,i=.13;Ye(Rt([...On(n,0,i,.004,.012,{closeTop:!1}),[.0105,i+.003],[0,i+.003]]),an(e.body,.28),0,0,0,t),ot(.0118,.0118,.012,an(e.pump,.3),0,i+.008,0,t),ot(.004,.004,.022,an(e.pump,.3),0,i+.024,0,t);let r=Ye(ki(.022,.011,.016,.004),an(e.pump,.3),0,i+.038,0,t),o=Ye(new fn(.0028,.0032,.022,12),an(e.pump,.3),0,i+.038,.016,t);return o.rotation.x=Math.PI/2,ps(n+4e-4,.07,.06,1.8,ci("pu"+s.id,{name:s.name,size:s.size,fg:e.text,w:384,h:448}),t),{root:t,hot:Cn(0,i*.6,n),h:i+.044,w:n*2,d:n*2}},tube(s){let e=s.look,t=new Fe,n=.017,i=.022,r=.13;ot(.0135,.0135,i,Mi(e.cap),0,i/2,0,t,32);let o=new fn(n,n*.8,r,40,24,!1);vg(o,r),Ye(o,an(e.body,.32),0,i+r/2,0,t);let a=new fn(n+5e-4,n*.8+5e-4,r,24,24,!0,-.9,1.8);vg(a,r);let l=Ye(a,ci("tu"+s.id,{name:s.name,size:s.size,fg:e.text,w:640,h:220}),0,i+r/2,0,t);return l.castShadow=!1,l.renderOrder=2,l.material.map.center.set(.5,.5),l.material.map.rotation=Math.PI/2,{root:t,hot:Cn(0,i+r*.5,n),h:i+r,w:n*2.4,d:n*2}},perfumeSquare(s,e=1){return Zd(s,{w:.062,h:.072,d:.04,rad:.004,base:.012,cap:"cube"})},perfumeTall(s){return Zd(s,{w:.052,h:.125,d:.036,rad:.003,base:.014,cap:"cyl"})},perfumeSmall(s){return Zd(s,{w:.044,h:.052,d:.03,rad:.004,base:.01,cap:"cube"})},perfumeRound(s){let e=s.look,t=new Fe,n=.038,i=[];for(let a=0;a<=24;a++){let l=-Math.PI/2+a/24*Math.PI;i.push([Math.cos(l)*n*(a<2?.92:1),n+Math.sin(l)*n*.92])}i[0]=[0,n-n*.92],i.push([.0062,n*1.92+.002],[.0062,n*1.92+.008],[0,n*1.92+.008]);let r=Ye(Rt(i,56),fs(e.liquid,{thickness:.06,dist:.08}),0,0,0,t);r.position.y=-(n-n*.92);let o=n*1.92-(n-n*.92);return ot(.0085,.0085,.008,Mi(e.cap),0,o+.006,0,t),Ye(new cr(.019,40,24),Mi(e.cap),0,o+.026,0,t),ul(.03,.012,0,n*.95,n*.93,ci("pr"+s.id,{name:null,size:null,small:"SAELLE",fg:"#5a2e33",w:512,h:160,rule:!1,big:!0}),t),{root:t,hot:Cn(0,n,n),h:o+.045,w:n*2,d:n*2}},perfumeCyl(s){let e=s.look,t=new Fe,n=.026,i=.1;return Ye(Rt([[0,0],[n-.002,0],[n,.003],[n,i-.003],[n-.004,i],[.0065,i+.002],[.0065,i+.008],[0,i+.008]],56),fs(e.liquid,{thickness:.05,dist:.1}),0,0,0,t),ot(.0095,.0095,.006,Wn().brass,0,i+.006,0,t),ot(.021,.021,.04,Mi(e.cap),0,i+.028,0,t),ps(n+4e-4,.03,i*.5,1.2,ci("pc"+s.id,{name:s.name,size:s.size,fg:"#2e3a26",w:384,h:384}),t),{root:t,hot:Cn(0,i*.6,n),h:i+.048,w:n*2,d:n*2}},mist(s){let e=s.look,t=new Fe,n=.019,i=.15;return Ye(Rt([...On(n,0,i,.003,.006,{closeTop:!1}),[.006,i+.002],[0,i+.002]],48),fs(e.liquid,{thickness:.035,dist:.12}),0,0,0,t),ot(.0105,.0105,.012,Wn().gold,0,i+.008,0,t),Ye(Rt(On(.0195,i+.002,i+.05,.001,.004)),ds("#ffffff",{thickness:.003,frost:.05}),0,0,0,t).castShadow=!1,ps(n+4e-4,.05,i*.45,1.6,ci("mi"+s.id,{name:s.name,size:s.size,fg:ts.wine,w:384,h:512}),t),{root:t,hot:Cn(0,i*.6,n),h:i+.05,w:n*2,d:n*2}},lipstick(s){let e=s.look,t=new Fe,n=Wn(),i=.0098;ot(i,i,.046,n.blackLacquer,0,.023,0,t,32),ot(i+3e-4,i+3e-4,.006,n.gold,0,.049,0,t,32),ot(.0082,.0082,.014,n.gold,0,.059,0,t,32);let r=new fn(.0068,.0068,.024,32,6),o=r.attributes.position;for(let l=0;l<o.count;l++){let c=o.getY(l);if(c>.006){let h=o.getZ(l);o.setY(l,Math.min(c,.012-(h+.0068)*.75))}}r.computeVertexNormals(),Ye(r,new at({color:e.shade,roughness:e.satin?.28:.55,sheen:.6,sheenColor:new Te(e.shade).lerp(new Te(1,1,1),.4),clearcoat:e.satin?.5:0}),0,.075,0,t);let a=new Fe;return t.add(a),ot(i+6e-4,i+6e-4,.046,n.blackLacquer,0,0,0,a,32),ot(i+8e-4,i+8e-4,.004,n.gold,0,-.021,0,a,32),a.rotation.z=Math.PI/2,a.rotation.y=.5,a.position.set(.024,i+6e-4,-.004),{root:t,hot:Cn(0,.07,i),h:.087,w:.05,d:i*2}},gloss(s){let e=s.look,t=new Fe,n=Wn();return Ye(Rt([...On(.0085,0,.07,.002,.002,{closeTop:!1}),[.0042,.071],[0,.071]],32),fs(e.liquid,{thickness:.016,dist:.012}),0,0,0,t),ot(.0088,.0088,.05,n.blackLacquer,0,.097,0,t,32),ot(.009,.009,.004,n.gold,0,.073,0,t,32),ps(.0089,.035,.035,1.4,ci("gl"+s.id,{name:null,size:null,small:"SAELLE",fg:"#fff",w:512,h:128,rule:!1,big:!0}),t),{root:t,hot:Cn(0,.06,.009),h:.122,w:.018,d:.018}},foundation(s){let e=s.look,t=new Fe,n=.044,i=.09,r=.03;return Ye(ki(n,i,r,.004),fs(e.liquid,{thickness:.03,dist:.006}),0,i/2,0,t),ot(.0085,.0085,.012,Wn().gold,0,i+.006,0,t,32),Ye(ki(.024,.03,.024,.003),an(e.cap,.25),0,i+.027,0,t),ul(n*.8,i*.5,0,i*.5,r/2+4e-4,ci("fo"+s.id,{name:s.name,size:s.size,fg:"#fff",w:384,h:448}),t),{root:t,hot:Cn(0,i*.65,r/2),h:i+.042,w:n,d:r}},palette(s){let e=s.look,t=new Fe,n=Wn(),i=new Fe;t.add(i);let r=.13,o=.1,a=.011;Ye(ki(r,a,o,.004),an(e.shell,.3),0,a/2,0,i),e.pans.forEach((f,d)=>{let g=d%4,_=Math.floor(d/4),p=d%3===1;Ye(new fn(.0118,.0118,.0035,28),new at({color:f,roughness:p?.35:.9,metalness:p?.55:0,sheen:p?0:.4}),-.045+g*.03,a+5e-4,-.03+_*.03,i)});let l=new Fe;l.position.set(0,a,-o/2),i.add(l),Ye(ki(r,.007,o,.003),an(e.shell,.3),0,.0035,o/2,l);let c=Ye(new wt(r-.014,o-.014),n.mirror,0,-3e-4,o/2,l);c.rotation.x=Math.PI/2;let h=ul(r*.6,.02,0,.0072,o/2,ci("pa"+s.id,{name:null,size:null,small:"SAELLE",fg:"#d9b77c",w:512,h:128,rule:!1,big:!0}),l);h.rotation.x=-Math.PI/2,l.rotation.x=-1.95,i.rotation.x=-.9,i.position.set(0,.012,.03);let u=Ye(ki(.08,.05,.004,.001),ds("#ffffff",{thickness:.004}),0,.025,-.035,t);return u.rotation.x=-.5,u.castShadow=!1,{root:t,hot:Cn(0,.06,.04),h:.12,w:r,d:.08}},compact(s){let e=s.look,t=new Fe,n=Wn(),i=new Fe;t.add(i);let r=.032;ot(r,r,.011,an(e.shell,.25),0,.0055,0,i,48),ot(r-.004,r-.004,.002,new at({color:e.pan,roughness:.85,sheen:.6,sheenColor:new Te("#ffe3dc")}),0,.011,0,i,48),ot(r+4e-4,r+4e-4,.002,n.gold,0,.0115,0,i,48);let o=new Fe;o.position.set(0,.012,-r),i.add(o);let a=ot(r,r,.006,an(e.shell,.25),0,.003,r,o,48),l=Ye(new Xr(r-.004,40),n.mirror,0,-2e-4,r,o);l.rotation.x=Math.PI/2,o.rotation.x=-1.9,i.rotation.x=-.75,i.position.set(0,.02,.02);let c=Ye(ki(.05,.04,.004,.001),ds("#ffffff",{thickness:.004}),0,.02,-.02,t);return c.rotation.x=-.5,c.castShadow=!1,{root:t,hot:Cn(0,.05,.03),h:.08,w:r*2,d:.06}},mascara(s){let e=s.look,t=new Fe,n=Wn(),i=.0085;return Ye(Rt(On(i,0,.07,.003,5e-4,{closeTop:!0})),an(e.body,.22),0,0,0,t),ot(i+3e-4,i+3e-4,.004,n.gold,0,.072,0,t,32),Ye(Rt(On(i,.074,.13,5e-4,.003)),Mi(e.cap),0,0,0,t),ps(i+3e-4,.045,.036,1.2,ci("ma"+s.id,{name:null,size:null,small:"SAELLE",fg:"#d9b77c",w:512,h:96,rule:!1,big:!0}),t),{root:t,hot:Cn(0,.08,i),h:.13,w:i*2,d:i*2}},oil(s){let e=s.look,t=new Fe,n=.025,i=.11,r=fs(e.liquid,{thickness:.04,dist:.015});return r.color.set(e.glass).lerp(new Te(1,1,1),.6),Ye(Rt([...On(n,0,i,.003,.015,{closeTop:!1}),[.009,i+.003],[.0095,i+.012],[0,i+.012]]),r,0,0,0,t),Ye(Rt(On(.0125,i+.004,i+.03,.001,.002)),Mi(e.cap),0,0,0,t),ps(n+5e-4,.05,.048,1.8,xg("oi"+s.id,{name:s.name,size:s.size,bg:"#f3e7d6",fg:"#3b2412",w:384,h:384}),t),{root:t,hot:Cn(0,i*.6,n),h:i+.03,w:n*2,d:n*2}},bottle(s){let e=s.look,t=new Fe,n=.033,i=.17,r=Rt(On(n,0,i,.008,.02,{closeTop:!0}),48);r.scale(1,1,.62),Ye(r,an(e.body,.36),0,0,0,t);let o=Rt(On(.021,i-.004,i+.022,.002,.006),40);return o.scale(1,1,.75),Ye(o,an(e.cap,.3),0,0,0,t),ul(.05,.1,0,i*.45,n*.62+.0012,ci("bo"+s.id,{name:s.name,size:s.size,fg:e.text,w:256,h:512}),t),{root:t,hot:Cn(0,i*.6,n*.62),h:i+.022,w:n*2,d:n*1.3}},tub(s){let e=s.look,t=new Fe,n=.043,i=.05;return Ye(Rt(On(n,0,i,.004,.001,{closeTop:!0}),56),an(e.body,.32),0,0,0,t),Ye(Rt(On(n+.0015,i-.004,i+.02,.001,.004),56),Mi(e.lid),0,0,0,t),ps(n+5e-4,i*.6,i*.45,1.6,ci("tb"+s.id,{name:s.name,size:null,fg:e.text,w:512,h:256,rule:!1}),t),{root:t,hot:Cn(0,i*.7,n),h:i+.02,w:n*2,d:n*2}}};function Zd(s,e){let t=s.look,n=new Fe,i=Wn(),{w:r,h:o,d:a,rad:l,base:c}=e,h=fs(t.liquid,{thickness:Math.min(r,a)*1.1,dist:.07});Ye(ki(r,o,a,l,4),h,0,o/2,0,n);let u=ds("#e9f2ef",{thickness:.03,dist:.25});if(Ye(ki(r-.002,c,a-.002,l*.7,3),u,0,c/2+4e-4,0,n).castShadow=!1,ot(.0068,.0068,.006,i.gold,0,o+.003,0,n,24),e.cap==="cube"){let f=Math.min(r,a)*.72;Ye(ki(f,f*1.05,f,.003,3),Mi(t.cap),0,o+.006+f*.525,0,n)}else ot(.017,.017,.036,Mi(t.cap),0,o+.024,0,n,48);return ul(r*.62,o*.32,0,o*.55,a/2+4e-4,ci("pf"+s.id,{name:s.name,size:s.size,fg:t.liquid==="#a8521c"?"#f5e3c9":"#2b1d1a",w:384,h:256,rule:!0}),n),{root:n,hot:Cn(0,o*.6,a/2),h:o+.04,w:r,d:a}}function vg(s,e){let t=s.attributes.position;for(let n=0;n<t.count;n++){let i=(t.getY(n)+e/2)/e,r=Math.pow(i,1.6);t.setZ(n,t.getZ(n)*(1-r*.92)),t.setX(n,t.getX(n)*(1+r*.28))}s.computeVertexNormals()}var mh={};function _h(s,e,t,n){let i=s.look,r=i.body||i.glass||i.liquid||i.shade||"#efe4dc",o=new Te(r),a={};o.getHSL(a);let l=a.l>.6?ts.wine:"#f6ece4",c=s.id;if(!mh[c]){let h=na("c"+c,{bg:r,fg:l,name:s.name,size:s.size,w:bi.base>.6?384:256,h:bi.base>.6?576:384}),u=new nt({color:r,roughness:.55}),f=new nt({map:h,roughness:.5});mh[c]=[u,u,u,u,f,u]}return Ye(new un(e,t,n),mh[c])}function yg(s,e,t,n,i,r=1,o=1,a=.006){_h(s,e,t,n);let l=mh[s.id],c=new ls(new un(e,t,n),l,i*r*o),h=new Ke,u=new ei,f=new oi,d=new U,g=new U(1,1,1),_=0,p=new Ke().makeScale(0,0,0);for(let m=0;m<o;m++)for(let b=0;b<r;b++)for(let M=0;M<i;M++){if(m===o-1&&Math.random()<.09){c.setMatrixAt(_++,p);continue}f.set(0,(Math.random()-.5)*(Math.random()<.12?.35:.05),0),u.setFromEuler(f),d.set((M-(i-1)/2)*(e+a)+(Math.random()-.5)*.004,t/2+m*(t+.001),-b*(n+a)+(Math.random()<.1?.012:0)),c.setMatrixAt(_++,h.compose(d,u,g))}return c.castShadow=!0,c.receiveShadow=!0,c}function Si(s){let e=YS[s.kind],t=e(s);return t.root.traverse(n=>{n.isMesh&&(n.receiveShadow=!0)}),t}var ia=class s extends Ie{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Qt;let n=this,i=t.color!==void 0?new Te(t.color):new Te(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||s.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new _i,u=new U,f=new U,d=new U,g=new Ke,_=new U(0,0,-1),p=new Et,m=new U,b=new U,M=new Et,v=new Ke,P=this.camera,T=new $t(r,o,{samples:c,type:Kt}),R=new Pt({name:l.name!==void 0?l.name:"unspecified",uniforms:ai.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});R.uniforms.tDiffuse.value=T.texture,R.uniforms.color.value=i,R.uniforms.textureMatrix.value=v,this.material=R,this.onBeforeRender=function(A,x,y){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(y.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),m.subVectors(f,d),m.dot(u)>0)return;m.reflect(u).negate(),m.add(f),g.extractRotation(y.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(d),b.subVectors(f,_),b.reflect(u).negate(),b.add(f),P.position.copy(m),P.up.set(0,1,0),P.up.applyMatrix4(g),P.up.reflect(u),P.lookAt(b),P.far=y.far,P.updateMatrixWorld(),P.projectionMatrix.copy(y.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(P.projectionMatrix),v.multiply(P.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(P.matrixWorldInverse),p.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let w=P.projectionMatrix;M.x=(Math.sign(p.x)+w.elements[8])/w.elements[0],M.y=(Math.sign(p.y)+w.elements[9])/w.elements[5],M.z=-1,M.w=(1+w.elements[10])/w.elements[14],p.multiplyScalar(2/p.dot(M)),w.elements[2]=p.x,w.elements[6]=p.y,w.elements[10]=p.z+1-a,w.elements[14]=p.w,n.visible=!1;let B=A.getRenderTarget(),F=A.xr.enabled,O=A.shadowMap.autoUpdate;A.xr.enabled=!1,A.shadowMap.autoUpdate=!1,A.setRenderTarget(T),A.state.buffers.depth.setMask(!0),A.autoClear===!1&&A.clear(),A.render(x,P),A.xr.enabled=F,A.shadowMap.autoUpdate=O,A.setRenderTarget(B);let q=y.viewport;q!==void 0&&A.state.viewport(q),n.visible=!0},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()}}};ia.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var fe={x:7,front:5,back:-17,ceil:4,fT:.45,bayZ:[-.6,-3.4,-6.2,-9],bayW:2.5,scentZ:-4.6,bodyZ:-10.2,deskZ:-14.6,entryZ:1.5};function bg(s,{extEnv:e,models:t,quality:n}){let i=n==="high",r=Wn(),o={reflOn:!0,hideFor(D,V){if(!D||!D.length)return V();let C=o._vis&&o._vis.length>=D.length?o._vis:o._vis=new Uint8Array(D.length*2);for(let $=0;$<D.length;$++)C[$]=D[$].visible?1:0,D[$].visible=!1;V();for(let $=0;$<D.length;$++)D[$].visible=C[$]===1},extLights:[],frontLights:[],frameId:0,products:[],obstacles:[],occluders:[],emitters:[],doors:[],lights:[],blinkers:[],extMats:[],spinners:[]},a=dh(7),l=D=>(D.envMap=e,o.extMats.push(D),D),c=ns("stone_light",1,1),h=new at({map:c.map,normalMap:c.normalMap,normalScale:new _e(.5,.5),roughnessMap:c.roughnessMap,roughness:.42,clearcoat:.45,clearcoatRoughness:.15,color:15524825}),u=ns("plaster_blush",2.2,1.4),f=new nt({map:u.map,normalMap:u.normalMap,normalScale:new _e(.05,.05),roughness:.9,color:16775412}),d=new nt({color:15459292,roughness:.95,emissive:16773606,emissiveIntensity:0}),g=ns("american_walnut_veneer",1.5,1.5),_=new at({map:g.map,normalMap:g.normalMap,normalScale:new _e(.4,.4),roughness:.42,clearcoat:.5,clearcoatRoughness:.25,color:13213048}),p=ns("american_walnut_veneer",1,2,{rot:Math.PI/2}),m=new at({map:p.map,normalMap:p.normalMap,roughness:.42,clearcoat:.5,clearcoatRoughness:.25,color:13213048}),b=ns("stone_light",.6,.6),M=new at({map:b.map,normalMap:b.normalMap,normalScale:new _e(.15,.15),roughness:.3,clearcoat:.6,clearcoatRoughness:.12,color:16513269}),v=QS(),P=new nt({map:Sn(256,128,(D,V,C)=>{D.fillStyle="#3a1f2b",D.fillRect(0,0,V,C),D.fillStyle="#c9a46a",D.font=`500 30px ${li}`,D.textAlign="center",D.fillText("S A E L L E",V/2,C/2+10)}),roughness:.7}),T=new at({color:16777215,roughness:.05,transparent:!0,opacity:.25,depthWrite:!1}),R={},A=D=>R[D.id]||(R[D.id]=new nt({roughness:.55,map:Sn(256,64,(V,C,$)=>{V.fillStyle="#fbf7f4",V.fillRect(0,0,C,$),V.fillStyle="#3a1f2b",V.font=`600 22px ${dn}`,V.textAlign="left",V.fillText("₹"+D.price.toLocaleString("en-IN"),12,40),V.font=`500 13px ${dn}`,V.fillStyle="#7a5a60",V.textAlign="right",V.fillText(D.size||"",C-12,39)})})),x={},y=(D,V)=>{let C=D.uuid+V;if(x[C])return x[C];let $=D.clone();return $.normalMap=v.clone(),$.normalMap.wrapS=$.normalMap.wrapT=Nn,$.normalMap.repeat.set(V,1),$.normalMap.anisotropy=8,$.normalMap.minFilter=Qn,$.normalMap.generateMipmaps=!0,$.normalScale=new _e(.5,.5),$.normalMap.needsUpdate=!0,x[C]=$},w=new at({color:6434876,roughness:.5,clearcoat:.55,clearcoatRoughness:.2,normalMap:v,normalScale:new _e(.8,.8)}),B=new at({color:14926261,roughness:.45,clearcoat:.55,clearcoatRoughness:.2,normalMap:v,normalScale:new _e(.8,.8)}),F=new nt({color:13015906,metalness:1,roughness:.32,normalMap:v,normalScale:new _e(1.6,1.6)}),O=ns("velour_velvet",2,2),q=new at({map:O.map,normalMap:O.normalMap,color:14263974,roughness:.9,sheen:.6,sheenRoughness:.7,sheenColor:new Te(15780032),side:Di}),k=new Fe;k.name="interior",s.add(k);let ae=fe.x*2,Y=fe.front-fe.back;c.map.repeat.set(ae/2.4,Y/2.4),c.normalMap.repeat.copy(c.map.repeat),c.roughnessMap.repeat.copy(c.map.repeat);let he;if(i){he=new ia(new wt(ae,Y),{textureWidth:Math.round(innerWidth*.4),textureHeight:Math.round(innerHeight*.4),clipBias:.002,multisample:0});let D=he.material.uniforms.textureMatrix.value,V=he.getRenderTarget().texture;he.material=eE(h,V,D);let C=he.onBeforeRender,$=-1;he.onBeforeRender=function(j,ie,ee){let ne=o.frameId;ee!==o.mainCamera||ne===$||o.outdoors||!o.reflOn||ne&1||($=ne,o.hideFor(o.noReflect,()=>C.call(this,j,ie,ee)))},o.reflector=he}else he=new Ie(new wt(ae,Y),h);he.rotation.x=-Math.PI/2,he.position.set(0,0,(fe.front+fe.back)/2),he.receiveShadow=!0,k.add(he);let Se=zi(Y,fe.ceil,f,-fe.x,fe.ceil/2,(fe.front+fe.back)/2,k);Se.rotation.y=Math.PI/2,Se.receiveShadow=!0;let Re=zi(Y,fe.ceil,f,fe.x,fe.ceil/2,(fe.front+fe.back)/2,k);Re.rotation.y=-Math.PI/2,Re.receiveShadow=!0;let K=zi(ae,fe.ceil,f,0,fe.ceil/2,fe.back,k);K.receiveShadow=!0;let tt=zi(ae,Y,d,0,fe.ceil,(fe.front+fe.back)/2,k);tt.rotation.x=Math.PI/2;for(let D of[-1,1])Ue(.02,.1,Y,_,D*(fe.x-.01),.05,(fe.front+fe.back)/2,k);Ue(ae,.1,.02,_,0,.05,fe.back+.01,k);for(let D of[-1,1]){Ue(.5,.18,Y,d,D*(fe.x-.25),fe.ceil-.09,(fe.front+fe.back)/2,k);let V=Ue(.02,.02,Y,r.led,D*(fe.x-.52),fe.ceil-.17,(fe.front+fe.back)/2,k);V.castShadow=!1}Ue(ae-1,.18,.5,d,0,fe.ceil-.09,fe.back+.25,k),Ue(ae-1,.02,.02,r.led,0,fe.ceil-.17,fe.back+.52,k).castShadow=!1;let le=r.blackMatte;for(let D of[-3.4,0,3.4]){Ue(.04,.035,19,le,D,fe.ceil-.02,-6.2,k).castShadow=!1;for(let V=3;V>-15.5;V-=1.55){let C=new Fe;C.position.set(D,fe.ceil-.04,V),k.add(C),ot(.012,.012,.08,le,0,-.04,0,C,12).castShadow=!1;let $=new Fe;$.position.y=-.09,C.add($);let j=D===0?0:-Math.sign(D);$.rotation.z=j*.55,$.rotation.x=.12*Math.sin(V*3.1),ot(.034,.03,.13,le,0,-.03,0,$,20).castShadow=!1;let ie=ot(.025,.025,.004,r.led,0,-.096,0,$,20);ie.castShadow=!1}}let z={};for(let D of Rn)z[D.id]=D;let ge=new At({map:tE(),color:new Te(1,.8,.6),transparent:!0,opacity:.55,blending:as,depthWrite:!1}),ue=new At({map:nE(),color:new Te(1,.78,.58),transparent:!0,opacity:.16,blending:as,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),be=D=>{let V=D==="L"?-1:1,C=new Fe;C.position.set(V*fe.x,0,0),C.rotation.y=-V*Math.PI/2,k.add(C);let $=D==="L"?hl("#e6c7b8","#dcb5a5","#c8998a"):hl("#e3b9b9","#d29fa2","#b57a80"),j=new nt({map:$,roughness:.92,emissive:16777215,emissiveMap:$,emissiveIntensity:D==="L"?.12:.11}),ie=D==="L"?m:y(w,7),ee=fe.bayZ;for(let J=0;J<=ee.length;J++){let se=(J-ee.length/2)*(fe.bayW+.3)*1-0,te=J===0?ee[0]+(fe.bayW/2+.15):J===ee.length?ee[ee.length-1]-(fe.bayW/2+.15):(ee[J-1]+ee[J])/2,Me=D==="L"?-te:te;Ue(.3,3.62,.5,ie,Me,1.81,.25,C,.01),Ue(.32,.06,.52,r.brass,Me,3.65,.26,C)}ee.forEach((J,se)=>{let te=D==="L"?-J:J,Me=new Fe;Me.position.set(te,0,0),C.add(Me),Ue(fe.bayW,.82,.48,y(D==="L"?B:w,62),0,.41,.24,Me),Ue(fe.bayW,.08,.47,r.blackMatte,0,.04,.22,Me),Ue(fe.bayW+.02,.04,.52,M,0,.84,.26,Me);let ve=.86,Ce=1.55,Xe=fe.bayW-.1,pe=ks(Xe,Ce),Ee=new Ie(new hs(pe,32),j);Ee.position.set(0,ve,.02),Ee.receiveShadow=!0,Me.add(Ee),jd(Ee.geometry,Xe,Ce+Xe/2);let Oe=Kd(Xe+.06,Ce,.03),Ne=new Ie(new Ni(Oe,{depth:.05,bevelEnabled:!1,curveSegments:40}),r.brass);Ne.position.set(0,ve,.45),Me.add(Ne);let we=new cs;we.moveTo(-fe.bayW/2,0),we.lineTo(fe.bayW/2,0),we.lineTo(fe.bayW/2,3.62-ve),we.lineTo(-fe.bayW/2,3.62-ve),we.closePath(),we.holes.push(ks(Xe+.06,Ce));let rt=new Ie(new Ni(we,{depth:.06,bevelEnabled:!1,curveSegments:40}),f);rt.position.set(0,ve,.44),rt.receiveShadow=!0,Me.add(rt);let qe=Ue(.02,Ce,.44,f,-Xe/2-.02,ve+Ce/2,.24,Me),ht=Ue(.02,Ce,.44,f,Xe/2+.02,ve+Ce/2,.24,Me),H=[1.2,1.6,2];for(let Le of H){let ft=Ue(Xe-.02,.012,.36,r.shelfGlass,0,Le,.22,Me);ft.castShadow=!1,ft.renderOrder=3,Ue(Xe-.02,.022,.012,r.brass,0,Le-.004,.405,Me).castShadow=!1;let gt=Ue(Xe-.1,.006,.01,r.ledSoft,0,Le-.012,.38,Me);gt.castShadow=!1;let st=new Ie(new wt(Xe-.06,.34),ge);st.position.set(0,Le-.18,.026),st.name="glowpool",Me.add(st)}let De=new Ie(new wt(fe.bayW+.6,1.5),ue);De.rotation.x=-Math.PI/2,De.position.set(0,.004,.95),De.name="glowpool",Me.add(De);let ce=Rn.filter(Le=>Le.slot.wall===D&&Le.slot.bay===se);ce.forEach(Le=>{let ft=H[Le.slot.row],gt=Ae(Le,Me,0,ft+.006,.27,(Xe-.16)*.9,{across:i?18:9,deep:1});gt.normal=new U(-V,0,0);let st=Math.max(.045,Math.min(.09,gt.unitW+.004)),Bt=Math.min(.34,Math.max(.08,gt.unitH*1.02)),hn=Math.max(.045,Math.min(.08,st)),Jt=Math.floor((Xe-.12)/(st+.006)),ys=yg(Le,st,Bt,hn,Jt,1,Bt<.15?2:1);ys.position.set(0,ft+.006,.27-(gt.unitD||.05)/2-hn/2-.012),Me.add(ys);let Lt=new Ie(new wt(.11,.026),A(Le));Lt.position.set(-.35+Le.slot.row%2*.12,ft-.006,.4135),Me.add(Lt),o.products.push(gt)});let ye=H[2]+.006;if(ce.forEach((Le,ft)=>{let gt=(ft===0?-1:1)*.55,st=3;for(let hn=0;hn<st;hn++){let Jt=_h(Le,.07,.13,.07);Jt.position.set(gt+(hn-1)*.085,ye+.065,.2),Jt.rotation.y=(a()-.5)*.06,Me.add(Jt)}let Bt=_h(Le,.07,.13,.07);Bt.position.set(gt,ye+.13+.065,.2),Bt.rotation.y=.2,Me.add(Bt)}),t.vase1&&se%2===0){let Le=t.vase1.clone();Le.scale.setScalar(.62),Le.position.set(0,ye,.2),Me.add(Le)}else if(t.vase3){let Le=t.vase3.clone();Le.scale.setScalar(.55),Le.position.set(0,ye,.2),Me.add(Le)}let He=Ue(.42,.012,.22,r.brushedBrass,-.55,.866,.27,Me,.004);ce.forEach((Le,ft)=>{let gt=Si(Le).root;gt.position.set(-.65+ft*.2,.872,.27),gt.rotation.y=.3-ft*.5,Me.add(gt)});let Be=new Ie(new wt(.14,.05),new nt({map:na("tester",{bg:"#fbf7f4",fg:ts.wine,name:"Try me",size:null,small:"TESTER",w:512,h:180,rule:!1}),roughness:.6}));Be.position.set(-.55,.9,.39),Be.rotation.x=-.6,Me.add(Be);{let Le=new Fe;Le.position.set(se%2?.25:.62,.866,.2),Le.rotation.y=.15-se%2*.3,Me.add(Le),Ue(.12,.075,.12,P,0,.0375,0,Le,.006);let ft=new Ie(new qr(.035,.05,5,1,!0),r.paper);ft.position.set(0,.095,0),ft.rotation.set(.25,.4,.1),ft.scale.set(1,1,.35),Le.add(ft);let gt=ot(.035,.035,.08,T,se%2?.16:-.16,.04,.02,Le,24);for(let st=0;st<5;st++){let Bt=ot(.026,.026,.008,r.paper,se%2?.16:-.16,.008+st*.012,.02,Le,18);Bt.rotation.z=(a()-.5)*.2}ot(.037,.037,.012,r.brass,se%2?.16:-.16,.086,.02,Le,24)}if(se%2===1){let Le=new Fe;Le.position.set(.6,.86,.22),Me.add(Le),ot(.06,.07,.012,r.brass,0,.006,0,Le,32),ot(.006,.006,.2,r.brass,0,.11,0,Le,12);let ft=new Ie(new Ls(.11,.008,12,48),r.brass);ft.position.y=.32,Le.add(ft);let gt=new Ie(new Xr(.105,48),r.mirror);if(gt.position.set(0,.32,.002),Le.add(gt),Le.rotation.y=-.25,t.plant4){let st=t.plant4.clone();st.scale.setScalar(.9),st.position.set(.95,.86,.24),Me.add(st)}}else if(t.plant4){let Le=t.plant4.clone();Le.position.set(.9,.86,.22),Me.add(Le)}});let ne=D==="L"?["Skincare","01"]:["Makeup","03"],xe=(ee[0]+ee[ee.length-1])/2,I=new Ie(new wt(4.2,.28),new nt({map:$d(ne[0],ne[1]),transparent:!0,metalness:.6,roughness:.35,color:16777215}));I.position.set(D==="L"?-xe:xe,3.78,.52),C.add(I);let S=ee[ee.length-1]-fe.bayW/2-.3,G=ee[0]+fe.bayW/2+.3;return o.obstacles.push({x0:V<0?-fe.x:fe.x-.58,x1:V<0?-fe.x+.58:fe.x,z0:S,z1:G}),C};be("L"),be("R");{let D=new Fe;D.position.set(0,0,fe.entryZ),k.add(D),ot(.18,.3,.06,r.brass,0,.03,0,D,48),ot(.16,.16,.82,y(B,26),0,.47,0,D,64),Ye(Rt([[0,0],[.74,0],[.76,.02],[.76,.045],[.74,.06],[0,.06]],96),M,0,.88,0,D);let V=[[.42,.09],[.28,.2],[.15,.32]];for(let[ee,ne]of V)Ye(Rt([[0,0],[ee,0],[ee,ne],[0,ne]],64),r.porcelain,0,.94,0,D);let C=Rn.find(ee=>ee.slot.table==="entry"),$=Ge(C,D,[[0,.94+.32,0,1],[.21,.94+.2,.06,0],[-.21,.94+.2,.06,0],[.32,.94+.09,.22,0],[-.32,.94+.09,.22,0],[0,.94+.09,.36,0],[.12,.94+.2,-.22,0],[-.12,.94+.2,-.22,0]]);$.normal=null,o.products.push($);let j=new Ie(new wt(.22,.3),new nt({map:aE(),roughness:.6})),ie=new Fe;if(ie.position.set(.48,.94,.34),ie.rotation.y=-.5,D.add(ie),j.position.set(0,.17,0),j.rotation.x=-.12,ie.add(j),Ue(.24,.01,.06,r.brass,0,.005,-.01,ie),t.vase1){let ee=t.vase1.clone();ee.position.set(-.45,.94,-.25),D.add(ee)}cl(1.9,1.9,0,0,0,D,.35),o.obstacles.push({x0:-.85,x1:.85,z0:fe.entryZ-.85,z1:fe.entryZ+.85,occ:!1})}{let D=new Fe;D.position.set(0,0,fe.scentZ),k.add(D);let V=3.6,C=1.2,$=xh(V,C),j=new Ni($,{depth:.86,bevelEnabled:!1,curveSegments:40});j.rotateX(-Math.PI/2),JS(j);let ie=new Ie(j,w);ie.position.y=.06,ie.castShadow=ie.receiveShadow=!0,D.add(ie);let ee=new Ni(xh(V-.08,C-.08),{depth:.06,bevelEnabled:!1,curveSegments:40});ee.rotateX(-Math.PI/2),D.add(new Ie(ee,r.blackMatte));let ne=new Ni(xh(V+.06,C+.06),{depth:.045,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:3,curveSegments:48});ne.rotateX(-Math.PI/2),Sg(ne,.7);let xe=new Ie(ne,M);xe.position.y=.92,xe.castShadow=xe.receiveShadow=!0,D.add(xe);let I=new Ni(xh(V+.005,C+.005),{depth:.012,bevelEnabled:!1,curveSegments:40});I.rotateX(-Math.PI/2);let S=new Ie(I,r.brass);S.position.y=.9,D.add(S),Rn.filter(Ee=>Ee.slot.table==="scent").forEach((Ee,Oe)=>{let Ne=(Oe-2.5)*.56,we=.18-Math.abs(Oe-2.5)*.03,rt=[.16,.24,.12,.2,.1,.18][Oe],qe=new Fe;qe.position.set(Ne,.965,we),D.add(qe),Ye(Rt([[0,0],[.085,0],[.085,rt],[0,rt]],48),r.porcelain,0,0,0,qe);let ht=ot(.086,.086,.006,r.led,0,rt-.004,0,qe,48);ht.castShadow=!1,ot(.09,.09,.008,r.brass,0,.004,0,qe,48);let H=Ge(Ee,qe,[[0,rt,0,1],[-.12,-0,.05,0],[.12,0,.05,0]].map(([De,ce,ye,He])=>[De,ce,ye,He]),{yRot:-Ne*.08});H.normal=null,o.products.push(H)});let J=new Fe;J.position.set(0,.965,-.3),D.add(J),ot(.12,.12,.02,r.plumLacquer,0,.01,0,J,48);let se=Ye(Rt([[.11,0],[.11,.22],[.09,.28],[.05,.305],[0,.31]],48),ds("#ffffff",{thickness:.004}),0,.02,0,J);se.castShadow=!1,ot(.012,.012,.03,r.brass,0,.345,0,J,16);let te=Si(Rn.find(Ee=>Ee.id==="jasmine-night")).root;te.scale.setScalar(1.6),te.position.y=.02,J.add(te);let Me=new Fe;Me.position.set(1.15,.965,-.15),D.add(Me),ot(.035,.04,.09,r.brass,0,.045,0,Me,24);for(let Ee=0;Ee<9;Ee++){let Oe=Ue(.012,.15,.0015,r.paper,(a()-.5)*.03,.15,(a()-.5)*.03,Me);Oe.rotation.set((a()-.5)*.4,a()*3,(a()-.5)*.4),Oe.castShadow=!1}let ve=new Fe;ve.position.set(-1.2,.965,-.2),D.add(ve),Ye(Rt([[0,0],[.04,0],[.045,.04],[.035,.09],[.006,.11],[0,.11]],40),ds("#f7d4dc",{thickness:.02,dist:.08}),0,0,0,ve),ot(.005,.005,.05,r.gold,0,.13,0,ve,12);let Ce=Ye(new cr(.022,24,16),new at({color:13214826,roughness:.6,sheen:1,sheenColor:new Te(16770500)}),.03,.12,0,ve),Xe=Ye(new fn(.004,.004,.06,8),r.gold,.012,.13,0,ve);Xe.rotation.z=Math.PI/2,o.emitters.push({obj:ve,p:new U(-.005,.155,0),d:new U(-.6,.35,.7),k:"mist",w:.02,rate:0,puff:!0});for(let Ee of[-1.1,0,1.1])KS(k,Ee,fe.scentZ,2.55+(Ee===0?-.1:0),r);let pe=1;o.obstacles.push({x0:-V/2-.12,x1:V/2+.12,z0:fe.scentZ-C/2-.08,z1:fe.scentZ+C/2+.08,occ:!1}),cl(V+.8,C+.8,0,0,0,D,.4)}{let D=new Fe;D.position.set(0,0,fe.bodyZ),k.add(D);let V=3.4,C=1.1;if(Ue(V,.74,C,_,0,.43,0,D,.01),Ue(V-.08,.06,C-.08,r.blackMatte,0,.03,0,D),Ue(V+.04,.05,C+.04,M,0,.825,0,D,.006),Ue(V-.5,.16,.34,r.porcelain,0,.93,-.18,D,.01),Ue(V-1.3,.14,.26,r.porcelain,0,1.08,-.2,D,.01),Rn.filter(ie=>ie.slot.table==="body").forEach((ie,ee)=>{let ne=(ee-2.5)*.52,xe=Ae(ie,D,ne,.85,.2,.46,{across:i?3:2,deep:i?2:1,spacing:.012});xe.normal=new U(0,0,1),o.products.push(xe);let I=Si(ie).root;I.position.set(ne,1.01,-.16),I.rotation.y=.2,D.add(I)}),t.brass){let ie=t.brass.clone();ie.scale.setScalar(.62),ie.position.set(0,1.15,-.2),D.add(ie)}for(let ie=0;ie<3;ie++)Ue(.26,.035,.18,Bs(ie===1?"#e9d6cc":"#f5eee8",.95),1.4,.87+ie*.035,-.32,D,.012);cl(V+.7,C+.7,0,0,0,D,.4),o.obstacles.push({x0:-V/2-.1,x1:V/2+.1,z0:fe.bodyZ-C/2-.1,z1:fe.bodyZ+C/2+.1,occ:!1});let j=new Ie(new wt(1.4,.18),new nt({map:$d("Hair & Body","04","#5a2e33"),transparent:!0,roughness:.5}));j.position.set(0,.5,C/2+.003),D.add(j)}{let D=new Ie(new wt(1.4,.18),new nt({map:$d("Fragrance","02","#f3e2d6"),transparent:!0,roughness:.5}));D.position.set(0,.6,fe.scentZ+.6+.004),k.add(D)}{let D=new Fe;D.position.set(0,0,fe.deskZ),k.add(D);let V=3.4,C=.7,$=1;Ue(V,$-.05,.04,y(m,64),0,($-.05)/2,C/2-.02,D),Ue(V+.004,.022,.05,r.brass,0,$-.07,C/2-.015,D),Ue(V+.004,.018,.05,r.brass,0,.075,C/2-.015,D),Ue(V,$-.05,C-.04,_,0,($-.05)/2,-.02,D),Ue(V+.06,.05,C+.08,M,0,$-.025,0,D,.008),Ue(V-.08,.06,C-.2,r.blackMatte,0,.03,0,D);let j=new Fe;j.position.set(-.6,$,.05),D.add(j),ot(.07,.08,.012,r.chrome,0,.006,0,j,32),ot(.012,.012,.2,r.chrome,0,.11,-.02,j,16);let ie=new Fe;ie.position.set(0,.25,0),ie.rotation.x=-.25,j.add(ie),Ue(.34,.24,.014,r.blackLacquer,0,0,0,ie,.012);let ee=Sn(680,460,()=>{}),ne=new Ie(new wt(.32,.215),jr(ee,1.1));ne.position.z=.008,ie.add(ne),o.deskScreen=ee;let xe=new Fe;xe.position.set(-.15,$,.18),xe.rotation.set(-.3,.3,0),D.add(xe),Ue(.08,.025,.16,r.blackMatte,0,.012,0,xe,.01);let I=new Ie(new wt(.06,.06),jr(Sn(128,128,(pe,Ee,Oe)=>{pe.fillStyle="#0b0b0d",pe.fillRect(0,0,Ee,Oe),pe.fillStyle="#d9b77c",pe.font=`600 20px ${dn}`,pe.textAlign="center",pe.fillText("TAP",Ee/2,60),pe.strokeStyle="#d9b77c",pe.lineWidth=3;for(let Ne=14;Ne<40;Ne+=8)pe.beginPath(),pe.arc(Ee/2,92,Ne,-.7-Math.PI/2,.7-Math.PI/2),pe.stroke()}),1));I.rotation.x=-Math.PI/2,I.position.set(0,.026,-.03),xe.add(I);let S=new nt({map:oE(),roughness:.8}),G=Bs("#e8cfc3",.85);for(let[pe,Ee,Oe]of[[.85,1,-.2],[1.12,.78,.25]]){let Ne=new Fe;Ne.position.set(pe,$,-.05),Ne.rotation.y=Oe,Ne.scale.setScalar(Ee),D.add(Ne);let we=Ye(new un(.26,.32,.12),[G,G,G,G,S,S],0,.16,0,Ne);for(let qe of[-1,1]){let ht=Ye(new Ls(.05,.004,8,24,Math.PI),Bs("#5a2e33",.8),qe*0,.32,qe*.03,Ne);ht.position.x=0}let rt=Ye(new qr(.09,.08,5,1,!0),new nt({color:16047318,roughness:.9,side:Jn}),0,.34,0,Ne);rt.rotation.y=.4,rt.castShadow=!1}for(let[pe,Ee,Oe,Ne]of[[.35,.12,.14,"#5a2e33"],[.48,.1,.1,"#e9cfc5"]]){let we=Ue(Oe,Oe*.7,Oe,an(Ne,.5),pe,$+Oe*.35,Ee,D,.004);Ue(Oe+.002,Oe*.7+.002,.012,r.gold,pe,$+Oe*.35,Ee,D),Ue(.012,Oe*.7+.002,Oe+.002,r.gold,pe,$+Oe*.35,Ee,D)}if(t.vase3){let pe=t.vase3.clone();pe.position.set(-1.35,$,-.1),D.add(pe)}if(t.plant4){let pe=t.plant4.clone();pe.position.set(1.5,$,.15),D.add(pe)}o.desk=D,o.obstacles.push({x0:-2,x1:2,z0:fe.back,z1:fe.deskZ+C/2+.05});let J=new Fe;J.position.set(0,0,fe.back),k.add(J);let se=3,te=1.7,Me=new Ie(new hs(ks(se,te),48),jr(hl("#f2d3c5","#e9c0b0","#d29e8e"),.7));Me.position.set(0,.6,.01),J.add(Me),jd(Me.geometry,se,te+se/2);let ve=new Ie(new Ni(Kd(se+.08,te,.04),{depth:.05,bevelEnabled:!1,curveSegments:48}),r.brass);ve.position.set(0,.6,0),J.add(ve);let Ce=new Ie(new wt(2.2,.55),new nt({map:Eg("#b08a55"),transparent:!0,metalness:1,roughness:.28,color:16769712}));Ce.position.set(0,2.55,.06),J.add(Ce);let Xe=new Ie(new wt(1.6,.1),new At({map:Jd("SKIN · SCENT · COLOUR","#7a4a4a",1024,64,30),transparent:!0}));Xe.position.set(0,2.17,.06),J.add(Xe);for(let pe of[-1,1]){let Ee=pe*3.35;for(let Oe of[1.1,1.5,1.9]){Ue(1.6,.03,.32,_,Ee,Oe,.16,J,.004);for(let Ne=0;Ne<4;Ne++){let we=.12+a()*.06;Ue(we,we*.7,we*.9,an(["#5a2e33","#e9cfc5","#f6efe8","#c9a46a"][(Ne+(Oe*10|0))%4],.5),Ee-.6+Ne*.4,Oe+.015+we*.35,.16,J,.004)}}}}{let D=new Fe;D.position.set(4.9,0,fe.back),k.add(D),Ue(2.8,.06,.55,M,0,.92,.3,D,.006),Ue(2.7,.86,.5,y(w,66),0,.45,.25,D);let V=new At({color:new Te(3,2.6,2.1),toneMapped:!1}),C=th([-.7,.7].map(ie=>new Xr(.4,64).translate(ie,0,0))),$;if(i){$=new ia(C,{textureWidth:768,textureHeight:384,color:14473427,clipBias:.003});let ie=$.onBeforeRender,ee=-1,ne=new U,xe=new U;o.mirror={mesh:$,live:$.material,still:r.mirror},$.onBeforeRender=function(I,S,G){G!==o.mainCamera||o.frameId===ee||o.outdoors||(this.getWorldPosition(ne),!(ne.distanceToSquared(G.getWorldPosition(xe))>64)&&(ee=o.frameId,o.hideFor(o.noMirror,()=>ie.call(this,I,S,G))))}}else $=new Ie(C,r.mirror);$.position.set(0,1.55,.052),D.add($);for(let ie of[-.7,.7]){let ee=new Fe;ee.position.set(ie,1.55,.04),D.add(ee);let ne=new Ie(new Ls(.41,.014,12,72),r.brass);ne.position.z=.012,ee.add(ne);for(let I=0;I<14;I++){let S=I/14*Math.PI*2,G=Ye(new cr(.026,16,12),V,Math.cos(S)*.45,Math.sin(S)*.45,.03,ee);G.castShadow=!1}if(t.stool){let I=t.stool.clone();I.position.set(ie,0,1),I.rotation.y=Math.PI,D.add(I)}let xe=ot(.035,.035,.1,r.porcelain,ie+.3,.995,.35,D,32);for(let I=0;I<5;I++){let S=ot(.004,.003,.16,r.blackLacquer,ie+.3+(a()-.5)*.03,1.08,.35+(a()-.5)*.03,D,8);S.rotation.set((a()-.5)*.4,0,(a()-.5)*.4);let G=Ye(new qr(.008,.035,10),Bs("#c8a27a",.9),0,.09,0,S);G.rotation.x=Math.PI}}for(let[ie,ee,ne,xe,I]of[["palette",-.95,.32,.3,0],["blush",-.45,.42,-.4,0],["lip-sindoor",.05,.4,.8,0],["foundation",.45,.3,-.2,0],["lip-petal",.95,.42,1.9,0],["mascara",1.1,.3,.4,1]]){let S=Rn.find(J=>J.id===ie);if(!S)continue;let G=Si(S).root;G.position.set(ee,.95,ne),G.rotation.y=xe,I&&(G.rotation.z=Math.PI/2,G.position.y+=.012),D.add(G)}o.obstacles.push({x0:3.4,x1:fe.x,z0:fe.back,z1:fe.back+1.45});let j=new Fe;if(j.position.set(-4.9,0,fe.back+1.3),k.add(j),t.ottoman)for(let[ie,ee]of[[-.6,.3],[.7,-.4]]){let ne=t.ottoman.clone();ne.traverse(xe=>{xe.isMesh&&(xe.material=q)}),ne.position.set(ie,0,0),ne.rotation.y=ee,j.add(ne)}if(t.side){let ie=t.side.clone();ie.position.set(.05,0,-.55),j.add(ie)}if(t.tree){let ie=t.tree.clone();ie.position.set(-1.6,0,-.85),j.add(ie);let ee=t.tree.clone();ee.position.set(fe.x*2-3.6,0,-.9),ee.rotation.y=2,j.add(ee)}o.obstacles.push({x0:-fe.x,x1:-3.6,z0:fe.back,z1:fe.back+2.1})}if(t.tree)for(let D of[-1,1]){let V=t.tree.clone();V.scale.setScalar(.9),V.position.set(D*6.4,0,2.2),V.rotation.y=D,k.add(V),o.obstacles.push({x0:D*6.4-.5,x1:D*6.4+.5,z0:1.7,z1:2.7})}ZS(s,o,{ext:l,models:t,M:r,HI:i,wallMat:f}),o.bounds={x0:-fe.x+.35,x1:fe.x-.35,z0:fe.back+.35,z1:fe.front-.45},o.outside={x0:-9,x1:9,z0:fe.front+.75,z1:19},s.updateMatrixWorld(!0),o.occluders=[],s.traverse(D=>{if(D.isMesh&&!D.isInstancedMesh&&D.geometry&&(D.geometry.type==="BoxGeometry"||D.geometry.type==="ExtrudeGeometry")&&!D.material.transparent&&!(D.material.transmission>0)){let C=new on().setFromObject(D).getSize(new U);C.x*C.y+C.y*C.z>.5&&C.y>.5&&o.occluders.push(D)}});let Ve=new Set([...o.products.map(D=>D.root),...o.doors.map(D=>D.obj),...o.emitters.map(D=>D.obj).filter(Boolean)]);if(typeof location<"u"&&location.search.includes("audit")){let D={};for(let V of[s.getObjectByName("interior"),s.getObjectByName("exterior")])V.traverse(C=>{if(!C.isMesh||C.isInstancedMesh)return;let $=C.geometry,j=($.index?$.index.count:$.attributes.position.count)/3,ie=($.type==="BufferGeometry"?(C.name||C.parent.name||"?")+"|"+(C.material.name||C.material.type)+"|":"")+$.type+JSON.stringify($.parameters||{}).replace(/"(path|shapes|points|options)":\{?\[?[^\]]*\]?\}?/g,"").slice(0,90);D[ie]=D[ie]||[0,0],D[ie][0]+=j,D[ie][1]++});o.audit=Object.entries(D).sort((V,C)=>C[1][0]-V[1][0]).slice(0,30).map(([V,C])=>Math.round(C[0])+" x"+C[1]+" "+V)}for(let D of[ge,ue]){let V=[];if(s.traverse(j=>{j.isMesh&&j.name==="glowpool"&&j.material===D&&V.push(j)}),V.length<2)continue;let C=th(V.map(j=>j.geometry.clone().applyMatrix4(j.matrixWorld)),!1);V.forEach(j=>j.parent.remove(j));let $=new Ie(C,D);$.matrixAutoUpdate=!1,$.renderOrder=2,$.name="glowpools",s.getObjectByName("interior").add($)}return o.batchStats=$S(s,[s.getObjectByName("interior"),s.getObjectByName("exterior")],Ve),o;function Ae(D,V,C,$,j,ie,{across:ee=5,deep:ne=2,spacing:xe=.018}={}){let I=new Fe;I.position.set(C,$,j),V.add(I),bi.seg=bi.base*(ee>6?.45:.75);let S=Si(D);bi.seg=bi.base;let G=S.w+xe,J=S.d+.012,se=Math.max(1,Math.min(ee,Math.floor(ie/G))),te=[];for(let Ne=0;Ne<ne;Ne++)for(let we=0;we<se;we++)te.push(new U((we-(se-1)/2)*G,0,-Ne*J+(ne-1)*J/2));S.root.updateMatrixWorld(!0);let Me=S.root.matrixWorld.clone().invert(),ve=new Ke,Ce=new Ke,Xe=new Ke,pe=te.map(()=>({x:(a()-.5)*Math.min(.008,G*.08),z:(a()-.5)*.012,a:(a()-.5)*.07}));S.root.traverse(Ne=>{if(!Ne.isMesh)return;Ce.multiplyMatrices(Me,Ne.matrixWorld);let we=new ls(Ne.geometry,Ne.material,te.length);te.forEach((rt,qe)=>{let ht=pe[qe];we.setMatrixAt(qe,ve.makeTranslation(rt.x+ht.x,rt.y,rt.z+ht.z).multiply(Xe.makeRotationY(ht.a)).multiply(Ce))}),we.computeBoundingSphere(),we.computeBoundingBox(),we.castShadow=Ne.castShadow&&S.h>.08,we.receiveShadow=!0,we.renderOrder=Ne.renderOrder,I.add(we)});let Oe=te[Math.floor(se/2)].clone().add(S.hot);return cl(se*G+.04,ne*J+.04,0,.001,0,I,.5),{p:D,root:I,hot:Oe,unitH:S.h,unitW:S.w,unitD:S.d}}function Ge(D,V,C,{yRot:$=0}={}){let j=new Fe;V.add(j);let ie=null,ee=0;for(let[ne,xe,I,S]of C){let G=Si(D);G.root.position.set(ne,xe,I),G.root.rotation.y=$+(S?0:ne>0?-.35:ne<0?.35:0),!S&&C.length<=3&&G.root.scale.setScalar(.82),j.add(G.root),S&&(ie=new U(ne,xe,I).add(G.hot),ee=G.h)}return{p:D,root:j,hot:ie,unitH:ee}}}function ZS(s,e,{ext:t,models:n,M:i,HI:r,wallMat:o}){let a=new Fe;a.name="exterior",s.add(a);let l=fe.front,c=.5,h=ns("white_stucco_02",.9,.9),u=t(new nt({map:h.map,normalMap:h.normalMap,normalScale:new _e(.45,.45),roughnessMap:h.roughnessMap,color:15128258,roughness:.95})),f=t(new nt({map:h.map,normalMap:h.normalMap,normalScale:new _e(.45,.45),color:12166800,roughness:.9})),d=t(i.bronze.clone()),g=t(i.windowGlass.clone()),_=t(i.brass.clone()),p=20,m=9.4,b=new cs;b.moveTo(-p/2,-.4),b.lineTo(p/2,-.4),b.lineTo(p/2,m),b.lineTo(-p/2,m),b.closePath();let M=[{x:0,w:2.6,rect:2.75,door:!0},{x:-4.7,w:3.4,rect:2.35,sill:.55},{x:4.7,w:3.4,rect:2.35,sill:.55}];for(let z of M)b.holes.push(z.door?ks(z.w,z.rect+.2,z.x,-.2):ks(z.w,z.rect,z.x,z.sill||0));let v=[-6.6,-2.2,2.2,6.6];for(let z of v){let ge=new Wr;ge.moveTo(z-.75,5.95),ge.lineTo(z+.75,5.95),ge.lineTo(z+.75,8.1),ge.lineTo(z-.75,8.1),ge.closePath(),b.holes.push(ge)}let P=new Ni(b,{depth:c,bevelEnabled:!1,curveSegments:48});Sg(P,1);let T=new Ie(P,[u,u]);T.position.z=l,T.castShadow=T.receiveShadow=!0,a.add(T);let R=o.clone();R.side=Tn;let A=new Ie(new hs(b,48),R);A.position.z=l-.001,a.add(A);let x=l+c;Ue(p+.1,.5,.12,f,0,.25,x+.05,a);for(let z of[-9.7,-2,2,9.7])Ue(.5,4.55,.12,u,z,2.275,x+.05,a);let y=(z,ge)=>{Ue(p+.3,.16,ge,u,0,z,x+ge/2-.02,a),Ue(p+.4,.08,ge+.08,u,0,z+.12,x+ge/2+.02,a),Ue(p+.2,.06,ge-.06,f,0,z-.1,x+ge/2-.05,a)};y(4.6,.32),y(9.25,.42),Ue(p+.3,.6,.3,u,0,m+.3+.1,x-.1,a);for(let z=-9.8;z<=9.8;z+=.28)Ue(.12,.1,.08,u,z,4.45,x+.04,a);for(let z of M){let ge=z.sill||0,ue=new Ie(new Ni(Kd(z.w,z.rect,.08),{depth:.12,bevelEnabled:!1,curveSegments:48}),d);ue.position.set(z.x,ge,l+.18),a.add(ue);let be=Ue(.34,.5,.16,u,z.x,ge+z.rect+z.w/2+.16,x+.06,a);if(be.geometry=new fn(.14,.2,.5,4,1),be.rotation.y=Math.PI/4,be.scale.set(1,1,.45),z.door){Ue(z.w,.1,.12,d,z.x,z.rect,l+.24,a);let Ve=new Ie(new hs(jS(z.w/2-.04,32),32),g);Ve.position.set(z.x,z.rect+.05,l+.24),a.add(Ve);for(let D=1;D<6;D++){let V=Math.PI*D/6,C=Ue(.035,z.w/2-.06,.04,d,z.x+Math.cos(V)*(z.w/4-.02),z.rect+.05+Math.sin(V)*(z.w/4-.02),l+.245,a);C.rotation.z=V-Math.PI/2}for(let D of[-1,1]){let V=new Fe;V.position.set(z.x+D*(z.w/2-.08),0,l+.2),a.add(V);let C=z.w/2-.08,$=z.rect-.05,j=new Fe;j.position.x=-D*C/2,V.add(j),Ue(C,.12,.05,d,0,.06,0,j),Ue(C,.08,.05,d,0,$-.04,0,j),Ue(.07,$,.05,d,-C/2+.035,$/2,0,j),Ue(.07,$,.05,d,C/2-.035,$/2,0,j);let ie=zi(C-.1,$-.2,g,0,$/2+.02,0,j);ie.renderOrder=4;let ee=ot(.014,.014,.9,_,D*(-C/2+.14),1.05,.07,j,16);for(let ne of[.66,1.44]){let xe=ot(.008,.008,.06,_,D*(-C/2+.14),ne,.04,j,8);xe.rotation.x=Math.PI/2}e.doors.push({obj:V,open:-D*1.35,closed:0})}Ue(z.w+.4,.05,.5,f,z.x,.025,x+.25,a);let Ae=Ue(1.8,.012,1.1,Bs("#2b2321",.95),0,.006,l-.7,a),Ge=zi(1.2,.35,new nt({map:Jd("S A E L L E","#c9a46a",1024,256,120,li),transparent:!0,roughness:.9}),0,.0135,l-.7,a);Ge.rotation.x=-Math.PI/2}else{let Ve=new Ie(new hs(ks(z.w-.14,z.rect,0,0),48),g);Ve.position.set(z.x,ge,l+.24),Ve.renderOrder=4,a.add(Ve),Ue(.05,z.rect,.05,d,z.x-z.w/6,ge+z.rect/2,l+.26,a),Ue(.05,z.rect,.05,d,z.x+z.w/6,ge+z.rect/2,l+.26,a),Ue(z.w-.1,.05,.05,d,z.x,ge+z.rect,l+.26,a),Ue(z.w+.3,.1,.32,f,z.x,ge-.02,x+.08,a);let Ae=new Fe;Ae.position.set(z.x,0,l-.55),a.add(Ae);let Ge=new Ie(new hs(ks(z.w-.3,z.rect-.2),40),jr(hl("#f3d3c6","#eabfaf","#d99c8c"),.5));Ge.position.set(0,ge+.1,-.45),Ae.add(Ge),jd(Ge.geometry,z.w-.3,z.rect-.2+(z.w-.3)/2);let D=new Ie(new hs(ks(z.w-.3,z.rect-.2),40),o);D.position.set(0,ge+.1,-.452),D.rotation.y=Math.PI,Ae.add(D),Ue(z.w-.1,ge,.9,i.plumLacquer,0,ge/2,-.05,Ae);let V=[[-.75,.55,.34],[.1,.32,.42],[.85,.75,.3]];for(let[ee,ne,xe]of V)Ye(Rt([[0,0],[xe,0],[xe,ne],[0,ne]],64),i.blushLacquer,ee,ge,-.05,Ae);let C=Rn.find(ee=>ee.id===(z.x<0?"jasmine-night":"rose-atelier")),$=Si(C).root;$.scale.setScalar(5.2),$.position.set(.1,ge+.32,-.02),$.rotation.y=-.2,Ae.add($);let j=Rn.find(ee=>ee.id===(z.x<0?"dew-serum":"lip-sindoor"));for(let[ee,ne,xe]of[[-.75,.55,z.x<0?3.2:4.2],[.85,.75,z.x<0?2.6:3.4]]){let I=Si(j).root;I.scale.setScalar(xe),I.position.set(ee,ge+ne,-.05),I.rotation.y=.3,Ae.add(I)}if(n.brass){let ee=n.brass.clone();ee.position.set(-1.25,ge,-.2),ee.scale.setScalar(.9),Ae.add(ee)}let ie=new vi(16771023,r?16:12,4,.6,.6,1.4);ie.position.set(0,3.7,l-.2),ie.target.position.set(0,ge+.4,l-.7),a.add(ie,ie.target),e.frontLights.push(ie),e.obstacles.push({x0:z.x-z.w/2-.2,x1:z.x+z.w/2+.2,z0:l-1.2,z1:l+.2})}}let w=new Fe;w.position.set(0,5.35,x+.04),a.add(w);let B=new Ie(new wt(5.6,1.4),new At({map:iE(),transparent:!0,blending:as,depthWrite:!1,color:new Te(1.6,1.2,.85),toneMapped:!1}));w.add(B);let F=new Ie(new wt(4.4,1.1),t(new nt({map:Eg("#8a6a3e"),transparent:!0,metalness:.9,roughness:.32,color:16773336})));F.position.z=.05,w.add(F);let O=F.clone();O.material=F.material.clone(),O.material.color=new Te(2759696),O.position.set(.012,-.012,.03),w.add(O);let q=new Ie(new wt(2.6,.16),new At({map:Jd("SKIN · SCENT · COLOUR","#f1dcc4",1024,64,30),transparent:!0,color:new Te(1.3,1.2,1.1)}));q.position.set(0,-.62,.02),w.add(q);for(let z of[-1,1]){let ge=new Fe;ge.position.set(z*2,2.65,x+.23),a.add(ge),Ue(.1,.16,.06,d,0,0,-.06,ge);let ue=ot(.012,.012,.16,d,0,0,.02,ge,8);ue.rotation.x=Math.PI/2;let be=new Fe;be.position.set(0,.04,.16),ge.add(be),Ue(.2,.03,.2,d,0,.2,0,be),Ue(.16,.02,.16,d,0,-.16,0,be);let Ve=Ye(new qr(.15,.12,4),d,0,.28,0,be);Ve.rotation.y=Math.PI/4;for(let[D,V]of[[-1,-1],[1,-1],[-1,1],[1,1]])Ue(.014,.36,.014,d,D*.085,.02,V*.085,be);let Ae=Ue(.15,.3,.15,new At({color:new Te(2.4,1.7,1),toneMapped:!1}),0,.02,0,be);Ae.castShadow=!1;let Ge=new Os(16763279,7,6,1.8);Ge.position.set(0,.02,.1),be.add(Ge),e.extLights.push(Ge)}v.forEach((z,ge)=>{let ue=ge===1||ge===2,be=new Fe;be.position.set(z,5.95,l),a.add(be),Ue(1.5,2.15,.02,ue?jr(Mg(!0),.7):Bs("#1a1513",.8),0,1.075,-.15,be),Ue(1.5,.02,.5,u,0,0,.1,be),Ue(1.5,.02,.5,u,0,2.15,.1,be),Ue(.02,2.15,.5,u,-.75,1.075,.1,be),Ue(.02,2.15,.5,u,.75,1.075,.1,be);let Ve=zi(1.48,2.13,g,0,1.075,.05,be);Ve.renderOrder=4,Ue(.05,2.13,.05,i.ivory,0,1.075,.06,be),Ue(1.48,.05,.05,i.ivory,0,1.5,.06,be);for(let Ge of[-1,1])Ue(.06,2.15,.06,i.ivory,Ge*.72,1.075,.06,be);Ue(1.9,.14,.22,u,0,2.35,.6,be),Ue(1.75,.1,.16,f,0,2.26,.58,be);let Ae=new Fe;Ae.position.set(0,0,.75),be.add(Ae),Ue(1.8,.12,.4,u,0,-.06,-.08,Ae),Ue(1.7,.03,.03,d,0,.95,.08,Ae);for(let Ge=0;Ge<=16;Ge++)Ue(.016,.95,.016,d,-.85+Ge*(1.7/16),.475,.08,Ae);for(let Ge=0;Ge<4;Ge++){let D=new Ie(new Ls(.12,.008,6,20),d);D.position.set(-.6+Ge*.4,.45,.08),Ae.add(D)}});let k=ns("concrete_pavement",7,1.6),ae=t(new nt({map:k.map,normalMap:k.normalMap,roughnessMap:k.roughnessMap,color:11972262,roughness:.8})),Y=zi(40,5.2,ae,0,.012,l+c+2.6,a);Y.rotation.x=-Math.PI/2,Y.receiveShadow=!0,Ue(40,.15,.25,t(new nt({color:9275263,roughness:.7})),0,.06,l+c+5.3,a);let he=ns("clean_asphalt",8,3),Se=t(new at({map:he.map,normalMap:he.normalMap,roughnessMap:he.roughnessMap,color:3814964,roughness:.62,clearcoat:.75,clearcoatRoughness:.12,envMapIntensity:.6})),Re=zi(40,10,Se,0,-.05,l+c+10.4,a);Re.rotation.x=-Math.PI/2,Re.receiveShadow=!0;let K=t(new at({color:1841947,roughness:.04,metalness:0,clearcoat:1,clearcoatRoughness:.02,alphaMap:rE(),transparent:!0,depthWrite:!1,envMapIntensity:1.6}));for(let z=-18;z<18;z+=3.2){let ge=zi(1.6,.12,t(new nt({color:14209732,roughness:.6})),z,-.044,l+c+10.6,a);ge.rotation.x=-Math.PI/2}let tt=zi(40,6,ae,0,.012,l+c+18.4,a);tt.rotation.x=-Math.PI/2,Ue(40,.15,.25,t(new nt({color:9275263,roughness:.7})),0,.06,l+c+15.3,a);for(let z of[-1,1]){let ge=new Fe;if(ge.position.set(z*2.25,0,x+.75),a.add(ge),Ye(Rt([[0,0],[.34,0],[.4,.62],[.42,.66],[.38,.68],[0,.6]],48),t(new nt({color:3814192,roughness:.55,metalness:.2})),0,0,0,ge),n.tree){let ue=n.tree.clone();ue.scale.setScalar(1.05),ue.position.y=.42,ue.rotation.y=z*1.3,ge.add(ue)}e.obstacles.push({x0:z*2.25-.45,x1:z*2.25+.45,z0:x+.3,z1:x+1.2})}if(n.lamp)for(let z of[-8.6,8.6]){let ge=n.lamp.clone();ge.position.set(z,0,l+c+4.9),ge.rotation.y=Math.PI,a.add(ge);let ue=new Os(16761470,9,12,1.9);ue.position.set(z,3.7,l+c+4.4),a.add(ue),e.extLights.push(ue)}let le=(z,ge,ue,be,Ve)=>{let Ae=ge-z,Ge=new Fe;Ge.position.set((z+ge)/2,0,l+.2),a.add(Ge);let D=t(new nt({map:h.map,normalMap:h.normalMap,normalScale:new _e(.45,.45),color:be,roughness:.95}));Ue(Ae,ue,.6,D,0,ue/2,0,Ge);let V=dh(Ve),C=Math.floor(Ae/2.2);for(let $=0;$<Math.floor((ue-4.5)/2.8);$++)for(let j=0;j<C;j++){let ie=V()>.55,ee=-Ae/2+(j+.5)*(Ae/C),ne=5.4+$*2.8;Ue(1.1,1.7,.04,ie?jr(Mg(V()>.5),.5+V()*.4):Bs("#16120f",.7),ee,ne,.29,Ge),Ue(1.3,.1,.16,D,ee,ne-.9,.34,Ge)}Ue(Ae-1.2,2.8,.05,t(new nt({map:sE(),color:9078144,metalness:.3,roughness:.5})),0,1.7,.3,Ge),Ue(Ae-1,.5,.2,Bs("#2a2522",.6),0,3.4,.38,Ge)};le(-24,-10.05,12.5,13350822,3),le(10.05,24,11.2,12167578,9),e.extGroup=a}function $S(s,e,t){let n=new Map,i=0,r=new on,o=new U,a=g=>Object.keys(g.attributes).sort().map(_=>{let p=g.attributes[_];return p.isInterleavedBufferAttribute?"X":`${_}:${p.itemSize}:${p.array.constructor.name}:${p.normalized}`}).join(","),l=g=>g?g.uuid:"",c=new Map,h=new Map,u=g=>{if(c.has(g))return c.get(g);let _=g.uuid;if(!g.onBeforeCompile||g.onBeforeCompile===Gn.prototype.onBeforeCompile){let p=m=>typeof m=="number"?+m.toFixed(4):m;_=[g.type,g.color&&g.color.getHexString(),g.emissive&&g.emissive.getHexString(),p(g.emissiveIntensity),p(g.roughness),p(g.metalness),p(g.clearcoat),p(g.clearcoatRoughness),p(g.envMapIntensity),p(g.opacity),g.side,g.toneMapped,g.vertexColors,g.flatShading,g.depthWrite,g.polygonOffset,p(g.sheen),p(g.specularIntensity),p(g.ior),l(g.map),l(g.normalMap),g.normalScale&&g.normalScale.x.toFixed(3)+","+g.normalScale.y.toFixed(3),l(g.roughnessMap),l(g.metalnessMap),l(g.aoMap),l(g.emissiveMap),l(g.alphaMap),l(g.envMap),l(g.bumpMap),l(g.clearcoatNormalMap),p(g.anisotropy),g.name].join("|")}return c.set(g,_),h.has(_)||h.set(_,g),_};for(let g of e)g&&g.traverse(_=>{if(!_.isMesh||_.isInstancedMesh||_.isSkinnedMesh||(i++,_.material&&!Array.isArray(_.material)&&_.material.transparent&&(_.material.forceSinglePass=!0),_.onBeforeRender!==Xt.prototype.onBeforeRender)||Array.isArray(_.material)||_.material.transparent||_.renderOrder!==0)return;for(let P=_;P;P=P.parent)if(t.has(P)||!P.visible)return;if(_.matrixWorld.determinant()<0)return;let p=_.geometry,m=a(p);if(m.includes("X")||p.morphAttributes&&Object.keys(p.morphAttributes).length)return;r.setFromObject(_),r.getCenter(o);let b=Math.floor(o.x/12)+":"+Math.floor(o.z/10)+":"+(o.z>fe.front+.3?"o":"i"),M=u(_.material),v=M+"|"+m+"|"+_.castShadow+_.receiveShadow+"|"+b;n.has(v)||n.set(v,{mat:h.get(M),cs:_.castShadow,rs:_.receiveShadow,list:[]}),n.get(v).list.push(_)});let f=new Fe;f.name="batched";let d=0;for(let{mat:g,cs:_,rs:p,list:m}of n.values()){if(m.length<2)continue;let b=m.map(P=>{let T=P.geometry.index?P.geometry.toNonIndexed():P.geometry.clone();return T.clearGroups(),T.applyMatrix4(P.matrixWorld),T}),M=th(b,!1);if(b.forEach(P=>P.dispose()),!M)continue;let v=new Ie(M,g);v.castShadow=_,v.receiveShadow=p,v.matrixAutoUpdate=!1,f.add(v),d++;for(let P of m)P.parent.remove(P)}return s.add(f),{before:i,merged:d}}function KS(s,e,t,n,i){let r=new Fe;r.position.set(e,0,t),s.add(r),ot(.06,.06,.02,i.brass,0,fe.ceil-.01,0,r,24).castShadow=!1,ot(.004,.004,fe.ceil-n-.2,i.brass,0,(fe.ceil+n+.2)/2,0,r,8).castShadow=!1,ot(.03,.04,.06,i.brass,0,n+.19,0,r,24).castShadow=!1;let o=Ye(new cr(.18,40,28),i.opal,0,n,0,r);o.castShadow=!1}function ks(s,e,t=0,n=0){let i=new cs,r=s/2;return i.moveTo(t-r,n),i.lineTo(t+r,n),i.lineTo(t+r,n+e),i.absarc(t,n+e,r,0,Math.PI,!1),i.lineTo(t-r,n),i.closePath(),i}function Kd(s,e,t){let n=ks(s+t*2,e),i=new Wr,r=s/2;return i.moveTo(-r,0),i.lineTo(-r,e),i.absarc(0,e,r,Math.PI,0,!0),i.lineTo(r,0),i.closePath(),n.holes.push(i),n}function jS(s){let e=new cs;return e.moveTo(-s,0),e.absarc(0,0,s,Math.PI,0,!0),e.lineTo(-s,0),e}function xh(s,e){let t=e/2,n=s/2-t,i=new cs;return i.moveTo(-n,-t),i.lineTo(n,-t),i.absarc(n,0,t,-Math.PI/2,Math.PI/2,!1),i.lineTo(-n,t),i.absarc(-n,0,t,Math.PI/2,Math.PI*1.5,!1),i.closePath(),i}function jd(s,e,t){let n=s.attributes.position,i=s.attributes.uv;for(let r=0;r<n.count;r++)i.setXY(r,(n.getX(r)+e/2)/e,n.getY(r)/t);i.needsUpdate=!0}function Sg(s,e){let t=s.attributes.position,n=s.attributes.uv;for(let i=0;i<t.count;i++)n.setXY(i,t.getX(i)*e,(t.getY(i)+t.getZ(i))*e);n.needsUpdate=!0}function JS(s){let e=s.attributes.position,t=s.attributes.uv;for(let n=0;n<e.count;n++){let i=Math.atan2(e.getZ(n),e.getX(n)),r=e.getX(n);t.setXY(n,(r+Math.sign(e.getZ(n)||1)*0)*14+i*0,e.getY(n))}t.needsUpdate=!0}function QS(){return Sn(256,4,(s,e,t)=>{let n=s.createImageData(e,t);for(let i=0;i<e;i++){let r=i/e,o=Math.sin(r*Math.PI*2)*.85,a=Math.sqrt(1-o*o);for(let l=0;l<t;l++){let c=(l*e+i)*4;n.data[c]=(o*.5+.5)*255,n.data[c+1]=128,n.data[c+2]=(a*.5+.5)*255,n.data[c+3]=255}}s.putImageData(n,0,0)},{srgb:!1})}function eE(s,e,t){let n=s.clone();return n.userData.reflAmt={value:1},n.onBeforeCompile=i=>{i.uniforms.tReflect={value:e},i.uniforms.reflMatrix={value:t},i.uniforms.uReflAmt=n.userData.reflAmt,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 reflMatrix; varying vec4 vReflUv;`).replace("#include <project_vertex>",`#include <project_vertex>
vReflUv = reflMatrix * vec4( position, 1.0 );`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D tReflect; uniform float uReflAmt; varying vec4 vReflUv;`).replace("#include <opaque_fragment>",`
        vec2 rUv = vReflUv.xy / vReflUv.w + normal.xy * 0.006;
        float bl = 0.002 + roughnessFactor * 0.007;
        vec3 refl = texture2D(tReflect, rUv).rgb * 0.36;
        refl += texture2D(tReflect, rUv + vec2(bl, 0.)).rgb * 0.16; refl += texture2D(tReflect, rUv - vec2(bl, 0.)).rgb * 0.16;
        refl += texture2D(tReflect, rUv + vec2(0., bl)).rgb * 0.16; refl += texture2D(tReflect, rUv - vec2(0., bl)).rgb * 0.16;
        refl = min(refl, vec3(1.6)); // a bulb's reflection stays a soft highlight, not a glowing block
        float fres = 0.18 + 0.82 * pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 4.0);
        outgoingLight += refl * fres * 0.5 * uReflAmt * (1.0 - roughnessFactor * 0.75);
        #include <opaque_fragment>`)},n.customProgramCacheKey=()=>"reflfloor",n}function $d(s,e,t="#8a6a3e"){return Sn(2048,136,(n,i,r)=>{n.clearRect(0,0,i,r),n.fillStyle=t,n.textBaseline="middle",n.font=`500 ${r*.34}px ${dn}`,n.textAlign="center",ti(n,e+"   —   "+s.toUpperCase(),i/2,r/2,r*.16)})}function Jd(s,e,t,n,i,r=dn){return Sn(t,n,o=>{o.clearRect(0,0,t,n),o.fillStyle=e,o.textBaseline="middle",o.font=`500 ${i}px ${r}`,o.textAlign="center",ti(o,s,t/2,n/2+2,i*.42)})}function Eg(s){return Sn(2048,512,(e,t,n)=>{e.clearRect(0,0,t,n);let i=e.createLinearGradient(0,n*.2,0,n*.8);i.addColorStop(0,"#f5dfb0"),i.addColorStop(.45,"#c9a066"),i.addColorStop(.55,"#a87f48"),i.addColorStop(1,"#e9cd96"),e.fillStyle=i,e.textBaseline="middle",e.font=`500 ${n*.62}px ${li}`,ti(e,"SAELLE",t/2,n/2+n*.04,n*.16)})}function tE(){return Sn(256,64,(s,e,t)=>{let n=s.createLinearGradient(0,0,0,t);n.addColorStop(0,"rgba(255,255,255,.95)"),n.addColorStop(.18,"rgba(255,255,255,.55)"),n.addColorStop(.55,"rgba(255,255,255,.16)"),n.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=n,s.fillRect(0,0,e,t),s.globalCompositeOperation="destination-in";let i=s.createLinearGradient(0,0,e,0);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.1,"rgba(0,0,0,1)"),i.addColorStop(.9,"rgba(0,0,0,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=i,s.fillRect(0,0,e,t)})}function nE(){return Sn(128,128,(s,e,t)=>{let n=s.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.5,"rgba(255,255,255,.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=n,s.fillRect(0,0,e,t)})}function iE(){return Sn(1024,256,(s,e,t)=>{s.clearRect(0,0,e,t),s.fillStyle="#fff",s.textBaseline="middle",s.font=`500 ${t*.5}px ${li}`,s.shadowColor="rgba(255,210,150,1)",s.shadowBlur=40;for(let n=0;n<3;n++)ti(s,"SAELLE",e/2,t/2+t*.03,t*.13);s.globalCompositeOperation="destination-out",s.shadowBlur=0,s.fillStyle="rgba(0,0,0,.55)",ti(s,"SAELLE",e/2,t/2+t*.03,t*.13)})}function Mg(s){return Sn(128,256,(e,t,n)=>{let i=e.createLinearGradient(0,0,0,n);i.addColorStop(0,s?"#f4c58e":"#d9c2a8"),i.addColorStop(1,s?"#b57440":"#8f7a66"),e.fillStyle=i,e.fillRect(0,0,t,n);for(let r=0;r<t;r+=6)e.fillStyle=`rgba(0,0,0,${.06+.06*Math.sin(r*.7)})`,e.fillRect(r,0,3,n)})}function sE(){return Sn(256,512,(s,e,t)=>{s.fillStyle="#5c5853",s.fillRect(0,0,e,t);for(let n=0;n<t;n+=8){let i=s.createLinearGradient(0,n,0,n+8);i.addColorStop(0,"#7a756f"),i.addColorStop(.5,"#56524d"),i.addColorStop(1,"#3c3935"),s.fillStyle=i,s.fillRect(0,n,e,8)}s.globalAlpha=.18;for(let n=0;n<40;n++)s.fillStyle=n%2?"#2a2724":"#9a948c",s.fillRect(Math.random()*e,Math.random()*t,2+Math.random()*30,1+Math.random()*3);s.globalAlpha=1,s.fillStyle="#2b2825",s.fillRect(0,t-18,e,18)})}function rE(){return Sn(256,128,(s,e,t)=>{s.fillStyle="#000",s.fillRect(0,0,e,t);let n=dh(11);for(let i=0;i<9;i++){let r=s.createRadialGradient(0,0,0,0,0,1);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.7,"rgba(255,255,255,.85)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.save(),s.translate(e*(.2+n()*.6),t*(.3+n()*.4)),s.scale(e*(.12+n()*.18),t*(.15+n()*.2)),s.fillStyle=r,s.beginPath(),s.arc(0,0,1,0,7),s.fill(),s.restore()}},{srgb:!1})}function oE(){return Sn(256,320,(s,e,t)=>{s.fillStyle="#e9cfc5",s.fillRect(0,0,e,t),s.fillStyle="#5a2e33",s.textBaseline="middle",s.font=`500 46px ${li}`,ti(s,"SAELLE",e/2,t*.52,8),s.font=`500 12px ${dn}`,ti(s,"SKIN · SCENT · COLOUR",e/2,t*.64,3)})}function aE(){return Sn(440,600,(s,e,t)=>{s.fillStyle="#fbf7f4",s.fillRect(0,0,e,t),s.strokeStyle="#c9a46a",s.lineWidth=3,s.strokeRect(16,16,e-32,t-32),s.fillStyle="#b85c6e",s.textAlign="center",s.font=`600 22px ${dn}`,ti(s,"NEW LAUNCH",e/2,90,6),s.fillStyle="#3a1f2b",s.font=`500 64px ${li}`,s.fillText("Glow",e/2,210),s.fillText("Ritual",e/2,280),s.font=`500 22px ${dn}`,s.fillStyle="#5a2e33",s.fillText("Niacinamide 10%",e/2,360),s.fillText("with rose water",e/2,392),s.font=`700 40px ${dn}`,s.fillStyle="#3a1f2b",s.fillText("₹2,250",e/2,490)})}var lE=window.__saelle,{ui:de,S:Ei,save:vh,qtyOf:yh,totals:xr,listHooks:sa,sound:vr,syncList:Mh,openList:wg,closeList:Tg,setThumbs:lA,openDetail:Qd,announce:ep,buzz:tp,closeDetail:cA,detailOpen:Ag,params:fl,REDUCED:Hi,COARSE:ra,LOW:wi,FIXED:Rg}=lE;function zs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Og(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var di={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},aa={duration:.5,overwrite:!1,delay:0},yp,Xn,jt,Gi=1e8,Vt=1/Gi,cp=Math.PI*2,cE=cp/4,hE=0,Fg=Math.sqrt,uE=Math.cos,fE=Math.sin,En=function(e){return typeof e=="string"},ln=function(e){return typeof e=="function"},Vs=function(e){return typeof e=="number"},Ih=function(e){return typeof e>"u"},_s=function(e){return typeof e=="object"},fi=function(e){return e!==!1},Mp=function(){return typeof window<"u"},bh=function(e){return ln(e)||En(e)},Bg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qn=Array.isArray,hp=/(?:-?\.?\d|\.)+/gi,bp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,no=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,np=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sp=/[+-]=-?[.\d]+/,kg=/[^,'"\[\]\s]+/gi,dE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tn,ms,up,Ep,Ai={},Th={},zg,Hg=function(e){return(Th=to(e,Ai))&&Yn},Lh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xl=function(e,t){return!t&&console.warn(e)},Vg=function(e,t){return e&&(Ai[e]=t)&&Th&&(Th[e]=t)||Ai},vl=function(){return 0},pE={suppressEvents:!0,isStart:!0,kill:!1},Sh={suppressEvents:!0,kill:!1},mE={suppressEvents:!0},wp={},Mr=[],fp={},Gg,hi={},ip={},Cg=30,Eh=[],Tp="",Ap=function(e){var t=e[0],n,i;if(_s(t)||ln(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Eh.length;i--&&!Eh[i].targetTest(t););n=Eh[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Pp(e[i],n)))||e.splice(i,1);return e},br=function(e){return e._gsap||Ap(Wi(e))[0]._gsap},Rp=function(e,t,n){return(n=e[t])&&ln(n)?e[t]():Ih(n)&&e.getAttribute&&e.getAttribute(t)||n},ni=function(e,t){return(e=e.split(",")).forEach(t)||e},cn=function(e){return Math.round(e*1e5)/1e5||0},Pn=function(e){return Math.round(e*1e7)/1e7||0},io=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},gE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ah=function(){var e=Mr.length,t=Mr.slice(0),n,i;for(fp={},Mr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Wg=function(e,t,n,i){Mr.length&&!Xn&&Ah(),e.render(t,n,i||Xn&&t<0&&(e._initted||e._startAt)),Mr.length&&!Xn&&Ah()},Xg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(kg).length<2?t:En(e)?e.trim():e},qg=function(e){return e},Xi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_E=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},to=function(e,t){for(var n in t)e[n]=t[n];return e},Pg=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=_s(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Rh=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ml=function(e){var t=e.parent||tn,n=e.keyframes?_E(qn(e.keyframes)):Xi;if(fi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},xE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Yg=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Dh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Jr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},vE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},dp=function(e,t,n,i){return e._startAt&&(Xn?e._startAt.revert(Sh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},yE=function s(e){return!e||e._ts&&s(e.parent)},Ig=function(e){return e._repeat?la(e._tTime,e=e.duration()+e._rDelay)*e:0},la=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ch=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Uh=function(e){return e._end=Pn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Vt)||0))},Nh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Pn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Uh(e),n._dirty||Jr(n,e)),e},Zg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ch(e.rawTime(),t),(!t._dur||bl(0,t.totalDuration(),n)-t._tTime>Vt)&&t.render(n,!0)),Jr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Vt}},gs=function(e,t,n,i){return t.parent&&Sr(t),t._start=Pn((Vs(n)?n:n||e!==tn?Vi(e,n,t):e._time)+t._delay),t._end=Pn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Yg(e,t,"_first","_last",e._sort?"_start":0),pp(t)||(e._recent=t),i||Zg(e,t),e._ts<0&&Nh(e,e._tTime),e},$g=function(e,t){return(Ai.ScrollTrigger||Lh("scrollTrigger",t))&&Ai.ScrollTrigger.create(t,e)},Kg=function(e,t,n,i,r){if(Dp(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gg!==ui.frame)return Mr.push(e),e._lazy=[r,i],1},ME=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},pp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bE=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&ME(e)&&!(!e._initted&&pp(e))||(e._ts<0||e._dp._ts<0)&&!pp(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=bl(0,e._tDur,t),h=la(l,a),e._yoyo&&h&1&&(o=1-o),h!==la(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Xn||i||e._zTime===Vt||!t&&e._zTime){if(!e._initted&&Kg(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?Vt:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&dp(e,t,n,!0),e._onUpdate&&!n&&Ti(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Sr(e,1),!n&&!Xn&&(Ti(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},SE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ca=function(e,t,n,i){var r=e._repeat,o=Pn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Pn(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Nh(e,e._tTime=e._tDur*a),e.parent&&Uh(e),n||Jr(e.parent,e),e},Lg=function(e){return e instanceof Fn?Jr(e):ca(e,e._dur)},EE={_start:0,endTime:vl,totalDuration:vl},Vi=function s(e,t,n){var i=e.labels,r=e._recent||EE,o=e.duration()>=Gi?r.endTime(!1):e._dur,a,l,c;return En(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(qn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},gl=function(e,t,n){var i=Vs(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=fi(l.vars.inherit)&&l.parent;o.immediateRender=fi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new pn(t[0],o,t[r+1])},Er=function(e,t){return e||e===0?t(e):t},bl=function(e,t,n){return n<e?e:n>t?t:n},Bn=function(e,t){return!En(e)||!(t=dE.exec(e))?"":t[1]},wE=function(e,t,n){return Er(n,function(i){return bl(e,t,i)})},mp=[].slice,jg=function(e,t){return e&&_s(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&_s(e[0]))&&!e.nodeType&&e!==ms},TE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return En(i)&&!t||jg(i,1)?(r=n).push.apply(r,Wi(i)):n.push(i)})||n},Wi=function(e,t,n){return jt&&!t&&jt.selector?jt.selector(e):En(e)&&!n&&(up||!ha())?mp.call((t||Ep).querySelectorAll(e),0):qn(e)?TE(e,n):jg(e)?mp.call(e,0):e?[e]:[]},gp=function(e){return e=Wi(e)[0]||xl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Wi(t,n.querySelectorAll?n:n===e?xl("Invalid scope")||Ep.createElement("div"):e)}},Jg=function(e){return e.sort(function(){return .5-Math.random()})},Qg=function(e){if(ln(e))return e;var t=_s(e)?e:{each:e},n=Qr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return En(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,g){var _=(g||t).length,p=o[_],m,b,M,v,P,T,R,A,x;if(!p){if(x=t.grid==="auto"?0:(t.grid||[1,Gi])[1],!x){for(R=-Gi;R<(R=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(p=o[_]=[],m=l?Math.min(x,_)*h-.5:i%x,b=x===Gi?0:l?_*u/x-.5:i/x|0,R=0,A=Gi,T=0;T<_;T++)M=T%x-m,v=b-(T/x|0),p[T]=P=c?Math.abs(c==="y"?v:M):Fg(M*M+v*v),P>R&&(R=P),P<A&&(A=P);i==="random"&&Jg(p),p.max=R-A,p.min=A,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=Bn(t.amount||t.each)||0,n=n&&_<0?l_(n):n}return _=(p[f]-p.min)/p.max||0,Pn(p.b+(n?n(_):_)*p.v)+p.u}},_p=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Pn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Vs(n)?0:Bn(n))}},e_=function(e,t){var n=qn(e),i,r;return!n&&_s(e)&&(i=n=e.radius||Gi,e.values?(e=Wi(e.values),(r=!Vs(e[0]))&&(i*=i)):e=_p(e.increment)),Er(t,n?ln(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Gi,h=0,u=e.length,f,d;u--;)r?(f=e[u].x-a,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:o,r||h===o||Vs(o)?h:h+Bn(o)}:_p(e))},t_=function(e,t,n,i){return Er(qn(e)?!t:n===!0?!!(n=0):!i,function(){return qn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},AE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},RE=function(e,t){return function(n){return e(parseFloat(n))+(t||Bn(n))}},CE=function(e,t,n){return i_(e,t,0,1,n)},n_=function(e,t,n){return Er(n,function(i){return e[~~t(i)]})},PE=function s(e,t,n){var i=t-e;return qn(e)?n_(e,s(0,e.length),t):Er(n,function(r){return(i+(r-e)%i)%i+e})},IE=function s(e,t,n){var i=t-e,r=i*2;return qn(e)?n_(e,s(0,e.length-1),t):Er(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},ua=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?kg:hp),n+=e.substr(t,i-t)+t_(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},i_=function(e,t,n,i,r){var o=t-e,a=i-n;return Er(r,function(l){return n+((l-e)/o*a||0)})},LE=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=En(e),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(qn(e)&&!qn(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=t}else i||(e=to(qn(e)?[]:{},e));if(!h){for(l in t)Ip.call(a,e,l,"get",t[l]);r=function(g){return Op(g,a)||(o?e.p:e)}}}return Er(n,r)},Dg=function(e,t,n){var i=e.labels,r=Gi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Ti=function(e,t,n){var i=e.vars,r=i[t],o=jt,a=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Mr.length&&Ah(),a&&(jt=a),h=l?r.apply(c,l):r.call(c),jt=o,h},dl=function(e){return Sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Xn),e.progress()<1&&Ti(e,"onInterrupt"),e},oa,s_=[],r_=function(e){if(e)if(e=!e.name&&e.default||e,Mp()||e.headless){var t=e.name,n=ln(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:vl,render:Op,add:Ip,kill:ZE,modifier:YE,rawVars:0},o={targetTest:0,get:0,getSetter:Oh,aliases:{},register:0};if(ha(),e!==i){if(hi[t])return;Xi(i,Xi(Rh(e,r),o)),to(i.prototype,to(r,Rh(e,o))),hi[i.prop=t]=i,e.targetTest&&(Eh.push(i),wp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Vg(t,i),e.register&&e.register(Yn,i,ii)}else s_.push(e)},Ot=255,pl={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},sp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ot+.5|0},o_=function(e,t,n){var i=e?Vs(e)?[e>>16,e>>8&Ot,e&Ot]:0:pl.black,r,o,a,l,c,h,u,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),pl[e])i=pl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ot,i&Ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ot,e&Ot]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(hp),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=sp(l+1/3,r,o),i[1]=sp(l,r,o),i[2]=sp(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(bp),n&&i.length<4&&(i[3]=1),i}else i=e.match(hp)||pl.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Ot,o=i[1]/Ot,a=i[2]/Ot,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(o-a)/d+(o<a?6:0):u===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},a_=function(e){var t=[],n=[],i=-1;return e.split(Hs).forEach(function(r){var o=r.match(no)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Ug=function(e,t,n){var i="",r=(e+i).match(Hs),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(f){return(f=o_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=a_(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Hs,"1").split(no),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(Hs),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},Hs=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in pl)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),DE=/hsl[a]?\(/,Cp=function(e){var t=e.join(" "),n;if(Hs.lastIndex=0,Hs.test(t))return n=DE.test(t),e[1]=Ug(e[1],n),e[0]=Ug(e[0],n,a_(e[1])),!0},yl,ui=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,f,d,g=function _(p){var m=s()-i,b=p===!0,M,v,P,T;if((m>e||m<0)&&(n+=m-t),i+=m,P=i-n,M=P-o,(M>0||b)&&(T=++u.frame,f=P-u.time*1e3,u.time=P=P/1e3,o+=M+(M>=r?4:r-M),v=1),b||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](P,f,T,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){zg&&(!up&&Mp()&&(ms=up=window,Ep=ms.document||{},Ai.gsap=Yn,(ms.gsapVersions||(ms.gsapVersions=[])).push(Yn.version),Hg(Th||ms.GreenSockGlobals||!ms.gsap&&ms||{}),s_.forEach(r_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},yl=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),yl=0,c=vl},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),o=u.time*1e3+r},add:function(p,m,b){var M=m?function(v,P,T,R){p(v,P,T,R),u.remove(M)}:p;return u.remove(p),a[b?"unshift":"push"](M),ha(),M},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},u}(),ha=function(){return!yl&&ui.wake()},bt={},UE=/^[\d.\-M][\d.\-,\s]/,NE=/["']/g,OE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(NE,"").trim():+c,i=l.substr(a+1).trim();return t},FE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},BE=function(e){var t=(e+"").split("("),n=bt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[OE(t[1])]:FE(e).split(",").map(Xg)):bt._CE&&UE.test(e)?bt._CE("",e):n},l_=function(e){return function(t){return 1-e(1-t)}},c_=function s(e,t){for(var n=e._first,i;n;)n instanceof Fn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Qr=function(e,t){return e&&(ln(e)?e:bt[e]||BE(e))||t},so=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return ni(e,function(a){bt[a]=Ai[a]=r,bt[o=a.toLowerCase()]=n;for(var l in r)bt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=bt[a+"."+l]=r[l]}),r},h_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},rp=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/cp*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*fE((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:h_(a);return r=cp/r,l.config=function(c,h){return s(e,c,h)},l},op=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:h_(n);return i.config=function(r){return s(e,r)},i};ni("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;so(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});bt.Linear.easeNone=bt.none=bt.Linear.easeIn;so("Elastic",rp("in"),rp("out"),rp());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};so("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);so("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});so("Circ",function(s){return-(Fg(1-s*s)-1)});so("Sine",function(s){return s===1?1:-uE(s*cE)+1});so("Back",op("in"),op("out"),op());bt.SteppedEase=bt.steps=Ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Vt;return function(a){return((i*bl(0,o,a)|0)+r)*n}}};aa.ease=bt["quad.out"];ni("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Tp+=s+","+s+"Params,"});var Pp=function(e,t){this.id=hE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Rp,this.set=t?t.getSetter:Oh},Ml=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ca(this,+t.duration,1,1),this.data=t.data,jt&&(this._ctx=jt,jt.data.push(this)),yl||ui.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ca(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ha(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Nh(this,n),!r._dp||r.parent||Zg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gs(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Vt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ig(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ig(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?la(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Vt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ch(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Vt?0:this._rts,this.totalTime(bl(-Math.abs(this._delay),this._tDur,r),i!==!1),Uh(this),vE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ha(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vt&&(this._tTime-=Vt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&gs(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(fi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ch(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=mE);var i=Xn;return Xn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Xn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Lg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Lg(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Vi(this,n),fi(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,fi(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Vt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Vt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=ln(n)?n:qg,a=function(){var c=i.then;i.then=null,ln(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){dl(this)},s}();Xi(Ml.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Vt,_prom:0,_ps:!1,_rts:1});var Fn=function(s){Og(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=fi(n.sortChildren),tn&&gs(n.parent||tn,zs(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&$g(zs(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return gl(0,arguments,this),this},t.from=function(i,r,o){return gl(1,arguments,this),this},t.fromTo=function(i,r,o,a){return gl(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,ml(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new pn(i,r,Vi(this,o),1),this},t.call=function(i,r,o){return gs(this,pn.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new pn(i,o,Vi(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,ml(o).immediateRender=fi(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,ml(a).immediateRender=fi(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Pn(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,p,m,b,M,v,P,T,R;if(this!==tn&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,v=this._start,M=this._ts,m=!M,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=Pn(h%p),h===l?(_=this._repeat,f=c):(_=~~(h/p),_&&_===h/p&&(f=c,_--),f>c&&(f=c)),P=la(this._tTime,p),!a&&this._tTime&&P!==_&&this._tTime-P*p-this._dur<=0&&(P=_),T&&_&1&&(f=c-f,R=1),_!==P&&!this._lock){var A=T&&P&1,x=A===(T&&_&1);if(_<P&&(A=!A),a=A?0:h%c?c:h,this._lock=1,this.render(a||(R?0:Pn(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Ti(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;c_(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=SE(this,Pn(a),Pn(f)),b&&(h-=f-(f=b._start))),this._tTime=h,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&!_&&(Ti(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!m){b=0,g&&(h+=this._zTime=-Vt);break}}d=g}else{d=this._last;for(var y=i<0?i:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,r,o||Xn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){b=0,g&&(h+=this._zTime=y?-Vt:Vt);break}}d=g}}if(b&&!r&&(this.pause(),b.render(f>=a?0:-Vt)._zTime=f>=a?1:-1,this._ts))return this._start=v,Uh(this),this.render(i,r,o);this._onUpdate&&!r&&Ti(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Sr(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Ti(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Vs(r)||(r=Vi(this,r,i)),!(i instanceof Ml)){if(qn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(En(i))return this.addLabel(i,r);if(ln(i))i=pn.delayedCall(0,i);else return this}return this!==i?gs(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Gi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof pn?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return En(i)?this.removeLabel(i):ln(i)?this.killTweensOf(i):(Dh(this,i),i===this._recent&&(this._recent=this._last),Jr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pn(ui.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Vi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=pn.delayedCall(0,r||vl,o);return a.data="isPause",this._hasPause=1,gs(this,a,Vi(this,i))},t.removePause=function(i){var r=this._first;for(i=Vi(this,i);r;)r._start===i&&r.data==="isPause"&&Sr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)yr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Wi(i),l=this._first,c=Vs(r),h;l;)l instanceof pn?gE(l._targets,a)&&(c?(!yr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Vi(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=pn.to(o,Xi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Vt,onStart:function(){if(o.pause(),!d){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&ca(g,p,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Xi({startAt:{time:Vi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Dg(this,Vi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Dg(this,Vi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Vt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Jr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Jr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Gi,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gs(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;ca(o,o===tn&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(tn._ts&&(Wg(tn,Ch(i,tn)),Gg=ui.frame),ui.frame>=Cg){Cg+=di.autoSleep||120;var r=tn._first;if((!r||!r._ts)&&di.autoSleep&&ui._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ui.sleep()}}},e}(Ml);Xi(Fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var kE=function(e,t,n,i,r,o,a){var l=new ii(this._pt,e,t,0,1,Np,null,r),c=0,h=0,u,f,d,g,_,p,m,b;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ua(i)),o&&(b=[n,i],o(b,e,t),n=b[0],i=b[1]),f=n.match(np)||[];u=np.exec(i);)g=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?io(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=np.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Sp.test(i)||m)&&(l.e=0),this._pt=l,l},Ip=function(e,t,n,i,r,o,a,l,c,h){ln(i)&&(i=i(r||0,e,o));var u=e[t],f=n!=="get"?n:ln(u)?c?e[t.indexOf("set")||!ln(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=ln(u)?c?WE:d_:Up,g;if(En(i)&&(~i.indexOf("random(")&&(i=ua(i)),i.charAt(1)==="="&&(g=io(f,i)+(Bn(f)||0),(g||g===0)&&(i=g))),!h||f!==i||xp)return!isNaN(f*i)&&i!==""?(g=new ii(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?qE:p_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!u&&!(t in e)&&Lh(t,i),kE.call(this,e,t,f,i,d,l||di.stringFilter,c))},zE=function(e,t,n,i,r){if(ln(e)&&(e=_l(e,r,t,n,i)),!_s(e)||e.style&&e.nodeType||qn(e)||Bg(e))return En(e)?_l(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=_l(e[a],r,t,n,i);return o},Lp=function(e,t,n,i,r,o){var a,l,c,h;if(hi[e]&&(a=new hi[e]).init(r,a.rawVars?t[e]:zE(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new ii(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==oa))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},yr,xp,Dp=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,b=m&&m.data==="nested"?m.vars.targets:p,M=e._overwrite==="auto"&&!yp,v=e.timeline,P,T,R,A,x,y,w,B,F,O,q,k,ae;if(v&&(!f||!r)&&(r="none"),e._ease=Qr(r,aa.ease),e._yEase=u?l_(Qr(u===!0?r:u,aa.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(B=p[0]?br(p[0]).harness:0,k=B&&i[B.prop],P=Rh(i,wp),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&g?Sh:pE),_._lazy=0),o){if(Sr(e._startAt=pn.set(p,Xi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&fi(l),startAt:null,delay:0,onUpdate:c&&function(){return Ti(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Xn||!a&&!d)&&e._startAt.revert(Sh),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),R=Xi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&fi(l),immediateRender:a,stagger:0,parent:m},P),k&&(R[B.prop]=k),Sr(e._startAt=pn.set(p,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Xn?e._startAt.revert(Sh):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Vt,Vt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&fi(l)||l&&!g,T=0;T<p.length;T++){if(x=p[T],w=x._gsap||Ap(p)[T]._gsap,e._ptLookup[T]=O={},fp[w.id]&&Mr.length&&Ah(),q=b===p?T:b.indexOf(x),B&&(F=new B).init(x,k||P,e,q,b)!==!1&&(e._pt=A=new ii(e._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(Y){O[Y]=A}),F.priority&&(y=1)),!B||k)for(R in P)hi[R]&&(F=Lp(R,P,e,q,x,b))?F.priority&&(y=1):O[R]=A=Ip.call(e,x,R,"get",P[R],q,b,0,i.stringFilter);e._op&&e._op[T]&&e.kill(x,e._op[T]),M&&e._pt&&(yr=e,tn.killTweensOf(x,O,e.globalTime(t)),ae=!e.parent,yr=0),e._pt&&l&&(fp[w.id]=1)}y&&Fp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ae,f&&t<=0&&v.render(Gi,!0,!0)},HE=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return xp=1,e.vars[t]="+=0",Dp(e,a),xp=0,l?xl(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=cn(n)+Bn(u.e)),u.b&&(u.b=h.s+Bn(u.b))},VE=function(e,t){var n=e[0]?br(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=to({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},GE=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(qn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},_l=function(e,t,n,i,r){return ln(e)?e.call(t,n,i,r):En(e)&&~e.indexOf("random(")?ua(e):e},u_=Tp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",f_={};ni(u_+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return f_[s]=1});var pn=function(s){Og(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:ml(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,b=i.parent||tn,M=(qn(n)||Bg(n)?Vs(n[0]):"length"in i)?[n]:Wi(n),v,P,T,R,A,x,y,w;if(a._targets=M.length?Ap(M):xl("GSAP target "+n+" not found. https://gsap.com",!di.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||bh(c)||bh(h)){if(i=a.vars,v=a.timeline=new Fn({data:"nested",defaults:_||{},targets:b&&b.data==="nested"?b.vars.targets:M}),v.kill(),v.parent=v._dp=zs(a),v._start=0,f||bh(c)||bh(h)){if(R=M.length,y=f&&Qg(f),_s(f))for(A in f)~u_.indexOf(A)&&(w||(w={}),w[A]=f[A]);for(P=0;P<R;P++)T=Rh(i,f_),T.stagger=0,m&&(T.yoyoEase=m),w&&to(T,w),x=M[P],T.duration=+_l(c,zs(a),P,x,M),T.delay=(+_l(h,zs(a),P,x,M)||0)-a._delay,!f&&R===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),v.to(x,T,y?y(P,x,M):0),v._ease=bt.none;v.duration()?c=h=0:a.timeline=0}else if(g){ml(Xi(v.vars.defaults,{ease:"none"})),v._ease=Qr(g.ease||i.ease||"none");var B=0,F,O,q;if(qn(g))g.forEach(function(k){return v.to(M,k,">")}),v.duration();else{T={};for(A in g)A==="ease"||A==="easeEach"||GE(A,g[A],T,g.easeEach);for(A in T)for(F=T[A].sort(function(k,ae){return k.t-ae.t}),B=0,P=0;P<F.length;P++)O=F[P],q={ease:O.e,duration:(O.t-(P?F[P-1].t:0))/100*c},q[A]=O.v,v.to(M,q,B),B+=q.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!yp&&(yr=zs(a),tn.killTweensOf(M),yr=0),gs(b,zs(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===Pn(b._time)&&fi(u)&&yE(zs(a))&&b.data!=="nested")&&(a._tTime=-Vt,a.render(Math.max(0,-h)||0)),p&&$g(zs(a),p),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Vt&&!h?l:i<Vt?0:i,f,d,g,_,p,m,b,M,v;if(!c)bE(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(f=Pn(u%_),u===l?(g=this._repeat,f=c):(g=~~(u/_),g&&g===Pn(u/_)&&(f=c,g--),f>c&&(f=c)),m=this._yoyo&&g&1,m&&(v=this._yEase,f=c-f),p=la(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=u,this;g!==p&&(M&&this._yEase&&c_(M,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Pn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Kg(this,h?i:f,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(v||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!a&&!r&&!g&&(Ti(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&dp(this,i,r,o),Ti(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Ti(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&dp(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Sr(this,1),!r&&!(h&&!a)&&(u||a||m)&&(Ti(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){yl||ui.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Dp(this,c),h=this._ease(c/this._dur),HE(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Nh(this,0),this.parent||Yg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?dl(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,yr&&yr.vars.overwrite!==!0)._first||dl(this),this.parent&&o!==this.timeline.totalDuration()&&ca(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Wi(i):a,c=this._ptLookup,h=this._pt,u,f,d,g,_,p,m;if((!r||r==="all")&&xE(a,l))return r==="all"&&(this._pt=0),dl(this);for(u=this._op=this._op||[],r!=="all"&&(En(r)&&(_={},ni(r,function(b){return _[b]=1}),r=_),r=VE(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],r==="all"?(u[m]=r,g=f,d={}):(d=u[m]=u[m]||{},g=r);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Dh(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&dl(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return gl(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return gl(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return tn.killTweensOf(i,r,o)},e}(Ml);Xi(pn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ni("staggerTo,staggerFrom,staggerFromTo",function(s){pn[s]=function(){var e=new Fn,t=mp.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Up=function(e,t,n){return e[t]=n},d_=function(e,t,n){return e[t](n)},WE=function(e,t,n,i){return e[t](i.fp,n)},XE=function(e,t,n){return e.setAttribute(t,n)},Oh=function(e,t){return ln(e[t])?d_:Ih(e[t])&&e.setAttribute?XE:Up},p_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},qE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Np=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Op=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},YE=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},ZE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Dh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},$E=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Fp=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},ii=function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||p_,this.d=l||this,this.set=c||Up,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=$E,this.m=n,this.mt=r,this.tween=i},s}();ni(Tp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return wp[s]=1});Ai.TweenMax=Ai.TweenLite=pn;Ai.TimelineLite=Ai.TimelineMax=Fn;tn=new Fn({sortChildren:!1,defaults:aa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});di.stringFilter=Cp;var eo=[],wh={},KE=[],Ng=0,jE=0,ap=function(e){return(wh[e]||KE).map(function(t){return t()})},vp=function(){var e=Date.now(),t=[];e-Ng>2&&(ap("matchMediaInit"),eo.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=ms.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),ap("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ng=e,ap("matchMedia"))},m_=function(){function s(t,n){this.selector=n&&gp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=jE++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){ln(n)&&(r=i,i=n,n=ln);var o=this,a=function(){var c=jt,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=gp(r)),jt=o,u=i.apply(o,arguments),ln(u)&&o._r.push(u),jt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===ln?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=jt;jt=null,n(this),jt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof pn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof pn)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=eo.length;o--;)eo[o].id===this.id&&eo.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),JE=function(){function s(t){this.contexts=[],this.scope=t,jt&&jt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){_s(n)||(n={matches:n});var o=new m_(0,r||this.scope),a=o.conditions={},l,c,h;jt&&!o.selector&&(o.selector=jt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=ms.matchMedia(n[c]),l&&(eo.indexOf(o)<0&&eo.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(vp):l.addEventListener("change",vp)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Ph={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return r_(i)})},timeline:function(e){return new Fn(e)},getTweensOf:function(e,t){return tn.getTweensOf(e,t)},getProperty:function(e,t,n,i){En(e)&&(e=Wi(e)[0]);var r=br(e||{}).get,o=n?qg:Xg;return n==="native"&&(n=""),e&&(t?o((hi[t]&&hi[t].get||r)(e,t,n,i)):function(a,l,c){return o((hi[a]&&hi[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Wi(e),e.length>1){var i=e.map(function(h){return Yn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var o=hi[t],a=br(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;oa._pt=0,u.init(e,n?h+n:h,oa,0,[e]),u.render(1,u),oa._pt&&Op(1,oa)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=Yn.to(e,to((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return tn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qr(e.ease,aa.ease)),Pg(aa,e||{})},config:function(e){return Pg(di,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!hi[a]&&!Ai[a]&&xl(t+" effect requires "+a+" plugin.")}),ip[t]=function(a,l,c){return n(Wi(a),Xi(l||{},r),c)},o&&(Fn.prototype[t]=function(a,l,c){return this.add(ip[t](a,_s(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){bt[e]=Qr(t)},parseEase:function(e,t){return arguments.length?Qr(e,t):bt},getById:function(e){return tn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Fn(e),i,r;for(n.smoothChildTiming=fi(e.smoothChildTiming),tn.remove(n),n._dp=0,n._time=n._tTime=tn._time,i=tn._first;i;)r=i._next,(t||!(!i._dur&&i instanceof pn&&i.vars.onComplete===i._targets[0]))&&gs(n,i,i._start-i._delay),i=r;return gs(tn,n,0),n},context:function(e,t){return e?new m_(e,t):jt},matchMedia:function(e){return new JE(e)},matchMediaRefresh:function(){return eo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||vp()},addEventListener:function(e,t){var n=wh[e]||(wh[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=wh[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:PE,wrapYoyo:IE,distribute:Qg,random:t_,snap:e_,normalize:CE,getUnit:Bn,clamp:wE,splitColor:o_,toArray:Wi,selector:gp,mapRange:i_,pipe:AE,unitize:RE,interpolate:LE,shuffle:Jg},install:Hg,effects:ip,ticker:ui,updateRoot:Fn.updateRoot,plugins:hi,globalTimeline:tn,core:{PropTween:ii,globals:Vg,Tween:pn,Timeline:Fn,Animation:Ml,getCache:br,_removeLinkedListItem:Dh,reverting:function(){return Xn},context:function(e){return e&&jt&&(jt.data.push(e),e._ctx=jt),jt},suppressOverwrites:function(e){return yp=e}}};ni("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ph[s]=pn[s]});ui.add(Fn.updateRoot);oa=Ph.to({},{duration:0});var QE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ew=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=QE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},lp=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(En(r)&&(l={},ni(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}ew(a,r)}}}},Yn=Ph.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Xn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},lp("roundProps",_p),lp("modifiers"),lp("snap",e_))||Ph;pn.version=Fn.version=Yn.version="3.12.5";zg=1;Mp()&&ha();var tw=bt.Power0,nw=bt.Power1,iw=bt.Power2,sw=bt.Power3,rw=bt.Power4,ow=bt.Linear,aw=bt.Quad,lw=bt.Cubic,cw=bt.Quart,hw=bt.Quint,uw=bt.Strong,fw=bt.Elastic,dw=bt.Back,pw=bt.SteppedEase,mw=bt.Bounce,gw=bt.Sine,_w=bt.Expo,xw=bt.Circ;var g_,wr,da,Wp,lo,vw,__,Xp,yw=function(){return typeof window<"u"},Ws={},ao=180/Math.PI,pa=Math.PI/180,fa=Math.atan2,x_=1e8,qp=/([A-Z])/g,Mw=/(left|right|width|margin|padding|x)/i,bw=/[\s,\(]\S/,xs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ew=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ww=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},w_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},T_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Tw=function(e,t,n){return e.style[t]=n},Aw=function(e,t,n){return e.style.setProperty(t,n)},Rw=function(e,t,n){return e._gsap[t]=n},Cw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Pw=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Iw=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},nn="transform",pi=nn+"Origin",Lw=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Ws&&r){if(this.tfm=this.tfm||{},e!=="transform")e=xs[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Gs(i,a)}):this.tfm[e]=o.x?o[e]:Gs(i,e),e===pi&&(this.tfm.zOrigin=o.zOrigin);else return xs.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(nn)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pi,t,"")),e=nn}(r||t)&&this.props.push(e,t,r[e])},A_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Dw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(qp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Xp(),(!r||!r.isStart)&&!n[nn]&&(A_(n),i.zOrigin&&n[pi]&&(n[pi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},R_=function(e,t){var n={target:e,props:[],revert:Dw,save:Lw};return e._gsap||Yn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},C_,Hp=function(e,t){var n=wr.createElementNS?wr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):wr.createElement(e);return n&&n.style?n:wr.createElement(e)},vs=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(qp,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,ma(t)||t,1)||""},v_="O,Moz,ms,Ms,Webkit".split(","),ma=function(e,t,n){var i=t||lo,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(v_[o]+e in r););return o<0?null:(o===3?"ms":o>=0?v_[o]:"")+e},Vp=function(){yw()&&window.document&&(g_=window,wr=g_.document,da=wr.documentElement,lo=Hp("div")||{style:{}},vw=Hp("div"),nn=ma(nn),pi=nn+"Origin",lo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",C_=!!ma("perspective"),Xp=Yn.core.reverting,Wp=1)},Bp=function s(e){var t=Hp("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(da.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),da.removeChild(t),this.style.cssText=r,o},y_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},P_=function(e){var t;try{t=e.getBBox()}catch{t=Bp.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Bp||(t=Bp.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+y_(e,["x","cx","x1"])||0,y:+y_(e,["y","cy","y1"])||0,width:0,height:0}:t},I_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&P_(e))},co=function(e,t){if(t){var n=e.style,i;t in Ws&&t!==pi&&(t=nn),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(qp,"-$1").toLowerCase())):n.removeAttribute(t)}},Tr=function(e,t,n,i,r,o){var a=new ii(e._pt,t,n,0,1,o?T_:w_);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},M_={deg:1,rad:1,turn:1},Uw={grid:1,flex:1},Ar=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=lo.style,l=Mw.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,_,p,m;if(i===o||!r||M_[i]||M_[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),m=e.getCTM&&I_(e),(d||o==="%")&&(Ws[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],cn(d?r/g*u:r/100*g);if(a[l?"width":"height"]=u+(f?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===wr||!_.appendChild)&&(_=wr.body),p=_._gsap,p&&d&&p.width&&l&&p.time===ui.time&&!p.uncache)return cn(r/p.width*u);if(d&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=u+i,g=e[h],b?e.style[t]=b:co(e,t)}else(d||o==="%")&&!Uw[vs(_,"display")]&&(a.position=vs(e,"position")),_===e&&(a.position="static"),_.appendChild(lo),g=lo[h],_.removeChild(lo),a.position="absolute";return l&&d&&(p=br(_),p.time=ui.time,p.width=_[h]),cn(f?g*r/u:g&&r?u/g*r:0)},Gs=function(e,t,n,i){var r;return Wp||Vp(),t in xs&&t!=="transform"&&(t=xs[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ws[t]&&t!=="transform"?(r=wl(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Bh(vs(e,pi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Fh[t]&&Fh[t](e,t,n)||vs(e,t)||Rp(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ar(e,t,r,n)+n:r},Nw=function(e,t,n,i){if(!n||n==="none"){var r=ma(t,e,1),o=r&&vs(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=vs(e,"borderTopColor"))}var a=new ii(this._pt,e.style,t,0,1,Np),l=0,c=0,h,u,f,d,g,_,p,m,b,M,v,P;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=vs(e,t)||i,_?e.style[t]=_:co(e,t)),h=[n,i],Cp(h),n=h[0],i=h[1],f=n.match(no)||[],P=i.match(no)||[],P.length){for(;u=no.exec(i);)p=u[0],b=i.substring(l,u.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),p.charAt(1)==="="&&(p=io(d,p)+v),m=parseFloat(p),M=p.substr((m+"").length),l=no.lastIndex-M.length,M||(M=M||di.units[t]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(d=Ar(e,t,_,M)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?T_:w_;return Sp.test(i)&&(a.e=0),this._pt=a,a},b_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ow=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=b_[n]||n,t[1]=b_[i]||i,t.join(" ")},Fw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Ws[a]&&(l=1,a=a==="transformOrigin"?pi:nn),co(n,a);l&&(co(n,nn),o&&(o.svg&&n.removeAttribute("transform"),wl(n,1),o.uncache=1,A_(i)))}},Fh={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new ii(e._pt,t,n,0,0,Fw);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},El=[1,0,0,1,0,0],L_={},D_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},S_=function(e){var t=vs(e,nn);return D_(t)?El:t.substr(7).match(bp).map(cn)},Yp=function(e,t){var n=e._gsap||br(e),i=e.style,r=S_(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?El:r):(r===El&&!e.offsetParent&&e!==da&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,da.appendChild(e)),r=S_(e),l?i.display=l:co(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):da.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Gp=function(e,t,n,i,r,o){var a=e._gsap,l=r||Yp(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],b=l[5],M=t.split(" "),v=parseFloat(M[0])||0,P=parseFloat(M[1])||0,T,R,A,x;n?l!==El&&(R=d*p-g*_)&&(A=v*(p/R)+P*(-_/R)+(_*b-p*m)/R,x=v*(-g/R)+P*(d/R)-(d*b-g*m)/R,v=A,P=x):(T=P_(e),v=T.x+(~M[0].indexOf("%")?v/100*T.width:v),P=T.y+(~(M[1]||M[0]).indexOf("%")?P/100*T.height:P)),i||i!==!1&&a.smooth?(m=v-c,b=P-h,a.xOffset=u+(m*d+b*_)-m,a.yOffset=f+(m*g+b*p)-b):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=P,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[pi]="0px 0px",o&&(Tr(o,a,"xOrigin",c,v),Tr(o,a,"yOrigin",h,P),Tr(o,a,"xOffset",u,a.xOffset),Tr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+P)},wl=function(e,t){var n=e._gsap||new Pp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=vs(e,pi)||"0",h,u,f,d,g,_,p,m,b,M,v,P,T,R,A,x,y,w,B,F,O,q,k,ae,Y,he,Se,Re,K,tt,le,z;return h=u=f=_=p=m=b=M=v=0,d=g=1,n.svg=!!(e.getCTM&&I_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[nn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[nn]!=="none"?l[nn]:"")),i.scale=i.rotate=i.translate="none"),R=Yp(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",ae=""):ae=!t&&e.getAttribute("data-svg-origin"),Gp(e,ae||c,!!ae||n.originIsAbsolute,n.smooth!==!1,R)),P=n.xOrigin||0,T=n.yOrigin||0,R!==El&&(w=R[0],B=R[1],F=R[2],O=R[3],h=q=R[4],u=k=R[5],R.length===6?(d=Math.sqrt(w*w+B*B),g=Math.sqrt(O*O+F*F),_=w||B?fa(B,w)*ao:0,b=F||O?fa(F,O)*ao+_:0,b&&(g*=Math.abs(Math.cos(b*pa))),n.svg&&(h-=P-(P*w+T*F),u-=T-(P*B+T*O))):(z=R[6],tt=R[7],Se=R[8],Re=R[9],K=R[10],le=R[11],h=R[12],u=R[13],f=R[14],A=fa(z,K),p=A*ao,A&&(x=Math.cos(-A),y=Math.sin(-A),ae=q*x+Se*y,Y=k*x+Re*y,he=z*x+K*y,Se=q*-y+Se*x,Re=k*-y+Re*x,K=z*-y+K*x,le=tt*-y+le*x,q=ae,k=Y,z=he),A=fa(-F,K),m=A*ao,A&&(x=Math.cos(-A),y=Math.sin(-A),ae=w*x-Se*y,Y=B*x-Re*y,he=F*x-K*y,le=O*y+le*x,w=ae,B=Y,F=he),A=fa(B,w),_=A*ao,A&&(x=Math.cos(A),y=Math.sin(A),ae=w*x+B*y,Y=q*x+k*y,B=B*x-w*y,k=k*x-q*y,w=ae,q=Y),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=cn(Math.sqrt(w*w+B*B+F*F)),g=cn(Math.sqrt(k*k+z*z)),A=fa(q,k),b=Math.abs(A)>2e-4?A*ao:0,v=le?1/(le<0?-le:le):0),n.svg&&(ae=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!D_(vs(e,nn)),ae&&e.setAttribute("transform",ae))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(d*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=cn(d),n.scaleY=cn(g),n.rotation=cn(_)+a,n.rotationX=cn(p)+a,n.rotationY=cn(m)+a,n.skewX=b+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[pi]=Bh(c)),n.xOffset=n.yOffset=0,n.force3D=di.force3D,n.renderTransform=n.svg?kw:C_?U_:Bw,n.uncache=0,n},Bh=function(e){return(e=e.split(" "))[0]+" "+e[1]},kp=function(e,t,n){var i=Bn(t);return cn(parseFloat(t)+parseFloat(Ar(e,"x",n+"px",i)))+i},Bw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,U_(e,t)},ro="0deg",Sl="0px",oo=") ",U_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,b=n.target,M=n.zOrigin,v="",P=m==="auto"&&e&&e!==1||m===!0;if(M&&(u!==ro||h!==ro)){var T=parseFloat(h)*pa,R=Math.sin(T),A=Math.cos(T),x;T=parseFloat(u)*pa,x=Math.cos(T),o=kp(b,o,R*x*-M),a=kp(b,a,-Math.sin(T)*-M),l=kp(b,l,A*x*-M+M)}p!==Sl&&(v+="perspective("+p+oo),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(P||o!==Sl||a!==Sl||l!==Sl)&&(v+=l!==Sl||P?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+oo),c!==ro&&(v+="rotate("+c+oo),h!==ro&&(v+="rotateY("+h+oo),u!==ro&&(v+="rotateX("+u+oo),(f!==ro||d!==ro)&&(v+="skew("+f+", "+d+oo),(g!==1||_!==1)&&(v+="scale("+g+", "+_+oo),b.style[nn]=v||"translate(0, 0)"},kw=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,b=n.forceCSS,M=parseFloat(o),v=parseFloat(a),P,T,R,A,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=pa,c*=pa,P=Math.cos(l)*u,T=Math.sin(l)*u,R=Math.sin(l-c)*-f,A=Math.cos(l-c)*f,c&&(h*=pa,x=Math.tan(c-h),x=Math.sqrt(1+x*x),R*=x,A*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),P*=x,T*=x)),P=cn(P),T=cn(T),R=cn(R),A=cn(A)):(P=u,A=f,T=R=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=Ar(d,"x",o,"px"),v=Ar(d,"y",a,"px")),(g||_||p||m)&&(M=cn(M+g-(g*P+_*R)+p),v=cn(v+_-(g*T+_*A)+m)),(i||r)&&(x=d.getBBox(),M=cn(M+i/100*x.width),v=cn(v+r/100*x.height)),x="matrix("+P+","+T+","+R+","+A+","+M+","+v+")",d.setAttribute("transform",x),b&&(d.style[nn]=x)},zw=function(e,t,n,i,r){var o=360,a=En(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?ao:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*x_)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*x_)%o-~~(c/o)*o)),e._pt=f=new ii(e._pt,t,n,i,c,Sw),f.e=h,f.u="deg",e._props.push(n),f},E_=function(e,t){for(var n in t)e[n]=t[n];return e},Hw=function(e,t,n){var i=E_({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[nn]=t,a=wl(n,1),co(n,nn),n.setAttribute("transform",c)):(c=getComputedStyle(n)[nn],o[nn]=t,a=wl(n,1),o[nn]=c);for(l in Ws)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(d=Bn(c),g=Bn(h),u=d!==g?Ar(n,l,c,g):parseFloat(c),f=parseFloat(h),e._pt=new ii(e._pt,a,l,u,f-u,zp),e._pt.u=g||0,e._props.push(l));E_(a,i)};ni("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Fh[e>1?"border"+s:s]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(g){return Gs(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,u)}});var Zp={name:"css",register:Vp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,f,d,g,_,p,m,b,M,v,P,T,R,A;Wp||Vp(),this.styles=this.styles||R_(e),A=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(hi[_]&&Lp(_,t,n,i,e,r)))){if(d=typeof h,g=Fh[_],d==="function"&&(h=h.call(n,i,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=ua(h)),g)g(this,e,_,h,n)&&(R=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Hs.lastIndex=0,Hs.test(c)||(p=Bn(c),m=Bn(h)),m?p!==m&&(c=Ar(e,_,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),A.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],En(c)&&~c.indexOf("random(")&&(c=ua(c)),Bn(c+"")||c==="auto"||(c+=di.units[_]||Bn(Gs(e,_))||""),(c+"").charAt(1)==="="&&(c=Gs(e,_))):c=Gs(e,_),f=parseFloat(c),b=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),u=parseFloat(h),_ in xs&&(_==="autoAlpha"&&(f===1&&Gs(e,"visibility")==="hidden"&&u&&(f=0),A.push("visibility",0,a.visibility),Tr(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=xs[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Ws,M){if(this.styles.save(_),v||(P=e._gsap,P.renderTransform&&!t.parseTransform||wl(e,t.parseTransform),T=t.smoothOrigin!==!1&&P.smooth,v=this._pt=new ii(this._pt,a,nn,0,1,P.renderTransform,P,0,-1),v.dep=1),_==="scale")this._pt=new ii(this._pt,P,"scaleY",P.scaleY,(b?io(P.scaleY,b+u):u)-P.scaleY||0,zp),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){A.push(pi,0,a[pi]),h=Ow(h),P.svg?Gp(e,h,0,T,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==P.zOrigin&&Tr(this,P,"zOrigin",P.zOrigin,m),Tr(this,a,_,Bh(c),Bh(h)));continue}else if(_==="svgOrigin"){Gp(e,h,1,T,0,this);continue}else if(_ in L_){zw(this,P,_,f,b?io(f,b+h):h);continue}else if(_==="smoothOrigin"){Tr(this,P,"smooth",P.smooth,h);continue}else if(_==="force3D"){P[_]=h;continue}else if(_==="transform"){Hw(this,h,e);continue}}else _ in a||(_=ma(_)||_);if(M||(u||u===0)&&(f||f===0)&&!bw.test(h)&&_ in a)p=(c+"").substr((f+"").length),u||(u=0),m=Bn(h)||(_ in di.units?di.units[_]:p),p!==m&&(f=Ar(e,_,c,m)),this._pt=new ii(this._pt,M?P:a,_,f,(b?io(f,b+u):u)-f,!M&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?ww:zp),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Ew);else if(_ in a)Nw.call(this,e,_,c,b?b+h:h);else if(_ in e)this.add(e,_,c||e[_],b?b+h:h,i,r);else if(_!=="parseTransform"){Lh(_,h);continue}M||(_ in a?A.push(_,0,a[_]):A.push(_,1,c||e[_])),o.push(_)}}R&&Fp(this)},render:function(e,t){if(t.tween._time||!Xp())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gs,aliases:xs,getSetter:function(e,t,n){var i=xs[t];return i&&i.indexOf(",")<0&&(t=i),t in Ws&&t!==pi&&(e._gsap.x||Gs(e,"x"))?n&&__===n?t==="scale"?Cw:Rw:(__=n||{})&&(t==="scale"?Pw:Iw):e.style&&!Ih(e.style[t])?Tw:~t.indexOf("-")?Aw:Oh(e,t)},core:{_removeProperty:co,_getMatrix:Yp}};Yn.utils.checkPrefix=ma;Yn.core.getStyleSaver=R_;(function(s,e,t,n){var i=ni(s+","+e+","+t,function(r){Ws[r]=1});ni(e,function(r){di.units[r]="deg",L_[r]=1}),xs[i[13]]=s+","+e,ni(n,function(r){var o=r.split(":");xs[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ni("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){di.units[s]="px"});Yn.registerPlugin(Zp);var Gt=Yn.registerPlugin(Zp)||Yn,xA=Gt.core.Tween;window.gsap=Gt;fl.has("nolag")&&Gt.ticker.lagSmoothing(0);var Tl=1.6,Ft=null;async function FA(){Ft=new Ac({canvas:de.canvas,antialias:!1,powerPreference:"high-performance"}),de.canvas.addEventListener("webglcontextlost",s=>{s.preventDefault(),window.__saelleFallback&&window.__saelleFallback("The 3D view stopped (the graphics card was reset). Reload the page to walk in again; the list works meanwhile.")}),await Vw(),Ei.has3D=!0}async function Vw(){let s=Math.min(devicePixelRatio||1,1.5),e=devicePixelRatio||1;Ft.setPixelRatio(s),Ft.setSize(innerWidth,innerHeight,!1),Ft.toneMapping=jf,Ft.toneMappingExposure=1,Ft.shadowMap.enabled=!0,Ft.shadowMap.type=$f,dg(Math.min(8,Ft.capabilities.getMaxAnisotropy()));let t=new ar,n=new Qt(58,innerWidth/innerHeight,.03,120),i=new Fe;t.add(i),i.add(n),n.position.y=Tl;let r=Promise.race([Promise.all([document.fonts.load('500 64px "Bodoni Moda"'),document.fonts.load('500 32px "Manrope"'),document.fonts.load('600 32px "Manrope"'),document.fonts.load('700 32px "Manrope"')]),new Promise(E=>setTimeout(E,3500))]),o=new Vo(Ft),a=o.fromScene(new sh,.04).texture;t.environment=a,t.environmentIntensity=.5;let l=0,c=11,h=()=>{l++,de.loadBar.style.transform=`scaleX(${Math.min(1,l/c)})`},u=fetch("assets/hdri/night_square.txt").then(E=>{if(!E.ok)throw new Error("hdr "+E.status);return E.text()}).then(E=>{let N=Uint8Array.from(atob(E.trim()),We=>We.charCodeAt(0)),Z=new eh().parse(N.buffer),me=new Qi(Z.data,Z.width,Z.height,Vn,Z.type);return me.colorSpace=_n,me.minFilter=me.magFilter=rn,me.generateMipmaps=!1,me.flipY=!0,me.needsUpdate=!0,me}).then(E=>(h(),E),E=>(console.warn("sky",E),h(),null)),f=new nh,d=E=>f.loadAsync(`assets/models/${E}/main.json`).then(N=>(h(),N.scene)).catch(N=>(console.warn("model",E,N),h(),null)),[g,_,p,m,b,M,v,P,T,R]=await Promise.all([u,d("pachira_aquatica_01"),d("potted_plant_04"),d("ceramic_vase_01"),d("ceramic_vase_03"),d("brass_vase_01"),d("bar_chair_round_01"),d("Ottoman_01"),d("side_table_01"),d("street_lamp_01")]);await r,h();let A=a;g?(g.mapping=Na,A=o.fromEquirectangular(g).texture,t.background=g):t.background=new Te(854802),t.backgroundIntensity=.42,t.backgroundRotation=new oi(0,Math.PI*.62,0);let x=E=>{if(!E)return null;let N=new Fe;E.position.set(0,0,0),E.updateMatrixWorld(!0);let Q=new on().setFromObject(E),Z=Q.getCenter(new U);return E.position.sub(new U(Z.x,Q.min.y,Z.z)),N.add(E),N.traverse(me=>{me.isMesh&&(me.castShadow=!0,me.receiveShadow=!0)}),N},y={tree:x(_),plant4:x(p),vase1:x(m),vase3:x(b),brass:x(M),stool:x(v),ottoman:x(P),side:x(T),lamp:x(R)};Kr.cheap=!fl.has("glass"),bi.base=wi?.5:.7,bi.seg=bi.base;let w=bg(t,{extEnv:A,models:y,quality:wi?"low":"high"});w.mainCamera=n,await Promise.race([fg(),new Promise(E=>setTimeout(E,2e4))]);let B=new Zo(16773606,7035472,.32);t.add(B);let F=(E,N,Q,Z,me,We,je)=>{let et=new vi(16770764,We,0,je,.75,1.4);return et.position.set(E,N,Q),et.target.position.set(Z,0,me),et.castShadow=!0,et.shadow.mapSize.set(wi?1024:2048,wi?1024:2048),et.shadow.camera.near=1,et.shadow.camera.far=12,et.shadow.bias=-3e-4,et.shadow.normalBias=.015,et.shadow.radius=5,t.add(et,et.target),et};F(0,3.95,-6.5,0,-7.2,40,1.05),wi||F(0,3.95,1.4,0,1.5,16,.6);for(let E of[-1,1])for(let N of[-4.8]){let Q=new vi(16769732,18,10,1,.9,1.8);Q.position.set(E*3.4,3.7,N),Q.target.position.set(E*7,1.2,N),t.add(Q,Q.target)}let O=new vi(16769732,16,8,.8,.9,1.4);O.position.set(0,3.9,fe.deskZ+.6),O.target.position.set(0,.8,fe.deskZ-.6),t.add(O,O.target);for(let E of[-9.7,-2,2,9.7]){let N=new vi(16764824,48,7,.36,1,1.5);N.position.set(E,.12,fe.front+1.05),N.target.position.set(E,4.4,fe.front+.62),t.add(N,N.target),w.extLights.push(N)}for(let E of w.extMats)E.envMapIntensity=E.metalness>.5||E.transmission>0||E.clearcoat>.5?.8:E.clearcoat>0?.35:.05;let q=new vi(16768182,30,9,1.1,1,1.5);q.position.set(0,3.2,fe.front-1.5),q.target.position.set(0,0,fe.front+3.5),t.add(q,q.target),w.frontLights.push(q);{let E=new Ha(256,{type:Kt,generateMipmaps:!0,minFilter:Qn}),N=new za(.05,60,E);N.position.set(0,1.7,-5.5),t.add(N),w.skipReflect=!0,N.update(Ft,t),w.skipReflect=!1;let Q=o.fromCubemap(E.texture).texture;t.environment=Q,t.environmentIntensity=.6,E.dispose(),t.remove(N)}let k=new _e(innerWidth,innerHeight),ae=new $t(innerWidth*s,innerHeight*s,{type:Kt,samples:wi?2:4}),Y=new oh(Ft,ae);Y.setPixelRatio(s),Y.addPass(new ah(t,n));let he=null;wi||(he=new al(t,n,innerWidth,innerHeight),he.updateGtaoMaterial({radius:.4,distanceExponent:1.8,thickness:1,scale:1,samples:12}),he.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:12}),he.blendIntensity=1,he.enabled=!1,Y.addPass(he));let Se=new ta(k.clone().multiplyScalar(.5),.2,.4,1.8);Y.addPass(Se);let Re=new ea({uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new _e(innerWidth,innerHeight)},uPx:{value:new _e(1/(innerWidth*s),1/(innerHeight*s))},uGrain:{value:0},uCA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime; uniform vec2 uRes; uniform vec2 uPx; uniform float uGrain; uniform float uCA; varying vec2 vUv;
      float h(vec2 p){ p = fract(p * vec2(443.897, 441.423)); p += dot(p, p.yx + 19.19); return fract((p.x + p.y) * p.x); }
      void main(){
        vec2 d = vUv - 0.5; float r2 = dot(d, d);
        vec2 off = d * r2 * uCA;
        vec3 c = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
        // light unsharp mask: crisper edges and print on packs, no extra pass
        vec3 bl = (texture2D(tDiffuse, vUv + vec2(uPx.x, 0.)).rgb + texture2D(tDiffuse, vUv - vec2(uPx.x, 0.)).rgb + texture2D(tDiffuse, vUv + vec2(0., uPx.y)).rgb + texture2D(tDiffuse, vUv - vec2(0., uPx.y)).rgb) * 0.25;
        c = max(c + (c - bl) * 0.25, 0.0);
        c = ACESFilmicToneMapping(c);
        c = sRGBTransferOETF(vec4(c, 1.0)).rgb;
        c = mix(c, c * c * (3.0 - 2.0 * c), 0.18); // a little photographic contrast
        float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c = mix(c, c * vec3(1.03, 1.0, 0.95), smoothstep(0.35, 0.9, lum));       // warm highlights
        c = mix(c, c + vec3(-0.004, 0.0, 0.012), 1.0 - smoothstep(0.0, 0.25, lum)); // cool, slightly lifted shadows
        c = mix(vec3(lum), c, 1.02);
        c *= mix(1.0, 0.93, smoothstep(0.18, 0.7, r2 * 1.6));                  // vignette
        float n = h(vUv * uRes + fract(uTime * 13.7) * 100.0) - 0.5;
        c += n * uGrain * (1.0 - lum * 0.6);
        gl_FragColor = vec4(c, 1.0);
      }`});Y.addPass(Re);let K={x:-1.2,y:0,z:17.2,yaw:0,pitch:.12,bob:0},tt=(E,N,Q,Z)=>Math.atan2(-(Q-E),-(Z-N));K.yaw=tt(K.x,K.z,-.3,fe.front),innerWidth/innerHeight<.8&&(Object.assign(K,{x:-.6,z:18.5,pitch:.16}),K.yaw=tt(K.x,K.z,0,fe.front));let le=(E,N)=>{let Q=N-E;for(;Q>Math.PI;)Q-=Math.PI*2;for(;Q<-Math.PI;)Q+=Math.PI*2;return E+Q};function z(){i.position.set(K.x,K.y,K.z),i.rotation.y=K.yaw,n.rotation.set(K.pitch,0,0),n.position.y=Tl+K.bob}function ge(){let E=innerWidth/innerHeight;n.fov=E<.8?72:E<1.2?64:56,n.aspect=E,n.updateProjectionMatrix()}ge();let ue=Gw();i.add(ue.group);let be={x:.42,y:.9,z:-.74};ue.group.position.set(be.x,be.y-.8,be.z),ue.group.visible=!1;let Ve=[],Ae={};for(let E of w.products){E.root.userData.pid=E.p.id;let N=[];E.root.traverse(Q=>{Q.isMesh&&(Ve.push(Q),(Q.material&&Q.material.isMeshStandardMaterial&&!Q.material.transparent&&Q.material.transmission===0||Q.material&&Q.material.transmission===void 0&&Q.material.isMeshStandardMaterial)&&(Q.material=Q.material.clone(),N.push(Q.material)))}),E.mats=N,E.root.updateMatrixWorld(!0),E.hotWorld=E.root.localToWorld(E.hot.clone()),E.normal&&(E.normal=E.normal.clone().normalize()),Ae[E.p.id]=E}let Ge=(E,N)=>{let Q=Ae[E];if(Q)for(let Z of Q.mats)Z.emissive.set(ts.brass),Z.emissiveIntensity=N},D=Ww(wi?300:800);t.add(D.points),t.updateMatrixWorld(!0);for(let E of w.emitters)E.wp=E.obj?E.obj.localToWorld(E.p.clone()):E.p.clone(),E.wd=(E.obj?E.d.clone().transformDirection(E.obj.matrixWorld):E.d.clone()).normalize(),E.acc=0;let V=Xw(wi?120:320);t.add(V.points),w.noReflect=[D.points,V.points];{let E=t.getObjectByName("batched"),N=Q=>{for(let Z=Q;Z;Z=Z.parent)if(Z===E)return!0;return!1};t.traverse(Q=>{(Q.isMesh||Q.isPoints||Q.isLine)&&Q!==w.reflector&&!N(Q)&&Q.visible&&w.noReflect.push(Q)})}w.noMirror=[...w.products.map(E=>E.root),D.points,V.points];let C=[];{let E=new U,N=t.getObjectByName("batched"),Q=t.getObjectByName("interior"),Z=me=>{for(let We=me;We;We=We.parent)if(We===N)return!0;return!1};for(let me of w.products)me.root.getWorldPosition(E),E.z<fe.front-(wi?3.5:5.5)&&C.push(me.root);Q.traverse(me=>{(me.name==="Scene"||/vase|plant|pachira|chair|ottoman|table/i.test(me.name)&&me.parent&&!/vase|plant|pachira|chair|ottoman|table/i.test(me.parent.name))&&(me.getWorldPosition(E),E.z<fe.front-(wi?3.5:5.5)&&!Z(me)&&C.push(me))})}wi&&t.getObjectByName("interior").children.forEach(E=>{E.name==="glowpools"&&C.push(E)});let $=!1;function j(E){$=E;for(let N of C)N.visible=!E}let ie=[{ids:["cloud-cream","dew-serum","rice-toner"],kick:"NEW  ·  THE GLOW RITUAL",title:["Dewy,","by design."],line:"Hyaluronic serum, barrier cream, rice water toner",bg:["#f0d3c7","#d9a596"],plinth:16049372,ink:"#3a1f2b",wall:-1,z:2.75},{ids:["jasmine-night","oud-saffron"],kick:"FRAGRANCE  ·  No. 7",title:["Wear","the night."],line:"Jasmine Night and Oud & Saffron, eau de parfum",bg:["#6b3445","#26121a"],plinth:3809067,ink:"#f3e3d6",wall:1,z:2.75},{ids:["lip-sindoor","palette","lip-rosewood"],kick:"MAKEUP  ·  VELVET MATTE",title:["Colour","that stays."],line:"Lipstick in Sindoor and Rosewood, Sunset palette",bg:["#d4917f","#8c4a45"],plinth:15323077,ink:"#fbf1ea",wall:1,z:-12.75},{ids:["body-butter","hair-oil","ubtan-scrub"],kick:"HAIR & BODY",title:["Slow","rituals."],line:"Bhringraj hair oil, shea butter, ubtan scrub",bg:["#ede2d3","#c9b29a"],plinth:16183270,ink:"#3a1f2b",wall:-1,z:-12.75}];for(let E of ie){let N=qw(Ft,t.environment,E),Q=new Fe;Q.position.set(E.wall*(fe.x-.03),1.75,E.z),Q.rotation.y=-E.wall*Math.PI/2,t.add(Q);let Z=1.25,me=1.72,We=new nt({color:11569749,metalness:1,roughness:.38}),je=new nt({color:16183786,roughness:.95}),et=(xn,Wt,Yt,kn,Dn,Ms,V_)=>{let xa=new Ie(new un(xn,Wt,Yt),V_);return xa.position.set(kn,Dn,Ms),xa.castShadow=!0,xa.receiveShadow=!0,Q.add(xa),xa};et(Z+.26,me+.26,.02,0,0,.01,je);for(let[xn,Wt,Yt,kn]of[[Z+.3,.025,0,(me+.275)/2],[Z+.3,.025,0,-(me+.275)/2],[.025,me+.3,(Z+.275)/2,0],[.025,me+.3,-(Z+.275)/2,0]])et(xn,Wt,.045,Yt,kn,.022,We);let pt=new Ie(new wt(Z,me),new at({map:N,roughness:.35,clearcoat:.4,clearcoatRoughness:.08,emissive:16777215,emissiveMap:N,emissiveIntensity:.3}));pt.position.z=.0215,Q.add(pt);let qt=et(.02,.02,.22,0,me/2+.2,.11,We),Ut=new Ie(new fn(.022,.022,.5,20),We);Ut.rotation.z=Math.PI/2,Ut.position.set(0,me/2+.2,.22),Q.add(Ut);let Tt=new Ie(new un(.46,.006,.02),new At({color:new Te(2.2,1.8,1.4),toneMapped:!1}));Tt.position.set(0,me/2+.177,.22),Q.add(Tt)}let ee={};for(let E of w.products){let N=document.createElement("button");N.type="button",N.className="st-dot",N.setAttribute("aria-label",E.p.name+", "+is(E.p.price)),N.innerHTML='<span class="st-dot__core"></span>',N.addEventListener("click",Q=>{Q.stopPropagation(),Jt(),ho(E.p.id,!0)}),N.addEventListener("pointerenter",()=>{ra||(I=E.p.id)}),N.addEventListener("pointerleave",()=>{I===E.p.id&&(I=null)}),de.dots.appendChild(N),ee[E.p.id]=N}let ne="intro",xe=null,I=null,S=null,G=null,J=!1,se={},te=new _e,Me=0,ve={x:0,y:0,active:!1},Ce=!0;Ze("idle"),L(),Ei.basket.forEach(E=>ue.fill(_r[E.id])),sa.add=E=>ss(E),sa.checkout=()=>Pe(!1),sa.show=E=>{if(ne!=="free"&&ne!=="tour")return;Jt(),J=!0;let N=Ae[E],Q=Be(N);Bt(Q.x,Q.z,N.hotWorld.x,N.hotWorld.y,N.hotWorld.z,()=>{S=E,xe===E&&(xe=null),Rr(E)})};let Xe=!1;sa.pause=E=>{Xe&&Ft.setAnimationLoop(E?null:Bl)};let pe=()=>Promise.race([Ft.compileAsync(t,n),new Promise(E=>setTimeout(E,8e3))]);try{await pe(),we(!1),await pe(),qe(!1),await pe(),qe(!0),we(!0)}catch{}Ft.shadowMap.autoUpdate=!1,Ft.shadowMap.needsUpdate=!0,de.load.hidden=!0,de.enter.disabled=!1,de.intro.classList.add("is-ready"),de.list.hidden&&de.enter.focus({preventScroll:!0}),de.enter.addEventListener("click",Ee);function Ee(){if(ne!=="intro")return;if(ne="entering",de.intro.classList.add("is-leaving"),setTimeout(()=>{de.intro.hidden=!0},700),Hi){Object.assign(K,{x:0,z:3.6,yaw:0,pitch:-.12}),ce(!0),Oe();return}let E=Gt.timeline({defaults:{ease:"power2.inOut"}}),N=()=>tt(K.x,K.z,0,fe.front-2);E.to(K,{x:-.4,z:10.5,pitch:.02,duration:3.4,onUpdate:()=>{K.yaw=le(K.yaw,N())*.1+K.yaw*.9}}).to(K,{x:0,z:7.6,yaw:0,pitch:-.02,duration:1.8,ease:"power1.inOut"}).add(()=>ce(!0),"-=1.1").to(K,{z:3.4,pitch:-.12,duration:2.8,ease:"power2.inOut"}).add(()=>{ue.group.visible=!0,Gt.fromTo(ue.group.position,{y:be.y-.8},{y:be.y,duration:1.2,ease:"power3.out"})},"-=1.2").add(()=>Oe())}function Oe(){ue.group.visible=!0,Hi&&(ue.group.position.y=be.y),de.hud.hidden=!1,requestAnimationFrame(()=>de.hud.classList.add("is-on")),ra&&(de.joy.hidden=!1),ne="free",He(),Hi||setTimeout(()=>{ne==="free"&&!J&&!W&&de.list.hidden&&hn()},1200)}let Ne=!0;function we(E){Ne=E;for(let N of w.extLights)N.visible=E}let rt=!0;function qe(E){rt=E;for(let N of w.frontLights)N.visible=E}let ht=!1,H=!1;function De(E){E!==ht&&(ht=E,ce(E))}function ce(E){E&&!H&&vr.play("door"),H=E,ht=E;for(let N of w.doors)Gt.killTweensOf(N.obj.rotation),Hi?N.obj.rotation.y=E?N.open:N.closed:Gt.to(N.obj.rotation,{y:E?N.open:N.closed,duration:E?1.6:1.8,ease:E?"power2.out":"power2.inOut"})}let ye=0;function He(){de.hint.hidden=!1,requestAnimationFrame(()=>de.hint.classList.add("is-on")),clearTimeout(ye),ye=setTimeout(()=>{de.hint.classList.remove("is-on"),setTimeout(()=>de.hint.hidden=!0,400)},7500)}function Be(E){let N=E.hotWorld;return E.normal?{x:es.clamp(N.x+E.normal.x*1.45,-5.4,5.4),z:N.z+E.normal.z*1.45+(E.normal.x?.35:0)}:{x:N.x*.75,z:N.z+(N.z>fe.scentZ-1?1.45:1.3)}}function Le(E,N,Q,Z,me,We){let je=le(K.yaw,tt(E,N,Q,me)),et=Math.hypot(Q-E,me-N),pt=es.clamp(Math.atan2(Z-Tl,et),-.55,.25)+.02;return Gt.to(K,{x:E,z:N,yaw:je,pitch:pt,duration:We??Math.min(3.4,1.2+Math.hypot(E-K.x,N-K.z)*.36),ease:"power2.inOut"})}function ft(E,N,Q,Z,me,We){let je=me.x0-We,et=me.x1+We,pt=me.z0-We,qt=me.z1+We,Ut=0,Tt=1,xn=Q-E,Wt=Z-N;for(let[Yt,kn]of[[-xn,E-je],[xn,et-E],[-Wt,N-pt],[Wt,qt-N]]){if(Yt===0){if(kn<0)return!1;continue}let Dn=kn/Yt;if(Yt<0){if(Dn>Tt)return!1;Dn>Ut&&(Ut=Dn)}else{if(Dn<Ut)return!1;Dn<Tt&&(Tt=Dn)}}return Ut<Tt}function gt(E,N){let Q=[],Z=K.x,me=K.z;for(let We=0;We<4;We++){let je=w.obstacles.filter(Wt=>ft(Z,me,E,N,Wt,.32)).sort((Wt,Yt)=>Math.hypot((Wt.x0+Wt.x1)/2-Z,(Wt.z0+Wt.z1)/2-me)-Math.hypot((Yt.x0+Yt.x1)/2-Z,(Yt.z0+Yt.z1)/2-me))[0];if(!je)break;let et=.62,pt=(je.x0+je.x1)/2,qt=(je.z0+je.z1)/2,Ut=me>fe.front||N>fe.front?w.outside:w.bounds,Tt,xn;if(Math.abs(E-Z)>Math.abs(N-me)){let Wt=je.z1+et,Yt=je.z0-et,kn=Yt<Ut.z0+.1?Wt:Wt>Ut.z1-.1||(me+N)/2<qt?Yt:Wt,Dn=Ms=>Ms>je.x1?je.x1+et:Ms<je.x0?je.x0-et:Ms;Tt={x:Dn(Z),z:kn},xn={x:Dn(E),z:kn}}else{let Wt=je.x0-et,Yt=je.x1+et,kn=Wt<Ut.x0+.1?Yt:Yt>Ut.x1-.1||(Z+E)/2<pt?Wt:Yt,Dn=Ms=>Ms>je.z1?je.z1+et:Ms<je.z0?je.z0-et:Ms;Tt={x:kn,z:Dn(me)},xn={x:kn,z:Dn(N)}}Math.hypot(Tt.x-Z,Tt.z-me)>.2&&Q.push(Tt),Q.push(xn),Z=xn.x,me=xn.z}return Q}let st=0;function Bt(E,N,Q,Z,me,We){let je=st,et=gt(E,N),pt=Gt.timeline({data:"walk",onComplete:()=>{je===st&&We&&We()}}),qt=K.x,Ut=K.z;for(let Tt of et){let xn=qt,Wt=Ut;pt.to(K,{x:Tt.x,z:Tt.z,duration:Math.max(.9,Math.hypot(Tt.x-qt,Tt.z-Ut)*.42),ease:"sine.inOut",onStart:()=>{je===st&&Gt.to(K,{yaw:le(K.yaw,tt(xn,Wt,Tt.x,Tt.z)),pitch:-.08,duration:.8,ease:"power2.inOut",data:"walk"})}}),qt=Tt.x,Ut=Tt.z}return pt.add(()=>{if(je!==st)return;pt.pause();let Tt=Le(E,N,Q,Z,me);Tt.data="walk",Tt.eventCallback("onComplete",()=>{je===st&&pt.resume()})}),pt.to({},{duration:.01}),pt}function hn(E){Jt(!0),ne="tour",ys(!0);let N=Gt.timeline({onComplete:()=>{ne="free",ys(!1)}}),Q=0;if(K.z>=fe.front-.3&&(N.call(()=>{N.pause(),Bt(0,fe.front+1.3,0,1.5,fe.front-3,()=>N.resume())}),N.call(()=>{De(!0)}),N.to({},{duration:.9}),N.call(()=>{N.pause(),Gt.to(K,{z:fe.front-1.4,duration:2.2,ease:"power2.inOut",data:"walk"}).eventCallback("onComplete",()=>N.resume())})),E==null&&K.z<fe.front){let Z=1/0;ph.forEach((me,We)=>{if(me==="desk")return;let je=Ae[me[0]],et=Be(je),pt=Math.hypot(et.x-K.x,et.z-K.z);pt<Z&&(Z=pt,Q=We)})}else E!=null&&(Q=E);for(let Z=Q;Z<ph.length;Z++){let me=ph[Z];if(me==="desk"){N.call(()=>{N.pause(),Bt(0,fe.deskZ+1.75,0,1.15,fe.deskZ,()=>N.resume())}),N.call(()=>{Ce=!1,W||Pe(!0,!0)});continue}me.forEach((We,je)=>{let et=Ae[We];et&&(N.call(()=>{N.pause();let pt=Be(et);Bt(pt.x,pt.z,et.hotWorld.x,et.hotWorld.y,et.hotWorld.z,()=>N.resume())}),N.call(()=>{S=We}),N.to({},{duration:je===0?2.8:2.4}))}),N.call(()=>{S=null})}G=N}function Jt(){st++,G&&(G.kill(),G=null),Gt.killTweensOf(K),Gt.globalTimeline.getChildren(!1,!0,!0).forEach(E=>{E.data==="walk"&&E.kill()}),S=null,ne==="tour"&&(ne="free"),ys(!1)}function ys(E){de.tourBtn.dataset.state=E?"on":"off",de.tourBtn.querySelector("span").textContent=E?"Stop tour":"Guided tour"}de.tourBtn.addEventListener("click",()=>{ne==="tour"?Jt():ne==="free"&&hn()});let Lt=null;function ho(E,N){if(!N)return;J=!0,S=E,xe=null;let Q=Ae[E];if(ne!=="tour"){Gt.killTweensOf(K);let Z=le(K.yaw,tt(K.x,K.z,Q.hotWorld.x,Q.hotWorld.z)),me=Math.hypot(Q.hotWorld.x-K.x,Q.hotWorld.z-K.z);Gt.to(K,{yaw:Z,pitch:es.clamp(Math.atan2(Q.hotWorld.y-Tl,me),-.55,.25),duration:Hi?0:.7,ease:"power2.inOut"})}}function Rr(E){if(E===Lt)return;if(Lt&&Ge(Lt,0),Lt=E,!E){de.bar.classList.remove("is-on"),de.bar.setAttribute("aria-hidden","true"),de.bar.inert=!0;return}de.bar.inert=!1,Ge(E,.06);let N=_r[E],Q=_g[N.sec];de.barImg.src=Ei.thumbs[E]||"",de.barKick.textContent=N.hero?"New launch":`${Q.n} · ${Q.name}`,de.barName.textContent=N.name,de.barSpec.textContent=`${N.size} · ${N.note}`,de.barPrice.textContent=is(N.price),de.bar.dataset.id=E,Cr(),de.bar.setAttribute("aria-hidden","false"),de.bar.classList.remove("is-on"),de.bar.offsetWidth,de.bar.classList.add("is-on")}function Cr(){if(!Lt)return;let E=yh(Lt);de.barAdd.querySelector("span").textContent=E?`In basket · ${E}`:"Add to basket",de.barAdd.classList.toggle("is-added",!!E)}de.barAdd.addEventListener("click",()=>{Lt&&ss(Lt)}),de.barMore.addEventListener("click",()=>{Lt&&Qd(Lt,de.barMore)}),de.barImg.addEventListener("click",()=>{Lt&&Qd(Lt,de.barAdd)});function ss(E){vr.play("add"),tp(12);let N=Ei.basket.find(Z=>Z.id===E);if(N&&N.q>=99){Il("You can take up to 99 of one product");return}N?N.q++:Ei.basket.push({id:E,q:1}),vh(),L(),Cr(),Mh(),clearTimeout(ye),de.hint.classList.remove("is-on"),de.hint.hidden=!0;let Q=Ae[E];Q&&yh(E)===1?Rl(Q):Cl(),Il(`${_r[E].name} is in your basket`),Ze(xr().n?"ready":"idle")}function Al(E){let N=Ei.basket.find(Q=>Q.id===E);N&&(N.q--,N.q<=0&&(Ei.basket=Ei.basket.filter(Q=>Q!==N),uo(E),ue.remove(E)),vh(),L(),Cr(),Mh(),oe(),Ze(xr().n?"ready":"idle"))}let qi={};function uo(E){let N=qi[E];N&&(N.tween.kill(),t.remove(N.holder),delete qi[E])}function Rl(E){uo(E.p.id);let N=ue.makeItem(E.p);if(Hi||!ue.group.visible){ue.place(N,E.p.id);return}let Q=E.hotWorld.clone();t.add(N),N.position.copy(Q);let Z=1,me=N.userData.fitScale,We={t:0};qi[E.p.id]={holder:N,tween:null},qi[E.p.id].tween=Gt.to(We,{t:1,duration:.9,ease:"power2.inOut",onUpdate:()=>{let je=ue.slotWorld(E.p.id),et=Q.clone().lerp(je,.5);et.y=Math.max(Q.y,je.y)+.35;let pt=Q.clone().lerp(et,We.t),qt=et.clone().lerp(je,We.t);N.position.copy(pt.lerp(qt,We.t)),N.scale.setScalar(Z+(me-Z)*We.t),N.rotation.y=K.yaw+We.t*Math.PI*.8},onComplete:()=>{delete qi[E.p.id],yh(E.p.id)>0?(ue.place(N,E.p.id),Cl(),vr.play("land")):t.remove(N)}})}function Cl(){Hi||(Gt.fromTo(ue.group.position,{y:be.y},{y:be.y-.025,duration:.12,yoyo:!0,repeat:1,ease:"power1.inOut"}),de.cartBtn.animate([{transform:"scale(1)"},{transform:"scale(1.06)"},{transform:"scale(1)"}],{duration:320,easing:"cubic-bezier(.23,1,.32,1)"}))}let Pl=0;function Il(E){de.toastText.textContent=E,de.toast.hidden=!1,de.toast.classList.remove("is-on"),de.toast.offsetWidth,de.toast.classList.add("is-on"),clearTimeout(Pl),Pl=setTimeout(()=>de.toast.classList.remove("is-on"),2600)}function L(){let E=xr();de.cartCount.textContent=E.n,de.cartSum.textContent=E.n?is(E.sum):"Basket",de.cartBtn.setAttribute("aria-label",`Open your basket, ${E.n} item${E.n===1?"":"s"}, ${is(E.sum)}`),de.cartBtn.classList.toggle("has-items",E.n>0)}de.cartBtn.addEventListener("click",()=>Pe(!1)),de.slipClose.addEventListener("click",ke),de.slipAgain.addEventListener("click",()=>{ke()});let W=!1;function re(E,N){let Q=de.slipList.querySelector(`li[data-id="${E}"]`);(Q&&Q.querySelectorAll("button")[N]||de.slipClose).focus({preventScroll:!0})}function oe(){let E=xr();de.slipEmpty.hidden=E.n>0,de.slipForm.hidden=E.n===0,de.slipList.innerHTML="";for(let Q of Ei.basket){let Z=_r[Q.id],me=document.createElement("li");me.dataset.id=Q.id,me.innerHTML='<span class="st-slip__q"></span><span class="st-slip__n"><span></span><small></small></span><span class="st-slip__v"></span><span class="st-slip__ctl"><button type="button" aria-label="Remove one">−</button><button type="button" aria-label="Add one">+</button></span>',me.querySelector(".st-slip__q").textContent=Q.q+"×",me.querySelector(".st-slip__n span").textContent=Z.name,me.querySelector(".st-slip__n small").textContent=Z.size,me.querySelector(".st-slip__v").textContent=is(Z.price*Q.q);let[We,je]=me.querySelectorAll("button");We.addEventListener("click",()=>{Al(Q.id),re(Q.id,0)}),je.addEventListener("click",()=>{ss(Q.id),oe(),re(Q.id,1)}),de.slipList.appendChild(me)}de.slipCount.textContent=`${E.n} item${E.n===1?"":"s"}`,de.slipSub.textContent=E.n?"Check your basket, then pay at the counter.":"Your basket is empty.",de.slipTax.textContent=E.n?is(Math.round(E.sum-E.sum/1.18)):"—",de.slipTotal.textContent=E.n?is(E.sum):"—";let N=new Date;de.slipDate.textContent=N.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})+" · "+N.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}let X=null;function Pe(E,N){!N&&ne==="tour"&&Jt(),X=document.activeElement!==document.body?document.activeElement:null,J=!0,Mt();for(let Q in se)se[Q]=!1;de.hud.inert=!0,de.slip.classList.remove("is-sent"),de.slipDone.hidden=!0,de.slipHead.hidden=!1,oe(),de.slip.hidden=!1,requestAnimationFrame(()=>de.slip.classList.add("is-on")),W=!0,setTimeout(()=>(xr().n?de.slipName:de.slipClose).focus({preventScroll:!0}),60)}function ke(){de.hud.inert=!1,X&&X.isConnected&&!X.closest("[inert]")&&X.focus({preventScroll:!0}),X=null,de.slip.classList.remove("is-on"),W=!1,setTimeout(()=>{W||(de.slip.hidden=!0)},340)}de.slipForm.addEventListener("submit",E=>{if(E.preventDefault(),!xr().n)return;let N=de.slipName.value.trim(),Q="SA-"+String(Math.floor(1e4+Math.random()*89999));de.slipOrder.textContent=Q,de.slipThanks.textContent=N?`Thank you, ${N}.`:"Thank you.",de.slip.classList.add("is-sent"),de.slipHead.hidden=!0,de.slipDone.hidden=!1,Ze("paid",Q),Qe(1),de.slipAgain.focus({preventScroll:!0}),Ei.basket=[],vh();for(let Z in qi)uo(Z);ue.clear(),L(),Mh(),Cr()});function Ze(E,N){let Q=xr();mg(w.deskScreen,(Z,me,We)=>{Z.fillStyle="#1e1418",Z.fillRect(0,0,me,We),Z.textAlign="center",Z.fillStyle="#c9a46a",Z.font=`500 34px ${li}`,ti(Z,"SAELLE",me/2,64,10),Z.fillStyle="rgba(201,164,106,.4)",Z.fillRect(me/2-40,84,80,2),E==="paid"?(Z.strokeStyle="#d9b77c",Z.lineWidth=10,Z.lineCap="round",Z.lineJoin="round",Z.beginPath(),Z.arc(me/2,220,70,0,7),Z.stroke(),Z.beginPath(),Z.moveTo(me/2-32,222),Z.lineTo(me/2-6,248),Z.lineTo(me/2+36,196),Z.stroke(),Z.fillStyle="#fbf7f4",Z.font=`600 34px ${dn}`,Z.fillText("Paid. Thank you!",me/2,350),Z.fillStyle="rgba(251,247,244,.6)",Z.font=`500 24px ${dn}`,Z.fillText("Order "+(N||""),me/2,392)):Q.n?(Z.fillStyle="rgba(251,247,244,.6)",Z.font=`500 26px ${dn}`,Z.fillText(`${Q.n} item${Q.n>1?"s":""} in your basket`,me/2,160),Z.fillStyle="#fbf7f4",Z.font=`700 96px ${dn}`,Z.fillText(is(Q.sum),me/2,272),Z.fillStyle="#c9a46a",gg(Z,me/2-150,330,300,70,35),Z.fill(),Z.fillStyle="#1e1418",Z.font=`700 28px ${dn}`,Z.fillText("Tap to pay",me/2,375)):(Z.fillStyle="#fbf7f4",Z.font=`500 38px ${li}`,Z.fillText("Welcome to Saelle",me/2,220),Z.fillStyle="rgba(251,247,244,.6)",Z.font=`500 26px ${dn}`,Z.fillText("Fill your basket on the shelves,",me/2,290),Z.fillText("then pay here.",me/2,326))})}let Je=de.confetti.getContext("2d"),lt=[],ut=!1;function Qe(E){if(Hi)return;de.confetti.width=innerWidth*s,de.confetti.height=innerHeight*s;let N=["#C9A46A","#E9CFC5","#B85C6E","#FBF7F4","#5A2E33","#F2D9A6"];for(let Q=0;Q<170*E;Q++)lt.push({x:innerWidth*(.25+Math.random()*.5),y:innerHeight*.38,vx:(Math.random()-.5)*14,vy:-6-Math.random()*10,r:Math.random()*Math.PI,vr:(Math.random()-.5)*.35,w:7+Math.random()*6,h:10+Math.random()*9,c:N[Q%N.length],life:0,petal:Q%3===0});ut=!0,vr.play("pay")}function St(){if(!ut)return;let E=Je;E.setTransform(s,0,0,s,0,0),E.clearRect(0,0,innerWidth,innerHeight),lt=lt.filter(N=>N.y<innerHeight+40&&N.life<320);for(let N of lt)N.vy+=.3,N.vx*=.985,N.vy*=.982,N.x+=N.vx+Math.sin(N.life*.08+N.r)*.6,N.y+=N.vy,N.r+=N.vr,N.life++,E.save(),E.translate(N.x,N.y),E.rotate(N.r),E.scale(1,Math.cos(N.life*.16+N.r)),E.fillStyle=N.c,N.petal?(E.beginPath(),E.ellipse(0,0,N.w*.5,N.h*.6,0,0,7),E.fill()):E.fillRect(-N.w/2,-N.h/2,N.w,N.h*.6),E.restore();lt.length||(ut=!1,E.clearRect(0,0,innerWidth,innerHeight))}let ct=null,xt={x:0,y:0,moved:!1,cx:0,cy:0},In=ra?10:5,$e={vx:0,vy:0,lx:0,ly:0,lt:0};de.canvas.addEventListener("pointerdown",E=>{if(!(ne==="intro"||ne==="entering")){if(W){ke();return}de.list.hidden&&(ct||($e.vx=$e.vy=0,ct={id:E.pointerId,x:E.clientX,y:E.clientY,moved:0,yaw:K.yaw,pitch:K.pitch},$e.lx=E.clientX,$e.ly=E.clientY,$e.lt=performance.now(),de.canvas.setPointerCapture(E.pointerId)))}}),de.canvas.addEventListener("pointermove",E=>{if(xt.x=E.clientX/innerWidth*2-1,xt.y=-(E.clientY/innerHeight)*2+1,xt.moved=!0,Ol=!0,xt.cx=E.clientX,xt.cy=E.clientY,!ct||ct.id!==E.pointerId)return;let N=E.clientX-ct.x,Q=E.clientY-ct.y;if(ct.moved=Math.max(ct.moved,Math.hypot(N,Q)),ct.moved>In){ne==="tour"&&Jt(),J=!0;let Z=(ra?.0055:.0036)*(58/n.fov);K.yaw=ct.yaw+N*Z,K.pitch=es.clamp(ct.pitch+Q*Z*.9,-.8,.5);let me=performance.now(),We=Math.max(8,me-$e.lt);$e.vx=$e.vx*.5+(E.clientX-$e.lx)*Z/We*.5,$e.vy=$e.vy*.5+(E.clientY-$e.ly)*Z*.9/We*.5,$e.lx=E.clientX,$e.ly=E.clientY,$e.lt=me,de.canvas.classList.add("is-dragging")}});let it=E=>{!ct||ct.id!==E.pointerId||(de.canvas.classList.remove("is-dragging"),ct.moved<=In?(Pr(E.clientX,E.clientY),$e.vx=$e.vy=0):(performance.now()-$e.lt>60||Hi)&&($e.vx=$e.vy=0),ct=null)};de.canvas.addEventListener("pointerup",it);let Ri=()=>{ct=null,$e.vx=$e.vy=0,de.canvas.classList.remove("is-dragging")};de.canvas.addEventListener("pointercancel",Ri),de.canvas.addEventListener("lostpointercapture",E=>{ct&&ct.id===E.pointerId&&Ri()}),de.canvas.addEventListener("pointerleave",()=>{xt.moved=!1,I=null,de.tip.classList.remove("is-on")}),de.canvas.addEventListener("wheel",E=>{ne!=="free"&&ne!=="tour"||W||!de.list.hidden||(E.preventDefault(),ne==="tour"&&Jt(),J=!0,Me=es.clamp(Me-E.deltaY*.012,-4,4),Math.abs(E.deltaX)>Math.abs(E.deltaY)&&(K.yaw-=E.deltaX*.002))},{passive:!1}),addEventListener("keydown",E=>{if(E.key==="Escape"){W?ke():de.list.hidden?ne==="tour"&&Jt():Tg();return}if(W||Ag()||!de.list.hidden||!Ei.has3D||E.target.closest&&E.target.closest("input, textarea, select")||ne!=="free"&&ne!=="tour")return;let N=E.key.toLowerCase();if(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","q","e","shift"].includes(N)&&(N.startsWith("arrow")&&E.preventDefault(),ne==="tour"&&Jt(),ne==="free"&&!se[N]&&(Gt.killTweensOf(K),st++,xe=null),J=!0,se[N]=!0),!(E.ctrlKey||E.metaKey||E.altKey)){if((N==="enter"||N===" "||N==="+")&&(E.target===document.body||E.target===de.canvas)&&(xe||Lt)){E.preventDefault(),ss(xe||Lt);return}if(!(E.target.closest&&E.target.closest("button, a")))if(N==="n"||N==="p"||N==="]"||N==="["){E.preventDefault();let Q=Rn.findIndex(We=>We.id===(xe||Lt||S)),Z=N==="n"||N==="]"?1:-1,me=Rn[Q<0?Z>0?0:Rn.length-1:(Q+Z+Rn.length)%Rn.length];xe=me.id,sa.show(me.id),Rr(me.id),ep(`${me.name}, ${is(me.price)}. Press Enter to add it to the basket.`)}else N==="l"||N==="/"?(E.preventDefault(),wg()):N==="t"?ne==="tour"?Jt():hn():N==="m"?(vr.set(!vr.on),ep(vr.on?"Sound on":"Sound off")):N==="c"&&Ei.basket.length&&Pe(!1)}}),addEventListener("keyup",E=>{se[E.key.toLowerCase()]=!1}),addEventListener("blur",()=>{for(let E in se)se[E]=!1}),de.joy.addEventListener("pointerdown",E=>{de.joy.classList.add("is-active"),ve.active=!0,ve.id=E.pointerId,de.joy.setPointerCapture(E.pointerId),si(E),xe=null,ne==="tour"?Jt():(Gt.killTweensOf(K),st++),J=!0}),de.joy.addEventListener("pointermove",E=>{ve.active&&E.pointerId===ve.id&&si(E)});let Mt=()=>{ve.active=!1,ve.x=ve.y=0,de.joyKnob.style.transform="",de.joy.classList.remove("is-active")};de.joy.addEventListener("pointerup",Mt),de.joy.addEventListener("pointercancel",Mt),de.joy.addEventListener("lostpointercapture",Mt);function si(E){let N=de.joy.getBoundingClientRect(),Q=N.width/2,Z=E.clientX-(N.left+Q),me=E.clientY-(N.top+Q),We=Math.hypot(Z,me);We>Q*.62&&(Z*=Q*.62/We,me*=Q*.62/We),de.joyKnob.style.transform=`translate(${Z}px, ${me}px)`,ve.x=Z/(Q*.62),ve.y=me/(Q*.62),Math.hypot(ve.x,ve.y)<.15&&(ve.x=ve.y=0)}let Ln=new Qa;Ln.far=12;let Zn=[...Ve,...w.occluders];function Xs(E,N){Ln.setFromCamera({x:E,y:N},n);let Q=Ln.intersectObjects(Zn,!1);if(!Q.length)return null;let Z=Q[0].object;for(;Z&&!Z.userData.pid;)Z=Z.parent;return Z?Z.userData.pid:null}let Dt=new on(new U(-1.6,0,fe.deskZ-.7),new U(1.6,1.4,fe.deskZ+.6));function Ci(E,N){return Ln.setFromCamera({x:E/innerWidth*2-1,y:-(N/innerHeight)*2+1},n),Ln.ray.intersectsBox(Dt)}function Pr(E,N){let Q=Xs(E/innerWidth*2-1,-(N/innerHeight)*2+1);Q?(ne==="tour"&&Jt(),ho(Q,!0)):$p()<3.2&&Ci(E,N)?Pe(!0):Ll(E,N)}let ri=new _i(new U(0,1,0),0),$n=new U,sn=new Ie(new kc(.16,.2,40),new At({color:16770756,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));sn.rotation.x=-Math.PI/2,sn.renderOrder=5,sn.visible=!1,t.add(sn);function Ll(E,N){if(ne!=="free"&&ne!=="tour"||(Ln.setFromCamera({x:E/innerWidth*2-1,y:-(N/innerHeight)*2+1},n),!Ln.ray.intersectPlane(ri,$n)))return;let Q=$n.distanceTo(Ln.ray.origin);if(Q>14)return;let Z=Nl;if(Z.set(Ln.ray.origin,Ln.ray.direction),Z.far=Q-.05,Z.intersectObjects(w.occluders,!1).length)return;let me=$n.x-K.x,We=$n.z-K.z,je=Math.hypot(me,We);if(je<.4)return;let et=$n.x,pt=$n.z,qt=0;for(;Ul(et,pt)&&qt++<20;)et-=me/je*.2,pt-=We/je*.2;if(Ul(et,pt)||Math.hypot(et-K.x,pt-K.z)<.4)return;ne==="tour"&&Jt(),J=!0,Gt.killTweensOf(K),st++,xe=null,tp(6),sn.position.set(et,.012,pt),sn.scale.setScalar(.6),Gt.killTweensOf(sn.material),Gt.killTweensOf(sn.scale),sn.visible=!0,sn.material.opacity=.9,Gt.to(sn.material,{opacity:0,duration:1.4,ease:"power2.in",onComplete:()=>{sn.visible=!1}}),Gt.to(sn.scale,{x:1.4,y:1.4,z:1.4,duration:1.4,ease:"power2.out"});let Ut=Math.hypot(me,We)||1;Bt(et,pt,et+me/Ut*3,Tl-.15,pt+We/Ut*3)}let Dl=.3;function Ul(E,N){if(Math.abs(E)<.62&&N>fe.front-.6&&N<fe.front+.9)return!1;let Z=N>fe.front?w.outside:w.bounds;if(E<Z.x0||E>Z.x1||N<Z.z0||N>Z.z1)return!0;for(let me of w.obstacles)if(E>me.x0-Dl&&E<me.x1+Dl&&N>me.z0-Dl&&N<me.z1+Dl)return!0;return!1}function N_(E){let N=0,Q=0,Z=0;(se.w||se.arrowup)&&(N+=1),(se.s||se.arrowdown)&&(N-=1),se.a&&(Q-=1),se.d&&(Q+=1),(se.arrowleft||se.q)&&(Z+=1),(se.arrowright||se.e)&&(Z-=1),ve.active&&(N-=ve.y,Z-=ve.x*.9),K.yaw+=Z*E*1.6;let me=se.shift?3.6:2.2,We=N*me+Me,je=Q*me*.8;Me*=Math.pow(.02,E);let et=1-Math.exp(-E*8);te.x+=(je-te.x)*et,te.y+=(We-te.y)*et;let pt=Math.sin(K.yaw),qt=Math.cos(K.yaw),Ut=(-pt*te.y+qt*te.x)*E,Tt=(-qt*te.y-pt*te.x)*E;if(Ul(K.x+Ut,K.z)?te.x*=.3:K.x+=Ut,Ul(K.x,K.z+Tt)?te.y*=.3:K.z+=Tt,w.doors[0]&&ne!=="entering"){let xn=Math.abs(K.z-fe.front);xn<2.3&&Math.abs(K.x)<2.2?De(!0):xn>4.5&&ht&&De(!1)}return Math.hypot(te.x,te.y)}function $p(){return Math.hypot(K.x,K.z-(fe.deskZ+1.1))}let Kp="";function O_(){let E;K.z>fe.front?E="Outside · Saelle flagship":K.z>0?E="Entrance · New launch":K.z<fe.deskZ+2.2?E="Checkout counter":K.x<-2.4?E="01 · Skincare":K.x>2.4?E="03 · Makeup":K.z>fe.scentZ-1.8?E="02 · Fragrance bar":E="04 · Hair & Body",E!==Kp&&(Kp=E,de.where.textContent=E)}let qs=new U,ga=new U,Nl=new Qa,F_=w.occluders;function B_(E,N){return Nl.set(ga,qs.copy(E).sub(ga).normalize()),Nl.far=N-.25,Nl.intersectObjects(F_,!1).length>0}let jp=0,kh={};function k_(){n.getWorldPosition(ga);let E=null,N=1/0,Q=(ne==="free"||ne==="tour")&&!W;jp++;for(let me=0;me<w.products.length;me++){let We=w.products[me],je=ee[We.p.id],et=We.hotWorld,pt=ga.distanceTo(et),qt=Q&&pt<8.5;qt&&We.normal&&(qt=qs.copy(ga).sub(et).dot(We.normal)>.2*pt);let Ut=0,Tt=0;if(qt&&(qs.copy(et).project(n),qt=qs.z<1&&Math.abs(qs.x)<1.05&&Math.abs(qs.y)<1.05,Ut=qs.x,Tt=qs.y),qt&&(((jp+me)%6===0||kh[We.p.id]===void 0)&&(kh[We.p.id]=B_(et,pt)),qt=!kh[We.p.id]),!qt){je.dataset.v!=="0"&&(je.dataset.v="0",je.classList.remove("is-on"),je.tabIndex=-1);continue}let xn=(Ut*.5+.5)*innerWidth,Wt=(-Tt*.5+.5)*innerHeight,Yt=`translate3d(${xn.toFixed(1)}px, ${Wt.toFixed(1)}px, 0)`;je._t!==Yt&&(je.style.transform=Yt,je._t=Yt),je.dataset.v!=="1"&&(je.dataset.v="1",je.classList.add("is-on"),je.tabIndex=0);let kn=We.p.id===Lt;je._f!==kn&&(je._f=kn,je.classList.toggle("is-focus",kn));let Dn=Math.hypot(Ut,Tt*1.3)+pt*.05;pt<4.5&&Dn<N&&(N=Dn,E=We.p.id)}let Z=xe||S||I||(N<.5?E:null);if(Q||(Z=null),Z&&S&&!I){let me=Ae[S];Math.hypot(me.hotWorld.x-K.x,me.hotWorld.z-K.z)>6&&(S=null,Z=E)}Rr(Z)}let Ol=!0,Jp="",Qp=new Ke;function z_(){if(n.matrixWorld.equals(Qp)||(Qp.copy(n.matrixWorld),Ol=!0),!Ol||(Ol=!1,ra||!xt.moved||ct||ne!=="free"&&ne!=="tour"))return;let E=Xs(xt.x,xt.y);E!==I&&!de.dots.matches(":hover")&&(I=E);let N=E?"pointer":"";N!==Jp&&(de.canvas.style.cursor=N,Jp=N),E?(de.tip.textContent=`${_r[E].name} · ${is(_r[E].price)}`,de.tip.style.transform=`translate3d(${xt.cx+16}px, ${xt.cy+18}px, 0)`,de.tip.classList.add("is-on")):de.tip.classList.remove("is-on")}let zh=new $o,Hh=0,Vh=0,Fl=0,Gh=0,Wh=3,_a=[{mp:1,bloom:!1,refl:!1,ao:!1},{mp:2,bloom:!0,refl:!1,ao:!1},{mp:3,bloom:!0,refl:!0,ao:!1},{mp:3,bloom:!0,refl:!0,ao:!0}],e0=_a.map(()=>0),rs=fl.has("tier")?+fl.get("tier"):1,Xh=0;function qh(E){rs=Math.max(0,Math.min(_a.length-1,E));let N=_a[rs];Se.enabled=N.bloom,he&&(he.enabled=N.ao),w.reflOn=N.refl,w.reflector&&(w.reflector.material.userData.reflAmt.value=N.refl?1:0),w.mirror&&(w.mirror.mesh.material=N.refl?w.mirror.live:w.mirror.still),H_()}function H_(){let E=Math.max(1,Math.min(e,2,Math.sqrt(_a[rs].mp*1e6/(innerWidth*innerHeight))));Ft.setPixelRatio(E),Y.setPixelRatio(E),Y.setSize(innerWidth,innerHeight),Re.uniforms.uPx.value.set(1/(innerWidth*E),1/(innerHeight*E)),w.reflector&&w.reflector.getRenderTarget().setSize(Math.round(innerWidth*.4*E),Math.round(innerHeight*.4*E))}function Bl(){let E=Math.min(.05,zh.getDelta()),N=zh.elapsedTime;Hh++,w.frameId=Hh,ne==="intro"&&!Hi&&(K.yaw+=Math.sin(N*.25)*.012*E,K.x+=Math.sin(N*.2)*.06*E);let Q=0;if(ne==="free"&&(Q=N_(E)),Hi||(Gh+=E*(Q>.2?Q*2.4:0),K.bob=Math.sin(Gh*2)*.01*Math.min(1,Q/2),ue.group.rotation.z=Math.sin(Gh)*.02*Math.min(1,Q/2),ue.group.rotation.x=Math.sin(N*.9)*.008),!ct&&($e.vx||$e.vy)){K.yaw+=$e.vx*E*1e3,K.pitch=es.clamp(K.pitch+$e.vy*E*1e3,-.8,.5);let Z=Math.pow(.004,E);$e.vx*=Z,$e.vy*=Z,Math.abs($e.vx)<1e-5&&Math.abs($e.vy)<1e-5&&($e.vx=$e.vy=0)}z();{let Z=es.clamp((K.z-fe.front)/3,0,1);B.intensity=.16-.12*Z,Ft.toneMappingExposure=1.06-.06*Z,w.outdoors=K.z>fe.front+1.2}w.outdoors!==$&&j(w.outdoors);{let Z=K.z>fe.front-1;Z!==Ne&&we(Z);let me=K.z>fe.front-4.5;me!==rt&&qe(me)}Wh-=E;for(let Z of w.emitters)Z.puff&&(Wh<0&&(Z.rate=3.5,Wh=5+Math.random()*3),Z.rate=Math.max(0,Z.rate-E*5));if(D.update(E,w.emitters,n),V.update(E,N),k_(),Hh%3===0&&(z_(),O_()),ne==="free"){let Z=$p();Z<1.9&&Ce&&!W&&(Ce=!1,Pe(!0)),Z>3.4&&(Ce=!0)}if(Re.uniforms.uTime.value=N,Y.render(E),St(),!document.hidden&&E>0&&E<.25&&(Vh+=E,Fl++),Fl>=30&&!Rg&&ne!=="intro"&&ne!=="entering"){let Z=Vh/Fl*1e3;Vh=0,Fl=0,Z>21?(Xh=0,rs>0&&(e0[rs]++,qh(rs-1))):Z<17.8&&++Xh>4&&(Xh=0,rs<_a.length-1&&e0[rs+1]<2&&qh(rs+1))}}qh(rs),Ft.setAnimationLoop(de.list.hidden?Bl:null),document.addEventListener("visibilitychange",()=>{Ft.setAnimationLoop(document.hidden||!de.list.hidden?null:Bl),zh.getDelta()});let t0=0,n0=innerWidth;function i0(){document.activeElement===de.slipName&&innerWidth===n0||(n0=innerWidth,Ft.setSize(innerWidth,innerHeight,!1),Y.setSize(innerWidth,innerHeight),Re.uniforms.uRes.value.set(innerWidth,innerHeight),Re.uniforms.uPx.value.set(1/(innerWidth*Ft.getPixelRatio()),1/(innerHeight*Ft.getPixelRatio())),ge(),w.reflector&&w.reflector.getRenderTarget().setSize(Math.round(innerWidth*.4*Ft.getPixelRatio()),Math.round(innerHeight*.4*Ft.getPixelRatio())))}addEventListener("resize",()=>{cancelAnimationFrame(t0),t0=requestAnimationFrame(i0)}),addEventListener("orientationchange",()=>setTimeout(i0,250)),window.__st={makeThumbs:E=>Yw(Ft,Rn,t.environment,E),loop:Bl,rig:K,startTour:hn,stopTour:Jt,enter:Ee,addToBasket:ss,openSlip:Pe,openDoors:ce,get mode(){return ne},set mode(E){ne=E},setBar:Rr,composer:Y,renderer:Ft,W:w,scene:t,camera:n,cart:ue}}function Gw(){let s=Wn(),e=new Fe,t=new nt({color:2761252,metalness:.8,roughness:.35}),n=[],i=.42,r=.28,o=.19,a=(x,y,w=.0028)=>n.push([new U(...x),new U(...y),w]),l=.88,c=(x,y,w)=>{let B=i*y/2,F=r*y/2;a([-B,x,-F],[B,x,-F],w),a([-B,x,F],[B,x,F],w),a([-B,x,-F],[-B,x,F],w),a([B,x,-F],[B,x,F],w)};c(o,1,.006),c(o*.5,(1+l)/2,.0026),c(0,l,.004);for(let x=0;x<=14;x++){let y=-.5+x/14;a([y*i*l,0,-r*l/2],[y*i,o,-r/2]),a([y*i*l,0,r*l/2],[y*i,o,r/2])}for(let x=1;x<10;x++){let y=-.5+x/10;a([-i*l/2,0,y*r*l],[-i/2,o,y*r]),a([i*l/2,0,y*r*l],[i/2,o,y*r])}for(let x=0;x<=10;x++){let y=-.5+x/10;a([y*i*l,0,-r*l/2],[y*i*l,0,r*l/2])}for(let x=0;x<=6;x++){let y=-.5+x/6;a([-i*l/2,0,y*r*l],[i*l/2,0,y*r*l])}let h=new fn(1,1,1,6,1,!0),u=new ls(h,t,n.length),f=new Ke,d=new ei,g=new U(0,1,0);n.forEach(([x,y,w],B)=>{let F=y.clone().sub(x),O=F.length();d.setFromUnitVectors(g,F.normalize()),f.compose(x.clone().add(y).multiplyScalar(.5),d,new U(w,O,w)),u.setMatrixAt(B,f)}),e.add(u);let _=new Ie(new un(i*l-.01,.006,r*l-.01),new nt({color:15323077,roughness:.95}));_.position.y=.004,e.add(_);let p=new at({color:5910067,roughness:.45,clearcoat:.4,sheen:.3});for(let x of[-1,1]){let y=new Ie(new Ls(.1,.006,8,32,Math.PI),p);y.position.set(0,o,x*r/2),y.rotation.x=x*1.2,y.scale.set(1,.7,1),e.add(y);for(let w of[-1,1]){let B=new Ie(new un(.02,.035,.004),p);B.position.set(w*.1,o-.012,x*(r/2+.004)),e.add(B)}}let m=new Ie(new wt(.07,.03),new nt({color:13214826,metalness:1,roughness:.3}));m.position.set(0,o*.6,r/2+.004),e.add(m);let b=[];for(let x of[0,1])for(let y of[1,2,0,3])b.push(new U(-.135+y*.09,.008,-.055+x*.11));let M={},v={},P={},T=0,R=new on,A=new U;return{group:e,makeItem(x){if(P[x.id]){let y=P[x.id];return y.position.set(0,0,0),y.rotation.set(0,0,0),y.scale.setScalar(1),y}return P[x.id]=this.buildItem(x)},buildItem(x){let y=Kr.cheap;Kr.cheap=!0;let w=Si(x).root;Kr.cheap=y,w.traverse(O=>{O.isMesh&&(O.castShadow=!1)}),w.updateMatrixWorld(!0),R.setFromObject(w),R.getSize(A);let B=new Fe;B.add(w);let F=A.y>.11;return F&&(w.rotation.z=Math.PI/2,w.position.set(A.y/2,A.x/2*0+Math.max(A.x,A.z)/2,0)),B.userData.fitScale=Math.min(1.35,.15/Math.max(A.x,A.y,A.z,.001)*(F?1:1.2)),B},freeSlot(){let x=new Set([...Object.values(M).map(w=>w.slot),...Object.values(v)]),y=0;for(;x.has(y);)y++;return y},slotWorld(x){!M[x]&&v[x]==null&&(v[x]=this.freeSlot());let y=M[x]?M[x].slot:v[x],w=b[y%b.length].clone();return w.y+=Math.floor(y/b.length)*.05,e.localToWorld(w)},place(x,y){M[y]&&(e.remove(M[y].obj),delete M[y]);let w=v[y]!=null?v[y]:this.freeSlot();delete v[y],T=Math.max(T,w+1);let B=b[w%b.length].clone();B.y+=Math.floor(w/b.length)*.05,e.add(x),x.position.copy(B),x.scale.setScalar(x.userData.fitScale),x.rotation.set(0,(w%3-1)*.4,0),M[y]={obj:x,slot:w}},fill(x){let y=this.makeItem(x);this.place(y,x.id)},remove(x){delete v[x],M[x]&&(e.remove(M[x].obj),delete M[x])},clear(){for(let x in M)e.remove(M[x].obj);for(let x in M)delete M[x];for(let x in v)delete v[x];T=0}}}function Ww(s){let e=new Float32Array(s*3),t=new Float32Array(s),n=new Float32Array(s),i=new Float32Array(s*3),r=new Float32Array(s),o=new Float32Array(s),a=!1,l=new Ht;l.setAttribute("position",new zt(e,3).setUsage(Kc)),l.setAttribute("aAlpha",new zt(t,1).setUsage(Kc)),l.setAttribute("aSize",new zt(n,1).setUsage(Kc));let c=new Pt({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:innerHeight*.9}},vertexShader:`attribute float aAlpha; attribute float aSize; uniform float uScale; varying float vA;
      void main(){ vA=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*mv; gl_PointSize=aSize*uScale/max(.1,-mv.z); }`,fragmentShader:"varying float vA; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.0,d); a*=a; gl_FragColor=vec4(vec3(1.,.97,.95),a*vA); }"}),h=new Gr(l,c);h.frustumCulled=!1,h.renderOrder=5;for(let f=0;f<s;f++)r[f]=0,o[f]=1,e[f*3+1]=-50;let u=0;return addEventListener("resize",()=>{c.uniforms.uScale.value=innerHeight*.9}),{points:h,update(f,d){for(let p of d)for(p.acc+=(p.rate||0)*40*f;p.acc>=1;){p.acc-=1;let m=u;u=(u+1)%s,e[m*3]=p.wp.x+(Math.random()-.5)*.01,e[m*3+1]=p.wp.y+(Math.random()-.5)*.01,e[m*3+2]=p.wp.z+(Math.random()-.5)*.01;let b=.5+Math.random()*.4;i[m*3]=p.wd.x*b+(Math.random()-.5)*.15,i[m*3+1]=p.wd.y*b+(Math.random()-.5)*.1,i[m*3+2]=p.wd.z*b+(Math.random()-.5)*.15,r[m]=1.8+Math.random()*1.4,o[m]=0,n[m]=.03+Math.random()*.03}let g=Math.pow(.96,f*60),_=0;for(let p=0;p<s;p++){if(o[p]>=r[p]){t[p]=0;continue}_++,o[p]+=f;let m=p*3;i[m]*=g,i[m+1]=i[m+1]*g-.01*f,i[m+2]*=g,e[m]+=i[m]*f,e[m+1]+=i[m+1]*f,e[m+2]+=i[m+2]*f,n[p]+=f*.09,t[p]=Math.sin(Math.PI*o[p]/r[p])*.16}!_&&a||(a=!_,l.attributes.position.needsUpdate=!0,l.attributes.aAlpha.needsUpdate=!0,l.attributes.aSize.needsUpdate=!0)}}}function Xw(s){let e=new Float32Array(s*3),t=new Float32Array(s);for(let o=0;o<s;o++)e[o*3]=(Math.random()-.5)*12,e[o*3+1]=.4+Math.random()*3.2,e[o*3+2]=fe.back+1+Math.random()*(fe.front-fe.back-1.5),t[o]=Math.random()*100;let n=new Ht;n.setAttribute("position",new zt(e,3)),n.setAttribute("aSeed",new zt(t,1));let i=new Pt({transparent:!0,depthWrite:!1,blending:as,uniforms:{uT:{value:0},uScale:{value:innerHeight}},vertexShader:`attribute float aSeed; uniform float uT; uniform float uScale; varying float vA;
      void main(){ vec3 p=position; p.x+=sin(uT*.11+aSeed)*.25; p.y+=sin(uT*.07+aSeed*1.7)*.18; p.z+=cos(uT*.09+aSeed*.7)*.25;
      vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; float d=-mv.z; gl_PointSize=clamp(.012*uScale/max(.3,d),1.,6.);
      vA=smoothstep(.4,1.5,d)*smoothstep(7.,3.,d)*(.5+.5*sin(uT*.6+aSeed)); }`,fragmentShader:"varying float vA; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.1,d); gl_FragColor=vec4(1.,.92,.8,a*vA*.35); }"}),r=new Gr(n,i);return r.frustumCulled=!1,r.renderOrder=6,addEventListener("resize",()=>{i.uniforms.uScale.value=innerHeight}),{points:r,update(o,a){i.uniforms.uT.value=a}}}function qw(s,e,t){let r=new ar;r.environment=e,r.environmentIntensity=.55;let o=(()=>{let O=document.createElement("canvas");O.width=8,O.height=256;let q=O.getContext("2d"),k=q.createLinearGradient(0,0,0,256);k.addColorStop(0,t.bg[1]),k.addColorStop(.55,t.bg[0]),k.addColorStop(1,t.bg[0]),q.fillStyle=k,q.fillRect(0,0,8,256);let ae=new lr(O);return ae.colorSpace=Zt,ae})(),a=new Ie(new wt(8,6),new nt({map:o,roughness:.95}));a.position.set(0,2.2,-1.2),a.receiveShadow=!0,r.add(a);let l=new Ie(new wt(8,6),new nt({color:new Te(t.bg[0]),roughness:.9}));l.rotation.x=-Math.PI/2,l.position.z=1.4,l.receiveShadow=!0,r.add(l);let c=new at({color:t.plinth,roughness:.28,clearcoat:.8,clearcoatRoughness:.1}),h=new Ie(new fn(.16,.16,.16,96),c);h.position.set(.02,.08,0),h.castShadow=h.receiveShadow=!0,r.add(h);let u=new Ie(new fn(.12,.12,.07,96),c);u.position.set(-.2,.035,.12),u.castShadow=u.receiveShadow=!0,r.add(u);let f=[[.02,.16,0],[-.2,.07,.12],[.24,0,.14]],d=[];t.ids.forEach((O,q)=>{let k=_r[O];if(!k)return;let ae=Si(k).root;ae.traverse(Re=>{Re.isMesh&&(Re.castShadow=!0,Re.receiveShadow=!0)});let he=new on().setFromObject(ae).getSize(new U);d.push(he.y);let Se=(q===0?.3:.2)/Math.max(he.y,.04);ae.scale.setScalar(Math.min(Se,4.5)),ae.position.set(f[q][0],f[q][1],f[q][2]),ae.rotation.y=q===0?-.25:q===1?.5:-.6,r.add(ae)});let g=new Zr(16773604,3.2);g.position.set(-1.6,2.2,1.6),g.castShadow=!0,g.shadow.mapSize.set(1024,1024),g.shadow.radius=8,g.shadow.bias=-4e-4,Object.assign(g.shadow.camera,{left:-1,right:1,top:1,bottom:-1,near:.1,far:8}),r.add(g);let _=new vi(16769740,14,6,.5,1,1.5);_.position.set(1.4,1.6,-1),_.target.position.set(0,.2,0),r.add(_,_.target),r.add(new Zo(16777215,new Te(t.bg[0]),.6));let p=new Qt(24,600/826,.05,20);p.position.set(.12,.72,2.25),p.lookAt(0,.3,0);let m=new $t(600,826,{samples:4,type:Un}),b=s.shadowMap.enabled;s.shadowMap.enabled=!0,s.setRenderTarget(m),s.clear(),s.render(r,p);let M=new Float32Array(600*826*4);s.readRenderTargetPixels(m,0,0,600,826,M),s.setRenderTarget(null),s.shadowMap.enabled=b,m.dispose();let v=new Uint8ClampedArray(600*826*4),P=O=>{O*=.78;let q=O*(2.51*O+.03)/(O*(2.43*O+.59)+.14),k=Math.min(1,Math.max(0,q));return(k<=.0031308?k*12.92:1.055*Math.pow(k,1/2.4)-.055)*255};for(let O=0;O<M.length;O+=4)v[O]=P(M[O]),v[O+1]=P(M[O+1]),v[O+2]=P(M[O+2]),v[O+3]=255;let T=document.createElement("canvas");T.width=600*2,T.height=826*2;let R=T.getContext("2d"),A=document.createElement("canvas");A.width=600,A.height=826;let x=A.getContext("2d"),y=x.createImageData(600,826);for(let O=0;O<826;O++)y.data.set(v.subarray((825-O)*600*4,(826-O)*600*4),O*600*4);x.putImageData(y,0,0),R.imageSmoothingQuality="high",R.drawImage(A,0,0,600*2,826*2);let w=600*2,B=826*2;R.fillStyle=t.ink,R.textAlign="left",R.font=`600 22px ${dn}`,R.globalAlpha=.9,ti(R,t.kick,80,110,5,"left"),R.globalAlpha=1,R.font=`500 150px ${li}`,R.fillText(t.title[0],74,B-330),R.font=`italic 500 150px ${li}`,R.fillText(t.title[1],74,B-180),R.font=`500 26px ${dn}`,R.globalAlpha=.85,R.fillText(t.line,80,B-100),R.globalAlpha=1,R.font=`500 34px ${li}`,R.textAlign="right",ti(R,"SAELLE",w-80,110,12,"right");let F=new lr(T);return F.colorSpace=Zt,F.anisotropy=8,F}function Yw(s,e,t,n=192){let i=n,r={},o=new ar;o.environment=t,o.environmentIntensity=1,o.background=new Te(15984351),o.add(new Zo(16777215,14205624,1.1));let a=new Zr(16774118,2.2);a.position.set(2,3,4),o.add(a);let l=new Ie(new wt(4,4),new nt({color:15852250,roughness:.9}));o.add(l);let c=new Qt(28,1,.01,50),h=new $t(i,i,{samples:4}),u=new Uint8Array(i*i*4),f=document.createElement("canvas");f.width=f.height=i;let d=f.getContext("2d"),g=d.createImageData(i,i),_=new on,p=new U,m=new U,b=s.toneMapping,M=s.outputColorSpace,v=new Uint8Array(256);for(let P=0;P<256;P++){let T=P/255*1.05,R=T*(2.51*T+.03)/(T*(2.43*T+.59)+.14),A=R<=.0031308?R*12.92:1.055*Math.pow(R,1/2.4)-.055;v[P]=Math.max(0,Math.min(255,Math.round(A*255)))}for(let P of e){let T=Si(P).root;o.add(T),T.updateMatrixWorld(!0),_.setFromObject(T),_.getSize(p),_.getCenter(m);let A=Math.max(p.x,p.y,p.z)*.6/Math.tan(es.degToRad(14));c.position.set(m.x+A*.25,m.y+A*.12,m.z+A*.96),c.lookAt(m),l.position.copy(m).add(new U(0,0,-.3)),l.lookAt(c.position),s.setRenderTarget(h),s.clear(),s.render(o,c),s.readRenderTargetPixels(h,0,0,i,i,u);for(let x=0;x<i;x++)g.data.set(u.subarray((i-1-x)*i*4,(i-x)*i*4),x*i*4);for(let x=0;x<g.data.length;x+=4)g.data[x]=v[g.data[x]],g.data[x+1]=v[g.data[x+1]],g.data[x+2]=v[g.data[x+2]];d.putImageData(g,0,0),r[P.id]=f.toDataURL("image/jpeg",.88),o.remove(T)}return s.setRenderTarget(null),s.toneMapping=b,s.outputColorSpace=M,h.dispose(),r}export{FA as start};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
