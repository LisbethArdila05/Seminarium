import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

import { ServicePlantComponent } from 'src/app/service/service-plant.component';

@Component({
  selector: 'app-crearplanta',
  templateUrl: './crearplanta.component.html',
  styleUrls: ['./crearplanta.component.scss'],
})
export class CrearplantaComponent  implements OnInit {

  formPostPlanta = this.fb.group({
    nombre: ['', Validators.required],
    precio: ['', Validators.required],
    cantidad: ['', Validators.required],
    tamano: ['', Validators.required]
  })

  get getNombre(): FormControl{
    return this.formPostPlanta.get('nombre') as FormControl
  }
  get getPrecio(): FormControl{
    return this.formPostPlanta.get('precio') as FormControl
  }
  get getCantidad(): FormControl{
    return this.formPostPlanta.get('cantidad') as FormControl
 }
  get getTamano(): FormControl{
    return this.formPostPlanta.get('tamano') as FormControl
  }

  constructor(private servicep: ServicePlantComponent, private fb: FormBuilder) { }

  ngOnInit() {}

  crear_planta(){
    const data = this.formPostPlanta.value as FormGroup;
    this.servicep.Postplanta(data).subscribe((res:any) =>{
      console.log('existos')
    },
    (error: any)=>{
      console.log('no exitoso', error.message)
    }
    )

  }

}
