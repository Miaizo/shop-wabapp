<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../../assets/image/icon/home.png" alt="">
      </van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <van-swipe-item>5</van-swipe-item>
      <van-swipe-item>6</van-swipe-item>
      <van-swipe-item>7</van-swipe-item>
      <van-swipe-item>8</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: 1
    };
  }
};
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
</style>
