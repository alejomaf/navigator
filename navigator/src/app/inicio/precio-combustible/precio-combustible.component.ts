import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-precio-combustible',
  templateUrl: './precio-combustible.component.html',
  styleUrls: ['./precio-combustible.component.css']
})

export class PrecioCombustibleComponent {
  @Input() tipo_combustible: string | undefined;
  @Input() precio_medio_actual: string | undefined;
  @Input() precio_medio_ayer: string | undefined;
  @Input() tendencia: string | undefined;
  @Input() diferencia: string | undefined;
}
