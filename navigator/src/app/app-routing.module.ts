import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccidentesComponent } from './accidentes/accidentes.component';
import { AppComponent } from './app.component';
import { HistoricoComponent } from './historico/historico.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavegaComponent } from './navega/navega.component';

const routes: Routes = [{
  path: '', component: AppComponent, children: [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'navega', component: NavegaComponent },
    { path: 'accidentes', component: AccidentesComponent },
    { path: 'historico', component: HistoricoComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
