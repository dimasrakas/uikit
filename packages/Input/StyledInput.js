import styled from "vue-styled-components";
import { space } from "styled-system";

import { colors, space as _space } from "@dimasrakas/themes";

const inputProps = {
  error: Boolean,
  px: { default: _space[3], type: [Number, String, Array] },
  py: { default: _space[2], type: [Number, String, Array] },
};

const StyledInput = styled("input", inputProps)`
  font-size: 100%;
  color: ${colors.gray[900]};
  background: ${colors.white};
  border: 1px solid
    ${(props) => (props.error ? colors.red[500] : colors.gray[200])};
  border-radius: 8px;

  &:focus {
    outline: 2px solid ${colors.blue[600]};
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.gray[300]};
  }
  :-ms-input-placeholder {
    color: ${colors.gray[300]};
  }

  ${space}
`;

export default StyledInput;
