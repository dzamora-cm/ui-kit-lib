import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

import { ButtonComponent } from './button/button.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [MaterialModule],
  exports: [ButtonComponent, MaterialModule],
})
export class PatternLibModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.setDefaultFontSetClass('my-icons');
  }
}
