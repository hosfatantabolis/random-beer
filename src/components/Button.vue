<template>
  <button class="beer__button">{{text}}</button>
</template>

<script>
export default {
    el: "#beer__button",
    props: ['text']
}
</script>

<style>
.beer__button{
  cursor: pointer;
  display:inline-block;
  padding:0.7em 1.4em;
  margin:0 0.3em 0.3em 0;
  border-radius:0.15em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  text-transform:uppercase;
  font-weight:400;
  color:#FFFFFF;
  background-color:#3369ff;
  box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  text-align:center;
  transition: all 0.15s;
}
.beer__button:hover{
  color:#ffffff;
  background-color:#b81111;
}

@media screen and (min-width: 1500px){
  .beer__button{
    font-size: 1.5em;
  }
}
</style>