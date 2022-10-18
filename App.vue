<script>
import { WButton, WTips } from "@/WatchUI";
import "@/WatchUI/index.css"
export default {
  components: { WButton, WTips },  
};
</script>

<template>
  <div class="app">
    <WTips>按钮</WTips>
    <div class="gap">
      <WButton>Default</WButton>
      <WButton>Default</WButton>
      <WButton type="primary">
        Primary
      </WButton>
    </div>
  </div>
</template>

<style lang="less" scoped>
.gap {
  gap: 10px;
}
</style>
