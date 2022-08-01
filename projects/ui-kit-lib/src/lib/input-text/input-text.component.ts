import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ui-kit-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  @Input() controlName: any = 'text';
  @Input() formGroup: FormGroup = new FormBuilder().group({
    text: new FormControl(),
  });
  @Input() label: any = '';

  constructor() {}

  ngOnInit(): void {}
}
