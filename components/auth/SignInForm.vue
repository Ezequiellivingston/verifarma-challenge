<script setup>
const { signIn } = useAuth()
const { loading } = useAuthState()

const callbackUrl = '/films'
const isError = ref(false)

const credentials = reactive({
  email: '',
  password: '',
})

async function handleSubmit() {
  isError.value = false

  const { error, url } = await signIn('credentials', {
    ...credentials,
    redirect: false,
    callbackUrl,
  })

  console.log('ERROR', error)

  if (error) {
    isError.value = true
  } else {
    return navigateTo(url, { external: true })
  }
}
</script>

<template>
  <div class="flex flex-col gap-4 w-full max-w-md p-6 bg-black bg-opacity-80 rounded-md">
    <UiText as="h2">Iniciar sesión</UiText>

    <UiText as="p"> Inicia sesión para disfrutar de tus series y películas favoritas </UiText>

    <div v-if="isError" class="bg-pink-400 text-pink-900 p-2 rounded-md text-sm font-semibold">
      Oops, parece que algo no está bien. Revisa tus credenciales e inténtalo de nuevo.
    </div>

    <form class="flex flex-col gap-4" @submit.prevent="handleSubmit()">
      <div class="flex flex-col">
        <label for="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          class="w-full text-gray-600 px-3 py-2 border-gray-300 rounded-md"
          v-model="credentials.email"
        />
      </div>

      <div class="flex flex-col">
        <label for="password">Contraseña</label>
        <input
          id="password"
          type="password"
          class="w-full text-gray-600 px-3 py-2 border-gray-300 rounded-md"
          v-model="credentials.password"
        />
      </div>

      <UiButton type="submit">
        <UiLoading v-if="loading" />
        <span v-else>Iniciar sesión</span>
      </UiButton>
    </form>

    <NuxtLink href="#" class="text-center hover:text-gray-200">
      ¿Olvidaste tu contraseña?
    </NuxtLink>

    <UiText as="p" class="text-center text-gray-100">
      ¿No tienes una cuenta?
      <a href="/auth/sign-up" class="text-gray-100 hover:text-blue-500"> Regístrate </a>
    </UiText>
  </div>
</template>
