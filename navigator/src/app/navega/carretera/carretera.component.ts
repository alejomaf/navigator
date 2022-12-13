import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carretera',
  templateUrl: './carretera.component.html',
  styleUrls: ['./carretera.component.css']
})
export class CarreteraComponent {
  @Input() nombre_carretera: string = "Busca la carretera";
  @Input() congestion: string | undefined;
  @Input() accidentes: string | undefined;
}
