import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//routes
import { APP_ROUTING } from './app.routes'

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/shared/login/login.component';
import { AcientosComponent } from './components/acientos/acientos.component';
import { CompraComponent } from './components/compra/compra.component';
import { PagoComponent } from './components/pago/pago.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

//Services
import { PeliculasService } from './components/services/peliculas.service';
import { LoginService } from './components/services/login.service';
import { MantenimientosService } from './components/services/mantenimientos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    LoginComponent,
    AcientosComponent,
    CompraComponent,
    PagoComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService,
    LoginService,
    MantenimientosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
