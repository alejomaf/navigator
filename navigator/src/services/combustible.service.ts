import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Combustible } from 'src/interfaces/combustible';

@Injectable({
  providedIn: 'root'
})
export class CombustibleService {

  _url = "info-gasolina/diferencia"

  constructor(private http: HttpClient) { }

  async getCombustibles(): Promise<Combustible[] | null> {
    var carretera: Combustible[] | null;
    return new Promise<Combustible[] | null>((resolve) => this.http.get(this._url).subscribe((
      res: any
    ) => {
      carretera = res;
      resolve(carretera);
    }));
  }

}
