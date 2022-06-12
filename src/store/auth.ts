import { getProfile, type Profile } from '@/lib/profiles';
import { supabase } from '@/lib/supabase';
import router from '@/router';
import type { User } from '@supabase/gotrue-js';
import { defineStore } from 'pinia';

interface State {
  loaded: boolean;
  user: User | null;
  profile: Profile | null;
}

export const useAuth = defineStore('auth', {
  state: (): State => {
    return {
      loaded: false,
      user: null,
      profile: null,
    };
  },

  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },

    isGuest(state) {
      return !state.user;
    },

    hasProfile(state) {
      return !!state.profile;
    },
  },

  actions: {
    async login() {
      const redirectTo = `${import.meta.env.VITE_BASE_URL}/reviews`;
      const { error } = await supabase.auth.signIn({ provider: 'github' }, { redirectTo });
      if (error) {
        console.error('Unable to login', error);
      }
    },

    async logout() {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Unable to logout', error);
      }

      router.push('/');
    },

    async loadProfile() {
      if (this.user) {
        const { data, error, status } = await getProfile(this.user.id);

        // "406" means 0 rows returned
        if (error && status !== 406) {
          console.error(`Error ${status}`, error);
        }

        if (data) {
          this.profile = data;
        }
      }

      this.loaded = true;
    },
  },
});
