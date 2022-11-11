<template>
    <div class="card" style="width: 600px">
        <div style="display: flex; flex-direction: column">
            <input v-model="form.userName" placeholder="username">
            <input v-model="form.nickName" placeholder="nickname">
            <input v-model="form.password" placeholder="password">
            <input type="submit" @click="clickRegister">
        </div>
        <div> {{form.value}} </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import request from "@/utils/request";
import router from "@/router/router"

const form = ref({
    userName: null,
    nickName: null,
    password: null,
})

function clickRegister() {
    console.log(form.value)
    request.post("/user/register", form.value).then(res => {
        if(res.code === "200") {
            console.log('注册成功');
            console.log(res.data);
        }
        else {
            console.log('注册失败');
            console.log(res.msg);
            if(window.history.length <= 1)
                router.push({name: 'TimeLine'})
            else
                router.go(-1)
        }
    })
    form.value = {
        userName: null,
        nickName: null,
        password: null,
    }
}
</script>

<style scoped>
@import "@/css/index.css";
</style>