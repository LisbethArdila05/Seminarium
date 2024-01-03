import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantasComponent } from './plantas/plantas.component';
import { CrearplantaComponent } from './plantas/crearplanta/crearplanta.component';
import { EditarplantaComponent } from './plantas/editarplanta/editarplanta.component';


const routes: Routes = [
  {
    path:'planta',
    component: PlantasComponent
  },
  {
    path:'crearplanta',
    component: CrearplantaComponent
  },
  {
    path:'editarplanta/:id',
    component: EditarplantaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantasRoutingModule { }

export const plantaRouting = [PlantasComponent]
export const CrearPRouting = [CrearplantaComponent]
export const EditarPRouting = [EditarplantaComponent]
