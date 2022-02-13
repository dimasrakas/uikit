import { shallowMount } from "@vue/test-utils";
import Logo from "./Logo.vue";

describe("Button.vue", () => {
  it('should have "Logo" as name', () => {
    expect(Logo.name).toBe("Logo");
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(Logo);
    expect(wrapper.element).toMatchSnapshot();
  });
});
