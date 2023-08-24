import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue"
import {ref }from "vue"
import Calendar from "../views/Calendar.vue"
import About from "../views/About.vue"
import ControlCalendar from "../views/ControlCalendar.vue"
import Login from "../views/Login.vue"
import { useAuth } from "../store/StoreAuth";
const requires = ref()
const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "About",
      component: About,
      meta: { requiresAuth: true },
    },
    {
      path: "/Calendar",
      name: "Calendar",
      component: Calendar,
      meta: { requiresAuth: true },
    },
    {
      path: "/About",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/Panel",
      name: "Painel",
      component: ControlCalendar,
      meta: { requiresAuth: true },
    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
      meta: { hideForAuth: true },
    },
    {
      path: "/",
      name: "Login",
      component: Login,
      meta: { hideForAuth: true },
    },
  ],
  
});


router.beforeEach((to, from, next)=>{
  const store = useAuth()
  const tokenAuth = localStorage.getItem("credentials");
 console.log(tokenAuth)
  const isAuth = to.matched.some((record)=> record.meta.requiresAuth);
  const isHide = to.matched.some((record)=> record.meta.hideForAuth);
  if(isAuth && !tokenAuth){
    return next({path:"/"});
  }else if(isHide &&  tokenAuth == true){
    return next(
      {path:"/Calendar"},
      {path:"/Panel"},
      {path:"/About"},
      
      )
  }
  next();
})

export default router;