import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentaRouting } from './ventas-routing.module';
import { SharedModuleModule } from 'src/app/Shared/shared-module.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [VentaRouting],
  imports: [
    CommonModule,
    VentasRoutingModule,
    SharedModuleModule,
    IonicModule
  ]
})
export class VentasModule { }
