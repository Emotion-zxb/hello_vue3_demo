<template>
  <div>
    {{ count }}
    <button @click="increment">btn1</button>
    <button @click="decrement">btn2</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '@/hooks/useCounter';
const { count, increment, decrement } = useCounter(10); // 初始值为 10
</script>

<style lang="scss" scoped></style>
