import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { InputNumberComponent } from 'projects/src/lib/input-number/input-number.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { tooltipPositionType } from 'stories/button/initial-values';

export default {
  component: InputNumberComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputNumberComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        InputNumberModule,
        TooltipModule,
      ],
      providers: [],
    }),
  ],
  argTypes: {
    label: { control: { type: 'text' } },
    inputId: { control: { type: 'text' } },
    tooltip: { control: { type: 'text' } },
    currency: { control: { type: 'text' } },
    max: { control: { type: 'number' } },
    tooltipPosition: {
      options: tooltipPositionType,
      control: { type: 'radio' },
    },
    mode: {
      options: ['currency', 'decimal'],
      control: { type: 'radio' },
    },
  },
  excludeStories: /.*Data$/,
  title: 'FORM',
} as Meta;

const Template: Story<InputNumberComponent> = (args: InputNumberComponent) => ({
  component: InputNumberComponent,
  props: args,
});

export const InputNumber = Template.bind({});
InputNumber.args = {
  label: 'Valor',
  inputId: 'amount',
  currency: 'USD',
  mode: 'currency',
  min: 0,
  showClear: true,
  showButtons: false,
  step: 1,
  locale: 'en-US',
  suffix: '',
  prefix: '',
  readonly: false,
};
