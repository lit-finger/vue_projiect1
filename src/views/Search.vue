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
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      keyWord: "",
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
  },
};
</script>