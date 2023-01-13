import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { StateService } from 'src/app/Services/state.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any;

  constructor(public _state :StateService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => this.id = data['id']);
    this._state.getDetails(this.id);
  }

}
