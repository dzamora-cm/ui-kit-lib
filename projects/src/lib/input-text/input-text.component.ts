import { Component, Input, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {
    console.log(this.formGroup);
  }
}
