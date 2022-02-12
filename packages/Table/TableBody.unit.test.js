import { shallowMount } from "@vue/test-utils";
import TableBody from "./TableBody.vue";

describe("TableBody", () => {
  it('should have "TableBody" as name', () => {
    expect(TableBody.name).toBe("TableBody");
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(TableBody);
    expect(wrapper.element).toMatchSnapshot();
  });
});
