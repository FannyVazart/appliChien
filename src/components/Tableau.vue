
<script setup>
import { useCounterStore } from '@/stores/counter.js'
import { createApp, ref } from 'vue'

const counterStore = useCounterStore();

createApp({
  setup() {
    return {
      eliaAm: ref(false),
      eliaPm: ref(false),
      nouteAm: ref(false),
      noutePm: ref(false),
      soniAm: ref(false),
      soniPm: ref(false)
    };
  }
}).mount("#genTable")

 // function reinitializeTable(date) {
 //   if (date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0) {
 //     return "le tableau est viiide!"
 //   }
 // }


//return les "value" + la date du tableau à minuit (tous les jours dans un second temps)

</script>

<template>
  <table id="genTable">
    <tr>
      <th></th>
      <th> Elia </th>
      <th> Noute </th>
      <th> Soni</th>
    </tr>
    <tr>
      <th> Matin </th>
      <td> <input type="checkbox" class="check" v-model="eliaAm"> </td>
      <td> <input type="checkbox" class="check" v-model="nouteAm"> </td>
      <td> <input type="checkbox" class="check" v-model="soniAm"> </td>
    </tr>
    <tr>
      <th> Soir </th>
      <td> <input type="checkbox" class="check" v-model="eliaPm"> </td>
      <td> <input type="checkbox" class="check" v-model="noutePm"> </td>
      <td> <input type="checkbox" class="check" v-model="noutePm"> </td>
    </tr>
  </table>
</template>

<style scoped>
  td {
    text-align: center;
    border: 1px solid;
  }

  th {
    text-align: center;
    border: 1px solid;
    width: 4.5em;
  }

  input.check{
    width: 60px;
    height: 60px;
  }

  #genTable {
    font-size: 60px;
    border: 1px solid;
  }
</style>