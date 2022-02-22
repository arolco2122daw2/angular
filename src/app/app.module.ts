import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { SeriesComponent } from './series/series.component';
import { PelisComponent } from './peliculas/pelis.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { FiltrarComponent } from './filtrar/filtrar.component';

import { FilterPipe } from './filtrar/filtrar.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent,
    SeriesComponent,
    PelisComponent,
    CarouselComponent,
    InicioComponent,
    FiltrarComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
   // NgModel

  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
