<template>
  <div class="user">
    <h1 class="user__title">Профиль пользователя</h1>
    <div class="user__header">
      <img class="user__pic" :src="userInfo.avatar" />
      <div class="user_column">
        <h3 class="user__name">
          {{ userInfo.first_name  + " " + userInfo.last_name }}
        </h3>
        <Button @click="showFullInfo" :text="infoShown ? text='Скрыть полную информацию': text='Посмотреть полную информацию'"> </Button>
      </div>    
    </div>
    
    <div v-bind:class="['user__full', infoShown ? 'user_shown' : 'user_hidden']">
      <ul class="user__list">
        <li class="user__list-item" v-for="(value, name) in userInfo" :key="value.id">
         <span class="user__info">{{ name }}</span>: {{typeof(value)==="object"? "": (value)}}
         <ul v-if="name==='employment' || name==='address' || name==='credit_card' || name==='subscription' ">
           <li v-for="(val, names) in value" :key=val>
             <span class="user__info">{{ names }}</span>: {{typeof(val)==="object"? "": val}}
             <ul v-if="names==='coordinates'">
               <li v-for="(value, name) in val" :key=value>
                 <span class="user__info">{{ name }}</span>: {{value}}
               </li>
             </ul>
           </li>
         </ul>
        </li>
      </ul>
    </div>    
  </div>
</template>

<script>
import Api from "@/utils/api";
import Button from "@/components/Button";
import loader from "@/assets/loader.gif";
export default {
  el: "#user",
  data() {
    return {
      userInfo: {first_name: "Загрузка...", last_name: "Загрузка...", avatar: loader},
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
    },
  },

  components: { Api, Button },
};
</script>

<style>
.user{
  margin: auto;
  max-width: 80%;
}
.user__header{
  display: flex;
  justify-content: space-evenly;
}
.user__pic {
  border-radius: 50%;
  border: 1px solid black;
  max-width: 120px;
  max-height: 120px;
  height: 120px;
  width: 100%;
  object-fit: cover;
}

.user_column{
  align-content: center;
}

.user__full{
  display: flex;
  justify-content: center;
  text-align: left;
  -webkit-mask-image: linear-gradient(90deg,#000 80%,transparent);
}

.user_hidden{
  display: none;
}


.user__list{
  list-style-type: "\1F916";
}

.user__list-item{
  padding-left: 20px;
}

.user__info{
  font-weight: bold;
}
@media screen and (max-width: 400px){
  .user{
    max-width: 95%;
  }
  .user__list{
    font-size: 0.8em;
  }
}
@media screen and (max-width: 550px){
  .user_column{
    margin-left: 10%;
  }
}
@media screen and (min-width: 1500px){
  .user__title{
    font-size: 4em;
  }
  .user__pic {
    max-width: 240px;
    max-height: 240px;
    height: 240px;
  }
  .user__name{
    font-size: 2.5em;
  }
  .user__list{
    font-size: 2em;
  }
}
@media screen and (min-width: 2200px){
  .user__title{
    font-size: 6em;
  }
}

</style>
