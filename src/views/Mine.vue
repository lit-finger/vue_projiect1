<template>
  <div>
    <div class="top">
      <van-nav-bar
        title="个人中心"
        @click-left="godetail"
        @click-right="onClickRight"
      >
        <template #left>
          <span class="iconfont icon-shezhi"></span>
        </template>
        <template #right>
          <span class="iconfont icon-icon"></span>
        </template>
      </van-nav-bar>
    </div>
    <div class="content">
      <div class="loginBox" v-show="logFlag">
        <div class="loginBtn" @click="goLogin">登录&nbsp;/&nbsp;注册</div>
      </div>
      <div class="loginBox" v-show="!logFlag">
        <div class="detailBox" @click="godetail">
          <img
            src="//img12.static.yhbimg.com/article/2019/02/26/16/02456ade977d8dfdbc4ca548b196c1d62b.png?imageView/2/w/100/h/100/q/90"
          />
          <div>
            <div class="phone">{{ userPhone }}</div>
            <div class="sign">#&emsp;&emsp;{{ sign }}&emsp;&emsp;#</div>
          </div>
        </div>
      </div>
      <div class="menu">
        <van-cell is-link title="默认购物频道" />
        <span class="rightText">男士MEN</span>
      </div>
      <div class="menu order">
        <van-cell is-link title="我的订单" />
        <span class="rightText">全部订单</span>
      </div>
      <div class="menu2">
        <div>
          <span class="iconfont icon-icon-test"></span>
          <div>待付款</div>
        </div>
        <div>
          <span class="iconfont icon-daifahuo"></span>
          <div>待发货</div>
        </div>
        <div>
          <span class="iconfont icon-icon-test1"></span>
          <div>待收货</div>
        </div>
      </div>
      <div class="menu2">
        <div>
          <span class="icontext">0</span>
          <div>商品收藏</div>
        </div>
        <div>
          <span class="icontext">0</span>
          <div>品牌收藏</div>
        </div>
        <div>
          <span class="icontext">0</span>
          <div>浏览记录</div>
        </div>
      </div>
      <div class="cheapBox">
        <div class="menu">
          <div class="iconLeft">
            <span class="iconfont icon-youhuiquan"></span>
          </div>
          <div class="line"></div>
          <van-cell is-link title="优惠券" />
        </div>
        <div class="menu">
          <div class="iconLeft">
            <span class="iconfont icon-huobi"></span>
          </div>
          <van-cell is-link title="有货币" />
        </div>
      </div>
      <div class="cheapBox">
        <div class="menu">
          <div class="iconLeft">
            <span class="iconfont icon-dkw_xiaoxi"></span>
          </div>
          <div class="line"></div>
          <van-cell is-link title="消息" />
        </div>
        <div class="menu">
          <div class="iconLeft">
            <span class="iconfont icon-fuwuerji"></span>
          </div>
          <van-cell is-link title="服务与反馈" />
        </div>
      </div>
      <div class="cheapBox">
        <img
          src="//img11.static.yhbimg.com/yhb-img01/2017/12/18/17/015ca6b18d8571b763e583a288646f737c.jpg?imageView2/3/w/640/h/200/q/60"
        />
      </div>
      <div class="cheapBox">
        <img
          src="//img11.static.yhbimg.com/yhb-img01/2017/11/16/16/0170b0b5b96d1dc3cfd8a23599cc3eb425.jpg?imageView2/3/w/640/h/200/q/60"
        />
      </div>
    </div>
  </div>
</template>

<script>
import mineInfo from "../model/mine";
export default {
  data() {
    return {
      logFlag: true,
      userPhone: "",
      sign: "",
    };
  },
  created() {
    let id = localStorage.getItem("logUser");
    if (id) {
      this.logFlag = false;
      mineInfo.check({ id }).then((res) => {
        this.userPhone = res.data[0].userPhone;
        this.sign = res.data[0].userSign;
      });
    } else {
      this.logFlag = true;
    }
  },
  mounted() {
    if (localStorage.getItem("logUser")) {
      this.logFlag = false;
    } else {
      this.logFlag = true;
    }
    localStorage.setItem("lastUrl", location.hash);
  },
  methods: {
    godetail() {
      let userid = localStorage.getItem("logUser");
      if (userid) {
        this.$router.push({
          name: "mydetail",
        });
      } else {
        this.$router.push({
          name: "login",
        });
      }
    },
    onClickRight() {},
    goLogin() {
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.line {
  width: 100%;
  height: 1px;
  background-color: #f0f0f0;
}
.content {
  width: 100%;
  text-align: left;
  background-color: #f0f0f0;
  .loginBox {
    width: 100%;
    height: 110px;
    background: url("//cdn.yoho.cn/yohobuywap-node/img/header-bg.b98d69725a.jpg")
      no-repeat;
    background-size: cover;
    position: relative;
    .detailBox {
      width: 60%;
      height: 100%;
      display: flex;
      align-items: center;
      > img {
        width: 50px;
        height: 50px;
        margin-left: 20px;
      }
      > div {
        font-size: 15px;
        color: #fff;
        line-height: 24px;
        margin-left: 20px;
        .sign {
          font-size: 13px;
          width: 120px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .loginBtn {
      width: 127px;
      height: 32px;
      border: 1px solid #fff;
      line-height: 32px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .cheapBox {
    width: 100%;
    margin-top: 10px;
    > img {
      width: 100%;
    }
  }
  .menu {
    position: relative;
    display: flex;
    background-color: #fff;
    .line {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 202;
    }
    .iconLeft {
      width: 44px;
      height: 44px;
      line-height: 44px;
      text-align: right;
      .iconfont {
        font-size: 26px;
      }
    }
    .van-cell {
      font-size: 16px;
    }
    .rightText {
      position: absolute;
      right: 34px;
      top: 50%;
      color: #444;
      font-size: 13px;
      transform: translate(0, -50%);
    }
  }
  .order {
    margin-top: 10px;
  }
  .menu2 {
    width: 100%;
    background-color: #fff;
    height: 72px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1px;
    > div {
      text-align: center;
    }
    .iconfont {
      font-size: 32px;
    }
    .icontext {
      font-size: 20px;
    }
  }
}
.top {
  position: sticky;
  left: 0;
  top: 0;
  z-index: 120;
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
.top .iconfont {
  font-size: 18px;
  color: #fff;
}
.van-nav-bar__left .iconfont {
  font-size: 26px;
}
</style>