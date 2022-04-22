import { Component, OnInit } from '@angular/core';
import { SpotiapiService } from '../services/spotiapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private spotiAPI: SpotiapiService) { }

  ngOnInit(): void {
  }
  searchedArtist:any[]=[]
  
  search(find:string){
  this.spotiAPI.getArtist(find)
  .subscribe((data:any)=>{
    this.searchedArtist=data});
  }

}
