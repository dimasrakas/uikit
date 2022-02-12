import { shallowMount } from "@vue/test-utils";
import Input from "./Input.vue";

describe("Input.vue", () => {
  it('should have "Input" as name', () => {
    expect(Input.name).toBe("Input");
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(Input);
    expect(wrapper.element).toMatchSnapshot();
  });
});
