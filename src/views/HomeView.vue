<script setup>
import Tableau from '@/components/Tableau.vue'
import { useCounterStore } from '@/stores/counter.js'
</script>

<template>
<!--  <p>{{ counterStore.count }}</p>-->
<!--  <button @click="counterStore.increment()">Add</button>-->
    <div class="home">
      <Tableau></Tableau>
    </div>
</template>

<style>
</style>