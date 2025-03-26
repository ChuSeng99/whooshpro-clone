<template>
  <div class="slider" :style="sliderStyle">
    <div class="list">
      <div
        v-for="(compliment, index) in compliments"
        :key="index"
        class="rounded-2xl p-4 flex justify-center items-center shadow-md bg-gradient-to-r from-sky-500 to-sky-600 text-white item"
        :style="{ '--position': index + 1 }"
      >
        <span class="text-base text-center">{{ compliment }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  compliments: {
    type: Array,
    required: true,
  },
  width: {
    type: String,
    default: '288px',
  },
  height: {
    type: String,
    default: '240px',
  },
})

const sliderStyle = {
  '--width': props.width,
  '--height': props.height,
  '--quantity': props.compliments.length,
}
</script>

<style scoped>
.slider {
  width: 100%;
  height: var(--height);
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 5% 95%, transparent);
}

.slider .list {
  display: flex;
  width: 100%;
  min-width: calc(var(--width) * var(--quantity));
  position: relative;
}

.slider .list .item {
  width: var(--width);
  height: var(--height);
  position: absolute;
  left: 100%;
  animation: autoRun 15s linear infinite;
  transition: filter 0.5s;
  animation-delay: calc((15s / var(--quantity)) * (var(--position) - 1) - 15s) !important;
}

.slider .list .item img {
  width: 100%;
}

@keyframes autoRun {
  from {
    left: 100%;
  }

  to {
    left: calc(var(--width) * -1);
  }
}

.slider:hover .item {
  animation-play-state: paused !important;
  filter: grayscale(1);
}
.slider .item:hover {
  filter: grayscale(0);
}

.slider[reverse='true'] .item {
  animation: reversePlay 15s linear infinite;
}

@keyframes reversePlay {
  from {
    left: calc(var(--width) * -1);
  }

  to {
    left: 100%;
  }
}
</style>
