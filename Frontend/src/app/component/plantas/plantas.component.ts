import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.scss'],
})
export class PlantasComponent  implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {}
 
}
