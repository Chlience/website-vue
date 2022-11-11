<template>
    <div class="card" style="width: 600px; align-items: center">
        <div style="font-size: 20px"> New Post </div>
        <n-input v-model:value="form.content" type="textarea" show-count placeholder="文章内容" style="margin-block:10px; text-align: left"/>
        <n-button @click="clickPushPost"> 提交 </n-button>
        <div> {{form}} </div>
    </div>
</template>

<script setup>
import request from "@/utils/request";
import store from "@/store/store";
import { ref } from "vue"
import { NInput, NButton } from 'naive-ui';

const form = ref({
    userId: store.state.user.id,
    content: null,
})
function clickPushPost() {
    console.log(form.value);
    request.post("/post/addPost", form.value);
    form.value = {
        userId: store.state.user.id,
        content: null,
    }
}
</script>

<style scoped>
@import "@/css/index.css";
</style>