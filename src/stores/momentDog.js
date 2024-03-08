import { ref } from 'vue'
import { defineStore} from 'pinia'

export const useDataStore = defineStore('data', () => {
   const eliaAm= ref(false)
   const eliaPm = ref(false)
   const nouteAm = ref(false)
   const noutePm = ref(false)
   const soniAm = ref(false)
   const soniPm = ref(false)
   // const date = ref(new Date())

    // function reinitializeTable() {
    //   eliaAm=0
    //   eliaPm=0
    //   nouteAm
    //   noutePm
    //   soniAm
    //   soniPm
    //
    // }

  // if (date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0) {
  return { eliaAm, eliaPm, nouteAm, noutePm, soniAm, soniPm }
  // }
},
  {
persist: true
  }
)