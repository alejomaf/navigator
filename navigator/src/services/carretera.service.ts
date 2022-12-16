import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Carretera } from 'src/interfaces/carretera';
import { Tweets } from 'src/interfaces/tweets';

@Injectable({
  providedIn: 'root'
})
export class CarreteraService {

  _urlAccidentes = "info-incidentes"
  _urlHistoricoAccidentes = "info-historico"
  _urlBusquedaAccidentes = "info-incidentes/carretera/"
  _urlBusquedaNumeroTweets = "info-twitter/carretera/"

  constructor(private http: HttpClient) { }

  async getAccidentes(): Promise<Carretera[] | null> {
    var carreteras: Carretera[] | null;
    return new Promise<Carretera[] | null>((resolve) => this.http.get(this._urlAccidentes).subscribe((
      res: any
    ) => {
      carreteras = res;
      resolve(carreteras);
    }));
  }

  async buscarAccidente(nombreCarretera: string): Promise<Carretera | null> {
    var carretera: Carretera | null;
    return new Promise<Carretera | null>((resolve) => this.http.get(this._urlBusquedaAccidentes + nombreCarretera).subscribe((
      res: any
    ) => {
      if (res == '[]') resolve(null);
      else {
        carretera = res[0];
        resolve(carretera);
      }
    }));
  }

  async getNumberOfTweets(nombreCarretera: string): Promise<Tweets> {
    var tweets: Tweets;
    return new Promise<Tweets>((resolve) => this.http.get(this._urlBusquedaNumeroTweets + nombreCarretera).subscribe((
      res: any
    ) => {
      tweets = res;
      resolve(tweets);
    }));
  }

  async getHistoricoAccidentes(): Promise<Carretera[] | null> {
    var carreteras: Carretera[] | null;
    return new Promise<Carretera[] | null>((resolve) => this.http.get(this._urlHistoricoAccidentes).subscribe((
      res: any
    ) => {
      carreteras = res;
      resolve(carreteras);
    }));
  }

}
