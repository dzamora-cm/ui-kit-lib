import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { InputTextComponent } from '../../projects/src/lib/input-text/input-text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { iconPosType } from 'stories/button/initial-values';

export default {
  component: InputTextComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputTextComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        TooltipModule,
      ],
      providers: [],
    }),
  ],
  argTypes: {
    label: { control: { type: 'text' } },
    tooltip: { control: { type: 'text' } },
    tooltipIcon: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    iconPos: {
      options: iconPosType,
      control: { type: 'radio' },
    },
  },
  excludeStories: /.*Data$/,
  title: 'FORM',
} as Meta;

const Template: Story<InputTextComponent> = (args: InputTextComponent) => ({
  component: InputTextComponent,
  props: args,
});

export const InputText = Template.bind({});
InputText.args = {
  label: 'Nombre y apellido',
  placeholder: 'Ejm. Capmotion',
  disabled: false,
  readonly: false,
  hint: 'Default hint',
  invalid: false,
};

/*export const InputTextStory: Story<InputTextComponent> = () => {
  let formGroup = new FormBuilder().group({
    name: new FormControl(),
  });
  const label = 'Text label';

  return {
    component: InputTextComponent,
    props: {
      formGroup: formGroup,
      controlName: 'name',
      label,
    },
  };
};*/
