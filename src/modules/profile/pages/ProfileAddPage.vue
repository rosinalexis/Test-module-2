<template>
  <div>
    <h2>Ajouter un utilisateur</h2>
    <br />
    <form>
      <label for="name"> Name </label>
      <input type="text" name="name" />

      <label for="username"> Username </label>
      <input type="text" name="username" />

      <label for="email"> Email </label>
      <input type="email" name="email" />

      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "ProfileAddPage",
};
</script>
