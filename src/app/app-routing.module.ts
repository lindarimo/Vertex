import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalestraComponent } from './palestra/palestra.component';
import { ServiziComponent } from './servizi/servizi.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CentromedicoComponent } from './centromedico/centromedico.component';


const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'servizi',
    component: ServiziComponent
  },
  {
    path: 'palestra',
    component: PalestraComponent
  },
  {
    path: 'centromedico',
    component: CentromedicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
