import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ButtonType,
  SizesType,
  styleType,
  iconPosType,
  tooltipPositionType,
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
  @Input() style: styleType = 'loud';
  @Input() icon: string = 'pi-search';
  @Input() iconPos: iconPosType = 'left';
  @Input() tooltip: string = '';
  @Input() tooltipPosition: tooltipPositionType = 'top';
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
