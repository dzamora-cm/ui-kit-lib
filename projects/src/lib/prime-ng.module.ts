import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';

const primeNgModules: any[] = [
  ButtonModule,
  TooltipModule,
  InputTextModule,
  DropdownModule,
  InputNumberModule,
  TagModule,
];

@NgModule({
  imports: [...primeNgModules],
  exports: [...primeNgModules],
})
export class primeNgModule {}
