<template>
    <div>
        <div class="count">
            <h2>count的值为 {{ count }}</h2>
            <h2>{{ country }}-{{ upper }}</h2>
            <button @click="plus">加</button>
            <button @click="minus">减</button>
        </div>
        <hr>
        <div class="love">
            <button @click="getNews">获取新闻</button>
            <ul>
                <li v-for="item in loveStore.arr" :key="item.id">{{ item.message }}</li>
            </ul>
        </div>
        <div>
            <!-- 1. v-model用在HTML元素上 -->
            <!-- <input type="text" v-model="tel"> -->

            <!-- 用在组件标签上 -->
            <!-- <MyInput v-model="tel"></MyInput> -->
            <!-- 等价于 -->
            <!-- 1.props传输数据 2.自定义事update:modelValue -->
            <!-- <MyInput :modelValue="tel" @update:modelValue="tel = $event"></MyInput> -->
             
            <!-- 允许自定义props与事件名 -->
            <!-- <MyInput :zha="zha" @update:zha="zha = $event"></MyInput> -->
            <!-- <MyInput v-model:zha="zha"></MyInput> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useCountStore } from "@/store/count";
import { useLoveStore } from "@/store/love";
import { storeToRefs } from "pinia";
import { ref } from 'vue'
import MyInput from "@/components/MyInput.vue";

const countStore = useCountStore();
const loveStore = useLoveStore()

// let { count, country } = toRefs(countStore)

// 用于解构赋值，且数据是响应式的。相对于toRefs(countStore)下面更好
let { count, country, upper } = storeToRefs(countStore)
// console.log(storeToRefs(countStore));

// console.log(countStore);

// 数据发生变化时会执行，state可以拿到数据
countStore.$subscribe((mutation, state) => {
    // console.log('数据发生了变化',mutation,state.count);
    localStorage.setItem('count', JSON.stringify(state.count))
})




function plus() {
    countStore.count += 1
    // countStore.$patch({
    //     country: '中国'
    // })

    // countStore.modifyCountry()
}
function minus() {
    countStore.count -= 1
}
function getNews() {
    // console.log(loveStore.arr);
    loveStore.arr[0].message += '~'
}

let tel = ref('123')
let zha = ref('查小兵')
</script>

<style scoped></style>