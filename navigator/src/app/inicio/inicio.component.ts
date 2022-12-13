import { Component } from '@angular/core';
import { Combustible } from 'src/interfaces/combustible';
import { CombustibleService } from 'src/services/combustible.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  combustibles: Combustible[] | null | undefined;

  constructor(private combustibleService: CombustibleService) {
    combustibleService.getCombustibles().then((value) => {
      this.combustibles = value;
    });
  }

}
