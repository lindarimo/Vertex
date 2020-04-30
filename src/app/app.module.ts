import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { PalestraComponent } from './components/servizi-detail/palestra/palestra.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CentromedicoComponent } from './components/servizi-detail/centromedico/centromedico.component';
import { TeamCardsComponent } from './components/team-cards/team-cards.component';
import { SpecialistaComponent } from './components/specialista/specialista.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { ServiziCardsComponent } from './components/servizi-cards/servizi-cards.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { ServiziPageComponent } from './pages/servizi-page/servizi-page.component';
import { ServiziDetailComponent } from './components/servizi-detail/servizi-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    ServiziCardsComponent,
    PalestraComponent,
    CentromedicoComponent,
    TeamCardsComponent,
    SpecialistaComponent,
    TeamPageComponent,
    TeamDetailComponent,
    ServiziPageComponent,
    ServiziDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    ServiziCardsComponent,
    PalestraComponent,
    CentromedicoComponent,
    TeamCardsComponent,
    SpecialistaComponent,
    TeamPageComponent,
    TeamDetailComponent,
    ServiziPageComponent,
    ServiziDetailComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
