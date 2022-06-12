<template>
  <AppHero>
    <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-18">
      <div class="text-center">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
          <span class="block text-primary-600 xl:inline"> Your Reviews </span>
        </h1>

        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          You haven't reviewed anything. Let's start adding a new review by pressing the button below.
        </p>

        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <button
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
            >
              Add a review
            </button>
          </div>
        </div>
      </div>
    </main>
  </AppHero>
</template>

<script setup lang="ts">
import AppHero from './AppHero.vue';
</script>
