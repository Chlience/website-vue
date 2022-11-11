<template>
    <div v-for="post in posts" :key="post.id">
        <chat-card :id="post.id" :userId="post.userId" :postTime="post.postTime" :content="post.content"/>
    </div>
</template>

<script setup>
import ChatCard from './ChatCard';
import request from "@/utils/request";
import {onMounted, ref} from 'vue'

const posts = ref(null)

onMounted(() => {
    request.get("/post/getAllOrderByTime").then(res => {
        posts.value = res.data;
    })
})

</script>

<style scoped>
@import "@/css/index.css";

</style>