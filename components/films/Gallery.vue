<script setup lang="ts">
import type { PropType } from 'vue'
import type { Film } from '~/models/films'

defineProps({
  films: {
    type: Array as PropType<Film[]>,
    requiered: true,
  },
})
</script>

<template>
  <div class="flex flex-wrap justify-center gap-10">
    <FilmsGalleryItem v-for="film in films" :key="film.imdbID" :film="film" />
  </div>
</template>

<style scoped></style>
