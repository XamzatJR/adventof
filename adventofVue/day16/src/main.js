import { createApp } from 'vue'
import App from './App.vue'
import './base.css'

const app = createApp(App)

app.directive('christmas', (el, { arg, value }) => {
  el.classList.add('christmas-text')
  switch (arg) {
    case 'red':
      el.classList.add('red')
      break
    case 'green':
      el.classList.add('green')
      break
    default:
      el.classList.add('red-green')
      if (value) el.style.animationDuration = value + 's'
      break
  }
})

app.mount('#app')
