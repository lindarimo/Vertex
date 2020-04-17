import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { ServiziComponent } from './servizi/servizi.component';
import { PalestraComponent } from './palestra/palestra.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CentromedicoComponent } from './centromedico/centromedico.component';
import { TeamCardsComponent } from './teamCards/teamCards.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { SpecialistaComponent } from './team-page/specialista/specialista.component';
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
