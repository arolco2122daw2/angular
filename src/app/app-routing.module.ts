import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltrarComponent } from './filtrar/filtrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PelisComponent } from './peliculas/pelis.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [    {
  path: 'home', component: InicioComponent
},
{
  path: 'pelis', component: PelisComponent
},
{
  path: 'series', component: SeriesComponent
},
{
  path: 'biblioteca', component: FiltrarComponent
},
{
  path: '',redirectTo: '/home', pathMatch: 'full'
},
{
  path: '**', redirectTo: '/series', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
