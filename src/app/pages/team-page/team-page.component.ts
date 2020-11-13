import { Component, OnInit, AfterViewInit } from '@angular/core';
import { VertexService } from 'src/app/services/vertex.service';
import { Specialista } from 'src/app/models/model';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  public specialistiList: Specialista[];
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
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    // tslint:disable-next-line:max-line-length
    this.title.setTitle('Vertex Arese - Palestra e centro medico polispecialistico | i nostri specialisti');
    // tslint:disable-next-line:max-line-length
    this.meta.updateTag({ name: 'description', content: 'I nostri specialisti: Marco Galli (ortopedico), Carlo Perfetti (ortopedico), Eduardo Ferrario (fisioterapista), Daniela Cardella (fisioterapista), Gaia Fulginiti (osteopata), Francesco Botto (osteopata), Monica Dellupi (psicoterapeuta), Stefania Tancini (nutrizionista)' });

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
          self.router.navigate(['/team-page', self.specCentroList[0].id, 'centro medico', 'Ortopedia', 'false']));
      } else {
        self.isPalestraSelected = true;
        self.routerArea = 'palestra';
        self.onShowDetail(self.specPalestraList[0]);
        self.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          self.router.navigate(['/team-page', self.specPalestraList[0].id, 'palestra', 'Personal training', 'false']));
      }
    });
  }

  loadServizi() {
    this.vertexService.getSpecialisti().subscribe(data => {
      this.specCentroList = data.filter(x => x.area === 'centro medico');
      this.specPalestraList = data.filter(x => x.area === 'palestra');
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
      } else if (this.routerArea === 'palestra' && this.routerFilter === 'false') {
        this.selectedSpecialista = this.specPalestraList.find(specialista =>
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
        this.router.navigate(['/team-page', this.selectedSpecialista.id, 'palestra', this.selectedSpecialista.servizio, 'false']));
    } else if (this.routerArea === 'centro medico') {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/team-page', this.selectedSpecialista.id, 'centro medico', this.selectedSpecialista.servizio, 'false']));
    }
  }
}
