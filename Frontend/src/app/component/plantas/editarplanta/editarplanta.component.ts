import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ServicePlantComponent } from 'src/app/service/service-plant.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editarplanta',
  templateUrl: './editarplanta.component.html',
  styleUrls: ['./editarplanta.component.scss'],
})
export class EditarplantaComponent  implements OnInit {

  idPlant: number = 0;

  formPathPlanta = this.fb.group({
    nombre: ['', Validators.required],
    precio: ['', Validators.required],
    cantidad: ['', Validators.required]
  })

  get getNombre(): FormControl{
    return this.formPathPlanta.get('nombre') as FormControl
  }
  get getPrecio(): FormControl{
    return this.formPathPlanta.get('precio') as FormControl
  }
  get getCantidad(): FormControl{
    return this.formPathPlanta.get('cantidad') as FormControl
 }

  constructor(private servicep: ServicePlantComponent, private fb: FormBuilder, private route: ActivatedRoute) { }

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
    }
    ) 
  }

  
}
