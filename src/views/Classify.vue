<template>
  <div class="classify">
    <div class="search">
      <van-search
        shape="round"
        background="#f8f8f8"
        placeholder="搜索商品"
        @click="goSearch"
      />
    </div>
    <div class="classifyNav">
      <div class="leftNav">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item
            v-for="item in classifyList"
            :key="item.id"
            :title="item.name"
          />
        </van-sidebar>
      </div>
      <div class="rightNav">
        <div
          class="right-item"
          v-for="item in classifyList2"
          :key="item.id"
          @click="getGoodsList"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import classifyInfo from "../model/classify.js";
export default {
  data() {
    return {
      activeKey: 0,
      classifyList: [],
      classifyList2: [],
    };
  },
  created() {
    classifyInfo.getClassifyList().then((res) => {
      // console.log(res);
      this.classifyList = res.data;
      this.classifyList2 = res.data[0].list;
    });
  },
  methods: {
    getGoodsList() {
      this.$router.push({
        name: "goodslist",
      });
    },
    onChange(index) {
      this.classifyList2 = this.classifyList[index].list;
    },
    goSearch() {
      this.$router.push({ name: "search" });
    },
  },
};
</script>

<style scoped>
.search .van-search__content {
  background-color: #fff;
}
.classifyNav {
  width: 100%;
  display: flex;
}
.leftNav {
  width: 150px;
  min-height: 700px;
  border-top: 1px solid #f7f8fa;
  background-color: #f7f8fa;
}
.leftNav .van-sidebar {
  width: 150px;
}
.leftNav .van-sidebar-item {
  padding: 0;
  line-height: 55px;
}
.rightNav {
  width: 225px;
  min-height: 700px;
}
.right-item {
  width: 100%;
  line-height: 55px;
  box-sizing: border-box;
  border-top: 1px solid #e6e6e6;
  background-color: #fff;
}
</style>
