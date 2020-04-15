import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { SpecialistaComponent } from './teamCards/specialista/specialista.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
