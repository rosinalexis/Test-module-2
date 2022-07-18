import ProfileListPageVue from "@/modules/profile/pages/ProfileListPage.vue";
import ProfileAboutPage from "./pages/ProfileAboutPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import ProfileModule from "./ProfileModule.vue";

export const ProfileRoutes = [
  {
    path: "/",
    name: "profile.list",
    component: ProfileListPageVue,
  },
  {
    path: "/users/:id",
    component: ProfileModule,
    children: [
      {
        path: "/users/:id/",
        name: "profile",
        component: ProfilePage,
      },
      {
        path: "about",
        name: "profile.about",
        component: ProfileAboutPage,
      },
    ],
  },
];
