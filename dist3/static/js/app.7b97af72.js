(function(e){function n(n){for(var a,c,i=n[0],u=n[1],s=n[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);h&&h(n);while(d.length)d.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(a=!1)}a&&(r.splice(n--,1),e=u(u.s=t[0]))}return e}var a={},c={app:0},o={app:0},r=[];function i(e){return u.p+"static/js/"+({}[e]||e)+"."+{"chunk-016e016a":"65ee14da","chunk-09a481ec":"cef78cef","chunk-124ee888":"c44158ea","chunk-13563558":"c2461ea8","chunk-2d0bce03":"7746dd3f","chunk-376588ed":"609dcf5c","chunk-38e772dc":"87232913","chunk-5cf40c68":"79c84a61","chunk-69dece48":"eff0d4cf","chunk-7b70ac01":"68e0fc79","chunk-81401dee":"158446fc","chunk-ce38c328":"cf31cde3","chunk-d26a9158":"6bd7eb58","chunk-d8aa13d2":"7c6ec0ed","chunk-e33013f2":"6f3e37ea"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-016e016a":1,"chunk-09a481ec":1,"chunk-124ee888":1,"chunk-13563558":1,"chunk-376588ed":1,"chunk-38e772dc":1,"chunk-5cf40c68":1,"chunk-69dece48":1,"chunk-7b70ac01":1,"chunk-81401dee":1,"chunk-ce38c328":1,"chunk-d26a9158":1,"chunk-d8aa13d2":1,"chunk-e33013f2":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="static/css/"+({}[e]||e)+"."+{"chunk-016e016a":"b8f56265","chunk-09a481ec":"755fd075","chunk-124ee888":"85dcf417","chunk-13563558":"26022228","chunk-2d0bce03":"31d6cfe0","chunk-376588ed":"bdd8edd3","chunk-38e772dc":"0e63aa5d","chunk-5cf40c68":"4dd7c200","chunk-69dece48":"07a14c9a","chunk-7b70ac01":"6bdba626","chunk-81401dee":"3981ed42","chunk-ce38c328":"fc973c6a","chunk-d26a9158":"a5815d01","chunk-d8aa13d2":"d09f6a18","chunk-e33013f2":"3a9daba3"}[e]+".css",o=u.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===a||l===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var a=n&&n.target&&n.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],h.parentNode.removeChild(h),t(r)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,t[1](d)}o[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(t,a,function(n){return e[n]}.bind(null,a));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var h=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},1644:function(e,n,t){"use strict";var a=t("ce0d"),c={getBannerList:function(e){return Object(a["a"])({url:"/self/bannerimg",method:"get",params:e})},getHotImgList:function(e){return Object(a["a"])({url:"/self/hotimg",method:"get",params:e})},getGoods:function(e){return Object(a["a"])({url:"/self/goodslist",method:"get",params:e})}};n["a"]=c},"1b1d":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.navFlag,expression:"navFlag"}],attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[t("span",{staticClass:"iconfont icon-shouye"}),t("p",[e._v("首页")])]),t("router-link",{attrs:{to:"/classify"}},[t("span",{staticClass:"iconfont icon-fenlei"}),t("p",[e._v("分类")])]),t("router-link",{attrs:{to:"/buycar"}},[t("span",{staticClass:"iconfont icon-gouwuche"}),t("p",[e._v("购物车")])]),t("router-link",{attrs:{to:"/mine"}},[t("span",{staticClass:"iconfont icon-wodedangxuan"}),t("p",[e._v("我的")])])],1),t("router-view"),t("div",{directives:[{name:"show",rawName:"v-show",value:e.navFlag,expression:"navFlag"}],staticClass:"footer"})],1)},o=[],r=t("5530"),i=t("2f62"),u={computed:Object(r["a"])({},Object(i["c"])(["navFlag"]))},s=u,l=(t("034f"),t("2877")),d=Object(l["a"])(s,c,o,!1,null,null,null),h=d.exports,f=(t("d3b7"),t("8c4f")),m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("div",{staticClass:"header"},[t("div",{staticClass:"header1"},[e._m(0),t("div",{on:{click:e.goSearch}},[t("van-search",{attrs:{placeholder:"搜索商品、品牌"}})],1),e._m(1)]),t("div",{staticClass:"header2"},[t("div",{staticClass:"header2_nav"},[t("div",{staticClass:"nav_box"},e._l(e.navList,(function(n,a){return t("p",{key:a,class:{selected:e.select==a},on:{click:function(n){return e.changePage(a)}}},[t("router-link",{attrs:{to:e.gotoUrl(a)}},[e._v(" "+e._s(n)+" ")])],1)})),0)]),e._m(2)])]),t("router-view")],1)},p=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("span",{staticClass:"iconfont icon-saoyisao"})])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("span",{staticClass:"iconfont icon-pinglun"})])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"header2_icon"},[t("span",{staticClass:"iconfont icon-xiajiantou"})])}],g=(t("c975"),t("1644"),{data:function(){return{select:0,navList:["有货","上装","裤装","球鞋","女装","生活","潮玩","美妆"]}},created:function(){var e=location.hash.charAt(location.hash.indexOf("?")+1);e>0?(this.select=e,this.changeHomeIndex(e)):this.select=0},mounted:function(){localStorage.setItem("lastUrl",location.hash)},methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["changeHomeIndex"])),{},{changePage:function(e){this.select=e,this.changeHomeIndex(e)},gotoUrl:function(e){return e<=0?"/main1":"/main2?"+e},goSearch:function(){this.$router.push({name:"search"})}})}),b=g,v=(t("ff00"),Object(l["a"])(b,m,p,!1,null,"5b7c54ec",null)),k=v.exports;a["a"].use(f["a"]);var y=[{path:"/",name:"Home",component:k,children:[{path:"",meta:{title:"首页"},component:function(){return t.e("chunk-38e772dc").then(t.bind(null,"96ec"))}},{path:"main1",name:"main1",meta:{title:"首页"},component:function(){return t.e("chunk-38e772dc").then(t.bind(null,"96ec"))}},{path:"main2",name:"main2",meta:{title:"首页"},component:function(){return t.e("chunk-5cf40c68").then(t.bind(null,"5d36"))}}]},{path:"/classify",name:"classify",meta:{title:"全部分类"},component:function(){return t.e("chunk-7b70ac01").then(t.bind(null,"0929"))}},{path:"/goodslist",name:"goodslist",meta:{title:"商品列表"},component:function(){return t.e("chunk-016e016a").then(t.bind(null,"ba9f"))}},{path:"/goodsdetail/:id",name:"goodsdetail",meta:{title:"商品详情"},component:function(){return t.e("chunk-d8aa13d2").then(t.bind(null,"c7ea"))}},{path:"/search",name:"search",meta:{title:"搜索"},component:function(){return t.e("chunk-81401dee").then(t.bind(null,"2d3b"))}},{path:"/buycar",name:"buycar",meta:{title:"购物车",islogin:!0},component:function(){return t.e("chunk-69dece48").then(t.bind(null,"bdbb"))}},{path:"/pay",name:"pay",meta:{title:"确认订单",islogin:!0},component:function(){return t.e("chunk-376588ed").then(t.bind(null,"76a1"))}},{path:"/chooseaddr",name:"chooseaddr",meta:{title:"选择地址",islogin:!0},component:function(){return t.e("chunk-13563558").then(t.bind(null,"95de"))}},{path:"/addaddr/:id",name:"addaddr",meta:{title:"添加地址",islogin:!0},component:function(){return t.e("chunk-09a481ec").then(t.bind(null,"182f"))}},{path:"/mine",name:"mine",meta:{title:"个人"},component:function(){return t.e("chunk-124ee888").then(t.bind(null,"0a4e"))}},{path:"/login",name:"login",meta:{title:"登录"},component:function(){return t.e("chunk-e33013f2").then(t.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{title:"注册"},component:function(){return t.e("chunk-d26a9158").then(t.bind(null,"73cf"))}},{path:"/mydetail",name:"mydetail",meta:{title:"个人详情"},component:function(){return t.e("chunk-ce38c328").then(t.bind(null,"0f06"))}},{path:"/404",name:"404",meta:{title:"404"},component:function(){return t.e("chunk-2d0bce03").then(t.bind(null,"2a31"))}},{path:"*",redirect:{name:"404"}}],_=new f["a"]({routes:y});_.beforeEach((function(e,n,t){e.meta&&e.meta.title&&(document.title=e.meta.title),e.meta&&e.meta.islogin&&(window.localStorage.getItem("logUser")?t():t({name:"login"})),t()}));var w=_;a["a"].use(i["a"]);var C=new i["a"].Store({state:{navFlag:!0,homeIndex:0,carToPay:[],keyWord:""},mutations:{changeNavFlag:function(e,n){e.navFlag=n},changeHomeIndex:function(e,n){e.homeIndex=n<=3?n:1},changeCarToPay:function(e,n){e.carToPay=n},changeKeyWord:function(e,n){e.keyWord=n}},actions:{},modules:{}}),O=(t("499a"),t("b970")),j=(t("157a"),t("bc3a")),x=t.n(j);a["a"].use(O["a"]),a["a"].prototype.$axios=x.a,a["a"].config.productionTip=!1,new a["a"]({router:w,store:C,render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,n,t){},ce0d:function(e,n,t){"use strict";var a=t("bc3a"),c=t.n(a);n["a"]=c.a},ff00:function(e,n,t){"use strict";t("1b1d")}});
//# sourceMappingURL=app.7b97af72.js.map