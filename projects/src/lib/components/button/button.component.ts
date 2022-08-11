import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  PositionSimple,
  Position,
  Severity,
  Sizes,
  Range,
} from '../../shared/types';

@Component({
  selector: 'ui-kit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @Input() label: string = 'Hello Word';
  @Input() severity: Severity = 'primary';
  @Input() isSubmit: boolean = true;
  @Input() size: Sizes = 'large';
  @Input() style: Range = 'loud';
  @Input() icon: string = 'pi-search';
  @Input() iconPos: PositionSimple = 'left';
  @Input() tooltip: string = '';
  @Input() tooltipPosition: Position = 'top';
  @Input() parameters: any = {};
  @Input() onClick: Function = () => {};
  @Input() loading: boolean = false;
  @Input() badge: string = '';

  actionButton = () => {
    console.log(13456);
    this.onClick(this.parameters);
  };

  constructor() {}

  ngOnInit(): void {}
}
