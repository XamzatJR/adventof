<template>
  <div class="w-full h-full p-4 flex justify-center items-center">
    <div class="max-w-md">
      <div>
        <img src="/assets/tree.svg" alt="Christmas tree" />
      </div>
      <div class="mt-2 flex justify-center items-center">
        <img
          v-for="present in sortedPresents"
          :key="present.id"
          :src="present.src"
          :alt="`Present ${present.id}`"
          data-qa="present"
        />
      </div>
      <button
        class="bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center mx-auto mt-8"
        @click="sort"
      >
        Toggle sort
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import presents from './presents.json'
const sortFunctions = [
  (a, b) => a.id - b.id,
  (a, b) => a.dimensions.height + a.dimensions.width > b.dimensions.height + b.dimensions.width,
  (a, b) => a.dimensions.height + a.dimensions.width < b.dimensions.height + b.dimensions.width,
]

let sortedFn = ref(0)
let idx = 0
function sort() {
  const length = sortFunctions.length
  idx++
  if (idx === length) idx = 0
  sortedFn.value = idx
}
const sortedPresents = computed(() => {
  return [...presents].sort(sortFunctions[sortedFn.value])
})
</script>
