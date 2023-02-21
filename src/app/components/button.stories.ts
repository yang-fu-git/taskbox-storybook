import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
    component: ButtonComponent,
    title: 'Button',
    excludeStories: /.*Data$/,
  } as Meta;

const Template: Story = args => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  button: {
    label: "Button",
    primary: true,
    size: "small",
    backgroundColor:"black",
  },
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  ...Default.args['button'],
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args['button'],
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args['button'],
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args['button'],
  size: 'small',
  label: 'Button',
};
