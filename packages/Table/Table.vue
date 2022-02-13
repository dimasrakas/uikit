<template>
  <StyledTable>
    <slot></slot>
  </StyledTable>
</template>

<script>
import StyledTable from "./StyledTable";
export default {
  name: "Table",
  components: {
    StyledTable,
  },
};
</script>

<style>
table {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
