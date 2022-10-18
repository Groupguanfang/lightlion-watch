<template>
  <div class="w_fab">
    <slot />
  </div>
</template>

<style lang="less" scoped>
.w_fab {
  position: fixed;
  z-index: 99;
  right: 0;
  bottom: 0;
  height: 30px;
  width: 30px;
  background: var(--secondary);
  border-radius: 100px;
  color: #fff;
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
  font-size: 22px;
}
</style>
