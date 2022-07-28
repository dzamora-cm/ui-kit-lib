import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { TagComponent } from '../projects/ui-kit-lib/src/lib/tag/tag.component';
import { MaterialModule } from 'projects/ui-kit-lib/src/lib/material.module';

export default {
  component: TagComponent,
  decorators: [
    moduleMetadata({
      declarations: [TagComponent],
      imports: [CommonModule, MaterialModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Tag',
} as Meta;

const Template: Story<TagComponent> = (args: TagComponent) => ({
  component: TagComponent,
  props: args,
});

export const TagDefault = Template.bind({});
TagDefault.args = {
  label: 'Tag Default',
  type: 'default',
};

export const TagError = Template.bind({});
TagError.args = {
  label: 'Tag Error',
  type: 'error',
};

export const TagSuccess = Template.bind({});
TagSuccess.args = {
  label: 'Tag Success',
  type: 'success',
};
