<template>
  <div>
    <div class="top">
      <van-nav-bar
        title="商品列表"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <span class="iconfont icon-fangdajing1"></span>
        </template>
      </van-nav-bar>
      <div class="sort">
        <div
          class="sort-item"
          @click="order(1)"
          :class="{ selected: select == 1 }"
        >
          默认
        </div>
        <div
          class="sort-item"
          @click="order(2)"
          :class="{ selected: select == 2 }"
        >
          人气
        </div>
        <div
          class="sort-item"
          @click="order(3)"
          :class="{ selected: select == 3 }"
        >
          新品
        </div>
        <div class="sort-item" @click="order(4)">
          <span :class="{ selected: select >= 4 }">价格</span>
          <div class="jiantou">
            <span
              class="iconfont icon-shangjiantou"
              :class="{ selected: select == 4 }"
            ></span>
            <span
              class="iconfont icon-jiantou9"
              :class="{ selected: select == 5 }"
            ></span>
          </div>
        </div>
        <div class="sort-item">筛选</div>
      </div>
    </div>
    <div class="content" v-if="flag">
      <van-pull-refresh
        v-model="refreshing"
        @refresh="onRefresh"
        head-height="100"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div
            class="good"
            v-for="item in goodsList"
            :key="item.id"
            @click="goDetail(item.id)"
          >
            <img :src="item.goodsimg" />
            <div class="goodname">{{ item.goodsname }}</div>
            <div class="goodprice">￥{{ item.goodsprice }}</div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapState, mapMutations } from "vuex";
import classifyInfo from "../model/classify";
export default {
  data() {
    return {
      allGoods: [],
      goodsList: [],
      startNum: 0,
      endNum: 10,
      select: 1,
      flag: false,
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    ...mapMutations(["changeNavFlag"]),
    goDetail(id) {
      this.$router.push({
        name: "goodsdetail",
        params: { id },
      });
    },
    onClickLeft() {
      this.$router.push({ name: "classify" });
    },
    onClickRight() {
      this.$router.push({ name: "search" });
    },
    order(num) {
      if (this.select == 4 && num == 4) {
        this.select = 5;
        num = 5;
      } else if (this.select == 5 && num == 4) {
        this.select = 4;
      } else {
        this.select = num;
      }
      switch (num) {
        case 1:
          classifyInfo.getGoodsList({ id: 10 }).then((res) => {
            this.allGoods = res.data[0].list;
            this.goodsList = this.allGoods.slice(0, 10);
          });
          break;
        case 2:
          this.allGoods.sort((a, b) => b.popular - a.popular);
          this.goodsList = this.allGoods.slice(0, 10);
          break;
        case 3:
          this.allGoods.sort((a, b) => b.id - a.id);
          this.goodsList = this.allGoods.slice(0, 10);
          break;
        case 4:
          this.allGoods.sort((a, b) => a.goodsprice - b.goodsprice);
          this.goodsList = this.allGoods.slice(0, 10);
          break;
        case 5:
          this.allGoods.sort((a, b) => b.goodsprice - a.goodsprice);
          this.goodsList = this.allGoods.slice(0, 10);
          break;
      }
    },
    onLoad() {
      this.startNum += 10;
      this.endNum += 10;
      this.endNum =
        this.endNum > this.allGoods.length ? this.allGoods.length : this.endNum;

      setTimeout(() => {
        if (this.refreshing) {
          this.startNum = 0;
          this.endNum = 10;
          this.goodsList = [];
          this.refreshing = false;
        }
        this.goodsList = this.goodsList.concat(
          this.allGoods.slice(this.startNum, this.endNum)
        );
        this.loading = false;
        if (this.goodsList.length >= this.allGoods.length) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
  computed: {
    ...mapState(["keyWord"]),
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.changeNavFlag(false);
      if (from.name && from.name.indexOf("search") != -1) {
        classifyInfo.getGoodsByKey({ q: vm.keyWord }).then((res) => {
          vm.allGoods = res.data;
          vm.goodsList = vm.allGoods.slice(0, 10);
          vm.flag = true;
        });
      } else {
        classifyInfo.getGoodsList({ id: 10 }).then((res) => {
          vm.allGoods = res.data[0].list;
          vm.goodsList = vm.allGoods.slice(0, 10);
          vm.flag = true;
        });
      }
    });
  },
  mounted() {
    localStorage.setItem("lastUrl", location.hash);
  },
  beforeRouteLeave(to, from, next) {
    this.changeNavFlag(true);
    next();
  },
};
</script>

<style lang="scss" scoped>
.top {
  position: sticky;
  left: 0;
  top: 0;
  z-index: 120;
}

.van-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
/deep/ .van-list__error-text,
/deep/ .van-list__finished-text,
/deep/ .van-list__loading {
  width: 100%;
}
.good {
  width: 48%;
  box-sizing: border-box;
  padding: 10px;
  text-align: left;
}
.good > img {
  width: 100%;
  height: 210px;
}
.good .goodname {
  width: 100%;
  height: 30px;
  line-height: 17px;
  padding: 6px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.good .goodprice {
  font-size: 14px;
  color: #f00;
}
/deep/ .van-nav-bar .van-icon {
  color: #fff;
  font-size: 24px;
}
.top .van-nav-bar {
  background-color: #323232;
}
/deep/ .van-nav-bar__title {
  color: #fff;
  font-size: 20px;
}
.van-nav-bar__right .iconfont {
  font-size: 20px;
  color: #fff;
}
.sort {
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  background-color: #fff;
}
.sort-item {
  width: 20%;
  position: relative;
  font-size: 13px;
}
.jiantou {
  position: absolute;
  right: 10px;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.jiantou .iconfont {
  font-size: 8px;
}
.selected {
  font-size: 16px;
  color: #dd4f14;
}
</style>