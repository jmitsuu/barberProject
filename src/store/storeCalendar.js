import { defineStore } from "pinia";
import axios from "axios"
import { ref, reactive } from "vue";
export const useCalendar = defineStore("useCalendar", () => {
  const attStatus = ref("Disponivel");
  const attendancesDay = ref();
  const usersAttendants = ref()
  const dataBase = ref();
  const idUrl = ref()
  const idName = ref()
  const showMessage = ref(false);
 async function menuBarbers(){
    const {data} = await axios.get("http://localhost:3000/usersAttendants")
    usersAttendants.value = data
 
  }

  function getCalendar(calendar) {
    const findItem = attendancesDay.value.findIndex(
      (item) => item.name == calendar.name
    );
    if (findItem >= 0) return; 
    
    attendancesDay.value = calendar.calendar
    idUrl.value = calendar.id;
    idName.value = calendar.name
 
  }
 function confirmService(item){
    showMessage.value = true

     
  item = {
    hour:item.hour,
    Status:"Reservado"
  }

  attendancesDay.value.filter(repeat =>{
   
    if(repeat.hour === item.hour)
    {
        repeat.hour = item.hour,
        repeat.Status = item.Status
    }
  })
  
    axios.put(`http://localhost:3000/usersAttendants/${idUrl.value}`, {
        id:idUrl.value,
        name: idName.value,
        calendar:attendancesDay.value
        }
        
       )
   menuBarbers()
  }

  function cancelService(item){
    showMessage.value = false
  item = {
    hour:item.hour,
    Status:"Disponivel"
  }
    // const data = await axios.get(`http://localhost:3000/usersAttendants/${idUrl.value}`)
    // console.log(data)
  attendancesDay.value.filter(repeat =>{
    if(repeat.hour === item.hour)
    {
        repeat.hour = item.hour,
        repeat.Status = item.Status
    }
  })
  
    axios.put(`http://localhost:3000/usersAttendants/${idUrl.value}`, {
        id:idUrl.value,
        name: idName.value,
        calendar:attendancesDay.value
        }
        
       )
   menuBarbers()
  }

  
  return { getCalendar, menuBarbers, confirmService, cancelService, attStatus, attendancesDay,usersAttendants, dataBase, showMessage };
});
