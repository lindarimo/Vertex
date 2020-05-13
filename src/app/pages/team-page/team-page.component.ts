import { Component, OnInit, AfterViewInit } from '@angular/core';
import { VertexService } from 'src/app/vertex.service';
import { Specialista } from 'src/app/model';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  public specPalestraList: Specialista[];
  public specCentroList: Specialista[];
  public selectedSpecialista: Specialista;
  public isPalestraSelected: boolean;
  private routerId: string;
  private routerArea: string;

  constructor(
    private vertexService: VertexService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadServizi();

    this.routerId = this.route.snapshot.paramMap.get('id');
    this.routerArea = this.route.snapshot.paramMap.get('area');
    console.log(this.routerId, this.routerArea);

    const self = this;

    // Gestisco il fatto che all'accesso in pagina sia selezionato il bottone corretto
    if (this.routerArea === 'palestra') {
      this.isPalestraSelected = true;
      $('#palestra').addClass('activeBtn');
    } else {
      this.isPalestraSelected = false;
      $('#centroMedico').addClass('activeBtn');
    }

    // Gestisco il toggle della selezione dei bottoni
    $('#my_styles .btn').on('click', function () {
      $('#my_styles .btn').removeClass('activeBtn');
      $(this).toggleClass('activeBtn');
      if ($(this).attr('id') === 'centroMedico') {
        self.isPalestraSelected = false;
        self.onShowDetail(self.specCentroList[0]);
      } else {
        self.isPalestraSelected = true;
        self.onShowDetail(self.specPalestraList[0]);
      }
    });
  }

  loadServizi() {
    this.vertexService.getSpecPalestra().subscribe(data => {
      this.specPalestraList = data;
      this.selectedSpecialista = this.specPalestraList.find(specialista => specialista.id === this.routerId);
    });
    this.vertexService.getSpecCentro().subscribe(data => {
      this.specCentroList = data;
      this.selectedSpecialista = this.specPalestraList.find(specialista => specialista.id === this.routerId);
    });
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
