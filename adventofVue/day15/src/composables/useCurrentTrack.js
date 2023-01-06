import { usePlaylist } from '@/composables/usePlaylist'
import { useMediaControls } from '@vueuse/core'
import { nextTick, computed, ref } from 'vue'

const el = ref(document.createElement('AUDIO'))

const { current: currentTrack, state } = usePlaylist()
const { playing, currentTime, duration, volume } = useMediaControls(el, {
  src: currentTrack,
})

export function useCurrentTrack() {
  function play(song = null) {
    if (song) state.value = song
    playing.value = false
    nextTick(() => {
      playing.value = true
    })
  }

  function prettifyTime(time) {
    let seconds = time

    const minutes = Math.floor(seconds / 60)
    seconds = Math.floor(seconds - minutes * 60)
    return `${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}`
  }

  const progress = computed(() => {
    return (currentTime.value / duration.value) * 100
  })

  function pause() {
    playing.value = false
  }

  function ff() {
    currentTime.value += 10
  }

  function rewind() {
    currentTime.value -= 10
  }

  const durationPretty = computed(() => {
    return prettifyTime(duration.value)
  })
  const currentTimePretty = computed(() => {
    return prettifyTime(currentTime.value)
  })

  const timeDisplay = computed(() => {
    return `${currentTimePretty.value} - ${durationPretty.value}`
  })

  return {
    pause,
    play,
    ff,
    rewind,
    timeDisplay,
    progress,
    currentTrack,
    playing,
    currentTime,
    duration,
    volume,
  }
}
