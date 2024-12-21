<template>
  <div class="container">
    <h3>我是子组件1</h3>
    <p>{{ data }}</p>
    <button @click="f">调用祖先的方法</button>
  </div>
</template>

<script setup lang='ts'>
import { inject } from 'vue';
const data:any = inject('data')

function f() {
  data.fff()
}
</script>
<style scoped></style>