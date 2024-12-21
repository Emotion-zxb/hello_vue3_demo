<template>
  <div class="container">
    <h3>MyInput</h3>
    <!-- <input type="text" :value="modelValue" @input="fn($event)"> -->
    <input type="text" :value="zha" @input="fn2($event)">
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
defineProps(['modelValue','zha'])
const emit = defineEmits(['update:modelValue','update:zha'])

function fn(val:any) {
    // 触发事件update:modelValue
    emit('update:modelValue',val.target.value)
    // console.log(val.target.value);
}

function fn2(val:any) {
    // 触发事件update:modelValue
    emit('update:zha',val.target.value)
    // console.log(val.target.value);
}
</script>

<style scoped>
</style>