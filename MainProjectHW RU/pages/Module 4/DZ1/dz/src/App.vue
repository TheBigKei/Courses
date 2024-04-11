<template>
  <div id="app">
    <ItemList />
    <MyText />
  </div>
</template>

<script>
import ItemList from './components/ItemList.vue';
import MyText from './components/MyText.vue';

export default {
  components: {
    ItemList,
    MyText
  }
};
</script>