<template>
    <div>
      <h1>Домашняя страница</h1>
      <Button>Перейти на другую страницу</Button>
    </div>
  </template>
  
  <script>
  export default {
    components: {
      Button: () => import('./Button.vue') // Импорт компонента кнопки
    }
  };
  </script>