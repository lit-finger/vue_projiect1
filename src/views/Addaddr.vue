<template>
  <div>
    <div class="top">
      <van-nav-bar title="确认订单" left-arrow @click-left="onClickLeft">
      </van-nav-bar>
    </div>
    <van-address-edit
      :area-list="areaList"
      :address-info="addrOrgInfo"
      show-postal
      show-delete
      show-search-result
      item-height="200"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { AddressEdit } from "vant";
import area from "../model/area";
import addrInfo from "../model/addr";
import { Toast } from "vant";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      areaList: {},
      searchResult: [],
      addrOrgInfo: {},
    };
  },
  created() {
    this.changeNavFlag(false);
    this.areaList = area;
    let id = this.$route.params.id;
    if (id > 0) {
      addrInfo.getAddr({ id }).then((res) => {
        this.addrOrgInfo = res.data[0];
      });
    }
  },
  beforeRouteLeave(to, from, next) {
    this.changeNavFlag(true);
    next();
  },
  methods: {
    ...mapMutations(["changeNavFlag"]),
    onSave(item) {
      //   Toast("save");
      let id = this.$route.params.id;
      this.addrOrgInfo.userid = localStorage.getItem("logUser");
      this.addrOrgInfo.name = item.name;
      this.addrOrgInfo.tel = item.tel;
      this.addrOrgInfo.province = item.province;
      this.addrOrgInfo.city = item.city;
      this.addrOrgInfo.county = item.county;
      this.addrOrgInfo.addressDetail = item.addressDetail;
      this.addrOrgInfo.areaCode = item.areaCode;
      this.addrOrgInfo.postalCode = item.postalCode;
      this.addrOrgInfo.address =
        item.province + item.city + item.county + item.addressDetail;
      if (id > 0) {
        addrInfo
          .updateAddr(id, this.addrOrgInfo)
          .then((res) => {
            Toast.success("修改成功");
            this.$router.push({ name: "chooseaddr" });
          })
          .catch((err) => {
            Toast.fail("发生未知错误");
          });
      } else {
        addrInfo
          .addAddr(this.addrOrgInfo)
          .then((res) => {
            Toast.success("添加成功");
            this.$router.push({ name: "chooseaddr" });
          })
          .catch((err) => {
            Toast.fail("发生未知错误");
          });
      }
    },
    onDelete() {
      let id = this.$route.params.id;
      if (id > 0) {
        addrInfo.delAddr(this.$route.params.id).then((res) => {
          this.$router.push({ name: "chooseaddr" });
        });
      } else {
        this.$router.push({ name: "chooseaddr" });
      }
    },
    onChangeDetail(val) {
      //   if (val) {
      //     this.searchResult = [
      //       {
      //         name: "黄龙万科中心",
      //         address: "杭州市西湖区",
      //       },
      //     ];
      //   } else {
      //     this.searchResult = [];
      //   }
    },
    onClickLeft() {
      this.$router.push({ name: "chooseaddr" });
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .van-picker {
  height: 120px;
}
/deep/ .van-cell {
  line-height: 40px;
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