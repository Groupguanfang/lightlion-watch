<script>
import { WButton, WTips, WTitle } from "@/WatchUI";
import "@/WatchUI/index.css"
export default {
  components: { WButton, WTips, WTitle },  
};
</script>

<template>
  <div class="app">
    <WTitle color>演示站</WTitle>
    <WTips>按钮</WTips>
    <WButton>Default</WButton>
    <WButton type="primary">
      Primary
    </WButton>
    <WButton type="danger">
      Danger
    </WButton>
    <WButton type="secondary">
      Secondary
    </WButton>
    <WTips>圆角按钮</WTips>
    <WButton radius>Rounds</WButton>
    <WTips>双排小按钮</WTips>
    <div class="flex">
      <WButton small="left">Small</WButton>
      <WButton small="right">Small</WButton>
    </div>
  </div>
</template>

<style lang="less" scoped>
.gap {
  gap: 10px;
}
.flex {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
