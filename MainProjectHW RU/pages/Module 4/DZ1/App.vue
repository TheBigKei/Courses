<template>
    <div>
      <h1>List of Elements</h1>
      <ul>
        <li v-for="(item, index) in items" :key="index" @click="showDetails(item)">
          {{ item.name }}
        </li>
      </ul>
      <div v-if="selectedItem">
        <h2>{{ selectedItem.name }}</h2>
        <p>{{ selectedItem.description }}</p>
      </div>
      <div>
        <input type="text" v-model="newItemName" placeholder="Name">
        <textarea v-model="newItemDescription" placeholder="Description"></textarea>
        <button @click="addItem">Add Item</button>
      </div>
  
      <div id="my-text">
        <p>{{ text1 }}</p>
        <p>{{ text2 }}</p>
        <button @click="changeText">Change Text</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { name: 'Item 1', description: 'Description for Item 1' },
          { name: 'Item 2', description: 'Description for Item 2' },
          { name: 'Item 3', description: 'Description for Item 3' }
        ],
        selectedItem: null,
        newItemName: '',
        newItemDescription: '',
        text1: 'Hello',
        text2: 'World'
      };
    },
    methods: {
      showDetails(item) {
        this.selectedItem = item;
      },
      addItem() {
        if (this.newItemName && this.newItemDescription) {
          this.items.push({
            name: this.newItemName,
            description: this.newItemDescription
          });
          this.newItemName = '';
          this.newItemDescription = '';
        }
      },
      changeText() {
        this.text1 = 'Goodbye';
      }
    }
  };
  </script>
  