import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Lego } from '../shared/lego';
import { LegoService } from '../shared/lego.service';

@Component({
  templateUrl: './lego-edit.component.html'
})
export class LegoEditComponent implements OnInit{

  pageLego = 'Lego Edit';
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
      modelo: '',
      fechaCreacion: '',
      descripcion: '',
      shortDescription: '',
      tiendas: '',
      precio: '',
      imagen:'',
    });

    this.legoId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getLego(this.legoId);
  }

  getLego(id: number): void {
    this.legoService.getLegoById(id)
      .subscribe(
        (lego: Lego) => this.displayLego(lego),
        (error: any) => this.errorMessage = <any>error
      );
  }

  displayLego(lego: Lego): void {
    if (this.legoForm) {
      this.legoForm.reset();
    }
    this.lego = lego;
    this.pageLego = `Edición del Paquete Lego:${this.lego.paquete} ${this.lego.modelo}`;

    // Update the data on the form
    this.legoForm.patchValue({
      modelo: this.lego.modelo,
      paquete: this.lego.paquete,
      fechaCreacion: this.lego.fechaCreacion,
      precio: this.lego.precio,
      descripcion: this.lego.descripcion,
      shortDescription: this.lego.shortDescription,
      tiendas: this.lego.tiendas,
      imagen: this.lego.imagen,
    });
  }

  deleteLego(): void {
    if (this.lego.id === 0) {
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the lego to: ${this.lego.paquete} ${this.lego.modelo}?`)) {
        this.legoService.deleteLego(this.lego.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }


  saveLego(): void {
    if (this.legoForm.valid) {
      if (this.legoForm.dirty) {
        this.lego = this.legoForm.value;
        this.lego.id = this.legoId;
        
        this.legoService.updateLego(this.lego)
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
