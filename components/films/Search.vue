<script setup lang="ts">
const props = defineProps(['value'])
const emit = defineEmits(['search'])

const text = ref(props.value)

function handleSubmit() {
  emit('search', text.value)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input
      v-model="text"
      type="text"
      placeholder="Buscar películas"
      class="max-w-96 text-gray-600 border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
    />
    <button
      type="submit"
      class="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
    >
      Buscar
    </button>
  </form>
</template>

<style scoped></style>
