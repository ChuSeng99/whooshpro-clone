<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import Service from '@/components/Service.vue'
</script>

<template>
  <div class="py-6 flex justify-center">
    <section class="relative min-h-[80vh] overflow-hidden rounded-lg shadow-lg w-full mx-auto">
      <video
        muted
        autoplay
        class="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="../assets/videos/intro.mp4"
          type="video/mp4"
        />
      </video>
      <div
        class="absolute bottom-0 left-0 w-full bg-amber-700 bg-opacity-50 p-8 text-2xl text-white flex items-center justify-center rounded-b-lg"
      >
        <a
          class="text-center transition duration-300 hover:text-amber-300 hover:scale-105 hover:drop-shadow-md"
          href="#"
        >A digital design agency, building user experiences, interfaces, and web solutions.</a>
      </div>
    </section>
  </div>
  <section class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
    <Service
      icon="design_services"
      service="DESIGN"
      description="Creating online presence for strong brand. Making user experience great. We are the
            digital design agency to help connect the creative dots."
      link="#"
    />
    <Service
      icon="build"
      service="BUILD"
      description="Websites, SEO, SEM, online marketing, mobile apps, portals and perhaps customizing a
                    solution just for you. Ready to embark on a digital journey."
      link="#"
    />
    <Service
      icon="architecture"
      service="CMS"
      description="Best in class Content Management System. Secure, robust, reliable, speedy, and easy
                    self-service. Complete with top notch support."
      link="#"
    />
    <Service
      icon="shopping_cart"
      service="ECOMMERCE"
      description="Selling products online - estores, esales, eshop, online retail, web store, or blog shop.
                    Setting up online stores has never been that easy and fun."
      link="#"
    />
  </section>
  <section class="mt-16 flex flex-col items-center gap-2">
    <i class="material-icons md-45 text-red-500">favorite</i>
    <p class="text-lg font-bold text-gray-600">WHAT WE HAVE BEEN UP TO</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 my-4">
      <img
        src="../assets/images/home/work1.png"
        alt=""
        class="rounded-2xl"
      />
      <img
        src="../assets/images/home/work2.png"
        alt=""
        class="rounded-lg"
      />
      <img
        src="../assets/images/home/work3.png"
        alt=""
        class="rounded-lg"
      />
    </div>
    <p class="text-lg text-gray-600 italic">See what we have done.</p>
    <BaseButton
      href="#"
      class="mt-2"
    >WhooshPro Works</BaseButton>
  </section>
  <section class="mt-16 flex flex-col items-center gap-2 px-10">
    <i class="material-icons md-45 text-amber-500">star</i>
    <p class="text-lg font-bold text-gray-600">PROVEN WITH YEARS OF EXPERIENCE</p>
    <p class="text-lg text-center text-gray-600">
      We have helped countless clients deliver robust solutions that works. Singapore or Global,
      from startups, SMEs, to MNCs, we have partnered with clients from various industry sectors
      to government agencies, to fulfil their goals.
    </p>
    <p class="text-lg text-gray-600 italic mt-4">Hear what our clients say.</p>
    <BaseButton
      href="#"
      class="mt-2"
    >WhooshPro Clients Tell</BaseButton>
  </section>
</template>
