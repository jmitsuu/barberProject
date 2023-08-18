<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const menuItems = ref([

  {

    route: "Barber",
    title: "Barbeiro",

  },
  {
  
    route: "About",
    title: "About",

  },

]);
</script>

<template>


<section class="flex">
  <nav
    class="bg-gradient-to-b w-60 h-screen bg-slate-200 text-white "
  >
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
