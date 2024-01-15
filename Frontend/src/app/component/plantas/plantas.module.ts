import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarCRouting, PlantasRoutingModule } from './plantas-routing.module';
import { plantaRouting } from './plantas-routing.module';
import { CrearPRouting } from './plantas-routing.module';
import { EditarPRouting } from './plantas-routing.module';
import { IonicModule } from '@ionic/angular';
import { DataTablesModule} from 'angular-datatables';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { PipePlantsPipe } from './pipe/plantas.pipe';
import { SharedModuleModule } from '../../Shared/shared-module.module';



@NgModule({
  declarations: [plantaRouting, CrearPRouting, EditarPRouting, EditarCRouting, PipePlantsPipe],
  imports: [
    CommonModule,
    PlantasRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    NgxPaginationModule,
    SharedModuleModule
    
  ]
})
export class PlantasModule { } 
