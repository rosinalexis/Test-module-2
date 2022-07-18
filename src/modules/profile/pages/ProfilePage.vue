<template>
  <div>
    <h1>Hello {{ user.name }}</h1>
    <router-link :to="{ name: 'profile.about', params: { id: user.id } }"
      >About</router-link
    >
    <br />
    <router-link to="/">Back to home</router-link>
  </div>
</template>
<script>
import { GET_USER } from "../store";
export default {
  name: "ProfilePage",
  computed: {
    user() {
      return this.$store.getters[GET_USER];
    },
  },
};
</script>
