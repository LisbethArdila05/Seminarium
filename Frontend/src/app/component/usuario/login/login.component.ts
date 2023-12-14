import { Component, OnInit } from '@angular/core';

import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceUserComponent } from 'src/app/service/service-user.component';

import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  LoginUser = this.fb.group({
    user: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  get getLuser(): FormControl{
    return this.LoginUser.get('user') as FormControl
  }

  get getLpassword(): FormControl{
    return this.LoginUser.get('password') as FormControl
  }

  constructor(private fb: FormBuilder, private serviceu: ServiceUserComponent, private router: Router) {}

  ngOnInit() {}

  LoginU(){
    const data = this.LoginUser.value as FormGroup
    this.serviceu.login(data).subscribe((res:any) => {
      Swal.fire({
        title: "Registro de usuario",
        text: "Registro exitoso",
        icon: "success"
      });
      this.router.navigate([''])

      console.log('exitoso')
    },
    (error: any) =>{
      console.log('no exitoso', error.message) 
    }
    )
  }

}
