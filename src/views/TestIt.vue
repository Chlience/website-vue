<template>
    <div class="card" style="width: 600px">
        <div style="display: flex; flex-direction: column;">
            <div style="word-break: break-all"> user = {{this.$store.state.user}} </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "TestIt",
    data() {
        return {
            user: null,
        }
    },
    methods: {
    },
    created() {
    }
}
</script>

<style scoped>
@import "@/css/index.css";
</style>