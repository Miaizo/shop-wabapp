<template>
  <div id="app">
    <div>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
      <!-- <router-view /> -->
      <Tabbar v-if="tabType" />
    </div>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar";
export default {
  name: "app",
  data() {
    return {
      tabType: true
    };
  },
  components: {
    Tabbar
  },
  watch: {
    $route(to) {
      if (
        to.path == "/" ||
        to.path == "/category" ||
        to.path == "/cart" ||
        to.path == "/account"
      ) {
        this.tabType = true;
      } else {
        this.tabType = false;
      }
    }
  },
  methods: {
    getstore() {
      this.$store.commit("tabShow");
    }
  }
};
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
