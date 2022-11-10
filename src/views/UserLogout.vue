<template>
    <div class="card" style="width: 600px">
        <div style="display: flex; flex-direction: column; align-items: center">
            <div style="box-sizing: content-box; word-break: break-all"> token = {{ this.$store.state.user }} </div>
            <input type="submit" @click="userLogout">
        </div>
    </div>
</template>


<script>
export default {
    name: 'UserLogout',
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
        userLogout() {
            this.$store.dispatch('CLEAR');
            console.log("登出成功");
        }
    },
    mounted() {
    }
}
</script>

<style scoped>
@import "@/css/index.css";
</style>