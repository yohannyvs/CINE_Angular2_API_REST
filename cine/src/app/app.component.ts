import { Component } from '@angular/core';
import {LoginService} from './components/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent
{
  constructor( public ls:LoginService )
  {

  }
}
