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

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Text.args = {
  type: "text",
  id: "text-input",
  placeholder: "Your full name",
  label: "My name",
  infoMessage: "Tip: Simple caption text here",
  errorMessage: "",
};

export const Number = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Number.args = {
  type: "number",
  id: "text-input",
  placeholder: "Your number",
  label: "My age",
  infoMessage: "Tip: Simple caption text here",
  errorMessage: "",
};

export const Date = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Date.args = {
  type: "date",
  id: "text-input",
  placeholder: "Your date",
  label: "My birthday",
  infoMessage: "Tip: Simple caption text here",
  errorMessage: "",
};

export const Password = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Password.args = {
  type: "password",
  id: "text-input",
  placeholder: "Your password",
  label: "My password",
  infoMessage: "Tip: Simple caption text here",
  errorMessage: "",
};
