import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
type ButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'help'
  | 'danger';
@Component({
  selector: 'ui-kit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @Input() label: string | null = null;
  @Input() type: ButtonType = 'primary';
  @Input() action: Function = () => {};
  @Input() parameters: any = {};

  actionButton = () => {
    this.action(this.parameters);
  };

  constructor() {}

  ngOnInit(): void {}
}
