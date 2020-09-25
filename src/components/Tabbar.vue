<template>
  <van-tabbar v-model="active" class="active_tab">
    <van-tabbar-item
      v-for="(item, index) in tabbars"
      :key="index"
      @click="tab(index, item.name)"
    >
      <!-- <span :class="currIndex == index ? active : ''">{{ item.name }}</span> -->
      <template slot="icon" slot-scope="props">
        <img class="icon" :src="props.active ? item.active : item.normal" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "/",
          title: "首页",
          normal: require("../assets/image/icon/home.png"),
          active: require("../assets/image/icon/home_cover.png")
        },
        {
          name: "login",
          title: "分类",
          normal: require("../assets/image/icon/categories.png"),
          active: require("../assets/image/icon/categories_cover.png")
        },
        {
          name: "cart",
          title: "购物车",
          normal: require("../assets/image/icon/cart.png"),
          active: require("../assets/image/icon/cart_cover.png")
        },
        {
          name: "account",
          title: "账户",
          normal: require("../assets/image/icon/account.png"),
          active: require("../assets/image/icon/account_cover.png")
        }
      ]
    };
  },
  methods: {
    tab(index, val) {
      this.currIndex = index;
      this.$router.push(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 30px;
  height: 30px;
}
</style>
