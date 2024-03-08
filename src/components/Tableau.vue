
<script setup>
import { useDataStore } from '@/stores/momentDog.js'

const momentDogStore = useDataStore();

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
      <td> <input type="checkbox" class="check" v-model="momentDogStore.eliaAm"> </td>
      <td> <input type="checkbox" class="check" v-model="momentDogStore.nouteAm"> </td>
      <td> <input type="checkbox" class="check" v-model="momentDogStore.soniAm"> </td>
    </tr>
    <tr>
      <th> Soir </th>
      <td> <input type="checkbox" class="check" v-model="momentDogStore.eliaPm"> </td>
      <td> <input type="checkbox" class="check" v-model="momentDogStore.noutePm"> </td>
      <td> <input type="checkbox" class="check" v-model="momentDogStore.soniPm"> </td>
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