import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-historico-element',
  templateUrl: './historico-element.component.html',
  styleUrls: ['./historico-element.component.css']
})
export class HistoricoElementComponent {
  @Input() carretera: string = "Busca la carretera";
  @Input() autonomia: string | undefined;
  @Input() causa: string | undefined;
  @Input() nivel: string | undefined;
  @Input() tipo: string | undefined;
}
