<template>
  <div>
    <router-view :key="moduleKey" v-if="moduleIsReady"></router-view>
    <div v-else>Loading profile...</div>
  </div>
</template>

<script>
import { FETCH_USER_BY_ID, GET_USER } from "./store";

export default {
  name: "ProfileModule",
  created() {
    this.bootstrap();
  },
  computed: {
    user() {
      return this.$store.getters[GET_USER];
    },

    moduleIsReady() {
      return this.user;
    },
    moduleKey() {
      return this.user ? this.user.id : 0;
    },
  },
  methods: {
    async bootstrap() {
      const id = +this.$route.params.id;
      await this.$store.dispatch(FETCH_USER_BY_ID, { id });
    },
  },
};
</script>

<style lang="scss"></style>
