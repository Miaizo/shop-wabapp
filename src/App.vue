<template>
  <div id="app">
    <div class="max-width">
      <router-view />
      <!-- <button @click="getstore()">{{ this.$store.state.tabShow }}</button> -->
      <Tabbar v-if="this.$store.state.tabShow" />
    </div>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar";
export default {
  name: "app",
  components: {
    Tabbar
  },
  methods: {
    getstore() {
      this.$store.commit("tabShow");
    }
  }
};
</script>
<style></style>
