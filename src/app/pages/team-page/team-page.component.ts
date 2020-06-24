import { Component, OnInit, AfterViewInit } from '@angular/core';
import { VertexService } from 'src/app/vertex.service';
import { Specialista } from 'src/app/model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
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
  public routerServizio: string;
  public routerFilter: string;
  public specialistiFiltered: Specialista[];
  public titleText: string;
  activatedRoute: ActivatedRoute;

  constructor(
    private vertexService: VertexService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.routerId = this.route.snapshot.paramMap.get('id');
    this.routerArea = this.route.snapshot.paramMap.get('area');
    this.routerServizio = this.route.snapshot.paramMap.get('servizio');
    this.routerFilter = this.route.snapshot.paramMap.get('isSpecFiltered');

    this.loadServizi();
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
    $('#my_styles .btn-lg').on('click', function () {
      $('#my_styles .btn-lg').removeClass('activeBtn');
      $(this).toggleClass('activeBtn');
      if ($(this).attr('id') === 'centroMedico') {
        self.isPalestraSelected = false;
        self.routerArea = 'centro medico';
        self.onShowDetail(self.specCentroList[0]);
        self.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          self.router.navigate(['/team-page', '1', 'centro medico', 'Ortopedia', 'false']));
      } else {
        self.isPalestraSelected = true;
        self.routerArea = 'palestra';
        self.onShowDetail(self.specPalestraList[0]);
        self.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          self.router.navigate(['/team-page', '1', 'palestra', 'Personal training', 'false']));
      }
      self.routerId = '1';
    });
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
      // Controllo se devo visualizzare solo una categoria di specialisti (filtro)
      if (this.routerFilter === 'true') {
        if (this.routerArea === 'centro medico') {
          this.selectedSpecialista = this.specCentroList.find(specialista =>
            specialista.id === this.routerId && specialista.area === this.routerArea);
          this.specCentroList = this.specCentroList.filter(specialista =>
            specialista.servizio === this.routerServizio);
        } else if (this.routerArea === 'palestra') {
          this.selectedSpecialista = this.specPalestraList.find(specialista =>
            specialista.id === this.routerId && specialista.area === this.routerArea);
        }
        // Gestisco i casi in cui devo visualizzare gli specialisti in base ad un determinato servizi.
        // Casistica in cui clicco dalla pagina del centro medico un determinato servizio
        switch (this.selectedSpecialista.servizio) {
          case 'Fisioterapia': {
            this.titleText = 'Il nostro team di fisioterapisti';
            break;
          }
          case 'Massoterapia': {
            this.titleText = 'Il nostro team di massoterapisti';
            break;
          }
          case 'Nutrizione': {
            this.titleText = 'Il nostro team di nutrizionisti';
            break;
          }
          case 'Ortopedia': {
            this.titleText = 'Il nostro team di ortopedici';
            break;
          }
          case 'Osteopatia': {
            this.titleText = 'Il nostro team di osteopati';
            break;
          }
          case 'Personal training': {
            this.titleText = 'Il nostro team di personal trainer';
            break;
          }
        }
        // Nascondo i bottoni palestra e centro medico
        $('#my_styles .btn-lg').hide();
      } else if (this.routerArea === 'centro medico' && this.routerFilter === 'false') {
        this.selectedSpecialista = this.specCentroList.find(specialista =>
          specialista.id === this.routerId && specialista.area === this.routerArea);
      }
    });
  }

  onShowDetail(specialista: Specialista) {
    this.selectedSpecialista = specialista;
    // Gestisco il toggle della selezione delle immagini (tondi)
    $('img').removeClass('activeImg');
    $('#' + specialista.id).addClass('activeImg');
  }

  viewAllSpecialisti() {
    if (this.routerArea === 'palestra') {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/team-page', '1', 'palestra', 'Personal training', 'false']));
    } else if (this.routerArea === 'centro medico') {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/team-page', '1', 'centro medico', 'Ortopedia', 'false']));
    }
  }
}
