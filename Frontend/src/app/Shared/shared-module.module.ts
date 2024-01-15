import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMenuComponent } from './shared-menu/shared-menu.component';
import { SharedAlertPlantComponent } from './shared-alert-plant/shared-alert-plant.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';



@NgModule({
  declarations: [SharedMenuComponent, SharedAlertPlantComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[SharedMenuComponent, SharedAlertPlantComponent]
})
export class SharedModuleModule { }


