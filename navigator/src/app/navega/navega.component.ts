import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Carretera } from 'src/interfaces/carretera';
import { Tweets } from 'src/interfaces/tweets';
import { CarreteraService } from 'src/services/carretera.service';

@Component({
  selector: 'app-navega',
  templateUrl: './navega.component.html',
  styleUrls: ['./navega.component.css']
})
export class NavegaComponent {
  busqueda = new FormControl();
  tweets: Tweets = { tweetScore: "0" };
  accidente: Carretera = { advertencia: "", carretera: "", descripcion: "", kmDestino: "", kmOrigen: "", sentido: "" };


  constructor(private carreteraService: CarreteraService) {

  }
  buscarCarretera() {
    if (this.busqueda.value == "") return;
    this.carreteraService.buscarAccidente(this.busqueda.value).then((value) => {
      if (value == null) {
        this.accidente = { advertencia: "", carretera: "Carretera no encontrada", descripcion: "", kmDestino: "", kmOrigen: "", sentido: "" };
      } else {
        this.accidente = value;
        this.carreteraService.getNumberOfTweets(this.busqueda.value).then((value) => {
          this.tweets = value ?? 0;
        });
      }

    });
  }
}

