import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ServicePlantComponent } from 'src/app/service/service-plant.component';

@Component({
  selector: 'app-editar-cantidad',
  templateUrl: './editar-cantidad.component.html',
  styleUrls: ['./editar-cantidad.component.scss'],
})
export class EditarCantidadComponent  implements OnInit {

  idPlantCantidad: number = 0;
  RegistroExito: boolean = false;
  RegistroError: boolean = false
  Request: boolean = false

  formPutCantidad = this.fb.group({
    CantidadNueva: ['', Validators.required]
  })

  get getNCantidad(): FormControl{
    return this.formPutCantidad.get('CantidadNueva') as FormControl
  }

  constructor(private fb: FormBuilder,  private router: Router, private route: ActivatedRoute, private serviceP: ServicePlantComponent) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.idPlantCantidad = +params['id']
    })
  }
  editar_Cantidad(){
    const data = this.formPutCantidad.value
    this.serviceP.updateCantidad(this.idPlantCantidad, data).subscribe((res:any) => {
      console.log('exitoso')
    },(error:any)=>{
      console.log(error)
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
