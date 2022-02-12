import { shallowMount } from "@vue/test-utils";
import TableHeader from "./TableHeader.vue";

describe("TableHeader", () => {
  it('should have "TableHeader" as name', () => {
    expect(TableHeader.name).toBe("TableHeader");
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(TableHeader);
    expect(wrapper.element).toMatchSnapshot();
  });
});
