<script>
import { WButton, WTips, WTitle } from "@/WatchUI";
export default {
  components: { WButton, WTips, WTitle },  
};
</script>

<template>
  <div class="app">
  <WTips>按钮</WTips>
  <WButton>Default</WButton>
  <WButton type="primary">
    Primary
  </WButton>
  </div>
</template>
