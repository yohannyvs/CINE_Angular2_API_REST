
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { AcientosComponent } from './components/acientos/acientos.component';
import { CompraComponent } from './components/compra/compra.component';
import { PagoComponent } from './components/pago/pago.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: 'aciento/:id', component: AcientosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );
