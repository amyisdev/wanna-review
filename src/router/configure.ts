import { useAuth } from '@/store/auth';
import type { Router } from 'vue-router';

export const configureRouter = (router: Router) => {
  router.beforeEach(async (to, _, next) => {
    const auth = useAuth();

    if (auth.isAuthenticated && !auth.loaded) {
      console.log('asd');
      await auth.loadProfile();
    }

    if (auth.isGuest && to.name !== 'home') {
      next('/');
    } else if (!auth.hasProfile && to.name !== 'profile' && to.name !== 'home') {
      next('/profile');
    } else {
      next();
    }
  });
};
