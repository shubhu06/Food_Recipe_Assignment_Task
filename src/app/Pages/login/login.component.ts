import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_user: FormGroup;
  constructor(public router: Router , private _rest:RestService) {
    this.login_user = new FormGroup({
      user_id: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }
  login() {

    console.log(this.login_user.value)
    if (this.login_user.valid) {
      this._rest.login(this.login_user.value).subscribe((result: any) => {
        localStorage.setItem('token', result['data']);
        this.router.navigate(['/dashboard']);
        alert("login Success")

      }, (err) => {
        console.log(err)
        alert("invalid Credintial")
      });
    } else {
      alert("invalid Form")
    }
  }
}
