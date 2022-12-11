<script setup>
import { ref, watch } from 'vue'

const searchTerm = ref('')
const result = ref([])
const loading = ref(false)
let timerID = null
const findProducts = async term => {
  loading.value = true
  result.value.products = []
  clearTimeout(timerID)
  if (term === '') {
    loading.value = false
    return
  }
  timerID = setTimeout(async () => {
    try {
      result.value = await fetch(`https://dummyjson.com/products/search?q=${term.toLowerCase()}`)
        .then(res => res.json())
        .then(data => data)
      loading.value = false
    } catch {
      alert('Scoop didi woop')
    }
    loading.value = false
  }, 300)
}

watch(searchTerm, newTerm => findProducts(newTerm))
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input type="text" class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..." />
    <ul class="list-disc">
      <li v-for="product in result.products">{{ product.title }} - {{ product.price }}$</li>
    </ul>
    <div v-if="loading">Loading...</div>
    <div v-if="searchTerm && result.total == 0">Cannot find anything :(</div>
  </div>
</template>
