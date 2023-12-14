import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

import { ServiceUserComponent } from 'src/app/service/service-user.component';
import Swal from 'sweetalert2'

// or via CommonJS
import { modeluser } from '../model/interface.user';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})

export class RegistroComponent  implements OnInit {

  formUsuario = this.fb.group({
    user: ['', Validators.required],
    mail: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8)]]
  })

    get getmail(): FormControl{
      return this.formUsuario.get('mail') as FormControl
    }
    get getuser(): FormControl{
      return this.formUsuario.get('user') as FormControl
    }
    get getpassword(): FormControl{
      return this.formUsuario.get('password') as FormControl
   }
  constructor(private serviceU: ServiceUserComponent, private fb: FormBuilder) {}

  ngOnInit() {}

  crear(){
    const data = this.formUsuario.value as FormGroup;
    this.serviceU.registro(data).subscribe((res: any) =>{
      
      console.log ('exitoso')
      Swal.fire({
        title: "Registro de usuario",
        text: "Registro exitoso",
        icon: "success"
      });
    }, 
    (error: any) =>{
      console.log('no exitoso', error.message)
    }
    )
    
  }
}

  

 

