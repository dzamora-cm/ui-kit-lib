import { Component, Input, OnInit } from '@angular/core';
type ButtonType = 'success' | 'default' | 'error';
@Component({
  selector: 'ui-kit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string | null = null;
  @Input() type: ButtonType = 'default';
  @Input() iconAfter?: string;
  @Input() iconBefore?: string;
  @Input() action: Function = () => {};
  @Input() parameters: any = {};

  actionButton = () => {
    this.action(this.parameters);
  };

  constructor() {}

  ngOnInit(): void {}
}
