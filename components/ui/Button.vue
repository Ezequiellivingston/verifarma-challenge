<script setup lang="ts">
import { type PropType, computed } from 'vue'

type ButtonColor = 'primary'

const props = defineProps({
  variant: {
    type: String as PropType<ButtonColor>,
    default: 'primary',
  },
})

const variants = {
  primary:
    'bg-gradient-to-b from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800',
}

const classes = computed(() => [variants[props.variant]])
</script>

<template>
  <button :class="classes" class="shadow-xl font-bold py-2 px-4 rounded-md">
    <slot></slot>
  </button>
</template>
