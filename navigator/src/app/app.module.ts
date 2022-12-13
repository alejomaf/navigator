import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavegaComponent } from './navega/navega.component';
import { PrecioCombustibleComponent } from './inicio/precio-combustible/precio-combustible.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarreteraComponent } from './navega/carretera/carretera.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavegaComponent,
    PrecioCombustibleComponent,
    CarreteraComponent,
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
