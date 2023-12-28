<script setup lang="ts">
import type { PropType } from 'vue'
import type { FilmDetail } from '~/models/films'

defineProps({
  film: {
    type: Object as PropType<FilmDetail>,
    required: true,
  },
})
</script>

<template>
  <div class="card-detail">
    <img class="object-cover" :src="film.Poster" alt="Movie Poster" width="100%" />

    <div class="px-8">
      <UiText as="h2">
        {{ film.Title }}
      </UiText>

      <UiText as="p" class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        {{ film.Genre }}
      </UiText>

      <UiText as="p" class="mt-2 text-gray-500">{{ film.Plot }}</UiText>

      <div class="mt-4 text-gray-400">
        <p>
          <span class="font-semibold text-gray-100">Director:</span>
          {{ film.Director }}
        </p>
        <p>
          <span class="font-semibold text-gray-100">Actors:</span>
          {{ film.Actors }}
        </p>
        <p>
          <span class="font-semibold text-gray-100">Runtime:</span>
          {{ film.Runtime }}
        </p>
        <p>
          <span class="font-semibold text-gray-100">Language:</span>
          {{ film.Language }}
        </p>
        <p>
          <span class="font-semibold text-gray-100">Country:</span>
          {{ film.Country }}
        </p>
        <p>
          <span class="font-semibold text-gray-100">Released:</span>
          {{ film.Released }}
        </p>
      </div>

      <div class="mt-4 text-gray-400">
        <p>
          <span class="font-semibold text-gray-100">Rated:</span>
          {{ film.Rated }}
        </p>
        <p>
          <span class="font-semibold text-gray-100">Awards:</span>
          {{ film.Awards }}
        </p>
        <p>
          <span class="font-semibold text-gray-100">IMDb Rating:</span>
          {{ film.imdbRating }}
        </p>
        <p>
          <span class="font-semiboldtext-gray-100">IMDb Votes:</span>
          {{ film.imdbVotes }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 968px) {
  .card-detail {
    display: grid;
    grid-template-columns: max(500px) 1fr;
  }
}
</style>
