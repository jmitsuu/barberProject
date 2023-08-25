<script setup>
import {ref, onMounted} from "vue";
import axios from "axios";
import {useAuth} from "../store/StoreAuth";
import { RouterLink, RouterView } from "vue-router";
const userEmail = ref();
const userPassword= ref();
const store = useAuth()

async function login(){
const {data} = await axios.get( `http://localhost:3000/users/`);

data.filter(item =>{

  if(item.email == userEmail.value && item.password == userPassword.value){
    store.getAuth(item.token)
    localStorage.setItem("userName", JSON.stringify({name:item.name, level:item.acess_level}))
  }

})
}

</script>

<template>
    <section class="flex justify-center">


         <fieldset class="mt-24 border-2 p-14 w-96  bg-white">
        <legend class="text-3xl text-gray-600 text-center mb-4">Logar</legend>

        <div class="relative border-2 rounded-md gap-3 py-1 mb-2">
          <span class="absolute top-0 left-2 text-[0.8rem] text-gray-600 ">Email</span>
          <input type="text"  class="outline-none w-full pl-1 h-full mt-2" v-model="userEmail" />
        </div>
        <div class="relative border-2 rounded-md gap-3 py-1 mb-2">
          <span class="absolute top-0 left-2 text-[0.8rem] text-gray-600 ">Senha</span>
          <input type="password"  class="outline-none pl-1 w-full h-full mt-2" v-model="userPassword" />
        </div>
        <br />
        <button class=" w-full border-2 px-4 py-1 rounded-md bg-slate-200 font-bold text-2xl hover:bg-slate-300 transition-all"
          @click="login">Entrar</button>
          <RouterLink to="/Register">

         
          <div class="text-center text-[1.1rem] mt-9  rouynded-md text-gray-500 cursor-pointer p-2 hover:border-b-2"
          
          >Criar Usuario</div>
        </RouterLink>
      </fieldset>
    </section>
</template>