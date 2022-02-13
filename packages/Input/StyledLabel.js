import styled from "vue-styled-components";
import { colors, fontSize, space } from "@dimasrakas/themes";

export default styled("label")`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: medium;
  font-size: ${fontSize.base};
  color: ${colors.gray[800]};
`;
