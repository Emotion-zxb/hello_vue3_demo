<template>
  <div class="container">
    <h3>我是子组件2</h3>
    <p>{{ book }}本</p>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
let book = ref(30)

// 需要暴露
defineExpose({
    book
})
</script>

<style scoped>
</style>