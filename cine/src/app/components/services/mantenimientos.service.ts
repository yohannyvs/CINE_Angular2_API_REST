import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MantenimientosService
{
  aciento:number;
  cedula:string;
  presentacion:number;
  acientos:string [] = [];

  constructor( private http:Http ) { }

  compra()
  {

  }

  acientos_ocupados(presentacion)
  {
    let url= "http://localhost:53344/Cine_api_rest_spring/acientos?presentacion="+ presentacion +"";

    return this.http.get( url )
                    .map( res => {
                        console.log(res);
                        this.acientos = res.json();
                        console.log(this.acientos)
                    } )
  }

}
