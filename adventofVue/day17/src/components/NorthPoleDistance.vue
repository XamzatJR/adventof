<script setup lang="ts">
import { getDistanceKm, getDistanceMiles } from '../utils/distance'
import { useGeolocation } from '@vueuse/core'
import { ref, computed } from 'vue'

// hint: coords.latitude + cords.latitude
const { coords } = useGeolocation()
console.log(coords.value, 'Value')
console.log(coords.value.latitude, 'Latitude')

const unit = ref<'km' | 'mile'>('mile')
const distance = computed(() => {
  if (unit.value === 'mile') {
    return getDistanceMiles(coords.value.latitude, coords.value.longitude)
  } else {
    return getDistanceKm(coords.value.latitude, coords.value.longitude)
  }
})
const toggleUnit = () => {
  unit.value === 'mile' ? (unit.value = 'km') : (unit.value = 'mile')
}
</script>

<template>
  <!-- this should only render a slot -->
  <slot :toggleUnit="toggleUnit" :distance="distance" :unit="unit" />
</template>
