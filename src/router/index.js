import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue"
import Barber from "../views/Barber.vue"
import About from "../views/About.vue"
// const routes =[


// {
//   path:"/Barber",
//   name:"Barber",
//   compoment: Barber,
// },
// {
//   path:"/About",
//   name:"About",
//   compoment: About,
// }
// ];
// const router = createRouter({
//   routes,
//   linkExactActiveClass: "active",
//   history: createWebHistory(),
// });

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Barber",
      component: Barber,
    },
    {
      path: "/Barber",
      name: "Barber",
      component: Barber,
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