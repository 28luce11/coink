import { Component, Input } from '@angular/core';

import { ViewText, viewTextOptions } from './view-text.constant';

@Component({
  selector: 'app-view-text',
  templateUrl: './view-text.component.html',
  styleUrls: ['./view-text.component.scss'],
})
export class ViewTextComponent {
  @Input() set viewText(value: number) {
    this.selectedValue = viewTextOptions[value || 1];
  }

  selectedValue!: ViewText;
}
