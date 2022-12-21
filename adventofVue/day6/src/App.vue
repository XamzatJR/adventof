<script setup>
import ItemSelect from './components/ItemSelect.vue';
import ComparisonSummary from './components/ComparisonSummary.vue';
import { useItemComparison } from './composables/itemComparison';
import { onMounted, ref } from 'vue';

const firstItem = ref();
const secondItem = ref();
const result = useItemComparison(firstItem, secondItem);
let products = ref([]);

onMounted(() => {
  fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => (products.value = data.products));
});
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect v-model="firstItem" :products="products" />
      <ItemSelect v-model="secondItem" :products="products" />
    </div>
    <ComparisonSummary v-if="result" :text="result" />
  </div>
</template>
