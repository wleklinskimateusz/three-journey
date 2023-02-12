(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ea="149",wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nu=0,nl=1,zu=2,jc=1,Uu=2,wr=3,Wn=0,Ve=1,zn=2,Vn=0,qi=1,il=2,rl=3,sl=4,ku=5,Vi=100,Bu=101,Vu=102,ol=103,al=104,Gu=200,Hu=201,Wu=202,Xu=203,Zc=204,Jc=205,qu=206,$u=207,Yu=208,ju=209,Zu=210,Ju=0,Ku=1,Qu=2,Ko=3,td=4,ed=5,nd=6,id=7,Kc=0,rd=1,sd=2,Pn=0,od=1,ad=2,ld=3,cd=4,hd=5,Qc=300,Ki=301,Qi=302,Qo=303,ta=304,zs=306,ea=1e3,ln=1001,na=1002,Ee=1003,ll=1004,Ks=1005,Je=1006,ud=1007,Ir=1008,mi=1009,dd=1010,fd=1011,th=1012,pd=1013,ai=1014,li=1015,Or=1016,md=1017,gd=1018,$i=1020,_d=1021,cn=1023,xd=1024,vd=1025,hi=1026,tr=1027,yd=1028,bd=1029,Md=1030,Sd=1031,wd=1033,Qs=33776,to=33777,eo=33778,no=33779,cl=35840,hl=35841,ul=35842,dl=35843,Td=36196,fl=37492,pl=37496,ml=37808,gl=37809,_l=37810,xl=37811,vl=37812,yl=37813,bl=37814,Ml=37815,Sl=37816,wl=37817,Tl=37818,El=37819,Al=37820,Cl=37821,io=36492,Ed=36283,Ll=36284,Pl=36285,Dl=36286,gi=3e3,Yt=3001,Ad=3200,Cd=3201,eh=0,Ld=1,un="srgb",Fr="srgb-linear",ro=7680,Pd=519,Rl=35044,Il="300 es",ia=1035;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],so=Math.PI/180,Ol=180/Math.PI;function cr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[s&255]+xe[s>>8&255]+xe[s>>16&255]+xe[s>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function ve(s,t,e){return Math.max(t,Math.min(e,s))}function Dd(s,t){return(s%t+t)%t}function oo(s,t,e){return(1-e)*s+e*t}function Fl(s){return(s&s-1)===0&&s!==0}function ra(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zr(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],_=n[8],f=i[0],p=i[3],g=i[6],b=i[1],x=i[4],M=i[7],y=i[2],E=i[5],C=i[8];return r[0]=o*f+a*b+l*y,r[3]=o*p+a*x+l*E,r[6]=o*g+a*M+l*C,r[1]=c*f+h*b+u*y,r[4]=c*p+h*x+u*E,r[7]=c*g+h*M+u*C,r[2]=d*f+m*b+_*y,r[5]=d*p+m*x+_*E,r[8]=d*g+m*M+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,_=e*u+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/_;return t[0]=u*f,t[1]=(i*c-h*n)*f,t[2]=(a*n-i*o)*f,t[3]=d*f,t[4]=(h*e-i*l)*f,t[5]=(i*r-a*e)*f,t[6]=m*f,t[7]=(n*l-c*e)*f,t[8]=(o*e-n*r)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ao.makeScale(t,e)),this}rotate(t){return this.premultiply(ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(ao.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ao=new Be;function nh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const lo={[un]:{[Fr]:ui},[Fr]:{[un]:bs}},we={legacyMode:!0,get workingColorSpace(){return Fr},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.legacyMode||t===e||!t||!e)return s;if(lo[t]&&lo[t][e]!==void 0){const n=lo[t][e];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ae={r:0,g:0,b:0},sn={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function co(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function Kr(s,t){return t.r=s.r,t.g=s.g,t.b=s.b,t}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=we.workingColorSpace){if(t=Dd(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=co(o,r,t+1/3),this.g=co(o,r,t),this.b=co(o,r,t-1/3)}return we.toWorkingColorSpace(this,i),this}setStyle(t,e=un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,we.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,we.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,we.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,we.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=un){const n=ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return we.fromWorkingColorSpace(Kr(this,ae),t),ve(ae.r*255,0,255)<<16^ve(ae.g*255,0,255)<<8^ve(ae.b*255,0,255)<<0}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(Kr(this,ae),e);const n=ae.r,i=ae.g,r=ae.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(Kr(this,ae),e),t.r=ae.r,t.g=ae.g,t.b=ae.b,t}getStyle(t=un){return we.fromWorkingColorSpace(Kr(this,ae),t),t!==un?`color(${t} ${ae.r} ${ae.g} ${ae.b})`:`rgb(${ae.r*255|0},${ae.g*255|0},${ae.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(sn),sn.h+=t,sn.s+=e,sn.l+=n,this.setHSL(sn.h,sn.s,sn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(sn),t.getHSL(Jr);const n=oo(sn.h,Jr.h,e),i=oo(sn.s,Jr.s,e),r=oo(sn.l,Jr.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ht.NAMES=ih;let Ei;class rh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=Nr("canvas")),Ei.width=t.width,Ei.height=t.height;const n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class sh{constructor(t=null){this.isSource=!0,this.uuid=cr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ho(i[o].image)):r.push(ho(i[o]))}else r=ho(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ho(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rd=0;class Ge extends Mi{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=ln,i=ln,r=Je,o=Ir,a=cn,l=mi,c=Ge.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=cr(),this.name="",this.source=new sh(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ea:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ea:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Qc;Ge.DEFAULT_ANISOTROPY=1;class Zt{constructor(t=0,e=0,n=0,i=1){Zt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],_=l[9],f=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-f)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+f)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(m+1)/2,y=(g+1)/2,E=(h+d)/4,C=(u+f)/4,v=(_+p)/4;return x>M&&x>y?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=C/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=v/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=C/r,i=v/r),this.set(n,i,r,e),this}let b=Math.sqrt((p-_)*(p-_)+(u-f)*(u-f)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(u-f)/b,this.z=(d-h)/b,this.w=Math.acos((c+m+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _i extends Mi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Zt(0,0,t,e),this.scissorTest=!1,this.viewport=new Zt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Ge(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Je,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oh extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Id extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],m=r[o+1],_=r[o+2],f=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=f;return}if(u!==f||l!==d||c!==m||h!==_){let p=1-a;const g=l*d+c*m+h*_+u*f,b=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const y=Math.sqrt(x),E=Math.atan2(y,g*b);p=Math.sin(p*E)/y,a=Math.sin(a*E)/y}const M=a*b;if(l=l*p+d*M,c=c*p+m*M,h=h*p+_*M,u=u*p+f*M,p===1-a){const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*m-c*d,t[e+1]=l*_+h*d+c*u-a*m,t[e+2]=c*_+h*m+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),m=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"YZX":this._x=d*h*u+c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u-d*m*_;break;case"XZY":this._x=d*h*u-c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,h=l*n+a*e-r*i,u=l*i+r*n-o*e,d=-r*e-o*n-a*i;return this.x=c*l+d*-r+h*-a-u*-o,this.y=h*l+d*-o+u*-r-c*-a,this.z=u*l+d*-a+c*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uo.copy(this).projectOnVector(t),this.sub(uo)}reflect(t){return this.sub(uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uo=new D,Nl=new xi;class $r{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],d=t[l+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),d=t.getZ(l);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Kn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Kn)}else n.boundingBox===null&&n.computeBoundingBox(),fo.copy(n.boundingBox),fo.applyMatrix4(t.matrixWorld),this.union(fo);const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),Qr.subVectors(this.max,mr),Ai.subVectors(t.a,mr),Ci.subVectors(t.b,mr),Li.subVectors(t.c,mr),In.subVectors(Ci,Ai),On.subVectors(Li,Ci),Qn.subVectors(Ai,Li);let e=[0,-In.z,In.y,0,-On.z,On.y,0,-Qn.z,Qn.y,In.z,0,-In.x,On.z,0,-On.x,Qn.z,0,-Qn.x,-In.y,In.x,0,-On.y,On.x,0,-Qn.y,Qn.x,0];return!po(e,Ai,Ci,Li,Qr)||(e=[1,0,0,0,1,0,0,0,1],!po(e,Ai,Ci,Li,Qr))?!1:(ts.crossVectors(In,On),e=[ts.x,ts.y,ts.z],po(e,Ai,Ci,Li,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Kn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new D,new D,new D,new D,new D,new D,new D,new D],Kn=new D,fo=new $r,Ai=new D,Ci=new D,Li=new D,In=new D,On=new D,Qn=new D,mr=new D,Qr=new D,ts=new D,ti=new D;function po(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ti.fromArray(s,r);const a=i.x*Math.abs(ti.x)+i.y*Math.abs(ti.y)+i.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Od=new $r,gr=new D,mo=new D;class Us{constructor(t=new D,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Od.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);const e=gr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(gr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(mo)),this.expandByPoint(gr.copy(t.center).sub(mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new D,go=new D,es=new D,Fn=new D,_o=new D,ns=new D,xo=new D;class ah{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.direction).multiplyScalar(e).add(this.origin),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){go.copy(t).add(e).multiplyScalar(.5),es.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(go);const r=t.distanceTo(e)*.5,o=-this.direction.dot(es),a=Fn.dot(this.direction),l=-Fn.dot(es),c=Fn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const f=1/h;u*=f,d*=f,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(es).multiplyScalar(d).add(go),m}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,i,r){_o.subVectors(e,t),ns.subVectors(n,t),xo.crossVectors(_o,ns);let o=this.direction.dot(xo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,t);const l=a*this.direction.dot(ns.crossVectors(Fn,ns));if(l<0)return null;const c=a*this.direction.dot(_o.cross(Fn));if(c<0||l+c>o)return null;const h=-a*Fn.dot(xo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,o,a,l,c,h,u,d,m,_,f,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=m,g[7]=_,g[11]=f,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),o=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,m=o*u,_=a*h,f=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=d-f*c,e[9]=-a*l,e[2]=f-d*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,_=c*h,f=c*u;e[0]=d+f*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=f+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,_=c*h,f=c*u;e[0]=d-f*a,e[4]=-o*u,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=f-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,m=o*u,_=a*h,f=a*u;e[0]=l*h,e[4]=_*c-m,e[8]=d*c+f,e[1]=l*u,e[5]=f*c+d,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,_=a*l,f=a*c;e[0]=l*h,e[4]=f-d*u,e[8]=_*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+_,e[10]=d-f*u}else if(t.order==="XZY"){const d=o*l,m=o*c,_=a*l,f=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+f,e[5]=o*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=a*h,e[10]=f*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fd,t,Nd)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Nn.crossVectors(n,Fe),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Nn.crossVectors(n,Fe)),Nn.normalize(),is.crossVectors(Fe,Nn),i[0]=Nn.x,i[4]=is.x,i[8]=Fe.x,i[1]=Nn.y,i[5]=is.y,i[9]=Fe.y,i[2]=Nn.z,i[6]=is.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],_=n[2],f=n[6],p=n[10],g=n[14],b=n[3],x=n[7],M=n[11],y=n[15],E=i[0],C=i[4],v=i[8],S=i[12],P=i[1],z=i[5],J=i[9],O=i[13],R=i[2],B=i[6],q=i[10],Y=i[14],H=i[3],Q=i[7],tt=i[11],ut=i[15];return r[0]=o*E+a*P+l*R+c*H,r[4]=o*C+a*z+l*B+c*Q,r[8]=o*v+a*J+l*q+c*tt,r[12]=o*S+a*O+l*Y+c*ut,r[1]=h*E+u*P+d*R+m*H,r[5]=h*C+u*z+d*B+m*Q,r[9]=h*v+u*J+d*q+m*tt,r[13]=h*S+u*O+d*Y+m*ut,r[2]=_*E+f*P+p*R+g*H,r[6]=_*C+f*z+p*B+g*Q,r[10]=_*v+f*J+p*q+g*tt,r[14]=_*S+f*O+p*Y+g*ut,r[3]=b*E+x*P+M*R+y*H,r[7]=b*C+x*z+M*B+y*Q,r[11]=b*v+x*J+M*q+y*tt,r[15]=b*S+x*O+M*Y+y*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],_=t[3],f=t[7],p=t[11],g=t[15];return _*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*m-n*l*m)+f*(+e*l*m-e*c*d+r*o*d-i*o*m+i*c*h-r*l*h)+p*(+e*c*u-e*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+g*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],_=t[12],f=t[13],p=t[14],g=t[15],b=u*p*c-f*d*c+f*l*m-a*p*m-u*l*g+a*d*g,x=_*d*c-h*p*c-_*l*m+o*p*m+h*l*g-o*d*g,M=h*f*c-_*u*c+_*a*m-o*f*m-h*a*g+o*u*g,y=_*u*l-h*f*l-_*a*d+o*f*d+h*a*p-o*u*p,E=e*b+n*x+i*M+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=b*C,t[1]=(f*d*r-u*p*r-f*i*m+n*p*m+u*i*g-n*d*g)*C,t[2]=(a*p*r-f*l*r+f*i*c-n*p*c-a*i*g+n*l*g)*C,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*m-n*l*m)*C,t[4]=x*C,t[5]=(h*p*r-_*d*r+_*i*m-e*p*m-h*i*g+e*d*g)*C,t[6]=(_*l*r-o*p*r-_*i*c+e*p*c+o*i*g-e*l*g)*C,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*m+e*l*m)*C,t[8]=M*C,t[9]=(_*u*r-h*f*r-_*n*m+e*f*m+h*n*g-e*u*g)*C,t[10]=(o*f*r-_*a*r+_*n*c-e*f*c-o*n*g+e*a*g)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*m-e*a*m)*C,t[12]=y*C,t[13]=(h*f*i-_*u*i+_*n*d-e*f*d-h*n*p+e*u*p)*C,t[14]=(_*a*i-o*f*i-_*n*l+e*f*l+o*n*p-e*a*p)*C,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,_=r*u,f=o*h,p=o*u,g=a*u,b=l*c,x=l*h,M=l*u,y=n.x,E=n.y,C=n.z;return i[0]=(1-(f+g))*y,i[1]=(m+M)*y,i[2]=(_-x)*y,i[3]=0,i[4]=(m-M)*E,i[5]=(1-(d+g))*E,i[6]=(p+b)*E,i[7]=0,i[8]=(_+x)*C,i[9]=(p-b)*C,i[10]=(1-(d+f))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Pi.set(i[0],i[1],i[2]).length();const o=Pi.set(i[4],i[5],i[6]).length(),a=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);const c=1/r,h=1/o,u=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){const a=this.elements,l=2*r/(e-t),c=2*r/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,l=1/(e-t),c=1/(n-i),h=1/(o-r),u=(e+t)*l,d=(n+i)*c,m=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new D,on=new ee,Fd=new D(0,0,0),Nd=new D(1,1,1),Nn=new D,is=new D,Fe=new D,zl=new ee,Ul=new xi;class ks{constructor(t=0,e=0,n=0,i=ks.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ks.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zd=0;const kl=new D,Di=new xi,Mn=new ee,rs=new D,_r=new D,Ud=new D,kd=new xi,Bl=new D(1,0,0),Vl=new D(0,1,0),Gl=new D(0,0,1),Bd={type:"added"},Hl={type:"removed"};class Ae extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new D,e=new ks,n=new xi,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Be}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(Bl,t)}rotateY(t){return this.rotateOnAxis(Vl,t)}rotateZ(t){return this.rotateOnAxis(Gl,t)}translateOnAxis(t,e){return kl.copy(t).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bl,t)}translateY(t){return this.translateOnAxis(Vl,t)}translateZ(t){return this.translateOnAxis(Gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rs.copy(t):rs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(_r,rs,this.up):Mn.lookAt(rs,_r,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(Mn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Hl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new D(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new D,Sn=new D,vo=new D,wn=new D,Ri=new D,Ii=new D,Wl=new D,yo=new D,bo=new D,Mo=new D;class Cn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),an.subVectors(t,e),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){an.subVectors(i,e),Sn.subVectors(n,e),vo.subVectors(t,e);const o=an.dot(an),a=an.dot(Sn),l=an.dot(vo),c=Sn.dot(Sn),h=Sn.dot(vo),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,m=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,wn),wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,wn),l.set(0,0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l}static isFrontFacing(t,e,n,i){return an.subVectors(n,e),Sn.subVectors(t,e),an.cross(Sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),an.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Cn.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Ri.subVectors(i,n),Ii.subVectors(r,n),yo.subVectors(t,n);const l=Ri.dot(yo),c=Ii.dot(yo);if(l<=0&&c<=0)return e.copy(n);bo.subVectors(t,i);const h=Ri.dot(bo),u=Ii.dot(bo);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ri,o);Mo.subVectors(t,r);const m=Ri.dot(Mo),_=Ii.dot(Mo);if(_>=0&&m<=_)return e.copy(r);const f=m*c-l*_;if(f<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Ii,a);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return Wl.subVectors(r,i),a=(u-h)/(u-h+(m-_)),e.copy(i).addScaledVector(Wl,a);const g=1/(p+f+d);return o=f*g,a=d*g,e.copy(n).addScaledVector(Ri,o).addScaledVector(Ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Vd=0;class hr extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=qi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ch extends hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new D,ss=new at;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXY(e,ss.x,ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class hh extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class uh extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gd=0;const Ye=new ee,So=new Ae,Oi=new D,Ne=new $r,xr=new $r,pe=new D;class rn extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nh(t)?uh:hh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return So.lookAt(t),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(Ne.min,xr.min),Ne.expandByPoint(pe),pe.addVectors(Ne.max,xr.max),Ne.expandByPoint(pe)):(Ne.expandByPoint(xr.min),Ne.expandByPoint(xr.max))}Ne.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)pe.fromBufferAttribute(a,c),l&&(Oi.fromBufferAttribute(t,c),pe.add(Oi)),i=Math.max(i,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let P=0;P<a;P++)c[P]=new D,h[P]=new D;const u=new D,d=new D,m=new D,_=new at,f=new at,p=new at,g=new D,b=new D;function x(P,z,J){u.fromArray(i,P*3),d.fromArray(i,z*3),m.fromArray(i,J*3),_.fromArray(o,P*2),f.fromArray(o,z*2),p.fromArray(o,J*2),d.sub(u),m.sub(u),f.sub(_),p.sub(_);const O=1/(f.x*p.y-p.x*f.y);isFinite(O)&&(g.copy(d).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(O),b.copy(m).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(O),c[P].add(g),c[z].add(g),c[J].add(g),h[P].add(b),h[z].add(b),h[J].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let P=0,z=M.length;P<z;++P){const J=M[P],O=J.start,R=J.count;for(let B=O,q=O+R;B<q;B+=3)x(n[B+0],n[B+1],n[B+2])}const y=new D,E=new D,C=new D,v=new D;function S(P){C.fromArray(r,P*3),v.copy(C);const z=c[P];y.copy(z),y.sub(C.multiplyScalar(C.dot(z))).normalize(),E.crossVectors(v,z);const O=E.dot(h[P])<0?-1:1;l[P*4]=y.x,l[P*4+1]=y.y,l[P*4+2]=y.z,l[P*4+3]=O}for(let P=0,z=M.length;P<z;++P){const J=M[P],O=J.start,R=J.count;for(let B=O,q=O+R;B<q;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),f=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,f),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let m=0,_=0;for(let f=0,p=l.length;f<p;f++){a.isInterleavedBufferAttribute?m=l[f]*a.data.stride+a.offset:m=l[f]*h;for(let g=0;g<h;g++)d[_++]=c[m++]}return new He(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new rn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xl=new ee,Fi=new ah,wo=new Us,vr=new D,yr=new D,br=new D,To=new D,os=new D,as=new at,ls=new at,cs=new at,Eo=new D,hs=new D;class Ke extends Ae{constructor(t=new rn,e=new ch){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(To.fromBufferAttribute(u,t),o?os.addScaledVector(To,h):os.addScaledVector(To.sub(e),h))}e.add(os)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),t.ray.intersectsSphere(wo)===!1)||(Xl.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(Xl),n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,u=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,_=u.length;m<_;m++){const f=u[m],p=i[f.materialIndex],g=Math.max(f.start,d.start),b=Math.min(a.count,Math.min(f.start+f.count,d.start+d.count));for(let x=g,M=b;x<M;x+=3){const y=a.getX(x),E=a.getX(x+1),C=a.getX(x+2);o=us(this,p,t,Fi,c,h,y,E,C),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=f.materialIndex,e.push(o))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let f=m,p=_;f<p;f+=3){const g=a.getX(f),b=a.getX(f+1),x=a.getX(f+2);o=us(this,i,t,Fi,c,h,g,b,x),o&&(o.faceIndex=Math.floor(f/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,_=u.length;m<_;m++){const f=u[m],p=i[f.materialIndex],g=Math.max(f.start,d.start),b=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let x=g,M=b;x<M;x+=3){const y=x,E=x+1,C=x+2;o=us(this,p,t,Fi,c,h,y,E,C),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=f.materialIndex,e.push(o))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let f=m,p=_;f<p;f+=3){const g=f,b=f+1,x=f+2;o=us(this,i,t,Fi,c,h,g,b,x),o&&(o.faceIndex=Math.floor(f/3),e.push(o))}}}}function Hd(s,t,e,n,i,r,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Wn,a),l===null)return null;hs.copy(a),hs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(hs);return c<e.near||c>e.far?null:{distance:c,point:hs.clone(),object:s}}function us(s,t,e,n,i,r,o,a,l){s.getVertexPosition(o,vr),s.getVertexPosition(a,yr),s.getVertexPosition(l,br);const c=Hd(s,t,e,n,vr,yr,br,Eo);if(c){i&&(as.fromBufferAttribute(i,o),ls.fromBufferAttribute(i,a),cs.fromBufferAttribute(i,l),c.uv=Cn.getUV(Eo,vr,yr,br,as,ls,cs,new at)),r&&(as.fromBufferAttribute(r,o),ls.fromBufferAttribute(r,a),cs.fromBufferAttribute(r,l),c.uv2=Cn.getUV(Eo,vr,yr,br,as,ls,cs,new at));const h={a:o,b:a,c:l,normal:new D,materialIndex:0};Cn.getNormal(vr,yr,br,h.normal),c.face=h}return c}class Yr extends rn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function _(f,p,g,b,x,M,y,E,C,v,S){const P=M/C,z=y/v,J=M/2,O=y/2,R=E/2,B=C+1,q=v+1;let Y=0,H=0;const Q=new D;for(let tt=0;tt<q;tt++){const ut=tt*z-O;for(let k=0;k<B;k++){const j=k*P-J;Q[f]=j*b,Q[p]=ut*x,Q[g]=R,c.push(Q.x,Q.y,Q.z),Q[f]=0,Q[p]=0,Q[g]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(k/C),u.push(1-tt/v),Y+=1}}for(let tt=0;tt<v;tt++)for(let ut=0;ut<C;ut++){const k=d+ut+B*tt,j=d+ut+B*(tt+1),it=d+(ut+1)+B*(tt+1),rt=d+(ut+1)+B*tt;l.push(k,j,rt),l.push(j,it,rt),H+=6}a.addGroup(m,H,S),m+=H,d+=Y}}static fromJSON(t){return new Yr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function er(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Te(s){const t={};for(let e=0;e<s.length;e++){const n=er(s[e]);for(const i in n)t[i]=n[i]}return t}function Wd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function dh(s){return s.getRenderTarget()===null&&s.outputEncoding===Yt?un:Fr}const Xd={clone:er,merge:Te};var qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=Wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fh extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ue extends fh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ol*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(so*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ni=-90,zi=1;class Yd extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ue(Ni,zi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ue(Ni,zi,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Ue(Ni,zi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ue(Ni,zi,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Ue(Ni,zi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ue(Ni,zi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=Pn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Aa extends Ge{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jd extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Aa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yr(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Vn});r.uniforms.tEquirect.value=e;const o=new Ke(i,r),a=e.minFilter;return e.minFilter===Ir&&(e.minFilter=Je),new Yd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Ao=new D,Zd=new D,Jd=new Be;class ii{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ao.subVectors(n,e).cross(Zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jd.getNormalMatrix(t),i=this.coplanarPoint(Ao).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Us,ds=new D;class Ca{constructor(t=new ii,e=new ii,n=new ii,i=new ii,r=new ii,o=new ii){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],m=n[9],_=n[10],f=n[11],p=n[12],g=n[13],b=n[14],x=n[15];return e[0].setComponents(a-i,u-l,f-d,x-p).normalize(),e[1].setComponents(a+i,u+l,f+d,x+p).normalize(),e[2].setComponents(a+r,u+c,f+m,x+g).normalize(),e[3].setComponents(a-r,u-c,f-m,x-g).normalize(),e[4].setComponents(a-o,u-h,f-_,x-b).normalize(),e[5].setComponents(a+o,u+h,f+_,x+b).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ds.x=i.normal.x>0?t.max.x:t.min.x,ds.y=i.normal.y>0?t.max.y:t.min.y,ds.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ph(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Kd(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(u instanceof Int16Array)_=5122;else if(u instanceof Uint32Array)_=5125;else if(u instanceof Int32Array)_=5124;else if(u instanceof Int8Array)_=5120;else if(u instanceof Uint8Array)_=5121;else if(u instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const d=h.array,m=h.updateRange;s.bindBuffer(u,c),m.count===-1?s.bufferSubData(u,0,d):(e?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Bs extends rn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,m=[],_=[],f=[],p=[];for(let g=0;g<h;g++){const b=g*d-o;for(let x=0;x<c;x++){const M=x*u-r;_.push(M,-b,0),f.push(0,0,1),p.push(x/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){const x=b+c*g,M=b+c*(g+1),y=b+1+c*(g+1),E=b+1+c*g;m.push(x,M,E),m.push(M,y,E)}this.setIndex(m),this.setAttribute("position",new ce(_,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(p,2))}static fromJSON(t){return new Bs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of="vec3 transformed = vec3( position );",af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,cf=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,hf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vf=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,bf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
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
}`,Uf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Hf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,jf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Zf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,up=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,pp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Xp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,qp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,$p=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Yp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,jp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Zp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,sm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,am=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,_m=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,bm=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Sm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Tm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dt={alphamap_fragment:Qd,alphamap_pars_fragment:tf,alphatest_fragment:ef,alphatest_pars_fragment:nf,aomap_fragment:rf,aomap_pars_fragment:sf,begin_vertex:of,beginnormal_vertex:af,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:hf,clipping_planes_fragment:uf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:xf,common:vf,cube_uv_reflection_fragment:yf,defaultnormal_vertex:bf,displacementmap_pars_vertex:Mf,displacementmap_vertex:Sf,emissivemap_fragment:wf,emissivemap_pars_fragment:Tf,encodings_fragment:Ef,encodings_pars_fragment:Af,envmap_fragment:Cf,envmap_common_pars_fragment:Lf,envmap_pars_fragment:Pf,envmap_pars_vertex:Df,envmap_physical_pars_fragment:Hf,envmap_vertex:Rf,fog_vertex:If,fog_pars_vertex:Of,fog_fragment:Ff,fog_pars_fragment:Nf,gradientmap_pars_fragment:zf,lightmap_fragment:Uf,lightmap_pars_fragment:kf,lights_lambert_fragment:Bf,lights_lambert_pars_fragment:Vf,lights_pars_begin:Gf,lights_toon_fragment:Wf,lights_toon_pars_fragment:Xf,lights_phong_fragment:qf,lights_phong_pars_fragment:$f,lights_physical_fragment:Yf,lights_physical_pars_fragment:jf,lights_fragment_begin:Zf,lights_fragment_maps:Jf,lights_fragment_end:Kf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:rp,map_particle_fragment:sp,map_particle_pars_fragment:op,metalnessmap_fragment:ap,metalnessmap_pars_fragment:lp,morphcolor_vertex:cp,morphnormal_vertex:hp,morphtarget_pars_vertex:up,morphtarget_vertex:dp,normal_fragment_begin:fp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:_p,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:vp,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Mp,output_fragment:Sp,packing:wp,premultiplied_alpha_fragment:Tp,project_vertex:Ep,dithering_fragment:Ap,dithering_pars_fragment:Cp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Rp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Op,skinbase_vertex:Fp,skinning_pars_vertex:Np,skinning_vertex:zp,skinnormal_vertex:Up,specularmap_fragment:kp,specularmap_pars_fragment:Bp,tonemapping_fragment:Vp,tonemapping_pars_fragment:Gp,transmission_fragment:Hp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:qp,uv_vertex:$p,uv2_pars_fragment:Yp,uv2_pars_vertex:jp,uv2_vertex:Zp,worldpos_vertex:Jp,background_vert:Kp,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:rm,depth_frag:sm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:um,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:_m,meshnormal_vert:xm,meshnormal_frag:vm,meshphong_vert:ym,meshphong_frag:bm,meshphysical_vert:Mm,meshphysical_frag:Sm,meshtoon_vert:wm,meshtoon_frag:Tm,points_vert:Em,points_frag:Am,shadow_vert:Cm,shadow_frag:Lm,sprite_vert:Pm,sprite_frag:Dm},ht={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Be},uv2Transform:{value:new Be},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Be}}},dn={basic:{uniforms:Te([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Te([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Te([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Te([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Te([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Te([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Te([ht.points,ht.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Te([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Te([ht.common,ht.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Te([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Te([ht.sprite,ht.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Te([ht.common,ht.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Te([ht.lights,ht.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};dn.physical={uniforms:Te([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new at(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const fs={r:0,b:0,g:0};function Rm(s,t,e,n,i,r,o){const a=new Ht(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function _(p,g){let b=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?e:t).get(x));const M=s.xr,y=M.getSession&&M.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?f(a,l):x&&x.isColor&&(f(x,1),b=!0),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===zs)?(h===void 0&&(h=new Ke(new Yr(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:er(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=x.encoding!==Yt,(u!==x||d!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ke(new Bs(2,2),new vi({name:"BackgroundMaterial",uniforms:er(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=x.encoding!==Yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,g){p.getRGB(fs,dh(s)),n.buffers.color.setClear(fs.r,fs.g,fs.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(a,l)},render:_}}function Im(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function u(R,B,q,Y,H){let Q=!1;if(o){const tt=f(Y,q,B);c!==tt&&(c=tt,m(c.object)),Q=g(R,Y,q,H),Q&&b(R,Y,q,H)}else{const tt=B.wireframe===!0;(c.geometry!==Y.id||c.program!==q.id||c.wireframe!==tt)&&(c.geometry=Y.id,c.program=q.id,c.wireframe=tt,Q=!0)}H!==null&&e.update(H,34963),(Q||h)&&(h=!1,v(R,B,q,Y),H!==null&&s.bindBuffer(34963,e.get(H).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function _(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function f(R,B,q){const Y=q.wireframe===!0;let H=a[R.id];H===void 0&&(H={},a[R.id]=H);let Q=H[B.id];Q===void 0&&(Q={},H[B.id]=Q);let tt=Q[Y];return tt===void 0&&(tt=p(d()),Q[Y]=tt),tt}function p(R){const B=[],q=[],Y=[];for(let H=0;H<i;H++)B[H]=0,q[H]=0,Y[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:Y,object:R,attributes:{},index:null}}function g(R,B,q,Y){const H=c.attributes,Q=B.attributes;let tt=0;const ut=q.getAttributes();for(const k in ut)if(ut[k].location>=0){const it=H[k];let rt=Q[k];if(rt===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(rt=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(rt=R.instanceColor)),it===void 0||it.attribute!==rt||rt&&it.data!==rt.data)return!0;tt++}return c.attributesNum!==tt||c.index!==Y}function b(R,B,q,Y){const H={},Q=B.attributes;let tt=0;const ut=q.getAttributes();for(const k in ut)if(ut[k].location>=0){let it=Q[k];it===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(it=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(it=R.instanceColor));const rt={};rt.attribute=it,it&&it.data&&(rt.data=it.data),H[k]=rt,tt++}c.attributes=H,c.attributesNum=tt,c.index=Y}function x(){const R=c.newAttributes;for(let B=0,q=R.length;B<q;B++)R[B]=0}function M(R){y(R,0)}function y(R,B){const q=c.newAttributes,Y=c.enabledAttributes,H=c.attributeDivisors;q[R]=1,Y[R]===0&&(s.enableVertexAttribArray(R),Y[R]=1),H[R]!==B&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),H[R]=B)}function E(){const R=c.newAttributes,B=c.enabledAttributes;for(let q=0,Y=B.length;q<Y;q++)B[q]!==R[q]&&(s.disableVertexAttribArray(q),B[q]=0)}function C(R,B,q,Y,H,Q){n.isWebGL2===!0&&(q===5124||q===5125)?s.vertexAttribIPointer(R,B,q,H,Q):s.vertexAttribPointer(R,B,q,Y,H,Q)}function v(R,B,q,Y){if(n.isWebGL2===!1&&(R.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const H=Y.attributes,Q=q.getAttributes(),tt=B.defaultAttributeValues;for(const ut in Q){const k=Q[ut];if(k.location>=0){let j=H[ut];if(j===void 0&&(ut==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),ut==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),j!==void 0){const it=j.normalized,rt=j.itemSize,V=e.get(j);if(V===void 0)continue;const St=V.buffer,xt=V.type,vt=V.bytesPerElement;if(j.isInterleavedBufferAttribute){const ct=j.data,Pt=ct.stride,K=j.offset;if(ct.isInstancedInterleavedBuffer){for(let Z=0;Z<k.locationSize;Z++)y(k.location+Z,ct.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Z=0;Z<k.locationSize;Z++)M(k.location+Z);s.bindBuffer(34962,St);for(let Z=0;Z<k.locationSize;Z++)C(k.location+Z,rt/k.locationSize,xt,it,Pt*vt,(K+rt/k.locationSize*Z)*vt)}else{if(j.isInstancedBufferAttribute){for(let ct=0;ct<k.locationSize;ct++)y(k.location+ct,j.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ct=0;ct<k.locationSize;ct++)M(k.location+ct);s.bindBuffer(34962,St);for(let ct=0;ct<k.locationSize;ct++)C(k.location+ct,rt/k.locationSize,xt,it,rt*vt,rt/k.locationSize*ct*vt)}}else if(tt!==void 0){const it=tt[ut];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(k.location,it);break;case 3:s.vertexAttrib3fv(k.location,it);break;case 4:s.vertexAttrib4fv(k.location,it);break;default:s.vertexAttrib1fv(k.location,it)}}}}E()}function S(){J();for(const R in a){const B=a[R];for(const q in B){const Y=B[q];for(const H in Y)_(Y[H].object),delete Y[H];delete B[q]}delete a[R]}}function P(R){if(a[R.id]===void 0)return;const B=a[R.id];for(const q in B){const Y=B[q];for(const H in Y)_(Y[H].object),delete Y[H];delete B[q]}delete a[R.id]}function z(R){for(const B in a){const q=a[B];if(q[R.id]===void 0)continue;const Y=q[R.id];for(const H in Y)_(Y[H].object),delete Y[H];delete q[R.id]}}function J(){O(),h=!0,c!==l&&(c=l,m(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:J,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:M,disableUnusedAttributes:E}}function Om(s,t,e,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,h,u),e.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function Fm(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),m=s.getParameter(3379),_=s.getParameter(34076),f=s.getParameter(34921),p=s.getParameter(36347),g=s.getParameter(36348),b=s.getParameter(36349),x=d>0,M=o||t.has("OES_texture_float"),y=x&&M,E=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:E}}function Nm(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ii,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const _=u.clippingPlanes,f=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{const b=r?0:n,x=b*4;let M=g.clippingState||null;l.value=M,M=h(_,d,x,m);for(let y=0;y!==x;++y)M[y]=e[y];g.clippingState=M,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,_){const f=u!==null?u.length:0;let p=null;if(f!==0){if(p=l.value,_!==!0||p===null){const g=m+f*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,M=m;x!==f;++x,M+=4)o.copy(u[x]).applyMatrix4(b,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function zm(s){let t=new WeakMap;function e(o,a){return a===Qo?o.mapping=Ki:a===ta&&(o.mapping=Qi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Qo||a===ta)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jd(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Um extends fh{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gi=4,ql=[.125,.215,.35,.446,.526,.582],oi=20,Co=new Um,$l=new Ht;let Lo=null;const ri=(1+Math.sqrt(5))/2,ki=1/ri,Yl=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,ri,ki),new D(0,ri,-ki),new D(ki,0,ri),new D(-ki,0,ri),new D(ri,ki,0),new D(-ri,ki,0)];class jl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Lo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lo),t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Or,format:cn,encoding:gi,depthBuffer:!1},i=Zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=km(r)),this._blurMaterial=Bm(r,t,e)}return i}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,Co)}_sceneToCubeUV(t,e,n,i){const a=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($l),h.toneMapping=Pn,h.autoClear=!1;const m=new ch({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),_=new Ke(new Yr,m);let f=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy($l),f=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):b===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const x=this._cubeSize;ps(i,b*x,g>2?x:0,x,x),h.setRenderTarget(i),f&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ki||t.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Co)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Yl[(i-1)%Yl.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ke(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*oi-1),f=r/_,p=isFinite(r)?1+Math.floor(h*f):oi;p>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${oi}`);const g=[];let b=0;for(let C=0;C<oi;++C){const v=C/f,S=Math.exp(-v*v/2);g.push(S),C===0?b+=S:C<p&&(b+=2*S)}for(let C=0;C<g.length;C++)g[C]=g[C]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const M=this._sizeLods[i],y=3*M*(i>x-Gi?i-x+Gi:0),E=4*(this._cubeSize-M);ps(e,y,E,3*M,2*M),l.setRenderTarget(e),l.render(u,Co)}}function km(s){const t=[],e=[],n=[];let i=s;const r=s-Gi+1+ql.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Gi?l=ql[o-s+Gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,f=3,p=2,g=1,b=new Float32Array(f*_*m),x=new Float32Array(p*_*m),M=new Float32Array(g*_*m);for(let E=0;E<m;E++){const C=E%3*2/3-1,v=E>2?0:-1,S=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];b.set(S,f*_*E),x.set(d,p*_*E);const P=[E,E,E,E,E,E];M.set(P,g*_*E)}const y=new rn;y.setAttribute("position",new He(b,f)),y.setAttribute("uv",new He(x,p)),y.setAttribute("faceIndex",new He(M,g)),t.push(y),i>Gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zl(s,t,e){const n=new _i(s,t,e);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Bm(s,t,e){const n=new Float32Array(oi),i=new D(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:La(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Jl(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Kl(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function La(){return`

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
	`}function Vm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qo||l===ta,h=l===Ki||l===Qi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new jl(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new jl(s));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Gm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hm(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],34962);const m=u.morphAttributes;for(const _ in m){const f=m[_];for(let p=0,g=f.length;p<g;p++)t.update(f[p],34962)}}function c(u){const d=[],m=u.index,_=u.attributes.position;let f=0;if(m!==null){const b=m.array;f=m.version;for(let x=0,M=b.length;x<M;x+=3){const y=b[x+0],E=b[x+1],C=b[x+2];d.push(y,E,E,C,C,y)}}else{const b=_.array;f=_.version;for(let x=0,M=b.length/3-1;x<M;x+=3){const y=x+0,E=x+1,C=x+2;d.push(y,E,E,C,C,y)}}const p=new(nh(d)?uh:hh)(d,1);p.version=f;const g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Wm(s,t,e,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,m){s.drawElements(r,m,a,d*l),e.update(m,r,1)}function u(d,m,_){if(_===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,m,a,d*l,_),e.update(m,r,_)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function Xm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function qm(s,t){return s[0]-t[0]}function $m(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Ym(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new Zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=f!==void 0?f.length:0;let g=r.get(h);if(g===void 0||g.count!==p){let q=function(){R.dispose(),r.delete(h),h.removeEventListener("dispose",q)};var _=q;g!==void 0&&g.texture.dispose();const M=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],S=h.morphAttributes.color||[];let P=0;M===!0&&(P=1),y===!0&&(P=2),E===!0&&(P=3);let z=h.attributes.position.count*P,J=1;z>t.maxTextureSize&&(J=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const O=new Float32Array(z*J*4*p),R=new oh(O,z,J,p);R.type=li,R.needsUpdate=!0;const B=P*4;for(let Y=0;Y<p;Y++){const H=C[Y],Q=v[Y],tt=S[Y],ut=z*J*4*Y;for(let k=0;k<H.count;k++){const j=k*B;M===!0&&(o.fromBufferAttribute(H,k),O[ut+j+0]=o.x,O[ut+j+1]=o.y,O[ut+j+2]=o.z,O[ut+j+3]=0),y===!0&&(o.fromBufferAttribute(Q,k),O[ut+j+4]=o.x,O[ut+j+5]=o.y,O[ut+j+6]=o.z,O[ut+j+7]=0),E===!0&&(o.fromBufferAttribute(tt,k),O[ut+j+8]=o.x,O[ut+j+9]=o.y,O[ut+j+10]=o.z,O[ut+j+11]=tt.itemSize===4?o.w:1)}}g={count:p,texture:R,size:new at(z,J)},r.set(h,g),h.addEventListener("dispose",q)}let b=0;for(let M=0;M<m.length;M++)b+=m[M];const x=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",m),d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const f=m===void 0?0:m.length;let p=n[h.id];if(p===void 0||p.length!==f){p=[];for(let y=0;y<f;y++)p[y]=[y,0];n[h.id]=p}for(let y=0;y<f;y++){const E=p[y];E[0]=y,E[1]=m[y]}p.sort($m);for(let y=0;y<8;y++)y<f&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(qm);const g=h.morphAttributes.position,b=h.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const E=a[y],C=E[0],v=E[1];C!==Number.MAX_SAFE_INTEGER&&v?(g&&h.getAttribute("morphTarget"+y)!==g[C]&&h.setAttribute("morphTarget"+y,g[C]),b&&h.getAttribute("morphNormal"+y)!==b[C]&&h.setAttribute("morphNormal"+y,b[C]),i[y]=v,x+=v):(g&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),b&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const M=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function jm(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);return i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const mh=new Ge,gh=new oh,_h=new Id,xh=new Aa,Ql=[],tc=[],ec=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function ur(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ql[i];if(r===void 0&&(r=new Float32Array(i),Ql[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function he(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Vs(s,t){let e=tc[t];e===void 0&&(e=new Int32Array(t),tc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Zm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Jm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2fv(this.addr,t),ue(e,t)}}function Km(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;s.uniform3fv(this.addr,t),ue(e,t)}}function Qm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4fv(this.addr,t),ue(e,t)}}function tg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;ic.set(n),s.uniformMatrix2fv(this.addr,!1,ic),ue(e,n)}}function eg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;nc.set(n),s.uniformMatrix3fv(this.addr,!1,nc),ue(e,n)}}function ng(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;ec.set(n),s.uniformMatrix4fv(this.addr,!1,ec),ue(e,n)}}function ig(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2iv(this.addr,t),ue(e,t)}}function sg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;s.uniform3iv(this.addr,t),ue(e,t)}}function og(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4iv(this.addr,t),ue(e,t)}}function ag(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2uiv(this.addr,t),ue(e,t)}}function cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;s.uniform3uiv(this.addr,t),ue(e,t)}}function hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4uiv(this.addr,t),ue(e,t)}}function ug(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||mh,i)}function dg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||_h,i)}function fg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||xh,i)}function pg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||gh,i)}function mg(s){switch(s){case 5126:return Zm;case 35664:return Jm;case 35665:return Km;case 35666:return Qm;case 35674:return tg;case 35675:return eg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return rg;case 35668:case 35672:return sg;case 35669:case 35673:return og;case 5125:return ag;case 36294:return lg;case 36295:return cg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(s,t){s.uniform1fv(this.addr,t)}function _g(s,t){const e=ur(t,this.size,2);s.uniform2fv(this.addr,e)}function xg(s,t){const e=ur(t,this.size,3);s.uniform3fv(this.addr,e)}function vg(s,t){const e=ur(t,this.size,4);s.uniform4fv(this.addr,e)}function yg(s,t){const e=ur(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function bg(s,t){const e=ur(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Mg(s,t){const e=ur(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Sg(s,t){s.uniform1iv(this.addr,t)}function wg(s,t){s.uniform2iv(this.addr,t)}function Tg(s,t){s.uniform3iv(this.addr,t)}function Eg(s,t){s.uniform4iv(this.addr,t)}function Ag(s,t){s.uniform1uiv(this.addr,t)}function Cg(s,t){s.uniform2uiv(this.addr,t)}function Lg(s,t){s.uniform3uiv(this.addr,t)}function Pg(s,t){s.uniform4uiv(this.addr,t)}function Dg(s,t,e){const n=this.cache,i=t.length,r=Vs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||mh,r[o])}function Rg(s,t,e){const n=this.cache,i=t.length,r=Vs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||_h,r[o])}function Ig(s,t,e){const n=this.cache,i=t.length,r=Vs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||xh,r[o])}function Og(s,t,e){const n=this.cache,i=t.length,r=Vs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||gh,r[o])}function Fg(s){switch(s){case 5126:return gg;case 35664:return _g;case 35665:return xg;case 35666:return vg;case 35674:return yg;case 35675:return bg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return wg;case 35668:case 35672:return Tg;case 35669:case 35673:return Eg;case 5125:return Ag;case 36294:return Cg;case 36295:return Lg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Og}}class Ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=mg(e.type)}}class zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Fg(e.type)}}class Ug{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function rc(s,t){s.seq.push(t),s.map[t.id]=t}function kg(s,t,e){const n=s.name,i=n.length;for(Po.lastIndex=0;;){const r=Po.exec(n),o=Po.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rc(e,c===void 0?new Ng(a,s,t):new zg(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ug(a),rc(e,u)),e=u}}}class Ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);kg(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function sc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let Bg=0;function Vg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Gg(s){switch(s){case gi:return["Linear","( value )"];case Yt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function oc(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Vg(s.getShaderSource(t),o)}else return i}function Hg(s,t){const e=Gg(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Wg(s,t){let e;switch(t){case od:e="Linear";break;case ad:e="Reinhard";break;case ld:e="OptimizedCineon";break;case cd:e="ACESFilmic";break;case hd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Xg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Tr).join(`
`)}function qg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $g(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Tr(s){return s!==""}function ac(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(s){return s.replace(Yg,jg)}function jg(s,t){const e=Dt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return sa(e)}const Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(s){return s.replace(Zg,Jg)}function Jg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function hc(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Uu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wr&&(t="SHADOWMAP_TYPE_VSM"),t}function Qg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ki:case Qi:t="ENVMAP_TYPE_CUBE";break;case zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function t_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function e_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Kc:t="ENVMAP_BLENDING_MULTIPLY";break;case rd:t="ENVMAP_BLENDING_MIX";break;case sd:t="ENVMAP_BLENDING_ADD";break}return t}function n_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function i_(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Kg(e),c=Qg(e),h=t_(e),u=e_(e),d=n_(e),m=e.isWebGL2?"":Xg(e),_=qg(r),f=i.createProgram();let p,g,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[_].filter(Tr).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(Tr).join(`
`),g.length>0&&(g+=`
`)):(p=[hc(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),g=[m,hc(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.encodings_pars_fragment,Hg("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tr).join(`
`)),o=sa(o),o=ac(o,e),o=lc(o,e),a=sa(a),a=ac(a,e),a=lc(a,e),o=cc(o),a=cc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=b+p+o,M=b+g+a,y=sc(i,35633,x),E=sc(i,35632,M);if(i.attachShader(f,y),i.attachShader(f,E),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),s.debug.checkShaderErrors){const S=i.getProgramInfoLog(f).trim(),P=i.getShaderInfoLog(y).trim(),z=i.getShaderInfoLog(E).trim();let J=!0,O=!0;if(i.getProgramParameter(f,35714)===!1){J=!1;const R=oc(i,y,"vertex"),B=oc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+S+`
`+R+`
`+B)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(P===""||z==="")&&(O=!1);O&&(this.diagnostics={runnable:J,programLog:S,vertexShader:{log:P,prefix:p},fragmentShader:{log:z,prefix:g}})}i.deleteShader(y),i.deleteShader(E);let C;this.getUniforms=function(){return C===void 0&&(C=new Ms(i,f)),C};let v;return this.getAttributes=function(){return v===void 0&&(v=$g(i,f)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=Bg++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=y,this.fragmentShader=E,this}let r_=0;class s_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new o_(t),e.set(t,n)),n}}class o_{constructor(t){this.id=r_++,this.code=t,this.usedTimes=0}}function a_(s,t,e,n,i,r,o){const a=new lh,l=new s_,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v,S,P,z,J){const O=z.fog,R=J.geometry,B=v.isMeshStandardMaterial?z.environment:null,q=(v.isMeshStandardMaterial?e:t).get(v.envMap||B),Y=q&&q.mapping===zs?q.image.height:null,H=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,tt=Q!==void 0?Q.length:0;let ut=0;R.morphAttributes.position!==void 0&&(ut=1),R.morphAttributes.normal!==void 0&&(ut=2),R.morphAttributes.color!==void 0&&(ut=3);let k,j,it,rt;if(H){const Pt=dn[H];k=Pt.vertexShader,j=Pt.fragmentShader}else k=v.vertexShader,j=v.fragmentShader,l.update(v),it=l.getVertexShaderID(v),rt=l.getFragmentShaderID(v);const V=s.getRenderTarget(),St=v.alphaTest>0,xt=v.clearcoat>0,vt=v.iridescence>0;return{isWebGL2:h,shaderID:H,shaderName:v.type,vertexShader:k,fragmentShader:j,defines:v.defines,customVertexShaderID:it,customFragmentShaderID:rt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:d,outputEncoding:V===null?s.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:gi,map:!!v.map,matcap:!!v.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:Y,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Ld,tangentSpaceNormalMap:v.normalMapType===eh,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Yt,clearcoat:xt,clearcoatMap:xt&&!!v.clearcoatMap,clearcoatRoughnessMap:xt&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:xt&&!!v.clearcoatNormalMap,iridescence:vt,iridescenceMap:vt&&!!v.iridescenceMap,iridescenceThicknessMap:vt&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===qi,alphaMap:!!v.alphaMap,alphaTest:St,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!R.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ut,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:Pn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===zn,flipSided:v.side===Ve,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)S.push(P),S.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(g(S,v),b(S,v),S.push(s.outputEncoding)),S.push(v.customProgramCacheKey),S.join()}function g(v,S){v.push(S.precision),v.push(S.outputEncoding),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.combine),v.push(S.vertexUvs),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.physicallyCorrectLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.specularIntensityMap&&a.enable(15),S.specularColorMap&&a.enable(16),S.transmission&&a.enable(17),S.transmissionMap&&a.enable(18),S.thicknessMap&&a.enable(19),S.sheen&&a.enable(20),S.sheenColorMap&&a.enable(21),S.sheenRoughnessMap&&a.enable(22),S.decodeVideoTexture&&a.enable(23),S.opaque&&a.enable(24),v.push(a.mask)}function x(v){const S=_[v.type];let P;if(S){const z=dn[S];P=Xd.clone(z.uniforms)}else P=v.uniforms;return P}function M(v,S){let P;for(let z=0,J=c.length;z<J;z++){const O=c[z];if(O.cacheKey===S){P=O,++P.usedTimes;break}}return P===void 0&&(P=new i_(s,S,v,r),c.push(P)),P}function y(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),v.destroy()}}function E(v){l.remove(v)}function C(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:C}}function l_(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function c_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function uc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function dc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,m,_,f,p){let g=s[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:f,group:p},s[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=m,g.groupOrder=_,g.renderOrder=u.renderOrder,g.z=f,g.group=p),t++,g}function a(u,d,m,_,f,p){const g=o(u,d,m,_,f,p);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):e.push(g)}function l(u,d,m,_,f,p){const g=o(u,d,m,_,f,p);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):e.unshift(g)}function c(u,d){e.length>1&&e.sort(u||c_),n.length>1&&n.sort(d||uc),i.length>1&&i.sort(d||uc)}function h(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function h_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new dc,s.set(n,[o])):i>=r.length?(o=new dc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function u_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ht};break;case"SpotLight":e={position:new D,direction:new D,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function d_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let f_=0;function p_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function m_(s,t){const e=new u_,n=d_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new D);const r=new D,o=new ee,a=new ee;function l(h,u){let d=0,m=0,_=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,g=0,b=0,x=0,M=0,y=0,E=0,C=0,v=0;h.sort(p_);const S=u!==!0?Math.PI:1;for(let z=0,J=h.length;z<J;z++){const O=h[z],R=O.color,B=O.intensity,q=O.distance,Y=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=R.r*B*S,m+=R.g*B*S,_+=R.b*B*S;else if(O.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(O.sh.coefficients[H],B);else if(O.isDirectionalLight){const H=e.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const Q=O.shadow,tt=n.get(O);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,i.directionalShadow[f]=tt,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=O.shadow.matrix,M++}i.directional[f]=H,f++}else if(O.isSpotLight){const H=e.get(O);H.position.setFromMatrixPosition(O.matrixWorld),H.color.copy(R).multiplyScalar(B*S),H.distance=q,H.coneCos=Math.cos(O.angle),H.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),H.decay=O.decay,i.spot[g]=H;const Q=O.shadow;if(O.map&&(i.spotLightMap[C]=O.map,C++,Q.updateMatrices(O),O.castShadow&&v++),i.spotLightMatrix[g]=Q.matrix,O.castShadow){const tt=n.get(O);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,i.spotShadow[g]=tt,i.spotShadowMap[g]=Y,E++}g++}else if(O.isRectAreaLight){const H=e.get(O);H.color.copy(R).multiplyScalar(B),H.halfWidth.set(O.width*.5,0,0),H.halfHeight.set(0,O.height*.5,0),i.rectArea[b]=H,b++}else if(O.isPointLight){const H=e.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity*S),H.distance=O.distance,H.decay=O.decay,O.castShadow){const Q=O.shadow,tt=n.get(O);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,i.pointShadow[p]=tt,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=O.shadow.matrix,y++}i.point[p]=H,p++}else if(O.isHemisphereLight){const H=e.get(O);H.skyColor.copy(O.color).multiplyScalar(B*S),H.groundColor.copy(O.groundColor).multiplyScalar(B*S),i.hemi[x]=H,x++}}b>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const P=i.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==g||P.rectAreaLength!==b||P.hemiLength!==x||P.numDirectionalShadows!==M||P.numPointShadows!==y||P.numSpotShadows!==E||P.numSpotMaps!==C)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=b,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+C-v,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=v,P.directionalLength=f,P.pointLength=p,P.spotLength=g,P.rectAreaLength=b,P.hemiLength=x,P.numDirectionalShadows=M,P.numPointShadows=y,P.numSpotShadows=E,P.numSpotMaps=C,i.version=f_++)}function c(h,u){let d=0,m=0,_=0,f=0,p=0;const g=u.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){const M=h[b];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(M.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),_++}else if(M.isRectAreaLight){const y=i.rectArea[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),a.identity(),o.copy(M.matrixWorld),o.premultiply(g),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),f++}else if(M.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),m++}else if(M.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:i}}function fc(s,t){const e=new m_(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function g_(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new fc(s,t),e.set(r,[l])):o>=a.length?(l=new fc(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class __ extends hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class x_ extends hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`;function b_(s,t,e){let n=new Ca;const i=new at,r=new at,o=new Zt,a=new __({depthPacking:Cd}),l=new x_,c={},h=e.maxTextureSize,u={[Wn]:Ve,[Ve]:Wn,[zn]:zn},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:v_,fragmentShader:y_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new rn;_.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Ke(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc,this.render=function(M,y,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const C=s.getRenderTarget(),v=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Vn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let z=0,J=M.length;z<J;z++){const O=M[z],R=O.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const B=R.getFrameExtents();if(i.multiply(B),r.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/B.x),i.x=r.x*B.x,R.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/B.y),i.y=r.y*B.y,R.mapSize.y=r.y)),R.map===null){const Y=this.type!==wr?{minFilter:Ee,magFilter:Ee}:{};R.map=new _i(i.x,i.y,Y),R.map.texture.name=O.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();const q=R.getViewportCount();for(let Y=0;Y<q;Y++){const H=R.getViewport(Y);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),P.viewport(o),R.updateMatrices(O,Y),n=R.getFrustum(),x(y,E,R.camera,O,this.type)}R.isPointLightShadow!==!0&&this.type===wr&&g(R,E),R.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(C,v,S)};function g(M,y){const E=t.update(f);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new _i(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(y,null,E,d,f,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(y,null,E,m,f,null)}function b(M,y,E,C,v,S){let P=null;const z=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(z!==void 0)P=z;else if(P=E.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const J=P.uuid,O=y.uuid;let R=c[J];R===void 0&&(R={},c[J]=R);let B=R[O];B===void 0&&(B=P.clone(),R[O]=B),P=B}return P.visible=y.visible,P.wireframe=y.wireframe,S===wr?P.side=y.shadowSide!==null?y.shadowSide:y.side:P.side=y.shadowSide!==null?y.shadowSide:u[y.side],P.alphaMap=y.alphaMap,P.alphaTest=y.alphaTest,P.map=y.map,P.clipShadows=y.clipShadows,P.clippingPlanes=y.clippingPlanes,P.clipIntersection=y.clipIntersection,P.displacementMap=y.displacementMap,P.displacementScale=y.displacementScale,P.displacementBias=y.displacementBias,P.wireframeLinewidth=y.wireframeLinewidth,P.linewidth=y.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=C,P.farDistance=v),P}function x(M,y,E,C,v){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===wr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const z=t.update(M),J=M.material;if(Array.isArray(J)){const O=z.groups;for(let R=0,B=O.length;R<B;R++){const q=O[R],Y=J[q.materialIndex];if(Y&&Y.visible){const H=b(M,Y,C,E.near,E.far,v);s.renderBufferDirect(E,null,z,H,M,q)}}}else if(J.visible){const O=b(M,J,C,E.near,E.far,v);s.renderBufferDirect(E,null,z,O,M,null)}}const P=M.children;for(let z=0,J=P.length;z<J;z++)x(P[z],y,E,C,v)}}function M_(s,t,e){const n=e.isWebGL2;function i(){let I=!1;const W=new Zt;let nt=null;const mt=new Zt(0,0,0,0);return{setMask:function(Mt){nt!==Mt&&!I&&(s.colorMask(Mt,Mt,Mt,Mt),nt=Mt)},setLocked:function(Mt){I=Mt},setClear:function(Mt,Gt,de,_e,Yn){Yn===!0&&(Mt*=_e,Gt*=_e,de*=_e),W.set(Mt,Gt,de,_e),mt.equals(W)===!1&&(s.clearColor(Mt,Gt,de,_e),mt.copy(W))},reset:function(){I=!1,nt=null,mt.set(-1,0,0,0)}}}function r(){let I=!1,W=null,nt=null,mt=null;return{setTest:function(Mt){Mt?St(2929):xt(2929)},setMask:function(Mt){W!==Mt&&!I&&(s.depthMask(Mt),W=Mt)},setFunc:function(Mt){if(nt!==Mt){switch(Mt){case Ju:s.depthFunc(512);break;case Ku:s.depthFunc(519);break;case Qu:s.depthFunc(513);break;case Ko:s.depthFunc(515);break;case td:s.depthFunc(514);break;case ed:s.depthFunc(518);break;case nd:s.depthFunc(516);break;case id:s.depthFunc(517);break;default:s.depthFunc(515)}nt=Mt}},setLocked:function(Mt){I=Mt},setClear:function(Mt){mt!==Mt&&(s.clearDepth(Mt),mt=Mt)},reset:function(){I=!1,W=null,nt=null,mt=null}}}function o(){let I=!1,W=null,nt=null,mt=null,Mt=null,Gt=null,de=null,_e=null,Yn=null;return{setTest:function(jt){I||(jt?St(2960):xt(2960))},setMask:function(jt){W!==jt&&!I&&(s.stencilMask(jt),W=jt)},setFunc:function(jt,xn,$e){(nt!==jt||mt!==xn||Mt!==$e)&&(s.stencilFunc(jt,xn,$e),nt=jt,mt=xn,Mt=$e)},setOp:function(jt,xn,$e){(Gt!==jt||de!==xn||_e!==$e)&&(s.stencilOp(jt,xn,$e),Gt=jt,de=xn,_e=$e)},setLocked:function(jt){I=jt},setClear:function(jt){Yn!==jt&&(s.clearStencil(jt),Yn=jt)},reset:function(){I=!1,W=null,nt=null,mt=null,Mt=null,Gt=null,de=null,_e=null,Yn=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},m={},_=new WeakMap,f=[],p=null,g=!1,b=null,x=null,M=null,y=null,E=null,C=null,v=null,S=!1,P=null,z=null,J=null,O=null,R=null;const B=s.getParameter(35661);let q=!1,Y=0;const H=s.getParameter(7938);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=Y>=2);let Q=null,tt={};const ut=s.getParameter(3088),k=s.getParameter(2978),j=new Zt().fromArray(ut),it=new Zt().fromArray(k);function rt(I,W,nt){const mt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(I,Mt),s.texParameteri(I,10241,9728),s.texParameteri(I,10240,9728);for(let Gt=0;Gt<nt;Gt++)s.texImage2D(W+Gt,0,6408,1,1,0,6408,5121,mt);return Mt}const V={};V[3553]=rt(3553,3553,1),V[34067]=rt(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),St(2929),l.setFunc(Ko),lt(!1),Ct(nl),St(2884),ot(Vn);function St(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function xt(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function vt(I,W){return m[I]!==W?(s.bindFramebuffer(I,W),m[I]=W,n&&(I===36009&&(m[36160]=W),I===36160&&(m[36009]=W)),!0):!1}function ct(I,W){let nt=f,mt=!1;if(I)if(nt=_.get(W),nt===void 0&&(nt=[],_.set(W,nt)),I.isWebGLMultipleRenderTargets){const Mt=I.texture;if(nt.length!==Mt.length||nt[0]!==36064){for(let Gt=0,de=Mt.length;Gt<de;Gt++)nt[Gt]=36064+Gt;nt.length=Mt.length,mt=!0}}else nt[0]!==36064&&(nt[0]=36064,mt=!0);else nt[0]!==1029&&(nt[0]=1029,mt=!0);mt&&(e.isWebGL2?s.drawBuffers(nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(nt))}function Pt(I){return p!==I?(s.useProgram(I),p=I,!0):!1}const K={[Vi]:32774,[Bu]:32778,[Vu]:32779};if(n)K[ol]=32775,K[al]=32776;else{const I=t.get("EXT_blend_minmax");I!==null&&(K[ol]=I.MIN_EXT,K[al]=I.MAX_EXT)}const Z={[Gu]:0,[Hu]:1,[Wu]:768,[Zc]:770,[Zu]:776,[Yu]:774,[qu]:772,[Xu]:769,[Jc]:771,[ju]:775,[$u]:773};function ot(I,W,nt,mt,Mt,Gt,de,_e){if(I===Vn){g===!0&&(xt(3042),g=!1);return}if(g===!1&&(St(3042),g=!0),I!==ku){if(I!==b||_e!==S){if((x!==Vi||E!==Vi)&&(s.blendEquation(32774),x=Vi,E=Vi),_e)switch(I){case qi:s.blendFuncSeparate(1,771,1,771);break;case il:s.blendFunc(1,1);break;case rl:s.blendFuncSeparate(0,769,0,1);break;case sl:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case qi:s.blendFuncSeparate(770,771,1,771);break;case il:s.blendFunc(770,1);break;case rl:s.blendFuncSeparate(0,769,0,1);break;case sl:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,y=null,C=null,v=null,b=I,S=_e}return}Mt=Mt||W,Gt=Gt||nt,de=de||mt,(W!==x||Mt!==E)&&(s.blendEquationSeparate(K[W],K[Mt]),x=W,E=Mt),(nt!==M||mt!==y||Gt!==C||de!==v)&&(s.blendFuncSeparate(Z[nt],Z[mt],Z[Gt],Z[de]),M=nt,y=mt,C=Gt,v=de),b=I,S=!1}function _t(I,W){I.side===zn?xt(2884):St(2884);let nt=I.side===Ve;W&&(nt=!nt),lt(nt),I.blending===qi&&I.transparent===!1?ot(Vn):ot(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const mt=I.stencilWrite;c.setTest(mt),mt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),wt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?St(32926):xt(32926)}function lt(I){P!==I&&(I?s.frontFace(2304):s.frontFace(2305),P=I)}function Ct(I){I!==Nu?(St(2884),I!==z&&(I===nl?s.cullFace(1029):I===zu?s.cullFace(1028):s.cullFace(1032))):xt(2884),z=I}function Tt(I){I!==J&&(q&&s.lineWidth(I),J=I)}function wt(I,W,nt){I?(St(32823),(O!==W||R!==nt)&&(s.polygonOffset(W,nt),O=W,R=nt)):xt(32823)}function Wt(I){I?St(3089):xt(3089)}function Bt(I){I===void 0&&(I=33984+B-1),Q!==I&&(s.activeTexture(I),Q=I)}function A(I,W,nt){nt===void 0&&(Q===null?nt=33984+B-1:nt=Q);let mt=tt[nt];mt===void 0&&(mt={type:void 0,texture:void 0},tt[nt]=mt),(mt.type!==I||mt.texture!==W)&&(Q!==nt&&(s.activeTexture(nt),Q=nt),s.bindTexture(I,W||V[I]),mt.type=I,mt.texture=W)}function w(){const I=tt[Q];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(I){j.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),j.copy(I))}function yt(I){it.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),it.copy(I))}function Ot(I,W){let nt=u.get(W);nt===void 0&&(nt=new WeakMap,u.set(W,nt));let mt=nt.get(I);mt===void 0&&(mt=s.getUniformBlockIndex(W,I.name),nt.set(I,mt))}function Nt(I,W){const mt=u.get(W).get(I);h.get(W)!==mt&&(s.uniformBlockBinding(W,mt,I.__bindingPointIndex),h.set(W,mt))}function Xt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Q=null,tt={},m={},_=new WeakMap,f=[],p=null,g=!1,b=null,x=null,M=null,y=null,E=null,C=null,v=null,S=!1,P=null,z=null,J=null,O=null,R=null,j.set(0,0,s.canvas.width,s.canvas.height),it.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:St,disable:xt,bindFramebuffer:vt,drawBuffers:ct,useProgram:Pt,setBlending:ot,setMaterial:_t,setFlipSided:lt,setCullFace:Ct,setLineWidth:Tt,setPolygonOffset:wt,setScissorTest:Wt,activeTexture:Bt,bindTexture:A,unbindTexture:w,compressedTexImage2D:G,compressedTexImage3D:et,texImage2D:gt,texImage3D:pt,updateUBOMapping:Ot,uniformBlockBinding:Nt,texStorage2D:F,texStorage3D:ft,texSubImage2D:st,texSubImage3D:dt,compressedTexSubImage2D:At,compressedTexSubImage3D:L,scissor:bt,viewport:yt,reset:Xt}}function S_(s,t,e,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,w){return g?new OffscreenCanvas(A,w):Nr("canvas")}function x(A,w,G,et){let st=1;if((A.width>et||A.height>et)&&(st=et/Math.max(A.width,A.height)),st<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const dt=w?ra:Math.floor,At=dt(st*A.width),L=dt(st*A.height);f===void 0&&(f=b(At,L));const F=G?b(At,L):f;return F.width=At,F.height=L,F.getContext("2d").drawImage(A,0,0,At,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+At+"x"+L+")."),F}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function M(A){return Fl(A.width)&&Fl(A.height)}function y(A){return a?!1:A.wrapS!==ln||A.wrapT!==ln||A.minFilter!==Ee&&A.minFilter!==Je}function E(A,w){return A.generateMipmaps&&w&&A.minFilter!==Ee&&A.minFilter!==Je}function C(A){s.generateMipmap(A)}function v(A,w,G,et,st=!1){if(a===!1)return w;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let dt=w;return w===6403&&(G===5126&&(dt=33326),G===5131&&(dt=33325),G===5121&&(dt=33321)),w===33319&&(G===5126&&(dt=33328),G===5131&&(dt=33327),G===5121&&(dt=33323)),w===6408&&(G===5126&&(dt=34836),G===5131&&(dt=34842),G===5121&&(dt=et===Yt&&st===!1?35907:32856),G===32819&&(dt=32854),G===32820&&(dt=32855)),(dt===33325||dt===33326||dt===33327||dt===33328||dt===34842||dt===34836)&&t.get("EXT_color_buffer_float"),dt}function S(A,w,G){return E(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==Ee&&A.minFilter!==Je?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function P(A){return A===Ee||A===ll||A===Ks?9728:9729}function z(A){const w=A.target;w.removeEventListener("dispose",z),O(w),w.isVideoTexture&&_.delete(w)}function J(A){const w=A.target;w.removeEventListener("dispose",J),B(w)}function O(A){const w=n.get(A);if(w.__webglInit===void 0)return;const G=A.source,et=p.get(G);if(et){const st=et[w.__cacheKey];st.usedTimes--,st.usedTimes===0&&R(A),Object.keys(et).length===0&&p.delete(G)}n.remove(A)}function R(A){const w=n.get(A);s.deleteTexture(w.__webglTexture);const G=A.source,et=p.get(G);delete et[w.__cacheKey],o.memory.textures--}function B(A){const w=A.texture,G=n.get(A),et=n.get(w);if(et.__webglTexture!==void 0&&(s.deleteTexture(et.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let st=0;st<6;st++)s.deleteFramebuffer(G.__webglFramebuffer[st]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[st]);else{if(s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let st=0;st<G.__webglColorRenderbuffer.length;st++)G.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[st]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let st=0,dt=w.length;st<dt;st++){const At=n.get(w[st]);At.__webglTexture&&(s.deleteTexture(At.__webglTexture),o.memory.textures--),n.remove(w[st])}n.remove(w),n.remove(A)}let q=0;function Y(){q=0}function H(){const A=q;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),q+=1,A}function Q(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function tt(A,w){const G=n.get(A);if(A.isVideoTexture&&Wt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const et=A.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(G,A,w);return}}e.bindTexture(3553,G.__webglTexture,33984+w)}function ut(A,w){const G=n.get(A);if(A.version>0&&G.__version!==A.version){xt(G,A,w);return}e.bindTexture(35866,G.__webglTexture,33984+w)}function k(A,w){const G=n.get(A);if(A.version>0&&G.__version!==A.version){xt(G,A,w);return}e.bindTexture(32879,G.__webglTexture,33984+w)}function j(A,w){const G=n.get(A);if(A.version>0&&G.__version!==A.version){vt(G,A,w);return}e.bindTexture(34067,G.__webglTexture,33984+w)}const it={[ea]:10497,[ln]:33071,[na]:33648},rt={[Ee]:9728,[ll]:9984,[Ks]:9986,[Je]:9729,[ud]:9985,[Ir]:9987};function V(A,w,G){if(G?(s.texParameteri(A,10242,it[w.wrapS]),s.texParameteri(A,10243,it[w.wrapT]),(A===32879||A===35866)&&s.texParameteri(A,32882,it[w.wrapR]),s.texParameteri(A,10240,rt[w.magFilter]),s.texParameteri(A,10241,rt[w.minFilter])):(s.texParameteri(A,10242,33071),s.texParameteri(A,10243,33071),(A===32879||A===35866)&&s.texParameteri(A,32882,33071),(w.wrapS!==ln||w.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,10240,P(w.magFilter)),s.texParameteri(A,10241,P(w.minFilter)),w.minFilter!==Ee&&w.minFilter!==Je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ee||w.minFilter!==Ks&&w.minFilter!==Ir||w.type===li&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===Or&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(A,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function St(A,w){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",z));const et=w.source;let st=p.get(et);st===void 0&&(st={},p.set(et,st));const dt=Q(w);if(dt!==A.__cacheKey){st[dt]===void 0&&(st[dt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),st[dt].usedTimes++;const At=st[A.__cacheKey];At!==void 0&&(st[A.__cacheKey].usedTimes--,At.usedTimes===0&&R(w)),A.__cacheKey=dt,A.__webglTexture=st[dt].texture}return G}function xt(A,w,G){let et=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(et=35866),w.isData3DTexture&&(et=32879);const st=St(A,w),dt=w.source;e.bindTexture(et,A.__webglTexture,33984+G);const At=n.get(dt);if(dt.version!==At.__version||st===!0){e.activeTexture(33984+G),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const L=y(w)&&M(w.image)===!1;let F=x(w.image,L,!1,h);F=Bt(w,F);const ft=M(F)||a,gt=r.convert(w.format,w.encoding);let pt=r.convert(w.type),bt=v(w.internalFormat,gt,pt,w.encoding,w.isVideoTexture);V(et,w,ft);let yt;const Ot=w.mipmaps,Nt=a&&w.isVideoTexture!==!0,Xt=At.__version===void 0||st===!0,I=S(w,F,ft);if(w.isDepthTexture)bt=6402,a?w.type===li?bt=36012:w.type===ai?bt=33190:w.type===$i?bt=35056:bt=33189:w.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===hi&&bt===6402&&w.type!==th&&w.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ai,pt=r.convert(w.type)),w.format===tr&&bt===6402&&(bt=34041,w.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=$i,pt=r.convert(w.type))),Xt&&(Nt?e.texStorage2D(3553,1,bt,F.width,F.height):e.texImage2D(3553,0,bt,F.width,F.height,0,gt,pt,null));else if(w.isDataTexture)if(Ot.length>0&&ft){Nt&&Xt&&e.texStorage2D(3553,I,bt,Ot[0].width,Ot[0].height);for(let W=0,nt=Ot.length;W<nt;W++)yt=Ot[W],Nt?e.texSubImage2D(3553,W,0,0,yt.width,yt.height,gt,pt,yt.data):e.texImage2D(3553,W,bt,yt.width,yt.height,0,gt,pt,yt.data);w.generateMipmaps=!1}else Nt?(Xt&&e.texStorage2D(3553,I,bt,F.width,F.height),e.texSubImage2D(3553,0,0,0,F.width,F.height,gt,pt,F.data)):e.texImage2D(3553,0,bt,F.width,F.height,0,gt,pt,F.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Nt&&Xt&&e.texStorage3D(35866,I,bt,Ot[0].width,Ot[0].height,F.depth);for(let W=0,nt=Ot.length;W<nt;W++)yt=Ot[W],w.format!==cn?gt!==null?Nt?e.compressedTexSubImage3D(35866,W,0,0,0,yt.width,yt.height,F.depth,gt,yt.data,0,0):e.compressedTexImage3D(35866,W,bt,yt.width,yt.height,F.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?e.texSubImage3D(35866,W,0,0,0,yt.width,yt.height,F.depth,gt,pt,yt.data):e.texImage3D(35866,W,bt,yt.width,yt.height,F.depth,0,gt,pt,yt.data)}else{Nt&&Xt&&e.texStorage2D(3553,I,bt,Ot[0].width,Ot[0].height);for(let W=0,nt=Ot.length;W<nt;W++)yt=Ot[W],w.format!==cn?gt!==null?Nt?e.compressedTexSubImage2D(3553,W,0,0,yt.width,yt.height,gt,yt.data):e.compressedTexImage2D(3553,W,bt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?e.texSubImage2D(3553,W,0,0,yt.width,yt.height,gt,pt,yt.data):e.texImage2D(3553,W,bt,yt.width,yt.height,0,gt,pt,yt.data)}else if(w.isDataArrayTexture)Nt?(Xt&&e.texStorage3D(35866,I,bt,F.width,F.height,F.depth),e.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,gt,pt,F.data)):e.texImage3D(35866,0,bt,F.width,F.height,F.depth,0,gt,pt,F.data);else if(w.isData3DTexture)Nt?(Xt&&e.texStorage3D(32879,I,bt,F.width,F.height,F.depth),e.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,gt,pt,F.data)):e.texImage3D(32879,0,bt,F.width,F.height,F.depth,0,gt,pt,F.data);else if(w.isFramebufferTexture){if(Xt)if(Nt)e.texStorage2D(3553,I,bt,F.width,F.height);else{let W=F.width,nt=F.height;for(let mt=0;mt<I;mt++)e.texImage2D(3553,mt,bt,W,nt,0,gt,pt,null),W>>=1,nt>>=1}}else if(Ot.length>0&&ft){Nt&&Xt&&e.texStorage2D(3553,I,bt,Ot[0].width,Ot[0].height);for(let W=0,nt=Ot.length;W<nt;W++)yt=Ot[W],Nt?e.texSubImage2D(3553,W,0,0,gt,pt,yt):e.texImage2D(3553,W,bt,gt,pt,yt);w.generateMipmaps=!1}else Nt?(Xt&&e.texStorage2D(3553,I,bt,F.width,F.height),e.texSubImage2D(3553,0,0,0,gt,pt,F)):e.texImage2D(3553,0,bt,gt,pt,F);E(w,ft)&&C(et),At.__version=dt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function vt(A,w,G){if(w.image.length!==6)return;const et=St(A,w),st=w.source;e.bindTexture(34067,A.__webglTexture,33984+G);const dt=n.get(st);if(st.version!==dt.__version||et===!0){e.activeTexture(33984+G),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const At=w.isCompressedTexture||w.image[0].isCompressedTexture,L=w.image[0]&&w.image[0].isDataTexture,F=[];for(let W=0;W<6;W++)!At&&!L?F[W]=x(w.image[W],!1,!0,c):F[W]=L?w.image[W].image:w.image[W],F[W]=Bt(w,F[W]);const ft=F[0],gt=M(ft)||a,pt=r.convert(w.format,w.encoding),bt=r.convert(w.type),yt=v(w.internalFormat,pt,bt,w.encoding),Ot=a&&w.isVideoTexture!==!0,Nt=dt.__version===void 0||et===!0;let Xt=S(w,ft,gt);V(34067,w,gt);let I;if(At){Ot&&Nt&&e.texStorage2D(34067,Xt,yt,ft.width,ft.height);for(let W=0;W<6;W++){I=F[W].mipmaps;for(let nt=0;nt<I.length;nt++){const mt=I[nt];w.format!==cn?pt!==null?Ot?e.compressedTexSubImage2D(34069+W,nt,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(34069+W,nt,yt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(34069+W,nt,0,0,mt.width,mt.height,pt,bt,mt.data):e.texImage2D(34069+W,nt,yt,mt.width,mt.height,0,pt,bt,mt.data)}}}else{I=w.mipmaps,Ot&&Nt&&(I.length>0&&Xt++,e.texStorage2D(34067,Xt,yt,F[0].width,F[0].height));for(let W=0;W<6;W++)if(L){Ot?e.texSubImage2D(34069+W,0,0,0,F[W].width,F[W].height,pt,bt,F[W].data):e.texImage2D(34069+W,0,yt,F[W].width,F[W].height,0,pt,bt,F[W].data);for(let nt=0;nt<I.length;nt++){const Mt=I[nt].image[W].image;Ot?e.texSubImage2D(34069+W,nt+1,0,0,Mt.width,Mt.height,pt,bt,Mt.data):e.texImage2D(34069+W,nt+1,yt,Mt.width,Mt.height,0,pt,bt,Mt.data)}}else{Ot?e.texSubImage2D(34069+W,0,0,0,pt,bt,F[W]):e.texImage2D(34069+W,0,yt,pt,bt,F[W]);for(let nt=0;nt<I.length;nt++){const mt=I[nt];Ot?e.texSubImage2D(34069+W,nt+1,0,0,pt,bt,mt.image[W]):e.texImage2D(34069+W,nt+1,yt,pt,bt,mt.image[W])}}}E(w,gt)&&C(34067),dt.__version=st.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ct(A,w,G,et,st){const dt=r.convert(G.format,G.encoding),At=r.convert(G.type),L=v(G.internalFormat,dt,At,G.encoding);n.get(w).__hasExternalTextures||(st===32879||st===35866?e.texImage3D(st,0,L,w.width,w.height,w.depth,0,dt,At,null):e.texImage2D(st,0,L,w.width,w.height,0,dt,At,null)),e.bindFramebuffer(36160,A),wt(w)?d.framebufferTexture2DMultisampleEXT(36160,et,st,n.get(G).__webglTexture,0,Tt(w)):(st===3553||st>=34069&&st<=34074)&&s.framebufferTexture2D(36160,et,st,n.get(G).__webglTexture,0),e.bindFramebuffer(36160,null)}function Pt(A,w,G){if(s.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let et=33189;if(G||wt(w)){const st=w.depthTexture;st&&st.isDepthTexture&&(st.type===li?et=36012:st.type===ai&&(et=33190));const dt=Tt(w);wt(w)?d.renderbufferStorageMultisampleEXT(36161,dt,et,w.width,w.height):s.renderbufferStorageMultisample(36161,dt,et,w.width,w.height)}else s.renderbufferStorage(36161,et,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const et=Tt(w);G&&wt(w)===!1?s.renderbufferStorageMultisample(36161,et,35056,w.width,w.height):wt(w)?d.renderbufferStorageMultisampleEXT(36161,et,35056,w.width,w.height):s.renderbufferStorage(36161,34041,w.width,w.height),s.framebufferRenderbuffer(36160,33306,36161,A)}else{const et=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let st=0;st<et.length;st++){const dt=et[st],At=r.convert(dt.format,dt.encoding),L=r.convert(dt.type),F=v(dt.internalFormat,At,L,dt.encoding),ft=Tt(w);G&&wt(w)===!1?s.renderbufferStorageMultisample(36161,ft,F,w.width,w.height):wt(w)?d.renderbufferStorageMultisampleEXT(36161,ft,F,w.width,w.height):s.renderbufferStorage(36161,F,w.width,w.height)}}s.bindRenderbuffer(36161,null)}function K(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),tt(w.depthTexture,0);const et=n.get(w.depthTexture).__webglTexture,st=Tt(w);if(w.depthTexture.format===hi)wt(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,et,0,st):s.framebufferTexture2D(36160,36096,3553,et,0);else if(w.depthTexture.format===tr)wt(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,et,0,st):s.framebufferTexture2D(36160,33306,3553,et,0);else throw new Error("Unknown depthTexture format")}function Z(A){const w=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");K(w.__webglFramebuffer,A)}else if(G){w.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(36160,w.__webglFramebuffer[et]),w.__webglDepthbuffer[et]=s.createRenderbuffer(),Pt(w.__webglDepthbuffer[et],A,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),Pt(w.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function ot(A,w,G){const et=n.get(A);w!==void 0&&ct(et.__webglFramebuffer,A,A.texture,36064,3553),G!==void 0&&Z(A)}function _t(A){const w=A.texture,G=n.get(A),et=n.get(w);A.addEventListener("dispose",J),A.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=w.version,o.memory.textures++);const st=A.isWebGLCubeRenderTarget===!0,dt=A.isWebGLMultipleRenderTargets===!0,At=M(A)||a;if(st){G.__webglFramebuffer=[];for(let L=0;L<6;L++)G.__webglFramebuffer[L]=s.createFramebuffer()}else{if(G.__webglFramebuffer=s.createFramebuffer(),dt)if(i.drawBuffers){const L=A.texture;for(let F=0,ft=L.length;F<ft;F++){const gt=n.get(L[F]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&wt(A)===!1){const L=dt?w:[w];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let F=0;F<L.length;F++){const ft=L[F];G.__webglColorRenderbuffer[F]=s.createRenderbuffer(),s.bindRenderbuffer(36161,G.__webglColorRenderbuffer[F]);const gt=r.convert(ft.format,ft.encoding),pt=r.convert(ft.type),bt=v(ft.internalFormat,gt,pt,ft.encoding,A.isXRRenderTarget===!0),yt=Tt(A);s.renderbufferStorageMultisample(36161,yt,bt,A.width,A.height),s.framebufferRenderbuffer(36160,36064+F,36161,G.__webglColorRenderbuffer[F])}s.bindRenderbuffer(36161,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(st){e.bindTexture(34067,et.__webglTexture),V(34067,w,At);for(let L=0;L<6;L++)ct(G.__webglFramebuffer[L],A,w,36064,34069+L);E(w,At)&&C(34067),e.unbindTexture()}else if(dt){const L=A.texture;for(let F=0,ft=L.length;F<ft;F++){const gt=L[F],pt=n.get(gt);e.bindTexture(3553,pt.__webglTexture),V(3553,gt,At),ct(G.__webglFramebuffer,A,gt,36064+F,3553),E(gt,At)&&C(3553)}e.unbindTexture()}else{let L=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?L=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(L,et.__webglTexture),V(L,w,At),ct(G.__webglFramebuffer,A,w,36064,L),E(w,At)&&C(L),e.unbindTexture()}A.depthBuffer&&Z(A)}function lt(A){const w=M(A)||a,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let et=0,st=G.length;et<st;et++){const dt=G[et];if(E(dt,w)){const At=A.isWebGLCubeRenderTarget?34067:3553,L=n.get(dt).__webglTexture;e.bindTexture(At,L),C(At),e.unbindTexture()}}}function Ct(A){if(a&&A.samples>0&&wt(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,et=A.height;let st=16384;const dt=[],At=A.stencilBuffer?33306:36096,L=n.get(A),F=A.isWebGLMultipleRenderTargets===!0;if(F)for(let ft=0;ft<w.length;ft++)e.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ft,36161,null),e.bindFramebuffer(36160,L.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ft,3553,null,0);e.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,L.__webglFramebuffer);for(let ft=0;ft<w.length;ft++){dt.push(36064+ft),A.depthBuffer&&dt.push(At);const gt=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(gt===!1&&(A.depthBuffer&&(st|=256),A.stencilBuffer&&(st|=1024)),F&&s.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[ft]),gt===!0&&(s.invalidateFramebuffer(36008,[At]),s.invalidateFramebuffer(36009,[At])),F){const pt=n.get(w[ft]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,pt,0)}s.blitFramebuffer(0,0,G,et,0,0,G,et,st,9728),m&&s.invalidateFramebuffer(36008,dt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),F)for(let ft=0;ft<w.length;ft++){e.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ft,36161,L.__webglColorRenderbuffer[ft]);const gt=n.get(w[ft]).__webglTexture;e.bindFramebuffer(36160,L.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ft,3553,gt,0)}e.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function Tt(A){return Math.min(u,A.samples)}function wt(A){const w=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Wt(A){const w=o.render.frame;_.get(A)!==w&&(_.set(A,w),A.update())}function Bt(A,w){const G=A.encoding,et=A.format,st=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ia||G!==gi&&(G===Yt?a===!1?t.has("EXT_sRGB")===!0&&et===cn?(A.format=ia,A.minFilter=Je,A.generateMipmaps=!1):w=rh.sRGBToLinear(w):(et!==cn||st!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),w}this.allocateTextureUnit=H,this.resetTextureUnits=Y,this.setTexture2D=tt,this.setTexture2DArray=ut,this.setTexture3D=k,this.setTextureCube=j,this.rebindTextures=ot,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=wt}function w_(s,t,e){const n=e.isWebGL2;function i(r,o=null){let a;if(r===mi)return 5121;if(r===md)return 32819;if(r===gd)return 32820;if(r===dd)return 5120;if(r===fd)return 5122;if(r===th)return 5123;if(r===pd)return 5124;if(r===ai)return 5125;if(r===li)return 5126;if(r===Or)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===_d)return 6406;if(r===cn)return 6408;if(r===xd)return 6409;if(r===vd)return 6410;if(r===hi)return 6402;if(r===tr)return 34041;if(r===ia)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===yd)return 6403;if(r===bd)return 36244;if(r===Md)return 33319;if(r===Sd)return 33320;if(r===wd)return 36249;if(r===Qs||r===to||r===eo||r===no)if(o===Yt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===to)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===no)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===to)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===eo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===no)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cl||r===hl||r===ul||r===dl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===cl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ul)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===dl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Td)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fl||r===pl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===fl)return o===Yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===pl)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ml||r===gl||r===_l||r===xl||r===vl||r===yl||r===bl||r===Ml||r===Sl||r===wl||r===Tl||r===El||r===Al||r===Cl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ml)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gl)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_l)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xl)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vl)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yl)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bl)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ml)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sl)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wl)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tl)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===El)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Al)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cl)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===io)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===io)return o===Yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ed||r===Ll||r===Pl||r===Dl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===io)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ll)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$i?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class T_ extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ms extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E_={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const f of t.hand.values()){const p=e.getJointPose(f,n),g=this._getHandJoint(c,f);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class A_ extends Ge{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:hi,h!==hi&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hi&&(n=ai),n===void 0&&h===tr&&(n=$i),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ee,this.minFilter=l!==void 0?l:Ee,this.flipY=!1,this.generateMipmaps=!1}}class C_ extends Mi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,_=null;const f=e.getContextAttributes();let p=null,g=null;const b=[],x=[],M=new Set,y=new Map,E=new Ue;E.layers.enable(1),E.viewport=new Zt;const C=new Ue;C.layers.enable(2),C.viewport=new Zt;const v=[E,C],S=new T_;S.layers.enable(1),S.layers.enable(2);let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=b[k];return j===void 0&&(j=new Do,b[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=b[k];return j===void 0&&(j=new Do,b[k]=j),j.getGripSpace()},this.getHand=function(k){let j=b[k];return j===void 0&&(j=new Do,b[k]=j),j.getHandSpace()};function J(k){const j=x.indexOf(k.inputSource);if(j===-1)return;const it=b[j];it!==void 0&&it.dispatchEvent({type:k.type,data:k.inputSource})}function O(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",R);for(let k=0;k<b.length;k++){const j=x[k];j!==null&&(x[k]=null,b[k].disconnect(j))}P=null,z=null,t.setRenderTarget(p),m=null,d=null,u=null,i=null,g=null,ut.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",O),i.addEventListener("inputsourceschange",R),f.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:m}),g=new _i(m.framebufferWidth,m.framebufferHeight,{format:cn,type:mi,encoding:t.outputEncoding,stencilBuffer:f.stencil})}else{let j=null,it=null,rt=null;f.depth&&(rt=f.stencil?35056:33190,j=f.stencil?tr:hi,it=f.stencil?$i:ai);const V={colorFormat:32856,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(V),i.updateRenderState({layers:[d]}),g=new _i(d.textureWidth,d.textureHeight,{format:cn,type:mi,depthTexture:new A_(d.textureWidth,d.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:f.stencil,encoding:t.outputEncoding,samples:f.antialias?4:0});const St=t.properties.get(g);St.__ignoreDepthValues=d.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ut.setContext(i),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(k){for(let j=0;j<k.removed.length;j++){const it=k.removed[j],rt=x.indexOf(it);rt>=0&&(x[rt]=null,b[rt].disconnect(it))}for(let j=0;j<k.added.length;j++){const it=k.added[j];let rt=x.indexOf(it);if(rt===-1){for(let St=0;St<b.length;St++)if(St>=x.length){x.push(it),rt=St;break}else if(x[St]===null){x[St]=it,rt=St;break}if(rt===-1)break}const V=b[rt];V&&V.connect(it)}}const B=new D,q=new D;function Y(k,j,it){B.setFromMatrixPosition(j.matrixWorld),q.setFromMatrixPosition(it.matrixWorld);const rt=B.distanceTo(q),V=j.projectionMatrix.elements,St=it.projectionMatrix.elements,xt=V[14]/(V[10]-1),vt=V[14]/(V[10]+1),ct=(V[9]+1)/V[5],Pt=(V[9]-1)/V[5],K=(V[8]-1)/V[0],Z=(St[8]+1)/St[0],ot=xt*K,_t=xt*Z,lt=rt/(-K+Z),Ct=lt*-K;j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ct),k.translateZ(lt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Tt=xt+lt,wt=vt+lt,Wt=ot-Ct,Bt=_t+(rt-Ct),A=ct*vt/wt*Tt,w=Pt*vt/wt*Tt;k.projectionMatrix.makePerspective(Wt,Bt,A,w,Tt,wt)}function H(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;S.near=C.near=E.near=k.near,S.far=C.far=E.far=k.far,(P!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,z=S.far);const j=k.parent,it=S.cameras;H(S,j);for(let V=0;V<it.length;V++)H(it[V],j);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),k.matrix.copy(S.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const rt=k.children;for(let V=0,St=rt.length;V<St;V++)rt[V].updateMatrixWorld(!0);it.length===2?Y(S,E,C):S.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.getPlanes=function(){return M};let Q=null;function tt(k,j){if(h=j.getViewerPose(c||o),_=j,h!==null){const it=h.views;m!==null&&(t.setRenderTargetFramebuffer(g,m.framebuffer),t.setRenderTarget(g));let rt=!1;it.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let V=0;V<it.length;V++){const St=it[V];let xt=null;if(m!==null)xt=m.getViewport(St);else{const ct=u.getViewSubImage(d,St);xt=ct.viewport,V===0&&(t.setRenderTargetTextures(g,ct.colorTexture,d.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(g))}let vt=v[V];vt===void 0&&(vt=new Ue,vt.layers.enable(V),vt.viewport=new Zt,v[V]=vt),vt.matrix.fromArray(St.transform.matrix),vt.projectionMatrix.fromArray(St.projectionMatrix),vt.viewport.set(xt.x,xt.y,xt.width,xt.height),V===0&&S.matrix.copy(vt.matrix),rt===!0&&S.cameras.push(vt)}}for(let it=0;it<b.length;it++){const rt=x[it],V=b[it];rt!==null&&V!==void 0&&V.update(rt,j,c||o)}if(Q&&Q(k,j),j.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let it=null;for(const rt of M)j.detectedPlanes.has(rt)||(it===null&&(it=[]),it.push(rt));if(it!==null)for(const rt of it)M.delete(rt),y.delete(rt),n.dispatchEvent({type:"planeremoved",data:rt});for(const rt of j.detectedPlanes)if(!M.has(rt))M.add(rt),y.set(rt,j.lastChangedTime),n.dispatchEvent({type:"planeadded",data:rt});else{const V=y.get(rt);rt.lastChangedTime>V&&(y.set(rt,rt.lastChangedTime),n.dispatchEvent({type:"planechanged",data:rt}))}}_=null}const ut=new ph;ut.setAnimationLoop(tt),this.setAnimationLoop=function(k){Q=k},this.dispose=function(){}}}function L_(s,t){function e(f,p){p.color.getRGB(f.fogColor.value,dh(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,g,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),h(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),u(f,p),p.isMeshPhysicalMaterial&&d(f,p,x)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),_(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?a(f,p,g,b):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===Ve&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===Ve&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const g=t.get(p).envMap;if(g&&(f.envMap.value=g,f.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const M=s.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),f.uvTransform.value.copy(b.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uv2Transform.value.copy(x.matrix))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function a(f,p,g,b){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*g,f.scale.value=b*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uvTransform.value.copy(x.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),f.uvTransform.value.copy(g.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,g){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ve&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function P_(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(35375):0;function l(b,x){const M=x.program;n.uniformBlockBinding(b,M)}function c(b,x){let M=i[b.id];M===void 0&&(_(b),M=h(b),i[b.id]=M,b.addEventListener("dispose",p));const y=x.program;n.updateUBOMapping(b,y);const E=t.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function h(b){const x=u();b.__bindingPointIndex=x;const M=s.createBuffer(),y=b.__size,E=b.usage;return s.bindBuffer(35345,M),s.bufferData(35345,y,E),s.bindBuffer(35345,null),s.bindBufferBase(35345,x,M),M}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=i[b.id],M=b.uniforms,y=b.__cache;s.bindBuffer(35345,x);for(let E=0,C=M.length;E<C;E++){const v=M[E];if(m(v,E,y)===!0){const S=v.__offset,P=Array.isArray(v.value)?v.value:[v.value];let z=0;for(let J=0;J<P.length;J++){const O=P[J],R=f(O);typeof O=="number"?(v.__data[0]=O,s.bufferSubData(35345,S+z,v.__data)):O.isMatrix3?(v.__data[0]=O.elements[0],v.__data[1]=O.elements[1],v.__data[2]=O.elements[2],v.__data[3]=O.elements[0],v.__data[4]=O.elements[3],v.__data[5]=O.elements[4],v.__data[6]=O.elements[5],v.__data[7]=O.elements[0],v.__data[8]=O.elements[6],v.__data[9]=O.elements[7],v.__data[10]=O.elements[8],v.__data[11]=O.elements[0]):(O.toArray(v.__data,z),z+=R.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,S,v.__data)}}s.bindBuffer(35345,null)}function m(b,x,M){const y=b.value;if(M[x]===void 0){if(typeof y=="number")M[x]=y;else{const E=Array.isArray(y)?y:[y],C=[];for(let v=0;v<E.length;v++)C.push(E[v].clone());M[x]=C}return!0}else if(typeof y=="number"){if(M[x]!==y)return M[x]=y,!0}else{const E=Array.isArray(M[x])?M[x]:[M[x]],C=Array.isArray(y)?y:[y];for(let v=0;v<E.length;v++){const S=E[v];if(S.equals(C[v])===!1)return S.copy(C[v]),!0}}return!1}function _(b){const x=b.uniforms;let M=0;const y=16;let E=0;for(let C=0,v=x.length;C<v;C++){const S=x[C],P={boundary:0,storage:0},z=Array.isArray(S.value)?S.value:[S.value];for(let J=0,O=z.length;J<O;J++){const R=z[J],B=f(R);P.boundary+=B.boundary,P.storage+=B.storage}if(S.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,C>0){E=M%y;const J=y-E;E!==0&&J-P.boundary<0&&(M+=y-E,S.__offset=M)}M+=P.storage}return E=M%y,E>0&&(M+=y-E),b.__size=M,b.__cache={},this}function f(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function g(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}function D_(){const s=Nr("canvas");return s.style.display="block",s}function vh(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:D_(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let u=null,d=null;const m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gi,this.physicallyCorrectLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;const f=this;let p=!1,g=0,b=0,x=null,M=-1,y=null;const E=new Zt,C=new Zt;let v=null,S=t.width,P=t.height,z=1,J=null,O=null;const R=new Zt(0,0,S,P),B=new Zt(0,0,S,P);let q=!1;const Y=new Ca;let H=!1,Q=!1,tt=null;const ut=new ee,k=new at,j=new D,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function rt(){return x===null?z:1}let V=e;function St(T,U){for(let X=0;X<T.length;X++){const N=T[X],$=t.getContext(N,U);if($!==null)return $}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ea}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Ot,!1),V===null){const U=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&U.shift(),V=St(U,T),V===null)throw St(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let xt,vt,ct,Pt,K,Z,ot,_t,lt,Ct,Tt,wt,Wt,Bt,A,w,G,et,st,dt,At,L,F,ft;function gt(){xt=new Gm(V),vt=new Fm(V,xt,s),xt.init(vt),L=new w_(V,xt,vt),ct=new M_(V,xt,vt),Pt=new Xm,K=new l_,Z=new S_(V,xt,ct,K,vt,L,Pt),ot=new zm(f),_t=new Vm(f),lt=new Kd(V,vt),F=new Im(V,xt,lt,vt),Ct=new Hm(V,lt,Pt,F),Tt=new jm(V,Ct,lt,Pt),st=new Ym(V,vt,Z),w=new Nm(K),wt=new a_(f,ot,_t,xt,vt,F,w),Wt=new L_(f,K),Bt=new h_,A=new g_(xt,vt),et=new Rm(f,ot,_t,ct,Tt,h,o),G=new b_(f,Tt,vt),ft=new P_(V,Pt,vt,ct),dt=new Om(V,xt,Pt,vt),At=new Wm(V,xt,Pt,vt),Pt.programs=wt.programs,f.capabilities=vt,f.extensions=xt,f.properties=K,f.renderLists=Bt,f.shadowMap=G,f.state=ct,f.info=Pt}gt();const pt=new C_(f,V);this.xr=pt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=xt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=xt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(S,P,!1))},this.getSize=function(T){return T.set(S,P)},this.setSize=function(T,U,X){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=T,P=U,t.width=Math.floor(T*z),t.height=Math.floor(U*z),X!==!1&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(S*z,P*z).floor()},this.setDrawingBufferSize=function(T,U,X){S=T,P=U,z=X,t.width=Math.floor(T*X),t.height=Math.floor(U*X),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,U,X,N){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,U,X,N),ct.viewport(E.copy(R).multiplyScalar(z).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,U,X,N){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,U,X,N),ct.scissor(C.copy(B).multiplyScalar(z).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(T){ct.setScissorTest(q=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){O=T},this.getClearColor=function(T){return T.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(T=!0,U=!0,X=!0){let N=0;T&&(N|=16384),U&&(N|=256),X&&(N|=1024),V.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Ot,!1),Bt.dispose(),A.dispose(),K.dispose(),ot.dispose(),_t.dispose(),Tt.dispose(),F.dispose(),ft.dispose(),wt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",mt),pt.removeEventListener("sessionend",Mt),tt&&(tt.dispose(),tt=null),Gt.stop()};function bt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Pt.autoReset,U=G.enabled,X=G.autoUpdate,N=G.needsUpdate,$=G.type;gt(),Pt.autoReset=T,G.enabled=U,G.autoUpdate=X,G.needsUpdate=N,G.type=$}function Ot(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Nt(T){const U=T.target;U.removeEventListener("dispose",Nt),Xt(U)}function Xt(T){I(T),K.remove(T)}function I(T){const U=K.get(T).programs;U!==void 0&&(U.forEach(function(X){wt.releaseProgram(X)}),T.isShaderMaterial&&wt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,X,N,$,Et){U===null&&(U=it);const Lt=$.isMesh&&$.matrixWorld.determinant()<0,Rt=Ru(T,U,X,N,$);ct.setMaterial(N,Lt);let It=X.index,Vt=1;N.wireframe===!0&&(It=Ct.getWireframeAttribute(X),Vt=2);const zt=X.drawRange,Ut=X.attributes.position;let ie=zt.start*Vt,Re=(zt.start+zt.count)*Vt;Et!==null&&(ie=Math.max(ie,Et.start*Vt),Re=Math.min(Re,(Et.start+Et.count)*Vt)),It!==null?(ie=Math.max(ie,0),Re=Math.min(Re,It.count)):Ut!=null&&(ie=Math.max(ie,0),Re=Math.min(Re,Ut.count));const vn=Re-ie;if(vn<0||vn===1/0)return;F.setup($,N,Rt,X,It);let jn,re=dt;if(It!==null&&(jn=lt.get(It),re=At,re.setIndex(jn)),$.isMesh)N.wireframe===!0?(ct.setLineWidth(N.wireframeLinewidth*rt()),re.setMode(1)):re.setMode(4);else if($.isLine){let kt=N.linewidth;kt===void 0&&(kt=1),ct.setLineWidth(kt*rt()),$.isLineSegments?re.setMode(1):$.isLineLoop?re.setMode(2):re.setMode(3)}else $.isPoints?re.setMode(0):$.isSprite&&re.setMode(4);if($.isInstancedMesh)re.renderInstances(ie,vn,$.count);else if(X.isInstancedBufferGeometry){const kt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ys=Math.min(X.instanceCount,kt);re.renderInstances(ie,vn,Ys)}else re.render(ie,vn)},this.compile=function(T,U){function X(N,$,Et){N.transparent===!0&&N.side===zn&&N.forceSinglePass===!1?(N.side=Ve,N.needsUpdate=!0,$e(N,$,Et),N.side=Wn,N.needsUpdate=!0,$e(N,$,Et),N.side=zn):$e(N,$,Et)}d=A.get(T),d.init(),_.push(d),T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights(f.physicallyCorrectLights),T.traverse(function(N){const $=N.material;if($)if(Array.isArray($))for(let Et=0;Et<$.length;Et++){const Lt=$[Et];X(Lt,T,N)}else X($,T,N)}),_.pop(),d=null};let W=null;function nt(T){W&&W(T)}function mt(){Gt.stop()}function Mt(){Gt.start()}const Gt=new ph;Gt.setAnimationLoop(nt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(T){W=T,pt.setAnimationLoop(T),T===null?Gt.stop():Gt.start()},pt.addEventListener("sessionstart",mt),pt.addEventListener("sessionend",Mt),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(U),U=pt.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,U,x),d=A.get(T,_.length),d.init(),_.push(d),ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(ut),Q=this.localClippingEnabled,H=w.init(this.clippingPlanes,Q),u=Bt.get(T,m.length),u.init(),m.push(u),de(T,U,0,f.sortObjects),u.finish(),f.sortObjects===!0&&u.sort(J,O),H===!0&&w.beginShadows();const X=d.state.shadowsArray;if(G.render(X,T,U),H===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(u,T),d.setupLights(f.physicallyCorrectLights),U.isArrayCamera){const N=U.cameras;for(let $=0,Et=N.length;$<Et;$++){const Lt=N[$];_e(u,T,Lt,Lt.viewport)}}else _e(u,T,U);x!==null&&(Z.updateMultisampleRenderTarget(x),Z.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(f,T,U),F.resetDefaultState(),M=-1,y=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function de(T,U,X,N){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){N&&j.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);const Lt=Tt.update(T),Rt=T.material;Rt.visible&&u.push(T,Lt,Rt,X,j.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Pt.render.frame&&(T.skeleton.update(),T.skeleton.frame=Pt.render.frame),!T.frustumCulled||Y.intersectsObject(T))){N&&j.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);const Lt=Tt.update(T),Rt=T.material;if(Array.isArray(Rt)){const It=Lt.groups;for(let Vt=0,zt=It.length;Vt<zt;Vt++){const Ut=It[Vt],ie=Rt[Ut.materialIndex];ie&&ie.visible&&u.push(T,Lt,ie,X,j.z,Ut)}}else Rt.visible&&u.push(T,Lt,Rt,X,j.z,null)}}const Et=T.children;for(let Lt=0,Rt=Et.length;Lt<Rt;Lt++)de(Et[Lt],U,X,N)}function _e(T,U,X,N){const $=T.opaque,Et=T.transmissive,Lt=T.transparent;d.setupLightsView(X),H===!0&&w.setGlobalState(f.clippingPlanes,X),Et.length>0&&Yn($,U,X),N&&ct.viewport(E.copy(N)),$.length>0&&jt($,U,X),Et.length>0&&jt(Et,U,X),Lt.length>0&&jt(Lt,U,X),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Yn(T,U,X){const N=vt.isWebGL2;tt===null&&(tt=new _i(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?Or:mi,minFilter:Ir,samples:N&&r===!0?4:0})),f.getDrawingBufferSize(k),N?tt.setSize(k.x,k.y):tt.setSize(ra(k.x),ra(k.y));const $=f.getRenderTarget();f.setRenderTarget(tt),f.clear();const Et=f.toneMapping;f.toneMapping=Pn,jt(T,U,X),f.toneMapping=Et,Z.updateMultisampleRenderTarget(tt),Z.updateRenderTargetMipmap(tt),f.setRenderTarget($)}function jt(T,U,X){const N=U.isScene===!0?U.overrideMaterial:null;for(let $=0,Et=T.length;$<Et;$++){const Lt=T[$],Rt=Lt.object,It=Lt.geometry,Vt=N===null?Lt.material:N,zt=Lt.group;Rt.layers.test(X.layers)&&xn(Rt,U,X,It,Vt,zt)}}function xn(T,U,X,N,$,Et){T.onBeforeRender(f,U,X,N,$,Et),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(f,U,X,N,T,Et),$.transparent===!0&&$.side===zn&&$.forceSinglePass===!1?($.side=Ve,$.needsUpdate=!0,f.renderBufferDirect(X,U,N,$,T,Et),$.side=Wn,$.needsUpdate=!0,f.renderBufferDirect(X,U,N,$,T,Et),$.side=zn):f.renderBufferDirect(X,U,N,$,T,Et),T.onAfterRender(f,U,X,N,$,Et)}function $e(T,U,X){U.isScene!==!0&&(U=it);const N=K.get(T),$=d.state.lights,Et=d.state.shadowsArray,Lt=$.state.version,Rt=wt.getParameters(T,$.state,Et,U,X),It=wt.getProgramCacheKey(Rt);let Vt=N.programs;N.environment=T.isMeshStandardMaterial?U.environment:null,N.fog=U.fog,N.envMap=(T.isMeshStandardMaterial?_t:ot).get(T.envMap||N.environment),Vt===void 0&&(T.addEventListener("dispose",Nt),Vt=new Map,N.programs=Vt);let zt=Vt.get(It);if(zt!==void 0){if(N.currentProgram===zt&&N.lightsStateVersion===Lt)return Qa(T,Rt),zt}else Rt.uniforms=wt.getUniforms(T),T.onBuild(X,Rt,f),T.onBeforeCompile(Rt,f),zt=wt.acquireProgram(Rt,It),Vt.set(It,zt),N.uniforms=Rt.uniforms;const Ut=N.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=w.uniform),Qa(T,Rt),N.needsLights=Ou(T),N.lightsStateVersion=Lt,N.needsLights&&(Ut.ambientLightColor.value=$.state.ambient,Ut.lightProbe.value=$.state.probe,Ut.directionalLights.value=$.state.directional,Ut.directionalLightShadows.value=$.state.directionalShadow,Ut.spotLights.value=$.state.spot,Ut.spotLightShadows.value=$.state.spotShadow,Ut.rectAreaLights.value=$.state.rectArea,Ut.ltc_1.value=$.state.rectAreaLTC1,Ut.ltc_2.value=$.state.rectAreaLTC2,Ut.pointLights.value=$.state.point,Ut.pointLightShadows.value=$.state.pointShadow,Ut.hemisphereLights.value=$.state.hemi,Ut.directionalShadowMap.value=$.state.directionalShadowMap,Ut.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ut.spotShadowMap.value=$.state.spotShadowMap,Ut.spotLightMatrix.value=$.state.spotLightMatrix,Ut.spotLightMap.value=$.state.spotLightMap,Ut.pointShadowMap.value=$.state.pointShadowMap,Ut.pointShadowMatrix.value=$.state.pointShadowMatrix);const ie=zt.getUniforms(),Re=Ms.seqWithValue(ie.seq,Ut);return N.currentProgram=zt,N.uniformsList=Re,zt}function Qa(T,U){const X=K.get(T);X.outputEncoding=U.outputEncoding,X.instancing=U.instancing,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Ru(T,U,X,N,$){U.isScene!==!0&&(U=it),Z.resetTextureUnits();const Et=U.fog,Lt=N.isMeshStandardMaterial?U.environment:null,Rt=x===null?f.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:gi,It=(N.isMeshStandardMaterial?_t:ot).get(N.envMap||Lt),Vt=N.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,zt=!!N.normalMap&&!!X.attributes.tangent,Ut=!!X.morphAttributes.position,ie=!!X.morphAttributes.normal,Re=!!X.morphAttributes.color,vn=N.toneMapped?f.toneMapping:Pn,jn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,re=jn!==void 0?jn.length:0,kt=K.get(N),Ys=d.state.lights;if(H===!0&&(Q===!0||T!==y)){const Ie=T===y&&N.id===M;w.setState(N,T,Ie)}let fe=!1;N.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ys.state.version||kt.outputEncoding!==Rt||$.isInstancedMesh&&kt.instancing===!1||!$.isInstancedMesh&&kt.instancing===!0||$.isSkinnedMesh&&kt.skinning===!1||!$.isSkinnedMesh&&kt.skinning===!0||kt.envMap!==It||N.fog===!0&&kt.fog!==Et||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==w.numPlanes||kt.numIntersection!==w.numIntersection)||kt.vertexAlphas!==Vt||kt.vertexTangents!==zt||kt.morphTargets!==Ut||kt.morphNormals!==ie||kt.morphColors!==Re||kt.toneMapping!==vn||vt.isWebGL2===!0&&kt.morphTargetsCount!==re)&&(fe=!0):(fe=!0,kt.__version=N.version);let Zn=kt.currentProgram;fe===!0&&(Zn=$e(N,U,$));let tl=!1,pr=!1,js=!1;const Se=Zn.getUniforms(),Jn=kt.uniforms;if(ct.useProgram(Zn.program)&&(tl=!0,pr=!0,js=!0),N.id!==M&&(M=N.id,pr=!0),tl||y!==T){if(Se.setValue(V,"projectionMatrix",T.projectionMatrix),vt.logarithmicDepthBuffer&&Se.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),y!==T&&(y=T,pr=!0,js=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Ie=Se.map.cameraPosition;Ie!==void 0&&Ie.setValue(V,j.setFromMatrixPosition(T.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Se.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||$.isSkinnedMesh)&&Se.setValue(V,"viewMatrix",T.matrixWorldInverse)}if($.isSkinnedMesh){Se.setOptional(V,$,"bindMatrix"),Se.setOptional(V,$,"bindMatrixInverse");const Ie=$.skeleton;Ie&&(vt.floatVertexTextures?(Ie.boneTexture===null&&Ie.computeBoneTexture(),Se.setValue(V,"boneTexture",Ie.boneTexture,Z),Se.setValue(V,"boneTextureSize",Ie.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zs=X.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0&&vt.isWebGL2===!0)&&st.update($,X,N,Zn),(pr||kt.receiveShadow!==$.receiveShadow)&&(kt.receiveShadow=$.receiveShadow,Se.setValue(V,"receiveShadow",$.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Jn.envMap.value=It,Jn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),pr&&(Se.setValue(V,"toneMappingExposure",f.toneMappingExposure),kt.needsLights&&Iu(Jn,js),Et&&N.fog===!0&&Wt.refreshFogUniforms(Jn,Et),Wt.refreshMaterialUniforms(Jn,N,z,P,tt),Ms.upload(V,kt.uniformsList,Jn,Z)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ms.upload(V,kt.uniformsList,Jn,Z),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Se.setValue(V,"center",$.center),Se.setValue(V,"modelViewMatrix",$.modelViewMatrix),Se.setValue(V,"normalMatrix",$.normalMatrix),Se.setValue(V,"modelMatrix",$.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Ie=N.uniformsGroups;for(let Js=0,Fu=Ie.length;Js<Fu;Js++)if(vt.isWebGL2){const el=Ie[Js];ft.update(el,Zn),ft.bind(el,Zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zn}function Iu(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Ou(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,U,X){K.get(T.texture).__webglTexture=U,K.get(T.depthTexture).__webglTexture=X;const N=K.get(T);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=X===void 0,N.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const X=K.get(T);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,X=0){x=T,g=U,b=X;let N=!0,$=null,Et=!1,Lt=!1;if(T){const It=K.get(T);It.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(36160,null),N=!1):It.__webglFramebuffer===void 0?Z.setupRenderTarget(T):It.__hasExternalTextures&&Z.rebindTextures(T,K.get(T.texture).__webglTexture,K.get(T.depthTexture).__webglTexture);const Vt=T.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Lt=!0);const zt=K.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?($=zt[U],Et=!0):vt.isWebGL2&&T.samples>0&&Z.useMultisampledRTT(T)===!1?$=K.get(T).__webglMultisampledFramebuffer:$=zt,E.copy(T.viewport),C.copy(T.scissor),v=T.scissorTest}else E.copy(R).multiplyScalar(z).floor(),C.copy(B).multiplyScalar(z).floor(),v=q;if(ct.bindFramebuffer(36160,$)&&vt.drawBuffers&&N&&ct.drawBuffers(T,$),ct.viewport(E),ct.scissor(C),ct.setScissorTest(v),Et){const It=K.get(T.texture);V.framebufferTexture2D(36160,36064,34069+U,It.__webglTexture,X)}else if(Lt){const It=K.get(T.texture),Vt=U||0;V.framebufferTextureLayer(36160,36064,It.__webglTexture,X||0,Vt)}M=-1},this.readRenderTargetPixels=function(T,U,X,N,$,Et,Lt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=K.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(Rt=Rt[Lt]),Rt){ct.bindFramebuffer(36160,Rt);try{const It=T.texture,Vt=It.format,zt=It.type;if(Vt!==cn&&L.convert(Vt)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ut=zt===Or&&(xt.has("EXT_color_buffer_half_float")||vt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(zt!==mi&&L.convert(zt)!==V.getParameter(35738)&&!(zt===li&&(vt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-N&&X>=0&&X<=T.height-$&&V.readPixels(U,X,N,$,L.convert(Vt),L.convert(zt),Et)}finally{const It=x!==null?K.get(x).__webglFramebuffer:null;ct.bindFramebuffer(36160,It)}}},this.copyFramebufferToTexture=function(T,U,X=0){const N=Math.pow(2,-X),$=Math.floor(U.image.width*N),Et=Math.floor(U.image.height*N);Z.setTexture2D(U,0),V.copyTexSubImage2D(3553,X,0,0,T.x,T.y,$,Et),ct.unbindTexture()},this.copyTextureToTexture=function(T,U,X,N=0){const $=U.image.width,Et=U.image.height,Lt=L.convert(X.format),Rt=L.convert(X.type);Z.setTexture2D(X,0),V.pixelStorei(37440,X.flipY),V.pixelStorei(37441,X.premultiplyAlpha),V.pixelStorei(3317,X.unpackAlignment),U.isDataTexture?V.texSubImage2D(3553,N,T.x,T.y,$,Et,Lt,Rt,U.image.data):U.isCompressedTexture?V.compressedTexSubImage2D(3553,N,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Lt,U.mipmaps[0].data):V.texSubImage2D(3553,N,T.x,T.y,Lt,Rt,U.image),N===0&&X.generateMipmaps&&V.generateMipmap(3553),ct.unbindTexture()},this.copyTextureToTexture3D=function(T,U,X,N,$=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Et=T.max.x-T.min.x+1,Lt=T.max.y-T.min.y+1,Rt=T.max.z-T.min.z+1,It=L.convert(N.format),Vt=L.convert(N.type);let zt;if(N.isData3DTexture)Z.setTexture3D(N,0),zt=32879;else if(N.isDataArrayTexture)Z.setTexture2DArray(N,0),zt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,N.flipY),V.pixelStorei(37441,N.premultiplyAlpha),V.pixelStorei(3317,N.unpackAlignment);const Ut=V.getParameter(3314),ie=V.getParameter(32878),Re=V.getParameter(3316),vn=V.getParameter(3315),jn=V.getParameter(32877),re=X.isCompressedTexture?X.mipmaps[0]:X.image;V.pixelStorei(3314,re.width),V.pixelStorei(32878,re.height),V.pixelStorei(3316,T.min.x),V.pixelStorei(3315,T.min.y),V.pixelStorei(32877,T.min.z),X.isDataTexture||X.isData3DTexture?V.texSubImage3D(zt,$,U.x,U.y,U.z,Et,Lt,Rt,It,Vt,re.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(zt,$,U.x,U.y,U.z,Et,Lt,Rt,It,re.data)):V.texSubImage3D(zt,$,U.x,U.y,U.z,Et,Lt,Rt,It,Vt,re),V.pixelStorei(3314,Ut),V.pixelStorei(32878,ie),V.pixelStorei(3316,Re),V.pixelStorei(3315,vn),V.pixelStorei(32877,jn),$===0&&N.generateMipmaps&&V.generateMipmap(zt),ct.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Z.setTextureCube(T,0):T.isData3DTexture?Z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Z.setTexture2DArray(T,0):Z.setTexture2D(T,0),ct.unbindTexture()},this.resetState=function(){g=0,b=0,x=null,ct.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class R_ extends vh{}R_.prototype.isWebGL1Renderer=!0;class I_ extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class yh extends hr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const pc=new D,mc=new D,gc=new ee,Ro=new ah,gs=new Us;class O_ extends Ae{constructor(t=new rn,e=new yh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)pc.fromBufferAttribute(e,i-1),mc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=pc.distanceTo(mc);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(i),gs.radius+=r,t.ray.intersectsSphere(gs)===!1)return;gc.copy(i).invert(),Ro.copy(t.ray).applyMatrix4(gc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,h=new D,u=new D,d=new D,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const g=Math.max(0,o.start),b=Math.min(_.count,o.start+o.count);for(let x=g,M=b-1;x<M;x+=m){const y=_.getX(x),E=_.getX(x+1);if(c.fromBufferAttribute(p,y),h.fromBufferAttribute(p,E),Ro.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(d);v<t.near||v>t.far||e.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let x=g,M=b-1;x<M;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),Ro.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const E=t.ray.origin.distanceTo(d);E<t.near||E>t.far||e.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const _c=new D,xc=new D;class F_ extends O_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)_c.fromBufferAttribute(e,i),xc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_c.distanceTo(xc);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,m=(o-h)/d;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new at:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],r=[],o=[],a=new D,l=new ee;for(let m=0;m<=t;m++){const _=m/t;i[m]=this.getTangentAt(_,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ve(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,_))}o[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(ve(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],m*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pa extends _n{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new at,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class N_ extends Pa{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Da(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,m*=h,i(o,a,d,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const _s=new D,Io=new Da,Oo=new Da,Fo=new Da;class z_ extends _n{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(_s.subVectors(i[0],i[1]).add(i[0]),c=_s);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(_s.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=_s),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);f<1e-4&&(f=1),_<1e-4&&(_=f),p<1e-4&&(p=f),Io.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,f,p),Oo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,f,p),Fo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,f,p)}else this.curveType==="catmullrom"&&(Io.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Oo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Fo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Io.calc(l),Oo.calc(l),Fo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vc(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function U_(s,t){const e=1-s;return e*e*t}function k_(s,t){return 2*(1-s)*s*t}function B_(s,t){return s*s*t}function Cr(s,t,e,n){return U_(s,t)+k_(s,e)+B_(s,n)}function V_(s,t){const e=1-s;return e*e*e*t}function G_(s,t){const e=1-s;return 3*e*e*s*t}function H_(s,t){return 3*(1-s)*s*s*t}function W_(s,t){return s*s*s*t}function Lr(s,t,e,n,i){return V_(s,t)+G_(s,e)+H_(s,n)+W_(s,i)}class bh extends _n{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lr(t,i.x,r.x,o.x,a.x),Lr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class X_ extends _n{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lr(t,i.x,r.x,o.x,a.x),Lr(t,i.y,r.y,o.y,a.y),Lr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ra extends _n{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new at;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class q_ extends _n{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mh extends _n{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Cr(t,i.x,r.x,o.x),Cr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $_ extends _n{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Cr(t,i.x,r.x,o.x),Cr(t,i.y,r.y,o.y),Cr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sh extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(vc(a,l.x,c.x,h.x,u.x),vc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new at().fromArray(i))}return this}}var wh=Object.freeze({__proto__:null,ArcCurve:N_,CatmullRomCurve3:z_,CubicBezierCurve:bh,CubicBezierCurve3:X_,EllipseCurve:Pa,LineCurve:Ra,LineCurve3:q_,QuadraticBezierCurve:Mh,QuadraticBezierCurve3:$_,SplineCurve:Sh});class Y_ extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Ra(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new wh[i.type]().fromJSON(i))}return this}}class oa extends Y_{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ra(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Mh(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new bh(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Sh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Pa(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ss extends oa{constructor(t){super(t),this.uuid=cr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new oa().fromJSON(i))}return this}}const j_={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Th(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,m;if(n&&(r=t0(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let _=e;_<i;_+=e)u=s[_],d=s[_+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return zr(r,o,e,a,l,m,0),o}};function Th(s,t,e,n,i){let r,o;if(i===u0(s,t,e,n)>0)for(r=t;r<e;r+=n)o=yc(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=yc(r,s[r],s[r+1],o);return o&&Gs(o,o.next)&&(kr(o),o=o.next),o}function yi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Gs(e,e.next)||Kt(e.prev,e,e.next)===0)){if(kr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&s0(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?J_(s,n,i,r):Z_(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),kr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=K_(yi(s),t,e),zr(s,t,e,n,i,r,2)):o===2&&Q_(s,t,e,n,i,r):zr(yi(s),t,e,n,i,r,1);break}}}function Z_(s){const t=s.prev,e=s,n=s.next;if(Kt(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=m&&Hi(i,a,r,l,o,c,_.x,_.y)&&Kt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function J_(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Kt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,m=a<l?a<c?a:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,f=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,g=aa(m,_,t,e,n),b=aa(f,p,t,e,n);let x=s.prevZ,M=s.nextZ;for(;x&&x.z>=g&&M&&M.z<=b;){if(x.x>=m&&x.x<=f&&x.y>=_&&x.y<=p&&x!==i&&x!==o&&Hi(a,h,l,u,c,d,x.x,x.y)&&Kt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=m&&M.x<=f&&M.y>=_&&M.y<=p&&M!==i&&M!==o&&Hi(a,h,l,u,c,d,M.x,M.y)&&Kt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=g;){if(x.x>=m&&x.x<=f&&x.y>=_&&x.y<=p&&x!==i&&x!==o&&Hi(a,h,l,u,c,d,x.x,x.y)&&Kt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=b;){if(M.x>=m&&M.x<=f&&M.y>=_&&M.y<=p&&M!==i&&M!==o&&Hi(a,h,l,u,c,d,M.x,M.y)&&Kt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function K_(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Gs(i,r)&&Eh(i,n,n.next,r)&&Ur(i,r)&&Ur(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),kr(n),kr(n.next),n=s=r),n=n.next}while(n!==s);return yi(n)}function Q_(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&l0(o,a)){let l=Ah(o,a);o=yi(o,o.next),l=yi(l,l.next),zr(o,t,e,n,i,r,0),zr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function t0(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Th(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(a0(c));for(i.sort(e0),r=0;r<i.length;r++)e=n0(i[r],e);return e}function e0(s,t){return s.x-t.x}function n0(s,t){const e=i0(s,t);if(!e)return t;const n=Ah(e,s);return yi(n,n.next),yi(e,e.next)}function i0(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Hi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ur(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&r0(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function r0(s,t){return Kt(s.prev,s,t.prev)<0&&Kt(t.next,s,s.next)<0}function s0(s,t,e,n){let i=s;do i.z===0&&(i.z=aa(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,o0(i)}function o0(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function aa(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function a0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Hi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function l0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!c0(s,t)&&(Ur(s,t)&&Ur(t,s)&&h0(s,t)&&(Kt(s.prev,s,t.prev)||Kt(s,t.prev,t))||Gs(s,t)&&Kt(s.prev,s,s.next)>0&&Kt(t.prev,t,t.next)>0)}function Kt(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Gs(s,t){return s.x===t.x&&s.y===t.y}function Eh(s,t,e,n){const i=vs(Kt(s,t,e)),r=vs(Kt(s,t,n)),o=vs(Kt(e,n,s)),a=vs(Kt(e,n,t));return!!(i!==r&&o!==a||i===0&&xs(s,e,t)||r===0&&xs(s,n,t)||o===0&&xs(e,s,n)||a===0&&xs(e,t,n))}function xs(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function vs(s){return s>0?1:s<0?-1:0}function c0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Eh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ur(s,t){return Kt(s.prev,s,s.next)<0?Kt(s,t,s.next)>=0&&Kt(s,s.prev,t)>=0:Kt(s,t,s.prev)<0||Kt(s,s.next,t)<0}function h0(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Ah(s,t){const e=new la(s.i,s.x,s.y),n=new la(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yc(s,t,e,n){const i=new la(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function kr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function la(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function u0(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Yi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Yi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];bc(t),Mc(n,t);let o=t.length;e.forEach(bc);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Mc(n,e[l]);const a=j_.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function bc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Mc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ia extends rn{constructor(t=new Ss([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ce(i,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:m-.1,f=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:d0;let x,M=!1,y,E,C,v;g&&(x=g.getSpacedPoints(h),M=!0,d=!1,y=g.computeFrenetFrames(h,!1),E=new D,C=new D,v=new D),d||(p=0,m=0,_=0,f=0);const S=a.extractPoints(c);let P=S.shape;const z=S.holes;if(!Yi.isClockWise(P)){P=P.reverse();for(let K=0,Z=z.length;K<Z;K++){const ot=z[K];Yi.isClockWise(ot)&&(z[K]=ot.reverse())}}const O=Yi.triangulateShape(P,z),R=P;for(let K=0,Z=z.length;K<Z;K++){const ot=z[K];P=P.concat(ot)}function B(K,Z,ot){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(ot).add(K)}const q=P.length,Y=O.length;function H(K,Z,ot){let _t,lt,Ct;const Tt=K.x-Z.x,wt=K.y-Z.y,Wt=ot.x-K.x,Bt=ot.y-K.y,A=Tt*Tt+wt*wt,w=Tt*Bt-wt*Wt;if(Math.abs(w)>Number.EPSILON){const G=Math.sqrt(A),et=Math.sqrt(Wt*Wt+Bt*Bt),st=Z.x-wt/G,dt=Z.y+Tt/G,At=ot.x-Bt/et,L=ot.y+Wt/et,F=((At-st)*Bt-(L-dt)*Wt)/(Tt*Bt-wt*Wt);_t=st+Tt*F-K.x,lt=dt+wt*F-K.y;const ft=_t*_t+lt*lt;if(ft<=2)return new at(_t,lt);Ct=Math.sqrt(ft/2)}else{let G=!1;Tt>Number.EPSILON?Wt>Number.EPSILON&&(G=!0):Tt<-Number.EPSILON?Wt<-Number.EPSILON&&(G=!0):Math.sign(wt)===Math.sign(Bt)&&(G=!0),G?(_t=-wt,lt=Tt,Ct=Math.sqrt(A)):(_t=Tt,lt=wt,Ct=Math.sqrt(A/2))}return new at(_t/Ct,lt/Ct)}const Q=[];for(let K=0,Z=R.length,ot=Z-1,_t=K+1;K<Z;K++,ot++,_t++)ot===Z&&(ot=0),_t===Z&&(_t=0),Q[K]=H(R[K],R[ot],R[_t]);const tt=[];let ut,k=Q.concat();for(let K=0,Z=z.length;K<Z;K++){const ot=z[K];ut=[];for(let _t=0,lt=ot.length,Ct=lt-1,Tt=_t+1;_t<lt;_t++,Ct++,Tt++)Ct===lt&&(Ct=0),Tt===lt&&(Tt=0),ut[_t]=H(ot[_t],ot[Ct],ot[Tt]);tt.push(ut),k=k.concat(ut)}for(let K=0;K<p;K++){const Z=K/p,ot=m*Math.cos(Z*Math.PI/2),_t=_*Math.sin(Z*Math.PI/2)+f;for(let lt=0,Ct=R.length;lt<Ct;lt++){const Tt=B(R[lt],Q[lt],_t);St(Tt.x,Tt.y,-ot)}for(let lt=0,Ct=z.length;lt<Ct;lt++){const Tt=z[lt];ut=tt[lt];for(let wt=0,Wt=Tt.length;wt<Wt;wt++){const Bt=B(Tt[wt],ut[wt],_t);St(Bt.x,Bt.y,-ot)}}}const j=_+f;for(let K=0;K<q;K++){const Z=d?B(P[K],k[K],j):P[K];M?(C.copy(y.normals[0]).multiplyScalar(Z.x),E.copy(y.binormals[0]).multiplyScalar(Z.y),v.copy(x[0]).add(C).add(E),St(v.x,v.y,v.z)):St(Z.x,Z.y,0)}for(let K=1;K<=h;K++)for(let Z=0;Z<q;Z++){const ot=d?B(P[Z],k[Z],j):P[Z];M?(C.copy(y.normals[K]).multiplyScalar(ot.x),E.copy(y.binormals[K]).multiplyScalar(ot.y),v.copy(x[K]).add(C).add(E),St(v.x,v.y,v.z)):St(ot.x,ot.y,u/h*K)}for(let K=p-1;K>=0;K--){const Z=K/p,ot=m*Math.cos(Z*Math.PI/2),_t=_*Math.sin(Z*Math.PI/2)+f;for(let lt=0,Ct=R.length;lt<Ct;lt++){const Tt=B(R[lt],Q[lt],_t);St(Tt.x,Tt.y,u+ot)}for(let lt=0,Ct=z.length;lt<Ct;lt++){const Tt=z[lt];ut=tt[lt];for(let wt=0,Wt=Tt.length;wt<Wt;wt++){const Bt=B(Tt[wt],ut[wt],_t);M?St(Bt.x,Bt.y+x[h-1].y,x[h-1].x+ot):St(Bt.x,Bt.y,u+ot)}}}it(),rt();function it(){const K=i.length/3;if(d){let Z=0,ot=q*Z;for(let _t=0;_t<Y;_t++){const lt=O[_t];xt(lt[2]+ot,lt[1]+ot,lt[0]+ot)}Z=h+p*2,ot=q*Z;for(let _t=0;_t<Y;_t++){const lt=O[_t];xt(lt[0]+ot,lt[1]+ot,lt[2]+ot)}}else{for(let Z=0;Z<Y;Z++){const ot=O[Z];xt(ot[2],ot[1],ot[0])}for(let Z=0;Z<Y;Z++){const ot=O[Z];xt(ot[0]+q*h,ot[1]+q*h,ot[2]+q*h)}}n.addGroup(K,i.length/3-K,0)}function rt(){const K=i.length/3;let Z=0;V(R,Z),Z+=R.length;for(let ot=0,_t=z.length;ot<_t;ot++){const lt=z[ot];V(lt,Z),Z+=lt.length}n.addGroup(K,i.length/3-K,1)}function V(K,Z){let ot=K.length;for(;--ot>=0;){const _t=ot;let lt=ot-1;lt<0&&(lt=K.length-1);for(let Ct=0,Tt=h+p*2;Ct<Tt;Ct++){const wt=q*Ct,Wt=q*(Ct+1),Bt=Z+_t+wt,A=Z+lt+wt,w=Z+lt+Wt,G=Z+_t+Wt;vt(Bt,A,w,G)}}}function St(K,Z,ot){l.push(K),l.push(Z),l.push(ot)}function xt(K,Z,ot){ct(K),ct(Z),ct(ot);const _t=i.length/3,lt=b.generateTopUV(n,i,_t-3,_t-2,_t-1);Pt(lt[0]),Pt(lt[1]),Pt(lt[2])}function vt(K,Z,ot,_t){ct(K),ct(Z),ct(_t),ct(Z),ct(ot),ct(_t);const lt=i.length/3,Ct=b.generateSideWallUV(n,i,lt-6,lt-3,lt-2,lt-1);Pt(Ct[0]),Pt(Ct[1]),Pt(Ct[3]),Pt(Ct[1]),Pt(Ct[2]),Pt(Ct[3])}function ct(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function Pt(K){r.push(K.x),r.push(K.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return f0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new wh[i.type]().fromJSON(i)),new Ia(n,t.options)}}const d0={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new at(r,o),new at(a,l),new at(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],m=t[i*3+1],_=t[i*3+2],f=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new at(o,1-l),new at(c,1-u),new at(d,1-_),new at(f,1-g)]:[new at(a,1-l),new at(h,1-u),new at(m,1-_),new at(p,1-g)]}};function f0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Oa extends rn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,m=[],_=[],f=[],p=[];for(let g=0;g<=n;g++){const b=[],x=g/n;let M=0;g==0&&o==0?M=.5/e:g==n&&l==Math.PI&&(M=-.5/e);for(let y=0;y<=e;y++){const E=y/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+x*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),f.push(d.x,d.y,d.z),p.push(E+M,1-x),b.push(c++)}h.push(b)}for(let g=0;g<n;g++)for(let b=0;b<e;b++){const x=h[g][b+1],M=h[g][b],y=h[g+1][b],E=h[g+1][b+1];(g!==0||o>0)&&m.push(x,M,E),(g!==n-1||l<Math.PI)&&m.push(M,y,E)}this.setIndex(m),this.setAttribute("position",new ce(_,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(p,2))}static fromJSON(t){return new Oa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fa extends rn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new D,u=new D,d=new D;for(let m=0;m<=n;m++)for(let _=0;_<=i;_++){const f=_/i*r,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(f),u.y=(t+e*Math.cos(p))*Math.sin(f),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(f),h.y=t*Math.sin(f),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=i;_++){const f=(i+1)*m+_-1,p=(i+1)*(m-1)+_-1,g=(i+1)*(m-1)+_,b=(i+1)*m+_;o.push(f,p,b),o.push(p,g,b)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}static fromJSON(t){return new Fa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class p0 extends hr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const As={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ch{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const m0=new Ch;class Hs{constructor(t){this.manager=t!==void 0?t:m0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Tn={};class g0 extends Error{constructor(t,e){super(t),this.response=e}}class _0 extends Hs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=As.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Tn[t]!==void 0){Tn[t].push({onLoad:e,onProgress:n,onError:i});return}Tn[t]=[],Tn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Tn[t],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,_=m!==0;let f=0;const p=new ReadableStream({start(g){b();function b(){u.read().then(({done:x,value:M})=>{if(x)g.close();else{f+=M.byteLength;const y=new ProgressEvent("progress",{lengthComputable:_,loaded:f,total:m});for(let E=0,C=h.length;E<C;E++){const v=h[E];v.onProgress&&v.onProgress(y)}g.enqueue(M),b()}})}}});return new Response(p)}else throw new g0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{As.add(t,c);const h=Tn[t];delete Tn[t];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=Tn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Tn[t];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class x0 extends Hs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=As.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Nr("img");function l(){h(),As.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class v0 extends Hs{constructor(t){super(t)}load(t,e,n,i){const r=new Aa,o=new x0(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class Lh extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const No=new ee,Sc=new D,wc=new D;class y0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wc),e.updateMatrixWorld(),No.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(No)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tc=new ee,Mr=new D,zo=new D;class b0 extends y0{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Mr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Mr),zo.copy(n.position),zo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(zo),n.updateMatrixWorld(),i.makeTranslation(-Mr.x,-Mr.y,-Mr.z),Tc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc)}}class M0 extends Lh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new b0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class S0 extends Lh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class w0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ec(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ec();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ec(){return(typeof performance>"u"?Date:performance).now()}class Ac{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class T0 extends F_{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new rn;i.setAttribute("position",new ce(e,3)),i.setAttribute("color",new ce(n,3));const r=new yh({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new Ht,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class E0{constructor(){this.type="ShapePath",this.color=new Ht,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new oa,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(g){const b=[];for(let x=0,M=g.length;x<M;x++){const y=g[x],E=new Ss;E.curves=y.curves,b.push(E)}return b}function n(g,b){const x=b.length;let M=!1;for(let y=x-1,E=0;E<x;y=E++){let C=b[y],v=b[E],S=v.x-C.x,P=v.y-C.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(C=b[E],S=-S,v=b[y],P=-P),g.y<C.y||g.y>v.y)continue;if(g.y===C.y){if(g.x===C.x)return!0}else{const z=P*(g.x-C.x)-S*(g.y-C.y);if(z===0)return!0;if(z<0)continue;M=!M}}else{if(g.y!==C.y)continue;if(v.x<=g.x&&g.x<=C.x||C.x<=g.x&&g.x<=v.x)return!0}}return M}const i=Yi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Ss,l.curves=a.curves,c.push(l),c;let h=!i(r[0].getPoints());h=t?!h:h;const u=[],d=[];let m=[],_=0,f;d[_]=void 0,m[_]=[];for(let g=0,b=r.length;g<b;g++)a=r[g],f=a.getPoints(),o=i(f),o=t?!o:o,o?(!h&&d[_]&&_++,d[_]={s:new Ss,p:f},d[_].s.curves=a.curves,h&&_++,m[_]=[]):m[_].push({h:a,p:f[0]});if(!d[0])return e(r);if(d.length>1){let g=!1,b=0;for(let x=0,M=d.length;x<M;x++)u[x]=[];for(let x=0,M=d.length;x<M;x++){const y=m[x];for(let E=0;E<y.length;E++){const C=y[E];let v=!0;for(let S=0;S<d.length;S++)n(C.p,d[S].p)&&(x!==S&&b++,v?(v=!1,u[S].push(C)):g=!0);v&&u[x].push(C)}}b>0&&g===!1&&(m=u)}let p;for(let g=0,b=d.length;g<b;g++){l=d[g].s,c.push(l),p=m[g];for(let x=0,M=p.length;x<M;x++)l.holes.push(p[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ea);const A0=new w0;function Ph(s){const{scene:t,camera:e,renderer:n,callback:i}=s,r=A0.getElapsedTime();i(r,t),n.render(t,e),requestAnimationFrame(()=>Ph(s))}function C0({sizes:s,camera:t,renderer:e}){return()=>{s.width=window.innerWidth,s.height=window.innerHeight,t.aspect=s.width/s.height,t.updateProjectionMatrix(),e.setSize(s.width,s.height),e.setPixelRatio(Math.min(window.devicePixelRatio,2))}}function L0({canvas:s}){return()=>document.fullscreenElement?document.exitFullscreen():s.requestFullscreen()}const Cc={type:"change"},Uo={type:"start"},Lc={type:"end"};class P0 extends Mi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Bt),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Cc),n.update(),r=i.NONE},this.update=function(){const L=new D,F=new xi().setFromUnitVectors(t.up,new D(0,1,0)),ft=F.clone().invert(),gt=new D,pt=new xi,bt=2*Math.PI;return function(){const Ot=n.object.position;L.copy(Ot).sub(n.target),L.applyQuaternion(F),a.setFromVector3(L),n.autoRotate&&r===i.NONE&&S(C()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Nt=n.minAzimuthAngle,Xt=n.maxAzimuthAngle;return isFinite(Nt)&&isFinite(Xt)&&(Nt<-Math.PI?Nt+=bt:Nt>Math.PI&&(Nt-=bt),Xt<-Math.PI?Xt+=bt:Xt>Math.PI&&(Xt-=bt),Nt<=Xt?a.theta=Math.max(Nt,Math.min(Xt,a.theta)):a.theta=a.theta>(Nt+Xt)/2?Math.max(Nt,a.theta):Math.min(Xt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),L.setFromSpherical(a),L.applyQuaternion(ft),Ot.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||gt.distanceToSquared(n.object.position)>o||8*(1-pt.dot(n.object.quaternion))>o?(n.dispatchEvent(Cc),gt.copy(n.object.position),pt.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",G),n.domElement.removeEventListener("pointerdown",ot),n.domElement.removeEventListener("pointercancel",Ct),n.domElement.removeEventListener("wheel",Wt),n.domElement.removeEventListener("pointermove",_t),n.domElement.removeEventListener("pointerup",lt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Bt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Ac,l=new Ac;let c=1;const h=new D;let u=!1;const d=new at,m=new at,_=new at,f=new at,p=new at,g=new at,b=new at,x=new at,M=new at,y=[],E={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function S(L){l.theta-=L}function P(L){l.phi-=L}const z=function(){const L=new D;return function(ft,gt){L.setFromMatrixColumn(gt,0),L.multiplyScalar(-ft),h.add(L)}}(),J=function(){const L=new D;return function(ft,gt){n.screenSpacePanning===!0?L.setFromMatrixColumn(gt,1):(L.setFromMatrixColumn(gt,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ft),h.add(L)}}(),O=function(){const L=new D;return function(ft,gt){const pt=n.domElement;if(n.object.isPerspectiveCamera){const bt=n.object.position;L.copy(bt).sub(n.target);let yt=L.length();yt*=Math.tan(n.object.fov/2*Math.PI/180),z(2*ft*yt/pt.clientHeight,n.object.matrix),J(2*gt*yt/pt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(ft*(n.object.right-n.object.left)/n.object.zoom/pt.clientWidth,n.object.matrix),J(gt*(n.object.top-n.object.bottom)/n.object.zoom/pt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(L){d.set(L.clientX,L.clientY)}function Y(L){b.set(L.clientX,L.clientY)}function H(L){f.set(L.clientX,L.clientY)}function Q(L){m.set(L.clientX,L.clientY),_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const F=n.domElement;S(2*Math.PI*_.x/F.clientHeight),P(2*Math.PI*_.y/F.clientHeight),d.copy(m),n.update()}function tt(L){x.set(L.clientX,L.clientY),M.subVectors(x,b),M.y>0?R(v()):M.y<0&&B(v()),b.copy(x),n.update()}function ut(L){p.set(L.clientX,L.clientY),g.subVectors(p,f).multiplyScalar(n.panSpeed),O(g.x,g.y),f.copy(p),n.update()}function k(L){L.deltaY<0?B(v()):L.deltaY>0&&R(v()),n.update()}function j(L){let F=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),F=!0;break}F&&(L.preventDefault(),n.update())}function it(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const L=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);d.set(L,F)}}function rt(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const L=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);f.set(L,F)}}function V(){const L=y[0].pageX-y[1].pageX,F=y[0].pageY-y[1].pageY,ft=Math.sqrt(L*L+F*F);b.set(0,ft)}function St(){n.enableZoom&&V(),n.enablePan&&rt()}function xt(){n.enableZoom&&V(),n.enableRotate&&it()}function vt(L){if(y.length==1)m.set(L.pageX,L.pageY);else{const ft=At(L),gt=.5*(L.pageX+ft.x),pt=.5*(L.pageY+ft.y);m.set(gt,pt)}_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const F=n.domElement;S(2*Math.PI*_.x/F.clientHeight),P(2*Math.PI*_.y/F.clientHeight),d.copy(m)}function ct(L){if(y.length===1)p.set(L.pageX,L.pageY);else{const F=At(L),ft=.5*(L.pageX+F.x),gt=.5*(L.pageY+F.y);p.set(ft,gt)}g.subVectors(p,f).multiplyScalar(n.panSpeed),O(g.x,g.y),f.copy(p)}function Pt(L){const F=At(L),ft=L.pageX-F.x,gt=L.pageY-F.y,pt=Math.sqrt(ft*ft+gt*gt);x.set(0,pt),M.set(0,Math.pow(x.y/b.y,n.zoomSpeed)),R(M.y),b.copy(x)}function K(L){n.enableZoom&&Pt(L),n.enablePan&&ct(L)}function Z(L){n.enableZoom&&Pt(L),n.enableRotate&&vt(L)}function ot(L){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",_t),n.domElement.addEventListener("pointerup",lt)),et(L),L.pointerType==="touch"?A(L):Tt(L))}function _t(L){n.enabled!==!1&&(L.pointerType==="touch"?w(L):wt(L))}function lt(L){st(L),y.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",_t),n.domElement.removeEventListener("pointerup",lt)),n.dispatchEvent(Lc),r=i.NONE}function Ct(L){st(L)}function Tt(L){let F;switch(L.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case wi.DOLLY:if(n.enableZoom===!1)return;Y(L),r=i.DOLLY;break;case wi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;H(L),r=i.PAN}else{if(n.enableRotate===!1)return;q(L),r=i.ROTATE}break;case wi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;q(L),r=i.ROTATE}else{if(n.enablePan===!1)return;H(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Uo)}function wt(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Q(L);break;case i.DOLLY:if(n.enableZoom===!1)return;tt(L);break;case i.PAN:if(n.enablePan===!1)return;ut(L);break}}function Wt(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent(Uo),k(L),n.dispatchEvent(Lc))}function Bt(L){n.enabled===!1||n.enablePan===!1||j(L)}function A(L){switch(dt(L),y.length){case 1:switch(n.touches.ONE){case Ti.ROTATE:if(n.enableRotate===!1)return;it(),r=i.TOUCH_ROTATE;break;case Ti.PAN:if(n.enablePan===!1)return;rt(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ti.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;St(),r=i.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Uo)}function w(L){switch(dt(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;vt(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ct(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;K(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Z(L),n.update();break;default:r=i.NONE}}function G(L){n.enabled!==!1&&L.preventDefault()}function et(L){y.push(L)}function st(L){delete E[L.pointerId];for(let F=0;F<y.length;F++)if(y[F].pointerId==L.pointerId){y.splice(F,1);return}}function dt(L){let F=E[L.pointerId];F===void 0&&(F=new at,E[L.pointerId]=F),F.set(L.pageX,L.pageY)}function At(L){const F=L.pointerId===y[0].pointerId?y[1]:y[0];return E[F.pointerId]}n.domElement.addEventListener("contextmenu",G),n.domElement.addEventListener("pointerdown",ot),n.domElement.addEventListener("pointercancel",Ct),n.domElement.addEventListener("wheel",Wt,{passive:!1}),this.update()}}function D0({camera:s,canvas:t}){const e=new P0(s,t);return e.enableDamping=!0,e}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class pn{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),pn.nextNameID=pn.nextNameID||0,this.$name.id=`lil-gui-name-${++pn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class R0 extends pn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ca(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const I0={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:ca,toHexString:ca},Br={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},O0={isPrimitive:!1,match:Array.isArray,fromHexString(s,t,e=1){const n=Br.fromHexString(s);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([s,t,e],n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return Br.toHexString(i)}},F0={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const n=Br.fromHexString(s);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:s,g:t,b:e},n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return Br.toHexString(i)}},N0=[I0,Br,O0,F0];function z0(s){return N0.find(t=>t.match(s))}class U0 extends pn{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=z0(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=ca(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ko extends pn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class k0 extends pn{constructor(t,e,n,i,r,o){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},e=g=>{const b=parseFloat(this.$input.value);isNaN(b)||(this._snapClampSetValue(b+g),this.$input.value=this.getValue())},n=g=>{g.code==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),e(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),e(this._step*this._arrowKeyMultiplier(g)*-1))},i=g=>{this._inputFocused&&(g.preventDefault(),e(this._step*this._normalizeMouseWheel(g)))};let r=!1,o,a,l,c,h;const u=5,d=g=>{o=g.clientX,a=l=g.clientY,r=!0,c=this.getValue(),h=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)},m=g=>{if(r){const b=g.clientX-o,x=g.clientY-a;Math.abs(x)>u?(g.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(b)>u&&_()}if(!r){const b=g.clientY-l;h-=b*this._step*this._arrowKeyMultiplier(g),c+h>this._max?h=this._max-c:c+h<this._min&&(h=this._min-c),this._snapClampSetValue(c+h)}l=g.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)},f=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(g,b,x,M,y)=>(g-b)/(x-b)*(y-M)+M,e=g=>{const b=this.$slider.getBoundingClientRect();let x=t(g,b.left,b.right,this._min,this._max);this._snapClampSetValue(x)},n=g=>{this._setDraggingStyle(!0),e(g.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=g=>{e(g.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=g=>{g.preventDefault(),this._setDraggingStyle(!0),e(g.touches[0].clientX),o=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(a=g.touches[0].clientX,l=g.touches[0].clientY,o=!0):c(g),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=g=>{if(o){const b=g.touches[0].clientX-a,x=g.touches[0].clientY-l;Math.abs(b)>Math.abs(x)?c(g):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else g.preventDefault(),e(g.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},m=this._callOnFinishChange.bind(this),_=400;let f;const p=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const x=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(f),f=setTimeout(m,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class B0 extends pn{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class V0 extends pn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const G0=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function H0(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Pc=!1;class Na{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Pc&&o&&(H0(G0),Pc=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(t,e,n,i,r){if(Object(n)===n)return new B0(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new k0(this,t,e,n,i,r);case"boolean":return new R0(this,t,e);case"string":return new V0(this,t,e);case"function":return new ko(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new U0(this,t,e,n)}addFolder(t){return new Na({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof ko||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ko)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Ws=new Na({title:"Basics"});function W0(s,t,e,n){e.forEach(i=>s.add(t,i).min(n.min).max(n.max).step(n.step))}const X0=["position","rotation","scale"],Bo={position:{min:-3,max:3,step:.01},rotation:{min:0,max:2*Math.PI,step:.1},scale:{min:0,max:6,step:.1}};function q0({mesh:s,name:t,position:e=Bo.position,rotation:n=Bo.rotation,scale:i=Bo.scale,callbacks:r}){const o={position:e,rotation:n,scale:i},a=Ws.addFolder(t),l=a.addFolder("callbacks");r!==void 0&&Object.keys(r).forEach(c=>l.add(r,c)),a.add(s,"visible"),X0.forEach(c=>W0(a.addFolder(c),s[c],["x","y","z"],o[c]))}const Cs={y:.1,x:.15};Ws.add(Cs,"x",0,1,.1).name("rotationX");Ws.add(Cs,"y",0,1,.1).name("rotationY");function $0({controls:s}){return(t,e)=>{e.children.filter(o=>o.type==="Mesh").filter(o=>o.name!=="text").forEach(o=>{o.rotation.y=Cs.y*t*2*Math.PI,o.rotation.x=Cs.x*t*2*Math.PI});const i=e.getObjectByName("text");if(!i)throw new Error("text not found");const r=Math.pow(Math.sin(t*2*Math.PI/3),2)*.5+.5;i.scale.set(r,r,r),i.rotation.y=t*2*Math.PI/3,s.update()}}class Y0 extends Hs{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new _0(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=r.parse(JSON.parse(a));e&&e(l)},n,i)}parse(t){return new j0(t)}}class j0{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=Z0(t,e,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function Z0(s,t,e){const n=Array.from(s),i=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=r;else{const u=J0(h,i,a,l,e);a+=u.offsetX,o.push(u.path)}}return o}function J0(s,t,e,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new E0;let a,l,c,h,u,d,m,_;if(r.o){const f=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,g=f.length;p<g;)switch(f[p++]){case"m":a=f[p++]*t+e,l=f[p++]*t+n,o.moveTo(a,l);break;case"l":a=f[p++]*t+e,l=f[p++]*t+n,o.lineTo(a,l);break;case"q":c=f[p++]*t+e,h=f[p++]*t+n,u=f[p++]*t+e,d=f[p++]*t+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=f[p++]*t+e,h=f[p++]*t+n,u=f[p++]*t+e,d=f[p++]*t+n,m=f[p++]*t+e,_=f[p++]*t+n,o.bezierCurveTo(u,d,m,_,c,h);break}}return{offsetX:r.ha*t,path:o}}const dr=new Ch;let Dh;dr.onStart=(s,t,e)=>{Dh=new Date().getTime(),console.log(`Started loading file: ${s}. Loaded ${t} of ${e} files.`)};dr.onLoad=()=>{console.log("Loading complete!"),console.log("Loaded on",new Date().getTime()-Dh,"ms")};dr.onProgress=(s,t,e)=>{console.log(`Loading file: ${s}. Loaded ${t} of ${e} files.`)};const ha={helvetiker:null},K0=new Y0(dr);K0.load("fonts/helvetiker_regular.typeface.json",s=>{ha.helvetiker=s});class Q0 extends Ia{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}const tx=(s,t)=>{const e=new Q0(s,{font:t,size:.5,height:.2,curveSegments:5,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:4});return ex(e),e};function ex(s){if(s.computeBoundingBox(),!s.boundingBox)throw new Error("geometry.boundingBox is null");const t=-.5*(s.boundingBox.max.x-s.boundingBox.min.x);s.translate(t,0,0)}const nx=new v0(dr),ix=new Array(4).fill(null).map((s,t)=>nx.load([`textures/environmentMaps/${t}/px.jpg`,`textures/environmentMaps/${t}/nx.jpg`,`textures/environmentMaps/${t}/py.jpg`,`textures/environmentMaps/${t}/ny.jpg`,`textures/environmentMaps/${t}/pz.jpg`,`textures/environmentMaps/${t}/nz.jpg`])),fr=new p0;fr.metalness=.7;fr.roughness=.2;const Rh=Ws.addFolder("Material with Environment");Rh.add(fr,"metalness").min(0).max(1).step(1e-4);Rh.add(fr,"roughness").min(0).max(1).step(1e-4);fr.envMap=ix[0];function Vo(s){return s.array!==void 0}function rx(){const s=fr,t=new Ke(new Oa(.5,64,64),s);t.position.x=-1.5;const e=t.geometry.attributes.uv;if(!Vo(e))throw new Error("sphereUV is a GLBufferAttribute");t.geometry.setAttribute("uv2",new He(e.array,2));const n=new Ke(new Bs(1,1,100,100),s),i=n.geometry.attributes.uv;if(!Vo(i))throw new Error("planeUV is a GLBufferAttribute");n.geometry.setAttribute("uv2",new He(i.array,2));const r=new Ke(new Fa(.3,.2,64,128),s),o=r.geometry.attributes.uv;if(!Vo(o))throw new Error("torusUV is a GLBufferAttribute");if(r.position.x=1.5,r.geometry.setAttribute("uv2",new He(o.array,2)),!ha.helvetiker)throw new Error("helvetiker font is not loaded");const a=new Ke(tx("Hello There",ha.helvetiker),s);return a.position.y=1,a.name="text",{sphere:t,plane:n,torus:r,text:a}}function sx({sizes:s}){const t=new Ue(75,s.width/s.height,1,1e3);return t.position.z=2,t}function En(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ih(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var We={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},nr={duration:.5,overwrite:!1,delay:0},za,be,oe,Qe=1e8,$t=1/Qe,ua=Math.PI*2,ox=ua/4,ax=0,Oh=Math.sqrt,lx=Math.cos,cx=Math.sin,me=function(t){return typeof t=="string"},te=function(t){return typeof t=="function"},Dn=function(t){return typeof t=="number"},Ua=function(t){return typeof t>"u"},gn=function(t){return typeof t=="object"},Le=function(t){return t!==!1},Fh=function(){return typeof window<"u"},ys=function(t){return te(t)||me(t)},Nh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Me=Array.isArray,da=/(?:-?\.?\d|\.)+/gi,zh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Wi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Go=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Uh=/[+-]=-?[.\d]+/,kh=/[^,'"\[\]\s]+/gi,hx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jt,Ze,fa,ka,Xe={},Ls={},Bh,Vh=function(t){return(Ls=bi(t,Xe))&&qe},Ba=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ps=function(t,e){return!e&&console.warn(t)},Gh=function(t,e){return t&&(Xe[t]=e)&&Ls&&(Ls[t]=e)||Xe},Vr=function(){return 0},ux={suppressEvents:!0,isStart:!0,kill:!1},ws={suppressEvents:!0,kill:!1},dx={suppressEvents:!0},Va={},Gn=[],pa={},Hh,ze={},Ho={},Dc=30,Ts=[],Ga="",Ha=function(t){var e=t[0],n,i;if(gn(e)||te(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ts.length;i--&&!Ts[i].targetTest(e););n=Ts[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new uu(t[i],n)))||t.splice(i,1);return t},di=function(t){return t._gsap||Ha(tn(t))[0]._gsap},Wh=function(t,e,n){return(n=t[e])&&te(n)?t[e]():Ua(n)&&t.getAttribute&&t.getAttribute(e)||n},Pe=function(t,e){return(t=t.split(",")).forEach(e)||t},ne=function(t){return Math.round(t*1e5)/1e5||0},ge=function(t){return Math.round(t*1e7)/1e7||0},ji=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},fx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ds=function(){var t=Gn.length,e=Gn.slice(0),n,i;for(pa={},Gn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Xh=function(t,e,n,i){Gn.length&&!be&&Ds(),t.render(e,n,i||be&&e<0&&(t._initted||t._startAt)),Gn.length&&!be&&Ds()},qh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(kh).length<2?e:me(t)?t.trim():t},$h=function(t){return t},nn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},px=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},bi=function(t,e){for(var n in e)t[n]=e[n];return t},Rc=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=gn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Rs=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Pr=function(t){var e=t.parent||Jt,n=t.keyframes?px(Me(t.keyframes)):nn;if(Le(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},mx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Yh=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Xs=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Xn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},fi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},gx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ma=function(t,e,n,i){return t._startAt&&(be?t._startAt.revert(ws):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},_x=function s(t){return!t||t._ts&&s(t.parent)},Ic=function(t){return t._repeat?ir(t._tTime,t=t.duration()+t._rDelay)*t:0},ir=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Is=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},qs=function(t){return t._end=ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||$t)||0))},$s=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),qs(t),n._dirty||fi(n,t)),t},jh=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Is(t.rawTime(),e),(!e._dur||jr(0,e.totalDuration(),n)-e._tTime>$t)&&e.render(n,!0)),fi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-$t}},fn=function(t,e,n,i){return e.parent&&Xn(e),e._start=ge((Dn(n)?n:n||t!==Jt?je(t,n,e):t._time)+e._delay),e._end=ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Yh(t,e,"_first","_last",t._sort?"_start":0),ga(e)||(t._recent=e),i||jh(t,e),t._ts<0&&$s(t,t._tTime),t},Zh=function(t,e){return(Xe.ScrollTrigger||Ba("scrollTrigger",e))&&Xe.ScrollTrigger.create(e,t)},Jh=function(t,e,n,i,r){if(Xa(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!be&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Hh!==ke.frame)return Gn.push(t),t._lazy=[r,i],1},xx=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},ga=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},vx=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&xx(t)&&!(!t._initted&&ga(t))||(t._ts<0||t._dp._ts<0)&&!ga(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=jr(0,t._tDur,e),h=ir(l,a),t._yoyo&&h&1&&(o=1-o),h!==ir(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||be||i||t._zTime===$t||!e&&t._zTime){if(!t._initted&&Jh(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?$t:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&ma(t,e,n,!0),t._onUpdate&&!n&&en(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&en(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Xn(t,1),!n&&!be&&(en(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},yx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},rr=function(t,e,n,i){var r=t._repeat,o=ge(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:ge(o*(r+1)+t._rDelay*r):o,a>0&&!i&&$s(t,t._tTime=t._tDur*a),t.parent&&qs(t),n||fi(t.parent,t),t},Oc=function(t){return t instanceof Ce?fi(t):rr(t,t._dur)},bx={_start:0,endTime:Vr,totalDuration:Vr},je=function s(t,e,n){var i=t.labels,r=t._recent||bx,o=t.duration()>=Qe?r.endTime(!1):t._dur,a,l,c;return me(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Me(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Dr=function(t,e,n){var i=Dn(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Le(l.vars.inherit)&&l.parent;o.immediateRender=Le(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new le(e[0],o,e[r+1])},$n=function(t,e){return t||t===0?e(t):e},jr=function(t,e,n){return n<t?t:n>e?e:n},ye=function(t,e){return!me(t)||!(e=hx.exec(t))?"":e[1]},Mx=function(t,e,n){return $n(n,function(i){return jr(t,e,i)})},_a=[].slice,Kh=function(t,e){return t&&gn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&gn(t[0]))&&!t.nodeType&&t!==Ze},Sx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return me(i)&&!e||Kh(i,1)?(r=n).push.apply(r,tn(i)):n.push(i)})||n},tn=function(t,e,n){return oe&&!e&&oe.selector?oe.selector(t):me(t)&&!n&&(fa||!sr())?_a.call((e||ka).querySelectorAll(t),0):Me(t)?Sx(t,n):Kh(t)?_a.call(t,0):t?[t]:[]},xa=function(t){return t=tn(t)[0]||Ps("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return tn(e,n.querySelectorAll?n:n===t?Ps("Invalid scope")||ka.createElement("div"):t)}},Qh=function(t){return t.sort(function(){return .5-Math.random()})},tu=function(t){if(te(t))return t;var e=gn(t)?t:{each:t},n=pi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return me(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,m,_){var f=(_||e).length,p=o[f],g,b,x,M,y,E,C,v,S;if(!p){if(S=e.grid==="auto"?0:(e.grid||[1,Qe])[1],!S){for(C=-Qe;C<(C=_[S++].getBoundingClientRect().left)&&S<f;);S--}for(p=o[f]=[],g=l?Math.min(S,f)*h-.5:i%S,b=S===Qe?0:l?f*u/S-.5:i/S|0,C=0,v=Qe,E=0;E<f;E++)x=E%S-g,M=b-(E/S|0),p[E]=y=c?Math.abs(c==="y"?M:x):Oh(x*x+M*M),y>C&&(C=y),y<v&&(v=y);i==="random"&&Qh(p),p.max=C-v,p.min=v,p.v=f=(parseFloat(e.amount)||parseFloat(e.each)*(S>f?f-1:c?c==="y"?f/S:S:Math.max(S,f/S))||0)*(i==="edges"?-1:1),p.b=f<0?r-f:r,p.u=ye(e.amount||e.each)||0,n=n&&f<0?lu(n):n}return f=(p[d]-p.min)/p.max||0,ge(p.b+(n?n(f):f)*p.v)+p.u}},va=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ge(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Dn(n)?0:ye(n))}},eu=function(t,e){var n=Me(t),i,r;return!n&&gn(t)&&(i=n=t.radius||Qe,t.values?(t=tn(t.values),(r=!Dn(t[0]))&&(i*=i)):t=va(t.increment)),$n(e,n?te(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Qe,h=0,u=t.length,d,m;u--;)r?(d=t[u].x-a,m=t[u].y-l,d=d*d+m*m):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,r||h===o||Dn(o)?h:h+ye(o)}:va(t))},nu=function(t,e,n,i){return $n(Me(t)?!e:n===!0?!!(n=0):!i,function(){return Me(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},wx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Tx=function(t,e){return function(n){return t(parseFloat(n))+(e||ye(n))}},Ex=function(t,e,n){return ru(t,e,0,1,n)},iu=function(t,e,n){return $n(n,function(i){return t[~~e(i)]})},Ax=function s(t,e,n){var i=e-t;return Me(t)?iu(t,s(0,t.length),e):$n(n,function(r){return(i+(r-t)%i)%i+t})},Cx=function s(t,e,n){var i=e-t,r=i*2;return Me(t)?iu(t,s(0,t.length-1),e):$n(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Gr=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?kh:da),n+=t.substr(e,i-e)+nu(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},ru=function(t,e,n,i,r){var o=e-t,a=i-n;return $n(r,function(l){return n+((l-t)/o*a||0)})},Lx=function s(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var o=me(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Me(t)&&!Me(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var f=Math.min(d,~~_);return h[f](_-f)},n=e}else i||(t=bi(Me(t)?[]:{},t));if(!h){for(l in e)Wa.call(a,t,l,"get",e[l]);r=function(_){return Ya(_,a)||(o?t.p:t)}}}return $n(n,r)},Fc=function(t,e,n){var i=t.labels,r=Qe,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},en=function(t,e,n){var i=t.vars,r=i[e],o=oe,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Gn.length&&Ds(),a&&(oe=a),h=l?r.apply(c,l):r.call(c),oe=o,h},Er=function(t){return Xn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!be),t.progress()<1&&en(t,"onInterrupt"),t},Xi,Px=function(t){t=!t.name&&t.default||t;var e=t.name,n=te(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Vr,render:Ya,add:Wa,kill:qx,modifier:Xx,rawVars:0},o={targetTest:0,get:0,getSetter:$a,aliases:{},register:0};if(sr(),t!==i){if(ze[e])return;nn(i,nn(Rs(t,r),o)),bi(i.prototype,bi(r,Rs(t,o))),ze[i.prop=e]=i,t.targetTest&&(Ts.push(i),Va[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Gh(e,i),t.register&&t.register(qe,i,De)},qt=255,Ar={aqua:[0,qt,qt],lime:[0,qt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qt],navy:[0,0,128],white:[qt,qt,qt],olive:[128,128,0],yellow:[qt,qt,0],orange:[qt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qt,0,0],pink:[qt,192,203],cyan:[0,qt,qt],transparent:[qt,qt,qt,0]},Wo=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*qt+.5|0},su=function(t,e,n){var i=t?Dn(t)?[t>>16,t>>8&qt,t&qt]:0:Ar.black,r,o,a,l,c,h,u,d,m,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ar[t])i=Ar[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&qt,i&qt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&qt,t&qt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(da),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Wo(l+1/3,r,o),i[1]=Wo(l,r,o),i[2]=Wo(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(zh),n&&i.length<4&&(i[3]=1),i}else i=t.match(da)||Ar.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/qt,o=i[1]/qt,a=i[2]/qt,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?l=c=0:(m=u-d,c=h>.5?m/(2-u-d):m/(u+d),l=u===r?(o-a)/m+(o<a?6:0):u===o?(a-r)/m+2:(r-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ou=function(t){var e=[],n=[],i=-1;return t.split(Hn).forEach(function(r){var o=r.match(Wi)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Nc=function(t,e,n){var i="",r=(t+i).match(Hn),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=su(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=ou(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Hn,"1").split(Wi),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Hn),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},Hn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ar)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Dx=/hsl[a]?\(/,au=function(t){var e=t.join(" "),n;if(Hn.lastIndex=0,Hn.test(e))return n=Dx.test(e),t[1]=Nc(t[1],n),t[0]=Nc(t[0],n,ou(t[1])),!0},Hr,ke=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,d,m,_=function f(p){var g=s()-i,b=p===!0,x,M,y,E;if(g>t&&(n+=g-e),i+=g,y=i-n,x=y-o,(x>0||b)&&(E=++u.frame,d=y-u.time*1e3,u.time=y=y/1e3,o+=x+(x>=r?4:r-x),M=1),b||(l=c(f)),M)for(m=0;m<a.length;m++)a[m](y,d,E,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Bh&&(!fa&&Fh()&&(Ze=fa=window,ka=Ze.document||{},Xe.gsap=qe,(Ze.gsapVersions||(Ze.gsapVersions=[])).push(qe.version),Vh(Ls||Ze.GreenSockGlobals||!Ze.gsap&&Ze||{}),h=Ze.requestAnimationFrame),l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},Hr=1,_(2))},sleep:function(){(h?Ze.cancelAnimationFrame:clearTimeout)(l),Hr=0,c=Vr},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),o=u.time*1e3+r},add:function(p,g,b){var x=g?function(M,y,E,C){p(M,y,E,C),u.remove(x)}:p;return u.remove(p),a[b?"unshift":"push"](x),sr(),x},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&m>=g&&m--},_listeners:a},u}(),sr=function(){return!Hr&&ke.wake()},Ft={},Rx=/^[\d.\-M][\d.\-,\s]/,Ix=/["']/g,Ox=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Ix,"").trim():+c,i=l.substr(a+1).trim();return e},Fx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Nx=function(t){var e=(t+"").split("("),n=Ft[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ox(e[1])]:Fx(t).split(",").map(qh)):Ft._CE&&Rx.test(t)?Ft._CE("",t):n},lu=function(t){return function(e){return 1-t(1-e)}},cu=function s(t,e){for(var n=t._first,i;n;)n instanceof Ce?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},pi=function(t,e){return t&&(te(t)?t:Ft[t]||Nx(t))||e},Si=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Pe(t,function(a){Ft[a]=Xe[a]=r,Ft[o=a.toLowerCase()]=n;for(var l in r)Ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ft[a+"."+l]=r[l]}),r},hu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Xo=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/ua*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*cx((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:hu(a);return r=ua/r,l.config=function(c,h){return s(t,c,h)},l},qo=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:hu(n);return i.config=function(r){return s(t,r)},i};Pe("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Si(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ft.Linear.easeNone=Ft.none=Ft.Linear.easeIn;Si("Elastic",Xo("in"),Xo("out"),Xo());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Si("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Si("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Si("Circ",function(s){return-(Oh(1-s*s)-1)});Si("Sine",function(s){return s===1?1:-lx(s*ox)+1});Si("Back",qo("in"),qo("out"),qo());Ft.SteppedEase=Ft.steps=Xe.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-$t;return function(a){return((i*jr(0,o,a)|0)+r)*n}}};nr.ease=Ft["quad.out"];Pe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ga+=s+","+s+"Params,"});var uu=function(t,e){this.id=ax++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Wh,this.set=e?e.getSetter:$a},or=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,rr(this,+e.duration,1,1),this.data=e.data,oe&&(this._ctx=oe,oe.data.push(this)),Hr||ke.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,rr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(sr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for($s(this,n),!r._dp||r.parent||jh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===$t||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Xh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ic(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ic(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ir(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-$t?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Is(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-$t?0:this._rts,this.totalTime(jr(-this._delay,this._tDur,i),!0),qs(this),gx(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(sr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$t&&(this._tTime-=$t)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&fn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Le(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Is(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=dx);var i=be;return be=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),be=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Oc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Oc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(je(this,n),Le(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Le(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-$t:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$t,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-$t)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=te(n)?n:$h,a=function(){var c=i.then;i.then=null,te(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Er(this)},s}();nn(or.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$t,_prom:0,_ps:!1,_rts:1});var Ce=function(s){Ih(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Le(n.sortChildren),Jt&&fn(n.parent||Jt,En(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Zh(En(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Dr(0,arguments,this),this},e.from=function(i,r,o){return Dr(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Dr(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Pr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new le(i,r,je(this,o),1),this},e.call=function(i,r,o){return fn(this,le.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new le(i,o,je(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Pr(o).immediateRender=Le(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,Pr(a).immediateRender=Le(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ge(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,m,_,f,p,g,b,x,M,y,E,C;if(this!==Jt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,M=this._start,x=this._ts,g=!x,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(d=ge(h%p),h===l?(f=this._repeat,d=c):(f=~~(h/p),f&&f===h/p&&(d=c,f--),d>c&&(d=c)),y=ir(this._tTime,p),!a&&this._tTime&&y!==f&&(y=f),E&&f&1&&(d=c-d,C=1),f!==y&&!this._lock){var v=E&&y&1,S=v===(E&&f&1);if(f<y&&(v=!v),a=v?0:c,this._lock=1,this.render(a||(C?0:ge(f*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&en(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;cu(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=yx(this,ge(a),ge(d)),b&&(h-=d-(d=b._start))),this._tTime=h,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&(en(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||d>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,o),d!==this._time||!this._ts&&!g){b=0,_&&(h+=this._zTime=-$t);break}}m=_}else{m=this._last;for(var P=i<0?i:d;m;){if(_=m._prev,(m._act||P<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,r,o||be&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!g){b=0,_&&(h+=this._zTime=P?-$t:$t);break}}m=_}}if(b&&!r&&(this.pause(),b.render(d>=a?0:-$t)._zTime=d>=a?1:-1,this._ts))return this._start=M,qs(this),this.render(i,r,o);this._onUpdate&&!r&&en(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Xn(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(en(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Dn(r)||(r=je(this,r,i)),!(i instanceof or)){if(Me(i))return i.forEach(function(a){return o.add(a,r)}),this;if(me(i))return this.addLabel(i,r);if(te(i))i=le.delayedCall(0,i);else return this}return this!==i?fn(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qe);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof le?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return me(i)?this.removeLabel(i):te(i)?this.killTweensOf(i):(Xs(this,i),i===this._recent&&(this._recent=this._last),fi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ge(ke.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=je(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=le.delayedCall(0,r||Vr,o);return a.data="isPause",this._hasPause=1,fn(this,a,je(this,i))},e.removePause=function(i){var r=this._first;for(i=je(this,i);r;)r._start===i&&r.data==="isPause"&&Xn(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Un!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=tn(i),l=this._first,c=Dn(r),h;l;)l instanceof le?fx(l._targets,a)&&(c?(!Un||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=je(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,m,_=le.to(o,nn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||$t,onStart:function(){if(o.pause(),!m){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&rr(_,p,0,1).render(_._time,!0,!0),m=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,nn({startAt:{time:je(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Fc(this,je(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Fc(this,je(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+$t)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return fi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),fi(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=Qe,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,fn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;rr(o,o===Jt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Jt._ts&&(Xh(Jt,Is(i,Jt)),Hh=ke.frame),ke.frame>=Dc){Dc+=We.autoSleep||120;var r=Jt._first;if((!r||!r._ts)&&We.autoSleep&&ke._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ke.sleep()}}},t}(or);nn(Ce.prototype,{_lock:0,_hasPause:0,_forcing:0});var zx=function(t,e,n,i,r,o,a){var l=new De(this._pt,t,e,0,1,_u,null,r),c=0,h=0,u,d,m,_,f,p,g,b;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Gr(i)),o&&(b=[n,i],o(b,t,e),n=b[0],i=b[1]),d=n.match(Go)||[];u=Go.exec(i);)_=u[0],f=i.substring(c,u.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),_!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:f||h===1?f:",",s:p,c:_.charAt(1)==="="?ji(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=Go.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Uh.test(i)||g)&&(l.e=0),this._pt=l,l},Wa=function(t,e,n,i,r,o,a,l,c,h){te(i)&&(i=i(r||0,t,o));var u=t[e],d=n!=="get"?n:te(u)?c?t[e.indexOf("set")||!te(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,m=te(u)?c?Gx:mu:qa,_;if(me(i)&&(~i.indexOf("random(")&&(i=Gr(i)),i.charAt(1)==="="&&(_=ji(d,i)+(ye(d)||0),(_||_===0)&&(i=_))),!h||d!==i||ya)return!isNaN(d*i)&&i!==""?(_=new De(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Wx:gu,0,m),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&Ba(e,i),zx.call(this,t,e,d,i,m,l||We.stringFilter,c))},Ux=function(t,e,n,i,r){if(te(t)&&(t=Rr(t,r,e,n,i)),!gn(t)||t.style&&t.nodeType||Me(t)||Nh(t))return me(t)?Rr(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Rr(t[a],r,e,n,i);return o},du=function(t,e,n,i,r,o){var a,l,c,h;if(ze[t]&&(a=new ze[t]).init(r,a.rawVars?e[t]:Ux(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new De(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Xi))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Un,ya,Xa=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,u=i.callbackScope,d=i.runBackwards,m=i.yoyoEase,_=i.keyframes,f=i.autoRevert,p=t._dur,g=t._startAt,b=t._targets,x=t.parent,M=x&&x.data==="nested"?x.vars.targets:b,y=t._overwrite==="auto"&&!za,E=t.timeline,C,v,S,P,z,J,O,R,B,q,Y,H,Q;if(E&&(!_||!r)&&(r="none"),t._ease=pi(r,nr.ease),t._yEase=m?lu(pi(m===!0?r:m,nr.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!E&&!!i.runBackwards,!E||_&&!i.stagger){if(R=b[0]?di(b[0]).harness:0,H=R&&i[R.prop],C=Rs(i,Va),g&&(g._zTime<0&&g.progress(1),e<0&&d&&a&&!f?g.render(-1,!0):g.revert(d&&p?ws:ux),g._lazy=0),o){if(Xn(t._startAt=le.set(b,nn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!g&&Le(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:u,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(be||!a&&!f)&&t._startAt.revert(ws),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(d&&p&&!g){if(e&&(a=!1),S=nn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Le(l),immediateRender:a,stagger:0,parent:x},C),H&&(S[R.prop]=H),Xn(t._startAt=le.set(b,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(be?t._startAt.revert(ws):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,$t,$t);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Le(l)||l&&!p,v=0;v<b.length;v++){if(z=b[v],O=z._gsap||Ha(b)[v]._gsap,t._ptLookup[v]=q={},pa[O.id]&&Gn.length&&Ds(),Y=M===b?v:M.indexOf(z),R&&(B=new R).init(z,H||C,t,Y,M)!==!1&&(t._pt=P=new De(t._pt,z,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(tt){q[tt]=P}),B.priority&&(J=1)),!R||H)for(S in C)ze[S]&&(B=du(S,C,t,Y,z,M))?B.priority&&(J=1):q[S]=P=Wa.call(t,z,S,"get",C[S],Y,M,0,i.stringFilter);t._op&&t._op[v]&&t.kill(z,t._op[v]),y&&t._pt&&(Un=t,Jt.killTweensOf(z,q,t.globalTime(e)),Q=!t.parent,Un=0),t._pt&&l&&(pa[O.id]=1)}J&&xu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,_&&e<=0&&E.render(Qe,!0,!0)},kx=function(t,e,n,i,r,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,u,d;if(!l)for(l=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(c=u[d][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return ya=1,t.vars[e]="+=0",Xa(t,a),ya=0,1;l.push(c)}for(d=l.length;d--;)h=l[d],c=h._pt||h,c.s=(i||i===0)&&!r?i:c.s+(i||0)+o*c.c,c.c=n-c.s,h.e&&(h.e=ne(n)+ye(h.e)),h.b&&(h.b=c.s+ye(h.b))},Bx=function(t,e){var n=t[0]?di(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=bi({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Vx=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Me(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Rr=function(t,e,n,i,r){return te(t)?t.call(e,n,i,r):me(t)&&~t.indexOf("random(")?Gr(t):t},fu=Ga+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",pu={};Pe(fu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return pu[s]=1});var le=function(s){Ih(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Pr(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,m=l.overwrite,_=l.keyframes,f=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,b=i.parent||Jt,x=(Me(n)||Nh(n)?Dn(n[0]):"length"in i)?[n]:tn(n),M,y,E,C,v,S,P,z;if(a._targets=x.length?Ha(x):Ps("GSAP target "+n+" not found. https://greensock.com",!We.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,_||d||ys(c)||ys(h)){if(i=a.vars,M=a.timeline=new Ce({data:"nested",defaults:f||{},targets:b&&b.data==="nested"?b.vars.targets:x}),M.kill(),M.parent=M._dp=En(a),M._start=0,d||ys(c)||ys(h)){if(C=x.length,P=d&&tu(d),gn(d))for(v in d)~fu.indexOf(v)&&(z||(z={}),z[v]=d[v]);for(y=0;y<C;y++)E=Rs(i,pu),E.stagger=0,g&&(E.yoyoEase=g),z&&bi(E,z),S=x[y],E.duration=+Rr(c,En(a),y,S,x),E.delay=(+Rr(h,En(a),y,S,x)||0)-a._delay,!d&&C===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),M.to(S,E,P?P(y,S,x):0),M._ease=Ft.none;M.duration()?c=h=0:a.timeline=0}else if(_){Pr(nn(M.vars.defaults,{ease:"none"})),M._ease=pi(_.ease||i.ease||"none");var J=0,O,R,B;if(Me(_))_.forEach(function(q){return M.to(x,q,">")}),M.duration();else{E={};for(v in _)v==="ease"||v==="easeEach"||Vx(v,_[v],E,_.easeEach);for(v in E)for(O=E[v].sort(function(q,Y){return q.t-Y.t}),J=0,y=0;y<O.length;y++)R=O[y],B={ease:R.e,duration:(R.t-(y?O[y-1].t:0))/100*c},B[v]=R.v,M.to(x,B,J),J+=B.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return m===!0&&!za&&(Un=En(a),Jt.killTweensOf(x),Un=0),fn(b,En(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===ge(b._time)&&Le(u)&&_x(En(a))&&b.data!=="nested")&&(a._tTime=-$t,a.render(Math.max(0,-h)||0)),p&&Zh(En(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-$t&&!h?l:i<$t?0:i,d,m,_,f,p,g,b,x,M;if(!c)vx(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,x=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(f*100+i,r,o);if(d=ge(u%f),u===l?(_=this._repeat,d=c):(_=~~(u/f),_&&_===u/f&&(d=c,_--),d>c&&(d=c)),g=this._yoyo&&_&1,g&&(M=this._yEase,d=c-d),p=ir(this._tTime,f),d===a&&!o&&this._initted)return this._tTime=u,this;_!==p&&(x&&this._yEase&&cu(x,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=o=1,this.render(ge(f*_),!0).invalidate()._lock=0))}if(!this._initted){if(Jh(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(M||this._ease)(d/c),this._from&&(this.ratio=b=1-b),d&&!a&&!r&&(en(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;x&&x.render(i<0?i:!d&&g?-$t:x._dur*x._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ma(this,i,r,o),en(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&en(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ma(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Xn(this,1),!r&&!(h&&!a)&&(u||a||g)&&(en(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a){Hr||ke.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Xa(this,l),c=this._ease(l/this._dur),kx(this,i,r,o,a,c,l)?this.resetTo(i,r,o,a):($s(this,0),this.parent||Yh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Er(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Un&&Un.vars.overwrite!==!0)._first||Er(this),this.parent&&o!==this.timeline.totalDuration()&&rr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?tn(i):a,c=this._ptLookup,h=this._pt,u,d,m,_,f,p,g;if((!r||r==="all")&&mx(a,l))return r==="all"&&(this._pt=0),Er(this);for(u=this._op=this._op||[],r!=="all"&&(me(r)&&(f={},Pe(r,function(b){return f[b]=1}),r=f),r=Bx(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){d=c[g],r==="all"?(u[g]=r,_=d,m={}):(m=u[g]=u[g]||{},_=r);for(f in _)p=d&&d[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&Xs(this,p,"_pt"),delete d[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&h&&Er(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Dr(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Dr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Jt.killTweensOf(i,r,o)},t}(or);nn(le.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pe("staggerTo,staggerFrom,staggerFromTo",function(s){le[s]=function(){var t=new Ce,e=_a.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var qa=function(t,e,n){return t[e]=n},mu=function(t,e,n){return t[e](n)},Gx=function(t,e,n,i){return t[e](i.fp,n)},Hx=function(t,e,n){return t.setAttribute(e,n)},$a=function(t,e){return te(t[e])?mu:Ua(t[e])&&t.setAttribute?Hx:qa},gu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Wx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},_u=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ya=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Xx=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},qx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Xs(this,e,"_pt"):e.dep||(n=1),e=i;return!n},$x=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},xu=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},De=function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||gu,this.d=l||this,this.set=c||qa,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=$x,this.m=n,this.mt=r,this.tween=i},s}();Pe(Ga+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Va[s]=1});Xe.TweenMax=Xe.TweenLite=le;Xe.TimelineLite=Xe.TimelineMax=Ce;Jt=new Ce({sortChildren:!1,defaults:nr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});We.stringFilter=au;var ar=[],Es={},Yx=[],zc=0,$o=function(t){return(Es[t]||Yx).map(function(e){return e()})},ba=function(){var t=Date.now(),e=[];t-zc>2&&($o("matchMediaInit"),ar.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Ze.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),$o("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),zc=t,$o("matchMedia"))},vu=function(){function s(e,n){this.selector=n&&xa(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){te(n)&&(r=i,i=n,n=te);var o=this,a=function(){var c=oe,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=xa(r)),oe=o,u=i.apply(o,arguments),te(u)&&o._r.push(u),oe=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===te?a(o):n?o[n]=a:a},t.ignore=function(n){var i=oe;oe=null,n(this),oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof le&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof or)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=ar.indexOf(this);~a&&ar.splice(a,1)}},t.revert=function(n){this.kill(n||{})},s}(),jx=function(){function s(e){this.contexts=[],this.scope=e}var t=s.prototype;return t.add=function(n,i,r){gn(n)||(n={matches:n});var o=new vu(0,r||this.scope),a=o.conditions={},l,c,h;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ze.matchMedia(n[c]),l&&(ar.indexOf(o)<0&&ar.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(ba):l.addEventListener("change",ba)));return h&&i(o),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Os={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Px(i)})},timeline:function(t){return new Ce(t)},getTweensOf:function(t,e){return Jt.getTweensOf(t,e)},getProperty:function(t,e,n,i){me(t)&&(t=tn(t)[0]);var r=di(t||{}).get,o=n?$h:qh;return n==="native"&&(n=""),t&&(e?o((ze[e]&&ze[e].get||r)(t,e,n,i)):function(a,l,c){return o((ze[a]&&ze[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=tn(t),t.length>1){var i=t.map(function(h){return qe.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=ze[e],a=di(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;Xi._pt=0,u.init(t,n?h+n:h,Xi,0,[t]),u.render(1,u),Xi._pt&&Ya(1,Xi)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=qe.to(t,bi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Jt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=pi(t.ease,nr.ease)),Rc(nr,t||{})},config:function(t){return Rc(We,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ze[a]&&!Xe[a]&&Ps(e+" effect requires "+a+" plugin.")}),Ho[e]=function(a,l,c){return n(tn(a),nn(l||{},r),c)},o&&(Ce.prototype[e]=function(a,l,c){return this.add(Ho[e](a,gn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Ft[t]=pi(e)},parseEase:function(t,e){return arguments.length?pi(t,e):Ft},getById:function(t){return Jt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ce(t),i,r;for(n.smoothChildTiming=Le(t.smoothChildTiming),Jt.remove(n),n._dp=0,n._time=n._tTime=Jt._time,i=Jt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof le&&i.vars.onComplete===i._targets[0]))&&fn(n,i,i._start-i._delay),i=r;return fn(Jt,n,0),n},context:function(t,e){return t?new vu(t,e):oe},matchMedia:function(t){return new jx(t)},matchMediaRefresh:function(){return ar.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ba()},addEventListener:function(t,e){var n=Es[t]||(Es[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Es[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Ax,wrapYoyo:Cx,distribute:tu,random:nu,snap:eu,normalize:Ex,getUnit:ye,clamp:Mx,splitColor:su,toArray:tn,selector:xa,mapRange:ru,pipe:wx,unitize:Tx,interpolate:Lx,shuffle:Qh},install:Vh,effects:Ho,ticker:ke,updateRoot:Ce.updateRoot,plugins:ze,globalTimeline:Jt,core:{PropTween:De,globals:Gh,Tween:le,Timeline:Ce,Animation:or,getCache:di,_removeLinkedListItem:Xs,reverting:function(){return be},context:function(t){return t&&oe&&(oe.data.push(t),t._ctx=oe),oe},suppressOverwrites:function(t){return za=t}}};Pe("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Os[s]=le[s]});ke.add(Ce.updateRoot);Xi=Os.to({},{duration:0});var Zx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Jx=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Zx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Yo=function(t,e){return{name:t,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(me(r)&&(l={},Pe(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Jx(a,r)}}}},qe=Os.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)be?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Yo("roundProps",va),Yo("modifiers"),Yo("snap",eu))||Os;le.version=Ce.version=qe.version="3.11.4";Bh=1;Fh()&&sr();Ft.Power0;Ft.Power1;Ft.Power2;Ft.Power3;Ft.Power4;Ft.Linear;Ft.Quad;Ft.Cubic;Ft.Quart;Ft.Quint;Ft.Strong;Ft.Elastic;Ft.Back;Ft.SteppedEase;Ft.Bounce;Ft.Sine;Ft.Expo;Ft.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Uc,kn,Zi,ja,ci,kc,Za,Kx=function(){return typeof window<"u"},Rn={},si=180/Math.PI,Ji=Math.PI/180,Bi=Math.atan2,Bc=1e8,Ja=/([A-Z])/g,Qx=/(left|right|width|margin|padding|x)/i,tv=/[\s,\(]\S/,Ln={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ma=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ev=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},nv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},iv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},yu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},bu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},rv=function(t,e,n){return t.style[e]=n},sv=function(t,e,n){return t.style.setProperty(e,n)},ov=function(t,e,n){return t._gsap[e]=n},av=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},lv=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},cv=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Qt="transform",hn=Qt+"Origin",hv=function(t,e){var n=this,i=this.target,r=i.style;if(t in Rn){if(this.tfm=this.tfm||{},t!=="transform"&&(t=Ln[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=An(i,o)}):this.tfm[t]=i._gsap.x?i._gsap[t]:An(i,t)),this.props.indexOf(Qt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hn,e,"")),t=Qt}(r||e)&&this.props.push(t,e,r[t])},Mu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},uv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].replace(Ja,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Za(),r&&!r.isStart&&!n[Qt]&&(Mu(n),i.uncache=1)}},Su=function(t,e){var n={target:t,props:[],revert:uv,save:hv};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},wu,Sa=function(t,e){var n=kn.createElementNS?kn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):kn.createElement(t);return n.style?n:kn.createElement(t)},mn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ja,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,lr(e)||e,1)||""},Vc="O,Moz,ms,Ms,Webkit".split(","),lr=function(t,e,n){var i=e||ci,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Vc[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Vc[o]:"")+t},wa=function(){Kx()&&window.document&&(Uc=window,kn=Uc.document,Zi=kn.documentElement,ci=Sa("div")||{style:{}},Sa("div"),Qt=lr(Qt),hn=Qt+"Origin",ci.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wu=!!lr("perspective"),Za=qe.core.reverting,ja=1)},jo=function s(t){var e=Sa("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(Zi.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Zi.removeChild(e),this.style.cssText=r,o},Gc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Tu=function(t){var e;try{e=t.getBBox()}catch{e=jo.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===jo||(e=jo.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Gc(t,["x","cx","x1"])||0,y:+Gc(t,["y","cy","y1"])||0,width:0,height:0}:e},Eu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Tu(t))},Wr=function(t,e){if(e){var n=t.style;e in Rn&&e!==hn&&(e=Qt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Ja,"-$1").toLowerCase())):n.removeAttribute(e)}},Bn=function(t,e,n,i,r,o){var a=new De(t._pt,e,n,0,1,o?bu:yu);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Hc={deg:1,rad:1,turn:1},dv={grid:1,flex:1},qn=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=ci.style,l=Qx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",m=i==="%",_,f,p,g;return i===o||!r||Hc[i]||Hc[o]?r:(o!=="px"&&!d&&(r=s(t,e,n,"px")),g=t.getCTM&&Eu(t),(m||o==="%")&&(Rn[e]||~e.indexOf("adius"))?(_=g?t.getBBox()[l?"width":"height"]:t[h],ne(m?r/_*u:r/100*_)):(a[l?"width":"height"]=u+(d?o:i),f=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(f=(t.ownerSVGElement||{}).parentNode),(!f||f===kn||!f.appendChild)&&(f=kn.body),p=f._gsap,p&&m&&p.width&&l&&p.time===ke.time&&!p.uncache?ne(r/p.width*u):((m||o==="%")&&!dv[mn(f,"display")]&&(a.position=mn(t,"position")),f===t&&(a.position="static"),f.appendChild(ci),_=ci[h],f.removeChild(ci),a.position="absolute",l&&m&&(p=di(f),p.time=ke.time,p.width=f[h]),ne(d?_*r/u:_&&r?u/_*r:0))))},An=function(t,e,n,i){var r;return ja||wa(),e in Ln&&e!=="transform"&&(e=Ln[e],~e.indexOf(",")&&(e=e.split(",")[0])),Rn[e]&&e!=="transform"?(r=qr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ns(mn(t,hn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Fs[e]&&Fs[e](t,e,n)||mn(t,e)||Wh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?qn(t,e,r,n)+n:r},fv=function(t,e,n,i){if(!n||n==="none"){var r=lr(e,t,1),o=r&&mn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=mn(t,"borderTopColor"))}var a=new De(this._pt,t.style,e,0,1,_u),l=0,c=0,h,u,d,m,_,f,p,g,b,x,M,y;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=mn(t,e)||i,t.style[e]=n),h=[n,i],au(h),n=h[0],i=h[1],d=n.match(Wi)||[],y=i.match(Wi)||[],y.length){for(;u=Wi.exec(i);)p=u[0],b=i.substring(l,u.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),p!==(f=d[c++]||"")&&(m=parseFloat(f)||0,M=f.substr((m+"").length),p.charAt(1)==="="&&(p=ji(m,p)+M),g=parseFloat(p),x=p.substr((g+"").length),l=Wi.lastIndex-x.length,x||(x=x||We.units[e]||M,l===i.length&&(i+=x,a.e+=x)),M!==x&&(m=qn(t,e,f,x)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:m,c:g-m,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?bu:yu;return Uh.test(i)&&(a.e=0),this._pt=a,a},Wc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},pv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Wc[n]||n,e[1]=Wc[i]||i,e.join(" ")},mv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Rn[a]&&(l=1,a=a==="transformOrigin"?hn:Qt),Wr(n,a);l&&(Wr(n,Qt),o&&(o.svg&&n.removeAttribute("transform"),qr(n,1),o.uncache=1,Mu(i)))}},Fs={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new De(t._pt,e,n,0,0,mv);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Xr=[1,0,0,1,0,0],Au={},Cu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Xc=function(t){var e=mn(t,Qt);return Cu(e)?Xr:e.substr(7).match(zh).map(ne)},Ka=function(t,e){var n=t._gsap||di(t),i=t.style,r=Xc(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Xr:r):(r===Xr&&!t.offsetParent&&t!==Zi&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Zi.appendChild(t)),r=Xc(t),l?i.display=l:Wr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Zi.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ta=function(t,e,n,i,r,o){var a=t._gsap,l=r||Ka(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,m=l[0],_=l[1],f=l[2],p=l[3],g=l[4],b=l[5],x=e.split(" "),M=parseFloat(x[0])||0,y=parseFloat(x[1])||0,E,C,v,S;n?l!==Xr&&(C=m*p-_*f)&&(v=M*(p/C)+y*(-f/C)+(f*b-p*g)/C,S=M*(-_/C)+y*(m/C)-(m*b-_*g)/C,M=v,y=S):(E=Tu(t),M=E.x+(~x[0].indexOf("%")?M/100*E.width:M),y=E.y+(~(x[1]||x[0]).indexOf("%")?y/100*E.height:y)),i||i!==!1&&a.smooth?(g=M-c,b=y-h,a.xOffset=u+(g*m+b*f)-g,a.yOffset=d+(g*_+b*p)-b):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=y,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[hn]="0px 0px",o&&(Bn(o,a,"xOrigin",c,M),Bn(o,a,"yOrigin",h,y),Bn(o,a,"xOffset",u,a.xOffset),Bn(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+y)},qr=function(t,e){var n=t._gsap||new uu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=mn(t,hn)||"0",h,u,d,m,_,f,p,g,b,x,M,y,E,C,v,S,P,z,J,O,R,B,q,Y,H,Q,tt,ut,k,j,it,rt;return h=u=d=f=p=g=b=x=M=0,m=_=1,n.svg=!!(t.getCTM&&Eu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Qt]!=="none"?l[Qt]:"")),i.scale=i.rotate=i.translate="none"),C=Ka(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Ta(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,C)),y=n.xOrigin||0,E=n.yOrigin||0,C!==Xr&&(z=C[0],J=C[1],O=C[2],R=C[3],h=B=C[4],u=q=C[5],C.length===6?(m=Math.sqrt(z*z+J*J),_=Math.sqrt(R*R+O*O),f=z||J?Bi(J,z)*si:0,b=O||R?Bi(O,R)*si+f:0,b&&(_*=Math.abs(Math.cos(b*Ji))),n.svg&&(h-=y-(y*z+E*O),u-=E-(y*J+E*R))):(rt=C[6],j=C[7],tt=C[8],ut=C[9],k=C[10],it=C[11],h=C[12],u=C[13],d=C[14],v=Bi(rt,k),p=v*si,v&&(S=Math.cos(-v),P=Math.sin(-v),Y=B*S+tt*P,H=q*S+ut*P,Q=rt*S+k*P,tt=B*-P+tt*S,ut=q*-P+ut*S,k=rt*-P+k*S,it=j*-P+it*S,B=Y,q=H,rt=Q),v=Bi(-O,k),g=v*si,v&&(S=Math.cos(-v),P=Math.sin(-v),Y=z*S-tt*P,H=J*S-ut*P,Q=O*S-k*P,it=R*P+it*S,z=Y,J=H,O=Q),v=Bi(J,z),f=v*si,v&&(S=Math.cos(v),P=Math.sin(v),Y=z*S+J*P,H=B*S+q*P,J=J*S-z*P,q=q*S-B*P,z=Y,B=H),p&&Math.abs(p)+Math.abs(f)>359.9&&(p=f=0,g=180-g),m=ne(Math.sqrt(z*z+J*J+O*O)),_=ne(Math.sqrt(q*q+rt*rt)),v=Bi(B,q),b=Math.abs(v)>2e-4?v*si:0,M=it?1/(it<0?-it:it):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Cu(mn(t,Qt)),Y&&t.setAttribute("transform",Y))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(m*=-1,b+=f<=0?180:-180,f+=f<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=ne(m),n.scaleY=ne(_),n.rotation=ne(f)+a,n.rotationX=ne(p)+a,n.rotationY=ne(g)+a,n.skewX=b+a,n.skewY=x+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[hn]=Ns(c)),n.xOffset=n.yOffset=0,n.force3D=We.force3D,n.renderTransform=n.svg?_v:wu?Lu:gv,n.uncache=0,n},Ns=function(t){return(t=t.split(" "))[0]+" "+t[1]},Zo=function(t,e,n){var i=ye(e);return ne(parseFloat(e)+parseFloat(qn(t,"x",n+"px",i)))+i},gv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Lu(t,e)},ei="0deg",Sr="0px",ni=") ",Lu=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,m=n.skewY,_=n.scaleX,f=n.scaleY,p=n.transformPerspective,g=n.force3D,b=n.target,x=n.zOrigin,M="",y=g==="auto"&&t&&t!==1||g===!0;if(x&&(u!==ei||h!==ei)){var E=parseFloat(h)*Ji,C=Math.sin(E),v=Math.cos(E),S;E=parseFloat(u)*Ji,S=Math.cos(E),o=Zo(b,o,C*S*-x),a=Zo(b,a,-Math.sin(E)*-x),l=Zo(b,l,v*S*-x+x)}p!==Sr&&(M+="perspective("+p+ni),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(y||o!==Sr||a!==Sr||l!==Sr)&&(M+=l!==Sr||y?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ni),c!==ei&&(M+="rotate("+c+ni),h!==ei&&(M+="rotateY("+h+ni),u!==ei&&(M+="rotateX("+u+ni),(d!==ei||m!==ei)&&(M+="skew("+d+", "+m+ni),(_!==1||f!==1)&&(M+="scale("+_+", "+f+ni),b.style[Qt]=M||"translate(0, 0)"},_v=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,m=n.target,_=n.xOrigin,f=n.yOrigin,p=n.xOffset,g=n.yOffset,b=n.forceCSS,x=parseFloat(o),M=parseFloat(a),y,E,C,v,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ji,c*=Ji,y=Math.cos(l)*u,E=Math.sin(l)*u,C=Math.sin(l-c)*-d,v=Math.cos(l-c)*d,c&&(h*=Ji,S=Math.tan(c-h),S=Math.sqrt(1+S*S),C*=S,v*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),y*=S,E*=S)),y=ne(y),E=ne(E),C=ne(C),v=ne(v)):(y=u,v=d,E=C=0),(x&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(x=qn(m,"x",o,"px"),M=qn(m,"y",a,"px")),(_||f||p||g)&&(x=ne(x+_-(_*y+f*C)+p),M=ne(M+f-(_*E+f*v)+g)),(i||r)&&(S=m.getBBox(),x=ne(x+i/100*S.width),M=ne(M+r/100*S.height)),S="matrix("+y+","+E+","+C+","+v+","+x+","+M+")",m.setAttribute("transform",S),b&&(m.style[Qt]=S)},xv=function(t,e,n,i,r){var o=360,a=me(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?si:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Bc)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Bc)%o-~~(c/o)*o)),t._pt=d=new De(t._pt,e,n,i,c,ev),d.e=h,d.u="deg",t._props.push(n),d},qc=function(t,e){for(var n in e)t[n]=e[n];return t},vv=function(t,e,n){var i=qc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Qt]=e,a=qr(n,1),Wr(n,Qt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Qt],o[Qt]=e,a=qr(n,1),o[Qt]=c);for(l in Rn)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(m=ye(c),_=ye(h),u=m!==_?qn(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new De(t._pt,a,l,u,d-u,Ma),t._pt.u=_||0,t._props.push(l));qc(a,i)};Pe("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Fs[t>1?"border"+s:s]=function(a,l,c,h,u){var d,m;if(arguments.length<4)return d=o.map(function(_){return An(a,_,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(h+"").split(" "),m={},o.forEach(function(_,f){return m[_]=d[f]=d[f]||d[(f-1)/2|0]}),a.init(l,m,u)}});var Pu={name:"css",register:wa,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,m,_,f,p,g,b,x,M,y,E,C,v;ja||wa(),this.styles=this.styles||Su(t),v=this.styles.props,this.tween=n;for(f in e)if(f!=="autoRound"&&(h=e[f],!(ze[f]&&du(f,e,n,i,t,r)))){if(m=typeof h,_=Fs[f],m==="function"&&(h=h.call(n,i,t,r),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=Gr(h)),_)_(this,t,f,h,n)&&(C=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(f)+"").trim(),h+="",Hn.lastIndex=0,Hn.test(c)||(p=ye(c),g=ye(h)),g?p!==g&&(c=qn(t,f,c,g)+g):p&&(h+=p),this.add(a,"setProperty",c,h,i,r,0,0,f),o.push(f),v.push(f,0,a[f]);else if(m!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,t,r):l[f],me(c)&&~c.indexOf("random(")&&(c=Gr(c)),ye(c+"")||(c+=We.units[f]||ye(An(t,f))||""),(c+"").charAt(1)==="="&&(c=An(t,f))):c=An(t,f),d=parseFloat(c),b=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),u=parseFloat(h),f in Ln&&(f==="autoAlpha"&&(d===1&&An(t,"visibility")==="hidden"&&u&&(d=0),v.push("visibility",0,a.visibility),Bn(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),f!=="scale"&&f!=="transform"&&(f=Ln[f],~f.indexOf(",")&&(f=f.split(",")[0]))),x=f in Rn,x){if(this.styles.save(f),M||(y=t._gsap,y.renderTransform&&!e.parseTransform||qr(t,e.parseTransform),E=e.smoothOrigin!==!1&&y.smooth,M=this._pt=new De(this._pt,a,Qt,0,1,y.renderTransform,y,0,-1),M.dep=1),f==="scale")this._pt=new De(this._pt,y,"scaleY",y.scaleY,(b?ji(y.scaleY,b+u):u)-y.scaleY||0,Ma),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){v.push(hn,0,a[hn]),h=pv(h),y.svg?Ta(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==y.zOrigin&&Bn(this,y,"zOrigin",y.zOrigin,g),Bn(this,a,f,Ns(c),Ns(h)));continue}else if(f==="svgOrigin"){Ta(t,h,1,E,0,this);continue}else if(f in Au){xv(this,y,f,d,b?ji(d,b+h):h);continue}else if(f==="smoothOrigin"){Bn(this,y,"smooth",y.smooth,h);continue}else if(f==="force3D"){y[f]=h;continue}else if(f==="transform"){vv(this,h,t);continue}}else f in a||(f=lr(f)||f);if(x||(u||u===0)&&(d||d===0)&&!tv.test(h)&&f in a)p=(c+"").substr((d+"").length),u||(u=0),g=ye(h)||(f in We.units?We.units[f]:p),p!==g&&(d=qn(t,f,c,g)),this._pt=new De(this._pt,x?y:a,f,d,(b?ji(d,b+u):u)-d,!x&&(g==="px"||f==="zIndex")&&e.autoRound!==!1?iv:Ma),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=nv);else if(f in a)fv.call(this,t,f,c,b?b+h:h);else if(f in t)this.add(t,f,c||t[f],b?b+h:h,i,r);else if(f!=="parseTransform"){Ba(f,h);continue}x||(f in a?v.push(f,0,a[f]):v.push(f,1,c||t[f])),o.push(f)}}C&&xu(this)},render:function(t,e){if(e.tween._time||!Za())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:An,aliases:Ln,getSetter:function(t,e,n){var i=Ln[e];return i&&i.indexOf(",")<0&&(e=i),e in Rn&&e!==hn&&(t._gsap.x||An(t,"x"))?n&&kc===n?e==="scale"?av:ov:(kc=n||{})&&(e==="scale"?lv:cv):t.style&&!Ua(t.style[e])?rv:~e.indexOf("-")?sv:$a(t,e)},core:{_removeProperty:Wr,_getMatrix:Ka}};qe.utils.checkPrefix=lr;qe.core.getStyleSaver=Su;(function(s,t,e,n){var i=Pe(s+","+t+","+e,function(r){Rn[r]=1});Pe(t,function(r){We.units[r]="deg",Au[r]=1}),Ln[i[13]]=s+","+t,Pe(n,function(r){var o=r.split(":");Ln[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){We.units[s]="px"});qe.registerPlugin(Pu);var Du=qe.registerPlugin(Pu)||qe;Du.core.Tween;function yv({sizes:s}){const t=sx({sizes:s}),e=new T0(5),n=new S0(16777215,.5),i=new M0(16777215,.5);return i.position.set(2,3,4),{camera:t,axesHelper:e,light:n,pointLight:i}}function bv({scene:s,sizes:t,canvas:e}){const n=yv({sizes:t}),{camera:i}=n,r=rx();s.add(...Object.values(n),...Object.values(r)),Object.entries(r).forEach(([a,l])=>{q0({mesh:l,name:a,callbacks:{spin:()=>{console.log("spin"),Du.to(l.rotation,{duration:1,y:l.rotation.y+2*Math.PI})}}})});const o=new vh({canvas:e});return o.setSize(t.width,t.height),o.render(s,i),{camera:i,renderer:o}}const Jo=document.querySelector("#app"),$c=new I_,Yc={width:window.innerWidth,height:window.innerHeight};dr.onLoad=()=>{const{camera:s,renderer:t}=bv({scene:$c,sizes:Yc,canvas:Jo}),e=D0({camera:s,canvas:Jo});Ph({scene:$c,camera:s,renderer:t,callback:$0({controls:e})}),window.addEventListener("resize",C0({sizes:Yc,camera:s,renderer:t})),window.addEventListener("dblclick",L0({canvas:Jo}))};
