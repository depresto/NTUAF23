import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Change from '@/pages/Change';
import Sponser from '@/pages/Sponser';
import Academic from '@/pages/Academic';
import ArtprojectBien from '@/pages/ArtprojectBien';
import ArtprojectXing from '@/pages/ArtprojectXing';

Vue.use(VueRouter);

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home,
//     },
//     {
//       path: '/change',
//       name: 'Change',
//       component: Change,
//     },
//     {
//       path: '/sponser',
//       name: 'Sponser',
//       component: Sponser,
//     },
//     {
//       path: '/academic',
//       name: 'Academic',
//       component: Academic,
//     },
//     {
//       path: '/artproject_bien',
//       name: 'artproject_bien',
//       component: ArtprojectBien,
//     },
//     {
//       path: '/artproject_Xing',
//       name: 'artproject_Xing',
//       component: ArtprojectXing,
//     },
//   ],
// });


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/change',
    name: 'Change',
    component: Change,
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
