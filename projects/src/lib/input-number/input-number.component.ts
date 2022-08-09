import { Component, Input, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { TooltipPositionType } from '../button/types/button.type';
import { inputCurrencyMode } from './types/input-number';

@Component({
  selector: 'ui-kit-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputNumberComponent {
  @Input() controlName: any = 'text';
  @Input() formGroup: UntypedFormGroup = new UntypedFormBuilder().group({
    [this.controlName]: new UntypedFormControl(),
  });
  @Input() label: any = 'Hola Mundo';
  @Input() tooltip: string = '';
  @Input() tooltipPosition: TooltipPositionType = 'top';
  @Input() showButtons: boolean = false;
  @Input() inputId: string = this.controlName;
  @Input() mode: inputCurrencyMode = '';
  @Input() currency: string = 'USD';
  @Input() min: number = 0;
  @Input() max: number = 999999999999;
  @Input() step: number = 1;
  @Input() showClear: boolean = true;
  @Input() locale: string = 'en-US';
  @Input() suffix: string = '';
  @Input() prefix: string = '';
  @Input() readonly: boolean = false;

  constructor() {}
}
