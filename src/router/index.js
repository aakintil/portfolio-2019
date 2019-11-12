import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
//import * as ninja from '@/assets/js/worker';
import Home from '@/components/Home.vue';
//import Vue from 'vue'
import VueAnime from 'vue-animejs'

Vue.use(VueAnime)
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
    document.getElementsByClassName('zerodark-cloak-cover')[0].setAttribute('v-cloak', '');
    NProgress.start();
  }
  next();
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  document.getElementsByClassName('zerodark-cloak-cover')[0].removeAttribute('v-cloak');
  NProgress.done();
});


export default router;
