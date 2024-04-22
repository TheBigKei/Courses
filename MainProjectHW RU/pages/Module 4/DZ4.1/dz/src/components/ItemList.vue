<template>
    <div>
      <h2>Список элементов</h2>
      <ul>
        <li v-for="(item, index) in items" :key="index" @click="showDetail(item)">
          {{ item.name }}
        </li>
      </ul>
      <div v-if="selectedItem">
        <h3>{{ selectedItem.name }}</h3>
        <p>{{ selectedItem.description }}</p>
      </div>
      <input type="text" v-model="newItemName" placeholder="Название">
      <input type="text" v-model="newItemDescription" placeholder="Описание">
      <button @click="addItem">Добавить элемент</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { name: 'Элемент 1', description: 'Описание элемента 1' },
          { name: 'Элемент 2', description: 'Описание элемента 2' },
          // Другие элементы списка...
        ],
        selectedItem: null,
        newItemName: '',
        newItemDescription: ''
      };
    },
    methods: {
      showDetail(item) {
        this.selectedItem = item;
      },
      addItem() {
        if (this.newItemName && this.newItemDescription) {
          this.items.push({ name: this.newItemName, description: this.newItemDescription });
          this.newItemName = '';
          this.newItemDescription = '';
        }
      }
    }
  };
  </script>