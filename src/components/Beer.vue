<template>
  <div>
    <h1>Сегодня ты пьешь:</h1>
    <button @click="getBeer">Случайное пивко</button>
    <div id="beer">
      {{ info }}
      <ul>
        <li>Бренд/Фирма: {{ info.brand }}</li>
        <li>Название: {{ info.name }}</li>
        <li>Стиль: {{ info.style }}</li>
        <li>Хмель: {{ info.hop }}</li>
        <li>Дрожжи: {{ info.yeast }}</li>
        <li>Солод: {{ info.malts }}</li>
        <li>Горечь: {{ info.ibu }}</li>
        <li>Содержание алкоголя: {{ info.alcohol }}</li>
        <li>Содержание сахара: {{ info.blg }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Api from "@/utils/api";
export default {
  el: "#beer",
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
  beforeMount() {},
  components: { Api },
};
</script>
