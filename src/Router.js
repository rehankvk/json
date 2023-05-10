import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import Posts from "./pages/Post.vue";
import Comments from "./pages/Comments.vue";
import Albums from "./pages/Albums.vue";
import Todos from "./pages/Todos.vue";
import Users from "./pages/Users.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/posts", component: Posts },
  { path: "/comments", component: Comments },
  { path: "/albums", component: Albums },
  { path: "/todos", component: Todos },
  { path: "/users", component: Users },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
