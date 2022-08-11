import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { PositionSimple, Severity } from '../../shared/types';

@Component({
  selector: 'ui-kit-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent implements OnInit {
  @Input() severity: Severity = 'secondary';
  @Input() label: string = '';
  @Input() labelPos: PositionSimple = 'left';
  @Input() controlName: any = 'text';
  @Input() formGroup: UntypedFormGroup = new UntypedFormBuilder().group({
    [this.controlName]: new UntypedFormControl(),
  });

  constructor() {}

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((val) => {
      console.log(val, this.formGroup);
    });
  }
}
