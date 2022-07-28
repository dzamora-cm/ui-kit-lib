import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../projects/ui-kit-lib/src/lib/button/button.component';
import { MaterialModule } from 'projects/ui-kit-lib/src/lib/material.module';

export default {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule, MaterialModule],
    }),
  ],
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
