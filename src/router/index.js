import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      keepAlive: true // 需要缓存 
    }
  },
  {
    path: "/category",
    name: "category",
    component: () => import("../views/category/Category.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/cart/Cart.vue")
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/account/Account.vue")
  },
  {
    path: "/thirdParty",
    name: "thirdParty",
    component: () => import("../views/thirdparty/thirdParty.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/Login.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// 修复路由重复点击报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
