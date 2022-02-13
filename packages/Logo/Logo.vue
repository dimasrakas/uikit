<template>
  <img :height="height" width="auto" :src="logo" alt="" />
</template>

<script>
export default {
  name: "Logo",
  props: {
    variant: {
      type: String,
      default: "primary",
    },
    height: {
      type: Number,
      default: 40,
    },
  },
  computed: {
    logo() {
      if (this.variant === "primary") {
        return require("./assets/primary.svg");
      } else if (this.variant === "black") {
        return require("./assets/black.svg");
      } else if (this.variant === "white") {
        return require("./assets/white.svg");
      } else if (this.variant === "icon-primary") {
        return require("./assets/icon-primary.svg");
      } else if (this.variant === "icon-black") {
        return require("./assets/icon-black.svg");
      } else if (this.variant === "icon-white") {
        return require("./assets/icon-white.svg");
      } else {
        return require("./assets/primary.svg");
      }
    },
  },
};
</script>
