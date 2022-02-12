<template>
  <div>
    <input :id="id" type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    id: {
      type: [String],
      default: "text",
    },
    placeholder: {
      type: [String],
      default: "Placeholder",
    },
  },
};
</script>
