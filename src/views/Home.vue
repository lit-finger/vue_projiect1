<template>
  <div class="home">
    <div class="header">
      <div class="header1">
        <p><span class="iconfont icon-saoyisao"></span></p>
        <div @click="goSearch">
          <van-search placeholder="搜索商品、品牌" />
        </div>
        <p><span class="iconfont icon-pinglun"></span></p>
      </div>
      <div class="header2">
        <div class="header2_nav">
          <div class="nav_box">
            <p
              v-for="(item, index) in navList"
              :key="index"
              @click="changePage(index)"
              :class="{ selected: select == index }"
            >
              <router-link :to="gotoUrl(index)">
                {{ item }}
              </router-link>
            </p>
          </div>
        </div>
        <div class="header2_icon">
          <span class="iconfont icon-xiajiantou"></span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.header2_nav .selected {
  font-size: 18px;
  font-weight: 700;
}
.header {
  width: 100%;
  height: 80px;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: #fff;
  padding: 0 5px;
  box-sizing: border-box;
}
.header1 {
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
}
.header1 > div {
  width: 80%;
  height: 40px;
}
.header1 .van-search {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}
.header1 > p {
  width: 10%;
  height: 40px;
  line-height: 40px;
}
.header1 > p > span {
  font-size: 18px;
}
.header2 {
  width: 100%;
  height: 40px;
  position: relative;
}
.header2_nav {
  width: 90%;
  height: 40px;
  overflow-x: scroll;
}
.header2_nav::-webkit-scrollbar {
  display: none;
}
.nav_box {
  width: max-content;
  display: flex;
}
.header2_nav p {
  width: 60px;
  line-height: 40px;
  margin: 0;
  font-size: 14px;
}
.header2_nav p > a {
  color: #000;
}
.header2_icon {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 101;
  width: 10%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
}
.header2_icon span {
  font-size: 18px;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapMutations } from "vuex";
import homeInfo from "../model/homeModel";

export default {
  data() {
    return {
      select: 0,
      navList: ["有货", "上装", "裤装", "球鞋", "女装", "生活", "潮玩", "美妆"],
    };
  },
  created() {
    var num = location.hash.charAt(location.hash.indexOf("?") + 1);
    if (num > 0) {
      this.select = num;
      this.changeHomeIndex(num);
    } else {
      this.select = 0;
    }
  },
  mounted() {
    localStorage.setItem("lastUrl", location.hash);
  },
  methods: {
    ...mapMutations(["changeHomeIndex"]),
    changePage(index) {
      this.select = index;
      this.changeHomeIndex(index);
    },
    gotoUrl(index) {
      if (index <= 0) {
        return "/main1";
      } else {
        return "/main2?" + index;
      }
    },
    goSearch() {
      this.$router.push({ name: "search" });
    },
  },
};
</script>
