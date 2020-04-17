import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VertexService } from '../../vertex.service';
@Component({
  selector: 'app-team-cards',
  templateUrl: './teamCards.component.html',
  styleUrls: ['./teamCards.component.scss']
})
export class TeamCardsComponent implements OnInit {

  @Input() serviziList: any;
  @Input() selectedServizio: any;
  public status = false;

  constructor(
    private vertexService: VertexService ) { }

  ngOnInit() {
    this.loadServizi();
  }
  onSelect(servizio): void {
    this.selectedServizio = servizio;
  }
  toggleDiv() {
    this.status = !this.status;
  }
  loadServizi() {
    // this.vertexService.getServizi().subscribe(data => {
    //   console.log(data);
    //   this.serviziList = data;
    // });
  }
}
