import { Component } from '@angular/core';
import { Carretera } from 'src/interfaces/carretera';
import { CarreteraService } from 'src/services/carretera.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {
  accidentes: Carretera[] | null | undefined;

  constructor(private carreteraService: CarreteraService) {
    carreteraService.getHistoricoAccidentes().then((value) => {
      this.accidentes = value;
    });
  }
}
