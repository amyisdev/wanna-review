<script setup lang="ts">
import { RouterView } from 'vue-router';
import { supabase } from './lib/supabase';
import router from './router';
import { useAuth } from './store/auth';

const auth = useAuth();

const user = supabase.auth.user();
auth.$state.user = user;

supabase.auth.onAuthStateChange((_, session) => {
  auth.$state.user = session?.user || null;

  if (!user && session?.user) {
    router.push('/reviews');
  }
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <RouterView />
  </div>
</template>
