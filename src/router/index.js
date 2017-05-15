import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Sponser from '@/pages/Sponser';
import Academic from '@/pages/Academic';
import ArtprojectBien from '@/pages/ArtprojectBien';
import ArtprojectXing from '@/pages/ArtprojectXing';
import Qa from '@/pages/Qa';
import Manual from '@/pages/Manual';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sponser',
    name: 'Sponser',
    component: Sponser,
  },
  {
    path: '/academic',
    name: 'Academic',
    component: Academic,
  },
  {
    path: '/artproject_bien',
    name: 'artproject_bien',
    component: ArtprojectBien,
  },
  {
    path: '/artproject_Xing',
    name: 'artproject_Xing',
    component: ArtprojectXing,
  },
  {
    path: '/Q&A',
    name: 'Q&A',
    component: Qa,
  },
  {
    path: '/manual',
    name: 'manual',
    component: Manual,
  },
];


const router = new VueRouter({
  routes,
  // scrollBehavior() {
  //   return window.scrollTo(0, 0);
  // },
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
