<template>
    <div class="card" style="width: 600px; align-items: center">
        <div style="font-size: 20px"> Login </div>
        <n-form label-placement="left" label-width="auto" label-align="right" size="large" style="margin: 20px">
            <n-form-item label="用户名" path="userName">
                <n-input v-model:value="form.userName" placeholder="用户名" />
            </n-form-item>
            <n-form-item label="密码" path="password">
                <n-input v-model:value="form.password" type="password" :minlength="6" :maxlength="26" placeholder="密码"/>
            </n-form-item>
            <div style="display: flex; justify-content: flex-end">
                <n-button attr-type="button" style="margin-inline: 10px" @click="router.push({name: 'UserRegister'})">
                    注册
                </n-button>
                <n-button attr-type="button" style="margin-inline: 10px" @click="clickLogin">
                    登陆
                </n-button>
            </div>
        </n-form>
    </div>
</template>

<script setup>
import request from "@/utils/request";
import router from "@/router/router";
import store from "@/store/store"
import {NInput, NButton, NFormItem, NForm} from 'naive-ui';
import { ref } from 'vue'

const form = ref({
    userName: null,
    password: null,
})
function clickLogin() {
    request.post("/user/login", form.value).then(res => {
        console.log(res)
        if(res.code === "200") {
            store.dispatch('SET_USER', res.data);
            console.log('登陆成功');
            console.log(res.data);
            if(window.history.length <= 1)
                router.push({name: 'TimeLine'})
            else
                router.go(-1)
        }
        else {
            console.log('登陆失败');
        }
    })
    form.value = {
        userName: null,
        password: null,
    }
}
</script>

<style scoped>
@import "@/css/index.css";
</style>