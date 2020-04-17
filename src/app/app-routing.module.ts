import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalestraComponent } from './palestra/palestra.component';
import { ServiziComponent } from './servizi/servizi.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CentromedicoComponent } from './centromedico/centromedico.component';
import { TeamCardsComponent } from './teamCards/teamCards.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { SpecialistaComponent } from './team-page/specialista/specialista.component';

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
    path: 'team-cards',
    component: TeamCardsComponent
  },
  {
    path: 'team-page',
    component: TeamPageComponent
  },
  {
    path: 'team-page/:id',
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
