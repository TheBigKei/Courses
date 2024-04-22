<template>
    <div>
      <h2>Список задач</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <div>
            <h3>{{ task.title }}</h3>
            <p>{{ task.description }}</p>
          </div>
          <button @click="deleteTask(task.id)">Удалить</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [
          { id: 1, title: 'Задача 1', description: 'Описание задачи 1' },
          { id: 2, title: 'Задача 2', description: 'Описание задачи 2' },
          { id: 3, title: 'Задача 3', description: 'Описание задачи 3' }
        ]
      };
    },
    methods: {
      deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
      }
    }
  };
  </script>