import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';

export interface Option {
  name: string | null;
  code: string | null;
}

@Component({
  selector: 'ui-kit-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownComponent {
  @Input() controlName: any = 'text';
  @Input() formGroup: UntypedFormGroup = new UntypedFormBuilder().group({
    [this.controlName]: new UntypedFormControl(),
  });
  @Input() label: string = 'Hello Word';
  @Input() options: Option[] = [];
  @Input() showClear: boolean = false;
  @Input() inputId: string = this.controlName;
  @Input() hint: string = '';
  @Input() invalid: boolean | undefined = false;

  selectedCode: Option = { name: '', code: '' };

  constructor() {}
}
