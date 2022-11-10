<template>
    <div class="frame-sidebar">
        <div class="card card-sidebar">
            <router-link :to=" {name: 'TimeLine'} "> TimeLine </router-link>
            <router-link :to=" {name: 'AddPost'} "> AddPost </router-link>
            <router-link :to=" {name: 'UserLogin'} "> UserLogin </router-link>
            <router-link :to=" {name: 'UserLogout'} "> UserLogout </router-link>
            <router-link :to=" {name: 'TestIt'} "> TestIt </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "FrameSidebar",
    methods: {
    
    }
}
</script>


<style scoped>
@import "@/css/index.css";
.frame-sidebar {
    display: flex;
    flex-direction: row;
}
.card-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
}
</style>
