import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Severity } from './types/tag.component.types';

@Component({
  selector: 'ui-kit-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TagComponent implements OnInit {
  @Input() label: string = 'View tag';
  @Input() severity: Severity = 'primary';

  constructor() {}

  ngOnInit(): void {}
}
