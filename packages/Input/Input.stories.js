import Input from "./Input.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Design System/Input",
  component: Input,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Input },
  template: '<Input v-bind="$props" />',
});

export const TextInput = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
TextInput.args = {
  id: "text-input",
  placeholder: "Your placeholder",
};
