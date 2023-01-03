<template>
  <main class="flex flex-col justify-center h-full mx-auto max-w-600px">
    <section class="flex flex-col items-center leading-loose text-center">
      <div class="text-3xl">
        <span class="i-twemoji-christmas-tree"></span>
        {{ t('happyHolidays') }}
        <span class="i-twemoji-world-map"></span>
      </div>
      <div class="text-2xl mt-4">
        {{ d(christmasDate, 'long') }} is in
        <span class="green">{{ t('day', christmasIn) }}</span>
      </div>
      <div class="w-50 mt-5 flex justify-between">
        <select v-model="locale">
          <option value="en">en</option>
          <option value="de">de</option>
          <option value="ja-JP">ja-JP</option>
        </select>
        <div class="text-xl">
          <span :class="flags[locale]" />
          {{ t('language') }}
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale, d } = useI18n()
const christmasDate = new Date('2023/12/25')
const now = new Date()
let christmasIn = christmasDate.getTime() - now.getTime()
christmasIn = Math.floor(christmasIn / (1000 * 60 * 60 * 24))
const flags = {
  en: 'i-twemoji-flag-united-states',
  de: 'i-twemoji-flag-germany',
  'ja-JP': 'i-twemoji-flag-japan',
}
</script>

<style scoped>
.icon-button {
  @apply text-xl
    w-32px
    h-32px
    rounded-full
    border-1
    border-transparent
    bg-transparent
    cursor-pointer
    duration-300
    hover:ring-2
    hover:border-green-500
    hover:ring-green-500
    hover:ring-opacity-40
    hover:text-green-600;
}
</style>
