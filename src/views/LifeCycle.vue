<template>
  <div class="container">
    <h2 class="title">父组件</h2>
    <Xiaoming></Xiaoming>
  </div>
</template>

<script setup lang='ts'>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';
import Xiaoming from '@/components/Xiaoming.vue';
console.log('父组件setup');

onBeforeMount(() => {
  console.log('父组件onBeforeMount');
})
onMounted(() => {
  console.log('父组件onMounted');
})
onBeforeUnmount(() => { console.log('父组件onBeforeUnmount'); })
onUnmounted(() => { console.log('父组件onUnmounted'); })

onBeforeUpdate(() => {
  console.log('父组件onBeforeUpdate');
})
onUpdated(() => {
  console.log('父组件onUpdated');
})
</script>

<style scoped>
.container {
  height: 80vh;
  background-color: aliceblue;
}

.title {
  font-size: 40px;
  color: green;
}
</style>