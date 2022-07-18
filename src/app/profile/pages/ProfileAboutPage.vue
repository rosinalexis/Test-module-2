<template>
  <div>
    <h1>About {{ user.name }}</h1>
    <p>{{ user.website }}</p>
    <div>
      <router-link :to="{ name: 'profile', params: { id: user.id } }"
        >Back to Profile</router-link
      >
    </div>
  </div>
</template>
<script>
import { GET_USER } from "../store";
export default {
  name: "ProfileAboutPage",
  computed: {
    user() {
      return this.$store.getters[GET_USER];
    },
  },
};
</script>
