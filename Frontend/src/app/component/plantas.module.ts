import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantasRoutingModule } from './plantas-routing.module';
import { plantaRouting } from './plantas-routing.module';
import { CrearPRouting } from './plantas-routing.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [plantaRouting, CrearPRouting],
  imports: [
    CommonModule,
    PlantasRoutingModule,
    IonicModule
  ]
})
export class PlantasModule { } 
