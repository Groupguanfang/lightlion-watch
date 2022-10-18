<template>
  <div :class="{
    w_layer: true,
    w_layer_active: open
  }">
    <slot />
  </div>
</template>

<script>
export default {
  props: ['open'],
}
</script>

<style lang="less" scoped>
.w_layer {
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100%;
  background: #000;
  transform: translateY(-100vh);
  transition: ease 0.2s;
}
.w_layer_active {
  transform: translateY(0%);
  transition: ease 0.2s;
}
</style>
