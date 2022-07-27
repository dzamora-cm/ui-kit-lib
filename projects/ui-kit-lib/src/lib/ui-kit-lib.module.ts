import { NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [MaterialModule],
  exports: [ButtonComponent, MaterialModule],
})
export class UiKitLibModule {}
