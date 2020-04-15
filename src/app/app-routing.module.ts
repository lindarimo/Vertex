import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalestraComponent } from './palestra/palestra.component';
import { ServiziComponent } from './servizi/servizi.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CentromedicoComponent } from './centromedico/centromedico.component';
import { ActivatedRoute } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { SpecialistaComponent } from './team/specialista/specialista.component';

const routes: Routes = [
  {
    path: '',
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
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'team/:id',
    component: SpecialistaComponent
  },
  /* {
    path: '**',
    component: PageNotFoundComponent
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
