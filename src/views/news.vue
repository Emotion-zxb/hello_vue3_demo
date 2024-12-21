<template>
    <div>
        <button @click="toHome">首页</button>
        <router-link class="link" :to="{ name: 'xiangqing', params: { title: item.title } }" v-for="item in newsArr"
            :key="item.id">{{ item.title }}
        </router-link>
    </div>
    <div class="main">
        <h3>（二级路由容器）</h3>
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'; // 引入 useRouter

const newsArr = reactive([
    { title: '南京大屠杀遇难者国家公祭日', id: 1 },
    { title: '疯狂小阳哥3月没直播过', id: 2 },
    { title: '年轻人失业率过高如何破解', id: 3 },
])

const router  = useRouter() // 调用
function toHome() {
    router.push('/home')
}
</script>

<style scoped>
.link {
    display: block;
    font-size: 30px;
    color: black;
}

.main {
    width: 80%;
    height: 300px;
    margin: 100px auto;
    border: 6px solid rgb(151, 139, 139);
}
</style>