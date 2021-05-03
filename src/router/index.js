import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainAccountChoice from "../views/MainAccountChoice";
import AddMedia from "../views/AddMedia";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main-account-choice',
    name: 'MainAccountChoice',
    component: MainAccountChoice
  },
  {
    path: '/add-media',
    name: 'AddMedia',
    component: AddMedia
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
