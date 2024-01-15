import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

import { ServicePlantComponent } from 'src/app/service/service-plant.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-crearplanta',
  templateUrl: './crearplanta.component.html',
  styleUrls: ['./crearplanta.component.scss'],
})
export class CrearplantaComponent  implements OnInit {

  RegistroExito: boolean = false;
  RegistroError: boolean = false
  Request: boolean = false

  formPostPlanta = this.fb.group({
    nombre: ['', Validators.required],
    precioU: ['', Validators.required],
    PrecioM: ['', Validators.required],
    cantidad: ['', Validators.required]
  })

  get getNombre(): FormControl{
    return this.formPostPlanta.get('nombre') as FormControl
  }
  get getPreciou(): FormControl{
    return this.formPostPlanta.get('precioU') as FormControl
  }
  get getPreciom(): FormControl{
    return this.formPostPlanta.get('PrecioM') as FormControl
  }
  get getCantidad(): FormControl{
    return this.formPostPlanta.get('cantidad') as FormControl 
  }
  constructor(private servicep: ServicePlantComponent, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {}

  crear_planta(){
    const data = this.formPostPlanta.value as FormGroup;
    this.servicep.Postplanta(data).subscribe((res:any) =>{
      this.RegistroExito = true;
      console.log('existos')
    },
    (error: any)=>{
      this.RegistroError = true
      console.log('no exitoso', error.message)
    })
  }
  onRegistroExito(){
    this.router.navigateByUrl('/planta');
  }

  onRegistroError(){
    this.RegistroError = false
  }

  onAlertSi(){
    this.router.navigateByUrl('/planta');
    this.Request = false
   
  }
  onAlertNo(){
    this.Request = false
  }
}
