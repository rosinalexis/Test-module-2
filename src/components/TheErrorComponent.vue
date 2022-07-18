<template>
  <div class="alerte" v-if="error">
    {{ error }}
  </div>
</template>
<script>
export default {
  name: "TheErrorComponent",
  props: ["error"],
};
</script>
<style>
.alerte {
  margin: 2px auto;
  padding: 15px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  background-color: red;
  opacity: 0.3;
  width: 50vw;
}
</style>
