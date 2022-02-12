<template>
  <div>
    <label :for="id"> {{ label }} </label>
    <input :id="id" type="text" :placeholder="placeholder" />

    {{ state }}
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String],
      default: "text",
    },
    label: {
      type: [String],
      default: "Label name",
    },
    placeholder: {
      type: [String],
      default: "Placeholder",
    },
    state: {
      type: [String],
      default: "State",
    },
  },
};
</script>

<style lang="scss" scoped></style>
