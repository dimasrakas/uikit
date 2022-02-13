<template>
  <StyleTableCell>
    <slot />
  </StyleTableCell>
</template>

<script>
import StyleTableCell from "./StyledTableCell";
export default {
  name: "TableCell",
  components: {
    StyleTableCell,
  },
};
</script>
