import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CheckboxComponent } from '../../projects/src/lib/components/checkbox/checkbox.component';
import { severities } from 'projects/src/lib/shared/const';

export default {
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [CheckboxComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CheckboxModule,
      ],
      providers: [],
    }),
  ],
  argTypes: {
    label: { control: { type: 'text' } },
    labelPos: { options: ['left', 'right'], control: { type: 'radio' } },
    severity: { options: severities, control: { type: 'select' } },
  },
  excludeStories: /.*Data$/,
  title: 'FORM',
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  component: CheckboxComponent,
  props: args,
});

export const checkbox = Template.bind({});
checkbox.args = {
  label: 'Nombre y apellido',
  labelPos: 'right',
};
