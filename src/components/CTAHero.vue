<template>
  <AppHero>
    <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div class="text-center">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block xl:inline">Wanna review</span>
          {{ '' }}
          <span class="block text-primary-600 xl:inline"> something? </span>
        </h1>

        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Whether you want to review a food, a book or a place, we got you! Think of this like your personal notes to
          keep track of products that you've consumed. Simply press the button below to get started.
        </p>

        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <button
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
              @click="getStarted"
            >
              {{ auth.isGuest ? 'Get started' : 'View reviews' }}
            </button>
          </div>
        </div>
      </div>
    </main>
  </AppHero>
</template>

<script setup lang="ts">
import router from '@/router';
import { useAuth } from '@/store/auth';
import AppHero from './AppHero.vue';

const auth = useAuth();
const getStarted = () => {
  if (auth.isGuest) {
    auth.login();
    return;
  }

  router.push('/reviews');
};
</script>
