import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";

const routes = [
  { path: "/", component: HomePage, name: "home", meta: { title: "Home Page" } },

  {
    path: "/posts",
    component: () => import("./pages/Post.vue"),
    name: "posts",
    meta: { title: "Posts Page" }
  },
  {
    path: "/comments",
    component: () => import("./pages/Comments.vue"),
    name: "comments",
    meta: { title: "Comments Page" }
  },
  {
    path: "/albums",
    component: () => import("./pages/Albums.vue"),
    name: "albums",
    meta: { title: "Albums Page" }
  },
  {
    path: "/todos",
    component: () => import("./pages/Todos.vue"),
    name: "todos",
    meta: { title: "Todos Page" }
  },
  {
    path: "/users",
    component: () => import("./pages/Users.vue"),
    name: "users",
    meta: { title: "Users Page }
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('./pages/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
