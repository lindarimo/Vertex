import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalestraComponent } from './components/servizi-detail/palestra/palestra.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CentromedicoComponent } from './components/servizi-detail/centromedico/centromedico.component';
import { TeamCardsComponent } from './components/team-cards/team-cards.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { SpecialistaComponent } from './components/specialista/specialista.component';
import { ServiziCardsComponent } from './components/servizi-cards/servizi-cards.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'servizi',
    component: ServiziCardsComponent
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
    path: 'team-page/:id',
    component: TeamPageComponent
  },
  // {
  //   path: 'team-page/:id',
  //   component: SpecialistaComponent
  // },
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
