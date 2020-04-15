import { Component, OnInit, Input } from '@angular/core';
import { TeamCardsComponent } from '../teamCards.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-specialista',
  templateUrl: './specialista.component.html',
  styleUrls: ['./specialista.component.scss']
})

export class SpecialistaComponent implements OnInit {
  private id;
  public serviziList;
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.loadServizi();
  }
  async loadServizi() {
    if (!localStorage.getItem('Lista di servizi')) {
      this.serviziList = await this.httpClient.get('assets/servizi.json').toPromise();
      console.log(this.serviziList);
      localStorage.setItem('Lista di servizi', JSON.stringify(this.serviziList));
    }
  }
}
