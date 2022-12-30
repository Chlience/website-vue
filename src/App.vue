<template>
    <div id="app">
        <n-notification-provider>
            <FrameTop/>
            <FrameBody/>
        </n-notification-provider>
    </div>
</template>

<script setup>

import FrameTop from "@/components/FrameTop";
import FrameBody from "@/components/FrameBody";
import store from "@/store/store";
import { NNotificationProvider } from "naive-ui";

if (sessionStorage.getItem('store')) {
    store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStorage.getItem('store'))))
}
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('store', JSON.stringify(store.state))
})
</script>

<style scoped>
#app {
    font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
    margin-top: 0;
}
</style>
