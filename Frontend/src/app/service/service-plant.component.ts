import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable  } from "rxjs";
import { FormGroup } from "@angular/forms";

import { plant, CantidadStock } from '../component/plantas/model/interface.plant';


@Injectable({
  providedIn:"root"
}) 

export class ServicePlantComponent{

  private url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  Postplanta(formPost: FormGroup):Observable<{message:string;}>{
    return this.http.post<{message:string;}>(`${this.url}/planta`, formPost)
  }
  getPlantas():Observable<plant>{
    return this.http.get<plant>(`${this.url}/planta`) 
  } 
  getIdplantas(nombre:string):Observable<plant>{
    const params = {nombre: nombre}
    return this.http.post<plant>(`${this.url}/planta/byname`, params)
  }
  updateplanta(id:number, data:any):Observable<plant>{
    return this.http.patch<plant>(`${this.url}/planta/${id}`,data)
  }
  updateCantidad(id:number, data:any):Observable<CantidadStock>{
    return this.http.put<CantidadStock>(`${this.url}/planta/updateCantidad/${id}`,data)
  }

}
