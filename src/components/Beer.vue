<template>
  <div class="beer">
    <h2 class="beer__title">Сегодня ты пьешь:</h2>
    <Button @click="getBeer" text="Случайное пивко"></Button>
    <div class="beer__container" >
      <ul class="beer__list" v-if="this.info !== null">
        <li class="beer__list-item">Бренд/Фирма: <span class="beer__info">{{ info.brand || info}}</span></li>
        <li class="beer__list-item">Название: <span class="beer__info">{{ info.name || info}}</span></li>
        <li class="beer__list-item">Стиль: <span class="beer__info">{{ info.style || info}}</span></li>
        <li class="beer__list-item">Хмель: <span class="beer__info">{{ info.hop || info}}</span></li>
        <li class="beer__list-item">Дрожжи: <span class="beer__info">{{ info.yeast || info}}</span></li>
        <li class="beer__list-item">Солод: <span class="beer__info">{{ info.malts || info}}</span></li>
        <li class="beer__list-item">Горечь: <span class="beer__info">{{ info.ibu || info}}</span></li>
        <li class="beer__list-item">Содержание алкоголя: <span class="beer__info">{{ info.alcohol || info}}</span></li>
        <li class="beer__list-item">Содержание сахара: <span class="beer__info">{{ info.blg || info}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Api from "@/utils/api";
import Button from "@/components/Button";
export default {
  el: ".beer",
  data() {
    return {
      info: null,
    };
  },
  methods: {
    getBeer() {
      this.info = "Загрузка...";
      Api.getBeer()
        .then((response) => (this.info = response))
        .catch((err) => {
          this.info = "Произошла ошибка при загрузке данных. Попробуйте снова";
        });
    },
  },
  components: { Api, Button },
};
</script>

<style>
.beer__container{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.beer__info {
  font-weight: bold;

}
.beer__list{
  max-width: 500px;
  list-style-type: "\1F37A";
  text-align: left;
  margin: 30px auto;
}
.beer__list-item{
  padding-left: 20px;
}

@media screen and (min-width: 1500px){
  .beer__list{
    font-size: 2em;
    max-width: 1000px;
  }
  .beer__title{
    font-size: 2.5em;
  }
}
</style>
