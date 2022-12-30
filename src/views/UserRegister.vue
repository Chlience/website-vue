<template>
    <div class="card" style="width: 600px; align-items: center">
        <div style="font-size: 20px"> Register </div>
        <n-form label-placement="left" label-width="auto" label-align="right" size="large" style="margin: 20px">
            <n-form-item label="用户名" path="userName" :maxlength="26">
                <n-input v-model:value="form.userName" placeholder="用户名" />
            </n-form-item>
            <n-form-item label="昵称" path="userName">
                <n-input v-model:value="form.nickName" placeholder="昵称" />
            </n-form-item>
            <n-form-item label="密码" path="password" :minlength=6 :maxlength="26">
                <n-input v-model:value="form.password" type="password" placeholder="密码"/>
            </n-form-item>
            <div style="display: flex; justify-content: flex-end">
                <n-button attr-type="button" @click="ClickRegister">
                    注册
                </n-button>
            </div>
        </n-form>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import request from "@/utils/request";
import router from "@/router/router"
import { NForm, NFormItem, NInput, NButton} from "naive-ui";
import { useNotification } from 'naive-ui'

const notification = useNotification()

const form = ref({
    userName: null,
    nickName: null,
    password: null,
})
function ClickRegister() {
    console.log(form.value)
    request.post("/user/register", form.value).then(res => {
        if(res.code === "200") {
            console.log('注册成功');
            console.log(res.data);
            MessageSuccess("")
            if(window.history.length <= 1)
                router.push({name: 'TimeLine'})
            else
                router.go(-1)
        }
        else {
            MessageFailure(res.msg)
        }
    })
    form.value = {
        userName: null,
        nickName: null,
        password: null,
    }
}

function MessageSuccess(message) {
    notification.create({
        title: "注册成功",
        content: message
    })
}
function MessageFailure(message) {
    notification.create({
        title: "注册失败",
        content: message
    })
}
</script>

<style scoped>
@import "@/css/index.css";
</style>