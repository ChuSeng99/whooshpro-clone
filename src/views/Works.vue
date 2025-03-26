<script setup>
import ImageBox from '@/components/ImageBox.vue'
import { imageSets } from '@/utils/imageSets.js'

const sortedYears = Object.keys(imageSets).sort((a, b) => b - a)
</script>

<template>
  <div class="px-10">
    <div class="py-12 px-6 flex flex-col gap-2 justify-center items-center">
      <p class="text-amber-600 font-semibold">Our Works</p>
      <h2 class="text-5xl text-center mt-4 text-gray-800">
        23 Years of<br />
        Creativity & Innovation
      </h2>
      <p class="text-gray-600 text-base text-center mt-2">
        Take a look at what we have done over the years! We drive creativity and innovation to
        transform digital experiences, delivering tailored solutions across a range of industries.
      </p>
    </div>
    <div>
      <div class="flex flex-col gap-8">
        <div v-for="year in sortedYears" :key="year">
          <p class="text-lg font-semibold mb-2">
            {{ year }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(set, setName) in imageSets[year]"
              :key="setName"
              class="shadow-md rounded-lg"
            >
              <ImageBox :images="set.images" />
              <p
                :class="`${set.backgroundColor || 'bg-amber-600'} text-gray-100 text-center py-2 rounded-b-lg`"
              >
                {{ set.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
