<template>
  <button class="custom-button" @click="redirectToOtherPage">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    redirectToOtherPage() {
      this.$router.push('/other');
    }
  }
};
</script>

<style scoped>
.custom-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: #0056b3;
}
</style>