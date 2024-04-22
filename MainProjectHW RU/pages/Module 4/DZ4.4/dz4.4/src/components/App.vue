<template>
  <div id="app">
    <Button />
    <InputField />
    <ItemList />
  </div>
</template>

<script>
import Button from './components/Button.vue';
import InputField from './components/InputField.vue';
import ItemList from './components/ItemList.vue';

export default {
  components: {
    Button,
    InputField,
    ItemList,
  }
};
</script>