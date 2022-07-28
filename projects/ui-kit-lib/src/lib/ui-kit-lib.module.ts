import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { MaterialModule } from './material.module';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [ButtonComponent, TagComponent],
  imports: [MaterialModule, CommonModule],
  exports: [ButtonComponent, TagComponent],
})
export class UiKitLibModule {}
