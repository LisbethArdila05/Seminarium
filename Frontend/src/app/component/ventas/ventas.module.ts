import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentaRouting } from './ventas-routing.module';
import { SharedModuleModule } from 'src/app/Shared/shared-module.module';


@NgModule({
  declarations: [VentaRouting],
  imports: [
    CommonModule,
    VentasRoutingModule,
    SharedModuleModule
  ]
})
export class VentasModule { }
