<template>
  <div>
    <div class="topBox">
      <span>注册</span>
      <div class="back" @click="goback">
        <span class="iconfont icon-ico_leftarrow"></span>
      </div>
    </div>
    <div class="content" v-show="logType == 1">
      <div class="phoneNum">
        <input type="number" placeholder="请输入手机号" v-model="phoneNum" />
      </div>
      <div class="verify">
        <input type="text" placeholder="请输入验证码" v-model="pwd1" />
        <div class="code" @click="getCode">{{ code }}</div>
      </div>
      <div class="verify">
        <input :type="pwdType" placeholder="请输入密码" v-model="pwd2" />
        <div class="yanjing" @click="changepwd">
          <span class="iconfont icon-biyan" v-show="!showpwd"></span>
          <span class="iconfont icon-yanjing" v-show="showpwd"></span>
        </div>
      </div>
      <div class="verify">
        <input type="text" placeholder="潮流口令(非必填)" v-model="sign" />
      </div>
      <div class="subBtn" @click="check">注册</div>
      <div class="changeType">
        <span>注册即表示您已阅读并同意</span>
      </div>
      <div class="watch">
        <a
          href="/service/qaDetail?keyword=服务条款&sonId=340&parentId=250"
          target="_blank"
          >有货用户服务协议</a
        >
        <a
          href="/service/qaDetail?keyword=隐私条款&sonId=352&parentId=250"
          target="_blank"
          >有货隐私条款</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 36px;
  .watch {
    width: 100%;
    text-align: left;
    > a {
      text-decoration: underline;
      margin-right: 20px;
      color: #c00;
    }
  }
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
  line-height: 76px;
  text-align: center;
  font-size: 16px;
  position: relative;
  .back {
    position: absolute;
    left: 36px;
    top: 22px;
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    border: 1px solid #444;
    border-radius: 50%;
    .iconfont {
      font-size: 13px;
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
      phoneNum: "",
      pwd1: "",
      pwd2: "",
      code: "",
      showpwd: false,
      pwdType: "password",
      sign: "",
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
    check() {
      let phoneReg = /^1[2-9][0-9]{9}$/;
      let pwdReg = /^[0-9a-zA-Z]{4,12}$/;
      if (phoneReg.test(this.phoneNum)) {
        mineInfo.check({ userPhone: this.phoneNum }).then((res) => {
          if (res.data.length) {
            console.log(111);
            Toast.fail("该手机号已被注册");
            return false;
          } else {
            if (this.pwd1.toLowerCase() != this.code.toLowerCase()) {
              Toast.fail("验证码错误");
              return false;
            }
            if (pwdReg.test(this.pwd2)) {
              mineInfo
                .add({
                  userPhone: this.phoneNum,
                  userPwd: this.pwd2,
                  userSign: this.sign,
                })
                .then((res) => {
                  this.$router.push({
                    name: "login",
                  });
                  return false;
                })
                .catch((err) => {
                  flag = false;
                  throw err;
                });
            } else {
              Toast.fail("密码由4~12位数字字母组成");
            }
          }
        });
      } else {
        Toast.fail("请输入正确的手机号");
        return false;
      }
    },
    goback() {
      this.$router.history.go(-1);
    },
    getCode() {
      this.code = "";
      let str =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * str.length);
        this.code += str.charAt(index);
      }
    },
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
  },
};
</script>