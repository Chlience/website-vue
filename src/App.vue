<template>
    <div id="app">
        <FrameTop/>
        <FrameBody/>
    </div>
</template>

<script>

import FrameTop from "@/components/FrameTop";
import FrameBody from "@/components/FrameBody";
export default {
  name: 'App',
  components: {
      FrameBody,
      FrameTop
  }
}
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
