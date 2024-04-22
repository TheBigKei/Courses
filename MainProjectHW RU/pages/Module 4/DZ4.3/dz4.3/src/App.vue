<template>
  <div id="app">
    <UserList />
    <TaskList />
  </div>
</template>

<script>
import UserList from './components/UserList.vue';
import TaskList from './components/TaskList.vue';

export default {
  components: {
    UserList,
    TaskList
  }
};
</script>