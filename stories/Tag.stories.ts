import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { TagComponent } from '../projects/src/lib/tag/tag.component';
import { TagModule } from 'primeng/tag';

export default {
  component: TagComponent,
  decorators: [
    moduleMetadata({
      declarations: [TagComponent],
      imports: [CommonModule, TagModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Tag',
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

export const TagInfo = Template.bind({});
TagInfo.args = {
  label: 'Tag info',
  severity: 'info',
};

export const TagWarning = Template.bind({});
TagWarning.args = {
  label: 'Tag warning',
  severity: 'warning',
};
export const TagDanger = Template.bind({});
TagDanger.args = {
  label: 'Tag danger',
  severity: 'danger',
};
export const TagPrimary = Template.bind({});
TagPrimary.args = {
  label: 'Tag primary',
  severity: 'primary',
};
