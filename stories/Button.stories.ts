import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../projects/src/lib/button/button.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

export default {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule, ButtonModule, TooltipModule],
    }),
  ],
  argTypes: {},
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
