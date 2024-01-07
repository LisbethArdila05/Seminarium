import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMenuComponent } from './shared-menu/shared-menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';



@NgModule({
  declarations: [SharedMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[SharedMenuComponent]
})
export class SharedModuleModule { }


