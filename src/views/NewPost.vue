<template>
    <div class="card NewPost">
        <div style="font-size: 20px"> New Post </div>
        <n-input v-model:value="form.content" type="textarea" show-count placeholder="文章内容" style="margin-block:10px; text-align: left"/>
        <n-button @click="clickPushPost"> 提交 </n-button>
    </div>
</template>

<script setup>
import request from "@/utils/request";
import router from "@/router/router";
import store from "@/store/store";
import { ref } from "vue"
import { NInput, NButton } from 'naive-ui';

const form = ref({
    userId: store.state.user.id,
    content: null,
})
function clickPushPost() {
    console.log(form.value);
    request.post("/post/insert", form.value);
    form.value = {
        userId: store.state.user.id,
        content: null,
    }
    router.push({name: 'UserPost', query: {userId: -1}})
}
</script>

<style scoped>
@import "@/css/index.css";
.NewPost {
    width: 600px;
    align-items: center;
    display: flex;
    flex-direction: column;
}
</style>