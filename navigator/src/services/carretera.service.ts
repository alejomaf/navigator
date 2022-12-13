import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Carretera } from 'src/interfaces/carretera';

@Injectable({
  providedIn: 'root'
})
export class CarreteraService {

  _url = "api/carretera"

  constructor(private http: HttpClient) { }

  async getCarretera(nombreCarretera: string): Promise<Carretera|null> {
    var carretera : Carretera | null;
    //let header = new HttpHeaders(({ "usertoken": this.userService.getToken() }));
    return new Promise<Carretera|null>((resolve) => this.http.get(this._url + "/" + nombreCarretera).subscribe((
      res: any
    ) => {
      if (res.successfull) carretera = res.data;
      else carretera = null;
      resolve(carretera);
    }));
  }

}
