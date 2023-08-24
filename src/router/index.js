import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue"
import {ref }from "vue"
import Calendar from "../views/Calendar.vue"
import About from "../views/About.vue"
import ControlCalendar from "../views/ControlCalendar.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
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
      meta: { requiresAuth: true, requirePermission: true },
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
    {
      path: "/Register",
      name: "Register",
      component: Register,
      meta: { hideForAuth: true },
    },
  ],
  
});


router.beforeEach((to, from, next)=>{
  const data1 = localStorage.getItem("userName")
  const data2 = JSON.parse(data1)
  const permission = data2.level
  console.log(permission)
  const tokenAuth = localStorage.getItem("credentials");

  const isAuth = to.matched.some((record)=> record.meta.requiresAuth);
  const isHide = to.matched.some((record)=> record.meta.hideForAuth);
  const showAdm = to.matched.some((record)=> record.meta.requirePermission);
  
  if(isAuth && !tokenAuth){
    return next({path:"/"});
    
  }else if(isHide &&  tokenAuth == true  ){
 
    return next(
  
      {path:"/Calendar"},
        {path:"/Panel"},
      {path:"/About"},
      
      )
  }
  next();
})

export default router;