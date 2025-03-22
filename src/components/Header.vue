<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isNavVisible = ref(false);

const toggleNav = () => {
  isNavVisible.value = !isNavVisible.value;
};

// Close menu when clicking outside
const closeNav = (event) => {
  if (!event.target.closest(".primary-navigation") && !event.target.closest(".mobile-nav-toggle")) {
    isNavVisible.value = false;
  }
};

// Close menu when clicking a navigation link
const closeMenuOnClick = () => {
    isNavVisible.value = false;
}

onMounted(() => {
  document.addEventListener("click", closeNav);
});

onUnmounted(() => {
  document.removeEventListener("click", closeNav);
});
</script>

<template>
    <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div class="py-2 flex justify-between items-center">
            <div>
                <router-link to="/">
                    <img
                        src="../assets/images/logo.png"
                        alt="Company Logo"
                        class="max-h-16 min-w-16"
                    />
                </router-link>
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
                    class="flex flex-col gap-4 text-white md:flex-row md:gap-0 md:text-black"
                >
                    <li
                        class="p-2 lg:px-6 rounded-md cursor-pointer hover:bg-amber-600 md:hover:bg-white md:hover:underline md:hover:text-amber-600"
                        @click="closeMenuOnClick"
                    >
                        <router-link to="/works">Works</router-link>
                    </li>
                    <li
                        class="p-2 lg:px-6 rounded-md cursor-pointer hover:bg-amber-600 md:hover:bg-white md:hover:underline md:hover:text-amber-600"
                        @click="closeMenuOnClick"
                    >
                        <a href="#"><span>Design</span></a>
                    </li>
                    <li
                        class="p-2 lg:px-6 rounded-md cursor-pointer hover:bg-amber-600 md:hover:bg-white md:hover:underline md:hover:text-amber-600"
                        @click="closeMenuOnClick"
                    >
                        <a href="#"><span>Build</span></a>
                    </li>
                    <li
                        class="p-2 lg:px-6 rounded-md cursor-pointer hover:bg-amber-600 md:hover:bg-white md:hover:underline md:hover:text-amber-600"
                        @click="closeMenuOnClick"
                    >
                        <a href="#"><span>CMS</span></a>
                    </li>
                    <li
                        class="p-2 lg:px-6 rounded-md cursor-pointer hover:bg-amber-600 md:hover:bg-white md:hover:underline md:hover:text-amber-600"
                        @click="closeMenuOnClick"
                    >
                        <a href="#"><span>Ecommerce</span></a>
                    </li>
                    <li
                        class="p-2 lg:px-6 rounded-md cursor-pointer hover:bg-amber-600 md:hover:bg-white md:hover:underline md:hover:text-amber-600"
                        @click="closeMenuOnClick"
                    >
                        <a href="#"><span>Contact</span></a>
                    </li>
                </ul>
                <ul class="flex justify-center gap-4 md:gap-0">
                    <a
                        href="#"
                        class="cursor-pointer text-white-600 md:text-gray-600 flex justify-center items-center px-2 lg:px-6 hover:text-amber-600"
                    >
                        <i class="fa fa-facebook-f fa-lg"></i>
                    </a>
                    <a
                        href="#"
                        class="cursor-pointer text-white-600 md:text-gray-600 flex justify-center items-center px-2 lg:px-6 hover:text-amber-600"
                    >
                        <i class="fa fa-linkedin fa-lg"></i>
                    </a>
                </ul>
            </nav>
        </div>
    </header>
</template>