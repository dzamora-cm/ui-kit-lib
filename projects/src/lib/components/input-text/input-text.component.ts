import { Component, Input, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';

import { PositionSimple, Position } from '../../shared/types';

@Component({
  selector: 'ui-kit-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  @Input() controlName: any = 'text';
  @Input() formGroup: UntypedFormGroup = new UntypedFormBuilder().group({
    [this.controlName]: new UntypedFormControl(),
  });
  @Input() label: any = '';
  @Input() placeholder: any = '';
  @Input() tooltip: string = '';
  @Input() tooltipIcon: string = '';
  @Input() tooltipPosition: Position = 'top';
  @Input() inputId: string = this.controlName;
  @Input() icon: string = 'pi-search';
  @Input() hint: string = '';
  @Input() iconPos: PositionSimple = 'left';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() invalid: boolean | undefined = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.formGroup);
  }
}
