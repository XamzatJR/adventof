<script setup>
defineProps(['products', 'modelValue']);
const emits = defineEmits(['update:modelValue']);
function handleSelect(e) {
  const item = JSON.parse(e.target.value);
  emits('update:modelValue', item);
}
</script>

<template>
  <select @change="handleSelect" class="p-2 border-2 border-gray-dark">
    <option selected disabled value="">Select an item</option>
    <option v-for="product in products" :value="JSON.stringify(product)">
      {{ product.title }} - {{ product.price }}$
    </option>
  </select>
</template>
