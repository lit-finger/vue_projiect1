<template>
  <div>
    <div class="swipe">
      <swiper :bannerlist="bannerlist"></swiper>
    </div>
    <div class="navimg">
      <div @click="gotoGoodslist">
        <img
          src="https://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01ae835d5ae6d9502818daf351ad2db6cf.png?imageView2/2/w/98/h/98/q/60"
        />
        <div>新品到着</div>
      </div>
      <div @click="gotoGoodslist">
        <img
          src="https://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/011004f5a04caaf9c18d7848049a75981e.png?imageView2/2/w/98/h/98/q/60"
        />
        <div>人气搭配</div>
      </div>
      <div @click="gotoGoodslist">
        <img
          src="https://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/01d35157ab5942ea40b4f08a11c1680a17.png?imageView2/2/w/98/h/98/q/60"
        />
        <div>折扣专区</div>
      </div>
      <div @click="gotoGoodslist">
        <img
          src="https://img11.static.yhbimg.com/yhb-img01/2019/12/06/15/017563081b437d62c45c914a983354eb89.png?imageView2/2/w/98/h/98/q/60"
        />
        <div>有货拼团</div>
      </div>
      <div @click="gotoClassify">
        <img
          src="https://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01b097e06ac9fc78bbcc3d3e0dfbe01fcc.png?imageView2/2/w/98/h/98/q/60"
        />
        <div>全部分类</div>
      </div>
    </div>
    <div class="hotClassify">
      <div class="classifyTitle">热门品类</div>
      <div class="classifyContent">
        <div class="class_item" v-for="item in hotimglist" :key="item.id">
          <img :src="item.src" @click="gotoGoodslist" />
        </div>
      </div>
    </div>
    <div class="_blankBox"></div>
    <goods :list="goodslist"></goods>
  </div>
</template>

<script>
import swiper from "./Swiper.vue";
import goods from "./Goods.vue";
import homeInfo from "../../model/homeModel.js";

export default {
  data() {
    return {
      bannerlist: [],
      hotimglist: [],
      goodslist: [],
    };
  },
  methods: {
    gotoGoodslist() {
      this.$router.push({ name: "goodslist" });
    },
    gotoClassify() {
      this.$router.push({ name: "classify" });
    },
  },
  created() {
    homeInfo.getBannerList().then((res) => {
      this.bannerlist = res.data;
    });
    homeInfo.getHotImgList().then((res) => {
      this.hotimglist = res.data;
    });
    homeInfo.getGoods().then((res) => {
      this.goodslist = res.data.filter((item) => item.id == 10)[0].list;
    });
  },
  components: {
    swiper,
    goods,
  },
};
</script>

<style scoped>
._blankBox {
  width: 100%;
  height: 20px;
  background-color: #f0f0f0;
}
.swipe {
  width: 100%;
  height: 200px;
}
.navimg {
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.navimg > div {
  width: 20%;
  font-size: 11px;
}
.navimg > div > img {
  width: 40px;
  height: 40px;
}
.hotClassify {
  width: 100%;
  background-color: #f0f0f0;
}
.classifyTitle {
  width: 100%;
  line-height: 60px;
  font-size: 15px;
}
.classifyContent {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
.class_item {
  width: 25%;
  height: 100px;
  box-sizing: border-box;
}
.class_item > img {
  width: 100%;
  height: 100%;
}
</style>