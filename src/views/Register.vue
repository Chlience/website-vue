<template>
    <div class="card" style="width: 600px">
        <div style="display: flex; flex-direction: column">
            <input v-model="form.userName" placeholder="username">
            <input v-model="form.nickName" placeholder="nickname">
            <input v-model="form.password" placeholder="password">
            <input type="submit" @click="register">
        </div>
    </div>
</template>


<script>
import request from "@/utils/request";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Register',
    components: {
    },
    data() {
        return {
            form: {
                userName: null,
                nickName: null,
                password: null,
            }
        }
    },
    methods: {
        register() {
            request.post("/user/register", this.form).then(res => {
                if(res.code === "200") {
                    console.log('注册成功');
                    console.log(res.data);
                }
                else {
                    console.log('注册失败');
                    console.log(res.msg);
                }
                this.$router.go(-1)
            })
            this.form = {
                userName: null,
                nickName: null,
                password: null,
            }
        }
    }
}
</script>

<style scoped>
@import "@/css/index.css";
</style>