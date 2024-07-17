import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Gallery from "../views/Gallery.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/about",
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
