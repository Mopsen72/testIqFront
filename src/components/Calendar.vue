<template>
  <div class="container calendar">
    <div class="calendar__control">
      <div class="calendar__checkMonth calendar__checkMonth_marginRight">
        <button class="calendar__checkMonthBtn iconBtn">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.88418 11.4793L13.7597 17.5374C14.1695 17.8173 14.5825 17.9655 14.9258 17.9655C15.5895 17.9655 16 17.4345 16 16.5456L16 3.45237C16 2.5645 15.59 2.03448 14.9279 2.03448C14.5841 2.03448 14.1777 2.18278 13.7669 2.46352L4.88729 8.52143C4.31624 8.91166 4 9.43678 4 10.0007C3.99987 10.5643 4.31249 11.0892 4.88418 11.4793Z"
              fill="#6B6B6B"
            />
          </svg>
        </button>
        <p class="calendar__checkMonthText">{{ month[0].title }}</p>
        <button class="calendar__checkMonthBtn iconBtn">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1158 8.52067L6.24034 2.46262C5.83045 2.18266 5.41746 2.03448 5.07419 2.03448C4.41053 2.03448 4 2.56553 4 3.45444V16.5476C4 17.4355 4.41002 17.9655 5.07212 17.9655C5.41591 17.9655 5.82231 17.8172 6.2331 17.5365L15.1127 11.4786C15.6838 11.0883 16 10.5632 16 9.99929C16.0001 9.43575 15.6875 8.91076 15.1158 8.52067Z"
              fill="#6B6B6B"
            />
          </svg>
        </button>
      </div>
      <button class="extraBtn">Сегодня</button>
    </div>
    <table class="calendar__table">
      <tr
        class="calendar__row"
        v-bind:key="weak.id"
        v-for="weak of month[0].weaks"
      >
        <td class="calendar__cell" v-bind:key="day.id" v-for="day of weak.weak">
          <div
            v-if="day.dayEvent.title === '' && day.dayEvent.people === ''"
            class="calendar__cellEmpty"
          >
            <p v-if="weak.id === 'weak1'" class="calendar__cellDay">
              <span v-if="day.day.getDay() === 1">Понедельник, </span>
              <span v-else-if="day.day.getDay() === 2">Вторник, </span>
              <span v-else-if="day.day.getDay() === 3">Среда, </span>
              <span v-else-if="day.day.getDay() === 4">Четверг, </span>
              <span v-else-if="day.day.getDay() === 5">Пятница, </span>
              <span v-else-if="day.day.getDay() === 6">Суббота, </span>
              <span v-else-if="day.day.getDay() === 0">Воскресенье, </span>
              {{ day.day.getDate() }}
            </p>
            <p v-else class="calendar__cellDay">{{ day.day.getDate() }}</p>
          </div>
          <div v-else class="calendar__cellEvent">
            <p v-if="weak.id === 'weak1'" class="calendar__cellDay">
              <span v-if="day.day.getDay() === 1">Понедельник, </span>
              <span v-else-if="day.day.getDay() === 2">Вторник, </span>
              <span v-else-if="day.day.getDay() === 3">Среда, </span>
              <span v-else-if="day.day.getDay() === 4">Четверг, </span>
              <span v-else-if="day.day.getDay() === 5">Пятница, </span>
              <span v-else-if="day.day.getDay() === 6">Суббота, </span>
              <span v-else-if="day.day.getDay() === 0">Воскресенье, </span>
              {{ day.day.getDate() }}
            </p>
            <p v-else class="calendar__cellDay">{{ day.day.getDate() }}</p>
            <p class="calendar__cellEventName">{{ day.dayEvent.title }}</p>
            <p class="calendar__cellEventPeople">{{ day.dayEvent.people }}</p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  computed: {
    month() {
      return this.$store.getters.getMonth;
    },
  },
};
</script>

<style lang="scss">
.calendar {
  padding: 0 12px;
  box-sizing: border-box;
  &__control {
    display: flex;
    align-items: center;
    margin: 12px 0;
  }
  &__checkMonth {
    display: flex;
    align-items: center;
    &_marginRight {
      margin-right: 10px;
    }
  }
  &__checkMonthText {
    margin: 0 24px;
    font-family: Roboto regular;
    font-size: 18px;
    line-height: 21px;
    color: #292929;
  }
  &__table {
    width: 1000px;
    border-spacing: 0;
    border-collapse: collapse;
    border-color: #292929;
  }
  &__cell {
    z-index: 0;
    width: 143px;
    height: 120px;
    background: #fff;
    border: 1px solid #292929;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  &__cellEmpty {
    z-index: 1;
    width: 100%;
    height: 100%;
    transition-duration: 0.5s;
    &:hover {
      z-index: 2;
      background: #f4f4f4;
    }
    &:active {
      z-index: 2;
      box-shadow: 0px 0px 10px 2px #0271c7;
    }
  }
  &__cellEvent {
    z-index: 1;
    width: 100%;
    height: 100%;
    transition-duration: 0.5s;
    background: #c2e4fe;
    &:hover {
      z-index: 2;
      background: #27a1ff;
    }
    &:active {
      z-index: 2;
      box-shadow: 0px 0px 10px 2px #0271c7;
    }
  }
  &__cellDay {
    font-family: Roboto regular;
    font-size: 14px;
    line-height: 16px;
    color: #6b6b6b;
    padding: 8px;
  }
  &__cellEventName {
    font-family: Roboto regular;
    font-size: 14px;
    line-height: 16px;
    color: #292929;
    padding: 0 8px 8px;
  }
  &__cellEventPeople {
    font-family: Roboto regular;
    font-size: 14px;
    line-height: 16px;
    color: #6b6b6b;
    padding: 0 8px 8px;
  }
}
</style>