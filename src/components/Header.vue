<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isNavVisible = ref(false)

const toggleNav = () => {
    isNavVisible.value = !isNavVisible.value
}

// Function to close menu when switching to desktop view
const handleResize = () => {
    if (window.innerWidth >= 769) {
        isNavVisible.value = false
    }
}

// Attach event listener when component is mounted
onMounted(() => {
    window.addEventListener('resize', handleResize)
})

// Clean up event listener when component is unmounted
onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<template>
    <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div class="py-2 flex justify-between items-center">
            <div>
                <img
                    src="../assets/images/logo.png"
                    alt="Company Logo"
                    class="max-h-16 min-w-16"
                />
            </div>

            <button
                class="mobile-nav-toggle md:hidden"
                :aria-expanded="isNavVisible"
                @click="toggleNav"
            >
                <span class="material-icons md-45 text-amber-600">
                    {{ isNavVisible ? 'close' : 'menu' }}
                </span>
            </button>

            <nav
                class="primary-navigation flex gap-4"
                :data-visible="isNavVisible"
            >
                <ul
                    role="list"
                    class="flex flex-col text-white md:flex-row md:text-black"
                >
                    <li class="py-2 px-4 rounded-md cursor-pointer hover:bg-amber-600 md:hover:bg-amber-100">
                        <a href="#"><span>Works</span></a>
                    </li>
                    <li class="py-2 px-4 rounded-md cursor-pointer hover:bg-amber-600 md:hover:bg-amber-100">
                        <a href="#"><span>Design</span></a>
                    </li>
                    <li class="py-2 px-4 rounded-md cursor-pointer hover:bg-amber-600 md:hover:bg-amber-100">
                        <a href="#"><span>Build</span></a>
                    </li>
                    <li class="py-2 px-4 rounded-md cursor-pointer hover:bg-amber-600 md:hover:bg-amber-100">
                        <a href="#"><span>CMS</span></a>
                    </li>
                    <li class="py-2 px-4 rounded-md cursor-pointer hover:bg-amber-600 md:hover:bg-amber-100">
                        <a href="#"><span>Ecommerce</span></a>
                    </li>
                    <li class="py-2 px-4 rounded-md cursor-pointer hover:bg-amber-600 md:hover:bg-amber-100">
                        <a href="#"><span>Contact</span></a>
                    </li>
                </ul>
                <ul class="flex">
                    <a
                        href="#"
                        class="cursor-pointer text-white-600 md:text-gray-600 flex justify-center items-center px-4 hover:text-amber-600"
                    >
                        <i class="fa fa-facebook-f fa-lg"></i>
                    </a>
                    <a
                        href="#"
                        class="cursor-pointer text-white-600 md:text-gray-600 flex justify-center items-center px-4 hover:text-amber-600"
                    >
                        <i class="fa fa-linkedin fa-lg"></i>
                    </a>
                </ul>
            </nav>
        </div>
    </header>
</template>