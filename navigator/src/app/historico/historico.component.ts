import { Component } from '@angular/core';
import { Carretera } from 'src/interfaces/carretera';
import { Historico } from 'src/interfaces/historico';
import { CarreteraService } from 'src/services/carretera.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {
  historicos: Historico[] | null | undefined;

  constructor(private carreteraService: CarreteraService) {
    carreteraService.getHistoricoAccidentes().then((value) => {
      this.historicos = value;
    });
  }
}
