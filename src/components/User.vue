<template>
  <div class="user">
    <h2 class="user__title">Профиль пользователя</h2>
    <!-- <div id="user">{{ userInfo }}</div> -->
    <div class="user__header">
      <h3 class="user__name">
        {{ userInfo.first_name + " " + userInfo.last_name }}
      </h3>
    <img class="user__pic" :src="userInfo.avatar" />
    </div>
    <div v-bind:class="['user__f1', infoShown ? 'user_shown' : 'user_hidden']">
      <ul>
        <li v-for="(value, name) in userInfo" :key="value.id">
         {{ name }}: {{value}}
         {{typeof(value)==="object"? "OBJ":"NOTOBJ"}}
        </li>
      </ul>
    </div>
    <button class="user__button" @click="showFullInfo">{{infoShown? "Скрыть":"Посмотреть"}}  полную информацию</button>
    
  </div>
</template>

<script>
import Api from "@/utils/api";
export default {
  el: "#user",
  data() {
    return {
      userInfo: "Загрузка...",
      infoShown: false,
    };
  },
  beforeMount() {
    if (localStorage.user) {
      this.userInfo = JSON.parse(localStorage.user);
    } else {
      Api.getUserInfo().then((response) => {
        this.userInfo = response;
        localStorage.setItem("user", JSON.stringify(response));
      });
    }
  },
  methods:{
    showFullInfo(){
      this.infoShown = !this.infoShown;
    }
  },

  components: { Api },
};
</script>

<style>
.user__pic {
  border-radius: 50%;
  border: 1px solid black;
  max-width: 120px;
  max-height: 120px;
  height: 120px;
  width: 100%;
  object-fit: cover;
}
.user__button{
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
.user__button:hover{
  color:#ffffff;
  background-color:#b81111;
}
.user_hidden{
  display: none;
}
</style>
