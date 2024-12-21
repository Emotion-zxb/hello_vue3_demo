<template>
    <div class="container">
        <!-- name="fruit"插槽名 -->
        <!-- :list="list"提供数据给使用这个插槽的人 -->
        <slot name="fruit" :list="list"></slot>
    </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
// 数据
const list = reactive([
    {
        name: 'apple',
        url: 'https://img0.baidu.com/it/u=1612968486,971475221&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067'
    },
    {
        name: 'pear',
        url: 'https://img1.baidu.com/it/u=2896099670,3258092827&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067'
    },
    {
        name: 'grape',
        url: 'https://img2.baidu.com/it/u=1726036779,942341807&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1423'
    }
]);
</script>

<style scoped>
.container {
    width: 200px;
    height: 300px;
    border: 4px solid #ccc;
}
</style>