import { shallowMount } from "@vue/test-utils";
import TableHead from "./TableHead.vue";

describe("TableHead", () => {
  it('should have "TableHead" as name', () => {
    expect(TableHead.name).toBe("TableHead");
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(TableHead);
    expect(wrapper.element).toMatchSnapshot();
  });
});
