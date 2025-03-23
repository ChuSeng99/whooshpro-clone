<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <div>
    <Header class="px-10" />
    <main class="pt-20 min-h-screen">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
