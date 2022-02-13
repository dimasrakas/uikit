import styled from "vue-styled-components";
import { space, fontWeight, lineHeight, fontSize, color } from "styled-system";

export default styled("span", {
  fontSize: [Number, Array],
  fontWeight: String,
  color: String,
})`
  line-height: none;
  display: block;
  margin-top: 4px;
  font-size: 0.75rem;
  color: gray;
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`;
