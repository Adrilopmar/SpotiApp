import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  darkmode$: boolean=true

onToggle():void{
 document.body.classList.toggle("dark-mode")
 this.darkmode$ = !this.darkmode$
}
  constructor() { }
}
