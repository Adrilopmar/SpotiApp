import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotiapiService {

  constructor( private http:HttpClient) { }
token_url ='https://accounts.spotify.com/api/token';
url= 'https://api.spotify.com/v1/browse/new-releases';



  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCknB1TTyLXRrcWHq0lGz6lL1emhZmH54y1Bg-39mcPnSK71b21yDH4Ri3IvVzvOOS7lmmgCq_2oSaPHm8'
    });
  return this.http.get(this.url, {headers})
  }

}
