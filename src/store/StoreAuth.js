import { defineStore } from "pinia";
import axios from "axios"
import { ref, reactive } from "vue";
const tokenAuth = ref();
const idCred = ref()
const generatorId = ref(Math.random() * (10000 - 30) + 30)
export const useAuth = defineStore("useAuth", () => {

  function getAuth(token) {


    if(token && generatorId.value ){
      window.location.href="/Calendar"
      localStorage.setItem("credentials", token)

    }else{
      setInterval(()=>{
        localStorage.removeItem("credentials")
        console.log('?')
      },3000)
    }

  }
  function credentials(token){
  if(generatorId.value){
    window.location.href="/Calendar"
    localStorage.setItem("credentials", token)
  }
  }



  
  return {getAuth, tokenAuth, idCred, generatorId };
});
