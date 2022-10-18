<template>
  <div :class="{
      w_title: true,
      w_title_color: isColor
    }"
  >
    <h1><slot /></h1>
  </div>
</template>

<script>
export default {
  props: ['color'],
  data() {
    return {
      isColor: false
    }
  },
  mounted() {
    if (this.color === '' || this.color == true) {
      this.isColor = true
    }
  }
}
</script>

<style lang="less" scoped>
.w_title {
  color: #fff;
  margin: 10px;
  font-size: 24px;
  h1 {
    font-weight: 400;
  }
}
.w_title_color {
  color: var(--primary);
}
</style>
