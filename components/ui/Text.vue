<script setup lang="ts">
import { type PropType, computed } from 'vue'

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p'

const props = defineProps({
  as: {
    type: String as PropType<TextType>,
    default: 'span',
  },
})

const baseClasses: Record<TextType, string> = {
  h1: 'text-6xl font-bold my-4',
  h2: 'text-5xl font-semibold py-3',
  h3: 'text-4xl font-semibold py-2',
  h4: 'text-3xl font-semibold py-2',
  span: 'text-md',
  p: 'text-md',
}

const classes = computed(() => [baseClasses[props.as]])
</script>

<template>
  <component :is="as" :class="classes">
    <slot />
  </component>
</template>

<style scoped></style>
