(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-124ee888"],{"0a4e":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"top"},[s("van-nav-bar",{attrs:{title:"个人中心"},on:{"click-left":t.godetail,"click-right":t.onClickRight},scopedSlots:t._u([{key:"left",fn:function(){return[s("span",{staticClass:"iconfont icon-shezhi"})]},proxy:!0},{key:"right",fn:function(){return[s("span",{staticClass:"iconfont icon-icon"})]},proxy:!0}])})],1),s("div",{staticClass:"content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.logFlag,expression:"logFlag"}],staticClass:"loginBox"},[s("div",{staticClass:"loginBtn",on:{click:t.goLogin}},[t._v("登录 / 注册")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.logFlag,expression:"!logFlag"}],staticClass:"loginBox"},[s("div",{staticClass:"detailBox",on:{click:t.godetail}},[s("img",{attrs:{src:"//img12.static.yhbimg.com/article/2019/02/26/16/02456ade977d8dfdbc4ca548b196c1d62b.png?imageView/2/w/100/h/100/q/90"}}),s("div",[s("div",{staticClass:"phone"},[t._v(t._s(t.userPhone))]),s("div",{staticClass:"sign"},[t._v("# "+t._s(t.sign)+" #")])])])]),s("div",{staticClass:"menu"},[s("van-cell",{attrs:{"is-link":"",title:"默认购物频道"}}),s("span",{staticClass:"rightText"},[t._v("男士MEN")])],1),s("div",{staticClass:"menu order"},[s("van-cell",{attrs:{"is-link":"",title:"我的订单"}}),s("span",{staticClass:"rightText"},[t._v("全部订单")])],1),t._m(0),t._m(1),s("div",{staticClass:"cheapBox"},[s("div",{staticClass:"menu"},[t._m(2),s("div",{staticClass:"line"}),s("van-cell",{attrs:{"is-link":"",title:"优惠券"}})],1),s("div",{staticClass:"menu"},[t._m(3),s("van-cell",{attrs:{"is-link":"",title:"有货币"}})],1)]),s("div",{staticClass:"cheapBox"},[s("div",{staticClass:"menu"},[t._m(4),s("div",{staticClass:"line"}),s("van-cell",{attrs:{"is-link":"",title:"消息"}})],1),s("div",{staticClass:"menu"},[t._m(5),s("van-cell",{attrs:{"is-link":"",title:"服务与反馈"}})],1)]),t._m(6),t._m(7)])])},e=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"menu2"},[s("div",[s("span",{staticClass:"iconfont icon-icon-test"}),s("div",[t._v("待付款")])]),s("div",[s("span",{staticClass:"iconfont icon-daifahuo"}),s("div",[t._v("待发货")])]),s("div",[s("span",{staticClass:"iconfont icon-icon-test1"}),s("div",[t._v("待收货")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"menu2"},[s("div",[s("span",{staticClass:"icontext"},[t._v("0")]),s("div",[t._v("商品收藏")])]),s("div",[s("span",{staticClass:"icontext"},[t._v("0")]),s("div",[t._v("品牌收藏")])]),s("div",[s("span",{staticClass:"icontext"},[t._v("0")]),s("div",[t._v("浏览记录")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"iconLeft"},[s("span",{staticClass:"iconfont icon-youhuiquan"})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"iconLeft"},[s("span",{staticClass:"iconfont icon-huobi"})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"iconLeft"},[s("span",{staticClass:"iconfont icon-dkw_xiaoxi"})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"iconLeft"},[s("span",{staticClass:"iconfont icon-fuwuerji"})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"cheapBox"},[s("img",{attrs:{src:"//img11.static.yhbimg.com/yhb-img01/2017/12/18/17/015ca6b18d8571b763e583a288646f737c.jpg?imageView2/3/w/640/h/200/q/60"}})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"cheapBox"},[s("img",{attrs:{src:"//img11.static.yhbimg.com/yhb-img01/2017/11/16/16/0170b0b5b96d1dc3cfd8a23599cc3eb425.jpg?imageView2/3/w/640/h/200/q/60"}})])}],n=s("b846"),c={data:function(){return{logFlag:!0,userPhone:"",sign:""}},created:function(){var t=this,i=localStorage.getItem("logUser");i?(this.logFlag=!1,n["a"].check({id:i}).then((function(i){t.userPhone=i.data[0].userPhone,t.sign=i.data[0].userSign}))):this.logFlag=!0},mounted:function(){localStorage.getItem("logUser")?this.logFlag=!1:this.logFlag=!0,localStorage.setItem("lastUrl",location.hash)},methods:{godetail:function(){this.$router.push({name:"mydetail"})},onClickRight:function(){},goLogin:function(){this.$router.push({name:"login"})}}},l=c,o=(s("cc4e"),s("2877")),r=Object(o["a"])(l,a,e,!1,null,"5cb82e16",null);i["default"]=r.exports},b846:function(t,i,s){"use strict";var a=s("ce0d"),e={check:function(t){return Object(a["a"])({method:"get",url:"/self/userinfos",params:t})},add:function(t){return Object(a["a"])({method:"post",url:"/self/userinfos",data:t})},update:function(t,i){return Object(a["a"])({method:"patch",url:"/self/userinfos/"+t,data:i})}};i["a"]=e},cc4e:function(t,i,s){"use strict";s("fe82")},fe82:function(t,i,s){}}]);
//# sourceMappingURL=chunk-124ee888.c44158ea.js.map