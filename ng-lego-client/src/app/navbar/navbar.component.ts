import { Component, OnInit } from '@angular/core';
import { LegoService } from '../shared/lego.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id : any;

  constructor(private legoService: LegoService, private router: Router) { }

  ngOnInit() {
  }

  newLego(){
      this.legoService.getMaxLegoId().subscribe(
        data => this.router.navigate(['/legos', data, 'new'])
      );
      

  }

}
