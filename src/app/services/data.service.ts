import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Weather } from "../WeatherData";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // url1 ='http://api.openweathermap.org/data/2.5/find';
  // url2='http://api.openweathermap.org/data/2.5/weather';
  
  url3='https://api.openweathermap.org/data/2.5/onecall'
  apikey='8cfe490349b17fd097cac5cf01049483';
  
  // cnt=40;

  constructor( private http: HttpClient) { }

  // getWeatherDataByCoords(lat:any,lon:any){
    
  //   let params= new HttpParams()
  //   .set('lat',lat)
  //   .set('lon',lon)
  //   .set('units', 'metric')
  //   .set('appid',this.apikey)

  //   return this.http.get(this.url2,{params})
  // }

  // getWeatherDataByCity(lat:any,lon:any):Observable<Weather[]>{
    
  //   let params= new HttpParams()
  //   .set('lat',lat)
  //   .set('lon',lon)
  //   .set('cnt', this.cnt)
  //   .set('appid',this.apikey)

  //   return this.http.get<Weather>(this.url1,{params})
  //   .pipe(
  //     map((response:Weather)=>response.list.map((resp:any)=>resp.name))
  //   )
  // }

  getForecastOneCallApi(lat:any,lon:any){
    let params= new HttpParams()
    .set('lat',lat)
    .set('lon',lon)
    .set('units', 'metric')
    .set('exclude','minutely')
    .set('appid',this.apikey)

    return this.http.get(this.url3,{params})
  }

  
}
