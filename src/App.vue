<template>
  <div id="app">
    <div id="nav" v-show="navFlag">
      <router-link to="/">
        <span class="iconfont icon-shouye"></span>
        <p>首页</p>
      </router-link>
      <router-link to="/classify">
        <span class="iconfont icon-fenlei"></span>
        <p>分类</p>
      </router-link>
      <router-link to="/buycar">
        <span class="iconfont icon-gouwuche"></span>
        <p>购物车</p>
      </router-link>
      <router-link to="/mine">
        <span class="iconfont icon-wodedangxuan"></span>
        <p>我的</p>
      </router-link>
    </div>
    <router-view />
    <div class="footer" v-show="navFlag"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["navFlag"]),
  },
};
</script>

<style>
.footer {
  height: 60px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

#nav {
  position: fixed;
  width: 100%;
  height: 50px;
  left: 0;
  bottom: 0;
  z-index: 200;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 -1px 1px #eee;
}

#nav a {
  display: block;
  width: 25%;
  text-align: center;
}
#nav a p {
  margin: 3px 0;
}
#nav a span {
  font-size: 19px;
}

#nav a.router-link-exact-active {
  color: #f00;
}
</style>
