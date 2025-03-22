<template>
    <div class="relative overflow-hidden">
        <div class="flex animate-smooth-scroll gap-8">
            <!-- Original set -->
            <div
                v-for="(compliment, index) in compliments"
                :key="index"
                class="rounded-2xl h-60 w-72 p-4 flex justify-center items-center shadow-md bg-gradient-to-r from-gray-400 to-gray-500 text-white"
            >
                <span class="text-base">{{ compliment }}</span>
            </div>
            <!-- Duplicated set -->
            <div
                v-for="(compliment, index) in compliments"
                :key="`duplicate-${index}`"
                class="rounded-2xl h-60 w-72 p-4 flex justify-center items-center shadow-md bg-gradient-to-r from-gray-400 to-gray-500 text-white"
            >
                <span class="text-base">{{ compliment }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  compliments: {
    type: Array,
    required: true,
  },
});

const itemWidth = 240; // w-60 = 240px
const gap = 32; // gap-8 = 32px
const totalWidth = computed(() => (itemWidth + gap) * props.compliments.length);
const animationDuration = computed(() => `${totalWidth.value / 100}s`);
</script>

<style scoped>
@keyframes smooth-scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-smooth-scroll {
    animation: smooth-scroll linear infinite;
    animation-duration: v-bind(animationDuration);
    width: calc(v-bind(totalWidth) * 2);
}

/* Ensure flex items don't shrink and allow text wrapping */
.animate-smooth-scroll>div {
    flex-shrink: 0;
    /* Prevent items from shrinking */
    white-space: normal;
    /* Allow text to wrap naturally */
}

/* Optional: Limit text width and center it */
.animate-smooth-scroll>div>span {
    display: block;
    /* Ensure span behaves like a block for wrapping */
    max-width: 100%;
    /* Restrict text to container width */
    text-align: center;
    /* Center the wrapped text */
}
</style>