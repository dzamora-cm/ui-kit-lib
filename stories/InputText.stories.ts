import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { InputTextComponent } from '../projects/src/lib/input-text/input-text.component';
import { MaterialModule } from 'projects/src/lib/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

export default {
  component: InputTextComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputTextComponent],

      imports: [
        CommonModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [FormBuilder],
    }),
  ],
  argTypes: {},
  excludeStories: /.*Data$/,
  title: 'InputText',
} as Meta;

const Template: Story<InputTextComponent> = (args: InputTextComponent) => ({
  component: InputTextComponent,
  props: args,
});

export const SwitchStory: Story<InputTextComponent> = () => {
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
};
