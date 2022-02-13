<template>
  <div>
    <StyledLabel v-if="label" :for="id"> {{ label }} </StyledLabel>
    <StyledInput
      :error="enableError"
      :id="id"
      :type="type"
      :placeholder="placeholder"
    />

    <StyledText v-if="errorMessage" :color="colors.red[500]">
      {{ errorMessage }}
    </StyledText>
    <StyledText v-if="infoMessage" :color="colors.gray[400]">
      {{ infoMessage }}
    </StyledText>
  </div>
</template>

<script>
import StyledInput from "./StyledInput";
import StyledLabel from "./StyledLabel";
import StyledText from "./StyledText";

import { colors } from "@dimasrakas/themes";

export default {
  name: "Input",
  components: {
    StyledInput,
    StyledLabel,
    StyledText,
  },
  props: {
    type: {
      type: [String],
      default: "text",
    },
    id: {
      type: [String],
      default: "text",
    },
    label: {
      type: [String],
      default: "",
    },
    placeholder: {
      type: [String],
      default: "Placeholder",
    },
    infoMessage: {
      type: [String],
      default: "",
    },
    errorMessage: {
      type: [String],
      default: "",
    },
  },
  data() {
    return {
      colors,
    };
  },
  computed: {
    enableError() {
      const length = this.errorMessage.length;
      return length;
    },
  },
};
</script>

<style scoped>
div {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
