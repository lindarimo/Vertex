import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VertexService } from '../../services/vertex.service';
import { Specialista } from 'src/app/models/model';
@Component({
  selector: 'app-team-cards',
  templateUrl: './team-cards.component.html',
  styleUrls: ['./team-cards.component.scss']
})
export class TeamCardsComponent implements OnInit {

  @Input() specialistiList: Specialista[];
  @Input() selectedSpecialista: Specialista;
  public status = false;

  constructor() { }

  ngOnInit() {
  }
  onSelect(specialista): void {
    this.selectedSpecialista = specialista;
  }
  toggleDiv() {
    this.status = !this.status;
  }
}
