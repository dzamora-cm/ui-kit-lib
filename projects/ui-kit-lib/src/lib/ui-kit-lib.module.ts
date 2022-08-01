import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { MaterialModule } from './material.module';
import { TagComponent } from './tag/tag.component';
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
  declarations: [ButtonComponent, TagComponent, InputTextComponent],
  imports: [MaterialModule, CommonModule],
  exports: [ButtonComponent, TagComponent, InputTextComponent],
})
export class UiKitLibModule {}
