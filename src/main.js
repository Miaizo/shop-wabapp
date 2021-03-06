import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import { Lazyload } from "vant";
import VueClipboard from "vue-clipboard2";

Vue.use(VueClipboard);
Vue.use(Vant);
Vue.use(Lazyload, {
  lazyComponent: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
