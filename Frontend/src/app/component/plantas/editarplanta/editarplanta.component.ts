import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ServicePlantComponent } from 'src/app/service/service-plant.component';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-editarplanta',
  templateUrl: './editarplanta.component.html',
  styleUrls: ['./editarplanta.component.scss'],
})
export class EditarplantaComponent  implements OnInit {

  idPlant: number = 0;

  RegistroExito: boolean = false;
  RegistroError: boolean = false
  Request: boolean = false

  formPathPlanta = this.fb.group({
    nombre: ['', Validators.required],
    precioU: ['', Validators.required],
    PrecioM: ['', Validators.required]
  })

  get getNombre(): FormControl{
    return this.formPathPlanta.get('nombre') as FormControl
  }
  get getPrecioU(): FormControl{
    return this.formPathPlanta.get('precioU') as FormControl
  }
  get getPrecioM(): FormControl{
    return this.formPathPlanta.get('PrecioM') as FormControl
 }

  constructor(private servicep: ServicePlantComponent, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(params =>{
      this.idPlant = +params['id']
    })
  } 

  editar_planta(){
    const data = this.formPathPlanta.value
    this.servicep.updateplanta(this.idPlant, data).subscribe((res:any) => {
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


