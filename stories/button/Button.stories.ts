import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../../projects/src/lib/button/button.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import {
  buttonTypes,
  sizesTypes,
  styleType,
  iconPosType,
  tooltipPositionType,
} from './initial-values';

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
    style: {
      options: styleType,
      control: { type: 'select' },
    },
    iconPos: {
      options: iconPosType,
      control: { type: 'radio' },
    },
    tooltipPosition: {
      options: tooltipPositionType,
      control: { type: 'radio' },
    },
  },
  excludeStories: /.*Data$/,
  title: 'BUTTON',
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
  icon: 'pi-search',
  tooltip: 'Hello word',
  parameters: {},
  onClick: () => {},
  loading: false,
  badge: '',
  isSubmit: true,
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  label: 'Button Default',
  type: 'secondary',
  size: 'large',
  icon: 'pi-search',
  tooltip: 'Hello word',
  parameters: {},
  onClick: () => {},
  loading: true,
  badge: 'H',
  isSubmit: false,
};
