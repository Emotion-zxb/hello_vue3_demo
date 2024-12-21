import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import news from "@/views/news.vue";
import details from "@/views/details.vue";
import Slot from "@/views/Slot.vue";
import ShallowRef from "@/views/ShallowRef.vue";
import Teleport from "@/views/Teleport.vue";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  { path: "/home", component: HomeView, name: "zhuye" }, // 命名路由 name
  { path: "/about", component: AboutView, name: "guanyu" },
  {
    path: "/news",
    component: news,
    name: "xinwen",
    // 多级路由
    children: [
      {
        path: "details/:title",
        component: details,
        name: "xiangqing",
        props(route:any) {
          return route.params
          // return route.query
        }
      },
    ],
  },
  {
    path: '/slot',
    component: Slot
  },
  {
    path: '/shallow',
    component: ShallowRef
  },
  {
    path: '/teleport',
    component: Teleport
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
