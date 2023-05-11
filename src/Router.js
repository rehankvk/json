import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },

  {
    path: "/posts",
    component: () => import("./pages/Post.vue"),
    name: "posts",
  },
  {
    path: "/comments",
    component: () => import("./pages/Comments.vue"),
    name: "comments",
  },
  {
    path: "/albums",
    component: () => import("./pages/Albums.vue"),
    name: "albums",
  },
  {
    path: "/todos",
    component: () => import("./pages/Todos.vue"),
    name: "todos",
  },
  {
    path: "/users",
    component: () => import("./pages/Users.vue"),
    name: "users",
  },
  { path: "/:pathMatch(.*)*", name: "notFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
