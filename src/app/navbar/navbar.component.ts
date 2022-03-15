import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkmodeService } from '../services/darkmode.service';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private DarkmodeSVC:DarkmodeService) { 
    
  }
  darkMode: any=this.DarkmodeSVC.darkmode$
  faMoon=faMoon
  faSun=faSun
  onToggle():void{
    this.DarkmodeSVC.onToggle()
    this.darkMode =this.DarkmodeSVC.darkmode$
  }


  ngOnInit(): void {
  }

}
