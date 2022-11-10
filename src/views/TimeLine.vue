<template>
    <div v-for="post in posts" :key="post.id">
        <chat-card :id="post.id" :userId="post.userId" :postTime="post.postTime" :content="post.content"/>
    </div>
</template>

<script>
import ChatCard from './ChatCard';
import request from "@/utils/request";

export default {
    name: 'TimeLine',
    components: {
		ChatCard
	},
    data() {
        return {
            posts: []
        }
    },
    methods: {
        getAll() {
            request.get("/post/getAllOrderByTime").then(res => {
                this.posts = res.data;
            })
        },
    },
    mounted() {
        request.get("/post/getAllOrderByTime").then(res => {
            this.posts = res.data;
        })
    }
}
</script>

<style scoped>
@import "@/css/index.css";

</style>