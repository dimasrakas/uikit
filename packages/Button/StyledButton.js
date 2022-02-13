import styled from "vue-styled-components";
import { space, color } from "styled-system";

const StyledButton = styled("button", {
  mt: [Number, String, Array],
  px: [Number, String, Array],
  py: [Number, String, Array],
  bg: String,
  color: String,
})`
  border: none;
  border-radius: 0.5rem;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 100%;
  line-height: inherit;
  color: white;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }

  ${space}
  ${color}
`;

export default StyledButton;
