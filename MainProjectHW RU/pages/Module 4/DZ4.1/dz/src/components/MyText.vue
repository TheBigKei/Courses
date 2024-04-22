<template>
    <div>
      <p>{{ text1 }}</p>
      <p>{{ text2 }}</p>
      <button @click="changeText">Изменить текст</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text1: 'Hello',
        text2: 'World'
      };
    },
    methods: {
      changeText() {
        this.text1 = 'Goodbye';
      }
    }
  };
  </script>