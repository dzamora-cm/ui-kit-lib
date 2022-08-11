import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../../projects/src/lib/components/button/button.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import {
  severities,
  sizes,
  style,
  positionSimple,
  positions,
} from '../../projects/src/lib/shared/const/index';

export default {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule, ButtonModule, TooltipModule],
    }),
  ],
  argTypes: {
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    style: {
      options: style,
      control: { type: 'select' },
    },
    iconPos: {
      options: positionSimple,
      control: { type: 'radio' },
    },
    tooltipPosition: {
      options: positions,
      control: { type: 'radio' },
    },
    severity: { options: severities, control: { type: 'select' } },
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
  severity: 'primary',
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
  severity: 'secondary',
  size: 'large',
  icon: 'pi-search',
  tooltip: 'Hello word',
  parameters: {},
  onClick: () => {},
  loading: true,
  badge: 'H',
  isSubmit: false,
};
