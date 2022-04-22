import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotiapiService {

  constructor( private http:HttpClient) {
  }

  bearerToken:any;

  async getBearer(){
   let headers = {
     "Content-Type": "application/x-www-form-urlencoded"
    }
    let bodyContent = "grant_type=client_credentials&client_id=db619487b44f4964938bd16bf1ec6fb9&client_secret=19c962a867e44768b46f4b0bc3f8d22d";
    let token:any = await this.http.post("https://accounts.spotify.com/api/token",bodyContent,{headers}).toPromise()
    return this.bearerToken= token.access_token
   }

  getQuery(query:string){
    const url= `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.bearerToken 
    });
    return this.http.get(url,{headers})
  }
  
  getNewReleases(){
  return this.getQuery(`browse/new-releases?limit=40`)
          .pipe(map((data:any)=> data['albums'].items));
  }
  
  getArtist(find:string){
    return this.getQuery(`search?q='${find}&type=artist&limit=20`)
            .pipe(map((data:any)=>data['artists'].items));
  }
}