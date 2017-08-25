import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService
{

  constructor( private http:Http ) { }

  rs:number;

  login(user:String, pass:String)
  {
    let url= "http://localhost:53344/Cine_api_rest_spring/login?user="+user+"&pass="+pass+"";

    return this.http.get( url )
                      .map( res => {
                          console.log(res);
                          this.rs = res.json();
                          console.log(this.rs)
                      } );
  }
}
