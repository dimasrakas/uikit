import { shallowMount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button.vue", () => {
  it('should have "Button" as name', () => {
    expect(Button.name).toBe("Button");
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.element).toMatchSnapshot();
  });
});
