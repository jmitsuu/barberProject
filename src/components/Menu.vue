<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Profile from "./Profile.vue";

const menuItems = ref([
{
  
  route: "About",
  title: "Sobre",

},

  {

    route: "Calendar",
    title: "Agenda",

  },
 

]);
</script>

<template>


<section class="flex">
  <nav
    class="bg-gradient-to-b w-60 h-screen bg-slate-600   text-white font-bold "
  > 
      <Profile :userName="'Jairo'" :userAcess="'Cliente'"/>
      <li
        v-for="(item) in menuItems"
        :key="item.id"
        class="list-none hover:bg-slate-500 p-2  rounded-md text-white"
      >
        <RouterLink :to="item.route" class="text-left  flex ">
         {{ item.title }}
        </RouterLink>
      </li>
  </nav>

    <RouterView/>
  </section>

</template>



<style>
.active {
color: #414141; ;
opacity: 90%;
}
</style>
