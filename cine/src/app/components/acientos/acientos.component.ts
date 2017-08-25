import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MantenimientosService } from '../services/mantenimientos.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-acientos',
  templateUrl: './acientos.component.html'
})
export class AcientosComponent implements OnInit{

  presentacion;
  a;
  res;
  acientos:string[] =[];
  usuario = this.ls.user;

  constructor( private ms:MantenimientosService, private router:ActivatedRoute, private ls:LoginService )
  {
    this.router.params.subscribe( parametro => { this.presentacion = parametro; } );

    this.ms.acientos_ocupados(parseInt(this.presentacion.id.toString())).subscribe();

    ls.user;

  }

  ngOnInit()
  {
    console.log(this.acientos);
    this.acientos = this.ms.acientos;
    this.ocupados();
  }

  aciento(x)
  {
    this.a = document.getElementById(x)
    console.log(this.a.id);
    this.a.style.backgroundColor = "blue";
  }

  compra()
  {
    let res;
    res = this.ms.compra( parseInt(this.presentacion.id.toString()), parseInt(this.a.id.toString()), this.usuario ).subscribe();

    if(res != 1)
    {
      alert("Boleto Comprado con Exito");
    }
    else
    {
      alert("Error");
    }
  }

  ocupados()
  {
      let btn1 = document.getElementById('1');
      let btn2 = document.getElementById('2');
      let btn3 = document.getElementById('3');
      let btn4 = document.getElementById('4');
      let btn5 = document.getElementById('5');
      let btn6 = document.getElementById('6');
      let btn7 = document.getElementById('7');
      let btn8 = document.getElementById('8');
      let btn9 = document.getElementById('9');
      let btn10 = document.getElementById('10');
      let btn11 = document.getElementById('11');
      let btn12 = document.getElementById('12');
      let btn13 = document.getElementById('13');
      let btn14 = document.getElementById('14');
      let btn15 = document.getElementById('15');
      let btn16 = document.getElementById('16');
      let btn17 = document.getElementById('17');
      let btn18 = document.getElementById('18');
      let btn19 = document.getElementById('19');
      let btn20 = document.getElementById('10');

      if(this.acientos[0] != "no")
      {
        for( let i of this.acientos )
        {
          console.log(this.ms.acientos);

          if( btn1.id == i.toString() )
          {
            btn1.style.backgroundColor = "red";
            (<HTMLInputElement> btn1).disabled = true;
          }

          if( btn2.id == i.toString() )
          {
            (<HTMLInputElement> btn2).disabled = true;
            btn2.style.backgroundColor = "red";
          }

          if( btn3.id == i.toString() )
          {
            (<HTMLInputElement> btn3).disabled = true;
            btn3.style.backgroundColor = "red";
          }

          if( btn4.id == i.toString() )
          {
            (<HTMLInputElement> btn4).disabled = true;
            btn4.style.backgroundColor = "red";
          }

          if( btn5.id == i.toString() )
          {
            (<HTMLInputElement> btn5).disabled = true;
            btn5.style.backgroundColor = "red";
          }

          if( btn6.id == i.toString() )
          {
            (<HTMLInputElement> btn6).disabled = true;
            btn6.style.backgroundColor = "red";
          }

          if( btn7.id == i.toString() )
          {
            (<HTMLInputElement> btn7).disabled = true;
            btn7.style.backgroundColor = "red";
          }

          if( btn8.id == i.toString() )
          {
            (<HTMLInputElement> btn8).disabled = true;
            btn8.style.backgroundColor = "red";
          }

          if( btn9.id == i.toString() )
          {
            (<HTMLInputElement> btn9).disabled = true;
            btn9.style.backgroundColor = "red";
          }

          if( btn10.id == i.toString() )
          {
            btn10.style.backgroundColor = "red";
            (<HTMLInputElement> btn10).disabled = true;
          }

          if( btn11.id == i.toString() )
          {
            btn11.style.backgroundColor = "red";
            (<HTMLInputElement> btn11).disabled = true;
          }

          if( btn12.id == i.toString() )
          {
            btn12.style.backgroundColor = "red";
            (<HTMLInputElement> btn12).disabled = true;
          }

          if( btn13.id == i.toString() )
          {
            btn13.style.backgroundColor = "red";
            (<HTMLInputElement> btn13).disabled = true;
          }

          if( btn14.id == i.toString() )
          {
            btn14.style.backgroundColor = "red";
            (<HTMLInputElement> btn14).disabled = true;
          }

          if( btn15.id == i.toString() )
          {
            btn15.style.backgroundColor = "red";
            (<HTMLInputElement> btn15).disabled = true;
          }

          if( btn16.id == i.toString() )
          {
            btn16.style.backgroundColor = "red";
            (<HTMLInputElement> btn16).disabled = true;
          }

          if( btn17.id == i.toString() )
          {
            btn17.style.backgroundColor = "red";
            (<HTMLInputElement> btn17).disabled = true;
          }

          if( btn18.id == i.toString() )
          {
            btn18.style.backgroundColor = "red";
            (<HTMLInputElement> btn18).disabled = true;
          }

          if( btn19.id == i.toString() )
          {
            btn19.style.backgroundColor = "red";
            (<HTMLInputElement> btn19).disabled = true;
          }

          if( btn20.id == i.toString() )
          {
            btn20.style.backgroundColor = "red";
            (<HTMLInputElement> btn20).disabled = true;
          }
        }
      }
      else
      {
        this.acientos=[];
      }

  }
}
