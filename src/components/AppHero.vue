<script setup lang="ts">
import { useAuth } from '@/store/auth';
import { StarIcon } from '@heroicons/vue/solid';
import { RouterLink } from 'vue-router';
import HeroPatternBg from './HeroPatternBg.vue';

const auth = useAuth();

const authAction = () => {
  if (auth.isGuest) {
    auth.login();
    return;
  }

  auth.logout();
};
</script>

<template>
  <div class="relative bg-gray-50 overflow-hidden">
    <HeroPatternBg />

    <div class="relative pt-6 pb-16 sm:pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
          <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <RouterLink to="/">
                <span class="sr-only">Wanna Review?</span>
                <StarIcon class="h-10 w-auto text-primary-600" />
              </RouterLink>
            </div>
          </div>

          <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span class="inline-flex rounded-md shadow">
              <button
                class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50"
                @click="authAction"
              >
                {{ auth.isGuest ? 'Login' : 'Logout' }}
              </button>
            </span>
          </div>
        </nav>
      </div>

      <slot></slot>
    </div>
  </div>
</template>
