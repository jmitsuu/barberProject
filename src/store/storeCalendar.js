import { defineStore } from 'pinia'
import {ref, reactive} from "vue"
export const useCalendar = defineStore('useCalendar', () => {
const attStatus = ref('Disponivel');
const attendancesDay =ref([])
const dates = ref()

    function getDate(dateDay , attName){
             const findItem = attendancesDay.value.findIndex((item) => item.name == attName);
            console.log(findItem)
            if (findItem >= 0) return;
        for (let a = 8; a < 19; a++){
            dates.value  = dateDay.replaceAll('-', '/')
       

            attendancesDay.value.push(
                {
                    date:dates.value,
                    hours:a,
                    name:attName,
                    status:attStatus.value
                }
            )
      
        }

    }
    function incrementDate( dateDay , attName){
       
    }
  return {  getDate, attStatus, incrementDate,attendancesDay }
})