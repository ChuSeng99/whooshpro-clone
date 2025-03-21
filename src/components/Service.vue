<template>
  <div
    class="px-8 py-10 flex flex-col items-center gap-2 bg-white-100 rounded-2xl bg-amber-100 shadow-md shadow-gray-300 transition duration-300 hover:shadow-lg hover:scale-101"
  >
    <i class="material-icons md-60 text-gray-800">{{ icon }}</i>
    <h3 class="text-2xl font-bold text-gray-800">{{ service }}</h3>
    <p class="text-center text-gray-600">
      {{ description }}
    </p>
    <BaseButton :href="link" class="mt-6"> Read more </BaseButton>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue'

defineProps(['icon', 'service', 'description', 'link'])
</script>
