// 將其透過 import 的方式引入進來
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // 指定路徑(導航到...)
    meta: {
      layout: "Layout",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/member",
    name: "member",

    component: () => import("../views/Member.vue"),
  },
  {
    path: "/qa",
    // 網址路徑
    name: "qa",
    // 網址路徑名稱
    component: () => import("../views/Qa.vue"),
    // 指定網址路徑連結哪種網頁
    meta: {
      layout: "Layout",
    },
  },
  {
    path: "/prize",
    // 網址路徑
    name: "prize",
    // 網址路徑名稱
    component: () => import("../views/Prize.vue"),
    // 指定網址路徑連結哪種網頁
    meta: {
      layout: "Layout",
    },
  },
  {
    path: "/product",
    // 網址路徑
    name: "product",
    // 網址路徑名稱
    component: () => import("../views/Product.vue"),
    // 指定網址路徑連結哪種網頁
    meta: {
      layout: "Layout",
    },
  },
  {
    path: "/notice",
    // 網址路徑
    name: "notice",
    // 網址路徑名稱
    component: () => import("../views/Notice.vue"),
    // 指定網址路徑連結哪種網頁
    meta: {
      layout: "Layout",
    },
  },
  {
    path: "/act",
    // 網址路徑
    name: "act",
    // 網址路徑名稱
    component: () => import("../views/Act.vue"),
    // 指定網址路徑連結哪種網頁
    meta: {
      layout: "Layout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
