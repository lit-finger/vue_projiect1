<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="topImg">
        <div
          class="top-item"
          v-for="(item, index) in smallImgList"
          :key="index"
        >
          <img :src="item.src" />
          <div>{{ item.name }}</div>
        </div>
      </div>
      <div class="goods">
        <div class="goods-item" v-for="item in goodsList" :key="item.id">
          <img :src="item.goodsimg" />
          <div class="goodname">{{ item.goodsname }}</div>
          <div class="goodprice">￥{{ item.goodsprice }}</div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<style scoped>
.topImg {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
.top-item {
  width: 25%;
  box-sizing: border-box;
  padding: 10px;
  font-size: 12px;
}
.top-item > img {
  width: 100%;
}
.goods {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
.goods-item {
  width: 50%;
  box-sizing: border-box;
  padding: 10px;
  text-align: left;
}
.goods-item > img {
  width: 100%;
}
.goodname {
  width: 100%;
  height: 36px;
  overflow: hidden;
  margin: 10px 0 6px;
  font-size: 12px;
}
.goodprice {
  font-size: 15px;
}
</style>

<script>
import { mapState } from "vuex";
import homeInfo from "../../model/homeModel";
import { Toast } from "vant";
export default {
  data() {
    return {
      smallImgList: [],
      goodsList: [],
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      homeInfo.getGoods().then((res) => {
        var arr = res.data.filter((item) => item.id == this.homeIndex);
        this.goodsList = arr[0].list;
        this.smallImgList = arr[0].smallimglist;
        Toast("刷新成功");
        this.isLoading = false;
      });
    },
  },
  created() {
    homeInfo.getGoods().then((res) => {
      var arr = res.data.filter((item) => item.id == this.homeIndex);
      this.goodsList = arr[0].list;
      this.smallImgList = arr[0].smallimglist;
    });
  },
  computed: {
    ...mapState(["homeIndex"]),
  },
  watch: {
    homeIndex(i) {
      homeInfo.getGoods().then((res) => {
        var arr = res.data.filter((item) => item.id == i);
        this.goodsList = arr[0].list;
        this.smallImgList = arr[0].smallimglist;
      });
    },
  },
};
</script>