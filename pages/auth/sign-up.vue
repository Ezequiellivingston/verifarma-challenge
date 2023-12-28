<script lang="ts" setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/films',
  },
})
</script>

<template>
  <div class="container flex justify-center items-center">
    <AuthSignUpForm />
  </div>
</template>
