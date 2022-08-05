import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../projects/src/lib/button/button.component';
import { ButtonModule } from 'primeng/button';

export default {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule, ButtonModule],
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

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  label: 'Button Default',
  type: 'primary',
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  label: 'Button Error',
  type: 'secondary',
};

export const ButtonSuccess = Template.bind({});
ButtonSuccess.args = {
  label: 'Button Success',
  type: 'success',
};

export const ButtonInfo = Template.bind({});
ButtonInfo.args = {
  label: 'Button Success',
  type: 'info',
};

export const ButtonWarning = Template.bind({});
ButtonWarning.args = {
  label: 'Button Success',
  type: 'warning',
};

export const ButtonHelp = Template.bind({});
ButtonHelp.args = {
  label: 'Button Success',
  type: 'help',
};

export const ButtonDanger = Template.bind({});
ButtonDanger.args = {
  label: 'Button Success',
  type: 'danger',
};
