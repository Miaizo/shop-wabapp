import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("../views/category/Category.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/cart/Cart.vue")
  },
  {
    path: "/myself",
    name: "Myself",
    component: () => import("../views/account/Account.vue")
  }
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
