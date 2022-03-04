import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home";
import SelectPage from "@/pages/SelectPage";
import InputPage from "@/pages/InputPage";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/select",
    component: SelectPage,
  },
  {
    path: "/input",
    component: InputPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
});

export default router;
