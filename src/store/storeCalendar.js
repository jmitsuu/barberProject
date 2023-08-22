import { defineStore } from "pinia";
import { ref, reactive } from "vue";
export const useCalendar = defineStore("useCalendar", () => {
  const attStatus = ref("Disponivel");
  const attendancesDay = ref([]);
  const dataConfirmed = ref();
  const dates = ref();
  const name = ref();
  const hour = ref();
  const dataBase = ref()

  function getDate(dateDay, attName) {
    const findItem = attendancesDay.value.findIndex(
      (item) => item.name == attName
    );
    if (findItem >= 0) return;
      
          console.log(name.value)
        
  
    for (let a = 8; a < 19; a++) {
      dates.value = dateDay.replaceAll("-", "/");

      attendancesDay.value.push({
        date: dates.value,
        hours: a,
        name: attName,
        status: attStatus.value,
      });
   localStorage.setItem("setAtts", JSON.stringify(attendancesDay.value));
   const data = localStorage.getItem("setAtts");
  dataBase.value = JSON.parse(data)
   
    }
  }
  function confirmDate(date) {
    // date.status = 'Agendado'
  const data = localStorage.getItem('setAtts');
  const change = JSON.parse(data)
  change.filter(item=>{
    if(item.hours === date.hours){
      item.status = 'Agendado'
    }
  })
  localStorage.setItem("setAtts", JSON.stringify(change))
  console.log(date.status)

  }
  return { getDate, attStatus, confirmDate, attendancesDay, dataBase };
});
