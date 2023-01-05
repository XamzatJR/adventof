<template>
  <div>
    <ChristmasTree v-if="size > 1" :size="size - 1">
      <!-- <template #ornaments>
        <slot name="ornaments" />
      </template> -->
      <template #odd>
        <slot name="odd" />
      </template>
      <template #even>
        <slot name="even" />
      </template>
      <template #lights>
        <slot name="lights" />
      </template>
    </ChristmasTree>

    <div class="flex flex-row justify-center">
      <div v-for="i in size" class="relative rounded-full bg-green w-16 h-16 -m-2 flex justify-center items-center">
        <!-- <slot v-if="i % 2 === 1" name="ornaments" /> -->
        <slot v-if="i % 2 === 1" name="odd" />
        <slot v-if="i % 2 === 0" name="even" />
        <slot name="lights" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size: number
  }>(),
  {
    size: 1,
  }
)
</script>
