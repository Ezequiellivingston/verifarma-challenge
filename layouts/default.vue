<script setup lang="ts"></script>

<template>
  <div class="bg-black text-gray-100">
    <header>
      <LayoutNavBar />
    </header>

    <main class="background_img w-full h-screen">
      <div class="background_shade flex items-center content-center">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>

<style scoped>
.background_img {
  background-image: url('/assets/images/bg-hero.jpg');
  background-size: cover;
  background-position: center;
}

.background_shade {
  width: inherit;
  height: inherit;
  background: black;
  background: radial-gradient(circle, rgba(2, 0, 40, 0.5) 0%, rgb(0, 0, 0) 100%);
}
</style>
