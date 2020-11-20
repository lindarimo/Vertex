import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalestraComponent } from './components/servizi-detail/palestra/palestra.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CentromedicoComponent } from './components/servizi-detail/centromedico/centromedico.component';
import { TeamCardsComponent } from './components/team-cards/team-cards.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { ServiziCardsComponent } from './components/servizi-cards/servizi-cards.component';
import { WherePageComponent } from './pages/where-page/where-page.component';
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomepageComponent, pathMatch: 'full'
  },
  {
    path: 'servizi', component: ServiziCardsComponent, pathMatch: 'full'
  },
  {
    path: 'palestra', component: PalestraComponent, pathMatch: 'full'
  },
  {
    path: 'centromedico', component: CentromedicoComponent, pathMatch: 'full'
  },
  {
    path: 'team-cards', component: TeamCardsComponent, pathMatch: 'full'
  },
  {
    path: 'team-page/:id/:area/:servizio/:isSpecFiltered', runGuardsAndResolvers: 'always', component: TeamPageComponent, pathMatch: 'full'
  },
  {
    path: 'where-page', component: WherePageComponent, pathMatch: 'full'
  },
  {
    path: 'work-with-us', component: WorkWithUsComponent, pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
