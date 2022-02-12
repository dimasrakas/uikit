import Input from "./Input.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Design System/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    state: {
      control: { type: "select" },
      options: ["default", "error", "disabled"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Input },
  template: '<Input v-bind="$props" />',
});

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Text.args = {
  id: "text-input",
  label: "Nama",
  placeholder: "Your placeholder",
};
