import { Component, Input, OnInit } from '@angular/core';
type TagType = 'success' | 'default' | 'error';
@Component({
  selector: 'ui-kit-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  @Input() label: string = 'View tag';
  @Input() type: TagType = 'default';

  constructor() {}

  ngOnInit(): void {}
}
