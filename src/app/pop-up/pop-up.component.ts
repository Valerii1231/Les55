
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  groupName = '';
  num = 0;
  @Output() close = new EventEmitter<any>();
}
