import {Component, OnInit} from '@angular/core';
import {LegoService} from '..//shared/lego.service';
import {Lego} from '..//shared/lego';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lego-detail',
  templateUrl: './lego-detail.component.html',
  styleUrls: ['./lego-detail.component.css']
})
export class LegoDetailComponent implements OnInit {

  lego: Lego;
  legoId: number;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private legoService: LegoService) {}

  ngOnInit() {
    this.legoId = parseInt(this.activatedroute.snapshot.params['legoId']);
    this.legoService.getLegoById(this.legoId).subscribe(
      (data: Lego) => this.lego = data
    );
  }
  goEdit():void{
    this.router.navigate(['/legos', this.legoId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }

}
