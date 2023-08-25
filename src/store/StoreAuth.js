import { defineStore } from "pinia";
import axios from "axios";
import { ref, reactive } from "vue";
const tokenAuth = ref();
const idCred = ref();
const generatorId = ref(Math.random() * (10000 - 30) + 30);
const permission = ref();
const waitDocument =ref(false)
export const useAuth = defineStore("useAuth", () => {
  function getAuth(token) {
    console.log(permission.value);
    if (token && generatorId.value) {
      window.location.href = "/Calendar";
      localStorage.setItem("credentials", token);
     waitDocument.value = true
    } else {
      setInterval(() => {
        localStorage.removeItem("credentials");
   
      }, 3000);
    }
  }
  function credentials(token) {
    const data1 = localStorage.getItem("userName");
    const data2 = JSON.parse(data1);

    if (data2.level === 3) {
      permission.value = true;
    }
  }

  return { getAuth, credentials, tokenAuth, idCred, generatorId, permission, };
});
