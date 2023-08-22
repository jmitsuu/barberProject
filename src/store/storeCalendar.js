import { defineStore } from "pinia";
import axios from "axios"
import { ref, reactive } from "vue";
export const useCalendar = defineStore("useCalendar", () => {
  const attStatus = ref("Disponivel");
  const attendancesDay = ref();
  const usersAttendants = ref()
  const dataBase = ref()

 async function menuBarbers(){
    const {data} = await axios.get("http://localhost:3000/usersAttendants")
    usersAttendants.value = data
    console.log(usersAttendants.value)
  }

  function getCalendar(calendar) {
    const findItem = attendancesDay.value.findIndex(
      (item) => item.name == calendar.name
    );
    if (findItem >= 0) return; 
    attendancesDay.value = calendar.calendar
  
  }
   function confirmService(item){
    const att = item
    axios.put("http://localhost:3000/usersAttendants" ,
    {
      calendar:[
        {
          Status:"Reservado"
        }
      ]
    }
    
   )
  }

  
  return { getCalendar, menuBarbers, confirmService, attStatus, attendancesDay,usersAttendants, dataBase, };
});
