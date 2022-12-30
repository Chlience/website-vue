<template>
    <div class="Post">
        <div v-show="!visible" class="card" style="width: 600px; height:200px"/>
        <div v-for="post in posts" :key="post.id" v-show="visible">
            <chat-card :id="post.id" :userId="post.userId" :postTime="post.postTime" :content="post.content"/>
        </div>
        <div> {{$route.fullPath}} </div>
        <n-button attr-type="button" style="margin-inline: 10px" @click="newPage">
            加载更多
        </n-button>
    </div>
</template>

<script setup>
import ChatCard from './ChatCard';
import request from "@/utils/request";
import {onMounted, ref} from 'vue'
import {NButton} from 'naive-ui';
import {useRoute} from 'vue-router'
import { useNotification } from 'naive-ui'

const notification = useNotification()
const posts = ref([]);
const visible = ref(0);
const page = ref(0);
const isLoading = ref(0);
const route = useRoute();

onMounted(() => {
    newPage().then(() => {
        visible.value = 1
    })
})

function newPage() {
    isLoading.value += 1;
    return request.post("/post/selectPageByUserId", {
        userId: route.query.userId,
        current: page.value + 1,
        size: 10,
    }).then(res => {
        if(res.code === "200") {
            for(let i = 0; i < res.data.length; ++ i)
                posts.value.push(res.data[i])
            page.value = page.value + 1
        }
        else {
            notification.create({
                title: "Info",
                content: "没有更多的博文了"
            })
        }
        isLoading.value -= 1;
    })
}

</script>

<style scoped>
@import "@/css/index.css";

</style>