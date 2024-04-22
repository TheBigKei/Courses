<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.text }}</li>
  </ul>
</template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { text: 'Элемент 1', background: 'white' },
          { text: 'Элемент 2', background: 'white' },
          { text: 'Элемент 3', background: 'white' }
        ]
      };
    },
    methods: {
      changeBackgroundColor(index) {
        this.items[index].background = 'lightblue';
      },
      resetBackgroundColor(index) {
        this.items[index].background = 'white'; 
      }
    }
  };
  </script>
  
  <style>
  ul {
    list-style-type: none;
  }
  li {
    padding: 10px;
    cursor: pointer;
  }
  </style>
  