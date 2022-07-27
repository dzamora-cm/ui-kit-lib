import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [MaterialModule, CommonModule],
  exports: [ButtonComponent, MaterialModule],
})
export class UiKitLibModule {}
