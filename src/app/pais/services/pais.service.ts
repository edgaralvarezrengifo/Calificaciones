import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _servicioURL: string = 'https://restcountries.com/v2';

  get httpParams()
  {
    return new HttpParams().set('fields','name,capital,alpha2Code,flags,population');
  }

  constructor(private http: HttpClient) { }

  getPais(nombrePais:string): Observable<Country[]>
  {
    const url = `${this._servicioURL}/name/${nombrePais}`;
    return this.http.get<Country[]>(url, {params:this.httpParams}).pipe(tap(console.log));
  }

  getCapital(nombreCapital:string): Observable<Country[]>
  {
    const url = `${this._servicioURL}/capital/${nombreCapital}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisAlpha(id:string): Observable<Country>
  {
    const url = `${this._servicioURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  getPaisesRegion(region:string): Observable<Country[]>
  {
    const url = `${this._servicioURL}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
}
