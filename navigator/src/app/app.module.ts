import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavegaComponent } from './navega/navega.component';
import { BuscadorDeAccidentesComponent } from './buscador-de-accidentes/buscador-de-accidentes.component';
import { PrecioCombustibleComponent } from './inicio/precio-combustible/precio-combustible.component';
import { GraficoComponent } from './navega/grafico/grafico.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavegaComponent,
    BuscadorDeAccidentesComponent,
    PrecioCombustibleComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
