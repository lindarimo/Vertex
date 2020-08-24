import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { ServiziCardsComponent } from './components/servizi-cards/servizi-cards.component';
import { WherePageComponent } from './pages/where-page/where-page.component';
import { CookieService } from 'ngx-cookie-service';
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us.component';
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
    TeamPageComponent,
    WherePageComponent,
    WorkWithUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AngularFontAwesomeModule,
  ],
  providers: [CookieService],
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
    TeamPageComponent,
    WherePageComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
