import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/Services/state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _state: StateService) { }

  ngOnInit(): void {
    this._state.getRecipe();
  }

}
