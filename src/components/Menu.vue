<script setup>
import { ref, } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Profile from "./Profile.vue";
import {useAuth} from "../store/StoreAuth"
import { CalendarIcon , ClipboardDocumentCheckIcon, FaceSmileIcon } from "@heroicons/vue/24/solid";
const store = useAuth()
const name =ref()
const acessLevel = ref()
const menuItems = ref([
  {

    route: "About",
    title: "Sobre",
    level: 2

  },

  {

    route: "Calendar",
    title: "Agenda",
    level: 2

  },
  {

    route: "Panel",
    title: "Painel",
    level: 3

  },



]);
name.value = localStorage.getItem("userName")
function userCredentials(){
const data1 = localStorage.getItem("userName")
const data2 = JSON.parse(data1)
name.value = data2.name;
data2.level === 1 ? acessLevel.value = "Cliente": '';
data2.level === 2 ? acessLevel.value = "Agente" : '';
data2.level === 3 ? acessLevel.value = "Administrador" : '';

}userCredentials();

function openEdit(){
  console.log('ola')
}
</script>

<template>
  <section class=" float-left relative " >
    <nav class="bg-gradient-to-b w-44 float-left text-center  h-screen bg-slate-600  relative  text-white font-bold ">
      <Profile :userName="name" :userAcess="acessLevel" @click="openEdit" />
      <li v-for="(item) in menuItems" :key="item.id" class="list-none hover:bg-slate-500 p-2  rounded-md text-white">
        <RouterLink :to="item.route" class="text-left  flex justify-center border-b-2 "  >
          <span class="">
            <CalendarIcon v-if="item.title == 'Agenda' " class="h-5 m-auto w-6 text-gray-400"/>
            <ClipboardDocumentCheckIcon  v-if="item.title == 'Painel' " class="h-5 m-auto w-6 text-gray-400"/>
            <FaceSmileIcon v-if="item.title == 'Sobre' " class="h-5 m-auto w-6 text-gray-400" />
            {{ item.title }}
          </span>
        </RouterLink>
        
      </li>
  

    </nav>
    <div class="absolute top-0 right-[-60px]">dkisdis</div>
  </section>

</template>



<style>
.active {
  color: #414141;
  ;
  opacity: 90%;
}
</style>
