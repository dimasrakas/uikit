module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/vue",
};
