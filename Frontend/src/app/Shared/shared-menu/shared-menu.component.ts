import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ServiceMenuService } from 'src/app/service/service-menu.service';


@Component({
  selector: 'app-shared-menu',
  templateUrl: './shared-menu.component.html',
  styleUrls: ['./shared-menu.component.scss'],
})
export class SharedMenuComponent  implements OnInit {

  isClose = true

  constructor(private router: Router, private serviceM: ServiceMenuService) { }
  ngOnInit() {}
 
  toggleMene(){
    this.isClose = !this.isClose
  }
  toggleMenu() {
    this.serviceM.toggleMenu();
  }
}
