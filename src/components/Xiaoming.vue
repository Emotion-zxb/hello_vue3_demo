<template>
    <div class="container">
        <p>小明 组件</p>
        {{ count }}
    </div>
</template>

<script setup lang='ts'>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';
// const props = defineProps(['count'])
console.log('子组件setup');
onBeforeMount(() => {
    console.log('子组件onBeforeMount');
})
onMounted(() => {
    console.log('子组件onMounted');
})
onBeforeUnmount(() => { console.log('子组件onBeforeUnmount'); })
onUnmounted(() => { console.log('子组件onUnmounted'); })
// 定义数据
let count = ref(0)
onBeforeUpdate(() => {
    console.log('子组件onBeforeUpdate');
})
onUpdated(() => {
    console.log('子组件onUpdated');
})
</script>

<style scoped>
p {
    color: black;
    font-size: 30px;
}
</style>