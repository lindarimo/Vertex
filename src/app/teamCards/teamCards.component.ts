import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-team-cards',
  templateUrl: './teamCards.component.html',
  styleUrls: ['./teamCards.component.scss']
})
export class TeamCardsComponent implements OnInit {

  public serviziList;
  public status = false;
  public selectedServizio;

  toggleDiv() {
    this.status = !this.status;
  }

  constructor(
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.loadServizi();
  }
  onSelect(servizio): void {
    this.selectedServizio = servizio;
  }
  async loadServizi() {
    this.serviziList = await this.httpClient.get('assets/servizi.json').toPromise();
    console.log(this.serviziList);
    localStorage.setItem('Lista di servizi', JSON.stringify(this.serviziList));
  }
}
