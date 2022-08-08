import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from 'projects/src/lib/dropdown/dropdown.component';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Option } from 'projects/src/lib/dropdown/dropdown.component';

export default {
  component: DropdownComponent,
  decorators: [
    moduleMetadata({
      declarations: [DropdownComponent],
      imports: [
        CommonModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
  argTypes: {
    label: { name: 'string', required: false },
  },
  excludeStories: /.*Data$/,
  title: 'DropDown',
} as Meta;

export const DropDownStory: Story<DropdownComponent> = () => {
  let formGroup = new FormBuilder().group({
    city: new FormControl(),
  });
  const label = 'Text label';
  const options: Option[] = [
    { name: null, code: null },
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Colombia', code: 'COL' },
  ];

  return {
    component: DropdownComponent,
    props: {
      formGroup: formGroup,
      controlName: 'city',
      label,
      options,
    },
  };
};
