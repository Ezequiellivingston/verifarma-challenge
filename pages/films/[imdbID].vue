<script setup lang="ts">
import { GetFilmById } from '@/services/films.service'

definePageMeta({ middleware: 'auth', layout: 'main' })

const route = useRoute()
const imdbID = route.params.imdbID.toString() ?? ''
const loading = useLoading()

const {
  data: film,
  isLoading,
  suspense,
} = useQuery({
  queryKey: ['films-detail', imdbID],
  queryFn: () => GetFilmById(imdbID),
})

await suspense()

onMounted(() => {
  loading.end()
})
</script>

<template>
  <div class="container p-10">
    <UiButton class="mb-4" @click="$router.back()"> Volver </UiButton>
    <div v-if="isLoading" class="flex justify-center py-10">
      <UiLoading />
    </div>
    <FilmsCardDetail v-else-if="film" :film="film" />
  </div>
</template>
