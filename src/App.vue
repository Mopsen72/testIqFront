<template>
  <div id="app">
    <calendar-head></calendar-head>
    <calendar></calendar>
  </div>
</template>

<script>
import Calendar from "./components/Calendar.vue";
import CalendarHead from "./components/CalendarHead.vue";
export default {
  name: "App",
  components: {
    CalendarHead,
    Calendar,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.container {
  margin: 0 auto;
  max-width: 1024px;
}
@font-face {
  font-family: Roboto Regular;
  src: url("./assets/font/Roboto-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: Roboto Light;
  src: url("./assets/font/Roboto-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}
.mainButton {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  background: #0271c7;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 2px;
  font-family: Roboto Regular;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  transition-duration: 0.5s;
  &:hover {
    background: #27a1ff;
  }
  &:active {
    background: #c2e4fe;
  }
  &:disabled {
    background: #cfcfcf;
  }
}
.iconBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  height: 24px;
  background: #ffffff;
  box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;
  transition-duration: 0.5s;
  &:hover {
    background: #6b6b6b;
  }
  &:hover > svg path {
    fill: #ffffff;
  }
  &:active {
    background: #cfcfcf;
  }
  &:active > svg path {
    fill: #ffffff;
  }
  &:disabled {
    background: #ffffff;
  }
  &:disabled > svg path {
    fill: #cfcfcf;
  }
}
.extraBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  padding: 2px 6px;
  background: #ffffff;
  box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  font-family: Roboto regular;
  font-size: 12px;
  line-height: 14px;
  color: #292929;
  transition-duration: 0.5s;
  &:hover {
    background: #6b6b6b;
    color: #ffffff;
  }
  &:active {
    background: #cfcfcf;
    color: #ffffff;
  }
  &:disabled {
    background: #ffffff;
    color: #cfcfcf;
  }
}
</style>
