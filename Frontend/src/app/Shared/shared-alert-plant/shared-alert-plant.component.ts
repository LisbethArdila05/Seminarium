import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-alert-plant',
  templateUrl: './shared-alert-plant.component.html',
  styleUrls: ['./shared-alert-plant.component.scss'],
})
export class SharedAlertPlantComponent  implements OnInit {
  @Output() aceptarClick = new EventEmitter<void>();
  @Output() registrarClick = new EventEmitter<void>();
  @Output() errorClick = new EventEmitter<void>();
  @Output() RequestSi = new EventEmitter<void>();
  @Output() RequestNo= new EventEmitter<void>();

  @Input() tipoalerta: string = '';

  constructor() { }
  ngOnInit() {}
  
  onAceptarClick() {
    if(this.tipoalerta === 'bienvenido'){
      this.aceptarClick.emit();
    }
  }
  OnErrorClick(){
    if(this.tipoalerta === 'error'){
      this.errorClick.emit();
    }
  }
  /*Registros de plantas, ventas, etc*/ 
  onRegistrarClick(){
    if(this.tipoalerta === 'registroexitoso'){
      this.registrarClick.emit();
    }
  }
  onRequest(accion: string){
    if(this.tipoalerta === 'requestAlert'){
      if(accion === 'si'){
        this.RequestSi.emit();
      }else if(accion ==='no'){
        this.RequestNo.emit();
      }
    }
  }
}
  