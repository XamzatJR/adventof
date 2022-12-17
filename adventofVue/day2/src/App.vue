<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <div v-if="setup && delivery" class="max-w-xs w-full flex flex-col">
      <div class="w-3/4 p-4 rounded-2xl bg-teal-800 text-white self-start">
        {{ setup }}
      </div>
      <div v-if="isActive" class="w-3/4 mt-2 p-4 rounded-2xl bg-red-800 text-white self-end">{{ delivery }}</div>
      <button
        @click="revealDelivery"
        class="bg-emerald-400 col-span-1 rounded-lg py-2 hover:opacity-90 w-full mx-auto mt-4"
      >
        {{ isActive ? 'Another' : 'Tell Me!' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let setup = ref('')
let delivery = ref('')
let isActive = ref(false)
tellJoke()
function tellJoke() {
  fetch('https://v2.jokeapi.dev/joke/christmas')
    .then(data => data.json())
    .then(data => {
      setup.value = data.setup
      delivery.value = data.delivery
    })
}
function revealDelivery() {
  if (isActive.value) {
    setup.value = ''
    delivery.value = ''
    tellJoke()
    isActive.value = false
  } else {
    isActive.value = true
  }
}
</script>
