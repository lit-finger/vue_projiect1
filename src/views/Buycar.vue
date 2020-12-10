<template>
  <div>
    <div class="top">
      <van-nav-bar
        title="购物车"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <span @click="changeFlag(true)" v-show="!isDelete">编辑</span
          ><span @click="changeFlag(false)" v-show="isDelete">完成</span>
        </template>
      </van-nav-bar>
    </div>
    <div class="main" v-show="shoppingList.length > 0">
      <van-swipe-cell v-for="item in shoppingList" :key="item.id">
        <div class="car-item">
          <div class="check">
            <van-checkbox
              v-model="item.ischecked"
              checked-color="#444"
            ></van-checkbox>
          </div>
          <div class="imgBox"><img :src="item.goodsimg" /></div>
          <div class="info">
            <div class="goodsname">{{ item.goodsname }}</div>
            <div class="goodsprice">￥{{ item.goodsprice }}</div>
          </div>
          <div class="buyNum">
            <van-stepper v-model="item.buynum" @change="onChange(item)" />
          </div>
        </div>
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="delOne(item.id)"
          />
        </template>
      </van-swipe-cell>
    </div>
    <div class="blankCar" v-show="shoppingList.length == 0">
      <div class="icon"><span class="iconfont icon-gouwuche"></span></div>
      <div class="text">您的购物车暂无商品</div>
      <div class="btn" @click="goGoodslist">随便逛逛</div>
    </div>
    <goods :list="goodslist"></goods>
    <div class="carFooter">
      <van-submit-bar
        :price="allPrice * 100"
        button-text="结算"
        @submit="onSubmit"
        v-show="!isDelete"
      >
        <van-checkbox
          v-model="checkedAll"
          @click="checkAll"
          checked-color="#444"
          >全选</van-checkbox
        >
      </van-submit-bar>
      <van-submit-bar button-text="删除" @submit="onDelete" v-show="isDelete">
        <van-checkbox
          v-model="checkedAll"
          @click="checkAll"
          checked-color="#444"
          >全选</van-checkbox
        >
      </van-submit-bar>
    </div>
    <div class="blankBox"></div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import shoppingInfo from "../model/shopping";
import homeInfo from "../model/homeModel.js";
import payInfo from "../model/pay";
import { Toast } from "vant";
import goods from "../components/home/Goods.vue";

export default {
  data() {
    return {
      shoppingList: [],
      checkedAll: false,
      allPrice: 0,
      isDelete: false,
      goodslist: [],
    };
  },
  created() {
    let userid = localStorage.getItem("logUser");
    shoppingInfo.getShopping({ userid }).then((res) => {
      res.data.forEach((obj) => {
        obj.ischecked = false;
        this.shoppingList.push(obj);
      });
    });
    homeInfo.getGoods().then((res) => {
      this.goodslist = res.data.filter((item) => item.id == 10)[0].list;
    });
    payInfo.getPay({ userid }).then((res) => {
      if (res.data.length) {
        res.data.forEach((item) => {
          payInfo.delPay(item.id);
        });
      }
    });
  },
  watch: {
    shoppingList: {
      deep: true,
      handler(list) {
        this.checkedAll =
          list.length > 0
            ? list.every((item) => item.ischecked == true)
            : false;
        let price = 0;
        list.forEach((item) => {
          if (item.ischecked) {
            price += item.buynum * item.goodsprice;
          }
        });
        this.allPrice = price;
      },
    },
  },
  methods: {
    ...mapMutations(["changeNavFlag"]),
    goGoodslist() {
      this.$router.push({
        name: "goodslist",
      });
    },
    onClickLeft() {
      this.$router.push({ name: "goodslist" });
    },
    onClickRight() {},
    async onChange(item) {
      await shoppingInfo.updateShopping(item.id, { buynum: item.buynum });
    },
    delOne(id) {
      shoppingInfo.delShopping(id);
      this.shoppingList = this.shoppingList.filter((item) => item.id != id);
    },
    async onSubmit() {
      let arr = [];
      let userid = localStorage.getItem("logUser");
      if (this.shoppingList.some((item) => item.ischecked)) {
        this.shoppingList.forEach((item) => {
          if (item.ischecked) {
            arr.push(item);
          }
        });
        // this.onDelete();
        for (let i = 0; i < this.shoppingList.length; i++) {
          let obj = this.shoppingList[i];
          if (obj.ischecked) {
            await shoppingInfo.delShopping(obj.id);
          }
        }
        payInfo
          .addPay({
            userid,
            list: arr,
          })
          .then((res) => {
            this.$router.push({ name: "pay" });
          });
      } else {
        Toast.fail("请选择至少一件商品");
      }
    },
    checkAll() {
      this.shoppingList.forEach((item) => {
        item.ischecked = this.checkedAll;
      });
    },
    async onDelete() {
      for (let i = 0; i < this.shoppingList.length; i++) {
        let obj = this.shoppingList[i];
        if (obj.ischecked) {
          await shoppingInfo.delShopping(obj.id);
        }
      }
      this.shoppingList = this.shoppingList.filter(
        (item) => item.ischecked == false
      );
    },
    changeFlag(flag) {
      this.isDelete = flag;
    },
  },
  components: {
    goods,
  },
};
</script>

<style lang="scss" scoped>
.blankCar {
  width: 100%;
  background-color: #e0e0e0;
  padding: 60px 0;
  .icon {
    .iconfont {
      font-size: 44px;
      color: #ff6034;
    }
  }
  .text {
    line-height: 46px;
    margin-top: 20px;
  }
  .btn {
    width: 100px;
    height: 30px;
    line-height: 30px;
    margin: 0 auto;
    background-color: #444;
    color: #fff;
    letter-spacing: 1px;
    border-radius: 4px;
  }
}
.main {
  width: 100%;
  background-color: #e0e0e0;
  padding-bottom: 10px;
  .delete-button {
    height: 100%;
  }
  .car-item {
    position: relative;
    width: 100%;
    height: 123px;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .imgBox {
      margin-left: 10px;
      > img {
        height: 100%;
      }
    }
    .goodsname {
      width: 180px;
      height: 32px;
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      margin-bottom: 36px;
      margin-left: 20px;
    }
    .goodsprice {
      text-align: left;
      margin-left: 20px;
      font-size: 16px;
      color: #d0253b;
    }
    .buyNum {
      position: absolute;
      right: 20px;
      bottom: 10px;
      z-index: 20;
    }
  }
}
.top {
  position: sticky;
  left: 0;
  top: 0;
  z-index: 120;
  .van-nav-bar {
    background-color: #414141;
  }
  /deep/ .van-nav-bar__title {
    color: #fff;
    font-size: 20px;
  }
  /deep/ .van-nav-bar .van-icon {
    color: #fff;
    font-size: 24px;
  }
  /deep/.van-nav-bar__right {
    color: #fff;
  }
  .selected {
    color: #dd4f14;
  }
}
.van-submit-bar__bar {
  justify-content: space-between;
  .van-submit-bar__button--danger {
    font-size: 16px;
  }
}
.blankBox {
  height: 51px;
}
.carFooter {
  position: fixed;
  left: 0;
  bottom: 50px;
  width: 100%;
  .van-submit-bar {
    position: absolute;
  }
}
</style>