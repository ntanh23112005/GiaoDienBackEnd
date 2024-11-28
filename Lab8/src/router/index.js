import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import BlogList from "../views/BlogList.vue";
import BlogPost from "../views/BlogPost.vue";
import UserProfile from "../views/UserProfile.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import UserInfo from "../views/UserInfo.vue";
import UserSettings from "../views/UserSettings.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/blogs", name: "BlogList", component: BlogList },
  { path: "/blog/:id", name: "BlogPost", component: BlogPost },
  {
    path: "/profile",
    name: "UserProfile",
    component: UserProfile,
    alias: "/me",
    children: [
      { path: "info", name: "UserInfo", component: UserInfo },
      { path: "settings", name: "UserSettings", component: UserSettings },
    ],
  },
  { path: "/login", name: "Login", component: Login },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
      if (isAuthenticated) {
        next();
      } else {
        next("/login");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
