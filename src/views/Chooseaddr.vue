<template>
  <div>
    <div class="top">
      <van-nav-bar
        title="选择地址"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <span>确认</span>
        </template>
      </van-nav-bar>
    </div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { AddressList } from "vant";
import addrInfo from "../model/addr";
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      disabledList: [],
    };
  },
  created() {
    let userid = localStorage.getItem("logUser");
    addrInfo.getAddr({ userid }).then((res) => {
      this.list = res.data;
    });
  },
  methods: {
    onAdd() {
      this.$router.push({ name: "addaddr", params: { id: 0 } });
    },
    onEdit(item, index) {
      //   this.$router.push({ name: "addaddr", params: { id: item.id } });
      console.log(item);
    },
    onClickLeft() {
      this.$router.push({ name: "pay" });
    },
    async onClickRight() {
      let userid = localStorage.getItem("logUser");
      await addrInfo.updateAddr(this.chosenAddressId, { isDefault: true });
      addrInfo.getAddr({ userid }).then((res) => {
        let arr = [];
        res.data.forEach((item) => {
          if (item.id != this.chosenAddressId) {
            arr.push(addrInfo.updateAddr(item.id, { isDefault: false }));
          }
        });
        Promise.all(arr).then(() => {
          this.$router.push({ name: "pay" });
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/.van-radio__icon .van-icon {
  width: 20px;
  height: 20px;
}
/deep/.van-icon-success::before {
  font-size: 16px;
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
</style>