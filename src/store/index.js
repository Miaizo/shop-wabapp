import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabShow: true
  },
  mutations: {
    tabShow() {
      this.state.tabShow = !this.state.tabShow;
    }
  },
  actions: {},
  modules: {}
});
