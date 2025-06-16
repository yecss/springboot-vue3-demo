<template>
  <div class="container">
    <!-- <Login /> -->
     <RouterView></RouterView>
  </div>
</template>

<script setup>
// import Login from './views/Login/index.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  height: 100vh;           /* 占满整个视口高度 */
}
</style>
