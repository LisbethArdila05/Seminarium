import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantasComponent } from './plantas.component';
import { CrearplantaComponent } from './crearplanta/crearplanta.component';
import { EditarplantaComponent } from './editarplanta/editarplanta.component';
import { EditarCantidadComponent } from './editar-cantidad/editar-cantidad.component';

const routes: Routes = [
  {
    path:'planta',
    component: PlantasComponent,
  },
  {
    path:'crearplanta',
    component: CrearplantaComponent,
  },
  {
    path:'editarplanta/:id',
    component: EditarplantaComponent,
  },
  {
    path:'editarcantidad/:id',
    component: EditarCantidadComponent
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
export const EditarCRouting = [EditarCantidadComponent]
