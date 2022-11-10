<template>
    <div class="frame-body">
        <frame-sidebar/>
        <div class="frame-content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import FrameSidebar from "@/components/FrameSidebar";

export default {
    name: "FrameBody",
    components: {FrameSidebar},
    methods: {
    
    }
}
</script>


<style scoped>
    @import "@/css/index.css";
    .frame-body {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 4px;
    }
    .frame-content {
        display: flex;
        flex-direction: column;
    }
</style>
