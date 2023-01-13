import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url = 'http://localhost:2001';

  constructor(private _http: HttpClient) { }

  login(users: any) {
    return this._http.post(this.url + '/login', users)
  }
  Get_Recipes() {
    return this._http.get(this.url + '/recipes')
  }
  Get_details(id:any) {
    return this._http.get(this.url + '/details/'+id);
  }
  Get_Detailed_Step(id:any) {
    return this._http.get(this.url + '/detailed_step' , id)
  }


}
