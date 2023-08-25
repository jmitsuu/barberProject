import { defineStore } from "pinia";
import axios from "axios";
import { ref, reactive } from "vue";
import { data } from "autoprefixer";
export const useCalendar = defineStore("useCalendar", () => {
  const attStatus = ref("Disponivel");
  const attendancesDay = ref();
  const usersAttendants = ref();
  const dataBase = ref();
  const idUrl = ref();
  const idName = ref();
  const clientName = ref()
  const showMessage = ref(false);
  const disableButton = ref(true);
  const waitDocument = ref(false)
  async function menuBarbers() {
    const { data } = await axios.get("http://localhost:3000/usersAttendants");
    usersAttendants.value = data;
    waitDocument.value = true
  }

  function getCalendar(calendar) {
    const findItem = attendancesDay.value.findIndex(
      (item) => item.name == calendar.name
    );
    if (findItem >= 0) return;

    attendancesDay.value = calendar.calendar;
    idUrl.value = calendar.id;
    idName.value = calendar.name;
  }
  function confirmService(item, attName, date) {
    showMessage.value = true;
    const release = [date, " " + item.hour];
    const dateHour = release[0].concat(release[1]);
    const data1 = localStorage.getItem("userName");
    const data2 = JSON.parse(data1);
    clientName.value = data2.name;
    const findItem = attendancesDay.value.findIndex(
      (item) => item.name == idName.value
    );
    if (findItem >= 0) return;
    item = {
      hour: item.hour,
      Status: "Reservado",
    };
    console.log(dateHour);

    attendancesDay.value.filter((repeat) => {
      if (repeat.hour !== item.hour) {
        repeat.Status = "Disponivel";
      }
      if (repeat.hour === item.hour) {
        (repeat.hour = item.hour), (repeat.Status = item.Status);
      }
    });
    axios.put(`http://localhost:3000/usersAttendants/${idUrl.value}`, {
      id: idUrl.value,
      name: idName.value,
      calendar: attendancesDay.value,
    });
    axios.post(
      "http://localhost:3000/panelAttendances/",

      {
        data: [
          {
            att_name: attName,
            client_name: clientName.value,
            date: dateHour,
            price: "-",
            confirmation: "-",
          },
        ],
      }
    );
    menuBarbers();
  }

  function cancelService(item) {
    showMessage.value = false;
    item = {
      hour: item.hour,
      Status: "Disponivel",
    };
    // const data = await axios.get(`http://localhost:3000/usersAttendants/${idUrl.value}`)
    // console.log(data)
    attendancesDay.value.filter((repeat) => {
      if (repeat.hour === item.hour) {
        (repeat.hour = item.hour), (repeat.Status = item.Status);
      }
    });

    axios.put(`http://localhost:3000/usersAttendants/${idUrl.value}`, {
      id: idUrl.value,
      name: idName.value,
      calendar: attendancesDay.value,
    });
    menuBarbers();
  }

  return {
    getCalendar,
    menuBarbers,
    confirmService,
    cancelService,
    attStatus,
    attendancesDay,
    usersAttendants,
    dataBase,
    showMessage,
    disableButton,
    waitDocument
  };
});
