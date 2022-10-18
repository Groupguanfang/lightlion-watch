<template>
  <div
    :class="{
      w_button: true,
      w_button_primary: isPrimary,
      w_button_radius: isRadius,
      w_button_danger: isDanger,
      w_button_secondary: isSec,
      w_button_small: isSmall,
      w_button_left: isSmallLeft,
      w_button_right: isSmallRight
    }"
  >
    <button><slot /></button>
  </div>
</template>

<script>
export default {
  props: ['type','radius','small'],
  data() {
    return {
      isPrimary: false,
      isRadius: false,
      isDanger: false,
      isSec: false,
      isSmall: false,
      isSmallLeft: false,
      isSmallRight: false,
    }
  },
  mounted() {
    if (this.type === "primary") {
      this.isPrimary = true
    } else if (this.type === "danger") {
      this.isDanger = true
    } else if (this.type === "secondary") {
      this.isSec = true
    }
    
    
    if (this.radius == true || this.radius == '') {
      this.isRadius = true
    }
    
    if (this.small == true || this.small == '') {
      this.isSmall = true
    } else if (this.small == "left") 
    {
      this.isSmall = true
      this.isSmallLeft = true
    } else if (this.small == "right") 
    {
      this.isSmall = true
      this.isSmallRight = true
    }
  }
};
</script>

<style lang="less" scoped>
.w_button {
  width: 100%;
  button {
    background: var(--default);
    display: block;
    border: none;
    outline: none;
    padding: 28px;
    font-size: 28px;
    width: 100%;
    border-radius: var(--radius);
    color: #fff;
    transition: ease 0.2s;
  }
}

.w_button_primary {
  button {
    background: var(--primary);
  }
}

.w_button_danger {
  button {
    background: var(--danger);
  }
}

.w_button_secondary {
  button {
    background: var(--secondary);
  }
}

.w_button_radius button {
  border-radius: 100px;
}

.w_button_small {
  width: 50%;
}

.w_button_left button {
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}

.w_button_right button {
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}
</style>
