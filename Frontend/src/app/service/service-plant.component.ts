import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable  } from "rxjs";
import { FormGroup } from "@angular/forms";


@Injectable({
  providedIn:"root"
})

export class ServicePlantComponent{

  private url = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  

}
