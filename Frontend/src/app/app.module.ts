import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';

import { UsuarioModule } from './component/usuario/usuario.module';
import { PrincipalModule } from './component/principal/principal.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlantasModule } from './component/plantas/plantas.module';

import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModuleModule } from './Shared/shared-module.module';
import { VentasModule } from './component/ventas/ventas.module';

import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule, HttpClientModule ,
    ReactiveFormsModule, NgxPaginationModule, 
    UsuarioModule, PrincipalModule, 
    PlantasModule, VentasModule, 
    DataTablesModule, SharedModuleModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, 
              { provide: JWT_OPTIONS, useValue: JWT_OPTIONS}, 
              JwtHelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
