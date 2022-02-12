import { shallowMount } from "@vue/test-utils";
import TableRow from "./TableRow.vue";

describe("TableRow", () => {
  it('should have "TableRow" as name', () => {
    expect(TableRow.name).toBe("TableRow");
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(TableRow);
    expect(wrapper.element).toMatchSnapshot();
  });
});
