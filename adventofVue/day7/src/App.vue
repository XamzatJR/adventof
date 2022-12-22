<script setup>
import ChristmasPresent from './components/ChristmasPresent.vue'
import ChristmasTree from './components/ChristmasTree.vue'
import { ref } from 'vue'

const presents = ref(['small-red-gift', 'blue-gift', 'tall-red-gift'])
const underTheTree = ref([])

const startDrag = (evt, index) => {
  evt.dataTransfer.setData('drag-item', index)
  evt.dataTransfer.effectAllowed = 'move'
}

const onDrop = evt => {
  const id = evt.dataTransfer.getData('drag-item')
  underTheTree.value.push(presents.value.splice(id, 1)[0])
}
</script>

<template>
  <div class="flex flex-col items-center mt-12 min-h-screen w-full">
    <h1 class="mt-3 text-xl font-bold">Drag the presents under the tree!</h1>
    <ChristmasTree @dragover.prevent @drop="onDrop" :presents="underTheTree" class="mt-16" />
    <div class="pt-16 mt-32 bg-gray-100 w-full justify-center flex-1">
      <div class="flex items-end justify-center" v-auto-animate>
        <ChristmasPresent
          @dragstart="startDrag($event, index)"
          draggable="true"
          v-for="(p, index) in presents"
          :key="p"
          :name="p"
        />
      </div>
    </div>
  </div>
</template>
