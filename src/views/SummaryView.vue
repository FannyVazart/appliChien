<template>
  <div class="summary">
    <Summary :eliaAm="momentDogStore.eliaAm"
             :eliaPm="momentDogStore.eliaPm"
             :nouteAm="momentDogStore.nouteAm"
             :noutePm="momentDogStore.noutePm"
             :soniAm="momentDogStore.soniAm"
             :soniPm="momentDogStore.soniPm"
             :date="new Date()"
    ></Summary>
  </div>
</template>

<style>
</style>

<script setup>
import Summary from '@/components/Summary.vue'
// import Tableau from '@/components/Tableau.vue'
import { useDataStore } from '@/stores/momentDog.js'

const momentDogStore = useDataStore();

</script>