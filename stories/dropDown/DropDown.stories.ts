import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from 'projects/src/lib/dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { defaultOptions } from './initial-values';

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
    label: { control: { type: 'text' } },
  },
  excludeStories: /.*Data$/,
  title: 'FORM',
} as Meta;

const Template: Story<DropdownComponent> = (args: DropdownComponent) => ({
  component: DropdownComponent,
  props: args,
});

export const DropDown = Template.bind({});
DropDown.args = {
  label: 'Hello Word',
  options: defaultOptions,
  showClear: false,
};

// example with control-name and form-group
/*const DropDownStory: Story<DropdownComponent> = () => {
  let formGroup = new FormBuilder().group({
    city: new FormControl(),
  });
  const label = 'Hello Word';
  const options = defaultOptions;
  return {
    component: DropdownComponent,
    props: {
      formGroup: formGroup,
      controlName: 'city',
      label: label,
      options,
    },
  };
};*/
