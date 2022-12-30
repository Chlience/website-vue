<template>
    <div class="card UserHome">
        <div> {{userInfo}} </div>
        <router-link :to="{name: 'UserPost', query: {userId: $route.query.userId}}">
            <n-button attr-type="button" style="margin-inline: 10px">
                我的帖子
            </n-button>
        </router-link>
    </div>
</template>

<script setup>
import {NButton} from "naive-ui"
import {onMounted, ref} from "vue";

const userInfo = ref({})

onMounted(() => {
    userInfo.value = history.state;
})
</script>

<style>
.UserHome {
    width: 600px;
}
</style>