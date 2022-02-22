import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { 
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';


import { Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { PelisComponent } from '../peliculas/pelis.component';
import { SeriesComponent } from '../series/series.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  animations: [
    trigger('animacion', [
      state('inactive', style({
          backgroundColor: 'black',
          color: "#FFFFFF"
      })),
      state('active', style({
        backgroundColor: '#CF8100',
        color: "#000000"
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ]),
]
  
})
export class NavbarComponent implements OnInit {

  public state:string = "inactive";

  


constructor() {}



ngOnInit() {}

togleBoton() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
}

}