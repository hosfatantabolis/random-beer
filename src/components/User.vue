<template>
  <div class="user">
    <h1 class="user__title">Профиль пользователя</h1>
    <div class="user__header">
      <img class="user__pic" :src="userInfo.avatar" />
      <div class="user_column">
        <h3 class="user__name">
          {{ userInfo.first_name + " " + userInfo.last_name }}
        </h3>
        <Button @click="showFullInfo" :text="infoShown ? text='Скрыть полную информацию': text='Посмотреть полную информацию'"> </Button>
      </div>    
    </div>
    
    <div v-bind:class="['user__full', infoShown ? 'user_shown' : 'user_hidden']">
      <ul class="user__list">
        <li v-for="(value, name) in userInfo" :key="value.id">
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
  justify-content: space-between;
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

.user_hidden{
  display: none;
}
.user__full{
  text-align: left;
}

.user__list{
  list-style-type: "\1F916";
}

.user__info{
  font-weight: bold;
}
</style>
