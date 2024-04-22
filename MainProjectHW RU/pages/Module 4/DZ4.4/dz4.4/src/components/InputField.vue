<template>
    <div>
      <input type="text" v-model="inputText" @input="checkInput">
      <p v-if="hasError" style="color: red;">Текст неверный!</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputText: '',
        hasError: false
      };
    },
    methods: {
      checkInput() {
        if (this.inputText !== 'True') {
          this.hasError = true;
        } else {
          this.hasError = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .custom-input {
    padding: 10px;
    font-size: 16px;
    border: 2px solid;
    border-radius: 5px;
    transition: border-color 0.3s ease;
  }
  </style>