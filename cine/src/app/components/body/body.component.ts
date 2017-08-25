import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit {

  constructor( private _peliculaservice:PeliculasService) { }

  ngOnInit()
  {
    this._peliculaservice.getpeliculas().subscribe();
  }

}
