<template>
  <ul>
    <li 
      v-for="(item, index) in items" 
      :key="item.id"
      @mouseover="changeBackgroundColor(index)"
      @mouseleave="resetBackgroundColor(index)"
      :style="{ backgroundColor: item.background }"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, text: 'Элемент 1', background: 'white' },
        { id: 2, text: 'Элемент 2', background: 'white' },
        { id: 3, text: 'Элемент 3', background: 'white' }
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
  width:  80px;
}
</style>