<template>
  <button @click="handleClick" :style="buttonStyle" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
    <slot></slot>
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
      this.$router.push('/Page2');
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
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>