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
  public routerId: string;
  public routerArea: string;

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
      // Gestisco il toggle della selezione delle immagini (tondi)
      $('img').removeClass('activeImg');
      $('#' + this.routerId).addClass('activeImg');
    }

    // Gestisco il toggle della selezione dei bottoni
    $('#my_styles .btn').on('click', function () {
      $('#my_styles .btn').removeClass('activeBtn');
      $(this).toggleClass('activeBtn');
      if ($(this).attr('id') === 'centroMedico') {
        self.isPalestraSelected = false;
        self.routerArea = 'centro medico';
        self.onShowDetail(self.specCentroList[0]);
      } else {
        self.isPalestraSelected = true;
        self.routerArea = 'palestra';
        self.onShowDetail(self.specPalestraList[0]);
      }
      self.routerId = '1';
    });
    this.onShowDetail(this.specPalestraList[0]);
  }

  loadServizi() {
    this.vertexService.getSpecPalestra().subscribe(data => {
      this.specPalestraList = data;
      if (this.routerArea === 'palestra') {
        this.selectedSpecialista = this.specPalestraList.find(specialista =>
          specialista.id === this.routerId && specialista.area === this.routerArea);
      }
    });
    this.vertexService.getSpecCentro().subscribe(data => {
      this.specCentroList = data;
      if(this.routerArea === 'centro medico') {
        this.selectedSpecialista = this.specCentroList.find(specialista =>
          specialista.id === this.routerId && specialista.area === this.routerArea);
      }
    });
  }
  onShowDetail(specialista: Specialista) {
    this.selectedSpecialista = specialista;
    //this.selectedSpecialista.cv = specialista.cv.ht;
    // Gestisco il toggle della selezione delle immagini (tondi)
    $('img').removeClass('activeImg');
    $('#' + specialista.id).addClass('activeImg');
  }
}
