<template>
  <div class="w-button">
    <button><slot /></button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.w-button {
  button {
    border: none;
    outline: none;
    padding: 14px;
  }
}
</style>
