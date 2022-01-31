<template>
  <User />
  <Beer />
</template>

<script>
import Beer from "@/components/Beer";
import User from "@/components/User";

export default {
  name: "App",
  components: { Beer, User },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
