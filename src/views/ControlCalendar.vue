<script setup>
import Menu from '../components/Menu.vue'

const tableHead = [
    {
        title: "Horario"
    },
    {
        title: "Cliente"
    },
    {
        title: "Valor"
    },
    {
        title: "Realizado"
    }
]
</script>

<template>
    <section class=" w-full  flex justify-center h-screen overflow-y-scroll bg-bgSite ">

        <Menu />
        <div class="w-full">

            <div class="text-[3.2rem] text-gray-400">Painel de Agendamentos</div>


            <div class=" p-4">
                <div
                    class="w-full bg-slate-400 h-40 p-2 relative items-center justify-center rounded-md bg-opacity-30 flex">
                    <div class="p-2 w-64 h-24 rounded-lg bg-violet-600  shadow-xl shadow-violet-300  ">
                        <h1 class="text-gray-100 font-bold">Agendamentos no Mês</h1>
                        <p class="text-center p-3 text-white font-extrabold text-2xl">10</p>
                    </div>
                    <div class="p-2 w-64 h-24 rounded-lg bg-violet-600 ml-6 shadow-xl shadow-violet-300  ">
                        <h1 class="text-gray-100 font-bold">Agendamentos no dia</h1>
                        <p class="text-center p-3 text-white font-extrabold text-2xl">5</p>
                    </div>
                    <div class="p-2 w-64 h-24 rounded-lg bg-green-600 bg-opacity-50 mt-5 ml-6 shadow-xl shadow-green-300 ">
                        <h1 class="text-gray-900 font-bold">Total Arrecadado</h1>
                        <p class="text-center p-3 text-white font-extrabold text-2xl ">10 R$</p>
                    </div>

                </div>
                <table class="w-full text-left bg-slate-50  mt-2 rounded-sm">
                    <thead class="">
                        <tr class="text-gray-600  text-semibold bg-slate-300">
                            <th class="p-2" v-for="item in tableHead" :key="item.title">{{ item.title }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-2 text-gray-700 font-bold">
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>

                            </td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </section>
</template>
