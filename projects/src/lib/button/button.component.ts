import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
type ButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'help'
  | 'danger';
type SizesType = 'large' | 'medium' | 'small';
type styleType = 'loud' | 'quiet' | 'transparent';
type iconPosType = 'left' | 'right';
type tooltipPositionType = 'left' | 'right' | 'top' | 'bottom';

@Component({
  selector: 'ui-kit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @Input() label: string = 'Hello Word';
  @Input() type: ButtonType = 'primary';
  @Input() size: SizesType = 'large';
  @Input() style: styleType = 'loud';
  @Input() icon: string = 'pi-search';
  @Input() ngStyle: { [klass: string]: any } = { width: '100%' };
  @Input() iconPos: iconPosType = 'left';
  @Input() tooltip: string = '';
  @Input() tooltipPosition: tooltipPositionType = 'top';
  @Input() parameters: any = {};
  @Input() action: Function = () => {};

  actionButton = () => {
    this.action(this.parameters);
  };

  constructor() {}

  ngOnInit(): void {}
}
