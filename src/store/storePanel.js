import { defineStore } from "pinia";
import axios from "axios";
import { ref, reactive } from "vue";
export const usePanel = defineStore("usePanel", () => {
  async function getAttends(date, AttName, nameClient) {
    axios.put("https://barber-api-lovat.vercel.app/panelAttendances", {
      data: [
        {
          att_name: "Julian",
          client_name: "Pedro",
          date: "28-09-23",
          price: "-",
          confirmation: "-",
        },
      ],
    });
  }

  return { getAttends };
});
