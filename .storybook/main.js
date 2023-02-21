module.exports = {
  stories: [
  '../src/app/components/**/*.stories.ts', 
  '../src/app/default/**/*.stories.ts', 
  '../stories/*.stories.ts'
  
],
  
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
  ],
  framework: "@storybook/angular",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
};
