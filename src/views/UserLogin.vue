<template>
    <div class="card" style="width: 600px">
        <div style="display: flex; flex-direction: column">
            <input v-model="form.userName" placeholder="username">
            <input v-model="form.password" placeholder="password">
            <input type="submit" @click="userLogin" @keyup.enter="userLogin">
        </div>
    </div>
</template>


<script>
import request from "@/utils/request";

export default {
    name: 'UserLogin',
    components: {
    },
    data() {
        return {
            form: {
                userName: null,
                password: null,
            }
        }
    },
    methods: {
        userLogin() {
            request.post("/user/login", this.form).then(res => {
                console.log(res)
                if(res.code === "200") {
                    this.$store.dispatch('SET_USER', res.data);
                    console.log('登陆成功');
                    console.log(res.data);
                }
                else {
                    console.log('登陆失败');
                }
                this.$router.go(-1)
            })
            this.form = {
                userName: null,
                password: null,
            }
        }
    }
}
</script>

<style scoped>
@import "@/css/index.css";
</style>