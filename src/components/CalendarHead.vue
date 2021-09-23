<template>
  <div class="CalendarHead">
    <div class="container CalendarHead__box">
      <div class="CalendarHead__buttonBox">
        <button class="CalendarHead__button mainButton">Добавить</button>
        <button class="CalendarHead__button mainButton">Обновить</button>
      </div>
      <input-text
        class="CalendarHead__searchBox"
        v-bind:model="search"
      ></input-text>
    </div>
  </div>
</template>

<script>
import InputText from "./InputText.vue";
export default {
  name: "CalendarHead",
  components: { InputText },
  computed: {
    search() {
      return this.$store.getters.getSearch;
    },
  },
};
</script>

<style lang="scss">
.CalendarHead {
  background-color: #f4f4f4;
  &__box {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 52px 12px 0;
    height: 100px;
  }
  &__buttonBox {
    display: flex;
    align-items: center;
    height: 26px;
    & :last-child {
      margin-right: 0;
    }
  }
  &__button {
    margin-right: 10px;
  }
  &__searchBox {
    display: flex;
    align-items: center;
    height: 28px;
  }
}
</style>