<template>
  <div
    :class="{
      w_button: true,
      w_button_primary: isPrimary,
      w_button_radius: isRadius
    }"
  >
    <button><slot /></button>
  </div>
</template>

<script>
export default {
  props: ['type','radius'],
  data() {
    return {
      isPrimary: false,
      isRadius: false,
    }
  },
  mounted() {
    if (this.type === "primary") {
      this.isPrimary = true
    }
    if (this.radius == true || this.radius == '') {
      this.isRadius = true
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
    border-radius: 16px;
    color: #fff;
    transition: ease 0.2s;
  }
}

.w_button:active {
  transform: scale(0.7);
  transition: ease 0.2s;
}

.w_button_primary {
  button {
    background: #4693FF;
  }
}

.w_button_radius button {
  border-radius: 100px;
}
</style>
