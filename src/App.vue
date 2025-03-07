<!-- App.vue -->
<template>
  <div>
    <router-link to="/home">首页</router-link>&nbsp;
    <router-link :to="{ name: 'guanyu' }">关于</router-link>&nbsp;
    <router-link :to="{ name: 'xinwen' }">新闻</router-link>&nbsp;
    <router-link :to="{ path: '/slot' }">插槽</router-link>&nbsp;
    <router-link :to="{ path: '/shallow' }">shallowRef</router-link>&nbsp;
    <router-link :to="{ path: '/teleport' }">teleport</router-link>&nbsp;
    <router-link :to="{ path: '/lifeCycle' }">父子组件的生命周期的执行</router-link>&nbsp;
    <div class="main_container">
      <h3>（一级路由容器）</h3>
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

</script>
<style scoped>
.main_container {
  height: 90vh;
  border: 10px solid gray;
}
</style>
