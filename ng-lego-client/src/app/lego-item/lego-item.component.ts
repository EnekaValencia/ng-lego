import {Component, Input} from '@angular/core';
import {Lego} from '../shared/lego';

@Component({
  selector: 'app-lego-item',
  templateUrl: './lego-item.component.html',
  styleUrls: ['./lego-item.component.css']
})
export class LegoItemComponent {

  @Input() lego: Lego;
}
