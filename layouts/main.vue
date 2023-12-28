<template>
  <div class="main-layout bg-black text-gray-100">
    <header>
      <LayoutNavBar />
    </header>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.main-layout {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  height: 100%;
  width: 100%;
}
</style>
