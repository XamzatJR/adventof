<script setup>
import NorthPoleDistance from './components/NorthPoleDistance.vue'
</script>

<template>
  <div class="container flex flex-col items-center mt-24 px-4">
    <h2>Example 1</h2>
    <NorthPoleDistance v-slot="{ unit, distance, toggleUnit }">
      <div class="text-lg">You're currently: {{ distance }} {{ unit }}s away from the North Pole</div>
      <button class="text-white mt-4 bg-amber-400 rounded-lg py-2 px-4" @click="toggleUnit">Toggle unit</button>
    </NorthPoleDistance>

    <h2 class="mt-16">Example 2</h2>
    <NorthPoleDistance v-slot="{ unit, distance, toggleUnit }">
      <div class="flex bg-slate-50 gap-3 flex-col items-center border-emerald-400 rounded-lg border-2 px-14 py-8">
        <div class="">Current distance from the North Pole</div>
        <div class="">{{ distance }} {{ unit }}s</div>
        <button
          class="text-white px-4 py-2 rounded-lg flex justify-center items-center bg-emerald-500 text-base"
          @click="toggleUnit"
        >
          Switch to {{ unit === 'km' ? 'miles' : 'km' }}
        </button>
      </div>
    </NorthPoleDistance>
  </div>
</template>
