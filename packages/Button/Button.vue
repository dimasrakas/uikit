<template>
  <StyledButton
    :px="space[3]"
    :py="size === 'sm' ? space[1] : space[2]"
    :bg="variant === 'primary' ? colors.blue[500] : colors.gray[200]"
    :color="variant === 'primary' ? colors.white : colors.gray[800]"
  >
    <span v-if="!loading">{{ label }}</span>
    <span v-if="loading"> Loading...</span>
  </StyledButton>
</template>

<script>
import StyledButton from "./StyledButton";
import { colors, space } from "../../themes";

export default {
  name: "Button",
  components: {
    StyledButton,
  },
  data() {
    return {
      colors,
      space,
    };
  },
  props: {
    label: {
      type: String,
      default: "Button",
    },
    size: {
      type: String,
      default: "default",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    name() {
      return this.data;
    },
  },
};
</script>

<style scoped></style>
