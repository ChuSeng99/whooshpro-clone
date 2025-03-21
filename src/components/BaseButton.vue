<template>
  <a
    :href="href"
    :target="target"
    class="cursor-pointer border-2 border-amber-700 py-3 px-6 rounded-3xl text-sm font-bold text-amber-700 hover:text-white hover:bg-amber-700"
  >
    <slot />
  </a>
</template>

<script setup>
defineProps({
  href: { type: String, required: true },
  target: { type: String, default: '_self' },
})
</script>
