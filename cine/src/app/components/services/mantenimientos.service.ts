import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MantenimientosService
{
  aciento:number;
  acientos:string [] = [];
  compras:number;

  constructor( private http:Http ) { }

  compra(id_presentacion, aciento, usuario)
  {
    let url= "http://localhost:53344/Cine_api_rest_spring/compra?admin=0&id_present="+ id_presentacion +"&aciento="+ aciento +"&cedula="+usuario+"";

    return this.http.get( url )
                    .map( res => {
                      console.log(res);
                      this.compras = res.json()
                      console.log(this.compras)
                    } )
  }

  acientos_ocupados(presentacion:number)
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
