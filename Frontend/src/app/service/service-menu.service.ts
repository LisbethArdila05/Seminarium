import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceMenuService {
  private isMenuOpenSubject = new BehaviorSubject<boolean>(false);

  constructor() { }
  
  isMenuOpen$ = this.isMenuOpenSubject.asObservable();

  toggleMenu() {
    this.isMenuOpenSubject.next(!this.isMenuOpenSubject.value);
  }
}
