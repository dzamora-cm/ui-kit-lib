import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../../projects/src/lib/button/button.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { buttonTypes, sizesTypes } from './initial-values';

export default {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule, ButtonModule, TooltipModule],
    }),
  ],
  argTypes: {
    type: {
      options: buttonTypes,
      control: { type: 'select' },
    },
    size: {
      options: sizesTypes,
      control: { type: 'select' },
    },
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
  size: 'large',
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  label: 'Button Default',
  type: 'secondary',
  size: 'large',
};
