import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../projects/pattern-lib/src/lib/button/button.component';
import { MaterialModule } from 'projects/pattern-lib/src/lib/material.module';

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

export const FancyBlueButton = Template.bind({});
FancyBlueButton.args = {
  label: 'Button',
};

export const FancyPinkButton = Template.bind({});
FancyPinkButton.args = {
  label: 'Pink version',
  pink: true,
};
