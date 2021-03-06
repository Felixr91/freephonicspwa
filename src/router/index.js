import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Present from "../components/Present.vue"
import Category from "../components/Category.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }, 
  {
    path: '/present/:id', 
    name: 'present',
    component: Present, 
    props: true
  }, 
  {
    path: '/category-show/:id', 
    name: 'category', 
    component: Category,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
