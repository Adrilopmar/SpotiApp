import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkmodeService } from '../services/darkmode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private DarkmodeSVC:DarkmodeService) { }
  darkMode: any=this.DarkmodeSVC.darkmode$

  onToggle():void{
    this.DarkmodeSVC.onToggle()
  }


  ngOnInit(): void {
  }

}
