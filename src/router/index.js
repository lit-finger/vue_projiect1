import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    children: [{
        path: "",
        meta: {
          title: "首页"
        },
        component: () => import("../components/home/Main1.vue")
      },
      {
        path: "main1",
        name: "main1",
        meta: {
          title: "首页"
        },
        component: () => import("../components/home/Main1.vue")
      },
      {
        path: "main2",
        name: "main2",
        meta: {
          title: "首页"
        },
        component: () => import("../components/home/Main2.vue")
      }
    ]
  },
  {
    path: "/classify",
    name: "classify",
    meta: {
      title: "全部分类"
    },
    component: () => import("../views/Classify.vue"),
  },
  {
    path: "/goodslist",
    name: "goodslist",
    meta: {
      title: "商品列表"
    },
    component: () => import("../views/Goodslist.vue"),
  },
  {
    path: "/goodsdetail/:id",
    name: "goodsdetail",
    meta: {
      title: "商品详情"
    },
    component: () => import("../views/Goodsdetail.vue"),
  },
  {
    path: "/search",
    name: "search",
    meta: {
      title: "搜索"
    },
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/buycar",
    name: "buycar",
    meta: {
      title: "购物车",
      islogin: true,
    },
    component: () => import("../views/Buycar.vue")
  },
  {
    path: "/pay",
    name: "pay",
    meta: {
      title: "确认订单",
      islogin: true,
    },
    component: () => import("../views/Pay.vue")
  },
  {
    path: "/chooseaddr",
    name: "chooseaddr",
    meta: {
      title: "选择地址",
      islogin: true,
    },
    component: () => import("../views/Chooseaddr.vue")
  },
  {
    path: "/addaddr/:id",
    name: "addaddr",
    meta: {
      title: "添加地址",
      islogin: true,
    },
    component: () => import("../views/Addaddr.vue")
  },
  {
    path: "/mine",
    name: "mine",
    meta: {
      title: "个人"
    },
    component: () => import("../views/Mine.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
    },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    meta: {
      title: "注册"
    },
    component: () => import("../views/Register.vue")
  },
  {
    path: "/mydetail",
    name: "mydetail",
    meta: {
      title: "个人详情",
      islogin: true,
    },
    component: () => import("../views/Mydetail.vue")
  },
  {
    path: "/404",
    name: "404",
    meta: {
      title: "404"
    },
    component: () => import("../views/Notfound.vue")
  },
  {
    path: "*",
    redirect: {
      name: "404"
    }
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.meta && to.meta.islogin) { //需要登录才能进行
    if (window.localStorage.getItem("logUser")) {
      next()
    } else {
      next({
        name: "login"
      })
    }
  }
  next();
})

export default router;