import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { InputTextComponent } from '../../projects/src/lib/input-text/input-text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

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
    placeholder: { control: { type: 'text' } },
  },
  excludeStories: /.*Data$/,
  title: 'InputText',
} as Meta;

const Template: Story<InputTextComponent> = (args: InputTextComponent) => ({
  component: InputTextComponent,
  props: args,
});

export const InputText = Template.bind({});
InputText.args = {
  label: 'Nombre y apellido',
  placeholder: 'Ejm. Capmotion',
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
