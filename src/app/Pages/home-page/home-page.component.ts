import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';
import { StateService } from 'src/app/Services/state.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public _state:StateService , public _rest: RestService) { }

  ngOnInit(): void {
    this._state.recipe;
  }

}
