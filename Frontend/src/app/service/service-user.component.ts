import { Injectable } from "@angular/core";

import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { modeluser } from "../component/usuario/model/interface.user";
import { environment } from "src/environments/environment";
import { FormGroup } from "@angular/forms";


@Injectable({
  providedIn: "root"
})

export class ServiceUserComponent {

  private url = environment.baseUrl;
 
  constructor(private http: HttpClient) {}

  registro(forms:FormGroup):Observable<{message:string;}>{
    return this.http.post<{message:string;}>(`${this.url}/usuario`, forms )
  }
  login(formLogin:FormGroup):Observable<{message:string}>{
    return this.http.post<{message:string}>(`${this.url}/usuario/login`, formLogin)
  }
}
