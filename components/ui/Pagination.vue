<script setup>
import { useOffsetPagination } from '@vueuse/core'

const props = defineProps({
  page: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
  },
})

const emit = defineEmits(['change'])

const changePage = (page) => {
  emit('change', page.currentPage)
}

const { currentPage, currentPageSize, pageCount, isFirstPage, isLastPage, prev, next } =
  useOffsetPagination({
    total: props.total,
    page: props.page,
    onPageChange: changePage,
    pageSize: 10,
  })

const maxPage = computed(() => {
  const resultArray = []
  let max = currentPage.value + 5 > pageCount.value ? pageCount.value : currentPage.value + 5
  let min = currentPage.value > 5 ? currentPage.value - 5 : currentPage.value
  for (let i = min; i <= max; i++) {
    resultArray.push(i)
  }
  if (!resultArray.includes(pageCount.value)) {
    resultArray.push(pageCount.value)
  }
  if (!resultArray.includes(1)) {
    resultArray.unshift(1)
  }

  return resultArray
})
</script>

<template>
  <div class="my-4 text-black flex justify-center">
    <button
      class="px-3 py-1 bg-blue-500 text-white focus:outline-none bg-gradient-to-b from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800"
      :disabled="isFirstPage"
      @click="prev"
    >
      prev
    </button>
    <button
      v-for="item in maxPage"
      :key="item"
      :class="{
        'px-3 py-1 bg-blue-500 text-black bg-gray-100 focus:outline-none ': currentPage == item,
        'px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:outline-none bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800':
          currentPage != item,
      }"
      :disabled="currentPage === item"
      @click="currentPage = item"
    >
      {{ item }}
    </button>
    <button
      class="px-3 py-1 bg-blue-500 text-white focus:outline-none bg-gradient-to-b from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800"
      :disabled="isLastPage"
      @click="next"
    >
      next
    </button>
  </div>
</template>

<style scoped></style>
