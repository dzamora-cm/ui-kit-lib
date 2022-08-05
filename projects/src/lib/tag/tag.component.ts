import { Component, Input, OnInit } from '@angular/core';
type Severity = 'success' | 'info' | 'warning' | 'danger' | 'primary';

@Component({
  selector: 'ui-kit-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  @Input() label: string = 'View tag';
  @Input() severity: Severity = 'primary';

  constructor() {}

  ngOnInit(): void {}
}
