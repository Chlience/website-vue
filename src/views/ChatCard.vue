<template>
<div class="card" style="width: 600px">
    <div class="info-box">
        <div class="name"> {{user.nickName}} </div>
        <div class="time"> {{card_postTime}} </div>
    </div>
    <div class="content"> {{card_content}} </div>
</div>
</template>

<script>
import request from "@/utils/request";

export default {
    props: {
        id: {default: -1, type: Number},
        userId: {default: -1, type: Number},
        postTime: {default: "no_post_time", type: String},
        content: {default: "no_content", type: String},
    },
    data() {
        function CalcDate(postTime) {
            let nowDate = new Date;
            let postDate = new Date(postTime);
            let time = ""
            if(nowDate.getFullYear() !== postDate.getFullYear())
                time += postDate.getFullYear().toString() + "-";
            time += postDate.getMonth().toString() + "-" + postDate.getDate().toString() + " " + postDate.getHours().toString() + ":" + postDate.getMinutes().toString();
            return time;
        }
        return {
            user: {},
            card_postTime: CalcDate(this.postTime),
            card_content: this.content
        }
    },
    methods: {
        getUser() {
            request.post('/user/selectById', this.userId).then(res => {
                this.user = res.data
            })
        }
    },
    mounted() {
        this.getUser()
    }
}
</script>

<style scoped>
@import "@/css/index.css";
.card-warp {
    display: flex;
}
.info-box {
    margin: 5px;
    display: flex;
    flex-direction: column;
}
.name {
    font-size: 14px;
    text-align: left;
}
.time {
    font-size: 12px;
    text-align: left;
}
.content {
    margin: 5px;
    white-space: pre-wrap;
    text-align: left;
    font-size: 14px;
}
</style>