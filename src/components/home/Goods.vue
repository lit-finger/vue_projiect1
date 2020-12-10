<template>
  <div class="goods">
    <div class="title">你可能喜欢</div>
    <div class="content">
      <div
        class="con-item"
        v-for="item in list"
        :key="item.id"
        @click="goDetail(item.id)"
      >
        <img :src="item.goodsimg" />
        <div class="con-name">{{ item.goodsname }}</div>
        <div class="con-price">￥{{ item.goodsprice }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    goDetail(id) {
      this.$router.push({
        name: "goodsdetail",
        params: { id },
      });
    },
  },
};
</script>

<style scoped>
.goods {
  width: 100%;
  background-color: #fff;
  padding: 0 10px;
  box-sizing: border-box;
}
.title {
  width: 100%;
  line-height: 60px;
  font-size: 22px;
  color: #dadada;
  text-align: center;
}
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  font-size: 12px;
}
.con-item {
  width: 48%;
  margin-top: 20px;
  text-align: left;
  padding-bottom: 10px;
}
.con-item > img {
  width: 100%;
  height: 215px;
}
.con-item .con-name {
  width: 100%;
  height: 32px;
  margin: 10px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.con-price {
  color: #d62927;
  font-weight: 700;
}
</style>