<template>
  <h1>SITE DE GESTION DES UTILISATEURS</h1>
  <router-link :to="{ name: 'profile.list' }">
    Lister les utilisateurs |
  </router-link>
  <router-link :to="{ name: 'profile.add' }">
    Ajouter un utilisateur |
  </router-link>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
