<template>
  <AppHero>
    <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-18">
      <div class="text-center">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
          <span class="block text-primary-600 xl:inline"> Setup Your Profile </span>
        </h1>

        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <form class="mt-3 sm:flex" @submit.prevent="updateProfile">
            <label for="username" class="sr-only">Username</label>

            <input
              id="username"
              name="username"
              placeholder="Enter a new username"
              type="text"
              v-model="username"
              required
              minlength="3"
              class="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:flex-1 border-gray-300"
            />

            <button
              type="submit"
              class="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  </AppHero>
</template>

<script setup lang="ts">
import { setProfile } from '@/lib/profiles';
import router from '@/router';
import { useAuth } from '@/store/auth';
import { ref } from 'vue';
import AppHero from './AppHero.vue';

const username = ref('');

const auth = useAuth();

const updateProfile = async () => {
  if (!auth.user) return;

  const profile = {
    id: auth.user.id,
    username: username.value,
    rating_scale: 10,
  };

  const { error } = await setProfile(profile);
  if (error) {
    console.error('Unable to update profile', error);
    return;
  }

  auth.$patch({ profile });
  router.push('/reviews');
};
</script>
