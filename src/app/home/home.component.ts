import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor
  (
    private http:HttpClient
    ) { }

  ngOnInit(): void {
  }
  spoti:string = 'https://api.spotify.com'
  request(){
   return this.http.get(this.spoti).subscribe(data=>console.log(data))
  }

}
