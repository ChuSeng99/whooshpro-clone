<template>
  <div
    class="relative overflow-hidden rounded-t-lg"
    @mouseover="startAnimation"
    @mouseleave="stopAnimation"
  >
    <img
      :src="images[currentImageIndex]"
      class="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
      :style="{ opacity: isAnimating || currentImageIndex === 0 ? 1 : 0 }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
})

const currentImageIndex = ref(0)
const isAnimating = ref(false)
let animationInterval = null

const startAnimation = () => {
  isAnimating.value = true
  animationInterval = setInterval(nextImage, 800)
}

const stopAnimation = () => {
  isAnimating.value = false
  clearInterval(animationInterval)
  currentImageIndex.value = 0
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length
}

onUnmounted(() => {
  clearInterval(animationInterval)
})
</script>
