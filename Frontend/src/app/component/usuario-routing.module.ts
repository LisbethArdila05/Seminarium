import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './usuario/registro/registro.component';
import { LoginComponent } from './usuario/login/login.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path:'', 
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login', 
    component: LoginComponent, 
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
  
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

export const RegistroRouter = [RegistroComponent]
export const LoginRouter = [LoginComponent]
