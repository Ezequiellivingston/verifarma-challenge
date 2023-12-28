<script setup lang="ts">
import { GetFilms } from '@/services/films.service'

definePageMeta({ middleware: 'auth', layout: 'main' })

const route = useRoute()
const page = computed(() => (route.query.page as number) ?? 1)

const serachText = computed(() => (route.query.s as string) ?? 'movie')
const params = computed(() => ({ s: serachText.value, page: page.value }))

const {
  data: films,
  isLoading,
  error,
  suspense,
} = useQuery({
  queryKey: ['films', params],
  queryFn: () => GetFilms(params.value),
})

const toPage = async (page: number) => {
  await navigateTo({
    path: '/films',
    query: {
      s: params.value.s,
      page: page,
    },
  })
}

const total = computed(() => {
  return films.value?.totalResults ? films.value.totalResults : 0
})

await suspense()
</script>

<template>
  <div class="container flex flex-col gap-10">
    <header>
      <UiText as="h1"> Buscador de Películas </UiText>

      <UiText as="p"> Encuentra tus películas favoritas aquí </UiText>
    </header>

    <div class="flex justify-center">
      <FilmsSearch :value="serachText" @search="navigateTo(`/films?s=${$event}`)" />
    </div>

    <div
      v-if="error?.message === 'Too many results.'"
      class="bg-pink-400 text-pink-900 p-4 rounded-md text-sm font-semibold"
    >
      Lo sentimos, la búsqueda ha generado demasiados resultados. Pruebe nuevamente agregando más
      caracteres para obtener una selección más específica.
    </div>

    <FilmsGallery :films="films?.Search ?? []" />

    <div v-if="isLoading" class="flex justify-center py-6">
      <UiLoading class="text-6xl" />
    </div>
    <UiPagination v-if="total" :key="total" :page="page" :total="total" @change="toPage">
    </UiPagination>
  </div>
</template>
