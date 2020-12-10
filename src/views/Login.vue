<template>
  <div>
    <div class="topBox">
      <img
        src="//img11.static.yhbimg.com/yhb-img01/2018/03/26/10/01cf2c685c5d7ddbb21b7c7b961da77454.jpg?imageView2/2/w/750/h/290"
      />
      <div class="topBtn">
        <div class="leftBtn" @click="goback">
          <span class="iconfont icon-ico_leftarrow"></span>
        </div>
        <div class="rightBtn" @click="goregister">注册</div>
      </div>
    </div>
    <div class="content" v-show="logType == 1">
      <div class="phoneNum">
        <input type="number" placeholder="请输入手机号" v-model="phoneNum1" />
      </div>
      <div class="verify">
        <input type="text" placeholder="请输入验证码" v-model="pwd1" />
        <div class="code" @click="getCode">{{ code1 }}</div>
      </div>
      <div class="subBtn" @click="check1">登录</div>
      <div class="changeType">
        <span @click="changeType(2)">帐号密码登录</span>
        <span>忘记密码？</span>
      </div>
    </div>
    <div class="content" v-show="logType == 2">
      <div class="phoneNum">
        <input type="number" placeholder="请输入手机号" v-model="phoneNum2" />
      </div>
      <div class="verify">
        <input :type="pwdType" placeholder="请输入密码" v-model="pwd2" />
        <div class="yanjing" @click="changepwd">
          <span class="iconfont icon-biyan" v-show="!showpwd"></span>
          <span class="iconfont icon-yanjing" v-show="showpwd"></span>
        </div>
      </div>
      <div class="subBtn" @click="check2">登录</div>
      <div class="changeType">
        <span @click="changeType(1)">手机验证码登录</span>
        <span>忘记密码？</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 36px;
  .changeType {
    display: flex;
    width: 100%;
    line-height: 50px;
    justify-content: space-between;
  }
  .subBtn {
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 4px;
    background-color: orange;
    color: #fff;
    font-size: 16px;
    margin-top: 30px;
  }
  .phoneNum,
  .verify {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 20px 5px;
    border-bottom: 1px solid #e0e0e0;
    line-height: 20px;
    text-align: left;
    > input {
      border: 0;
      outline: none;
      width: 100%;
      font-size: 14px;
    }
    .code {
      position: absolute;
      right: 0;
      bottom: 5px;
      width: 75px;
      height: 28px;
      border-radius: 14px;
      background-color: #aaa;
      text-align: center;
      font-size: 16px;
      line-height: 28px;
      color: #fff;
      letter-spacing: 3px;
    }
    .yanjing {
      position: absolute;
      right: 0;
      bottom: 5px;
      width: 26px;
      height: 26px;
      text-align: center;
      line-height: 26px;
      .iconfont {
        font-size: 22px;
      }
    }
  }
}
.topBox {
  width: 100%;
  height: 145px;
  position: relative;
  > img {
    width: 100%;
  }
  .topBtn {
    width: 100%;
    position: absolute;
    top: 26px;
    left: 0;
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .leftBtn {
      border: 2px solid #fff;
      border-radius: 50%;
      width: 26px;
      height: 26px;
      line-height: 26px;
      .iconfont {
        font-size: 14px;
        color: #fff;
      }
    }
    .rightBtn {
      width: 55px;
      height: 26px;
      border-radius: 13px;
      line-height: 26px;
      text-align: center;
      font-size: 16px;
      color: #fff;
      border: 2px solid #fff;
    }
  }
}
</style>

<script>
import { Toast } from "vant";
import mineInfo from "../model/mine";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      logType: 1,
      phoneNum1: "",
      pwd1: "",
      phoneNum2: "",
      pwd2: "",
      code1: "",
      showpwd: false,
      pwdType: "password",
    };
  },
  created() {
    this.changeNavFlag(false);
  },
  mounted() {
    this.getCode();
  },
  beforeRouteLeave(to, from, next) {
    this.changeNavFlag(true);
    next();
  },
  methods: {
    ...mapMutations(["changeNavFlag"]),
    changepwd() {
      if (this.showpwd) {
        this.showpwd = false;
        this.pwdType = "password";
      } else {
        this.showpwd = true;
        this.pwdType = "text";
      }
    },
    changeType(n) {
      this.logType = n;
    },
    check1() {
      let reg = /^1[2-9][0-9]{9}$/;
      if (reg.test(this.phoneNum1)) {
        mineInfo.check({ userPhone: this.phoneNum1 }).then((res) => {
          if (res.data.length) {
            if (this.pwd1.toLowerCase() == this.code1.toLowerCase()) {
              localStorage.setItem("logUser", res.data[0].id);
              Toast.success("登录成功");
              this.$router.push({
                name: "main1",
              });
            } else {
              Toast.fail("请输入正确的验证码");
              this.getCode();
            }
          } else {
            Toast.fail("手机号不存在");
          }
        });
      } else {
        Toast.fail("请输入正确的手机号");
      }
    },
    check2() {
      let reg = /^1[2-9][0-9]{9}$/;
      if (reg.test(this.phoneNum2)) {
        mineInfo.check({ userPhone: this.phoneNum2 }).then((res) => {
          if (res.data.length) {
            if (this.pwd2 == res.data[0].userPwd) {
              localStorage.setItem("logUser", res.data[0].id);
              Toast.success("登录成功");
              this.$router.push({
                name: "main1",
              });
            } else {
              Toast.fail("帐号与密码不匹配");
            }
          } else {
            Toast.fail("手机号不存在");
          }
        });
      } else {
        Toast.fail("请输入正确的手机号");
      }
    },
    goback() {
      this.$router.push({
        name: "mine",
      });
    },
    goregister() {
      this.$router.push({
        name: "register",
      });
    },
    getCode() {
      this.code1 = "";
      let str =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * str.length);
        this.code1 += str.charAt(index);
      }
    },
  },
};
</script>