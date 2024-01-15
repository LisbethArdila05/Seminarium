import { Component, OnInit} from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ServicePlantComponent } from 'src/app/service/service-plant.component';
import { plant } from './model/interface.plant';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.scss'],
})
export class PlantasComponent  implements OnInit {

  dtOptions: DataTables.Settings = {};
  listplant: plant[] = [];
  filtro: string = "";
  p: number = 1;
  pagesize:number = 10;

  constructor( private router: Router, private servicep: ServicePlantComponent) { }

  ngOnInit() {

    this.dtOptions = {
      columns: [
        { title: 'Nombre', data: 'nombre' },
        { title: 'Cantidad', data: 'cantidad' },
        { title: 'Preciou', data: 'precioU' },
        { title: 'Preciom', data: 'PrecioM' },
        { title: 'Acción', data: 'accion' },
        // Agrega más columnas según tus datos
      ],
      data: this.listplant, // Asigna el array de plantas a la propiedad data
      paging: true,
      searching: true,
    }
    this.plantas() 
  }
  plantas(){
    this.servicep.getPlantas().subscribe((res:any) => {
      for(let plants of res.plantas){
        this.listplant.push(plants)
      }
      console.log(this.filtro)
    },(error) => {
      console.log(error)
    }) 
  }
  RedirecEditar(id: any) {
    this.router.navigate(['/editarplanta', id])
  }
  RedirecEditarC(idCantidad: any){
    this.router.navigate(['/editarcantidad',idCantidad])
  }
  handlePageChange(event:any) {
    this.p = event;
  }
}
 