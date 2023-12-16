import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country';
import { apicommon } from '../Constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class LocationApiService {

  // constructor with dependency
  constructor(private http: HttpClient) {}

  getcountry():Observable<Country[]> {
    return this.http.get<Country[]>(`${apicommon.apiurl}/countries`, 
    {headers:apicommon.headers})
  }

  getStatebycountry(ciso: string): Observable<any>{
    return this.http.get(`${apicommon.apiurl}/countries/${ciso}/states`,
    {headers: apicommon.headers} )
  }

  getCitybystate(ciso: any, siso: any): Observable<any>{
    return this.http.get(`${apicommon.apiurl}/countries/${ciso}/states/${siso}/cities`, {headers: apicommon.headers} )
  }
}
