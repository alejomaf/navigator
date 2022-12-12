import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BuscadorDeAccidentesComponent } from './buscador-de-accidentes/buscador-de-accidentes.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavegaComponent } from './navega/navega.component';

const routes: Routes = [{path: '', component: AppComponent, children: [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'navega', component: NavegaComponent},
  {path: 'buscador-de-accidentes', component: BuscadorDeAccidentesComponent},
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
