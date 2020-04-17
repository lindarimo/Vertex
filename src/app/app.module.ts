import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { ServiziComponent } from './components/servizi/servizi.component';
import { PalestraComponent } from './components/palestra/palestra.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CentromedicoComponent } from './components/centromedico/centromedico.component';
import { TeamCardsComponent } from './components/teamCards/teamCards.component';
import { SpecialistaComponent } from './components/specialista/specialista.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    ServiziComponent,
    PalestraComponent,
    CentromedicoComponent,
    TeamCardsComponent,
    SpecialistaComponent,
    TeamPageComponent,
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
    ServiziComponent,
    PalestraComponent,
    CentromedicoComponent,
    TeamCardsComponent,
    SpecialistaComponent,
    TeamPageComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
