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
  margin: 60px auto;
  max-width: 1000px;
}
@media screen and (min-width: 1600px){
  #app{
    max-width: 1500px;
  }
}
</style>
