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
  @Input() action: Function = () => {};
  @Input() parameters: any = {};

  actionButton = () => {
    console.log('from actionButton');
    this.action(this.parameters);
  };

  constructor() {}

  ngOnInit(): void {}
}
