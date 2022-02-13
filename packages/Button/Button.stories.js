import Button from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
  argTypes: {
    size: { control: "select", options: ["default", "sm"] },
    variant: { control: "radio", options: ["primary", "secondary"] },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: "Default Button",
  loading: false,
  size: "default",
  variant: "primary",
};
