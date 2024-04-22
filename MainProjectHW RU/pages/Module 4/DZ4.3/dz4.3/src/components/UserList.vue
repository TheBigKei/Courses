<template>
    <div>
      <h2>Список пользователей</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          <span>{{ user.name }}</span>
          <span>{{ user.age }}</span>
          <span>{{ user.isAdmin ? ' Администратор' : ' Пользователь' }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
          { id: 1, name: 'Иван ', age: 25, isAdmin: true },
          { id: 2, name: 'Елена ', age: 30, isAdmin: false },
          { id: 3, name: 'Алексей ', age: 35, isAdmin: false }
        ]
      };
    }
  };
  </script>