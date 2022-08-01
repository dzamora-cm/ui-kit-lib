import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../projects/src/lib/button/button.component';
import { MaterialModule } from 'projects/src/lib/material.module';

export default {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule, MaterialModule],
    }),
  ],
  argTypes: {
    iconAfter: { control: 'text' },
    iconBefore: { control: 'text' },
  },
  excludeStories: /.*Data$/,
  title: 'Button',
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  label: 'Button Default',
  type: 'default',
};

export const ButtonError = Template.bind({});
ButtonError.args = {
  label: 'Button Error',
  type: 'error',
};

export const ButtonSuccess = Template.bind({});
ButtonSuccess.args = {
  label: 'Button Success',
  type: 'success',
};

export const ButtonSuccessWithIconBefore = Template.bind({});
ButtonSuccessWithIconBefore.args = {
  label: 'Button Success',
  type: 'success',
  iconBefore: 'done',
};

export const ButtonErrorWithIconAfter = Template.bind({});
ButtonErrorWithIconAfter.args = {
  label: 'Button Success',
  type: 'success',
  iconAfter: 'highlight_off',
};
