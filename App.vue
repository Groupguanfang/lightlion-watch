<script>
import Buttons from "@/Examples/Buttons.vue"
export default {
  components: { Buttons }
};
</script>

<template>
  <div class="app">
    <Buttons />
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
