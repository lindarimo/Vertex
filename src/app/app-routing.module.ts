import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalestraComponent } from './components/palestra/palestra.component';
import { ServiziComponent } from './components/servizi/servizi.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CentromedicoComponent } from './components/centromedico/centromedico.component';
import { TeamCardsComponent } from './components/teamCards/teamCards.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { SpecialistaComponent } from './components/specialista/specialista.component';

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
