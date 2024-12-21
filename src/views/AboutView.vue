<template>
    <div>about 我是父组件</div>
    <h3>{{ wealth }}</h3>
    <h3>{{ count }}</h3>
    <hr>
    <child></child>

</template>

<script lang="ts" setup>
import child from '@/components/child.vue';
import { reactive, provide, ref } from 'vue';
let count = ref(99)
// 财富
const wealth = reactive({
    book: '《家书一本》',
    philosophy: '哲理',
    money: 200000
})
function fff() {
    count.value += 1
}
// 给后代数据
// count这里别点value，否则不是响应式数据
provide('data', { wealth: wealth, count: count, fff: fff })
</script>