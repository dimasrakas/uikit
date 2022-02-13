<template>
  <StyledTabledHeader>
    <slot />
  </StyledTabledHeader>
</template>

<script>
import StyledTabledHeader from "./StyledTableHeader";
export default {
  name: "TableHeader",
  components: {
    StyledTabledHeader,
  },
};
</script>
