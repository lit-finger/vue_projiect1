(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cf40c68"],{"266e":function(t,s,i){},"3bf9":function(t,s,i){"use strict";i("266e")},"5d36":function(t,s,i){"use strict";i.r(s);var o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},[i("div",{staticClass:"topImg"},t._l(t.smallImgList,(function(s,o){return i("div",{key:o,staticClass:"top-item"},[i("img",{attrs:{src:s.src}}),i("div",[t._v(t._s(s.name))])])})),0),i("div",{staticClass:"goods"},t._l(t.goodsList,(function(s){return i("div",{key:s.id,staticClass:"goods-item"},[i("img",{attrs:{src:s.goodsimg}}),i("div",{staticClass:"goodname"},[t._v(t._s(s.goodsname))]),i("div",{staticClass:"goodprice"},[t._v("￥"+t._s(s.goodsprice))])])})),0)])],1)},n=[],e=(i("4de4"),i("5530")),a=i("2f62"),d=i("1644"),c=i("d399"),l={data:function(){return{smallImgList:[],goodsList:[],isLoading:!1}},methods:{onRefresh:function(){var t=this;d["a"].getGoods().then((function(s){var i=s.data.filter((function(s){return s.id==t.homeIndex}));t.goodsList=i[0].list,t.smallImgList=i[0].smallimglist,Object(c["a"])("刷新成功"),t.isLoading=!1}))}},created:function(){var t=this;d["a"].getGoods().then((function(s){var i=s.data.filter((function(s){return s.id==t.homeIndex}));t.goodsList=i[0].list,t.smallImgList=i[0].smallimglist}))},computed:Object(e["a"])({},Object(a["c"])(["homeIndex"])),watch:{homeIndex:function(t){var s=this;d["a"].getGoods().then((function(i){var o=i.data.filter((function(s){return s.id==t}));s.goodsList=o[0].list,s.smallImgList=o[0].smallimglist}))}}},r=l,u=(i("3bf9"),i("2877")),m=Object(u["a"])(r,o,n,!1,null,"471a5c0d",null);s["default"]=m.exports}}]);
//# sourceMappingURL=chunk-5cf40c68.79c84a61.js.map