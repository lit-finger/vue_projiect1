<template>
  <div>
    <div class="top">
      <van-nav-bar title="个人信息" left-arrow @click-left="onClickLeft">
      </van-nav-bar>
    </div>
    <div class="content">
      <div class="imgBox">
        <van-cell title="头像" is-link />
        <img
          src="//img12.static.yhbimg.com/article/2019/02/26/16/02456ade977d8dfdbc4ca548b196c1d62b.png?imageView/2/w/100/h/100/q/90"
        />
      </div>
      <div>
        <van-cell title="会员等级" is-link />
      </div>
      <div>
        <van-cell title="昵称" :value="userPhone" is-link />
      </div>
      <div>
        <van-cell title="我的签名" is-link />
      </div>
      <div>
        <van-cell title="我的二维码" is-link />
      </div>
      <div>
        <van-cell
          title="我的潮流口令"
          :value="userSign"
          is-link
          @click="showSign = true"
        />
        <van-dialog
          v-model="showSign"
          title=" "
          show-cancel-button
          @confirm="signConfirm"
          @open="onOpen"
        >
          <van-cell-group>
            <van-field v-model="changeSign" label="潮流口令:" placeholder="" />
          </van-cell-group>
        </van-dialog>
      </div>
      <div>
        <van-cell
          is-link
          title="性别"
          :value="sexCon || '选择性别'"
          @click="showSex = true"
        />
        <van-action-sheet
          v-model="showSex"
          :actions="sexList"
          @select="onSelectSex"
          cancel-text="取消"
          close-on-click-action
        />
      </div>
      <div>
        <van-cell
          is-link
          title="生日"
          :value="birthCon"
          @click="showBirth = true"
        />
        <van-action-sheet v-model="showBirth">
          <div class="birthBox">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              title="选择年月日"
              :min-date="minDate"
              :max-date="maxDate"
              @confirm="onBirth"
              @cancel="onCancel"
            />
          </div>
        </van-action-sheet>
      </div>
      <div>
        <van-cell
          is-link
          title="身高"
          :value="heightCon || ' '"
          @click="showHeight = true"
        />
        <van-action-sheet v-model="showHeight">
          <div class="birthBox">
            <van-picker
              title="身高"
              show-toolbar
              :columns="heightList"
              @confirm="onHeight"
              @cancel="onCancel"
              :default-index="100"
            />
          </div>
        </van-action-sheet>
      </div>
      <div>
        <van-cell
          is-link
          title="体重"
          :value="weightCon || ' '"
          @click="showWeight = true"
        />
        <van-action-sheet v-model="showWeight">
          <div class="birthBox">
            <van-picker
              title="体重"
              show-toolbar
              :columns="weightList"
              @confirm="onWeight"
              @cancel="onCancel"
              :default-index="60"
            />
          </div>
        </van-action-sheet>
      </div>
    </div>
    <div class="exit" @click="exit">退出登录</div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import mineInfo from "../model/mine";
export default {
  data() {
    return {
      userPhone: "",
      userSign: "",
      showSex: false,
      sexCon: "",
      sexList: [{ name: "BOY" }, { name: "GIRL" }],
      showBirth: false,
      birthCon: "",
      currentDate: new Date(),
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2021, 0, 1),
      showHeight: false,
      heightCon: "",
      heightList: [],
      showWeight: false,
      weightCon: "",
      weightList: [],
      showSign: false,
      changeSign: "",
    };
  },
  created() {
    this.changeNavFlag(false);
    let id = localStorage.getItem("logUser");
    mineInfo.check({ id }).then((res) => {
      this.userPhone = res.data[0].userPhone;
      this.userSign = res.data[0].userSign;
      this.sexCon = res.data[0].userSex;
      this.birthCon = res.data[0].userBirth;
      this.heightCon = res.data[0].userHeight;
      this.weightCon = res.data[0].userWeight;
    });
  },
  mounted() {
    for (let i = 80; i < 320; i++) {
      this.heightList.push(i);
    }
    for (let i = 0; i < 300; i++) {
      this.weightList.push(i);
    }
  },
  beforeRouteLeave(to, from, next) {
    this.changeNavFlag(true);
    next();
  },
  methods: {
    ...mapMutations(["changeNavFlag"]),
    backlogin() {
      window.localStorage.removeItem("logUser");
      this.$router.push({
        name: "login",
      });
    },
    exit() {
      localStorage.removeItem("logUser");
      this.$router.push({
        name: "mine",
      });
    },
    onClickLeft() {
      // 顶部返回按钮
      this.$router.history.go(-1);
    },
    onSelectSex(item) {
      this.showSex = false;
      let id = localStorage.getItem("logUser");
      mineInfo.update(id, { userSex: item.name }).then((res) => {
        this.sexCon = item.name;
      });
    },
    onBirth() {
      let id = localStorage.getItem("logUser");
      let year = this.currentDate.getFullYear();
      let month = this.currentDate.getMonth() + 1;
      let day = this.currentDate.getDate();
      let userBirth = year + "-" + month + "-" + day;
      this.showBirth = false;
      mineInfo.update(id, { userBirth }).then((res) => {
        this.birthCon = userBirth;
      });
    },
    onHeight(val) {
      let id = localStorage.getItem("logUser");
      let userHeight = val + "cm";
      this.showHeight = false;
      mineInfo.update(id, { userHeight }).then((res) => {
        this.heightCon = userHeight;
      });
    },
    onWeight(val) {
      let id = localStorage.getItem("logUser");
      let userWeight = val + "kg";
      this.showWeight = false;
      mineInfo.update(id, { userWeight }).then((res) => {
        this.weightCon = userWeight;
      });
    },
    onCancel() {
      this.showBirth = false;
      this.showHeight = false;
      this.showWeight = false;
    },
    onOpen() {
      this.changeSign = this.userSign;
    },
    signConfirm() {
      let id = localStorage.getItem("logUser");
      mineInfo.update(id, { userSign: this.changeSign }).then((res) => {
        this.userSign = this.changeSign;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.exit {
  width: 94%;
  height: 45px;
  background-color: orangered;
  margin: 40px auto;
  font-size: 20px;
  line-height: 45px;
  color: #fff;
  box-sizing: border-box;
}
.content {
  width: 100%;
  text-align: left;
  > div {
    border-bottom: 1px solid #e0e0e0;
    .birthBox {
      width: 100%;
      padding: 5px 0 30px;
      box-sizing: border-box;
    }
  }
  .van-cell__title {
    font-size: 16px;
  }
  .imgBox {
    position: relative;
    .van-cell {
      line-height: 50px;
      .van-cell__right-icon {
        line-height: 50px;
      }
    }
    > img {
      width: 42px;
      height: 38px;
      position: absolute;
      right: 36px;
      top: 15px;
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
</style>