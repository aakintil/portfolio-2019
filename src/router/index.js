import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
//import * as ninja from '@/assets/js/worker';
import Home from '@/components/Home.vue';
//import Register from '@/components/Register.vue';


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: 'ZeroDark',
        guest: true,
      },
    },
    {
      path: '*',
      redirect: 'home',
    },
  ],
});


router.beforeResolve((to, from, next) => {
  if (to.name) {
    // hide the notifcation bar before re-routing
    //ninja.hideNotification();
    NProgress.start();
  }
  next();
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  NProgress.done();
});


export default router;
