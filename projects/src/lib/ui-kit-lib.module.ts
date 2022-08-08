import { NgModule, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNGConfig } from 'primeng/api';
import { primeNgModule } from './prime-ng.module';
import { myModules } from './my-modules.module';

@NgModule({
  declarations: [myModules],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    primeNgModule,
  ],
  exports: [myModules],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UiKitLibModule implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
