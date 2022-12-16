import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carretera',
  templateUrl: './carretera.component.html',
  styleUrls: ['./carretera.component.css']
})
export class CarreteraComponent {
  @Input() carretera: string = "Busca la carretera";
  @Input() kmOrigen: string | undefined;
  @Input() kmDestino: string | undefined;
  @Input() sentido: string | undefined;
  @Input() descripcion: string | undefined;
  @Input() advertencia: string | undefined;
  @Input() tweets: string | undefined;
}
