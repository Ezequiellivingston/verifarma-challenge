<script setup>
const credentials = reactive({
  email: '',
  password: '',
  passwordRepeat: '',
})

const { isPending, mutate: handleSubmit } = useMutation({
  mutationFn: () => signUp(credentials),
  onSuccess: () => navigateTo('/auth/sign-in'),
})
</script>

<template>
  <div class="flex flex-col gap-4 w-full max-w-md p-6 bg-black bg-opacity-80 rounded-md">
    <UiText as="h2">Crear cuenta</UiText>

    <UiText as="p"> Crear una cuenta para disfrutar de tus series y películas favoritas </UiText>

    <div v-if="isError" class="bg-pink-400 text-pink-900 p-2 rounded-md text-sm font-semibold">
      Oops, parece que algo no está bien. Revisa tus credenciales e inténtalo de nuevo.
    </div>

    <form class="flex flex-col gap-4" @submit.prevent="handleSubmit()">
      <div class="flex flex-col">
        <label>Correo electrónico</label>
        <input
          type="email"
          class="w-full text-gray-600 px-3 py-2 border-gray-300 rounded-md"
          v-model="credentials.email"
        />
      </div>

      <div class="flex flex-col">
        <label>Contraseña</label>
        <input
          type="password"
          class="w-full text-gray-600 px-3 py-2 border-gray-300 rounded-md"
          v-model="credentials.password"
        />
      </div>

      <div class="flex flex-col">
        <label>Repite tu contraseña</label>
        <input
          type="password"
          class="w-full text-gray-600 px-3 py-2 border-gray-300 rounded-md"
          v-model="credentials.passwordRepeat"
          :pattern="credentials.password"
          title="Las contraseñas deben coincidir"
        />
      </div>

      <UiButton type="submit">
        <UiLoading v-if="isPending" />
        <span v-else>Regístrate</span>
      </UiButton>
    </form>

    <NuxtLink to="/login" class="text-center hover:text-gray-200"> ¿Ya tienes cuenta? </NuxtLink>
  </div>
</template>
