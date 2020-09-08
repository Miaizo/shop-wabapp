<template>
  <div id="app">
    <div class="max-width">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" transition-mode=""></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" transition-mode="out-in"></router-view>
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
      console.log(to.path);
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
<style></style>
