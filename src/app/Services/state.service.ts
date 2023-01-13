import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  recipe: any[] = [];
  details:any[]=[];

  constructor(private _rest: RestService) { }

  getRecipe() {
    this._rest.Get_Recipes().subscribe((resp: any) => {
      this.recipe = resp.data;
      console.log(this.recipe)
    }, (err) => {
      alert(err.msg);
    });
  
  }

  getDetails(id:any) {
    this._rest.Get_details(id).subscribe((resp: any) => {
      this.details = resp.data;
      console.log(this.details)
    }, (err) => {
      alert(err.msg);
    });
  
  }


}
