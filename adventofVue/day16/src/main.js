import { createApp } from 'vue'
import App from './App.vue'
import './base.css'

const app = createApp(App)

app.directive('christmas', (el, { arg, value }) => {
  const duration = value ?? 2
  const color = arg ?? 'red-green'
  el.classList.add('christmas-text', color)
  el.style.animationDuration = duration + 's'
})

app.mount('#app')
