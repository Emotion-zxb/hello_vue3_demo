<template>
    <div class="container">
        <h2>slot插槽的介绍</h2>
        <div class="content">
            <SlotChild>
                <!-- v-slot:fruit定位名字为fruit的插槽 -->
                <!-- params表示从这个插槽读取的数据 -->
                <template v-slot:fruit="params">
                    <p>{{ params.list[0].name }}</p>
                    <img :src="params.list[0].url">
                </template>
            </SlotChild>
            <SlotChild>
                <template v-slot:fruit="params">
                    <p>{{ params.list[1].name }}</p>
                    <img :src="params.list[1].url">
                </template>

            </SlotChild>
            <SlotChild>
                <template v-slot:fruit="params">
                    <p>{{ params.list[2].name }}</p>
                    <img :src="params.list[2].url">
                </template>

            </SlotChild>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import SlotChild from '@/components/SlotChild.vue';

</script>

<style scoped>
.content {
    display: flex;
    justify-content: space-around;
}

img {
    height: 80%;
}
</style>