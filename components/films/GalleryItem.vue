<script setup lang="ts">
import type { PropType } from 'vue'
import type { Film } from '@/models/films'

const props = defineProps({
  film: {
    type: Object as PropType<Film>,
    required: true,
  },
})

const loading = useLoading()

function handleNavigateToDetail() {
  console.log('navigateTo', navigateTo)
  loading.start()
  navigateTo(`/films/${props.film.imdbID}`)
}
</script>

<template>
  <div
    class="relative w-full h-[580px] sm:max-w-[360px] cursor-pointer hover:scale-105 transition-transform duration-300 bg-black"
  >
    <img
      class="w-full h-[500px] object-cover"
      :src="film.Poster"
      :alt="film.Title"
      @click="handleNavigateToDetail()"
    />

    <UiText as="h4">
      {{ film.Title }}
    </UiText>

    <span
      class="absolute top-2 left-2 bg-gray-200 rounded-full py-1 px-4 text-sm font-semibold text-gray-700"
    >
      {{ film.Type }}
    </span>
  </div>
</template>
