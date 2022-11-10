<template>
    <div class="card"  style="width: 600px">
        <div> AddPost </div>
        <textarea v-model="form.content" placeholder="content"/>
        <input type="submit" @click="addPost">
    </div>
</template>

<script>
import request from "@/utils/request";

export default {
    name: "AddPost",
    data() {
        return {
            form: {
                userId: this.$store.state.user.id,
                content: null,
            }
        }
    },
    methods: {
        addPost() {
            this.form.postTime = new Date();
            request.post("/post/addPost", this.form);
            this.form = {
                userId: this.$store.state.user.userId,
                content: null,
            }
        }
    }
}
</script>

<style scoped>
@import "@/css/index.css";
</style>