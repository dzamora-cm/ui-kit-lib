import { Component, Input, OnInit } from '@angular/core';
type ButtonType = 'success' | 'default' | 'error';
@Component({
  selector: 'pl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string | null = null;
  @Input() pink: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
