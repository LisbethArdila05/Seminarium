import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginRouter } from './usuario-routing.module';
import { RegistroRouter } from './usuario-routing.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegistroRouter, LoginRouter],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
