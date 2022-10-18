<script>
import { WFab, Wlayer } from "@/WatchUI";
export default {
  components: { WFab,Wlayer },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<template>
  <div class="app">
    <router-view />
    <WFab @click="isOpen = !isOpen">菜</WFab>
    <Wlayer :open="isOpen">
      6
    </wLayer>
  </div>
</template>

<style lang="less" scoped>
</style>
