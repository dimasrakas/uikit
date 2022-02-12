import { shallowMount } from "@vue/test-utils";
import TableCell from "./TableCell.vue";

describe("TableCell", () => {
  it('should have "TableCell" as name', () => {
    expect(TableCell.name).toBe("TableCell");
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(TableCell);
    expect(wrapper.element).toMatchSnapshot();
  });
});
