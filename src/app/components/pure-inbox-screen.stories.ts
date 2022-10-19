import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { fireEvent, within } from '@storybook/testing-library';
import { CommonModule } from '@angular/common';

import { PureInboxScreenComponent } from './pure-inbox-screen.component';

import { TaskModule } from './task.module';

import { Store, NgxsModule } from '@ngxs/store';
import { TasksState } from '../state/task.state';
import * as TaskStories from './task.stories';

export default {
  component: PureInboxScreenComponent,
  decorators: [
    moduleMetadata({
      declarations: [PureInboxScreenComponent],
      imports: [CommonModule, TaskModule,NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }),
  ],
  title: 'PureInboxScreen',
} as Meta;

const Template: Story = args => ({
  props: args,
});

export const Default = Template.bind({});
// Default.args = {
//   tasks: [
//     { ...TaskStories.Default.args?.['task'], id: '1', title: 'Task 1' },
//     { ...TaskStories.Default.args?.['task'], id: '2', title: 'Task 2' },
//     { ...TaskStories.Default.args?.['task'], id: '3', title: 'Task 3' },
//     { ...TaskStories.Default.args?.['task'], id: '4', title: 'Task 4' },
//     { ...TaskStories.Default.args?.['task'], id: '5', title: 'Task 5' },
//     { ...TaskStories.Default.args?.['task'], id: '6', title: 'Task 6' },
//   ],
// };

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const WithInteractions = Template.bind({});
WithInteractions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // Simulates pinning the first task
  await fireEvent.click(canvas.getByLabelText('pinTask-1'));
  // Simulates pinning the third task
  await fireEvent.click(canvas.getByLabelText('pinTask-3'));
};