<template>
  <button @click="handleClick" :style="buttonStyle" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
    <slot>Next</slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  data() {
    return {
      buttonStyle: {
        backgroundColor: 'blue',
        color: 'white'
      }
    };
  },
  methods: {
    handleClick() {
      // Переход на страницу PageTwo.html
      window.location.href = '/PageTwo.html';
    },
    handleMouseOver() {
      this.buttonStyle.backgroundColor = 'lightblue';
    },
    handleMouseLeave() {
      this.buttonStyle.backgroundColor = 'blue';
    }
  }
};
</script>

<style scoped>
button {
  color: red;
  width: 60px;
  height: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>