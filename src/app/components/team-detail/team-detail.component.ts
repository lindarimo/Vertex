import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { Specialista } from 'src/app/model';
@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  @Input() specialistiList: Specialista[];

  public selectedSpecialista: Specialista;

  // detailOpen = false;
  // showDetail = false;
  // toggleNavbar() {
  //   this.detailOpen = !this.detailOpen;
  // }
  constructor() { }

  ngOnInit() {
    if (!this.selectedSpecialista) {
      $('.arrowUp').hide();
      $('#dettaglioSpecialista').hide();
    }
  }

  onShowDetail(specialista: Specialista) {
    if (this.selectedSpecialista && this.selectedSpecialista.id === specialista.id) {
      this.selectedSpecialista = undefined;
      $('#dettaglioSpecialista').hide();
      $('.arrowUp').hide();
    } else {
      this.selectedSpecialista = specialista;
      $('#dettaglioSpecialista').show();
      $('.arrowUp').show();
    }
  }
}
