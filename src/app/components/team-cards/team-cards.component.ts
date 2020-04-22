import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VertexService } from '../../vertex.service';
@Component({
  selector: 'app-team-cards',
  templateUrl: './team-cards.component.html',
  styleUrls: ['./team-cards.component.scss']
})
export class TeamCardsComponent implements OnInit {

  @Input() specialistiList: any;
  @Input() selectedSpecialista: any;
  public status = false;

  constructor(
    private vertexService: VertexService ) { }

  ngOnInit() {
    this.loadServizi();
  }
  onSelect(specialista): void {
    this.selectedSpecialista = specialista;
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
