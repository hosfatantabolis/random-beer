<template>
  <div class="user">
    <h2 class="user__title">Профиль пользователя</h2>
    <!-- <div id="user">{{ userInfo }}</div> -->
    <h3 class="user__name">
      {{ userInfo.first_name + " " + userInfo.last_name }}
    </h3>
    <img class="user__pic" :src="userInfo.avatar" />
  </div>
</template>

<script>
import Api from "@/utils/api";
export default {
  el: "#user",
  data() {
    return {
      userInfo: "Загрузка...",
    };
  },
  beforeCreate() {
    const user = localStorage.getItem(user);
    if (user) {
      this.userInfo = user;
    } else {
      Api.getUserInfo().then((response) => {
        this.userInfo = response;
        localStorage.setItem("user", JSON.stringify(response));
      });
    }
  },
  //   mounted() {},

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
</style>
