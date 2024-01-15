import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';



@Component({
  selector: 'app-shared-menu',
  templateUrl: './shared-menu.component.html',
  styleUrls: ['./shared-menu.component.scss'],
})
export class SharedMenuComponent  implements OnInit {

  isClose = true

  constructor(private router: Router) { }
  ngOnInit() {}
 

}
