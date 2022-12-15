import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Carretera } from 'src/interfaces/carretera';
import { CarreteraService } from 'src/services/carretera.service';

@Component({
  selector: 'app-navega',
  templateUrl: './navega.component.html',
  styleUrls: ['./navega.component.css']
})
export class NavegaComponent {
  busqueda = new FormControl();
  accidente: Carretera = { advertencia: "", carretera: "", descripcion: "", kmDestino: "", kmOrigen: "", sentido: "" };


  constructor(private carreteraService: CarreteraService) {

  }
  buscarCarretera() {
    if (this.busqueda.value == "") return;
    this.carreteraService.buscarAccidente(this.busqueda.value).then((value) => {
      this.accidente = value ?? { advertencia: "", carretera: "Carretera no encontrada", descripcion: "", kmDestino: "", kmOrigen: "", sentido: "" };
    });
  }
}

