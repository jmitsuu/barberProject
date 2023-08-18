<script setup>
import { ref, onMounted } from "vue"
import { CalendarDaysIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
import Input from '../components/input/Input.vue';
import {useCalendar} from "../store/storeCalendar"
const store = useCalendar()
const modal = ref(false);
const showMessage = ref(false)
const usersAttendants = ref()
const attName = ref()
const attStatus = ref()
const listen = ref()
const attendants = [
  {
    id: 1,
    name: 'João',
    status:store.attStatus
  },
  {
    id: 2,
    name: 'Pedro',
    status:store.attStatus
  },
  {
    id: 3,
    name: 'Jose',
    status:store.attStatus
  }
];
localStorage.setItem('Attendants', JSON.stringify(attendants));
const dataAtt = localStorage.getItem('Attendants')
usersAttendants.value = JSON.parse(dataAtt)
function getAttendance(idName) {
  attName.value = idName
  modal.value = false
  if (!modal.value) {
    store.attendancesDay = []
    store.getDate(listen.value, idName)
  }
}
function confirmService() {
  showMessage.value = true
}

onMounted(()=>{

})
</script>

<template >
  <section class=" w-full bg-bgSite p-4">

    <div class="p-2 w-full h-[200px] border-2 shadow-md rounded-lg">
      <h1 class="text-gray-600 text-[0.9rem] font-bold flex gap-2 mb-3">
        <CalendarDaysIcon class="h-6 w-6 text-blue-500" /> Agendamentos
      </h1>
      <div class="w-full flex h-20 bg-gray-200 rounded-md">
        <div class="p-2 flex gap-12">
          <div class="relative p-2 flex justify-center items-center bg-slate-100 rounded-md   w-[195px]">
            <span class="absolute top-0 left-1 text-gray-600 text-[0.9rem] ">Data</span>
            <input type="date" class="bg-transparent" v-model="listen">

          </div>
       
          <div class="relative p-2 flex items-center bg-slate-100 rounded-md w-[195px]">
            <span class="absolute top-0 left-1 text-gray-600 text-[0.9rem] ">Atendente</span>
            <div class="m-auto 
                flex justify-center
                 relative w-full items-center 
                cursor-pointer" @click="!modal ? modal = true : modal = false">
              <h1 v-if="!attName">Selecione</h1>
              <h1 class="text-gray-500 font-bold" v-else>{{ attName }}</h1>
              <ChevronDownIcon class="w-4 h-4 absolute right-0" />
            </div>
            <div v-if="modal" class="absolute  top-16 left-0 rounded-md bg-slate-400 p-2 w-full">
              <div v-for="(item, index) in usersAttendants" :key="index.id">
                <li class="list-none hover:bg-slate-100 p-2 cursor-pointer rounded-md" @click="getAttendance(item.name)">
                  {{ item.name }}</li>
              </div>
            </div>
          </div>
          <button
            class="bg-green-300 text-lg font-semibold text-gray-600 p-2 rounded-md hover:bg-green-500 transition duration-300"
            v-if="attName" @click="confirmService">
            Confirmar
          </button>
        </div>

      </div>
      <div class="flex gap-12" v-if="showMessage">

        <h1>Prezado cliente, seu agendamento com o <b>{{ attName }}</b> foi registrado com sucesso. Lembre-se de chegar
          com 10 minutos de antecedencia</h1>
      </div>
    </div>
    <div>
      <table class=" w-full text-left table-fixed">
        <thead>
          <tr class="text-gray-600 text-semibold bg-slate-300">
            <th>data</th>
            <th>Horario</th>
            <th>Atendente</th>
            <th>Status</th>

          </tr>
        </thead>
        <tbody >
          <tr class="border-2 text-gray-700 font-bold"
          v-for="item in store.attendancesDay" :key="item.name"
          >
    
            <td>{{ item.date }}</td>
            <td v-if="item.hours === 12 || item.hours === 13? item.status = 'Horario de almoço': item.status ">{{ item.hours }}</td>
            <td>{{ item.name }} </td>
            <td>{{ item.status }}</td>
          </tr>



        </tbody>
      </table>
    </div>

  </section>
</template>
