<template>
  <div>
    <div class="top">
      <van-nav-bar title="确认订单" left-arrow @click-left="onClickLeft">
      </van-nav-bar>
    </div>
    <div class="main">
      <div class="addr" @click="chooseAddr" v-show="!selectAddr">
        <div><span class="iconfont icon-dingwei"></span></div>
        <div>收货地址</div>
      </div>
      <div class="addr2" @click="chooseAddr" v-show="selectAddr">
        <div><span class="iconfont icon-dingwei"></span></div>
        <div class="addr_info">
          <div class="nameAndTel">
            <div class="username">{{ addrOrgInfo.name }}</div>
            <div class="userphone">{{ addrOrgInfo.tel }}</div>
          </div>
          <div class="area">{{ addrOrgInfo.address }}</div>
        </div>
      </div>
      <div class="payType">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="支付方式" value="在线支付(推荐)" name="2">
            <div>在线支付(推荐)</div>
            <van-checkbox v-model="payType" checked-color="#444"></van-checkbox>
          </van-collapse-item>
        </van-collapse>
      </div>
      <div class="paygoods">
        <div class="goods">
          <van-card
            v-for="item in payList"
            :key="item.id"
            :num="item.buynum"
            :price="(item.goodsprice * item.buynum).toFixed(2)"
            :title="item.goodsname"
            class="goods-card"
            :thumb="item.goodsimg"
          />
        </div>
      </div>
      <div class="cheapBox">
        <div>
          <!-- 优惠券单元格 -->
          <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
          />
          <!-- 优惠券列表 -->
          <van-popup
            v-model="showList"
            round
            position="bottom"
            style="height: 90%; padding-top: 4px"
          >
            <van-coupon-list
              :coupons="coupons"
              :chosen-coupon="chosenCoupon"
              :disabled-coupons="disabledCoupons"
              @change="onChange"
              @exchange="onExchange"
            />
          </van-popup>
        </div>
        <div>
          <van-cell center title="有货币">
            <template #right-icon>
              <van-switch
                v-model="checked1"
                size="70"
                active-color="#ee0a24"
                inactive-color="#dcdee0"
              />
            </template>
          </van-cell>
        </div>
        <div>
          <van-cell center title="发票">
            <template #right-icon>
              <van-switch
                v-model="checked2"
                size="70"
                active-color="#ee0a24"
                inactive-color="#dcdee0"
              />
            </template>
          </van-cell>
        </div>
        <div>
          <van-cell center title="不打印价格">
            <template #right-icon>
              <van-switch
                v-model="checked3"
                size="70"
                active-color="#ee0a24"
                inactive-color="#dcdee0"
              />
            </template>
          </van-cell>
        </div>
      </div>
      <div class="compute">
        <van-cell-group>
          <van-cell title="商品金额" :value="'￥' + totalPrice.toFixed(2)" />
          <van-cell title="运费" value="+￥0.00" />
          <van-cell title="优惠券" :value="'- ￥' + cheapPrice.toFixed(2)" />
        </van-cell-group>
      </div>
    </div>
    <div class="submit">
      <div>
        您需要支付:
        <span class="price">￥{{ (totalPrice - cheapPrice).toFixed(2) }}</span>
      </div>
      <div class="subBtn" @click="onSubmit">确定</div>
    </div>
    <div class="blankBox"></div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import shoppingInfo from "../model/shopping";
import payInfo from "../model/pay";
import addrInfo from "../model/addr";
import { Dialog } from "vant";

const coupon1 = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 6000,
  name: "优惠券1",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "60.0",
  unitDesc: "元",
};
const coupon2 = {
  available: 2,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 12000,
  name: "优惠券2",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "120.0",
  unitDesc: "元",
};

export default {
  data() {
    return {
      activeNames: ["1"],
      payType: false,
      payList: [],
      chosenCoupon: -1,
      coupons: [coupon1, coupon2],
      disabledCoupons: [coupon2],
      showList: false,
      checked1: false,
      checked2: false,
      checked3: false,
      totalPrice: 0,
      cheapPrice: 0,
      selectAddr: false,
      addrOrgInfo: {},
    };
  },
  created() {
    this.changeNavFlag(false);
    let userid = localStorage.getItem("logUser");
    payInfo.getPay({ userid }).then((res) => {
      this.payList = res.data[0].list;
      this.id = res.data[0].id;
      let allprice = 0;
      this.payList.forEach((item) => {
        allprice += item.goodsprice * item.buynum;
      });
      this.totalPrice = allprice;
    });
    addrInfo.getAddr({ userid, isDefault: true }).then((res) => {
      if (res.data.length > 0) {
        this.selectAddr = true;
        this.addrOrgInfo = res.data[0];
      } else {
        this.selectAddr = false;
        this.addrOrgInfo = {};
      }
    });
  },
  beforeRouteLeave(to, from, next) {
    this.changeNavFlag(true);
    next();
  },
  methods: {
    ...mapMutations(["changeNavFlag"]),
    chooseAddr() {
      let userid = localStorage.getItem("logUser");
      addrInfo.getAddr({ userid }).then((res) => {
        if (res.data.length > 0) {
          this.$router.push({ name: "chooseaddr" });
        } else {
          this.$router.push({ name: "addaddr", params: { id: 0 } });
        }
      });
    },
    onClickLeft() {
      Dialog.confirm({
        title: "确认退出?",
        message: "退出后将清除该订单",
      })
        .then(() => {
          payInfo
            .delPay(this.id)
            .then((res) => {
              this.$router.push({ name: "buycar" });
            })
            .catch((err) => {
              this.$router.push({ name: "buycar" });
            });
        })
        .catch(() => {
          // on cancel
        });
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      this.cheapPrice = index >= 0 ? this.coupons[index].valueDesc * 1 : 0;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    onSubmit() {
      Dialog.alert({
        title: "付款成功",
        message: "感谢您的惠顾",
        theme: "round-button",
      }).then(() => {
        payInfo.delPay(this.id).then((res) => {
          this.$router.push("/");
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.compute {
  margin-top: 10px;
}
.submit {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 200;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  > div {
    font-size: 17px;
    .price {
      color: orangered;
    }
  }
  .subBtn {
    width: 90px;
    height: 40px;
    background-color: orangered;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 6px;
  }
}
.main {
  width: 100%;
  background-color: #e0e0e0;
  padding-bottom: 10px;
  text-align: left;
  .addr {
    width: 100%;
    height: 48px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    > div {
      margin-right: 10px;
      .iconfont {
        font-size: 30px;
      }
    }
  }
  .addr2 {
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    .addr_info {
      width: 100%;
      margin-left: 10px;
      .nameAndTel {
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        .userphone {
          font-size: 14px;
        }
      }
      .area {
        font-size: 13px;
        color: #909090;
        line-height: 30px;
        width: 300px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .iconfont {
      font-size: 30px;
    }
  }
  .payType {
    margin-top: 10px;
    /deep/.van-cell__title {
      font-size: 16px;
    }
    /deep/.van-collapse-item__content {
      background-color: #e0e0e0;
      color: #000;
      display: flex;
      justify-content: space-between;
    }
  }
  .paygoods {
    width: 100%;
    background-color: #fff;
    margin-top: 10px;
  }
  .cheapBox {
    width: 100%;
    margin-top: 10px;
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
    font-size: 18px;
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
.blankBox {
  height: 50px;
}
</style>