import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotiapiService } from '../services/spotiapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private spotiAPI: SpotiapiService) { }

  ngOnInit(): void {
  }
  newReleases:any[] = [];
  getBearer(){
    return 
  }

  getNewReleases(){
   this.spotiAPI.getNewReleases()
   .subscribe((data:any)=>{
     console.log(data.albums.items)
     this.newReleases = data.albums.items})
  }
conse(){
  console.log(this.newReleases)
}
}
