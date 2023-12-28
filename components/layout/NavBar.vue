<script setup>
const { signOut, status } = useAuth()
</script>

<template>
  <nav class="bg-gray-800 text-white w-full h-20">
    <div class="container flex justify-between items-center h-full w-full">
      <a href="/" class="flex items-center">
        <UiLogo />
      </a>

      <ul class="flex gap-4">
        <li v-if="status === 'unauthenticated'">
          <UiLink to="/auth/sign-in"> Iniciar sesion </UiLink>
        </li>

        <li v-if="status === 'unauthenticated'">
          <UiLink to="/auth/sign-up"> Crear Cuenta </UiLink>
        </li>

        <li v-if="status === 'authenticated'">
          <UiButton @click="signOut()"> Cerrar sesion </UiButton>
        </li>
      </ul>
    </div>
  </nav>
</template>
