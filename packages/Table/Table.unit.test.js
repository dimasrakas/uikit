import { enableAutoDestroy, shallowMount } from "@vue/test-utils";
import Table from "./Table.vue";

describe("Table", () => {
  enableAutoDestroy(afterEach);

  it('should have "Table" as name', () => {
    expect(Table.name).toBe("Table");
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(Table);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should have default structure", async () => {
    const wrapper = shallowMount(Table);

    expect(wrapper.element.tagName).toBe("STYLEDTABLE-STUB");
  });

  it("should renders default slot content", async () => {
    const wrapper = shallowMount(Table, {
      slots: {
        default: "<div> content </div>",
      },
    });

    expect(wrapper.find("div").exists()).toBe(true);
    expect(wrapper.text()).toBe("content");
  });
});
