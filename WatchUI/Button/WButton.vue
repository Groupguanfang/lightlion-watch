<template>
  <div :class="classes">
    <button><slot /></button>
  </div>
</template>

<script>
export default {
  props: ['type'],
  data() {
    return {
      isPrimary: false,
      classes: {
        w_button: true,
        w_button_primary: isPrimary
      },
    }
  },
  mounted() {
    if (this.type === "primary") {
      this.isPrimary = true
    }
  }
};
</script>

<style lang="less" scoped>
.w_button {
  width: 100%;
  button {
    background: #242424;
    display: block;
    border: none;
    outline: none;
    padding: 28px;
    font-size: 28px;
    width: 100%;
    border-radius: 100px;
    color: #fff;
    transition: ease 0.2s;
  }
  button:active {
    transform: scale(0.7);
    transition: ease 0.2s;
  }
}
</style>
