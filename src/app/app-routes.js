import { ProfileRoutes } from "@/app/profile/routes";
import { createRouter, createWebHistory } from "vue-router";

const routes = [...ProfileRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
