(function(){var ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ka={};try{ka.__proto__=ia;ha=ka.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=fa,ma=function(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ua=b.prototype},k=this,n=function(a){return"string"==typeof a},na=/^[\w+/_-]+[=]{0,2}$/,oa=null,pa=function(){},qa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ya=function(a){return"function"==qa(a)},za=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},Aa=function(a,b,c){return a.call.apply(a.bind,arguments)},Ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},p=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p=Aa:p=Ba;return p.apply(null,arguments)},Ca=Date.now||function(){return+new Date},Da=function(a,b){function c(){}c.prototype=b.prototype;a.ua=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.va=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var Ea=function(){this.h=this.g=0};Ea.prototype.height=function(){return this.g};Ea.prototype.width=function(){return this.h};var Fa=function(){},Ga=function(){},Ha=function(){this.g="";this.h=null};Ha.prototype.text=function(){return this.g};var Ia=function(){},q=function(){this.h=[];this.j=this.g=null;this.l=[];this.h.length=0;this.j=this.g=null;this.l.length=0};q.prototype.buttons=function(a){return this.h[a]};q.CREATIVE_TYPE_UNKNOWN=0;q.CREATIVE_TYPE_IMAGE=2;q.CREATIVE_TYPE_HTML5_TEMPLATE=8;var Ka=function(){this.l=[];this.j=null;this.m=[];Ja(this)};Ka.prototype.height=function(){return this.g};Ka.prototype.width=function(){return this.h};var Ma=function(a){null===a.j&&(a.j=new La);return a.j},Ja=function(a){a.l.length=0;a.g=0;a.h=0;a.j=null;a.m.length=0},r=function(){this.j=this.h="";this.g=!0};r.prototype.label=function(){return this.h};r.prototype.T=function(){return this.j};r.prototype.da=function(){return this.g};var u=function(a,b){for(var c in b){var d=b[c],e=c.toLowerCase();"label"==e&&(a.h=d);"label_instance"==e&&(a.j=d);"include_close_button_token"==e&&(a.g=d)}},Na=function(){this.g="";this.j=this.l=this.h=null};Na.prototype.text=function(){return this.g};var Oa=function(){this.g=[];this.g.length=0},Pa=function(){this.g="";this.h=null};Pa.prototype.text=function(){return this.g};var Qa=function(){this.o=[];this.h=null;this.w=!1;this.l="";this.v=!1;this.m="";this.A=!1;this.j="";this.u=!1;this.g=null;this.o.length=0;this.h=null};Qa.prototype.is_mutable_impression=function(){return this.w};var Ra=function(){},La=function(){this.g=null},Sa=function(a){null===a.g&&(a.g=new Qa);return a.g},Ta=function(){this.h=this.g=""};Ta.prototype.name=function(){return this.g};Ta.prototype.value=function(){return this.h};var y=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,y);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};Da(y,Error);y.prototype.name="CustomError";var vb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(n(a))return n(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},wb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};var z;a:{var xb=k.navigator;if(xb){var yb=xb.userAgent;if(yb){z=yb;break a}}z=""};var zb=function(a){zb[" "](a);return a};zb[" "]=pa;var Ab=-1!=z.indexOf("Trident")||-1!=z.indexOf("MSIE");var Cb=function(){this.g="";this.h=Bb},Bb={};var A=function(a){var b=document;return n(a)?b.getElementById(a):a},Eb=function(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):Db(b,a)[0]||null);return a||null},Db=function(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var f={};for(c=d=0;a=e[c];c++){var g=a.className,h;if(h="function"==typeof g.split)h=0<=vb(g.split(/\s+/),b);h&&(f[d++]=a)}f.length=d;return f}return e};var Fb=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{zb(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Gb=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};var Hb=document,B=window;var C=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,void 0)},D=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,void 0)};var Ib=function(a,b){var c=!1,d=!1;d=void 0===d?!1:d;c=void 0===c?!1:c;a.google_image_requests||(a.google_image_requests=[]);var e=a.document.createElement("img");if(c){var f=function(){if(c){var b=a.google_image_requests,d=vb(b,e);0<=d&&Array.prototype.splice.call(b,d,1)}D(e,"load",f);D(e,"error",f)};C(e,"load",f);C(e,"error",f)}d&&(e.referrerPolicy="no-referrer");e.src=b;a.google_image_requests.push(e)};var Jb=Object.prototype.hasOwnProperty,Kb=function(a,b){for(var c in a)Jb.call(a,c)&&b.call(void 0,a[c],c,a)},Lb=!!window.google_async_iframe_id,E=Lb&&window.parent||window,Mb=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},Nb=function(a){try{var b=B;a=a||B;for(var c=0;20>c;c++){if(b==a)return!0;if(b==a.top)break;b=b.parent}}catch(d){}return!1},F=function(a,b){a&&Kb(b,function(b,d){a.style[d]=b})},M=function(a,b){for(var c=document.createDocumentFragment(),d=b.length,e=0;e<d;++e)c.appendChild(b[e]);a.appendChild(c)};var Ob=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var Pb=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,Qb=function(a,b){this.g=a;this.h=b},Rb=function(a,b){this.url=a;this.ea=!!b;this.depth=null};var Sb=function(){this.j="&";this.l=!1;this.h={};this.m=0;this.g=[]},Tb=function(a,b){var c={};c[a]=b;return[c]},Vb=function(a,b,c,d,e){var f=[];Gb(a,function(a,h){(a=Ub(a,b,c,d,e))&&f.push(h+"="+a)});return f.join(b)},Ub=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Ub(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Vb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},N=function(a,b,c,d){a.g.push(b);a.h[b]=Tb(c,d)},Xb=function(a,b,c,d){b=b+"//"+c+d;var e=Wb(a)-d.length;if(0>e)return"";a.g.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.g.length;f++)for(var g=a.g[f],h=a.h[g],m=0;m<h.length;m++){if(!e){d=null==d?g:d;break}var l=Vb(h[m],a.j,",$");if(l){l=c+l;if(e>=l.length){e-=l.length;b+=l;c=a.j;break}else a.l&&(c=e,l[c-1]==a.j&&--c,b+=l.substr(0,c),c=a.j,e=0);d=null==d?g:d}}a="";null!=d&&(a=c+"trn="+d);return b+a},Wb=function(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.j.length-1};var Yb=function(a,b,c,d){if(Math.random()<(d||a.g))try{if(c instanceof Sb)var e=c;else e=new Sb,Gb(c,function(a,b){var c=e,d=c.m++;a=Tb(b,a);c.g.push(d);c.h[d]=a});var f=Xb(e,a.l,a.h,a.j+b+"&");f&&Ib(k,f)}catch(g){}};var Zb=null;var $b=function(){var a=k.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Ca()},ac=function(){var a=void 0===a?k:a;return(a=a.performance)&&a.now?a.now():null};var bc=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};var O=k.performance,cc=!!(O&&O.mark&&O.measure&&O.clearMarks),P=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=cc){var b;if(null===Zb){Zb="";try{a="";try{a=k.top.location.hash}catch(c){a=k.location.hash}a&&(Zb=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Zb;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}),ec=function(){var a=dc;this.h=[];this.j=a||k;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=P()||(null!=b?b:1>Math.random())},fc=function(a){a&&O&&P()&&(O.clearMarks("goog_"+a.uniqueId+"_start"),O.clearMarks("goog_"+a.uniqueId+"_end"))};ec.prototype.start=function(a,b){if(!this.g)return null;var c=ac()||$b();a=new bc(a,b,c);b="goog_"+a.uniqueId+"_start";O&&P()&&O.mark(b);return a};var ic=function(){var a=gc;this.j=hc;this.l=this.h;this.g=void 0===a?null:a};ic.prototype.pinger=function(){return this.j};var lc=function(a,b,c,d){try{if(a.g&&a.g.g){var e=a.g.start(b.toString(),3);var f=c();var g=a.g;c=e;if(g.g&&"number"==typeof c.value){var h=ac()||$b();c.duration=h-c.value;var m="goog_"+c.uniqueId+"_end";O&&P()&&O.mark(m);g.g&&g.h.push(c)}}else f=c()}catch(l){g=!0;try{fc(e),g=(d||a.l).call(a,b,new jc(kc(l),l.fileName,l.lineNumber),void 0,void 0)}catch(t){a.h(217,t)}if(!g)throw l;}return f},oc=function(a,b,c){var d=nc;return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g]=arguments[g];return lc(d,a,function(){return b.apply(c,f)},void 0)}};ic.prototype.h=function(a,b,c,d,e){e=e||"jserror";try{var f=new Sb;f.l=!0;N(f,1,"context",a);b.error&&b.meta&&b.id||(b=new jc(kc(b),b.fileName,b.lineNumber));b.msg&&N(f,2,"msg",b.msg.substring(0,512));b.file&&N(f,3,"file",b.file);0<b.line&&N(f,4,"line",b.line);var g=b.meta||{};if(d)try{d(g)}catch(aa){}b=[g];f.g.push(5);f.h[5]=b;d=k;b=[];g=null;do{var h=d;if(Fb(h)){var m=h.location.href;g=h.document&&h.document.referrer||null}else m=g,g=null;b.push(new Rb(m||""));try{d=h.parent}catch(aa){d=null}}while(d&&h!=d);m=0;for(var l=b.length-1;m<=l;++m)b[m].depth=l-m;h=k;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(l=1;l<b.length;++l){var t=b[l];t.url||(t.url=h.location.ancestorOrigins[l-1]||"",t.ea=!0)}var Y=new Rb(k.location.href,!1);h=null;var ba=b.length-1;for(t=ba;0<=t;--t){var w=b[t];!h&&Pb.test(w.url)&&(h=w);if(w.url&&!w.ea){Y=w;break}}w=null;var Ua=b.length&&b[ba].url;0!=Y.depth&&Ua&&(w=b[ba]);var G=new Qb(Y,w);G.h&&N(f,6,"top",G.h.url||"");N(f,7,"url",G.g.url||"");Yb(this.j,e,f,c)}catch(aa){try{Yb(this.j,e,{context:"ecmserr",rctx:a,msg:kc(aa),url:G&&G.g.url},c)}catch(mc){}}return!0};var kc=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b},jc=function(a,b,c){Ob.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};ma(jc,Ob);var hc,nc;if(Lb&&!Fb(E)){var pc="."+Hb.domain;try{for(;2<pc.split(".").length&&!Fb(E);)Hb.domain=pc=pc.substr(pc.indexOf(".")+1),E=window.parent}catch(a){}Fb(E)||(E=window)}var dc=E,gc=new ec,qc=function(){if(!dc.google_measure_js_timing){var a=gc;a.g=!1;a.h!=a.j.google_js_reporting_queue&&(P()&&wb(a.h,fc),a.h.length=0)}};hc=new function(){var a=void 0===a?B:a;this.l="http:"===a.location.protocol?"http:":"https:";this.h="pagead2.googlesyndication.com";this.j="/pagead/gen_204?id=";this.g=.01};nc=new ic;"complete"==dc.document.readyState?qc():gc.g&&C(dc,"load",function(){qc()});var R=function(a,b){return oc(a,b,void 0)},Wc=nc.h;var Xc=function(a,b,c,d){this.xOffset=a;this.yOffset=b;this.height=d;this.width=c;this.g=null},Yc=function(){this.referenceFrameArray=[]},Zc=function(a){return{referenceFrameArray:a.referenceFrameArray.map(function(a){return{xOffset:a.xOffset,yOffset:a.yOffset,height:a.height,width:a.width}})}},$c=function(a){var b=void 0===b?new Yc:b;for(var c=0,d=0,e=0;20>e;++e){var f=a.document.body;var g=f.parentElement;var h=a===k.top?f.scrollHeight||g.scrollHeight:a.innerHeight;g=a===k.top?f.scrollWidth||g.scrollWidth:a.innerWidth;f=b;c=new Xc(c,d,g,h);c.g=f;f.referenceFrameArray.push(c);if(!(c=!a.frameElement)){c=!1;try{a.parent.document.body&&(c=!1)}catch(m){c=!0}}if(c)break;else d=a.frameElement.getBoundingClientRect(),c=d.left+a.parent.pageXOffset,d=d.top+a.parent.pageYOffset,a=a.parent}return b};var ad=function(a){if(a.classList)return a.classList;a=a.className;return n(a)&&a.match(/\S+/g)||[]},bd=function(a){var b=document.body;b.classList?b.classList.add(a):(b.classList?b.classList.contains(a):0<=vb(ad(b),a))||(b.className+=0<b.className.length?" "+a:a)};var cd=function(a,b,c,d,e,f,g,h,m,l,t,Y,ba,w,Ua,G,aa,mc,Ud,Vd,ra,Wd,Xd,Yd,Zd,$d,ae,be,ce,de,ee){this.isMutableImpression=a;this.ra=!!Xd;this.P=!!ra;this.u=null;if(this.P){var H=new Ka;Ja(H);for(var rc in ra){var I=ra[rc],da=rc.toLowerCase();if("creatives"==da)for(var J=0;J<I.length;++J){var fe=H,sc=new q;fe.l.push(sc);var Va=void 0,ea=sc,tc=I[J];for(Va in tc){var sa=tc[Va],ta=Va.toLowerCase();if("buttons"==ta)for(var Q=0;Q<sa.length;++Q){var uc=new Ha;ea.h.push(uc);var Wa=void 0,Xa=uc,vc=sa[Q];for(Wa in vc){var ge=vc[Wa],wc=Wa.toLowerCase();"text"==wc&&(Xa.g=ge);"action_urls"==wc&&null===Xa.h&&(Xa.h=new Ga)}}if("image_creative"==ta){var Ya=ea;null===Ya.g&&(Ya.g=new Ea);var Za=void 0,xc=Ya.g,yc=sa;for(Za in yc){var zc=yc[Za],Ac=Za.toLowerCase();"height"==Ac&&(xc.g=zc);"width"==Ac&&(xc.h=zc)}}"html5_template_creative"==ta&&null===ea.j&&(ea.j=new Fa);if("creative_conversion_urls"==ta)for(Q=0;Q<sa.length;++Q)ea.l.push(new Ia)}}"height"==da&&(H.g=I);"width"==da&&(H.h=I);if("attribution"==da){var $a=void 0,he=Ma(H),Bc=I;for($a in Bc){var ie=Bc[$a];if("user_feedback_data"==$a.toLowerCase()){var ab=void 0,v=Sa(he),Cc=ie;for(ab in Cc){var K=Cc[ab],L=ab.toLowerCase();"is_mutable_impression"==L&&(v.w=K);"conversion_url"==L&&(v.l=K,v.v=!0);"encoded_cookie"==L&&(v.m=K,v.A=!0);"close_button_token"==L&&(v.j=K,v.u=!0);if("interaction_conversion"==L){var bb=v;null===bb.g&&(bb.g=new r);u(bb.g,K)}if("feedback_options"==L)for(var cb=0;cb<K.length;++cb){var Dc=new Na;v.o.push(Dc);var db=void 0,ua=Dc,Ec=K[cb];for(db in Ec){var va=Ec[db],wa=db.toLowerCase();"text"==wa&&(ua.g=va);if("conversion"==wa){var eb=ua;null===eb.h&&(eb.h=new r);u(eb.h,va)}if("undo_conversion"==wa){var fb=ua;null===fb.l&&(fb.l=new r);u(fb.l,va)}if("survey"==wa){var gb=ua;null===gb.j&&(gb.j=new Oa);var ib=void 0,je=gb.j,Fc=va;for(ib in Fc){var Gc=Fc[ib];if("options"==ib.toLowerCase())for(var jb=0;jb<Gc.length;++jb){var Hc=new Pa;je.g.push(Hc);var kb=void 0,Ic=Hc,Jc=Gc[jb];for(kb in Jc){var Kc=Jc[kb],Lc=kb.toLowerCase();"text"==Lc&&(Ic.g=Kc);if("conversion"==Lc){var lb=Ic;null===lb.h&&(lb.h=new r);u(lb.h,Kc)}}}}}}}"mute_panel_data"==L&&null===v.h&&(v.h=new Ra)}}}}if("flags"==da)for(J=0;J<I.length;++J){var Mc=new Ta;H.m.push(Mc);var nb=void 0,Nc=Mc,Oc=I[J];for(nb in Oc){var Pc=Oc[nb],Qc=nb.toLowerCase();"name"==Qc&&(Nc.g=Pc);"value"==Qc&&(Nc.h=Pc)}}}this.u=Sa(Ma(H))}this.ka=!!aa;this.X=!!Zd;this.M=w;this.la=G;this.aa=null;this.creativeIndexSuffix=Vd||"";try{var ob=Hb.querySelector("[data-slide]")}catch(Ne){ob=null}this.oa=ob?"true"===ob.getAttribute("data-slide"):!1;(this.Z=""!==this.creativeIndexSuffix)&&void 0===B.goog_multislot_cache&&(B.goog_multislot_cache={});if(this.Z&&!this.oa){var Rc=B.goog_multislot_cache.hd;if(void 0!==Rc)var pb=Rc;else{var xa=!1,Sc=Hb.querySelector("[data-dim]");if(Sc){var x=Sc.getBoundingClientRect();if(150<=x.right-x.left&&150<=x.bottom-x.top)xa=!1;else{var Tc=document.body.getBoundingClientRect();150>(1>=Math.abs(Tc.left-x.left)&&1>=Math.abs(Tc.right-x.right)?x.bottom-x.top:x.right-x.left)&&(xa=!0)}}else xa=!1;pb=window.goog_multislot_cache.hd=xa}}else pb=!1;this.Y=pb;this.G=A("abgcp"+this.creativeIndexSuffix);this.v=A("abgc"+this.creativeIndexSuffix);this.g=A("abgs"+this.creativeIndexSuffix);this.L=A("abgl"+this.creativeIndexSuffix);this.l=A("abgb"+this.creativeIndexSuffix);this.fa=A("abgac"+this.creativeIndexSuffix);A("mute_panel"+this.creativeIndexSuffix);this.N=Eb("goog_delegate_attribution"+this.creativeIndexSuffix);this.O=!!ae;this.isDelegateAttributionActive=!!this.N&&!!$d&&!Eb("goog_delegate_disabled")&&!this.O;this.H=!!be;this.sa=!!ce;this.qa=!!de;if(this.g)a:{var Uc=this.g;var ke="A";for(var Vc=Uc.childNodes,qb=0;qb<Vc.length;qb++){var rb=Vc.item(qb);if("undefined"!=typeof rb.tagName&&rb.tagName.toUpperCase()==ke){var sb=rb;break a}}sb=Uc}else sb=null;this.j=sb;this.pa=!0===Wd;this.w="left"==Ua;this.J=this.isDelegateAttributionActive?this.N:A("cbb"+this.creativeIndexSuffix);this.ma=this.Y?"0"===this.creativeIndexSuffix:!0;var tb;if(tb=!!this.J){var ub=this.J;tb=ub.classList?ub.classList.contains("goog_dismissable_menu"):0<=vb(ad(ub),"goog_dismissable_menu")}this.enableDismissableMenu=tb;this.na=!0===mc;this.ta=ra||null;this.m=b;this.h=c;this.W=d;this.C=e;this.ha=f;this.ia=g;this.V=h;this.U=m;this.R=l;this.ba=t;this.K=Y;this.S=ba;this.B=this.D=this.A=null;this.$=0;this.o=this.isDelegateAttributionActive?this.N:Ud&&this.G?this.G:this.v;this.I=null;this.F=B;this.isMobileDevice=Yd;this.ga=!!ee};var dd=function(a,b){this.j=a;this.l=b;this.h=0;this.g=null};dd.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.j();return a};var ed=function(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)};var fd=function(a){k.setTimeout(function(){throw a;},0)},gd,hd=function(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==z.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=p(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==z.indexOf("Trident")&&-1==z.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.ca;c.ca=null;a()}};return function(a){d.next={ca:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};var id=function(){this.h=this.g=null},kd=new dd(function(){return new jd},function(a){a.reset()});id.prototype.add=function(a,b){var c=kd.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};var md=function(){var a=ld,b=null;a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null);return b},jd=function(){this.next=this.h=this.g=null};jd.prototype.set=function(a,b){this.g=a;this.h=b;this.next=null};jd.prototype.reset=function(){this.next=this.h=this.g=null};var qd=function(a,b){nd||od();pd||(nd(),pd=!0);ld.add(a,b)},nd,od=function(){if(k.Promise&&k.Promise.resolve){var a=k.Promise.resolve(void 0);nd=function(){a.then(rd)}}else nd=function(){var a=rd,c;!(c=!ya(k.setImmediate))&&(c=k.Window&&k.Window.prototype)&&(c=-1==z.indexOf("Edge")&&k.Window.prototype.setImmediate==k.setImmediate);c?(gd||(gd=hd()),gd(a)):k.setImmediate(a)}},pd=!1,ld=new id,rd=function(){for(var a;a=md();){try{a.g.call(a.h)}catch(b){fd(b)}ed(kd,a)}pd=!1};var T=function(a){this.g=0;this.u=void 0;this.l=this.h=this.j=null;this.m=this.o=!1;if(a!=pa)try{var b=this;a.call(void 0,function(a){S(b,2,a)},function(a){S(b,3,a)})}catch(c){S(this,3,c)}},sd=function(){this.next=this.context=this.h=this.j=this.g=null;this.l=!1};sd.prototype.reset=function(){this.context=this.h=this.j=this.g=null;this.l=!1};var td=new dd(function(){return new sd},function(a){a.reset()}),ud=function(a,b,c){var d=td.get();d.j=a;d.h=b;d.context=c;return d},wd=function(){var a,b=new T(function(b){a=b});return new vd(b,a)};T.prototype.then=function(a,b,c){return xd(this,ya(a)?a:null,ya(b)?b:null,c)};T.prototype.then=T.prototype.then;T.prototype.$goog_Thenable=!0;T.prototype.cancel=function(a){0==this.g&&qd(function(){var b=new yd(a);zd(this,b)},this)};var zd=function(a,b){if(0==a.g)if(a.j){var c=a.j;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?zd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Ad(c),Bd(c,e,3,b)))}a.j=null}else S(a,3,b)},Dd=function(a,b){a.h||2!=a.g&&3!=a.g||Cd(a);a.l?a.l.next=b:a.h=b;a.l=b},xd=function(a,b,c,d){var e=ud(null,null,null);e.g=new T(function(a,g){e.j=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){g(l)}}:a;e.h=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof yd?g(b):a(e)}catch(l){g(l)}}:g});e.g.j=a;Dd(a,e);return e.g};T.prototype.A=function(a){this.g=0;S(this,2,a)};T.prototype.w=function(a){this.g=0;S(this,3,a)};var S=function(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.A,f=a.w;if(d instanceof T){Dd(d,ud(e||pa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(za(d))try{var m=d.then;if(ya(m)){Ed(d,m,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.j=null,Cd(a),3!=b||c instanceof yd||Fd(a,c))}},Ed=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},h=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,h)}catch(m){h(m)}},Cd=function(a){a.o||(a.o=!0,qd(a.v,a))},Ad=function(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b};T.prototype.v=function(){for(var a;a=Ad(this);)Bd(this,a,this.g,this.u);this.o=!1};var Bd=function(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.g)b.g.j=null,Gd(b,c,d);else try{b.l?b.j.call(b.context):Gd(b,c,d)}catch(e){Hd.call(null,e)}ed(td,b)},Gd=function(a,b,c){2==b?a.j.call(a.context,c):a.h&&a.h.call(a.context,c)},Fd=function(a,b){a.m=!0;qd(function(){a.m&&Hd.call(null,b)})},Hd=fd,yd=function(a){y.call(this,a)};Da(yd,y);yd.prototype.name="cancel";var vd=function(a,b){this.h=a;this.g=b};var U=function(){this.h=this.h;this.A=this.A};U.prototype.h=!1;U.prototype.g=function(){if(this.A)for(;this.A.length;)this.A.shift()()};var Kd=function(a){var b=[];Id(new Jd,a,b);return b.join("")},Jd=function(){},Id=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==qa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Id(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ld(d,c),c.push(":"),Id(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ld(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},Md={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Nd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g,Ld=function(a,b){b.push('"',a.replace(Nd,function(a){var b=Md[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Md[a]=b);return b}),'"')};var V=function(a,b,c,d,e,f){U.call(this);this.o=a;this.status=1;this.j=b;this.m=c;this.I=d;this.G=!!e;this.v=Math.random();this.B={};this.u=null;this.w=p(this.H,this);this.F=f};ma(V,U);V.prototype.H=function(a){if(a.origin===this.m&&(this.G||a.source==this.j)){var b=null;try{b=JSON.parse(a.data)}catch(c){}if(za(b)&&(a=b.i,b.c===this.o&&a!=this.v)){if(2!==this.status)try{this.status=2,Od(this),this.u&&(this.u(),this.u=null)}catch(c){}a=b.s;b=b.p;if(n(a)&&(n(b)||za(b))&&this.B.hasOwnProperty(a))this.B[a](b)}}};var Od=function(a){var b={};b.c=a.o;b.i=a.v;a.F&&(b.e=a.F);a.j.postMessage(Kd(b),a.m)};V.prototype.D=function(){if(1===this.status){try{this.j.postMessage&&Od(this)}catch(a){}window.setTimeout(p(this.D,this),50)}};V.prototype.connect=function(a){a&&(this.u=a);C(window,"message",this.w);this.I&&this.D()};var Pd=function(a,b,c){a.B[b]=c};V.prototype.l=function(a,b){var c={};c.c=this.o;c.i=this.v;c.s=a;c.p=b;try{this.j.postMessage(Kd(c),this.m)}catch(d){}};V.prototype.g=function(){this.status=3;D(window,"message",this.w);U.prototype.g.call(this)};var Qd=function(a,b,c,d,e){V.call(this,a,b,c,d);this.C=e};ma(Qd,V);Qd.prototype.l=function(a,b){Rd(this,a,b)};var Sd=function(a,b){var c=new T(function(b,c){k.setTimeout(function(){return c(Error("apmc:nocon"))},4E3);Ab?k.setTimeout(function(){return a.connect(b)},0):a.connect(b)});c.then(function(){return a.w(b)},function(){});return c},Rd=function(a,b,c){c=void 0===c?{}:c;var d={};d.c=a.o;d.i=a.v;d.s=b;d.p=c;a.C&&(d.msg_type=a.C);Ab?k.setTimeout(function(){a.j.postMessage(JSON.stringify(d),a.m)},0):a.j.postMessage(JSON.stringify(d),a.m)},Td=function(a,b){return new T(function(c,d){k.setTimeout(function(){return d(Error("apmc:timeout"))},4E3);try{var e=JSON.parse(a.data),f=e.c;if("apmc:bc:cr"===e.s&&f===b&&null!=a.source&&"string"==typeof a.origin){var g=new Qd(f,a.source,a.origin,!0);Sd(g,a).then(function(){return c(g)},function(){g.h||(g.h=!0,g.g())})}else throw Error("Invalid connection event");}catch(h){d(Error("apmc:error"))}})};var le=function(a,b){U.call(this);this.w=a;this.o=null;this.m=wd();this.l=!1;this.v=b;this.j=oc(276,this.u,this)};ma(le,U);var me=function(a){var b={};b=(b.msg_type=a.w,b);C(B,"message",a.j);a=B.top;b.googMsgType="sth";a.postMessage(Kd(b),"*")};le.prototype.u=function(a){var b=this;Nb(a.source)&&!this.l&&(this.l=!0,Td(a,this.v).then(function(a){D(B,"message",b.j);b.o=a;b.m.g&&b.m.g(a)},function(){b.l=!1}))};le.prototype.g=function(){D(B,"message",this.j);if(this.o){var a=this.o;a.h||(a.h=!0,a.g())}U.prototype.g.call(this)};var ne=function(a,b,c){this.j=a;this.h=b;this.g=c};var ve=function(a,b){var c=this;this.g=a;if(!this.g.sa){a="undefined"!=typeof SVGElement&&"undefined"!=typeof document.createElementNS;"img"==this.g.la&&(a=!1);if(this.g.Y&&!this.g.ma){a={display:"none"};var d={width:"15px",height:"15px"};this.g.isMobileDevice?(F(this.g.l,a),F(this.g.g,a),F(this.g.G,d),F(this.g.v,d)):F(this.g.v,a)}else this.g.isDelegateAttributionActive||this.g.H||(a?"cn"==this.g.M?oe(this):"adchoices"==this.g.M?pe(this):"adsbygoogle"==this.g.M?qe(this):re(this):re(this)),this.o=!1,this.h=null,this.g.j&&this.g.qa&&(this.g.u&&this.g.u.v&&this.g.u.u&&this.g.u.A&&(this.h=new ne(this.g.u.l,this.g.u.j,this.g.u.m)),C(this.g.j,"click",R(452,function(){if(!c.o){c.o=!0;var a=new r;u(a,{label:"closebutton_whythisad_click",T:"1",da:!1});if(c.h){var b=c.h,d=b.j+"&label="+a.label();a.T()&&(d+="&label_instance="+a.T());a.da()&&(d+="&cbt="+b.h);b.g&&(d+="&cid="+b.g);Ib(window,d)}}}))),this.A=R(367,function(){return se(c)}),this.w=R(368,function(){return se(c)}),this.v=R(369,function(){te(c,500)}),this.j=R(370,function(){te(c,4E3)}),this.u=R(371,function(a){return c.preventDefault(a)});if(this.g.ra){var e=R(365,function(a){var b=B.goog_interstitial_display;b&&(b(a),a&&(a.stopPropagation(),a.preventDefault()))});C(this.g.o,"click",function(a){return e(a)})}else this.g.P&&this.g.isMobileDevice?C(this.g.o,"click",b):(this.g.P&&!this.g.isMobileDevice&&this.g.J&&C(this.g.J,"click",b),this.g.ka?se(this):(C(this.g.o,"mouseover",this.A),C(this.g.o,"mouseout",this.v),C(this.g.o,"mouseup",this.j),C(this.g.o,"touchstart",this.w),C(this.g.o,"touchend",this.j),C(this.g.o,"touchcancel",this.j),this.g.j&&C(this.g.j,"click",function(a){return c.u(a)})));this.m=new le("xcat","xca-ch");this.g.X&&ue(this)}this.l=null;this.g.isDelegateAttributionActive&&!this.g.O?(bd("goog_delegate_active"),bd("jaa")):this.l=setTimeout(function(){bd("jar")},this.g.X?750:100);this.g.O&&bd("goog_delegate_disabled");this.g.ga&&B.addEventListener("load",b)},ue=function(a){a.m.m.h.then(function(b){Pd(b,"xca-rdy",function(){a.g.I=$c(a.g.F);var c={abgp:a.g.F.abgp,name:a.g.F.name,abg_href:a.g.L.getAttribute("href"),abg_target:a.g.L.getAttribute("target"),is_mutable_impression:a.g.isMutableImpression,is_mobile:!!a.g.G,is_rtl:a.g.w,has_aria_hidden:"true"===a.g.L.getAttribute("aria-hidden"),serializable_reference_frame_set:Zc(a.g.I)};b.l("render-xca",c)});Pd(b,"req-pos-xca",function(){a.g.I=$c(a.g.F);var c={serializable_reference_frame_set:Zc(a.g.I)};b.l("pos-xca",c)});Pd(b,"xca-dis",function(){clearTimeout(a.l);a.l=null;bd("jaa")});Pd(b,"xca-clk",function(){a.g.aa.expandAttributionCard();b.l("hide-xca",{})});b.l("chk-xca",{})});me(a.m)},oe=function(a){var b=W("\u5e7f\u544a",2,0,24),c=b.childNodes.item(0);we(c,{"class":"abgi","font-size":"11px","font-weight":"bold"});M(a.g.l,[X(xe(),b)]);b=a.g.w?W("\u5e7f\u544a Google",2,0,60):W("Google \u5e7f\u544a",3.5,0,60);c=b.childNodes.item(0);we(c,{"font-size":"11px"});M(a.g.j,[X(ye(a,a.g.h,a.g.C),b)])},pe=function(a){var b=ze;M(a.g.l,[X(xe(),b("0px"))]);if(a.g.w){var c=a.g.m+2;var d=0}else c=5,d=a.g.h-a.g.m;a.g.A=W(a.g.U,c,a.g.S,a.g.R);M(a.g.j,[X(ye(a,a.g.h,a.g.C),b(d+"px"),a.g.A)])},xe=function(){return Z("rect",{"class":"abgbg",width:"100%",height:"100%"})},ye=function(a,b,c){var d="M";a.g.na?(d+="0,"+c+"L"+b+","+c,d=a.g.w?d+("L"+b+",4s0,-4,-4,-4L0,0"):d+("L"+b+",0L4,0s-4,0,-4,4")):(d+="0,0L"+b+",0",d=a.g.w?d+("L"+b+","+(c-4)+"s0,4,-4,4L0,"+c):d+("L"+b+","+c+"L4,"+c+"s-4,0,-4,-4"));return Z("path",{"class":"abgbg",d:d+"z"})},W=function(a,b,c,d){b=Z("svg",{"class":"abgtxt",x:b+"px",y:11+c+"px",width:d+"px"});c=Z("text");a=document.createTextNode(a);M(b,[c]);M(c,[a]);return b},Ae=function(a,b){a=a.childNodes.item(0);var c=a.getComputedTextLength();0!=c&&a.setAttribute("transform","scale("+b/c+")")},re=function(a){var b=Be(a.g.ha,a.g.V,a.g.m,a.g.W);M(a.g.l,[b]);b=Be(a.g.ia,a.g.V,a.g.h,a.g.C);a.g.j.appendChild(b);b.width=a.g.h},Be=function(a,b,c,d){var e=document.createElement("IMG");e.src=a;e.alt=b;e.setAttribute("border","0");e.width=c;e.height=d;return e},qe=function(a){var b=Ce,c=xe(),d=b("0px");M(a.g.l,[X(c,d)]);if(a.g.w){var e=0;d=a.g.m+2;var f=a.g.h-a.g.K-5}else d=5,f=a.g.h-a.g.K-2-a.g.m,e=a.g.h-a.g.m;c=ye(a,a.g.h,a.g.C);a.g.A=W(a.g.U,d,a.g.S,a.g.R);""!=a.g.ba&&(a.g.D=W(a.g.ba,f,a.g.S,a.g.K));b=b(e+"px");null!=a.g.j&&(b=a.g.D?X(c,a.g.A,a.g.D,b):X(c,a.g.A,b),M(a.g.j,[b]))},se=function(a){window.clearTimeout(a.g.B);a.g.B=null;a.g.g&&"block"==a.g.g.style.display||(a.g.$=Ca(),!a.g.H&&a.g.h&&(a.g.v.style.width=a.g.h+"px",a.g.v.style.height=a.g.C+"px"),a.g.l&&a.g.g&&(a.g.l.style.display="none",a.g.g.style.display="block",window.goog_extracreative_attribution&&window.postMessage("xca_exp","*")),a.g.H||(a.g.A&&Ae(a.g.A,a.g.R),a.g.D&&Ae(a.g.D,a.g.K)))},te=function(a,b){window.clearTimeout(a.g.B);a.g.B=window.setTimeout(function(){return De(a)},b)},De=function(a){window.clearTimeout(a.g.B);a.g.B=null;!a.g.H&&a.g.m&&(a.g.v.style.width=a.g.m+"px",a.g.v.style.height=a.g.W+"px");a.g.l&&a.g.g&&(a.g.l.style.display="block",a.g.g.style.display="none");window.goog_extracreative_attribution&&window.postMessage("xca_col","*")};ve.prototype.preventDefault=function(a){if(this.g.g&&"block"==this.g.g.style.display&&500>Ca()-this.g.$)Mb(a);else if(this.g.pa){var b=this.g.j.getAttribute("href");window.adSlot?window.adSlot.openSystemBrowser(b)&&Mb(a):window.openSystemBrowser&&(window.openSystemBrowser(b),Mb(a))}};var X=function(a){for(var b=Z("svg",{width:"100%",height:"100%"}),c=0;c<arguments.length;c++)b.appendChild(arguments[c]);return b},Z=function(a,b){a=document.createElementNS("http://www.w3.org/2000/svg",a);we(a,b);return a},we=function(a,b){for(var c in b)a.setAttribute(c,b[c])},ze=function(a){a=Z("svg",{"class":"abgi",x:a});var b=Z("circle",{cx:"6",cy:"6",r:"0.67"}),c=Z("path",{d:"M4.2,11.3Q3.3,11.8,3.3,10.75L3.3,4.1Q3.3,3.1,4.3,3.5L10.4,7.0Q12.0,7.5,10.4,8.0L6.65,10.0L6.65,7.75a0.65,0.65,0,1,0,-1.3,0L5.35,10.75a0.9,0.9,0,0,0,1.3,0.8L12.7,8.2Q13.7,7.5,12.7,6.7L3.3,1.6Q2.2,1.3,1.8,2.5L1.8,12.5Q2.2,13.9,3.3,13.3L4.8,12.5A0.3,0.3,0,1,0,4.2,11.3Z"});M(a,[b,c]);return a},Ee=function(a,b){return"a"+a+","+a+",0,1,"+b+",0,"+2*a+"a"+a+","+a+",0,1,"+b+",0,"+-2*a},Ce=function(a){a=Z("svg",{"class":"abgi",x:a});var b=Z("path",{d:"M7.5,1.5"+Ee(6,0)+"m0,1"+Ee(5,1)+"ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75"+Ee(1,0)+"Z"});M(a,[b]);return a};var He=function(){var a=Fe,b=window.abgp,c=this;if(!a)throw Error("bad ctor");this.h=a;this.j=b;this.g=!1;Eb("goog_delegate_deferred")?void 0!==B.goog_delegate_deferred_token?Ge(this):(a=function(){Ge(c)},B.goog_delegate_deferred_token=a,setTimeout(a,5E3)):Ge(this)},Ge=function(a){if(!a.g){a.g=!0;B.goog_delegate_deferred_token=void 0;var b=a.h;a=a.j;a=new cd(a.imi,a.hw,a.sw,a.hh,a.sh,a.himg,a.simg,a.alt,a.t,a.tw,a.t2,a.t2w,a.tbo,a.att,a.halign,a.ff,a.fe,a.iba,a.lttp,a.ci,a.ufdj,a.opi,a.ti,a.mob,a.eaca,a.eda,a.fdda,a.eisa,a.ulf,a.swc,a.aeol);new b(a)}};var Ie=function(){var a="http";k.location&&"https:"==k.location.protocol&&"http"==a&&(a="https");return[a,"://pagead2.googlesyndication.com/pagead/js/r20180801/r20110914/abg_survey.js"].join("")};var Je=function(){var a=wd();this.promise=a.h;this.resolve=a.g};function Ke(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Je,b&&b());return a[5]}var Le=function(){var a=window,b=Ie();return Ke(a,function(){var c=a.document,d=c.createElement("script"),e=new Cb;e.g=b;e instanceof Cb&&e.constructor===Cb&&e.h===Bb?e=e.g:(qa(e),e="type_error:TrustedResourceUrl");d.src=e;if(null===oa){b:{e=k.document;if((e=e.querySelector&&e.querySelector("script[nonce]"))&&(e=e.nonce||e.getAttribute("nonce"))&&na.test(e))break b;e=null}oa=e||""}(e=oa)&&d.setAttribute("nonce",e);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c)}).promise};var Fe=function(a){var b=this;this.g=a;this.j=R(359,function(){return Me(b)});this.h=new ve(this.g,this.j)},Me=function(a){lc(nc,373,function(){De(a.h);a.h.g.fa.style.display="block"},Wc);window.goog_extracreative_attribution||Le().then(function(b){b.createAttributionCard(a.g.ta,a.g);a.g.aa=b;b.expandAttributionCard()})};"undefined"!=typeof window.abgp&&new He;}).call(this);
