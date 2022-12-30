<template>
    <div class="frame-sidebar">
        <div class="card card-sidebar">
            <div v-show="!isUserLogin">
                <router-link :to=" {name: 'UserLogin'} ">
                    <n-button text ghost style="width: 80px; margin-block: 4px">
                        Login
                    </n-button>
                </router-link>
                <router-link :to=" {name: 'UserRegister'} ">
                    <n-button text ghost style="width: 80px; margin-block: 4px">
                        Register
                    </n-button>
                </router-link>
            </div>
            <div v-show="isUserLogin"  class="user-box">
                <div class="nick-name"> {{displayNickname}} </div>
                <div class="user-option">
                    <n-button text style="width: 80px; margin-block: 4px" @click="clickUserHome">
                        Home Page
                    </n-button>
                    <n-button text style="width: 80px; margin-block: 4px" @click="clickUserLogout">
                        Logout
                    </n-button>
                </div>
            </div>
        </div>
        <div class="card card-sidebar">
            <n-button ghost style="width: 160px; margin-block: 4px" @click="clickUserPost">
                <template #icon>
                    <n-icon> <aperture/> </n-icon>
                </template>
                TimeLime
            </n-button>
            <router-link :to=" {name: 'NewPost'} ">
                <n-button ghost style="width: 160px; margin-block: 4px">
                    <template #icon>
                        <n-icon> <add/> </n-icon>
                    </template>
                    NewPost
                </n-button>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { Add, Aperture } from '@vicons/ionicons5'
import { NButton, NIcon } from "naive-ui"
import {onMounted, ref, watch} from 'vue'
import store from "@/store/store"
import router from "@/router/router"

const isUserLogin = ref(false);
const displayNickname = ref("");

function updateUserInfo() {
    isUserLogin.value = (store.state.user != null);
    if(isUserLogin.value)
        displayNickname.value = store.state.user.nickName;
    else
        displayNickname.value = "";
}

onMounted(() => {
    updateUserInfo();
})
watch(() => store.state.user, () => {
    updateUserInfo();
})

function clickUserLogout() {
    store.dispatch('CLEAR');
}

function clickUserPost() {
    router.push({name: 'UserPost', query: {userId: -1}})
}

function clickUserHome() {
    if(store.state.user == null)
        router.push({name: 'UserHome', query: {userId: -1}})
    else
        router.push({name: 'UserHome', query: {userId: store.state.user.id}})
}

</script>


<style scoped>
@import "@/css/index.css";
.frame-sidebar {
    display: flex;
    flex-direction: column;
}
.card-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: 20px;
}
.user-box {
    display: flex;
    flex-direction: column;
}
.nick-name {
    font-size: 16px;
    margin: 8px;
}
</style>
