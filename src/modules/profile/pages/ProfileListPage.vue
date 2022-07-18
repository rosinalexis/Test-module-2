<template>
  <div>
    <the-error-component :error="error"></the-error-component>
    <h1>Liste des utilisateurs</h1>
    <ul v-for="user in users" :key="user.id">
      <li>
        <router-link :to="{ name: 'profile', params: { id: user.id } }">{{
          user.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { FETCH_ALL_USER, GET_USER } from "../store";
import TheErrorComponent from "@/components/TheErrorComponent.vue";

export default {
  name: "ProfileListPage",
  components: { TheErrorComponent },
  data() {
    return {
      error: "",
    };
  },
  created() {
    this.getUsers();
  },
  computed: {
    users() {
      return this.$store.getters[GET_USER];
    },
  },
  methods: {
    async getUsers() {
      try {
        await this.$store.dispatch(FETCH_ALL_USER);
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>
