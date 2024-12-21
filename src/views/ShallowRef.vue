<template>
    <div class="container">
        <p>{{ fruit }}</p>
        <input type="text" v-model="fruit">
        <button @click="fn">clear</button>
    </div>
</template>

<script setup lang='ts'>
// import { ref, markRaw, reactive, customRef } from 'vue';

// 引入自定义的hooks函数
import { useCustomRef } from "@/hooks/useCustomRef"
// useCustomRef：实现了自定义的ref，修改数据后延迟更新视图
let { fruit } = useCustomRef('666', 2000)

function fn() {
    fruit.value = ''
}


</script>

<style scoped></style>