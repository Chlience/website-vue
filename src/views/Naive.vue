<template>
    <n-button>naive-ui</n-button>
</template>

<script>
import { defineComponent } from 'vue'
import { NButton } from 'naive-ui'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Naive",
    components: {
        NButton
    }
})
</script>