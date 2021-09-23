<template>
  <label :for="model.id" class="mainTextInput">
    <svg
      class="mainTextInput__icon"
      v-if="model.logo"
      v-html="model.logo"
    ></svg>
    <input
      type="text"
      :id="model.id"
      class="mainTextInput__input"
      placeholder="Placeholder"
      v-model="model.value"
      v-on:focus="inputFocus"
      v-on:blur="inputBlur"
    />
    <img
      src="../assets/img/cross.svg"
      alt=""
      class="mainTextInput__cross"
      v-on:mousedown.prevent="clearValue"
    />
  </label>
</template>

<script>
export default {
  name: "InputText",
  props: ["model"],
  methods: {
    inputFocus(e) {
      e.target.nextSibling.classList.add("mainTextInput__cross_focus");
    },
    inputBlur(e) {
      e.target.nextSibling.classList.remove("mainTextInput__cross_focus");
    },
    clearValue() {
      this.$props.model.value = "";
    },
  },
};
</script>

<style lang="scss">
.mainTextInput {
  position: relative;
  &__icon {
    height: 20px;
    width: 20px;
    margin-right: 20px;
  }
  &__input {
    background: #ffffff;
    border: 1px solid #cfcfcf;
    padding: 6px 12px;
    box-shadow: inset 0px 0px 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    font-family: Roboto Light;
    font-size: 14px;
    line-height: 16px;
    color: #292929;
    outline: none;
    transition-duration: 0.5s;
    &::-webkit-input-placeholder {
      font-family: Roboto Light;
      font-size: 14px;
      line-height: 16px;
      color: #cfcfcf;
    }
    &:-moz-placeholder {
      font-family: Roboto Light;
      font-size: 14px;
      line-height: 16px;
      color: #cfcfcf;
    }
    &:focus {
      border: 1px solid #27a1ff;
    }
    &:invalid {
      border: 1px solid #e94e4e;
    }
    &:disabled {
      color: #cfcfcf;
      background: #f4f4f4;
      border: 1px solid #cfcfcf;
    }
  }
  &__cross {
    display: none;
    position: absolute;
    right: 6px;
    padding: 6px;
    &_focus {
      display: block;
    }
  }
}
</style>