import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor( private _loginService:LoginService) { }

  user:string;
  pass:string;

  ngOnInit() {

  }

  ingresar()
  {
    console.log(this.user, this.pass);
    this._loginService.login(this.user, this.pass).subscribe();
  }

}
