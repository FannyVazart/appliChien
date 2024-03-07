<template>
  <div class="summary">
    <Summary :eliaAm="true"
             :eliaPm="false"
             :nouteAm="true"
             :noutePm="true"
             :soniAm="false"
             :soniPm="true"
             :date="new Date()"
    ></Summary>
  </div>
</template>

<style>
</style>

<script setup>
import Summary from '@/components/Summary.vue'
// import Tableau from '@/components/Tableau.vue'
import { useCounterStore } from '@/stores/counter.js'

const counterStore = useCounterStore();

</script>