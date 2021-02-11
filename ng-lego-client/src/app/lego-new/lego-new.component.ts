import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Lego } from '../shared/lego';
import { ActivatedRoute, Router } from '@angular/router';
import { LegoService } from '../shared/lego.service';

@Component({
  selector: 'app-lego-new',
  templateUrl: './lego-new.component.html',
  styleUrls: ['./lego-new.component.css']
})
export class LegoNewComponent implements OnInit {

  pageLego = 'Nuevo Producto LEGO';
  errorMessage: string;
  legoForm: FormGroup;

  legoId:number;
  lego: Lego;

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private legoService: LegoService) {  }

  ngOnInit(): void {
    this.legoForm = this.fb.group({
      paquete: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],
      modelo: new FormControl(""),
      fechaCreacion: new FormControl(""),
      descripcion: new FormControl (""),
      shortDescription: new FormControl (""),
      tiendas: new FormControl (""),
      precio: new FormControl (""),
    });

    // Read the product Id from the route parameter
    this.legoId = parseInt(this.activatedroute.snapshot.params['legoId']);
  }

  saveLego(): void {
    if (this.legoForm.valid) {
      if (this.legoForm.dirty) {
        this.lego = this.legoForm.value;
        this.lego.id = this.legoId;
        
        this.legoService.createLego(this.lego)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
        
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.legoForm.reset();
    this.router.navigate(['']);
  }
  
}
