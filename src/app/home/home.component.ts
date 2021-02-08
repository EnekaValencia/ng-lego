import {Component, OnInit} from '@angular/core';
import {Lego} from '../shared/lego';
import {LegoService} from '../shared/lego.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  legos: Lego[]=[];
  constructor(private legoService: LegoService) { }

  ngOnInit() {
   this.legoService.getLegos().subscribe(
    (data: Lego[]) => this.legos = data
   );
  }
}
