import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ServiceUserComponent } from 'src/app/service/service-user.component';
import { RouterModule, Router } from '@angular/router';


// or via CommonJS
import { modeluser } from '../model/interface.user';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})

export class RegistroComponent  implements OnInit {

  mostrarAlerta: boolean = false
  mostrarError: boolean = false

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
  constructor(private serviceU: ServiceUserComponent, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  crear(){
    const data = this.formUsuario.value as FormGroup;
    this.serviceU.registro(data).subscribe((res: any) =>{
      this.mostrarAlerta = true;
      console.log ('exitoso')
    }, 
    (error: any) =>{
      this.mostrarError = true
      console.log('no exitoso', error.message)
    })
  }
  onAceptarAlerta() {
    this.router.navigateByUrl('/PrincipalComponent');
  }
  onCloseAlerta(){
    this.mostrarError = false
  }
}

  

 

