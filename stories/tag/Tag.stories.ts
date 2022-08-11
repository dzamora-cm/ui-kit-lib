import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { TagComponent } from '../../projects/src/lib/components/tag/tag.component';
import { TagModule } from 'primeng/tag';
import { severities } from './initial-values';

export default {
  component: TagComponent,
  decorators: [
    moduleMetadata({
      declarations: [TagComponent],
      imports: [CommonModule, TagModule],
    }),
  ],
  argTypes: {
    severity: {
      options: severities,
      control: { type: 'select' },
    },
  },
  excludeStories: /.*Data$/,
  title: 'MISC',
} as Meta;

const Template: Story<TagComponent> = (args: TagComponent) => ({
  component: TagComponent,
  props: args,
});

export const TagSuccess = Template.bind({});
TagSuccess.args = {
  label: 'Tag success',
  severity: 'success',
};
