<template>
  <div class="w-full h-full flex flex-col items-center mt-28">
    <div class="text-4xl font-bold">Find Joseph's Gift</div>
    <label class="mt-12 flex justify-center">
      <span class="mr-7">Pick a number from 2 to 30:</span>
      <input min="2" max="30" v-model.number="boxes" type="range" />
    </label>
    <div class="mt-8 flex gap-8">
      <button
        class="bg-slate-700 hover:bg-slate-600 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center"
        @click="count = 0"
      >
        start
      </button>
      <button
        class="bg-slate-700 hover:bg-slate-600 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center"
        @click="count--"
      >
        prev
      </button>
      <button
        class="bg-slate-700 hover:bg-slate-600 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center"
        @click="count++"
      >
        next
      </button>
      <button
        class="bg-slate-700 hover:bg-slate-600 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center"
        @click="count = boxes - 1"
      >
        end
      </button>
    </div>
    <ul class="flex-wrap mt-16 flex gap-12 items-center">
      <div
        v-for="(num, idx) in boxes"
        :key="num"
        class="p-3 text-lg border-2 border-gray-800"
        :class="{ 'opacity-10': !res.arr.includes(idx) }"
      >
        {{ num }}
      </div>
    </ul>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const boxes = ref(7)
const count = ref(0)
const res = computed(() => {
  const arr = new Array(boxes.value).fill(null).map((_, idx) => idx)
  let state = {
    arr,
    currIdx: 0,
  }

  for (let i = 0; i < count.value; i++) {
    state = josephus(state)
  }

  return state
})
function josephus(state) {
  const next = state.currIdx + 1
  if (!state.arr[next]) {
    return {
      arr: state.arr.slice(1),
      currIdx: 0,
    }
  }
  const newState = state.arr.filter((el, idx) => {
    if (state.currIdx + 1 === idx) {
      return false
    }
    return true
  })
  return {
    arr: newState,
    currIdx: newState[next] ? next : 0,
  }
}
</script>
