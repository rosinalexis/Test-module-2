<template>
  <div>
    <h2>Ajouter un utilisateur</h2>
    <br />
    <form>
      <BaseInput
        v-model:modelValue="user.name"
        label="Name"
        type="text"
      ></BaseInput>

      <BaseInput
        v-model="user.username"
        label="Username"
        type="text"
      ></BaseInput>

      <BaseInput v-model="user.email" label="Email" type="email"></BaseInput>

      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>
<script>
import BaseInput from "@/components/BaseInput.vue";
export default {
  name: "ProfileAddPage",
  components: { BaseInput },
  data() {
    return {
      user: {
        name: "",
        username: "",
        email: "",
      },
    };
  },
};
</script>
