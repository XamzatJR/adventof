<template>
  <div class="w-full h-full flex justify-center items-center">
    <div>
      <div class="w-full max-w-2xl p-4 rounded bg-red-400 text-white">
        <div class="border-2 rounded flex flex-col md:flex-row md:items-center md:gap-8 p-4">
          <img src="/assets/santa.svg" alt="" class="max-w-[12em]" />
          <div>
            <h1 class="font-serif text-4xl">Happy Holidays!</h1>
            <div class="mt-4 bg-white text-black p-2 rounded">TO: {{ to }}</div>
            <div class="mt-2 bg-white text-black p-2 rounded">FROM: {{ from }}</div>
          </div>
        </div>
      </div>
      <form class="mt-6">
        <fieldset>
          <label class="block" for="to">To:</label>
          <input
            class="block border border-gray-600 bg-slate-100 rounded-md p-2 mt-2 mb-2"
            id="to"
            type="text"
            v-model="to"
          />
        </fieldset>
        <fieldset>
          <label class="block" for="from">From:</label>
          <input
            class="block border border-gray-600 bg-slate-100 rounded-md p-2 mt-2 mb-2"
            id="from"
            type="text"
            v-model="from"
          />
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let to = ref('')
let from = ref('')
</script>
