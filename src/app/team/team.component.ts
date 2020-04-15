import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public serviziList;
  public status = false;
  public selectedServizio;

  toggleDiv() {
    this.status = !this.status;
  }

  constructor(
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('assets/servizi.json').subscribe(data => {
      console.log(data);
      this.serviziList = data;
    });
  }
  onSelect(servizio): void {
    this.selectedServizio = servizio;
  }

}
