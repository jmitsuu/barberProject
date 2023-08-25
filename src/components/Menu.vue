<script setup>
import { ref, computed, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Profile from "./Profile.vue";
import { useAuth } from "../store/StoreAuth";
import {
  CalendarIcon,
  ClipboardDocumentCheckIcon,
  FaceSmileIcon,
} from "@heroicons/vue/24/solid";
const store = useAuth();

const name = ref();
const acessLevel = ref();
const openModal = ref(false);
const styleComponent = ref(false);
const menuItems = ref([
  {
    route: "About",
    title: "Sobre",
    level: 2,
  },

  {
    route: "Calendar",
    title: "Agenda",
    level: 2,
  },
  {
    route: "Panel",
    title: "Painel",
    level: 3,
  },
]);
name.value = localStorage.getItem("userName");
function userCredentials() {
  const data1 = localStorage.getItem("userName");
  const data2 = JSON.parse(data1);
  name.value = data2.name;
  data2.level === 1 ? (acessLevel.value = "Cliente") : "";
  data2.level === 2 ? (acessLevel.value = "Agente") : "";
  data2.level === 3 ? (acessLevel.value = "Administrador") : "";
}
userCredentials();

function logOut(){
  localStorage.removeItem("credentials");
  window.location.reload();
}
onMounted(()=>{

})


</script>

<template>
  <section class="float-left relative">
    <nav
      class="bg-gradient-to-b w-44 float-left text-center h-screen bg-slate-600 relative text-white"
   
    >
      <Profile
        class="font-bold"
        :userName="name"
        :userAcess="acessLevel"
        @click="!openModal ? (openModal = true) : (openModal = false)"
      />
      <Transition>
        <div
          class="absolute top-20 w-full h-20 bg-gray-800 items-center flex flex-col justify-center"
          v-if="openModal"
          @mouseleave="openModal = false"
        >
          <p class="cursor-pointer hover:bg-gray-600 py-1 w-full">Editar</p>
          <p class="cursor-pointer hover:bg-gray-600 py-1 w-full" @click="logOut">Sair</p>
        </div>
      </Transition>
      <li
        v-for="item in menuItems"
        :key="item.id"
        class="list-none hover:bg-slate-500 p-2 rounded-md text-white"
      
      >
        <RouterLink
          :to="item.route"
          class="text-left flex justify-center border-b-2 text-[0.8rem]"
     
        >
          <span class="">
            <CalendarIcon
              v-if="item.title == 'Agenda' "
              class="h-5 m-auto w-6 text-gray-400"
            />
            <ClipboardDocumentCheckIcon
              v-if="item.title == 'Painel'"
              class="h-5 m-auto w-6 text-gray-400"
            />
            <FaceSmileIcon
              v-if="item.title == 'Sobre'"
              class="h-5 m-auto w-6 text-gray-400"
            />
            {{ item.title }}
          </span>
        </RouterLink>
      </li>
    </nav>
  </section>
</template>

<style>
.active {
  color: #414141;
  opacity: 90%;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
