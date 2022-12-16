<script setup>
import CountdownHeader from '@/components/CountdownHeader.vue'
import CountdownSegment from './components/CountdownSegment.vue'
import { useNow } from '@vueuse/core'
import { computed } from 'vue'

const now = useNow()
const christmas = new Date('12/25/2022 00:00:00')
const time = computed(() => dhms(christmas.getTime() - now.value.getTime()))
function dhms(ms) {
  let remain = ms
  const d = 1000 * 60 * 60 * 24,
    h = 1000 * 60 * 60,
    m = 1000 * 60,
    s = 1000
  const days = Math.floor(remain / d)
  remain = remain % d
  const hours = Math.floor(remain / h)
  remain = remain % h
  const minutes = Math.floor(remain / m)
  remain = remain % m
  const seconds = Math.floor(remain / s)
  return {
    days,
    hours,
    minutes,
    seconds,
  }
}
</script>
<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div>
      <div class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]">
        <CountdownHeader />
        <main class="flex justify-center">
          <CountdownSegment label="days" :number="+time.days" />
          <CountdownSegment label="hours" :number="+time.hours" />
          <CountdownSegment label="minutes" :number="+time.minutes" />
          <CountdownSegment label="seconds" :number="+time.seconds" />
        </main>
      </div>
      <h4 class="mt-10 text-gray-400 text-center text-sm">
        This challenge brought to you by <a href="https://vueschool.io/" class="underline">Vue School</a>
      </h4>
    </div>
  </div>
</template>

<style>
div {
  display: block;
}

body {
  @apply bg-gray-100;
}
</style>
