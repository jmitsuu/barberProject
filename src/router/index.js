import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue"
import Calendar from "../views/Calendar.vue"
import About from "../views/About.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "About",
      component: About,
    },
    {
      path: "/Calendar",
      name: "Calendar",
      component: Calendar,
    },
    {
      path: "/About",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
    },
  ],
});



export default router;