<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerlist" :key="item.id"
        ><img :src="item.src"
      /></van-swipe-item>
    </van-swipe>
  </div>
</template>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 200px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}
/deep/ .van-swipe__indicators {
  padding: 5px;
  line-height: 1.2;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 24px;
}
</style>
<script>
export default {
  props: ["bannerlist"],
};
</script>