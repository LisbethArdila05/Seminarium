import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
const routes: Routes = [
  {
    path: 'PrincipalComponent',
    component: PrincipalComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }

export const principalRouting = [PrincipalComponent]
