<template>
  <div>
    <form action="/">
      <van-search
        v-model="keyWord"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="searchBox">
      <div class="searchTitle">搜索发现</div>
      <div class="searchCon">
        <div
          class="search-item"
          v-for="(item, index) in list"
          :key="index"
          @click="goSearch(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.searchBox {
  width: 100%;
  background-color: #fff;
  text-align: left;
  box-sizing: border-box;
  padding: 15px;
  .searchTitle {
    font-size: 17px;
    font-weight: 700;
  }
  .searchCon {
    display: flex;
    flex-flow: row wrap;
    margin-top: 10px;
    .search-item {
      padding: 3px 8px;
      border: 0.5px solid #b0b0b0;
      margin-right: 15px;
      letter-spacing: 2px;
      font-size: 15px;
      margin-bottom: 15px;
    }
  }
}
</style>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      keyWord: "",
      list: [
        "卫衣",
        "T恤",
        "夹克",
        "椰子",
        "帽子",
        "袜子",
        "工装裤",
        "AJ1",
        "衬衫",
        "匡威",
      ],
    };
  },
  methods: {
    ...mapMutations(["changeKeyWord"]),
    onSearch() {
      this.changeKeyWord(this.keyWord);
      this.$router.push({ name: "goodslist" });
    },
    onCancel() {
      this.$router.history.go(-1);
    },
    goSearch(item) {
      this.changeKeyWord(item);
      this.$router.push({ name: "goodslist" });
    },
  },
};
</script>