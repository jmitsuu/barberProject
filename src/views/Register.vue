<script setup>
import {ref} from "vue";
import axios from "axios";
import {useAuth} from "../store/StoreAuth";
import { RouterLink, RouterView } from "vue-router";
const userEmail = ref();
const userName = ref()
const userPassword= ref();
const store = useAuth()
const userCreated = ref(false)


async function register(){
  const {data} = await axios.get( `http://localhost:3000/users/`);
  data.filter(item=> item.email !== userEmail.value)
    axios.post( `http://localhost:3000/users/`,{
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
    acess_level: 1,
    token: "true"
  
 
});
goToLogin()

}
function goToLogin(){
  
    if(userName.value  && userEmail.value  && userPassword.value){
        userCreated.value = true
        setTimeout(()=>{
        window.location.href ="/"
   
    },4000)
    }
   
}
</script>

<template>
    <section class="flex justify-center relative">

          
         <fieldset class="mt-24 border-2 p-14 w-96  bg-white relative">
        <legend class="text-3xl text-gray-600 text-center mb-4">Registrar</legend>
        <div class="relative border-2 rounded-md gap-3 py-1 mb-2">
          <span class="absolute top-0 left-2 text-[0.8rem] text-gray-600 ">Nome</span>
          <input type="text"  class="outline-none w-full pl-1 h-full mt-2" v-model="userName" required/>
        </div>
        <div class="relative border-2 rounded-md gap-3 py-1 mb-2">
          <span class="absolute top-0 left-2 text-[0.8rem] text-gray-600 ">Email</span>
          <input type="text"  class="outline-none w-full pl-1 h-full mt-2" v-model="userEmail" required/>
        </div>
        <div class="relative border-2 rounded-md gap-3 py-1 mb-2">
          <span class="absolute top-0 left-2 text-[0.8rem] text-gray-600 ">Senha</span>
          <input type="password"  class="outline-none pl-1 w-full h-full mt-2" v-model="userPassword" required />
        </div>
        <br />
        <button class=" w-full border-2 px-4 py-1 rounded-md bg-slate-200 font-bold text-2xl hover:bg-slate-300 transition-all"
          @click="register">Criar</button>
          <routerLink to="/">
            <div class="text-center text-[1.1rem] mt-9  rouynded-md text-gray-500 cursor-pointer p-2 hover:border-b-2">Voltar</div>
          </routerLink>
          <div class=" text-center p-2 text-2xl text-green-400  font-bold" v-if="userCreated">Usuario Criado!</div>
      </fieldset>

    </section>
</template>