<template>
  <div style="background-color: #f0f0f0">
    <div class="top">
      <van-nav-bar
        title="商品详情"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <span
            class="iconfont icon-shoucang1"
            :class="{ selected: shoucang }"
          ></span>
        </template>
      </van-nav-bar>
    </div>
    <div class="main">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in goodsInfo.imglist" :key="index">
          <img :src="item" />
        </van-swipe-item>
      </van-swipe>
      <div class="goodname">{{ goodsInfo.goodsname }}</div>
      <div class="goodprice">￥{{ goodsInfo.goodsprice }}</div>
      <div class="goodcard">
        <div class="card1">
          <img
            src="https://cdn.yoho.cn/yohobuywap-node/img/silver.ec0710b40b.png"
          />
          ￥{{ goodsInfo.goodsprice }}
        </div>
        <div class="card1">
          <img
            src="https://cdn.yoho.cn/yohobuywap-node/img/golden.ac08c14407.png"
          />
          ￥{{ goodsInfo.goodsprice }}
        </div>
        <div class="card1">
          <img
            src="https://cdn.yoho.cn/yohobuywap-node/img/platinum.c43c465acf.png"
          />
          ￥{{ goodsInfo.goodsprice }}
        </div>
      </div>
    </div>
    <div class="detail">
      <div class="assess">
        <div class="assess_title">
          <div style="color: #b0b0b0">商品评价(0)</div>
          <div>常见问题</div>
        </div>
        <div class="QandA">
          <div class="question">商品都是正品吗?<br /></div>
          <div class="answer">
            有货www.yohobuy.com所售的商品均经品牌授权，正品保障，请您放心购买。
          </div>
          <div class="question">尺码表上的尺码标准吗？<br /></div>
          <div class="answer">
            有货所售商品尺寸均为人工实物测量，可能会存在1-2cm的正常误差范围。
          </div>
        </div>
        <div class="watchMore">查看更多<van-icon name="arrow" /></div>
      </div>
      <div class="detailCon">
        <div class="con_title">商品详情 <span>DETAILS</span></div>
        <div class="imgBox">
          <img v-for="(item, index) in imgList" :key="index" :src="item" />
        </div>
      </div>
      <div class="detailCon">
        <div class="con_title">特别说明 <span>SPECIAL DESCRIPTION</span></div>
        <div class="conText">
          <div>广告禁用词</div>
          <div class="infoText">
            根据新广告法规定，所有页面不得出现广告禁用词。我们在此郑重表态：支持新广告法，也为了不影响消费者正常购物，我们已经在排查修改；本页面所有广告禁用词在此声明失效，不作为赔付理由，请为真正的消费者让路。维权是双向的，希望各位消费者理解，在此感谢！
          </div>
          <div>页面价格</div>
          <div class="infoText">
            划线价格指商品的吊牌价、品牌指导价或该商品的曾展示过的销售价等，并非原价，仅供参考。无划线价格指商品的实时销售价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券/码、有货币等发生变化，最终以订单结算页价格为准。
          </div>
          <div>价格异常</div>
          <div class="infoText">
            可能因为存在系统缓存、页面延迟等异常情况，导致价格、促销或其他类型活动显示异常，商品具体结算信息以订单结算页面显示为准。如您发现此类情况，请立即联系我们客服调整。
          </div>
        </div>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="goBuyCar" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button
        type="danger"
        text="加入购物车"
        @click="addToCar"
      />
    </van-goods-action>
    <div class="blankBox"></div>
  </div>
</template>

<style lang="scss" scoped>
.detail {
  width: 100%;
  overflow: hidden;
  .assess {
    width: 100%;
    background-color: #fff;
    margin-top: 10px;
    .assess_title {
      width: 100%;
      height: 38px;
      padding: 6px 0;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      text-align: center;
      align-items: center;
      > div {
        width: 50%;
        box-sizing: border-box;
        line-height: 30px;
        border-left: 1px solid #e0e0e0;
        border-right: 1px solid #e0e0e0;
        font-size: 16px;
      }
    }
    .QandA {
      width: 100%;
      font-size: 13px;
      text-align: left;
      box-sizing: border-box;
      padding: 5px 20px;
      > div {
        padding: 5px 0;
      }
      .answer {
        color: #b0b0b0;
      }
    }
    .watchMore {
      width: 100%;
      height: 52px;
      line-height: 52px;
      font-size: 16px;
      color: #b0b0b0;
      border-top: 1px solid #e0e0e0;
    }
  }
  .detailCon {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    background-color: #fff;
    margin-top: 10px;
    .con_title {
      text-align: left;
      font-size: 16px;
      line-height: 46px;
      border-bottom: 1px solid #e0e0e0;
      > span {
        font-size: 13px;
        color: #b0b0b0;
      }
    }
    .imgBox {
      width: 100%;
      > img {
        width: 100%;
      }
    }
    .conText {
      font-size: 13px;
      text-align: left;
      margin-top: 10px;
      .infoText {
        color: #b0b0b0;
        margin-bottom: 10px;
      }
    }
  }
}
.main {
  background-color: #fff;
  .goodname,
  .goodprice,
  .goodcard {
    width: 100%;
    height: 50px;
    line-height: 30px;
    box-sizing: border-box;
    padding: 10px 15px;
    text-align: left;
  }
  .goodname {
    background-color: #515150;
    color: #fff;
    font-size: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .goodprice {
    border-bottom: 1px solid #e0e0e0;
    font-size: 20px;
    font-weight: 700;
    color: #d0021b;
  }
  .goodcard {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #999;
    .card1 > img {
      width: 30px;
      height: 18px;
      vertical-align: middle;
      margin-bottom: 4px;
    }
  }
  .van-swipe {
    height: 390px;
  }
  .my-swipe .van-swipe-item {
    width: 100%;
    height: 390px;
    box-sizing: border-box;
    padding: 20px 50px;
    color: #fff;
  }
  .my-swipe .van-swipe-item > img {
    width: 100%;
    height: 100%;
  }
  /deep/ .van-swipe__indicators {
    padding: 5px 10px;
    background-color: #aaa;
    border-radius: 6px;
    bottom: 20px;
  }
  /deep/ .van-swipe__indicators > i {
    width: 8px;
    height: 8px;
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
  .icon-shoucang1 {
    color: #fff;
    font-size: 24px;
  }
  .selected {
    color: #dd4f14;
  }
}
.van-goods-action {
  height: 60px;
}
.blankBox {
  height: 50px;
}
</style>

<script>
import Swiper from "../../../2020/三阶段/lesson08/src/components/home/Swiper.vue";
import classifyInfo from "../model/classify";
import shoppingInfo from "../model/shopping";
import { mapState, mapMutations } from "vuex";
import { Dialog } from "vant";
export default {
  components: { Swiper },
  data() {
    return {
      goodsInfo: {},
      shoucang: false,
      imgList: [
        "//img12.static.yhbimg.com/goodsimg/2020/11/20/13/02703355570b8d28d64eec91680f92cf77.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp",
        "//img12.static.yhbimg.com/goodsimg/2020/11/20/13/028810afb6a5e74c2faf2cc62d606847d1.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp",
        "//img11.static.yhbimg.com/goodsimg/2020/11/20/13/013d2951acd507cd0fe68f36b1955e6fa6.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp",
        "//img12.static.yhbimg.com/goodsimg/2020/11/20/13/0267cc6320b2605fee59b5e1448aed32ce.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp",
        "//img11.static.yhbimg.com/goodsimg/2020/11/20/13/01f7be90e3afcd2d7783685a1dc3ff67f0.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp",
        "//img12.static.yhbimg.com/goodsimg/2020/11/20/13/028c851504821ada37bbeefd2d20f9c3c8.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp",
        "//img12.static.yhbimg.com/goodsimg/2020/11/20/13/028a7a680742f6e78fc702cefb7a11bece.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp",
        "//img12.static.yhbimg.com/goodsimg/2020/11/20/13/02e7feb382fafbd6293bb45c9eae1ce9c3.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp",
        "//img12.static.yhbimg.com/goodsimg/2020/11/20/13/0277bb3279294fea6ae44cc8ae1981dfed.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp",
        "//img12.static.yhbimg.com/goodsimg/2020/11/20/13/02939a09db6f4d1636d22b7c2084cecfd0.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp",
        "//img11.static.yhbimg.com/goodsimg/2020/11/20/13/01e575fec6eb6a53241a893bc025a410b3.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp",
      ],
    };
  },
  methods: {
    dialog() {
      Dialog.confirm({
        title: "加入成功",
        message: "是否进入购物车？",
      })
        .then(() => {
          this.$router.push({
            name: "buycar",
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    goBuyCar() {
      if (localStorage.getItem("logUser")) {
        this.$router.push({
          name: "buycar",
        });
      } else {
        this.$router.push({
          name: "login",
        });
      }
    },
    addToCar() {
      let userid = localStorage.getItem("logUser");
      let goodsid = this.$route.params.id;
      if (userid) {
        shoppingInfo.getShopping({ userid, goodsid }).then((res) => {
          if (res.data.length) {
            let id = res.data[0].id;
            let buynum = res.data[0].buynum;
            shoppingInfo
              .updateShopping(id, { buynum: buynum + 1 })
              .then((obj) => {
                this.dialog();
              });
          } else {
            shoppingInfo
              .addShopping({
                userid,
                goodsid: this.goodsInfo.id,
                goodsname: this.goodsInfo.goodsname,
                goodsimg: this.goodsInfo.goodsimg,
                goodsprice: this.goodsInfo.goodsprice,
                buynum: 1,
              })
              .then((res) => {
                this.dialog();
              });
          }
        });
      } else {
        this.$router.push({
          name: "login",
        });
      }
    },
    onClickLeft() {
      this.$router.push({ name: "goodslist" });
    },
    onClickRight() {
      if (this.shoucang) {
        this.shoucang = false;
      } else {
        this.shoucang = true;
      }
    },
    ...mapMutations(["changeNavFlag"]),
  },
  created() {
    this.changeNavFlag(false);
    let id = this.$route.params.id;
    classifyInfo.getGoodsInfo(id).then((res) => {
      this.goodsInfo = res;
    });
  },
  mounted() {
    localStorage.setItem("lastUrl", location.hash);
  },
  beforeRouteLeave(to, from, next) {
    this.changeNavFlag(true);
    next();
  },
  computed: {
    ...mapState(["navFlag"]),
  },
};
</script>