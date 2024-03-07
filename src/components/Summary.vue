<script setup>
const data = defineProps({
  eliaAm: Boolean,
  eliaPm: Boolean,
  nouteAm: Boolean,
  noutePm: Boolean,
  soniAm: Boolean,
  soniPm: Boolean,
  date: Date
})

function tickCell(dogMoment) {
  if (dogMoment) {
    return "X";
  }
}

//faire une fonction pour ajouter à la liste sous forme de ligne de tableau

</script>

<template>
  <table class="sumTable">
    <tr>
      <th rowspan="2"> Date </th>
      <th colspan="2"> Elia </th>
      <th colspan="2"> Nounoute </th>
      <th colspan="2"> Soni </th>
    </tr>
    <tr>
      <td> AM </td>
      <td> PM </td>
      <td> AM </td>
      <td> PM </td>
      <td> AM </td>
      <td> PM </td>
    </tr>
    <tr>
      <td> {{ date.toLocaleDateString() }} </td>
      <td> {{ tickCell(eliaAm) }}  </td>
      <td> {{ tickCell(eliaPm) }}  </td>
      <td> {{ tickCell(nouteAm) }} </td>
      <td> {{ tickCell(noutePm) }} </td>
      <td> {{ tickCell(soniAm) }}  </td>
      <td> {{ tickCell(soniPm) }}  </td>
    </tr>
  </table>
</template>

<style scoped>
td {
  text-align: center;
  border-left: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px dashed;
  border-top: 1px dashed;
}

th {
  text-align: center;
  border-left: 1px solid;
  border-right: 1px solid;
  width: 6em;
}

input.check{
  width: 60px;
  height: 60px;
}

.sumTable {
  font-size: 60px;

}
</style>