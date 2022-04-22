import { Component, OnInit } from '@angular/core';
import { SpotiapiService } from '../services/spotiapi.service';

@Component({
  selector: 'app-newreleases',
  templateUrl: './newreleases.component.html',
  styleUrls: ['./newreleases.component.css']
})
export class NewreleasesComponent implements OnInit {

  constructor(private spotiAPI: SpotiapiService) { 
    
  }

  async ngOnInit(){
   await this.spotiAPI.getBearer()
   await  this.getNewReleases()
  }

  newReleases:any[] = [];
  
  async getNewReleases(){
   this.spotiAPI.getNewReleases()
   .subscribe((data:any)=>{
     this.newReleases = data})
  }
 
}
