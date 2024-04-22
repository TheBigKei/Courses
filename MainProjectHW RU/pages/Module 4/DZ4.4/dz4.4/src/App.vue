<template>
  <div id="app">
    <HomePage />
    <Btn />
    <InputField />
    <List />
  </div>
</template>

<script>
import Btn from './components/Btn.vue';
import InputField from './components/InputField.vue';
import HomePage from './components/HomePage.vue';
import List from './components/List.vue';

export default {
  components: {
    HomePage,
    Btn,
    InputField,
    List
  }
};
</script>