import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ButtonType,
  SizesType,
  StyleType,
  IconPosType,
  TooltipPositionType,
} from './types/button.type';

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
  @Input() style: StyleType = 'loud';
  @Input() icon: string = 'pi-search';
  @Input() iconPos: IconPosType = 'left';
  @Input() tooltip: string = '';
  @Input() tooltipPosition: TooltipPositionType = 'top';
  @Input() parameters: any = {};
  @Input() action: Function = () => {};
  @Input() loading: boolean = false;
  @Input() badge: string = '';

  actionButton = () => {
    this.action(this.parameters);
  };

  constructor() {}

  ngOnInit(): void {}
}
