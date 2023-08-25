<script setup>
import Menu from '../components/Menu.vue';
import axios from "axios"
import {ref, onMounted, reactive} from "vue";
import {useAuth} from "../store/StoreAuth";
const store = useAuth()
const dataClients = ref([])
const allDay = ref()
const tableHead = [
    {
        title: "Horario"
    },
    {
        title: "Cliente"
    },
    {
        title: "Atendente"
    },
    {
        title: "Valor pago"
    },
    {
        title: "Realizado"
    }
]
onMounted(()=>{
 async function getClients(){
    const {data} = await axios.get("https://barber-api-lovat.vercel.app/panelAttendances");
    data.filter(item=>{
       item.data.forEach(el =>{
        dataClients.value.push({
            date:el.date,
            client_name:el.client_name,
            att_name:el.att_name
        })
       })
    
    })
    allDay.value = data.length

 } 

 
store.credentials()
 getClients()
})

</script>

<template>
    <section class=" w-full  flex justify-center h-screen overflow-y-scroll bg-bgSite ">

        <Menu />
        <div class="w-full" >

            <div class="text-[3.2rem] text-gray-600 text-center" v-if="store.permission">Painel de Agendamentos</div>


            <div class=" p-4" v-if="store.permission">
                <div
                    class="w-full bg-slate-400 h-40 p-2 relative items-center justify-center rounded-md bg-opacity-30 flex">
                    <div class="p-2 w-64 h-24 rounded-lg bg-violet-600  shadow-xl shadow-violet-300  ">
                        <h1 class="text-gray-100 font-bold">Agendamentos no Mês</h1>
                        <p class="text-center p-3 text-white font-extrabold text-2xl">10</p>
                    </div>
                    <div class="p-2 w-64 h-24 rounded-lg bg-violet-600 ml-6 shadow-xl shadow-violet-300  ">
                        <h1 class="text-gray-100 font-bold">Agendamentos no dia</h1>
                        <p class="text-center p-3 text-white font-extrabold text-2xl">{{ allDay }}</p>
                    </div>
                    <div class="p-2 w-64 h-24 rounded-lg bg-green-600 bg-opacity-50 mt-5 ml-6 shadow-xl shadow-green-300 ">
                        <h1 class="text-gray-900 font-bold">Total Arrecadado</h1>
                        <p class="text-center p-3 text-white font-extrabold text-2xl ">10 R$</p>
                    </div>

                </div>
                <table class="w-full  bg-slate-50  mt-2 rounded-sm">
                    <thead class="">
                        <tr class=" text-semibold shadow ">
                            <th class="p-4" v-for="item in tableHead" :key="item.title">{{ item.title }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-2 border-gray-300 text-gray-700 font-bold text-center bg-blue-100 cursor-pointer hover:bg-blue-300 transition-all"
                        v-for="(item, index) of dataClients"
                        :key="index.id"
                        >
                            <td class="p-2">{{ item.date}}</td>
                            <td class="p-2">{{ item.client_name }}</td>
                            <td class="p-2">{{ item.att_name }}</td>
                            <td class="p-2">-</td>
                            <td class="p-2">pendente</td>
                            <td>
                            </td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </section>
</template>
