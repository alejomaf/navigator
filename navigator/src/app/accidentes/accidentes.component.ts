import { Component } from '@angular/core';
import { Carretera } from 'src/interfaces/carretera';
import { CarreteraService } from 'src/services/carretera.service';

@Component({
  selector: 'app-accidentes',
  templateUrl: './accidentes.component.html',
  styleUrls: ['./accidentes.component.css']
})
export class AccidentesComponent {
  accidentes: Carretera[] | null | undefined;

  constructor(private carreteraService: CarreteraService) {
    carreteraService.getAccidentes().then((value) => {
      this.accidentes = value;
    });
  }
}
