import ProfileListPage from "./pages/ProfileListPage.vue";
import ProfileAboutPage from "./pages/ProfileAboutPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import ProfileModule from "./ProfileModule.vue";
import ProfileAddPage from "./pages/ProfileAddPage.vue";

export const ProfileRoutes = [
  {
    path: "/",
    name: "profile.list",
    component: ProfileListPage,
  },
  {
    path: "/users/add",
    name: "profile.add",
    component: ProfileAddPage,
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
