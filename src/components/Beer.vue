<template>
  <div>
    <h2>Сегодня ты пьешь:</h2>
    
    <div class="beer" >
      <Button @click="getBeer" text="Случайное пивко"></Button>
      <ul class="beer__list" v-if="this.info !== null">
        <li class="beer__list-item">Бренд/Фирма: <span class="beer__info">{{ info.brand || "Загрузка..."}}</span></li>
        <li class="beer__list-item">Название: <span class="beer__info">{{ info.name || "Загрузка..."}}</span></li>
        <li class="beer__list-item">Стиль: <span class="beer__info">{{ info.style || "Загрузка..."}}</span></li>
        <li class="beer__list-item">Хмель: <span class="beer__info">{{ info.hop || "Загрузка..."}}</span></li>
        <li class="beer__list-item">Дрожжи: <span class="beer__info">{{ info.yeast || "Загрузка..."}}</span></li>
        <li class="beer__list-item">Солод: <span class="beer__info">{{ info.malts || "Загрузка..."}}</span></li>
        <li class="beer__list-item">Горечь: <span class="beer__info">{{ info.ibu || "Загрузка..."}}</span></li>
        <li class="beer__list-item">Содержание алкоголя: <span class="beer__info">{{ info.alcohol || "Загрузка..."}}</span></li>
        <li class="beer__list-item">Содержание сахара: <span class="beer__info">{{ info.blg || "Загрузка..."}}</span></li>
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
.beer__info {
  font-weight: bold;

}
.beer__list{
  /* list-style: none; */
  list-style-type: "\1F37A";
  text-align: left;
}
</style>
