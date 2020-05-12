import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { Specialista } from 'src/app/model';
@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  constructor() { }
  @Input() specPalestraList: Specialista[];
  @Input() specCentroList: Specialista[];

  public selectedSpecialista: Specialista;
  public isPalestraSelected: boolean;

  ngOnInit() {
    this.isPalestraSelected = true;
    const self = this;
    // Gestisco la selezione dei bottoni
    $('#my_styles .btn').on('click', function() {
      $('#my_styles .btn').removeClass('activeBtn');
      $(this).toggleClass('activeBtn');
      if ($(this).attr('id') === 'centroMedico') {
        self.isPalestraSelected = false;
      } else {
        self.isPalestraSelected = true;
      }
    });
    // Gestisco la visualizzazione del fumetto alla selezione di uno specialista
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
